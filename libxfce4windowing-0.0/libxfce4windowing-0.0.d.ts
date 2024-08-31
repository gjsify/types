/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
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

export namespace Libxfce4windowing {
    /**
     * Libxfce4windowing-0.0
     */

    /**
     * The type of the application.
     *
     * See #xfw_set_client_type() for details.
     */

    /**
     * The type of the application.
     *
     * See #xfw_set_client_type() for details.
     */
    export namespace ClientType {
        export const $gtype: GObject.GType<ClientType>;
    }

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
    /**
     * Represents a direction, either of position ("This workspace is to the left
     * of the current workspace") or movement ("Move this window to the workspace to
     * the right of its current workspace").
     */

    /**
     * Represents a direction, either of position ("This workspace is to the left
     * of the current workspace") or movement ("Move this window to the workspace to
     * the right of its current workspace").
     */
    export namespace Direction {
        export const $gtype: GObject.GType<Direction>;
    }

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
     */
    class Error extends GLib.Error {
        static $gtype: GObject.GType<Error>;

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
        _init(...args: any[]): void;
    }

    /**
     * Enumeration describing the windows type or function.
     */

    /**
     * Enumeration describing the windows type or function.
     */
    export namespace WindowType {
        export const $gtype: GObject.GType<WindowType>;
    }

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
     */

    /**
     * Represents the windowing environment that is currently running.  Note that
     * for an application running on XWayland, this will return #XFW_WINDOWING_X11.
     */
    export namespace Windowing {
        export const $gtype: GObject.GType<Windowing>;
    }

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
     * @returns %NULL if the library is compatible with the given version, or a string describing the version mismatch. The returned string is owned by the library and must not be freed or modified by the caller.
     */
    function check_version(required_major: number, required_minor: number, required_micro: number): string | null;
    function error_quark(): GLib.Quark;
    function marshal_VOID__FLAGS_FLAGS(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    /**
     * Retrieves the #XfwScreen instance corresponding to the default #GdkScreen.
     * @returns an #XfwScreen instance, with a reference owned by the caller.
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
     * @param client_type A #XfwClientType
     */
    function set_client_type(client_type: ClientType): void;
    /**
     * Determines the windowing environment that is currently active.
     * @returns A value from the #XfwWindowing enum.
     */
    function windowing_get(): Windowing;
    interface CreateWorkspaceFunc {
        (group: WorkspaceGroup, name: string): boolean;
    }
    interface MoveViewportFunc {
        (group: WorkspaceGroup, x: number, y: number): boolean;
    }
    interface SetLayoutFunc {
        (group: WorkspaceGroup, rows: number, columns: number): boolean;
    }
    /**
     * Flags bitfield that describes actions that can be taken on the window.
     */

    /**
     * Flags bitfield that describes actions that can be taken on the window.
     */
    export namespace WindowCapabilities {
        export const $gtype: GObject.GType<WindowCapabilities>;
    }

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
    /**
     * A flags bitfield representing various states the window can hold.
     */

    /**
     * A flags bitfield representing various states the window can hold.
     */
    export namespace WindowState {
        export const $gtype: GObject.GType<WindowState>;
    }

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
    /**
     * Flags enum representing a bitfield of actions that can be performed on this
     * workspace.
     */

    /**
     * Flags enum representing a bitfield of actions that can be performed on this
     * workspace.
     */
    export namespace WorkspaceCapabilities {
        export const $gtype: GObject.GType<WorkspaceCapabilities>;
    }

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
    /**
     * Flags enum representing a bitfield of actions that can be performed on this
     * workspace group.
     */

    /**
     * Flags enum representing a bitfield of actions that can be performed on this
     * workspace group.
     */
    export namespace WorkspaceGroupCapabilities {
        export const $gtype: GObject.GType<WorkspaceGroupCapabilities>;
    }

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
    /**
     * Flags enum representing a bitfield that describes the workspace's state.
     */

    /**
     * Flags enum representing a bitfield that describes the workspace's state.
     */
    export namespace WorkspaceState {
        export const $gtype: GObject.GType<WorkspaceState>;
    }

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
    module Application {
        // Signal callback interfaces

        interface IconChanged {
            (): void;
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

    abstract class Application extends GObject.Object {
        static $gtype: GObject.GType<Application>;

        // Properties

        /**
         * The application class id.
         */
        get class_id(): string;
        /**
         * The application class id.
         */
        get classId(): string;
        /**
         * The #GIcon that represents this application.
         */
        get gicon(): Gio.Icon;
        /**
         * The list of #XfwApplicationInstance belonging to the application.
         */
        get instances(): any;
        /**
         * The application name.
         */
        get name(): string;
        /**
         * The list of #XfwWindow belonging to the application.
         */
        get windows(): any;

        // Constructors

        constructor(properties?: Partial<Application.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'icon-changed', callback: (_source: this) => void): number;
        connect_after(signal: 'icon-changed', callback: (_source: this) => void): number;
        emit(signal: 'icon-changed'): void;

        // Methods

        /**
         * Fetches this application's class id. On X11 this should be the class name of
         * the [WM_CLASS property](https://x.org/releases/X11R7.6/doc/xorg-docs/specs/ICCCM/icccm.html#wm_class_property).
         * On Wayland, it's the [application ID](https://wayland.app/protocols/wlr-foreign-toplevel-management-unstable-v1#zwlr_foreign_toplevel_handle_v1:event:app_id),
         * which should correspond to the basename of the application's desktop file.
         * @returns A UTF-8 formatted string, owned by @app.
         */
        get_class_id(): string;
        /**
         * Fetches `app'`s icon as a size-independent #GIcon.  If an icon cannot be
         * found, a #GIcon representing a fallback icon will be returned.  Whether or
         * not the returned icon is a fallback icon can be determined using
         * #xfw_application_icon_is_fallback().
         * @returns a #GIcon, owned by @app.
         */
        get_gicon(): Gio.Icon;
        /**
         * Fetches `app'`s icon.  If `app` has no icon, a fallback icon may be
         * returned.  Whether or not the returned icon is a fallback icon can be
         * determined using #xfw_application_icon_is_fallback().
         * @param size the desired icon size.
         * @param scale the UI scale factor.
         * @returns a #GdkPixbuf, owned by @app, or %NULL if @app has no icon and a fallback cannot be rendered.
         */
        get_icon(size: number, scale: number): GdkPixbuf.Pixbuf | null;
        /**
         * Finds the #XfwApplicationInstance to which `window` belongs.
         * @param window the application window you want to get the instance of.
         * @returns The #XfwApplicationInstance to which @window belongs, or %NULL if @window does not belong to @app, or if listing instances is not supported on the windowing environment in use. The returned #XfwApplicationInstance is owned by @app.
         */
        get_instance(window: Window): ApplicationInstance | null;
        /**
         * Lists all instances of the application.
         * @returns The list of #XfwApplicationInstance of @app, or %NULL if listing instances is not supported on the windowing environment in use. The list and its contents are owned by @app.
         */
        get_instances(): ApplicationInstance[] | null;
        /**
         * Fetches this application's human-readable name.
         * @returns A UTF-8 formatted string, owned by @app.
         */
        get_name(): string;
        /**
         * Lists all windows belonging to the application.
         * @returns The list of #XfwWindow belonging to @app. The list and its contents are owned by @app.
         */
        get_windows(): Window[];
        /**
         * Determines if `app` does not have an icon, and thus a fallback icon
         * will be returned from #xfw_application_get_icon() and
         * #xfw_application_get_gicon().
         * @returns %TRUE or %FALSE, depending on if @app's icon uses a fallback icon or not.
         */
        icon_is_fallback(): boolean;
    }

    module ApplicationWayland {
        // Constructor properties interface

        interface ConstructorProps extends Application.ConstructorProps {
            app_id: string;
            appId: string;
        }
    }

    class ApplicationWayland extends Application {
        static $gtype: GObject.GType<ApplicationWayland>;

        // Properties

        get app_id(): string;
        get appId(): string;

        // Constructors

        constructor(properties?: Partial<ApplicationWayland.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module ApplicationX11 {
        // Constructor properties interface

        interface ConstructorProps extends Application.ConstructorProps {}
    }

    class ApplicationX11 extends Application {
        static $gtype: GObject.GType<ApplicationX11>;

        // Constructors

        constructor(properties?: Partial<ApplicationX11.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module ScreenWayland {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Screen.ConstructorProps {}
    }

    class ScreenWayland extends GObject.Object implements Screen {
        static $gtype: GObject.GType<ScreenWayland>;

        // Constructors

        constructor(properties?: Partial<ScreenWayland.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Inherited properties
        /**
         * The currently-active window.
         */
        get active_window(): Window;
        /**
         * The currently-active window.
         */
        get activeWindow(): Window;
        /**
         * The #GdkScreen instance used to construct this #XfwScreen.
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
         * The #XfwWorkspaceManager that manages and describes workspace groups
         * and workspaces on this screen instance.
         */
        get workspace_manager(): WorkspaceManager;
        /**
         * The #XfwWorkspaceManager that manages and describes workspace groups
         * and workspaces on this screen instance.
         */
        get workspaceManager(): WorkspaceManager;

        // Inherited methods
        /**
         * Retrieves the window on `screen` that is currently active.
         * @returns an #XfwWindow, or %NULL if no window is active on @screen.
         */
        get_active_window(): Window | null;
        get_show_desktop(): boolean;
        /**
         * Retrieves the list of windows currently displayed on `screen`.
         *
         * The list and its contents are owned by `screen`.
         * @returns the list of #XfwWindow on @screen, or %NULL if there are no windows.  The list and its contents are owned by @screen.
         */
        get_windows(): Window[] | null;
        /**
         * Retrieves the list of windows currently displayed on `screen,` in stacking
         * order, with the bottom-most window first in the returned list.
         * @returns the list of #XfwWindow on @screen, in stacking order, or %NULL if there are no windows.  The list and its contents are owned by @screen.
         */
        get_windows_stacked(): Window[] | null;
        /**
         * Retrieves this screen's #XfwWorkspaceManager instance, which can be used
         * to inspect and interact with `screen'`s workspace groups and workspaces.
         * @returns a #XfwWorkspaceManager instance.  This instance is a singleton and is owned by @screen.
         */
        get_workspace_manager(): WorkspaceManager;
        /**
         * Showing the desktop minimizes the windows not minimized at the time of the query.
         * The reverse process unminimizes those same windows, if they have not already been
         * unminimized or destroyed. The desktop show state can be tracked via
         * #XfwScreen:show-desktop.
         *
         * The state of the previously active window is always restored upon unminimization,
         * but there is no guarantee for the rest of the window stacking order on Wayland.
         *
         * A request to switch to the current state is silently ignored.
         * @param show %TRUE to show the desktop, %FALSE to restore the previous state.
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module ScreenX11 {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Screen.ConstructorProps {}
    }

    class ScreenX11 extends GObject.Object implements Screen {
        static $gtype: GObject.GType<ScreenX11>;

        // Constructors

        constructor(properties?: Partial<ScreenX11.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Inherited properties
        /**
         * The currently-active window.
         */
        get active_window(): Window;
        /**
         * The currently-active window.
         */
        get activeWindow(): Window;
        /**
         * The #GdkScreen instance used to construct this #XfwScreen.
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
         * The #XfwWorkspaceManager that manages and describes workspace groups
         * and workspaces on this screen instance.
         */
        get workspace_manager(): WorkspaceManager;
        /**
         * The #XfwWorkspaceManager that manages and describes workspace groups
         * and workspaces on this screen instance.
         */
        get workspaceManager(): WorkspaceManager;

        // Inherited methods
        /**
         * Retrieves the window on `screen` that is currently active.
         * @returns an #XfwWindow, or %NULL if no window is active on @screen.
         */
        get_active_window(): Window | null;
        get_show_desktop(): boolean;
        /**
         * Retrieves the list of windows currently displayed on `screen`.
         *
         * The list and its contents are owned by `screen`.
         * @returns the list of #XfwWindow on @screen, or %NULL if there are no windows.  The list and its contents are owned by @screen.
         */
        get_windows(): Window[] | null;
        /**
         * Retrieves the list of windows currently displayed on `screen,` in stacking
         * order, with the bottom-most window first in the returned list.
         * @returns the list of #XfwWindow on @screen, in stacking order, or %NULL if there are no windows.  The list and its contents are owned by @screen.
         */
        get_windows_stacked(): Window[] | null;
        /**
         * Retrieves this screen's #XfwWorkspaceManager instance, which can be used
         * to inspect and interact with `screen'`s workspace groups and workspaces.
         * @returns a #XfwWorkspaceManager instance.  This instance is a singleton and is owned by @screen.
         */
        get_workspace_manager(): WorkspaceManager;
        /**
         * Showing the desktop minimizes the windows not minimized at the time of the query.
         * The reverse process unminimizes those same windows, if they have not already been
         * unminimized or destroyed. The desktop show state can be tracked via
         * #XfwScreen:show-desktop.
         *
         * The state of the previously active window is always restored upon unminimization,
         * but there is no guarantee for the rest of the window stacking order on Wayland.
         *
         * A request to switch to the current state is silently ignored.
         * @param show %TRUE to show the desktop, %FALSE to restore the previous state.
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module Window {
        // Signal callback interfaces

        interface CapabilitiesChanged {
            (changed_mask: WindowCapabilities, new_state: WindowCapabilities): void;
        }

        interface ClassChanged {
            (): void;
        }

        interface Closed {
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

        interface StateChanged {
            (changed_mask: WindowState, new_state: WindowState): void;
        }

        interface TypeChanged {
            (old_type: WindowType): void;
        }

        interface WorkspaceChanged {
            (): void;
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

    abstract class Window extends GObject.Object {
        static $gtype: GObject.GType<Window>;

        // Properties

        /**
         * The #XfwApplication that owns this window.
         */
        get application(): Application;
        /**
         * The window's capabilities bitfield.
         */
        get capabilities(): WindowCapabilities;
        /**
         * The window's class ids.
         */
        get class_ids(): string[];
        /**
         * The window's class ids.
         */
        get classIds(): string[];
        /**
         * The #GIcon that represents this window.
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
         * The #XfwScreen instances that owns this window.
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

        // Constructors

        constructor(properties?: Partial<Window.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(
            signal: 'capabilities-changed',
            callback: (_source: this, changed_mask: WindowCapabilities, new_state: WindowCapabilities) => void,
        ): number;
        connect_after(
            signal: 'capabilities-changed',
            callback: (_source: this, changed_mask: WindowCapabilities, new_state: WindowCapabilities) => void,
        ): number;
        emit(signal: 'capabilities-changed', changed_mask: WindowCapabilities, new_state: WindowCapabilities): void;
        connect(signal: 'class-changed', callback: (_source: this) => void): number;
        connect_after(signal: 'class-changed', callback: (_source: this) => void): number;
        emit(signal: 'class-changed'): void;
        connect(signal: 'closed', callback: (_source: this) => void): number;
        connect_after(signal: 'closed', callback: (_source: this) => void): number;
        emit(signal: 'closed'): void;
        connect(signal: 'geometry-changed', callback: (_source: this) => void): number;
        connect_after(signal: 'geometry-changed', callback: (_source: this) => void): number;
        emit(signal: 'geometry-changed'): void;
        connect(signal: 'icon-changed', callback: (_source: this) => void): number;
        connect_after(signal: 'icon-changed', callback: (_source: this) => void): number;
        emit(signal: 'icon-changed'): void;
        connect(signal: 'name-changed', callback: (_source: this) => void): number;
        connect_after(signal: 'name-changed', callback: (_source: this) => void): number;
        emit(signal: 'name-changed'): void;
        connect(
            signal: 'state-changed',
            callback: (_source: this, changed_mask: WindowState, new_state: WindowState) => void,
        ): number;
        connect_after(
            signal: 'state-changed',
            callback: (_source: this, changed_mask: WindowState, new_state: WindowState) => void,
        ): number;
        emit(signal: 'state-changed', changed_mask: WindowState, new_state: WindowState): void;
        connect(signal: 'type-changed', callback: (_source: this, old_type: WindowType) => void): number;
        connect_after(signal: 'type-changed', callback: (_source: this, old_type: WindowType) => void): number;
        emit(signal: 'type-changed', old_type: WindowType): void;
        connect(signal: 'workspace-changed', callback: (_source: this) => void): number;
        connect_after(signal: 'workspace-changed', callback: (_source: this) => void): number;
        emit(signal: 'workspace-changed'): void;

        // Methods

        activate(event_timestamp: number): boolean;
        close(event_timestamp: number): boolean;
        /**
         * Fetches `window'`s application.
         * @returns An #XfwApplication instance, with a reference owned by @window.
         */
        get_application(): Application;
        /**
         * Fetches `window'`s capabilities bitfield.
         * @returns a bitfield with zero or more bits from #XfwWindowCapabilities set.
         */
        get_capabilities(): WindowCapabilities;
        /**
         * Fetches `window'`s class ids. On X11 this should contain the class and instance
         * names of the [WM_CLASS property](https://x.org/releases/X11R7.6/doc/xorg-docs/specs/ICCCM/icccm.html#wm_class_property).
         * On Wayland, it's likely to be limited to the [application ID](https://wayland.app/protocols/wlr-foreign-toplevel-management-unstable-v1#zwlr_foreign_toplevel_handle_v1:event:app_id),
         * which should correspond to the basename of the application's desktop file.
         * @returns a %NULL-terminated array of strings owned by the #XfwWindow.
         */
        get_class_ids(): string[];
        /**
         * Fetches `window'`s position and size.
         * @returns A #GdkRectangle representing @window's geometry, which should not be modified or freed.
         */
        get_geometry(): Gdk.Rectangle;
        /**
         * Fetches `window'`s icon as a size-independent #GIcon.  If an icon cannot be
         * found, a #GIcon representing a fallback icon will be returned.  Whether or
         * not the returned icon is a fallback icon can be determined using
         * #xfw_window_icon_is_fallback().
         * @returns a #GIcon, owned by @window.
         */
        get_gicon(): Gio.Icon;
        /**
         * Fetches `window'`s icon.  If `window` has no icon, a fallback icon may be
         * returned.  Whether or not the returned icon is a fallback icon can be
         * determined using #xfw_window_icon_is_fallback().
         * @param size the desired icon size.
         * @param scale the UI scale factor.
         * @returns a #GdkPixbuf, owned by @window, or %NULL if @window has no icon and a fallback cannot be rendered.
         */
        get_icon(size: number, scale: number): GdkPixbuf.Pixbuf | null;
        /**
         * Fetches the list of monitors `window` is displayed on, if any.
         * @returns A list of #GdkMonitor instances, or %NULL.  The list and its contents are owned by @window and should not be modified or freed.
         */
        get_monitors(): Gdk.Monitor[] | null;
        /**
         * Fetches `window'`s name/title.
         * @returns a window title, or %NULL if there is no title.  The returned title should not be modified or freed.
         */
        get_name(): string | null;
        /**
         * Fetches the #XfwScreen instance that owns `window`.
         * @returns A #XfwScreen instance, with a reference owned by @window.
         */
        get_screen(): Screen;
        /**
         * Fetches `window'`s state bitfield.
         * @returns a bitfield with zero or more bits from #XfwWindowState set.
         */
        get_state(): WindowState;
        get_window_type(): WindowType;
        /**
         * Fetches `window'`s workspace, if any.  This may return %NULL if `window` is
         * not on a workspace, or is pinned to all workspaces.
         * @returns A #XfwWorkspace instance, with a reference owned by @window, or %NULL.
         */
        get_workspace(): Workspace | null;
        /**
         * Determines if `window` does not have an icon, and thus a fallback icon
         * will be returned from #xfw_window_get_icon() and #xfw_window_get_gicon().
         * @returns %TRUE or %FALSE, depending on if @window's icon uses a fallback icon or not.
         */
        icon_is_fallback(): boolean;
        is_above(): boolean;
        is_active(): boolean;
        is_below(): boolean;
        is_fullscreen(): boolean;
        is_in_viewport(workspace: Workspace): boolean;
        is_maximized(): boolean;
        is_minimized(): boolean;
        is_on_workspace(workspace: Workspace): boolean;
        is_pinned(): boolean;
        is_shaded(): boolean;
        is_skip_pager(): boolean;
        is_skip_tasklist(): boolean;
        is_urgent(): boolean;
        move_to_workspace(workspace: Workspace): boolean;
        set_above(is_above: boolean): boolean;
        set_below(is_below: boolean): boolean;
        set_button_geometry(relative_to: Gdk.Window, rect: Gdk.Rectangle): boolean;
        set_fullscreen(is_fullscreen: boolean): boolean;
        set_geometry(rect: Gdk.Rectangle): boolean;
        set_maximized(is_maximized: boolean): boolean;
        set_minimized(is_minimized: boolean): boolean;
        set_pinned(is_pinned: boolean): boolean;
        set_shaded(is_shaded: boolean): boolean;
        set_skip_pager(is_skip_pager: boolean): boolean;
        set_skip_tasklist(is_skip_tasklist: boolean): boolean;
        start_move(): boolean;
        start_resize(): boolean;
        /**
         * On X11, returns the platform-specific #Window handle to the underlying
         * window.
         *
         * It is an error to call this function if the application is not currently
         * running on X11.
         * @returns An X11 #Window handle.
         */
        x11_get_xid(): xlib.Window;
    }

    module WindowWayland {
        // Constructor properties interface

        interface ConstructorProps extends Window.ConstructorProps {
            handle: any;
        }
    }

    class WindowWayland extends Window {
        static $gtype: GObject.GType<WindowWayland>;

        // Properties

        get handle(): any;

        // Constructors

        constructor(properties?: Partial<WindowWayland.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module WindowX11 {
        // Constructor properties interface

        interface ConstructorProps extends Window.ConstructorProps {}
    }

    class WindowX11 extends Window {
        static $gtype: GObject.GType<WindowX11>;

        // Constructors

        constructor(properties?: Partial<WindowX11.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module WnckIcon {
        // Constructor properties interface

        interface ConstructorProps
            extends GObject.Object.ConstructorProps,
                Gio.Icon.ConstructorProps,
                Gio.Initable.ConstructorProps,
                Gio.LoadableIcon.ConstructorProps {
            wnck_object: GObject.Object;
            wnckObject: GObject.Object;
        }
    }

    class WnckIcon extends GObject.Object implements Gio.Icon, Gio.Initable, Gio.LoadableIcon {
        static $gtype: GObject.GType<WnckIcon>;

        // Properties

        get wnck_object(): GObject.Object;
        get wnckObject(): GObject.Object;

        // Constructors

        constructor(properties?: Partial<WnckIcon.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Inherited methods
        /**
         * Checks if two icons are equal.
         * @param icon2 pointer to the second #GIcon.
         * @returns %TRUE if @icon1 is equal to @icon2. %FALSE otherwise.
         */
        equal(icon2?: Gio.Icon | null): boolean;
        /**
         * Gets a hash for an icon.
         * @returns a #guint containing a hash for the @icon, suitable for   use in a #GHashTable or similar data structure.
         */
        hash(): number;
        /**
         * Serializes a #GIcon into a #GVariant. An equivalent #GIcon can be retrieved
         * back by calling g_icon_deserialize() on the returned value.
         * As serialization will avoid using raw icon data when possible, it only
         * makes sense to transfer the #GVariant between processes on the same machine,
         * (as opposed to over the network), and within the same file system namespace.
         * @returns a #GVariant, or %NULL when serialization fails. The #GVariant will not be floating.
         */
        serialize(): GLib.Variant | null;
        /**
         * Generates a textual representation of `icon` that can be used for
         * serialization such as when passing `icon` to a different process or
         * saving it to persistent storage. Use g_icon_new_for_string() to
         * get `icon` back from the returned string.
         *
         * The encoding of the returned string is proprietary to #GIcon except
         * in the following two cases
         *
         * - If `icon` is a #GFileIcon, the returned string is a native path
         *   (such as `/path/to/my icon.png`) without escaping
         *   if the #GFile for `icon` is a native file.  If the file is not
         *   native, the returned string is the result of g_file_get_uri()
         *   (such as `sftp://path/to/my%20icon.png`).
         *
         * - If `icon` is a #GThemedIcon with exactly one name and no fallbacks,
         *   the encoding is simply the name (such as `network-server`).
         * @returns An allocated NUL-terminated UTF8 string or %NULL if @icon can't be serialized. Use g_free() to free.
         */
        to_string(): string | null;
        /**
         * Checks if two icons are equal.
         * @param icon2 pointer to the second #GIcon.
         */
        vfunc_equal(icon2?: Gio.Icon | null): boolean;
        /**
         * Gets a hash for an icon.
         */
        vfunc_hash(): number;
        /**
         * Serializes a #GIcon into a #GVariant. An equivalent #GIcon can be retrieved
         * back by calling g_icon_deserialize() on the returned value.
         * As serialization will avoid using raw icon data when possible, it only
         * makes sense to transfer the #GVariant between processes on the same machine,
         * (as opposed to over the network), and within the same file system namespace.
         */
        vfunc_serialize(): GLib.Variant | null;
        /**
         * Serializes the `icon` into string tokens.
         * This is can be invoked when g_icon_new_for_string() is called.
         */
        vfunc_to_tokens(): [boolean, string[], number];
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [introduction][ginitable] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [introduction][ginitable] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Loads a loadable icon. For the asynchronous version of this function,
         * see g_loadable_icon_load_async().
         * @param size an integer.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns a #GInputStream to read the icon from.
         */
        load(size: number, cancellable?: Gio.Cancellable | null): [Gio.InputStream, string];
        /**
         * Loads an icon asynchronously. To finish this function, see
         * g_loadable_icon_load_finish(). For the synchronous, blocking
         * version of this function, see g_loadable_icon_load().
         * @param size an integer.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
         */
        load_async(
            size: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous icon load started in g_loadable_icon_load_async().
         * @param res a #GAsyncResult.
         * @returns a #GInputStream to read the icon from.
         */
        load_finish(res: Gio.AsyncResult): [Gio.InputStream, string];
        /**
         * Loads a loadable icon. For the asynchronous version of this function,
         * see g_loadable_icon_load_async().
         * @param size an integer.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_load(size: number, cancellable?: Gio.Cancellable | null): [Gio.InputStream, string];
        /**
         * Loads an icon asynchronously. To finish this function, see
         * g_loadable_icon_load_finish(). For the synchronous, blocking
         * version of this function, see g_loadable_icon_load().
         * @param size an integer.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback   to call when the request is satisfied
         */
        vfunc_load_async(
            size: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous icon load started in g_loadable_icon_load_async().
         * @param res a #GAsyncResult.
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module WorkspaceDummy {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Workspace.ConstructorProps {}
    }

    class WorkspaceDummy extends GObject.Object implements Workspace {
        static $gtype: GObject.GType<WorkspaceDummy>;

        // Constructors

        constructor(properties?: Partial<WorkspaceDummy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Inherited properties
        /**
         * The #XfwWorkspaceCapabilities bitfield for this workspace.
         */
        get capabilities(): WorkspaceCapabilities;
        set capabilities(val: WorkspaceCapabilities);
        /**
         * The #XfwWorkspaceGroup that this workspace is a member of, if any.
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
         * The #XfwWorkspaceState bitfield for this workspace.
         */
        get state(): WorkspaceState;
        set state(val: WorkspaceState);

        // Inherited methods
        /**
         * Attempts to set `workspace` as the active workspace in its group.
         *
         * On failure, `error` (if provided) will be set to a description of the error
         * that occurred.
         * @returns %TRUE if workspace activation succeeded, %FALSE otherwise.  If %FALSE, and @error is non-%NULL, an error will be returned that must be freed using #g_error_free().
         */
        activate(): boolean;
        /**
         * Attempts to assign `workspace` to `group`.
         *
         * On failure, `error` (if provided) will be set to a description of the error
         * that occurred.
         * @param group an #XfwWorkspaceGroup.
         * @returns %TRUE if workspace assignment succeeded, %FALSE otherwise. If %FALSE, and @error is non-%NULL, an error will be returned that must be freed using g_error_free().
         */
        assign_to_workspace_group(group: WorkspaceGroup): boolean;
        /**
         * Fetches this workspace's capabilities bitfield.
         *
         * The bitfield describes what operations are available on this workspace.
         * @returns a #XfwWorkspaceCapabilities bitfield.
         */
        get_capabilities(): WorkspaceCapabilities;
        /**
         * Fetches the position and size of the workspace in screen coordinates.
         *
         * The values in the returned #GdkRectangle are owned by `workspace` and should
         * not be modified.
         * @returns a #GdkRectangle, owned by @workspace.
         */
        get_geometry(): Gdk.Rectangle;
        /**
         * Fetches this workspace's opaque ID.
         * @returns A UTF-8 formatted string, owned by @workspace.
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
         * @returns A UTF-8 formatted string, owned by @workspace.
         */
        get_name(): string;
        /**
         * Fetches the workspace that resides in `direction` from the `workspace,` if
         * any.  If workspace is on the edge of the layout, and `direction` points off
         * the edge of the layout, will return %NULL.
         * @param direction an #XfwDirection.
         * @returns a #XfwWorkspace, owned by the parent @group, or %NULL if no workspace exists in @direction.
         */
        get_neighbor(direction: Direction): Workspace | null;
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
         * @returns a #XfwWorkspaceState bitfield.
         */
        get_state(): WorkspaceState;
        /**
         * Fetches the group this workspace belongs to, if any.
         * @returns a #XfwWorkspaceGroup instance, owned by @workspace, or %NULL if the workspace is not a member of any groups.
         */
        get_workspace_group(): WorkspaceGroup | null;
        /**
         * Attempts to remove `workspace` from its group.
         *
         * On failure, `error` (if provided) will be set to a description of the error
         * that occurred.
         * @returns %TRUE if workspace removal succeeded, %FALSE otherwise.  If %FALSE, and @error is non-%NULL, an error will be returned that must be freed using #g_error_free().
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module WorkspaceGroupDummy {
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

        // Constructors

        constructor(properties?: Partial<WorkspaceGroupDummy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Inherited properties
        /**
         * The active #XfwWorkspace on this #XfwWorkspaceGroup, or %NULL.
         */
        get active_workspace(): Workspace;
        /**
         * The active #XfwWorkspace on this #XfwWorkspaceGroup, or %NULL.
         */
        get activeWorkspace(): Workspace;
        /**
         * The list of #GdkMonitor this #XfwWorkspaceGroup is displayed on.
         */
        get monitors(): any;
        /**
         * The #GdkScreen used when creating the #XfwScreen that owns this
         * #XfwWorkspaceGroup.
         */
        get screen(): Gdk.Screen;
        /**
         * The #XfwWorkspaceManager instance that manages this #XfwWorkspaceGroup.
         */
        get workspace_manager(): WorkspaceManager;
        /**
         * The #XfwWorkspaceManager instance that manages this #XfwWorkspaceGroup.
         */
        get workspaceManager(): WorkspaceManager;
        /**
         * The list of #XfwWorkspace in this #XfwWorkspaceGroup.
         */
        get workspaces(): any;

        // Inherited methods
        /**
         * Attempts to create a new workspace on `group`.  Typically, the new workspace
         * will be appended to the existing list of workspaces.
         *
         * On failure, `error` (if provided) will be set to a description of the error
         * that occurred.
         * @param name a name for the new workspace.
         * @returns %TRUE if workspace creation succeeded, %FALSE otherwise.  If %FALSE, and @error is non-%NULL, an error will be returned that must be freed using #g_error_free().
         */
        create_workspace(name: string): boolean;
        /**
         * Gets the active workspace on `group,` if there is one.
         * @returns an #XfwWorkspace, or %NULL if there is no active workspace.
         */
        get_active_workspace(): Workspace | null;
        /**
         * Returns a bitfield describing operations allowed on this `group`.
         * @returns an #XfwWorkspaceGroupCapabilities bitfield.
         */
        get_capabilities(): WorkspaceGroupCapabilities;
        /**
         * Lists the physical monitors that this workspace group displays on.
         * @returns A list of #GdkMonitor, or %NULL if @group is not displayed on any monitors.  The list and its contents are owned by @group.
         */
        get_monitors(): Gdk.Monitor[] | null;
        /**
         * Fetches the number of workspaces in `group`.
         * @returns an unsigned integer describing the number of workspaces.
         */
        get_workspace_count(): number;
        /**
         * Fetches the #XfwWorkspaceManager instance that owns `group`.
         * @returns a #XfwWorkspaceManager, owned by @group.
         */
        get_workspace_manager(): WorkspaceManager;
        /**
         * Lists the workspaces in `group`.
         * @returns the list of #XfwWorkspace in @group, or %NULL if there are no workspaces. The list and its contents are owned by @group.
         */
        list_workspaces(): Workspace[] | null;
        /**
         * Moves the workspace group to a new location, and possibly a new monitor.
         *
         * On failure, `error` (if provided) will be set to a description of the error
         * that occurred.
         * @param x a coordinate in the horizontal direction.
         * @param y a coordinate in the vertical direction.
         * @returns %TRUE if moving the workspace group succeeded, %FALSE otherwise.  If %FALSE, and @error is non-%NULL, an error will be returned that must be freed using #g_error_free().
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
         * @returns %TRUE if changing the layout of @group succeede, %FALSE otherwise.  If %FALSE, and @error is non-%NULL, an error will be returned that must be freed using #g_error_free().
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module WorkspaceGroupWayland {
        // Signal callback interfaces

        interface Destroyed {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, WorkspaceGroup.ConstructorProps {}
    }

    class WorkspaceGroupWayland extends GObject.Object implements WorkspaceGroup {
        static $gtype: GObject.GType<WorkspaceGroupWayland>;

        // Constructors

        constructor(properties?: Partial<WorkspaceGroupWayland.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'destroyed', callback: (_source: this) => void): number;
        connect_after(signal: 'destroyed', callback: (_source: this) => void): number;
        emit(signal: 'destroyed'): void;

        // Inherited properties
        /**
         * The active #XfwWorkspace on this #XfwWorkspaceGroup, or %NULL.
         */
        get active_workspace(): Workspace;
        /**
         * The active #XfwWorkspace on this #XfwWorkspaceGroup, or %NULL.
         */
        get activeWorkspace(): Workspace;
        /**
         * The list of #GdkMonitor this #XfwWorkspaceGroup is displayed on.
         */
        get monitors(): any;
        /**
         * The #GdkScreen used when creating the #XfwScreen that owns this
         * #XfwWorkspaceGroup.
         */
        get screen(): Gdk.Screen;
        /**
         * The #XfwWorkspaceManager instance that manages this #XfwWorkspaceGroup.
         */
        get workspace_manager(): WorkspaceManager;
        /**
         * The #XfwWorkspaceManager instance that manages this #XfwWorkspaceGroup.
         */
        get workspaceManager(): WorkspaceManager;
        /**
         * The list of #XfwWorkspace in this #XfwWorkspaceGroup.
         */
        get workspaces(): any;

        // Inherited methods
        /**
         * Attempts to create a new workspace on `group`.  Typically, the new workspace
         * will be appended to the existing list of workspaces.
         *
         * On failure, `error` (if provided) will be set to a description of the error
         * that occurred.
         * @param name a name for the new workspace.
         * @returns %TRUE if workspace creation succeeded, %FALSE otherwise.  If %FALSE, and @error is non-%NULL, an error will be returned that must be freed using #g_error_free().
         */
        create_workspace(name: string): boolean;
        /**
         * Gets the active workspace on `group,` if there is one.
         * @returns an #XfwWorkspace, or %NULL if there is no active workspace.
         */
        get_active_workspace(): Workspace | null;
        /**
         * Returns a bitfield describing operations allowed on this `group`.
         * @returns an #XfwWorkspaceGroupCapabilities bitfield.
         */
        get_capabilities(): WorkspaceGroupCapabilities;
        /**
         * Lists the physical monitors that this workspace group displays on.
         * @returns A list of #GdkMonitor, or %NULL if @group is not displayed on any monitors.  The list and its contents are owned by @group.
         */
        get_monitors(): Gdk.Monitor[] | null;
        /**
         * Fetches the number of workspaces in `group`.
         * @returns an unsigned integer describing the number of workspaces.
         */
        get_workspace_count(): number;
        /**
         * Fetches the #XfwWorkspaceManager instance that owns `group`.
         * @returns a #XfwWorkspaceManager, owned by @group.
         */
        get_workspace_manager(): WorkspaceManager;
        /**
         * Lists the workspaces in `group`.
         * @returns the list of #XfwWorkspace in @group, or %NULL if there are no workspaces. The list and its contents are owned by @group.
         */
        list_workspaces(): Workspace[] | null;
        /**
         * Moves the workspace group to a new location, and possibly a new monitor.
         *
         * On failure, `error` (if provided) will be set to a description of the error
         * that occurred.
         * @param x a coordinate in the horizontal direction.
         * @param y a coordinate in the vertical direction.
         * @returns %TRUE if moving the workspace group succeeded, %FALSE otherwise.  If %FALSE, and @error is non-%NULL, an error will be returned that must be freed using #g_error_free().
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
         * @returns %TRUE if changing the layout of @group succeede, %FALSE otherwise.  If %FALSE, and @error is non-%NULL, an error will be returned that must be freed using #g_error_free().
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module WorkspaceManagerDummy {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, WorkspaceManager.ConstructorProps {}
    }

    class WorkspaceManagerDummy extends GObject.Object implements WorkspaceManager {
        static $gtype: GObject.GType<WorkspaceManagerDummy>;

        // Constructors

        constructor(properties?: Partial<WorkspaceManagerDummy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Inherited properties
        /**
         * The #GdkScreen instance used to construct the #XfwScreen that owns this
         * workspace manager.
         */
        get screen(): Gdk.Screen;

        // Inherited methods
        /**
         * Lists all workspace groups known to the workspace manager.
         * @returns the list of #XfwWorkspaceGroup managed by @manager, or %NULL if there are no workspace groups.  The list and its contents are owned by @manager.
         */
        list_workspace_groups(): WorkspaceGroup[] | null;
        /**
         * List all workspaces known to the workspace manager.
         * @returns the list of #XfwWorkspace managed by @manager, or %NULL if there are no workspaces.  The list and its contents are owned by @manager.
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module WorkspaceManagerWayland {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, WorkspaceManager.ConstructorProps {
            wl_manager: any;
            wlManager: any;
            wl_registry: any;
            wlRegistry: any;
        }
    }

    class WorkspaceManagerWayland extends GObject.Object implements WorkspaceManager {
        static $gtype: GObject.GType<WorkspaceManagerWayland>;

        // Properties

        get wl_manager(): any;
        get wlManager(): any;
        get wl_registry(): any;
        get wlRegistry(): any;

        // Constructors

        constructor(properties?: Partial<WorkspaceManagerWayland.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Inherited properties
        /**
         * The #GdkScreen instance used to construct the #XfwScreen that owns this
         * workspace manager.
         */
        get screen(): Gdk.Screen;

        // Inherited methods
        /**
         * Lists all workspace groups known to the workspace manager.
         * @returns the list of #XfwWorkspaceGroup managed by @manager, or %NULL if there are no workspace groups.  The list and its contents are owned by @manager.
         */
        list_workspace_groups(): WorkspaceGroup[] | null;
        /**
         * List all workspaces known to the workspace manager.
         * @returns the list of #XfwWorkspace managed by @manager, or %NULL if there are no workspaces.  The list and its contents are owned by @manager.
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module WorkspaceManagerX11 {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, WorkspaceManager.ConstructorProps {}
    }

    class WorkspaceManagerX11 extends GObject.Object implements WorkspaceManager {
        static $gtype: GObject.GType<WorkspaceManagerX11>;

        // Constructors

        constructor(properties?: Partial<WorkspaceManagerX11.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Inherited properties
        /**
         * The #GdkScreen instance used to construct the #XfwScreen that owns this
         * workspace manager.
         */
        get screen(): Gdk.Screen;

        // Inherited methods
        /**
         * Lists all workspace groups known to the workspace manager.
         * @returns the list of #XfwWorkspaceGroup managed by @manager, or %NULL if there are no workspace groups.  The list and its contents are owned by @manager.
         */
        list_workspace_groups(): WorkspaceGroup[] | null;
        /**
         * List all workspaces known to the workspace manager.
         * @returns the list of #XfwWorkspace managed by @manager, or %NULL if there are no workspaces.  The list and its contents are owned by @manager.
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module WorkspaceWayland {
        // Signal callback interfaces

        interface Destroyed {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Workspace.ConstructorProps {
            handle: any;
        }
    }

    class WorkspaceWayland extends GObject.Object implements Workspace {
        static $gtype: GObject.GType<WorkspaceWayland>;

        // Properties

        get handle(): any;

        // Constructors

        constructor(properties?: Partial<WorkspaceWayland.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'destroyed', callback: (_source: this) => void): number;
        connect_after(signal: 'destroyed', callback: (_source: this) => void): number;
        emit(signal: 'destroyed'): void;

        // Inherited properties
        /**
         * The #XfwWorkspaceCapabilities bitfield for this workspace.
         */
        get capabilities(): WorkspaceCapabilities;
        set capabilities(val: WorkspaceCapabilities);
        /**
         * The #XfwWorkspaceGroup that this workspace is a member of, if any.
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
         * The #XfwWorkspaceState bitfield for this workspace.
         */
        get state(): WorkspaceState;
        set state(val: WorkspaceState);

        // Inherited methods
        /**
         * Attempts to set `workspace` as the active workspace in its group.
         *
         * On failure, `error` (if provided) will be set to a description of the error
         * that occurred.
         * @returns %TRUE if workspace activation succeeded, %FALSE otherwise.  If %FALSE, and @error is non-%NULL, an error will be returned that must be freed using #g_error_free().
         */
        activate(): boolean;
        /**
         * Attempts to assign `workspace` to `group`.
         *
         * On failure, `error` (if provided) will be set to a description of the error
         * that occurred.
         * @param group an #XfwWorkspaceGroup.
         * @returns %TRUE if workspace assignment succeeded, %FALSE otherwise. If %FALSE, and @error is non-%NULL, an error will be returned that must be freed using g_error_free().
         */
        assign_to_workspace_group(group: WorkspaceGroup): boolean;
        /**
         * Fetches this workspace's capabilities bitfield.
         *
         * The bitfield describes what operations are available on this workspace.
         * @returns a #XfwWorkspaceCapabilities bitfield.
         */
        get_capabilities(): WorkspaceCapabilities;
        /**
         * Fetches the position and size of the workspace in screen coordinates.
         *
         * The values in the returned #GdkRectangle are owned by `workspace` and should
         * not be modified.
         * @returns a #GdkRectangle, owned by @workspace.
         */
        get_geometry(): Gdk.Rectangle;
        /**
         * Fetches this workspace's opaque ID.
         * @returns A UTF-8 formatted string, owned by @workspace.
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
         * @returns A UTF-8 formatted string, owned by @workspace.
         */
        get_name(): string;
        /**
         * Fetches the workspace that resides in `direction` from the `workspace,` if
         * any.  If workspace is on the edge of the layout, and `direction` points off
         * the edge of the layout, will return %NULL.
         * @param direction an #XfwDirection.
         * @returns a #XfwWorkspace, owned by the parent @group, or %NULL if no workspace exists in @direction.
         */
        get_neighbor(direction: Direction): Workspace | null;
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
         * @returns a #XfwWorkspaceState bitfield.
         */
        get_state(): WorkspaceState;
        /**
         * Fetches the group this workspace belongs to, if any.
         * @returns a #XfwWorkspaceGroup instance, owned by @workspace, or %NULL if the workspace is not a member of any groups.
         */
        get_workspace_group(): WorkspaceGroup | null;
        /**
         * Attempts to remove `workspace` from its group.
         *
         * On failure, `error` (if provided) will be set to a description of the error
         * that occurred.
         * @returns %TRUE if workspace removal succeeded, %FALSE otherwise.  If %FALSE, and @error is non-%NULL, an error will be returned that must be freed using #g_error_free().
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module WorkspaceX11 {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Workspace.ConstructorProps {}
    }

    class WorkspaceX11 extends GObject.Object implements Workspace {
        static $gtype: GObject.GType<WorkspaceX11>;

        // Constructors

        constructor(properties?: Partial<WorkspaceX11.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Inherited properties
        /**
         * The #XfwWorkspaceCapabilities bitfield for this workspace.
         */
        get capabilities(): WorkspaceCapabilities;
        set capabilities(val: WorkspaceCapabilities);
        /**
         * The #XfwWorkspaceGroup that this workspace is a member of, if any.
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
         * The #XfwWorkspaceState bitfield for this workspace.
         */
        get state(): WorkspaceState;
        set state(val: WorkspaceState);

        // Inherited methods
        /**
         * Attempts to set `workspace` as the active workspace in its group.
         *
         * On failure, `error` (if provided) will be set to a description of the error
         * that occurred.
         * @returns %TRUE if workspace activation succeeded, %FALSE otherwise.  If %FALSE, and @error is non-%NULL, an error will be returned that must be freed using #g_error_free().
         */
        activate(): boolean;
        /**
         * Attempts to assign `workspace` to `group`.
         *
         * On failure, `error` (if provided) will be set to a description of the error
         * that occurred.
         * @param group an #XfwWorkspaceGroup.
         * @returns %TRUE if workspace assignment succeeded, %FALSE otherwise. If %FALSE, and @error is non-%NULL, an error will be returned that must be freed using g_error_free().
         */
        assign_to_workspace_group(group: WorkspaceGroup): boolean;
        /**
         * Fetches this workspace's capabilities bitfield.
         *
         * The bitfield describes what operations are available on this workspace.
         * @returns a #XfwWorkspaceCapabilities bitfield.
         */
        get_capabilities(): WorkspaceCapabilities;
        /**
         * Fetches the position and size of the workspace in screen coordinates.
         *
         * The values in the returned #GdkRectangle are owned by `workspace` and should
         * not be modified.
         * @returns a #GdkRectangle, owned by @workspace.
         */
        get_geometry(): Gdk.Rectangle;
        /**
         * Fetches this workspace's opaque ID.
         * @returns A UTF-8 formatted string, owned by @workspace.
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
         * @returns A UTF-8 formatted string, owned by @workspace.
         */
        get_name(): string;
        /**
         * Fetches the workspace that resides in `direction` from the `workspace,` if
         * any.  If workspace is on the edge of the layout, and `direction` points off
         * the edge of the layout, will return %NULL.
         * @param direction an #XfwDirection.
         * @returns a #XfwWorkspace, owned by the parent @group, or %NULL if no workspace exists in @direction.
         */
        get_neighbor(direction: Direction): Workspace | null;
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
         * @returns a #XfwWorkspaceState bitfield.
         */
        get_state(): WorkspaceState;
        /**
         * Fetches the group this workspace belongs to, if any.
         * @returns a #XfwWorkspaceGroup instance, owned by @workspace, or %NULL if the workspace is not a member of any groups.
         */
        get_workspace_group(): WorkspaceGroup | null;
        /**
         * Attempts to remove `workspace` from its group.
         *
         * On failure, `error` (if provided) will be set to a description of the error
         * that occurred.
         * @returns %TRUE if workspace removal succeeded, %FALSE otherwise.  If %FALSE, and @error is non-%NULL, an error will be returned that must be freed using #g_error_free().
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    type ApplicationClass = typeof Application;
    /**
     * An opaque structure representing an instance of an #XfwApplication.
     */
    abstract class ApplicationInstance {
        static $gtype: GObject.GType<ApplicationInstance>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * Fetches `instance'`s name, which can often be the same as the application name.
         * @returns A string owned by @instance.
         */
        get_name(): string;
        /**
         * Fetches `instance'`s PID.
         * @returns The process ID of @instance, or 0 if none is available.
         */
        get_pid(): number;
        /**
         * Lists all windows belonging to the application instance.
         * @returns The list of #XfwWindow belonging to @instance. The list and its contents are owned by @instance.
         */
        get_windows(): Window[];
    }

    type ApplicationWaylandClass = typeof ApplicationWayland;
    abstract class ApplicationWaylandPrivate {
        static $gtype: GObject.GType<ApplicationWaylandPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ApplicationX11Class = typeof ApplicationX11;
    abstract class ApplicationX11Private {
        static $gtype: GObject.GType<ApplicationX11Private>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ScreenIface = typeof Screen;
    abstract class ScreenInterface {
        static $gtype: GObject.GType<ScreenInterface>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ScreenWaylandClass = typeof ScreenWayland;
    abstract class ScreenWaylandPrivate {
        static $gtype: GObject.GType<ScreenWaylandPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ScreenX11Class = typeof ScreenX11;
    abstract class ScreenX11Private {
        static $gtype: GObject.GType<ScreenX11Private>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WindowClass = typeof Window;
    type WindowWaylandClass = typeof WindowWayland;
    abstract class WindowWaylandPrivate {
        static $gtype: GObject.GType<WindowWaylandPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WindowX11Class = typeof WindowX11;
    abstract class WindowX11Private {
        static $gtype: GObject.GType<WindowX11Private>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WnckIconClass = typeof WnckIcon;
    type WorkspaceDummyClass = typeof WorkspaceDummy;
    abstract class WorkspaceDummyPrivate {
        static $gtype: GObject.GType<WorkspaceDummyPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WorkspaceGroupDummyClass = typeof WorkspaceGroupDummy;
    abstract class WorkspaceGroupDummyPrivate {
        static $gtype: GObject.GType<WorkspaceGroupDummyPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WorkspaceGroupIface = typeof WorkspaceGroup;
    abstract class WorkspaceGroupInterface {
        static $gtype: GObject.GType<WorkspaceGroupInterface>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WorkspaceGroupWaylandClass = typeof WorkspaceGroupWayland;
    abstract class WorkspaceGroupWaylandPrivate {
        static $gtype: GObject.GType<WorkspaceGroupWaylandPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WorkspaceIface = typeof Workspace;
    abstract class WorkspaceInterface {
        static $gtype: GObject.GType<WorkspaceInterface>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WorkspaceManagerDummyClass = typeof WorkspaceManagerDummy;
    abstract class WorkspaceManagerDummyPrivate {
        static $gtype: GObject.GType<WorkspaceManagerDummyPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WorkspaceManagerIface = typeof WorkspaceManager;
    abstract class WorkspaceManagerInterface {
        static $gtype: GObject.GType<WorkspaceManagerInterface>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WorkspaceManagerWaylandClass = typeof WorkspaceManagerWayland;
    abstract class WorkspaceManagerWaylandPrivate {
        static $gtype: GObject.GType<WorkspaceManagerWaylandPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WorkspaceManagerX11Class = typeof WorkspaceManagerX11;
    abstract class WorkspaceManagerX11Private {
        static $gtype: GObject.GType<WorkspaceManagerX11Private>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WorkspaceWaylandClass = typeof WorkspaceWayland;
    abstract class WorkspaceWaylandPrivate {
        static $gtype: GObject.GType<WorkspaceWaylandPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WorkspaceX11Class = typeof WorkspaceX11;
    abstract class WorkspaceX11Private {
        static $gtype: GObject.GType<WorkspaceX11Private>;

        // Constructors

        _init(...args: any[]): void;
    }

    module Screen {
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
         * Retrieves the #XfwScreen instance corresponding to the default #GdkScreen.
         */
        get_default(): Screen;
    }
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
         * The #GdkScreen instance used to construct this #XfwScreen.
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
         * The #XfwWorkspaceManager that manages and describes workspace groups
         * and workspaces on this screen instance.
         */
        get workspace_manager(): WorkspaceManager;
        /**
         * The #XfwWorkspaceManager that manages and describes workspace groups
         * and workspaces on this screen instance.
         */
        get workspaceManager(): WorkspaceManager;

        // Methods

        /**
         * Retrieves the window on `screen` that is currently active.
         * @returns an #XfwWindow, or %NULL if no window is active on @screen.
         */
        get_active_window(): Window | null;
        get_show_desktop(): boolean;
        /**
         * Retrieves the list of windows currently displayed on `screen`.
         *
         * The list and its contents are owned by `screen`.
         * @returns the list of #XfwWindow on @screen, or %NULL if there are no windows.  The list and its contents are owned by @screen.
         */
        get_windows(): Window[] | null;
        /**
         * Retrieves the list of windows currently displayed on `screen,` in stacking
         * order, with the bottom-most window first in the returned list.
         * @returns the list of #XfwWindow on @screen, in stacking order, or %NULL if there are no windows.  The list and its contents are owned by @screen.
         */
        get_windows_stacked(): Window[] | null;
        /**
         * Retrieves this screen's #XfwWorkspaceManager instance, which can be used
         * to inspect and interact with `screen'`s workspace groups and workspaces.
         * @returns a #XfwWorkspaceManager instance.  This instance is a singleton and is owned by @screen.
         */
        get_workspace_manager(): WorkspaceManager;
        /**
         * Showing the desktop minimizes the windows not minimized at the time of the query.
         * The reverse process unminimizes those same windows, if they have not already been
         * unminimized or destroyed. The desktop show state can be tracked via
         * #XfwScreen:show-desktop.
         *
         * The state of the previously active window is always restored upon unminimization,
         * but there is no guarantee for the rest of the window stacking order on Wayland.
         *
         * A request to switch to the current state is silently ignored.
         * @param show %TRUE to show the desktop, %FALSE to restore the previous state.
         */
        set_show_desktop(show: boolean): void;
    }

    export const Screen: ScreenNamespace;

    module Workspace {
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
    interface Workspace extends GObject.Object {
        // Properties

        /**
         * The #XfwWorkspaceCapabilities bitfield for this workspace.
         */
        get capabilities(): WorkspaceCapabilities;
        set capabilities(val: WorkspaceCapabilities);
        /**
         * The #XfwWorkspaceGroup that this workspace is a member of, if any.
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
         * The #XfwWorkspaceState bitfield for this workspace.
         */
        get state(): WorkspaceState;
        set state(val: WorkspaceState);

        // Methods

        /**
         * Attempts to set `workspace` as the active workspace in its group.
         *
         * On failure, `error` (if provided) will be set to a description of the error
         * that occurred.
         * @returns %TRUE if workspace activation succeeded, %FALSE otherwise.  If %FALSE, and @error is non-%NULL, an error will be returned that must be freed using #g_error_free().
         */
        activate(): boolean;
        /**
         * Attempts to assign `workspace` to `group`.
         *
         * On failure, `error` (if provided) will be set to a description of the error
         * that occurred.
         * @param group an #XfwWorkspaceGroup.
         * @returns %TRUE if workspace assignment succeeded, %FALSE otherwise. If %FALSE, and @error is non-%NULL, an error will be returned that must be freed using g_error_free().
         */
        assign_to_workspace_group(group: WorkspaceGroup): boolean;
        /**
         * Fetches this workspace's capabilities bitfield.
         *
         * The bitfield describes what operations are available on this workspace.
         * @returns a #XfwWorkspaceCapabilities bitfield.
         */
        get_capabilities(): WorkspaceCapabilities;
        /**
         * Fetches the position and size of the workspace in screen coordinates.
         *
         * The values in the returned #GdkRectangle are owned by `workspace` and should
         * not be modified.
         * @returns a #GdkRectangle, owned by @workspace.
         */
        get_geometry(): Gdk.Rectangle;
        /**
         * Fetches this workspace's opaque ID.
         * @returns A UTF-8 formatted string, owned by @workspace.
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
         * @returns A UTF-8 formatted string, owned by @workspace.
         */
        get_name(): string;
        /**
         * Fetches the workspace that resides in `direction` from the `workspace,` if
         * any.  If workspace is on the edge of the layout, and `direction` points off
         * the edge of the layout, will return %NULL.
         * @param direction an #XfwDirection.
         * @returns a #XfwWorkspace, owned by the parent @group, or %NULL if no workspace exists in @direction.
         */
        get_neighbor(direction: Direction): Workspace | null;
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
         * @returns a #XfwWorkspaceState bitfield.
         */
        get_state(): WorkspaceState;
        /**
         * Fetches the group this workspace belongs to, if any.
         * @returns a #XfwWorkspaceGroup instance, owned by @workspace, or %NULL if the workspace is not a member of any groups.
         */
        get_workspace_group(): WorkspaceGroup | null;
        /**
         * Attempts to remove `workspace` from its group.
         *
         * On failure, `error` (if provided) will be set to a description of the error
         * that occurred.
         * @returns %TRUE if workspace removal succeeded, %FALSE otherwise.  If %FALSE, and @error is non-%NULL, an error will be returned that must be freed using #g_error_free().
         */
        remove(): boolean;
    }

    export const Workspace: WorkspaceNamespace;

    module WorkspaceGroup {
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
    interface WorkspaceGroup extends GObject.Object {
        // Properties

        /**
         * The active #XfwWorkspace on this #XfwWorkspaceGroup, or %NULL.
         */
        get active_workspace(): Workspace;
        /**
         * The active #XfwWorkspace on this #XfwWorkspaceGroup, or %NULL.
         */
        get activeWorkspace(): Workspace;
        /**
         * The list of #GdkMonitor this #XfwWorkspaceGroup is displayed on.
         */
        get monitors(): any;
        /**
         * The #GdkScreen used when creating the #XfwScreen that owns this
         * #XfwWorkspaceGroup.
         */
        get screen(): Gdk.Screen;
        /**
         * The #XfwWorkspaceManager instance that manages this #XfwWorkspaceGroup.
         */
        get workspace_manager(): WorkspaceManager;
        /**
         * The #XfwWorkspaceManager instance that manages this #XfwWorkspaceGroup.
         */
        get workspaceManager(): WorkspaceManager;
        /**
         * The list of #XfwWorkspace in this #XfwWorkspaceGroup.
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
         * @returns %TRUE if workspace creation succeeded, %FALSE otherwise.  If %FALSE, and @error is non-%NULL, an error will be returned that must be freed using #g_error_free().
         */
        create_workspace(name: string): boolean;
        /**
         * Gets the active workspace on `group,` if there is one.
         * @returns an #XfwWorkspace, or %NULL if there is no active workspace.
         */
        get_active_workspace(): Workspace | null;
        /**
         * Returns a bitfield describing operations allowed on this `group`.
         * @returns an #XfwWorkspaceGroupCapabilities bitfield.
         */
        get_capabilities(): WorkspaceGroupCapabilities;
        /**
         * Lists the physical monitors that this workspace group displays on.
         * @returns A list of #GdkMonitor, or %NULL if @group is not displayed on any monitors.  The list and its contents are owned by @group.
         */
        get_monitors(): Gdk.Monitor[] | null;
        /**
         * Fetches the number of workspaces in `group`.
         * @returns an unsigned integer describing the number of workspaces.
         */
        get_workspace_count(): number;
        /**
         * Fetches the #XfwWorkspaceManager instance that owns `group`.
         * @returns a #XfwWorkspaceManager, owned by @group.
         */
        get_workspace_manager(): WorkspaceManager;
        /**
         * Lists the workspaces in `group`.
         * @returns the list of #XfwWorkspace in @group, or %NULL if there are no workspaces. The list and its contents are owned by @group.
         */
        list_workspaces(): Workspace[] | null;
        /**
         * Moves the workspace group to a new location, and possibly a new monitor.
         *
         * On failure, `error` (if provided) will be set to a description of the error
         * that occurred.
         * @param x a coordinate in the horizontal direction.
         * @param y a coordinate in the vertical direction.
         * @returns %TRUE if moving the workspace group succeeded, %FALSE otherwise.  If %FALSE, and @error is non-%NULL, an error will be returned that must be freed using #g_error_free().
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
         * @returns %TRUE if changing the layout of @group succeede, %FALSE otherwise.  If %FALSE, and @error is non-%NULL, an error will be returned that must be freed using #g_error_free().
         */
        set_layout(rows: number, columns: number): boolean;
    }

    export const WorkspaceGroup: WorkspaceGroupNamespace;

    module WorkspaceManager {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            screen: Gdk.Screen;
        }
    }

    export interface WorkspaceManagerNamespace {
        $gtype: GObject.GType<WorkspaceManager>;
        prototype: WorkspaceManager;
    }
    interface WorkspaceManager extends GObject.Object {
        // Properties

        /**
         * The #GdkScreen instance used to construct the #XfwScreen that owns this
         * workspace manager.
         */
        get screen(): Gdk.Screen;

        // Methods

        /**
         * Lists all workspace groups known to the workspace manager.
         * @returns the list of #XfwWorkspaceGroup managed by @manager, or %NULL if there are no workspace groups.  The list and its contents are owned by @manager.
         */
        list_workspace_groups(): WorkspaceGroup[] | null;
        /**
         * List all workspaces known to the workspace manager.
         * @returns the list of #XfwWorkspace managed by @manager, or %NULL if there are no workspaces.  The list and its contents are owned by @manager.
         */
        list_workspaces(): Workspace[] | null;
    }

    export const WorkspaceManager: WorkspaceManagerNamespace;

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
