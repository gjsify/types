
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './bamf-3-ambient.d.ts';
import './bamf-3-import.d.ts';
/**
 * Bamf-3
 */

import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export enum ClickBehavior {
    NONE,
    OPEN,
    FOCUS,
    FOCUS_ALL,
    MINIMIZE,
    RESTORE,
    RESTORE_ALL,
    PICKER,
}
export enum WindowMaximizationType {
    FLOATING,
    HORIZONTAL_MAXIMIZED,
    VERTICAL_MAXIMIZED,
    MAXIMIZED,
}
export enum WindowType {
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
export const APPLICATION_SIGNAL_DESKTOP_FILE_UPDATED: string | null
export const APPLICATION_SIGNAL_WINDOW_ADDED: string | null
export const APPLICATION_SIGNAL_WINDOW_REMOVED: string | null
export const MATCHER_SIGNAL_ACTIVE_APPLICATION_CHANGED: string | null
export const MATCHER_SIGNAL_ACTIVE_WINDOW_CHANGED: string | null
export const MATCHER_SIGNAL_STACKING_ORDER_CHANGED: string | null
export const MATCHER_SIGNAL_VIEW_CLOSED: string | null
export const MATCHER_SIGNAL_VIEW_OPENED: string | null
export const VIEW_SIGNAL_ACTIVE_CHANGED: string | null
export const VIEW_SIGNAL_CHILD_ADDED: string | null
export const VIEW_SIGNAL_CHILD_MOVED: string | null
export const VIEW_SIGNAL_CHILD_REMOVED: string | null
export const VIEW_SIGNAL_CLOSED: string | null
export const VIEW_SIGNAL_ICON_CHANGED: string | null
export const VIEW_SIGNAL_NAME_CHANGED: string | null
export const VIEW_SIGNAL_RUNNING_CHANGED: string | null
export const VIEW_SIGNAL_STARTING_CHANGED: string | null
export const VIEW_SIGNAL_URGENT_CHANGED: string | null
export const VIEW_SIGNAL_USER_VISIBLE_CHANGED: string | null
export const WINDOW_SIGNAL_MAXIMIZED_CHANGED: string | null
export const WINDOW_SIGNAL_MONITOR_CHANGED: string | null
export interface TabPreviewReadyCallback {
    (self: Tab, preview_data: string | null): void
}
export module Application {

    // Signal callback interfaces

    /**
     * Signal callback interface for `desktop-file-updated`
     */
    export interface DesktopFileUpdatedSignalCallback {
        ($obj: Application, object: string | null): void
    }

    /**
     * Signal callback interface for `window-added`
     */
    export interface WindowAddedSignalCallback {
        ($obj: Application, object: Window): void
    }

    /**
     * Signal callback interface for `window-removed`
     */
    export interface WindowRemovedSignalCallback {
        ($obj: Application, object: Window): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends View.ConstructorProperties {
    }

}

export interface Application {

    // Own fields of Bamf-3.Bamf.Application

    parent: View & GObject.InitiallyUnowned
    priv: any

    // Owm methods of Bamf-3.Bamf.Application

    /**
     * Used to fetch the bus name and the object path of the remote application menu.
     * @returns %TRUE if found, %FALSE otherwise.
     */
    get_application_menu(): [ /* returnType */ boolean, /* name */ string | null, /* object_path */ string | null ]
    get_application_type(): string | null
    /**
     * Used to fetch the path to the .desktop file associated with the passed application. If
     * none exists, the result is NULL.
     * @returns A string representing the path to the desktop file.
     */
    get_desktop_file(): string | null
    get_focusable_child(): View
    /**
     * Used to discover whether the application wants menu stubs shown.
     * @returns Whether the stubs should be shown.
     */
    get_show_menu_stubs(): boolean
    get_supported_mime_types(): string[]
    /**
     * Used to fetch the application contains a Window with given `xid`.
     * @param xid an X11 Window ID
     * @returns a #BamfWindow for the passed @xid or %NULL if not found.
     */
    get_window_for_xid(xid: number): Window
    /**
     * Used to fetch all #BamfWindow's associated with the passed #BamfApplication.
     * @returns A list of #BamfWindow's.
     */
    get_windows(): Window[]
    /**
     * Used to fetch all #BamfWindow's xids associated with the passed #BamfApplication.
     * @returns An array of xids.
     */
    get_xids(): number[]

    // Own signals of Bamf-3.Bamf.Application

    connect(sigName: "desktop-file-updated", callback: Application.DesktopFileUpdatedSignalCallback): number
    connect_after(sigName: "desktop-file-updated", callback: Application.DesktopFileUpdatedSignalCallback): number
    emit(sigName: "desktop-file-updated", object: string | null, ...args: any[]): void
    connect(sigName: "window-added", callback: Application.WindowAddedSignalCallback): number
    connect_after(sigName: "window-added", callback: Application.WindowAddedSignalCallback): number
    emit(sigName: "window-added", object: Window, ...args: any[]): void
    connect(sigName: "window-removed", callback: Application.WindowRemovedSignalCallback): number
    connect_after(sigName: "window-removed", callback: Application.WindowRemovedSignalCallback): number
    emit(sigName: "window-removed", object: Window, ...args: any[]): void

    // Class property signals of Bamf-3.Bamf.Application

    connect(sigName: "notify::active", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::path", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::running", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::running", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::running", ...args: any[]): void
    connect(sigName: "notify::starting", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::starting", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::starting", ...args: any[]): void
    connect(sigName: "notify::urgent", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgent", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::urgent", ...args: any[]): void
    connect(sigName: "notify::user-visible", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-visible", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-visible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Application extends View {

    // Own properties of Bamf-3.Bamf.Application

    static name: string
    static $gtype: GObject.GType<Application>

    // Constructors of Bamf-3.Bamf.Application

    constructor(config?: Application.ConstructorProperties) 
    _init(config?: Application.ConstructorProperties): void
}

export module Control {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Control {

    // Own fields of Bamf-3.Bamf.Control

    parent: GObject.Object
    priv: ControlPrivate

    // Owm methods of Bamf-3.Bamf.Control

    create_local_desktop_file(application: Application): void
    insert_desktop_file(desktop_file: string | null): void
    register_application_for_pid(desktop_file: string | null, pid: number): void
    set_approver_behavior(behavior: number): void

    // Class property signals of Bamf-3.Bamf.Control

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Control extends GObject.Object {

    // Own properties of Bamf-3.Bamf.Control

    static name: string
    static $gtype: GObject.GType<Control>

    // Constructors of Bamf-3.Bamf.Control

    constructor(config?: Control.ConstructorProperties) 
    _init(config?: Control.ConstructorProperties): void
    static get_default(): Control
}

export module Matcher {

    // Signal callback interfaces

    /**
     * Signal callback interface for `active-application-changed`
     */
    export interface ActiveApplicationChangedSignalCallback {
        ($obj: Matcher, object: Application, p0: Application): void
    }

    /**
     * Signal callback interface for `active-window-changed`
     */
    export interface ActiveWindowChangedSignalCallback {
        ($obj: Matcher, object: Window, p0: Window): void
    }

    /**
     * Signal callback interface for `stacking-order-changed`
     */
    export interface StackingOrderChangedSignalCallback {
        ($obj: Matcher): void
    }

    /**
     * Signal callback interface for `view-closed`
     */
    export interface ViewClosedSignalCallback {
        ($obj: Matcher, object: View): void
    }

    /**
     * Signal callback interface for `view-opened`
     */
    export interface ViewOpenedSignalCallback {
        ($obj: Matcher, object: View): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Matcher {

    // Own fields of Bamf-3.Bamf.Matcher

    parent: GObject.Object
    priv: MatcherPrivate

    // Owm methods of Bamf-3.Bamf.Matcher

    application_is_running(desktop_file: string | null): boolean
    /**
     * Used to fetch the active #BamfApplication.
     * @returns The active #BamfApplication.
     */
    get_active_application(): Application
    /**
     * Used to fetch the active #BamfWindow.
     * @returns The active #BamfWindow.
     */
    get_active_window(): Window
    get_application_for_desktop_file(desktop_file_path: string | null, create_if_not_found: boolean): Application
    /**
     * Used to fetch the #BamfApplication containing the passed window.
     * @param window The window to look for
     * @returns The #BamfApplication representing the xid passed, or NULL if none exists.
     */
    get_application_for_window(window: Window): Application
    /**
     * Used to fetch the #BamfApplication containing the passed xid.
     * @param xid The XID to search for
     * @returns The #BamfApplication representing the xid passed, or NULL if none exists.
     */
    get_application_for_xid(xid: number): Application
    /**
     * Used to fetch all #BamfApplication's running or not. Application authors who wish to only
     * see running applications should use bamf_matcher_get_running_applications instead. The reason
     * this method is needed is bamf will occasionally track applications which are not currently
     * running for nefarious purposes.
     * @returns A list of #BamfApplication's.
     */
    get_applications(): Application[]
    /**
     * Used to fetch all #BamfApplication's which are running.
     * @returns A list of #BamfApplication's.
     */
    get_running_applications(): Application[]
    /**
     * Used to fetch all #BamfView's representing tabs. Currently unused.
     * @returns A list of #BamfTab's.
     */
    get_tabs(): Tab[]
    /**
     * Used to fetch the #BamfWindow that wraps the given `window`.
     * @param xid The X11 Window ID to search for
     * @returns The #BamfWindow representing the xid passed, or NULL if none exists.
     */
    get_window_for_xid(xid: number): Window
    /**
     * Used to fetch all windows that BAMF knows about in the requested screen,
     * in stacking bottom-to-top order. If the `monitor` is set to a negative value,
     * then it fetches all the available windows in all monitors.
     * @param monitor the monitor you want the stack from, negative value to get all
     * @returns A list of #BamfWindow's.
     */
    get_window_stack_for_monitor(monitor: number): Window[]
    /**
     * Used to fetch all windows that BAMF knows about.
     * @returns A list of #BamfWindow's.
     */
    get_windows(): Window[]
    /**
     * Used to fetch all xid's associated with an application. Useful for performing window
     * @param desktop_file 
     * @returns A list of xids.
     */
    get_xids_for_application(desktop_file: string | null): number[]
    /**
     * Used to effect how bamf performs matching. Desktop files passed to this method will
     * be prefered by bamf to system desktop files.
     * @param favorites an array of strings, each containing an absolute path to a .desktop file
     */
    register_favorites(favorites: string[]): void

    // Own signals of Bamf-3.Bamf.Matcher

    connect(sigName: "active-application-changed", callback: Matcher.ActiveApplicationChangedSignalCallback): number
    connect_after(sigName: "active-application-changed", callback: Matcher.ActiveApplicationChangedSignalCallback): number
    emit(sigName: "active-application-changed", object: Application, p0: Application, ...args: any[]): void
    connect(sigName: "active-window-changed", callback: Matcher.ActiveWindowChangedSignalCallback): number
    connect_after(sigName: "active-window-changed", callback: Matcher.ActiveWindowChangedSignalCallback): number
    emit(sigName: "active-window-changed", object: Window, p0: Window, ...args: any[]): void
    connect(sigName: "stacking-order-changed", callback: Matcher.StackingOrderChangedSignalCallback): number
    connect_after(sigName: "stacking-order-changed", callback: Matcher.StackingOrderChangedSignalCallback): number
    emit(sigName: "stacking-order-changed", ...args: any[]): void
    connect(sigName: "view-closed", callback: Matcher.ViewClosedSignalCallback): number
    connect_after(sigName: "view-closed", callback: Matcher.ViewClosedSignalCallback): number
    emit(sigName: "view-closed", object: View, ...args: any[]): void
    connect(sigName: "view-opened", callback: Matcher.ViewOpenedSignalCallback): number
    connect_after(sigName: "view-opened", callback: Matcher.ViewOpenedSignalCallback): number
    emit(sigName: "view-opened", object: View, ...args: any[]): void

    // Class property signals of Bamf-3.Bamf.Matcher

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Matcher extends GObject.Object {

    // Own properties of Bamf-3.Bamf.Matcher

    static name: string
    static $gtype: GObject.GType<Matcher>

    // Constructors of Bamf-3.Bamf.Matcher

    constructor(config?: Matcher.ConstructorProperties) 
    _init(config?: Matcher.ConstructorProperties): void
    /**
     * Returns the default matcher. This matcher is owned by bamf and shared between other callers.
     * @returns A new #BamfMatcher
     */
    static get_default(): Matcher
}

export module Tab {

    // Constructor properties interface

    export interface ConstructorProperties extends View.ConstructorProperties {
    }

}

export interface Tab {

    // Own properties of Bamf-3.Bamf.Tab

    readonly desktop_id: string | null
    readonly desktopId: string | null
    readonly is_foreground_tab: boolean
    readonly isForegroundTab: boolean
    readonly location: string | null
    readonly xid: number

    // Own fields of Bamf-3.Bamf.Tab

    parent: View & GObject.InitiallyUnowned
    priv: any

    // Owm methods of Bamf-3.Bamf.Tab

    /**
     * Closes the selected `self` tab.
     * @returns %TRUE if success, %FALSE otherwise.
     */
    close(): boolean
    /**
     * Returns the desktop file for the tab.
     * @returns The tab desktop id or %NULL if not set or available. Do not free the returned value, it belongs to @self.
     */
    get_desktop_name(): string | null
    get_is_foreground_tab(): boolean
    get_location(): string | null
    /**
     * The desktop file for the tab.
     * @returns The tab parent window XID id or 0 if not set or available.
     */
    get_xid(): number
    /**
     * Selects the `self` tab in the parent window.
     * @returns %TRUE if success, %FALSE otherwise.
     */
    raise(): boolean
    request_preview(callback: TabPreviewReadyCallback): void

    // Own virtual methods of Bamf-3.Bamf.Tab

    /**
     * Returns the desktop file for the tab.
     * @virtual 
     * @returns The tab desktop id or %NULL if not set or available. Do not free the returned value, it belongs to @self.
     */
    vfunc_get_desktop_name(): string | null
    vfunc_get_is_foreground_tab(): boolean
    vfunc_get_location(): string | null
    /**
     * The desktop file for the tab.
     * @virtual 
     * @returns The tab parent window XID id or 0 if not set or available.
     */
    vfunc_get_xid(): number

    // Class property signals of Bamf-3.Bamf.Tab

    connect(sigName: "notify::desktop-id", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::desktop-id", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::desktop-id", ...args: any[]): void
    connect(sigName: "notify::is-foreground-tab", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-foreground-tab", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-foreground-tab", ...args: any[]): void
    connect(sigName: "notify::location", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::xid", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xid", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xid", ...args: any[]): void
    connect(sigName: "notify::active", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::path", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::running", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::running", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::running", ...args: any[]): void
    connect(sigName: "notify::starting", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::starting", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::starting", ...args: any[]): void
    connect(sigName: "notify::urgent", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgent", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::urgent", ...args: any[]): void
    connect(sigName: "notify::user-visible", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-visible", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-visible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Tab extends View {

    // Own properties of Bamf-3.Bamf.Tab

    static name: string
    static $gtype: GObject.GType<Tab>

    // Constructors of Bamf-3.Bamf.Tab

    constructor(config?: Tab.ConstructorProperties) 
    _init(config?: Tab.ConstructorProperties): void
}

export module View {

    // Signal callback interfaces

    /**
     * Signal callback interface for `active-changed`
     */
    export interface ActiveChangedSignalCallback {
        ($obj: View, object: boolean): void
    }

    /**
     * Signal callback interface for `child-added`
     */
    export interface ChildAddedSignalCallback {
        ($obj: View, object: View): void
    }

    /**
     * Signal callback interface for `child-moved`
     */
    export interface ChildMovedSignalCallback {
        ($obj: View, object: View): void
    }

    /**
     * Signal callback interface for `child-removed`
     */
    export interface ChildRemovedSignalCallback {
        ($obj: View, object: View): void
    }

    /**
     * Signal callback interface for `closed`
     */
    export interface ClosedSignalCallback {
        ($obj: View): void
    }

    /**
     * Signal callback interface for `icon-changed`
     */
    export interface IconChangedSignalCallback {
        ($obj: View, object: string | null): void
    }

    /**
     * Signal callback interface for `name-changed`
     */
    export interface NameChangedSignalCallback {
        ($obj: View, object: string | null, p0: string | null): void
    }

    /**
     * Signal callback interface for `running-changed`
     */
    export interface RunningChangedSignalCallback {
        ($obj: View, object: boolean): void
    }

    /**
     * Signal callback interface for `starting-changed`
     */
    export interface StartingChangedSignalCallback {
        ($obj: View, object: boolean): void
    }

    /**
     * Signal callback interface for `urgent-changed`
     */
    export interface UrgentChangedSignalCallback {
        ($obj: View, object: boolean): void
    }

    /**
     * Signal callback interface for `user-visible-changed`
     */
    export interface UserVisibleChangedSignalCallback {
        ($obj: View, object: boolean): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
    }

}

export interface View {

    // Own properties of Bamf-3.Bamf.View

    readonly active: boolean
    readonly path: string | null
    readonly running: boolean
    readonly starting: boolean
    readonly urgent: boolean
    readonly user_visible: boolean
    readonly userVisible: boolean

    // Own fields of Bamf-3.Bamf.View

    parent: GObject.InitiallyUnowned
    priv: ViewPrivate

    // Owm methods of Bamf-3.Bamf.View

    /**
     * Note: Makes sever dbus calls the first time this is called on a view. Dbus messaging is reduced afterwards.
     * @returns Returns a list of #BamfView which must be           freed after usage. Elements of the list are owned by bamf and should not be unreffed.
     */
    get_children(): View[]
    get_click_suggestion(): ClickBehavior
    /**
     * Gets the icon of a view. This icon is used to visually represent the view.
     */
    get_icon(): string | null
    /**
     * Gets the name of a view. This name is a short name best used to represent the view with text.
     */
    get_name(): string | null
    /**
     * The view type of a window is a short string used to represent all views of the same class. These
     * descriptions should not be used to do casting as they are not considered stable.
     */
    get_view_type(): string | null
    has_child(child: View): boolean
    /**
     * Determines if the view is currently active and focused by the user. Useful for an active window indicator.
     */
    is_active(): boolean
    /**
     * Determines if the view is closed or not.
     */
    is_closed(): boolean
    /**
     * Determines if the view is currently running. Useful for a running window indicator.
     */
    is_running(): boolean
    /**
     * Determines if the view is currently starting. Useful for the startup animation.
     */
    is_starting(): boolean
    is_sticky(): boolean
    /**
     * Determines if the view is currently requiring attention. Useful for a running window indicator.
     */
    is_urgent(): boolean
    is_user_visible(): boolean
    /**
     * Note: Makes sever dbus calls the first time this is called on a view.
     * Dbus messaging is reduced afterwards.
     * @returns Returns a list of #BamfView which           is owned by the #BamfView and should not freed or modified after usage.
     */
    peek_children(): View[]
    set_sticky(value: boolean): void

    // Own virtual methods of Bamf-3.Bamf.View

    vfunc_active_changed(active: boolean): void
    vfunc_child_added(child: View): void
    vfunc_child_moved(child: View): void
    vfunc_child_removed(child: View): void
    vfunc_click_behavior(): ClickBehavior
    vfunc_closed(): void
    /**
     * Note: Makes sever dbus calls the first time this is called on a view. Dbus messaging is reduced afterwards.
     * @virtual 
     * @returns Returns a list of #BamfView which must be           freed after usage. Elements of the list are owned by bamf and should not be unreffed.
     */
    vfunc_get_children(): View[]
    /**
     * Gets the icon of a view. This icon is used to visually represent the view.
     * @virtual 
     */
    vfunc_get_icon(): string | null
    /**
     * Gets the name of a view. This name is a short name best used to represent the view with text.
     * @virtual 
     */
    vfunc_get_name(): string | null
    vfunc_icon_changed(icon: string | null): void
    /**
     * Determines if the view is currently active and focused by the user. Useful for an active window indicator.
     * @virtual 
     */
    vfunc_is_active(): boolean
    /**
     * Determines if the view is currently running. Useful for a running window indicator.
     * @virtual 
     */
    vfunc_is_running(): boolean
    /**
     * Determines if the view is currently starting. Useful for the startup animation.
     * @virtual 
     */
    vfunc_is_starting(): boolean
    /**
     * Determines if the view is currently requiring attention. Useful for a running window indicator.
     * @virtual 
     */
    vfunc_is_urgent(): boolean
    vfunc_is_user_visible(): boolean
    vfunc_name_changed(old_name: string | null, new_name: string | null): void
    vfunc_running_changed(running: boolean): void
    vfunc_set_path(path: string | null): void
    vfunc_set_sticky(value: boolean): void
    vfunc_starting_changed(starting: boolean): void
    vfunc_urgent_changed(urgent: boolean): void
    vfunc_user_visible_changed(user_visible: boolean): void
    /**
     * The view type of a window is a short string used to represent all views of the same class. These
     * descriptions should not be used to do casting as they are not considered stable.
     * @virtual 
     */
    vfunc_view_type(): string | null

    // Own signals of Bamf-3.Bamf.View

    connect(sigName: "active-changed", callback: View.ActiveChangedSignalCallback): number
    connect_after(sigName: "active-changed", callback: View.ActiveChangedSignalCallback): number
    emit(sigName: "active-changed", object: boolean, ...args: any[]): void
    connect(sigName: "child-added", callback: View.ChildAddedSignalCallback): number
    connect_after(sigName: "child-added", callback: View.ChildAddedSignalCallback): number
    emit(sigName: "child-added", object: View, ...args: any[]): void
    connect(sigName: "child-moved", callback: View.ChildMovedSignalCallback): number
    connect_after(sigName: "child-moved", callback: View.ChildMovedSignalCallback): number
    emit(sigName: "child-moved", object: View, ...args: any[]): void
    connect(sigName: "child-removed", callback: View.ChildRemovedSignalCallback): number
    connect_after(sigName: "child-removed", callback: View.ChildRemovedSignalCallback): number
    emit(sigName: "child-removed", object: View, ...args: any[]): void
    connect(sigName: "closed", callback: View.ClosedSignalCallback): number
    connect_after(sigName: "closed", callback: View.ClosedSignalCallback): number
    emit(sigName: "closed", ...args: any[]): void
    connect(sigName: "icon-changed", callback: View.IconChangedSignalCallback): number
    connect_after(sigName: "icon-changed", callback: View.IconChangedSignalCallback): number
    emit(sigName: "icon-changed", object: string | null, ...args: any[]): void
    connect(sigName: "name-changed", callback: View.NameChangedSignalCallback): number
    connect_after(sigName: "name-changed", callback: View.NameChangedSignalCallback): number
    emit(sigName: "name-changed", object: string | null, p0: string | null, ...args: any[]): void
    connect(sigName: "running-changed", callback: View.RunningChangedSignalCallback): number
    connect_after(sigName: "running-changed", callback: View.RunningChangedSignalCallback): number
    emit(sigName: "running-changed", object: boolean, ...args: any[]): void
    connect(sigName: "starting-changed", callback: View.StartingChangedSignalCallback): number
    connect_after(sigName: "starting-changed", callback: View.StartingChangedSignalCallback): number
    emit(sigName: "starting-changed", object: boolean, ...args: any[]): void
    connect(sigName: "urgent-changed", callback: View.UrgentChangedSignalCallback): number
    connect_after(sigName: "urgent-changed", callback: View.UrgentChangedSignalCallback): number
    emit(sigName: "urgent-changed", object: boolean, ...args: any[]): void
    connect(sigName: "user-visible-changed", callback: View.UserVisibleChangedSignalCallback): number
    connect_after(sigName: "user-visible-changed", callback: View.UserVisibleChangedSignalCallback): number
    emit(sigName: "user-visible-changed", object: boolean, ...args: any[]): void

    // Class property signals of Bamf-3.Bamf.View

    connect(sigName: "notify::active", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::path", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::running", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::running", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::running", ...args: any[]): void
    connect(sigName: "notify::starting", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::starting", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::starting", ...args: any[]): void
    connect(sigName: "notify::urgent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::urgent", ...args: any[]): void
    connect(sigName: "notify::user-visible", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-visible", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-visible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class View extends GObject.InitiallyUnowned {

    // Own properties of Bamf-3.Bamf.View

    static name: string
    static $gtype: GObject.GType<View>

    // Constructors of Bamf-3.Bamf.View

    constructor(config?: View.ConstructorProperties) 
    _init(config?: View.ConstructorProperties): void
}

export module Window {

    // Signal callback interfaces

    /**
     * Signal callback interface for `maximized-changed`
     */
    export interface MaximizedChangedSignalCallback {
        ($obj: Window, object: number, p0: number): void
    }

    /**
     * Signal callback interface for `monitor-changed`
     */
    export interface MonitorChangedSignalCallback {
        ($obj: Window, object: number, p0: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends View.ConstructorProperties {
    }

}

export interface Window {

    // Own fields of Bamf-3.Bamf.Window

    parent: View & GObject.InitiallyUnowned
    priv: any

    // Owm methods of Bamf-3.Bamf.Window

    get_monitor(): number
    get_pid(): number
    get_transient(): Window
    get_utf8_prop(prop: string | null): string | null
    get_window_type(): WindowType
    get_xid(): number
    last_active(): number
    maximized(): WindowMaximizationType

    // Own virtual methods of Bamf-3.Bamf.Window

    vfunc_get_monitor(): number
    vfunc_get_pid(): number
    vfunc_get_transient(): Window
    vfunc_get_utf8_prop(prop: string | null): string | null
    vfunc_get_window_type(): WindowType
    vfunc_get_xid(): number
    vfunc_last_active(): number
    vfunc_maximized(): WindowMaximizationType
    vfunc_maximized_changed(old_value: number, new_value: number): void
    vfunc_monitor_changed(old_value: number, new_value: number): void

    // Own signals of Bamf-3.Bamf.Window

    connect(sigName: "maximized-changed", callback: Window.MaximizedChangedSignalCallback): number
    connect_after(sigName: "maximized-changed", callback: Window.MaximizedChangedSignalCallback): number
    emit(sigName: "maximized-changed", object: number, p0: number, ...args: any[]): void
    connect(sigName: "monitor-changed", callback: Window.MonitorChangedSignalCallback): number
    connect_after(sigName: "monitor-changed", callback: Window.MonitorChangedSignalCallback): number
    emit(sigName: "monitor-changed", object: number, p0: number, ...args: any[]): void

    // Class property signals of Bamf-3.Bamf.Window

    connect(sigName: "notify::active", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::path", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::running", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::running", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::running", ...args: any[]): void
    connect(sigName: "notify::starting", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::starting", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::starting", ...args: any[]): void
    connect(sigName: "notify::urgent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::urgent", ...args: any[]): void
    connect(sigName: "notify::user-visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-visible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Window extends View {

    // Own properties of Bamf-3.Bamf.Window

    static name: string
    static $gtype: GObject.GType<Window>

    // Constructors of Bamf-3.Bamf.Window

    constructor(config?: Window.ConstructorProperties) 
    _init(config?: Window.ConstructorProperties): void
}

export interface ApplicationClass {

    // Own fields of Bamf-3.Bamf.ApplicationClass

    parent_class: ViewClass
}

export abstract class ApplicationClass {

    // Own properties of Bamf-3.Bamf.ApplicationClass

    static name: string
}

export interface ApplicationPrivate {
}

export class ApplicationPrivate {

    // Own properties of Bamf-3.Bamf.ApplicationPrivate

    static name: string
}

export interface ControlClass {

    // Own fields of Bamf-3.Bamf.ControlClass

    parent_class: GObject.ObjectClass
}

export abstract class ControlClass {

    // Own properties of Bamf-3.Bamf.ControlClass

    static name: string
}

export interface ControlPrivate {
}

export class ControlPrivate {

    // Own properties of Bamf-3.Bamf.ControlPrivate

    static name: string
}

export interface MatcherClass {

    // Own fields of Bamf-3.Bamf.MatcherClass

    parent_class: GObject.ObjectClass
}

export abstract class MatcherClass {

    // Own properties of Bamf-3.Bamf.MatcherClass

    static name: string
}

export interface MatcherPrivate {
}

export class MatcherPrivate {

    // Own properties of Bamf-3.Bamf.MatcherPrivate

    static name: string
}

export interface TabClass {

    // Own fields of Bamf-3.Bamf.TabClass

    parent_class: ViewClass
    get_desktop_name: (self: Tab) => string | null
    get_location: (self: Tab) => string | null
    get_xid: (self: Tab) => number
    get_is_foreground_tab: (self: Tab) => boolean
}

export abstract class TabClass {

    // Own properties of Bamf-3.Bamf.TabClass

    static name: string
}

export interface TabPrivate {
}

export class TabPrivate {

    // Own properties of Bamf-3.Bamf.TabPrivate

    static name: string
}

export interface ViewClass {

    // Own fields of Bamf-3.Bamf.ViewClass

    parent_class: GObject.InitiallyUnownedClass
    get_children: (view: View) => View[]
    is_active: (view: View) => boolean
    is_running: (view: View) => boolean
    is_urgent: (view: View) => boolean
    is_user_visible: (view: View) => boolean
    get_name: (view: View) => string | null
    get_icon: (view: View) => string | null
    view_type: (view: View) => string | null
    set_path: (view: View, path: string | null) => void
    set_sticky: (view: View, value: boolean) => void
    click_behavior: (view: View) => ClickBehavior
    active_changed: (view: View, active: boolean) => void
    closed: (view: View) => void
    child_added: (view: View, child: View) => void
    child_removed: (view: View, child: View) => void
    running_changed: (view: View, running: boolean) => void
    urgent_changed: (view: View, urgent: boolean) => void
    user_visible_changed: (view: View, user_visible: boolean) => void
    name_changed: (view: View, old_name: string | null, new_name: string | null) => void
    icon_changed: (view: View, icon: string | null) => void
    child_moved: (view: View, child: View) => void
    is_starting: (view: View) => boolean
    starting_changed: (view: View, starting: boolean) => void
}

export abstract class ViewClass {

    // Own properties of Bamf-3.Bamf.ViewClass

    static name: string
}

export interface ViewPrivate {
}

export class ViewPrivate {

    // Own properties of Bamf-3.Bamf.ViewPrivate

    static name: string
}

export interface WindowClass {

    // Own fields of Bamf-3.Bamf.WindowClass

    parent_class: ViewClass
    get_transient: (self: Window) => Window
    get_window_type: (self: Window) => WindowType
    get_xid: (self: Window) => number
    get_pid: (self: Window) => number
    get_monitor: (self: Window) => number
    get_utf8_prop: (self: Window, prop: string | null) => string | null
    maximized: (self: Window) => WindowMaximizationType
    last_active: (self: Window) => number
    monitor_changed: (window: Window, old_value: number, new_value: number) => void
    maximized_changed: (window: Window, old_value: number, new_value: number) => void
}

export abstract class WindowClass {

    // Own properties of Bamf-3.Bamf.WindowClass

    static name: string
}

export interface WindowPrivate {
}

export class WindowPrivate {

    // Own properties of Bamf-3.Bamf.WindowPrivate

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END