
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


    /**
     * @gir-type Struct
     */
    class IconSize {
        static $gtype: GObject.GType<IconSize>;

        // Static fields
        static "16": number;

        static "22": number;

        static "24": number;

        static "32": number;

        static "48": number;

        static "96": number;
    }


    /**
     * @gir-type Enum
     */
    export namespace ScrollDirection {
        export const $gtype: GObject.GType<ScrollDirection>;
    }

    /**
     * Represents the direction of icon scroll events.
     * @gir-type Enum
     */
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


    /**
     * @gir-type Enum
     */
    export namespace StatusIconState {
        export const $gtype: GObject.GType<StatusIconState>;
    }

    /**
     * @gir-type Enum
     */
    enum StatusIconState {
        /**
         * The {@link XApp.StatusIcon} is currently being handled
         * by an {@link XApp.StatusIconMonitor} (usually in an applet).
         */
        NATIVE,
        /**
         * The {@link XApp.StatusIcon} is currently being handled
         * by a legacy system tray implementation (using GtkStatusIcon).
         */
        FALLBACK,
        /**
         * The {@link XApp.StatusIcon} is not currently being handled by any
         * kind of status icon implementation.
         */
        NO_SUPPORT,
    }


    /**
     * Provides the path to the system's temporary files folder. This is identical to g_get_tmp_dir,
     * but includes the /dev/shm ramdisk as the first choice for a temporary folder.
     * @returns the directory to use for temporary files.
     * @since 2.2.16
     */
    function get_tmp_dir(): string;

    /**
     * Converts a pango font description string to a string suitable for use with the css "font" tag. The font description must contain the font family and font size or conversion will fail and `null` will be returned
     * @param pango_font_string a pango font description string
     * @returns the css compatible font string or `null` if the conversion failed.
     * @since 2.2
     */
    function pango_font_string_to_css(pango_font_string: string): string;

    /**
     * Sets the icon name hint for a window manager (like muffin) to make
     * available when applications want to change their icons during runtime
     * without having to resort to the internal low-res pixbufs that GdkWindow
     * sets on the client side.  This also chains up and calls GtkWindow.set_icon_from_file
     * for convenience and compatibility.  Set to `null` to unset.
     * @param window The {@link XApp.GtkWindow} to set the icon name for
     * @param file_name The icon path to set, or `null` to unset.
     */
    function set_window_icon_from_file(window: Gtk.Window, file_name: string | null): void;

    /**
     * Sets the icon name hint for a window manager (like muffin) to make
     * available when applications want to change their icons during runtime
     * without having to resort to the internal low-res pixbufs that GdkWindow
     * sets on the client side.  This is a function, not a method, for taking
     * advantage of this feature with descendants of GtkWindows, such as
     * GtkDialogs.  Sets gtk_window_set_icon_name as well, to avoid needing
     * to have two calls each time.  Set to `null` to unset.
     * @param window The {@link XApp.GtkWindow} to set the icon name for
     * @param icon_name The icon name to set, or `null` to unset.
     */
    function set_window_icon_name(window: Gtk.Window, icon_name: string | null): void;

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
     * @param window The {@link XApp.GtkWindow} to set the progress for
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
     * @param window The {@link XApp.GtkWindow} to set the progress for
     * @param pulse Whether to have pulsing set or not.
     */
    function set_window_progress_pulse(window: Gtk.Window, pulse: boolean): void;

    /**
     * Sets the icon name hint for a window manager (like muffin) to make
     * available when applications want to change their icons during runtime
     * without having to resort to the internal low-res pixbufs that GdkWindow
     * sets on the client side.  This is a function, not a method, for applying
     * the icon name property for a given (possibly foreign) window, by passing
     * the window's XID.  Set to `null` to unset.
     * @param xid The Window to set the icon name for
     * @param file_name The icon path to set, or `null` to unset.
     */
    function set_xid_icon_from_file(xid: bigint | number, file_name: string | null): void;

    /**
     * Sets the icon name hint for a window manager (like muffin) to make
     * available when applications want to change their icons during runtime
     * without having to resort to the internal low-res pixbufs that GdkWindow
     * sets on the client side.  This is a function, not a method, for applying
     * the icon name property for a given (possibly foreign) window, by passing
     * the window's XID.  Set to `null` to unset.
     * @param xid The Window to set the icon name for
     * @param icon_name The icon name to set, or `null` to unset.
     */
    function set_xid_icon_name(xid: bigint | number, icon_name: string | null): void;

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
    function set_xid_progress(xid: bigint | number, progress: number): void;

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
    function set_xid_progress_pulse(xid: bigint | number, pulse: boolean): void;

    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-x-StatusIcon.top_of_page">org.x.StatusIcon</link> D-Bus interface.
     * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
     */
    function status_icon_interface_interface_info(): Gio.DBusInterfaceInfo;

    /**
     * Overrides all {@link GObject.Object} properties in the {@link XApp.StatusIconInterface} interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a {@link GObject.Object} derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function status_icon_interface_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;

    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-net-hadess-SwitcherooControl.top_of_page">net.hadess.SwitcherooControl</link> D-Bus interface.
     * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
     */
    function switcheroo_control_interface_info(): Gio.DBusInterfaceInfo;

    /**
     * Overrides all {@link GObject.Object} properties in the {@link XApp.SwitcherooControl} interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a {@link GObject.Object} derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function switcheroo_control_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;

    /**
     * Check if the Session Manager is currently in the "Running" phase.
     * @returns `true` if the session is running.
     * @since 2.0
     */
    function util_get_session_is_running(): boolean;

    /**
     * Performs a check to see if on-demand mode for discrete graphics
     * is supported.
     * @returns `true` if supported.
     * @since 1.8
     */
    function util_gpu_offload_supported(): boolean;

    /**
     * @gir-type Callback
     */
    interface FavoritesItemSelectedCallback {
        (favorites: Favorites, uri: string): void;
    }

    namespace DarkModeManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
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

        static ["new"](prefer_dark_mode: boolean): DarkModeManager;

        // Signals
        /** @signal */
        connect<K extends keyof DarkModeManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DarkModeManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DarkModeManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DarkModeManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DarkModeManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DarkModeManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace Favorites {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Notifies when the favorites list has changed.
             * @signal
             * @action
             * @run-first
             */
            changed: () => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
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
        /** @signal */
        connect<K extends keyof Favorites.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Favorites.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Favorites.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Favorites.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Favorites.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Favorites.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Returns the {@link XApp.Favorites} instance.
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
         * @returns a new {@link Gtk.ActionGroup} populated with a list of favorites, or NULL             if there are no favorites.
         */
        create_actions(mimetypes: string | null): Gtk.Action[];

        /**
         * Generates a GtkMenu widget populated with favorites. The callback will be called when
         * a menu item has been activated, and will include the uri of the respective item.
         * @param mimetypes The mimetypes to filter for, or NULL to include all favorites.
         * @param callback (closure user_data): The callback to use when a menu item has been selected.
         * @returns a new {@link Gtk.Menu} populated with a list of favorites, or NULL             if there are no favorites.
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
         * Gets a list of all favorites.  If mimetype is not `null`, the list will
         * contain only favorites with that mimetype.
         * @param mimetypes The mimetypes to filter by for results
         * @returns a list of `XAppFavoriteInfos`.             Free the list with `g_list_free`, free elements with `xapp_favorite_info_free`.
         */
        get_favorites(mimetypes: string[] | null): FavoriteInfo[];

        /**
         * @returns The number of favorite files
         */
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
            /**
             * This signal is emitted by the helper when it has completed
             * gathering GPU information. It will only be sent once.
             * @signal
             * @action
             * @run-last
             */
            ready: (arg0: boolean) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
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
        /** @signal */
        connect<K extends keyof GpuOffloadHelper.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GpuOffloadHelper.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GpuOffloadHelper.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GpuOffloadHelper.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GpuOffloadHelper.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GpuOffloadHelper.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Creates a new {@link XApp.GpuOffloadHelper} instance.
         * 
         * The {@link XApp.GpuOffloadHelper.SignalSignatures.ready | XApp.GpuOffloadHelper::ready} signal will be emitted when the helper is initialized (successfully or not).
         */
        static get(): GpuOffloadHelper;

        /**
         * Creates a new {@link XApp.GpuOffloadHelper} instance. This performs initialization synchronously,
         * and can potentially block.
         * 
         * Use `xapp_gpu_offload_helper_is_ready()` to see if the helper was initialized successfully.
         */
        static get_sync(): GpuOffloadHelper;

        // Methods
        /**
         * Returns an {@link XApp.GpuInfo} for the default GPU.
         * @returns the default {@link XApp.GpuInfo}. Do not free
         */
        get_default_info(): GpuInfo;

        /**
         * Returns an {@link XApp.GpuInfo} with the given ID.
         * @param id The ID of the info to retrieve.
         * @returns the appropriate {@link XApp.GpuInfo}, or `null` if `id` was invalid.
         */
        get_info_by_id(id: number): GpuInfo;

        /**
         * Gets the number of GPUs noticed by Switcheroo.
         * @returns the total number of GPUs. A return value larger than 1 implies there are offloadable GPUs available.
         */
        get_n_gpus(): number;

        /**
         * Generates a list of `XAppGpuInfos` that can be offloaded to, if there are any.
         * @returns a list of `XAppGpuInfos` or `null` if there is only a single GPU. The elements are owned by `helper` but the container itself should be freed.
         */
        get_offload_infos(): GpuInfo[];

        /**
         * Checks if there is a non-default GPU available for offloading.
         * @returns `true` if there is an extra GPU available.
         */
        is_offload_supported(): boolean;

        /**
         * Checks if the helper is ready and valid. This does not mean
         * offload support exists.
         * @returns `true` if the helper has been successfully initialized.
         */
        is_ready(): boolean;
    }


    namespace GtkWindow {
        // Signal signatures
        interface SignalSignatures extends Gtk.Window.SignalSignatures {
            "notify::accept-focus": (pspec: GObject.ParamSpec) => void;
            "notify::application": (pspec: GObject.ParamSpec) => void;
            "notify::attached-to": (pspec: GObject.ParamSpec) => void;
            "notify::decorated": (pspec: GObject.ParamSpec) => void;
            "notify::default-height": (pspec: GObject.ParamSpec) => void;
            "notify::default-width": (pspec: GObject.ParamSpec) => void;
            "notify::deletable": (pspec: GObject.ParamSpec) => void;
            "notify::destroy-with-parent": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-map": (pspec: GObject.ParamSpec) => void;
            "notify::focus-visible": (pspec: GObject.ParamSpec) => void;
            "notify::gravity": (pspec: GObject.ParamSpec) => void;
            "notify::has-resize-grip": (pspec: GObject.ParamSpec) => void;
            "notify::has-toplevel-focus": (pspec: GObject.ParamSpec) => void;
            "notify::hide-titlebar-when-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::is-active": (pspec: GObject.ParamSpec) => void;
            "notify::is-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::mnemonics-visible": (pspec: GObject.ParamSpec) => void;
            "notify::modal": (pspec: GObject.ParamSpec) => void;
            "notify::resizable": (pspec: GObject.ParamSpec) => void;
            "notify::resize-grip-visible": (pspec: GObject.ParamSpec) => void;
            "notify::role": (pspec: GObject.ParamSpec) => void;
            "notify::screen": (pspec: GObject.ParamSpec) => void;
            "notify::skip-pager-hint": (pspec: GObject.ParamSpec) => void;
            "notify::skip-taskbar-hint": (pspec: GObject.ParamSpec) => void;
            "notify::startup-id": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::transient-for": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::type-hint": (pspec: GObject.ParamSpec) => void;
            "notify::urgency-hint": (pspec: GObject.ParamSpec) => void;
            "notify::window-position": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Window.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
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

        static ["new"](type: Gtk.WindowType): GtkWindow;

        // Signals
        /** @signal */
        connect<K extends keyof GtkWindow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GtkWindow.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GtkWindow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GtkWindow.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GtkWindow.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GtkWindow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Sets the icon name hint for a window manager (like muffin) to make
         * available when applications want to change their icons during runtime
         * without having to resort to the internal low-res pixbufs that GdkWindow
         * sets on the client side.  This also chains up and calls GtkWindow.set_icon_from_file
         * for convenience and compatibility.  Set to `null` to unset.
         * @param file_name The icon path to set, or `null` to unset.
         */
        set_icon_from_file(file_name: string | null): void;

        /**
         * @param args 
         */
    // Conflicted with Gtk.Window.set_icon_from_file
        set_icon_from_file(...args: never[]): any;

        /**
         * Sets the icon name hint for a window manager (like muffin) to make
         * available when applications want to change their icons during runtime
         * without having to resort to the internal low-res pixbufs that GdkWindow
         * sets on the client side.  This also chains up and calls GtkWindow.set_icon_name
         * for convenience and compatibility.  Set to `null` to unset.
         * @param icon_name The icon name or path to set, or `null` to unset.
         */
        set_icon_name(icon_name: string | null): void;

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
    }


    namespace IconChooserButton {
        // Signal signatures
        interface SignalSignatures extends Gtk.Button.SignalSignatures {
            "notify::category": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-size": (pspec: GObject.ParamSpec) => void;
            "notify::always-show-image": (pspec: GObject.ParamSpec) => void;
            "notify::image": (pspec: GObject.ParamSpec) => void;
            "notify::image-position": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::relief": (pspec: GObject.ParamSpec) => void;
            "notify::use-stock": (pspec: GObject.ParamSpec) => void;
            "notify::use-underline": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::yalign": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Button.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Actionable.ConstructorProps, Gtk.Activatable.ConstructorProps, Gtk.Buildable.ConstructorProps {
            category: string;
            icon: string;
            icon_size: Gtk.IconSize;
            iconSize: Gtk.IconSize;
        }
    }

    /**
     * @gir-type Class
     */
    class IconChooserButton extends Gtk.Button implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {
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
         * @default Gtk.IconSize.DND
         */
        get icon_size(): Gtk.IconSize;
        set icon_size(val: Gtk.IconSize);

        /**
         * The size to use when displaying the icon.
         * @default Gtk.IconSize.DND
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

        static ["new"](): IconChooserButton;

        static new_with_size(icon_size: Gtk.IconSize): IconChooserButton;

        // Signals
        /** @signal */
        connect<K extends keyof IconChooserButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, IconChooserButton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof IconChooserButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, IconChooserButton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof IconChooserButton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<IconChooserButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets a reference to the icon chooser dialog for the {@link XApp.IconChooserButton}.
         * This is useful for setting properties on the dialog.
         * @returns the {@link XApp.IconChooserDialog}
         */
        get_dialog(): IconChooserDialog;

        /**
         * Gets the icon from the {@link XApp.IconChooserButton}.
         * @returns a string representing the icon. This may be an icon name or a file path.
         */
        get_icon(): string;

        /**
         * Sets the icon on the {@link XApp.IconChooserButton}.
         * @param category a string representing the category selected by default.
         */
        set_default_category(category: string | null): void;

        /**
         * Sets the icon on the {@link XApp.IconChooserButton}.
         * @param icon a string representing the icon to be set. This may be an icon name or a file path.
         */
        set_icon(icon: string | null): void;

        /**
         * Sets the icon size used in the button.
         * @param icon_size the size of icon to use in the button, or -1 to use the default value.
         */
        set_icon_size(icon_size: Gtk.IconSize): void;

        /**
         * @default null
          * @category Inherited from Gtk.Actionable
         */
        get action_name(): string | null;
        set action_name(val: string | null);

        /**
         * @default null
          * @category Inherited from Gtk.Actionable
         */
        get actionName(): string | null;
        set actionName(val: string | null);

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
        get_action_name(): string | null;

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
        set_action_name(action_name: string | null): void;

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
        set_action_target_value(target_value: GLib.Variant | null): void;

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
        vfunc_get_action_name(): string | null;

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
        vfunc_set_action_name(action_name: string | null): void;

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
        vfunc_set_action_target_value(target_value: GLib.Variant | null): void;

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
        sync_action_properties(action: Gtk.Action | null): void;

        /**
         * This is called to update the activatable completely, this is called
         * internally when the {@link Gtk.Activatable.related_action} property is set
         * or unset and by the implementing class when
         * {@link Gtk.Activatable.use_action_appearance} changes.
         * @param action the related {@link Gtk.Action} or `null`
         * @virtual
         */
        vfunc_sync_action_properties(action: Gtk.Action | null): void;

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
         * Returns whether the widget should grab focus when it is clicked with the mouse.
         * See `gtk_widget_set_focus_on_click()`.
         * @returns `true` if the widget should grab focus when it is clicked with               the mouse.
         */
        get_focus_on_click(): boolean;

        /**
         * Sets whether the widget should grab focus when it is clicked with the mouse.
         * Making mouse clicks not grab focus is useful in places like toolbars where
         * you don’t want the keyboard focus removed from the main area of the
         * application.
         * @param focus_on_click whether the widget should grab focus when clicked with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
    }


    namespace IconChooserDialog {
        // Signal signatures
        interface SignalSignatures extends GtkWindow.SignalSignatures {
            /**
             * @signal
             * @action
             * @run-last
             */
            close: () => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            select: () => void;
            "notify::allow-paths": (pspec: GObject.ParamSpec) => void;
            "notify::default-icon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-size": (pspec: GObject.ParamSpec) => void;
            "notify::accept-focus": (pspec: GObject.ParamSpec) => void;
            "notify::application": (pspec: GObject.ParamSpec) => void;
            "notify::attached-to": (pspec: GObject.ParamSpec) => void;
            "notify::decorated": (pspec: GObject.ParamSpec) => void;
            "notify::default-height": (pspec: GObject.ParamSpec) => void;
            "notify::default-width": (pspec: GObject.ParamSpec) => void;
            "notify::deletable": (pspec: GObject.ParamSpec) => void;
            "notify::destroy-with-parent": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-map": (pspec: GObject.ParamSpec) => void;
            "notify::focus-visible": (pspec: GObject.ParamSpec) => void;
            "notify::gravity": (pspec: GObject.ParamSpec) => void;
            "notify::has-resize-grip": (pspec: GObject.ParamSpec) => void;
            "notify::has-toplevel-focus": (pspec: GObject.ParamSpec) => void;
            "notify::hide-titlebar-when-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::is-active": (pspec: GObject.ParamSpec) => void;
            "notify::is-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::mnemonics-visible": (pspec: GObject.ParamSpec) => void;
            "notify::modal": (pspec: GObject.ParamSpec) => void;
            "notify::resizable": (pspec: GObject.ParamSpec) => void;
            "notify::resize-grip-visible": (pspec: GObject.ParamSpec) => void;
            "notify::role": (pspec: GObject.ParamSpec) => void;
            "notify::screen": (pspec: GObject.ParamSpec) => void;
            "notify::skip-pager-hint": (pspec: GObject.ParamSpec) => void;
            "notify::skip-taskbar-hint": (pspec: GObject.ParamSpec) => void;
            "notify::startup-id": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::transient-for": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::type-hint": (pspec: GObject.ParamSpec) => void;
            "notify::urgency-hint": (pspec: GObject.ParamSpec) => void;
            "notify::window-position": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends GtkWindow.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            allow_paths: boolean;
            allowPaths: boolean;
            default_icon: string;
            defaultIcon: string;
            icon_size: IconSize;
            iconSize: IconSize;
        }
    }

    /**
     * @gir-type Class
     */
    class IconChooserDialog extends GtkWindow implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<IconChooserDialog>;

        // Properties
        /**
         * Whether to allow paths to be searched and selected or only icon names.
         * @default true
         */
        get allow_paths(): boolean;
        set allow_paths(val: boolean);

        /**
         * Whether to allow paths to be searched and selected or only icon names.
         * @default true
         */
        get allowPaths(): boolean;
        set allowPaths(val: boolean);

        /**
         * The icon to use by default.
         * @default null
         */
        get default_icon(): string;
        set default_icon(val: string);

        /**
         * The icon to use by default.
         * @default null
         */
        get defaultIcon(): string;
        set defaultIcon(val: string);

        /**
         * The preferred size to use when looking up icons. This only works with icon names.
         * Additionally, there is no guarantee that a selected icon name will exist in a
         * particular size.
         * @default XApp.IconSize.32
         */
        get icon_size(): IconSize;
        set icon_size(val: IconSize);

        /**
         * The preferred size to use when looking up icons. This only works with icon names.
         * Additionally, there is no guarantee that a selected icon name will exist in a
         * particular size.
         * @default XApp.IconSize.32
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

        static ["new"](): IconChooserDialog;

        // Signals
        /** @signal */
        connect<K extends keyof IconChooserDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, IconChooserDialog.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof IconChooserDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, IconChooserDialog.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof IconChooserDialog.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<IconChooserDialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Allows a button to be added to the {@link Gtk.ActionBar} of the dialog with a custom
         * response id.
         * @param button a {@link Gtk.Button} to add
         * @param packing the {@link Gtk.PackType} to specify start or end packing to the action bar
         * @param response_id the dialog response id to return when this button is clicked.
         */
        add_button(button: Gtk.Widget, packing: Gtk.PackType, response_id: Gtk.ResponseType): void;

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
         * xapp_icon_chooser_dialog_run (), `xapp_icon_chooser_dialog_run_with_icon()`, and
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
         * xapp_icon_chooser_dialog_run (), `xapp_icon_chooser_dialog_run_with_icon()`, and
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
         * xapp_icon_chooser_dialog_run (), `xapp_icon_chooser_dialog_run_with_icon()`, and
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
    }


    namespace KbdLayoutController {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            "config-changed": () => void;
            /**
             * @signal
             * @run-last
             */
            "layout-changed": (arg0: number) => void;
            "notify::enabled": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            enabled: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class KbdLayoutController extends GObject.Object {
        static $gtype: GObject.GType<KbdLayoutController>;

        // Properties
        /**
         * @read-only
         * @default false
         */
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

        static ["new"](): KbdLayoutController;

        // Signals
        /** @signal */
        connect<K extends keyof KbdLayoutController.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, KbdLayoutController.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof KbdLayoutController.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, KbdLayoutController.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof KbdLayoutController.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<KbdLayoutController.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Renders a subscript number in the given work area.  This should
         * be called from within a "draw" or "paint" widget/actor function,
         * where a valid cairo_t is provided to draw with.
         * @param cr a {@link cairo.Context}
         * @param x the x position of the drawing area
         * @param y the y position of the drawing area
         * @param width the width of the drawing area
         * @param height the height of the drawing area
         * @param subscript the number to render
         */
        static render_cairo_subscript(cr: cairo.Context, x: number, y: number, width: number, height: number, subscript: number): void;

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

        /**
         * @param group 
         */
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

    /**
     * @gir-type Class
     */
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

        static ["new"](): MonitorBlanker;

        // Signals
        /** @signal */
        connect<K extends keyof MonitorBlanker.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MonitorBlanker.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MonitorBlanker.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MonitorBlanker.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MonitorBlanker.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MonitorBlanker.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Returns whether monitors are currently blanked.
         * See `xapp_monitor_blanker_blank_other_monitors()`.
         * @returns `true` if monitors are blanked.
         */
        are_monitors_blanked(): boolean;

        /**
         * Blanks monitors besides the one where the `window` is.
         * @param window a {@link XApp.GtkWindow}
         */
        blank_other_monitors(window: Gtk.Window): void;

        /**
         * Unblanks monitors that were blanked by
         * `xapp_monitor_blanker_blank_other_monitors()`;
         */
        unblank_monitors(): void;
    }


    namespace ObjectManagerClient {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusObjectManagerClient.SignalSignatures {
            "notify::bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::connection": (pspec: GObject.ParamSpec) => void;
            "notify::flags": (pspec: GObject.ParamSpec) => void;
            "notify::get-proxy-type-destroy-notify": (pspec: GObject.ParamSpec) => void;
            "notify::get-proxy-type-func": (pspec: GObject.ParamSpec) => void;
            "notify::get-proxy-type-user-data": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::object-path": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusObjectManagerClient.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusObjectManager.ConstructorProps, Gio.Initable.ConstructorProps {}
    }

    /**
     * The {@link XApp.ObjectManagerClient} structure contains only private data and should only be accessed using the provided API.
     * @gir-type Class
     */
    class ObjectManagerClient extends Gio.DBusObjectManagerClient implements Gio.AsyncInitable<ObjectManagerClient>, Gio.DBusObjectManager, Gio.Initable {
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

        static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): ObjectManagerClient;

        // Conflicted with Gio.DBusObjectManagerClient.new_for_bus_sync
        static new_for_bus_sync(...args: never[]): any;

        static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): ObjectManagerClient;

        // Conflicted with Gio.DBusObjectManagerClient.new_sync
        static new_sync(...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof ObjectManagerClient.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ObjectManagerClient.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ObjectManagerClient.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ObjectManagerClient.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ObjectManagerClient.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ObjectManagerClient.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * A {@link Gio.DBusProxyTypeFunc} that maps `interface_name` to the generated {@link Gio.DBusObjectProxy} derived and {@link Gio.DBusProxy} derived types.
         * @param manager A {@link Gio.DBusObjectManagerClient}.
         * @param object_path The object path of the remote object (unused).
         * @param interface_name Interface name of the remote object or `null` to get the object proxy {@link GObject.GType}.
         * @param user_data User data (unused).
         */
        static get_proxy_type(manager: Gio.DBusObjectManagerClient, object_path: string, interface_name: string | null, user_data: null): GObject.GType;

        /**
         * Asynchronously creates {@link Gio.DBusObjectManagerClient} using `xapp_object_manager_client_get_proxy_type()` as the {@link Gio.DBusProxyTypeFunc}. See `g_dbus_object_manager_client_new()` for more details.
         * 
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `xapp_object_manager_client_new_finish()` to get the result of the operation.
         * 
         * See `xapp_object_manager_client_new_sync()` for the synchronous, blocking version of this constructor.
         * @param connection A {@link Gio.DBusConnection}.
         * @param flags Flags from the {@link Gio.DBusObjectManagerClientFlags} enumeration.
         * @param name A bus name (well-known or unique) or `null` if `connection` is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<ObjectManagerClient> | null): void;

        /**
         * @param args 
         */
    // Conflicted with Gio.DBusObjectManagerClient.new
        static ["new"](...args: never[]): any;

        /**
         * Like `xapp_object_manager_client_new()` but takes a {@link Gio.BusType} instead of a {@link Gio.DBusConnection}.
         * 
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `xapp_object_manager_client_new_for_bus_finish()` to get the result of the operation.
         * 
         * See `xapp_object_manager_client_new_for_bus_sync()` for the synchronous, blocking version of this constructor.
         * @param bus_type A {@link Gio.BusType}.
         * @param flags Flags from the {@link Gio.DBusObjectManagerClientFlags} enumeration.
         * @param name A bus name (well-known or unique).
         * @param object_path An object path.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<ObjectManagerClient> | null): void;

        /**
         * @param args 
         */
    // Conflicted with Gio.DBusObjectManagerClient.new_for_bus
        static new_for_bus(...args: never[]): any;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns `true` if successful. If an error has occurred, this function will return `false` and set `error` appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or `null` on error.
         * @param res the {@link Gio.AsyncResult} from the callback
         * @returns a newly created {@link GObject.Object},      or `null` on error. Free with `g_object_unref()`.
         */
        new_finish(res: Gio.AsyncResult): ObjectManagerClient;

        /**
         * @param args 
         */
        // Conflicted with Gio.DBusObjectManagerClient.new_finish
        new_finish(...args: never[]): any;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @virtual
         */
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Gets the interface proxy for `interface_name` at `object_path`, if
         * any.
         * @param object_path Object path to look up.
         * @param interface_name D-Bus interface name to look up.
         * @returns A {@link Gio.DBusInterface} instance or `null`. Free   with `g_object_unref()`.
         */
        get_interface(object_path: string, interface_name: string): Gio.DBusInterface | null;

        /**
         * Gets the {@link Gio.DBusObject} at `object_path`, if any.
         * @param object_path Object path to look up.
         * @returns A {@link Gio.DBusObject} or `null`. Free with   `g_object_unref()`.
         */
        get_object(object_path: string): Gio.DBusObject | null;

        /**
         * Gets the object path that `manager` is for.
         * @returns A string owned by `manager`. Do not free.
         */
        get_object_path(): string;

        /**
         * Gets all {@link Gio.DBusObject} objects known to `manager`.
         * @returns A list of   {@link Gio.DBusObject} objects. The returned list should be freed with   `g_list_free()` after each element has been freed with   `g_object_unref()`.
         */
        get_objects(): Gio.DBusObject[];

        /**
         * Gets the interface proxy for `interface_name` at `object_path`, if
         * any.
         * @param object_path Object path to look up.
         * @param interface_name D-Bus interface name to look up.
         * @virtual
         */
        vfunc_get_interface(object_path: string, interface_name: string): Gio.DBusInterface | null;

        /**
         * Gets the {@link Gio.DBusObject} at `object_path`, if any.
         * @param object_path Object path to look up.
         * @virtual
         */
        vfunc_get_object(object_path: string): Gio.DBusObject | null;

        /**
         * Gets the object path that `manager` is for.
         * @virtual
         */
        vfunc_get_object_path(): string;

        /**
         * Gets all {@link Gio.DBusObject} objects known to `manager`.
         * @virtual
         */
        vfunc_get_objects(): Gio.DBusObject[];

        /**
         * Signal handler for the {@link Gio.DBusObjectManager.SignalSignatures.interface_added | Gio.DBusObjectManager::interface-added} signal.
         * @param object 
         * @param interface_ 
         * @virtual
         */
        vfunc_interface_added(object: Gio.DBusObject, interface_: Gio.DBusInterface): void;

        /**
         * Signal handler for the {@link Gio.DBusObjectManager.SignalSignatures.interface_removed | Gio.DBusObjectManager::interface-removed} signal.
         * @param object 
         * @param interface_ 
         * @virtual
         */
        vfunc_interface_removed(object: Gio.DBusObject, interface_: Gio.DBusInterface): void;

        /**
         * Signal handler for the {@link Gio.DBusObjectManager.SignalSignatures.object_added | Gio.DBusObjectManager::object-added} signal.
         * @param object 
         * @virtual
         */
        vfunc_object_added(object: Gio.DBusObject): void;

        /**
         * Signal handler for the {@link Gio.DBusObjectManager.SignalSignatures.object_removed | Gio.DBusObjectManager::object-removed} signal.
         * @param object 
         * @virtual
         */
        vfunc_object_removed(object: Gio.DBusObject): void;

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
        init(cancellable: Gio.Cancellable | null): boolean;

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
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }


    namespace ObjectProxy {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusObjectProxy.SignalSignatures {
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::status-icon-interface": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusObjectProxy.ConstructorProps, Gio.DBusObject.ConstructorProps, Object.ConstructorProps {}
    }

    /**
     * The {@link XApp.ObjectProxy} structure contains only private data and should only be accessed using the provided API.
     * @gir-type Class
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

        static ["new"](connection: Gio.DBusConnection, object_path: string): ObjectProxy;

        // Signals
        /** @signal */
        connect<K extends keyof ObjectProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ObjectProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ObjectProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ObjectProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ObjectProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ObjectProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * The {@link XApp.StatusIconInterface} instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-x-StatusIcon.top_of_page">org.x.StatusIcon</link>, if any.
         * 
         * Connect to the {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal to get informed of property changes.
          * @category Inherited from XApp.Object
         */
        get status_icon_interface(): StatusIconInterface | null;
        set status_icon_interface(val: StatusIconInterface | null);

        /**
         * The {@link XApp.StatusIconInterface} instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-x-StatusIcon.top_of_page">org.x.StatusIcon</link>, if any.
         * 
         * Connect to the {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal to get informed of property changes.
          * @category Inherited from XApp.Object
         */
        get statusIconInterface(): StatusIconInterface | null;
        set statusIconInterface(val: StatusIconInterface | null);

        /**
         * Gets the D-Bus interface with name `interface_name` associated with
         * `object`, if any.
         * @param interface_name A D-Bus interface name.
         * @returns `null` if not found, otherwise a   {@link Gio.DBusInterface} that must be freed with `g_object_unref()`.
         */
        get_interface(interface_name: string): Gio.DBusInterface | null;

        /**
         * Gets the D-Bus interfaces associated with `object`.
         * @returns A list of {@link Gio.DBusInterface} instances.   The returned list must be freed by `g_list_free()` after each element has been freed   with `g_object_unref()`.
         */
        get_interfaces(): Gio.DBusInterface[];

        /**
         * Gets the object path for `object`.
         * @returns A string owned by `object`. Do not free.
         */
        get_object_path(): string;

        /**
         * Gets the D-Bus interface with name `interface_name` associated with
         * `object`, if any.
         * @param interface_name A D-Bus interface name.
         * @virtual
         */
        vfunc_get_interface(interface_name: string): Gio.DBusInterface | null;

        /**
         * Gets the D-Bus interfaces associated with `object`.
         * @virtual
         */
        vfunc_get_interfaces(): Gio.DBusInterface[];

        /**
         * Gets the object path for `object`.
         * @virtual
         */
        vfunc_get_object_path(): string;

        /**
         * Signal handler for the {@link Gio.DBusObject.SignalSignatures.interface_added | Gio.DBusObject::interface-added} signal.
         * @param interface_ 
         * @virtual
         */
        vfunc_interface_added(interface_: Gio.DBusInterface): void;

        /**
         * Signal handler for the {@link Gio.DBusObject.SignalSignatures.interface_removed | Gio.DBusObject::interface-removed} signal.
         * @param interface_ 
         * @virtual
         */
        vfunc_interface_removed(interface_: Gio.DBusInterface): void;

        /**
         * Gets the {@link XApp.StatusIconInterface} instance for the D-Bus interface <link linkend="gdbus-interface-org-x-StatusIcon.top_of_page">org.x.StatusIcon</link> on `object`, if any.
         * @returns A {@link XApp.StatusIconInterface} that must be freed with `g_object_unref()` or `null` if `object` does not implement the interface.
         */
        get_status_icon_interface(): StatusIconInterface | null;
    }


    namespace ObjectSkeleton {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusObjectSkeleton.SignalSignatures {
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::status-icon-interface": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusObjectSkeleton.ConstructorProps, Gio.DBusObject.ConstructorProps, Object.ConstructorProps {}
    }

    /**
     * The {@link XApp.ObjectSkeleton} structure contains only private data and should only be accessed using the provided API.
     * @gir-type Class
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

        static ["new"](object_path: string): ObjectSkeleton;

        // Signals
        /** @signal */
        connect<K extends keyof ObjectSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ObjectSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ObjectSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ObjectSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ObjectSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ObjectSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Sets the {@link XApp.StatusIconInterface} instance for the D-Bus interface <link linkend="gdbus-interface-org-x-StatusIcon.top_of_page">org.x.StatusIcon</link> on `object`.
         * @param interface_ A {@link XApp.StatusIconInterface} or `null` to clear the interface.
         */
        set_status_icon_interface(interface_: StatusIconInterface | null): void;

        /**
         * The {@link XApp.StatusIconInterface} instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-x-StatusIcon.top_of_page">org.x.StatusIcon</link>, if any.
         * 
         * Connect to the {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal to get informed of property changes.
          * @category Inherited from XApp.Object
         */
        get status_icon_interface(): StatusIconInterface | null;
        set status_icon_interface(val: StatusIconInterface | null);

        /**
         * The {@link XApp.StatusIconInterface} instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-x-StatusIcon.top_of_page">org.x.StatusIcon</link>, if any.
         * 
         * Connect to the {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal to get informed of property changes.
          * @category Inherited from XApp.Object
         */
        get statusIconInterface(): StatusIconInterface | null;
        set statusIconInterface(val: StatusIconInterface | null);

        /**
         * Gets the D-Bus interface with name `interface_name` associated with
         * `object`, if any.
         * @param interface_name A D-Bus interface name.
         * @returns `null` if not found, otherwise a   {@link Gio.DBusInterface} that must be freed with `g_object_unref()`.
         */
        get_interface(interface_name: string): Gio.DBusInterface | null;

        /**
         * Gets the D-Bus interfaces associated with `object`.
         * @returns A list of {@link Gio.DBusInterface} instances.   The returned list must be freed by `g_list_free()` after each element has been freed   with `g_object_unref()`.
         */
        get_interfaces(): Gio.DBusInterface[];

        /**
         * Gets the object path for `object`.
         * @returns A string owned by `object`. Do not free.
         */
        get_object_path(): string;

        /**
         * Gets the D-Bus interface with name `interface_name` associated with
         * `object`, if any.
         * @param interface_name A D-Bus interface name.
         * @virtual
         */
        vfunc_get_interface(interface_name: string): Gio.DBusInterface | null;

        /**
         * Gets the D-Bus interfaces associated with `object`.
         * @virtual
         */
        vfunc_get_interfaces(): Gio.DBusInterface[];

        /**
         * Gets the object path for `object`.
         * @virtual
         */
        vfunc_get_object_path(): string;

        /**
         * Signal handler for the {@link Gio.DBusObject.SignalSignatures.interface_added | Gio.DBusObject::interface-added} signal.
         * @param interface_ 
         * @virtual
         */
        vfunc_interface_added(interface_: Gio.DBusInterface): void;

        /**
         * Signal handler for the {@link Gio.DBusObject.SignalSignatures.interface_removed | Gio.DBusObject::interface-removed} signal.
         * @param interface_ 
         * @virtual
         */
        vfunc_interface_removed(interface_: Gio.DBusInterface): void;

        /**
         * Gets the {@link XApp.StatusIconInterface} instance for the D-Bus interface <link linkend="gdbus-interface-org-x-StatusIcon.top_of_page">org.x.StatusIcon</link> on `object`, if any.
         * @returns A {@link XApp.StatusIconInterface} that must be freed with `g_object_unref()` or `null` if `object` does not implement the interface.
         */
        get_status_icon_interface(): StatusIconInterface | null;
    }


    namespace PreferencesWindow {
        // Signal signatures
        interface SignalSignatures extends Gtk.Window.SignalSignatures {
            /**
             * @signal
             * @action
             * @run-last
             */
            close: () => void;
            "notify::accept-focus": (pspec: GObject.ParamSpec) => void;
            "notify::application": (pspec: GObject.ParamSpec) => void;
            "notify::attached-to": (pspec: GObject.ParamSpec) => void;
            "notify::decorated": (pspec: GObject.ParamSpec) => void;
            "notify::default-height": (pspec: GObject.ParamSpec) => void;
            "notify::default-width": (pspec: GObject.ParamSpec) => void;
            "notify::deletable": (pspec: GObject.ParamSpec) => void;
            "notify::destroy-with-parent": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-map": (pspec: GObject.ParamSpec) => void;
            "notify::focus-visible": (pspec: GObject.ParamSpec) => void;
            "notify::gravity": (pspec: GObject.ParamSpec) => void;
            "notify::has-resize-grip": (pspec: GObject.ParamSpec) => void;
            "notify::has-toplevel-focus": (pspec: GObject.ParamSpec) => void;
            "notify::hide-titlebar-when-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::is-active": (pspec: GObject.ParamSpec) => void;
            "notify::is-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::mnemonics-visible": (pspec: GObject.ParamSpec) => void;
            "notify::modal": (pspec: GObject.ParamSpec) => void;
            "notify::resizable": (pspec: GObject.ParamSpec) => void;
            "notify::resize-grip-visible": (pspec: GObject.ParamSpec) => void;
            "notify::role": (pspec: GObject.ParamSpec) => void;
            "notify::screen": (pspec: GObject.ParamSpec) => void;
            "notify::skip-pager-hint": (pspec: GObject.ParamSpec) => void;
            "notify::skip-taskbar-hint": (pspec: GObject.ParamSpec) => void;
            "notify::startup-id": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::transient-for": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::type-hint": (pspec: GObject.ParamSpec) => void;
            "notify::urgency-hint": (pspec: GObject.ParamSpec) => void;
            "notify::window-position": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Window.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
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

        static ["new"](): PreferencesWindow;

        // Signals
        /** @signal */
        connect<K extends keyof PreferencesWindow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PreferencesWindow.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PreferencesWindow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PreferencesWindow.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PreferencesWindow.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PreferencesWindow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_close(): void;

        // Methods
        /**
         * Adds a button to the bottom action bar of the window. Where
         * the button is place will be determined by the {@link Gtk.PackType}. The
         * action bar will show automatically once at least one button is
         * added.
         * @param button a {@link Gtk.Widget} to add
         * @param pack_type a {@link Gtk.PackType} to use
         */
        add_button(button: Gtk.Widget, pack_type: Gtk.PackType): void;

        /**
         * Adds a page to the window. The page is identified by name. The
         * title will be used in the sidebar so should be short. The sidebar
         * will show automatically once at least two pages are added.
         * @param widget a {@link Gtk.Widget} to add
         * @param name the name for the page
         * @param title a human-readable title for the page
         */
        add_page(widget: Gtk.Widget, name: string, title: string): void;
    }


    namespace StackSidebar {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            "notify::stack": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Bin.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            stack: Gtk.Stack | null;
        }
    }

    /**
     * @gir-type Class
     */
    class StackSidebar extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<StackSidebar>;

        // Properties
        get stack(): Gtk.Stack | null;
        set stack(val: Gtk.Stack | null);

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

        static ["new"](): StackSidebar;

        // Signals
        /** @signal */
        connect<K extends keyof StackSidebar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StackSidebar.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof StackSidebar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StackSidebar.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof StackSidebar.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StackSidebar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Retrieves the stack.
         * See `xapp_stack_sidebar_set_stack()`.
         * @returns the associated {@link Gtk.Stack} or     `null` if none has been set explicitly
         */
        get_stack(): Gtk.Stack | null;

        /**
         * Set the {@link Gtk.Stack} associated with this {@link XApp.StackSidebar}.
         * 
         * The sidebar widget will automatically update according to the order
         * (packing) and items within the given {@link Gtk.Stack}.
         * @param stack a {@link Gtk.Stack}
         */
        set_stack(stack: Gtk.Stack): void;
    }


    namespace StatusIcon {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Gets emitted when the user activates the status icon.  If the XAppStatusIcon:primary-menu or
             * XAppStatusIcon:secondary-menu is not `null`, this signal is skipped for the respective button
             * presses.  A middle button click will always send this signal when pressed.
             * @signal
             * @action
             * @run-first
             */
            activate: (arg0: number, arg1: number) => void;
            /**
             * Gets emitted when there is a button press received from an applet
             * @signal
             * @action
             * @run-last
             */
            "button-press-event": (arg0: number, arg1: number, arg2: number, arg3: number, arg4: number) => void;
            /**
             * Gets emitted when there is a button release received from an applet
             * @signal
             * @action
             * @run-last
             */
            "button-release-event": (arg0: number, arg1: number, arg2: number, arg3: number, arg4: number) => void;
            /**
             * Gets emitted when the user uses the mouse scroll wheel over the status icon.
             * For the most part, amounts will always be 1, unless an applet supports smooth
             * scrolling.  Generally the direction value is most important.
             * @signal
             * @action
             * @run-first
             */
            "scroll-event": (arg0: number, arg1: ScrollDirection, arg2: number) => void;
            /**
             * Gets emitted when the state of the icon changes. If you wish
             * to react to changes in how the status icon is being handled
             * (perhaps to alter the menu or other click behavior), you should
             * connect to this - see {@link XApp.StatusIconState} for more details.
             * @signal
             * @action
             * @run-first
             */
            "state-changed": (arg0: StatusIconState) => void;
            "notify::icon-size": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::primary-menu": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-menu": (pspec: GObject.ParamSpec) => void;
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

    /**
     * @gir-type Class
     */
    class StatusIcon extends GObject.Object {
        static $gtype: GObject.GType<StatusIcon>;

        // Properties
        /**
         * The icon size that is preferred by icon monitor/host - this is usually a product
         * of some calculation based on the panel size.  It can be used by the client to size
         * an icon to be saved as a file and its path sent to the host.
         * 
         * If this value is 0 it has not been set, and its value can be unreliable if the host
         * has multiple `XAppStatusIconMonitors` active.
         * @default 0
         */
        get icon_size(): number;
        set icon_size(val: number);

        /**
         * The icon size that is preferred by icon monitor/host - this is usually a product
         * of some calculation based on the panel size.  It can be used by the client to size
         * an icon to be saved as a file and its path sent to the host.
         * 
         * If this value is 0 it has not been set, and its value can be unreliable if the host
         * has multiple `XAppStatusIconMonitors` active.
         * @default 0
         */
        get iconSize(): number;
        set iconSize(val: number);

        /**
         * The name of the icon for sorting purposes. If this is in the form of 'org.x.StatusIcon.foo`
         * and set immediately upon creation of the icon, it will also attempt to own this dbus name;
         * this can be useful in sandboxed environments where a well-defined name is required. If
         * additional icons are created, only the name given to the initial one will be used for dbus,
         * though different names can still affect the sort order. This is set to the value of
         * `g_get_prgname()` if no other name is provided.
         * @default null
         */
        get name(): string;
        set name(val: string);

        /**
         * A {@link Gtk.Menu} to use when requested by the remote monitor via a left (or primary) click.
         * 
         * When this property is not `null`, the menu will be automatically positioned and
         * displayed during a primary button release.
         * 
         * When this property IS `null`, the {@link XApp.StatusIcon.SignalSignatures.activate | XApp.StatusIcon::activate} will be sent for primary
         * button presses.
         * 
         * In both cases, the {@link XApp.StatusIcon.SignalSignatures.button_press_event | XApp.StatusIcon::button-press-event} and {@link XApp.StatusIcon.SignalSignatures.button_release_events | XApp.StatusIcon::button-release-events}
         * will be fired like normal.
         * 
         * Setting this will remove any floating reference to the menu and assume ownership.
         * As a result, it is not necessary to maintain a reference to it in the parent
         * application (or unref it when finished with it - if you wish to replace the menu,
         * simply call this method again with a new menu.
         * 
         * The same {@link Gtk.Menu} widget can be set as both the primary and secondary.
         */
        get primary_menu(): Gtk.Widget;
        set primary_menu(val: Gtk.Widget);

        /**
         * A {@link Gtk.Menu} to use when requested by the remote monitor via a left (or primary) click.
         * 
         * When this property is not `null`, the menu will be automatically positioned and
         * displayed during a primary button release.
         * 
         * When this property IS `null`, the {@link XApp.StatusIcon.SignalSignatures.activate | XApp.StatusIcon::activate} will be sent for primary
         * button presses.
         * 
         * In both cases, the {@link XApp.StatusIcon.SignalSignatures.button_press_event | XApp.StatusIcon::button-press-event} and {@link XApp.StatusIcon.SignalSignatures.button_release_events | XApp.StatusIcon::button-release-events}
         * will be fired like normal.
         * 
         * Setting this will remove any floating reference to the menu and assume ownership.
         * As a result, it is not necessary to maintain a reference to it in the parent
         * application (or unref it when finished with it - if you wish to replace the menu,
         * simply call this method again with a new menu.
         * 
         * The same {@link Gtk.Menu} widget can be set as both the primary and secondary.
         */
        get primaryMenu(): Gtk.Widget;
        set primaryMenu(val: Gtk.Widget);

        /**
         * A {@link Gtk.Menu} to use when requested by the remote monitor via a right (or secondary) click.
         * 
         * When this property is not `null`, the menu will be automatically positioned and
         * displayed during a secondary button release.
         * 
         * When this property IS `null`, the {@link XApp.StatusIcon.SignalSignatures.activate | XApp.StatusIcon::activate} will be sent for secondary
         * button presses.
         * 
         * In both cases, the {@link XApp.StatusIcon.SignalSignatures.button_press_event | XApp.StatusIcon::button-press-event} and {@link XApp.StatusIcon.SignalSignatures.button_release_events | XApp.StatusIcon::button-release-events}
         * will be fired like normal.
         * 
         * Setting this will remove any floating reference to the menu and assume ownership.
         * As a result, it is not necessary to maintain a reference to it in the parent
         * application (or unref it when finished with it - if you wish to replace the menu,
         * simply call this method again with a new menu.
         * 
         * The same {@link Gtk.Menu} widget can be set as both the primary and secondary.
         */
        get secondary_menu(): Gtk.Widget;
        set secondary_menu(val: Gtk.Widget);

        /**
         * A {@link Gtk.Menu} to use when requested by the remote monitor via a right (or secondary) click.
         * 
         * When this property is not `null`, the menu will be automatically positioned and
         * displayed during a secondary button release.
         * 
         * When this property IS `null`, the {@link XApp.StatusIcon.SignalSignatures.activate | XApp.StatusIcon::activate} will be sent for secondary
         * button presses.
         * 
         * In both cases, the {@link XApp.StatusIcon.SignalSignatures.button_press_event | XApp.StatusIcon::button-press-event} and {@link XApp.StatusIcon.SignalSignatures.button_release_events | XApp.StatusIcon::button-release-events}
         * will be fired like normal.
         * 
         * Setting this will remove any floating reference to the menu and assume ownership.
         * As a result, it is not necessary to maintain a reference to it in the parent
         * application (or unref it when finished with it - if you wish to replace the menu,
         * simply call this method again with a new menu.
         * 
         * The same {@link Gtk.Menu} widget can be set as both the primary and secondary.
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

        static ["new"](): StatusIcon;

        static new_with_name(name: string): StatusIcon;

        // Signals
        /** @signal */
        connect<K extends keyof StatusIcon.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StatusIcon.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof StatusIcon.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StatusIcon.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof StatusIcon.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StatusIcon.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Looks for the existence of any active `XAppStatusIconMonitors` on the bus.
         */
        static any_monitors(): boolean;

        // Methods
        /**
         * @returns The desired icon size - usually set by the host based on panel size. This is not what it's guaranteed to get, and this is really only useful when receiving absolute icon paths from the client app.
         */
        get_icon_size(): number;

        /**
         * Returns a pointer to a {@link Gtk.Menu} that was set previously for the
         * primary mouse button.  If no menu was set, this returns `null`.
         * @returns the {@link Gtk.Menu} or `null` if none was set.
         */
        get_primary_menu(): Gtk.Widget;

        /**
         * Returns a pointer to a {@link Gtk.Menu} that was set previously for the
         * secondary mouse button.  If no menu was set, this returns `null`.
         * @returns the {@link Gtk.Menu} or `null` if none was set.
         */
        get_secondary_menu(): Gtk.Widget;

        /**
         * Gets the current {@link XApp.StatusIconState} of icon. The state is determined by whether
         * the icon is being displayed by an `XAppStatusMonitor` client, a fallback tray icon,
         * or not being displayed at all.
         * 
         * See {@link XApp.StatusIconState} for more details.
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
         * those provided by a {@link XApp.StatusIcon.SignalSignatures.button_release_event | XApp.StatusIcon::button-release-event}.
         * @param menu A {@link Gtk.Menu} to display when the primary mouse button is released.
         * @param x The x anchor position for the menu.
         * @param y The y anchor position for the menu.
         * @param button The button used to initiate this action (or 0)
         * @param _time The event time (or 0)
         * @param panel_position The {@link Gtk.PositionType} for the position of the icon.
         */
        popup_menu(menu: Gtk.Menu | null, x: number, y: number, button: number, _time: number, panel_position: number): void;

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
        set_metadata(metadata: string | null): void;

        /**
         * Sets the status icon name. This is not shown to users.
         * @param name a name (this defaults to the name of the application, if not set)
         */
        set_name(name: string): void;

        /**
         * See the {@link XApp.StatusIcon.primary_menu} property for details
         * @param menu A {@link Gtk.Menu} to display when the primary mouse button is released.
         */
        set_primary_menu(menu: Gtk.Menu | null): void;

        /**
         * See the {@link XApp.StatusIcon.secondary_menu} property for details
         * @param menu A {@link Gtk.Menu} to display when the primary mouse button is released.
         */
        set_secondary_menu(menu: Gtk.Menu | null): void;

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
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::icon-size": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::metadata": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::primary-menu-is-open": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-menu-is-open": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, StatusIconInterface.ConstructorProps {}
    }

    /**
     * The {@link XApp.StatusIconInterfaceProxy} structure contains only private data and should only be accessed using the provided API.
     * @gir-type Class
     */
    class StatusIconInterfaceProxy extends Gio.DBusProxy implements Gio.AsyncInitable<StatusIconInterfaceProxy>, Gio.DBusInterface, Gio.Initable, StatusIconInterface {
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

        static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): StatusIconInterfaceProxy;

        // Conflicted with Gio.DBusProxy.new_for_bus_sync
        static new_for_bus_sync(...args: never[]): any;

        static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): StatusIconInterfaceProxy;

        // Conflicted with Gio.DBusProxy.new_sync
        static new_sync(...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof StatusIconInterfaceProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StatusIconInterfaceProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof StatusIconInterfaceProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StatusIconInterfaceProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof StatusIconInterfaceProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StatusIconInterfaceProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-x-StatusIcon.top_of_page">org.x.StatusIcon</link>. See `g_dbus_proxy_new()` for more details.
         * 
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `xapp_status_icon_interface_proxy_new_finish()` to get the result of the operation.
         * 
         * See `xapp_status_icon_interface_proxy_new_sync()` for the synchronous, blocking version of this constructor.
         * @param connection A {@link Gio.DBusConnection}.
         * @param flags Flags from the {@link Gio.DBusProxyFlags} enumeration.
         * @param name A bus name (well-known or unique) or `null` if `connection` is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<StatusIconInterfaceProxy> | null): void;

        /**
         * @param args 
         */
    // Conflicted with Gio.DBusProxy.new
        static ["new"](...args: never[]): any;

        /**
         * Like `xapp_status_icon_interface_proxy_new()` but takes a {@link Gio.BusType} instead of a {@link Gio.DBusConnection}.
         * 
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `xapp_status_icon_interface_proxy_new_for_bus_finish()` to get the result of the operation.
         * 
         * See `xapp_status_icon_interface_proxy_new_for_bus_sync()` for the synchronous, blocking version of this constructor.
         * @param bus_type A {@link Gio.BusType}.
         * @param flags Flags from the {@link Gio.DBusProxyFlags} enumeration.
         * @param name A bus name (well-known or unique).
         * @param object_path An object path.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<StatusIconInterfaceProxy> | null): void;

        /**
         * @param args 
         */
    // Conflicted with Gio.DBusProxy.new_for_bus
        static new_for_bus(...args: never[]): any;

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.IconName">"IconName"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
          * @category Inherited from XApp.StatusIconInterface
         */
        get icon_name(): string | null;
        set icon_name(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.IconName">"IconName"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
          * @category Inherited from XApp.StatusIconInterface
         */
        get iconName(): string | null;
        set iconName(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.IconSize">"IconSize"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         * @default 0
          * @category Inherited from XApp.StatusIconInterface
         */
        get icon_size(): number;
        set icon_size(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.IconSize">"IconSize"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         * @default 0
          * @category Inherited from XApp.StatusIconInterface
         */
        get iconSize(): number;
        set iconSize(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.Label">"Label"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
          * @category Inherited from XApp.StatusIconInterface
         */
        get label(): string | null;
        set label(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.Metadata">"Metadata"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
          * @category Inherited from XApp.StatusIconInterface
         */
        get metadata(): string | null;
        set metadata(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.Name">"Name"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
          * @category Inherited from XApp.StatusIconInterface
         */
        get name(): string | null;
        set name(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.PrimaryMenuIsOpen">"PrimaryMenuIsOpen"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default false
          * @category Inherited from XApp.StatusIconInterface
         */
        get primary_menu_is_open(): boolean;
        set primary_menu_is_open(val: boolean);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.PrimaryMenuIsOpen">"PrimaryMenuIsOpen"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default false
          * @category Inherited from XApp.StatusIconInterface
         */
        get primaryMenuIsOpen(): boolean;
        set primaryMenuIsOpen(val: boolean);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.SecondaryMenuIsOpen">"SecondaryMenuIsOpen"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default false
          * @category Inherited from XApp.StatusIconInterface
         */
        get secondary_menu_is_open(): boolean;
        set secondary_menu_is_open(val: boolean);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.SecondaryMenuIsOpen">"SecondaryMenuIsOpen"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default false
          * @category Inherited from XApp.StatusIconInterface
         */
        get secondaryMenuIsOpen(): boolean;
        set secondaryMenuIsOpen(val: boolean);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.TooltipText">"TooltipText"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
          * @category Inherited from XApp.StatusIconInterface
         */
        get tooltip_text(): string | null;
        set tooltip_text(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.TooltipText">"TooltipText"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
          * @category Inherited from XApp.StatusIconInterface
         */
        get tooltipText(): string | null;
        set tooltipText(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.Visible">"Visible"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default false
          * @category Inherited from XApp.StatusIconInterface
         */
        get visible(): boolean;
        set visible(val: boolean);

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns `true` if successful. If an error has occurred, this function will return `false` and set `error` appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or `null` on error.
         * @param res the {@link Gio.AsyncResult} from the callback
         * @returns a newly created {@link GObject.Object},      or `null` on error. Free with `g_object_unref()`.
         */
        new_finish(res: Gio.AsyncResult): StatusIconInterfaceProxy;

        /**
         * @param args 
         */
        // Conflicted with Gio.DBusProxy.new_finish
        new_finish(...args: never[]): any;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @virtual
         */
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @returns A {@link Gio.DBusObject} or `null`. The returned reference should be freed with `g_object_unref()`.
         */
        get_object(): Gio.DBusObject | null;

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         */
        set_object(object: Gio.DBusObject | null): void;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @virtual
         */
        vfunc_dup_object(): Gio.DBusObject | null;

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         * @virtual
         */
        vfunc_set_object(object: Gio.DBusObject | null): void;

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
        init(cancellable: Gio.Cancellable | null): boolean;

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
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonPress">ButtonPress()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `xapp_status_icon_interface_call_button_press_finish()` to get the result of the operation.
         * 
         * See `xapp_status_icon_interface_call_button_press_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_button_press(arg_x: number, arg_y: number, arg_button: number, arg_time: number, arg_panel_position: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonPress">ButtonPress()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `xapp_status_icon_interface_call_button_press_finish()` to get the result of the operation.
         * 
         * See `xapp_status_icon_interface_call_button_press_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_button_press(arg_x: number, arg_y: number, arg_button: number, arg_time: number, arg_panel_position: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonPress">ButtonPress()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `xapp_status_icon_interface_call_button_press_finish()` to get the result of the operation.
         * 
         * See `xapp_status_icon_interface_call_button_press_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_button_press(arg_x: number, arg_y: number, arg_button: number, arg_time: number, arg_panel_position: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes an operation started with `xapp_status_icon_interface_call_button_press()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `xapp_status_icon_interface_call_button_press()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_button_press_finish(res: Gio.AsyncResult): boolean;

        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonPress">ButtonPress()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         * 
         * See `xapp_status_icon_interface_call_button_press()` for the asynchronous version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_button_press_sync(arg_x: number, arg_y: number, arg_button: number, arg_time: number, arg_panel_position: number, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonRelease">ButtonRelease()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `xapp_status_icon_interface_call_button_release_finish()` to get the result of the operation.
         * 
         * See `xapp_status_icon_interface_call_button_release_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_button_release(arg_x: number, arg_y: number, arg_button: number, arg_time: number, arg_panel_position: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonRelease">ButtonRelease()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `xapp_status_icon_interface_call_button_release_finish()` to get the result of the operation.
         * 
         * See `xapp_status_icon_interface_call_button_release_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_button_release(arg_x: number, arg_y: number, arg_button: number, arg_time: number, arg_panel_position: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonRelease">ButtonRelease()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `xapp_status_icon_interface_call_button_release_finish()` to get the result of the operation.
         * 
         * See `xapp_status_icon_interface_call_button_release_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_button_release(arg_x: number, arg_y: number, arg_button: number, arg_time: number, arg_panel_position: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes an operation started with `xapp_status_icon_interface_call_button_release()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `xapp_status_icon_interface_call_button_release()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_button_release_finish(res: Gio.AsyncResult): boolean;

        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonRelease">ButtonRelease()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         * 
         * See `xapp_status_icon_interface_call_button_release()` for the asynchronous version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_button_release_sync(arg_x: number, arg_y: number, arg_button: number, arg_time: number, arg_panel_position: number, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.Scroll">Scroll()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `xapp_status_icon_interface_call_scroll_finish()` to get the result of the operation.
         * 
         * See `xapp_status_icon_interface_call_scroll_sync()` for the synchronous, blocking version of this method.
         * @param arg_delta Argument to pass with the method invocation.
         * @param arg_orientation Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_scroll(arg_delta: number, arg_orientation: number, arg_time: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.Scroll">Scroll()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `xapp_status_icon_interface_call_scroll_finish()` to get the result of the operation.
         * 
         * See `xapp_status_icon_interface_call_scroll_sync()` for the synchronous, blocking version of this method.
         * @param arg_delta Argument to pass with the method invocation.
         * @param arg_orientation Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_scroll(arg_delta: number, arg_orientation: number, arg_time: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.Scroll">Scroll()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `xapp_status_icon_interface_call_scroll_finish()` to get the result of the operation.
         * 
         * See `xapp_status_icon_interface_call_scroll_sync()` for the synchronous, blocking version of this method.
         * @param arg_delta Argument to pass with the method invocation.
         * @param arg_orientation Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_scroll(arg_delta: number, arg_orientation: number, arg_time: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes an operation started with `xapp_status_icon_interface_call_scroll()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `xapp_status_icon_interface_call_scroll()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_scroll_finish(res: Gio.AsyncResult): boolean;

        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.Scroll">Scroll()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         * 
         * See `xapp_status_icon_interface_call_scroll()` for the asynchronous version of this method.
         * @param arg_delta Argument to pass with the method invocation.
         * @param arg_orientation Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_scroll_sync(arg_delta: number, arg_orientation: number, arg_time: number, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-x-StatusIcon.ButtonPress">ButtonPress()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         * 
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_button_press(invocation: Gio.DBusMethodInvocation): void;

        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-x-StatusIcon.ButtonRelease">ButtonRelease()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         * 
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_button_release(invocation: Gio.DBusMethodInvocation): void;

        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-x-StatusIcon.Scroll">Scroll()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         * 
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_scroll(invocation: Gio.DBusMethodInvocation): void;

        /**
         * Handler for the {@link XApp.StatusIconInterface.SignalSignatures.handle_button_press | XApp.StatusIconInterface::handle-button-press} signal.
         * @param invocation 
         * @param arg_x 
         * @param arg_y 
         * @param arg_button 
         * @param arg_time 
         * @param arg_panel_position 
         * @virtual
         */
        vfunc_handle_button_press(invocation: Gio.DBusMethodInvocation, arg_x: number, arg_y: number, arg_button: number, arg_time: number, arg_panel_position: number): boolean;

        /**
         * Handler for the {@link XApp.StatusIconInterface.SignalSignatures.handle_button_release | XApp.StatusIconInterface::handle-button-release} signal.
         * @param invocation 
         * @param arg_x 
         * @param arg_y 
         * @param arg_button 
         * @param arg_time 
         * @param arg_panel_position 
         * @virtual
         */
        vfunc_handle_button_release(invocation: Gio.DBusMethodInvocation, arg_x: number, arg_y: number, arg_button: number, arg_time: number, arg_panel_position: number): boolean;

        /**
         * Handler for the {@link XApp.StatusIconInterface.SignalSignatures.handle_scroll | XApp.StatusIconInterface::handle-scroll} signal.
         * @param invocation 
         * @param arg_delta 
         * @param arg_orientation 
         * @param arg_time 
         * @virtual
         */
        vfunc_handle_scroll(invocation: Gio.DBusMethodInvocation, arg_delta: number, arg_orientation: number, arg_time: number): boolean;
    }


    namespace StatusIconInterfaceSkeleton {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::icon-size": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::metadata": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::primary-menu-is-open": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-menu-is-open": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, Gio.DBusInterface.ConstructorProps, StatusIconInterface.ConstructorProps {}
    }

    /**
     * The {@link XApp.StatusIconInterfaceSkeleton} structure contains only private data and should only be accessed using the provided API.
     * @gir-type Class
     */
    class StatusIconInterfaceSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, StatusIconInterface {
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

        static ["new"](): StatusIconInterfaceSkeleton;

        // Signals
        /** @signal */
        connect<K extends keyof StatusIconInterfaceSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StatusIconInterfaceSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof StatusIconInterfaceSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StatusIconInterfaceSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof StatusIconInterfaceSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StatusIconInterfaceSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.IconName">"IconName"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
          * @category Inherited from XApp.StatusIconInterface
         */
        get icon_name(): string | null;
        set icon_name(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.IconName">"IconName"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
          * @category Inherited from XApp.StatusIconInterface
         */
        get iconName(): string | null;
        set iconName(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.IconSize">"IconSize"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         * @default 0
          * @category Inherited from XApp.StatusIconInterface
         */
        get icon_size(): number;
        set icon_size(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.IconSize">"IconSize"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         * @default 0
          * @category Inherited from XApp.StatusIconInterface
         */
        get iconSize(): number;
        set iconSize(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.Label">"Label"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
          * @category Inherited from XApp.StatusIconInterface
         */
        get label(): string | null;
        set label(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.Metadata">"Metadata"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
          * @category Inherited from XApp.StatusIconInterface
         */
        get metadata(): string | null;
        set metadata(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.Name">"Name"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
          * @category Inherited from XApp.StatusIconInterface
         */
        get name(): string | null;
        set name(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.PrimaryMenuIsOpen">"PrimaryMenuIsOpen"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default false
          * @category Inherited from XApp.StatusIconInterface
         */
        get primary_menu_is_open(): boolean;
        set primary_menu_is_open(val: boolean);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.PrimaryMenuIsOpen">"PrimaryMenuIsOpen"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default false
          * @category Inherited from XApp.StatusIconInterface
         */
        get primaryMenuIsOpen(): boolean;
        set primaryMenuIsOpen(val: boolean);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.SecondaryMenuIsOpen">"SecondaryMenuIsOpen"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default false
          * @category Inherited from XApp.StatusIconInterface
         */
        get secondary_menu_is_open(): boolean;
        set secondary_menu_is_open(val: boolean);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.SecondaryMenuIsOpen">"SecondaryMenuIsOpen"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default false
          * @category Inherited from XApp.StatusIconInterface
         */
        get secondaryMenuIsOpen(): boolean;
        set secondaryMenuIsOpen(val: boolean);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.TooltipText">"TooltipText"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
          * @category Inherited from XApp.StatusIconInterface
         */
        get tooltip_text(): string | null;
        set tooltip_text(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.TooltipText">"TooltipText"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
          * @category Inherited from XApp.StatusIconInterface
         */
        get tooltipText(): string | null;
        set tooltipText(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.Visible">"Visible"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default false
          * @category Inherited from XApp.StatusIconInterface
         */
        get visible(): boolean;
        set visible(val: boolean);

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @returns A {@link Gio.DBusObject} or `null`. The returned reference should be freed with `g_object_unref()`.
         */
        get_object(): Gio.DBusObject | null;

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         */
        set_object(object: Gio.DBusObject | null): void;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @virtual
         */
        vfunc_dup_object(): Gio.DBusObject | null;

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         * @virtual
         */
        vfunc_set_object(object: Gio.DBusObject | null): void;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonPress">ButtonPress()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `xapp_status_icon_interface_call_button_press_finish()` to get the result of the operation.
         * 
         * See `xapp_status_icon_interface_call_button_press_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_button_press(arg_x: number, arg_y: number, arg_button: number, arg_time: number, arg_panel_position: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonPress">ButtonPress()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `xapp_status_icon_interface_call_button_press_finish()` to get the result of the operation.
         * 
         * See `xapp_status_icon_interface_call_button_press_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_button_press(arg_x: number, arg_y: number, arg_button: number, arg_time: number, arg_panel_position: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonPress">ButtonPress()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `xapp_status_icon_interface_call_button_press_finish()` to get the result of the operation.
         * 
         * See `xapp_status_icon_interface_call_button_press_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_button_press(arg_x: number, arg_y: number, arg_button: number, arg_time: number, arg_panel_position: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes an operation started with `xapp_status_icon_interface_call_button_press()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `xapp_status_icon_interface_call_button_press()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_button_press_finish(res: Gio.AsyncResult): boolean;

        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonPress">ButtonPress()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         * 
         * See `xapp_status_icon_interface_call_button_press()` for the asynchronous version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_button_press_sync(arg_x: number, arg_y: number, arg_button: number, arg_time: number, arg_panel_position: number, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonRelease">ButtonRelease()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `xapp_status_icon_interface_call_button_release_finish()` to get the result of the operation.
         * 
         * See `xapp_status_icon_interface_call_button_release_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_button_release(arg_x: number, arg_y: number, arg_button: number, arg_time: number, arg_panel_position: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonRelease">ButtonRelease()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `xapp_status_icon_interface_call_button_release_finish()` to get the result of the operation.
         * 
         * See `xapp_status_icon_interface_call_button_release_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_button_release(arg_x: number, arg_y: number, arg_button: number, arg_time: number, arg_panel_position: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonRelease">ButtonRelease()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `xapp_status_icon_interface_call_button_release_finish()` to get the result of the operation.
         * 
         * See `xapp_status_icon_interface_call_button_release_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_button_release(arg_x: number, arg_y: number, arg_button: number, arg_time: number, arg_panel_position: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes an operation started with `xapp_status_icon_interface_call_button_release()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `xapp_status_icon_interface_call_button_release()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_button_release_finish(res: Gio.AsyncResult): boolean;

        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonRelease">ButtonRelease()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         * 
         * See `xapp_status_icon_interface_call_button_release()` for the asynchronous version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_button_release_sync(arg_x: number, arg_y: number, arg_button: number, arg_time: number, arg_panel_position: number, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.Scroll">Scroll()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `xapp_status_icon_interface_call_scroll_finish()` to get the result of the operation.
         * 
         * See `xapp_status_icon_interface_call_scroll_sync()` for the synchronous, blocking version of this method.
         * @param arg_delta Argument to pass with the method invocation.
         * @param arg_orientation Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_scroll(arg_delta: number, arg_orientation: number, arg_time: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.Scroll">Scroll()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `xapp_status_icon_interface_call_scroll_finish()` to get the result of the operation.
         * 
         * See `xapp_status_icon_interface_call_scroll_sync()` for the synchronous, blocking version of this method.
         * @param arg_delta Argument to pass with the method invocation.
         * @param arg_orientation Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_scroll(arg_delta: number, arg_orientation: number, arg_time: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.Scroll">Scroll()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `xapp_status_icon_interface_call_scroll_finish()` to get the result of the operation.
         * 
         * See `xapp_status_icon_interface_call_scroll_sync()` for the synchronous, blocking version of this method.
         * @param arg_delta Argument to pass with the method invocation.
         * @param arg_orientation Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_scroll(arg_delta: number, arg_orientation: number, arg_time: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes an operation started with `xapp_status_icon_interface_call_scroll()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `xapp_status_icon_interface_call_scroll()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_scroll_finish(res: Gio.AsyncResult): boolean;

        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.Scroll">Scroll()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         * 
         * See `xapp_status_icon_interface_call_scroll()` for the asynchronous version of this method.
         * @param arg_delta Argument to pass with the method invocation.
         * @param arg_orientation Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_scroll_sync(arg_delta: number, arg_orientation: number, arg_time: number, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-x-StatusIcon.ButtonPress">ButtonPress()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         * 
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_button_press(invocation: Gio.DBusMethodInvocation): void;

        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-x-StatusIcon.ButtonRelease">ButtonRelease()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         * 
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_button_release(invocation: Gio.DBusMethodInvocation): void;

        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-x-StatusIcon.Scroll">Scroll()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         * 
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_scroll(invocation: Gio.DBusMethodInvocation): void;

        /**
         * Handler for the {@link XApp.StatusIconInterface.SignalSignatures.handle_button_press | XApp.StatusIconInterface::handle-button-press} signal.
         * @param invocation 
         * @param arg_x 
         * @param arg_y 
         * @param arg_button 
         * @param arg_time 
         * @param arg_panel_position 
         * @virtual
         */
        vfunc_handle_button_press(invocation: Gio.DBusMethodInvocation, arg_x: number, arg_y: number, arg_button: number, arg_time: number, arg_panel_position: number): boolean;

        /**
         * Handler for the {@link XApp.StatusIconInterface.SignalSignatures.handle_button_release | XApp.StatusIconInterface::handle-button-release} signal.
         * @param invocation 
         * @param arg_x 
         * @param arg_y 
         * @param arg_button 
         * @param arg_time 
         * @param arg_panel_position 
         * @virtual
         */
        vfunc_handle_button_release(invocation: Gio.DBusMethodInvocation, arg_x: number, arg_y: number, arg_button: number, arg_time: number, arg_panel_position: number): boolean;

        /**
         * Handler for the {@link XApp.StatusIconInterface.SignalSignatures.handle_scroll | XApp.StatusIconInterface::handle-scroll} signal.
         * @param invocation 
         * @param arg_delta 
         * @param arg_orientation 
         * @param arg_time 
         * @virtual
         */
        vfunc_handle_scroll(invocation: Gio.DBusMethodInvocation, arg_delta: number, arg_orientation: number, arg_time: number): boolean;
    }


    namespace StatusIconMonitor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * This signal is emitted by the monitor when it has discovered a new
             * {@link XApp.StatusIcon} on the bus.
             * @signal
             * @action
             * @run-last
             */
            "icon-added": (arg0: StatusIconInterfaceProxy) => void;
            /**
             * This signal is emitted by the monitor when an {@link XApp.StatusIcon} has disappeared
             * from the bus.
             * @signal
             * @action
             * @run-last
             */
            "icon-removed": (arg0: StatusIconInterfaceProxy) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
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

        static ["new"](): StatusIconMonitor;

        // Signals
        /** @signal */
        connect<K extends keyof StatusIconMonitor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StatusIconMonitor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof StatusIconMonitor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StatusIconMonitor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof StatusIconMonitor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StatusIconMonitor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * List known icon proxies.
         * @returns a {@link GLib.List} of icons
         */
        list_icons(): StatusIconMonitor[];
    }


    namespace StyleManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::widget": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            widget: Gtk.Widget;
        }
    }

    /**
     * @gir-type Class
     */
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

        static ["new"](): StyleManager;

        // Signals
        /** @signal */
        connect<K extends keyof StyleManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StyleManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof StyleManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StyleManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof StyleManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StyleManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the {@link Gtk.Widget} the style manager currently applies styles to.
         * @returns the {@link Gtk.Widget} previously set on the style manager, or `null`.
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
         * Sets the {@link Gtk.Widget} the style manager will apply styles to.
         * @param widget the {@link Gtk.Widget} that the style manager will apply styles to, or `null` to unset the current widget and remove all styles currently set by this {@link XApp.StyleManager} instance.
         */
        set_widget(widget: Gtk.Widget): void;
    }


    namespace SwitcherooControlProxy {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::gpus": (pspec: GObject.ParamSpec) => void;
            "notify::has-dual-gpu": (pspec: GObject.ParamSpec) => void;
            "notify::num-gpus": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps, SwitcherooControl.ConstructorProps {}
    }

    /**
     * The {@link XApp.SwitcherooControlProxy} structure contains only private data and should only be accessed using the provided API.
     * @gir-type Class
     */
    class SwitcherooControlProxy extends Gio.DBusProxy implements Gio.AsyncInitable<SwitcherooControlProxy>, Gio.DBusInterface, Gio.Initable, SwitcherooControl {
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

        static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): SwitcherooControlProxy;

        // Conflicted with Gio.DBusProxy.new_for_bus_sync
        static new_for_bus_sync(...args: never[]): any;

        static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): SwitcherooControlProxy;

        // Conflicted with Gio.DBusProxy.new_sync
        static new_sync(...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof SwitcherooControlProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SwitcherooControlProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SwitcherooControlProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SwitcherooControlProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SwitcherooControlProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SwitcherooControlProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-net-hadess-SwitcherooControl.top_of_page">net.hadess.SwitcherooControl</link>. See `g_dbus_proxy_new()` for more details.
         * 
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `xapp_switcheroo_control_proxy_new_finish()` to get the result of the operation.
         * 
         * See `xapp_switcheroo_control_proxy_new_sync()` for the synchronous, blocking version of this constructor.
         * @param connection A {@link Gio.DBusConnection}.
         * @param flags Flags from the {@link Gio.DBusProxyFlags} enumeration.
         * @param name A bus name (well-known or unique) or `null` if `connection` is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<SwitcherooControlProxy> | null): void;

        /**
         * @param args 
         */
    // Conflicted with Gio.DBusProxy.new
        static ["new"](...args: never[]): any;

        /**
         * Like `xapp_switcheroo_control_proxy_new()` but takes a {@link Gio.BusType} instead of a {@link Gio.DBusConnection}.
         * 
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `xapp_switcheroo_control_proxy_new_for_bus_finish()` to get the result of the operation.
         * 
         * See `xapp_switcheroo_control_proxy_new_for_bus_sync()` for the synchronous, blocking version of this constructor.
         * @param bus_type A {@link Gio.BusType}.
         * @param flags Flags from the {@link Gio.DBusProxyFlags} enumeration.
         * @param name A bus name (well-known or unique).
         * @param object_path An object path.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<SwitcherooControlProxy> | null): void;

        /**
         * @param args 
         */
    // Conflicted with Gio.DBusProxy.new_for_bus
        static new_for_bus(...args: never[]): any;

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-net-hadess-SwitcherooControl.GPUs">"GPUs"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
          * @category Inherited from XApp.SwitcherooControl
         */
        get gpus(): GLib.Variant | null;
        set gpus(val: GLib.Variant | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-net-hadess-SwitcherooControl.HasDualGpu">"HasDualGpu"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default false
          * @category Inherited from XApp.SwitcherooControl
         */
        get has_dual_gpu(): boolean;
        set has_dual_gpu(val: boolean);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-net-hadess-SwitcherooControl.HasDualGpu">"HasDualGpu"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default false
          * @category Inherited from XApp.SwitcherooControl
         */
        get hasDualGpu(): boolean;
        set hasDualGpu(val: boolean);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-net-hadess-SwitcherooControl.NumGPUs">"NumGPUs"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default 0
          * @category Inherited from XApp.SwitcherooControl
         */
        get num_gpus(): number;
        set num_gpus(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-net-hadess-SwitcherooControl.NumGPUs">"NumGPUs"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default 0
          * @category Inherited from XApp.SwitcherooControl
         */
        get numGpus(): number;
        set numGpus(val: number);

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns `true` if successful. If an error has occurred, this function will return `false` and set `error` appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or `null` on error.
         * @param res the {@link Gio.AsyncResult} from the callback
         * @returns a newly created {@link GObject.Object},      or `null` on error. Free with `g_object_unref()`.
         */
        new_finish(res: Gio.AsyncResult): SwitcherooControlProxy;

        /**
         * @param args 
         */
        // Conflicted with Gio.DBusProxy.new_finish
        new_finish(...args: never[]): any;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @virtual
         */
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @returns A {@link Gio.DBusObject} or `null`. The returned reference should be freed with `g_object_unref()`.
         */
        get_object(): Gio.DBusObject | null;

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         */
        set_object(object: Gio.DBusObject | null): void;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @virtual
         */
        vfunc_dup_object(): Gio.DBusObject | null;

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         * @virtual
         */
        vfunc_set_object(object: Gio.DBusObject | null): void;

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
        init(cancellable: Gio.Cancellable | null): boolean;

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
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }


    namespace SwitcherooControlSkeleton {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::gpus": (pspec: GObject.ParamSpec) => void;
            "notify::has-dual-gpu": (pspec: GObject.ParamSpec) => void;
            "notify::num-gpus": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, Gio.DBusInterface.ConstructorProps, SwitcherooControl.ConstructorProps {}
    }

    /**
     * The {@link XApp.SwitcherooControlSkeleton} structure contains only private data and should only be accessed using the provided API.
     * @gir-type Class
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

        static ["new"](): SwitcherooControlSkeleton;

        // Signals
        /** @signal */
        connect<K extends keyof SwitcherooControlSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SwitcherooControlSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SwitcherooControlSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SwitcherooControlSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SwitcherooControlSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SwitcherooControlSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-net-hadess-SwitcherooControl.GPUs">"GPUs"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
          * @category Inherited from XApp.SwitcherooControl
         */
        get gpus(): GLib.Variant | null;
        set gpus(val: GLib.Variant | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-net-hadess-SwitcherooControl.HasDualGpu">"HasDualGpu"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default false
          * @category Inherited from XApp.SwitcherooControl
         */
        get has_dual_gpu(): boolean;
        set has_dual_gpu(val: boolean);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-net-hadess-SwitcherooControl.HasDualGpu">"HasDualGpu"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default false
          * @category Inherited from XApp.SwitcherooControl
         */
        get hasDualGpu(): boolean;
        set hasDualGpu(val: boolean);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-net-hadess-SwitcherooControl.NumGPUs">"NumGPUs"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default 0
          * @category Inherited from XApp.SwitcherooControl
         */
        get num_gpus(): number;
        set num_gpus(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-net-hadess-SwitcherooControl.NumGPUs">"NumGPUs"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default 0
          * @category Inherited from XApp.SwitcherooControl
         */
        get numGpus(): number;
        set numGpus(val: number);

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @returns A {@link Gio.DBusObject} or `null`. The returned reference should be freed with `g_object_unref()`.
         */
        get_object(): Gio.DBusObject | null;

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         */
        set_object(object: Gio.DBusObject | null): void;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @virtual
         */
        vfunc_dup_object(): Gio.DBusObject | null;

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         * @virtual
         */
        vfunc_set_object(object: Gio.DBusObject | null): void;
    }


    /**
     * @gir-type Alias
     */
    type DarkModeManagerClass = typeof DarkModeManager;

    /**
     * Information related to a single favorite file.
     * @gir-type Struct
     */
    class FavoriteInfo {
        static $gtype: GObject.GType<FavoriteInfo>;

        // Fields
        uri: string;

        display_name: string;

        cached_mimetype: string;

        // Constructors

        constructor(properties?: Partial<{
            uri: string;
            display_name: string;
            cached_mimetype: string;
        }>);

        // Methods
        /**
         * Makes an exact copy of an existing {@link XApp.FavoriteInfo}.
         * @returns a new {@link XApp.FavoriteInfo}.  Free using `xapp_favorite_info_free`. Since 2.0
         */
        copy(): FavoriteInfo;

        /**
         * Destroys the {@link XApp.FavoriteInfo}.
         * 
         * Since 2.0
         */
        free(): void;
    }


    /**
     * @gir-type Alias
     */
    type FavoritesClass = typeof Favorites;

    /**
     * Information about a single GPU used for offloading. The length of `env_strv` will always be an even number.
     * @gir-type Struct
     */
    class GpuInfo {
        static $gtype: GObject.GType<GpuInfo>;

        // Fields
        id: number;

        is_default: boolean;

        display_name: string;

        env_strv: string[];

        // Constructors

        constructor(properties?: Partial<{
            id: number;
            is_default: boolean;
            display_name: string;
            env_strv: string[];
        }>);

        // Methods
        /**
         * Creates a new string in a form intended to prefix a shell command, containing
         * the appropriate name/values for this gpu. For example:
         * 
         * __GLX_VENDOR_LIBRARY_NAME=nvidia __NV_PRIME_RENDER_OFFLOAD=1
         * @returns A new string, free with `g_free()`. Since 2.6
         */
        get_shell_env_prefix(): string;
    }


    /**
     * @gir-type Alias
     */
    type GpuOffloadHelperClass = typeof GpuOffloadHelper;

    /**
     * @gir-type Alias
     */
    type GtkWindowClass = typeof GtkWindow;

    /**
     * @gir-type Alias
     */
    type IconChooserButtonClass = typeof IconChooserButton;

    /**
     * @gir-type Alias
     */
    type IconChooserDialogClass = typeof IconChooserDialog;

    /**
     * @gir-type Alias
     */
    type KbdLayoutControllerClass = typeof KbdLayoutController;

    /**
     * @gir-type Struct
     */
    abstract class KbdLayoutControllerPrivate {
        static $gtype: GObject.GType<KbdLayoutControllerPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type MonitorBlankerClass = typeof MonitorBlanker;

    /**
     * @gir-type Alias
     */
    type ObjectIface = typeof Object;

    /**
     * @gir-type Alias
     */
    type ObjectManagerClientClass = typeof ObjectManagerClient;

    /**
     * @gir-type Struct
     */
    abstract class ObjectManagerClientPrivate {
        static $gtype: GObject.GType<ObjectManagerClientPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ObjectProxyClass = typeof ObjectProxy;

    /**
     * @gir-type Struct
     */
    abstract class ObjectProxyPrivate {
        static $gtype: GObject.GType<ObjectProxyPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ObjectSkeletonClass = typeof ObjectSkeleton;

    /**
     * @gir-type Struct
     */
    abstract class ObjectSkeletonPrivate {
        static $gtype: GObject.GType<ObjectSkeletonPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type PreferencesWindowClass = typeof PreferencesWindow;

    /**
     * @gir-type Alias
     */
    type StackSidebarClass = typeof StackSidebar;

    /**
     * @gir-type Alias
     */
    type StatusIconClass = typeof StatusIcon;

    /**
     * @gir-type Alias
     */
    type StatusIconInterfaceIface = typeof StatusIconInterface;

    /**
     * @gir-type Alias
     */
    type StatusIconInterfaceProxyClass = typeof StatusIconInterfaceProxy;

    /**
     * @gir-type Struct
     */
    abstract class StatusIconInterfaceProxyPrivate {
        static $gtype: GObject.GType<StatusIconInterfaceProxyPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type StatusIconInterfaceSkeletonClass = typeof StatusIconInterfaceSkeleton;

    /**
     * @gir-type Struct
     */
    abstract class StatusIconInterfaceSkeletonPrivate {
        static $gtype: GObject.GType<StatusIconInterfaceSkeletonPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type StatusIconMonitorClass = typeof StatusIconMonitor;

    /**
     * @gir-type Alias
     */
    type StyleManagerClass = typeof StyleManager;

    /**
     * @gir-type Alias
     */
    type SwitcherooControlIface = typeof SwitcherooControl;

    /**
     * @gir-type Alias
     */
    type SwitcherooControlProxyClass = typeof SwitcherooControlProxy;

    /**
     * @gir-type Struct
     */
    abstract class SwitcherooControlProxyPrivate {
        static $gtype: GObject.GType<SwitcherooControlProxyPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type SwitcherooControlSkeletonClass = typeof SwitcherooControlSkeleton;

    /**
     * @gir-type Struct
     */
    abstract class SwitcherooControlSkeletonPrivate {
        static $gtype: GObject.GType<SwitcherooControlSkeletonPrivate>;
    }


    /**
     * A group of widgets that can have their visibility and sensitivity controlled together.
     * @gir-type Struct
     */
    class VisibilityGroup {
        static $gtype: GObject.GType<VisibilityGroup>;

        // Fields
        widgets: Gtk.Widget[];

        visible: boolean;

        sensitive: boolean;

        // Constructors
        constructor(visible: boolean, sensitive: boolean, widgets: Gtk.Widget[] | null);

        static ["new"](visible: boolean, sensitive: boolean, widgets: Gtk.Widget[] | null): VisibilityGroup;

        // Methods
        /**
         * Adds widget to the visibility group.
         * @param widget the {@link Gtk.Widget} to add to the group
         */
        add_widget(widget: Gtk.Widget): void;

        /**
         * Destroys the {@link XApp.VisibilityGroup}.
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

        /**
         * @param widget the {@link Gtk.Widget} to remove from the group
         * @returns TRUE if the widget was found and removed.
         */
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

        /**
         * @param widgets The widgets to add to this group, replacing any existing ones.
         */
        set_widgets(widgets: Gtk.Widget[] | null): void;

        /**
         * Show all widgets in the group.
         */
        show(): void;
    }


    namespace Object {

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusObject.ConstructorProps {
            status_icon_interface: StatusIconInterface | null;
            statusIconInterface: StatusIconInterface | null;
        }
    }

    export interface ObjectNamespace {
        $gtype: GObject.GType<Object>;
        prototype: Object;
    }
    /**
     * The {@link XApp.Object} type is a specialized container of interfaces.
     * @gir-type Interface
     */
    interface Object extends Gio.DBusObject {

        // Properties
        /**
         * The {@link XApp.StatusIconInterface} instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-x-StatusIcon.top_of_page">org.x.StatusIcon</link>, if any.
         * 
         * Connect to the {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal to get informed of property changes.
         */
        get status_icon_interface(): StatusIconInterface | null;
        set status_icon_interface(val: StatusIconInterface | null);

        /**
         * The {@link XApp.StatusIconInterface} instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-x-StatusIcon.top_of_page">org.x.StatusIcon</link>, if any.
         * 
         * Connect to the {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal to get informed of property changes.
         */
        get statusIconInterface(): StatusIconInterface | null;
        set statusIconInterface(val: StatusIconInterface | null);

        // Methods
        /**
         * Gets the {@link XApp.StatusIconInterface} instance for the D-Bus interface <link linkend="gdbus-interface-org-x-StatusIcon.top_of_page">org.x.StatusIcon</link> on `object`, if any.
         * @returns A {@link XApp.StatusIconInterface} that must be freed with `g_object_unref()` or `null` if `object` does not implement the interface.
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
             * Handler for the {@link XApp.StatusIconInterface.SignalSignatures.handle_button_press | XApp.StatusIconInterface::handle-button-press} signal.
             * @param invocation 
             * @param arg_x 
             * @param arg_y 
             * @param arg_button 
             * @param arg_time 
             * @param arg_panel_position 
             * @virtual
             */
            vfunc_handle_button_press(invocation: Gio.DBusMethodInvocation, arg_x: number, arg_y: number, arg_button: number, arg_time: number, arg_panel_position: number): boolean;

            /**
             * Handler for the {@link XApp.StatusIconInterface.SignalSignatures.handle_button_release | XApp.StatusIconInterface::handle-button-release} signal.
             * @param invocation 
             * @param arg_x 
             * @param arg_y 
             * @param arg_button 
             * @param arg_time 
             * @param arg_panel_position 
             * @virtual
             */
            vfunc_handle_button_release(invocation: Gio.DBusMethodInvocation, arg_x: number, arg_y: number, arg_button: number, arg_time: number, arg_panel_position: number): boolean;

            /**
             * Handler for the {@link XApp.StatusIconInterface.SignalSignatures.handle_scroll | XApp.StatusIconInterface::handle-scroll} signal.
             * @param invocation 
             * @param arg_delta 
             * @param arg_orientation 
             * @param arg_time 
             * @virtual
             */
            vfunc_handle_scroll(invocation: Gio.DBusMethodInvocation, arg_delta: number, arg_orientation: number, arg_time: number): boolean;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            icon_name: string | null;
            iconName: string | null;
            icon_size: number;
            iconSize: number;
            label: string | null;
            metadata: string | null;
            name: string | null;
            primary_menu_is_open: boolean;
            primaryMenuIsOpen: boolean;
            secondary_menu_is_open: boolean;
            secondaryMenuIsOpen: boolean;
            tooltip_text: string | null;
            tooltipText: string | null;
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
        * Overrides all {@link GObject.Object} properties in the {@link XApp.StatusIconInterface} interface for a concrete class.
        * The properties are overridden in the order they are defined.
        * @param klass The class structure for a {@link GObject.Object} derived class.
        * @param property_id_begin The property id to assign to the first overridden property.
        */
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    /**
     * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-x-StatusIcon.top_of_page">org.x.StatusIcon</link>.
     * @gir-type Interface
     */
    interface StatusIconInterface extends GObject.Object, StatusIconInterface.Interface {

        // Properties
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.IconName">"IconName"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
         */
        get icon_name(): string | null;
        set icon_name(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.IconName">"IconName"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
         */
        get iconName(): string | null;
        set iconName(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.IconSize">"IconSize"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         * @default 0
         */
        get icon_size(): number;
        set icon_size(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.IconSize">"IconSize"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         * @default 0
         */
        get iconSize(): number;
        set iconSize(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.Label">"Label"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
         */
        get label(): string | null;
        set label(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.Metadata">"Metadata"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
         */
        get metadata(): string | null;
        set metadata(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.Name">"Name"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
         */
        get name(): string | null;
        set name(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.PrimaryMenuIsOpen">"PrimaryMenuIsOpen"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default false
         */
        get primary_menu_is_open(): boolean;
        set primary_menu_is_open(val: boolean);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.PrimaryMenuIsOpen">"PrimaryMenuIsOpen"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default false
         */
        get primaryMenuIsOpen(): boolean;
        set primaryMenuIsOpen(val: boolean);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.SecondaryMenuIsOpen">"SecondaryMenuIsOpen"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default false
         */
        get secondary_menu_is_open(): boolean;
        set secondary_menu_is_open(val: boolean);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.SecondaryMenuIsOpen">"SecondaryMenuIsOpen"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default false
         */
        get secondaryMenuIsOpen(): boolean;
        set secondaryMenuIsOpen(val: boolean);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.TooltipText">"TooltipText"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
         */
        get tooltip_text(): string | null;
        set tooltip_text(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.TooltipText">"TooltipText"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
         */
        get tooltipText(): string | null;
        set tooltipText(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-x-StatusIcon.Visible">"Visible"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default false
         */
        get visible(): boolean;
        set visible(val: boolean);

        // Methods
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonPress">ButtonPress()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `xapp_status_icon_interface_call_button_press_finish()` to get the result of the operation.
         * 
         * See `xapp_status_icon_interface_call_button_press_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_button_press(arg_x: number, arg_y: number, arg_button: number, arg_time: number, arg_panel_position: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonPress">ButtonPress()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `xapp_status_icon_interface_call_button_press_finish()` to get the result of the operation.
         * 
         * See `xapp_status_icon_interface_call_button_press_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_button_press(arg_x: number, arg_y: number, arg_button: number, arg_time: number, arg_panel_position: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonPress">ButtonPress()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `xapp_status_icon_interface_call_button_press_finish()` to get the result of the operation.
         * 
         * See `xapp_status_icon_interface_call_button_press_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_button_press(arg_x: number, arg_y: number, arg_button: number, arg_time: number, arg_panel_position: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes an operation started with `xapp_status_icon_interface_call_button_press()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `xapp_status_icon_interface_call_button_press()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_button_press_finish(res: Gio.AsyncResult): boolean;

        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonPress">ButtonPress()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         * 
         * See `xapp_status_icon_interface_call_button_press()` for the asynchronous version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_button_press_sync(arg_x: number, arg_y: number, arg_button: number, arg_time: number, arg_panel_position: number, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonRelease">ButtonRelease()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `xapp_status_icon_interface_call_button_release_finish()` to get the result of the operation.
         * 
         * See `xapp_status_icon_interface_call_button_release_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_button_release(arg_x: number, arg_y: number, arg_button: number, arg_time: number, arg_panel_position: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonRelease">ButtonRelease()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `xapp_status_icon_interface_call_button_release_finish()` to get the result of the operation.
         * 
         * See `xapp_status_icon_interface_call_button_release_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_button_release(arg_x: number, arg_y: number, arg_button: number, arg_time: number, arg_panel_position: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonRelease">ButtonRelease()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `xapp_status_icon_interface_call_button_release_finish()` to get the result of the operation.
         * 
         * See `xapp_status_icon_interface_call_button_release_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_button_release(arg_x: number, arg_y: number, arg_button: number, arg_time: number, arg_panel_position: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes an operation started with `xapp_status_icon_interface_call_button_release()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `xapp_status_icon_interface_call_button_release()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_button_release_finish(res: Gio.AsyncResult): boolean;

        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.ButtonRelease">ButtonRelease()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         * 
         * See `xapp_status_icon_interface_call_button_release()` for the asynchronous version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_button Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param arg_panel_position Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_button_release_sync(arg_x: number, arg_y: number, arg_button: number, arg_time: number, arg_panel_position: number, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.Scroll">Scroll()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `xapp_status_icon_interface_call_scroll_finish()` to get the result of the operation.
         * 
         * See `xapp_status_icon_interface_call_scroll_sync()` for the synchronous, blocking version of this method.
         * @param arg_delta Argument to pass with the method invocation.
         * @param arg_orientation Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_scroll(arg_delta: number, arg_orientation: number, arg_time: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.Scroll">Scroll()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `xapp_status_icon_interface_call_scroll_finish()` to get the result of the operation.
         * 
         * See `xapp_status_icon_interface_call_scroll_sync()` for the synchronous, blocking version of this method.
         * @param arg_delta Argument to pass with the method invocation.
         * @param arg_orientation Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_scroll(arg_delta: number, arg_orientation: number, arg_time: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.Scroll">Scroll()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `xapp_status_icon_interface_call_scroll_finish()` to get the result of the operation.
         * 
         * See `xapp_status_icon_interface_call_scroll_sync()` for the synchronous, blocking version of this method.
         * @param arg_delta Argument to pass with the method invocation.
         * @param arg_orientation Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_scroll(arg_delta: number, arg_orientation: number, arg_time: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes an operation started with `xapp_status_icon_interface_call_scroll()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `xapp_status_icon_interface_call_scroll()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_scroll_finish(res: Gio.AsyncResult): boolean;

        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-x-StatusIcon.Scroll">Scroll()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         * 
         * See `xapp_status_icon_interface_call_scroll()` for the asynchronous version of this method.
         * @param arg_delta Argument to pass with the method invocation.
         * @param arg_orientation Argument to pass with the method invocation.
         * @param arg_time Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_scroll_sync(arg_delta: number, arg_orientation: number, arg_time: number, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-x-StatusIcon.ButtonPress">ButtonPress()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         * 
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_button_press(invocation: Gio.DBusMethodInvocation): void;

        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-x-StatusIcon.ButtonRelease">ButtonRelease()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         * 
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_button_release(invocation: Gio.DBusMethodInvocation): void;

        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-x-StatusIcon.Scroll">Scroll()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         * 
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_scroll(invocation: Gio.DBusMethodInvocation): void;
    }


    export const StatusIconInterface: StatusIconInterfaceNamespace & {
        new (): StatusIconInterface; // This allows `obj instanceof StatusIconInterface`
    };

    namespace SwitcherooControl {

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            gpus: GLib.Variant | null;
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
        * Overrides all {@link GObject.Object} properties in the {@link XApp.SwitcherooControl} interface for a concrete class.
        * The properties are overridden in the order they are defined.
        * @param klass The class structure for a {@link GObject.Object} derived class.
        * @param property_id_begin The property id to assign to the first overridden property.
        */
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    /**
     * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-net-hadess-SwitcherooControl.top_of_page">net.hadess.SwitcherooControl</link>.
     * @gir-type Interface
     */
    interface SwitcherooControl extends GObject.Object {

        // Properties
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-net-hadess-SwitcherooControl.GPUs">"GPUs"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get gpus(): GLib.Variant | null;
        set gpus(val: GLib.Variant | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-net-hadess-SwitcherooControl.HasDualGpu">"HasDualGpu"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default false
         */
        get has_dual_gpu(): boolean;
        set has_dual_gpu(val: boolean);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-net-hadess-SwitcherooControl.HasDualGpu">"HasDualGpu"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default false
         */
        get hasDualGpu(): boolean;
        set hasDualGpu(val: boolean);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-net-hadess-SwitcherooControl.NumGPUs">"NumGPUs"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default 0
         */
        get num_gpus(): number;
        set num_gpus(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-net-hadess-SwitcherooControl.NumGPUs">"NumGPUs"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default 0
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
