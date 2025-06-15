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

    export namespace ClickBehavior {
        export const $gtype: GObject.GType<ClickBehavior>;
    }

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

    export namespace WindowMaximizationType {
        export const $gtype: GObject.GType<WindowMaximizationType>;
    }

    enum WindowMaximizationType {
        FLOATING,
        HORIZONTAL_MAXIMIZED,
        VERTICAL_MAXIMIZED,
        MAXIMIZED,
    }

    export namespace WindowType {
        export const $gtype: GObject.GType<WindowType>;
    }

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
    interface TabPreviewReadyCallback {
        (self: Tab, preview_data: string): void;
    }
    namespace Application {
        // Signal callback interfaces

        interface DesktopFileUpdated {
            (_source: Application, object: string): void;
        }

        interface WindowAdded {
            (_source: Application, object: Window): void;
        }

        interface WindowRemoved {
            (_source: Application, object: Window): void;
        }

        // Signal signatures
        interface SignalSignatures extends View.SignalSignatures {
            'desktop-file-updated': DesktopFileUpdated;
            'window-added': WindowAdded;
            'window-removed': WindowRemoved;
            'notify::active': GObject.Object.Notify;
            'notify::path': GObject.Object.Notify;
            'notify::running': GObject.Object.Notify;
            'notify::starting': GObject.Object.Notify;
            'notify::urgent': GObject.Object.Notify;
            'notify::user-visible': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps extends View.ConstructorProps {}
    }

    class Application extends View {
        static $gtype: GObject.GType<Application>;

        // Constructors

        constructor(properties?: Partial<Application.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Application.SignalSignatures>(
            signal: K,
            callback: Application.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Application.SignalSignatures>(
            signal: K,
            callback: Application.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Application.SignalSignatures>(
            signal: K,
            ...args: Application.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Used to fetch the bus name and the object path of the remote application menu.
         * @returns %TRUE if found, %FALSE otherwise.
         */
        get_application_menu(): [boolean, string, string];
        get_application_type(): string;
        /**
         * Used to fetch the path to the .desktop file associated with the passed application. If
         * none exists, the result is NULL.
         * @returns A string representing the path to the desktop file.
         */
        get_desktop_file(): string;
        get_focusable_child(): View;
        /**
         * Used to discover whether the application wants menu stubs shown.
         * @returns Whether the stubs should be shown.
         */
        get_show_menu_stubs(): boolean;
        get_supported_mime_types(): string[];
        /**
         * Used to fetch the application contains a Window with given `xid`.
         * @param xid an X11 Window ID
         * @returns a #BamfWindow for the passed @xid or %NULL if not found.
         */
        get_window_for_xid(xid: number): Window;
        /**
         * Used to fetch all #BamfWindow's associated with the passed #BamfApplication.
         * @returns A list of #BamfWindow's.
         */
        get_windows(): Window[];
        /**
         * Used to fetch all #BamfWindow's xids associated with the passed #BamfApplication.
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

    class Control extends GObject.Object {
        static $gtype: GObject.GType<Control>;

        // Constructors

        constructor(properties?: Partial<Control.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Control.SignalSignatures>(signal: K, callback: Control.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Control.SignalSignatures>(
            signal: K,
            callback: Control.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Control.SignalSignatures>(
            signal: K,
            ...args: Control.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_default(): Control;

        // Methods

        create_local_desktop_file(application: Application): void;
        insert_desktop_file(desktop_file: string): void;
        register_application_for_pid(desktop_file: string, pid: number): void;
        set_approver_behavior(behavior: number): void;
    }

    namespace Matcher {
        // Signal callback interfaces

        interface ActiveApplicationChanged {
            (_source: Matcher, object: Application, p0: Application): void;
        }

        interface ActiveWindowChanged {
            (_source: Matcher, object: Window, p0: Window): void;
        }

        interface StackingOrderChanged {
            (_source: Matcher): void;
        }

        interface ViewClosed {
            (_source: Matcher, object: View): void;
        }

        interface ViewOpened {
            (_source: Matcher, object: View): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'active-application-changed': ActiveApplicationChanged;
            'active-window-changed': ActiveWindowChanged;
            'stacking-order-changed': StackingOrderChanged;
            'view-closed': ViewClosed;
            'view-opened': ViewOpened;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Matcher extends GObject.Object {
        static $gtype: GObject.GType<Matcher>;

        // Constructors

        constructor(properties?: Partial<Matcher.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Matcher.SignalSignatures>(signal: K, callback: Matcher.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Matcher.SignalSignatures>(
            signal: K,
            callback: Matcher.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Matcher.SignalSignatures>(
            signal: K,
            ...args: Matcher.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Returns the default matcher. This matcher is owned by bamf and shared between other callers.
         */
        static get_default(): Matcher;

        // Methods

        application_is_running(desktop_file: string): boolean;
        /**
         * Used to fetch the active #BamfApplication.
         * @returns The active #BamfApplication.
         */
        get_active_application(): Application;
        /**
         * Used to fetch the active #BamfWindow.
         * @returns The active #BamfWindow.
         */
        get_active_window(): Window;
        get_application_for_desktop_file(desktop_file_path: string, create_if_not_found: boolean): Application;
        /**
         * Used to fetch the #BamfApplication containing the passed window.
         * @param window The window to look for
         * @returns The #BamfApplication representing the xid passed, or NULL if none exists.
         */
        get_application_for_window(window: Window): Application;
        /**
         * Used to fetch the #BamfApplication containing the passed xid.
         * @param xid The XID to search for
         * @returns The #BamfApplication representing the xid passed, or NULL if none exists.
         */
        get_application_for_xid(xid: number): Application;
        /**
         * Used to fetch all #BamfApplication's running or not. Application authors who wish to only
         * see running applications should use bamf_matcher_get_running_applications instead. The reason
         * this method is needed is bamf will occasionally track applications which are not currently
         * running for nefarious purposes.
         * @returns A list of #BamfApplication's.
         */
        get_applications(): Application[];
        /**
         * Used to fetch all #BamfApplication's which are running.
         * @returns A list of #BamfApplication's.
         */
        get_running_applications(): Application[];
        /**
         * Used to fetch all #BamfView's representing tabs. Currently unused.
         * @returns A list of #BamfTab's.
         */
        get_tabs(): Tab[];
        /**
         * Used to fetch the #BamfWindow that wraps the given `window`.
         * @param xid The X11 Window ID to search for
         * @returns The #BamfWindow representing the xid passed, or NULL if none exists.
         */
        get_window_for_xid(xid: number): Window;
        /**
         * Used to fetch all windows that BAMF knows about in the requested screen,
         * in stacking bottom-to-top order. If the `monitor` is set to a negative value,
         * then it fetches all the available windows in all monitors.
         * @param monitor the monitor you want the stack from, negative value to get all
         * @returns A list of #BamfWindow's.
         */
        get_window_stack_for_monitor(monitor: number): Window[];
        /**
         * Used to fetch all windows that BAMF knows about.
         * @returns A list of #BamfWindow's.
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
            'notify::desktop-id': GObject.Object.Notify;
            'notify::is-foreground-tab': GObject.Object.Notify;
            'notify::location': GObject.Object.Notify;
            'notify::xid': GObject.Object.Notify;
            'notify::active': GObject.Object.Notify;
            'notify::path': GObject.Object.Notify;
            'notify::running': GObject.Object.Notify;
            'notify::starting': GObject.Object.Notify;
            'notify::urgent': GObject.Object.Notify;
            'notify::user-visible': GObject.Object.Notify;
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

    class Tab extends View {
        static $gtype: GObject.GType<Tab>;

        // Properties

        get desktop_id(): string;
        get desktopId(): string;
        get is_foreground_tab(): boolean;
        get isForegroundTab(): boolean;
        get location(): string;
        get xid(): number;

        // Constructors

        constructor(properties?: Partial<Tab.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Tab.SignalSignatures>(signal: K, callback: Tab.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Tab.SignalSignatures>(signal: K, callback: Tab.SignalSignatures[K]): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Tab.SignalSignatures>(
            signal: K,
            ...args: Tab.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Returns the desktop file for the tab.
         */
        vfunc_get_desktop_name(): string;
        vfunc_get_is_foreground_tab(): boolean;
        vfunc_get_location(): string;
        /**
         * The desktop file for the tab.
         */
        vfunc_get_xid(): number;

        // Methods

        /**
         * Closes the selected `self` tab.
         * @returns %TRUE if success, %FALSE otherwise.
         */
        close(): boolean;
        /**
         * Returns the desktop file for the tab.
         * @returns The tab desktop id or %NULL if not set or available. Do not free the returned value, it belongs to @self.
         */
        get_desktop_name(): string;
        get_is_foreground_tab(): boolean;
        get_location(): string;
        /**
         * The desktop file for the tab.
         * @returns The tab parent window XID id or 0 if not set or available.
         */
        get_xid(): number;
        /**
         * Selects the `self` tab in the parent window.
         * @returns %TRUE if success, %FALSE otherwise.
         */
        raise(): boolean;
        request_preview(callback: TabPreviewReadyCallback): void;
    }

    namespace View {
        // Signal callback interfaces

        interface ActiveChanged {
            (_source: View, object: boolean): void;
        }

        interface ChildAdded {
            (_source: View, object: View): void;
        }

        interface ChildMoved {
            (_source: View, object: View): void;
        }

        interface ChildRemoved {
            (_source: View, object: View): void;
        }

        interface Closed {
            (_source: View): void;
        }

        interface IconChanged {
            (_source: View, object: string): void;
        }

        interface NameChanged {
            (_source: View, object: string, p0: string): void;
        }

        interface RunningChanged {
            (_source: View, object: boolean): void;
        }

        interface StartingChanged {
            (_source: View, object: boolean): void;
        }

        interface UrgentChanged {
            (_source: View, object: boolean): void;
        }

        interface UserVisibleChanged {
            (_source: View, object: boolean): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {
            'active-changed': ActiveChanged;
            'child-added': ChildAdded;
            'child-moved': ChildMoved;
            'child-removed': ChildRemoved;
            closed: Closed;
            'icon-changed': IconChanged;
            'name-changed': NameChanged;
            'running-changed': RunningChanged;
            'starting-changed': StartingChanged;
            'urgent-changed': UrgentChanged;
            'user-visible-changed': UserVisibleChanged;
            'notify::active': GObject.Object.Notify;
            'notify::path': GObject.Object.Notify;
            'notify::running': GObject.Object.Notify;
            'notify::starting': GObject.Object.Notify;
            'notify::urgent': GObject.Object.Notify;
            'notify::user-visible': GObject.Object.Notify;
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

    class View extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<View>;

        // Properties

        get active(): boolean;
        get path(): string;
        get running(): boolean;
        get starting(): boolean;
        get urgent(): boolean;
        get user_visible(): boolean;
        get userVisible(): boolean;

        // Constructors

        constructor(properties?: Partial<View.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof View.SignalSignatures>(signal: K, callback: View.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof View.SignalSignatures>(signal: K, callback: View.SignalSignatures[K]): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof View.SignalSignatures>(
            signal: K,
            ...args: View.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_active_changed(active: boolean): void;
        vfunc_child_added(child: View): void;
        vfunc_child_moved(child: View): void;
        vfunc_child_removed(child: View): void;
        vfunc_click_behavior(): ClickBehavior;
        vfunc_closed(): void;
        /**
         * Note: Makes sever dbus calls the first time this is called on a view. Dbus messaging is reduced afterwards.
         */
        vfunc_get_children(): View[];
        /**
         * Gets the icon of a view. This icon is used to visually represent the view.
         */
        vfunc_get_icon(): string;
        /**
         * Gets the name of a view. This name is a short name best used to represent the view with text.
         */
        vfunc_get_name(): string;
        vfunc_icon_changed(icon: string): void;
        /**
         * Determines if the view is currently active and focused by the user. Useful for an active window indicator.
         */
        vfunc_is_active(): boolean;
        /**
         * Determines if the view is currently running. Useful for a running window indicator.
         */
        vfunc_is_running(): boolean;
        /**
         * Determines if the view is currently starting. Useful for the startup animation.
         */
        vfunc_is_starting(): boolean;
        /**
         * Determines if the view is currently requiring attention. Useful for a running window indicator.
         */
        vfunc_is_urgent(): boolean;
        vfunc_is_user_visible(): boolean;
        vfunc_name_changed(old_name: string, new_name: string): void;
        vfunc_running_changed(running: boolean): void;
        vfunc_set_path(path: string): void;
        vfunc_set_sticky(value: boolean): void;
        vfunc_starting_changed(starting: boolean): void;
        vfunc_urgent_changed(urgent: boolean): void;
        vfunc_user_visible_changed(user_visible: boolean): void;
        /**
         * The view type of a window is a short string used to represent all views of the same class. These
         * descriptions should not be used to do casting as they are not considered stable.
         */
        vfunc_view_type(): string;

        // Methods

        /**
         * Note: Makes sever dbus calls the first time this is called on a view. Dbus messaging is reduced afterwards.
         * @returns Returns a list of #BamfView which must be           freed after usage. Elements of the list are owned by bamf and should not be unreffed.
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
        is_user_visible(): boolean;
        /**
         * Note: Makes sever dbus calls the first time this is called on a view.
         * Dbus messaging is reduced afterwards.
         * @returns Returns a list of #BamfView which           is owned by the #BamfView and should not freed or modified after usage.
         */
        peek_children(): View[];
        set_sticky(value: boolean): void;
    }

    namespace Window {
        // Signal callback interfaces

        interface MaximizedChanged {
            (_source: Window, object: number, p0: number): void;
        }

        interface MonitorChanged {
            (_source: Window, object: number, p0: number): void;
        }

        // Signal signatures
        interface SignalSignatures extends View.SignalSignatures {
            'maximized-changed': MaximizedChanged;
            'monitor-changed': MonitorChanged;
            'notify::active': GObject.Object.Notify;
            'notify::path': GObject.Object.Notify;
            'notify::running': GObject.Object.Notify;
            'notify::starting': GObject.Object.Notify;
            'notify::urgent': GObject.Object.Notify;
            'notify::user-visible': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps extends View.ConstructorProps {}
    }

    class Window extends View {
        static $gtype: GObject.GType<Window>;

        // Constructors

        constructor(properties?: Partial<Window.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Window.SignalSignatures>(signal: K, callback: Window.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Window.SignalSignatures>(signal: K, callback: Window.SignalSignatures[K]): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Window.SignalSignatures>(
            signal: K,
            ...args: Window.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_get_monitor(): number;
        vfunc_get_pid(): number;
        vfunc_get_transient(): Window;
        vfunc_get_utf8_prop(prop: string): string;
        vfunc_get_window_type(): WindowType;
        vfunc_get_xid(): number;
        vfunc_last_active(): number;
        vfunc_maximized(): WindowMaximizationType;
        vfunc_maximized_changed(old_value: number, new_value: number): void;
        vfunc_monitor_changed(old_value: number, new_value: number): void;

        // Methods

        get_monitor(): number;
        get_pid(): number;
        get_transient(): Window;
        get_utf8_prop(prop: string): string;
        get_window_type(): WindowType;
        get_xid(): number;
        last_active(): number;
        maximized(): WindowMaximizationType;
    }

    type ApplicationClass = typeof Application;
    abstract class ApplicationPrivate {
        static $gtype: GObject.GType<ApplicationPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ControlClass = typeof Control;
    abstract class ControlPrivate {
        static $gtype: GObject.GType<ControlPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type MatcherClass = typeof Matcher;
    abstract class MatcherPrivate {
        static $gtype: GObject.GType<MatcherPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type TabClass = typeof Tab;
    abstract class TabPrivate {
        static $gtype: GObject.GType<TabPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ViewClass = typeof View;
    abstract class ViewPrivate {
        static $gtype: GObject.GType<ViewPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WindowClass = typeof Window;
    abstract class WindowPrivate {
        static $gtype: GObject.GType<WindowPrivate>;

        // Constructors

        _init(...args: any[]): void;
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
