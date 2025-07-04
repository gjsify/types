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

export namespace XApp {
    /**
     * XApp-1.0
     */

    class IconSize {
        static $gtype: GObject.GType<IconSize>;

        // Static fields

        static '16': number;
        static '22': number;
        static '24': number;
        static '32': number;
        static '48': number;
        static '96': number;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * Represents the direction of icon scroll events.
     */

    /**
     * Represents the direction of icon scroll events.
     */
    export namespace ScrollDirection {
        export const $gtype: GObject.GType<ScrollDirection>;
    }

    enum ScrollDirection {
        /**
         * Scroll theoretical content up.
         */
        UP,
        /**
         * Scroll theoretical content down.
         */
        DOWN,
        /**
         * Scroll theoretical content left.
         */
        LEFT,
        /**
         * Scroll theoretical content right.
         */
        RIGHT,
    }

    export namespace StatusIconState {
        export const $gtype: GObject.GType<StatusIconState>;
    }

    enum StatusIconState {
        /**
         * The #XAppStatusIcon is currently being handled
         * by an #XAppStatusIconMonitor (usually in an applet).
         */
        NATIVE,
        /**
         * The #XAppStatusIcon is currently being handled
         * by a legacy system tray implementation (using GtkStatusIcon).
         */
        FALLBACK,
        /**
         * The #XAppStatusIcon is not currently being handled by any
         * kind of status icon implementation.
         */
        NO_SUPPORT,
    }
    /**
     * Provides the path to the system's temporary files folder. This is identical to g_get_tmp_dir,
     * but includes the /dev/shm ramdisk as the first choice for a temporary folder.
     * @returns the directory to use for temporary files.
     */
    function get_tmp_dir(): string;
    /**
     * Converts a pango font description string to a string suitable for use with the css "font" tag. The font description must contain the font family and font size or conversion will fail and %NULL will be returned
     * @param pango_font_string a pango font description string
     * @returns the css compatible font string or %NULL if the conversion failed.
     */
    function pango_font_string_to_css(pango_font_string: string): string;
    /**
     * Sets the icon name hint for a window manager (like muffin) to make
     * available when applications want to change their icons during runtime
     * without having to resort to the internal low-res pixbufs that GdkWindow
     * sets on the client side.  This also chains up and calls GtkWindow.set_icon_from_file
     * for convenience and compatibility.  Set to %NULL to unset.
     * @param window The #GtkWindow to set the icon name for
     * @param file_name The icon path to set, or %NULL to unset.
     */
    function set_window_icon_from_file(window: Gtk.Window, file_name?: string | null): void;
    /**
     * Sets the icon name hint for a window manager (like muffin) to make
     * available when applications want to change their icons during runtime
     * without having to resort to the internal low-res pixbufs that GdkWindow
     * sets on the client side.  This is a function, not a method, for taking
     * advantage of this feature with descendants of GtkWindows, such as
     * GtkDialogs.  Sets gtk_window_set_icon_name as well, to avoid needing
     * to have two calls each time.  Set to %NULL to unset.
     * @param window The #GtkWindow to set the icon name for
     * @param icon_name The icon name to set, or %NULL to unset.
     */
    function set_window_icon_name(window: Gtk.Window, icon_name?: string | null): void;
    /**
     * Sets the progress hint for a window manager (like muffin) to make
     * available when applications want to display the application's progress
     * in some operation. The value sent to the WM will be clamped to
     * between 0 and 100.
     *
     * Note: If a window will stick around after progress is complete, you will
     * probably need to set progress to 0 to remove any progress effects on taskbars
     * and window lists.
     *
     * Setting progress will also cancel the 'pulsing' flag on the window as
     * well, if it has been set.
     * @param window The #GtkWindow to set the progress for
     * @param progress The value to set for progress.
     */
    function set_window_progress(window: Gtk.Window, progress: number): void;
    /**
     * Sets the progress pulse hint hint for a window manager (like muffin)
     * to make available when applications want to display indeterminate or
     * ongoing progress in a task manager.
     *
     * Note: If a window will stick around after progress is complete, you will
     * probably need to set progress to 0 to remove any progress effects on taskbars
     * and window lists.  This will also remove the pulse state, if it is set.
     *
     * Setting an explicit progress value will unset this flag.
     * @param window The #GtkWindow to set the progress for
     * @param pulse Whether to have pulsing set or not.
     */
    function set_window_progress_pulse(window: Gtk.Window, pulse: boolean): void;
    /**
     * Sets the icon name hint for a window manager (like muffin) to make
     * available when applications want to change their icons during runtime
     * without having to resort to the internal low-res pixbufs that GdkWindow
     * sets on the client side.  This is a function, not a method, for applying
     * the icon name property for a given (possibly foreign) window, by passing
     * the window's XID.  Set to %NULL to unset.
     * @param xid The Window to set the icon name for
     * @param file_name The icon path to set, or %NULL to unset.
     */
    function set_xid_icon_from_file(xid: number, file_name?: string | null): void;
    /**
     * Sets the icon name hint for a window manager (like muffin) to make
     * available when applications want to change their icons during runtime
     * without having to resort to the internal low-res pixbufs that GdkWindow
     * sets on the client side.  This is a function, not a method, for applying
     * the icon name property for a given (possibly foreign) window, by passing
     * the window's XID.  Set to %NULL to unset.
     * @param xid The Window to set the icon name for
     * @param icon_name The icon name to set, or %NULL to unset.
     */
    function set_xid_icon_name(xid: number, icon_name?: string | null): void;
    /**
     * Sets the progress hint for a window manager (like muffin) to make
     * available when applications want to display the application's progress
     * in some operation. The value sent to the WM will be clamped to
     * between 0 and 100.
     *
     * Setting progress will also cancel the 'pulsing' flag on the window as
     * well, if it has been set.
     *
     * Note: If a window will stick around after progress is complete, you will
     * probably need to set progress to 0 to remove any progress effects on taskbars
     * and window lists.
     *
     * This is a function, not a method, for applying the progress property for
     * a given (possibly foreign) window, by passing the window's XID.
     * @param xid The Window to set the progress for
     * @param progress The value to set for progress.
     */
    function set_xid_progress(xid: number, progress: number): void;
    /**
     * Sets the progress pulse hint hint for a window manager (like muffin)
     * to make available when applications want to display indeterminate or
     * ongoing progress in a task manager.
     *
     * Note: If a window will stick around after progress is complete, you will
     * probably need to set progress to 0 to remove any progress effects on taskbars
     * and window lists.
     *
     * Setting an explicit progress value will unset this flag.
     * @param xid The Window to set the progress for
     * @param pulse Whether to have pulsing set or not.
     */
    function set_xid_progress_pulse(xid: number, pulse: boolean): void;
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-x-StatusIcon.top_of_page">org.x.StatusIcon</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function status_icon_interface_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #XAppStatusIconInterface interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function status_icon_interface_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-net-hadess-SwitcherooControl.top_of_page">net.hadess.SwitcherooControl</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function switcheroo_control_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #XAppSwitcherooControl interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function switcheroo_control_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    /**
     * Check if the Session Manager is currently in the "Running" phase.
     * @returns %TRUE if the session is running.
     */
    function util_get_session_is_running(): boolean;
    /**
     * Performs a check to see if on-demand mode for discrete graphics
     * is supported.
     * @returns %TRUE if supported.
     */
    function util_gpu_offload_supported(): boolean;
    interface FavoritesItemSelectedCallback {
        (favorites: Favorites, uri: string): void;
    }
    namespace DarkModeManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class DarkModeManager extends GObject.Object {
        static $gtype: GObject.GType<DarkModeManager>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DarkModeManager.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DarkModeManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](prefer_dark_mode: boolean): DarkModeManager;

        // Signals

        connect<K extends keyof DarkModeManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DarkModeManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DarkModeManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DarkModeManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DarkModeManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DarkModeManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Favorites {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            changed: () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Favorites extends GObject.Object {
        static $gtype: GObject.GType<Favorites>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Favorites.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Favorites.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Favorites.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Favorites.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Favorites.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Favorites.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Favorites.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Favorites.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Returns the #XAppFavorites instance.
         */
        static get_default(): Favorites;

        // Methods

        /**
         * Adds a new favorite.  If the uri already exists, this does nothing.
         * @param uri The uri the favorite is for
         */
        add(uri: string): void;
        /**
         * Generates a list of favorite GtkActions.
         * @param mimetypes The mimetypes to filter for, or NULL to include all favorites.
         * @returns a new #GtkActionGroup populated with a list of favorites, or NULL             if there are no favorites.
         */
        create_actions(mimetypes?: string | null): Gtk.Action[];
        /**
         * Generates a GtkMenu widget populated with favorites. The callback will be called when
         * a menu item has been activated, and will include the uri of the respective item.
         * @param mimetypes The mimetypes to filter for, or NULL to include all favorites.
         * @param callback (closure user_data): The callback to use when a menu item has been selected.
         * @returns a new #GtkMenu populated with a list of favorites, or NULL             if there are no favorites.
         */
        create_menu(mimetypes: string | null, callback: FavoritesItemSelectedCallback): Gtk.Widget;
        /**
         * Looks for an XAppFavoriteInfo that corresponds to `display_name`.
         * @param display_name The display name to lookup info for.
         * @returns an XAppFavoriteInfo or NULL if one was not found. This is owned          by the favorites manager and should not be freed.
         */
        find_by_display_name(display_name: string): FavoriteInfo;
        /**
         * Looks for an XAppFavoriteInfo that corresponds to `uri`.
         * @param uri The uri to lookup info for.
         * @returns an XAppFavoriteInfo or NULL if one was not found. This is owned          by the favorites manager and should not be freed.
         */
        find_by_uri(uri: string): FavoriteInfo;
        /**
         * Gets a list of all favorites.  If mimetype is not %NULL, the list will
         * contain only favorites with that mimetype.
         * @param mimetypes The mimetypes to filter by for results
         * @returns a list of #XAppFavoriteInfos.             Free the list with #g_list_free, free elements with #xapp_favorite_info_free.
         */
        get_favorites(mimetypes?: string[] | null): FavoriteInfo[];
        get_n_favorites(): number;
        /**
         * Opens a favorite in its default app.
         * @param uri The uri for the favorite to launch
         * @param timestamp The timestamp from an event or 0
         */
        launch(uri: string, timestamp: number): void;
        /**
         * Removes a favorite from the list.
         * @param uri The uri for the favorite being removed
         */
        remove(uri: string): void;
        /**
         * Removes old_uri and adds new_uri. This is mainly for file managers to use as
         * a convenience instead of add/remove, and guarantees the result, without having to
         * worry about multiple dbus calls (gsettings).
         * @param old_uri the old favorite's uri.
         * @param new_uri The new uri.
         */
        rename(old_uri: string, new_uri: string): void;
    }

    namespace GpuOffloadHelper {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            ready: (arg0: boolean) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class GpuOffloadHelper extends GObject.Object {
        static $gtype: GObject.GType<GpuOffloadHelper>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GpuOffloadHelper.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GpuOffloadHelper.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof GpuOffloadHelper.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GpuOffloadHelper.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GpuOffloadHelper.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GpuOffloadHelper.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GpuOffloadHelper.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GpuOffloadHelper.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Creates a new #XAppGpuOffloadHelper instance.
         *
         * The #XAppGpuOffloadHelper::ready signal will be emitted when the helper is initialized (successfully or not).
         */
        static get(): GpuOffloadHelper;
        /**
         * Creates a new #XAppGpuOffloadHelper instance. This performs initialization synchronously,
         * and can potentially block.
         *
         * Use xapp_gpu_offload_helper_is_ready() to see if the helper was initialized successfully.
         */
        static get_sync(): GpuOffloadHelper;

        // Methods

        /**
         * Returns an #XAppGpuInfo for the default GPU.
         * @returns the default #XAppGpuInfo. Do not free
         */
        get_default_info(): GpuInfo;
        /**
         * Returns an #XAppGpuInfo with the given ID.
         * @param id The ID of the info to retrieve.
         * @returns the appropriate #XAppGpuInfo, or %NULL if @id was invalid.
         */
        get_info_by_id(id: number): GpuInfo;
        /**
         * Gets the number of GPUs noticed by Switcheroo.
         * @returns the total number of GPUs. A return value larger than 1 implies there are offloadable GPUs available.
         */
        get_n_gpus(): number;
        /**
         * Generates a list of #XAppGpuInfos that can be offloaded to, if there are any.
         * @returns a list of #XAppGpuInfos or %NULL if there is only a single GPU. The elements are owned by @helper but the container itself should be freed.
         */
        get_offload_infos(): GpuInfo[];
        /**
         * Checks if there is a non-default GPU available for offloading.
         * @returns %TRUE if there is an extra GPU available.
         */
        is_offload_supported(): boolean;
        /**
         * Checks if the helper is ready and valid. This does not mean
         * offload support exists.
         * @returns %TRUE if the helper has been successfully initialized.
         */
        is_ready(): boolean;
    }

    namespace GtkWindow {
        // Signal signatures
        interface SignalSignatures extends Gtk.Window.SignalSignatures {
            'notify::accept-focus': (pspec: GObject.ParamSpec) => void;
            'notify::application': (pspec: GObject.ParamSpec) => void;
            'notify::attached-to': (pspec: GObject.ParamSpec) => void;
            'notify::decorated': (pspec: GObject.ParamSpec) => void;
            'notify::default-height': (pspec: GObject.ParamSpec) => void;
            'notify::default-width': (pspec: GObject.ParamSpec) => void;
            'notify::deletable': (pspec: GObject.ParamSpec) => void;
            'notify::destroy-with-parent': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-map': (pspec: GObject.ParamSpec) => void;
            'notify::focus-visible': (pspec: GObject.ParamSpec) => void;
            'notify::gravity': (pspec: GObject.ParamSpec) => void;
            'notify::has-resize-grip': (pspec: GObject.ParamSpec) => void;
            'notify::has-toplevel-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hide-titlebar-when-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::is-active': (pspec: GObject.ParamSpec) => void;
            'notify::is-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::mnemonics-visible': (pspec: GObject.ParamSpec) => void;
            'notify::modal': (pspec: GObject.ParamSpec) => void;
            'notify::resizable': (pspec: GObject.ParamSpec) => void;
            'notify::resize-grip-visible': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::screen': (pspec: GObject.ParamSpec) => void;
            'notify::skip-pager-hint': (pspec: GObject.ParamSpec) => void;
            'notify::skip-taskbar-hint': (pspec: GObject.ParamSpec) => void;
            'notify::startup-id': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::transient-for': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::type-hint': (pspec: GObject.ParamSpec) => void;
            'notify::urgency-hint': (pspec: GObject.ParamSpec) => void;
            'notify::window-position': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Window.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {}
    }

    class GtkWindow extends Gtk.Window implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<GtkWindow>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GtkWindow.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GtkWindow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](type: Gtk.WindowType): GtkWindow;

        // Signals

        connect<K extends keyof GtkWindow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GtkWindow.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GtkWindow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GtkWindow.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GtkWindow.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GtkWindow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Sets the icon name hint for a window manager (like muffin) to make
         * available when applications want to change their icons during runtime
         * without having to resort to the internal low-res pixbufs that GdkWindow
         * sets on the client side.  This also chains up and calls GtkWindow.set_icon_from_file
         * for convenience and compatibility.  Set to %NULL to unset.
         * @param file_name The icon path to set, or %NULL to unset.
         */
        set_icon_from_file(file_name?: string | null): void;
        // Conflicted with Gtk.Window.set_icon_from_file
        set_icon_from_file(...args: never[]): any;
        /**
         * Sets the icon name hint for a window manager (like muffin) to make
         * available when applications want to change their icons during runtime
         * without having to resort to the internal low-res pixbufs that GdkWindow
         * sets on the client side.  This also chains up and calls GtkWindow.set_icon_name
         * for convenience and compatibility.  Set to %NULL to unset.
         * @param icon_name The icon name or path to set, or %NULL to unset.
         */
        set_icon_name(icon_name?: string | null): void;
        /**
         * Sets the progress hint for a window manager (like muffin) to make
         * available when applications want to display the application's progress
         * in some operation. The value sent to the WM will be clamped to
         * between 0 and 100.
         *
         * Note: If a window will stick around after progress is complete, you will
         * probably need to set progress to 0 to remove any progress effects on taskbars
         * and window lists.
         *
         * Setting progress will also cancel the 'pulsing' flag on the window as
         * well, if it has been set.
         * @param progress The value to set for progress.
         */
        set_progress(progress: number): void;
        /**
         * Sets the progress pulse hint hint for a window manager (like muffin)
         * to make available when applications want to display indeterminate or
         * ongoing progress in a task manager.
         *
         * Note: If a window will stick around after progress is complete, you will
         * probably need to set progress to 0 to remove any progress effects on taskbars
         * and window lists.  This will also remove the pulse state, if it is set.
         *
         * Setting an explicit progress value will unset this flag.
         * @param pulse Whether to have pulsing set or not.
         */
        set_progress_pulse(pulse: boolean): void;

        // Inherited methods
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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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

    namespace IconChooserButton {
        // Signal signatures
        interface SignalSignatures extends Gtk.Button.SignalSignatures {
            'notify::category': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::icon-size': (pspec: GObject.ParamSpec) => void;
            'notify::always-show-image': (pspec: GObject.ParamSpec) => void;
            'notify::image': (pspec: GObject.ParamSpec) => void;
            'notify::image-position': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::relief': (pspec: GObject.ParamSpec) => void;
            'notify::use-stock': (pspec: GObject.ParamSpec) => void;
            'notify::use-underline': (pspec: GObject.ParamSpec) => void;
            'notify::xalign': (pspec: GObject.ParamSpec) => void;
            'notify::yalign': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
            'notify::action-name': (pspec: GObject.ParamSpec) => void;
            'notify::action-target': (pspec: GObject.ParamSpec) => void;
            'notify::related-action': (pspec: GObject.ParamSpec) => void;
            'notify::use-action-appearance': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Button.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Actionable.ConstructorProps,
                Gtk.Activatable.ConstructorProps,
                Gtk.Buildable.ConstructorProps {
            category: string;
            icon: string;
            icon_size: Gtk.IconSize;
            iconSize: Gtk.IconSize;
        }
    }

    class IconChooserButton
        extends Gtk.Button
        implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable
    {
        static $gtype: GObject.GType<IconChooserButton>;

        // Properties

        /**
         * The category selected by default.
         */
        get category(): string;
        set category(val: string);
        /**
         * The preferred size to use when looking up icons. This only works with icon names.
         * Additionally, there is no guarantee that a selected icon name will exist in a
         * particular size.
         */
        get icon(): string;
        set icon(val: string);
        /**
         * The size to use when displaying the icon.
         */
        get icon_size(): Gtk.IconSize;
        set icon_size(val: Gtk.IconSize);
        /**
         * The size to use when displaying the icon.
         */
        get iconSize(): Gtk.IconSize;
        set iconSize(val: Gtk.IconSize);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: IconChooserButton.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<IconChooserButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): IconChooserButton;

        static new_with_size(icon_size: Gtk.IconSize): IconChooserButton;

        // Signals

        connect<K extends keyof IconChooserButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, IconChooserButton.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof IconChooserButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, IconChooserButton.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof IconChooserButton.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<IconChooserButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets a reference to the icon chooser dialog for the #XAppIconChooserButton.
         * This is useful for setting properties on the dialog.
         * @returns the #XAppIconChooserDialog
         */
        get_dialog(): IconChooserDialog;
        /**
         * Gets the icon from the #XAppIconChooserButton.
         * @returns a string representing the icon. This may be an icon name or a file path.
         */
        get_icon(): string;
        /**
         * Sets the icon on the #XAppIconChooserButton.
         * @param category a string representing the category selected by default.
         */
        set_default_category(category?: string | null): void;
        /**
         * Sets the icon on the #XAppIconChooserButton.
         * @param icon a string representing the icon to be set. This may be an icon name or a file path.
         */
        set_icon(icon?: string | null): void;
        /**
         * Sets the icon size used in the button.
         * @param icon_size the size of icon to use in the button, or -1 to use the default value.
         */
        set_icon_size(icon_size: Gtk.IconSize | null): void;

        // Inherited properties
        get action_name(): string;
        set action_name(val: string);
        get actionName(): string;
        set actionName(val: string);
        get action_target(): GLib.Variant;
        set action_target(val: GLib.Variant);
        get actionTarget(): GLib.Variant;
        set actionTarget(val: GLib.Variant);
        /**
         * The action that this activatable will activate and receive
         * updates from for various states and possibly appearance.
         *
         * > #GtkActivatable implementors need to handle the this property and
         * > call gtk_activatable_do_set_related_action() when it changes.
         */
        get related_action(): Gtk.Action;
        set related_action(val: Gtk.Action);
        /**
         * The action that this activatable will activate and receive
         * updates from for various states and possibly appearance.
         *
         * > #GtkActivatable implementors need to handle the this property and
         * > call gtk_activatable_do_set_related_action() when it changes.
         */
        get relatedAction(): Gtk.Action;
        set relatedAction(val: Gtk.Action);
        /**
         * Whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         *
         * See the #GtkAction documentation directly to find which properties
         * should be ignored by the #GtkActivatable when this property is %FALSE.
         *
         * > #GtkActivatable implementors need to handle this property
         * > and call gtk_activatable_sync_action_properties() on the activatable
         * > widget when it changes.
         */
        get use_action_appearance(): boolean;
        set use_action_appearance(val: boolean);
        /**
         * Whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         *
         * See the #GtkAction documentation directly to find which properties
         * should be ignored by the #GtkActivatable when this property is %FALSE.
         *
         * > #GtkActivatable implementors need to handle this property
         * > and call gtk_activatable_sync_action_properties() on the activatable
         * > widget when it changes.
         */
        get useActionAppearance(): boolean;
        set useActionAppearance(val: boolean);
        get app_paintable(): boolean;
        set app_paintable(val: boolean);
        get appPaintable(): boolean;
        set appPaintable(val: boolean);
        get can_default(): boolean;
        set can_default(val: boolean);
        get canDefault(): boolean;
        set canDefault(val: boolean);
        get can_focus(): boolean;
        set can_focus(val: boolean);
        get canFocus(): boolean;
        set canFocus(val: boolean);
        get composite_child(): boolean;
        get compositeChild(): boolean;
        /**
         * Whether the widget is double buffered.
         */
        get double_buffered(): boolean;
        set double_buffered(val: boolean);
        /**
         * Whether the widget is double buffered.
         */
        get doubleBuffered(): boolean;
        set doubleBuffered(val: boolean);
        get events(): Gdk.EventMask;
        set events(val: Gdk.EventMask);
        /**
         * Whether to expand in both directions. Setting this sets both #GtkWidget:hexpand and #GtkWidget:vexpand
         */
        get expand(): boolean;
        set expand(val: boolean);
        /**
         * Whether the widget should grab focus when it is clicked with the mouse.
         *
         * This property is only relevant for widgets that can take focus.
         *
         * Before 3.20, several widgets (GtkButton, GtkFileChooserButton,
         * GtkComboBox) implemented this property individually.
         */
        get focus_on_click(): boolean;
        set focus_on_click(val: boolean);
        /**
         * Whether the widget should grab focus when it is clicked with the mouse.
         *
         * This property is only relevant for widgets that can take focus.
         *
         * Before 3.20, several widgets (GtkButton, GtkFileChooserButton,
         * GtkComboBox) implemented this property individually.
         */
        get focusOnClick(): boolean;
        set focusOnClick(val: boolean);
        /**
         * How to distribute horizontal space if widget gets extra space, see #GtkAlign
         */
        get halign(): Gtk.Align;
        set halign(val: Gtk.Align);
        get has_default(): boolean;
        set has_default(val: boolean);
        get hasDefault(): boolean;
        set hasDefault(val: boolean);
        get has_focus(): boolean;
        set has_focus(val: boolean);
        get hasFocus(): boolean;
        set hasFocus(val: boolean);
        /**
         * Enables or disables the emission of #GtkWidget::query-tooltip on `widget`.
         * A value of %TRUE indicates that `widget` can have a tooltip, in this case
         * the widget will be queried using #GtkWidget::query-tooltip to determine
         * whether it will provide a tooltip or not.
         *
         * Note that setting this property to %TRUE for the first time will change
         * the event masks of the GdkWindows of this widget to include leave-notify
         * and motion-notify events.  This cannot and will not be undone when the
         * property is set to %FALSE again.
         */
        get has_tooltip(): boolean;
        set has_tooltip(val: boolean);
        /**
         * Enables or disables the emission of #GtkWidget::query-tooltip on `widget`.
         * A value of %TRUE indicates that `widget` can have a tooltip, in this case
         * the widget will be queried using #GtkWidget::query-tooltip to determine
         * whether it will provide a tooltip or not.
         *
         * Note that setting this property to %TRUE for the first time will change
         * the event masks of the GdkWindows of this widget to include leave-notify
         * and motion-notify events.  This cannot and will not be undone when the
         * property is set to %FALSE again.
         */
        get hasTooltip(): boolean;
        set hasTooltip(val: boolean);
        get height_request(): number;
        set height_request(val: number);
        get heightRequest(): number;
        set heightRequest(val: number);
        /**
         * Whether to expand horizontally. See gtk_widget_set_hexpand().
         */
        get hexpand(): boolean;
        set hexpand(val: boolean);
        /**
         * Whether to use the #GtkWidget:hexpand property. See gtk_widget_get_hexpand_set().
         */
        get hexpand_set(): boolean;
        set hexpand_set(val: boolean);
        /**
         * Whether to use the #GtkWidget:hexpand property. See gtk_widget_get_hexpand_set().
         */
        get hexpandSet(): boolean;
        set hexpandSet(val: boolean);
        get is_focus(): boolean;
        set is_focus(val: boolean);
        get isFocus(): boolean;
        set isFocus(val: boolean);
        /**
         * Sets all four sides' margin at once. If read, returns max
         * margin on any side.
         */
        get margin(): number;
        set margin(val: number);
        /**
         * Margin on bottom side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * gtk_widget_set_size_request() for example.
         */
        get margin_bottom(): number;
        set margin_bottom(val: number);
        /**
         * Margin on bottom side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * gtk_widget_set_size_request() for example.
         */
        get marginBottom(): number;
        set marginBottom(val: number);
        /**
         * Margin on end of widget, horizontally. This property supports
         * left-to-right and right-to-left text directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * gtk_widget_set_size_request() for example.
         */
        get margin_end(): number;
        set margin_end(val: number);
        /**
         * Margin on end of widget, horizontally. This property supports
         * left-to-right and right-to-left text directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * gtk_widget_set_size_request() for example.
         */
        get marginEnd(): number;
        set marginEnd(val: number);
        /**
         * Margin on left side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * gtk_widget_set_size_request() for example.
         */
        get margin_left(): number;
        set margin_left(val: number);
        /**
         * Margin on left side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * gtk_widget_set_size_request() for example.
         */
        get marginLeft(): number;
        set marginLeft(val: number);
        /**
         * Margin on right side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * gtk_widget_set_size_request() for example.
         */
        get margin_right(): number;
        set margin_right(val: number);
        /**
         * Margin on right side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * gtk_widget_set_size_request() for example.
         */
        get marginRight(): number;
        set marginRight(val: number);
        /**
         * Margin on start of widget, horizontally. This property supports
         * left-to-right and right-to-left text directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * gtk_widget_set_size_request() for example.
         */
        get margin_start(): number;
        set margin_start(val: number);
        /**
         * Margin on start of widget, horizontally. This property supports
         * left-to-right and right-to-left text directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * gtk_widget_set_size_request() for example.
         */
        get marginStart(): number;
        set marginStart(val: number);
        /**
         * Margin on top side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * gtk_widget_set_size_request() for example.
         */
        get margin_top(): number;
        set margin_top(val: number);
        /**
         * Margin on top side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * gtk_widget_set_size_request() for example.
         */
        get marginTop(): number;
        set marginTop(val: number);
        get name(): string;
        set name(val: string);
        get no_show_all(): boolean;
        set no_show_all(val: boolean);
        get noShowAll(): boolean;
        set noShowAll(val: boolean);
        /**
         * The requested opacity of the widget. See gtk_widget_set_opacity() for
         * more details about window opacity.
         *
         * Before 3.8 this was only available in GtkWindow
         */
        get opacity(): number;
        set opacity(val: number);
        get parent(): Gtk.Container;
        set parent(val: Gtk.Container);
        get receives_default(): boolean;
        set receives_default(val: boolean);
        get receivesDefault(): boolean;
        set receivesDefault(val: boolean);
        /**
         * The scale factor of the widget. See gtk_widget_get_scale_factor() for
         * more details about widget scaling.
         */
        get scale_factor(): number;
        /**
         * The scale factor of the widget. See gtk_widget_get_scale_factor() for
         * more details about widget scaling.
         */
        get scaleFactor(): number;
        get sensitive(): boolean;
        set sensitive(val: boolean);
        /**
         * The style of the widget, which contains information about how it will look (colors, etc).
         */
        get style(): Gtk.Style;
        set style(val: Gtk.Style);
        /**
         * Sets the text of tooltip to be the given string, which is marked up
         * with the [Pango text markup language][PangoMarkupFormat].
         * Also see gtk_tooltip_set_markup().
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not %NULL: #GtkWidget:has-tooltip
         * will automatically be set to %TRUE and there will be taken care of
         * #GtkWidget::query-tooltip in the default signal handler.
         *
         * Note that if both #GtkWidget:tooltip-text and #GtkWidget:tooltip-markup
         * are set, the last one wins.
         */
        get tooltip_markup(): string;
        set tooltip_markup(val: string);
        /**
         * Sets the text of tooltip to be the given string, which is marked up
         * with the [Pango text markup language][PangoMarkupFormat].
         * Also see gtk_tooltip_set_markup().
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not %NULL: #GtkWidget:has-tooltip
         * will automatically be set to %TRUE and there will be taken care of
         * #GtkWidget::query-tooltip in the default signal handler.
         *
         * Note that if both #GtkWidget:tooltip-text and #GtkWidget:tooltip-markup
         * are set, the last one wins.
         */
        get tooltipMarkup(): string;
        set tooltipMarkup(val: string);
        /**
         * Sets the text of tooltip to be the given string.
         *
         * Also see gtk_tooltip_set_text().
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not %NULL: #GtkWidget:has-tooltip
         * will automatically be set to %TRUE and there will be taken care of
         * #GtkWidget::query-tooltip in the default signal handler.
         *
         * Note that if both #GtkWidget:tooltip-text and #GtkWidget:tooltip-markup
         * are set, the last one wins.
         */
        get tooltip_text(): string;
        set tooltip_text(val: string);
        /**
         * Sets the text of tooltip to be the given string.
         *
         * Also see gtk_tooltip_set_text().
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not %NULL: #GtkWidget:has-tooltip
         * will automatically be set to %TRUE and there will be taken care of
         * #GtkWidget::query-tooltip in the default signal handler.
         *
         * Note that if both #GtkWidget:tooltip-text and #GtkWidget:tooltip-markup
         * are set, the last one wins.
         */
        get tooltipText(): string;
        set tooltipText(val: string);
        /**
         * How to distribute vertical space if widget gets extra space, see #GtkAlign
         */
        get valign(): Gtk.Align;
        set valign(val: Gtk.Align);
        /**
         * Whether to expand vertically. See gtk_widget_set_vexpand().
         */
        get vexpand(): boolean;
        set vexpand(val: boolean);
        /**
         * Whether to use the #GtkWidget:vexpand property. See gtk_widget_get_vexpand_set().
         */
        get vexpand_set(): boolean;
        set vexpand_set(val: boolean);
        /**
         * Whether to use the #GtkWidget:vexpand property. See gtk_widget_get_vexpand_set().
         */
        get vexpandSet(): boolean;
        set vexpandSet(val: boolean);
        get visible(): boolean;
        set visible(val: boolean);
        get width_request(): number;
        set width_request(val: number);
        get widthRequest(): number;
        set widthRequest(val: number);
        /**
         * The widget's window if it is realized, %NULL otherwise.
         */
        get window(): Gdk.Window;

        // Inherited methods
        /**
         * Gets the action name for `actionable`.
         *
         * See gtk_actionable_set_action_name() for more information.
         * @returns the action name, or %NULL if none is set
         */
        get_action_name(): string | null;
        /**
         * Gets the current target value of `actionable`.
         *
         * See gtk_actionable_set_action_target_value() for more information.
         * @returns the current target value
         */
        get_action_target_value(): GLib.Variant;
        /**
         * Specifies the name of the action with which this widget should be
         * associated.  If `action_name` is %NULL then the widget will be
         * unassociated from any previous action.
         *
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a #GtkApplicationWindow.
         *
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing #GtkApplicationWindow or its associated #GtkApplication,
         * respectively.  This is the same form used for actions in the #GMenu
         * associated with the window.
         * @param action_name an action name, or %NULL
         */
        set_action_name(action_name?: string | null): void;
        /**
         * Sets the target value of an actionable widget.
         *
         * If `target_value` is %NULL then the target value is unset.
         *
         * The target value has two purposes.  First, it is used as the
         * parameter to activation of the action associated with the
         * #GtkActionable widget. Second, it is used to determine if the widget
         * should be rendered as “active” — the widget is active if the state
         * is equal to the given target.
         *
         * Consider the example of associating a set of buttons with a #GAction
         * with string state in a typical “radio button” situation.  Each button
         * will be associated with the same action, but with a different target
         * value for that action.  Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value.  Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a #GVariant to set as the target value, or %NULL
         */
        set_action_target_value(target_value?: GLib.Variant | null): void;
        /**
         * Sets the action-name and associated string target value of an
         * actionable widget.
         *
         * `detailed_action_name` is a string in the format accepted by
         * g_action_parse_detailed_name().
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
         * See gtk_actionable_set_action_name() for more information.
         */
        vfunc_get_action_name(): string | null;
        /**
         * Gets the current target value of `actionable`.
         *
         * See gtk_actionable_set_action_target_value() for more information.
         */
        vfunc_get_action_target_value(): GLib.Variant;
        /**
         * Specifies the name of the action with which this widget should be
         * associated.  If `action_name` is %NULL then the widget will be
         * unassociated from any previous action.
         *
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a #GtkApplicationWindow.
         *
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing #GtkApplicationWindow or its associated #GtkApplication,
         * respectively.  This is the same form used for actions in the #GMenu
         * associated with the window.
         * @param action_name an action name, or %NULL
         */
        vfunc_set_action_name(action_name?: string | null): void;
        /**
         * Sets the target value of an actionable widget.
         *
         * If `target_value` is %NULL then the target value is unset.
         *
         * The target value has two purposes.  First, it is used as the
         * parameter to activation of the action associated with the
         * #GtkActionable widget. Second, it is used to determine if the widget
         * should be rendered as “active” — the widget is active if the state
         * is equal to the given target.
         *
         * Consider the example of associating a set of buttons with a #GAction
         * with string state in a typical “radio button” situation.  Each button
         * will be associated with the same action, but with a different target
         * value for that action.  Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value.  Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a #GVariant to set as the target value, or %NULL
         */
        vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
        /**
         * This is a utility function for #GtkActivatable implementors.
         *
         * When implementing #GtkActivatable you must call this when
         * handling changes of the #GtkActivatable:related-action, and
         * you must also use this to break references in #GObject->dispose().
         *
         * This function adds a reference to the currently set related
         * action for you, it also makes sure the #GtkActivatable->update()
         * method is called when the related #GtkAction properties change
         * and registers to the action’s proxy list.
         *
         * > Be careful to call this before setting the local
         * > copy of the #GtkAction property, since this function uses
         * > gtk_activatable_get_related_action() to retrieve the
         * > previous action.
         * @param action the #GtkAction to set
         */
        do_set_related_action(action: Gtk.Action): void;
        /**
         * Gets the related #GtkAction for `activatable`.
         * @returns the related #GtkAction if one is set.
         */
        get_related_action(): Gtk.Action;
        /**
         * Gets whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         * @returns whether @activatable uses its actions appearance.
         */
        get_use_action_appearance(): boolean;
        /**
         * Sets the related action on the `activatable` object.
         *
         * > #GtkActivatable implementors need to handle the #GtkActivatable:related-action
         * > property and call gtk_activatable_do_set_related_action() when it changes.
         * @param action the #GtkAction to set
         */
        set_related_action(action: Gtk.Action): void;
        /**
         * Sets whether this activatable should reset its layout and appearance
         * when setting the related action or when the action changes appearance
         *
         * > #GtkActivatable implementors need to handle the
         * > #GtkActivatable:use-action-appearance property and call
         * > gtk_activatable_sync_action_properties() to update `activatable`
         * > if needed.
         * @param use_appearance whether to use the actions appearance
         */
        set_use_action_appearance(use_appearance: boolean): void;
        /**
         * This is called to update the activatable completely, this is called
         * internally when the #GtkActivatable:related-action property is set
         * or unset and by the implementing class when
         * #GtkActivatable:use-action-appearance changes.
         * @param action the related #GtkAction or %NULL
         */
        sync_action_properties(action?: Gtk.Action | null): void;
        /**
         * This is called to update the activatable completely, this is called
         * internally when the #GtkActivatable:related-action property is set
         * or unset and by the implementing class when
         * #GtkActivatable:use-action-appearance changes.
         * @param action the related #GtkAction or %NULL
         */
        vfunc_sync_action_properties(action?: Gtk.Action | null): void;
        /**
         * Called to update the activatable when its related action’s properties change.
         * You must check the #GtkActivatable:use-action-appearance property only apply action
         * properties that are meant to effect the appearance accordingly.
         * @param action
         * @param property_name
         */
        vfunc_update(action: Gtk.Action, property_name: string): void;
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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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
        /**
         * For widgets that can be “activated” (buttons, menu items, etc.)
         * this function activates them. Activation is what happens when you
         * press Enter on a widget during key navigation. If `widget` isn't
         * activatable, the function returns %FALSE.
         * @returns %TRUE if the widget was activatable
         */
        activate(): boolean;
        /**
         * Installs an accelerator for this `widget` in `accel_group` that causes
         * `accel_signal` to be emitted if the accelerator is activated.
         * The `accel_group` needs to be added to the widget’s toplevel via
         * gtk_window_add_accel_group(), and the signal must be of type %G_SIGNAL_ACTION.
         * Accelerators added through this function are not user changeable during
         * runtime. If you want to support accelerators that can be changed by the
         * user, use gtk_accel_map_add_entry() and gtk_widget_set_accel_path() or
         * gtk_menu_item_set_accel_path() instead.
         * @param accel_signal widget signal to emit on accelerator activation
         * @param accel_group accel group for this widget, added to its toplevel
         * @param accel_key GDK keyval of the accelerator
         * @param accel_mods modifier key combination of the accelerator
         * @param accel_flags flag accelerators, e.g. %GTK_ACCEL_VISIBLE
         */
        add_accelerator(
            accel_signal: string,
            accel_group: Gtk.AccelGroup,
            accel_key: number,
            accel_mods: Gdk.ModifierType | null,
            accel_flags: Gtk.AccelFlags | null,
        ): void;
        /**
         * Adds the device events in the bitfield `events` to the event mask for
         * `widget`. See gtk_widget_set_device_events() for details.
         * @param device a #GdkDevice
         * @param events an event mask, see #GdkEventMask
         */
        add_device_events(device: Gdk.Device, events: Gdk.EventMask | null): void;
        /**
         * Adds the events in the bitfield `events` to the event mask for
         * `widget`. See gtk_widget_set_events() and the
         * [input handling overview][event-masks] for details.
         * @param events an event mask, see #GdkEventMask
         */
        add_events(events: number): void;
        /**
         * Adds a widget to the list of mnemonic labels for
         * this widget. (See gtk_widget_list_mnemonic_labels()). Note the
         * list of mnemonic labels for the widget is cleared when the
         * widget is destroyed, so the caller must make sure to update
         * its internal state at this point as well, by using a connection
         * to the #GtkWidget::destroy signal or a weak notifier.
         * @param label a #GtkWidget that acts as a mnemonic label for @widget
         */
        add_mnemonic_label(label: Gtk.Widget): void;
        /**
         * Queues an animation frame update and adds a callback to be called
         * before each frame. Until the tick callback is removed, it will be
         * called frequently (usually at the frame rate of the output device
         * or as quickly as the application can be repainted, whichever is
         * slower). For this reason, is most suitable for handling graphics
         * that change every frame or every few frames. The tick callback does
         * not automatically imply a relayout or repaint. If you want a
         * repaint or relayout, and aren’t changing widget properties that
         * would trigger that (for example, changing the text of a #GtkLabel),
         * then you will have to call gtk_widget_queue_resize() or
         * gtk_widget_queue_draw_area() yourself.
         *
         * gdk_frame_clock_get_frame_time() should generally be used for timing
         * continuous animations and
         * gdk_frame_timings_get_predicted_presentation_time() if you are
         * trying to display isolated frames at particular times.
         *
         * This is a more convenient alternative to connecting directly to the
         * #GdkFrameClock::update signal of #GdkFrameClock, since you don't
         * have to worry about when a #GdkFrameClock is assigned to a widget.
         * @param callback function to call for updating animations
         * @returns an id for the connection of this callback. Remove the callback     by passing it to gtk_widget_remove_tick_callback()
         */
        add_tick_callback(callback: Gtk.TickCallback): number;
        /**
         * Determines whether an accelerator that activates the signal
         * identified by `signal_id` can currently be activated.
         * This is done by emitting the #GtkWidget::can-activate-accel
         * signal on `widget;` if the signal isn’t overridden by a
         * handler or in a derived widget, then the default check is
         * that the widget must be sensitive, and the widget and all
         * its ancestors mapped.
         * @param signal_id the ID of a signal installed on @widget
         * @returns %TRUE if the accelerator can be activated.
         */
        can_activate_accel(signal_id: number): boolean;
        /**
         * This function is used by custom widget implementations; if you're
         * writing an app, you’d use gtk_widget_grab_focus() to move the focus
         * to a particular widget, and gtk_container_set_focus_chain() to
         * change the focus tab order. So you may want to investigate those
         * functions instead.
         *
         * gtk_widget_child_focus() is called by containers as the user moves
         * around the window using keyboard shortcuts. `direction` indicates
         * what kind of motion is taking place (up, down, left, right, tab
         * forward, tab backward). gtk_widget_child_focus() emits the
         * #GtkWidget::focus signal; widgets override the default handler
         * for this signal in order to implement appropriate focus behavior.
         *
         * The default ::focus handler for a widget should return %TRUE if
         * moving in `direction` left the focus on a focusable location inside
         * that widget, and %FALSE if moving in `direction` moved the focus
         * outside the widget. If returning %TRUE, widgets normally
         * call gtk_widget_grab_focus() to place the focus accordingly;
         * if returning %FALSE, they don’t modify the current focus location.
         * @param direction direction of focus movement
         * @returns %TRUE if focus ended up inside @widget
         */
        child_focus(direction: Gtk.DirectionType | null): boolean;
        /**
         * Emits a #GtkWidget::child-notify signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         *
         * This is the analogue of g_object_notify() for child properties.
         *
         * Also see gtk_container_child_notify().
         * @param child_property the name of a child property installed on the                  class of @widget’s parent
         */
        child_notify(child_property: string): void;
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;
        /**
         * Same as gtk_widget_path(), but always uses the name of a widget’s type,
         * never uses a custom name set with gtk_widget_set_name().
         */
        class_path(): [number, string, string];
        /**
         * Computes whether a container should give this widget extra space
         * when possible. Containers should check this, rather than
         * looking at gtk_widget_get_hexpand() or gtk_widget_get_vexpand().
         *
         * This function already checks whether the widget is visible, so
         * visibility does not need to be checked separately. Non-visible
         * widgets are not expanded.
         *
         * The computed expand value uses either the expand setting explicitly
         * set on the widget itself, or, if none has been explicitly set,
         * the widget may expand if some of its children do.
         * @param orientation expand direction
         * @returns whether widget tree rooted here should be expanded
         */
        compute_expand(orientation: Gtk.Orientation | null): boolean;
        /**
         * Creates a new #PangoContext with the appropriate font map,
         * font options, font description, and base direction for drawing
         * text for this widget. See also gtk_widget_get_pango_context().
         * @returns the new #PangoContext
         */
        create_pango_context(): Pango.Context;
        /**
         * Creates a new #PangoLayout with the appropriate font map,
         * font description, and base direction for drawing text for
         * this widget.
         *
         * If you keep a #PangoLayout created in this way around, you need
         * to re-create it when the widget #PangoContext is replaced.
         * This can be tracked by using the #GtkWidget::screen-changed signal
         * on the widget.
         * @param text text to set on the layout (can be %NULL)
         * @returns the new #PangoLayout
         */
        create_pango_layout(text?: string | null): Pango.Layout;
        /**
         * Destroys a widget.
         *
         * When a widget is destroyed all references it holds on other objects
         * will be released:
         *
         *  - if the widget is inside a container, it will be removed from its
         *  parent
         *  - if the widget is a container, all its children will be destroyed,
         *  recursively
         *  - if the widget is a top level, it will be removed from the list
         *  of top level widgets that GTK+ maintains internally
         *
         * It's expected that all references held on the widget will also
         * be released; you should connect to the #GtkWidget::destroy signal
         * if you hold a reference to `widget` and you wish to remove it when
         * this function is called. It is not necessary to do so if you are
         * implementing a #GtkContainer, as you'll be able to use the
         * #GtkContainerClass.remove() virtual function for that.
         *
         * It's important to notice that gtk_widget_destroy() will only cause
         * the `widget` to be finalized if no additional references, acquired
         * using g_object_ref(), are held on it. In case additional references
         * are in place, the `widget` will be in an "inert" state after calling
         * this function; `widget` will still point to valid memory, allowing you
         * to release the references you hold, but you may not query the widget's
         * own state.
         *
         * You should typically call this function on top level widgets, and
         * rarely on child widgets.
         *
         * See also: gtk_container_remove()
         */
        destroy(): void;
        /**
         * This function sets *`widget_pointer` to %NULL if `widget_pointer` !=
         * %NULL.  It’s intended to be used as a callback connected to the
         * “destroy” signal of a widget. You connect gtk_widget_destroyed()
         * as a signal handler, and pass the address of your widget variable
         * as user data. Then when the widget is destroyed, the variable will
         * be set to %NULL. Useful for example to avoid multiple copies
         * of the same dialog.
         * @param widget_pointer address of a variable that contains @widget
         */
        destroyed(widget_pointer: Gtk.Widget): Gtk.Widget;
        /**
         * Returns %TRUE if `device` has been shadowed by a GTK+
         * device grab on another widget, so it would stop sending
         * events to `widget`. This may be used in the
         * #GtkWidget::grab-notify signal to check for specific
         * devices. See gtk_device_grab_add().
         * @param device a #GdkDevice
         * @returns %TRUE if there is an ongoing grab on @device          by another #GtkWidget than @widget.
         */
        device_is_shadowed(device: Gdk.Device): boolean;
        /**
         * This function is equivalent to gtk_drag_begin_with_coordinates(),
         * passing -1, -1 as coordinates.
         * @param targets The targets (data formats) in which the    source can provide the data
         * @param actions A bitmask of the allowed drag actions for this drag
         * @param button The button the user clicked to start the drag
         * @param event The event that triggered the start of the drag,    or %NULL if none can be obtained.
         * @returns the context for this drag
         */
        drag_begin(
            targets: Gtk.TargetList,
            actions: Gdk.DragAction | null,
            button: number,
            event?: Gdk.Event | null,
        ): Gdk.DragContext;
        /**
         * Initiates a drag on the source side. The function only needs to be used
         * when the application is starting drags itself, and is not needed when
         * gtk_drag_source_set() is used.
         *
         * The `event` is used to retrieve the timestamp that will be used internally to
         * grab the pointer.  If `event` is %NULL, then %GDK_CURRENT_TIME will be used.
         * However, you should try to pass a real event in all cases, since that can be
         * used to get information about the drag.
         *
         * Generally there are three cases when you want to start a drag by hand by
         * calling this function:
         *
         * 1. During a #GtkWidget::button-press-event handler, if you want to start a drag
         * immediately when the user presses the mouse button.  Pass the `event`
         * that you have in your #GtkWidget::button-press-event handler.
         *
         * 2. During a #GtkWidget::motion-notify-event handler, if you want to start a drag
         * when the mouse moves past a certain threshold distance after a button-press.
         * Pass the `event` that you have in your #GtkWidget::motion-notify-event handler.
         *
         * 3. During a timeout handler, if you want to start a drag after the mouse
         * button is held down for some time.  Try to save the last event that you got
         * from the mouse, using gdk_event_copy(), and pass it to this function
         * (remember to free the event with gdk_event_free() when you are done).
         * If you really cannot pass a real event, pass %NULL instead.
         * @param targets The targets (data formats) in which the    source can provide the data
         * @param actions A bitmask of the allowed drag actions for this drag
         * @param button The button the user clicked to start the drag
         * @param event The event that triggered the start of the drag,    or %NULL if none can be obtained.
         * @param x The initial x coordinate to start dragging from, in the coordinate space    of @widget. If -1 is passed, the coordinates are retrieved from @event or    the current pointer position
         * @param y The initial y coordinate to start dragging from, in the coordinate space    of @widget. If -1 is passed, the coordinates are retrieved from @event or    the current pointer position
         * @returns the context for this drag
         */
        drag_begin_with_coordinates(
            targets: Gtk.TargetList,
            actions: Gdk.DragAction | null,
            button: number,
            event: Gdk.Event | null,
            x: number,
            y: number,
        ): Gdk.DragContext;
        /**
         * Checks to see if a mouse drag starting at (`start_x,` `start_y)` and ending
         * at (`current_x,` `current_y)` has passed the GTK+ drag threshold, and thus
         * should trigger the beginning of a drag-and-drop operation.
         * @param start_x X coordinate of start of drag
         * @param start_y Y coordinate of start of drag
         * @param current_x current X coordinate
         * @param current_y current Y coordinate
         * @returns %TRUE if the drag threshold has been passed.
         */
        drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean;
        /**
         * Add the image targets supported by #GtkSelectionData to
         * the target list of the drag destination. The targets
         * are added with `info` = 0. If you need another value,
         * use gtk_target_list_add_image_targets() and
         * gtk_drag_dest_set_target_list().
         */
        drag_dest_add_image_targets(): void;
        /**
         * Add the text targets supported by #GtkSelectionData to
         * the target list of the drag destination. The targets
         * are added with `info` = 0. If you need another value,
         * use gtk_target_list_add_text_targets() and
         * gtk_drag_dest_set_target_list().
         */
        drag_dest_add_text_targets(): void;
        /**
         * Add the URI targets supported by #GtkSelectionData to
         * the target list of the drag destination. The targets
         * are added with `info` = 0. If you need another value,
         * use gtk_target_list_add_uri_targets() and
         * gtk_drag_dest_set_target_list().
         */
        drag_dest_add_uri_targets(): void;
        /**
         * Looks for a match between the supported targets of `context` and the
         * `dest_target_list,` returning the first matching target, otherwise
         * returning %GDK_NONE. `dest_target_list` should usually be the return
         * value from gtk_drag_dest_get_target_list(), but some widgets may
         * have different valid targets for different parts of the widget; in
         * that case, they will have to implement a drag_motion handler that
         * passes the correct target list to this function.
         * @param context drag context
         * @param target_list list of droppable targets, or %NULL to use    gtk_drag_dest_get_target_list (@widget).
         * @returns first target that the source offers     and the dest can accept, or %GDK_NONE
         */
        drag_dest_find_target(context: Gdk.DragContext, target_list?: Gtk.TargetList | null): Gdk.Atom;
        /**
         * Returns the list of targets this widget can accept from
         * drag-and-drop.
         * @returns the #GtkTargetList, or %NULL if none
         */
        drag_dest_get_target_list(): Gtk.TargetList | null;
        /**
         * Returns whether the widget has been configured to always
         * emit #GtkWidget::drag-motion signals.
         * @returns %TRUE if the widget always emits   #GtkWidget::drag-motion events
         */
        drag_dest_get_track_motion(): boolean;
        /**
         * Sets a widget as a potential drop destination, and adds default behaviors.
         *
         * The default behaviors listed in `flags` have an effect similar
         * to installing default handlers for the widget’s drag-and-drop signals
         * (#GtkWidget::drag-motion, #GtkWidget::drag-drop, ...). They all exist
         * for convenience. When passing #GTK_DEST_DEFAULT_ALL for instance it is
         * sufficient to connect to the widget’s #GtkWidget::drag-data-received
         * signal to get primitive, but consistent drag-and-drop support.
         *
         * Things become more complicated when you try to preview the dragged data,
         * as described in the documentation for #GtkWidget::drag-motion. The default
         * behaviors described by `flags` make some assumptions, that can conflict
         * with your own signal handlers. For instance #GTK_DEST_DEFAULT_DROP causes
         * invokations of gdk_drag_status() in the context of #GtkWidget::drag-motion,
         * and invokations of gtk_drag_finish() in #GtkWidget::drag-data-received.
         * Especially the later is dramatic, when your own #GtkWidget::drag-motion
         * handler calls gtk_drag_get_data() to inspect the dragged data.
         *
         * There’s no way to set a default action here, you can use the
         * #GtkWidget::drag-motion callback for that. Here’s an example which selects
         * the action to use depending on whether the control key is pressed or not:
         *
         * ```c
         * static void
         * drag_motion (GtkWidget *widget,
         *              GdkDragContext *context,
         *              gint x,
         *              gint y,
         *              guint time)
         * {
         *   GdkModifierType mask;
         *
         *   gdk_window_get_pointer (gtk_widget_get_window (widget),
         *                           NULL, NULL, &mask);
         *   if (mask & GDK_CONTROL_MASK)
         *     gdk_drag_status (context, GDK_ACTION_COPY, time);
         *   else
         *     gdk_drag_status (context, GDK_ACTION_MOVE, time);
         * }
         * ```
         *
         * @param flags which types of default drag behavior to use
         * @param targets a pointer to an array of     #GtkTargetEntrys indicating the drop types that this @widget will     accept, or %NULL. Later you can access the list with     gtk_drag_dest_get_target_list() and gtk_drag_dest_find_target().
         * @param actions a bitmask of possible actions for a drop onto this @widget.
         */
        drag_dest_set(
            flags: Gtk.DestDefaults | null,
            targets: Gtk.TargetEntry[] | null,
            actions: Gdk.DragAction | null,
        ): void;
        /**
         * Sets this widget as a proxy for drops to another window.
         * @param proxy_window the window to which to forward drag events
         * @param protocol the drag protocol which the @proxy_window accepts   (You can use gdk_drag_get_protocol() to determine this)
         * @param use_coordinates If %TRUE, send the same coordinates to the   destination, because it is an embedded   subwindow.
         */
        drag_dest_set_proxy(
            proxy_window: Gdk.Window,
            protocol: Gdk.DragProtocol | null,
            use_coordinates: boolean,
        ): void;
        /**
         * Sets the target types that this widget can accept from drag-and-drop.
         * The widget must first be made into a drag destination with
         * gtk_drag_dest_set().
         * @param target_list list of droppable targets, or %NULL for none
         */
        drag_dest_set_target_list(target_list?: Gtk.TargetList | null): void;
        /**
         * Tells the widget to emit #GtkWidget::drag-motion and
         * #GtkWidget::drag-leave events regardless of the targets and the
         * %GTK_DEST_DEFAULT_MOTION flag.
         *
         * This may be used when a widget wants to do generic
         * actions regardless of the targets that the source offers.
         * @param track_motion whether to accept all targets
         */
        drag_dest_set_track_motion(track_motion: boolean): void;
        /**
         * Clears information about a drop destination set with
         * gtk_drag_dest_set(). The widget will no longer receive
         * notification of drags.
         */
        drag_dest_unset(): void;
        /**
         * Gets the data associated with a drag. When the data
         * is received or the retrieval fails, GTK+ will emit a
         * #GtkWidget::drag-data-received signal. Failure of the retrieval
         * is indicated by the length field of the `selection_data`
         * signal parameter being negative. However, when gtk_drag_get_data()
         * is called implicitely because the %GTK_DEST_DEFAULT_DROP was set,
         * then the widget will not receive notification of failed
         * drops.
         * @param context the drag context
         * @param target the target (form of the data) to retrieve
         * @param time_ a timestamp for retrieving the data. This will   generally be the time received in a #GtkWidget::drag-motion   or #GtkWidget::drag-drop signal
         */
        drag_get_data(context: Gdk.DragContext, target: Gdk.Atom, time_: number): void;
        /**
         * Highlights a widget as a currently hovered drop target.
         * To end the highlight, call gtk_drag_unhighlight().
         * GTK+ calls this automatically if %GTK_DEST_DEFAULT_HIGHLIGHT is set.
         */
        drag_highlight(): void;
        /**
         * Add the writable image targets supported by #GtkSelectionData to
         * the target list of the drag source. The targets
         * are added with `info` = 0. If you need another value,
         * use gtk_target_list_add_image_targets() and
         * gtk_drag_source_set_target_list().
         */
        drag_source_add_image_targets(): void;
        /**
         * Add the text targets supported by #GtkSelectionData to
         * the target list of the drag source.  The targets
         * are added with `info` = 0. If you need another value,
         * use gtk_target_list_add_text_targets() and
         * gtk_drag_source_set_target_list().
         */
        drag_source_add_text_targets(): void;
        /**
         * Add the URI targets supported by #GtkSelectionData to
         * the target list of the drag source.  The targets
         * are added with `info` = 0. If you need another value,
         * use gtk_target_list_add_uri_targets() and
         * gtk_drag_source_set_target_list().
         */
        drag_source_add_uri_targets(): void;
        /**
         * Gets the list of targets this widget can provide for
         * drag-and-drop.
         * @returns the #GtkTargetList, or %NULL if none
         */
        drag_source_get_target_list(): Gtk.TargetList | null;
        /**
         * Sets up a widget so that GTK+ will start a drag operation when the user
         * clicks and drags on the widget. The widget must have a window.
         * @param start_button_mask the bitmask of buttons that can start the drag
         * @param targets the table of targets     that the drag will support, may be %NULL
         * @param actions the bitmask of possible actions for a drag from this widget
         */
        drag_source_set(
            start_button_mask: Gdk.ModifierType | null,
            targets: Gtk.TargetEntry[] | null,
            actions: Gdk.DragAction | null,
        ): void;
        /**
         * Sets the icon that will be used for drags from a particular source
         * to `icon`. See the docs for #GtkIconTheme for more details.
         * @param icon A #GIcon
         */
        drag_source_set_icon_gicon(icon: Gio.Icon): void;
        /**
         * Sets the icon that will be used for drags from a particular source
         * to a themed icon. See the docs for #GtkIconTheme for more details.
         * @param icon_name name of icon to use
         */
        drag_source_set_icon_name(icon_name: string): void;
        /**
         * Sets the icon that will be used for drags from a particular widget
         * from a #GdkPixbuf. GTK+ retains a reference for `pixbuf` and will
         * release it when it is no longer needed.
         * @param pixbuf the #GdkPixbuf for the drag icon
         */
        drag_source_set_icon_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
        /**
         * Sets the icon that will be used for drags from a particular source
         * to a stock icon.
         * @param stock_id the ID of the stock icon to use
         */
        drag_source_set_icon_stock(stock_id: string): void;
        /**
         * Changes the target types that this widget offers for drag-and-drop.
         * The widget must first be made into a drag source with
         * gtk_drag_source_set().
         * @param target_list list of draggable targets, or %NULL for none
         */
        drag_source_set_target_list(target_list?: Gtk.TargetList | null): void;
        /**
         * Undoes the effects of gtk_drag_source_set().
         */
        drag_source_unset(): void;
        /**
         * Removes a highlight set by gtk_drag_highlight() from
         * a widget.
         */
        drag_unhighlight(): void;
        /**
         * Draws `widget` to `cr`. The top left corner of the widget will be
         * drawn to the currently set origin point of `cr`.
         *
         * You should pass a cairo context as `cr` argument that is in an
         * original state. Otherwise the resulting drawing is undefined. For
         * example changing the operator using cairo_set_operator() or the
         * line width using cairo_set_line_width() might have unwanted side
         * effects.
         * You may however change the context’s transform matrix - like with
         * cairo_scale(), cairo_translate() or cairo_set_matrix() and clip
         * region with cairo_clip() prior to calling this function. Also, it
         * is fine to modify the context with cairo_save() and
         * cairo_push_group() prior to calling this function.
         *
         * Note that special-purpose widgets may contain special code for
         * rendering to the screen and might appear differently on screen
         * and when rendered using gtk_widget_draw().
         * @param cr a cairo context to draw to
         */
        draw(cr: cairo.Context): void;
        /**
         * Ensures that `widget` has a style (`widget->`style).
         *
         * Not a very useful function; most of the time, if you
         * want the style, the widget is realized, and realized
         * widgets are guaranteed to have a style already.
         */
        ensure_style(): void;
        /**
         * Notifies the user about an input-related error on this widget.
         * If the #GtkSettings:gtk-error-bell setting is %TRUE, it calls
         * gdk_window_beep(), otherwise it does nothing.
         *
         * Note that the effect of gdk_window_beep() can be configured in many
         * ways, depending on the windowing backend and the desktop environment
         * or window manager that is used.
         */
        error_bell(): void;
        /**
         * Rarely-used function. This function is used to emit
         * the event signals on a widget (those signals should never
         * be emitted without using this function to do so).
         * If you want to synthesize an event though, don’t use this function;
         * instead, use gtk_main_do_event() so the event will behave as if
         * it were in the event queue. Don’t synthesize expose events; instead,
         * use gdk_window_invalidate_rect() to invalidate a region of the
         * window.
         * @param event a #GdkEvent
         * @returns return from the event signal emission (%TRUE if               the event was handled)
         */
        event(event: Gdk.Event): boolean;
        /**
         * Stops emission of #GtkWidget::child-notify signals on `widget`. The
         * signals are queued until gtk_widget_thaw_child_notify() is called
         * on `widget`.
         *
         * This is the analogue of g_object_freeze_notify() for child properties.
         */
        freeze_child_notify(): void;
        /**
         * Returns the accessible object that describes the widget to an
         * assistive technology.
         *
         * If accessibility support is not available, this #AtkObject
         * instance may be a no-op. Likewise, if no class-specific #AtkObject
         * implementation is available for the widget instance in question,
         * it will inherit an #AtkObject implementation from the first ancestor
         * class for which such an implementation is defined.
         *
         * The documentation of the
         * [ATK](http://developer.gnome.org/atk/stable/)
         * library contains more information about accessible objects and their uses.
         * @returns the #AtkObject associated with @widget
         */
        get_accessible(): Atk.Object;
        /**
         * Retrieves the #GActionGroup that was registered using `prefix`. The resulting
         * #GActionGroup may have been registered to `widget` or any #GtkWidget in its
         * ancestry.
         *
         * If no action group was found matching `prefix,` then %NULL is returned.
         * @param prefix The “prefix” of the action group.
         * @returns A #GActionGroup or %NULL.
         */
        get_action_group(prefix: string): Gio.ActionGroup | null;
        /**
         * Returns the baseline that has currently been allocated to `widget`.
         * This function is intended to be used when implementing handlers
         * for the #GtkWidget::draw function, and when allocating child
         * widgets in #GtkWidget::size_allocate.
         * @returns the baseline of the @widget, or -1 if none
         */
        get_allocated_baseline(): number;
        /**
         * Returns the height that has currently been allocated to `widget`.
         * This function is intended to be used when implementing handlers
         * for the #GtkWidget::draw function.
         * @returns the height of the @widget
         */
        get_allocated_height(): number;
        /**
         * Retrieves the widget’s allocated size.
         *
         * This function returns the last values passed to
         * gtk_widget_size_allocate_with_baseline(). The value differs from
         * the size returned in gtk_widget_get_allocation() in that functions
         * like gtk_widget_set_halign() can adjust the allocation, but not
         * the value returned by this function.
         *
         * If a widget is not visible, its allocated size is 0.
         */
        get_allocated_size(): [Gtk.Allocation, number];
        /**
         * Returns the width that has currently been allocated to `widget`.
         * This function is intended to be used when implementing handlers
         * for the #GtkWidget::draw function.
         * @returns the width of the @widget
         */
        get_allocated_width(): number;
        /**
         * Retrieves the widget’s allocation.
         *
         * Note, when implementing a #GtkContainer: a widget’s allocation will
         * be its “adjusted” allocation, that is, the widget’s parent
         * container typically calls gtk_widget_size_allocate() with an
         * allocation, and that allocation is then adjusted (to handle margin
         * and alignment for example) before assignment to the widget.
         * gtk_widget_get_allocation() returns the adjusted allocation that
         * was actually assigned to the widget. The adjusted allocation is
         * guaranteed to be completely contained within the
         * gtk_widget_size_allocate() allocation, however. So a #GtkContainer
         * is guaranteed that its children stay inside the assigned bounds,
         * but not that they have exactly the bounds the container assigned.
         * There is no way to get the original allocation assigned by
         * gtk_widget_size_allocate(), since it isn’t stored; if a container
         * implementation needs that information it will have to track it itself.
         */
        get_allocation(): Gtk.Allocation;
        /**
         * Gets the first ancestor of `widget` with type `widget_type`. For example,
         * `gtk_widget_get_ancestor (widget, GTK_TYPE_BOX)` gets
         * the first #GtkBox that’s an ancestor of `widget`. No reference will be
         * added to the returned widget; it should not be unreferenced. See note
         * about checking for a toplevel #GtkWindow in the docs for
         * gtk_widget_get_toplevel().
         *
         * Note that unlike gtk_widget_is_ancestor(), gtk_widget_get_ancestor()
         * considers `widget` to be an ancestor of itself.
         * @param widget_type ancestor type
         * @returns the ancestor widget, or %NULL if not found
         */
        get_ancestor(widget_type: GObject.GType): Gtk.Widget | null;
        /**
         * Determines whether the application intends to draw on the widget in
         * an #GtkWidget::draw handler.
         *
         * See gtk_widget_set_app_paintable()
         * @returns %TRUE if the widget is app paintable
         */
        get_app_paintable(): boolean;
        /**
         * Determines whether `widget` can be a default widget. See
         * gtk_widget_set_can_default().
         * @returns %TRUE if @widget can be a default widget, %FALSE otherwise
         */
        get_can_default(): boolean;
        /**
         * Determines whether `widget` can own the input focus. See
         * gtk_widget_set_can_focus().
         * @returns %TRUE if @widget can own the input focus, %FALSE otherwise
         */
        get_can_focus(): boolean;
        /**
         * This function is only for use in widget implementations. Obtains
         * `widget->`requisition, unless someone has forced a particular
         * geometry on the widget (e.g. with gtk_widget_set_size_request()),
         * in which case it returns that geometry instead of the widget's
         * requisition.
         *
         * This function differs from gtk_widget_size_request() in that
         * it retrieves the last size request value from `widget->`requisition,
         * while gtk_widget_size_request() actually calls the "size_request" method
         * on `widget` to compute the size request and fill in `widget->`requisition,
         * and only then returns `widget->`requisition.
         *
         * Because this function does not call the “size_request” method, it
         * can only be used when you know that `widget->`requisition is
         * up-to-date, that is, gtk_widget_size_request() has been called
         * since the last time a resize was queued. In general, only container
         * implementations have this information; applications should use
         * gtk_widget_size_request().
         */
        get_child_requisition(): Gtk.Requisition;
        /**
         * Gets the value set with gtk_widget_set_child_visible().
         * If you feel a need to use this function, your code probably
         * needs reorganization.
         *
         * This function is only useful for container implementations and
         * never should be called by an application.
         * @returns %TRUE if the widget is mapped with the parent.
         */
        get_child_visible(): boolean;
        /**
         * Retrieves the widget’s clip area.
         *
         * The clip area is the area in which all of `widget'`s drawing will
         * happen. Other toolkits call it the bounding box.
         *
         * Historically, in GTK+ the clip area has been equal to the allocation
         * retrieved via gtk_widget_get_allocation().
         */
        get_clip(): Gtk.Allocation;
        /**
         * Returns the clipboard object for the given selection to
         * be used with `widget`. `widget` must have a #GdkDisplay
         * associated with it, so must be attached to a toplevel
         * window.
         * @param selection a #GdkAtom which identifies the clipboard             to use. %GDK_SELECTION_CLIPBOARD gives the             default clipboard. Another common value             is %GDK_SELECTION_PRIMARY, which gives             the primary X selection.
         * @returns the appropriate clipboard object. If no             clipboard already exists, a new one will             be created. Once a clipboard object has             been created, it is persistent for all time.
         */
        get_clipboard(selection: Gdk.Atom): Gtk.Clipboard;
        /**
         * Obtains the composite name of a widget.
         * @returns the composite name of @widget, or %NULL if @widget is not   a composite child. The string should be freed when it is no   longer needed.
         */
        get_composite_name(): string;
        /**
         * Returns whether `device` can interact with `widget` and its
         * children. See gtk_widget_set_device_enabled().
         * @param device a #GdkDevice
         * @returns %TRUE is @device is enabled for @widget
         */
        get_device_enabled(device: Gdk.Device): boolean;
        /**
         * Returns the events mask for the widget corresponding to an specific device. These
         * are the events that the widget will receive when `device` operates on it.
         * @param device a #GdkDevice
         * @returns device event mask for @widget
         */
        get_device_events(device: Gdk.Device): Gdk.EventMask;
        /**
         * Gets the reading direction for a particular widget. See
         * gtk_widget_set_direction().
         * @returns the reading direction for the widget.
         */
        get_direction(): Gtk.TextDirection;
        /**
         * Get the #GdkDisplay for the toplevel window associated with
         * this widget. This function can only be called after the widget
         * has been added to a widget hierarchy with a #GtkWindow at the top.
         *
         * In general, you should only create display specific
         * resources when a widget has been realized, and you should
         * free those resources when the widget is unrealized.
         * @returns the #GdkDisplay for the toplevel for this widget.
         */
        get_display(): Gdk.Display;
        /**
         * Determines whether the widget is double buffered.
         *
         * See gtk_widget_set_double_buffered()
         * @returns %TRUE if the widget is double buffered
         */
        get_double_buffered(): boolean;
        /**
         * Returns the event mask (see #GdkEventMask) for the widget. These are the
         * events that the widget will receive.
         *
         * Note: Internally, the widget event mask will be the logical OR of the event
         * mask set through gtk_widget_set_events() or gtk_widget_add_events(), and the
         * event mask necessary to cater for every #GtkEventController created for the
         * widget.
         * @returns event mask for @widget
         */
        get_events(): number;
        /**
         * Returns whether the widget should grab focus when it is clicked with the mouse.
         * See gtk_widget_set_focus_on_click().
         * @returns %TRUE if the widget should grab focus when it is clicked with               the mouse.
         */
        get_focus_on_click(): boolean;
        /**
         * Gets the font map that has been set with gtk_widget_set_font_map().
         * @returns A #PangoFontMap, or %NULL
         */
        get_font_map(): Pango.FontMap | null;
        /**
         * Returns the #cairo_font_options_t used for Pango rendering. When not set,
         * the defaults font options for the #GdkScreen will be used.
         * @returns the #cairo_font_options_t or %NULL if not set
         */
        get_font_options(): cairo.FontOptions | null;
        /**
         * Obtains the frame clock for a widget. The frame clock is a global
         * “ticker” that can be used to drive animations and repaints.  The
         * most common reason to get the frame clock is to call
         * gdk_frame_clock_get_frame_time(), in order to get a time to use for
         * animating. For example you might record the start of the animation
         * with an initial value from gdk_frame_clock_get_frame_time(), and
         * then update the animation by calling
         * gdk_frame_clock_get_frame_time() again during each repaint.
         *
         * gdk_frame_clock_request_phase() will result in a new frame on the
         * clock, but won’t necessarily repaint any widgets. To repaint a
         * widget, you have to use gtk_widget_queue_draw() which invalidates
         * the widget (thus scheduling it to receive a draw on the next
         * frame). gtk_widget_queue_draw() will also end up requesting a frame
         * on the appropriate frame clock.
         *
         * A widget’s frame clock will not change while the widget is
         * mapped. Reparenting a widget (which implies a temporary unmap) can
         * change the widget’s frame clock.
         *
         * Unrealized widgets do not have a frame clock.
         * @returns a #GdkFrameClock, or %NULL if widget is unrealized
         */
        get_frame_clock(): Gdk.FrameClock | null;
        /**
         * Gets the value of the #GtkWidget:halign property.
         *
         * For backwards compatibility reasons this method will never return
         * %GTK_ALIGN_BASELINE, but instead it will convert it to
         * %GTK_ALIGN_FILL. Baselines are not supported for horizontal
         * alignment.
         * @returns the horizontal alignment of @widget
         */
        get_halign(): Gtk.Align;
        /**
         * Returns the current value of the has-tooltip property.  See
         * #GtkWidget:has-tooltip for more information.
         * @returns current value of has-tooltip on @widget.
         */
        get_has_tooltip(): boolean;
        /**
         * Determines whether `widget` has a #GdkWindow of its own. See
         * gtk_widget_set_has_window().
         * @returns %TRUE if @widget has a window, %FALSE otherwise
         */
        get_has_window(): boolean;
        /**
         * Gets whether the widget would like any available extra horizontal
         * space. When a user resizes a #GtkWindow, widgets with expand=TRUE
         * generally receive the extra space. For example, a list or
         * scrollable area or document in your window would often be set to
         * expand.
         *
         * Containers should use gtk_widget_compute_expand() rather than
         * this function, to see whether a widget, or any of its children,
         * has the expand flag set. If any child of a widget wants to
         * expand, the parent may ask to expand also.
         *
         * This function only looks at the widget’s own hexpand flag, rather
         * than computing whether the entire widget tree rooted at this widget
         * wants to expand.
         * @returns whether hexpand flag is set
         */
        get_hexpand(): boolean;
        /**
         * Gets whether gtk_widget_set_hexpand() has been used to
         * explicitly set the expand flag on this widget.
         *
         * If hexpand is set, then it overrides any computed
         * expand value based on child widgets. If hexpand is not
         * set, then the expand value depends on whether any
         * children of the widget would like to expand.
         *
         * There are few reasons to use this function, but it’s here
         * for completeness and consistency.
         * @returns whether hexpand has been explicitly set
         */
        get_hexpand_set(): boolean;
        /**
         * Whether the widget is mapped.
         * @returns %TRUE if the widget is mapped, %FALSE otherwise.
         */
        get_mapped(): boolean;
        /**
         * Gets the value of the #GtkWidget:margin-bottom property.
         * @returns The bottom margin of @widget
         */
        get_margin_bottom(): number;
        /**
         * Gets the value of the #GtkWidget:margin-end property.
         * @returns The end margin of @widget
         */
        get_margin_end(): number;
        /**
         * Gets the value of the #GtkWidget:margin-left property.
         * @returns The left margin of @widget
         */
        get_margin_left(): number;
        /**
         * Gets the value of the #GtkWidget:margin-right property.
         * @returns The right margin of @widget
         */
        get_margin_right(): number;
        /**
         * Gets the value of the #GtkWidget:margin-start property.
         * @returns The start margin of @widget
         */
        get_margin_start(): number;
        /**
         * Gets the value of the #GtkWidget:margin-top property.
         * @returns The top margin of @widget
         */
        get_margin_top(): number;
        /**
         * Returns the modifier mask the `widget’`s windowing system backend
         * uses for a particular purpose.
         *
         * See gdk_keymap_get_modifier_mask().
         * @param intent the use case for the modifier mask
         * @returns the modifier mask used for @intent.
         */
        get_modifier_mask(intent: Gdk.ModifierIntent | null): Gdk.ModifierType;
        /**
         * Returns the current modifier style for the widget. (As set by
         * gtk_widget_modify_style().) If no style has previously set, a new
         * #GtkRcStyle will be created with all values unset, and set as the
         * modifier style for the widget. If you make changes to this rc
         * style, you must call gtk_widget_modify_style(), passing in the
         * returned rc style, to make sure that your changes take effect.
         *
         * Caution: passing the style back to gtk_widget_modify_style() will
         * normally end up destroying it, because gtk_widget_modify_style() copies
         * the passed-in style and sets the copy as the new modifier style,
         * thus dropping any reference to the old modifier style. Add a reference
         * to the modifier style if you want to keep it alive.
         * @returns the modifier style for the widget.     This rc style is owned by the widget. If you want to keep a     pointer to value this around, you must add a refcount using     g_object_ref().
         */
        get_modifier_style(): Gtk.RcStyle;
        /**
         * Retrieves the name of a widget. See gtk_widget_set_name() for the
         * significance of widget names.
         * @returns name of the widget. This string is owned by GTK+ and should not be modified or freed
         */
        get_name(): string;
        /**
         * Returns the current value of the #GtkWidget:no-show-all property,
         * which determines whether calls to gtk_widget_show_all()
         * will affect this widget.
         * @returns the current value of the “no-show-all” property.
         */
        get_no_show_all(): boolean;
        /**
         * Fetches the requested opacity for this widget.
         * See gtk_widget_set_opacity().
         * @returns the requested opacity for this widget.
         */
        get_opacity(): number;
        /**
         * Gets a #PangoContext with the appropriate font map, font description,
         * and base direction for this widget. Unlike the context returned
         * by gtk_widget_create_pango_context(), this context is owned by
         * the widget (it can be used until the screen for the widget changes
         * or the widget is removed from its toplevel), and will be updated to
         * match any changes to the widget’s attributes. This can be tracked
         * by using the #GtkWidget::screen-changed signal on the widget.
         * @returns the #PangoContext for the widget.
         */
        get_pango_context(): Pango.Context;
        /**
         * Returns the parent container of `widget`.
         * @returns the parent container of @widget, or %NULL
         */
        get_parent(): Gtk.Widget | null;
        /**
         * Gets `widget’`s parent window, or %NULL if it does not have one.
         * @returns the parent window of @widget, or %NULL if it does not have a parent window.
         */
        get_parent_window(): Gdk.Window | null;
        /**
         * Returns the #GtkWidgetPath representing `widget,` if the widget
         * is not connected to a toplevel widget, a partial path will be
         * created.
         * @returns The #GtkWidgetPath representing @widget
         */
        get_path(): Gtk.WidgetPath;
        /**
         * Obtains the location of the mouse pointer in widget coordinates.
         * Widget coordinates are a bit odd; for historical reasons, they are
         * defined as `widget->`window coordinates for widgets that return %TRUE for
         * gtk_widget_get_has_window(); and are relative to `widget->`allocation.x,
         * `widget->`allocation.y otherwise.
         */
        get_pointer(): [number, number];
        /**
         * Retrieves a widget’s initial minimum and natural height.
         *
         * This call is specific to width-for-height requests.
         *
         * The returned request will be modified by the
         * GtkWidgetClass::adjust_size_request virtual method and by any
         * #GtkSizeGroups that have been applied. That is, the returned request
         * is the one that should be used for layout, not necessarily the one
         * returned by the widget itself.
         */
        get_preferred_height(): [number, number];
        /**
         * Retrieves a widget’s minimum and natural height and the corresponding baselines if it would be given
         * the specified `width,` or the default height if `width` is -1. The baselines may be -1 which means
         * that no baseline is requested for this widget.
         *
         * The returned request will be modified by the
         * GtkWidgetClass::adjust_size_request and GtkWidgetClass::adjust_baseline_request virtual methods
         * and by any #GtkSizeGroups that have been applied. That is, the returned request
         * is the one that should be used for layout, not necessarily the one
         * returned by the widget itself.
         * @param width the width which is available for allocation, or -1 if none
         */
        get_preferred_height_and_baseline_for_width(width: number): [number, number, number, number];
        /**
         * Retrieves a widget’s minimum and natural height if it would be given
         * the specified `width`.
         *
         * The returned request will be modified by the
         * GtkWidgetClass::adjust_size_request virtual method and by any
         * #GtkSizeGroups that have been applied. That is, the returned request
         * is the one that should be used for layout, not necessarily the one
         * returned by the widget itself.
         * @param width the width which is available for allocation
         */
        get_preferred_height_for_width(width: number): [number, number];
        /**
         * Retrieves the minimum and natural size of a widget, taking
         * into account the widget’s preference for height-for-width management.
         *
         * This is used to retrieve a suitable size by container widgets which do
         * not impose any restrictions on the child placement. It can be used
         * to deduce toplevel window and menu sizes as well as child widgets in
         * free-form containers such as GtkLayout.
         *
         * Handle with care. Note that the natural height of a height-for-width
         * widget will generally be a smaller size than the minimum height, since the required
         * height for the natural width is generally smaller than the required height for
         * the minimum width.
         *
         * Use gtk_widget_get_preferred_height_and_baseline_for_width() if you want to support
         * baseline alignment.
         */
        get_preferred_size(): [Gtk.Requisition | null, Gtk.Requisition | null];
        /**
         * Retrieves a widget’s initial minimum and natural width.
         *
         * This call is specific to height-for-width requests.
         *
         * The returned request will be modified by the
         * GtkWidgetClass::adjust_size_request virtual method and by any
         * #GtkSizeGroups that have been applied. That is, the returned request
         * is the one that should be used for layout, not necessarily the one
         * returned by the widget itself.
         */
        get_preferred_width(): [number, number];
        /**
         * Retrieves a widget’s minimum and natural width if it would be given
         * the specified `height`.
         *
         * The returned request will be modified by the
         * GtkWidgetClass::adjust_size_request virtual method and by any
         * #GtkSizeGroups that have been applied. That is, the returned request
         * is the one that should be used for layout, not necessarily the one
         * returned by the widget itself.
         * @param height the height which is available for allocation
         */
        get_preferred_width_for_height(height: number): [number, number];
        /**
         * Determines whether `widget` is realized.
         * @returns %TRUE if @widget is realized, %FALSE otherwise
         */
        get_realized(): boolean;
        /**
         * Determines whether `widget` is always treated as the default widget
         * within its toplevel when it has the focus, even if another widget
         * is the default.
         *
         * See gtk_widget_set_receives_default().
         * @returns %TRUE if @widget acts as the default widget when focused,               %FALSE otherwise
         */
        get_receives_default(): boolean;
        /**
         * Gets whether the widget prefers a height-for-width layout
         * or a width-for-height layout.
         *
         * #GtkBin widgets generally propagate the preference of
         * their child, container widgets need to request something either in
         * context of their children or in context of their allocation
         * capabilities.
         * @returns The #GtkSizeRequestMode preferred by @widget.
         */
        get_request_mode(): Gtk.SizeRequestMode;
        /**
         * Retrieves the widget’s requisition.
         *
         * This function should only be used by widget implementations in
         * order to figure whether the widget’s requisition has actually
         * changed after some internal state change (so that they can call
         * gtk_widget_queue_resize() instead of gtk_widget_queue_draw()).
         *
         * Normally, gtk_widget_size_request() should be used.
         */
        get_requisition(): Gtk.Requisition;
        /**
         * Get the root window where this widget is located. This function can
         * only be called after the widget has been added to a widget
         * hierarchy with #GtkWindow at the top.
         *
         * The root window is useful for such purposes as creating a popup
         * #GdkWindow associated with the window. In general, you should only
         * create display specific resources when a widget has been realized,
         * and you should free those resources when the widget is unrealized.
         * @returns the #GdkWindow root window for the toplevel for this widget.
         */
        get_root_window(): Gdk.Window;
        /**
         * Retrieves the internal scale factor that maps from window coordinates
         * to the actual device pixels. On traditional systems this is 1, on
         * high density outputs, it can be a higher value (typically 2).
         *
         * See gdk_window_get_scale_factor().
         * @returns the scale factor for @widget
         */
        get_scale_factor(): number;
        /**
         * Get the #GdkScreen from the toplevel window associated with
         * this widget. This function can only be called after the widget
         * has been added to a widget hierarchy with a #GtkWindow
         * at the top.
         *
         * In general, you should only create screen specific
         * resources when a widget has been realized, and you should
         * free those resources when the widget is unrealized.
         * @returns the #GdkScreen for the toplevel for this widget.
         */
        get_screen(): Gdk.Screen;
        /**
         * Returns the widget’s sensitivity (in the sense of returning
         * the value that has been set using gtk_widget_set_sensitive()).
         *
         * The effective sensitivity of a widget is however determined by both its
         * own and its parent widget’s sensitivity. See gtk_widget_is_sensitive().
         * @returns %TRUE if the widget is sensitive
         */
        get_sensitive(): boolean;
        /**
         * Gets the settings object holding the settings used for this widget.
         *
         * Note that this function can only be called when the #GtkWidget
         * is attached to a toplevel, since the settings object is specific
         * to a particular #GdkScreen.
         * @returns the relevant #GtkSettings object
         */
        get_settings(): Gtk.Settings;
        /**
         * Gets the size request that was explicitly set for the widget using
         * gtk_widget_set_size_request(). A value of -1 stored in `width` or
         * `height` indicates that that dimension has not been set explicitly
         * and the natural requisition of the widget will be used instead. See
         * gtk_widget_set_size_request(). To get the size a widget will
         * actually request, call gtk_widget_get_preferred_size() instead of
         * this function.
         */
        get_size_request(): [number, number];
        /**
         * Returns the widget’s state. See gtk_widget_set_state().
         * @returns the state of @widget.
         */
        get_state(): Gtk.StateType;
        /**
         * Returns the widget state as a flag set. It is worth mentioning
         * that the effective %GTK_STATE_FLAG_INSENSITIVE state will be
         * returned, that is, also based on parent insensitivity, even if
         * `widget` itself is sensitive.
         *
         * Also note that if you are looking for a way to obtain the
         * #GtkStateFlags to pass to a #GtkStyleContext method, you
         * should look at gtk_style_context_get_state().
         * @returns The state flags for widget
         */
        get_state_flags(): Gtk.StateFlags;
        /**
         * Simply an accessor function that returns `widget->`style.
         * @returns the widget’s #GtkStyle
         */
        get_style(): Gtk.Style;
        /**
         * Returns the style context associated to `widget`. The returned object is
         * guaranteed to be the same for the lifetime of `widget`.
         * @returns a #GtkStyleContext. This memory is owned by @widget and          must not be freed.
         */
        get_style_context(): Gtk.StyleContext;
        /**
         * Returns %TRUE if `widget` is multiple pointer aware. See
         * gtk_widget_set_support_multidevice() for more information.
         * @returns %TRUE if @widget is multidevice aware.
         */
        get_support_multidevice(): boolean;
        /**
         * Fetch an object build from the template XML for `widget_type` in this `widget` instance.
         *
         * This will only report children which were previously declared with
         * gtk_widget_class_bind_template_child_full() or one of its
         * variants.
         *
         * This function is only meant to be called for code which is private to the `widget_type` which
         * declared the child and is meant for language bindings which cannot easily make use
         * of the GObject structure offsets.
         * @param widget_type The #GType to get a template child for
         * @param name The “id” of the child defined in the template XML
         * @returns The object built in the template XML with the id @name
         */
        get_template_child<T = GObject.Object>(widget_type: GObject.GType, name: string): T;
        /**
         * Gets the contents of the tooltip for `widget`.
         * @returns the tooltip text, or %NULL. You should free the   returned string with g_free() when done.
         */
        get_tooltip_markup(): string | null;
        /**
         * Gets the contents of the tooltip for `widget`.
         * @returns the tooltip text, or %NULL. You should free the   returned string with g_free() when done.
         */
        get_tooltip_text(): string | null;
        /**
         * Returns the #GtkWindow of the current tooltip. This can be the
         * GtkWindow created by default, or the custom tooltip window set
         * using gtk_widget_set_tooltip_window().
         * @returns The #GtkWindow of the current tooltip.
         */
        get_tooltip_window(): Gtk.Window;
        /**
         * This function returns the topmost widget in the container hierarchy
         * `widget` is a part of. If `widget` has no parent widgets, it will be
         * returned as the topmost widget. No reference will be added to the
         * returned widget; it should not be unreferenced.
         *
         * Note the difference in behavior vs. gtk_widget_get_ancestor();
         * `gtk_widget_get_ancestor (widget, GTK_TYPE_WINDOW)`
         * would return
         * %NULL if `widget` wasn’t inside a toplevel window, and if the
         * window was inside a #GtkWindow-derived widget which was in turn
         * inside the toplevel #GtkWindow. While the second case may
         * seem unlikely, it actually happens when a #GtkPlug is embedded
         * inside a #GtkSocket within the same application.
         *
         * To reliably find the toplevel #GtkWindow, use
         * gtk_widget_get_toplevel() and call GTK_IS_WINDOW()
         * on the result. For instance, to get the title of a widget's toplevel
         * window, one might use:
         *
         * ```c
         * static const char *
         * get_widget_toplevel_title (GtkWidget *widget)
         * {
         *   GtkWidget *toplevel = gtk_widget_get_toplevel (widget);
         *   if (GTK_IS_WINDOW (toplevel))
         *     {
         *       return gtk_window_get_title (GTK_WINDOW (toplevel));
         *     }
         *
         *   return NULL;
         * }
         * ```
         *
         * @returns the topmost ancestor of @widget, or @widget itself    if there’s no ancestor.
         */
        get_toplevel(): Gtk.Widget;
        /**
         * Gets the value of the #GtkWidget:valign property.
         *
         * For backwards compatibility reasons this method will never return
         * %GTK_ALIGN_BASELINE, but instead it will convert it to
         * %GTK_ALIGN_FILL. If your widget want to support baseline aligned
         * children it must use gtk_widget_get_valign_with_baseline(), or
         * `g_object_get (widget, "valign", &value, NULL)`, which will
         * also report the true value.
         * @returns the vertical alignment of @widget, ignoring baseline alignment
         */
        get_valign(): Gtk.Align;
        /**
         * Gets the value of the #GtkWidget:valign property, including
         * %GTK_ALIGN_BASELINE.
         * @returns the vertical alignment of @widget
         */
        get_valign_with_baseline(): Gtk.Align;
        /**
         * Gets whether the widget would like any available extra vertical
         * space.
         *
         * See gtk_widget_get_hexpand() for more detail.
         * @returns whether vexpand flag is set
         */
        get_vexpand(): boolean;
        /**
         * Gets whether gtk_widget_set_vexpand() has been used to
         * explicitly set the expand flag on this widget.
         *
         * See gtk_widget_get_hexpand_set() for more detail.
         * @returns whether vexpand has been explicitly set
         */
        get_vexpand_set(): boolean;
        /**
         * Determines whether the widget is visible. If you want to
         * take into account whether the widget’s parent is also marked as
         * visible, use gtk_widget_is_visible() instead.
         *
         * This function does not check if the widget is obscured in any way.
         *
         * See gtk_widget_set_visible().
         * @returns %TRUE if the widget is visible
         */
        get_visible(): boolean;
        /**
         * Gets the visual that will be used to render `widget`.
         * @returns the visual for @widget
         */
        get_visual(): Gdk.Visual;
        /**
         * Returns the widget’s window if it is realized, %NULL otherwise
         * @returns @widget’s window.
         */
        get_window(): Gdk.Window | null;
        /**
         * Makes `widget` the current grabbed widget.
         *
         * This means that interaction with other widgets in the same
         * application is blocked and mouse as well as keyboard events
         * are delivered to this widget.
         *
         * If `widget` is not sensitive, it is not set as the current
         * grabbed widget and this function does nothing.
         */
        grab_add(): void;
        /**
         * Causes `widget` to become the default widget. `widget` must be able to be
         * a default widget; typically you would ensure this yourself
         * by calling gtk_widget_set_can_default() with a %TRUE value.
         * The default widget is activated when
         * the user presses Enter in a window. Default widgets must be
         * activatable, that is, gtk_widget_activate() should affect them. Note
         * that #GtkEntry widgets require the “activates-default” property
         * set to %TRUE before they activate the default widget when Enter
         * is pressed and the #GtkEntry is focused.
         */
        grab_default(): void;
        /**
         * Causes `widget` to have the keyboard focus for the #GtkWindow it's
         * inside. `widget` must be a focusable widget, such as a #GtkEntry;
         * something like #GtkFrame won’t work.
         *
         * More precisely, it must have the %GTK_CAN_FOCUS flag set. Use
         * gtk_widget_set_can_focus() to modify that flag.
         *
         * The widget also needs to be realized and mapped. This is indicated by the
         * related signals. Grabbing the focus immediately after creating the widget
         * will likely fail and cause critical warnings.
         */
        grab_focus(): void;
        /**
         * Removes the grab from the given widget.
         *
         * You have to pair calls to gtk_grab_add() and gtk_grab_remove().
         *
         * If `widget` does not have the grab, this function does nothing.
         */
        grab_remove(): void;
        /**
         * Determines whether the widget is currently grabbing events, so it
         * is the only widget receiving input events (keyboard and mouse).
         *
         * See also gtk_grab_add().
         * @returns %TRUE if the widget is in the grab_widgets stack
         */
        has_grab(): boolean;
        /**
         * Determines if the widget style has been looked up through the rc mechanism.
         * @returns %TRUE if the widget has been looked up through the rc   mechanism, %FALSE otherwise.
         */
        has_rc_style(): boolean;
        /**
         * Checks whether there is a #GdkScreen is associated with
         * this widget. All toplevel widgets have an associated
         * screen, and all widgets added into a hierarchy with a toplevel
         * window at the top.
         * @returns %TRUE if there is a #GdkScreen associated   with the widget.
         */
        has_screen(): boolean;
        /**
         * Determines if the widget should show a visible indication that
         * it has the global input focus. This is a convenience function for
         * use in ::draw handlers that takes into account whether focus
         * indication should currently be shown in the toplevel window of
         * `widget`. See gtk_window_get_focus_visible() for more information
         * about focus indication.
         *
         * To find out if the widget has the global input focus, use
         * gtk_widget_has_focus().
         * @returns %TRUE if the widget should display a “focus rectangle”
         */
        has_visible_focus(): boolean;
        /**
         * Reverses the effects of gtk_widget_show(), causing the widget to be
         * hidden (invisible to the user).
         */
        hide(): void;
        /**
         * Utility function; intended to be connected to the #GtkWidget::delete-event
         * signal on a #GtkWindow. The function calls gtk_widget_hide() on its
         * argument, then returns %TRUE. If connected to ::delete-event, the
         * result is that clicking the close button for a window (on the
         * window frame, top right corner usually) will hide but not destroy
         * the window. By default, GTK+ destroys windows when ::delete-event
         * is received.
         * @returns %TRUE
         */
        hide_on_delete(): boolean;
        /**
         * Returns whether the widget is currently being destroyed.
         * This information can sometimes be used to avoid doing
         * unnecessary work.
         * @returns %TRUE if @widget is being destroyed
         */
        in_destruction(): boolean;
        /**
         * Creates and initializes child widgets defined in templates. This
         * function must be called in the instance initializer for any
         * class which assigned itself a template using gtk_widget_class_set_template()
         *
         * It is important to call this function in the instance initializer
         * of a #GtkWidget subclass and not in #GObject.constructed() or
         * #GObject.constructor() for two reasons.
         *
         * One reason is that generally derived widgets will assume that parent
         * class composite widgets have been created in their instance
         * initializers.
         *
         * Another reason is that when calling g_object_new() on a widget with
         * composite templates, it’s important to build the composite widgets
         * before the construct properties are set. Properties passed to g_object_new()
         * should take precedence over properties set in the private template XML.
         */
        init_template(): void;
        /**
         * Sets an input shape for this widget’s GDK window. This allows for
         * windows which react to mouse click in a nonrectangular region, see
         * gdk_window_input_shape_combine_region() for more information.
         * @param region shape to be added, or %NULL to remove an existing shape
         */
        input_shape_combine_region(region?: cairo.Region | null): void;
        /**
         * Inserts `group` into `widget`. Children of `widget` that implement
         * #GtkActionable can then be associated with actions in `group` by
         * setting their “action-name” to
         * `prefix`.`action-name`.
         *
         * If `group` is %NULL, a previously inserted group for `name` is removed
         * from `widget`.
         * @param name the prefix for actions in @group
         * @param group a #GActionGroup, or %NULL
         */
        insert_action_group(name: string, group?: Gio.ActionGroup | null): void;
        /**
         * Computes the intersection of a `widget’`s area and `area,` storing
         * the intersection in `intersection,` and returns %TRUE if there was
         * an intersection.  `intersection` may be %NULL if you’re only
         * interested in whether there was an intersection.
         * @param area a rectangle
         * @returns %TRUE if there was an intersection
         */
        intersect(area: Gdk.Rectangle): [boolean, Gdk.Rectangle | null];
        /**
         * Determines whether `widget` is somewhere inside `ancestor,` possibly with
         * intermediate containers.
         * @param ancestor another #GtkWidget
         * @returns %TRUE if @ancestor contains @widget as a child,    grandchild, great grandchild, etc.
         */
        is_ancestor(ancestor: Gtk.Widget): boolean;
        /**
         * Whether `widget` can rely on having its alpha channel
         * drawn correctly. On X11 this function returns whether a
         * compositing manager is running for `widget’`s screen.
         *
         * Please note that the semantics of this call will change
         * in the future if used on a widget that has a composited
         * window in its hierarchy (as set by gdk_window_set_composited()).
         * @returns %TRUE if the widget can rely on its alpha channel being drawn correctly.
         */
        is_composited(): boolean;
        /**
         * Determines whether `widget` can be drawn to. A widget can be drawn
         * to if it is mapped and visible.
         * @returns %TRUE if @widget is drawable, %FALSE otherwise
         */
        is_drawable(): boolean;
        /**
         * Returns the widget’s effective sensitivity, which means
         * it is sensitive itself and also its parent widget is sensitive
         * @returns %TRUE if the widget is effectively sensitive
         */
        is_sensitive(): boolean;
        /**
         * Determines whether `widget` is a toplevel widget.
         *
         * Currently only #GtkWindow and #GtkInvisible (and out-of-process
         * #GtkPlugs) are toplevel widgets. Toplevel widgets have no parent
         * widget.
         * @returns %TRUE if @widget is a toplevel, %FALSE otherwise
         */
        is_toplevel(): boolean;
        /**
         * Determines whether the widget and all its parents are marked as
         * visible.
         *
         * This function does not check if the widget is obscured in any way.
         *
         * See also gtk_widget_get_visible() and gtk_widget_set_visible()
         * @returns %TRUE if the widget and all its parents are visible
         */
        is_visible(): boolean;
        /**
         * This function should be called whenever keyboard navigation within
         * a single widget hits a boundary. The function emits the
         * #GtkWidget::keynav-failed signal on the widget and its return
         * value should be interpreted in a way similar to the return value of
         * gtk_widget_child_focus():
         *
         * When %TRUE is returned, stay in the widget, the failed keyboard
         * navigation is OK and/or there is nowhere we can/should move the
         * focus to.
         *
         * When %FALSE is returned, the caller should continue with keyboard
         * navigation outside the widget, e.g. by calling
         * gtk_widget_child_focus() on the widget’s toplevel.
         *
         * The default ::keynav-failed handler returns %FALSE for
         * %GTK_DIR_TAB_FORWARD and %GTK_DIR_TAB_BACKWARD. For the other
         * values of #GtkDirectionType it returns %TRUE.
         *
         * Whenever the default handler returns %TRUE, it also calls
         * gtk_widget_error_bell() to notify the user of the failed keyboard
         * navigation.
         *
         * A use case for providing an own implementation of ::keynav-failed
         * (either by connecting to it or by overriding it) would be a row of
         * #GtkEntry widgets where the user should be able to navigate the
         * entire row with the cursor keys, as e.g. known from user interfaces
         * that require entering license keys.
         * @param direction direction of focus movement
         * @returns %TRUE if stopping keyboard navigation is fine, %FALSE               if the emitting widget should try to handle the keyboard               navigation attempt in its parent container(s).
         */
        keynav_failed(direction: Gtk.DirectionType | null): boolean;
        /**
         * Lists the closures used by `widget` for accelerator group connections
         * with gtk_accel_group_connect_by_path() or gtk_accel_group_connect().
         * The closures can be used to monitor accelerator changes on `widget,`
         * by connecting to the `GtkAccelGroup:`:accel-changed signal of the
         * #GtkAccelGroup of a closure which can be found out with
         * gtk_accel_group_from_accel_closure().
         * @returns a newly allocated #GList of closures
         */
        list_accel_closures(): GObject.Closure[];
        /**
         * Retrieves a %NULL-terminated array of strings containing the prefixes of
         * #GActionGroup's available to `widget`.
         * @returns a %NULL-terminated array of strings.
         */
        list_action_prefixes(): string[];
        /**
         * Returns a newly allocated list of the widgets, normally labels, for
         * which this widget is the target of a mnemonic (see for example,
         * gtk_label_set_mnemonic_widget()).
         *
         * The widgets in the list are not individually referenced. If you
         * want to iterate through the list and perform actions involving
         * callbacks that might destroy the widgets, you
         * must call `g_list_foreach (result,
         * (GFunc)g_object_ref, NULL)` first, and then unref all the
         * widgets afterwards.
         * @returns the list of  mnemonic labels; free this list  with g_list_free() when you are done with it.
         */
        list_mnemonic_labels(): Gtk.Widget[];
        /**
         * This function is only for use in widget implementations. Causes
         * a widget to be mapped if it isn’t already.
         */
        map(): void;
        /**
         * Emits the #GtkWidget::mnemonic-activate signal.
         * @param group_cycling %TRUE if there are other widgets with the same mnemonic
         * @returns %TRUE if the signal has been handled
         */
        mnemonic_activate(group_cycling: boolean): boolean;
        /**
         * Sets the base color for a widget in a particular state.
         * All other style values are left untouched. The base color
         * is the background color used along with the text color
         * (see gtk_widget_modify_text()) for widgets such as #GtkEntry
         * and #GtkTextView. See also gtk_widget_modify_style().
         *
         * > Note that “no window” widgets (which have the %GTK_NO_WINDOW
         * > flag set) draw on their parent container’s window and thus may
         * > not draw any background themselves. This is the case for e.g.
         * > #GtkLabel.
         * >
         * > To modify the background of such widgets, you have to set the
         * > base color on their parent; if you want to set the background
         * > of a rectangular area around a label, try placing the label in
         * > a #GtkEventBox widget and setting the base color on that.
         * @param state the state for which to set the base color
         * @param color the color to assign (does not need to     be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_modify_base().
         */
        modify_base(state: Gtk.StateType | null, color?: Gdk.Color | null): void;
        /**
         * Sets the background color for a widget in a particular state.
         *
         * All other style values are left untouched.
         * See also gtk_widget_modify_style().
         *
         * > Note that “no window” widgets (which have the %GTK_NO_WINDOW
         * > flag set) draw on their parent container’s window and thus may
         * > not draw any background themselves. This is the case for e.g.
         * > #GtkLabel.
         * >
         * > To modify the background of such widgets, you have to set the
         * > background color on their parent; if you want to set the background
         * > of a rectangular area around a label, try placing the label in
         * > a #GtkEventBox widget and setting the background color on that.
         * @param state the state for which to set the background color
         * @param color the color to assign (does not need     to be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_modify_bg().
         */
        modify_bg(state: Gtk.StateType | null, color?: Gdk.Color | null): void;
        /**
         * Sets the cursor color to use in a widget, overriding the #GtkWidget
         * cursor-color and secondary-cursor-color
         * style properties.
         *
         * All other style values are left untouched.
         * See also gtk_widget_modify_style().
         * @param primary the color to use for primary cursor (does not     need to be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_modify_cursor().
         * @param secondary the color to use for secondary cursor (does     not need to be allocated), or %NULL to undo the effect of     previous calls to of gtk_widget_modify_cursor().
         */
        modify_cursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void;
        /**
         * Sets the foreground color for a widget in a particular state.
         *
         * All other style values are left untouched.
         * See also gtk_widget_modify_style().
         * @param state the state for which to set the foreground color
         * @param color the color to assign (does not need to be allocated),     or %NULL to undo the effect of previous calls to     of gtk_widget_modify_fg().
         */
        modify_fg(state: Gtk.StateType | null, color?: Gdk.Color | null): void;
        /**
         * Sets the font to use for a widget.
         *
         * All other style values are left untouched.
         * See also gtk_widget_modify_style().
         * @param font_desc the font description to use, or %NULL     to undo the effect of previous calls to gtk_widget_modify_font()
         */
        modify_font(font_desc?: Pango.FontDescription | null): void;
        /**
         * Modifies style values on the widget.
         *
         * Modifications made using this technique take precedence over
         * style values set via an RC file, however, they will be overridden
         * if a style is explicitly set on the widget using gtk_widget_set_style().
         * The #GtkRcStyle-struct is designed so each field can either be
         * set or unset, so it is possible, using this function, to modify some
         * style values and leave the others unchanged.
         *
         * Note that modifications made with this function are not cumulative
         * with previous calls to gtk_widget_modify_style() or with such
         * functions as gtk_widget_modify_fg(). If you wish to retain
         * previous values, you must first call gtk_widget_get_modifier_style(),
         * make your modifications to the returned style, then call
         * gtk_widget_modify_style() with that style. On the other hand,
         * if you first call gtk_widget_modify_style(), subsequent calls
         * to such functions gtk_widget_modify_fg() will have a cumulative
         * effect with the initial modifications.
         * @param style the #GtkRcStyle-struct holding the style modifications
         */
        modify_style(style: Gtk.RcStyle): void;
        /**
         * Sets the text color for a widget in a particular state.
         *
         * All other style values are left untouched.
         * The text color is the foreground color used along with the
         * base color (see gtk_widget_modify_base()) for widgets such
         * as #GtkEntry and #GtkTextView.
         * See also gtk_widget_modify_style().
         * @param state the state for which to set the text color
         * @param color the color to assign (does not need to     be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_modify_text().
         */
        modify_text(state: Gtk.StateType | null, color?: Gdk.Color | null): void;
        /**
         * Sets the background color to use for a widget.
         *
         * All other style values are left untouched.
         * See gtk_widget_override_color().
         * @param state the state for which to set the background color
         * @param color the color to assign, or %NULL to undo the effect     of previous calls to gtk_widget_override_background_color()
         */
        override_background_color(state: Gtk.StateFlags | null, color?: Gdk.RGBA | null): void;
        /**
         * Sets the color to use for a widget.
         *
         * All other style values are left untouched.
         *
         * This function does not act recursively. Setting the color of a
         * container does not affect its children. Note that some widgets that
         * you may not think of as containers, for instance #GtkButtons,
         * are actually containers.
         *
         * This API is mostly meant as a quick way for applications to
         * change a widget appearance. If you are developing a widgets
         * library and intend this change to be themeable, it is better
         * done by setting meaningful CSS classes in your
         * widget/container implementation through gtk_style_context_add_class().
         *
         * This way, your widget library can install a #GtkCssProvider
         * with the %GTK_STYLE_PROVIDER_PRIORITY_FALLBACK priority in order
         * to provide a default styling for those widgets that need so, and
         * this theming may fully overridden by the user’s theme.
         *
         * Note that for complex widgets this may bring in undesired
         * results (such as uniform background color everywhere), in
         * these cases it is better to fully style such widgets through a
         * #GtkCssProvider with the %GTK_STYLE_PROVIDER_PRIORITY_APPLICATION
         * priority.
         * @param state the state for which to set the color
         * @param color the color to assign, or %NULL to undo the effect     of previous calls to gtk_widget_override_color()
         */
        override_color(state: Gtk.StateFlags | null, color?: Gdk.RGBA | null): void;
        /**
         * Sets the cursor color to use in a widget, overriding the
         * cursor-color and secondary-cursor-color
         * style properties. All other style values are left untouched.
         * See also gtk_widget_modify_style().
         *
         * Note that the underlying properties have the #GdkColor type,
         * so the alpha value in `primary` and `secondary` will be ignored.
         * @param cursor the color to use for primary cursor (does not need to be     allocated), or %NULL to undo the effect of previous calls to     of gtk_widget_override_cursor().
         * @param secondary_cursor the color to use for secondary cursor (does not     need to be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_override_cursor().
         */
        override_cursor(cursor?: Gdk.RGBA | null, secondary_cursor?: Gdk.RGBA | null): void;
        /**
         * Sets the font to use for a widget. All other style values are
         * left untouched. See gtk_widget_override_color().
         * @param font_desc the font description to use, or %NULL to undo     the effect of previous calls to gtk_widget_override_font()
         */
        override_font(font_desc?: Pango.FontDescription | null): void;
        /**
         * Sets a symbolic color for a widget.
         *
         * All other style values are left untouched.
         * See gtk_widget_override_color() for overriding the foreground
         * or background color.
         * @param name the name of the symbolic color to modify
         * @param color the color to assign (does not need     to be allocated), or %NULL to undo the effect of previous     calls to gtk_widget_override_symbolic_color()
         */
        override_symbolic_color(name: string, color?: Gdk.RGBA | null): void;
        /**
         * Obtains the full path to `widget`. The path is simply the name of a
         * widget and all its parents in the container hierarchy, separated by
         * periods. The name of a widget comes from
         * gtk_widget_get_name(). Paths are used to apply styles to a widget
         * in gtkrc configuration files. Widget names are the type of the
         * widget by default (e.g. “GtkButton”) or can be set to an
         * application-specific value with gtk_widget_set_name(). By setting
         * the name of a widget, you allow users or theme authors to apply
         * styles to that specific widget in their gtkrc
         * file. `path_reversed_p` fills in the path in reverse order,
         * i.e. starting with `widget’`s name instead of starting with the name
         * of `widget’`s outermost ancestor.
         */
        path(): [number, string, string];
        /**
         * This function is only for use in widget implementations.
         *
         * Flags the widget for a rerun of the GtkWidgetClass::size_allocate
         * function. Use this function instead of gtk_widget_queue_resize()
         * when the `widget'`s size request didn't change but it wants to
         * reposition its contents.
         *
         * An example user of this function is gtk_widget_set_halign().
         */
        queue_allocate(): void;
        /**
         * Mark `widget` as needing to recompute its expand flags. Call
         * this function when setting legacy expand child properties
         * on the child of a container.
         *
         * See gtk_widget_compute_expand().
         */
        queue_compute_expand(): void;
        /**
         * Equivalent to calling gtk_widget_queue_draw_area() for the
         * entire area of a widget.
         */
        queue_draw(): void;
        /**
         * Convenience function that calls gtk_widget_queue_draw_region() on
         * the region created from the given coordinates.
         *
         * The region here is specified in widget coordinates.
         * Widget coordinates are a bit odd; for historical reasons, they are
         * defined as `widget->`window coordinates for widgets that return %TRUE for
         * gtk_widget_get_has_window(), and are relative to `widget->`allocation.x,
         * `widget->`allocation.y otherwise.
         *
         * `width` or `height` may be 0, in this case this function does
         * nothing. Negative values for `width` and `height` are not allowed.
         * @param x x coordinate of upper-left corner of rectangle to redraw
         * @param y y coordinate of upper-left corner of rectangle to redraw
         * @param width width of region to draw
         * @param height height of region to draw
         */
        queue_draw_area(x: number, y: number, width: number, height: number): void;
        /**
         * Invalidates the area of `widget` defined by `region` by calling
         * gdk_window_invalidate_region() on the widget’s window and all its
         * child windows. Once the main loop becomes idle (after the current
         * batch of events has been processed, roughly), the window will
         * receive expose events for the union of all regions that have been
         * invalidated.
         *
         * Normally you would only use this function in widget
         * implementations. You might also use it to schedule a redraw of a
         * #GtkDrawingArea or some portion thereof.
         * @param region region to draw
         */
        queue_draw_region(region: cairo.Region): void;
        /**
         * This function is only for use in widget implementations.
         * Flags a widget to have its size renegotiated; should
         * be called when a widget for some reason has a new size request.
         * For example, when you change the text in a #GtkLabel, #GtkLabel
         * queues a resize to ensure there’s enough space for the new text.
         *
         * Note that you cannot call gtk_widget_queue_resize() on a widget
         * from inside its implementation of the GtkWidgetClass::size_allocate
         * virtual method. Calls to gtk_widget_queue_resize() from inside
         * GtkWidgetClass::size_allocate will be silently ignored.
         */
        queue_resize(): void;
        /**
         * This function works like gtk_widget_queue_resize(),
         * except that the widget is not invalidated.
         */
        queue_resize_no_redraw(): void;
        /**
         * Creates the GDK (windowing system) resources associated with a
         * widget.  For example, `widget->`window will be created when a widget
         * is realized.  Normally realization happens implicitly; if you show
         * a widget and all its parent containers, then the widget will be
         * realized and mapped automatically.
         *
         * Realizing a widget requires all
         * the widget’s parent widgets to be realized; calling
         * gtk_widget_realize() realizes the widget’s parents in addition to
         * `widget` itself. If a widget is not yet inside a toplevel window
         * when you realize it, bad things will happen.
         *
         * This function is primarily used in widget implementations, and
         * isn’t very useful otherwise. Many times when you think you might
         * need it, a better approach is to connect to a signal that will be
         * called after the widget is realized automatically, such as
         * #GtkWidget::draw. Or simply g_signal_connect () to the
         * #GtkWidget::realize signal.
         */
        realize(): void;
        /**
         * Computes the intersection of a `widget’`s area and `region,` returning
         * the intersection. The result may be empty, use cairo_region_is_empty() to
         * check.
         * @param region a #cairo_region_t, in the same coordinate system as          @widget->allocation. That is, relative to @widget->window          for widgets which return %FALSE from gtk_widget_get_has_window();          relative to the parent window of @widget->window otherwise.
         * @returns A newly allocated region holding the intersection of @widget     and @region.
         */
        region_intersect(region: cairo.Region): cairo.Region;
        /**
         * Registers a #GdkWindow with the widget and sets it up so that
         * the widget receives events for it. Call gtk_widget_unregister_window()
         * when destroying the window.
         *
         * Before 3.8 you needed to call gdk_window_set_user_data() directly to set
         * this up. This is now deprecated and you should use gtk_widget_register_window()
         * instead. Old code will keep working as is, although some new features like
         * transparency might not work perfectly.
         * @param window a #GdkWindow
         */
        register_window(window: Gdk.Window): void;
        /**
         * Removes an accelerator from `widget,` previously installed with
         * gtk_widget_add_accelerator().
         * @param accel_group accel group for this widget
         * @param accel_key GDK keyval of the accelerator
         * @param accel_mods modifier key combination of the accelerator
         * @returns whether an accelerator was installed and could be removed
         */
        remove_accelerator(
            accel_group: Gtk.AccelGroup,
            accel_key: number,
            accel_mods: Gdk.ModifierType | null,
        ): boolean;
        /**
         * Removes a widget from the list of mnemonic labels for
         * this widget. (See gtk_widget_list_mnemonic_labels()). The widget
         * must have previously been added to the list with
         * gtk_widget_add_mnemonic_label().
         * @param label a #GtkWidget that was previously set as a mnemonic label for         @widget with gtk_widget_add_mnemonic_label().
         */
        remove_mnemonic_label(label: Gtk.Widget): void;
        /**
         * Removes a tick callback previously registered with
         * gtk_widget_add_tick_callback().
         * @param id an id returned by gtk_widget_add_tick_callback()
         */
        remove_tick_callback(id: number): void;
        /**
         * A convenience function that uses the theme settings for `widget`
         * to look up `stock_id` and render it to a pixbuf. `stock_id` should
         * be a stock icon ID such as #GTK_STOCK_OPEN or #GTK_STOCK_OK. `size`
         * should be a size such as #GTK_ICON_SIZE_MENU. `detail` should be a
         * string that identifies the widget or code doing the rendering, so
         * that theme engines can special-case rendering for that widget or
         * code.
         *
         * The pixels in the returned #GdkPixbuf are shared with the rest of
         * the application and should not be modified. The pixbuf should be
         * freed after use with g_object_unref().
         * @param stock_id a stock ID
         * @param size a stock size (#GtkIconSize). A size of `(GtkIconSize)-1`     means render at the size of the source and don’t scale (if there are     multiple source sizes, GTK+ picks one of the available sizes).
         * @param detail render detail to pass to theme engine
         * @returns a new pixbuf, or %NULL if the     stock ID wasn’t known
         */
        render_icon(stock_id: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf | null;
        /**
         * A convenience function that uses the theme engine and style
         * settings for `widget` to look up `stock_id` and render it to
         * a pixbuf. `stock_id` should be a stock icon ID such as
         * #GTK_STOCK_OPEN or #GTK_STOCK_OK. `size` should be a size
         * such as #GTK_ICON_SIZE_MENU.
         *
         * The pixels in the returned #GdkPixbuf are shared with the rest of
         * the application and should not be modified. The pixbuf should be freed
         * after use with g_object_unref().
         * @param stock_id a stock ID
         * @param size a stock size (#GtkIconSize). A size of `(GtkIconSize)-1`     means render at the size of the source and don’t scale (if there are     multiple source sizes, GTK+ picks one of the available sizes).
         * @returns a new pixbuf, or %NULL if the     stock ID wasn’t known
         */
        render_icon_pixbuf(stock_id: string, size: number): GdkPixbuf.Pixbuf | null;
        /**
         * Moves a widget from one #GtkContainer to another, handling reference
         * count issues to avoid destroying the widget.
         * @param new_parent a #GtkContainer to move the widget into
         */
        reparent(new_parent: Gtk.Widget): void;
        /**
         * Reset the styles of `widget` and all descendents, so when
         * they are looked up again, they get the correct values
         * for the currently loaded RC file settings.
         *
         * This function is not useful for applications.
         */
        reset_rc_styles(): void;
        /**
         * Updates the style context of `widget` and all descendants
         * by updating its widget path. #GtkContainers may want
         * to use this on a child when reordering it in a way that a different
         * style might apply to it. See also gtk_container_get_path_for_child().
         */
        reset_style(): void;
        /**
         * Very rarely-used function. This function is used to emit
         * an expose event on a widget. This function is not normally used
         * directly. The only time it is used is when propagating an expose
         * event to a windowless child widget (gtk_widget_get_has_window() is %FALSE),
         * and that is normally done using gtk_container_propagate_draw().
         *
         * If you want to force an area of a window to be redrawn,
         * use gdk_window_invalidate_rect() or gdk_window_invalidate_region().
         * To cause the redraw to be done immediately, follow that call
         * with a call to gdk_window_process_updates().
         * @param event a expose #GdkEvent
         * @returns return from the event signal emission (%TRUE if   the event was handled)
         */
        send_expose(event: Gdk.Event): number;
        /**
         * Sends the focus change `event` to `widget`
         *
         * This function is not meant to be used by applications. The only time it
         * should be used is when it is necessary for a #GtkWidget to assign focus
         * to a widget that is semantically owned by the first widget even though
         * it’s not a direct child - for instance, a search entry in a floating
         * window similar to the quick search in #GtkTreeView.
         *
         * An example of its usage is:
         *
         *
         * ```c
         *   GdkEvent *fevent = gdk_event_new (GDK_FOCUS_CHANGE);
         *
         *   fevent->focus_change.type = GDK_FOCUS_CHANGE;
         *   fevent->focus_change.in = TRUE;
         *   fevent->focus_change.window = _gtk_widget_get_window (widget);
         *   if (fevent->focus_change.window != NULL)
         *     g_object_ref (fevent->focus_change.window);
         *
         *   gtk_widget_send_focus_change (widget, fevent);
         *
         *   gdk_event_free (event);
         * ```
         *
         * @param event a #GdkEvent of type GDK_FOCUS_CHANGE
         * @returns the return value from the event signal emission: %TRUE   if the event was handled, and %FALSE otherwise
         */
        send_focus_change(event: Gdk.Event): boolean;
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
         * @param accel_path path used to look up the accelerator
         * @param accel_group a #GtkAccelGroup.
         */
        set_accel_path(accel_path?: string | null, accel_group?: Gtk.AccelGroup | null): void;
        /**
         * Sets the widget’s allocation.  This should not be used
         * directly, but from within a widget’s size_allocate method.
         *
         * The allocation set should be the “adjusted” or actual
         * allocation. If you’re implementing a #GtkContainer, you want to use
         * gtk_widget_size_allocate() instead of gtk_widget_set_allocation().
         * The GtkWidgetClass::adjust_size_allocation virtual method adjusts the
         * allocation inside gtk_widget_size_allocate() to create an adjusted
         * allocation.
         * @param allocation a pointer to a #GtkAllocation to copy from
         */
        set_allocation(allocation: Gtk.Allocation): void;
        /**
         * Sets whether the application intends to draw on the widget in
         * an #GtkWidget::draw handler.
         *
         * This is a hint to the widget and does not affect the behavior of
         * the GTK+ core; many widgets ignore this flag entirely. For widgets
         * that do pay attention to the flag, such as #GtkEventBox and #GtkWindow,
         * the effect is to suppress default themed drawing of the widget's
         * background. (Children of the widget will still be drawn.) The application
         * is then entirely responsible for drawing the widget background.
         *
         * Note that the background is still drawn when the widget is mapped.
         * @param app_paintable %TRUE if the application will paint on the widget
         */
        set_app_paintable(app_paintable: boolean): void;
        /**
         * Specifies whether `widget` can be a default widget. See
         * gtk_widget_grab_default() for details about the meaning of
         * “default”.
         * @param can_default whether or not @widget can be a default widget.
         */
        set_can_default(can_default: boolean): void;
        /**
         * Specifies whether `widget` can own the input focus. See
         * gtk_widget_grab_focus() for actually setting the input focus on a
         * widget.
         * @param can_focus whether or not @widget can own the input focus.
         */
        set_can_focus(can_focus: boolean): void;
        /**
         * Sets whether `widget` should be mapped along with its when its parent
         * is mapped and `widget` has been shown with gtk_widget_show().
         *
         * The child visibility can be set for widget before it is added to
         * a container with gtk_widget_set_parent(), to avoid mapping
         * children unnecessary before immediately unmapping them. However
         * it will be reset to its default state of %TRUE when the widget
         * is removed from a container.
         *
         * Note that changing the child visibility of a widget does not
         * queue a resize on the widget. Most of the time, the size of
         * a widget is computed from all visible children, whether or
         * not they are mapped. If this is not the case, the container
         * can queue a resize itself.
         *
         * This function is only useful for container implementations and
         * never should be called by an application.
         * @param is_visible if %TRUE, @widget should be mapped along with its parent.
         */
        set_child_visible(is_visible: boolean): void;
        /**
         * Sets the widget’s clip.  This must not be used directly,
         * but from within a widget’s size_allocate method.
         * It must be called after gtk_widget_set_allocation() (or after chaining up
         * to the parent class), because that function resets the clip.
         *
         * The clip set should be the area that `widget` draws on. If `widget` is a
         * #GtkContainer, the area must contain all children's clips.
         *
         * If this function is not called by `widget` during a ::size-allocate handler,
         * the clip will be set to `widget'`s allocation.
         * @param clip a pointer to a #GtkAllocation to copy from
         */
        set_clip(clip: Gtk.Allocation): void;
        /**
         * Sets a widgets composite name. The widget must be
         * a composite child of its parent; see gtk_widget_push_composite_child().
         * @param name the name to set
         */
        set_composite_name(name: string): void;
        /**
         * Enables or disables a #GdkDevice to interact with `widget`
         * and all its children.
         *
         * It does so by descending through the #GdkWindow hierarchy
         * and enabling the same mask that is has for core events
         * (i.e. the one that gdk_window_get_events() returns).
         * @param device a #GdkDevice
         * @param enabled whether to enable the device
         */
        set_device_enabled(device: Gdk.Device, enabled: boolean): void;
        /**
         * Sets the device event mask (see #GdkEventMask) for a widget. The event
         * mask determines which events a widget will receive from `device`. Keep
         * in mind that different widgets have different default event masks, and by
         * changing the event mask you may disrupt a widget’s functionality,
         * so be careful. This function must be called while a widget is
         * unrealized. Consider gtk_widget_add_device_events() for widgets that are
         * already realized, or if you want to preserve the existing event
         * mask. This function can’t be used with windowless widgets (which return
         * %FALSE from gtk_widget_get_has_window());
         * to get events on those widgets, place them inside a #GtkEventBox
         * and receive events on the event box.
         * @param device a #GdkDevice
         * @param events event mask
         */
        set_device_events(device: Gdk.Device, events: Gdk.EventMask | null): void;
        /**
         * Sets the reading direction on a particular widget. This direction
         * controls the primary direction for widgets containing text,
         * and also the direction in which the children of a container are
         * packed. The ability to set the direction is present in order
         * so that correct localization into languages with right-to-left
         * reading directions can be done. Generally, applications will
         * let the default reading direction present, except for containers
         * where the containers are arranged in an order that is explicitly
         * visual rather than logical (such as buttons for text justification).
         *
         * If the direction is set to %GTK_TEXT_DIR_NONE, then the value
         * set by gtk_widget_set_default_direction() will be used.
         * @param dir the new direction
         */
        set_direction(dir: Gtk.TextDirection | null): void;
        /**
         * Widgets are double buffered by default; you can use this function
         * to turn off the buffering. “Double buffered” simply means that
         * gdk_window_begin_draw_frame() and gdk_window_end_draw_frame() are called
         * automatically around expose events sent to the
         * widget. gdk_window_begin_draw_frame() diverts all drawing to a widget's
         * window to an offscreen buffer, and gdk_window_end_draw_frame() draws the
         * buffer to the screen. The result is that users see the window
         * update in one smooth step, and don’t see individual graphics
         * primitives being rendered.
         *
         * In very simple terms, double buffered widgets don’t flicker,
         * so you would only use this function to turn off double buffering
         * if you had special needs and really knew what you were doing.
         *
         * Note: if you turn off double-buffering, you have to handle
         * expose events, since even the clearing to the background color or
         * pixmap will not happen automatically (as it is done in
         * gdk_window_begin_draw_frame()).
         *
         * In 3.10 GTK and GDK have been restructured for translucent drawing. Since
         * then expose events for double-buffered widgets are culled into a single
         * event to the toplevel GDK window. If you now unset double buffering, you
         * will cause a separate rendering pass for every widget. This will likely
         * cause rendering problems - in particular related to stacking - and usually
         * increases rendering times significantly.
         * @param double_buffered %TRUE to double-buffer a widget
         */
        set_double_buffered(double_buffered: boolean): void;
        /**
         * Sets the event mask (see #GdkEventMask) for a widget. The event
         * mask determines which events a widget will receive. Keep in mind
         * that different widgets have different default event masks, and by
         * changing the event mask you may disrupt a widget’s functionality,
         * so be careful. This function must be called while a widget is
         * unrealized. Consider gtk_widget_add_events() for widgets that are
         * already realized, or if you want to preserve the existing event
         * mask. This function can’t be used with widgets that have no window.
         * (See gtk_widget_get_has_window()).  To get events on those widgets,
         * place them inside a #GtkEventBox and receive events on the event
         * box.
         * @param events event mask
         */
        set_events(events: number): void;
        /**
         * Sets whether the widget should grab focus when it is clicked with the mouse.
         * Making mouse clicks not grab focus is useful in places like toolbars where
         * you don’t want the keyboard focus removed from the main area of the
         * application.
         * @param focus_on_click whether the widget should grab focus when clicked with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
        /**
         * Sets the font map to use for Pango rendering. When not set, the widget
         * will inherit the font map from its parent.
         * @param font_map a #PangoFontMap, or %NULL to unset any previously     set font map
         */
        set_font_map(font_map?: Pango.FontMap | null): void;
        /**
         * Sets the #cairo_font_options_t used for Pango rendering in this widget.
         * When not set, the default font options for the #GdkScreen will be used.
         * @param options a #cairo_font_options_t, or %NULL to unset any   previously set default font options.
         */
        set_font_options(options?: cairo.FontOptions | null): void;
        /**
         * Sets the horizontal alignment of `widget`.
         * See the #GtkWidget:halign property.
         * @param align the horizontal alignment
         */
        set_halign(align: Gtk.Align | null): void;
        /**
         * Sets the has-tooltip property on `widget` to `has_tooltip`.  See
         * #GtkWidget:has-tooltip for more information.
         * @param has_tooltip whether or not @widget has a tooltip.
         */
        set_has_tooltip(has_tooltip: boolean): void;
        /**
         * Specifies whether `widget` has a #GdkWindow of its own. Note that
         * all realized widgets have a non-%NULL “window” pointer
         * (gtk_widget_get_window() never returns a %NULL window when a widget
         * is realized), but for many of them it’s actually the #GdkWindow of
         * one of its parent widgets. Widgets that do not create a %window for
         * themselves in #GtkWidget::realize must announce this by
         * calling this function with `has_window` = %FALSE.
         *
         * This function should only be called by widget implementations,
         * and they should call it in their init() function.
         * @param has_window whether or not @widget has a window.
         */
        set_has_window(has_window: boolean): void;
        /**
         * Sets whether the widget would like any available extra horizontal
         * space. When a user resizes a #GtkWindow, widgets with expand=TRUE
         * generally receive the extra space. For example, a list or
         * scrollable area or document in your window would often be set to
         * expand.
         *
         * Call this function to set the expand flag if you would like your
         * widget to become larger horizontally when the window has extra
         * room.
         *
         * By default, widgets automatically expand if any of their children
         * want to expand. (To see if a widget will automatically expand given
         * its current children and state, call gtk_widget_compute_expand(). A
         * container can decide how the expandability of children affects the
         * expansion of the container by overriding the compute_expand virtual
         * method on #GtkWidget.).
         *
         * Setting hexpand explicitly with this function will override the
         * automatic expand behavior.
         *
         * This function forces the widget to expand or not to expand,
         * regardless of children.  The override occurs because
         * gtk_widget_set_hexpand() sets the hexpand-set property (see
         * gtk_widget_set_hexpand_set()) which causes the widget’s hexpand
         * value to be used, rather than looking at children and widget state.
         * @param expand whether to expand
         */
        set_hexpand(expand: boolean): void;
        /**
         * Sets whether the hexpand flag (see gtk_widget_get_hexpand()) will
         * be used.
         *
         * The hexpand-set property will be set automatically when you call
         * gtk_widget_set_hexpand() to set hexpand, so the most likely
         * reason to use this function would be to unset an explicit expand
         * flag.
         *
         * If hexpand is set, then it overrides any computed
         * expand value based on child widgets. If hexpand is not
         * set, then the expand value depends on whether any
         * children of the widget would like to expand.
         *
         * There are few reasons to use this function, but it’s here
         * for completeness and consistency.
         * @param set value for hexpand-set property
         */
        set_hexpand_set(set: boolean): void;
        /**
         * Marks the widget as being mapped.
         *
         * This function should only ever be called in a derived widget's
         * “map” or “unmap” implementation.
         * @param mapped %TRUE to mark the widget as mapped
         */
        set_mapped(mapped: boolean): void;
        /**
         * Sets the bottom margin of `widget`.
         * See the #GtkWidget:margin-bottom property.
         * @param margin the bottom margin
         */
        set_margin_bottom(margin: number): void;
        /**
         * Sets the end margin of `widget`.
         * See the #GtkWidget:margin-end property.
         * @param margin the end margin
         */
        set_margin_end(margin: number): void;
        /**
         * Sets the left margin of `widget`.
         * See the #GtkWidget:margin-left property.
         * @param margin the left margin
         */
        set_margin_left(margin: number): void;
        /**
         * Sets the right margin of `widget`.
         * See the #GtkWidget:margin-right property.
         * @param margin the right margin
         */
        set_margin_right(margin: number): void;
        /**
         * Sets the start margin of `widget`.
         * See the #GtkWidget:margin-start property.
         * @param margin the start margin
         */
        set_margin_start(margin: number): void;
        /**
         * Sets the top margin of `widget`.
         * See the #GtkWidget:margin-top property.
         * @param margin the top margin
         */
        set_margin_top(margin: number): void;
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
        set_name(name: string): void;
        /**
         * Sets the #GtkWidget:no-show-all property, which determines whether
         * calls to gtk_widget_show_all() will affect this widget.
         *
         * This is mostly for use in constructing widget hierarchies with externally
         * controlled visibility, see #GtkUIManager.
         * @param no_show_all the new value for the “no-show-all” property
         */
        set_no_show_all(no_show_all: boolean): void;
        /**
         * Request the `widget` to be rendered partially transparent,
         * with opacity 0 being fully transparent and 1 fully opaque. (Opacity values
         * are clamped to the [0,1] range.).
         * This works on both toplevel widget, and child widgets, although there
         * are some limitations:
         *
         * For toplevel widgets this depends on the capabilities of the windowing
         * system. On X11 this has any effect only on X screens with a compositing manager
         * running. See gtk_widget_is_composited(). On Windows it should work
         * always, although setting a window’s opacity after the window has been
         * shown causes it to flicker once on Windows.
         *
         * For child widgets it doesn’t work if any affected widget has a native window, or
         * disables double buffering.
         * @param opacity desired opacity, between 0 and 1
         */
        set_opacity(opacity: number): void;
        /**
         * This function is useful only when implementing subclasses of
         * #GtkContainer.
         * Sets the container as the parent of `widget,` and takes care of
         * some details such as updating the state and style of the child
         * to reflect its new location. The opposite function is
         * gtk_widget_unparent().
         * @param parent parent container
         */
        set_parent(parent: Gtk.Widget): void;
        /**
         * Sets a non default parent window for `widget`.
         *
         * For #GtkWindow classes, setting a `parent_window` effects whether
         * the window is a toplevel window or can be embedded into other
         * widgets.
         *
         * For #GtkWindow classes, this needs to be called before the
         * window is realized.
         * @param parent_window the new parent window.
         */
        set_parent_window(parent_window: Gdk.Window): void;
        /**
         * Marks the widget as being realized. This function must only be
         * called after all #GdkWindows for the `widget` have been created
         * and registered.
         *
         * This function should only ever be called in a derived widget's
         * “realize” or “unrealize” implementation.
         * @param realized %TRUE to mark the widget as realized
         */
        set_realized(realized: boolean): void;
        /**
         * Specifies whether `widget` will be treated as the default widget
         * within its toplevel when it has the focus, even if another widget
         * is the default.
         *
         * See gtk_widget_grab_default() for details about the meaning of
         * “default”.
         * @param receives_default whether or not @widget can be a default widget.
         */
        set_receives_default(receives_default: boolean): void;
        /**
         * Sets whether the entire widget is queued for drawing when its size
         * allocation changes. By default, this setting is %TRUE and
         * the entire widget is redrawn on every size change. If your widget
         * leaves the upper left unchanged when made bigger, turning this
         * setting off will improve performance.
         *
         * Note that for widgets where gtk_widget_get_has_window() is %FALSE
         * setting this flag to %FALSE turns off all allocation on resizing:
         * the widget will not even redraw if its position changes; this is to
         * allow containers that don’t draw anything to avoid excess
         * invalidations. If you set this flag on a widget with no window that
         * does draw on `widget->`window, you are
         * responsible for invalidating both the old and new allocation of the
         * widget when the widget is moved and responsible for invalidating
         * regions newly when the widget increases size.
         * @param redraw_on_allocate if %TRUE, the entire widget will be redrawn   when it is allocated to a new size. Otherwise, only the   new portion of the widget will be redrawn.
         */
        set_redraw_on_allocate(redraw_on_allocate: boolean): void;
        /**
         * Sets the sensitivity of a widget. A widget is sensitive if the user
         * can interact with it. Insensitive widgets are “grayed out” and the
         * user can’t interact with them. Insensitive widgets are known as
         * “inactive”, “disabled”, or “ghosted” in some other toolkits.
         * @param sensitive %TRUE to make the widget sensitive
         */
        set_sensitive(sensitive: boolean): void;
        /**
         * Sets the minimum size of a widget; that is, the widget’s size
         * request will be at least `width` by `height`. You can use this
         * function to force a widget to be larger than it normally would be.
         *
         * In most cases, gtk_window_set_default_size() is a better choice for
         * toplevel windows than this function; setting the default size will
         * still allow users to shrink the window. Setting the size request
         * will force them to leave the window at least as large as the size
         * request. When dealing with window sizes,
         * gtk_window_set_geometry_hints() can be a useful function as well.
         *
         * Note the inherent danger of setting any fixed size - themes,
         * translations into other languages, different fonts, and user action
         * can all change the appropriate size for a given widget. So, it's
         * basically impossible to hardcode a size that will always be
         * correct.
         *
         * The size request of a widget is the smallest size a widget can
         * accept while still functioning well and drawing itself correctly.
         * However in some strange cases a widget may be allocated less than
         * its requested size, and in many cases a widget may be allocated more
         * space than it requested.
         *
         * If the size request in a given direction is -1 (unset), then
         * the “natural” size request of the widget will be used instead.
         *
         * The size request set here does not include any margin from the
         * #GtkWidget properties margin-left, margin-right, margin-top, and
         * margin-bottom, but it does include pretty much all other padding
         * or border properties set by any subclass of #GtkWidget.
         * @param width width @widget should request, or -1 to unset
         * @param height height @widget should request, or -1 to unset
         */
        set_size_request(width: number, height: number): void;
        /**
         * This function is for use in widget implementations. Sets the state
         * of a widget (insensitive, prelighted, etc.) Usually you should set
         * the state using wrapper functions such as gtk_widget_set_sensitive().
         * @param state new state for @widget
         */
        set_state(state: Gtk.StateType | null): void;
        /**
         * This function is for use in widget implementations. Turns on flag
         * values in the current widget state (insensitive, prelighted, etc.).
         *
         * This function accepts the values %GTK_STATE_FLAG_DIR_LTR and
         * %GTK_STATE_FLAG_DIR_RTL but ignores them. If you want to set the widget's
         * direction, use gtk_widget_set_direction().
         *
         * It is worth mentioning that any other state than %GTK_STATE_FLAG_INSENSITIVE,
         * will be propagated down to all non-internal children if `widget` is a
         * #GtkContainer, while %GTK_STATE_FLAG_INSENSITIVE itself will be propagated
         * down to all #GtkContainer children by different means than turning on the
         * state flag down the hierarchy, both gtk_widget_get_state_flags() and
         * gtk_widget_is_sensitive() will make use of these.
         * @param flags State flags to turn on
         * @param clear Whether to clear state before turning on @flags
         */
        set_state_flags(flags: Gtk.StateFlags | null, clear: boolean): void;
        /**
         * Used to set the #GtkStyle for a widget (`widget->`style). Since
         * GTK 3, this function does nothing, the passed in style is ignored.
         * @param style a #GtkStyle, or %NULL to remove the effect     of a previous call to gtk_widget_set_style() and go back to     the default style
         */
        set_style(style?: Gtk.Style | null): void;
        /**
         * Enables or disables multiple pointer awareness. If this setting is %TRUE,
         * `widget` will start receiving multiple, per device enter/leave events. Note
         * that if custom #GdkWindows are created in #GtkWidget::realize,
         * gdk_window_set_support_multidevice() will have to be called manually on them.
         * @param support_multidevice %TRUE to support input from multiple devices.
         */
        set_support_multidevice(support_multidevice: boolean): void;
        /**
         * Sets `markup` as the contents of the tooltip, which is marked up with
         *  the [Pango text markup language][PangoMarkupFormat].
         *
         * This function will take care of setting #GtkWidget:has-tooltip to %TRUE
         * and of the default handler for the #GtkWidget::query-tooltip signal.
         *
         * See also the #GtkWidget:tooltip-markup property and
         * gtk_tooltip_set_markup().
         * @param markup the contents of the tooltip for @widget, or %NULL
         */
        set_tooltip_markup(markup?: string | null): void;
        /**
         * Sets `text` as the contents of the tooltip. This function will take
         * care of setting #GtkWidget:has-tooltip to %TRUE and of the default
         * handler for the #GtkWidget::query-tooltip signal.
         *
         * See also the #GtkWidget:tooltip-text property and gtk_tooltip_set_text().
         * @param text the contents of the tooltip for @widget
         */
        set_tooltip_text(text?: string | null): void;
        /**
         * Replaces the default window used for displaying
         * tooltips with `custom_window`. GTK+ will take care of showing and
         * hiding `custom_window` at the right moment, to behave likewise as
         * the default tooltip window. If `custom_window` is %NULL, the default
         * tooltip window will be used.
         * @param custom_window a #GtkWindow, or %NULL
         */
        set_tooltip_window(custom_window?: Gtk.Window | null): void;
        /**
         * Sets the vertical alignment of `widget`.
         * See the #GtkWidget:valign property.
         * @param align the vertical alignment
         */
        set_valign(align: Gtk.Align | null): void;
        /**
         * Sets whether the widget would like any available extra vertical
         * space.
         *
         * See gtk_widget_set_hexpand() for more detail.
         * @param expand whether to expand
         */
        set_vexpand(expand: boolean): void;
        /**
         * Sets whether the vexpand flag (see gtk_widget_get_vexpand()) will
         * be used.
         *
         * See gtk_widget_set_hexpand_set() for more detail.
         * @param set value for vexpand-set property
         */
        set_vexpand_set(set: boolean): void;
        /**
         * Sets the visibility state of `widget`. Note that setting this to
         * %TRUE doesn’t mean the widget is actually viewable, see
         * gtk_widget_get_visible().
         *
         * This function simply calls gtk_widget_show() or gtk_widget_hide()
         * but is nicer to use when the visibility of the widget depends on
         * some condition.
         * @param visible whether the widget should be shown or not
         */
        set_visible(visible: boolean): void;
        /**
         * Sets the visual that should be used for by widget and its children for
         * creating #GdkWindows. The visual must be on the same #GdkScreen as
         * returned by gtk_widget_get_screen(), so handling the
         * #GtkWidget::screen-changed signal is necessary.
         *
         * Setting a new `visual` will not cause `widget` to recreate its windows,
         * so you should call this function before `widget` is realized.
         * @param visual visual to be used or %NULL to unset a previous one
         */
        set_visual(visual?: Gdk.Visual | null): void;
        /**
         * Sets a widget’s window. This function should only be used in a
         * widget’s #GtkWidget::realize implementation. The %window passed is
         * usually either new window created with gdk_window_new(), or the
         * window of its parent widget as returned by
         * gtk_widget_get_parent_window().
         *
         * Widgets must indicate whether they will create their own #GdkWindow
         * by calling gtk_widget_set_has_window(). This is usually done in the
         * widget’s init() function.
         *
         * Note that this function does not add any reference to `window`.
         * @param window a #GdkWindow
         */
        set_window(window: Gdk.Window): void;
        /**
         * Sets a shape for this widget’s GDK window. This allows for
         * transparent windows etc., see gdk_window_shape_combine_region()
         * for more information.
         * @param region shape to be added, or %NULL to remove an existing shape
         */
        shape_combine_region(region?: cairo.Region | null): void;
        /**
         * Flags a widget to be displayed. Any widget that isn’t shown will
         * not appear on the screen. If you want to show all the widgets in a
         * container, it’s easier to call gtk_widget_show_all() on the
         * container, instead of individually showing the widgets.
         *
         * Remember that you have to show the containers containing a widget,
         * in addition to the widget itself, before it will appear onscreen.
         *
         * When a toplevel container is shown, it is immediately realized and
         * mapped; other shown widgets are realized and mapped when their
         * toplevel container is realized and mapped.
         */
        show(): void;
        /**
         * Recursively shows a widget, and any child widgets (if the widget is
         * a container).
         */
        show_all(): void;
        /**
         * Shows a widget. If the widget is an unmapped toplevel widget
         * (i.e. a #GtkWindow that has not yet been shown), enter the main
         * loop and wait for the window to actually be mapped. Be careful;
         * because the main loop is running, anything can happen during
         * this function.
         */
        show_now(): void;
        /**
         * This function is only used by #GtkContainer subclasses, to assign a size
         * and position to their child widgets.
         *
         * In this function, the allocation may be adjusted. It will be forced
         * to a 1x1 minimum size, and the adjust_size_allocation virtual
         * method on the child will be used to adjust the allocation. Standard
         * adjustments include removing the widget’s margins, and applying the
         * widget’s #GtkWidget:halign and #GtkWidget:valign properties.
         *
         * For baseline support in containers you need to use gtk_widget_size_allocate_with_baseline()
         * instead.
         * @param allocation position and size to be allocated to @widget
         */
        size_allocate(allocation: Gtk.Allocation): void;
        /**
         * This function is only used by #GtkContainer subclasses, to assign a size,
         * position and (optionally) baseline to their child widgets.
         *
         * In this function, the allocation and baseline may be adjusted. It
         * will be forced to a 1x1 minimum size, and the
         * adjust_size_allocation virtual and adjust_baseline_allocation
         * methods on the child will be used to adjust the allocation and
         * baseline. Standard adjustments include removing the widget's
         * margins, and applying the widget’s #GtkWidget:halign and
         * #GtkWidget:valign properties.
         *
         * If the child widget does not have a valign of %GTK_ALIGN_BASELINE the
         * baseline argument is ignored and -1 is used instead.
         * @param allocation position and size to be allocated to @widget
         * @param baseline The baseline of the child, or -1
         */
        size_allocate_with_baseline(allocation: Gtk.Allocation, baseline: number): void;
        /**
         * This function is typically used when implementing a #GtkContainer
         * subclass.  Obtains the preferred size of a widget. The container
         * uses this information to arrange its child widgets and decide what
         * size allocations to give them with gtk_widget_size_allocate().
         *
         * You can also call this function from an application, with some
         * caveats. Most notably, getting a size request requires the widget
         * to be associated with a screen, because font information may be
         * needed. Multihead-aware applications should keep this in mind.
         *
         * Also remember that the size request is not necessarily the size
         * a widget will actually be allocated.
         */
        size_request(): Gtk.Requisition;
        /**
         * This function attaches the widget’s #GtkStyle to the widget's
         * #GdkWindow. It is a replacement for
         *
         *
         * ```
         * widget->style = gtk_style_attach (widget->style, widget->window);
         * ```
         *
         *
         * and should only ever be called in a derived widget’s “realize”
         * implementation which does not chain up to its parent class'
         * “realize” implementation, because one of the parent classes
         * (finally #GtkWidget) would attach the style itself.
         */
        style_attach(): void;
        /**
         * Gets the value of a style property of `widget`.
         * @param property_name the name of a style property
         * @param value location to return the property value
         */
        style_get_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Reverts the effect of a previous call to gtk_widget_freeze_child_notify().
         * This causes all queued #GtkWidget::child-notify signals on `widget` to be
         * emitted.
         */
        thaw_child_notify(): void;
        /**
         * Translate coordinates relative to `src_widget’`s allocation to coordinates
         * relative to `dest_widget’`s allocations. In order to perform this
         * operation, both widgets must be realized, and must share a common
         * toplevel.
         * @param dest_widget a #GtkWidget
         * @param src_x X position relative to @src_widget
         * @param src_y Y position relative to @src_widget
         * @returns %FALSE if either widget was not realized, or there   was no common ancestor. In this case, nothing is stored in   *@dest_x and *@dest_y. Otherwise %TRUE.
         */
        translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [boolean, number, number];
        /**
         * Triggers a tooltip query on the display where the toplevel of `widget`
         * is located. See gtk_tooltip_trigger_tooltip_query() for more
         * information.
         */
        trigger_tooltip_query(): void;
        /**
         * This function is only for use in widget implementations. Causes
         * a widget to be unmapped if it’s currently mapped.
         */
        unmap(): void;
        /**
         * This function is only for use in widget implementations.
         * Should be called by implementations of the remove method
         * on #GtkContainer, to dissociate a child from the container.
         */
        unparent(): void;
        /**
         * This function is only useful in widget implementations.
         * Causes a widget to be unrealized (frees all GDK resources
         * associated with the widget, such as `widget->`window).
         */
        unrealize(): void;
        /**
         * Unregisters a #GdkWindow from the widget that was previously set up with
         * gtk_widget_register_window(). You need to call this when the window is
         * no longer used by the widget, such as when you destroy it.
         * @param window a #GdkWindow
         */
        unregister_window(window: Gdk.Window): void;
        /**
         * This function is for use in widget implementations. Turns off flag
         * values for the current widget state (insensitive, prelighted, etc.).
         * See gtk_widget_set_state_flags().
         * @param flags State flags to turn off
         */
        unset_state_flags(flags: Gtk.StateFlags | null): void;
        vfunc_adjust_baseline_allocation(baseline: number): void;
        vfunc_adjust_baseline_request(minimum_baseline: number, natural_baseline: number): void;
        /**
         * Convert an initial size allocation assigned
         *   by a #GtkContainer using gtk_widget_size_allocate(), into an actual
         *   size allocation to be used by the widget. adjust_size_allocation
         *   adjusts to a child widget’s actual allocation
         *   from what a parent container computed for the
         *   child. The adjusted allocation must be entirely within the original
         *   allocation. In any custom implementation, chain up to the default
         *   #GtkWidget implementation of this method, which applies the margin
         *   and alignment properties of #GtkWidget. Chain up
         *   before performing your own adjustments so your
         *   own adjustments remove more allocation after the #GtkWidget base
         *   class has already removed margin and alignment. The natural size
         *   passed in should be adjusted in the same way as the allocated size,
         *   which allows adjustments to perform alignments or other changes
         *   based on natural size.
         * @param orientation
         * @param minimum_size
         * @param natural_size
         * @param allocated_pos
         * @param allocated_size
         */
        vfunc_adjust_size_allocation(
            orientation: Gtk.Orientation,
            minimum_size: number,
            natural_size: number,
            allocated_pos: number,
            allocated_size: number,
        ): void;
        /**
         * Convert an initial size request from a widget's
         *   #GtkSizeRequestMode virtual method implementations into a size request to
         *   be used by parent containers in laying out the widget.
         *   adjust_size_request adjusts from a child widget's
         *   original request to what a parent container should
         *   use for layout. The `for_size` argument will be -1 if the request should
         *   not be for a particular size in the opposing orientation, i.e. if the
         *   request is not height-for-width or width-for-height. If `for_size` is
         *   greater than -1, it is the proposed allocation in the opposing
         *   orientation that we need the request for. Implementations of
         *   adjust_size_request should chain up to the default implementation,
         *   which applies #GtkWidget’s margin properties and imposes any values
         *   from gtk_widget_set_size_request(). Chaining up should be last,
         *   after your subclass adjusts the request, so
         *   #GtkWidget can apply constraints and add the margin properly.
         * @param orientation
         * @param minimum_size
         * @param natural_size
         */
        vfunc_adjust_size_request(orientation: Gtk.Orientation, minimum_size: number, natural_size: number): void;
        /**
         * Signal will be emitted when a button
         *   (typically from a mouse) is pressed.
         * @param event
         */
        vfunc_button_press_event(event: Gdk.EventButton): boolean;
        /**
         * Signal will be emitted when a button
         *   (typically from a mouse) is released.
         * @param event
         */
        vfunc_button_release_event(event: Gdk.EventButton): boolean;
        /**
         * Determines whether an accelerator that activates the signal
         * identified by `signal_id` can currently be activated.
         * This is done by emitting the #GtkWidget::can-activate-accel
         * signal on `widget;` if the signal isn’t overridden by a
         * handler or in a derived widget, then the default check is
         * that the widget must be sensitive, and the widget and all
         * its ancestors mapped.
         * @param signal_id the ID of a signal installed on @widget
         */
        vfunc_can_activate_accel(signal_id: number): boolean;
        /**
         * Emits a #GtkWidget::child-notify signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         *
         * This is the analogue of g_object_notify() for child properties.
         *
         * Also see gtk_container_child_notify().
         * @param child_property the name of a child property installed on the                  class of @widget’s parent
         */
        vfunc_child_notify(child_property: GObject.ParamSpec): void;
        /**
         * Signal emitted when the composited status of
         *   widgets screen changes. See gdk_screen_is_composited().
         */
        vfunc_composited_changed(): void;
        /**
         * Computes whether a container should give this
         *   widget extra space when possible.
         * @param hexpand_p
         * @param vexpand_p
         */
        vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void;
        /**
         * Signal will be emitted when the size, position or
         *   stacking of the widget’s window has changed.
         * @param event
         */
        vfunc_configure_event(event: Gdk.EventConfigure): boolean;
        /**
         * Signal emitted when a redirected window belonging to
         *   widget gets drawn into.
         * @param event
         */
        vfunc_damage_event(event: Gdk.EventExpose): boolean;
        /**
         * Signal emitted if a user requests that a toplevel
         *   window is closed.
         * @param event
         */
        vfunc_delete_event(event: Gdk.EventAny): boolean;
        /**
         * Destroys a widget.
         *
         * When a widget is destroyed all references it holds on other objects
         * will be released:
         *
         *  - if the widget is inside a container, it will be removed from its
         *  parent
         *  - if the widget is a container, all its children will be destroyed,
         *  recursively
         *  - if the widget is a top level, it will be removed from the list
         *  of top level widgets that GTK+ maintains internally
         *
         * It's expected that all references held on the widget will also
         * be released; you should connect to the #GtkWidget::destroy signal
         * if you hold a reference to `widget` and you wish to remove it when
         * this function is called. It is not necessary to do so if you are
         * implementing a #GtkContainer, as you'll be able to use the
         * #GtkContainerClass.remove() virtual function for that.
         *
         * It's important to notice that gtk_widget_destroy() will only cause
         * the `widget` to be finalized if no additional references, acquired
         * using g_object_ref(), are held on it. In case additional references
         * are in place, the `widget` will be in an "inert" state after calling
         * this function; `widget` will still point to valid memory, allowing you
         * to release the references you hold, but you may not query the widget's
         * own state.
         *
         * You should typically call this function on top level widgets, and
         * rarely on child widgets.
         *
         * See also: gtk_container_remove()
         */
        vfunc_destroy(): void;
        /**
         * Signal is emitted when a #GdkWindow is destroyed.
         * @param event
         */
        vfunc_destroy_event(event: Gdk.EventAny): boolean;
        /**
         * Signal emitted when the text direction of a
         *   widget changes.
         * @param previous_direction
         */
        vfunc_direction_changed(previous_direction: Gtk.TextDirection): void;
        /**
         * Seldomly overidden.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_child_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * Signal emitted on the drag source when a drag is
         *   started.
         * @param context
         */
        vfunc_drag_begin(context: Gdk.DragContext): void;
        /**
         * Signal emitted on the drag source when a drag
         *   with the action %GDK_ACTION_MOVE is successfully completed.
         * @param context
         */
        vfunc_drag_data_delete(context: Gdk.DragContext): void;
        /**
         * Signal emitted on the drag source when the drop
         *   site requests the data which is dragged.
         * @param context
         * @param selection_data
         * @param info
         * @param time_
         */
        vfunc_drag_data_get(
            context: Gdk.DragContext,
            selection_data: Gtk.SelectionData,
            info: number,
            time_: number,
        ): void;
        /**
         * Signal emitted on the drop site when the
         *   dragged data has been received.
         * @param context
         * @param x
         * @param y
         * @param selection_data
         * @param info
         * @param time_
         */
        vfunc_drag_data_received(
            context: Gdk.DragContext,
            x: number,
            y: number,
            selection_data: Gtk.SelectionData,
            info: number,
            time_: number,
        ): void;
        /**
         * Signal emitted on the drop site when the user drops the
         *   data onto the widget.
         * @param context
         * @param x
         * @param y
         * @param time_
         */
        vfunc_drag_drop(context: Gdk.DragContext, x: number, y: number, time_: number): boolean;
        /**
         * Signal emitted on the drag source when a drag is
         *   finished.
         * @param context
         */
        vfunc_drag_end(context: Gdk.DragContext): void;
        /**
         * Signal emitted on the drag source when a drag has
         *   failed.
         * @param context
         * @param result
         */
        vfunc_drag_failed(context: Gdk.DragContext, result: Gtk.DragResult): boolean;
        /**
         * Signal emitted on the drop site when the cursor leaves
         *   the widget.
         * @param context
         * @param time_
         */
        vfunc_drag_leave(context: Gdk.DragContext, time_: number): void;
        /**
         * signal emitted on the drop site when the user moves
         *   the cursor over the widget during a drag.
         * @param context
         * @param x
         * @param y
         * @param time_
         */
        vfunc_drag_motion(context: Gdk.DragContext, x: number, y: number, time_: number): boolean;
        /**
         * Signal emitted when a widget is supposed to render itself.
         * @param cr
         */
        vfunc_draw(cr: cairo.Context): boolean;
        /**
         * Signal event will be emitted when the pointer
         *   enters the widget’s window.
         * @param event
         */
        vfunc_enter_notify_event(event: Gdk.EventCrossing): boolean;
        /**
         * Rarely-used function. This function is used to emit
         * the event signals on a widget (those signals should never
         * be emitted without using this function to do so).
         * If you want to synthesize an event though, don’t use this function;
         * instead, use gtk_main_do_event() so the event will behave as if
         * it were in the event queue. Don’t synthesize expose events; instead,
         * use gdk_window_invalidate_rect() to invalidate a region of the
         * window.
         * @param event a #GdkEvent
         */
        vfunc_event(event: Gdk.Event): boolean;
        vfunc_focus(direction: Gtk.DirectionType): boolean;
        /**
         * Signal emitted when the keyboard focus enters the
         * widget’s window.
         * @param event
         */
        vfunc_focus_in_event(event: Gdk.EventFocus): boolean;
        /**
         * Signal emitted when the keyboard focus leaves the
         * widget’s window.
         * @param event
         */
        vfunc_focus_out_event(event: Gdk.EventFocus): boolean;
        /**
         * Returns the accessible object that describes the widget to an
         * assistive technology.
         *
         * If accessibility support is not available, this #AtkObject
         * instance may be a no-op. Likewise, if no class-specific #AtkObject
         * implementation is available for the widget instance in question,
         * it will inherit an #AtkObject implementation from the first ancestor
         * class for which such an implementation is defined.
         *
         * The documentation of the
         * [ATK](http://developer.gnome.org/atk/stable/)
         * library contains more information about accessible objects and their uses.
         */
        vfunc_get_accessible(): Atk.Object;
        /**
         * Retrieves a widget’s initial minimum and natural height.
         *
         * This call is specific to width-for-height requests.
         *
         * The returned request will be modified by the
         * GtkWidgetClass::adjust_size_request virtual method and by any
         * #GtkSizeGroups that have been applied. That is, the returned request
         * is the one that should be used for layout, not necessarily the one
         * returned by the widget itself.
         */
        vfunc_get_preferred_height(): [number, number];
        /**
         * Retrieves a widget’s minimum and natural height and the corresponding baselines if it would be given
         * the specified `width,` or the default height if `width` is -1. The baselines may be -1 which means
         * that no baseline is requested for this widget.
         *
         * The returned request will be modified by the
         * GtkWidgetClass::adjust_size_request and GtkWidgetClass::adjust_baseline_request virtual methods
         * and by any #GtkSizeGroups that have been applied. That is, the returned request
         * is the one that should be used for layout, not necessarily the one
         * returned by the widget itself.
         * @param width the width which is available for allocation, or -1 if none
         */
        vfunc_get_preferred_height_and_baseline_for_width(width: number): [number, number, number, number];
        /**
         * Retrieves a widget’s minimum and natural height if it would be given
         * the specified `width`.
         *
         * The returned request will be modified by the
         * GtkWidgetClass::adjust_size_request virtual method and by any
         * #GtkSizeGroups that have been applied. That is, the returned request
         * is the one that should be used for layout, not necessarily the one
         * returned by the widget itself.
         * @param width the width which is available for allocation
         */
        vfunc_get_preferred_height_for_width(width: number): [number, number];
        /**
         * Retrieves a widget’s initial minimum and natural width.
         *
         * This call is specific to height-for-width requests.
         *
         * The returned request will be modified by the
         * GtkWidgetClass::adjust_size_request virtual method and by any
         * #GtkSizeGroups that have been applied. That is, the returned request
         * is the one that should be used for layout, not necessarily the one
         * returned by the widget itself.
         */
        vfunc_get_preferred_width(): [number, number];
        /**
         * Retrieves a widget’s minimum and natural width if it would be given
         * the specified `height`.
         *
         * The returned request will be modified by the
         * GtkWidgetClass::adjust_size_request virtual method and by any
         * #GtkSizeGroups that have been applied. That is, the returned request
         * is the one that should be used for layout, not necessarily the one
         * returned by the widget itself.
         * @param height the height which is available for allocation
         */
        vfunc_get_preferred_width_for_height(height: number): [number, number];
        /**
         * Gets whether the widget prefers a height-for-width layout
         * or a width-for-height layout.
         *
         * #GtkBin widgets generally propagate the preference of
         * their child, container widgets need to request something either in
         * context of their children or in context of their allocation
         * capabilities.
         */
        vfunc_get_request_mode(): Gtk.SizeRequestMode;
        /**
         * Signal emitted when a pointer or keyboard grab
         *   on a window belonging to widget gets broken.
         * @param event
         */
        vfunc_grab_broken_event(event: Gdk.EventGrabBroken): boolean;
        /**
         * Causes `widget` to have the keyboard focus for the #GtkWindow it's
         * inside. `widget` must be a focusable widget, such as a #GtkEntry;
         * something like #GtkFrame won’t work.
         *
         * More precisely, it must have the %GTK_CAN_FOCUS flag set. Use
         * gtk_widget_set_can_focus() to modify that flag.
         *
         * The widget also needs to be realized and mapped. This is indicated by the
         * related signals. Grabbing the focus immediately after creating the widget
         * will likely fail and cause critical warnings.
         */
        vfunc_grab_focus(): void;
        /**
         * Signal emitted when a widget becomes shadowed by a
         *   GTK+ grab (not a pointer or keyboard grab) on another widget, or
         *   when it becomes unshadowed due to a grab being removed.
         * @param was_grabbed
         */
        vfunc_grab_notify(was_grabbed: boolean): void;
        /**
         * Reverses the effects of gtk_widget_show(), causing the widget to be
         * hidden (invisible to the user).
         */
        vfunc_hide(): void;
        /**
         * Signal emitted when the anchored state of a
         *   widget changes.
         * @param previous_toplevel
         */
        vfunc_hierarchy_changed(previous_toplevel: Gtk.Widget): void;
        /**
         * Signal emitted when a key is pressed.
         * @param event
         */
        vfunc_key_press_event(event: Gdk.EventKey): boolean;
        /**
         * Signal is emitted when a key is released.
         * @param event
         */
        vfunc_key_release_event(event: Gdk.EventKey): boolean;
        /**
         * This function should be called whenever keyboard navigation within
         * a single widget hits a boundary. The function emits the
         * #GtkWidget::keynav-failed signal on the widget and its return
         * value should be interpreted in a way similar to the return value of
         * gtk_widget_child_focus():
         *
         * When %TRUE is returned, stay in the widget, the failed keyboard
         * navigation is OK and/or there is nowhere we can/should move the
         * focus to.
         *
         * When %FALSE is returned, the caller should continue with keyboard
         * navigation outside the widget, e.g. by calling
         * gtk_widget_child_focus() on the widget’s toplevel.
         *
         * The default ::keynav-failed handler returns %FALSE for
         * %GTK_DIR_TAB_FORWARD and %GTK_DIR_TAB_BACKWARD. For the other
         * values of #GtkDirectionType it returns %TRUE.
         *
         * Whenever the default handler returns %TRUE, it also calls
         * gtk_widget_error_bell() to notify the user of the failed keyboard
         * navigation.
         *
         * A use case for providing an own implementation of ::keynav-failed
         * (either by connecting to it or by overriding it) would be a row of
         * #GtkEntry widgets where the user should be able to navigate the
         * entire row with the cursor keys, as e.g. known from user interfaces
         * that require entering license keys.
         * @param direction direction of focus movement
         */
        vfunc_keynav_failed(direction: Gtk.DirectionType): boolean;
        /**
         * Will be emitted when the pointer leaves the
         *   widget’s window.
         * @param event
         */
        vfunc_leave_notify_event(event: Gdk.EventCrossing): boolean;
        /**
         * This function is only for use in widget implementations. Causes
         * a widget to be mapped if it isn’t already.
         */
        vfunc_map(): void;
        /**
         * Signal emitted when the widget’s window is mapped.
         * @param event
         */
        vfunc_map_event(event: Gdk.EventAny): boolean;
        /**
         * Emits the #GtkWidget::mnemonic-activate signal.
         * @param group_cycling %TRUE if there are other widgets with the same mnemonic
         */
        vfunc_mnemonic_activate(group_cycling: boolean): boolean;
        /**
         * Signal emitted when the pointer moves over
         *   the widget’s #GdkWindow.
         * @param event
         */
        vfunc_motion_notify_event(event: Gdk.EventMotion): boolean;
        /**
         * Signal emitted when a change of focus is requested
         * @param direction
         */
        vfunc_move_focus(direction: Gtk.DirectionType): void;
        /**
         * Signal emitted when a new parent has been set on a
         *   widget.
         * @param previous_parent
         */
        vfunc_parent_set(previous_parent: Gtk.Widget): void;
        /**
         * Signal emitted whenever a widget should pop up a
         *   context menu.
         */
        vfunc_popup_menu(): boolean;
        /**
         * Signal will be emitted when a property on
         *   the widget’s window has been changed or deleted.
         * @param event
         */
        vfunc_property_notify_event(event: Gdk.EventProperty): boolean;
        vfunc_proximity_in_event(event: Gdk.EventProximity): boolean;
        vfunc_proximity_out_event(event: Gdk.EventProximity): boolean;
        /**
         * Signal emitted when “has-tooltip” is %TRUE and the
         *   hover timeout has expired with the cursor hovering “above”
         *   widget; or emitted when widget got focus in keyboard mode.
         * @param x
         * @param y
         * @param keyboard_tooltip
         * @param tooltip
         */
        vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean;
        /**
         * Invalidates the area of `widget` defined by `region` by calling
         * gdk_window_invalidate_region() on the widget’s window and all its
         * child windows. Once the main loop becomes idle (after the current
         * batch of events has been processed, roughly), the window will
         * receive expose events for the union of all regions that have been
         * invalidated.
         *
         * Normally you would only use this function in widget
         * implementations. You might also use it to schedule a redraw of a
         * #GtkDrawingArea or some portion thereof.
         * @param region region to draw
         */
        vfunc_queue_draw_region(region: cairo.Region): void;
        /**
         * Creates the GDK (windowing system) resources associated with a
         * widget.  For example, `widget->`window will be created when a widget
         * is realized.  Normally realization happens implicitly; if you show
         * a widget and all its parent containers, then the widget will be
         * realized and mapped automatically.
         *
         * Realizing a widget requires all
         * the widget’s parent widgets to be realized; calling
         * gtk_widget_realize() realizes the widget’s parents in addition to
         * `widget` itself. If a widget is not yet inside a toplevel window
         * when you realize it, bad things will happen.
         *
         * This function is primarily used in widget implementations, and
         * isn’t very useful otherwise. Many times when you think you might
         * need it, a better approach is to connect to a signal that will be
         * called after the widget is realized automatically, such as
         * #GtkWidget::draw. Or simply g_signal_connect () to the
         * #GtkWidget::realize signal.
         */
        vfunc_realize(): void;
        /**
         * Signal emitted when the screen of a widget has
         *   changed.
         * @param previous_screen
         */
        vfunc_screen_changed(previous_screen: Gdk.Screen): void;
        /**
         * Signal emitted when a button in the 4 to 7 range is
         *   pressed.
         * @param event
         */
        vfunc_scroll_event(event: Gdk.EventScroll): boolean;
        /**
         * Signal will be emitted when the the
         *   widget’s window has lost ownership of a selection.
         * @param event
         */
        vfunc_selection_clear_event(event: Gdk.EventSelection): boolean;
        vfunc_selection_get(selection_data: Gtk.SelectionData, info: number, time_: number): void;
        vfunc_selection_notify_event(event: Gdk.EventSelection): boolean;
        vfunc_selection_received(selection_data: Gtk.SelectionData, time_: number): void;
        /**
         * Signal will be emitted when another
         *   client requests ownership of the selection owned by the widget's
         *   window.
         * @param event
         */
        vfunc_selection_request_event(event: Gdk.EventSelection): boolean;
        /**
         * Flags a widget to be displayed. Any widget that isn’t shown will
         * not appear on the screen. If you want to show all the widgets in a
         * container, it’s easier to call gtk_widget_show_all() on the
         * container, instead of individually showing the widgets.
         *
         * Remember that you have to show the containers containing a widget,
         * in addition to the widget itself, before it will appear onscreen.
         *
         * When a toplevel container is shown, it is immediately realized and
         * mapped; other shown widgets are realized and mapped when their
         * toplevel container is realized and mapped.
         */
        vfunc_show(): void;
        /**
         * Recursively shows a widget, and any child widgets (if the widget is
         * a container).
         */
        vfunc_show_all(): void;
        vfunc_show_help(help_type: Gtk.WidgetHelpType): boolean;
        /**
         * This function is only used by #GtkContainer subclasses, to assign a size
         * and position to their child widgets.
         *
         * In this function, the allocation may be adjusted. It will be forced
         * to a 1x1 minimum size, and the adjust_size_allocation virtual
         * method on the child will be used to adjust the allocation. Standard
         * adjustments include removing the widget’s margins, and applying the
         * widget’s #GtkWidget:halign and #GtkWidget:valign properties.
         *
         * For baseline support in containers you need to use gtk_widget_size_allocate_with_baseline()
         * instead.
         * @param allocation position and size to be allocated to @widget
         */
        vfunc_size_allocate(allocation: Gtk.Allocation): void;
        /**
         * Signal emitted when the widget state
         *   changes. Deprecated: 3.0
         * @param previous_state
         */
        vfunc_state_changed(previous_state: Gtk.StateType): void;
        /**
         * Signal emitted when the widget state changes,
         *   see gtk_widget_get_state_flags().
         * @param previous_state_flags
         */
        vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void;
        /**
         * Signal emitted when a new style has been set on a
         * widget. Deprecated: 3.0
         * @param previous_style
         */
        vfunc_style_set(previous_style: Gtk.Style): void;
        /**
         * Signal emitted when the GtkStyleContext of a widget
         *   is changed.
         */
        vfunc_style_updated(): void;
        /**
         * Signal emitted when a touch event happens
         * @param event
         */
        vfunc_touch_event(event: Gdk.EventTouch): boolean;
        /**
         * This function is only for use in widget implementations. Causes
         * a widget to be unmapped if it’s currently mapped.
         */
        vfunc_unmap(): void;
        /**
         * Signal will be emitted when the widget’s window is
         *   unmapped.
         * @param event
         */
        vfunc_unmap_event(event: Gdk.EventAny): boolean;
        /**
         * This function is only useful in widget implementations.
         * Causes a widget to be unrealized (frees all GDK resources
         * associated with the widget, such as `widget->`window).
         */
        vfunc_unrealize(): void;
        /**
         * Signal emitted when the widget’s window is
         *   obscured or unobscured.
         * @param event
         */
        vfunc_visibility_notify_event(event: Gdk.EventVisibility): boolean;
        /**
         * Signal emitted when the state of the toplevel
         *   window associated to the widget changes.
         * @param event
         */
        vfunc_window_state_event(event: Gdk.EventWindowState): boolean;
    }

    namespace IconChooserDialog {
        // Signal signatures
        interface SignalSignatures extends GtkWindow.SignalSignatures {
            close: () => void;
            select: () => void;
            'notify::allow-paths': (pspec: GObject.ParamSpec) => void;
            'notify::default-icon': (pspec: GObject.ParamSpec) => void;
            'notify::icon-size': (pspec: GObject.ParamSpec) => void;
            'notify::accept-focus': (pspec: GObject.ParamSpec) => void;
            'notify::application': (pspec: GObject.ParamSpec) => void;
            'notify::attached-to': (pspec: GObject.ParamSpec) => void;
            'notify::decorated': (pspec: GObject.ParamSpec) => void;
            'notify::default-height': (pspec: GObject.ParamSpec) => void;
            'notify::default-width': (pspec: GObject.ParamSpec) => void;
            'notify::deletable': (pspec: GObject.ParamSpec) => void;
            'notify::destroy-with-parent': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-map': (pspec: GObject.ParamSpec) => void;
            'notify::focus-visible': (pspec: GObject.ParamSpec) => void;
            'notify::gravity': (pspec: GObject.ParamSpec) => void;
            'notify::has-resize-grip': (pspec: GObject.ParamSpec) => void;
            'notify::has-toplevel-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hide-titlebar-when-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::is-active': (pspec: GObject.ParamSpec) => void;
            'notify::is-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::mnemonics-visible': (pspec: GObject.ParamSpec) => void;
            'notify::modal': (pspec: GObject.ParamSpec) => void;
            'notify::resizable': (pspec: GObject.ParamSpec) => void;
            'notify::resize-grip-visible': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::screen': (pspec: GObject.ParamSpec) => void;
            'notify::skip-pager-hint': (pspec: GObject.ParamSpec) => void;
            'notify::skip-taskbar-hint': (pspec: GObject.ParamSpec) => void;
            'notify::startup-id': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::transient-for': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::type-hint': (pspec: GObject.ParamSpec) => void;
            'notify::urgency-hint': (pspec: GObject.ParamSpec) => void;
            'notify::window-position': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends GtkWindow.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {
            allow_paths: boolean;
            allowPaths: boolean;
            default_icon: string;
            defaultIcon: string;
            icon_size: IconSize;
            iconSize: IconSize;
        }
    }

    class IconChooserDialog extends GtkWindow implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<IconChooserDialog>;

        // Properties

        /**
         * Whether to allow paths to be searched and selected or only icon names.
         */
        get allow_paths(): boolean;
        set allow_paths(val: boolean);
        /**
         * Whether to allow paths to be searched and selected or only icon names.
         */
        get allowPaths(): boolean;
        set allowPaths(val: boolean);
        /**
         * The icon to use by default.
         */
        get default_icon(): string;
        set default_icon(val: string);
        /**
         * The icon to use by default.
         */
        get defaultIcon(): string;
        set defaultIcon(val: string);
        /**
         * The preferred size to use when looking up icons. This only works with icon names.
         * Additionally, there is no guarantee that a selected icon name will exist in a
         * particular size.
         */
        get icon_size(): IconSize;
        set icon_size(val: IconSize);
        /**
         * The preferred size to use when looking up icons. This only works with icon names.
         * Additionally, there is no guarantee that a selected icon name will exist in a
         * particular size.
         */
        get iconSize(): IconSize;
        set iconSize(val: IconSize);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: IconChooserDialog.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<IconChooserDialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): IconChooserDialog;

        // Signals

        connect<K extends keyof IconChooserDialog.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, IconChooserDialog.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof IconChooserDialog.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, IconChooserDialog.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof IconChooserDialog.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<IconChooserDialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Allows a button to be added to the #GtkActionBar of the dialog with a custom
         * response id.
         * @param button a #GtkButton to add
         * @param packing the #GtkPackType to specify start or end packing to the action bar
         * @param response_id the dialog response id to return when this button is clicked.
         */
        add_button(button: Gtk.Widget, packing: Gtk.PackType | null, response_id: Gtk.ResponseType | null): void;
        /**
         * Adds a custom category to the dialog.
         * @param name the name of the category as it will be displayed in the category list
         * @param icons a list of icon names to add to the new category
         */
        add_custom_category(name: string, icons: string[]): void;
        /**
         * Returns the default icon (if set).
         * @returns the default icon, or NULL if none is set
         */
        get_default_icon(): string;
        /**
         * Gets the currently selected icon from the dialog. If allow-paths is TRUE, this function may return
         * either an icon name or a path depending on what the user selects. Otherwise it will only return an
         * icon name.
         * @returns the string representation of the currently selected icon or NULL if no icon is selected.
         */
        get_icon_string(): string;
        /**
         * Shows the dialog and enters a separate main loop until an icon is chosen or the action is canceled.
         *
         * xapp_icon_chooser_dialog_run (), xapp_icon_chooser_dialog_run_with_icon(), and
         * xapp_icon_chooser_dialog_run_with_category () may all be called multiple times. This is useful for
         * applications which use this dialog multiple times, as it may improve performance for subsequent
         * calls.
         * @returns GTK_RESPONSE_OK if the user selected an icon, or GTK_RESPONSE_CANCEL otherwise
         */
        run(): number;
        /**
         * Like xapp_icon_chooser_dialog_run but selects a particular category specified by `category`.
         * This is used when there is a particular category of icon that is more appropriate than the
         * others. If the category does not exist, the first category in the list will be selected. To
         * get a list of possible categories, use gtk_icon_theme_list_contexts ().
         *
         * xapp_icon_chooser_dialog_run (), xapp_icon_chooser_dialog_run_with_icon(), and
         * xapp_icon_chooser_dialog_run_with_category () may all be called multiple times. This is useful for
         * applications which use this dialog multiple times, as it may improve performance for subsequent
         * calls.
         * @param category
         * @returns GTK_RESPONSE_OK if the user selected an icon, or GTK_RESPONSE_CANCEL otherwise
         */
        run_with_category(category: string): number;
        /**
         * Like xapp_icon_chooser_dialog_run but selects the icon specified by `icon`. This can be either an
         * icon name or a path. Passing an icon string or path that doesn't exist is accepted, but it may show
         * multiple results, or none at all. This behavior is useful if, for example, you wish to have the
         * user select an image file from a particular directory.
         *
         * If the property allow_paths is FALSE, setting a path will yield no results when the dialog is opened.
         *
         * xapp_icon_chooser_dialog_run (), xapp_icon_chooser_dialog_run_with_icon(), and
         * xapp_icon_chooser_dialog_run_with_category () may all be called multiple times. This is useful for
         * applications which use this dialog multiple times, as it may improve performance for subsequent
         * calls.
         * @param icon a string representing the icon that should be selected
         * @returns GTK_RESPONSE_OK if the user selected an icon, or GTK_RESPONSE_CANCEL otherwise
         */
        run_with_icon(icon: string): number;
        /**
         * Sets the default icon. If `icon` is not NULL, a button will be shown that
         * will reset the dialog to it's default value.
         * @param icon the default icon, or NULL to unset
         */
        set_default_icon(icon: string): void;

        // Inherited methods
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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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

    namespace KbdLayoutController {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'config-changed': () => void;
            'layout-changed': (arg0: number) => void;
            'notify::enabled': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            enabled: boolean;
        }
    }

    class KbdLayoutController extends GObject.Object {
        static $gtype: GObject.GType<KbdLayoutController>;

        // Properties

        get enabled(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: KbdLayoutController.SignalSignatures;

        // Fields

        parent_object: GObject.Object;

        // Constructors

        constructor(properties?: Partial<KbdLayoutController.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): KbdLayoutController;

        // Signals

        connect<K extends keyof KbdLayoutController.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, KbdLayoutController.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof KbdLayoutController.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, KbdLayoutController.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof KbdLayoutController.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<KbdLayoutController.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Renders a subscript number in the given work area.  This should
         * be called from within a "draw" or "paint" widget/actor function,
         * where a valid cairo_t is provided to draw with.
         * @param cr a #cairo_t
         * @param x the x position of the drawing area
         * @param y the y position of the drawing area
         * @param width the width of the drawing area
         * @param height the height of the drawing area
         * @param subscript the number to render
         */
        static render_cairo_subscript(
            cr: cairo.Context,
            x: number,
            y: number,
            width: number,
            height: number,
            subscript: number,
        ): void;

        // Methods

        /**
         * Returns an array of all full layout names
         * @returns array of names
         */
        get_all_names(): string[];
        /**
         * Returns the duplicate id for the current layout
         * @returns the id
         */
        get_current_flag_id(): number;
        /**
         * Selects the previous group in the group list.
         */
        get_current_group(): number;
        /**
         * Returns the icon file name (no path or extension) to use for the current layout
         * @returns a new string with the icon name.
         */
        get_current_icon_name(): string;
        /**
         * Returns the full name of the current keyboard layout.
         * @returns the newly created string or NULL if something went wrong.
         */
        get_current_name(): string;
        /**
         * Returns the short group label (and subscript, if any) of the current layout
         * @returns a new string or NULL.
         */
        get_current_short_group_label(): string;
        /**
         * Returns the variant label (and subscript, if any) of the current layout
         * @returns a new string or NULL.
         */
        get_current_variant_label(): string;
        /**
         * Returns whether or not the layout controller is enabled
         */
        get_enabled(): boolean;
        get_flag_id_for_group(group: number): number;
        /**
         * Returns the icon file name (no path or extension) to use for the specified layout.
         * @param group a group number
         * @returns a new string with the icon name.
         */
        get_icon_name_for_group(group: number): string;
        /**
         * Returns the short group label and subscript of the specified layout.
         * @param group a group number
         * @returns a new string or NULL.
         */
        get_short_group_label_for_group(group: number): string;
        /**
         * Returns the variant label and subscript of the specified layout.
         * @param group a group number
         * @returns a new string or NULL.
         */
        get_variant_label_for_group(group: number): string;
        /**
         * Selects the next group in the group list.
         */
        next_group(): void;
        /**
         * Selects the previous group in the group list.
         */
        previous_group(): void;
        /**
         * Selects the given group number as active.
         * @param group the group number to make active
         */
        set_current_group(group: number): void;
    }

    namespace MonitorBlanker {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class MonitorBlanker extends GObject.Object {
        static $gtype: GObject.GType<MonitorBlanker>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MonitorBlanker.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MonitorBlanker.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MonitorBlanker;

        // Signals

        connect<K extends keyof MonitorBlanker.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MonitorBlanker.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MonitorBlanker.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MonitorBlanker.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MonitorBlanker.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MonitorBlanker.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Returns whether monitors are currently blanked.
         * See xapp_monitor_blanker_blank_other_monitors().
         * @returns %TRUE if monitors are blanked.
         */
        are_monitors_blanked(): boolean;
        /**
         * Blanks monitors besides the one where the `window` is.
         * @param window a #GtkWindow
         */
        blank_other_monitors(window: Gtk.Window): void;
        /**
         * Unblanks monitors that were blanked by
         * xapp_monitor_blanker_blank_other_monitors();
         */
        unblank_monitors(): void;
    }

    namespace ObjectManagerClient {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusObjectManagerClient.SignalSignatures {
            'notify::bus-type': (pspec: GObject.ParamSpec) => void;
            'notify::connection': (pspec: GObject.ParamSpec) => void;
            'notify::flags': (pspec: GObject.ParamSpec) => void;
            'notify::get-proxy-type-destroy-notify': (pspec: GObject.ParamSpec) => void;
            'notify::get-proxy-type-func': (pspec: GObject.ParamSpec) => void;
            'notify::get-proxy-type-user-data': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::name-owner': (pspec: GObject.ParamSpec) => void;
            'notify::object-path': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gio.DBusObjectManagerClient.ConstructorProps,
                Gio.AsyncInitable.ConstructorProps,
                Gio.DBusObjectManager.ConstructorProps,
                Gio.Initable.ConstructorProps {}
    }

    /**
     * The #XAppObjectManagerClient structure contains only private data and should only be accessed using the provided API.
     */
    class ObjectManagerClient
        extends Gio.DBusObjectManagerClient
        implements Gio.AsyncInitable<ObjectManagerClient>, Gio.DBusObjectManager, Gio.Initable
    {
        static $gtype: GObject.GType<ObjectManagerClient>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ObjectManagerClient.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ObjectManagerClient.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_finish(res: Gio.AsyncResult): ObjectManagerClient;
        // Conflicted with Gio.AsyncInitable.new_finish

        static new_finish(...args: never[]): any;

        static new_for_bus_finish(res: Gio.AsyncResult): ObjectManagerClient;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusObjectManagerClientFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): ObjectManagerClient;
        // Conflicted with Gio.DBusObjectManagerClient.new_for_bus_sync

        static new_for_bus_sync(...args: never[]): any;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusObjectManagerClientFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): ObjectManagerClient;
        // Conflicted with Gio.DBusObjectManagerClient.new_sync

        static new_sync(...args: never[]): any;

        // Signals

        connect<K extends keyof ObjectManagerClient.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ObjectManagerClient.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ObjectManagerClient.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ObjectManagerClient.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ObjectManagerClient.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ObjectManagerClient.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * A #GDBusProxyTypeFunc that maps `interface_name` to the generated #GDBusObjectProxy derived and #GDBusProxy derived types.
         * @param manager A #GDBusObjectManagerClient.
         * @param object_path The object path of the remote object (unused).
         * @param interface_name Interface name of the remote object or %NULL to get the object proxy #GType.
         * @param user_data User data (unused).
         */
        static get_proxy_type(
            manager: Gio.DBusObjectManagerClient,
            object_path: string,
            interface_name?: string | null,
            user_data?: any | null,
        ): GObject.GType;
        /**
         * Asynchronously creates #GDBusObjectManagerClient using xapp_object_manager_client_get_proxy_type() as the #GDBusProxyTypeFunc. See g_dbus_object_manager_client_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call xapp_object_manager_client_new_finish() to get the result of the operation.
         *
         * See xapp_object_manager_client_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusObjectManagerClientFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static ['new'](
            connection: Gio.DBusConnection,
            flags: Gio.DBusObjectManagerClientFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<ObjectManagerClient> | null,
        ): void;
        // Conflicted with Gio.DBusObjectManagerClient.new
        static ['new'](...args: never[]): any;
        /**
         * Like xapp_object_manager_client_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call xapp_object_manager_client_new_for_bus_finish() to get the result of the operation.
         *
         * See xapp_object_manager_client_new_for_bus_sync() for the synchronous, blocking version of this constructor.
         * @param bus_type A #GBusType.
         * @param flags Flags from the #GDBusObjectManagerClientFlags enumeration.
         * @param name A bus name (well-known or unique).
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusObjectManagerClientFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<ObjectManagerClient> | null,
        ): void;
        // Conflicted with Gio.DBusObjectManagerClient.new_for_bus
        static new_for_bus(...args: never[]): any;

        // Inherited methods
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        init_async(io_priority: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        init_async(
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See g_async_initable_init_async().
         * @param res a #GAsyncResult.
         * @returns %TRUE if successful. If an error has occurred, this function will return %FALSE and set @error appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or %NULL on error.
         * @param res the #GAsyncResult from the callback
         * @returns a newly created #GObject,      or %NULL on error. Free with g_object_unref().
         */
        new_finish(res: Gio.AsyncResult): ObjectManagerClient;
        // Conflicted with Gio.DBusObjectManagerClient.new_finish
        new_finish(...args: never[]): any;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        vfunc_init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See g_async_initable_init_async().
         * @param res a #GAsyncResult.
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Gets the interface proxy for `interface_name` at `object_path,` if
         * any.
         * @param object_path Object path to look up.
         * @param interface_name D-Bus interface name to look up.
         * @returns A #GDBusInterface instance or %NULL. Free   with g_object_unref().
         */
        get_interface(object_path: string, interface_name: string): Gio.DBusInterface | null;
        /**
         * Gets the #GDBusObject at `object_path,` if any.
         * @param object_path Object path to look up.
         * @returns A #GDBusObject or %NULL. Free with   g_object_unref().
         */
        get_object(object_path: string): Gio.DBusObject | null;
        /**
         * Gets the object path that `manager` is for.
         * @returns A string owned by @manager. Do not free.
         */
        get_object_path(): string;
        /**
         * Gets all #GDBusObject objects known to `manager`.
         * @returns A list of   #GDBusObject objects. The returned list should be freed with   g_list_free() after each element has been freed with   g_object_unref().
         */
        get_objects(): Gio.DBusObject[];
        /**
         * Gets the interface proxy for `interface_name` at `object_path,` if
         * any.
         * @param object_path Object path to look up.
         * @param interface_name D-Bus interface name to look up.
         */
        vfunc_get_interface(object_path: string, interface_name: string): Gio.DBusInterface | null;
        /**
         * Gets the #GDBusObject at `object_path,` if any.
         * @param object_path Object path to look up.
         */
        vfunc_get_object(object_path: string): Gio.DBusObject | null;
        /**
         * Gets the object path that `manager` is for.
         */
        vfunc_get_object_path(): string;
        /**
         * Gets all #GDBusObject objects known to `manager`.
         */
        vfunc_get_objects(): Gio.DBusObject[];
        /**
         * Signal handler for the #GDBusObjectManager::interface-added signal.
         * @param object
         * @param interface_
         */
        vfunc_interface_added(object: Gio.DBusObject, interface_: Gio.DBusInterface): void;
        /**
         * Signal handler for the #GDBusObjectManager::interface-removed signal.
         * @param object
         * @param interface_
         */
        vfunc_interface_removed(object: Gio.DBusObject, interface_: Gio.DBusInterface): void;
        /**
         * Signal handler for the #GDBusObjectManager::object-added signal.
         * @param object
         */
        vfunc_object_added(object: Gio.DBusObject): void;
        /**
         * Signal handler for the #GDBusObjectManager::object-removed signal.
         * @param object
         */
        vfunc_object_removed(object: Gio.DBusObject): void;
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
         * behaviour. See the [description][iface`Gio`.Initable#description] for more details.
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
         * behaviour. See the [description][iface`Gio`.Initable#description] for more details.
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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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

    namespace ObjectProxy {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusObjectProxy.SignalSignatures {
            'notify::g-connection': (pspec: GObject.ParamSpec) => void;
            'notify::g-object-path': (pspec: GObject.ParamSpec) => void;
            'notify::status-icon-interface': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gio.DBusObjectProxy.ConstructorProps,
                Gio.DBusObject.ConstructorProps,
                Object.ConstructorProps {}
    }

    /**
     * The #XAppObjectProxy structure contains only private data and should only be accessed using the provided API.
     */
    class ObjectProxy extends Gio.DBusObjectProxy implements Gio.DBusObject, Object {
        static $gtype: GObject.GType<ObjectProxy>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ObjectProxy.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ObjectProxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](connection: Gio.DBusConnection, object_path: string): ObjectProxy;

        // Signals

        connect<K extends keyof ObjectProxy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ObjectProxy.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ObjectProxy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ObjectProxy.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ObjectProxy.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ObjectProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited properties
        /**
         * The #XAppStatusIconInterface instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-x-StatusIcon.top_of_page">org.x.StatusIcon</link>, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        get status_icon_interface(): StatusIconInterface;
        set status_icon_interface(val: StatusIconInterface);
        /**
         * The #XAppStatusIconInterface instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-x-StatusIcon.top_of_page">org.x.StatusIcon</link>, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        get statusIconInterface(): StatusIconInterface;
        set statusIconInterface(val: StatusIconInterface);

        // Inherited methods
        /**
         * Gets the D-Bus interface with name `interface_name` associated with
         * `object,` if any.
         * @param interface_name A D-Bus interface name.
         * @returns %NULL if not found, otherwise a   #GDBusInterface that must be freed with g_object_unref().
         */
        get_interface(interface_name: string): Gio.DBusInterface | null;
        /**
         * Gets the D-Bus interfaces associated with `object`.
         * @returns A list of #GDBusInterface instances.   The returned list must be freed by g_list_free() after each element has been freed   with g_object_unref().
         */
        get_interfaces(): Gio.DBusInterface[];
        /**
         * Gets the object path for `object`.
         * @returns A string owned by @object. Do not free.
         */
        get_object_path(): string;
        /**
         * Gets the D-Bus interface with name `interface_name` associated with
         * `object,` if any.
         * @param interface_name A D-Bus interface name.
         */
        vfunc_get_interface(interface_name: string): Gio.DBusInterface | null;
        /**
         * Gets the D-Bus interfaces associated with `object`.
         */
        vfunc_get_interfaces(): Gio.DBusInterface[];
        /**
         * Gets the object path for `object`.
         */
        vfunc_get_object_path(): string;
        /**
         * Signal handler for the #GDBusObject::interface-added signal.
         * @param interface_
         */
        vfunc_interface_added(interface_: Gio.DBusInterface): void;
        /**
         * Signal handler for the #GDBusObject::interface-removed signal.
         * @param interface_
         */
        vfunc_interface_removed(interface_: Gio.DBusInterface): void;
        /**
         * Gets the #XAppStatusIconInterface instance for the D-Bus interface <link linkend="gdbus-interface-org-x-StatusIcon.top_of_page">org.x.StatusIcon</link> on `object,` if any.
         * @returns A #XAppStatusIconInterface that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_status_icon_interface(): StatusIconInterface | null;
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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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

    namespace ObjectSkeleton {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusObjectSkeleton.SignalSignatures {
            'notify::g-object-path': (pspec: GObject.ParamSpec) => void;
            'notify::status-icon-interface': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gio.DBusObjectSkeleton.ConstructorProps,
                Gio.DBusObject.ConstructorProps,
                Object.ConstructorProps {}
    }

    /**
     * The #XAppObjectSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class ObjectSkeleton extends Gio.DBusObjectSkeleton implements Gio.DBusObject, Object {
        static $gtype: GObject.GType<ObjectSkeleton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ObjectSkeleton.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ObjectSkeleton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](object_path: string): ObjectSkeleton;

        // Signals

        connect<K extends keyof ObjectSkeleton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ObjectSkeleton.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ObjectSkeleton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ObjectSkeleton.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ObjectSkeleton.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ObjectSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Sets the #XAppStatusIconInterface instance for the D-Bus interface <link linkend="gdbus-interface-org-x-StatusIcon.top_of_page">org.x.StatusIcon</link> on `object`.
         * @param interface_ A #XAppStatusIconInterface or %NULL to clear the interface.
         */
        set_status_icon_interface(interface_?: StatusIconInterface | null): void;

        // Inherited properties
        /**
         * The #XAppStatusIconInterface instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-x-StatusIcon.top_of_page">org.x.StatusIcon</link>, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        get status_icon_interface(): StatusIconInterface;
        set status_icon_interface(val: StatusIconInterface);
        /**
         * The #XAppStatusIconInterface instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-x-StatusIcon.top_of_page">org.x.StatusIcon</link>, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        get statusIconInterface(): StatusIconInterface;
        set statusIconInterface(val: StatusIconInterface);

        // Inherited methods
        /**
         * Gets the D-Bus interface with name `interface_name` associated with
         * `object,` if any.
         * @param interface_name A D-Bus interface name.
         * @returns %NULL if not found, otherwise a   #GDBusInterface that must be freed with g_object_unref().
         */
        get_interface(interface_name: string): Gio.DBusInterface | null;
        /**
         * Gets the D-Bus interfaces associated with `object`.
         * @returns A list of #GDBusInterface instances.   The returned list must be freed by g_list_free() after each element has been freed   with g_object_unref().
         */
        get_interfaces(): Gio.DBusInterface[];
        /**
         * Gets the object path for `object`.
         * @returns A string owned by @object. Do not free.
         */
        get_object_path(): string;
        /**
         * Gets the D-Bus interface with name `interface_name` associated with
         * `object,` if any.
         * @param interface_name A D-Bus interface name.
         */
        vfunc_get_interface(interface_name: string): Gio.DBusInterface | null;
        /**
         * Gets the D-Bus interfaces associated with `object`.
         */
        vfunc_get_interfaces(): Gio.DBusInterface[];
        /**
         * Gets the object path for `object`.
         */
        vfunc_get_object_path(): string;
        /**
         * Signal handler for the #GDBusObject::interface-added signal.
         * @param interface_
         */
        vfunc_interface_added(interface_: Gio.DBusInterface): void;
        /**
         * Signal handler for the #GDBusObject::interface-removed signal.
         * @param interface_
         */
        vfunc_interface_removed(interface_: Gio.DBusInterface): void;
        /**
         * Gets the #XAppStatusIconInterface instance for the D-Bus interface <link linkend="gdbus-interface-org-x-StatusIcon.top_of_page">org.x.StatusIcon</link> on `object,` if any.
         * @returns A #XAppStatusIconInterface that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_status_icon_interface(): StatusIconInterface | null;
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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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

    namespace PreferencesWindow {
        // Signal signatures
        interface SignalSignatures extends Gtk.Window.SignalSignatures {
            close: () => void;
            'notify::accept-focus': (pspec: GObject.ParamSpec) => void;
            'notify::application': (pspec: GObject.ParamSpec) => void;
            'notify::attached-to': (pspec: GObject.ParamSpec) => void;
            'notify::decorated': (pspec: GObject.ParamSpec) => void;
            'notify::default-height': (pspec: GObject.ParamSpec) => void;
            'notify::default-width': (pspec: GObject.ParamSpec) => void;
            'notify::deletable': (pspec: GObject.ParamSpec) => void;
            'notify::destroy-with-parent': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-map': (pspec: GObject.ParamSpec) => void;
            'notify::focus-visible': (pspec: GObject.ParamSpec) => void;
            'notify::gravity': (pspec: GObject.ParamSpec) => void;
            'notify::has-resize-grip': (pspec: GObject.ParamSpec) => void;
            'notify::has-toplevel-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hide-titlebar-when-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::is-active': (pspec: GObject.ParamSpec) => void;
            'notify::is-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::mnemonics-visible': (pspec: GObject.ParamSpec) => void;
            'notify::modal': (pspec: GObject.ParamSpec) => void;
            'notify::resizable': (pspec: GObject.ParamSpec) => void;
            'notify::resize-grip-visible': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::screen': (pspec: GObject.ParamSpec) => void;
            'notify::skip-pager-hint': (pspec: GObject.ParamSpec) => void;
            'notify::skip-taskbar-hint': (pspec: GObject.ParamSpec) => void;
            'notify::startup-id': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::transient-for': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::type-hint': (pspec: GObject.ParamSpec) => void;
            'notify::urgency-hint': (pspec: GObject.ParamSpec) => void;
            'notify::window-position': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Window.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {}
    }

    class PreferencesWindow extends Gtk.Window implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<PreferencesWindow>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PreferencesWindow.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PreferencesWindow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PreferencesWindow;

        // Signals

        connect<K extends keyof PreferencesWindow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PreferencesWindow.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PreferencesWindow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PreferencesWindow.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PreferencesWindow.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PreferencesWindow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_close(): void;

        // Methods

        /**
         * Adds a button to the bottom action bar of the window. Where
         * the button is place will be determined by the #GtkPackType. The
         * action bar will show automatically once at least one button is
         * added.
         * @param button a #GtkWidget to add
         * @param pack_type a #GtkPackType to use
         */
        add_button(button: Gtk.Widget, pack_type: Gtk.PackType | null): void;
        /**
         * Adds a page to the window. The page is identified by name. The
         * title will be used in the sidebar so should be short. The sidebar
         * will show automatically once at least two pages are added.
         * @param widget a #GtkWidget to add
         * @param name the name for the page
         * @param title a human-readable title for the page
         */
        add_page(widget: Gtk.Widget, name: string, title: string): void;

        // Inherited methods
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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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

    namespace StackSidebar {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            'notify::stack': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Bin.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {
            stack: Gtk.Stack;
        }
    }

    class StackSidebar extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<StackSidebar>;

        // Properties

        get stack(): Gtk.Stack;
        set stack(val: Gtk.Stack);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StackSidebar.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<StackSidebar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StackSidebar;

        // Signals

        connect<K extends keyof StackSidebar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StackSidebar.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StackSidebar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StackSidebar.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StackSidebar.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StackSidebar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Retrieves the stack.
         * See xapp_stack_sidebar_set_stack().
         * @returns the associated #GtkStack or     %NULL if none has been set explicitly
         */
        get_stack(): Gtk.Stack | null;
        /**
         * Set the #GtkStack associated with this #XAppStackSidebar.
         *
         * The sidebar widget will automatically update according to the order
         * (packing) and items within the given #GtkStack.
         * @param stack a #GtkStack
         */
        set_stack(stack: Gtk.Stack): void;

        // Inherited methods
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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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

    namespace StatusIcon {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            activate: (arg0: number, arg1: number) => void;
            'button-press-event': (arg0: number, arg1: number, arg2: number, arg3: number, arg4: number) => void;
            'button-release-event': (arg0: number, arg1: number, arg2: number, arg3: number, arg4: number) => void;
            'scroll-event': (arg0: number, arg1: ScrollDirection, arg2: number) => void;
            'state-changed': (arg0: StatusIconState) => void;
            'notify::icon-size': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::primary-menu': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-menu': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            icon_size: number;
            iconSize: number;
            name: string;
            primary_menu: Gtk.Widget;
            primaryMenu: Gtk.Widget;
            secondary_menu: Gtk.Widget;
            secondaryMenu: Gtk.Widget;
        }
    }

    class StatusIcon extends GObject.Object {
        static $gtype: GObject.GType<StatusIcon>;

        // Properties

        /**
         * The icon size that is preferred by icon monitor/host - this is usually a product
         * of some calculation based on the panel size.  It can be used by the client to size
         * an icon to be saved as a file and its path sent to the host.
         *
         * If this value is 0 it has not been set, and its value can be unreliable if the host
         * has multiple #XAppStatusIconMonitors active.
         */
        get icon_size(): number;
        set icon_size(val: number);
        /**
         * The icon size that is preferred by icon monitor/host - this is usually a product
         * of some calculation based on the panel size.  It can be used by the client to size
         * an icon to be saved as a file and its path sent to the host.
         *
         * If this value is 0 it has not been set, and its value can be unreliable if the host
         * has multiple #XAppStatusIconMonitors active.
         */
        get iconSize(): number;
        set iconSize(val: number);
        /**
         * The name of the icon for sorting purposes. If this is in the form of 'org.x.StatusIcon.foo`
         * and set immediately upon creation of the icon, it will also attempt to own this dbus name;
         * this can be useful in sandboxed environments where a well-defined name is required. If
         * additional icons are created, only the name given to the initial one will be used for dbus,
         * though different names can still affect the sort order. This is set to the value of
         * g_get_prgname() if no other name is provided.
         */
        get name(): string;
        set name(val: string);
        /**
         * A #GtkMenu to use when requested by the remote monitor via a left (or primary) click.
         *
         * When this property is not %NULL, the menu will be automatically positioned and
         * displayed during a primary button release.
         *
         * When this property IS %NULL, the #XAppStatusIcon::activate will be sent for primary
         * button presses.
         *
         * In both cases, the #XAppStatusIcon::button-press-event and #XAppStatusIcon::button-release-events
         * will be fired like normal.
         *
         * Setting this will remove any floating reference to the menu and assume ownership.
         * As a result, it is not necessary to maintain a reference to it in the parent
         * application (or unref it when finished with it - if you wish to replace the menu,
         * simply call this method again with a new menu.
         *
         * The same #GtkMenu widget can be set as both the primary and secondary.
         */
        get primary_menu(): Gtk.Widget;
        set primary_menu(val: Gtk.Widget);
        /**
         * A #GtkMenu to use when requested by the remote monitor via a left (or primary) click.
         *
         * When this property is not %NULL, the menu will be automatically positioned and
         * displayed during a primary button release.
         *
         * When this property IS %NULL, the #XAppStatusIcon::activate will be sent for primary
         * button presses.
         *
         * In both cases, the #XAppStatusIcon::button-press-event and #XAppStatusIcon::button-release-events
         * will be fired like normal.
         *
         * Setting this will remove any floating reference to the menu and assume ownership.
         * As a result, it is not necessary to maintain a reference to it in the parent
         * application (or unref it when finished with it - if you wish to replace the menu,
         * simply call this method again with a new menu.
         *
         * The same #GtkMenu widget can be set as both the primary and secondary.
         */
        get primaryMenu(): Gtk.Widget;
        set primaryMenu(val: Gtk.Widget);
        /**
         * A #GtkMenu to use when requested by the remote monitor via a right (or secondary) click.
         *
         * When this property is not %NULL, the menu will be automatically positioned and
         * displayed during a secondary button release.
         *
         * When this property IS %NULL, the #XAppStatusIcon::activate will be sent for secondary
         * button presses.
         *
         * In both cases, the #XAppStatusIcon::button-press-event and #XAppStatusIcon::button-release-events
         * will be fired like normal.
         *
         * Setting this will remove any floating reference to the menu and assume ownership.
         * As a result, it is not necessary to maintain a reference to it in the parent
         * application (or unref it when finished with it - if you wish to replace the menu,
         * simply call this method again with a new menu.
         *
         * The same #GtkMenu widget can be set as both the primary and secondary.
         */
        get secondary_menu(): Gtk.Widget;
        set secondary_menu(val: Gtk.Widget);
        /**
         * A #GtkMenu to use when requested by the remote monitor via a right (or secondary) click.
         *
         * When this property is not %NULL, the menu will be automatically positioned and
         * displayed during a secondary button release.
         *
         * When this property IS %NULL, the #XAppStatusIcon::activate will be sent for secondary
         * button presses.
         *
         * In both cases, the #XAppStatusIcon::button-press-event and #XAppStatusIcon::button-release-events
         * will be fired like normal.
         *
         * Setting this will remove any floating reference to the menu and assume ownership.
         * As a result, it is not necessary to maintain a reference to it in the parent
         * application (or unref it when finished with it - if you wish to replace the menu,
         * simply call this method again with a new menu.
         *
         * The same #GtkMenu widget can be set as both the primary and secondary.
         */
        get secondaryMenu(): Gtk.Widget;
        set secondaryMenu(val: Gtk.Widget);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StatusIcon.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<StatusIcon.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StatusIcon;

        static new_with_name(name: string): StatusIcon;

        // Signals

        connect<K extends keyof StatusIcon.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StatusIcon.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StatusIcon.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StatusIcon.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StatusIcon.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StatusIcon.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Looks for the existence of any active #XAppStatusIconMonitors on the bus.
         */
        static any_monitors(): boolean;

        // Methods

        get_icon_size(): number;
        /**
         * Returns a pointer to a #GtkMenu that was set previously for the
         * primary mouse button.  If no menu was set, this returns %NULL.
         * @returns the #GtkMenu or %NULL if none was set.
         */
        get_primary_menu(): Gtk.Widget;
        /**
         * Returns a pointer to a #GtkMenu that was set previously for the
         * secondary mouse button.  If no menu was set, this returns %NULL.
         * @returns the #GtkMenu or %NULL if none was set.
         */
        get_secondary_menu(): Gtk.Widget;
        /**
         * Gets the current #XAppStatusIconState of icon. The state is determined by whether
         * the icon is being displayed by an #XAppStatusMonitor client, a fallback tray icon,
         * or not being displayed at all.
         *
         * See #XAppStatusIconState for more details.
         * @returns the icon's state.
         */
        get_state(): StatusIconState;
        /**
         * Returns whether or not the icon should currently be visible.
         * @returns the current visibility state.
         */
        get_visible(): boolean;
        /**
         * Pop up `menu` using the positioning arguments. These arguments should be
         * those provided by a #XAppStatusIcon::button-release-event.
         * @param menu A #GtkMenu to display when the primary mouse button is released.
         * @param x The x anchor position for the menu.
         * @param y The y anchor position for the menu.
         * @param button The button used to initiate this action (or 0)
         * @param _time The event time (or 0)
         * @param panel_position The #GtkPositionType for the position of the icon.
         */
        popup_menu(
            menu: Gtk.Menu | null,
            x: number,
            y: number,
            button: number,
            _time: number,
            panel_position: number,
        ): void;
        /**
         * Sets the icon name or local path to use.
         * @param icon_name An icon name or absolute path to an icon.
         */
        set_icon_name(icon_name: string): void;
        /**
         * Sets a label, shown beside the icon
         * @param label some text
         */
        set_label(label: string): void;
        /**
         * Sets metadata to pass to the icon proxy for an applet's use. Right now this is only so
         * xapp-sn-watcher can tell the applets when the icon is originating from appindicator so panel
         * button 'highlighting' can behave correctly.
         * @param metadata A json-formatted string of key:values.
         */
        set_metadata(metadata?: string | null): void;
        /**
         * Sets the status icon name. This is not shown to users.
         * @param name a name (this defaults to the name of the application, if not set)
         */
        set_name(name: string): void;
        /**
         * See the #XAppStatusIcon:primary-menu property for details
         * @param menu A #GtkMenu to display when the primary mouse button is released.
         */
        set_primary_menu(menu?: Gtk.Menu | null): void;
        /**
         * See the #XAppStatusIcon:secondary-menu property for details
         * @param menu A #GtkMenu to display when the primary mouse button is released.
         */
        set_secondary_menu(menu?: Gtk.Menu | null): void;
        /**
         * Sets the tooltip text
         * @param tooltip_text the text to show in the tooltip
         */
        set_tooltip_text(tooltip_text: string): void;
        /**
         * Sets the visibility of the status icon
         * @param visible whether or not the status icon should be visible
         */
        set_visible(visible: boolean): void;
    }

    namespace StatusIconInterfaceProxy {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            'notify::g-bus-type': (pspec: GObject.ParamSpec) => void;
            'notify::g-connection': (pspec: GObject.ParamSpec) => void;
            'notify::g-default-timeout': (pspec: GObject.ParamSpec) => void;
            'notify::g-flags': (pspec: GObject.ParamSpec) => void;
            'notify::g-interface-info': (pspec: GObject.ParamSpec) => void;
            'notify::g-interface-name': (pspec: GObject.ParamSpec) => void;
            'notify::g-name': (pspec: GObject.ParamSpec) => void;
            'notify::g-name-owner': (pspec: GObject.ParamSpec) => void;
            'notify::g-object-path': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::icon-size': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::metadata': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::primary-menu-is-open': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-menu-is-open': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gio.DBusProxy.ConstructorProps,
                Gio.AsyncInitable.ConstructorProps,
                Gio.DBusInterface.ConstructorProps,
                Gio.Initable.ConstructorProps,
                StatusIconInterface.ConstructorProps {}
    }

    /**
     * The #XAppStatusIconInterfaceProxy structure contains only private data and should only be accessed using the provided API.
     */
    class StatusIconInterfaceProxy
        extends Gio.DBusProxy
        implements Gio.AsyncInitable<StatusIconInterfaceProxy>, Gio.DBusInterface, Gio.Initable, StatusIconInterface
    {
        static $gtype: GObject.GType<StatusIconInterfaceProxy>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StatusIconInterfaceProxy.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<StatusIconInterfaceProxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_finish(res: Gio.AsyncResult): StatusIconInterfaceProxy;
        // Conflicted with Gio.AsyncInitable.new_finish

        static new_finish(...args: never[]): any;

        static new_for_bus_finish(res: Gio.AsyncResult): StatusIconInterfaceProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): StatusIconInterfaceProxy;
        // Conflicted with Gio.DBusProxy.new_for_bus_sync

        static new_for_bus_sync(...args: never[]): any;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): StatusIconInterfaceProxy;
        // Conflicted with Gio.DBusProxy.new_sync

        static new_sync(...args: never[]): any;

        // Signals

        connect<K extends keyof StatusIconInterfaceProxy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StatusIconInterfaceProxy.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StatusIconInterfaceProxy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StatusIconInterfaceProxy.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StatusIconInterfaceProxy.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StatusIconInterfaceProxy.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-x-StatusIcon.top_of_page">org.x.StatusIcon</link>. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call xapp_status_icon_interface_proxy_new_finish() to get the result of the operation.
         *
         * See xapp_status_icon_interface_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static ['new'](
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<StatusIconInterfaceProxy> | null,
        ): void;
        // Conflicted with Gio.DBusProxy.new
        static ['new'](...args: never[]): any;
        /**
         * Like xapp_status_icon_interface_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call xapp_status_icon_interface_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See xapp_status_icon_interface_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
         * @param bus_type A #GBusType.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique).
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<StatusIconInterfaceProxy> | null,
        ): void;
        // Conflicted with Gio.DBusProxy.new_for_bus
        static new_for_bus(...args: never[]): any;

        // Inherited properties
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.IconName">"IconName"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get icon_name(): string;
        set icon_name(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.IconName">"IconName"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get iconName(): string;
        set iconName(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.IconSize">"IconSize"</link>.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        get icon_size(): number;
        set icon_size(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.IconSize">"IconSize"</link>.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        get iconSize(): number;
        set iconSize(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.Label">"Label"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get label(): string;
        set label(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.Metadata">"Metadata"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get metadata(): string;
        set metadata(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.Name">"Name"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get name(): string;
        set name(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.PrimaryMenuIsOpen">"PrimaryMenuIsOpen"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get primary_menu_is_open(): boolean;
        set primary_menu_is_open(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.PrimaryMenuIsOpen">"PrimaryMenuIsOpen"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get primaryMenuIsOpen(): boolean;
        set primaryMenuIsOpen(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.SecondaryMenuIsOpen">"SecondaryMenuIsOpen"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get secondary_menu_is_open(): boolean;
        set secondary_menu_is_open(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.SecondaryMenuIsOpen">"SecondaryMenuIsOpen"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get secondaryMenuIsOpen(): boolean;
        set secondaryMenuIsOpen(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.TooltipText">"TooltipText"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get tooltip_text(): string;
        set tooltip_text(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.TooltipText">"TooltipText"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get tooltipText(): string;
        set tooltipText(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.Visible">"Visible"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get visible(): boolean;
        set visible(val: boolean);

        // Inherited methods
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        init_async(io_priority: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        init_async(
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See g_async_initable_init_async().
         * @param res a #GAsyncResult.
         * @returns %TRUE if successful. If an error has occurred, this function will return %FALSE and set @error appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or %NULL on error.
         * @param res the #GAsyncResult from the callback
         * @returns a newly created #GObject,      or %NULL on error. Free with g_object_unref().
         */
        new_finish(res: Gio.AsyncResult): StatusIconInterfaceProxy;
        // Conflicted with Gio.DBusProxy.new_finish
        new_finish(...args: never[]): any;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        vfunc_init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See g_async_initable_init_async().
         * @param res a #GAsyncResult.
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         * @returns A #GDBusObject or %NULL. The returned reference should be freed with g_object_unref().
         */
        get_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A #GDBusInterfaceInfo. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A #GDBusObject or %NULL.
         */
        set_object(object?: Gio.DBusObject | null): void;
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         */
        vfunc_dup_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A #GDBusObject or %NULL.
         */
        vfunc_set_object(object?: Gio.DBusObject | null): void;
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
         * behaviour. See the [description][iface`Gio`.Initable#description] for more details.
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
         * behaviour. See the [description][iface`Gio`.Initable#description] for more details.
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
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonPress">ButtonPress()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call xapp_status_icon_interface_call_button_press_finish() to get the result of the operation.
         *
         * See xapp_status_icon_interface_call_button_press_sync() for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         */
        call_button_press(
            arg_x: number,
            arg_y: number,
            arg_button: number,
            arg_time: number,
            arg_panel_position: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonPress">ButtonPress()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call xapp_status_icon_interface_call_button_press_finish() to get the result of the operation.
         *
         * See xapp_status_icon_interface_call_button_press_sync() for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_button_press(
            arg_x: number,
            arg_y: number,
            arg_button: number,
            arg_time: number,
            arg_panel_position: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonPress">ButtonPress()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call xapp_status_icon_interface_call_button_press_finish() to get the result of the operation.
         *
         * See xapp_status_icon_interface_call_button_press_sync() for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_button_press(
            arg_x: number,
            arg_y: number,
            arg_button: number,
            arg_time: number,
            arg_panel_position: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with xapp_status_icon_interface_call_button_press().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to xapp_status_icon_interface_call_button_press().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_button_press_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonPress">ButtonPress()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See xapp_status_icon_interface_call_button_press() for the asynchronous version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_button_press_sync(
            arg_x: number,
            arg_y: number,
            arg_button: number,
            arg_time: number,
            arg_panel_position: number,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonRelease">ButtonRelease()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call xapp_status_icon_interface_call_button_release_finish() to get the result of the operation.
         *
         * See xapp_status_icon_interface_call_button_release_sync() for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         */
        call_button_release(
            arg_x: number,
            arg_y: number,
            arg_button: number,
            arg_time: number,
            arg_panel_position: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonRelease">ButtonRelease()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call xapp_status_icon_interface_call_button_release_finish() to get the result of the operation.
         *
         * See xapp_status_icon_interface_call_button_release_sync() for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_button_release(
            arg_x: number,
            arg_y: number,
            arg_button: number,
            arg_time: number,
            arg_panel_position: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonRelease">ButtonRelease()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call xapp_status_icon_interface_call_button_release_finish() to get the result of the operation.
         *
         * See xapp_status_icon_interface_call_button_release_sync() for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_button_release(
            arg_x: number,
            arg_y: number,
            arg_button: number,
            arg_time: number,
            arg_panel_position: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with xapp_status_icon_interface_call_button_release().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to xapp_status_icon_interface_call_button_release().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_button_release_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonRelease">ButtonRelease()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See xapp_status_icon_interface_call_button_release() for the asynchronous version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_button_release_sync(
            arg_x: number,
            arg_y: number,
            arg_button: number,
            arg_time: number,
            arg_panel_position: number,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.Scroll">Scroll()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call xapp_status_icon_interface_call_scroll_finish() to get the result of the operation.
         *
         * See xapp_status_icon_interface_call_scroll_sync() for the synchronous, blocking version of this method.
         * @param arg_delta Argument to pass with the method invocation.
         * @param arg_orientation Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         */
        call_scroll(
            arg_delta: number,
            arg_orientation: number,
            arg_time: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.Scroll">Scroll()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call xapp_status_icon_interface_call_scroll_finish() to get the result of the operation.
         *
         * See xapp_status_icon_interface_call_scroll_sync() for the synchronous, blocking version of this method.
         * @param arg_delta Argument to pass with the method invocation.
         * @param arg_orientation Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_scroll(
            arg_delta: number,
            arg_orientation: number,
            arg_time: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.Scroll">Scroll()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call xapp_status_icon_interface_call_scroll_finish() to get the result of the operation.
         *
         * See xapp_status_icon_interface_call_scroll_sync() for the synchronous, blocking version of this method.
         * @param arg_delta Argument to pass with the method invocation.
         * @param arg_orientation Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_scroll(
            arg_delta: number,
            arg_orientation: number,
            arg_time: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with xapp_status_icon_interface_call_scroll().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to xapp_status_icon_interface_call_scroll().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_scroll_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.Scroll">Scroll()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See xapp_status_icon_interface_call_scroll() for the asynchronous version of this method.
         * @param arg_delta Argument to pass with the method invocation.
         * @param arg_orientation Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_scroll_sync(
            arg_delta: number,
            arg_orientation: number,
            arg_time: number,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-x-StatusIcon.ButtonPress">ButtonPress()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_button_press(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-x-StatusIcon.ButtonRelease">ButtonRelease()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_button_release(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-x-StatusIcon.Scroll">Scroll()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_scroll(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Handler for the #XAppStatusIconInterface::handle-button-press signal.
         * @param invocation
         * @param arg_x
         * @param arg_y
         * @param arg_button
         * @param arg_time
         * @param arg_panel_position
         */
        vfunc_handle_button_press(
            invocation: Gio.DBusMethodInvocation,
            arg_x: number,
            arg_y: number,
            arg_button: number,
            arg_time: number,
            arg_panel_position: number,
        ): boolean;
        /**
         * Handler for the #XAppStatusIconInterface::handle-button-release signal.
         * @param invocation
         * @param arg_x
         * @param arg_y
         * @param arg_button
         * @param arg_time
         * @param arg_panel_position
         */
        vfunc_handle_button_release(
            invocation: Gio.DBusMethodInvocation,
            arg_x: number,
            arg_y: number,
            arg_button: number,
            arg_time: number,
            arg_panel_position: number,
        ): boolean;
        /**
         * Handler for the #XAppStatusIconInterface::handle-scroll signal.
         * @param invocation
         * @param arg_delta
         * @param arg_orientation
         * @param arg_time
         */
        vfunc_handle_scroll(
            invocation: Gio.DBusMethodInvocation,
            arg_delta: number,
            arg_orientation: number,
            arg_time: number,
        ): boolean;
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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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

    namespace StatusIconInterfaceSkeleton {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            'notify::g-flags': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::icon-size': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::metadata': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::primary-menu-is-open': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-menu-is-open': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gio.DBusInterfaceSkeleton.ConstructorProps,
                Gio.DBusInterface.ConstructorProps,
                StatusIconInterface.ConstructorProps {}
    }

    /**
     * The #XAppStatusIconInterfaceSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class StatusIconInterfaceSkeleton
        extends Gio.DBusInterfaceSkeleton
        implements Gio.DBusInterface, StatusIconInterface
    {
        static $gtype: GObject.GType<StatusIconInterfaceSkeleton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StatusIconInterfaceSkeleton.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<StatusIconInterfaceSkeleton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StatusIconInterfaceSkeleton;

        // Signals

        connect<K extends keyof StatusIconInterfaceSkeleton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StatusIconInterfaceSkeleton.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StatusIconInterfaceSkeleton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StatusIconInterfaceSkeleton.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StatusIconInterfaceSkeleton.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StatusIconInterfaceSkeleton.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited properties
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.IconName">"IconName"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get icon_name(): string;
        set icon_name(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.IconName">"IconName"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get iconName(): string;
        set iconName(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.IconSize">"IconSize"</link>.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        get icon_size(): number;
        set icon_size(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.IconSize">"IconSize"</link>.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        get iconSize(): number;
        set iconSize(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.Label">"Label"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get label(): string;
        set label(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.Metadata">"Metadata"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get metadata(): string;
        set metadata(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.Name">"Name"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get name(): string;
        set name(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.PrimaryMenuIsOpen">"PrimaryMenuIsOpen"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get primary_menu_is_open(): boolean;
        set primary_menu_is_open(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.PrimaryMenuIsOpen">"PrimaryMenuIsOpen"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get primaryMenuIsOpen(): boolean;
        set primaryMenuIsOpen(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.SecondaryMenuIsOpen">"SecondaryMenuIsOpen"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get secondary_menu_is_open(): boolean;
        set secondary_menu_is_open(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.SecondaryMenuIsOpen">"SecondaryMenuIsOpen"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get secondaryMenuIsOpen(): boolean;
        set secondaryMenuIsOpen(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.TooltipText">"TooltipText"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get tooltip_text(): string;
        set tooltip_text(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.TooltipText">"TooltipText"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get tooltipText(): string;
        set tooltipText(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.Visible">"Visible"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get visible(): boolean;
        set visible(val: boolean);

        // Inherited methods
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         * @returns A #GDBusObject or %NULL. The returned reference should be freed with g_object_unref().
         */
        get_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A #GDBusInterfaceInfo. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A #GDBusObject or %NULL.
         */
        set_object(object?: Gio.DBusObject | null): void;
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         */
        vfunc_dup_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A #GDBusObject or %NULL.
         */
        vfunc_set_object(object?: Gio.DBusObject | null): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonPress">ButtonPress()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call xapp_status_icon_interface_call_button_press_finish() to get the result of the operation.
         *
         * See xapp_status_icon_interface_call_button_press_sync() for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         */
        call_button_press(
            arg_x: number,
            arg_y: number,
            arg_button: number,
            arg_time: number,
            arg_panel_position: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonPress">ButtonPress()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call xapp_status_icon_interface_call_button_press_finish() to get the result of the operation.
         *
         * See xapp_status_icon_interface_call_button_press_sync() for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_button_press(
            arg_x: number,
            arg_y: number,
            arg_button: number,
            arg_time: number,
            arg_panel_position: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonPress">ButtonPress()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call xapp_status_icon_interface_call_button_press_finish() to get the result of the operation.
         *
         * See xapp_status_icon_interface_call_button_press_sync() for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_button_press(
            arg_x: number,
            arg_y: number,
            arg_button: number,
            arg_time: number,
            arg_panel_position: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with xapp_status_icon_interface_call_button_press().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to xapp_status_icon_interface_call_button_press().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_button_press_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonPress">ButtonPress()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See xapp_status_icon_interface_call_button_press() for the asynchronous version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_button_press_sync(
            arg_x: number,
            arg_y: number,
            arg_button: number,
            arg_time: number,
            arg_panel_position: number,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonRelease">ButtonRelease()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call xapp_status_icon_interface_call_button_release_finish() to get the result of the operation.
         *
         * See xapp_status_icon_interface_call_button_release_sync() for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         */
        call_button_release(
            arg_x: number,
            arg_y: number,
            arg_button: number,
            arg_time: number,
            arg_panel_position: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonRelease">ButtonRelease()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call xapp_status_icon_interface_call_button_release_finish() to get the result of the operation.
         *
         * See xapp_status_icon_interface_call_button_release_sync() for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_button_release(
            arg_x: number,
            arg_y: number,
            arg_button: number,
            arg_time: number,
            arg_panel_position: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonRelease">ButtonRelease()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call xapp_status_icon_interface_call_button_release_finish() to get the result of the operation.
         *
         * See xapp_status_icon_interface_call_button_release_sync() for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_button_release(
            arg_x: number,
            arg_y: number,
            arg_button: number,
            arg_time: number,
            arg_panel_position: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with xapp_status_icon_interface_call_button_release().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to xapp_status_icon_interface_call_button_release().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_button_release_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonRelease">ButtonRelease()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See xapp_status_icon_interface_call_button_release() for the asynchronous version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_button_release_sync(
            arg_x: number,
            arg_y: number,
            arg_button: number,
            arg_time: number,
            arg_panel_position: number,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.Scroll">Scroll()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call xapp_status_icon_interface_call_scroll_finish() to get the result of the operation.
         *
         * See xapp_status_icon_interface_call_scroll_sync() for the synchronous, blocking version of this method.
         * @param arg_delta Argument to pass with the method invocation.
         * @param arg_orientation Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         */
        call_scroll(
            arg_delta: number,
            arg_orientation: number,
            arg_time: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.Scroll">Scroll()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call xapp_status_icon_interface_call_scroll_finish() to get the result of the operation.
         *
         * See xapp_status_icon_interface_call_scroll_sync() for the synchronous, blocking version of this method.
         * @param arg_delta Argument to pass with the method invocation.
         * @param arg_orientation Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_scroll(
            arg_delta: number,
            arg_orientation: number,
            arg_time: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.Scroll">Scroll()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call xapp_status_icon_interface_call_scroll_finish() to get the result of the operation.
         *
         * See xapp_status_icon_interface_call_scroll_sync() for the synchronous, blocking version of this method.
         * @param arg_delta Argument to pass with the method invocation.
         * @param arg_orientation Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_scroll(
            arg_delta: number,
            arg_orientation: number,
            arg_time: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with xapp_status_icon_interface_call_scroll().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to xapp_status_icon_interface_call_scroll().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_scroll_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.Scroll">Scroll()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See xapp_status_icon_interface_call_scroll() for the asynchronous version of this method.
         * @param arg_delta Argument to pass with the method invocation.
         * @param arg_orientation Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_scroll_sync(
            arg_delta: number,
            arg_orientation: number,
            arg_time: number,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-x-StatusIcon.ButtonPress">ButtonPress()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_button_press(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-x-StatusIcon.ButtonRelease">ButtonRelease()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_button_release(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-x-StatusIcon.Scroll">Scroll()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_scroll(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Handler for the #XAppStatusIconInterface::handle-button-press signal.
         * @param invocation
         * @param arg_x
         * @param arg_y
         * @param arg_button
         * @param arg_time
         * @param arg_panel_position
         */
        vfunc_handle_button_press(
            invocation: Gio.DBusMethodInvocation,
            arg_x: number,
            arg_y: number,
            arg_button: number,
            arg_time: number,
            arg_panel_position: number,
        ): boolean;
        /**
         * Handler for the #XAppStatusIconInterface::handle-button-release signal.
         * @param invocation
         * @param arg_x
         * @param arg_y
         * @param arg_button
         * @param arg_time
         * @param arg_panel_position
         */
        vfunc_handle_button_release(
            invocation: Gio.DBusMethodInvocation,
            arg_x: number,
            arg_y: number,
            arg_button: number,
            arg_time: number,
            arg_panel_position: number,
        ): boolean;
        /**
         * Handler for the #XAppStatusIconInterface::handle-scroll signal.
         * @param invocation
         * @param arg_delta
         * @param arg_orientation
         * @param arg_time
         */
        vfunc_handle_scroll(
            invocation: Gio.DBusMethodInvocation,
            arg_delta: number,
            arg_orientation: number,
            arg_time: number,
        ): boolean;
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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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

    namespace StatusIconMonitor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'icon-added': (arg0: StatusIconInterfaceProxy) => void;
            'icon-removed': (arg0: StatusIconInterfaceProxy) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class StatusIconMonitor extends GObject.Object {
        static $gtype: GObject.GType<StatusIconMonitor>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StatusIconMonitor.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<StatusIconMonitor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StatusIconMonitor;

        // Signals

        connect<K extends keyof StatusIconMonitor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StatusIconMonitor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StatusIconMonitor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StatusIconMonitor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StatusIconMonitor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StatusIconMonitor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * List known icon proxies.
         * @returns a #GList of icons
         */
        list_icons(): StatusIconMonitor[];
    }

    namespace StyleManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::widget': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            widget: Gtk.Widget;
        }
    }

    class StyleManager extends GObject.Object {
        static $gtype: GObject.GType<StyleManager>;

        // Properties

        /**
         * The widget to be styled.
         */
        get widget(): Gtk.Widget;
        set widget(val: Gtk.Widget);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StyleManager.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<StyleManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StyleManager;

        // Signals

        connect<K extends keyof StyleManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StyleManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StyleManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StyleManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StyleManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StyleManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the #GtkWidget the style manager currently applies styles to.
         * @returns the #GtkWidget previously set on the style manager, or %NULL.
         */
        get_widget(): Gtk.Widget;
        /**
         * Removes the given style property from the widget if set.
         * @param name the property name
         */
        remove_style_property(name: string): void;
        /**
         * Sets the css font property on the widget based on the supplied pango font description string.
         * @param desc_string a pango font description string
         */
        set_from_pango_font_string(desc_string: string): void;
        /**
         * Adds the given style property to the widget. If the property has already been set, the value will be replaced.
         * @param name the property name
         * @param value the value to set the property to
         */
        set_style_property(name: string, value: string): void;
        /**
         * Sets the #GtkWidget the style manager will apply styles to.
         * @param widget the #GtkWidget that the style manager will apply styles to, or %NULL to unset the current widget and remove all styles currently set by this #XAppStyleManager instance.
         */
        set_widget(widget: Gtk.Widget): void;
    }

    namespace SwitcherooControlProxy {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            'notify::g-bus-type': (pspec: GObject.ParamSpec) => void;
            'notify::g-connection': (pspec: GObject.ParamSpec) => void;
            'notify::g-default-timeout': (pspec: GObject.ParamSpec) => void;
            'notify::g-flags': (pspec: GObject.ParamSpec) => void;
            'notify::g-interface-info': (pspec: GObject.ParamSpec) => void;
            'notify::g-interface-name': (pspec: GObject.ParamSpec) => void;
            'notify::g-name': (pspec: GObject.ParamSpec) => void;
            'notify::g-name-owner': (pspec: GObject.ParamSpec) => void;
            'notify::g-object-path': (pspec: GObject.ParamSpec) => void;
            'notify::gpus': (pspec: GObject.ParamSpec) => void;
            'notify::has-dual-gpu': (pspec: GObject.ParamSpec) => void;
            'notify::num-gpus': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gio.DBusProxy.ConstructorProps,
                Gio.AsyncInitable.ConstructorProps,
                Gio.DBusInterface.ConstructorProps,
                Gio.Initable.ConstructorProps,
                SwitcherooControl.ConstructorProps {}
    }

    /**
     * The #XAppSwitcherooControlProxy structure contains only private data and should only be accessed using the provided API.
     */
    class SwitcherooControlProxy
        extends Gio.DBusProxy
        implements Gio.AsyncInitable<SwitcherooControlProxy>, Gio.DBusInterface, Gio.Initable, SwitcherooControl
    {
        static $gtype: GObject.GType<SwitcherooControlProxy>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SwitcherooControlProxy.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SwitcherooControlProxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_finish(res: Gio.AsyncResult): SwitcherooControlProxy;
        // Conflicted with Gio.AsyncInitable.new_finish

        static new_finish(...args: never[]): any;

        static new_for_bus_finish(res: Gio.AsyncResult): SwitcherooControlProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): SwitcherooControlProxy;
        // Conflicted with Gio.DBusProxy.new_for_bus_sync

        static new_for_bus_sync(...args: never[]): any;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): SwitcherooControlProxy;
        // Conflicted with Gio.DBusProxy.new_sync

        static new_sync(...args: never[]): any;

        // Signals

        connect<K extends keyof SwitcherooControlProxy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SwitcherooControlProxy.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SwitcherooControlProxy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SwitcherooControlProxy.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SwitcherooControlProxy.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SwitcherooControlProxy.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-net-hadess-SwitcherooControl.top_of_page">net.hadess.SwitcherooControl</link>. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call xapp_switcheroo_control_proxy_new_finish() to get the result of the operation.
         *
         * See xapp_switcheroo_control_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static ['new'](
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<SwitcherooControlProxy> | null,
        ): void;
        // Conflicted with Gio.DBusProxy.new
        static ['new'](...args: never[]): any;
        /**
         * Like xapp_switcheroo_control_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call xapp_switcheroo_control_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See xapp_switcheroo_control_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
         * @param bus_type A #GBusType.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique).
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<SwitcherooControlProxy> | null,
        ): void;
        // Conflicted with Gio.DBusProxy.new_for_bus
        static new_for_bus(...args: never[]): any;

        // Inherited properties
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-net-hadess-SwitcherooControl.GPUs">"GPUs"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get gpus(): GLib.Variant;
        set gpus(val: GLib.Variant);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-net-hadess-SwitcherooControl.HasDualGpu">"HasDualGpu"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get has_dual_gpu(): boolean;
        set has_dual_gpu(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-net-hadess-SwitcherooControl.HasDualGpu">"HasDualGpu"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get hasDualGpu(): boolean;
        set hasDualGpu(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-net-hadess-SwitcherooControl.NumGPUs">"NumGPUs"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get num_gpus(): number;
        set num_gpus(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-net-hadess-SwitcherooControl.NumGPUs">"NumGPUs"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get numGpus(): number;
        set numGpus(val: number);

        // Inherited methods
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        init_async(io_priority: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        init_async(
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See g_async_initable_init_async().
         * @param res a #GAsyncResult.
         * @returns %TRUE if successful. If an error has occurred, this function will return %FALSE and set @error appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or %NULL on error.
         * @param res the #GAsyncResult from the callback
         * @returns a newly created #GObject,      or %NULL on error. Free with g_object_unref().
         */
        new_finish(res: Gio.AsyncResult): SwitcherooControlProxy;
        // Conflicted with Gio.DBusProxy.new_finish
        new_finish(...args: never[]): any;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        vfunc_init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See g_async_initable_init_async().
         * @param res a #GAsyncResult.
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         * @returns A #GDBusObject or %NULL. The returned reference should be freed with g_object_unref().
         */
        get_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A #GDBusInterfaceInfo. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A #GDBusObject or %NULL.
         */
        set_object(object?: Gio.DBusObject | null): void;
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         */
        vfunc_dup_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A #GDBusObject or %NULL.
         */
        vfunc_set_object(object?: Gio.DBusObject | null): void;
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
         * behaviour. See the [description][iface`Gio`.Initable#description] for more details.
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
         * behaviour. See the [description][iface`Gio`.Initable#description] for more details.
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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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

    namespace SwitcherooControlSkeleton {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            'notify::g-flags': (pspec: GObject.ParamSpec) => void;
            'notify::gpus': (pspec: GObject.ParamSpec) => void;
            'notify::has-dual-gpu': (pspec: GObject.ParamSpec) => void;
            'notify::num-gpus': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gio.DBusInterfaceSkeleton.ConstructorProps,
                Gio.DBusInterface.ConstructorProps,
                SwitcherooControl.ConstructorProps {}
    }

    /**
     * The #XAppSwitcherooControlSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class SwitcherooControlSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, SwitcherooControl {
        static $gtype: GObject.GType<SwitcherooControlSkeleton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SwitcherooControlSkeleton.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SwitcherooControlSkeleton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SwitcherooControlSkeleton;

        // Signals

        connect<K extends keyof SwitcherooControlSkeleton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SwitcherooControlSkeleton.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SwitcherooControlSkeleton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SwitcherooControlSkeleton.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SwitcherooControlSkeleton.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SwitcherooControlSkeleton.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited properties
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-net-hadess-SwitcherooControl.GPUs">"GPUs"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get gpus(): GLib.Variant;
        set gpus(val: GLib.Variant);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-net-hadess-SwitcherooControl.HasDualGpu">"HasDualGpu"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get has_dual_gpu(): boolean;
        set has_dual_gpu(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-net-hadess-SwitcherooControl.HasDualGpu">"HasDualGpu"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get hasDualGpu(): boolean;
        set hasDualGpu(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-net-hadess-SwitcherooControl.NumGPUs">"NumGPUs"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get num_gpus(): number;
        set num_gpus(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-net-hadess-SwitcherooControl.NumGPUs">"NumGPUs"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get numGpus(): number;
        set numGpus(val: number);

        // Inherited methods
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         * @returns A #GDBusObject or %NULL. The returned reference should be freed with g_object_unref().
         */
        get_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A #GDBusInterfaceInfo. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A #GDBusObject or %NULL.
         */
        set_object(object?: Gio.DBusObject | null): void;
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         */
        vfunc_dup_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A #GDBusObject or %NULL.
         */
        vfunc_set_object(object?: Gio.DBusObject | null): void;
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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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

    type DarkModeManagerClass = typeof DarkModeManager;
    /**
     * Information related to a single favorite file.
     */
    class FavoriteInfo {
        static $gtype: GObject.GType<FavoriteInfo>;

        // Fields

        uri: string;
        display_name: string;
        cached_mimetype: string;

        // Constructors

        constructor(
            properties?: Partial<{
                uri: string;
                display_name: string;
                cached_mimetype: string;
            }>,
        );
        _init(...args: any[]): void;

        // Methods

        /**
         * Makes an exact copy of an existing #XAppFavoriteInfo.
         * @returns a new #XAppFavoriteInfo.  Free using #xapp_favorite_info_free. Since 2.0
         */
        copy(): FavoriteInfo;
        /**
         * Destroys the #XAppFavoriteInfo.
         *
         * Since 2.0
         */
        free(): void;
    }

    type FavoritesClass = typeof Favorites;
    /**
     * Information about a single GPU used for offloading. The length of `env_strv` will always be an even number.
     */
    class GpuInfo {
        static $gtype: GObject.GType<GpuInfo>;

        // Fields

        id: number;
        is_default: boolean;
        display_name: string;
        env_strv: string[];

        // Constructors

        constructor(
            properties?: Partial<{
                id: number;
                is_default: boolean;
                display_name: string;
                env_strv: string[];
            }>,
        );
        _init(...args: any[]): void;

        // Methods

        /**
         * Creates a new string in a form intended to prefix a shell command, containing
         * the appropriate name/values for this gpu. For example:
         *
         * __GLX_VENDOR_LIBRARY_NAME=nvidia __NV_PRIME_RENDER_OFFLOAD=1
         * @returns A new string, free with g_free(). Since 2.6
         */
        get_shell_env_prefix(): string;
    }

    type GpuOffloadHelperClass = typeof GpuOffloadHelper;
    type GtkWindowClass = typeof GtkWindow;
    type IconChooserButtonClass = typeof IconChooserButton;
    type IconChooserDialogClass = typeof IconChooserDialog;
    type KbdLayoutControllerClass = typeof KbdLayoutController;
    abstract class KbdLayoutControllerPrivate {
        static $gtype: GObject.GType<KbdLayoutControllerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type MonitorBlankerClass = typeof MonitorBlanker;
    type ObjectIface = typeof Object;
    type ObjectManagerClientClass = typeof ObjectManagerClient;
    abstract class ObjectManagerClientPrivate {
        static $gtype: GObject.GType<ObjectManagerClientPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ObjectProxyClass = typeof ObjectProxy;
    abstract class ObjectProxyPrivate {
        static $gtype: GObject.GType<ObjectProxyPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ObjectSkeletonClass = typeof ObjectSkeleton;
    abstract class ObjectSkeletonPrivate {
        static $gtype: GObject.GType<ObjectSkeletonPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type PreferencesWindowClass = typeof PreferencesWindow;
    type StackSidebarClass = typeof StackSidebar;
    type StatusIconClass = typeof StatusIcon;
    type StatusIconInterfaceIface = typeof StatusIconInterface;
    type StatusIconInterfaceProxyClass = typeof StatusIconInterfaceProxy;
    abstract class StatusIconInterfaceProxyPrivate {
        static $gtype: GObject.GType<StatusIconInterfaceProxyPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type StatusIconInterfaceSkeletonClass = typeof StatusIconInterfaceSkeleton;
    abstract class StatusIconInterfaceSkeletonPrivate {
        static $gtype: GObject.GType<StatusIconInterfaceSkeletonPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type StatusIconMonitorClass = typeof StatusIconMonitor;
    type StyleManagerClass = typeof StyleManager;
    type SwitcherooControlIface = typeof SwitcherooControl;
    type SwitcherooControlProxyClass = typeof SwitcherooControlProxy;
    abstract class SwitcherooControlProxyPrivate {
        static $gtype: GObject.GType<SwitcherooControlProxyPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SwitcherooControlSkeletonClass = typeof SwitcherooControlSkeleton;
    abstract class SwitcherooControlSkeletonPrivate {
        static $gtype: GObject.GType<SwitcherooControlSkeletonPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * A group of widgets that can have their visibility and sensitivity controlled together.
     */
    class VisibilityGroup {
        static $gtype: GObject.GType<VisibilityGroup>;

        // Fields

        widgets: Gtk.Widget[];
        visible: boolean;
        sensitive: boolean;

        // Constructors

        constructor(visible: boolean, sensitive: boolean, widgets?: Gtk.Widget[] | null);
        _init(...args: any[]): void;

        static ['new'](visible: boolean, sensitive: boolean, widgets?: Gtk.Widget[] | null): VisibilityGroup;

        // Methods

        /**
         * Adds widget to the visibility group.
         * @param widget the #GtkWidget to add to the group
         */
        add_widget(widget: Gtk.Widget): void;
        /**
         * Destroys the #XAppVisibilityGroup.
         *
         * Since 2.2.15
         */
        free(): void;
        /**
         * Get the sensitivity of the group.
         *
         * There is no guarantee that all widgets in the group actually are
         * in the returned state, if they've had their sensitivity individually
         * modified since the last time the group was set.
         * @returns The sensitivity state of the group.
         */
        get_sensitive(): boolean;
        /**
         * Get the visibility of the group.
         *
         * There is no guarantee that all widgets in the group actually are
         * in the returned state, if they've had their visibility individually
         * modified since the last time the group was set.
         * @returns The visibility state of the group.
         */
        get_visible(): boolean;
        /**
         * Returns the members of the group or NULL if the group is empty.
         * @returns a list of members of the group. The list is owned by XApp, do not free.
         */
        get_widgets(): Gtk.Widget[];
        /**
         * Hide all widgets in the group.
         */
        hide(): void;
        remove_widget(widget: Gtk.Widget): boolean;
        /**
         * Set the sensitivity of all widgets in group.
         * @param sensitive TRUE to make the widgets sensitive.
         */
        set_sensitive(sensitive: boolean): void;
        /**
         * Set the visibility of all widgets in the group.
         * @param visible TRUE to make the widgets visible.
         */
        set_visible(visible: boolean): void;
        set_widgets(widgets?: Gtk.Widget[] | null): void;
        /**
         * Show all widgets in the group.
         */
        show(): void;
    }

    namespace Object {
        // Constructor properties interface

        interface ConstructorProps extends Gio.DBusObject.ConstructorProps {
            status_icon_interface: StatusIconInterface;
            statusIconInterface: StatusIconInterface;
        }
    }

    export interface ObjectNamespace {
        $gtype: GObject.GType<Object>;
        prototype: Object;
    }
    interface Object extends Gio.DBusObject {
        // Properties

        /**
         * The #XAppStatusIconInterface instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-x-StatusIcon.top_of_page">org.x.StatusIcon</link>, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        get status_icon_interface(): StatusIconInterface;
        set status_icon_interface(val: StatusIconInterface);
        /**
         * The #XAppStatusIconInterface instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-x-StatusIcon.top_of_page">org.x.StatusIcon</link>, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        get statusIconInterface(): StatusIconInterface;
        set statusIconInterface(val: StatusIconInterface);

        // Methods

        /**
         * Gets the #XAppStatusIconInterface instance for the D-Bus interface <link linkend="gdbus-interface-org-x-StatusIcon.top_of_page">org.x.StatusIcon</link> on `object,` if any.
         * @returns A #XAppStatusIconInterface that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_status_icon_interface(): StatusIconInterface | null;
    }

    export const Object: ObjectNamespace & {
        new (): Object; // This allows `obj instanceof Object`
    };

    namespace StatusIconInterface {
        /**
         * Interface for implementing StatusIconInterface.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Handler for the #XAppStatusIconInterface::handle-button-press signal.
             * @param invocation
             * @param arg_x
             * @param arg_y
             * @param arg_button
             * @param arg_time
             * @param arg_panel_position
             */
            vfunc_handle_button_press(
                invocation: Gio.DBusMethodInvocation,
                arg_x: number,
                arg_y: number,
                arg_button: number,
                arg_time: number,
                arg_panel_position: number,
            ): boolean;
            /**
             * Handler for the #XAppStatusIconInterface::handle-button-release signal.
             * @param invocation
             * @param arg_x
             * @param arg_y
             * @param arg_button
             * @param arg_time
             * @param arg_panel_position
             */
            vfunc_handle_button_release(
                invocation: Gio.DBusMethodInvocation,
                arg_x: number,
                arg_y: number,
                arg_button: number,
                arg_time: number,
                arg_panel_position: number,
            ): boolean;
            /**
             * Handler for the #XAppStatusIconInterface::handle-scroll signal.
             * @param invocation
             * @param arg_delta
             * @param arg_orientation
             * @param arg_time
             */
            vfunc_handle_scroll(
                invocation: Gio.DBusMethodInvocation,
                arg_delta: number,
                arg_orientation: number,
                arg_time: number,
            ): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            icon_name: string;
            iconName: string;
            icon_size: number;
            iconSize: number;
            label: string;
            metadata: string;
            name: string;
            primary_menu_is_open: boolean;
            primaryMenuIsOpen: boolean;
            secondary_menu_is_open: boolean;
            secondaryMenuIsOpen: boolean;
            tooltip_text: string;
            tooltipText: string;
            visible: boolean;
        }
    }

    export interface StatusIconInterfaceNamespace {
        $gtype: GObject.GType<StatusIconInterface>;
        prototype: StatusIconInterface;

        /**
         * Gets a machine-readable description of the <link linkend="gdbus-interface-org-x-StatusIcon.top_of_page">org.x.StatusIcon</link> D-Bus interface.
         */
        interface_info(): Gio.DBusInterfaceInfo;
        /**
         * Overrides all #GObject properties in the #XAppStatusIconInterface interface for a concrete class.
         * The properties are overridden in the order they are defined.
         * @param klass The class structure for a #GObject derived class.
         * @param property_id_begin The property id to assign to the first overridden property.
         */
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    interface StatusIconInterface extends GObject.Object, StatusIconInterface.Interface {
        // Properties

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.IconName">"IconName"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get icon_name(): string;
        set icon_name(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.IconName">"IconName"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get iconName(): string;
        set iconName(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.IconSize">"IconSize"</link>.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        get icon_size(): number;
        set icon_size(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.IconSize">"IconSize"</link>.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        get iconSize(): number;
        set iconSize(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.Label">"Label"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get label(): string;
        set label(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.Metadata">"Metadata"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get metadata(): string;
        set metadata(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.Name">"Name"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get name(): string;
        set name(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.PrimaryMenuIsOpen">"PrimaryMenuIsOpen"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get primary_menu_is_open(): boolean;
        set primary_menu_is_open(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.PrimaryMenuIsOpen">"PrimaryMenuIsOpen"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get primaryMenuIsOpen(): boolean;
        set primaryMenuIsOpen(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.SecondaryMenuIsOpen">"SecondaryMenuIsOpen"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get secondary_menu_is_open(): boolean;
        set secondary_menu_is_open(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.SecondaryMenuIsOpen">"SecondaryMenuIsOpen"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get secondaryMenuIsOpen(): boolean;
        set secondaryMenuIsOpen(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.TooltipText">"TooltipText"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get tooltip_text(): string;
        set tooltip_text(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.TooltipText">"TooltipText"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get tooltipText(): string;
        set tooltipText(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.Visible">"Visible"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get visible(): boolean;
        set visible(val: boolean);

        // Methods

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonPress">ButtonPress()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call xapp_status_icon_interface_call_button_press_finish() to get the result of the operation.
         *
         * See xapp_status_icon_interface_call_button_press_sync() for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         */
        call_button_press(
            arg_x: number,
            arg_y: number,
            arg_button: number,
            arg_time: number,
            arg_panel_position: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonPress">ButtonPress()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call xapp_status_icon_interface_call_button_press_finish() to get the result of the operation.
         *
         * See xapp_status_icon_interface_call_button_press_sync() for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_button_press(
            arg_x: number,
            arg_y: number,
            arg_button: number,
            arg_time: number,
            arg_panel_position: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonPress">ButtonPress()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call xapp_status_icon_interface_call_button_press_finish() to get the result of the operation.
         *
         * See xapp_status_icon_interface_call_button_press_sync() for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_button_press(
            arg_x: number,
            arg_y: number,
            arg_button: number,
            arg_time: number,
            arg_panel_position: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with xapp_status_icon_interface_call_button_press().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to xapp_status_icon_interface_call_button_press().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_button_press_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonPress">ButtonPress()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See xapp_status_icon_interface_call_button_press() for the asynchronous version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_button_press_sync(
            arg_x: number,
            arg_y: number,
            arg_button: number,
            arg_time: number,
            arg_panel_position: number,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonRelease">ButtonRelease()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call xapp_status_icon_interface_call_button_release_finish() to get the result of the operation.
         *
         * See xapp_status_icon_interface_call_button_release_sync() for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         */
        call_button_release(
            arg_x: number,
            arg_y: number,
            arg_button: number,
            arg_time: number,
            arg_panel_position: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonRelease">ButtonRelease()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call xapp_status_icon_interface_call_button_release_finish() to get the result of the operation.
         *
         * See xapp_status_icon_interface_call_button_release_sync() for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_button_release(
            arg_x: number,
            arg_y: number,
            arg_button: number,
            arg_time: number,
            arg_panel_position: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonRelease">ButtonRelease()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call xapp_status_icon_interface_call_button_release_finish() to get the result of the operation.
         *
         * See xapp_status_icon_interface_call_button_release_sync() for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_button_release(
            arg_x: number,
            arg_y: number,
            arg_button: number,
            arg_time: number,
            arg_panel_position: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with xapp_status_icon_interface_call_button_release().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to xapp_status_icon_interface_call_button_release().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_button_release_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonRelease">ButtonRelease()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See xapp_status_icon_interface_call_button_release() for the asynchronous version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_button_release_sync(
            arg_x: number,
            arg_y: number,
            arg_button: number,
            arg_time: number,
            arg_panel_position: number,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.Scroll">Scroll()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call xapp_status_icon_interface_call_scroll_finish() to get the result of the operation.
         *
         * See xapp_status_icon_interface_call_scroll_sync() for the synchronous, blocking version of this method.
         * @param arg_delta Argument to pass with the method invocation.
         * @param arg_orientation Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         */
        call_scroll(
            arg_delta: number,
            arg_orientation: number,
            arg_time: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.Scroll">Scroll()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call xapp_status_icon_interface_call_scroll_finish() to get the result of the operation.
         *
         * See xapp_status_icon_interface_call_scroll_sync() for the synchronous, blocking version of this method.
         * @param arg_delta Argument to pass with the method invocation.
         * @param arg_orientation Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_scroll(
            arg_delta: number,
            arg_orientation: number,
            arg_time: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.Scroll">Scroll()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call xapp_status_icon_interface_call_scroll_finish() to get the result of the operation.
         *
         * See xapp_status_icon_interface_call_scroll_sync() for the synchronous, blocking version of this method.
         * @param arg_delta Argument to pass with the method invocation.
         * @param arg_orientation Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_scroll(
            arg_delta: number,
            arg_orientation: number,
            arg_time: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with xapp_status_icon_interface_call_scroll().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to xapp_status_icon_interface_call_scroll().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_scroll_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.Scroll">Scroll()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See xapp_status_icon_interface_call_scroll() for the asynchronous version of this method.
         * @param arg_delta Argument to pass with the method invocation.
         * @param arg_orientation Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_scroll_sync(
            arg_delta: number,
            arg_orientation: number,
            arg_time: number,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-x-StatusIcon.ButtonPress">ButtonPress()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_button_press(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-x-StatusIcon.ButtonRelease">ButtonRelease()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_button_release(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-x-StatusIcon.Scroll">Scroll()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_scroll(invocation: Gio.DBusMethodInvocation): void;
    }

    export const StatusIconInterface: StatusIconInterfaceNamespace & {
        new (): StatusIconInterface; // This allows `obj instanceof StatusIconInterface`
    };

    namespace SwitcherooControl {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            gpus: GLib.Variant;
            has_dual_gpu: boolean;
            hasDualGpu: boolean;
            num_gpus: number;
            numGpus: number;
        }
    }

    export interface SwitcherooControlNamespace {
        $gtype: GObject.GType<SwitcherooControl>;
        prototype: SwitcherooControl;

        /**
         * Gets a machine-readable description of the <link linkend="gdbus-interface-net-hadess-SwitcherooControl.top_of_page">net.hadess.SwitcherooControl</link> D-Bus interface.
         */
        interface_info(): Gio.DBusInterfaceInfo;
        /**
         * Overrides all #GObject properties in the #XAppSwitcherooControl interface for a concrete class.
         * The properties are overridden in the order they are defined.
         * @param klass The class structure for a #GObject derived class.
         * @param property_id_begin The property id to assign to the first overridden property.
         */
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    interface SwitcherooControl extends GObject.Object {
        // Properties

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-net-hadess-SwitcherooControl.GPUs">"GPUs"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get gpus(): GLib.Variant;
        set gpus(val: GLib.Variant);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-net-hadess-SwitcherooControl.HasDualGpu">"HasDualGpu"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get has_dual_gpu(): boolean;
        set has_dual_gpu(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-net-hadess-SwitcherooControl.HasDualGpu">"HasDualGpu"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get hasDualGpu(): boolean;
        set hasDualGpu(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-net-hadess-SwitcherooControl.NumGPUs">"NumGPUs"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get num_gpus(): number;
        set num_gpus(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-net-hadess-SwitcherooControl.NumGPUs">"NumGPUs"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get numGpus(): number;
        set numGpus(val: number);
    }

    export const SwitcherooControl: SwitcherooControlNamespace & {
        new (): SwitcherooControl; // This allows `obj instanceof SwitcherooControl`
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

export default XApp;

// END
