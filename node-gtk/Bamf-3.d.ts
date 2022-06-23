// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Bamf-3
 */

import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Bamf {

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
enum WindowMaximizationType {
    FLOATING,
    HORIZONTAL_MAXIMIZED,
    VERTICAL_MAXIMIZED,
    MAXIMIZED,
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
const APPLICATION_SIGNAL_DESKTOP_FILE_UPDATED: string
const APPLICATION_SIGNAL_WINDOW_ADDED: string
const APPLICATION_SIGNAL_WINDOW_REMOVED: string
const MATCHER_SIGNAL_ACTIVE_APPLICATION_CHANGED: string
const MATCHER_SIGNAL_ACTIVE_WINDOW_CHANGED: string
const MATCHER_SIGNAL_STACKING_ORDER_CHANGED: string
const MATCHER_SIGNAL_VIEW_CLOSED: string
const MATCHER_SIGNAL_VIEW_OPENED: string
const VIEW_SIGNAL_ACTIVE_CHANGED: string
const VIEW_SIGNAL_CHILD_ADDED: string
const VIEW_SIGNAL_CHILD_MOVED: string
const VIEW_SIGNAL_CHILD_REMOVED: string
const VIEW_SIGNAL_CLOSED: string
const VIEW_SIGNAL_ICON_CHANGED: string
const VIEW_SIGNAL_NAME_CHANGED: string
const VIEW_SIGNAL_RUNNING_CHANGED: string
const VIEW_SIGNAL_STARTING_CHANGED: string
const VIEW_SIGNAL_URGENT_CHANGED: string
const VIEW_SIGNAL_USER_VISIBLE_CHANGED: string
const WINDOW_SIGNAL_MAXIMIZED_CHANGED: string
const WINDOW_SIGNAL_MONITOR_CHANGED: string
interface TabPreviewReadyCallback {
    (self: Tab, previewData: string): void
}
interface Application_ConstructProps extends View_ConstructProps {
}

/**
 * Signal callback interface for `desktop-file-updated`
 */
interface Application_DesktopFileUpdatedSignalCallback {
    (object: string): void
}

/**
 * Signal callback interface for `window-added`
 */
interface Application_WindowAddedSignalCallback {
    (object: Window): void
}

/**
 * Signal callback interface for `window-removed`
 */
interface Application_WindowRemovedSignalCallback {
    (object: Window): void
}

interface Application {

    // Own fields of Bamf-3.Bamf.Application

    parent: View
    priv: ApplicationPrivate

    // Owm methods of Bamf-3.Bamf.Application

    /**
     * Used to fetch the bus name and the object path of the remote application menu.
     */
    getApplicationMenu(): [ /* returnType */ boolean, /* name */ string, /* objectPath */ string ]
    getApplicationType(): string
    /**
     * Used to fetch the path to the .desktop file associated with the passed application. If
     * none exists, the result is NULL.
     */
    getDesktopFile(): string
    getFocusableChild(): View
    /**
     * Used to discover whether the application wants menu stubs shown.
     */
    getShowMenuStubs(): boolean
    getSupportedMimeTypes(): string[]
    /**
     * Used to fetch the application contains a Window with given `xid`.
     * @param xid an X11 Window ID
     */
    getWindowForXid(xid: number): Window
    /**
     * Used to fetch all #BamfWindow's associated with the passed #BamfApplication.
     */
    getWindows(): Window[]
    /**
     * Used to fetch all #BamfWindow's xids associated with the passed #BamfApplication.
     */
    getXids(): number[]

    // Own signals of Bamf-3.Bamf.Application

    connect(sigName: "desktop-file-updated", callback: Application_DesktopFileUpdatedSignalCallback): number
    on(sigName: "desktop-file-updated", callback: Application_DesktopFileUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "desktop-file-updated", callback: Application_DesktopFileUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "desktop-file-updated", callback: Application_DesktopFileUpdatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "desktop-file-updated", ...args: any[]): void
    connect(sigName: "window-added", callback: Application_WindowAddedSignalCallback): number
    on(sigName: "window-added", callback: Application_WindowAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-added", callback: Application_WindowAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-added", callback: Application_WindowAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "window-added", ...args: any[]): void
    connect(sigName: "window-removed", callback: Application_WindowRemovedSignalCallback): number
    on(sigName: "window-removed", callback: Application_WindowRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-removed", callback: Application_WindowRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-removed", callback: Application_WindowRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "window-removed", ...args: any[]): void

    // Class property signals of Bamf-3.Bamf.Application

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
}

class Application extends View {

    // Own properties of Bamf-3.Bamf.Application

    static name: string
    static $gtype: GObject.GType<Application>

    // Constructors of Bamf-3.Bamf.Application

    constructor(config?: Application_ConstructProps) 
    _init(config?: Application_ConstructProps): void
}

interface Control_ConstructProps extends GObject.Object_ConstructProps {
}

interface Control {

    // Own fields of Bamf-3.Bamf.Control

    parent: GObject.Object
    priv: ControlPrivate

    // Owm methods of Bamf-3.Bamf.Control

    createLocalDesktopFile(application: Application): void
    insertDesktopFile(desktopFile: string): void
    registerApplicationForPid(desktopFile: string, pid: number): void
    setApproverBehavior(behavior: number): void

    // Class property signals of Bamf-3.Bamf.Control

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Control extends GObject.Object {

    // Own properties of Bamf-3.Bamf.Control

    static name: string
    static $gtype: GObject.GType<Control>

    // Constructors of Bamf-3.Bamf.Control

    constructor(config?: Control_ConstructProps) 
    _init(config?: Control_ConstructProps): void
    static getDefault(): Control
}

interface Matcher_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `active-application-changed`
 */
interface Matcher_ActiveApplicationChangedSignalCallback {
    (object: Application, p0: Application): void
}

/**
 * Signal callback interface for `active-window-changed`
 */
interface Matcher_ActiveWindowChangedSignalCallback {
    (object: Window, p0: Window): void
}

/**
 * Signal callback interface for `stacking-order-changed`
 */
interface Matcher_StackingOrderChangedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `view-closed`
 */
interface Matcher_ViewClosedSignalCallback {
    (object: View): void
}

/**
 * Signal callback interface for `view-opened`
 */
interface Matcher_ViewOpenedSignalCallback {
    (object: View): void
}

interface Matcher {

    // Own fields of Bamf-3.Bamf.Matcher

    parent: GObject.Object
    priv: MatcherPrivate

    // Owm methods of Bamf-3.Bamf.Matcher

    applicationIsRunning(desktopFile: string): boolean
    /**
     * Used to fetch the active #BamfApplication.
     */
    getActiveApplication(): Application
    /**
     * Used to fetch the active #BamfWindow.
     */
    getActiveWindow(): Window
    getApplicationForDesktopFile(desktopFilePath: string, createIfNotFound: boolean): Application
    /**
     * Used to fetch the #BamfApplication containing the passed window.
     * @param window The window to look for
     */
    getApplicationForWindow(window: Window): Application
    /**
     * Used to fetch the #BamfApplication containing the passed xid.
     * @param xid The XID to search for
     */
    getApplicationForXid(xid: number): Application
    /**
     * Used to fetch all #BamfApplication's running or not. Application authors who wish to only
     * see running applications should use bamf_matcher_get_running_applications instead. The reason
     * this method is needed is bamf will occasionally track applications which are not currently
     * running for nefarious purposes.
     */
    getApplications(): Application[]
    /**
     * Used to fetch all #BamfApplication's which are running.
     */
    getRunningApplications(): Application[]
    /**
     * Used to fetch all #BamfView's representing tabs. Currently unused.
     */
    getTabs(): Tab[]
    /**
     * Used to fetch the #BamfWindow that wraps the given `window`.
     * @param xid The X11 Window ID to search for
     */
    getWindowForXid(xid: number): Window
    /**
     * Used to fetch all windows that BAMF knows about in the requested screen,
     * in stacking bottom-to-top order. If the `monitor` is set to a negative value,
     * then it fetches all the available windows in all monitors.
     * @param monitor the monitor you want the stack from, negative value to get all
     */
    getWindowStackForMonitor(monitor: number): Window[]
    /**
     * Used to fetch all windows that BAMF knows about.
     */
    getWindows(): Window[]
    /**
     * Used to fetch all xid's associated with an application. Useful for performing window
     * @param desktopFile 
     */
    getXidsForApplication(desktopFile: string): number[]
    /**
     * Used to effect how bamf performs matching. Desktop files passed to this method will
     * be prefered by bamf to system desktop files.
     * @param favorites an array of strings, each containing an absolute path to a .desktop file
     */
    registerFavorites(favorites: string[]): void

    // Own signals of Bamf-3.Bamf.Matcher

    connect(sigName: "active-application-changed", callback: Matcher_ActiveApplicationChangedSignalCallback): number
    on(sigName: "active-application-changed", callback: Matcher_ActiveApplicationChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-application-changed", callback: Matcher_ActiveApplicationChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-application-changed", callback: Matcher_ActiveApplicationChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "active-application-changed", p0: Application, ...args: any[]): void
    connect(sigName: "active-window-changed", callback: Matcher_ActiveWindowChangedSignalCallback): number
    on(sigName: "active-window-changed", callback: Matcher_ActiveWindowChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-window-changed", callback: Matcher_ActiveWindowChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-window-changed", callback: Matcher_ActiveWindowChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "active-window-changed", p0: Window, ...args: any[]): void
    connect(sigName: "stacking-order-changed", callback: Matcher_StackingOrderChangedSignalCallback): number
    on(sigName: "stacking-order-changed", callback: Matcher_StackingOrderChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "stacking-order-changed", callback: Matcher_StackingOrderChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "stacking-order-changed", callback: Matcher_StackingOrderChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "stacking-order-changed", ...args: any[]): void
    connect(sigName: "view-closed", callback: Matcher_ViewClosedSignalCallback): number
    on(sigName: "view-closed", callback: Matcher_ViewClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "view-closed", callback: Matcher_ViewClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "view-closed", callback: Matcher_ViewClosedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "view-closed", ...args: any[]): void
    connect(sigName: "view-opened", callback: Matcher_ViewOpenedSignalCallback): number
    on(sigName: "view-opened", callback: Matcher_ViewOpenedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "view-opened", callback: Matcher_ViewOpenedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "view-opened", callback: Matcher_ViewOpenedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "view-opened", ...args: any[]): void

    // Class property signals of Bamf-3.Bamf.Matcher

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Matcher extends GObject.Object {

    // Own properties of Bamf-3.Bamf.Matcher

    static name: string
    static $gtype: GObject.GType<Matcher>

    // Constructors of Bamf-3.Bamf.Matcher

    constructor(config?: Matcher_ConstructProps) 
    _init(config?: Matcher_ConstructProps): void
    /**
     * Returns the default matcher. This matcher is owned by bamf and shared between other callers.
     */
    static getDefault(): Matcher
}

interface Tab_ConstructProps extends View_ConstructProps {
}

interface Tab {

    // Own properties of Bamf-3.Bamf.Tab

    readonly desktopId: string
    readonly isForegroundTab: boolean
    readonly location: string
    readonly xid: number

    // Own fields of Bamf-3.Bamf.Tab

    parent: View
    priv: TabPrivate

    // Owm methods of Bamf-3.Bamf.Tab

    /**
     * Closes the selected `self` tab.
     */
    close(): boolean
    /**
     * Returns the desktop file for the tab.
     */
    getDesktopName(): string
    getIsForegroundTab(): boolean
    getLocation(): string
    /**
     * The desktop file for the tab.
     */
    getXid(): number
    /**
     * Selects the `self` tab in the parent window.
     */
    raise(): boolean
    requestPreview(callback: TabPreviewReadyCallback): void

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
}

class Tab extends View {

    // Own properties of Bamf-3.Bamf.Tab

    static name: string
    static $gtype: GObject.GType<Tab>

    // Constructors of Bamf-3.Bamf.Tab

    constructor(config?: Tab_ConstructProps) 
    _init(config?: Tab_ConstructProps): void
}

interface View_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
}

/**
 * Signal callback interface for `active-changed`
 */
interface View_ActiveChangedSignalCallback {
    (object: boolean): void
}

/**
 * Signal callback interface for `child-added`
 */
interface View_ChildAddedSignalCallback {
    (object: View): void
}

/**
 * Signal callback interface for `child-moved`
 */
interface View_ChildMovedSignalCallback {
    (object: View): void
}

/**
 * Signal callback interface for `child-removed`
 */
interface View_ChildRemovedSignalCallback {
    (object: View): void
}

/**
 * Signal callback interface for `closed`
 */
interface View_ClosedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `icon-changed`
 */
interface View_IconChangedSignalCallback {
    (object: string): void
}

/**
 * Signal callback interface for `name-changed`
 */
interface View_NameChangedSignalCallback {
    (object: string, p0: string): void
}

/**
 * Signal callback interface for `running-changed`
 */
interface View_RunningChangedSignalCallback {
    (object: boolean): void
}

/**
 * Signal callback interface for `starting-changed`
 */
interface View_StartingChangedSignalCallback {
    (object: boolean): void
}

/**
 * Signal callback interface for `urgent-changed`
 */
interface View_UrgentChangedSignalCallback {
    (object: boolean): void
}

/**
 * Signal callback interface for `user-visible-changed`
 */
interface View_UserVisibleChangedSignalCallback {
    (object: boolean): void
}

interface View {

    // Own properties of Bamf-3.Bamf.View

    readonly active: boolean
    readonly path: string
    readonly running: boolean
    readonly starting: boolean
    readonly urgent: boolean
    readonly userVisible: boolean

    // Own fields of Bamf-3.Bamf.View

    parent: GObject.InitiallyUnowned
    priv: ViewPrivate

    // Owm methods of Bamf-3.Bamf.View

    /**
     * Note: Makes sever dbus calls the first time this is called on a view. Dbus messaging is reduced afterwards.
     */
    getChildren(): View[]
    getClickSuggestion(): ClickBehavior
    /**
     * Gets the icon of a view. This icon is used to visually represent the view.
     */
    getIcon(): string
    /**
     * Gets the name of a view. This name is a short name best used to represent the view with text.
     */
    getName(): string
    /**
     * The view type of a window is a short string used to represent all views of the same class. These
     * descriptions should not be used to do casting as they are not considered stable.
     */
    getViewType(): string
    hasChild(child: View): boolean
    /**
     * Determines if the view is currently active and focused by the user. Useful for an active window indicator.
     */
    isActive(): boolean
    /**
     * Determines if the view is closed or not.
     */
    isClosed(): boolean
    /**
     * Determines if the view is currently running. Useful for a running window indicator.
     */
    isRunning(): boolean
    /**
     * Determines if the view is currently starting. Useful for the startup animation.
     */
    isStarting(): boolean
    isSticky(): boolean
    /**
     * Determines if the view is currently requiring attention. Useful for a running window indicator.
     */
    isUrgent(): boolean
    isUserVisible(): boolean
    /**
     * Note: Makes sever dbus calls the first time this is called on a view.
     * Dbus messaging is reduced afterwards.
     */
    peekChildren(): View[]
    setSticky(value: boolean): void

    // Own signals of Bamf-3.Bamf.View

    connect(sigName: "active-changed", callback: View_ActiveChangedSignalCallback): number
    on(sigName: "active-changed", callback: View_ActiveChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-changed", callback: View_ActiveChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-changed", callback: View_ActiveChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "active-changed", ...args: any[]): void
    connect(sigName: "child-added", callback: View_ChildAddedSignalCallback): number
    on(sigName: "child-added", callback: View_ChildAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: View_ChildAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: View_ChildAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "child-added", ...args: any[]): void
    connect(sigName: "child-moved", callback: View_ChildMovedSignalCallback): number
    on(sigName: "child-moved", callback: View_ChildMovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: View_ChildMovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: View_ChildMovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "child-moved", ...args: any[]): void
    connect(sigName: "child-removed", callback: View_ChildRemovedSignalCallback): number
    on(sigName: "child-removed", callback: View_ChildRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: View_ChildRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: View_ChildRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "child-removed", ...args: any[]): void
    connect(sigName: "closed", callback: View_ClosedSignalCallback): number
    on(sigName: "closed", callback: View_ClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: View_ClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: View_ClosedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "closed", ...args: any[]): void
    connect(sigName: "icon-changed", callback: View_IconChangedSignalCallback): number
    on(sigName: "icon-changed", callback: View_IconChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "icon-changed", callback: View_IconChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "icon-changed", callback: View_IconChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "icon-changed", ...args: any[]): void
    connect(sigName: "name-changed", callback: View_NameChangedSignalCallback): number
    on(sigName: "name-changed", callback: View_NameChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "name-changed", callback: View_NameChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "name-changed", callback: View_NameChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "name-changed", p0: string, ...args: any[]): void
    connect(sigName: "running-changed", callback: View_RunningChangedSignalCallback): number
    on(sigName: "running-changed", callback: View_RunningChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "running-changed", callback: View_RunningChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "running-changed", callback: View_RunningChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "running-changed", ...args: any[]): void
    connect(sigName: "starting-changed", callback: View_StartingChangedSignalCallback): number
    on(sigName: "starting-changed", callback: View_StartingChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "starting-changed", callback: View_StartingChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "starting-changed", callback: View_StartingChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "starting-changed", ...args: any[]): void
    connect(sigName: "urgent-changed", callback: View_UrgentChangedSignalCallback): number
    on(sigName: "urgent-changed", callback: View_UrgentChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "urgent-changed", callback: View_UrgentChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "urgent-changed", callback: View_UrgentChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "urgent-changed", ...args: any[]): void
    connect(sigName: "user-visible-changed", callback: View_UserVisibleChangedSignalCallback): number
    on(sigName: "user-visible-changed", callback: View_UserVisibleChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-visible-changed", callback: View_UserVisibleChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-visible-changed", callback: View_UserVisibleChangedSignalCallback): NodeJS.EventEmitter
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class View extends GObject.InitiallyUnowned {

    // Own properties of Bamf-3.Bamf.View

    static name: string
    static $gtype: GObject.GType<View>

    // Constructors of Bamf-3.Bamf.View

    constructor(config?: View_ConstructProps) 
    _init(config?: View_ConstructProps): void
}

interface Window_ConstructProps extends View_ConstructProps {
}

/**
 * Signal callback interface for `maximized-changed`
 */
interface Window_MaximizedChangedSignalCallback {
    (object: number, p0: number): void
}

/**
 * Signal callback interface for `monitor-changed`
 */
interface Window_MonitorChangedSignalCallback {
    (object: number, p0: number): void
}

interface Window {

    // Own fields of Bamf-3.Bamf.Window

    parent: View
    priv: WindowPrivate

    // Owm methods of Bamf-3.Bamf.Window

    getMonitor(): number
    getPid(): number
    getTransient(): Window
    getUtf8Prop(prop: string): string
    getWindowType(): WindowType
    getXid(): number
    lastActive(): number
    maximized(): WindowMaximizationType

    // Own signals of Bamf-3.Bamf.Window

    connect(sigName: "maximized-changed", callback: Window_MaximizedChangedSignalCallback): number
    on(sigName: "maximized-changed", callback: Window_MaximizedChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "maximized-changed", callback: Window_MaximizedChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "maximized-changed", callback: Window_MaximizedChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "maximized-changed", p0: number, ...args: any[]): void
    connect(sigName: "monitor-changed", callback: Window_MonitorChangedSignalCallback): number
    on(sigName: "monitor-changed", callback: Window_MonitorChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "monitor-changed", callback: Window_MonitorChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "monitor-changed", callback: Window_MonitorChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "monitor-changed", p0: number, ...args: any[]): void

    // Class property signals of Bamf-3.Bamf.Window

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
}

class Window extends View {

    // Own properties of Bamf-3.Bamf.Window

    static name: string
    static $gtype: GObject.GType<Window>

    // Constructors of Bamf-3.Bamf.Window

    constructor(config?: Window_ConstructProps) 
    _init(config?: Window_ConstructProps): void
}

interface ApplicationClass {

    // Own fields of Bamf-3.Bamf.ApplicationClass

    parentClass: ViewClass
}

abstract class ApplicationClass {

    // Own properties of Bamf-3.Bamf.ApplicationClass

    static name: string
}

interface ApplicationPrivate {
}

class ApplicationPrivate {

    // Own properties of Bamf-3.Bamf.ApplicationPrivate

    static name: string
}

interface ControlClass {

    // Own fields of Bamf-3.Bamf.ControlClass

    parentClass: GObject.ObjectClass
}

abstract class ControlClass {

    // Own properties of Bamf-3.Bamf.ControlClass

    static name: string
}

interface ControlPrivate {
}

class ControlPrivate {

    // Own properties of Bamf-3.Bamf.ControlPrivate

    static name: string
}

interface MatcherClass {

    // Own fields of Bamf-3.Bamf.MatcherClass

    parentClass: GObject.ObjectClass
}

abstract class MatcherClass {

    // Own properties of Bamf-3.Bamf.MatcherClass

    static name: string
}

interface MatcherPrivate {
}

class MatcherPrivate {

    // Own properties of Bamf-3.Bamf.MatcherPrivate

    static name: string
}

interface TabClass {

    // Own fields of Bamf-3.Bamf.TabClass

    parentClass: ViewClass
    getDesktopName: (self: Tab) => string
    getLocation: (self: Tab) => string
    getXid: (self: Tab) => number
    getIsForegroundTab: (self: Tab) => boolean
}

abstract class TabClass {

    // Own properties of Bamf-3.Bamf.TabClass

    static name: string
}

interface TabPrivate {
}

class TabPrivate {

    // Own properties of Bamf-3.Bamf.TabPrivate

    static name: string
}

interface ViewClass {

    // Own fields of Bamf-3.Bamf.ViewClass

    parentClass: GObject.InitiallyUnownedClass
    getChildren: (view: View) => View[]
    isActive: (view: View) => boolean
    isRunning: (view: View) => boolean
    isUrgent: (view: View) => boolean
    isUserVisible: (view: View) => boolean
    getName: (view: View) => string
    getIcon: (view: View) => string
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
    nameChanged: (view: View, oldName: string, newName: string) => void
    iconChanged: (view: View, icon: string) => void
    childMoved: (view: View, child: View) => void
    isStarting: (view: View) => boolean
    startingChanged: (view: View, starting: boolean) => void
}

abstract class ViewClass {

    // Own properties of Bamf-3.Bamf.ViewClass

    static name: string
}

interface ViewPrivate {
}

class ViewPrivate {

    // Own properties of Bamf-3.Bamf.ViewPrivate

    static name: string
}

interface WindowClass {

    // Own fields of Bamf-3.Bamf.WindowClass

    parentClass: ViewClass
    getTransient: (self: Window) => Window
    getWindowType: (self: Window) => WindowType
    getXid: (self: Window) => number
    getPid: (self: Window) => number
    getMonitor: (self: Window) => number
    getUtf8Prop: (self: Window, prop: string) => string
    maximized: (self: Window) => WindowMaximizationType
    lastActive: (self: Window) => number
    monitorChanged: (window: Window, oldValue: number, newValue: number) => void
    maximizedChanged: (window: Window, oldValue: number, newValue: number) => void
}

abstract class WindowClass {

    // Own properties of Bamf-3.Bamf.WindowClass

    static name: string
}

interface WindowPrivate {
}

class WindowPrivate {

    // Own properties of Bamf-3.Bamf.WindowPrivate

    static name: string
}

}
export default Bamf;