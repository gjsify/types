
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-shell-12-import.d.ts';
    
/**
 * Shell-12
 */

import type St from '@girs/node-st-12';
import type Meta from '@girs/node-meta-12';
import type xlib from '@girs/node-xlib-2.0';
import type xfixes from '@girs/node-xfixes-4.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type GDesktopEnums from '@girs/node-gdesktopenums-3.0';
import type CoglPango from '@girs/node-coglpango-12';
import type PangoCairo from '@girs/node-pangocairo-1.0';
import type cairo from '@girs/node-cairo-1.0';
import type Pango from '@girs/node-pango-1.0';
import type HarfBuzz from '@girs/node-harfbuzz-0.0';
import type freetype2 from '@girs/node-freetype2-2.0';
import type Gio from '@girs/node-gio-2.0';
import type Cogl from '@girs/node-cogl-12';
import type Graphene from '@girs/node-graphene-1.0';
import type GL from '@girs/node-gl-1.0';
import type Clutter from '@girs/node-clutter-12';
import type Json from '@girs/node-json-1.0';
import type Atk from '@girs/node-atk-1.0';
import type GdkPixbuf from '@girs/node-gdkpixbuf-2.0';
import type GModule from '@girs/node-gmodule-2.0';
import type Cally from '@girs/node-cally-12';
import type PolkitAgent from '@girs/node-polkitagent-1.0';
import type Polkit from '@girs/node-polkit-1.0';
import type NM from '@girs/node-nm-1.0';
import type Gvc from '@girs/node-gvc-1.0';
import type Gcr from '@girs/node-gcr-4';
import type Gck from '@girs/node-gck-2';

export namespace Shell {

enum AppLaunchGpu {
    APP_PREF,
    DISCRETE,
    DEFAULT,
}
enum AppState {
    STOPPED,
    STARTING,
    RUNNING,
}
/**
 * The mode of blurring of the effect.
 */
enum BlurMode {
    /**
     * blur the actor contents, and its children
     */
    ACTOR,
    /**
     * blur what's beneath the actor
     */
    BACKGROUND,
}
enum NetworkAgentResponse {
    CONFIRMED,
    USER_CANCELED,
    INTERNAL_ERROR,
}
/**
 * Temporary hack to work around Cogl not exporting CoglSnippetHook in
 * the 1.0 API. Don't use.
 */
enum SnippetHook {
    VERTEX,
    VERTEX_TRANSFORM,
    FRAGMENT,
    TEXTURE_COORD_TRANSFORM,
    LAYER_FRAGMENT,
    TEXTURE_LOOKUP,
}
/**
 * Controls in which GNOME Shell states an action (like keybindings and gestures)
 * should be handled.
 * @bitfield 
 */
enum ActionMode {
    /**
     * block action
     */
    NONE,
    /**
     * allow action when in window mode,
     *     e.g. when the focus is in an application window
     */
    NORMAL,
    /**
     * allow action while the overview
     *     is active
     */
    OVERVIEW,
    /**
     * allow action when the screen
     *     is locked, e.g. when the screen shield is shown
     */
    LOCK_SCREEN,
    /**
     * allow action in the unlock
     *     dialog
     */
    UNLOCK_SCREEN,
    /**
     * allow action in the login screen
     */
    LOGIN_SCREEN,
    /**
     * allow action when a system modal
     *     dialog (e.g. authentication or session dialogs) is open
     */
    SYSTEM_MODAL,
    /**
     * allow action in looking glass
     */
    LOOKING_GLASS,
    /**
     * allow action while a shell menu is open
     */
    POPUP,
    /**
     * always allow action
     */
    ALL,
}
const KEYRING_SK_TAG: string
const KEYRING_SN_TAG: string
const KEYRING_UUID_TAG: string
/**
 * Synchronously load the contents of a file as a NUL terminated
 * string, validating it as UTF-8.  Embedded NUL characters count as
 * invalid content.
 * @param path UTF-8 encoded filename path
 * @returns File contents
 */
function getFileContentsUtf8Sync(path: string): string | null
/**
 * Walk over all open file descriptors. Check them for the FD_CLOEXEC flag.
 * If this flag is not set, log the offending file descriptor number.
 * 
 * It is important that gnome-shell's file descriptors are all marked CLOEXEC,
 * so that the shell's open file descriptors are not passed to child processes
 * that we launch.
 */
function utilCheckCloexecFds(): void
function utilCompositeCaptureImages(captures: Clutter.Capture, nCaptures: number, x: number, y: number, targetWidth: number, targetHeight: number, targetScale: number): cairo.Surface
/**
 * Workaround for non-introspectability of gdk_pixbuf_from_data().
 * @param data 
 * @param colorspace 
 * @param hasAlpha 
 * @param bitsPerSample 
 * @param width 
 * @param height 
 * @param rowstride 
 */
function utilCreatePixbufFromData(data: number[], colorspace: GdkPixbuf.Colorspace, hasAlpha: boolean, bitsPerSample: number, width: number, height: number, rowstride: number): GdkPixbuf.Pixbuf
/**
 * Attempts to translate the folder `name` using translations provided
 * by .directory files.
 * @param name the untranslated folder name
 * @returns a translated string or %NULL
 */
function utilGetTranslatedFolderName(name: string): string | null
/**
 * A wrapper around getuid() so that it can be used from JavaScript. This
 * function will always succeed.
 * @returns the real user ID of the calling process
 */
function utilGetUid(): number
/**
 * Gets the first week day for the current locale, expressed as a
 * number in the range 0..6, representing week days from Sunday to
 * Saturday.
 * @returns A number representing the first week day for the current          locale
 */
function utilGetWeekStart(): number
/**
 * If the corresponding X11 display provides the passed extension, return %TRUE,
 * otherwise %FALSE. If there is no X11 display, %FALSE is passed.
 * @param display A #MetaDisplay
 * @param extension An X11 extension
 */
function utilHasX11DisplayExtension(display: Meta.Display, extension: string): boolean
/**
 * A wrapper around g_regex_escape_string() that takes its argument as
 * \0-terminated string rather than a byte-array that confuses gjs.
 * @param str a UTF-8 string to escape
 * @returns @str with all regex-special characters escaped
 */
function utilRegexEscape(str: string): string | null
function utilSdNotify(): void
/**
 * If `hidden` is %TRUE, hide `actor` from pick even with a mode of
 * %CLUTTER_PICK_ALL; if `hidden` is %FALSE, unhide `actor`.
 * @param actor A #ClutterActor
 * @param hidden Whether `actor` should be hidden from pick
 */
function utilSetHiddenFromPick(actor: Clutter.Actor, hidden: boolean): void
function utilStartSystemdUnit(unit: string, mode: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
function utilStartSystemdUnitFinish(res: Gio.AsyncResult): boolean
function utilStopSystemdUnit(unit: string, mode: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
function utilStopSystemdUnitFinish(res: Gio.AsyncResult): boolean
function utilSystemdUnitExists(unit: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
function utilSystemdUnitExistsFinish(res: Gio.AsyncResult): boolean
function utilTouchFileAsync(file: Gio.File, callback: Gio.AsyncReadyCallback | null): void
function utilTouchFileFinish(file: Gio.File, res: Gio.AsyncResult): boolean
/**
 * Translate `str` according to the locale defined by LC_TIME; unlike
 * dcgettext(), the translations is still taken from the LC_MESSAGES
 * catalogue and not the LC_TIME one.
 * @param str String to translate
 * @returns the translated string
 */
function utilTranslateTimeString(str: string): string
/**
 * Implements libc standard WIFEXITED, that cannot be used JS
 * code.
 * @param status the status returned by wait() or waitpid()
 * @returns TRUE if the process exited normally, FALSE otherwise
 */
function utilWifexited(status: number): [ /* returnType */ boolean, /* exit */ number ]
/**
 * Write a string to a GOutputStream as UTF-8. This is a workaround
 * for not having binary buffers in GJS.
 * @param stream a #GOutputStream
 * @param str a UTF-8 string to write to `stream`
 * @returns %TRUE if write succeeded
 */
function writeStringToStream(stream: Gio.OutputStream, str: string): boolean
interface LeisureFunction {
    (data: any | null): void
}
interface PerfReplayFunction {
    (time: number, name: string, signature: string, arg: any): void
}
interface PerfStatisticsCallback {
    (perfLog: PerfLog, data: any | null): void
}
module App {

    // Signal callback interfaces

    /**
     * Signal callback interface for `windows-changed`
     */
    interface WindowsChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Shell-12.Shell.App

        /**
         * The #GDesktopAppInfo associated with this ShellApp, if any.
         */
        app_info?: Gio.DesktopAppInfo | null
    }

}

interface App {

    // Own properties of Shell-12.Shell.App

    /**
     * The #GDBusActionGroup associated with this ShellApp, if any. See the
     * documentation of #GApplication and #GActionGroup for details.
     */
    readonly actionGroup: Gio.ActionGroup
    /**
     * The #GDesktopAppInfo associated with this ShellApp, if any.
     */
    readonly appInfo: Gio.DesktopAppInfo
    /**
     * Whether the application has marked itself as busy.
     */
    readonly busy: boolean
    /**
     * The #GIcon representing this ShellApp
     */
    readonly icon: Gio.Icon
    /**
     * The id of this application (a desktop filename, or a special string
     * like window:0xabcd1234)
     */
    readonly id: string | null
    /**
     * The high-level state of the application, effectively whether it's
     * running or not, or transitioning between those states.
     */
    readonly state: AppState
    __gtype__: number

    // Owm methods of Shell-12.Shell.App

    /**
     * Like shell_app_activate_full(), but using the default workspace and
     * event timestamp.
     */
    activate(): void
    /**
     * Perform an appropriate default action for operating on this application,
     * dependent on its current state.  For example, if the application is not
     * currently running, launch it.  If it is running, activate the most
     * recently used NORMAL window (or if that window has a transient, the most
     * recently used transient for that window).
     * @param workspace launch on this workspace, or -1 for default. Ignored if   activating an existing window
     * @param timestamp Event timestamp
     */
    activateFull(workspace: number, timestamp: number): void
    /**
     * Bring all windows for the given app to the foreground,
     * but ensure that `window` is on top.  If `window` is %NULL,
     * the window with the most recent user time for the app
     * will be used.
     * 
     * This function has no effect if `app` is not currently running.
     * @param window Window to be focused
     * @param timestamp Event timestamp
     */
    activateWindow(window: Meta.Window | null, timestamp: number): void
    /**
     * Returns %TRUE if the app supports opening a new window through
     * shell_app_open_new_window() (ie, if calling that function will
     * result in actually opening a new window and not something else,
     * like presenting the most recently active one)
     */
    canOpenNewWindow(): boolean
    /**
     * Compare one #ShellApp instance to another, in the following way:
     *   - Running applications sort before not-running applications.
     *   - If one of them has non-minimized windows and the other does not,
     *     the one with visible windows is first.
     *   - Finally, the application which the user interacted with most recently
     *     compares earlier.
     * @param other A #ShellApp
     */
    compare(other: App): number
    /**
     * Order two applications by name.
     * @param other The other app
     * @returns -1, 0, or 1; suitable for use as a comparison function for e.g. g_slist_sort()
     */
    compareByName(other: App): number
    /**
     * Look up the icon for this application, and create a #ClutterActor
     * for it at the given size.
     * @param size 
     * @returns A floating #ClutterActor
     */
    createIconTexture(size: number): Clutter.Actor
    getAppInfo(): Gio.DesktopAppInfo
    getBusy(): boolean
    getDescription(): string
    /**
     * Look up the icon for this application
     * @returns A #GIcon
     */
    getIcon(): Gio.Icon
    getId(): string
    getNWindows(): number
    getName(): string
    getPids(): number[]
    getState(): AppState
    /**
     * Get the windows which are associated with this application. The
     * returned list will be sorted first by whether they're on the
     * active workspace, then by whether they're visible, and finally
     * by the time the user last interacted with them.
     * @returns List of windows
     */
    getWindows(): Meta.Window[]
    isOnWorkspace(workspace: Meta.Workspace): boolean
    /**
     * A window backed application is one which represents just an open
     * window, i.e. there's no .desktop file association, so we don't know
     * how to launch it again.
     */
    isWindowBacked(): boolean
    launch(timestamp: number, workspace: number, gpuPref: AppLaunchGpu): boolean
    launchAction(actionName: string, timestamp: number, workspace: number): void
    /**
     * Request that the application create a new window.
     * @param workspace open on this workspace, or -1 for default
     */
    openNewWindow(workspace: number): void
    /**
     * Initiate an asynchronous request to quit this application.
     * The application may interact with the user, and the user
     * might cancel the quit request from the application UI.
     * 
     * This operation may not be supported for all applications.
     * @returns %TRUE if a quit request is supported for this application
     */
    requestQuit(): boolean
    updateAppActions(window: Meta.Window): void
    updateWindowActions(window: Meta.Window): void

    // Own signals of Shell-12.Shell.App

    connect(sigName: "windows-changed", callback: App.WindowsChangedSignalCallback): number
    on(sigName: "windows-changed", callback: App.WindowsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "windows-changed", callback: App.WindowsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "windows-changed", callback: App.WindowsChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "windows-changed", ...args: any[]): void

    // Class property signals of Shell-12.Shell.App

    connect(sigName: "notify::action-group", callback: (...args: any[]) => void): number
    on(sigName: "notify::action-group", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::action-group", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::action-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::action-group", ...args: any[]): void
    connect(sigName: "notify::app-info", callback: (...args: any[]) => void): number
    on(sigName: "notify::app-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::app-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::app-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::app-info", ...args: any[]): void
    connect(sigName: "notify::busy", callback: (...args: any[]) => void): number
    on(sigName: "notify::busy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::busy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::busy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::busy", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
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

class App extends GObject.Object {

    // Own properties of Shell-12.Shell.App

    static name: string

    // Constructors of Shell-12.Shell.App

    constructor(config?: App.ConstructorProperties) 
    _init(config?: App.ConstructorProperties): void
}

module AppSystem {

    // Signal callback interfaces

    /**
     * Signal callback interface for `app-state-changed`
     */
    interface AppStateChangedSignalCallback {
        (object: App): void
    }

    /**
     * Signal callback interface for `installed-changed`
     */
    interface InstalledChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface AppSystem {

    // Own properties of Shell-12.Shell.AppSystem

    __gtype__: number

    // Owm methods of Shell-12.Shell.AppSystem

    /**
     * Returns all installed apps, as a list of #GAppInfo
     * @returns a list of #GAppInfo   describing all known applications. This memory is owned by the   #ShellAppSystem and should not be freed.
     */
    getInstalled(): Gio.AppInfo[]
    /**
     * Returns the set of applications which currently have at least one
     * open window.  The returned list will be sorted by shell_app_compare().
     * @returns Active applications
     */
    getRunning(): App[]
    /**
     * Find a #ShellApp corresponding to an id.
     * @param id 
     * @returns The #ShellApp for id, or %NULL if none
     */
    lookupApp(id: string): App
    /**
     * Find a valid application whose .desktop file, without the extension
     * and properly canonicalized, matches `wmclass`.
     * @param wmclass A WM_CLASS value
     * @returns A #ShellApp for @wmclass
     */
    lookupDesktopWmclass(wmclass: string | null): App
    /**
     * Find a valid application corresponding to a given
     * heuristically determined application identifier
     * string, or %NULL if none.
     * @param id Probable application identifier
     * @returns A #ShellApp for @name
     */
    lookupHeuristicBasename(id: string): App
    /**
     * Find a valid application whose .desktop file contains a
     * StartupWMClass entry matching `wmclass`.
     * @param wmclass A WM_CLASS value
     * @returns A #ShellApp for @wmclass
     */
    lookupStartupWmclass(wmclass: string | null): App

    // Own signals of Shell-12.Shell.AppSystem

    connect(sigName: "app-state-changed", callback: AppSystem.AppStateChangedSignalCallback): number
    on(sigName: "app-state-changed", callback: AppSystem.AppStateChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "app-state-changed", callback: AppSystem.AppStateChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "app-state-changed", callback: AppSystem.AppStateChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "app-state-changed", ...args: any[]): void
    connect(sigName: "installed-changed", callback: AppSystem.InstalledChangedSignalCallback): number
    on(sigName: "installed-changed", callback: AppSystem.InstalledChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "installed-changed", callback: AppSystem.InstalledChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "installed-changed", callback: AppSystem.InstalledChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "installed-changed", ...args: any[]): void

    // Class property signals of Shell-12.Shell.AppSystem

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

class AppSystem extends GObject.Object {

    // Own properties of Shell-12.Shell.AppSystem

    static name: string

    // Constructors of Shell-12.Shell.AppSystem

    constructor(config?: AppSystem.ConstructorProperties) 
    _init(config?: AppSystem.ConstructorProperties): void
    static getDefault(): AppSystem
    /**
     * Wrapper around g_desktop_app_info_search() that replaces results that
     * don't validate as UTF-8 with the empty string.
     * @param searchString the search string to use
     * @returns a   list of strvs.  Free each item with g_strfreev() and free the outer   list with g_free().
     */
    static search(searchString: string): any[]
}

module AppUsage {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface AppUsage {

    // Own properties of Shell-12.Shell.AppUsage

    __gtype__: number

    // Owm methods of Shell-12.Shell.AppUsage

    /**
     * Compare `id_a` and `id_b` based on frequency of use.
     * @param idA ID of first app
     * @param idB ID of second app
     * @returns -1 if @id_a ranks higher than @id_b, 1 if @id_b ranks higher          than @id_a, and 0 if both rank equally.
     */
    compare(idA: string, idB: string): number
    getMostUsed(): App[]

    // Class property signals of Shell-12.Shell.AppUsage

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

class AppUsage extends GObject.Object {

    // Own properties of Shell-12.Shell.AppUsage

    static name: string

    // Constructors of Shell-12.Shell.AppUsage

    constructor(config?: AppUsage.ConstructorProperties) 
    _init(config?: AppUsage.ConstructorProperties): void
    static getDefault(): AppUsage
}

module BlurEffect {

    // Constructor properties interface

    interface ConstructorProperties extends Clutter.Effect.ConstructorProperties {

        // Own constructor properties of Shell-12.Shell.BlurEffect

        brightness?: number | null
        mode?: BlurMode | null
        sigma?: number | null
    }

}

interface BlurEffect {

    // Own properties of Shell-12.Shell.BlurEffect

    brightness: number
    mode: BlurMode
    sigma: number
    __gtype__: number

    // Owm methods of Shell-12.Shell.BlurEffect

    getBrightness(): number
    getMode(): BlurMode
    getSigma(): number
    setBrightness(brightness: number): void
    setMode(mode: BlurMode): void
    setSigma(sigma: number): void

    // Class property signals of Shell-12.Shell.BlurEffect

    connect(sigName: "notify::brightness", callback: (...args: any[]) => void): number
    on(sigName: "notify::brightness", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::brightness", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::brightness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::brightness", ...args: any[]): void
    connect(sigName: "notify::mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::sigma", callback: (...args: any[]) => void): number
    on(sigName: "notify::sigma", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sigma", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sigma", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sigma", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::actor", callback: (...args: any[]) => void): number
    on(sigName: "notify::actor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::actor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::actor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::actor", ...args: any[]): void
    connect(sigName: "notify::enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enabled", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BlurEffect extends Clutter.Effect {

    // Own properties of Shell-12.Shell.BlurEffect

    static name: string

    // Constructors of Shell-12.Shell.BlurEffect

    constructor(config?: BlurEffect.ConstructorProperties) 
    constructor() 
    static new(): BlurEffect
    _init(config?: BlurEffect.ConstructorProperties): void
}

module GLSLEffect {

    // Constructor properties interface

    interface ConstructorProperties extends Clutter.OffscreenEffect.ConstructorProperties {
    }

}

interface GLSLEffect {

    // Own properties of Shell-12.Shell.GLSLEffect

    __gtype__: number

    // Own fields of Shell-12.Shell.GLSLEffect

    parentInstance: any

    // Owm methods of Shell-12.Shell.GLSLEffect

    /**
     * Adds a GLSL snippet to the pipeline used for drawing the effect texture.
     * See #CoglSnippet for details.
     * 
     * This is only valid inside the a call to the build_pipeline() virtual
     * function.
     * @param hook where to insert the code
     * @param declarations GLSL declarations
     * @param code GLSL code
     * @param isReplace whether Cogl code should be replaced by the custom shader
     */
    addGlslSnippet(hook: SnippetHook, declarations: string, code: string, isReplace: boolean): void
    getUniformLocation(name: string): number
    setUniformFloat(uniform: number, nComponents: number, value: number[]): void
    setUniformMatrix(uniform: number, transpose: boolean, dimensions: number, value: number[]): void

    // Own virtual methods of Shell-12.Shell.GLSLEffect

    buildPipeline(): void

    // Class property signals of Shell-12.Shell.GLSLEffect

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::actor", callback: (...args: any[]) => void): number
    on(sigName: "notify::actor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::actor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::actor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::actor", ...args: any[]): void
    connect(sigName: "notify::enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enabled", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GLSLEffect extends Clutter.OffscreenEffect {

    // Own properties of Shell-12.Shell.GLSLEffect

    static name: string

    // Constructors of Shell-12.Shell.GLSLEffect

    constructor(config?: GLSLEffect.ConstructorProperties) 
    _init(config?: GLSLEffect.ConstructorProperties): void
}

module Global {

    // Signal callback interfaces

    /**
     * Signal callback interface for `locate-pointer`
     */
    interface LocatePointerSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `notify-error`
     */
    interface NotifyErrorSignalCallback {
        (object: string | null, p0: string | null): void
    }

    /**
     * Signal callback interface for `shutdown`
     */
    interface ShutdownSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Shell-12.Shell.Global

        force_animations?: boolean | null
        frame_finish_timestamp?: boolean | null
        frame_timestamps?: boolean | null
        session_mode?: string | null
    }

}

interface Global {

    // Own properties of Shell-12.Shell.Global

    readonly backend: Meta.Backend
    readonly compositor: Meta.Compositor
    readonly context: Meta.Context
    readonly datadir: string | null
    readonly display: Meta.Display
    readonly focusManager: St.FocusManager
    forceAnimations: boolean
    frameFinishTimestamp: boolean
    frameTimestamps: boolean
    readonly imagedir: string | null
    readonly screenHeight: number
    readonly screenWidth: number
    readonly sessionMode: string | null
    readonly settings: Gio.Settings
    readonly stage: Clutter.Actor
    readonly switcherooControl: Gio.DBusProxy
    readonly topWindowGroup: Clutter.Actor
    readonly userdatadir: string | null
    readonly windowGroup: Clutter.Actor
    readonly windowManager: WM
    readonly workspaceManager: Meta.WorkspaceManager
    __gtype__: number

    // Owm methods of Shell-12.Shell.Global

    /**
     * Marks that we are currently doing work. This is used to to track
     * whether we are busy for the purposes of shell_global_run_at_leisure().
     * A count is kept and shell_global_end_work() must be called exactly
     * as many times as shell_global_begin_work().
     */
    beginWork(): void
    /**
     * Create a #GAppLaunchContext set up with the correct timestamp, and
     * targeted to activate on the current workspace.
     * @param timestamp the timestamp for the launch (or 0 for current time)
     * @param workspace a workspace index, or -1 to indicate the current one
     * @returns A new #GAppLaunchContext
     */
    createAppLaunchContext(timestamp: number, workspace: number): Gio.AppLaunchContext
    /**
     * Marks the end of work that we started with shell_global_begin_work().
     * If no other work is ongoing and functions have been added with
     * shell_global_run_at_leisure(), they will be run at the next
     * opportunity.
     */
    endWork(): void
    /**
     * Gets app system.
     * @returns the app system
     */
    getAppSystem(): AppSystem
    /**
     * Gets app usage.
     * @returns the app usage
     */
    getAppUsage(): AppUsage
    getContext(): Meta.Context
    getCurrentTime(): number
    getDisplay(): Meta.Display
    /**
     * The shell maintains "persistent" state which will persist after
     * logout or reboot.
     * @param propertyType Expected data type
     * @param propertyName Name of the property
     * @returns The value of a serialized property, or %NULL if none stored
     */
    getPersistentState(propertyType: string, propertyName: string): GLib.Variant
    /**
     * Gets the pointer coordinates and current modifier key state.
     */
    getPointer(): [ /* x */ number, /* y */ number, /* mods */ Clutter.ModifierType ]
    /**
     * The shell maintains "runtime" state which does not persist across
     * logout or reboot.
     * @param propertyType Expected data type
     * @param propertyName Name of the property
     * @returns The value of a serialized property, or %NULL if none stored
     */
    getRuntimeState(propertyType: string, propertyName: string): GLib.Variant
    getSessionMode(): string
    /**
     * Get the global GSettings instance.
     * @returns The GSettings object
     */
    getSettings(): Gio.Settings
    getStage(): Clutter.Stage
    /**
     * Get the global #GDBusProxy instance for the switcheroo-control
     * daemon.
     * @returns the #GDBusProxy for the daemon,   or %NULL on error.
     */
    getSwitcherooControl(): Gio.DBusProxy
    /**
     * Gets the list of #MetaWindowActor for the plugin's screen
     * @returns the list of windows
     */
    getWindowActors(): Meta.WindowActor[]
    /**
     * Gets window tracker.
     * @returns the window tracker
     */
    getWindowTracker(): WindowTracker
    getWorkspaceManager(): Meta.WorkspaceManager
    /**
     * Show a system error notification.  Use this function
     * when a user-initiated action results in a non-fatal problem
     * from causes that may not be under system control.  For
     * example, an application crash.
     * @param msg Error message
     * @param details Error details
     */
    notifyError(msg: string, details: string): void
    /**
     * Restart the current process.  Only intended for development purposes.
     */
    reexecSelf(): void
    /**
     * Schedules a function to be called the next time the shell is idle.
     * Idle means here no animations, no redrawing, and no ongoing background
     * work. Since there is currently no way to hook into the Clutter master
     * clock and know when is running, the implementation here is somewhat
     * approximation. Animations may be detected as terminating early if they
     * can be drawn fast enough so that the event loop goes idle between frames.
     * 
     * The intent of this function is for performance measurement runs
     * where a number of actions should be run serially and each action is
     * timed individually. Using this function for other purposes will
     * interfere with the ability to use it for performance measurement so
     * should be avoided.
     * @param func function to call at leisure
     */
    runAtLeisure(func: LeisureFunction): void
    /**
     * Change the value of serialized persistent state.
     * @param propertyName Name of the property
     * @param variant A #GVariant, or %NULL to unset
     */
    setPersistentState(propertyName: string, variant: GLib.Variant | null): void
    /**
     * Change the value of serialized runtime state.
     * @param propertyName Name of the property
     * @param variant A #GVariant, or %NULL to unset
     */
    setRuntimeState(propertyName: string, variant: GLib.Variant | null): void
    /**
     * Sets the area of the stage that is responsive to mouse clicks when
     * we don't have a modal or grab.
     * @param rectangles a list of #MetaRectangle describing the input region.
     */
    setStageInputRegion(rectangles: Meta.Rectangle[]): void

    // Own signals of Shell-12.Shell.Global

    connect(sigName: "locate-pointer", callback: Global.LocatePointerSignalCallback): number
    on(sigName: "locate-pointer", callback: Global.LocatePointerSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "locate-pointer", callback: Global.LocatePointerSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "locate-pointer", callback: Global.LocatePointerSignalCallback): NodeJS.EventEmitter
    emit(sigName: "locate-pointer", ...args: any[]): void
    connect(sigName: "notify-error", callback: Global.NotifyErrorSignalCallback): number
    on(sigName: "notify-error", callback: Global.NotifyErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-error", callback: Global.NotifyErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-error", callback: Global.NotifyErrorSignalCallback): NodeJS.EventEmitter
    emit(sigName: "notify-error", p0: string | null, ...args: any[]): void
    connect(sigName: "shutdown", callback: Global.ShutdownSignalCallback): number
    on(sigName: "shutdown", callback: Global.ShutdownSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "shutdown", callback: Global.ShutdownSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "shutdown", callback: Global.ShutdownSignalCallback): NodeJS.EventEmitter
    emit(sigName: "shutdown", ...args: any[]): void

    // Class property signals of Shell-12.Shell.Global

    connect(sigName: "notify::backend", callback: (...args: any[]) => void): number
    on(sigName: "notify::backend", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backend", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backend", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backend", ...args: any[]): void
    connect(sigName: "notify::compositor", callback: (...args: any[]) => void): number
    on(sigName: "notify::compositor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::compositor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::compositor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::compositor", ...args: any[]): void
    connect(sigName: "notify::context", callback: (...args: any[]) => void): number
    on(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: "notify::datadir", callback: (...args: any[]) => void): number
    on(sigName: "notify::datadir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::datadir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::datadir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::datadir", ...args: any[]): void
    connect(sigName: "notify::display", callback: (...args: any[]) => void): number
    on(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::focus-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::focus-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focus-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focus-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focus-manager", ...args: any[]): void
    connect(sigName: "notify::force-animations", callback: (...args: any[]) => void): number
    on(sigName: "notify::force-animations", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::force-animations", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::force-animations", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::force-animations", ...args: any[]): void
    connect(sigName: "notify::frame-finish-timestamp", callback: (...args: any[]) => void): number
    on(sigName: "notify::frame-finish-timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::frame-finish-timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::frame-finish-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::frame-finish-timestamp", ...args: any[]): void
    connect(sigName: "notify::frame-timestamps", callback: (...args: any[]) => void): number
    on(sigName: "notify::frame-timestamps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::frame-timestamps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::frame-timestamps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::frame-timestamps", ...args: any[]): void
    connect(sigName: "notify::imagedir", callback: (...args: any[]) => void): number
    on(sigName: "notify::imagedir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::imagedir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::imagedir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::imagedir", ...args: any[]): void
    connect(sigName: "notify::screen-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::screen-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::screen-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::screen-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::screen-height", ...args: any[]): void
    connect(sigName: "notify::screen-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::screen-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::screen-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::screen-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::screen-width", ...args: any[]): void
    connect(sigName: "notify::session-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::session-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::session-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::session-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::session-mode", ...args: any[]): void
    connect(sigName: "notify::settings", callback: (...args: any[]) => void): number
    on(sigName: "notify::settings", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::settings", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::settings", ...args: any[]): void
    connect(sigName: "notify::stage", callback: (...args: any[]) => void): number
    on(sigName: "notify::stage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stage", ...args: any[]): void
    connect(sigName: "notify::switcheroo-control", callback: (...args: any[]) => void): number
    on(sigName: "notify::switcheroo-control", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::switcheroo-control", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::switcheroo-control", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::switcheroo-control", ...args: any[]): void
    connect(sigName: "notify::top-window-group", callback: (...args: any[]) => void): number
    on(sigName: "notify::top-window-group", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::top-window-group", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::top-window-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::top-window-group", ...args: any[]): void
    connect(sigName: "notify::userdatadir", callback: (...args: any[]) => void): number
    on(sigName: "notify::userdatadir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::userdatadir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::userdatadir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::userdatadir", ...args: any[]): void
    connect(sigName: "notify::window-group", callback: (...args: any[]) => void): number
    on(sigName: "notify::window-group", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::window-group", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::window-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::window-group", ...args: any[]): void
    connect(sigName: "notify::window-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::window-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::window-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::window-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::window-manager", ...args: any[]): void
    connect(sigName: "notify::workspace-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::workspace-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::workspace-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::workspace-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::workspace-manager", ...args: any[]): void
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

class Global extends GObject.Object {

    // Own properties of Shell-12.Shell.Global

    static name: string

    // Constructors of Shell-12.Shell.Global

    constructor(config?: Global.ConstructorProperties) 
    _init(config?: Global.ConstructorProperties): void
    /**
     * Gets the singleton global object that represents the desktop.
     * @returns the singleton global object
     */
    static get(): Global
}

module InvertLightnessEffect {

    // Constructor properties interface

    interface ConstructorProperties extends Clutter.OffscreenEffect.ConstructorProperties {
    }

}

interface InvertLightnessEffect {

    // Own properties of Shell-12.Shell.InvertLightnessEffect

    __gtype__: number

    // Class property signals of Shell-12.Shell.InvertLightnessEffect

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::actor", callback: (...args: any[]) => void): number
    on(sigName: "notify::actor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::actor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::actor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::actor", ...args: any[]): void
    connect(sigName: "notify::enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enabled", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class InvertLightnessEffect extends Clutter.OffscreenEffect {

    // Own properties of Shell-12.Shell.InvertLightnessEffect

    static name: string

    // Constructors of Shell-12.Shell.InvertLightnessEffect

    constructor(config?: InvertLightnessEffect.ConstructorProperties) 
    /**
     * Creates a new #ShellInvertLightnessEffect to be used with
     * clutter_actor_add_effect()
     * @constructor 
     * @returns the newly created #ShellInvertLightnessEffect or %NULL.  Use g_object_unref() when done.
     */
    constructor() 
    /**
     * Creates a new #ShellInvertLightnessEffect to be used with
     * clutter_actor_add_effect()
     * @constructor 
     * @returns the newly created #ShellInvertLightnessEffect or %NULL.  Use g_object_unref() when done.
     */
    static new(): InvertLightnessEffect
    _init(config?: InvertLightnessEffect.ConstructorProperties): void
}

module KeyringPrompt {

    // Signal callback interfaces

    /**
     * Signal callback interface for `show-confirm`
     */
    interface ShowConfirmSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `show-password`
     */
    interface ShowPasswordSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gcr.Prompt.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Shell-12.Shell.KeyringPrompt

        /**
         * Text field for confirmation password
         */
        confirm_actor?: Clutter.Text | null
        /**
         * Text field for password
         */
        password_actor?: Clutter.Text | null
    }

}

interface KeyringPrompt extends Gcr.Prompt {

    // Own properties of Shell-12.Shell.KeyringPrompt

    /**
     * Whether the choice check box is visible or not.
     */
    readonly choiceVisible: boolean
    /**
     * Text field for confirmation password
     */
    confirmActor: Clutter.Text
    /**
     * Whether the password confirm entry is visible or not.
     */
    readonly confirmVisible: boolean
    /**
     * Text field for password
     */
    passwordActor: Clutter.Text
    /**
     * Whether the password entry is visible or not.
     */
    readonly passwordVisible: boolean
    /**
     * Whether the warning label is visible or not.
     */
    readonly warningVisible: boolean
    __gtype__: number

    // Owm methods of Shell-12.Shell.KeyringPrompt

    /**
     * Called by implementation when the prompt is cancelled.
     */
    cancel(): void
    /**
     * Called by the implementation when the prompt completes. There are various
     * checks done. %TRUE is returned if the prompt actually should complete.
     * @returns whether the prompt completed
     */
    complete(): boolean
    /**
     * Get the prompt password text actor
     * @returns the password actor
     */
    getConfirmActor(): Clutter.Text | null
    /**
     * Get the prompt password text actor
     * @returns the password actor
     */
    getPasswordActor(): Clutter.Text | null
    /**
     * Set the prompt password confirmation text actor
     * @param confirmActor the confirm password actor
     */
    setConfirmActor(confirmActor: Clutter.Text | null): void
    /**
     * Set the prompt password text actor
     * @param passwordActor the password actor
     */
    setPasswordActor(passwordActor: Clutter.Text | null): void

    // Own signals of Shell-12.Shell.KeyringPrompt

    connect(sigName: "show-confirm", callback: KeyringPrompt.ShowConfirmSignalCallback): number
    on(sigName: "show-confirm", callback: KeyringPrompt.ShowConfirmSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-confirm", callback: KeyringPrompt.ShowConfirmSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-confirm", callback: KeyringPrompt.ShowConfirmSignalCallback): NodeJS.EventEmitter
    emit(sigName: "show-confirm", ...args: any[]): void
    connect(sigName: "show-password", callback: KeyringPrompt.ShowPasswordSignalCallback): number
    on(sigName: "show-password", callback: KeyringPrompt.ShowPasswordSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-password", callback: KeyringPrompt.ShowPasswordSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-password", callback: KeyringPrompt.ShowPasswordSignalCallback): NodeJS.EventEmitter
    emit(sigName: "show-password", ...args: any[]): void

    // Class property signals of Shell-12.Shell.KeyringPrompt

    connect(sigName: "notify::choice-visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::choice-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::choice-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::choice-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::choice-visible", ...args: any[]): void
    connect(sigName: "notify::confirm-actor", callback: (...args: any[]) => void): number
    on(sigName: "notify::confirm-actor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::confirm-actor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::confirm-actor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::confirm-actor", ...args: any[]): void
    connect(sigName: "notify::confirm-visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::confirm-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::confirm-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::confirm-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::confirm-visible", ...args: any[]): void
    connect(sigName: "notify::password-actor", callback: (...args: any[]) => void): number
    on(sigName: "notify::password-actor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::password-actor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::password-actor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::password-actor", ...args: any[]): void
    connect(sigName: "notify::password-visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::password-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::password-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::password-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::password-visible", ...args: any[]): void
    connect(sigName: "notify::warning-visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::warning-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::warning-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::warning-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::warning-visible", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::caller-window", callback: (...args: any[]) => void): number
    on(sigName: "notify::caller-window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::caller-window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::caller-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::caller-window", ...args: any[]): void
    connect(sigName: "notify::cancel-label", callback: (...args: any[]) => void): number
    on(sigName: "notify::cancel-label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cancel-label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cancel-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cancel-label", ...args: any[]): void
    connect(sigName: "notify::choice-chosen", callback: (...args: any[]) => void): number
    on(sigName: "notify::choice-chosen", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::choice-chosen", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::choice-chosen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::choice-chosen", ...args: any[]): void
    connect(sigName: "notify::choice-label", callback: (...args: any[]) => void): number
    on(sigName: "notify::choice-label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::choice-label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::choice-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::choice-label", ...args: any[]): void
    connect(sigName: "notify::continue-label", callback: (...args: any[]) => void): number
    on(sigName: "notify::continue-label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::continue-label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::continue-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::continue-label", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::message", callback: (...args: any[]) => void): number
    on(sigName: "notify::message", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::message", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::message", ...args: any[]): void
    connect(sigName: "notify::password-new", callback: (...args: any[]) => void): number
    on(sigName: "notify::password-new", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::password-new", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::password-new", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::password-new", ...args: any[]): void
    connect(sigName: "notify::password-strength", callback: (...args: any[]) => void): number
    on(sigName: "notify::password-strength", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::password-strength", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::password-strength", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::password-strength", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::warning", callback: (...args: any[]) => void): number
    on(sigName: "notify::warning", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::warning", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::warning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::warning", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class KeyringPrompt extends GObject.Object {

    // Own properties of Shell-12.Shell.KeyringPrompt

    static name: string

    // Constructors of Shell-12.Shell.KeyringPrompt

    constructor(config?: KeyringPrompt.ConstructorProperties) 
    /**
     * Create new internal prompt base
     * @constructor 
     * @returns new internal prompt
     */
    constructor() 
    /**
     * Create new internal prompt base
     * @constructor 
     * @returns new internal prompt
     */
    static new(): KeyringPrompt
    _init(config?: KeyringPrompt.ConstructorProperties): void
}

module MountOperation {

    // Signal callback interfaces

    /**
     * Signal callback interface for `show-processes-2`
     */
    interface ShowProcesses2SignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gio.MountOperation.ConstructorProperties {
    }

}

interface MountOperation {

    // Own properties of Shell-12.Shell.MountOperation

    __gtype__: number

    // Owm methods of Shell-12.Shell.MountOperation

    getShowProcessesChoices(): string[]
    getShowProcessesMessage(): string | null
    getShowProcessesPids(): GLib.Pid[]

    // Own signals of Shell-12.Shell.MountOperation

    connect(sigName: "show-processes-2", callback: MountOperation.ShowProcesses2SignalCallback): number
    on(sigName: "show-processes-2", callback: MountOperation.ShowProcesses2SignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-processes-2", callback: MountOperation.ShowProcesses2SignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-processes-2", callback: MountOperation.ShowProcesses2SignalCallback): NodeJS.EventEmitter
    emit(sigName: "show-processes-2", ...args: any[]): void

    // Class property signals of Shell-12.Shell.MountOperation

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::anonymous", callback: (...args: any[]) => void): number
    on(sigName: "notify::anonymous", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anonymous", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anonymous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anonymous", ...args: any[]): void
    connect(sigName: "notify::choice", callback: (...args: any[]) => void): number
    on(sigName: "notify::choice", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::choice", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::choice", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::choice", ...args: any[]): void
    connect(sigName: "notify::domain", callback: (...args: any[]) => void): number
    on(sigName: "notify::domain", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::domain", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::domain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::domain", ...args: any[]): void
    connect(sigName: "notify::is-tcrypt-hidden-volume", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-tcrypt-hidden-volume", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-tcrypt-hidden-volume", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-tcrypt-hidden-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-tcrypt-hidden-volume", ...args: any[]): void
    connect(sigName: "notify::is-tcrypt-system-volume", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-tcrypt-system-volume", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-tcrypt-system-volume", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-tcrypt-system-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-tcrypt-system-volume", ...args: any[]): void
    connect(sigName: "notify::password", callback: (...args: any[]) => void): number
    on(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::password-save", callback: (...args: any[]) => void): number
    on(sigName: "notify::password-save", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::password-save", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::password-save", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::password-save", ...args: any[]): void
    connect(sigName: "notify::pim", callback: (...args: any[]) => void): number
    on(sigName: "notify::pim", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pim", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pim", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pim", ...args: any[]): void
    connect(sigName: "notify::username", callback: (...args: any[]) => void): number
    on(sigName: "notify::username", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::username", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::username", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MountOperation extends Gio.MountOperation {

    // Own properties of Shell-12.Shell.MountOperation

    static name: string

    // Constructors of Shell-12.Shell.MountOperation

    constructor(config?: MountOperation.ConstructorProperties) 
    constructor() 
    static new(): MountOperation
    _init(config?: MountOperation.ConstructorProperties): void
}

module NetworkAgent {

    // Signal callback interfaces

    /**
     * Signal callback interface for `cancel-request`
     */
    interface CancelRequestSignalCallback {
        (object: string | null): void
    }

    /**
     * Signal callback interface for `new-request`
     */
    interface NewRequestSignalCallback {
        (object: string | null, p0: NM.Connection, p1: string | null, p2: string[], p3: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, NM.SecretAgentOld.ConstructorProperties {
    }

}

interface NetworkAgent extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of Shell-12.Shell.NetworkAgent

    __gtype__: number

    // Owm methods of Shell-12.Shell.NetworkAgent

    addVpnSecret(requestId: string | null, settingKey: string | null, settingValue: string | null): void
    respond(requestId: string | null, response: NetworkAgentResponse): void
    searchVpnPlugin(service: string, callback: Gio.AsyncReadyCallback | null): void
    searchVpnPluginFinish(result: Gio.AsyncResult): NM.VpnPluginInfo | null
    setPassword(requestId: string | null, settingKey: string | null, settingValue: string | null): void

    // Own signals of Shell-12.Shell.NetworkAgent

    connect(sigName: "cancel-request", callback: NetworkAgent.CancelRequestSignalCallback): number
    on(sigName: "cancel-request", callback: NetworkAgent.CancelRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cancel-request", callback: NetworkAgent.CancelRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cancel-request", callback: NetworkAgent.CancelRequestSignalCallback): NodeJS.EventEmitter
    emit(sigName: "cancel-request", ...args: any[]): void
    connect(sigName: "new-request", callback: NetworkAgent.NewRequestSignalCallback): number
    on(sigName: "new-request", callback: NetworkAgent.NewRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-request", callback: NetworkAgent.NewRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-request", callback: NetworkAgent.NewRequestSignalCallback): NodeJS.EventEmitter
    emit(sigName: "new-request", p0: NM.Connection, p1: string | null, p2: string[], p3: number, ...args: any[]): void

    // Class property signals of Shell-12.Shell.NetworkAgent

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::auto-register", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-register", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-register", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-register", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-register", ...args: any[]): void
    connect(sigName: "notify::capabilities", callback: (...args: any[]) => void): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: "notify::dbus-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::dbus-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dbus-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dbus-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dbus-connection", ...args: any[]): void
    connect(sigName: "notify::identifier", callback: (...args: any[]) => void): number
    on(sigName: "notify::identifier", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::identifier", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::identifier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::identifier", ...args: any[]): void
    connect(sigName: "notify::registered", callback: (...args: any[]) => void): number
    on(sigName: "notify::registered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::registered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::registered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::registered", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class NetworkAgent extends NM.SecretAgentOld {

    // Own properties of Shell-12.Shell.NetworkAgent

    static name: string

    // Constructors of Shell-12.Shell.NetworkAgent

    constructor(config?: NetworkAgent.ConstructorProperties) 
    _init(config?: NetworkAgent.ConstructorProperties): void
}

module PerfLog {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface PerfLog {

    // Own properties of Shell-12.Shell.PerfLog

    __gtype__: number

    // Owm methods of Shell-12.Shell.PerfLog

    /**
     * Adds a function that will be called before statistics are recorded.
     * The function would typically compute one or more statistics values
     * and call a function such as shell_perf_log_update_statistic_i()
     * to update the value that will be recorded.
     * @param callback function to call before recording statistics
     */
    addStatisticsCallback(callback: PerfStatisticsCallback): void
    /**
     * Calls all the update functions added with
     * shell_perf_log_add_statistics_callback() and then records events
     * for all statistics, followed by a perf.statisticsCollected event.
     */
    collectStatistics(): void
    /**
     * Defines a performance event for later recording.
     * @param name name of the event. This should of the form   '<namespace>.<specific eventf'>, for example   'clutter.stagePaintDone'.
     * @param description human readable description of the event.
     * @param signature signature defining the arguments that event takes.   This is a string of type characters, using the same characters   as D-Bus or GVariant. Only a very limited number of signatures   are supported: , '', 's', 'i', and 'x'. This mean respectively:   no arguments, one string, one 32-bit integer, and one 64-bit   integer.
     */
    defineEvent(name: string, description: string, signature: string): void
    /**
     * Defines a statistic. A statistic is a numeric value that is stored
     * by the performance log and recorded periodically or when
     * shell_perf_log_collect_statistics() is called explicitly.
     * 
     * Code that defines a statistic should update it by calling
     * the update function for the particular data type of the statistic,
     * such as shell_perf_log_update_statistic_i(). This can be done
     * at any time, but would normally done inside a function registered
     * with shell_perf_log_add_statistics_callback(). These functions
     * are called immediately before statistics are recorded.
     * @param name name of the statistic and of the corresponding event.  This should follow the same guidelines as for shell_perf_log_define_event()
     * @param description human readable description of the statistic.
     * @param signature The type of the data stored for statistic. Must  currently be 'i' or 'x'.
     */
    defineStatistic(name: string, description: string, signature: string): void
    /**
     * Dump the definition of currently defined events and statistics, formatted
     * as JSON, to the specified output stream. The JSON output is an array,
     * with each element being a dictionary of the form:
     * 
     * { name: <name of event>,
     *   description: <description of string,
     *   statistic: true } (only for statistics)
     * @param out output stream into which to write the event definitions
     * @returns %TRUE if the dump succeeded. %FALSE if an IO error occurred
     */
    dumpEvents(out: Gio.OutputStream): boolean
    /**
     * Writes the performance event log, formatted as JSON, to the specified
     * output stream. For performance reasons, the output stream passed
     * in should generally be a buffered (or memory) output stream, since
     * it will be written to in small pieces. The JSON output is an array
     * with the elements of the array also being arrays, of the form
     * '[' <time>, <event name> [, <event_arg>... ] ']'.
     * @param out output stream into which to write the event log
     * @returns %TRUE if the dump succeeded. %FALSE if an IO error occurred
     */
    dumpLog(out: Gio.OutputStream): boolean
    /**
     * Records a performance event with no arguments.
     * @param name name of the event
     */
    event(name: string): void
    /**
     * Records a performance event with one 32-bit integer argument.
     * @param name name of the event
     * @param arg the argument
     */
    eventI(name: string, arg: number): void
    /**
     * Records a performance event with one string argument.
     * @param name name of the event
     * @param arg the argument
     */
    eventS(name: string, arg: string): void
    /**
     * Records a performance event with one 64-bit integer argument.
     * @param name name of the event
     * @param arg the argument
     */
    eventX(name: string, arg: number): void
    /**
     * Replays the log by calling the given function for each event
     * in the log.
     * @param replayFunction function to call for each event in the log
     */
    replay(replayFunction: PerfReplayFunction): void
    /**
     * Sets whether events are currently being recorded.
     * @param enabled whether to record events
     */
    setEnabled(enabled: boolean): void
    /**
     * Updates the current value of an 32-bit integer statistic.
     * @param name name of the statistic
     * @param value new value for the statistic
     */
    updateStatisticI(name: string, value: number): void
    /**
     * Updates the current value of an 64-bit integer statistic.
     * @param name name of the statistic
     * @param value new value for the statistic
     */
    updateStatisticX(name: string, value: number): void

    // Class property signals of Shell-12.Shell.PerfLog

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

class PerfLog extends GObject.Object {

    // Own properties of Shell-12.Shell.PerfLog

    static name: string

    // Constructors of Shell-12.Shell.PerfLog

    constructor(config?: PerfLog.ConstructorProperties) 
    _init(config?: PerfLog.ConstructorProperties): void
    /**
     * Gets the global singleton performance log. This is initially disabled
     * and must be explicitly enabled with shell_perf_log_set_enabled().
     * @returns the global singleton performance log
     */
    static getDefault(): PerfLog
}

module PolkitAuthenticationAgent {

    // Signal callback interfaces

    /**
     * Signal callback interface for `cancel`
     */
    interface CancelSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `initiate`
     */
    interface InitiateSignalCallback {
        (object: string | null, p0: string | null, p1: string | null, p2: string | null, p3: string[]): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends PolkitAgent.Listener.ConstructorProperties {
    }

}

interface PolkitAuthenticationAgent {

    // Own properties of Shell-12.Shell.PolkitAuthenticationAgent

    __gtype__: number

    // Owm methods of Shell-12.Shell.PolkitAuthenticationAgent

    complete(dismissed: boolean): void
    register(): void

    // Overloads of register

    /**
     * Registers `listener` with the PolicyKit daemon as an authentication
     * agent for `subject`. This is implemented by registering a D-Bus
     * object at `object_path` on the unique name assigned by the system
     * message bus.
     * 
     * Whenever the PolicyKit daemon needs to authenticate a processes
     * that is related to `subject,` the methods
     * polkit_agent_listener_initiate_authentication() and
     * polkit_agent_listener_initiate_authentication_finish() will be
     * invoked on `listener`.
     * 
     * Note that registration of an authentication agent can fail; for
     * example another authentication agent may already be registered for
     * `subject`.
     * 
     * Note that the calling thread is blocked until a reply is received.
     * @param flags A set of flags from the #PolkitAgentRegisterFlags enumeration.
     * @param subject The subject to become an authentication agent for, typically a #PolkitUnixSession object.
     * @param objectPath The D-Bus object path to use for the authentication agent or %NULL for the default object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %NULL if @error is set, otherwise a registration handle that can be used with polkit_agent_listener_unregister().
     */
    register(flags: PolkitAgent.RegisterFlags, subject: Polkit.Subject, objectPath: string, cancellable: Gio.Cancellable | null): any | null
    unregister(): void

    // Own signals of Shell-12.Shell.PolkitAuthenticationAgent

    connect(sigName: "cancel", callback: PolkitAuthenticationAgent.CancelSignalCallback): number
    on(sigName: "cancel", callback: PolkitAuthenticationAgent.CancelSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cancel", callback: PolkitAuthenticationAgent.CancelSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cancel", callback: PolkitAuthenticationAgent.CancelSignalCallback): NodeJS.EventEmitter
    emit(sigName: "cancel", ...args: any[]): void
    connect(sigName: "initiate", callback: PolkitAuthenticationAgent.InitiateSignalCallback): number
    on(sigName: "initiate", callback: PolkitAuthenticationAgent.InitiateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "initiate", callback: PolkitAuthenticationAgent.InitiateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "initiate", callback: PolkitAuthenticationAgent.InitiateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "initiate", p0: string | null, p1: string | null, p2: string | null, p3: string[], ...args: any[]): void

    // Class property signals of Shell-12.Shell.PolkitAuthenticationAgent

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

class PolkitAuthenticationAgent extends PolkitAgent.Listener {

    // Own properties of Shell-12.Shell.PolkitAuthenticationAgent

    static name: string

    // Constructors of Shell-12.Shell.PolkitAuthenticationAgent

    constructor(config?: PolkitAuthenticationAgent.ConstructorProperties) 
    constructor() 
    static new(): PolkitAuthenticationAgent
    _init(config?: PolkitAuthenticationAgent.ConstructorProperties): void
}

module Screenshot {

    // Signal callback interfaces

    /**
     * Signal callback interface for `screenshot-taken`
     */
    interface ScreenshotTakenSignalCallback {
        (object: Meta.Rectangle): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Screenshot {

    // Own properties of Shell-12.Shell.Screenshot

    __gtype__: number

    // Owm methods of Shell-12.Shell.Screenshot

    /**
     * Picks the pixel at `x,` `y` and returns its color as #ClutterColor.
     * @param x The X coordinate to pick
     * @param y The Y coordinate to pick
     * @param callback function to call returning success or failure of the async grabbing
     */
    pickColor(x: number, y: number, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish the asynchronous operation started by shell_screenshot_pick_color()
     * and obtain its result.
     * @param result the #GAsyncResult that was provided to the callback
     * @returns whether the operation was successful
     */
    pickColorFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* color */ Clutter.Color ]
    /**
     * Takes a screenshot of the whole screen
     * in `stream` as png image.
     * @param includeCursor Whether to include the cursor or not
     * @param stream The stream for the screenshot
     * @param callback function to call returning success or failure of the async grabbing
     */
    screenshot(includeCursor: boolean, stream: Gio.OutputStream, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Takes a screenshot of the passed in area and saves it
     * in `stream` as png image.
     * @param x The X coordinate of the area
     * @param y The Y coordinate of the area
     * @param width The width of the area
     * @param height The height of the area
     * @param stream The stream for the screenshot
     * @param callback function to call returning success or failure of the async grabbing
     */
    screenshotArea(x: number, y: number, width: number, height: number, stream: Gio.OutputStream, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish the asynchronous operation started by shell_screenshot_screenshot_area()
     * and obtain its result.
     * @param result the #GAsyncResult that was provided to the callback
     * @returns whether the operation was successful
     */
    screenshotAreaFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* area */ cairo.RectangleInt ]
    /**
     * Finish the asynchronous operation started by shell_screenshot_screenshot()
     * and obtain its result.
     * @param result the #GAsyncResult that was provided to the callback
     * @returns whether the operation was successful
     */
    screenshotFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* area */ cairo.RectangleInt ]
    /**
     * Takes a screenshot of the whole screen as #ClutterContent.
     * @param callback function to call returning success or failure of the async grabbing
     */
    screenshotStageToContent(callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish the asynchronous operation started by
     * shell_screenshot_screenshot_stage_to_content() and obtain its result.
     * @param result the #GAsyncResult that was provided to the callback
     * @returns the #ClutterContent, or NULL
     */
    screenshotStageToContentFinish(result: Gio.AsyncResult): [ /* returnType */ Clutter.Content, /* scale */ number, /* cursorContent */ Clutter.Content, /* cursorPoint */ Graphene.Point, /* cursorScale */ number ]
    /**
     * Takes a screenshot of the focused window (optionally omitting the frame)
     * in `stream` as png image.
     * @param includeFrame Whether to include the frame or not
     * @param includeCursor Whether to include the cursor or not
     * @param stream The stream for the screenshot
     * @param callback function to call returning success or failure of the async grabbing
     */
    screenshotWindow(includeFrame: boolean, includeCursor: boolean, stream: Gio.OutputStream, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish the asynchronous operation started by shell_screenshot_screenshot_window()
     * and obtain its result.
     * @param result the #GAsyncResult that was provided to the callback
     * @returns whether the operation was successful
     */
    screenshotWindowFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* area */ cairo.RectangleInt ]

    // Own signals of Shell-12.Shell.Screenshot

    connect(sigName: "screenshot-taken", callback: Screenshot.ScreenshotTakenSignalCallback): number
    on(sigName: "screenshot-taken", callback: Screenshot.ScreenshotTakenSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "screenshot-taken", callback: Screenshot.ScreenshotTakenSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "screenshot-taken", callback: Screenshot.ScreenshotTakenSignalCallback): NodeJS.EventEmitter
    emit(sigName: "screenshot-taken", ...args: any[]): void

    // Class property signals of Shell-12.Shell.Screenshot

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

class Screenshot extends GObject.Object {

    // Own properties of Shell-12.Shell.Screenshot

    static name: string

    // Constructors of Shell-12.Shell.Screenshot

    constructor(config?: Screenshot.ConstructorProperties) 
    constructor() 
    static new(): Screenshot
    _init(config?: Screenshot.ConstructorProperties): void
    /**
     * Composite a rectangle defined by x, y, width, height from the texture to a
     * pixbuf and write it as a PNG image into the stream.
     * @param texture the source texture
     * @param x x coordinate of the rectangle
     * @param y y coordinate of the rectangle
     * @param width width of the rectangle, or -1 to use the full texture
     * @param height height of the rectangle, or -1 to use the full texture
     * @param scale scale of the source texture
     * @param cursor the cursor texture
     * @param cursorX x coordinate to put the cursor texture at, relative to the full source texture
     * @param cursorY y coordinate to put the cursor texture at, relative to the full source texture
     * @param cursorScale scale of the cursor texture
     * @param stream the stream to write the PNG image into
     * @param callback function to call returning success or failure
     */
    static compositeToStream(texture: Cogl.Texture, x: number, y: number, width: number, height: number, scale: number, cursor: Cogl.Texture | null, cursorX: number, cursorY: number, cursorScale: number, stream: Gio.OutputStream, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish the asynchronous operation started by
     * shell_screenshot_composite_to_stream () and obtain its result.
     * @param result the #GAsyncResult that was provided to the callback
     * @returns a GdkPixbuf with the final image if the operation was successful, or NULL on error.
     */
    static compositeToStreamFinish(result: Gio.AsyncResult): GdkPixbuf.Pixbuf | null
}

module SecureTextBuffer {

    // Constructor properties interface

    interface ConstructorProperties extends Clutter.TextBuffer.ConstructorProperties {
    }

}

interface SecureTextBuffer {

    // Own properties of Shell-12.Shell.SecureTextBuffer

    __gtype__: number

    // Class property signals of Shell-12.Shell.SecureTextBuffer

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::length", callback: (...args: any[]) => void): number
    on(sigName: "notify::length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::max-length", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-length", ...args: any[]): void
    connect(sigName: "notify::text", callback: (...args: any[]) => void): number
    on(sigName: "notify::text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SecureTextBuffer extends Clutter.TextBuffer {

    // Own properties of Shell-12.Shell.SecureTextBuffer

    static name: string

    // Constructors of Shell-12.Shell.SecureTextBuffer

    constructor(config?: SecureTextBuffer.ConstructorProperties) 
    constructor() 
    static new(): SecureTextBuffer
    _init(config?: SecureTextBuffer.ConstructorProperties): void
}

module SquareBin {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Clutter.Animatable.ConstructorProperties, Clutter.Container.ConstructorProperties, Clutter.Scriptable.ConstructorProperties, St.Bin.ConstructorProperties {
    }

}

interface SquareBin extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Shell-12.Shell.SquareBin

    __gtype__: number

    // Conflicting properties

    parentInstance: any

    // Class property signals of Shell-12.Shell.SquareBin

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::child", callback: (...args: any[]) => void): number
    on(sigName: "notify::child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::accessible-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-name", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::hover", callback: (...args: any[]) => void): number
    on(sigName: "notify::hover", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hover", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hover", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hover", ...args: any[]): void
    connect(sigName: "notify::label-actor", callback: (...args: any[]) => void): number
    on(sigName: "notify::label-actor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::label-actor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::label-actor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::label-actor", ...args: any[]): void
    connect(sigName: "notify::pseudo-class", callback: (...args: any[]) => void): number
    on(sigName: "notify::pseudo-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pseudo-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pseudo-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pseudo-class", ...args: any[]): void
    connect(sigName: "notify::style", callback: (...args: any[]) => void): number
    on(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::style-class", callback: (...args: any[]) => void): number
    on(sigName: "notify::style-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::style-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::style-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::style-class", ...args: any[]): void
    connect(sigName: "notify::track-hover", callback: (...args: any[]) => void): number
    on(sigName: "notify::track-hover", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track-hover", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track-hover", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track-hover", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (...args: any[]) => void): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::color-state", callback: (...args: any[]) => void): number
    on(sigName: "notify::color-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::color-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::color-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::color-state", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (...args: any[]) => void): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (...args: any[]) => void): number
    on(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (...args: any[]) => void): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (...args: any[]) => void): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (...args: any[]) => void): number
    on(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (...args: any[]) => void): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (...args: any[]) => void): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (...args: any[]) => void): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (...args: any[]) => void): number
    on(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SquareBin extends St.Bin {

    // Own properties of Shell-12.Shell.SquareBin

    static name: string

    // Constructors of Shell-12.Shell.SquareBin

    constructor(config?: SquareBin.ConstructorProperties) 
    _init(config?: SquareBin.ConstructorProperties): void

    // Conflicting static methods

    static new(...args: any[]): any
}

module Stack {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Clutter.Animatable.ConstructorProperties, Clutter.Container.ConstructorProperties, Clutter.Scriptable.ConstructorProperties, St.Widget.ConstructorProperties {
    }

}

interface Stack extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Shell-12.Shell.Stack

    __gtype__: number

    // Class property signals of Shell-12.Shell.Stack

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::accessible-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-name", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::hover", callback: (...args: any[]) => void): number
    on(sigName: "notify::hover", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hover", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hover", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hover", ...args: any[]): void
    connect(sigName: "notify::label-actor", callback: (...args: any[]) => void): number
    on(sigName: "notify::label-actor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::label-actor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::label-actor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::label-actor", ...args: any[]): void
    connect(sigName: "notify::pseudo-class", callback: (...args: any[]) => void): number
    on(sigName: "notify::pseudo-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pseudo-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pseudo-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pseudo-class", ...args: any[]): void
    connect(sigName: "notify::style", callback: (...args: any[]) => void): number
    on(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::style-class", callback: (...args: any[]) => void): number
    on(sigName: "notify::style-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::style-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::style-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::style-class", ...args: any[]): void
    connect(sigName: "notify::track-hover", callback: (...args: any[]) => void): number
    on(sigName: "notify::track-hover", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track-hover", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track-hover", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track-hover", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (...args: any[]) => void): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::color-state", callback: (...args: any[]) => void): number
    on(sigName: "notify::color-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::color-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::color-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::color-state", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (...args: any[]) => void): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (...args: any[]) => void): number
    on(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (...args: any[]) => void): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (...args: any[]) => void): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (...args: any[]) => void): number
    on(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (...args: any[]) => void): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (...args: any[]) => void): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (...args: any[]) => void): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (...args: any[]) => void): number
    on(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Stack extends St.Widget {

    // Own properties of Shell-12.Shell.Stack

    static name: string

    // Constructors of Shell-12.Shell.Stack

    constructor(config?: Stack.ConstructorProperties) 
    _init(config?: Stack.ConstructorProperties): void
}

module TrayIcon {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Clutter.Animatable.ConstructorProperties, Clutter.Container.ConstructorProperties, Clutter.Scriptable.ConstructorProperties, Clutter.Clone.ConstructorProperties {
    }

}

interface TrayIcon extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Shell-12.Shell.TrayIcon

    readonly pid: number
    readonly title: string | null
    readonly wmClass: string | null
    __gtype__: number

    // Owm methods of Shell-12.Shell.TrayIcon

    /**
     * Fakes a press and release on `icon`. `event` must be a
     * %CLUTTER_BUTTON_RELEASE, %CLUTTER_KEY_PRESS or %CLUTTER_KEY_RELEASE event.
     * Its relevant details will be passed on to the icon, but its
     * coordinates will be ignored; the click is
     * always made on the center of `icon`.
     * @param event the #ClutterEvent triggering the fake click
     */
    click(event: Clutter.Event): void

    // Class property signals of Shell-12.Shell.TrayIcon

    connect(sigName: "notify::pid", callback: (...args: any[]) => void): number
    on(sigName: "notify::pid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pid", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::wm-class", callback: (...args: any[]) => void): number
    on(sigName: "notify::wm-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::wm-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::wm-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::wm-class", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::source", callback: (...args: any[]) => void): number
    on(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (...args: any[]) => void): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::color-state", callback: (...args: any[]) => void): number
    on(sigName: "notify::color-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::color-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::color-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::color-state", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (...args: any[]) => void): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (...args: any[]) => void): number
    on(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (...args: any[]) => void): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (...args: any[]) => void): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (...args: any[]) => void): number
    on(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (...args: any[]) => void): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (...args: any[]) => void): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (...args: any[]) => void): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (...args: any[]) => void): number
    on(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TrayIcon extends Clutter.Clone {

    // Own properties of Shell-12.Shell.TrayIcon

    static name: string

    // Constructors of Shell-12.Shell.TrayIcon

    constructor(config?: TrayIcon.ConstructorProperties) 
    _init(config?: TrayIcon.ConstructorProperties): void

    // Conflicting static methods

    static new(...args: any[]): any
}

module TrayManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `tray-icon-added`
     */
    interface TrayIconAddedSignalCallback {
        (object: Clutter.Actor): void
    }

    /**
     * Signal callback interface for `tray-icon-removed`
     */
    interface TrayIconRemovedSignalCallback {
        (object: Clutter.Actor): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Shell-12.Shell.TrayManager

        bg_color?: Clutter.Color | null
    }

}

interface TrayManager {

    // Own properties of Shell-12.Shell.TrayManager

    readonly bgColor: Clutter.Color
    __gtype__: number

    // Owm methods of Shell-12.Shell.TrayManager

    manageScreen(themeWidget: St.Widget): void
    unmanageScreen(): void

    // Own signals of Shell-12.Shell.TrayManager

    connect(sigName: "tray-icon-added", callback: TrayManager.TrayIconAddedSignalCallback): number
    on(sigName: "tray-icon-added", callback: TrayManager.TrayIconAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "tray-icon-added", callback: TrayManager.TrayIconAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "tray-icon-added", callback: TrayManager.TrayIconAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "tray-icon-added", ...args: any[]): void
    connect(sigName: "tray-icon-removed", callback: TrayManager.TrayIconRemovedSignalCallback): number
    on(sigName: "tray-icon-removed", callback: TrayManager.TrayIconRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "tray-icon-removed", callback: TrayManager.TrayIconRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "tray-icon-removed", callback: TrayManager.TrayIconRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "tray-icon-removed", ...args: any[]): void

    // Class property signals of Shell-12.Shell.TrayManager

    connect(sigName: "notify::bg-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::bg-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bg-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bg-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bg-color", ...args: any[]): void
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

class TrayManager extends GObject.Object {

    // Own properties of Shell-12.Shell.TrayManager

    static name: string

    // Constructors of Shell-12.Shell.TrayManager

    constructor(config?: TrayManager.ConstructorProperties) 
    constructor() 
    static new(): TrayManager
    _init(config?: TrayManager.ConstructorProperties): void
}

module WM {

    // Signal callback interfaces

    /**
     * Signal callback interface for `confirm-display-change`
     */
    interface ConfirmDisplayChangeSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `create-close-dialog`
     */
    interface CreateCloseDialogSignalCallback {
        (window: Meta.Window): Meta.CloseDialog
    }

    /**
     * Signal callback interface for `create-inhibit-shortcuts-dialog`
     */
    interface CreateInhibitShortcutsDialogSignalCallback {
        (window: Meta.Window): Meta.InhibitShortcutsDialog
    }

    /**
     * Signal callback interface for `destroy`
     */
    interface DestroySignalCallback {
        (object: Meta.WindowActor): void
    }

    /**
     * Signal callback interface for `filter-keybinding`
     */
    interface FilterKeybindingSignalCallback {
        (object: Meta.KeyBinding): boolean
    }

    /**
     * Signal callback interface for `hide-tile-preview`
     */
    interface HideTilePreviewSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `kill-switch-workspace`
     */
    interface KillSwitchWorkspaceSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `kill-window-effects`
     */
    interface KillWindowEffectsSignalCallback {
        (object: Meta.WindowActor): void
    }

    /**
     * Signal callback interface for `map`
     */
    interface MapSignalCallback {
        (object: Meta.WindowActor): void
    }

    /**
     * Signal callback interface for `minimize`
     */
    interface MinimizeSignalCallback {
        (object: Meta.WindowActor): void
    }

    /**
     * Signal callback interface for `show-tile-preview`
     */
    interface ShowTilePreviewSignalCallback {
        (object: Meta.Window, p0: Meta.Rectangle, p1: number): void
    }

    /**
     * Signal callback interface for `show-window-menu`
     */
    interface ShowWindowMenuSignalCallback {
        (object: Meta.Window, p0: number, p1: Meta.Rectangle): void
    }

    /**
     * Signal callback interface for `size-change`
     */
    interface SizeChangeSignalCallback {
        (object: Meta.WindowActor, p0: Meta.SizeChange, p1: Meta.Rectangle, p2: Meta.Rectangle): void
    }

    /**
     * Signal callback interface for `size-changed`
     */
    interface SizeChangedSignalCallback {
        (object: Meta.WindowActor): void
    }

    /**
     * Signal callback interface for `switch-workspace`
     */
    interface SwitchWorkspaceSignalCallback {
        (object: number, p0: number, p1: number): void
    }

    /**
     * Signal callback interface for `unminimize`
     */
    interface UnminimizeSignalCallback {
        (object: Meta.WindowActor): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface WM {

    // Own properties of Shell-12.Shell.WM

    __gtype__: number

    // Owm methods of Shell-12.Shell.WM

    /**
     * The plugin must call this after the user responded to the confirmation dialog.
     * @param ok if the new configuration was OK
     */
    completeDisplayChange(ok: boolean): void
    /**
     * The plugin must call this when it has completed a window destroy effect.
     * @param actor the MetaWindowActor actor
     */
    completedDestroy(actor: Meta.WindowActor): void
    /**
     * The plugin must call this when it has completed a window map effect.
     * @param actor the MetaWindowActor actor
     */
    completedMap(actor: Meta.WindowActor): void
    /**
     * The plugin must call this when it has completed a window minimize effect.
     * @param actor the MetaWindowActor actor
     */
    completedMinimize(actor: Meta.WindowActor): void
    completedSizeChange(actor: Meta.WindowActor): void
    /**
     * The plugin must call this when it has finished switching the
     * workspace.
     */
    completedSwitchWorkspace(): void
    /**
     * The plugin must call this when it has completed a window unminimize effect.
     * @param actor the MetaWindowActor actor
     */
    completedUnminimize(actor: Meta.WindowActor): void

    // Own signals of Shell-12.Shell.WM

    connect(sigName: "confirm-display-change", callback: WM.ConfirmDisplayChangeSignalCallback): number
    on(sigName: "confirm-display-change", callback: WM.ConfirmDisplayChangeSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "confirm-display-change", callback: WM.ConfirmDisplayChangeSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "confirm-display-change", callback: WM.ConfirmDisplayChangeSignalCallback): NodeJS.EventEmitter
    emit(sigName: "confirm-display-change", ...args: any[]): void
    connect(sigName: "create-close-dialog", callback: WM.CreateCloseDialogSignalCallback): number
    on(sigName: "create-close-dialog", callback: WM.CreateCloseDialogSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "create-close-dialog", callback: WM.CreateCloseDialogSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "create-close-dialog", callback: WM.CreateCloseDialogSignalCallback): NodeJS.EventEmitter
    emit(sigName: "create-close-dialog", ...args: any[]): void
    connect(sigName: "create-inhibit-shortcuts-dialog", callback: WM.CreateInhibitShortcutsDialogSignalCallback): number
    on(sigName: "create-inhibit-shortcuts-dialog", callback: WM.CreateInhibitShortcutsDialogSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "create-inhibit-shortcuts-dialog", callback: WM.CreateInhibitShortcutsDialogSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "create-inhibit-shortcuts-dialog", callback: WM.CreateInhibitShortcutsDialogSignalCallback): NodeJS.EventEmitter
    emit(sigName: "create-inhibit-shortcuts-dialog", ...args: any[]): void
    connect(sigName: "destroy", callback: WM.DestroySignalCallback): number
    on(sigName: "destroy", callback: WM.DestroySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: WM.DestroySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: WM.DestroySignalCallback): NodeJS.EventEmitter
    emit(sigName: "destroy", ...args: any[]): void
    connect(sigName: "filter-keybinding", callback: WM.FilterKeybindingSignalCallback): number
    on(sigName: "filter-keybinding", callback: WM.FilterKeybindingSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "filter-keybinding", callback: WM.FilterKeybindingSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "filter-keybinding", callback: WM.FilterKeybindingSignalCallback): NodeJS.EventEmitter
    emit(sigName: "filter-keybinding", ...args: any[]): void
    connect(sigName: "hide-tile-preview", callback: WM.HideTilePreviewSignalCallback): number
    on(sigName: "hide-tile-preview", callback: WM.HideTilePreviewSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide-tile-preview", callback: WM.HideTilePreviewSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide-tile-preview", callback: WM.HideTilePreviewSignalCallback): NodeJS.EventEmitter
    emit(sigName: "hide-tile-preview", ...args: any[]): void
    connect(sigName: "kill-switch-workspace", callback: WM.KillSwitchWorkspaceSignalCallback): number
    on(sigName: "kill-switch-workspace", callback: WM.KillSwitchWorkspaceSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "kill-switch-workspace", callback: WM.KillSwitchWorkspaceSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "kill-switch-workspace", callback: WM.KillSwitchWorkspaceSignalCallback): NodeJS.EventEmitter
    emit(sigName: "kill-switch-workspace", ...args: any[]): void
    connect(sigName: "kill-window-effects", callback: WM.KillWindowEffectsSignalCallback): number
    on(sigName: "kill-window-effects", callback: WM.KillWindowEffectsSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "kill-window-effects", callback: WM.KillWindowEffectsSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "kill-window-effects", callback: WM.KillWindowEffectsSignalCallback): NodeJS.EventEmitter
    emit(sigName: "kill-window-effects", ...args: any[]): void
    connect(sigName: "map", callback: WM.MapSignalCallback): number
    on(sigName: "map", callback: WM.MapSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "map", callback: WM.MapSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "map", callback: WM.MapSignalCallback): NodeJS.EventEmitter
    emit(sigName: "map", ...args: any[]): void
    connect(sigName: "minimize", callback: WM.MinimizeSignalCallback): number
    on(sigName: "minimize", callback: WM.MinimizeSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "minimize", callback: WM.MinimizeSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "minimize", callback: WM.MinimizeSignalCallback): NodeJS.EventEmitter
    emit(sigName: "minimize", ...args: any[]): void
    connect(sigName: "show-tile-preview", callback: WM.ShowTilePreviewSignalCallback): number
    on(sigName: "show-tile-preview", callback: WM.ShowTilePreviewSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-tile-preview", callback: WM.ShowTilePreviewSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-tile-preview", callback: WM.ShowTilePreviewSignalCallback): NodeJS.EventEmitter
    emit(sigName: "show-tile-preview", p0: Meta.Rectangle, p1: number, ...args: any[]): void
    connect(sigName: "show-window-menu", callback: WM.ShowWindowMenuSignalCallback): number
    on(sigName: "show-window-menu", callback: WM.ShowWindowMenuSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-window-menu", callback: WM.ShowWindowMenuSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-window-menu", callback: WM.ShowWindowMenuSignalCallback): NodeJS.EventEmitter
    emit(sigName: "show-window-menu", p0: number, p1: Meta.Rectangle, ...args: any[]): void
    connect(sigName: "size-change", callback: WM.SizeChangeSignalCallback): number
    on(sigName: "size-change", callback: WM.SizeChangeSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "size-change", callback: WM.SizeChangeSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "size-change", callback: WM.SizeChangeSignalCallback): NodeJS.EventEmitter
    emit(sigName: "size-change", p0: Meta.SizeChange, p1: Meta.Rectangle, p2: Meta.Rectangle, ...args: any[]): void
    connect(sigName: "size-changed", callback: WM.SizeChangedSignalCallback): number
    on(sigName: "size-changed", callback: WM.SizeChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "size-changed", callback: WM.SizeChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "size-changed", callback: WM.SizeChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "size-changed", ...args: any[]): void
    connect(sigName: "switch-workspace", callback: WM.SwitchWorkspaceSignalCallback): number
    on(sigName: "switch-workspace", callback: WM.SwitchWorkspaceSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "switch-workspace", callback: WM.SwitchWorkspaceSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "switch-workspace", callback: WM.SwitchWorkspaceSignalCallback): NodeJS.EventEmitter
    emit(sigName: "switch-workspace", p0: number, p1: number, ...args: any[]): void
    connect(sigName: "unminimize", callback: WM.UnminimizeSignalCallback): number
    on(sigName: "unminimize", callback: WM.UnminimizeSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unminimize", callback: WM.UnminimizeSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unminimize", callback: WM.UnminimizeSignalCallback): NodeJS.EventEmitter
    emit(sigName: "unminimize", ...args: any[]): void

    // Class property signals of Shell-12.Shell.WM

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

class WM extends GObject.Object {

    // Own properties of Shell-12.Shell.WM

    static name: string

    // Constructors of Shell-12.Shell.WM

    constructor(config?: WM.ConstructorProperties) 
    /**
     * Creates a new window management interface by hooking into `plugin`.
     * @constructor 
     * @param plugin the #MetaPlugin
     * @returns the new window-management interface
     */
    constructor(plugin: Meta.Plugin) 
    /**
     * Creates a new window management interface by hooking into `plugin`.
     * @constructor 
     * @param plugin the #MetaPlugin
     * @returns the new window-management interface
     */
    static new(plugin: Meta.Plugin): WM
    _init(config?: WM.ConstructorProperties): void
}

module WindowPreview {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Clutter.Animatable.ConstructorProperties, Clutter.Container.ConstructorProperties, Clutter.Scriptable.ConstructorProperties, St.Widget.ConstructorProperties {

        // Own constructor properties of Shell-12.Shell.WindowPreview

        window_container?: Clutter.Actor | null
    }

}

interface WindowPreview extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Shell-12.Shell.WindowPreview

    windowContainer: Clutter.Actor
    __gtype__: number

    // Class property signals of Shell-12.Shell.WindowPreview

    connect(sigName: "notify::window-container", callback: (...args: any[]) => void): number
    on(sigName: "notify::window-container", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::window-container", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::window-container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::window-container", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::accessible-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-name", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::hover", callback: (...args: any[]) => void): number
    on(sigName: "notify::hover", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hover", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hover", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hover", ...args: any[]): void
    connect(sigName: "notify::label-actor", callback: (...args: any[]) => void): number
    on(sigName: "notify::label-actor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::label-actor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::label-actor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::label-actor", ...args: any[]): void
    connect(sigName: "notify::pseudo-class", callback: (...args: any[]) => void): number
    on(sigName: "notify::pseudo-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pseudo-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pseudo-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pseudo-class", ...args: any[]): void
    connect(sigName: "notify::style", callback: (...args: any[]) => void): number
    on(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::style-class", callback: (...args: any[]) => void): number
    on(sigName: "notify::style-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::style-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::style-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::style-class", ...args: any[]): void
    connect(sigName: "notify::track-hover", callback: (...args: any[]) => void): number
    on(sigName: "notify::track-hover", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track-hover", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track-hover", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track-hover", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (...args: any[]) => void): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::color-state", callback: (...args: any[]) => void): number
    on(sigName: "notify::color-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::color-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::color-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::color-state", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (...args: any[]) => void): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (...args: any[]) => void): number
    on(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (...args: any[]) => void): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (...args: any[]) => void): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (...args: any[]) => void): number
    on(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (...args: any[]) => void): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (...args: any[]) => void): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (...args: any[]) => void): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (...args: any[]) => void): number
    on(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WindowPreview extends St.Widget {

    // Own properties of Shell-12.Shell.WindowPreview

    static name: string

    // Constructors of Shell-12.Shell.WindowPreview

    constructor(config?: WindowPreview.ConstructorProperties) 
    _init(config?: WindowPreview.ConstructorProperties): void
}

module WindowPreviewLayout {

    // Constructor properties interface

    interface ConstructorProperties extends Clutter.LayoutManager.ConstructorProperties {
    }

}

interface WindowPreviewLayout {

    // Own properties of Shell-12.Shell.WindowPreviewLayout

    readonly boundingBox: Clutter.ActorBox
    __gtype__: number

    // Owm methods of Shell-12.Shell.WindowPreviewLayout

    /**
     * Creates a ClutterActor drawing the texture of `window` and adds it
     * to the container. If `window` is already part of the preview, this
     * function will do nothing.
     * @param window the #MetaWindow
     * @returns The newly created actor drawing @window
     */
    addWindow(window: Meta.Window): Clutter.Actor | null
    /**
     * Gets an array of all MetaWindows that were added to the layout
     * using shell_window_preview_layout_add_window(), ordered by the
     * insertion order.
     * @returns The list of windows
     */
    getWindows(): Meta.Window[]
    /**
     * Removes a MetaWindow `window` from the preview which has been added
     * previously using shell_window_preview_layout_add_window().
     * If `window` is not part of preview, this function will do nothing.
     * @param window the #MetaWindow
     */
    removeWindow(window: Meta.Window): void

    // Class property signals of Shell-12.Shell.WindowPreviewLayout

    connect(sigName: "notify::bounding-box", callback: (...args: any[]) => void): number
    on(sigName: "notify::bounding-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bounding-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bounding-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bounding-box", ...args: any[]): void
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

class WindowPreviewLayout extends Clutter.LayoutManager {

    // Own properties of Shell-12.Shell.WindowPreviewLayout

    static name: string

    // Constructors of Shell-12.Shell.WindowPreviewLayout

    constructor(config?: WindowPreviewLayout.ConstructorProperties) 
    _init(config?: WindowPreviewLayout.ConstructorProperties): void
}

module WindowTracker {

    // Signal callback interfaces

    /**
     * Signal callback interface for `startup-sequence-changed`
     */
    interface StartupSequenceChangedSignalCallback {
        (object: Meta.StartupSequence): void
    }

    /**
     * Signal callback interface for `tracked-windows-changed`
     */
    interface TrackedWindowsChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface WindowTracker {

    // Own properties of Shell-12.Shell.WindowTracker

    readonly focusApp: App
    __gtype__: number

    // Owm methods of Shell-12.Shell.WindowTracker

    /**
     * Look up the application corresponding to a process.
     * @param pid A Unix process identifier
     * @returns A #ShellApp, or %NULL if none
     */
    getAppFromPid(pid: number): App
    getStartupSequences(): Meta.StartupSequence[]
    getWindowApp(metawin: Meta.Window): App

    // Own signals of Shell-12.Shell.WindowTracker

    connect(sigName: "startup-sequence-changed", callback: WindowTracker.StartupSequenceChangedSignalCallback): number
    on(sigName: "startup-sequence-changed", callback: WindowTracker.StartupSequenceChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "startup-sequence-changed", callback: WindowTracker.StartupSequenceChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "startup-sequence-changed", callback: WindowTracker.StartupSequenceChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "startup-sequence-changed", ...args: any[]): void
    connect(sigName: "tracked-windows-changed", callback: WindowTracker.TrackedWindowsChangedSignalCallback): number
    on(sigName: "tracked-windows-changed", callback: WindowTracker.TrackedWindowsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "tracked-windows-changed", callback: WindowTracker.TrackedWindowsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "tracked-windows-changed", callback: WindowTracker.TrackedWindowsChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "tracked-windows-changed", ...args: any[]): void

    // Class property signals of Shell-12.Shell.WindowTracker

    connect(sigName: "notify::focus-app", callback: (...args: any[]) => void): number
    on(sigName: "notify::focus-app", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focus-app", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focus-app", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focus-app", ...args: any[]): void
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

class WindowTracker extends GObject.Object {

    // Own properties of Shell-12.Shell.WindowTracker

    static name: string

    // Constructors of Shell-12.Shell.WindowTracker

    constructor(config?: WindowTracker.ConstructorProperties) 
    _init(config?: WindowTracker.ConstructorProperties): void
    static getDefault(): WindowTracker
}

module WorkspaceBackground {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Clutter.Animatable.ConstructorProperties, Clutter.Container.ConstructorProperties, Clutter.Scriptable.ConstructorProperties, St.Widget.ConstructorProperties {

        // Own constructor properties of Shell-12.Shell.WorkspaceBackground

        monitor_index?: number | null
        state_adjustment_value?: number | null
    }

}

interface WorkspaceBackground extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Shell-12.Shell.WorkspaceBackground

    readonly monitorIndex: number
    stateAdjustmentValue: number
    __gtype__: number

    // Class property signals of Shell-12.Shell.WorkspaceBackground

    connect(sigName: "notify::monitor-index", callback: (...args: any[]) => void): number
    on(sigName: "notify::monitor-index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::monitor-index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::monitor-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::monitor-index", ...args: any[]): void
    connect(sigName: "notify::state-adjustment-value", callback: (...args: any[]) => void): number
    on(sigName: "notify::state-adjustment-value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state-adjustment-value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state-adjustment-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state-adjustment-value", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::accessible-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-name", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::hover", callback: (...args: any[]) => void): number
    on(sigName: "notify::hover", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hover", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hover", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hover", ...args: any[]): void
    connect(sigName: "notify::label-actor", callback: (...args: any[]) => void): number
    on(sigName: "notify::label-actor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::label-actor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::label-actor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::label-actor", ...args: any[]): void
    connect(sigName: "notify::pseudo-class", callback: (...args: any[]) => void): number
    on(sigName: "notify::pseudo-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pseudo-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pseudo-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pseudo-class", ...args: any[]): void
    connect(sigName: "notify::style", callback: (...args: any[]) => void): number
    on(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::style-class", callback: (...args: any[]) => void): number
    on(sigName: "notify::style-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::style-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::style-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::style-class", ...args: any[]): void
    connect(sigName: "notify::track-hover", callback: (...args: any[]) => void): number
    on(sigName: "notify::track-hover", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track-hover", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track-hover", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track-hover", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (...args: any[]) => void): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::color-state", callback: (...args: any[]) => void): number
    on(sigName: "notify::color-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::color-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::color-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::color-state", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (...args: any[]) => void): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (...args: any[]) => void): number
    on(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (...args: any[]) => void): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (...args: any[]) => void): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (...args: any[]) => void): number
    on(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (...args: any[]) => void): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (...args: any[]) => void): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (...args: any[]) => void): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (...args: any[]) => void): number
    on(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WorkspaceBackground extends St.Widget {

    // Own properties of Shell-12.Shell.WorkspaceBackground

    static name: string

    // Constructors of Shell-12.Shell.WorkspaceBackground

    constructor(config?: WorkspaceBackground.ConstructorProperties) 
    _init(config?: WorkspaceBackground.ConstructorProperties): void
}

interface AppClass {

    // Own fields of Shell-12.Shell.AppClass

    parentClass: GObject.ObjectClass
}

abstract class AppClass {

    // Own properties of Shell-12.Shell.AppClass

    static name: string
}

interface AppSystemClass {

    // Own fields of Shell-12.Shell.AppSystemClass

    parentClass: GObject.ObjectClass
}

abstract class AppSystemClass {

    // Own properties of Shell-12.Shell.AppSystemClass

    static name: string
}

interface AppUsageClass {

    // Own fields of Shell-12.Shell.AppUsageClass

    parentClass: GObject.ObjectClass
}

abstract class AppUsageClass {

    // Own properties of Shell-12.Shell.AppUsageClass

    static name: string
}

interface BlurEffectClass {

    // Own fields of Shell-12.Shell.BlurEffectClass

    parentClass: Clutter.EffectClass
}

abstract class BlurEffectClass {

    // Own properties of Shell-12.Shell.BlurEffectClass

    static name: string
}

interface GLSLEffectClass {

    // Own fields of Shell-12.Shell.GLSLEffectClass

    parentClass: Clutter.OffscreenEffectClass
    basePipeline: Cogl.Pipeline
    buildPipeline: (effect: GLSLEffect) => void
}

abstract class GLSLEffectClass {

    // Own properties of Shell-12.Shell.GLSLEffectClass

    static name: string
}

interface GlobalClass {

    // Own fields of Shell-12.Shell.GlobalClass

    parentClass: GObject.ObjectClass
}

abstract class GlobalClass {

    // Own properties of Shell-12.Shell.GlobalClass

    static name: string
}

interface InvertLightnessEffectClass {
}

abstract class InvertLightnessEffectClass {

    // Own properties of Shell-12.Shell.InvertLightnessEffectClass

    static name: string
}

interface KeyringPromptClass {

    // Own fields of Shell-12.Shell.KeyringPromptClass

    parentClass: GObject.ObjectClass
}

abstract class KeyringPromptClass {

    // Own properties of Shell-12.Shell.KeyringPromptClass

    static name: string
}

interface MemoryInfo {

    // Own fields of Shell-12.Shell.MemoryInfo

    glibcUordblks: number
    jsBytes: number
    gjsBoxed: number
    gjsGobject: number
    gjsFunction: number
    gjsClosure: number
    lastGcSecondsAgo: number
}

class MemoryInfo {

    // Own properties of Shell-12.Shell.MemoryInfo

    static name: string
}

interface MountOperationClass {

    // Own fields of Shell-12.Shell.MountOperationClass

    parentClass: Gio.MountOperationClass
}

abstract class MountOperationClass {

    // Own properties of Shell-12.Shell.MountOperationClass

    static name: string
}

interface NetworkAgentClass {
}

abstract class NetworkAgentClass {

    // Own properties of Shell-12.Shell.NetworkAgentClass

    static name: string
}

interface NetworkAgentPrivate {
}

class NetworkAgentPrivate {

    // Own properties of Shell-12.Shell.NetworkAgentPrivate

    static name: string
}

interface PerfLogClass {

    // Own fields of Shell-12.Shell.PerfLogClass

    parentClass: GObject.ObjectClass
}

abstract class PerfLogClass {

    // Own properties of Shell-12.Shell.PerfLogClass

    static name: string
}

interface PolkitAuthenticationAgentClass {

    // Own fields of Shell-12.Shell.PolkitAuthenticationAgentClass

    parentClass: PolkitAgent.ListenerClass
}

abstract class PolkitAuthenticationAgentClass {

    // Own properties of Shell-12.Shell.PolkitAuthenticationAgentClass

    static name: string
}

interface ScreenshotClass {

    // Own fields of Shell-12.Shell.ScreenshotClass

    parentClass: GObject.ObjectClass
}

abstract class ScreenshotClass {

    // Own properties of Shell-12.Shell.ScreenshotClass

    static name: string
}

interface SecureTextBufferClass {

    // Own fields of Shell-12.Shell.SecureTextBufferClass

    parentClass: Clutter.TextBufferClass
}

abstract class SecureTextBufferClass {

    // Own properties of Shell-12.Shell.SecureTextBufferClass

    static name: string
}

interface SquareBinClass {

    // Own fields of Shell-12.Shell.SquareBinClass

    parentClass: St.BinClass
}

abstract class SquareBinClass {

    // Own properties of Shell-12.Shell.SquareBinClass

    static name: string
}

interface StackClass {

    // Own fields of Shell-12.Shell.StackClass

    parentClass: St.WidgetClass
}

abstract class StackClass {

    // Own properties of Shell-12.Shell.StackClass

    static name: string
}

interface TrayIconClass {

    // Own fields of Shell-12.Shell.TrayIconClass

    parentClass: Clutter.CloneClass
}

abstract class TrayIconClass {

    // Own properties of Shell-12.Shell.TrayIconClass

    static name: string
}

interface TrayManagerClass {

    // Own fields of Shell-12.Shell.TrayManagerClass

    parentClass: GObject.ObjectClass
}

abstract class TrayManagerClass {

    // Own properties of Shell-12.Shell.TrayManagerClass

    static name: string
}

interface WMClass {

    // Own fields of Shell-12.Shell.WMClass

    parentClass: GObject.ObjectClass
}

abstract class WMClass {

    // Own properties of Shell-12.Shell.WMClass

    static name: string
}

interface WindowPreviewClass {

    // Own fields of Shell-12.Shell.WindowPreviewClass

    parentClass: St.WidgetClass
}

abstract class WindowPreviewClass {

    // Own properties of Shell-12.Shell.WindowPreviewClass

    static name: string
}

interface WindowPreviewLayoutClass {

    // Own fields of Shell-12.Shell.WindowPreviewLayoutClass

    parentClass: Clutter.LayoutManagerClass
}

abstract class WindowPreviewLayoutClass {

    // Own properties of Shell-12.Shell.WindowPreviewLayoutClass

    static name: string
}

interface WindowPreviewLayoutPrivate {
}

class WindowPreviewLayoutPrivate {

    // Own properties of Shell-12.Shell.WindowPreviewLayoutPrivate

    static name: string
}

interface WindowTrackerClass {

    // Own fields of Shell-12.Shell.WindowTrackerClass

    parentClass: GObject.ObjectClass
}

abstract class WindowTrackerClass {

    // Own properties of Shell-12.Shell.WindowTrackerClass

    static name: string
}

interface WorkspaceBackgroundClass {

    // Own fields of Shell-12.Shell.WorkspaceBackgroundClass

    parentClass: St.WidgetClass
}

abstract class WorkspaceBackgroundClass {

    // Own properties of Shell-12.Shell.WorkspaceBackgroundClass

    static name: string
}

}

export default Shell;
// END