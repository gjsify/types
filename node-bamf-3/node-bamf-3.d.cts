
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-bamf-3-import.d.ts';
    
/**
 * Bamf-3
 */

import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

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
export const APPLICATION_SIGNAL_DESKTOP_FILE_UPDATED: string
export const APPLICATION_SIGNAL_WINDOW_ADDED: string
export const APPLICATION_SIGNAL_WINDOW_REMOVED: string
export const MATCHER_SIGNAL_ACTIVE_APPLICATION_CHANGED: string
export const MATCHER_SIGNAL_ACTIVE_WINDOW_CHANGED: string
export const MATCHER_SIGNAL_STACKING_ORDER_CHANGED: string
export const MATCHER_SIGNAL_VIEW_CLOSED: string
export const MATCHER_SIGNAL_VIEW_OPENED: string
export const VIEW_SIGNAL_ACTIVE_CHANGED: string
export const VIEW_SIGNAL_CHILD_ADDED: string
export const VIEW_SIGNAL_CHILD_MOVED: string
export const VIEW_SIGNAL_CHILD_REMOVED: string
export const VIEW_SIGNAL_CLOSED: string
export const VIEW_SIGNAL_ICON_CHANGED: string
export const VIEW_SIGNAL_NAME_CHANGED: string
export const VIEW_SIGNAL_RUNNING_CHANGED: string
export const VIEW_SIGNAL_STARTING_CHANGED: string
export const VIEW_SIGNAL_URGENT_CHANGED: string
export const VIEW_SIGNAL_USER_VISIBLE_CHANGED: string
export const WINDOW_SIGNAL_MAXIMIZED_CHANGED: string
export const WINDOW_SIGNAL_MONITOR_CHANGED: string
export interface TabPreviewReadyCallback {
    (self: Tab, previewData: string): void
}
export module Application {

    // Signal callback interfaces

    /**
     * Signal callback interface for `desktop-file-updated`
     */
    export interface DesktopFileUpdatedSignalCallback {
        (object: string | null): void
    }

    /**
     * Signal callback interface for `window-added`
     */
    export interface WindowAddedSignalCallback {
        (object: Window): void
    }

    /**
     * Signal callback interface for `window-removed`
     */
    export interface WindowRemovedSignalCallback {
        (object: Window): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends View.ConstructorProperties {
    }

}

export interface Application {

    // Own properties of Bamf-3.Bamf.Application

    __gtype__: number

    // Own fields of Bamf-3.Bamf.Application

    parent: View & GObject.InitiallyUnowned
    priv: any

    // Owm methods of Bamf-3.Bamf.Application

    /**
     * Used to fetch the bus name and the object path of the remote application menu.
     * @returns %TRUE if found, %FALSE otherwise.
     */
    getApplicationMenu(): [ /* returnType */ boolean, /* name */ string | null, /* objectPath */ string | null ]
    getApplicationType(): string
    /**
     * Used to fetch the path to the .desktop file associated with the passed application. If
     * none exists, the result is NULL.
     * @returns A string representing the path to the desktop file.
     */
    getDesktopFile(): string
    getFocusableChild(): View
    /**
     * Used to discover whether the application wants menu stubs shown.
     * @returns Whether the stubs should be shown.
     */
    getShowMenuStubs(): boolean
    getSupportedMimeTypes(): string[]
    /**
     * Used to fetch the application contains a Window with given `xid`.
     * @param xid an X11 Window ID
     * @returns a #BamfWindow for the passed @xid or %NULL if not found.
     */
    getWindowForXid(xid: number): Window
    /**
     * Used to fetch all #BamfWindow's associated with the passed #BamfApplication.
     * @returns A list of #BamfWindow's.
     */
    getWindows(): Window[]
    /**
     * Used to fetch all #BamfWindow's xids associated with the passed #BamfApplication.
     * @returns An array of xids.
     */
    getXids(): number[]

    // Own signals of Bamf-3.Bamf.Application

    connect(sigName: "desktop-file-updated", callback: Application.DesktopFileUpdatedSignalCallback): number
    on(sigName: "desktop-file-updated", callback: Application.DesktopFileUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "desktop-file-updated", callback: Application.DesktopFileUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "desktop-file-updated", callback: Application.DesktopFileUpdatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "desktop-file-updated", ...args: any[]): void
    connect(sigName: "window-added", callback: Application.WindowAddedSignalCallback): number
    on(sigName: "window-added", callback: Application.WindowAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-added", callback: Application.WindowAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-added", callback: Application.WindowAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "window-added", ...args: any[]): void
    connect(sigName: "window-removed", callback: Application.WindowRemovedSignalCallback): number
    on(sigName: "window-removed", callback: Application.WindowRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-removed", callback: Application.WindowRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-removed", callback: Application.WindowRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "window-removed", ...args: any[]): void

    // Class property signals of Bamf-3.Bamf.Application

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::path", callback: (...args: any[]) => void): number
    on(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::running", callback: (...args: any[]) => void): number
    on(sigName: "notify::running", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::running", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::running", ...args: any[]): void
    connect(sigName: "notify::starting", callback: (...args: any[]) => void): number
    on(sigName: "notify::starting", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::starting", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::starting", ...args: any[]): void
    connect(sigName: "notify::urgent", callback: (...args: any[]) => void): number
    on(sigName: "notify::urgent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::urgent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::urgent", ...args: any[]): void
    connect(sigName: "notify::user-visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-visible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Application extends View {

    // Own properties of Bamf-3.Bamf.Application

    static name: string

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

    // Own properties of Bamf-3.Bamf.Control

    __gtype__: number

    // Own fields of Bamf-3.Bamf.Control

    parent: GObject.Object
    priv: ControlPrivate

    // Owm methods of Bamf-3.Bamf.Control

    createLocalDesktopFile(application: Application): void
    insertDesktopFile(desktopFile: string): void
    registerApplicationForPid(desktopFile: string, pid: number): void
    setApproverBehavior(behavior: number): void

    // Class property signals of Bamf-3.Bamf.Control

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

export class Control extends GObject.Object {

    // Own properties of Bamf-3.Bamf.Control

    static name: string

    // Constructors of Bamf-3.Bamf.Control

    constructor(config?: Control.ConstructorProperties) 
    _init(config?: Control.ConstructorProperties): void
    static getDefault(): Control
}

export module Matcher {

    // Signal callback interfaces

    /**
     * Signal callback interface for `active-application-changed`
     */
    export interface ActiveApplicationChangedSignalCallback {
        (object: Application, p0: Application): void
    }

    /**
     * Signal callback interface for `active-window-changed`
     */
    export interface ActiveWindowChangedSignalCallback {
        (object: Window, p0: Window): void
    }

    /**
     * Signal callback interface for `stacking-order-changed`
     */
    export interface StackingOrderChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `view-closed`
     */
    export interface ViewClosedSignalCallback {
        (object: View): void
    }

    /**
     * Signal callback interface for `view-opened`
     */
    export interface ViewOpenedSignalCallback {
        (object: View): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Matcher {

    // Own properties of Bamf-3.Bamf.Matcher

    __gtype__: number

    // Own fields of Bamf-3.Bamf.Matcher

    parent: GObject.Object
    priv: MatcherPrivate

    // Owm methods of Bamf-3.Bamf.Matcher

    applicationIsRunning(desktopFile: string): boolean
    /**
     * Used to fetch the active #BamfApplication.
     * @returns The active #BamfApplication.
     */
    getActiveApplication(): Application
    /**
     * Used to fetch the active #BamfWindow.
     * @returns The active #BamfWindow.
     */
    getActiveWindow(): Window
    getApplicationForDesktopFile(desktopFilePath: string, createIfNotFound: boolean): Application
    /**
     * Used to fetch the #BamfApplication containing the passed window.
     * @param window The window to look for
     * @returns The #BamfApplication representing the xid passed, or NULL if none exists.
     */
    getApplicationForWindow(window: Window): Application
    /**
     * Used to fetch the #BamfApplication containing the passed xid.
     * @param xid The XID to search for
     * @returns The #BamfApplication representing the xid passed, or NULL if none exists.
     */
    getApplicationForXid(xid: number): Application
    /**
     * Used to fetch all #BamfApplication's running or not. Application authors who wish to only
     * see running applications should use bamf_matcher_get_running_applications instead. The reason
     * this method is needed is bamf will occasionally track applications which are not currently
     * running for nefarious purposes.
     * @returns A list of #BamfApplication's.
     */
    getApplications(): Application[]
    /**
     * Used to fetch all #BamfApplication's which are running.
     * @returns A list of #BamfApplication's.
     */
    getRunningApplications(): Application[]
    /**
     * Used to fetch all #BamfView's representing tabs. Currently unused.
     * @returns A list of #BamfTab's.
     */
    getTabs(): Tab[]
    /**
     * Used to fetch the #BamfWindow that wraps the given `window`.
     * @param xid The X11 Window ID to search for
     * @returns The #BamfWindow representing the xid passed, or NULL if none exists.
     */
    getWindowForXid(xid: number): Window
    /**
     * Used to fetch all windows that BAMF knows about in the requested screen,
     * in stacking bottom-to-top order. If the `monitor` is set to a negative value,
     * then it fetches all the available windows in all monitors.
     * @param monitor the monitor you want the stack from, negative value to get all
     * @returns A list of #BamfWindow's.
     */
    getWindowStackForMonitor(monitor: number): Window[]
    /**
     * Used to fetch all windows that BAMF knows about.
     * @returns A list of #BamfWindow's.
     */
    getWindows(): Window[]
    /**
     * Used to fetch all xid's associated with an application. Useful for performing window
     * @param desktopFile 
     * @returns A list of xids.
     */
    getXidsForApplication(desktopFile: string): number[]
    /**
     * Used to effect how bamf performs matching. Desktop files passed to this method will
     * be prefered by bamf to system desktop files.
     * @param favorites an array of strings, each containing an absolute path to a .desktop file
     */
    registerFavorites(favorites: string[]): void

    // Own signals of Bamf-3.Bamf.Matcher

    connect(sigName: "active-application-changed", callback: Matcher.ActiveApplicationChangedSignalCallback): number
    on(sigName: "active-application-changed", callback: Matcher.ActiveApplicationChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-application-changed", callback: Matcher.ActiveApplicationChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-application-changed", callback: Matcher.ActiveApplicationChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "active-application-changed", p0: Application, ...args: any[]): void
    connect(sigName: "active-window-changed", callback: Matcher.ActiveWindowChangedSignalCallback): number
    on(sigName: "active-window-changed", callback: Matcher.ActiveWindowChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-window-changed", callback: Matcher.ActiveWindowChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-window-changed", callback: Matcher.ActiveWindowChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "active-window-changed", p0: Window, ...args: any[]): void
    connect(sigName: "stacking-order-changed", callback: Matcher.StackingOrderChangedSignalCallback): number
    on(sigName: "stacking-order-changed", callback: Matcher.StackingOrderChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "stacking-order-changed", callback: Matcher.StackingOrderChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "stacking-order-changed", callback: Matcher.StackingOrderChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "stacking-order-changed", ...args: any[]): void
    connect(sigName: "view-closed", callback: Matcher.ViewClosedSignalCallback): number
    on(sigName: "view-closed", callback: Matcher.ViewClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "view-closed", callback: Matcher.ViewClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "view-closed", callback: Matcher.ViewClosedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "view-closed", ...args: any[]): void
    connect(sigName: "view-opened", callback: Matcher.ViewOpenedSignalCallback): number
    on(sigName: "view-opened", callback: Matcher.ViewOpenedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "view-opened", callback: Matcher.ViewOpenedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "view-opened", callback: Matcher.ViewOpenedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "view-opened", ...args: any[]): void

    // Class property signals of Bamf-3.Bamf.Matcher

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

export class Matcher extends GObject.Object {

    // Own properties of Bamf-3.Bamf.Matcher

    static name: string

    // Constructors of Bamf-3.Bamf.Matcher

    constructor(config?: Matcher.ConstructorProperties) 
    _init(config?: Matcher.ConstructorProperties): void
    /**
     * Returns the default matcher. This matcher is owned by bamf and shared between other callers.
     * @returns A new #BamfMatcher
     */
    static getDefault(): Matcher
}

export module Tab {

    // Constructor properties interface

    export interface ConstructorProperties extends View.ConstructorProperties {
    }

}

export interface Tab {

    // Own properties of Bamf-3.Bamf.Tab

    readonly desktopId: string | null
    readonly isForegroundTab: boolean
    readonly location: string | null
    readonly xid: number
    __gtype__: number

    // Own fields of Bamf-3.Bamf.Tab

    parent: View & GObject.InitiallyUnowned
    priv: any

    // Owm methods of Bamf-3.Bamf.Tab

    /**
     * Closes the selected `self` tab.
     * @returns %TRUE if success, %FALSE otherwise.
     */
    close(): boolean
    // Has conflict: getDesktopName(): string
    // Has conflict: getIsForegroundTab(): boolean
    // Has conflict: getLocation(): string
    // Has conflict: getXid(): number
    /**
     * Selects the `self` tab in the parent window.
     * @returns %TRUE if success, %FALSE otherwise.
     */
    raise(): boolean
    requestPreview(callback: TabPreviewReadyCallback): void

    // Own virtual methods of Bamf-3.Bamf.Tab

    /**
     * Returns the desktop file for the tab.
     * @virtual 
     * @returns The tab desktop id or %NULL if not set or available. Do not free the returned value, it belongs to @self.
     */
    getDesktopName(): string
    getIsForegroundTab(): boolean
    getLocation(): string
    /**
     * The desktop file for the tab.
     * @virtual 
     * @returns The tab parent window XID id or 0 if not set or available.
     */
    getXid(): number

    // Class property signals of Bamf-3.Bamf.Tab

    connect(sigName: "notify::desktop-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::desktop-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::desktop-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::desktop-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::desktop-id", ...args: any[]): void
    connect(sigName: "notify::is-foreground-tab", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-foreground-tab", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-foreground-tab", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-foreground-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-foreground-tab", ...args: any[]): void
    connect(sigName: "notify::location", callback: (...args: any[]) => void): number
    on(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::xid", callback: (...args: any[]) => void): number
    on(sigName: "notify::xid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::xid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::xid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::xid", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::path", callback: (...args: any[]) => void): number
    on(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::running", callback: (...args: any[]) => void): number
    on(sigName: "notify::running", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::running", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::running", ...args: any[]): void
    connect(sigName: "notify::starting", callback: (...args: any[]) => void): number
    on(sigName: "notify::starting", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::starting", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::starting", ...args: any[]): void
    connect(sigName: "notify::urgent", callback: (...args: any[]) => void): number
    on(sigName: "notify::urgent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::urgent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::urgent", ...args: any[]): void
    connect(sigName: "notify::user-visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-visible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Tab extends View {

    // Own properties of Bamf-3.Bamf.Tab

    static name: string

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
        (object: boolean): void
    }

    /**
     * Signal callback interface for `child-added`
     */
    export interface ChildAddedSignalCallback {
        (object: View): void
    }

    /**
     * Signal callback interface for `child-moved`
     */
    export interface ChildMovedSignalCallback {
        (object: View): void
    }

    /**
     * Signal callback interface for `child-removed`
     */
    export interface ChildRemovedSignalCallback {
        (object: View): void
    }

    /**
     * Signal callback interface for `closed`
     */
    export interface ClosedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `icon-changed`
     */
    export interface IconChangedSignalCallback {
        (object: string | null): void
    }

    /**
     * Signal callback interface for `name-changed`
     */
    export interface NameChangedSignalCallback {
        (object: string | null, p0: string | null): void
    }

    /**
     * Signal callback interface for `running-changed`
     */
    export interface RunningChangedSignalCallback {
        (object: boolean): void
    }

    /**
     * Signal callback interface for `starting-changed`
     */
    export interface StartingChangedSignalCallback {
        (object: boolean): void
    }

    /**
     * Signal callback interface for `urgent-changed`
     */
    export interface UrgentChangedSignalCallback {
        (object: boolean): void
    }

    /**
     * Signal callback interface for `user-visible-changed`
     */
    export interface UserVisibleChangedSignalCallback {
        (object: boolean): void
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
    readonly userVisible: boolean
    __gtype__: number

    // Own fields of Bamf-3.Bamf.View

    parent: GObject.InitiallyUnowned
    priv: ViewPrivate

    // Owm methods of Bamf-3.Bamf.View

    // Has conflict: getChildren(): View[]
    getClickSuggestion(): ClickBehavior
    // Has conflict: getIcon(): string | null
    // Has conflict: getName(): string | null
    /**
     * The view type of a window is a short string used to represent all views of the same class. These
     * descriptions should not be used to do casting as they are not considered stable.
     */
    getViewType(): string
    hasChild(child: View): boolean
    // Has conflict: isActive(): boolean
    /**
     * Determines if the view is closed or not.
     */
    isClosed(): boolean
    // Has conflict: isRunning(): boolean
    // Has conflict: isStarting(): boolean
    isSticky(): boolean
    // Has conflict: isUrgent(): boolean
    // Has conflict: isUserVisible(): boolean
    /**
     * Note: Makes sever dbus calls the first time this is called on a view.
     * Dbus messaging is reduced afterwards.
     * @returns Returns a list of #BamfView which           is owned by the #BamfView and should not freed or modified after usage.
     */
    peekChildren(): View[]
    // Has conflict: setSticky(value: boolean): void

    // Own virtual methods of Bamf-3.Bamf.View

    activeChanged(active: boolean): void
    childAdded(child: View): void
    childMoved(child: View): void
    childRemoved(child: View): void
    clickBehavior(): ClickBehavior
    closed(): void
    /**
     * Note: Makes sever dbus calls the first time this is called on a view. Dbus messaging is reduced afterwards.
     * @virtual 
     * @returns Returns a list of #BamfView which must be           freed after usage. Elements of the list are owned by bamf and should not be unreffed.
     */
    getChildren(): View[]
    /**
     * Gets the icon of a view. This icon is used to visually represent the view.
     * @virtual 
     */
    getIcon(): string | null
    /**
     * Gets the name of a view. This name is a short name best used to represent the view with text.
     * @virtual 
     */
    getName(): string | null
    iconChanged(icon: string | null): void
    /**
     * Determines if the view is currently active and focused by the user. Useful for an active window indicator.
     * @virtual 
     */
    isActive(): boolean
    /**
     * Determines if the view is currently running. Useful for a running window indicator.
     * @virtual 
     */
    isRunning(): boolean
    /**
     * Determines if the view is currently starting. Useful for the startup animation.
     * @virtual 
     */
    isStarting(): boolean
    /**
     * Determines if the view is currently requiring attention. Useful for a running window indicator.
     * @virtual 
     */
    isUrgent(): boolean
    isUserVisible(): boolean
    nameChanged(oldName: string | null, newName: string | null): void
    runningChanged(running: boolean): void
    setPath(path: string): void
    setSticky(value: boolean): void
    startingChanged(starting: boolean): void
    urgentChanged(urgent: boolean): void
    userVisibleChanged(userVisible: boolean): void
    /**
     * The view type of a window is a short string used to represent all views of the same class. These
     * descriptions should not be used to do casting as they are not considered stable.
     * @virtual 
     */
    viewType(): string

    // Own signals of Bamf-3.Bamf.View

    connect(sigName: "active-changed", callback: View.ActiveChangedSignalCallback): number
    on(sigName: "active-changed", callback: View.ActiveChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-changed", callback: View.ActiveChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-changed", callback: View.ActiveChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "active-changed", ...args: any[]): void
    connect(sigName: "child-added", callback: View.ChildAddedSignalCallback): number
    on(sigName: "child-added", callback: View.ChildAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: View.ChildAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: View.ChildAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "child-added", ...args: any[]): void
    connect(sigName: "child-moved", callback: View.ChildMovedSignalCallback): number
    on(sigName: "child-moved", callback: View.ChildMovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: View.ChildMovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: View.ChildMovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "child-moved", ...args: any[]): void
    connect(sigName: "child-removed", callback: View.ChildRemovedSignalCallback): number
    on(sigName: "child-removed", callback: View.ChildRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: View.ChildRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: View.ChildRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "child-removed", ...args: any[]): void
    connect(sigName: "closed", callback: View.ClosedSignalCallback): number
    on(sigName: "closed", callback: View.ClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: View.ClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: View.ClosedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "closed", ...args: any[]): void
    connect(sigName: "icon-changed", callback: View.IconChangedSignalCallback): number
    on(sigName: "icon-changed", callback: View.IconChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "icon-changed", callback: View.IconChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "icon-changed", callback: View.IconChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "icon-changed", ...args: any[]): void
    connect(sigName: "name-changed", callback: View.NameChangedSignalCallback): number
    on(sigName: "name-changed", callback: View.NameChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "name-changed", callback: View.NameChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "name-changed", callback: View.NameChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "name-changed", p0: string | null, ...args: any[]): void
    connect(sigName: "running-changed", callback: View.RunningChangedSignalCallback): number
    on(sigName: "running-changed", callback: View.RunningChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "running-changed", callback: View.RunningChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "running-changed", callback: View.RunningChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "running-changed", ...args: any[]): void
    connect(sigName: "starting-changed", callback: View.StartingChangedSignalCallback): number
    on(sigName: "starting-changed", callback: View.StartingChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "starting-changed", callback: View.StartingChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "starting-changed", callback: View.StartingChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "starting-changed", ...args: any[]): void
    connect(sigName: "urgent-changed", callback: View.UrgentChangedSignalCallback): number
    on(sigName: "urgent-changed", callback: View.UrgentChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "urgent-changed", callback: View.UrgentChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "urgent-changed", callback: View.UrgentChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "urgent-changed", ...args: any[]): void
    connect(sigName: "user-visible-changed", callback: View.UserVisibleChangedSignalCallback): number
    on(sigName: "user-visible-changed", callback: View.UserVisibleChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-visible-changed", callback: View.UserVisibleChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-visible-changed", callback: View.UserVisibleChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "user-visible-changed", ...args: any[]): void

    // Class property signals of Bamf-3.Bamf.View

    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::path", callback: (...args: any[]) => void): number
    on(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::running", callback: (...args: any[]) => void): number
    on(sigName: "notify::running", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::running", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::running", ...args: any[]): void
    connect(sigName: "notify::starting", callback: (...args: any[]) => void): number
    on(sigName: "notify::starting", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::starting", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::starting", ...args: any[]): void
    connect(sigName: "notify::urgent", callback: (...args: any[]) => void): number
    on(sigName: "notify::urgent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::urgent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::urgent", ...args: any[]): void
    connect(sigName: "notify::user-visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-visible", ...args: any[]): void
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

export class View extends GObject.InitiallyUnowned {

    // Own properties of Bamf-3.Bamf.View

    static name: string

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
        (object: number, p0: number): void
    }

    /**
     * Signal callback interface for `monitor-changed`
     */
    export interface MonitorChangedSignalCallback {
        (object: number, p0: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends View.ConstructorProperties {
    }

}

export interface Window {

    // Own properties of Bamf-3.Bamf.Window

    __gtype__: number

    // Own fields of Bamf-3.Bamf.Window

    parent: View & GObject.InitiallyUnowned
    priv: any

    // Owm methods of Bamf-3.Bamf.Window

    // Has conflict: getMonitor(): number
    // Has conflict: getPid(): number
    // Has conflict: getTransient(): Window
    // Has conflict: getUtf8Prop(prop: string): string | null
    // Has conflict: getWindowType(): WindowType
    // Has conflict: getXid(): number
    // Has conflict: lastActive(): number
    // Has conflict: maximized(): WindowMaximizationType

    // Own virtual methods of Bamf-3.Bamf.Window

    getMonitor(): number
    getPid(): number
    getTransient(): Window
    getUtf8Prop(prop: string): string | null
    getWindowType(): WindowType
    getXid(): number
    lastActive(): number
    maximized(): WindowMaximizationType
    maximizedChanged(oldValue: number, newValue: number): void
    monitorChanged(oldValue: number, newValue: number): void

    // Own signals of Bamf-3.Bamf.Window

    connect(sigName: "maximized-changed", callback: Window.MaximizedChangedSignalCallback): number
    on(sigName: "maximized-changed", callback: Window.MaximizedChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "maximized-changed", callback: Window.MaximizedChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "maximized-changed", callback: Window.MaximizedChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "maximized-changed", p0: number, ...args: any[]): void
    connect(sigName: "monitor-changed", callback: Window.MonitorChangedSignalCallback): number
    on(sigName: "monitor-changed", callback: Window.MonitorChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "monitor-changed", callback: Window.MonitorChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "monitor-changed", callback: Window.MonitorChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "monitor-changed", p0: number, ...args: any[]): void

    // Class property signals of Bamf-3.Bamf.Window

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::path", callback: (...args: any[]) => void): number
    on(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::running", callback: (...args: any[]) => void): number
    on(sigName: "notify::running", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::running", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::running", ...args: any[]): void
    connect(sigName: "notify::starting", callback: (...args: any[]) => void): number
    on(sigName: "notify::starting", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::starting", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::starting", ...args: any[]): void
    connect(sigName: "notify::urgent", callback: (...args: any[]) => void): number
    on(sigName: "notify::urgent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::urgent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::urgent", ...args: any[]): void
    connect(sigName: "notify::user-visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-visible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Window extends View {

    // Own properties of Bamf-3.Bamf.Window

    static name: string

    // Constructors of Bamf-3.Bamf.Window

    constructor(config?: Window.ConstructorProperties) 
    _init(config?: Window.ConstructorProperties): void
}

export interface ApplicationClass {

    // Own fields of Bamf-3.Bamf.ApplicationClass

    parentClass: ViewClass
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

    parentClass: GObject.ObjectClass
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

    parentClass: GObject.ObjectClass
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

    parentClass: ViewClass
    getDesktopName: (self: Tab) => string
    getLocation: (self: Tab) => string
    getXid: (self: Tab) => number
    getIsForegroundTab: (self: Tab) => boolean
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

    parentClass: GObject.InitiallyUnownedClass
    getChildren: (view: View) => View[]
    isActive: (view: View) => boolean
    isRunning: (view: View) => boolean
    isUrgent: (view: View) => boolean
    isUserVisible: (view: View) => boolean
    getName: (view: View) => string | null
    getIcon: (view: View) => string | null
    viewType: (view: View) => string
    setPath: (view: View, path: string) => void
    setSticky: (view: View, value: boolean) => void
    clickBehavior: (view: View) => ClickBehavior
    activeChanged: (view: View, active: boolean) => void
    closed: (view: View) => void
    childAdded: (view: View, child: View) => void
    childRemoved: (view: View, child: View) => void
    runningChanged: (view: View, running: boolean) => void
    urgentChanged: (view: View, urgent: boolean) => void
    userVisibleChanged: (view: View, userVisible: boolean) => void
    nameChanged: (view: View, oldName: string | null, newName: string | null) => void
    iconChanged: (view: View, icon: string | null) => void
    childMoved: (view: View, child: View) => void
    isStarting: (view: View) => boolean
    startingChanged: (view: View, starting: boolean) => void
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

    parentClass: ViewClass
    getTransient: (self: Window) => Window
    getWindowType: (self: Window) => WindowType
    getXid: (self: Window) => number
    getPid: (self: Window) => number
    getMonitor: (self: Window) => number
    getUtf8Prop: (self: Window, prop: string) => string | null
    maximized: (self: Window) => WindowMaximizationType
    lastActive: (self: Window) => number
    monitorChanged: (window: Window, oldValue: number, newValue: number) => void
    maximizedChanged: (window: Window, oldValue: number, newValue: number) => void
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

// END