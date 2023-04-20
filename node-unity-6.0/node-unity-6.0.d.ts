
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * Unity-6.0
 */

import type GLib from '@girs/glib-2.0';
import type Dbusmenu from '@girs/dbusmenu-0.4';
import type GObject from '@girs/gobject-2.0';
import type Dee from '@girs/dee-1.0';
import type Gio from '@girs/gio-2.0';

export namespace Unity {

enum CategoryType {
    NONE,
    APPLICATION,
    BOOK,
    MUSIC,
    MOVIE,
    GAMES,
    ELECTRONICS,
    COMPUTERS,
    OFFICE,
    HOME,
    GARDEN,
    PETS,
    TOYS,
    CHILDREN,
    BABY,
    CLOTHES,
    SHOES,
    WATCHES,
    SPORTS,
    OUTDOORS,
    GROCERY,
    HEALTH,
    BEAUTY,
    DIY,
    TOOLS,
    CAR,
    N_CATEGORIES,
}
enum IconSizeHint {
    DEFAULT,
    SMALL,
    LARGE,
}
enum HandledType {
    NOT_HANDLED,
    SHOW_DASH,
    HIDE_DASH,
    GOTO_DASH_URI,
    SHOW_PREVIEW,
}
enum CategoryRenderer {
    VERTICAL_TILE,
    HORIZONTAL_TILE,
    LIST_TILE,
    FLOW,
}
enum FilterRenderer {
    CHECK_OPTIONS,
    RADIO_OPTIONS,
    MULTIRANGE,
    RATINGS,
    CHECK_OPTIONS_COMPACT,
}
enum LayoutHint {
    NONE,
    LEFT,
    RIGHT,
    TOP,
    BOTTOM,
}
enum SearchType {
    DEFAULT,
    GLOBAL,
    N_TYPES,
}
enum PlaybackState {
    PLAYING,
    PAUSED,
}
enum OptionsFilterSortType {
    MANUAL,
    DISPLAY_NAME,
    ID,
}
enum PreferencesManagerRemoteContent {
    ALL,
    NONE,
}
enum MusicPreviewTrackState {
    STOPPED,
    PLAYING,
    PAUSED,
}
/**
 * <para>Asynchronously read a stream into memory. This method will close the input stream when done.</para>
 * @param input 
 * @param ioPriority 
 * @param cancellable 
 * @param callback 
 */
function ioReadStreamAsync(input: Gio.InputStream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function ioReadStreamFinish(res: Gio.AsyncResult): [ /* data */ Uint8Array, /* size */ number ]
/**
 * <para>Asynchronously looks for a file with base name &apos;filename&apos; in all the directories defined in &apos;dirs&apos; and returns a file input 
 * stream for it.</para>
 * <para>If the file can not be found this method returns null.</para>
 * @param filename 
 * @param dirs 
 * @param callback 
 */
function ioOpenFromDirs(filename: string | null, dirs: string[], callback?: Gio.AsyncReadyCallback | null): void
function ioOpenFromDirsFinish(res: Gio.AsyncResult): Gio.FileInputStream | null
/**
 * <para>Like open_from_dirs&lpar;&rpar; but scans first the user data dir and then the system data dirs as defined by the XDG_DATA_DIRS environment 
 * variable.</para>
 * @param filename 
 * @param callback 
 */
function ioOpenFromDataDirs(filename: string | null, callback?: Gio.AsyncReadyCallback | null): void
function ioOpenFromDataDirsFinish(res: Gio.AsyncResult): Gio.FileInputStream | null
function ioGetSystemDataDirs(): string[]
module MergeStrategy {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface MergeStrategy extends GObject.Object {

    // Own properties of Unity-6.0.Unity.MergeStrategy

    __gtype__: number

    // Owm methods of Unity-6.0.Unity.MergeStrategy

    // Has conflict: mergeResult(target: Dee.Model, row: GLib.Variant[]): Dee.ModelIter | null

    // Own virtual methods of Unity-6.0.Unity.MergeStrategy

    /**
     * <para>Virtual method to merge row from source model into target model.</para>
     * @virtual 
     * @param target The target model to merge a row into 
     * @param row An array of variants with the row data for the result 
     * @returns A model iter pointing to the row in the target model where &commat;row was added. Or null if the result was discarded 
     */
    mergeResult(target: Dee.Model, row: GLib.Variant[]): Dee.ModelIter | null

    // Class property signals of Unity-6.0.Unity.MergeStrategy

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
}

class MergeStrategy {

    // Own properties of Unity-6.0.Unity.MergeStrategy

    static name: string

    // Constructors of Unity-6.0.Unity.MergeStrategy

    constructor(config?: MergeStrategy.ConstructorProperties) 
    _init(config?: MergeStrategy.ConstructorProperties): void
}

module AppInfoManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    interface ChangedSignalCallback {
        (id: string | null, newAppinfo?: Gio.AppInfo | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface AppInfoManager {

    // Own properties of Unity-6.0.Unity.AppInfoManager

    __gtype__: number

    // Own fields of Unity-6.0.Unity.AppInfoManager

    parentInstance: GObject.Object
    priv: AppInfoManagerPrivate

    // Owm methods of Unity-6.0.Unity.AppInfoManager

    /**
     * <para>Look up an AppInfo given its desktop id or absolute path. The desktop id is the base filename of the .desktop file for the application 
     * including the .desktop extension.</para>
     * <para>If the AppInfo is not already cached this method will do synchronous IO to look it up.</para>
     * @param id 
     */
    lookup(id: string | null): Gio.AppInfo | null
    /**
     * <para>Look up XDG categories for for desktop id or file path &commat;id. Returns null if id is not found. This method will do sync IO if the desktop 
     * file for &commat;id is not already cached. So if you are living in an async world you must first do an async call to lookup_async&lpar;id&rpar; 
     * before calling this method, in which case no sync io will be done.</para>
     * @param id 
     */
    getCategories(id: string | null): string[] | null
    /**
     * <para>Look up keywords for for desktop id or file path &commat;id. The keywords will be an amalgamation of the X-GNOME-Keywords and X-AppInstall-
     * Keywords fields from the .desktopfile. Returns null if id is not found. This method will do sync IO if the desktop file for &commat;id is not already 
     * cached. So if you are living in an async world you must first do an async call to lookup_async&lpar;id&rpar; before calling this method, in which 
     * case no sync io will be done.</para>
     * @param id 
     */
    getKeywords(id: string | null): string[] | null
    /**
     * <para>Look up the full path to the desktop file for desktop id &commat;id. Returns null if &commat;id is not found. This method will do sync IO if 
     * the desktop file for &commat;id is not already cached. So if you are living in an async world you must first do an async call to lookup_async&lpar;id
     * &rpar; before calling this method, in which case no sync io will be done.</para>
     * @param id 
     */
    getPath(id: string | null): string | null
    /**
     * <para>Look up an AppInfo given its desktop id or absolute path. The desktop id is the base filename of the .desktop file for the application 
     * including the .desktop extension.</para>
     * <para>If the AppInfo is not already cached this method will do asynchronous IO to look it up.</para>
     * @param id 
     * @param callback 
     */
    lookupAsync(id: string | null, callback?: Gio.AsyncReadyCallback | null): void
    lookupFinish(res: Gio.AsyncResult): Gio.AppInfo | null
    clear(): void

    // Own signals of Unity-6.0.Unity.AppInfoManager

    connect(sigName: "changed", callback: AppInfoManager.ChangedSignalCallback): number
    on(sigName: "changed", callback: AppInfoManager.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: AppInfoManager.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: AppInfoManager.ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", newAppinfo?: Gio.AppInfo | null, ...args: any[]): void

    // Class property signals of Unity-6.0.Unity.AppInfoManager

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
}

/**
 * <para>A singleton class that caches GLib.AppInfo objects. Singletons are evil, yes, but this on slightly less so because the exposed API is immutable.
 * </para>
 * <para>To detect when any of the managed AppInfo objects changes, appears, or goes away listen for the &apos;changed&apos; signal.</para>
 * @class 
 */
class AppInfoManager extends GObject.Object {

    // Own properties of Unity-6.0.Unity.AppInfoManager

    static name: string

    // Constructors of Unity-6.0.Unity.AppInfoManager

    constructor(config?: AppInfoManager.ConstructorProperties) 
    _init(config?: AppInfoManager.ConstructorProperties): void
    static getInstance(): AppInfoManager
    /**
     * <para>Get a ref to the singleton AppInfoManager</para>
     */
    static getDefault(): AppInfoManager
}

module AnnotatedIcon {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.AnnotatedIcon

        icon?: Gio.Icon | null
        ribbon?: string | null
        category?: CategoryType | null
        sizeHint?: IconSizeHint | null
    }

}

interface AnnotatedIcon {

    // Own properties of Unity-6.0.Unity.AnnotatedIcon

    icon: Gio.Icon
    ribbon: string | null
    category: CategoryType
    sizeHint: IconSizeHint
    __gtype__: number

    // Own fields of Unity-6.0.Unity.AnnotatedIcon

    parentInstance: GObject.Object
    priv: AnnotatedIconPrivate

    // Owm methods of Unity-6.0.Unity.AnnotatedIcon

    toString(): string | null

    // Class property signals of Unity-6.0.Unity.AnnotatedIcon

    connect(sigName: "notify::icon", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::ribbon", callback: (...args: any[]) => void): number
    on(sigName: "notify::ribbon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ribbon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ribbon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ribbon", ...args: any[]): void
    connect(sigName: "notify::category", callback: (...args: any[]) => void): number
    on(sigName: "notify::category", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::category", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::category", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::category", ...args: any[]): void
    connect(sigName: "notify::size-hint", callback: (...args: any[]) => void): number
    on(sigName: "notify::size-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size-hint", ...args: any[]): void
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
}

class AnnotatedIcon extends GObject.Object {

    // Own properties of Unity-6.0.Unity.AnnotatedIcon

    static name: string

    // Constructors of Unity-6.0.Unity.AnnotatedIcon

    constructor(config?: AnnotatedIcon.ConstructorProperties) 
    constructor(baseIcon: Gio.Icon) 
    static new(baseIcon: Gio.Icon): AnnotatedIcon
    _init(config?: AnnotatedIcon.ConstructorProperties): void
}

module Inspector {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Inspector {

    // Own properties of Unity-6.0.Unity.Inspector

    /**
     * <para>Boolean property determining whether Unity is running or not. You can use this property to determine whether Unity is running or not.</para>
     */
    readonly unityRunning: boolean
    /**
     * <para>Property holding the unique DBus name of the Unity process if Unity is running, or null otherwise.</para>
     */
    readonly unityBusName: string | null
    __gtype__: number

    // Own fields of Unity-6.0.Unity.Inspector

    parentInstance: GObject.Object
    priv: InspectorPrivate

    // Class property signals of Unity-6.0.Unity.Inspector

    connect(sigName: "notify::unity-running", callback: (...args: any[]) => void): number
    on(sigName: "notify::unity-running", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::unity-running", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::unity-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::unity-running", ...args: any[]): void
    connect(sigName: "notify::unity-bus-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::unity-bus-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::unity-bus-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::unity-bus-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::unity-bus-name", ...args: any[]): void
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
}

/**
 * <para>The Unity.Inspector is a singleton that can be used to inspect the state of Unity.</para>
 * <para>One of the most basic and most useful applications of the inspector is to check if Unity is running or not.</para>
 * @class 
 */
class Inspector extends GObject.Object {

    // Own properties of Unity-6.0.Unity.Inspector

    static name: string

    // Constructors of Unity-6.0.Unity.Inspector

    constructor(config?: Inspector.ConstructorProperties) 
    _init(config?: Inspector.ConstructorProperties): void
    /**
     * <para>Get the default singleton Unity.Inspector instance, creating it dynamically if necessary.</para>
     * @returns The singleton Unity.Inspector. If calling from C do not free this instance. 
     */
    static getDefault(): Inspector
}

module LauncherEntry {

    // Constructor properties interface

    interface ConstructorProperties extends Dee.Serializable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.LauncherEntry

        appUri?: string | null
        count?: number | null
        countVisible?: boolean | null
        progress?: number | null
        progressVisible?: boolean | null
        urgent?: boolean | null
        quicklist?: Dbusmenu.Menuitem | null
    }

}

interface LauncherEntry extends Dee.Serializable {

    // Own properties of Unity-6.0.Unity.LauncherEntry

    appUri: string | null
    count: number
    countVisible: boolean
    progress: number
    progressVisible: boolean
    urgent: boolean
    quicklist: Dbusmenu.Menuitem
    __gtype__: number

    // Own fields of Unity-6.0.Unity.LauncherEntry

    parentInstance: GObject.Object
    priv: LauncherEntryPrivate

    // Class property signals of Unity-6.0.Unity.LauncherEntry

    connect(sigName: "notify::app-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::app-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::app-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::app-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::app-uri", ...args: any[]): void
    connect(sigName: "notify::count", callback: (...args: any[]) => void): number
    on(sigName: "notify::count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::count", ...args: any[]): void
    connect(sigName: "notify::count-visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::count-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::count-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::count-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::count-visible", ...args: any[]): void
    connect(sigName: "notify::progress", callback: (...args: any[]) => void): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::progress", ...args: any[]): void
    connect(sigName: "notify::progress-visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::progress-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::progress-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::progress-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::progress-visible", ...args: any[]): void
    connect(sigName: "notify::urgent", callback: (...args: any[]) => void): number
    on(sigName: "notify::urgent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::urgent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::urgent", ...args: any[]): void
    connect(sigName: "notify::quicklist", callback: (...args: any[]) => void): number
    on(sigName: "notify::quicklist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::quicklist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::quicklist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::quicklist", ...args: any[]): void
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
}

/**
 * <para>This class represents your control point for your application&apos;s icon in the Unity Launcher. You can control properties such as a counter, 
 * progress, or emblem that will be overlaid on your application&apos;s launcher icon. You can also set a quicklist on it by setting the &quot;quicklist
 * &quot; property to point at the Dbusmenu.Menuitem which is the root of your quicklist.</para>
 * <para>Create a LauncherEntry by giving your desktop file id to the constructor &lpar;eg. &quot;myapp.desktop&quot;&rpar;.</para>
 * @class 
 */
class LauncherEntry extends GObject.Object {

    // Own properties of Unity-6.0.Unity.LauncherEntry

    static name: string

    // Constructors of Unity-6.0.Unity.LauncherEntry

    constructor(config?: LauncherEntry.ConstructorProperties) 
    _init(config?: LauncherEntry.ConstructorProperties): void
    static getForAppUri(appUri: string | null): LauncherEntry
    static getForDesktopId(desktopId: string | null): LauncherEntry
    static getForDesktopFile(desktopFile: string | null): LauncherEntry
}

module LauncherFavorites {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    interface ChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface LauncherFavorites {

    // Own properties of Unity-6.0.Unity.LauncherFavorites

    __gtype__: number

    // Own fields of Unity-6.0.Unity.LauncherFavorites

    parentInstance: GObject.Object
    priv: LauncherFavoritesPrivate

    // Owm methods of Unity-6.0.Unity.LauncherFavorites

    hasAppInfo(appinfo: Gio.AppInfo): boolean
    hasAppId(appId: string | null): boolean
    lookup(appId: string | null): Gio.AppInfo | null
    enumerateIds(): string[]
    enumerateAppInfos(): Gio.AppInfo[]

    // Own signals of Unity-6.0.Unity.LauncherFavorites

    connect(sigName: "changed", callback: LauncherFavorites.ChangedSignalCallback): number
    on(sigName: "changed", callback: LauncherFavorites.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: LauncherFavorites.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: LauncherFavorites.ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of Unity-6.0.Unity.LauncherFavorites

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
}

class LauncherFavorites extends GObject.Object {

    // Own properties of Unity-6.0.Unity.LauncherFavorites

    static name: string

    // Constructors of Unity-6.0.Unity.LauncherFavorites

    constructor(config?: LauncherFavorites.ConstructorProperties) 
    _init(config?: LauncherFavorites.ConstructorProperties): void
    /**
     * <para>Get the default singleton Unity.LauncherFavorites instance, creating it dynamically if necessary.</para>
     * @returns The singleton Unity.LauncherFavorites. If calling from C do not free this instance. 
     */
    static getDefault(): LauncherFavorites
}

module ActivationResponse {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.ActivationResponse

        handled?: HandledType | null
        gotoUri?: string | null
    }

}

interface ActivationResponse {

    // Own properties of Unity-6.0.Unity.ActivationResponse

    readonly handled: HandledType
    gotoUri: string | null
    __gtype__: number

    // Own fields of Unity-6.0.Unity.ActivationResponse

    parentInstance: GObject.InitiallyUnowned
    priv: ActivationResponsePrivate

    // Class property signals of Unity-6.0.Unity.ActivationResponse

    connect(sigName: "notify::handled", callback: (...args: any[]) => void): number
    on(sigName: "notify::handled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::handled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::handled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::handled", ...args: any[]): void
    connect(sigName: "notify::goto-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::goto-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::goto-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::goto-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::goto-uri", ...args: any[]): void
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
}

class ActivationResponse extends GObject.InitiallyUnowned {

    // Own properties of Unity-6.0.Unity.ActivationResponse

    static name: string

    // Constructors of Unity-6.0.Unity.ActivationResponse

    constructor(config?: ActivationResponse.ConstructorProperties) 
    constructor(handled: HandledType, gotoUri: string | null) 
    static new(handled: HandledType, gotoUri: string | null): ActivationResponse
    static withPreview(preview: Preview): ActivationResponse
    _init(config?: ActivationResponse.ConstructorProperties): void
}

module Category {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.Category

        name?: string | null
        iconHint?: Gio.Icon | null
        defaultRenderer?: CategoryRenderer | null
    }

}

interface Category {

    // Own properties of Unity-6.0.Unity.Category

    readonly name: string | null
    readonly iconHint: Gio.Icon
    readonly defaultRenderer: CategoryRenderer
    __gtype__: number

    // Own fields of Unity-6.0.Unity.Category

    parentInstance: GObject.Object
    priv: CategoryPrivate

    // Class property signals of Unity-6.0.Unity.Category

    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::icon-hint", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-hint", ...args: any[]): void
    connect(sigName: "notify::default-renderer", callback: (...args: any[]) => void): number
    on(sigName: "notify::default-renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default-renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default-renderer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default-renderer", ...args: any[]): void
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
}

class Category extends GObject.Object {

    // Own properties of Unity-6.0.Unity.Category

    static name: string

    // Constructors of Unity-6.0.Unity.Category

    constructor(config?: Category.ConstructorProperties) 
    constructor(name: string | null, iconHint: Gio.Icon, renderer: CategoryRenderer) 
    static new(name: string | null, iconHint: Gio.Icon, renderer: CategoryRenderer): Category
    _init(config?: Category.ConstructorProperties): void
}

module Filter {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    interface ChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.Filter

        id?: string | null
        displayName?: string | null
        iconHint?: Gio.Icon | null
        renderer?: FilterRenderer | null
        visible?: boolean | null
        collapsed?: boolean | null
        filtering?: boolean | null
    }

}

interface Filter {

    // Own properties of Unity-6.0.Unity.Filter

    readonly id: string | null
    displayName: string | null
    readonly iconHint: Gio.Icon
    readonly renderer: FilterRenderer
    visible: boolean
    readonly collapsed: boolean
    filtering: boolean
    __gtype__: number

    // Own fields of Unity-6.0.Unity.Filter

    parentInstance: GObject.Object
    priv: FilterPrivate

    // Own signals of Unity-6.0.Unity.Filter

    connect(sigName: "changed", callback: Filter.ChangedSignalCallback): number
    on(sigName: "changed", callback: Filter.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: Filter.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: Filter.ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of Unity-6.0.Unity.Filter

    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::icon-hint", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-hint", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: (...args: any[]) => void): number
    on(sigName: "notify::renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::renderer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::collapsed", callback: (...args: any[]) => void): number
    on(sigName: "notify::collapsed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::collapsed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::collapsed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::collapsed", ...args: any[]): void
    connect(sigName: "notify::filtering", callback: (...args: any[]) => void): number
    on(sigName: "notify::filtering", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filtering", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filtering", ...args: any[]): void
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
}

class Filter extends GObject.Object {

    // Own properties of Unity-6.0.Unity.Filter

    static name: string

    // Constructors of Unity-6.0.Unity.Filter

    constructor(config?: Filter.ConstructorProperties) 
    _init(config?: Filter.ConstructorProperties): void
}

module FilterOption {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.FilterOption

        id?: string | null
        displayName?: string | null
        iconHint?: Gio.Icon | null
        active?: boolean | null
    }

}

interface FilterOption {

    // Own properties of Unity-6.0.Unity.FilterOption

    readonly id: string | null
    readonly displayName: string | null
    readonly iconHint: Gio.Icon
    active: boolean
    __gtype__: number

    // Own fields of Unity-6.0.Unity.FilterOption

    parentInstance: GObject.Object
    priv: FilterOptionPrivate

    // Class property signals of Unity-6.0.Unity.FilterOption

    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::icon-hint", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-hint", ...args: any[]): void
    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
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
}

class FilterOption extends GObject.Object {

    // Own properties of Unity-6.0.Unity.FilterOption

    static name: string

    // Constructors of Unity-6.0.Unity.FilterOption

    constructor(config?: FilterOption.ConstructorProperties) 
    constructor(id: string | null, displayName: string | null, iconHint: Gio.Icon | null, active: boolean) 
    static new(id: string | null, displayName: string | null, iconHint: Gio.Icon | null, active: boolean): FilterOption
    _init(config?: FilterOption.ConstructorProperties): void
}

module OptionsFilter {

    // Constructor properties interface

    interface ConstructorProperties extends Filter.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.OptionsFilter

        sortType?: OptionsFilterSortType | null
    }

}

interface OptionsFilter {

    // Own properties of Unity-6.0.Unity.OptionsFilter

    sortType: OptionsFilterSortType
    __gtype__: number

    // Own fields of Unity-6.0.Unity.OptionsFilter

    parentInstance: any
    priv: any
    options: FilterOption[]

    // Owm methods of Unity-6.0.Unity.OptionsFilter

    addOption(id: string | null, displayName: string | null, iconHint?: Gio.Icon | null): FilterOption
    getOption(id: string | null): FilterOption | null
    /**
     * <para>Removes a FilterOption from the OptionsFilter.</para>
     * @param id 
     * @returns true if a FilterOption was removed, false if FilterOption with given id couldn&apos;t be found. 
     */
    removeOption(id: string | null): boolean

    // Class property signals of Unity-6.0.Unity.OptionsFilter

    connect(sigName: "notify::sort-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::sort-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sort-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sort-type", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::icon-hint", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-hint", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: (...args: any[]) => void): number
    on(sigName: "notify::renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::renderer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::collapsed", callback: (...args: any[]) => void): number
    on(sigName: "notify::collapsed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::collapsed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::collapsed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::collapsed", ...args: any[]): void
    connect(sigName: "notify::filtering", callback: (...args: any[]) => void): number
    on(sigName: "notify::filtering", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filtering", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filtering", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class OptionsFilter extends Filter {

    // Own properties of Unity-6.0.Unity.OptionsFilter

    static name: string

    // Constructors of Unity-6.0.Unity.OptionsFilter

    constructor(config?: OptionsFilter.ConstructorProperties) 
    constructor() 
    static new(): OptionsFilter
    _init(config?: OptionsFilter.ConstructorProperties): void
}

module RadioOptionFilter {

    // Constructor properties interface

    interface ConstructorProperties extends OptionsFilter.ConstructorProperties {
    }

}

interface RadioOptionFilter {

    // Own properties of Unity-6.0.Unity.RadioOptionFilter

    __gtype__: number

    // Own fields of Unity-6.0.Unity.RadioOptionFilter

    parentInstance: any
    priv: any

    // Owm methods of Unity-6.0.Unity.RadioOptionFilter

    getActiveOption(): FilterOption | null

    // Class property signals of Unity-6.0.Unity.RadioOptionFilter

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::sort-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::sort-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sort-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sort-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::icon-hint", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-hint", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: (...args: any[]) => void): number
    on(sigName: "notify::renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::renderer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::collapsed", callback: (...args: any[]) => void): number
    on(sigName: "notify::collapsed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::collapsed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::collapsed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::collapsed", ...args: any[]): void
    connect(sigName: "notify::filtering", callback: (...args: any[]) => void): number
    on(sigName: "notify::filtering", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filtering", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filtering", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class RadioOptionFilter extends OptionsFilter {

    // Own properties of Unity-6.0.Unity.RadioOptionFilter

    static name: string

    // Constructors of Unity-6.0.Unity.RadioOptionFilter

    constructor(config?: RadioOptionFilter.ConstructorProperties) 
    constructor(id: string | null, displayName: string | null, iconHint: Gio.Icon | null, collapsed: boolean) 
    static new(id: string | null, displayName: string | null, iconHint: Gio.Icon | null, collapsed: boolean): RadioOptionFilter

    // Overloads of new

    static new(): OptionsFilter
    _init(config?: RadioOptionFilter.ConstructorProperties): void
}

module CheckOptionFilter {

    // Constructor properties interface

    interface ConstructorProperties extends OptionsFilter.ConstructorProperties {
    }

}

interface CheckOptionFilter {

    // Own properties of Unity-6.0.Unity.CheckOptionFilter

    __gtype__: number

    // Own fields of Unity-6.0.Unity.CheckOptionFilter

    parentInstance: any
    priv: any

    // Class property signals of Unity-6.0.Unity.CheckOptionFilter

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::sort-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::sort-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sort-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sort-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::icon-hint", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-hint", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: (...args: any[]) => void): number
    on(sigName: "notify::renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::renderer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::collapsed", callback: (...args: any[]) => void): number
    on(sigName: "notify::collapsed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::collapsed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::collapsed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::collapsed", ...args: any[]): void
    connect(sigName: "notify::filtering", callback: (...args: any[]) => void): number
    on(sigName: "notify::filtering", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filtering", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filtering", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class CheckOptionFilter extends OptionsFilter {

    // Own properties of Unity-6.0.Unity.CheckOptionFilter

    static name: string

    // Constructors of Unity-6.0.Unity.CheckOptionFilter

    constructor(config?: CheckOptionFilter.ConstructorProperties) 
    constructor(id: string | null, displayName: string | null, iconHint: Gio.Icon | null, collapsed: boolean) 
    static new(id: string | null, displayName: string | null, iconHint: Gio.Icon | null, collapsed: boolean): CheckOptionFilter

    // Overloads of new

    static new(): OptionsFilter
    _init(config?: CheckOptionFilter.ConstructorProperties): void
}

module CheckOptionFilterCompact {

    // Constructor properties interface

    interface ConstructorProperties extends OptionsFilter.ConstructorProperties {
    }

}

interface CheckOptionFilterCompact {

    // Own properties of Unity-6.0.Unity.CheckOptionFilterCompact

    __gtype__: number

    // Own fields of Unity-6.0.Unity.CheckOptionFilterCompact

    parentInstance: any
    priv: any

    // Class property signals of Unity-6.0.Unity.CheckOptionFilterCompact

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::sort-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::sort-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sort-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sort-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::icon-hint", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-hint", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: (...args: any[]) => void): number
    on(sigName: "notify::renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::renderer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::collapsed", callback: (...args: any[]) => void): number
    on(sigName: "notify::collapsed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::collapsed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::collapsed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::collapsed", ...args: any[]): void
    connect(sigName: "notify::filtering", callback: (...args: any[]) => void): number
    on(sigName: "notify::filtering", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filtering", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filtering", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class CheckOptionFilterCompact extends OptionsFilter {

    // Own properties of Unity-6.0.Unity.CheckOptionFilterCompact

    static name: string

    // Constructors of Unity-6.0.Unity.CheckOptionFilterCompact

    constructor(config?: CheckOptionFilterCompact.ConstructorProperties) 
    constructor(id: string | null, displayName: string | null, iconHint: Gio.Icon | null, collapsed: boolean) 
    static new(id: string | null, displayName: string | null, iconHint: Gio.Icon | null, collapsed: boolean): CheckOptionFilterCompact

    // Overloads of new

    static new(): OptionsFilter
    _init(config?: CheckOptionFilterCompact.ConstructorProperties): void
}

module RatingsFilter {

    // Constructor properties interface

    interface ConstructorProperties extends Filter.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.RatingsFilter

        rating?: number | null
    }

}

interface RatingsFilter {

    // Own properties of Unity-6.0.Unity.RatingsFilter

    rating: number
    __gtype__: number

    // Own fields of Unity-6.0.Unity.RatingsFilter

    parentInstance: any
    priv: any

    // Class property signals of Unity-6.0.Unity.RatingsFilter

    connect(sigName: "notify::rating", callback: (...args: any[]) => void): number
    on(sigName: "notify::rating", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rating", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rating", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rating", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::icon-hint", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-hint", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: (...args: any[]) => void): number
    on(sigName: "notify::renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::renderer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::collapsed", callback: (...args: any[]) => void): number
    on(sigName: "notify::collapsed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::collapsed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::collapsed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::collapsed", ...args: any[]): void
    connect(sigName: "notify::filtering", callback: (...args: any[]) => void): number
    on(sigName: "notify::filtering", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filtering", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filtering", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class RatingsFilter extends Filter {

    // Own properties of Unity-6.0.Unity.RatingsFilter

    static name: string

    // Constructors of Unity-6.0.Unity.RatingsFilter

    constructor(config?: RatingsFilter.ConstructorProperties) 
    constructor(id: string | null, displayName: string | null, iconHint: Gio.Icon | null, collapsed: boolean) 
    static new(id: string | null, displayName: string | null, iconHint: Gio.Icon | null, collapsed: boolean): RatingsFilter
    _init(config?: RatingsFilter.ConstructorProperties): void
}

module MultiRangeFilter {

    // Constructor properties interface

    interface ConstructorProperties extends OptionsFilter.ConstructorProperties {
    }

}

interface MultiRangeFilter {

    // Own properties of Unity-6.0.Unity.MultiRangeFilter

    __gtype__: number

    // Own fields of Unity-6.0.Unity.MultiRangeFilter

    parentInstance: any
    priv: any

    // Owm methods of Unity-6.0.Unity.MultiRangeFilter

    getFirstActive(): FilterOption | null
    getLastActive(): FilterOption | null

    // Class property signals of Unity-6.0.Unity.MultiRangeFilter

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::sort-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::sort-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sort-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sort-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::icon-hint", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-hint", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: (...args: any[]) => void): number
    on(sigName: "notify::renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::renderer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::collapsed", callback: (...args: any[]) => void): number
    on(sigName: "notify::collapsed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::collapsed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::collapsed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::collapsed", ...args: any[]): void
    connect(sigName: "notify::filtering", callback: (...args: any[]) => void): number
    on(sigName: "notify::filtering", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filtering", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filtering", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MultiRangeFilter extends OptionsFilter {

    // Own properties of Unity-6.0.Unity.MultiRangeFilter

    static name: string

    // Constructors of Unity-6.0.Unity.MultiRangeFilter

    constructor(config?: MultiRangeFilter.ConstructorProperties) 
    constructor(id: string | null, displayName: string | null, iconHint: Gio.Icon | null, collapsed: boolean) 
    static new(id: string | null, displayName: string | null, iconHint: Gio.Icon | null, collapsed: boolean): MultiRangeFilter

    // Overloads of new

    static new(): OptionsFilter
    _init(config?: MultiRangeFilter.ConstructorProperties): void
}

module PreferencesManager {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.PreferencesManager

        remoteContentSearch?: PreferencesManagerRemoteContent | null
    }

}

interface PreferencesManager {

    // Own properties of Unity-6.0.Unity.PreferencesManager

    remoteContentSearch: PreferencesManagerRemoteContent
    __gtype__: number

    // Own fields of Unity-6.0.Unity.PreferencesManager

    parentInstance: GObject.Object
    priv: PreferencesManagerPrivate

    // Class property signals of Unity-6.0.Unity.PreferencesManager

    connect(sigName: "notify::remote-content-search", callback: (...args: any[]) => void): number
    on(sigName: "notify::remote-content-search", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::remote-content-search", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::remote-content-search", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::remote-content-search", ...args: any[]): void
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
}

/**
 * <para>A singleton class that caches different gsettings settings.</para>
 * @class 
 */
class PreferencesManager extends GObject.Object {

    // Own properties of Unity-6.0.Unity.PreferencesManager

    static name: string

    // Constructors of Unity-6.0.Unity.PreferencesManager

    constructor(config?: PreferencesManager.ConstructorProperties) 
    _init(config?: PreferencesManager.ConstructorProperties): void
    /**
     * <para>Get a ref to the singleton PreferencesManager</para>
     */
    static getDefault(): PreferencesManager
}

module LensSearch {

    // Signal callback interfaces

    /**
     * Signal callback interface for `finished`
     */
    interface FinishedSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.LensSearch

        searchString?: string | null
        hints?: GLib.HashTable | null
        resultsModel?: Dee.SerializableModel | null
    }

}

interface LensSearch {

    // Own properties of Unity-6.0.Unity.LensSearch

    readonly searchString: string | null
    readonly hints: GLib.HashTable
    readonly resultsModel: Dee.SerializableModel
    __gtype__: number

    // Own fields of Unity-6.0.Unity.LensSearch

    parentInstance: GObject.InitiallyUnowned
    priv: LensSearchPrivate

    // Owm methods of Unity-6.0.Unity.LensSearch

    emitFinished(): void
    equals(other?: LensSearch | null): boolean
    setReplyHint(key: string | null, variant: GLib.Variant): void

    // Own signals of Unity-6.0.Unity.LensSearch

    connect(sigName: "finished", callback: LensSearch.FinishedSignalCallback): number
    on(sigName: "finished", callback: LensSearch.FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: LensSearch.FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: LensSearch.FinishedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "finished", ...args: any[]): void

    // Class property signals of Unity-6.0.Unity.LensSearch

    connect(sigName: "notify::search-string", callback: (...args: any[]) => void): number
    on(sigName: "notify::search-string", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::search-string", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::search-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::search-string", ...args: any[]): void
    connect(sigName: "notify::hints", callback: (...args: any[]) => void): number
    on(sigName: "notify::hints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hints", ...args: any[]): void
    connect(sigName: "notify::results-model", callback: (...args: any[]) => void): number
    on(sigName: "notify::results-model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::results-model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::results-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::results-model", ...args: any[]): void
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
}

class LensSearch extends GObject.InitiallyUnowned {

    // Own properties of Unity-6.0.Unity.LensSearch

    static name: string

    // Constructors of Unity-6.0.Unity.LensSearch

    constructor(config?: LensSearch.ConstructorProperties) 
    constructor(searchString: string | null, hints: GLib.HashTable, resultsModel: Dee.SerializableModel) 
    static new(searchString: string | null, hints: GLib.HashTable, resultsModel: Dee.SerializableModel): LensSearch
    _init(config?: LensSearch.ConstructorProperties): void
}

module Lens {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.Lens

        active?: boolean | null
        visible?: boolean | null
        searching?: boolean | null
        exported?: boolean | null
        searchInGlobal?: boolean | null
        homeLensDefaultName?: string | null
        id?: string | null
        dbusPath?: string | null
        searchHint?: string | null
        filters?: Filter[] | null
        categories?: Category[] | null
        mergeStrategy?: MergeStrategy | null
        globalMergeStrategy?: MergeStrategy | null
        sourcesDisplayName?: string | null
    }

}

interface Lens {

    // Own properties of Unity-6.0.Unity.Lens

    active: boolean
    visible: boolean
    searching: boolean
    exported: boolean
    searchInGlobal: boolean
    homeLensDefaultName: string | null
    readonly id: string | null
    readonly dbusPath: string | null
    searchHint: string | null
    filters: Filter[]
    categories: Category[]
    mergeStrategy: MergeStrategy
    globalMergeStrategy: MergeStrategy
    sourcesDisplayName: string | null
    __gtype__: number

    // Own fields of Unity-6.0.Unity.Lens

    parentInstance: GObject.Object
    priv: LensPrivate

    // Owm methods of Unity-6.0.Unity.Lens

    export(): void
    addLocalScope(scope: Scope): void

    // Class property signals of Unity-6.0.Unity.Lens

    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::searching", callback: (...args: any[]) => void): number
    on(sigName: "notify::searching", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::searching", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::searching", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::searching", ...args: any[]): void
    connect(sigName: "notify::exported", callback: (...args: any[]) => void): number
    on(sigName: "notify::exported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::exported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::exported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::exported", ...args: any[]): void
    connect(sigName: "notify::search-in-global", callback: (...args: any[]) => void): number
    on(sigName: "notify::search-in-global", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::search-in-global", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::search-in-global", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::search-in-global", ...args: any[]): void
    connect(sigName: "notify::home-lens-default-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::home-lens-default-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::home-lens-default-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::home-lens-default-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::home-lens-default-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::dbus-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dbus-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dbus-path", ...args: any[]): void
    connect(sigName: "notify::search-hint", callback: (...args: any[]) => void): number
    on(sigName: "notify::search-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::search-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::search-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::search-hint", ...args: any[]): void
    connect(sigName: "notify::filters", callback: (...args: any[]) => void): number
    on(sigName: "notify::filters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filters", ...args: any[]): void
    connect(sigName: "notify::categories", callback: (...args: any[]) => void): number
    on(sigName: "notify::categories", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::categories", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::categories", ...args: any[]): void
    connect(sigName: "notify::merge-strategy", callback: (...args: any[]) => void): number
    on(sigName: "notify::merge-strategy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::merge-strategy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::merge-strategy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::merge-strategy", ...args: any[]): void
    connect(sigName: "notify::global-merge-strategy", callback: (...args: any[]) => void): number
    on(sigName: "notify::global-merge-strategy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::global-merge-strategy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::global-merge-strategy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::global-merge-strategy", ...args: any[]): void
    connect(sigName: "notify::sources-display-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::sources-display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sources-display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sources-display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sources-display-name", ...args: any[]): void
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
}

class Lens extends GObject.Object {

    // Own properties of Unity-6.0.Unity.Lens

    static name: string

    // Constructors of Unity-6.0.Unity.Lens

    constructor(config?: Lens.ConstructorProperties) 
    constructor(dbusPath: string | null, id: string | null) 
    static new(dbusPath: string | null, id: string | null): Lens
    _init(config?: Lens.ConstructorProperties): void
}

module Preview {

    // Signal callback interfaces

    /**
     * Signal callback interface for `closed`
     */
    interface ClosedSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Dee.Serializable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.Preview

        title?: string | null
        subtitle?: string | null
        descriptionMarkup?: string | null
        imageSourceUri?: string | null
        image?: Gio.Icon | null
    }

}

interface Preview extends Dee.Serializable {

    // Own properties of Unity-6.0.Unity.Preview

    title: string | null
    subtitle: string | null
    descriptionMarkup: string | null
    imageSourceUri: string | null
    image: Gio.Icon
    __gtype__: number

    // Own fields of Unity-6.0.Unity.Preview

    parentInstance: GObject.Object
    priv: PreviewPrivate

    // Owm methods of Unity-6.0.Unity.Preview

    addAction(action: PreviewAction): void
    addInfo(infoHint: InfoHint): void

    // Own signals of Unity-6.0.Unity.Preview

    connect(sigName: "closed", callback: Preview.ClosedSignalCallback): number
    on(sigName: "closed", callback: Preview.ClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: Preview.ClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: Preview.ClosedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "closed", ...args: any[]): void

    // Class property signals of Unity-6.0.Unity.Preview

    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: (...args: any[]) => void): number
    on(sigName: "notify::subtitle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::subtitle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::description-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::description-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description-markup", ...args: any[]): void
    connect(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::image-source-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::image-source-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::image-source-uri", ...args: any[]): void
    connect(sigName: "notify::image", callback: (...args: any[]) => void): number
    on(sigName: "notify::image", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::image", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::image", ...args: any[]): void
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
}

class Preview extends GObject.Object {

    // Own properties of Unity-6.0.Unity.Preview

    static name: string

    // Constructors of Unity-6.0.Unity.Preview

    constructor(config?: Preview.ConstructorProperties) 
    _init(config?: Preview.ConstructorProperties): void
}

module PreviewAction {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activated`
     */
    interface ActivatedSignalCallback {
        (uri: string | null): ActivationResponse
    }


    // Constructor properties interface

    interface ConstructorProperties extends Dee.Serializable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.PreviewAction

        id?: string | null
        displayName?: string | null
        extraText?: string | null
        iconHint?: Gio.Icon | null
        layoutHint?: LayoutHint | null
    }

}

interface PreviewAction extends Dee.Serializable {

    // Own properties of Unity-6.0.Unity.PreviewAction

    readonly id: string | null
    readonly displayName: string | null
    extraText: string | null
    readonly iconHint: Gio.Icon
    readonly layoutHint: LayoutHint
    readonly hints: GLib.HashTable
    __gtype__: number

    // Own fields of Unity-6.0.Unity.PreviewAction

    parentInstance: GObject.Object
    priv: PreviewActionPrivate

    // Own signals of Unity-6.0.Unity.PreviewAction

    connect(sigName: "activated", callback: PreviewAction.ActivatedSignalCallback): number
    on(sigName: "activated", callback: PreviewAction.ActivatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activated", callback: PreviewAction.ActivatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activated", callback: PreviewAction.ActivatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "activated", ...args: any[]): void

    // Class property signals of Unity-6.0.Unity.PreviewAction

    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::extra-text", callback: (...args: any[]) => void): number
    on(sigName: "notify::extra-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::extra-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::extra-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::extra-text", ...args: any[]): void
    connect(sigName: "notify::icon-hint", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-hint", ...args: any[]): void
    connect(sigName: "notify::layout-hint", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-hint", ...args: any[]): void
    connect(sigName: "notify::hints", callback: (...args: any[]) => void): number
    on(sigName: "notify::hints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hints", ...args: any[]): void
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
}

class PreviewAction extends GObject.Object {

    // Own properties of Unity-6.0.Unity.PreviewAction

    static name: string

    // Constructors of Unity-6.0.Unity.PreviewAction

    constructor(config?: PreviewAction.ConstructorProperties) 
    constructor(id: string | null, displayName: string | null, iconHint?: Gio.Icon | null) 
    static new(id: string | null, displayName: string | null, iconHint?: Gio.Icon | null): PreviewAction
    static withLayoutHint(id: string | null, displayName: string | null, iconHint: Gio.Icon | null, layout: LayoutHint): PreviewAction
    _init(config?: PreviewAction.ConstructorProperties): void
}

module InfoHint {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.InfoHint

        id?: string | null
        displayName?: string | null
        iconHint?: Gio.Icon | null
        data?: GLib.Variant | null
    }

}

interface InfoHint {

    // Own properties of Unity-6.0.Unity.InfoHint

    readonly id: string | null
    readonly displayName: string | null
    readonly iconHint: Gio.Icon
    readonly data: GLib.Variant
    __gtype__: number

    // Own fields of Unity-6.0.Unity.InfoHint

    parentInstance: GObject.InitiallyUnowned
    priv: InfoHintPrivate

    // Class property signals of Unity-6.0.Unity.InfoHint

    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::icon-hint", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-hint", ...args: any[]): void
    connect(sigName: "notify::data", callback: (...args: any[]) => void): number
    on(sigName: "notify::data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data", ...args: any[]): void
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
}

class InfoHint extends GObject.InitiallyUnowned {

    // Own properties of Unity-6.0.Unity.InfoHint

    static name: string

    // Constructors of Unity-6.0.Unity.InfoHint

    constructor(config?: InfoHint.ConstructorProperties) 
    constructor(id: string | null, displayName: string | null, iconHint: Gio.Icon | null, data: string | null) 
    static new(id: string | null, displayName: string | null, iconHint: Gio.Icon | null, data: string | null): InfoHint
    static withVariant(id: string | null, displayName: string | null, iconHint: Gio.Icon | null, data: GLib.Variant): InfoHint
    _init(config?: InfoHint.ConstructorProperties): void
}

module GenericPreview {

    // Constructor properties interface

    interface ConstructorProperties extends Preview.ConstructorProperties {
    }

}

interface GenericPreview {

    // Own properties of Unity-6.0.Unity.GenericPreview

    __gtype__: number

    // Own fields of Unity-6.0.Unity.GenericPreview

    parentInstance: any
    priv: any

    // Class property signals of Unity-6.0.Unity.GenericPreview

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: (...args: any[]) => void): number
    on(sigName: "notify::subtitle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::subtitle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::description-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::description-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description-markup", ...args: any[]): void
    connect(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::image-source-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::image-source-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::image-source-uri", ...args: any[]): void
    connect(sigName: "notify::image", callback: (...args: any[]) => void): number
    on(sigName: "notify::image", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::image", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GenericPreview extends Preview {

    // Own properties of Unity-6.0.Unity.GenericPreview

    static name: string

    // Constructors of Unity-6.0.Unity.GenericPreview

    constructor(config?: GenericPreview.ConstructorProperties) 
    constructor(title: string | null, description: string | null, image?: Gio.Icon | null) 
    static new(title: string | null, description: string | null, image?: Gio.Icon | null): GenericPreview
    _init(config?: GenericPreview.ConstructorProperties): void
}

module ApplicationPreview {

    // Constructor properties interface

    interface ConstructorProperties extends Preview.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.ApplicationPreview

        appIcon?: Gio.Icon | null
        license?: string | null
        copyright?: string | null
        lastUpdate?: string | null
    }

}

interface ApplicationPreview {

    // Own properties of Unity-6.0.Unity.ApplicationPreview

    appIcon: Gio.Icon
    license: string | null
    copyright: string | null
    lastUpdate: string | null
    __gtype__: number

    // Own fields of Unity-6.0.Unity.ApplicationPreview

    parentInstance: any
    priv: any

    // Owm methods of Unity-6.0.Unity.ApplicationPreview

    setRating(rating: number, numRatings: number): void

    // Class property signals of Unity-6.0.Unity.ApplicationPreview

    connect(sigName: "notify::app-icon", callback: (...args: any[]) => void): number
    on(sigName: "notify::app-icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::app-icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::app-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::app-icon", ...args: any[]): void
    connect(sigName: "notify::license", callback: (...args: any[]) => void): number
    on(sigName: "notify::license", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::license", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::copyright", callback: (...args: any[]) => void): number
    on(sigName: "notify::copyright", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::copyright", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::copyright", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::copyright", ...args: any[]): void
    connect(sigName: "notify::last-update", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-update", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-update", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-update", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: (...args: any[]) => void): number
    on(sigName: "notify::subtitle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::subtitle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::description-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::description-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description-markup", ...args: any[]): void
    connect(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::image-source-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::image-source-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::image-source-uri", ...args: any[]): void
    connect(sigName: "notify::image", callback: (...args: any[]) => void): number
    on(sigName: "notify::image", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::image", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ApplicationPreview extends Preview {

    // Own properties of Unity-6.0.Unity.ApplicationPreview

    static name: string

    // Constructors of Unity-6.0.Unity.ApplicationPreview

    constructor(config?: ApplicationPreview.ConstructorProperties) 
    constructor(title: string | null, subtitle: string | null, description: string | null, icon?: Gio.Icon | null, screenshot?: Gio.Icon | null) 
    static new(title: string | null, subtitle: string | null, description: string | null, icon?: Gio.Icon | null, screenshot?: Gio.Icon | null): ApplicationPreview
    _init(config?: ApplicationPreview.ConstructorProperties): void
}

module MusicPreview {

    // Signal callback interfaces

    /**
     * Signal callback interface for `play`
     */
    interface PlaySignalCallback {
        (uri: string | null): void
    }

    /**
     * Signal callback interface for `pause`
     */
    interface PauseSignalCallback {
        (uri: string | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Preview.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.MusicPreview

        currentTrackUri?: string | null
        currentProgress?: number | null
        currentTrackState?: MusicPreviewTrackState | null
    }

}

interface MusicPreview {

    // Own properties of Unity-6.0.Unity.MusicPreview

    currentTrackUri: string | null
    currentProgress: number
    currentTrackState: MusicPreviewTrackState
    __gtype__: number

    // Own fields of Unity-6.0.Unity.MusicPreview

    parentInstance: any
    priv: any

    // Owm methods of Unity-6.0.Unity.MusicPreview

    addTrack(track: TrackMetadata): void

    // Own signals of Unity-6.0.Unity.MusicPreview

    connect(sigName: "play", callback: MusicPreview.PlaySignalCallback): number
    on(sigName: "play", callback: MusicPreview.PlaySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "play", callback: MusicPreview.PlaySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "play", callback: MusicPreview.PlaySignalCallback): NodeJS.EventEmitter
    emit(sigName: "play", ...args: any[]): void
    connect(sigName: "pause", callback: MusicPreview.PauseSignalCallback): number
    on(sigName: "pause", callback: MusicPreview.PauseSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pause", callback: MusicPreview.PauseSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pause", callback: MusicPreview.PauseSignalCallback): NodeJS.EventEmitter
    emit(sigName: "pause", ...args: any[]): void

    // Class property signals of Unity-6.0.Unity.MusicPreview

    connect(sigName: "notify::current-track-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::current-track-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::current-track-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::current-track-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::current-track-uri", ...args: any[]): void
    connect(sigName: "notify::current-progress", callback: (...args: any[]) => void): number
    on(sigName: "notify::current-progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::current-progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::current-progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::current-progress", ...args: any[]): void
    connect(sigName: "notify::current-track-state", callback: (...args: any[]) => void): number
    on(sigName: "notify::current-track-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::current-track-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::current-track-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::current-track-state", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: (...args: any[]) => void): number
    on(sigName: "notify::subtitle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::subtitle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::description-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::description-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description-markup", ...args: any[]): void
    connect(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::image-source-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::image-source-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::image-source-uri", ...args: any[]): void
    connect(sigName: "notify::image", callback: (...args: any[]) => void): number
    on(sigName: "notify::image", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::image", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MusicPreview extends Preview {

    // Own properties of Unity-6.0.Unity.MusicPreview

    static name: string

    // Constructors of Unity-6.0.Unity.MusicPreview

    constructor(config?: MusicPreview.ConstructorProperties) 
    constructor(title: string | null, subtitle: string | null, image?: Gio.Icon | null) 
    static new(title: string | null, subtitle: string | null, image?: Gio.Icon | null): MusicPreview
    _init(config?: MusicPreview.ConstructorProperties): void
}

module MoviePreview {

    // Constructor properties interface

    interface ConstructorProperties extends Preview.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.MoviePreview

        year?: string | null
    }

}

interface MoviePreview {

    // Own properties of Unity-6.0.Unity.MoviePreview

    year: string | null
    __gtype__: number

    // Own fields of Unity-6.0.Unity.MoviePreview

    parentInstance: any
    priv: any

    // Owm methods of Unity-6.0.Unity.MoviePreview

    setRating(rating: number, numRatings: number): void

    // Class property signals of Unity-6.0.Unity.MoviePreview

    connect(sigName: "notify::year", callback: (...args: any[]) => void): number
    on(sigName: "notify::year", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::year", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::year", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::year", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: (...args: any[]) => void): number
    on(sigName: "notify::subtitle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::subtitle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::description-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::description-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description-markup", ...args: any[]): void
    connect(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::image-source-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::image-source-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::image-source-uri", ...args: any[]): void
    connect(sigName: "notify::image", callback: (...args: any[]) => void): number
    on(sigName: "notify::image", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::image", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MoviePreview extends Preview {

    // Own properties of Unity-6.0.Unity.MoviePreview

    static name: string

    // Constructors of Unity-6.0.Unity.MoviePreview

    constructor(config?: MoviePreview.ConstructorProperties) 
    constructor(title: string | null, subtitle: string | null, description: string | null, image?: Gio.Icon | null) 
    static new(title: string | null, subtitle: string | null, description: string | null, image?: Gio.Icon | null): MoviePreview
    _init(config?: MoviePreview.ConstructorProperties): void
}

module SocialPreview {

    // Constructor properties interface

    interface ConstructorProperties extends Preview.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.SocialPreview

        avatar?: Gio.Icon | null
        content?: string | null
        sender?: string | null
    }

}

interface SocialPreview {

    // Own properties of Unity-6.0.Unity.SocialPreview

    avatar: Gio.Icon
    content: string | null
    sender: string | null
    __gtype__: number

    // Own fields of Unity-6.0.Unity.SocialPreview

    parentInstance: any
    priv: any

    // Owm methods of Unity-6.0.Unity.SocialPreview

    addComment(comment: SocialPreviewComment): void

    // Class property signals of Unity-6.0.Unity.SocialPreview

    connect(sigName: "notify::avatar", callback: (...args: any[]) => void): number
    on(sigName: "notify::avatar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::avatar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::avatar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::avatar", ...args: any[]): void
    connect(sigName: "notify::content", callback: (...args: any[]) => void): number
    on(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::sender", callback: (...args: any[]) => void): number
    on(sigName: "notify::sender", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sender", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sender", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sender", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: (...args: any[]) => void): number
    on(sigName: "notify::subtitle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::subtitle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::description-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::description-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description-markup", ...args: any[]): void
    connect(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::image-source-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::image-source-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::image-source-uri", ...args: any[]): void
    connect(sigName: "notify::image", callback: (...args: any[]) => void): number
    on(sigName: "notify::image", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::image", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class SocialPreview extends Preview {

    // Own properties of Unity-6.0.Unity.SocialPreview

    static name: string

    // Constructors of Unity-6.0.Unity.SocialPreview

    constructor(config?: SocialPreview.ConstructorProperties) 
    constructor(sender: string | null, subtitle: string | null, content: string | null, avatar?: Gio.Icon | null) 
    static new(sender: string | null, subtitle: string | null, content: string | null, avatar?: Gio.Icon | null): SocialPreview
    _init(config?: SocialPreview.ConstructorProperties): void
}

module SocialPreviewComment {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.SocialPreviewComment

        id?: string | null
        name?: string | null
        text?: string | null
        time?: string | null
    }

}

interface SocialPreviewComment {

    // Own properties of Unity-6.0.Unity.SocialPreviewComment

    readonly id: string | null
    readonly name: string | null
    readonly text: string | null
    readonly time: string | null
    __gtype__: number

    // Own fields of Unity-6.0.Unity.SocialPreviewComment

    parentInstance: GObject.InitiallyUnowned
    priv: CommentPrivate

    // Class property signals of Unity-6.0.Unity.SocialPreviewComment

    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::text", callback: (...args: any[]) => void): number
    on(sigName: "notify::text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::time", callback: (...args: any[]) => void): number
    on(sigName: "notify::time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::time", ...args: any[]): void
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
}

class SocialPreviewComment extends GObject.InitiallyUnowned {

    // Own properties of Unity-6.0.Unity.SocialPreviewComment

    static name: string

    // Constructors of Unity-6.0.Unity.SocialPreviewComment

    constructor(config?: SocialPreviewComment.ConstructorProperties) 
    constructor(id: string | null, name: string | null, text: string | null, time: string | null) 
    static new(id: string | null, name: string | null, text: string | null, time: string | null): SocialPreviewComment
    _init(config?: SocialPreviewComment.ConstructorProperties): void
}

module AsyncPreview {

    // Signal callback interfaces

    /**
     * Signal callback interface for `preview_ready`
     */
    interface PreviewReadySignalCallback {
        (preview: Preview): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Preview.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.AsyncPreview

        cancellable?: Gio.Cancellable | null
    }

}

interface AsyncPreview {

    // Own properties of Unity-6.0.Unity.AsyncPreview

    cancellable: Gio.Cancellable
    __gtype__: number

    // Own fields of Unity-6.0.Unity.AsyncPreview

    parentInstance: any
    priv: any

    // Owm methods of Unity-6.0.Unity.AsyncPreview

    emitPreviewReady(preview?: Preview | null): void

    // Own signals of Unity-6.0.Unity.AsyncPreview

    connect(sigName: "preview_ready", callback: AsyncPreview.PreviewReadySignalCallback): number
    on(sigName: "preview_ready", callback: AsyncPreview.PreviewReadySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "preview_ready", callback: AsyncPreview.PreviewReadySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "preview_ready", callback: AsyncPreview.PreviewReadySignalCallback): NodeJS.EventEmitter
    emit(sigName: "preview_ready", ...args: any[]): void

    // Class property signals of Unity-6.0.Unity.AsyncPreview

    connect(sigName: "notify::cancellable", callback: (...args: any[]) => void): number
    on(sigName: "notify::cancellable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cancellable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cancellable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cancellable", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: (...args: any[]) => void): number
    on(sigName: "notify::subtitle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::subtitle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::description-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::description-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description-markup", ...args: any[]): void
    connect(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::image-source-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::image-source-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::image-source-uri", ...args: any[]): void
    connect(sigName: "notify::image", callback: (...args: any[]) => void): number
    on(sigName: "notify::image", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::image", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class AsyncPreview extends Preview {

    // Own properties of Unity-6.0.Unity.AsyncPreview

    static name: string

    // Constructors of Unity-6.0.Unity.AsyncPreview

    constructor(config?: AsyncPreview.ConstructorProperties) 
    constructor() 
    static new(): AsyncPreview
    static withCancellable(cancellable: Gio.Cancellable): AsyncPreview
    _init(config?: AsyncPreview.ConstructorProperties): void
}

module Scope {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activate_uri`
     */
    interface ActivateUriSignalCallback {
        (uri: string | null): ActivationResponse | null
    }

    /**
     * Signal callback interface for `preview_uri`
     */
    interface PreviewUriSignalCallback {
        (uri: string | null): Preview | null
    }

    /**
     * Signal callback interface for `filters_changed`
     */
    interface FiltersChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `active_sources_changed`
     */
    interface ActiveSourcesChangedSignalCallback {
        (activeIds: string[]): void
    }

    /**
     * Signal callback interface for `search_changed`
     */
    interface SearchChangedSignalCallback {
        (search: LensSearch, searchType: SearchType, cancellable: Gio.Cancellable): void
    }

    /**
     * Signal callback interface for `generate_search_key`
     */
    interface GenerateSearchKeySignalCallback {
        (search: LensSearch): string | null
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.Scope

        active?: boolean | null
        exported?: boolean | null
        searchInGlobal?: boolean | null
        providesPersonalContent?: boolean | null
        dbusPath?: string | null
        sources?: OptionsFilter | null
    }

}

interface Scope {

    // Own properties of Unity-6.0.Unity.Scope

    active: boolean
    exported: boolean
    searchInGlobal: boolean
    providesPersonalContent: boolean
    readonly dbusPath: string | null
    sources: OptionsFilter
    readonly filters: Filter[]
    readonly resultsModel: Dee.SerializableModel
    readonly globalResultsModel: Dee.SerializableModel
    __gtype__: number

    // Own fields of Unity-6.0.Unity.Scope

    parentInstance: GObject.Object
    priv: ScopePrivate

    // Owm methods of Unity-6.0.Unity.Scope

    export(): void
    getFilter(id: string | null): Filter | null
    /**
     * <para>Invalidates current search and queues new search.</para>
     * <para>This method will invalidate &lpar;and cancel&rpar; last search and queue a new search &lpar;with the same search_string&rpar;. The #UnityScope::search-changed
     *  signal will be emitted immediately in case the Lens managing this scope is active, or as soon as it becomes active.</para>
     * @param searchType Type of search to queue. 
     */
    queueSearchChanged(searchType: SearchType): void
    /**
     * <para>Invalidates last search.</para>
     * <para>Invalidate last search, so that the next search request will trigger the #UnityScope::search-changed signal even if the search would be 
     * otherwise discarded because of unchanged search key.</para>
     * <para>See also: #UnityScope::generate-search-key</para>
     * @param searchType Type of search to invalidate. 
     */
    invalidateSearch(searchType: SearchType): void

    // Own signals of Unity-6.0.Unity.Scope

    connect(sigName: "activate_uri", callback: Scope.ActivateUriSignalCallback): number
    on(sigName: "activate_uri", callback: Scope.ActivateUriSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate_uri", callback: Scope.ActivateUriSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate_uri", callback: Scope.ActivateUriSignalCallback): NodeJS.EventEmitter
    emit(sigName: "activate_uri", ...args: any[]): void
    connect(sigName: "preview_uri", callback: Scope.PreviewUriSignalCallback): number
    on(sigName: "preview_uri", callback: Scope.PreviewUriSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "preview_uri", callback: Scope.PreviewUriSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "preview_uri", callback: Scope.PreviewUriSignalCallback): NodeJS.EventEmitter
    emit(sigName: "preview_uri", ...args: any[]): void
    connect(sigName: "filters_changed", callback: Scope.FiltersChangedSignalCallback): number
    on(sigName: "filters_changed", callback: Scope.FiltersChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "filters_changed", callback: Scope.FiltersChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "filters_changed", callback: Scope.FiltersChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "filters_changed", ...args: any[]): void
    connect(sigName: "active_sources_changed", callback: Scope.ActiveSourcesChangedSignalCallback): number
    on(sigName: "active_sources_changed", callback: Scope.ActiveSourcesChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active_sources_changed", callback: Scope.ActiveSourcesChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active_sources_changed", callback: Scope.ActiveSourcesChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "active_sources_changed", ...args: any[]): void
    connect(sigName: "search_changed", callback: Scope.SearchChangedSignalCallback): number
    on(sigName: "search_changed", callback: Scope.SearchChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "search_changed", callback: Scope.SearchChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "search_changed", callback: Scope.SearchChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "search_changed", searchType: SearchType, cancellable: Gio.Cancellable, ...args: any[]): void
    connect(sigName: "generate_search_key", callback: Scope.GenerateSearchKeySignalCallback): number
    on(sigName: "generate_search_key", callback: Scope.GenerateSearchKeySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "generate_search_key", callback: Scope.GenerateSearchKeySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "generate_search_key", callback: Scope.GenerateSearchKeySignalCallback): NodeJS.EventEmitter
    emit(sigName: "generate_search_key", ...args: any[]): void

    // Class property signals of Unity-6.0.Unity.Scope

    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::exported", callback: (...args: any[]) => void): number
    on(sigName: "notify::exported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::exported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::exported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::exported", ...args: any[]): void
    connect(sigName: "notify::search-in-global", callback: (...args: any[]) => void): number
    on(sigName: "notify::search-in-global", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::search-in-global", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::search-in-global", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::search-in-global", ...args: any[]): void
    connect(sigName: "notify::provides-personal-content", callback: (...args: any[]) => void): number
    on(sigName: "notify::provides-personal-content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::provides-personal-content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::provides-personal-content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::provides-personal-content", ...args: any[]): void
    connect(sigName: "notify::dbus-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dbus-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dbus-path", ...args: any[]): void
    connect(sigName: "notify::sources", callback: (...args: any[]) => void): number
    on(sigName: "notify::sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sources", ...args: any[]): void
    connect(sigName: "notify::filters", callback: (...args: any[]) => void): number
    on(sigName: "notify::filters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filters", ...args: any[]): void
    connect(sigName: "notify::results-model", callback: (...args: any[]) => void): number
    on(sigName: "notify::results-model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::results-model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::results-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::results-model", ...args: any[]): void
    connect(sigName: "notify::global-results-model", callback: (...args: any[]) => void): number
    on(sigName: "notify::global-results-model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::global-results-model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::global-results-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::global-results-model", ...args: any[]): void
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
}

class Scope extends GObject.Object {

    // Own properties of Unity-6.0.Unity.Scope

    static name: string

    // Constructors of Unity-6.0.Unity.Scope

    constructor(config?: Scope.ConstructorProperties) 
    constructor(dbusPath: string | null) 
    static new(dbusPath: string | null): Scope
    _init(config?: Scope.ConstructorProperties): void
}

module TrackMetadata {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.TrackMetadata

        uri?: string | null
        trackNo?: number | null
        artist?: string | null
        title?: string | null
        album?: string | null
        length?: number | null
        artLocation?: Gio.File | null
        artIcon?: Gio.Icon | null
    }

}

interface TrackMetadata {

    // Own properties of Unity-6.0.Unity.TrackMetadata

    uri: string | null
    trackNo: number
    artist: string | null
    title: string | null
    album: string | null
    length: number
    artLocation: Gio.File
    artIcon: Gio.Icon
    __gtype__: number

    // Own fields of Unity-6.0.Unity.TrackMetadata

    parentInstance: GObject.Object
    priv: TrackMetadataPrivate

    // Class property signals of Unity-6.0.Unity.TrackMetadata

    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::track-no", callback: (...args: any[]) => void): number
    on(sigName: "notify::track-no", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track-no", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track-no", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track-no", ...args: any[]): void
    connect(sigName: "notify::artist", callback: (...args: any[]) => void): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::artist", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::album", callback: (...args: any[]) => void): number
    on(sigName: "notify::album", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::album", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::album", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::album", ...args: any[]): void
    connect(sigName: "notify::length", callback: (...args: any[]) => void): number
    on(sigName: "notify::length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::art-location", callback: (...args: any[]) => void): number
    on(sigName: "notify::art-location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::art-location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::art-location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::art-location", ...args: any[]): void
    connect(sigName: "notify::art-icon", callback: (...args: any[]) => void): number
    on(sigName: "notify::art-icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::art-icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::art-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::art-icon", ...args: any[]): void
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
}

class TrackMetadata extends GObject.Object {

    // Own properties of Unity-6.0.Unity.TrackMetadata

    static name: string

    // Constructors of Unity-6.0.Unity.TrackMetadata

    constructor(config?: TrackMetadata.ConstructorProperties) 
    constructor() 
    static new(): TrackMetadata
    static full(uri: string | null, trackNo: number, title: string | null, artist: string | null, album: string | null, length: number): TrackMetadata
    _init(config?: TrackMetadata.ConstructorProperties): void
}

module Playlist {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.Playlist

        id?: string | null
        name?: string | null
        icon?: Gio.Icon | null
        creationDate?: GLib.DateTime | null
        modificationDate?: GLib.DateTime | null
        lastPlayDate?: GLib.DateTime | null
    }

}

interface Playlist {

    // Own properties of Unity-6.0.Unity.Playlist

    readonly id: string | null
    name: string | null
    icon: Gio.Icon
    creationDate: GLib.DateTime
    modificationDate: GLib.DateTime
    lastPlayDate: GLib.DateTime
    __gtype__: number

    // Own fields of Unity-6.0.Unity.Playlist

    parentInstance: GObject.Object
    priv: PlaylistPrivate

    // Class property signals of Unity-6.0.Unity.Playlist

    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::creation-date", callback: (...args: any[]) => void): number
    on(sigName: "notify::creation-date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::creation-date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::creation-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::creation-date", ...args: any[]): void
    connect(sigName: "notify::modification-date", callback: (...args: any[]) => void): number
    on(sigName: "notify::modification-date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::modification-date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::modification-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::modification-date", ...args: any[]): void
    connect(sigName: "notify::last-play-date", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-play-date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-play-date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-play-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-play-date", ...args: any[]): void
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
}

class Playlist extends GObject.Object {

    // Own properties of Unity-6.0.Unity.Playlist

    static name: string

    // Constructors of Unity-6.0.Unity.Playlist

    constructor(config?: Playlist.ConstructorProperties) 
    constructor(id: string | null) 
    static new(id: string | null): Playlist
    _init(config?: Playlist.ConstructorProperties): void
}

module MusicPlayer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `raise`
     */
    interface RaiseSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `play_pause`
     */
    interface PlayPauseSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `previous`
     */
    interface PreviousSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `next`
     */
    interface NextSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `activate_playlist`
     */
    interface ActivatePlaylistSignalCallback {
        (playlistId: string): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.MusicPlayer

        appInfo?: Gio.AppInfo | null
        desktopFileName?: string | null
        isBlacklisted?: boolean | null
        title?: string | null
        canGoNext?: boolean | null
        canGoPrevious?: boolean | null
        canPlay?: boolean | null
        canPause?: boolean | null
        currentTrack?: TrackMetadata | null
        playbackState?: PlaybackState | null
        currentPlaylist?: Playlist | null
        trackMenu?: Dbusmenu.Menuitem | null
        playerMenu?: Dbusmenu.Menuitem | null
    }

}

interface MusicPlayer {

    // Own properties of Unity-6.0.Unity.MusicPlayer

    readonly appInfo: Gio.AppInfo
    readonly desktopFileName: string | null
    isBlacklisted: boolean
    title: string | null
    canGoNext: boolean
    canGoPrevious: boolean
    canPlay: boolean
    canPause: boolean
    currentTrack: TrackMetadata
    playbackState: PlaybackState
    currentPlaylist: Playlist
    trackMenu: Dbusmenu.Menuitem
    playerMenu: Dbusmenu.Menuitem
    __gtype__: number

    // Own fields of Unity-6.0.Unity.MusicPlayer

    parentInstance: GObject.Object
    priv: MusicPlayerPrivate

    // Owm methods of Unity-6.0.Unity.MusicPlayer

    export(): void
    unexport(): void
    addPlaylist(p: Playlist): boolean
    removePlaylist(p: Playlist): boolean
    getPlaylists(): Playlist[]
    editPlaylistName(id: string | null, name: string | null): void

    // Own signals of Unity-6.0.Unity.MusicPlayer

    connect(sigName: "raise", callback: MusicPlayer.RaiseSignalCallback): number
    on(sigName: "raise", callback: MusicPlayer.RaiseSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "raise", callback: MusicPlayer.RaiseSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "raise", callback: MusicPlayer.RaiseSignalCallback): NodeJS.EventEmitter
    emit(sigName: "raise", ...args: any[]): void
    connect(sigName: "play_pause", callback: MusicPlayer.PlayPauseSignalCallback): number
    on(sigName: "play_pause", callback: MusicPlayer.PlayPauseSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "play_pause", callback: MusicPlayer.PlayPauseSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "play_pause", callback: MusicPlayer.PlayPauseSignalCallback): NodeJS.EventEmitter
    emit(sigName: "play_pause", ...args: any[]): void
    connect(sigName: "previous", callback: MusicPlayer.PreviousSignalCallback): number
    on(sigName: "previous", callback: MusicPlayer.PreviousSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "previous", callback: MusicPlayer.PreviousSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "previous", callback: MusicPlayer.PreviousSignalCallback): NodeJS.EventEmitter
    emit(sigName: "previous", ...args: any[]): void
    connect(sigName: "next", callback: MusicPlayer.NextSignalCallback): number
    on(sigName: "next", callback: MusicPlayer.NextSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "next", callback: MusicPlayer.NextSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "next", callback: MusicPlayer.NextSignalCallback): NodeJS.EventEmitter
    emit(sigName: "next", ...args: any[]): void
    connect(sigName: "activate_playlist", callback: MusicPlayer.ActivatePlaylistSignalCallback): number
    on(sigName: "activate_playlist", callback: MusicPlayer.ActivatePlaylistSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate_playlist", callback: MusicPlayer.ActivatePlaylistSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate_playlist", callback: MusicPlayer.ActivatePlaylistSignalCallback): NodeJS.EventEmitter
    emit(sigName: "activate_playlist", ...args: any[]): void

    // Class property signals of Unity-6.0.Unity.MusicPlayer

    connect(sigName: "notify::app-info", callback: (...args: any[]) => void): number
    on(sigName: "notify::app-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::app-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::app-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::app-info", ...args: any[]): void
    connect(sigName: "notify::desktop-file-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::desktop-file-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::desktop-file-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::desktop-file-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::desktop-file-name", ...args: any[]): void
    connect(sigName: "notify::is-blacklisted", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-blacklisted", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-blacklisted", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-blacklisted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-blacklisted", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::can-go-next", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-go-next", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-go-next", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-go-next", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-go-next", ...args: any[]): void
    connect(sigName: "notify::can-go-previous", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-go-previous", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-go-previous", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-go-previous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-go-previous", ...args: any[]): void
    connect(sigName: "notify::can-play", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-play", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-play", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-play", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-play", ...args: any[]): void
    connect(sigName: "notify::can-pause", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-pause", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-pause", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-pause", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-pause", ...args: any[]): void
    connect(sigName: "notify::current-track", callback: (...args: any[]) => void): number
    on(sigName: "notify::current-track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::current-track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::current-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::current-track", ...args: any[]): void
    connect(sigName: "notify::playback-state", callback: (...args: any[]) => void): number
    on(sigName: "notify::playback-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::playback-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::playback-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::playback-state", ...args: any[]): void
    connect(sigName: "notify::current-playlist", callback: (...args: any[]) => void): number
    on(sigName: "notify::current-playlist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::current-playlist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::current-playlist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::current-playlist", ...args: any[]): void
    connect(sigName: "notify::track-menu", callback: (...args: any[]) => void): number
    on(sigName: "notify::track-menu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track-menu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track-menu", ...args: any[]): void
    connect(sigName: "notify::player-menu", callback: (...args: any[]) => void): number
    on(sigName: "notify::player-menu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::player-menu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::player-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::player-menu", ...args: any[]): void
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
}

class MusicPlayer extends GObject.Object {

    // Own properties of Unity-6.0.Unity.MusicPlayer

    static name: string

    // Constructors of Unity-6.0.Unity.MusicPlayer

    constructor(config?: MusicPlayer.ConstructorProperties) 
    constructor(desktop: string | null) 
    static new(desktop: string | null): MusicPlayer
    _init(config?: MusicPlayer.ConstructorProperties): void
}

interface AppInfoManagerClass {

    // Own fields of Unity-6.0.Unity.AppInfoManagerClass

    parentClass: GObject.ObjectClass
}

abstract class AppInfoManagerClass {

    // Own properties of Unity-6.0.Unity.AppInfoManagerClass

    static name: string
}

interface AppInfoManagerPrivate {
}

class AppInfoManagerPrivate {

    // Own properties of Unity-6.0.Unity.AppInfoManagerPrivate

    static name: string
}

interface AnnotatedIconClass {

    // Own fields of Unity-6.0.Unity.AnnotatedIconClass

    parentClass: GObject.ObjectClass
}

abstract class AnnotatedIconClass {

    // Own properties of Unity-6.0.Unity.AnnotatedIconClass

    static name: string
}

interface AnnotatedIconPrivate {
}

class AnnotatedIconPrivate {

    // Own properties of Unity-6.0.Unity.AnnotatedIconPrivate

    static name: string
}

interface InspectorClass {

    // Own fields of Unity-6.0.Unity.InspectorClass

    parentClass: GObject.ObjectClass
}

abstract class InspectorClass {

    // Own properties of Unity-6.0.Unity.InspectorClass

    static name: string
}

interface InspectorPrivate {
}

class InspectorPrivate {

    // Own properties of Unity-6.0.Unity.InspectorPrivate

    static name: string
}

interface LauncherEntryClass {

    // Own fields of Unity-6.0.Unity.LauncherEntryClass

    parentClass: GObject.ObjectClass
}

abstract class LauncherEntryClass {

    // Own properties of Unity-6.0.Unity.LauncherEntryClass

    static name: string
}

interface LauncherEntryPrivate {
}

class LauncherEntryPrivate {

    // Own properties of Unity-6.0.Unity.LauncherEntryPrivate

    static name: string
}

interface LauncherFavoritesClass {

    // Own fields of Unity-6.0.Unity.LauncherFavoritesClass

    parentClass: GObject.ObjectClass
}

abstract class LauncherFavoritesClass {

    // Own properties of Unity-6.0.Unity.LauncherFavoritesClass

    static name: string
}

interface LauncherFavoritesPrivate {
}

class LauncherFavoritesPrivate {

    // Own properties of Unity-6.0.Unity.LauncherFavoritesPrivate

    static name: string
}

interface ActivationResponseClass {

    // Own fields of Unity-6.0.Unity.ActivationResponseClass

    parentClass: GObject.InitiallyUnownedClass
}

abstract class ActivationResponseClass {

    // Own properties of Unity-6.0.Unity.ActivationResponseClass

    static name: string
}

interface ActivationResponsePrivate {
}

class ActivationResponsePrivate {

    // Own properties of Unity-6.0.Unity.ActivationResponsePrivate

    static name: string
}

interface CategoryClass {

    // Own fields of Unity-6.0.Unity.CategoryClass

    parentClass: GObject.ObjectClass
}

abstract class CategoryClass {

    // Own properties of Unity-6.0.Unity.CategoryClass

    static name: string
}

interface CategoryPrivate {
}

class CategoryPrivate {

    // Own properties of Unity-6.0.Unity.CategoryPrivate

    static name: string
}

interface FilterClass {

    // Own fields of Unity-6.0.Unity.FilterClass

    parentClass: GObject.ObjectClass
    getHints: (self: Filter) => GLib.HashTable
    update: (self: Filter, properties: GLib.Variant) => void
}

abstract class FilterClass {

    // Own properties of Unity-6.0.Unity.FilterClass

    static name: string
}

interface FilterPrivate {
}

class FilterPrivate {

    // Own properties of Unity-6.0.Unity.FilterPrivate

    static name: string
}

interface FilterOptionClass {

    // Own fields of Unity-6.0.Unity.FilterOptionClass

    parentClass: GObject.ObjectClass
}

abstract class FilterOptionClass {

    // Own properties of Unity-6.0.Unity.FilterOptionClass

    static name: string
}

interface FilterOptionPrivate {
}

class FilterOptionPrivate {

    // Own properties of Unity-6.0.Unity.FilterOptionPrivate

    static name: string
}

interface OptionsFilterClass {

    // Own fields of Unity-6.0.Unity.OptionsFilterClass

    parentClass: FilterClass
}

abstract class OptionsFilterClass {

    // Own properties of Unity-6.0.Unity.OptionsFilterClass

    static name: string
}

interface OptionsFilterPrivate {
}

class OptionsFilterPrivate {

    // Own properties of Unity-6.0.Unity.OptionsFilterPrivate

    static name: string
}

interface RadioOptionFilterClass {

    // Own fields of Unity-6.0.Unity.RadioOptionFilterClass

    parentClass: OptionsFilterClass
}

abstract class RadioOptionFilterClass {

    // Own properties of Unity-6.0.Unity.RadioOptionFilterClass

    static name: string
}

interface RadioOptionFilterPrivate {
}

class RadioOptionFilterPrivate {

    // Own properties of Unity-6.0.Unity.RadioOptionFilterPrivate

    static name: string
}

interface CheckOptionFilterClass {

    // Own fields of Unity-6.0.Unity.CheckOptionFilterClass

    parentClass: OptionsFilterClass
}

abstract class CheckOptionFilterClass {

    // Own properties of Unity-6.0.Unity.CheckOptionFilterClass

    static name: string
}

interface CheckOptionFilterPrivate {
}

class CheckOptionFilterPrivate {

    // Own properties of Unity-6.0.Unity.CheckOptionFilterPrivate

    static name: string
}

interface CheckOptionFilterCompactClass {

    // Own fields of Unity-6.0.Unity.CheckOptionFilterCompactClass

    parentClass: OptionsFilterClass
}

abstract class CheckOptionFilterCompactClass {

    // Own properties of Unity-6.0.Unity.CheckOptionFilterCompactClass

    static name: string
}

interface CheckOptionFilterCompactPrivate {
}

class CheckOptionFilterCompactPrivate {

    // Own properties of Unity-6.0.Unity.CheckOptionFilterCompactPrivate

    static name: string
}

interface RatingsFilterClass {

    // Own fields of Unity-6.0.Unity.RatingsFilterClass

    parentClass: FilterClass
}

abstract class RatingsFilterClass {

    // Own properties of Unity-6.0.Unity.RatingsFilterClass

    static name: string
}

interface RatingsFilterPrivate {
}

class RatingsFilterPrivate {

    // Own properties of Unity-6.0.Unity.RatingsFilterPrivate

    static name: string
}

interface MultiRangeFilterClass {

    // Own fields of Unity-6.0.Unity.MultiRangeFilterClass

    parentClass: OptionsFilterClass
}

abstract class MultiRangeFilterClass {

    // Own properties of Unity-6.0.Unity.MultiRangeFilterClass

    static name: string
}

interface MultiRangeFilterPrivate {
}

class MultiRangeFilterPrivate {

    // Own properties of Unity-6.0.Unity.MultiRangeFilterPrivate

    static name: string
}

interface PreferencesManagerClass {

    // Own fields of Unity-6.0.Unity.PreferencesManagerClass

    parentClass: GObject.ObjectClass
}

abstract class PreferencesManagerClass {

    // Own properties of Unity-6.0.Unity.PreferencesManagerClass

    static name: string
}

interface PreferencesManagerPrivate {
}

class PreferencesManagerPrivate {

    // Own properties of Unity-6.0.Unity.PreferencesManagerPrivate

    static name: string
}

interface LensSearchClass {

    // Own fields of Unity-6.0.Unity.LensSearchClass

    parentClass: GObject.InitiallyUnownedClass
}

abstract class LensSearchClass {

    // Own properties of Unity-6.0.Unity.LensSearchClass

    static name: string
}

interface LensSearchPrivate {
}

class LensSearchPrivate {

    // Own properties of Unity-6.0.Unity.LensSearchPrivate

    static name: string
}

interface LensClass {

    // Own fields of Unity-6.0.Unity.LensClass

    parentClass: GObject.ObjectClass
}

abstract class LensClass {

    // Own properties of Unity-6.0.Unity.LensClass

    static name: string
}

interface LensPrivate {
}

class LensPrivate {

    // Own properties of Unity-6.0.Unity.LensPrivate

    static name: string
}

interface PreviewClass {

    // Own fields of Unity-6.0.Unity.PreviewClass

    parentClass: GObject.ObjectClass
    createRaw: (self: Preview) => GObject.Object
    updateProperty: (self: Preview, values: GLib.HashTable, callback?: Gio.AsyncReadyCallback | null) => void
    updatePropertyFinish: (self: Preview, res: Gio.AsyncResult) => GLib.HashTable
    dummy1: (self: Preview) => void
    dummy2: (self: Preview) => void
    dummy3: (self: Preview) => void
    dummy4: (self: Preview) => void
}

abstract class PreviewClass {

    // Own properties of Unity-6.0.Unity.PreviewClass

    static name: string
}

interface PreviewPrivate {
}

class PreviewPrivate {

    // Own properties of Unity-6.0.Unity.PreviewPrivate

    static name: string
}

interface PreviewActionClass {

    // Own fields of Unity-6.0.Unity.PreviewActionClass

    parentClass: GObject.ObjectClass
    dummy1: (self: PreviewAction) => void
    dummy2: (self: PreviewAction) => void
    dummy3: (self: PreviewAction) => void
    dummy4: (self: PreviewAction) => void
}

abstract class PreviewActionClass {

    // Own properties of Unity-6.0.Unity.PreviewActionClass

    static name: string
}

interface PreviewActionPrivate {
}

class PreviewActionPrivate {

    // Own properties of Unity-6.0.Unity.PreviewActionPrivate

    static name: string
}

interface InfoHintClass {

    // Own fields of Unity-6.0.Unity.InfoHintClass

    parentClass: GObject.InitiallyUnownedClass
}

abstract class InfoHintClass {

    // Own properties of Unity-6.0.Unity.InfoHintClass

    static name: string
}

interface InfoHintPrivate {
}

class InfoHintPrivate {

    // Own properties of Unity-6.0.Unity.InfoHintPrivate

    static name: string
}

interface GenericPreviewClass {

    // Own fields of Unity-6.0.Unity.GenericPreviewClass

    parentClass: PreviewClass
}

abstract class GenericPreviewClass {

    // Own properties of Unity-6.0.Unity.GenericPreviewClass

    static name: string
}

interface GenericPreviewPrivate {
}

class GenericPreviewPrivate {

    // Own properties of Unity-6.0.Unity.GenericPreviewPrivate

    static name: string
}

interface ApplicationPreviewClass {

    // Own fields of Unity-6.0.Unity.ApplicationPreviewClass

    parentClass: PreviewClass
}

abstract class ApplicationPreviewClass {

    // Own properties of Unity-6.0.Unity.ApplicationPreviewClass

    static name: string
}

interface ApplicationPreviewPrivate {
}

class ApplicationPreviewPrivate {

    // Own properties of Unity-6.0.Unity.ApplicationPreviewPrivate

    static name: string
}

interface MusicPreviewClass {

    // Own fields of Unity-6.0.Unity.MusicPreviewClass

    parentClass: PreviewClass
}

abstract class MusicPreviewClass {

    // Own properties of Unity-6.0.Unity.MusicPreviewClass

    static name: string
}

interface MusicPreviewPrivate {
}

class MusicPreviewPrivate {

    // Own properties of Unity-6.0.Unity.MusicPreviewPrivate

    static name: string
}

interface MoviePreviewClass {

    // Own fields of Unity-6.0.Unity.MoviePreviewClass

    parentClass: PreviewClass
}

abstract class MoviePreviewClass {

    // Own properties of Unity-6.0.Unity.MoviePreviewClass

    static name: string
}

interface MoviePreviewPrivate {
}

class MoviePreviewPrivate {

    // Own properties of Unity-6.0.Unity.MoviePreviewPrivate

    static name: string
}

interface SocialPreviewClass {

    // Own fields of Unity-6.0.Unity.SocialPreviewClass

    parentClass: PreviewClass
}

abstract class SocialPreviewClass {

    // Own properties of Unity-6.0.Unity.SocialPreviewClass

    static name: string
}

interface SocialPreviewPrivate {
}

class SocialPreviewPrivate {

    // Own properties of Unity-6.0.Unity.SocialPreviewPrivate

    static name: string
}

interface CommentClass {

    // Own fields of Unity-6.0.Unity.CommentClass

    parentClass: GObject.InitiallyUnownedClass
}

abstract class CommentClass {

    // Own properties of Unity-6.0.Unity.CommentClass

    static name: string
}

interface CommentPrivate {
}

class CommentPrivate {

    // Own properties of Unity-6.0.Unity.CommentPrivate

    static name: string
}

interface AsyncPreviewClass {

    // Own fields of Unity-6.0.Unity.AsyncPreviewClass

    parentClass: PreviewClass
}

abstract class AsyncPreviewClass {

    // Own properties of Unity-6.0.Unity.AsyncPreviewClass

    static name: string
}

interface AsyncPreviewPrivate {
}

class AsyncPreviewPrivate {

    // Own properties of Unity-6.0.Unity.AsyncPreviewPrivate

    static name: string
}

interface ScopeClass {

    // Own fields of Unity-6.0.Unity.ScopeClass

    parentClass: GObject.ObjectClass
}

abstract class ScopeClass {

    // Own properties of Unity-6.0.Unity.ScopeClass

    static name: string
}

interface ScopePrivate {
}

class ScopePrivate {

    // Own properties of Unity-6.0.Unity.ScopePrivate

    static name: string
}

interface TrackMetadataClass {

    // Own fields of Unity-6.0.Unity.TrackMetadataClass

    parentClass: GObject.ObjectClass
}

abstract class TrackMetadataClass {

    // Own properties of Unity-6.0.Unity.TrackMetadataClass

    static name: string
}

interface TrackMetadataPrivate {
}

class TrackMetadataPrivate {

    // Own properties of Unity-6.0.Unity.TrackMetadataPrivate

    static name: string
}

interface PlaylistClass {

    // Own fields of Unity-6.0.Unity.PlaylistClass

    parentClass: GObject.ObjectClass
}

abstract class PlaylistClass {

    // Own properties of Unity-6.0.Unity.PlaylistClass

    static name: string
}

interface PlaylistPrivate {
}

class PlaylistPrivate {

    // Own properties of Unity-6.0.Unity.PlaylistPrivate

    static name: string
}

interface MusicPlayerClass {

    // Own fields of Unity-6.0.Unity.MusicPlayerClass

    parentClass: GObject.ObjectClass
}

abstract class MusicPlayerClass {

    // Own properties of Unity-6.0.Unity.MusicPlayerClass

    static name: string
}

interface MusicPlayerPrivate {
}

class MusicPlayerPrivate {

    // Own properties of Unity-6.0.Unity.MusicPlayerPrivate

    static name: string
}

interface MergeStrategyIface {

    // Own fields of Unity-6.0.Unity.MergeStrategyIface

    parentIface: GObject.TypeInterface
    mergeResult: (self: MergeStrategy, target: Dee.Model, row: GLib.Variant[]) => Dee.ModelIter | null
}

abstract class MergeStrategyIface {

    // Own properties of Unity-6.0.Unity.MergeStrategyIface

    static name: string
}

interface PlaylistDetails {

    // Own fields of Unity-6.0.Unity.PlaylistDetails

    id: string
    name: string | null
    iconName: string | null
}

class PlaylistDetails {

    // Own properties of Unity-6.0.Unity.PlaylistDetails

    static name: string
}

interface ActivePlaylistContainer {

    // Own fields of Unity-6.0.Unity.ActivePlaylistContainer

    valid: boolean
    details: PlaylistDetails
}

class ActivePlaylistContainer {

    // Own properties of Unity-6.0.Unity.ActivePlaylistContainer

    static name: string
}

}

export default Unity;