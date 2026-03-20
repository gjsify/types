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

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    export namespace MonitorSubpixel {
        export const $gtype: GObject.GType<MonitorSubpixel>;
    }

    /**
     * Describes how the color components of the physical pixels are laid out on a
     * monitor.
     * @gir-type Enum
     * @since 4.19.4
     */
    enum MonitorSubpixel {
        /**
         * unknown subpixel ordering.
         */
        UNKNOWN,
        /**
         * no subpixel geometry.
         */
        NONE,
        /**
         * horizontal RGB.
         */
        HRGB,
        /**
         * horizontal BGR.
         */
        HBGR,
        /**
         * vertical RGB.
         */
        VRGB,
        /**
         * vertical BGR.
         */
        VBGR,
    }

    /**
     * Describes the rotation and reflection applied to a monitor.
     * @gir-type Struct
     */
    class MonitorTransform {
        static $gtype: GObject.GType<MonitorTransform>;

        // Static fields

        /**
         * no transformation applied.
         */
        static NORMAL: number;
        /**
         * rotated counter-clockwise by 90 degrees.
         */
        static '90': number;
        /**
         * rotated counter-clockwise by 180 degrees.
         */
        static '180': number;
        /**
         * rotated counter-clockwise by 270 degrees.
         */
        static '270': number;
        /**
         * flipped along a vertical axis.
         */
        static FLIPPED: number;
        /**
         * flipped along a vertical axis and rotated
         * counter-clockwise by 90 degrees.
         */
        static FLIPPED_90: number;
        /**
         * flipped
         * along a vertical axis and rotated counter-clockwise by 180 degrees.
         */
        static FLIPPED_180: number;
        /**
         * flipped along a vertical axis and
         * rotated counter-clockwise by 270 degrees.
         */
        static FLIPPED_270: number;
    }

    /**
     * @gir-type Enum
     */
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
     * @gir-type Flags
     */
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

    /**
     * @gir-type Flags
     */
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

    /**
     * @gir-type Flags
     */
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

    /**
     * @gir-type Flags
     */
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

    /**
     * @gir-type Flags
     */
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
             * @run-last
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
            instances: ApplicationInstance[];
            name: string;
            windows: Window[];
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
         * @read-only
         */
        get class_id(): string;
        /**
         * The application class id.
         * @since 4.19.3
         * @read-only
         */
        get classId(): string;
        /**
         * The {@link Gio.Icon} that represents this application.
         * @read-only
         */
        get gicon(): Gio.Icon;
        /**
         * The list of {@link Libxfce4windowing.ApplicationInstance} belonging to the application.
         * @read-only
         */
        get instances(): ApplicationInstance[];
        /**
         * The application name.
         * @read-only
         */
        get name(): string;
        /**
         * The list of {@link Libxfce4windowing.Window} belonging to the application.
         * @read-only
         */
        get windows(): Window[];

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

    namespace Monitor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::connector': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::fractional-scale': (pspec: GObject.ParamSpec) => void;
            'notify::gdk-monitor': (pspec: GObject.ParamSpec) => void;
            'notify::height-mm': (pspec: GObject.ParamSpec) => void;
            'notify::identifier': (pspec: GObject.ParamSpec) => void;
            'notify::is-primary': (pspec: GObject.ParamSpec) => void;
            'notify::logical-geometry': (pspec: GObject.ParamSpec) => void;
            'notify::make': (pspec: GObject.ParamSpec) => void;
            'notify::model': (pspec: GObject.ParamSpec) => void;
            'notify::physical-geometry': (pspec: GObject.ParamSpec) => void;
            'notify::refresh': (pspec: GObject.ParamSpec) => void;
            'notify::scale': (pspec: GObject.ParamSpec) => void;
            'notify::serial': (pspec: GObject.ParamSpec) => void;
            'notify::subpixel': (pspec: GObject.ParamSpec) => void;
            'notify::transform': (pspec: GObject.ParamSpec) => void;
            'notify::width-mm': (pspec: GObject.ParamSpec) => void;
            'notify::workarea': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            connector: string;
            description: string;
            fractional_scale: number;
            fractionalScale: number;
            gdk_monitor: Gdk.Monitor;
            gdkMonitor: Gdk.Monitor;
            height_mm: number;
            heightMm: number;
            identifier: string;
            is_primary: boolean;
            isPrimary: boolean;
            logical_geometry: Gdk.Rectangle;
            logicalGeometry: Gdk.Rectangle;
            make: string;
            model: string;
            physical_geometry: Gdk.Rectangle;
            physicalGeometry: Gdk.Rectangle;
            refresh: number;
            scale: number;
            serial: string;
            subpixel: MonitorSubpixel;
            transform: MonitorTransform;
            width_mm: number;
            widthMm: number;
            workarea: Gdk.Rectangle;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class Monitor extends GObject.Object {
        static $gtype: GObject.GType<Monitor>;

        // Properties

        /**
         * Physical/virtual connector name.
         * @since 4.19.4
         * @read-only
         */
        get connector(): string;
        /**
         * Human-readable description.
         * @since 4.19.4
         * @read-only
         */
        get description(): string;
        /**
         * UI fractional scaling factor.
         * @since 4.19.4
         * @read-only
         */
        get fractional_scale(): number;
        /**
         * UI fractional scaling factor.
         * @since 4.19.4
         * @read-only
         */
        get fractionalScale(): number;
        /**
         * The {@link Gdk.Monitor} corresponding to this monitor.
         *
         * Since 4.19.4
         * @read-only
         */
        get gdk_monitor(): Gdk.Monitor;
        /**
         * The {@link Gdk.Monitor} corresponding to this monitor.
         *
         * Since 4.19.4
         * @read-only
         */
        get gdkMonitor(): Gdk.Monitor;
        /**
         * Physical height of the monitor in millimeters.
         * @since 4.19.4
         * @read-only
         */
        get height_mm(): number;
        /**
         * Physical height of the monitor in millimeters.
         * @since 4.19.4
         * @read-only
         */
        get heightMm(): number;
        /**
         * Opaque, hopefully-unique monitor identifier.
         * @since 4.19.4
         * @read-only
         */
        get identifier(): string;
        /**
         * Whether or not this monitor is the primary monitor.
         * @since 4.19.4
         * @read-only
         */
        get is_primary(): boolean;
        /**
         * Whether or not this monitor is the primary monitor.
         * @since 4.19.4
         * @read-only
         */
        get isPrimary(): boolean;
        /**
         * Coordinates and size of the monitor in scaled logical pixels.
         * @since 4.19.4
         * @read-only
         */
        get logical_geometry(): Gdk.Rectangle;
        /**
         * Coordinates and size of the monitor in scaled logical pixels.
         * @since 4.19.4
         * @read-only
         */
        get logicalGeometry(): Gdk.Rectangle;
        /**
         * Manufacturer name.
         * @since 4.19.4
         * @read-only
         */
        get make(): string;
        /**
         * Product model name.
         * @since 4.19.4
         * @read-only
         */
        get model(): string;
        /**
         * Coordinates and size of the monitor in physical device pixels.
         * @since 4.19.4
         * @read-only
         */
        get physical_geometry(): Gdk.Rectangle;
        /**
         * Coordinates and size of the monitor in physical device pixels.
         * @since 4.19.4
         * @read-only
         */
        get physicalGeometry(): Gdk.Rectangle;
        /**
         * Current refresh rate, in millihertz.
         * @since 4.19.4
         * @read-only
         */
        get refresh(): number;
        /**
         * UI scaling factor.
         * @since 4.19.4
         * @read-only
         */
        get scale(): number;
        /**
         * Product serial number.
         * @since 4.19.4
         * @read-only
         */
        get serial(): string;
        /**
         * Hardware subpixel layout.
         * @since 4.19.4
         * @read-only
         */
        get subpixel(): MonitorSubpixel;
        /**
         * @read-only
         */
        get transform(): MonitorTransform;
        /**
         * Physical width of the monitor in millimeters.
         * @since 4.19.4
         * @read-only
         */
        get width_mm(): number;
        /**
         * Physical width of the monitor in millimeters.
         * @since 4.19.4
         * @read-only
         */
        get widthMm(): number;
        /**
         * @read-only
         */
        get workarea(): Gdk.Rectangle;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Monitor.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Monitor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Monitor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Monitor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Monitor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Monitor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Monitor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Monitor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Returns the name of the physical connector this monitor is connected to.
         *
         * This might be a string such as "eDP-1", "DP-3", or "HDMI-2".  Note that in
         * environments where the monitor is "virtual", a synthetic connector name may
         * be returned.
         * @returns A string owned by `monitor`.
         */
        get_connector(): string;
        /**
         * Returns a human-readable description of this monitor, suitable for
         * displaying in a user interface.
         * @returns A string owned by `monitor`.
         */
        get_description(): string;
        /**
         * Returns the monitor's scaling factor.
         * @returns A positive fractional scale.
         */
        get_fractional_scale(): number;
        /**
         * Returns the {@link Gdk.Monitor} that corresponds to `monitor`.
         * @returns A {@link Gdk.Monitor}.
         */
        get_gdk_monitor(): Gdk.Monitor;
        /**
         * Retrieves an opaque identifier for this monitor.  The identifier can usually
         * be relied upon to uniquely identify this monitor (even if you have multiple
         * identical monitors of the same make and model), assuming the monitor's
         * hardware is set up properly.
         *
         * This identifier should also be stable across application and machine
         * restarts.
         *
         * If the monitor's hardware is not set up properly, the identifier may not be
         * unique.  Unfortunately, this library cannot determine when this is the case.
         * @returns A string owned by `monitor`.
         */
        get_identifier(): string;
        /**
         * Retrieves the position and size of the monitor in logical application
         * pixels, which are affected by the monitor's fractional scale factor.
         */
        get_logical_geometry(): Gdk.Rectangle;
        /**
         * Returns the monitor's manufacturer's name, if available.
         * @returns A string owned by `monitor`, or `null`.
         */
        get_make(): string | null;
        /**
         * Returns the monitor's product model name, if available.
         * @returns A string owned by `monitor`, or `null`.
         */
        get_model(): string | null;
        /**
         * Retrieves the position and size of the monitor in physical device pixels.
         */
        get_physical_geometry(): Gdk.Rectangle;
        /**
         * Retrieves the physical width and height of the monitor in millimeters.
         */
        get_physical_size(): [number, number];
        /**
         * Returns the monitor's current refresh rate, in millihertz.
         * @returns A non-negative integer in mHz.
         */
        get_refresh(): number;
        /**
         * Returns the monitor's scaling factor, as an integer.
         * @returns A positive integer scale.
         */
        get_scale(): number;
        /**
         * Returns the monitor's serial number, if available.  Note that some
         * manufacturers do not program their monitor's hardware with unique serial
         * numbers.
         * @returns A string owned by `monitor`, or `null`.
         */
        get_serial(): string | null;
        /**
         * Returns the subpixel ordering of `monitor`.
         * @returns A value from the {@link Libxfce4windowing.MonitorSubpixel} enum.
         */
        get_subpixel(): MonitorSubpixel;
        /**
         * Returns the rotation and reflection transform set on `monitor`.
         * @returns A value from the {@link Libxfce4windowing.MonitorTransform} enum.
         */
        get_transform(): MonitorTransform;
        /**
         * Retrieves the workarea for `monitor`, which may exclude regions of the screen
         * for windows such as panels or docks.
         *
         * The returned geometry is in logical application pixels, which are affected
         * by the monitor's integer scale factor.  The origin is set to the top-left
         * corner of the monitor.
         */
        get_workarea(): Gdk.Rectangle;
    }

    namespace Screen {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when a new window becomes the active window.  Often the
             * active window will receive keyboard focus.  While `window` is
             * the previously-active window (if any, and may be `null`), the
             * newly-active window can be retrieved via
             * `xfw_screen_get_active_window`().
             * @signal
             * @run-last
             */
            'active-window-changed': (arg0: Window) => void;
            /**
             * Emitted when a monitor is added to `screen`.
             * @signal
             * @since 4.19.4
             * @run-last
             */
            'monitor-added': (arg0: Monitor) => void;
            /**
             * Emitted when a monitor is removed from `screen`.
             * @signal
             * @since 4.19.4
             * @run-last
             */
            'monitor-removed': (arg0: Monitor) => void;
            /**
             * Emitted when one of the following has changed about the monitors
             * attached to `screen`:
             *
             *   * A monitor was added.
             *   * A monitor was removed.
             *   * A monitor's resolution changed (including if the scale factor changed).
             *   * A monitor was re-positioned in the global screen space.
             *   * Which monitor is primary has changed.
             *
             * Note that changes such as the subpixel layout or model name will not
             * result in the emission of this signal.  Connect to the propert notify
             * signals on {@link Libxfce4windowing.Monitor} to be notified of changes in other aspects of the
             * monitor.
             * @signal
             * @since 4.19.4
             * @run-last
             */
            'monitors-changed': () => void;
            /**
             * Emitted when `seat` has been added to `screen`.
             * @signal
             * @run-last
             */
            'seat-added': (arg0: Seat) => void;
            /**
             * Emitted when `seat` has been added to `screen`.
             * @signal
             * @run-last
             */
            'seat-removed': (arg0: Seat) => void;
            /**
             * Emitted when a window is closed on the screen.
             * @signal
             * @run-last
             */
            'window-closed': (arg0: Window) => void;
            /**
             * Emitted when the window manager on `screen` has changed.
             *
             * Note that currently this signal is not emitted on Wayland.
             * @signal
             * @run-last
             */
            'window-manager-changed': () => void;
            /**
             * Emitted when a new window is opened on the screen.
             * @signal
             * @run-last
             */
            'window-opened': (arg0: Window) => void;
            /**
             * Emitted when the order of the windows as displayed on the screen has
             * changed.  Windows, in stacking order, can be retrieved via
             * `xfw_screen_get_windows_stacked`().
             *
             * Note that currently this signal is not emitted on Wayland.
             * @signal
             * @run-last
             */
            'window-stacking-changed': () => void;
            'notify::active-window': (pspec: GObject.ParamSpec) => void;
            'notify::gdk-screen': (pspec: GObject.ParamSpec) => void;
            'notify::show-desktop': (pspec: GObject.ParamSpec) => void;
            'notify::workspace-manager': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            active_window: Window;
            activeWindow: Window;
            gdk_screen: Gdk.Screen;
            gdkScreen: Gdk.Screen;
            show_desktop: boolean;
            showDesktop: boolean;
            workspace_manager: WorkspaceManager;
            workspaceManager: WorkspaceManager;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class Screen extends GObject.Object {
        static $gtype: GObject.GType<Screen>;

        // Properties

        /**
         * The currently-active window.
         * @read-only
         */
        get active_window(): Window;
        /**
         * The currently-active window.
         * @read-only
         */
        get activeWindow(): Window;
        /**
         * The {@link Gdk.Screen} instance used to construct this {@link Libxfce4windowing.Screen}.
         * @construct-only
         */
        get gdk_screen(): Gdk.Screen;
        /**
         * The {@link Gdk.Screen} instance used to construct this {@link Libxfce4windowing.Screen}.
         * @construct-only
         */
        get gdkScreen(): Gdk.Screen;
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
         * @read-only
         */
        get workspace_manager(): WorkspaceManager;
        /**
         * The {@link Libxfce4windowing.WorkspaceManager} that manages and describes workspace groups
         * and workspaces on this screen instance.
         * @read-only
         */
        get workspaceManager(): WorkspaceManager;

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
        connect<K extends keyof Screen.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Screen.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Screen.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Screen.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Screen.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Screen.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Retrieves the {@link Libxfce4windowing.Screen} instance corresponding to the default {@link Gdk.Screen}.
         */
        static get_default(): Screen;

        // Methods

        /**
         * Retrieves the window on `screen` that is currently active.
         * @returns an {@link Libxfce4windowing.Window}, or `null` if no window is active on `screen`.
         */
        get_active_window(): Window | null;
        /**
         * Retrieves the list of monitors currently attached and enabled on `screen`.
         * @returns the list of {@link Libxfce4windowing.Monitor} on `screen`, or `null` if there are no connected/enabled monitors.  The list and its contents are owned by `screen`.
         */
        get_monitors(): Monitor[] | null;
        /**
         * Returns the monitor designated as "primary".
         *
         * This function will do its best to return something other than `null`.  If the
         * windowing system has no concept of a primary monitor, or if the primary
         * monitor is unset, a likely candidate will be chosen from the list of
         * available monitors.
         *
         * However, if no monitors are connected, `null` can still be returned.
         * @returns `screen`'s primary {@link Libxfce4windowing.Monitor}, or `null`.
         */
        get_primary_monitor(): Monitor | null;
        /**
         * Returns the list of all {@link Libxfce4windowing.Seat} instances available on `screen`.
         * @returns a list of {@link Libxfce4windowing.Seat}.  The list and its contents are owned by `screen`.
         */
        get_seats(): Seat[] | null;
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

    namespace Seat {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Seat extends GObject.Object {
        static $gtype: GObject.GType<Seat>;

        // Properties

        /**
         * The seat's identifier.
         * @construct-only
         */
        get name(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Seat.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Seat.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Seat.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Seat.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Seat.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Seat.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Seat.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Seat.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Returns the name or identifier of `seat`.
         */
        get_name(): string;
    }

    namespace Window {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when `window`'s capabilities change.
             * @signal
             * @run-last
             */
            'capabilities-changed': (arg0: WindowCapabilities, arg1: WindowCapabilities) => void;
            /**
             * Emitted when at least one of the `window`'s class ids changes.
             * @signal
             * @since 4.19.3
             * @run-last
             */
            'class-changed': () => void;
            /**
             * Emitted when `window` is closed.
             * @signal
             * @run-last
             */
            closed: () => void;
            /**
             * Emitted when `window`'s position or size changes.
             * @signal
             * @run-last
             */
            'geometry-changed': () => void;
            /**
             * Emitted when `window`'s icon changes.
             * @signal
             * @run-last
             */
            'icon-changed': () => void;
            /**
             * Emitted when `window`'s name/title changes.
             * @signal
             * @run-last
             */
            'name-changed': () => void;
            /**
             * Emitted when `window`'s state changes.
             * @signal
             * @run-last
             */
            'state-changed': (arg0: WindowState, arg1: WindowState) => void;
            /**
             * Emitted when `window`'s type changes.
             * @signal
             * @run-last
             */
            'type-changed': (arg0: WindowType) => void;
            /**
             * Emitted when `window` is moved to a different worksapce.
             * @signal
             * @run-last
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
            monitors: Monitor[];
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
         * @read-only
         */
        get application(): Application;
        /**
         * The window's capabilities bitfield.
         * @read-only
         */
        get capabilities(): WindowCapabilities;
        /**
         * The window's class ids.
         * @since 4.19.3
         * @read-only
         */
        get class_ids(): string[];
        /**
         * The window's class ids.
         * @since 4.19.3
         * @read-only
         */
        get classIds(): string[];
        /**
         * The {@link Gio.Icon} that represents this window.
         * @read-only
         */
        get gicon(): Gio.Icon;
        /**
         * The list of {@link Libxfce4windowing.Monitor}<!-- -->s (if any) that the window is displayed on.
         * @read-only
         */
        get monitors(): Monitor[];
        /**
         * The window's name or title.
         * @read-only
         */
        get name(): string;
        /**
         * The {@link Libxfce4windowing.Screen} instances that owns this window.
         * @construct-only
         */
        get screen(): Screen;
        /**
         * The window's state bitfield.
         * @read-only
         */
        get state(): WindowState;
        /**
         * The window's type or function.
         * @read-only
         */
        get type(): WindowType;
        /**
         * @read-only
         */
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
         * @param seat
         * @param event_timestamp
         */
        activate(seat: Seat, event_timestamp: number): boolean;
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
         * @returns A list of {@link Libxfce4windowing.Monitor} instances, or `null`.  The list and its contents are owned by `window` and should not be modified or freed.
         */
        get_monitors(): Monitor[] | null;
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
    type MonitorClass = typeof Monitor;
    /**
     * @gir-type Alias
     */
    type ScreenClass = typeof Screen;
    /**
     * @gir-type Alias
     */
    type SeatClass = typeof Seat;
    /**
     * @gir-type Alias
     */
    type WindowClass = typeof Window;
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
    type WorkspaceManagerIface = typeof WorkspaceManager;
    /**
     * @gir-type Struct
     */
    abstract class WorkspaceManagerInterface {
        static $gtype: GObject.GType<WorkspaceManagerInterface>;
    }

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
         * @read-only
         */
        get group(): WorkspaceGroup;
        /**
         * The opaque ID of this workspace.
         * @read-only
         */
        get id(): string;
        /**
         * The y-coordinate of the workspace on a 2D grid.
         * @read-only
         */
        get layout_column(): number;
        /**
         * The y-coordinate of the workspace on a 2D grid.
         * @read-only
         */
        get layoutColumn(): number;
        /**
         * The x-coordinate of the workspace on a 2D grid.
         * @read-only
         */
        get layout_row(): number;
        /**
         * The x-coordinate of the workspace on a 2D grid.
         * @read-only
         */
        get layoutRow(): number;
        /**
         * The human-readable name of this workspace.
         */
        get name(): string;
        set name(val: string);
        /**
         * The ordinal number of this workspace.
         * @construct-only
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
            monitors: Monitor[];
            screen: Screen;
            workspace_manager: WorkspaceManager;
            workspaceManager: WorkspaceManager;
            workspaces: Workspace[];
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
         * @read-only
         */
        get active_workspace(): Workspace;
        /**
         * The active {@link Libxfce4windowing.Workspace} on this {@link Libxfce4windowing.WorkspaceGroup}, or `null`.
         * @read-only
         */
        get activeWorkspace(): Workspace;
        /**
         * The list of {@link Libxfce4windowing.Monitor} this {@link Libxfce4windowing.WorkspaceGroup} is displayed on.
         * @read-only
         */
        get monitors(): Monitor[];
        /**
         * The {@link Libxfce4windowing.Screen} that owns this {@link Libxfce4windowing.WorkspaceGroup}.
         * @construct-only
         */
        get screen(): Screen;
        /**
         * The {@link Libxfce4windowing.WorkspaceManager} instance that manages this {@link Libxfce4windowing.WorkspaceGroup}.
         * @construct-only
         */
        get workspace_manager(): WorkspaceManager;
        /**
         * The {@link Libxfce4windowing.WorkspaceManager} instance that manages this {@link Libxfce4windowing.WorkspaceGroup}.
         * @construct-only
         */
        get workspaceManager(): WorkspaceManager;
        /**
         * The list of {@link Libxfce4windowing.Workspace} in this {@link Libxfce4windowing.WorkspaceGroup}.
         * @read-only
         */
        get workspaces(): Workspace[];

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
         * @returns A list of {@link Libxfce4windowing.Monitor}, or `null` if `group` is not displayed on any monitors.  The list and its contents are owned by `group`.
         */
        get_monitors(): Monitor[] | null;
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
            screen: Screen;
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
         * The {@link Libxfce4windowing.Screen} instance that owns this workspace manager.
         * @construct-only
         */
        get screen(): Screen;

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
