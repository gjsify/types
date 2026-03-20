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
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Bamf {
    /**
     * Bamf-3
     */

    /**
     * @gir-type Enum
     */
    enum ClickBehavior {
        NONE,
        OPEN,
        FOCUS,
        FOCUS_ALL,
        MINIMIZE,
        RESTORE,
        RESTORE_ALL,
        PICKER,
    }

    /**
     * @gir-type Enum
     */
    enum WindowMaximizationType {
        FLOATING,
        HORIZONTAL_MAXIMIZED,
        VERTICAL_MAXIMIZED,
        MAXIMIZED,
    }

    /**
     * @gir-type Enum
     */
    enum WindowType {
        NORMAL,
        DESKTOP,
        DOCK,
        DIALOG,
        TOOLBAR,
        MENU,
        UTILITY,
        SPLASHSCREEN,
        UNKNOWN,
    }

    const APPLICATION_SIGNAL_DESKTOP_FILE_UPDATED: string;
    const APPLICATION_SIGNAL_WINDOW_ADDED: string;
    const APPLICATION_SIGNAL_WINDOW_REMOVED: string;
    const MATCHER_SIGNAL_ACTIVE_APPLICATION_CHANGED: string;
    const MATCHER_SIGNAL_ACTIVE_WINDOW_CHANGED: string;
    const MATCHER_SIGNAL_STACKING_ORDER_CHANGED: string;
    const MATCHER_SIGNAL_VIEW_CLOSED: string;
    const MATCHER_SIGNAL_VIEW_OPENED: string;
    const VIEW_SIGNAL_ACTIVE_CHANGED: string;
    const VIEW_SIGNAL_CHILD_ADDED: string;
    const VIEW_SIGNAL_CHILD_MOVED: string;
    const VIEW_SIGNAL_CHILD_REMOVED: string;
    const VIEW_SIGNAL_CLOSED: string;
    const VIEW_SIGNAL_ICON_CHANGED: string;
    const VIEW_SIGNAL_NAME_CHANGED: string;
    const VIEW_SIGNAL_RUNNING_CHANGED: string;
    const VIEW_SIGNAL_STARTING_CHANGED: string;
    const VIEW_SIGNAL_URGENT_CHANGED: string;
    const VIEW_SIGNAL_USER_VISIBLE_CHANGED: string;
    const WINDOW_SIGNAL_MAXIMIZED_CHANGED: string;
    const WINDOW_SIGNAL_MONITOR_CHANGED: string;
    /**
     * @gir-type Callback
     */
    interface TabPreviewReadyCallback {
        (self: Tab, preview_data: string): void;
    }
    namespace Application {
        // Signal signatures
        interface SignalSignatures extends View.SignalSignatures {
            /**
             * @signal
             */
            'desktop-file-updated': (arg0: string) => void;
            /**
             * @signal
             */
            'window-added': (arg0: Window) => void;
            /**
             * @signal
             */
            'window-removed': (arg0: Window) => void;
            'notify::active': (pspec: GObject.ParamSpec) => void;
            'notify::path': (pspec: GObject.ParamSpec) => void;
            'notify::running': (pspec: GObject.ParamSpec) => void;
            'notify::starting': (pspec: GObject.ParamSpec) => void;
            'notify::urgent': (pspec: GObject.ParamSpec) => void;
            'notify::user-visible': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends View.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Application extends View {
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
         * Used to fetch the bus name and the object path of the remote application menu.
         * @returns `true` if found, `false` otherwise.
         */
        get_application_menu(): [boolean, string, string];
        get_application_type(): string;
        /**
         * Used to fetch the path to the .desktop file associated with the passed application. If
         * none exists, the result is NULL.
         * @returns A string representing the path to the desktop file.
         */
        get_desktop_file(): string;
        /**
         * @returns The focusable child for this application.
         */
        get_focusable_child(): View;
        /**
         * Used to discover whether the application wants menu stubs shown.
         * @returns Whether the stubs should be shown.
         */
        get_show_menu_stubs(): boolean;
        /**
         * @returns A string array containing the supported mime-types.
         */
        get_supported_mime_types(): string[];
        /**
         * Used to fetch the application contains a Window with given `xid`.
         * @param xid an X11 Window ID
         * @returns a {@link Bamf.Window} for the passed `xid` or `null` if not found.
         */
        get_window_for_xid(xid: number): Window;
        /**
         * Used to fetch all {@link Bamf.Window}'s associated with the passed {@link Bamf.Application}.
         * @returns A list of {@link Bamf.Window}'s.
         */
        get_windows(): Window[];
        /**
         * Used to fetch all {@link Bamf.Window}'s xids associated with the passed {@link Bamf.Application}.
         * @returns An array of xids.
         */
        get_xids(): number[];
    }

    namespace Control {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Control extends GObject.Object {
        static $gtype: GObject.GType<Control>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Control.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Control.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Control.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Control.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Control.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Control.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Control.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Control.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_default(): Control;

        // Methods

        /**
         * @param application
         */
        create_local_desktop_file(application: Application): void;
        /**
         * @param desktop_file
         */
        insert_desktop_file(desktop_file: string): void;
        /**
         * @param desktop_file
         * @param pid
         */
        register_application_for_pid(desktop_file: string, pid: number): void;
        /**
         * @param behavior
         */
        set_approver_behavior(behavior: number): void;
    }

    namespace Matcher {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            'active-application-changed': (arg0: Application, arg1: Application) => void;
            /**
             * @signal
             */
            'active-window-changed': (arg0: Window, arg1: Window) => void;
            /**
             * @signal
             */
            'stacking-order-changed': () => void;
            /**
             * @signal
             */
            'view-closed': (arg0: View) => void;
            /**
             * @signal
             */
            'view-opened': (arg0: View) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Matcher extends GObject.Object {
        static $gtype: GObject.GType<Matcher>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Matcher.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Matcher.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Matcher.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Matcher.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Matcher.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Matcher.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Matcher.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Matcher.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Returns the default matcher. This matcher is owned by bamf and shared between other callers.
         */
        static get_default(): Matcher;

        // Methods

        /**
         * @param desktop_file
         */
        application_is_running(desktop_file: string): boolean;
        /**
         * Used to fetch the active {@link Bamf.Application}.
         * @returns The active {@link Bamf.Application}.
         */
        get_active_application(): Application;
        /**
         * Used to fetch the active {@link Bamf.Window}.
         * @returns The active {@link Bamf.Window}.
         */
        get_active_window(): Window;
        /**
         * @param desktop_file_path Path to the desktop file
         * @param create_if_not_found Create a {@link Bamf.Application} if one isn't found
         * @returns A {@link Bamf.Application} for given desktop file.
         */
        get_application_for_desktop_file(desktop_file_path: string, create_if_not_found: boolean): Application;
        /**
         * Used to fetch the {@link Bamf.Application} containing the passed window.
         * @param window The window to look for
         * @returns The {@link Bamf.Application} representing the xid passed, or NULL if none exists.
         */
        get_application_for_window(window: Window): Application;
        /**
         * Used to fetch the {@link Bamf.Application} containing the passed xid.
         * @param xid The XID to search for
         * @returns The {@link Bamf.Application} representing the xid passed, or NULL if none exists.
         */
        get_application_for_xid(xid: number): Application;
        /**
         * Used to fetch all {@link Bamf.Application}'s running or not. Application authors who wish to only
         * see running applications should use bamf_matcher_get_running_applications instead. The reason
         * this method is needed is bamf will occasionally track applications which are not currently
         * running for nefarious purposes.
         * @returns A list of {@link Bamf.Application}'s.
         */
        get_applications(): Application[];
        /**
         * Used to fetch all {@link Bamf.Application}'s which are running.
         * @returns A list of {@link Bamf.Application}'s.
         */
        get_running_applications(): Application[];
        /**
         * Used to fetch all {@link Bamf.View}'s representing tabs. Currently unused.
         * @returns A list of {@link Bamf.Tab}'s.
         */
        get_tabs(): Tab[];
        /**
         * Used to fetch the {@link Bamf.Window} that wraps the given `window`.
         * @param xid The X11 Window ID to search for
         * @returns The {@link Bamf.Window} representing the xid passed, or NULL if none exists.
         */
        get_window_for_xid(xid: number): Window;
        /**
         * Used to fetch all windows that BAMF knows about in the requested screen,
         * in stacking bottom-to-top order. If the `monitor` is set to a negative value,
         * then it fetches all the available windows in all monitors.
         * @param monitor the monitor you want the stack from, negative value to get all
         * @returns A list of {@link Bamf.Window}'s.
         */
        get_window_stack_for_monitor(monitor: number): Window[];
        /**
         * Used to fetch all windows that BAMF knows about.
         * @returns A list of {@link Bamf.Window}'s.
         */
        get_windows(): Window[];
        /**
         * Used to fetch all xid's associated with an application. Useful for performing window
         * @param desktop_file
         * @returns A list of xids.
         */
        get_xids_for_application(desktop_file: string): number[];
        /**
         * Used to effect how bamf performs matching. Desktop files passed to this method will
         * be prefered by bamf to system desktop files.
         * @param favorites an array of strings, each containing an absolute path to a .desktop file
         */
        register_favorites(favorites: string[]): void;
    }

    namespace Tab {
        // Signal signatures
        interface SignalSignatures extends View.SignalSignatures {
            'notify::desktop-id': (pspec: GObject.ParamSpec) => void;
            'notify::is-foreground-tab': (pspec: GObject.ParamSpec) => void;
            'notify::location': (pspec: GObject.ParamSpec) => void;
            'notify::xid': (pspec: GObject.ParamSpec) => void;
            'notify::active': (pspec: GObject.ParamSpec) => void;
            'notify::path': (pspec: GObject.ParamSpec) => void;
            'notify::running': (pspec: GObject.ParamSpec) => void;
            'notify::starting': (pspec: GObject.ParamSpec) => void;
            'notify::urgent': (pspec: GObject.ParamSpec) => void;
            'notify::user-visible': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends View.ConstructorProps {
            desktop_id: string;
            desktopId: string;
            is_foreground_tab: boolean;
            isForegroundTab: boolean;
            location: string;
            xid: number;
        }
    }

    /**
     * @gir-type Class
     */
    class Tab extends View {
        static $gtype: GObject.GType<Tab>;

        // Properties

        /**
         * @read-only
         */
        get desktop_id(): string;
        /**
         * @read-only
         */
        get desktopId(): string;
        /**
         * @read-only
         */
        get is_foreground_tab(): boolean;
        /**
         * @read-only
         */
        get isForegroundTab(): boolean;
        /**
         * @read-only
         */
        get location(): string;
        /**
         * @read-only
         */
        get xid(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Tab.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Tab.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Tab.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Tab.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Tab.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Tab.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Tab.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Tab.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Returns the desktop file for the tab.
         * @virtual
         */
        vfunc_get_desktop_name(): string;
        /**
         * @virtual
         */
        vfunc_get_is_foreground_tab(): boolean;
        /**
         * @virtual
         */
        vfunc_get_location(): string;
        /**
         * The desktop file for the tab.
         * @virtual
         */
        vfunc_get_xid(): number;

        // Methods

        /**
         * Closes the selected `self` tab.
         * @returns `true` if success, `false` otherwise.
         */
        close(): boolean;
        /**
         * Returns the desktop file for the tab.
         * @returns The tab desktop id or `null` if not set or available. Do not free the returned value, it belongs to `self`.
         */
        get_desktop_name(): string;
        /**
         * @returns `true` if the tab is the active one on parent window XID, `false` otherwise.
         */
        get_is_foreground_tab(): boolean;
        get_location(): string;
        /**
         * The desktop file for the tab.
         * @returns The tab parent window XID id or 0 if not set or available.
         */
        get_xid(): number;
        /**
         * Selects the `self` tab in the parent window.
         * @returns `true` if success, `false` otherwise.
         */
        raise(): boolean;
        /**
         * @param callback a callback function to call when the result is ready
         */
        request_preview(callback: TabPreviewReadyCallback): void;
    }

    namespace View {
        // Signal signatures
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            'active-changed': (arg0: boolean) => void;
            /**
             * @signal
             * @run-first
             */
            'child-added': (arg0: View) => void;
            /**
             * @signal
             * @run-first
             */
            'child-moved': (arg0: View) => void;
            /**
             * @signal
             * @run-first
             */
            'child-removed': (arg0: View) => void;
            /**
             * @signal
             * @run-last
             */
            closed: () => void;
            /**
             * @signal
             */
            'icon-changed': (arg0: string) => void;
            /**
             * @signal
             */
            'name-changed': (arg0: string, arg1: string) => void;
            /**
             * @signal
             * @run-first
             */
            'running-changed': (arg0: boolean) => void;
            /**
             * @signal
             * @run-first
             */
            'starting-changed': (arg0: boolean) => void;
            /**
             * @signal
             * @run-first
             */
            'urgent-changed': (arg0: boolean) => void;
            /**
             * @signal
             * @run-first
             */
            'user-visible-changed': (arg0: boolean) => void;
            'notify::active': (pspec: GObject.ParamSpec) => void;
            'notify::path': (pspec: GObject.ParamSpec) => void;
            'notify::running': (pspec: GObject.ParamSpec) => void;
            'notify::starting': (pspec: GObject.ParamSpec) => void;
            'notify::urgent': (pspec: GObject.ParamSpec) => void;
            'notify::user-visible': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {
            active: boolean;
            path: string;
            running: boolean;
            starting: boolean;
            urgent: boolean;
            user_visible: boolean;
            userVisible: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class View extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<View>;

        // Properties

        /**
         * @read-only
         */
        get active(): boolean;
        /**
         * @read-only
         */
        get path(): string;
        /**
         * @read-only
         */
        get running(): boolean;
        /**
         * @read-only
         */
        get starting(): boolean;
        /**
         * @read-only
         */
        get urgent(): boolean;
        /**
         * @read-only
         */
        get user_visible(): boolean;
        /**
         * @read-only
         */
        get userVisible(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: View.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<View.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof View.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, View.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof View.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, View.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof View.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<View.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param active
         * @virtual
         */
        vfunc_active_changed(active: boolean): void;
        /**
         * @param child
         * @virtual
         */
        vfunc_child_added(child: View): void;
        /**
         * @param child
         * @virtual
         */
        vfunc_child_moved(child: View): void;
        /**
         * @param child
         * @virtual
         */
        vfunc_child_removed(child: View): void;
        /**
         * @virtual
         */
        vfunc_click_behavior(): ClickBehavior;
        /**
         * @virtual
         */
        vfunc_closed(): void;
        /**
         * Note: Makes sever dbus calls the first time this is called on a view. Dbus messaging is reduced afterwards.
         * @virtual
         */
        vfunc_get_children(): View[];
        /**
         * Gets the icon of a view. This icon is used to visually represent the view.
         * @virtual
         */
        vfunc_get_icon(): string;
        /**
         * Gets the name of a view. This name is a short name best used to represent the view with text.
         * @virtual
         */
        vfunc_get_name(): string;
        /**
         * @param icon
         * @virtual
         */
        vfunc_icon_changed(icon: string): void;
        /**
         * Determines if the view is currently active and focused by the user. Useful for an active window indicator.
         * @virtual
         */
        vfunc_is_active(): boolean;
        /**
         * Determines if the view is currently running. Useful for a running window indicator.
         * @virtual
         */
        vfunc_is_running(): boolean;
        /**
         * Determines if the view is currently starting. Useful for the startup animation.
         * @virtual
         */
        vfunc_is_starting(): boolean;
        /**
         * Determines if the view is currently requiring attention. Useful for a running window indicator.
         * @virtual
         */
        vfunc_is_urgent(): boolean;
        /**
         * @virtual
         */
        vfunc_is_user_visible(): boolean;
        /**
         * @param old_name
         * @param new_name
         * @virtual
         */
        vfunc_name_changed(old_name: string, new_name: string): void;
        /**
         * @param running
         * @virtual
         */
        vfunc_running_changed(running: boolean): void;
        /**
         * @param path
         * @virtual
         */
        vfunc_set_path(path: string): void;
        /**
         * @param value
         * @virtual
         */
        vfunc_set_sticky(value: boolean): void;
        /**
         * @param starting
         * @virtual
         */
        vfunc_starting_changed(starting: boolean): void;
        /**
         * @param urgent
         * @virtual
         */
        vfunc_urgent_changed(urgent: boolean): void;
        /**
         * @param user_visible
         * @virtual
         */
        vfunc_user_visible_changed(user_visible: boolean): void;
        /**
         * The view type of a window is a short string used to represent all views of the same class. These
         * descriptions should not be used to do casting as they are not considered stable.
         * @virtual
         */
        vfunc_view_type(): string;

        // Methods

        /**
         * Note: Makes sever dbus calls the first time this is called on a view. Dbus messaging is reduced afterwards.
         * @returns Returns a list of {@link Bamf.View} which must be           freed after usage. Elements of the list are owned by bamf and should not be unreffed.
         */
        get_children(): View[];
        get_click_suggestion(): ClickBehavior;
        /**
         * Gets the icon of a view. This icon is used to visually represent the view.
         */
        get_icon(): string;
        /**
         * Gets the name of a view. This name is a short name best used to represent the view with text.
         */
        get_name(): string;
        /**
         * The view type of a window is a short string used to represent all views of the same class. These
         * descriptions should not be used to do casting as they are not considered stable.
         */
        get_view_type(): string;
        /**
         * @param child
         * @returns `true` whether the {@link Bamf.View} `view` has the specified `child`.
         */
        has_child(child: View): boolean;
        /**
         * Determines if the view is currently active and focused by the user. Useful for an active window indicator.
         */
        is_active(): boolean;
        /**
         * Determines if the view is closed or not.
         */
        is_closed(): boolean;
        /**
         * Determines if the view is currently running. Useful for a running window indicator.
         */
        is_running(): boolean;
        /**
         * Determines if the view is currently starting. Useful for the startup animation.
         */
        is_starting(): boolean;
        is_sticky(): boolean;
        /**
         * Determines if the view is currently requiring attention. Useful for a running window indicator.
         */
        is_urgent(): boolean;
        /**
         * @returns a boolean useful for determining if a particular view is "user visible". User visible is a concept relating to whether or not a window should be shown in a launcher tasklist.
         */
        is_user_visible(): boolean;
        /**
         * Note: Makes sever dbus calls the first time this is called on a view.
         * Dbus messaging is reduced afterwards.
         * @returns Returns a list of {@link Bamf.View} which           is owned by the {@link Bamf.View} and should not freed or modified after usage.
         */
        peek_children(): View[];
        /**
         * @param value
         */
        set_sticky(value: boolean): void;
    }

    namespace Window {
        // Signal signatures
        interface SignalSignatures extends View.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            'maximized-changed': (arg0: number, arg1: number) => void;
            /**
             * @signal
             * @run-first
             */
            'monitor-changed': (arg0: number, arg1: number) => void;
            'notify::active': (pspec: GObject.ParamSpec) => void;
            'notify::path': (pspec: GObject.ParamSpec) => void;
            'notify::running': (pspec: GObject.ParamSpec) => void;
            'notify::starting': (pspec: GObject.ParamSpec) => void;
            'notify::urgent': (pspec: GObject.ParamSpec) => void;
            'notify::user-visible': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends View.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Window extends View {
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

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_get_monitor(): number;
        /**
         * @virtual
         */
        vfunc_get_pid(): number;
        /**
         * @virtual
         */
        vfunc_get_transient(): Window;
        /**
         * @param prop
         * @virtual
         */
        vfunc_get_utf8_prop(prop: string): string;
        /**
         * @virtual
         */
        vfunc_get_window_type(): WindowType;
        /**
         * @virtual
         */
        vfunc_get_xid(): number;
        /**
         * @virtual
         */
        vfunc_last_active(): number;
        /**
         * @virtual
         */
        vfunc_maximized(): WindowMaximizationType;
        /**
         * @param old_value
         * @param new_value
         * @virtual
         */
        vfunc_maximized_changed(old_value: number, new_value: number): void;
        /**
         * @param old_value
         * @param new_value
         * @virtual
         */
        vfunc_monitor_changed(old_value: number, new_value: number): void;

        // Methods

        get_monitor(): number;
        get_pid(): number;
        /**
         * @returns A transient for this {@link Bamf.Window}.
         */
        get_transient(): Window;
        /**
         * @param prop
         */
        get_utf8_prop(prop: string): string;
        get_window_type(): WindowType;
        get_xid(): number;
        last_active(): number;
        maximized(): WindowMaximizationType;
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
    type ControlClass = typeof Control;
    /**
     * @gir-type Struct
     */
    abstract class ControlPrivate {
        static $gtype: GObject.GType<ControlPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type MatcherClass = typeof Matcher;
    /**
     * @gir-type Struct
     */
    abstract class MatcherPrivate {
        static $gtype: GObject.GType<MatcherPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type TabClass = typeof Tab;
    /**
     * @gir-type Struct
     */
    abstract class TabPrivate {
        static $gtype: GObject.GType<TabPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ViewClass = typeof View;
    /**
     * @gir-type Struct
     */
    abstract class ViewPrivate {
        static $gtype: GObject.GType<ViewPrivate>;
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

export default Bamf;

// END
