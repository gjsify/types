
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './unity-6.0-ambient.d.ts';
import './unity-6.0-import.d.ts';
/**
 * Unity-6.0
 */

import type GLib from '@girs/glib-2.0';
import type Dbusmenu from '@girs/dbusmenu-0.4';
import type GObject from '@girs/gobject-2.0';
import type Dee from '@girs/dee-1.0';
import type Gio from '@girs/gio-2.0';

export enum CategoryType {
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
export enum IconSizeHint {
    DEFAULT,
    SMALL,
    LARGE,
}
export enum HandledType {
    NOT_HANDLED,
    SHOW_DASH,
    HIDE_DASH,
    GOTO_DASH_URI,
    SHOW_PREVIEW,
}
export enum CategoryRenderer {
    VERTICAL_TILE,
    HORIZONTAL_TILE,
    LIST_TILE,
    FLOW,
}
export enum FilterRenderer {
    CHECK_OPTIONS,
    RADIO_OPTIONS,
    MULTIRANGE,
    RATINGS,
    CHECK_OPTIONS_COMPACT,
}
export enum LayoutHint {
    NONE,
    LEFT,
    RIGHT,
    TOP,
    BOTTOM,
}
export enum SearchType {
    DEFAULT,
    GLOBAL,
    N_TYPES,
}
export enum PlaybackState {
    PLAYING,
    PAUSED,
}
export enum OptionsFilterSortType {
    MANUAL,
    DISPLAY_NAME,
    ID,
}
export enum PreferencesManagerRemoteContent {
    ALL,
    NONE,
}
export enum MusicPreviewTrackState {
    STOPPED,
    PLAYING,
    PAUSED,
}
/**
 * <para>Asynchronously read a stream into memory. This method will close the input stream when done.</para>
 * @param input 
 * @param io_priority 
 * @param cancellable 
 * @param _callback_ 
 */
export function io_read_stream_async<Z = unknown>(input: Gio.InputStream, io_priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<Z> | null): void

// Overloads of io_read_stream_async

/**
 * Promisified version of {@link io_read_stream_async}
 * 
 * <para>Asynchronously read a stream into memory. This method will close the input stream when done.</para>
 * @param input 
 * @param io_priority 
 * @param cancellable 
 * @param _callback_ 
 * @returns A Promise of the result of {@link io_read_stream_async}
 */
export function io_read_stream_async<Z = unknown>(input: Gio.InputStream, io_priority: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<[ /* data */ Uint8Array, /* size */ number ]>
export function io_read_stream_finish(_res_: Gio.AsyncResult): [ /* data */ Uint8Array, /* size */ number ]
/**
 * <para>Asynchronously looks for a file with base name &apos;filename&apos; in all the directories defined in &apos;dirs&apos; and returns a file input 
 * stream for it.</para>
 * <para>If the file can not be found this method returns null.</para>
 * @param filename 
 * @param dirs 
 * @param _callback_ 
 */
export function io_open_from_dirs<Z = unknown>(filename: string | null, dirs: string[], _callback_?: Gio.AsyncReadyCallback<Z> | null): void
export function io_open_from_dirs_finish(_res_: Gio.AsyncResult): Gio.FileInputStream | null
/**
 * <para>Like open_from_dirs&lpar;&rpar; but scans first the user data dir and then the system data dirs as defined by the XDG_DATA_DIRS environment 
 * variable.</para>
 * @param filename 
 * @param _callback_ 
 */
export function io_open_from_data_dirs<Z = unknown>(filename: string | null, _callback_?: Gio.AsyncReadyCallback<Z> | null): void
export function io_open_from_data_dirs_finish(_res_: Gio.AsyncResult): Gio.FileInputStream | null
export function io_get_system_data_dirs(): string[]
export module MergeStrategy {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface MergeStrategy extends GObject.Object {

    // Owm methods of Unity-6.0.Unity.MergeStrategy

    /**
     * <para>Virtual method to merge row from source model into target model.</para>
     * @param target The target model to merge a row into 
     * @param row An array of variants with the row data for the result 
     * @returns A model iter pointing to the row in the target model where &commat;row was added. Or null if the result was discarded 
     */
    merge_result(target: Dee.Model, row: GLib.Variant[]): Dee.ModelIter | null

    // Own virtual methods of Unity-6.0.Unity.MergeStrategy

    /**
     * <para>Virtual method to merge row from source model into target model.</para>
     * @virtual 
     * @param target The target model to merge a row into 
     * @param row An array of variants with the row data for the result 
     * @returns A model iter pointing to the row in the target model where &commat;row was added. Or null if the result was discarded 
     */
    vfunc_merge_result(target: Dee.Model, row: GLib.Variant[]): Dee.ModelIter | null

    // Class property signals of Unity-6.0.Unity.MergeStrategy

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MergeStrategy {

    // Own properties of Unity-6.0.Unity.MergeStrategy

    static name: string
    static $gtype: GObject.GType<MergeStrategy>

    // Constructors of Unity-6.0.Unity.MergeStrategy

    constructor(config?: MergeStrategy.ConstructorProperties) 
    _init(config?: MergeStrategy.ConstructorProperties): void
}

export module AppInfoManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        ($obj: AppInfoManager, id: string | null, new_appinfo?: Gio.AppInfo | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface AppInfoManager {

    // Own fields of Unity-6.0.Unity.AppInfoManager

    parent_instance: GObject.Object
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
    get_categories(id: string | null): string[] | null
    /**
     * <para>Look up keywords for for desktop id or file path &commat;id. The keywords will be an amalgamation of the X-GNOME-Keywords and X-AppInstall-
     * Keywords fields from the .desktopfile. Returns null if id is not found. This method will do sync IO if the desktop file for &commat;id is not already 
     * cached. So if you are living in an async world you must first do an async call to lookup_async&lpar;id&rpar; before calling this method, in which 
     * case no sync io will be done.</para>
     * @param id 
     */
    get_keywords(id: string | null): string[] | null
    /**
     * <para>Look up the full path to the desktop file for desktop id &commat;id. Returns null if &commat;id is not found. This method will do sync IO if 
     * the desktop file for &commat;id is not already cached. So if you are living in an async world you must first do an async call to lookup_async&lpar;id
     * &rpar; before calling this method, in which case no sync io will be done.</para>
     * @param id 
     */
    get_path(id: string | null): string | null
    /**
     * <para>Look up an AppInfo given its desktop id or absolute path. The desktop id is the base filename of the .desktop file for the application 
     * including the .desktop extension.</para>
     * <para>If the AppInfo is not already cached this method will do asynchronous IO to look it up.</para>
     * @param id 
     * @param _callback_ 
     */
    lookup_async(id: string | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of lookup_async

    /**
     * Promisified version of {@link lookup_async}
     * 
     * <para>Look up an AppInfo given its desktop id or absolute path. The desktop id is the base filename of the .desktop file for the application 
     * including the .desktop extension.</para>
     * <para>If the AppInfo is not already cached this method will do asynchronous IO to look it up.</para>
     * @param id 
     * @param _callback_ 
     * @returns A Promise of the result of {@link lookup_async}
     */
    lookup_async(id: string | null): globalThis.Promise<Gio.AppInfo | null>
    lookup_finish(_res_: Gio.AsyncResult): Gio.AppInfo | null
    clear(): void

    // Own signals of Unity-6.0.Unity.AppInfoManager

    connect(sigName: "changed", callback: AppInfoManager.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: AppInfoManager.ChangedSignalCallback): number
    emit(sigName: "changed", id: string | null, new_appinfo?: Gio.AppInfo | null, ...args: any[]): void

    // Class property signals of Unity-6.0.Unity.AppInfoManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * <para>A singleton class that caches GLib.AppInfo objects. Singletons are evil, yes, but this on slightly less so because the exposed API is immutable.
 * </para>
 * <para>To detect when any of the managed AppInfo objects changes, appears, or goes away listen for the &apos;changed&apos; signal.</para>
 * @class 
 */
export class AppInfoManager extends GObject.Object {

    // Own properties of Unity-6.0.Unity.AppInfoManager

    static name: string
    static $gtype: GObject.GType<AppInfoManager>

    // Constructors of Unity-6.0.Unity.AppInfoManager

    constructor(config?: AppInfoManager.ConstructorProperties) 
    _init(config?: AppInfoManager.ConstructorProperties): void
    static get_instance(): AppInfoManager
    /**
     * <para>Get a ref to the singleton AppInfoManager</para>
     */
    static get_default(): AppInfoManager
}

export module AnnotatedIcon {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.AnnotatedIcon

        icon?: Gio.Icon | null
        ribbon?: string | null
        category?: CategoryType | null
        size_hint?: IconSizeHint | null
    }

}

export interface AnnotatedIcon {

    // Own properties of Unity-6.0.Unity.AnnotatedIcon

    icon: Gio.Icon
    ribbon: string | null
    category: CategoryType
    size_hint: IconSizeHint

    // Own fields of Unity-6.0.Unity.AnnotatedIcon

    parent_instance: GObject.Object
    priv: AnnotatedIconPrivate

    // Owm methods of Unity-6.0.Unity.AnnotatedIcon

    to_string(): string | null

    // Class property signals of Unity-6.0.Unity.AnnotatedIcon

    connect(sigName: "notify::icon", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::ribbon", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ribbon", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ribbon", ...args: any[]): void
    connect(sigName: "notify::category", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::category", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::category", ...args: any[]): void
    connect(sigName: "notify::size-hint", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size-hint", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size-hint", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class AnnotatedIcon extends GObject.Object {

    // Own properties of Unity-6.0.Unity.AnnotatedIcon

    static name: string
    static $gtype: GObject.GType<AnnotatedIcon>

    // Constructors of Unity-6.0.Unity.AnnotatedIcon

    constructor(config?: AnnotatedIcon.ConstructorProperties) 
    constructor(base_icon: Gio.Icon) 
    static new(base_icon: Gio.Icon): AnnotatedIcon
    _init(config?: AnnotatedIcon.ConstructorProperties): void
}

export module Inspector {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Inspector {

    // Own properties of Unity-6.0.Unity.Inspector

    /**
     * <para>Boolean property determining whether Unity is running or not. You can use this property to determine whether Unity is running or not.</para>
     */
    readonly unity_running: boolean
    /**
     * <para>Property holding the unique DBus name of the Unity process if Unity is running, or null otherwise.</para>
     */
    readonly unity_bus_name: string | null

    // Own fields of Unity-6.0.Unity.Inspector

    parent_instance: GObject.Object
    priv: InspectorPrivate

    // Class property signals of Unity-6.0.Unity.Inspector

    connect(sigName: "notify::unity-running", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unity-running", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unity-running", ...args: any[]): void
    connect(sigName: "notify::unity-bus-name", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unity-bus-name", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unity-bus-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * <para>The Unity.Inspector is a singleton that can be used to inspect the state of Unity.</para>
 * <para>One of the most basic and most useful applications of the inspector is to check if Unity is running or not.</para>
 * @class 
 */
export class Inspector extends GObject.Object {

    // Own properties of Unity-6.0.Unity.Inspector

    static name: string
    static $gtype: GObject.GType<Inspector>

    // Constructors of Unity-6.0.Unity.Inspector

    constructor(config?: Inspector.ConstructorProperties) 
    _init(config?: Inspector.ConstructorProperties): void
    /**
     * <para>Get the default singleton Unity.Inspector instance, creating it dynamically if necessary.</para>
     * @returns The singleton Unity.Inspector. If calling from C do not free this instance. 
     */
    static get_default(): Inspector
}

export module LauncherEntry {

    // Constructor properties interface

    export interface ConstructorProperties extends Dee.Serializable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.LauncherEntry

        app_uri?: string | null
        count?: number | null
        count_visible?: boolean | null
        progress?: number | null
        progress_visible?: boolean | null
        urgent?: boolean | null
        quicklist?: Dbusmenu.Menuitem | null
    }

}

export interface LauncherEntry extends Dee.Serializable {

    // Own properties of Unity-6.0.Unity.LauncherEntry

    app_uri: string | null
    count: number
    count_visible: boolean
    progress: number
    progress_visible: boolean
    urgent: boolean
    quicklist: Dbusmenu.Menuitem

    // Own fields of Unity-6.0.Unity.LauncherEntry

    parent_instance: GObject.Object
    priv: LauncherEntryPrivate

    // Class property signals of Unity-6.0.Unity.LauncherEntry

    connect(sigName: "notify::app-uri", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-uri", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-uri", ...args: any[]): void
    connect(sigName: "notify::count", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::count", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::count", ...args: any[]): void
    connect(sigName: "notify::count-visible", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::count-visible", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::count-visible", ...args: any[]): void
    connect(sigName: "notify::progress", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress", ...args: any[]): void
    connect(sigName: "notify::progress-visible", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-visible", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-visible", ...args: any[]): void
    connect(sigName: "notify::urgent", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgent", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::urgent", ...args: any[]): void
    connect(sigName: "notify::quicklist", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quicklist", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::quicklist", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * <para>This class represents your control point for your application&apos;s icon in the Unity Launcher. You can control properties such as a counter, 
 * progress, or emblem that will be overlaid on your application&apos;s launcher icon. You can also set a quicklist on it by setting the &quot;quicklist
 * &quot; property to point at the Dbusmenu.Menuitem which is the root of your quicklist.</para>
 * <para>Create a LauncherEntry by giving your desktop file id to the constructor &lpar;eg. &quot;myapp.desktop&quot;&rpar;.</para>
 * @class 
 */
export class LauncherEntry extends GObject.Object {

    // Own properties of Unity-6.0.Unity.LauncherEntry

    static name: string
    static $gtype: GObject.GType<LauncherEntry>

    // Constructors of Unity-6.0.Unity.LauncherEntry

    constructor(config?: LauncherEntry.ConstructorProperties) 
    _init(config?: LauncherEntry.ConstructorProperties): void
    static get_for_app_uri(app_uri: string | null): LauncherEntry
    static get_for_desktop_id(desktop_id: string | null): LauncherEntry
    static get_for_desktop_file(desktop_file: string | null): LauncherEntry
}

export module LauncherFavorites {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        ($obj: LauncherFavorites): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface LauncherFavorites {

    // Own fields of Unity-6.0.Unity.LauncherFavorites

    parent_instance: GObject.Object
    priv: LauncherFavoritesPrivate

    // Owm methods of Unity-6.0.Unity.LauncherFavorites

    has_app_info(appinfo: Gio.AppInfo): boolean
    has_app_id(app_id: string | null): boolean
    lookup(app_id: string | null): Gio.AppInfo | null
    enumerate_ids(): string[]
    enumerate_app_infos(): Gio.AppInfo[]

    // Own signals of Unity-6.0.Unity.LauncherFavorites

    connect(sigName: "changed", callback: LauncherFavorites.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: LauncherFavorites.ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of Unity-6.0.Unity.LauncherFavorites

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class LauncherFavorites extends GObject.Object {

    // Own properties of Unity-6.0.Unity.LauncherFavorites

    static name: string
    static $gtype: GObject.GType<LauncherFavorites>

    // Constructors of Unity-6.0.Unity.LauncherFavorites

    constructor(config?: LauncherFavorites.ConstructorProperties) 
    _init(config?: LauncherFavorites.ConstructorProperties): void
    /**
     * <para>Get the default singleton Unity.LauncherFavorites instance, creating it dynamically if necessary.</para>
     * @returns The singleton Unity.LauncherFavorites. If calling from C do not free this instance. 
     */
    static get_default(): LauncherFavorites
}

export module ActivationResponse {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.ActivationResponse

        handled?: HandledType | null
        goto_uri?: string | null
    }

}

export interface ActivationResponse {

    // Own properties of Unity-6.0.Unity.ActivationResponse

    readonly handled: HandledType
    goto_uri: string | null

    // Own fields of Unity-6.0.Unity.ActivationResponse

    parent_instance: GObject.InitiallyUnowned
    priv: ActivationResponsePrivate

    // Class property signals of Unity-6.0.Unity.ActivationResponse

    connect(sigName: "notify::handled", callback: (($obj: ActivationResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handled", callback: (($obj: ActivationResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::handled", ...args: any[]): void
    connect(sigName: "notify::goto-uri", callback: (($obj: ActivationResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::goto-uri", callback: (($obj: ActivationResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::goto-uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ActivationResponse extends GObject.InitiallyUnowned {

    // Own properties of Unity-6.0.Unity.ActivationResponse

    static name: string
    static $gtype: GObject.GType<ActivationResponse>

    // Constructors of Unity-6.0.Unity.ActivationResponse

    constructor(config?: ActivationResponse.ConstructorProperties) 
    constructor(handled: HandledType, goto_uri: string | null) 
    static new(handled: HandledType, goto_uri: string | null): ActivationResponse
    static with_preview(preview: Preview): ActivationResponse
    _init(config?: ActivationResponse.ConstructorProperties): void
}

export module Category {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.Category

        name?: string | null
        icon_hint?: Gio.Icon | null
        default_renderer?: CategoryRenderer | null
    }

}

export interface Category {

    // Own properties of Unity-6.0.Unity.Category

    readonly name: string | null
    readonly icon_hint: Gio.Icon
    readonly default_renderer: CategoryRenderer

    // Own fields of Unity-6.0.Unity.Category

    parent_instance: GObject.Object
    priv: CategoryPrivate

    // Class property signals of Unity-6.0.Unity.Category

    connect(sigName: "notify::name", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::icon-hint", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-hint", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-hint", ...args: any[]): void
    connect(sigName: "notify::default-renderer", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-renderer", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-renderer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Category extends GObject.Object {

    // Own properties of Unity-6.0.Unity.Category

    static name: string
    static $gtype: GObject.GType<Category>

    // Constructors of Unity-6.0.Unity.Category

    constructor(config?: Category.ConstructorProperties) 
    constructor(name: string | null, icon_hint: Gio.Icon, renderer: CategoryRenderer) 
    static new(name: string | null, icon_hint: Gio.Icon, renderer: CategoryRenderer): Category
    _init(config?: Category.ConstructorProperties): void
}

export module Filter {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        ($obj: Filter): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.Filter

        id?: string | null
        display_name?: string | null
        icon_hint?: Gio.Icon | null
        renderer?: FilterRenderer | null
        visible?: boolean | null
        collapsed?: boolean | null
        filtering?: boolean | null
    }

}

export interface Filter {

    // Own properties of Unity-6.0.Unity.Filter

    readonly id: string | null
    display_name: string | null
    readonly icon_hint: Gio.Icon
    readonly renderer: FilterRenderer
    visible: boolean
    readonly collapsed: boolean
    filtering: boolean

    // Own fields of Unity-6.0.Unity.Filter

    parent_instance: GObject.Object
    priv: FilterPrivate

    // Own signals of Unity-6.0.Unity.Filter

    connect(sigName: "changed", callback: Filter.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: Filter.ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of Unity-6.0.Unity.Filter

    connect(sigName: "notify::id", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::icon-hint", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-hint", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-hint", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::renderer", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::collapsed", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collapsed", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::collapsed", ...args: any[]): void
    connect(sigName: "notify::filtering", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filtering", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filtering", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Filter extends GObject.Object {

    // Own properties of Unity-6.0.Unity.Filter

    static name: string
    static $gtype: GObject.GType<Filter>

    // Constructors of Unity-6.0.Unity.Filter

    constructor(config?: Filter.ConstructorProperties) 
    _init(config?: Filter.ConstructorProperties): void
}

export module FilterOption {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.FilterOption

        id?: string | null
        display_name?: string | null
        icon_hint?: Gio.Icon | null
        active?: boolean | null
    }

}

export interface FilterOption {

    // Own properties of Unity-6.0.Unity.FilterOption

    readonly id: string | null
    readonly display_name: string | null
    readonly icon_hint: Gio.Icon
    active: boolean

    // Own fields of Unity-6.0.Unity.FilterOption

    parent_instance: GObject.Object
    priv: FilterOptionPrivate

    // Class property signals of Unity-6.0.Unity.FilterOption

    connect(sigName: "notify::id", callback: (($obj: FilterOption, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: FilterOption, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (($obj: FilterOption, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: FilterOption, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::icon-hint", callback: (($obj: FilterOption, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-hint", callback: (($obj: FilterOption, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-hint", ...args: any[]): void
    connect(sigName: "notify::active", callback: (($obj: FilterOption, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: FilterOption, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class FilterOption extends GObject.Object {

    // Own properties of Unity-6.0.Unity.FilterOption

    static name: string
    static $gtype: GObject.GType<FilterOption>

    // Constructors of Unity-6.0.Unity.FilterOption

    constructor(config?: FilterOption.ConstructorProperties) 
    constructor(id: string | null, display_name: string | null, icon_hint: Gio.Icon | null, active: boolean) 
    static new(id: string | null, display_name: string | null, icon_hint: Gio.Icon | null, active: boolean): FilterOption
    _init(config?: FilterOption.ConstructorProperties): void
}

export module OptionsFilter {

    // Constructor properties interface

    export interface ConstructorProperties extends Filter.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.OptionsFilter

        sort_type?: OptionsFilterSortType | null
    }

}

export interface OptionsFilter {

    // Own properties of Unity-6.0.Unity.OptionsFilter

    sort_type: OptionsFilterSortType

    // Own fields of Unity-6.0.Unity.OptionsFilter

    parent_instance: Filter & GObject.Object
    priv: any
    options: FilterOption[]

    // Owm methods of Unity-6.0.Unity.OptionsFilter

    add_option(id: string | null, display_name: string | null, icon_hint?: Gio.Icon | null): FilterOption
    get_option(id: string | null): FilterOption | null
    /**
     * <para>Removes a FilterOption from the OptionsFilter.</para>
     * @param id 
     * @returns true if a FilterOption was removed, false if FilterOption with given id couldn&apos;t be found. 
     */
    remove_option(id: string | null): boolean

    // Class property signals of Unity-6.0.Unity.OptionsFilter

    connect(sigName: "notify::sort-type", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-type", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sort-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::icon-hint", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-hint", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-hint", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::renderer", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::collapsed", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collapsed", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::collapsed", ...args: any[]): void
    connect(sigName: "notify::filtering", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filtering", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filtering", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class OptionsFilter extends Filter {

    // Own properties of Unity-6.0.Unity.OptionsFilter

    static name: string
    static $gtype: GObject.GType<OptionsFilter>

    // Constructors of Unity-6.0.Unity.OptionsFilter

    constructor(config?: OptionsFilter.ConstructorProperties) 
    constructor() 
    static new(): OptionsFilter
    _init(config?: OptionsFilter.ConstructorProperties): void
}

export module RadioOptionFilter {

    // Constructor properties interface

    export interface ConstructorProperties extends OptionsFilter.ConstructorProperties {
    }

}

export interface RadioOptionFilter {

    // Own fields of Unity-6.0.Unity.RadioOptionFilter

    parent_instance: OptionsFilter & Filter & GObject.Object & GObject.Object
    priv: any

    // Owm methods of Unity-6.0.Unity.RadioOptionFilter

    get_active_option(): FilterOption | null

    // Class property signals of Unity-6.0.Unity.RadioOptionFilter

    connect(sigName: "notify::sort-type", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-type", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sort-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::icon-hint", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-hint", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-hint", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::renderer", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::collapsed", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collapsed", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::collapsed", ...args: any[]): void
    connect(sigName: "notify::filtering", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filtering", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filtering", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class RadioOptionFilter extends OptionsFilter {

    // Own properties of Unity-6.0.Unity.RadioOptionFilter

    static name: string
    static $gtype: GObject.GType<RadioOptionFilter>

    // Constructors of Unity-6.0.Unity.RadioOptionFilter

    constructor(config?: RadioOptionFilter.ConstructorProperties) 
    constructor(id: string | null, display_name: string | null, icon_hint: Gio.Icon | null, collapsed: boolean) 
    static new(id: string | null, display_name: string | null, icon_hint: Gio.Icon | null, collapsed: boolean): RadioOptionFilter

    // Overloads of new

    static new(): OptionsFilter
    _init(config?: RadioOptionFilter.ConstructorProperties): void
}

export module CheckOptionFilter {

    // Constructor properties interface

    export interface ConstructorProperties extends OptionsFilter.ConstructorProperties {
    }

}

export interface CheckOptionFilter {

    // Own fields of Unity-6.0.Unity.CheckOptionFilter

    parent_instance: OptionsFilter & Filter & GObject.Object & GObject.Object
    priv: any

    // Class property signals of Unity-6.0.Unity.CheckOptionFilter

    connect(sigName: "notify::sort-type", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-type", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sort-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::icon-hint", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-hint", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-hint", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::renderer", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::collapsed", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collapsed", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::collapsed", ...args: any[]): void
    connect(sigName: "notify::filtering", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filtering", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filtering", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class CheckOptionFilter extends OptionsFilter {

    // Own properties of Unity-6.0.Unity.CheckOptionFilter

    static name: string
    static $gtype: GObject.GType<CheckOptionFilter>

    // Constructors of Unity-6.0.Unity.CheckOptionFilter

    constructor(config?: CheckOptionFilter.ConstructorProperties) 
    constructor(id: string | null, display_name: string | null, icon_hint: Gio.Icon | null, collapsed: boolean) 
    static new(id: string | null, display_name: string | null, icon_hint: Gio.Icon | null, collapsed: boolean): CheckOptionFilter

    // Overloads of new

    static new(): OptionsFilter
    _init(config?: CheckOptionFilter.ConstructorProperties): void
}

export module CheckOptionFilterCompact {

    // Constructor properties interface

    export interface ConstructorProperties extends OptionsFilter.ConstructorProperties {
    }

}

export interface CheckOptionFilterCompact {

    // Own fields of Unity-6.0.Unity.CheckOptionFilterCompact

    parent_instance: OptionsFilter & Filter & GObject.Object & GObject.Object
    priv: any

    // Class property signals of Unity-6.0.Unity.CheckOptionFilterCompact

    connect(sigName: "notify::sort-type", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-type", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sort-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::icon-hint", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-hint", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-hint", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::renderer", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::collapsed", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collapsed", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::collapsed", ...args: any[]): void
    connect(sigName: "notify::filtering", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filtering", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filtering", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class CheckOptionFilterCompact extends OptionsFilter {

    // Own properties of Unity-6.0.Unity.CheckOptionFilterCompact

    static name: string
    static $gtype: GObject.GType<CheckOptionFilterCompact>

    // Constructors of Unity-6.0.Unity.CheckOptionFilterCompact

    constructor(config?: CheckOptionFilterCompact.ConstructorProperties) 
    constructor(id: string | null, display_name: string | null, icon_hint: Gio.Icon | null, collapsed: boolean) 
    static new(id: string | null, display_name: string | null, icon_hint: Gio.Icon | null, collapsed: boolean): CheckOptionFilterCompact

    // Overloads of new

    static new(): OptionsFilter
    _init(config?: CheckOptionFilterCompact.ConstructorProperties): void
}

export module RatingsFilter {

    // Constructor properties interface

    export interface ConstructorProperties extends Filter.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.RatingsFilter

        rating?: number | null
    }

}

export interface RatingsFilter {

    // Own properties of Unity-6.0.Unity.RatingsFilter

    rating: number

    // Own fields of Unity-6.0.Unity.RatingsFilter

    parent_instance: Filter & GObject.Object
    priv: any

    // Class property signals of Unity-6.0.Unity.RatingsFilter

    connect(sigName: "notify::rating", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rating", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rating", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::icon-hint", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-hint", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-hint", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::renderer", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::collapsed", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collapsed", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::collapsed", ...args: any[]): void
    connect(sigName: "notify::filtering", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filtering", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filtering", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class RatingsFilter extends Filter {

    // Own properties of Unity-6.0.Unity.RatingsFilter

    static name: string
    static $gtype: GObject.GType<RatingsFilter>

    // Constructors of Unity-6.0.Unity.RatingsFilter

    constructor(config?: RatingsFilter.ConstructorProperties) 
    constructor(id: string | null, display_name: string | null, icon_hint: Gio.Icon | null, collapsed: boolean) 
    static new(id: string | null, display_name: string | null, icon_hint: Gio.Icon | null, collapsed: boolean): RatingsFilter
    _init(config?: RatingsFilter.ConstructorProperties): void
}

export module MultiRangeFilter {

    // Constructor properties interface

    export interface ConstructorProperties extends OptionsFilter.ConstructorProperties {
    }

}

export interface MultiRangeFilter {

    // Own fields of Unity-6.0.Unity.MultiRangeFilter

    parent_instance: OptionsFilter & Filter & GObject.Object & GObject.Object
    priv: any

    // Owm methods of Unity-6.0.Unity.MultiRangeFilter

    get_first_active(): FilterOption | null
    get_last_active(): FilterOption | null

    // Class property signals of Unity-6.0.Unity.MultiRangeFilter

    connect(sigName: "notify::sort-type", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-type", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sort-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::icon-hint", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-hint", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-hint", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::renderer", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::collapsed", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collapsed", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::collapsed", ...args: any[]): void
    connect(sigName: "notify::filtering", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filtering", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filtering", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MultiRangeFilter extends OptionsFilter {

    // Own properties of Unity-6.0.Unity.MultiRangeFilter

    static name: string
    static $gtype: GObject.GType<MultiRangeFilter>

    // Constructors of Unity-6.0.Unity.MultiRangeFilter

    constructor(config?: MultiRangeFilter.ConstructorProperties) 
    constructor(id: string | null, display_name: string | null, icon_hint: Gio.Icon | null, collapsed: boolean) 
    static new(id: string | null, display_name: string | null, icon_hint: Gio.Icon | null, collapsed: boolean): MultiRangeFilter

    // Overloads of new

    static new(): OptionsFilter
    _init(config?: MultiRangeFilter.ConstructorProperties): void
}

export module PreferencesManager {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.PreferencesManager

        remote_content_search?: PreferencesManagerRemoteContent | null
    }

}

export interface PreferencesManager {

    // Own properties of Unity-6.0.Unity.PreferencesManager

    remote_content_search: PreferencesManagerRemoteContent

    // Own fields of Unity-6.0.Unity.PreferencesManager

    parent_instance: GObject.Object
    priv: PreferencesManagerPrivate

    // Class property signals of Unity-6.0.Unity.PreferencesManager

    connect(sigName: "notify::remote-content-search", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-content-search", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remote-content-search", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * <para>A singleton class that caches different gsettings settings.</para>
 * @class 
 */
export class PreferencesManager extends GObject.Object {

    // Own properties of Unity-6.0.Unity.PreferencesManager

    static name: string
    static $gtype: GObject.GType<PreferencesManager>

    // Constructors of Unity-6.0.Unity.PreferencesManager

    constructor(config?: PreferencesManager.ConstructorProperties) 
    _init(config?: PreferencesManager.ConstructorProperties): void
    /**
     * <para>Get a ref to the singleton PreferencesManager</para>
     */
    static get_default(): PreferencesManager
}

export module LensSearch {

    // Signal callback interfaces

    /**
     * Signal callback interface for `finished`
     */
    export interface FinishedSignalCallback {
        ($obj: LensSearch): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.LensSearch

        search_string?: string | null
        hints?: GLib.HashTable | null
        results_model?: Dee.SerializableModel | null
    }

}

export interface LensSearch {

    // Own properties of Unity-6.0.Unity.LensSearch

    readonly search_string: string | null
    readonly hints: GLib.HashTable
    readonly results_model: Dee.SerializableModel

    // Own fields of Unity-6.0.Unity.LensSearch

    parent_instance: GObject.InitiallyUnowned
    priv: LensSearchPrivate

    // Owm methods of Unity-6.0.Unity.LensSearch

    emit_finished(): void
    equals(other?: LensSearch | null): boolean
    set_reply_hint(key: string | null, variant: GLib.Variant): void

    // Own signals of Unity-6.0.Unity.LensSearch

    connect(sigName: "finished", callback: LensSearch.FinishedSignalCallback): number
    connect_after(sigName: "finished", callback: LensSearch.FinishedSignalCallback): number
    emit(sigName: "finished", ...args: any[]): void

    // Class property signals of Unity-6.0.Unity.LensSearch

    connect(sigName: "notify::search-string", callback: (($obj: LensSearch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-string", callback: (($obj: LensSearch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-string", ...args: any[]): void
    connect(sigName: "notify::hints", callback: (($obj: LensSearch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hints", callback: (($obj: LensSearch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hints", ...args: any[]): void
    connect(sigName: "notify::results-model", callback: (($obj: LensSearch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::results-model", callback: (($obj: LensSearch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::results-model", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class LensSearch extends GObject.InitiallyUnowned {

    // Own properties of Unity-6.0.Unity.LensSearch

    static name: string
    static $gtype: GObject.GType<LensSearch>

    // Constructors of Unity-6.0.Unity.LensSearch

    constructor(config?: LensSearch.ConstructorProperties) 
    constructor(search_string: string | null, hints: GLib.HashTable, results_model: Dee.SerializableModel) 
    static new(search_string: string | null, hints: GLib.HashTable, results_model: Dee.SerializableModel): LensSearch
    _init(config?: LensSearch.ConstructorProperties): void
}

export module Lens {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.Lens

        active?: boolean | null
        visible?: boolean | null
        searching?: boolean | null
        exported?: boolean | null
        search_in_global?: boolean | null
        home_lens_default_name?: string | null
        id?: string | null
        dbus_path?: string | null
        search_hint?: string | null
        filters?: Filter[] | null
        categories?: Category[] | null
        merge_strategy?: MergeStrategy | null
        global_merge_strategy?: MergeStrategy | null
        sources_display_name?: string | null
    }

}

export interface Lens {

    // Own properties of Unity-6.0.Unity.Lens

    active: boolean
    visible: boolean
    searching: boolean
    exported: boolean
    search_in_global: boolean
    home_lens_default_name: string | null
    readonly id: string | null
    readonly dbus_path: string | null
    search_hint: string | null
    filters: Filter[]
    categories: Category[]
    merge_strategy: MergeStrategy
    global_merge_strategy: MergeStrategy
    sources_display_name: string | null

    // Own fields of Unity-6.0.Unity.Lens

    parent_instance: GObject.Object
    priv: LensPrivate

    // Owm methods of Unity-6.0.Unity.Lens

    export(): void
    add_local_scope(scope: Scope): void

    // Class property signals of Unity-6.0.Unity.Lens

    connect(sigName: "notify::active", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::searching", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::searching", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::searching", ...args: any[]): void
    connect(sigName: "notify::exported", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exported", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::exported", ...args: any[]): void
    connect(sigName: "notify::search-in-global", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-in-global", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-in-global", ...args: any[]): void
    connect(sigName: "notify::home-lens-default-name", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::home-lens-default-name", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::home-lens-default-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::dbus-path", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dbus-path", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dbus-path", ...args: any[]): void
    connect(sigName: "notify::search-hint", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-hint", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-hint", ...args: any[]): void
    connect(sigName: "notify::filters", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filters", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filters", ...args: any[]): void
    connect(sigName: "notify::categories", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::categories", ...args: any[]): void
    connect(sigName: "notify::merge-strategy", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::merge-strategy", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::merge-strategy", ...args: any[]): void
    connect(sigName: "notify::global-merge-strategy", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::global-merge-strategy", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::global-merge-strategy", ...args: any[]): void
    connect(sigName: "notify::sources-display-name", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sources-display-name", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sources-display-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Lens extends GObject.Object {

    // Own properties of Unity-6.0.Unity.Lens

    static name: string
    static $gtype: GObject.GType<Lens>

    // Constructors of Unity-6.0.Unity.Lens

    constructor(config?: Lens.ConstructorProperties) 
    constructor(dbus_path_: string | null, id_: string | null) 
    static new(dbus_path_: string | null, id_: string | null): Lens
    _init(config?: Lens.ConstructorProperties): void
}

export module Preview {

    // Signal callback interfaces

    /**
     * Signal callback interface for `closed`
     */
    export interface ClosedSignalCallback {
        ($obj: Preview): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Dee.Serializable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.Preview

        title?: string | null
        subtitle?: string | null
        description_markup?: string | null
        image_source_uri?: string | null
        image?: Gio.Icon | null
    }

}

export interface Preview extends Dee.Serializable {

    // Own properties of Unity-6.0.Unity.Preview

    title: string | null
    subtitle: string | null
    description_markup: string | null
    image_source_uri: string | null
    image: Gio.Icon

    // Own fields of Unity-6.0.Unity.Preview

    parent_instance: GObject.Object
    priv: PreviewPrivate

    // Owm methods of Unity-6.0.Unity.Preview

    add_action(action: PreviewAction): void
    add_info(info_hint: InfoHint): void

    // Own signals of Unity-6.0.Unity.Preview

    connect(sigName: "closed", callback: Preview.ClosedSignalCallback): number
    connect_after(sigName: "closed", callback: Preview.ClosedSignalCallback): number
    emit(sigName: "closed", ...args: any[]): void

    // Class property signals of Unity-6.0.Unity.Preview

    connect(sigName: "notify::title", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::description-markup", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-markup", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description-markup", ...args: any[]): void
    connect(sigName: "notify::image-source-uri", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-source-uri", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image-source-uri", ...args: any[]): void
    connect(sigName: "notify::image", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Preview extends GObject.Object {

    // Own properties of Unity-6.0.Unity.Preview

    static name: string
    static $gtype: GObject.GType<Preview>

    // Constructors of Unity-6.0.Unity.Preview

    constructor(config?: Preview.ConstructorProperties) 
    _init(config?: Preview.ConstructorProperties): void
}

export module PreviewAction {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activated`
     */
    export interface ActivatedSignalCallback {
        ($obj: PreviewAction, uri: string | null): ActivationResponse
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Dee.Serializable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.PreviewAction

        id?: string | null
        display_name?: string | null
        extra_text?: string | null
        icon_hint?: Gio.Icon | null
        layout_hint?: LayoutHint | null
    }

}

export interface PreviewAction extends Dee.Serializable {

    // Own properties of Unity-6.0.Unity.PreviewAction

    readonly id: string | null
    readonly display_name: string | null
    extra_text: string | null
    readonly icon_hint: Gio.Icon
    readonly layout_hint: LayoutHint
    readonly hints: GLib.HashTable

    // Own fields of Unity-6.0.Unity.PreviewAction

    parent_instance: GObject.Object
    priv: PreviewActionPrivate

    // Own signals of Unity-6.0.Unity.PreviewAction

    connect(sigName: "activated", callback: PreviewAction.ActivatedSignalCallback): number
    connect_after(sigName: "activated", callback: PreviewAction.ActivatedSignalCallback): number
    emit(sigName: "activated", uri: string | null, ...args: any[]): void

    // Class property signals of Unity-6.0.Unity.PreviewAction

    connect(sigName: "notify::id", callback: (($obj: PreviewAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: PreviewAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (($obj: PreviewAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: PreviewAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::extra-text", callback: (($obj: PreviewAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extra-text", callback: (($obj: PreviewAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::extra-text", ...args: any[]): void
    connect(sigName: "notify::icon-hint", callback: (($obj: PreviewAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-hint", callback: (($obj: PreviewAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-hint", ...args: any[]): void
    connect(sigName: "notify::layout-hint", callback: (($obj: PreviewAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-hint", callback: (($obj: PreviewAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-hint", ...args: any[]): void
    connect(sigName: "notify::hints", callback: (($obj: PreviewAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hints", callback: (($obj: PreviewAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hints", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class PreviewAction extends GObject.Object {

    // Own properties of Unity-6.0.Unity.PreviewAction

    static name: string
    static $gtype: GObject.GType<PreviewAction>

    // Constructors of Unity-6.0.Unity.PreviewAction

    constructor(config?: PreviewAction.ConstructorProperties) 
    constructor(id: string | null, display_name: string | null, icon_hint?: Gio.Icon | null) 
    static new(id: string | null, display_name: string | null, icon_hint?: Gio.Icon | null): PreviewAction
    static with_layout_hint(id: string | null, display_name: string | null, icon_hint: Gio.Icon | null, layout: LayoutHint): PreviewAction
    _init(config?: PreviewAction.ConstructorProperties): void
}

export module InfoHint {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.InfoHint

        id?: string | null
        display_name?: string | null
        icon_hint?: Gio.Icon | null
        data?: GLib.Variant | null
    }

}

export interface InfoHint {

    // Own properties of Unity-6.0.Unity.InfoHint

    readonly id: string | null
    readonly display_name: string | null
    readonly icon_hint: Gio.Icon
    readonly data: GLib.Variant

    // Own fields of Unity-6.0.Unity.InfoHint

    parent_instance: GObject.InitiallyUnowned
    priv: InfoHintPrivate

    // Class property signals of Unity-6.0.Unity.InfoHint

    connect(sigName: "notify::id", callback: (($obj: InfoHint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: InfoHint, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (($obj: InfoHint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: InfoHint, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::icon-hint", callback: (($obj: InfoHint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-hint", callback: (($obj: InfoHint, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-hint", ...args: any[]): void
    connect(sigName: "notify::data", callback: (($obj: InfoHint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: InfoHint, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class InfoHint extends GObject.InitiallyUnowned {

    // Own properties of Unity-6.0.Unity.InfoHint

    static name: string
    static $gtype: GObject.GType<InfoHint>

    // Constructors of Unity-6.0.Unity.InfoHint

    constructor(config?: InfoHint.ConstructorProperties) 
    constructor(id: string | null, display_name: string | null, icon_hint: Gio.Icon | null, data: string | null) 
    static new(id: string | null, display_name: string | null, icon_hint: Gio.Icon | null, data: string | null): InfoHint
    static with_variant(id: string | null, display_name: string | null, icon_hint: Gio.Icon | null, data: GLib.Variant): InfoHint
    _init(config?: InfoHint.ConstructorProperties): void
}

export module GenericPreview {

    // Constructor properties interface

    export interface ConstructorProperties extends Preview.ConstructorProperties {
    }

}

export interface GenericPreview {

    // Own fields of Unity-6.0.Unity.GenericPreview

    parent_instance: Preview & GObject.Object
    priv: any

    // Class property signals of Unity-6.0.Unity.GenericPreview

    connect(sigName: "notify::title", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::description-markup", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-markup", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description-markup", ...args: any[]): void
    connect(sigName: "notify::image-source-uri", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-source-uri", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image-source-uri", ...args: any[]): void
    connect(sigName: "notify::image", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class GenericPreview extends Preview {

    // Own properties of Unity-6.0.Unity.GenericPreview

    static name: string
    static $gtype: GObject.GType<GenericPreview>

    // Constructors of Unity-6.0.Unity.GenericPreview

    constructor(config?: GenericPreview.ConstructorProperties) 
    constructor(title: string | null, description: string | null, image?: Gio.Icon | null) 
    static new(title: string | null, description: string | null, image?: Gio.Icon | null): GenericPreview
    _init(config?: GenericPreview.ConstructorProperties): void
}

export module ApplicationPreview {

    // Constructor properties interface

    export interface ConstructorProperties extends Preview.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.ApplicationPreview

        app_icon?: Gio.Icon | null
        license?: string | null
        copyright?: string | null
        last_update?: string | null
    }

}

export interface ApplicationPreview {

    // Own properties of Unity-6.0.Unity.ApplicationPreview

    app_icon: Gio.Icon
    license: string | null
    copyright: string | null
    last_update: string | null

    // Own fields of Unity-6.0.Unity.ApplicationPreview

    parent_instance: Preview & GObject.Object
    priv: any

    // Owm methods of Unity-6.0.Unity.ApplicationPreview

    set_rating(rating: number, num_ratings: number): void

    // Class property signals of Unity-6.0.Unity.ApplicationPreview

    connect(sigName: "notify::app-icon", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-icon", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-icon", ...args: any[]): void
    connect(sigName: "notify::license", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::copyright", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::copyright", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::copyright", ...args: any[]): void
    connect(sigName: "notify::last-update", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-update", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-update", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::description-markup", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-markup", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description-markup", ...args: any[]): void
    connect(sigName: "notify::image-source-uri", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-source-uri", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image-source-uri", ...args: any[]): void
    connect(sigName: "notify::image", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ApplicationPreview extends Preview {

    // Own properties of Unity-6.0.Unity.ApplicationPreview

    static name: string
    static $gtype: GObject.GType<ApplicationPreview>

    // Constructors of Unity-6.0.Unity.ApplicationPreview

    constructor(config?: ApplicationPreview.ConstructorProperties) 
    constructor(title: string | null, subtitle: string | null, description: string | null, icon?: Gio.Icon | null, screenshot?: Gio.Icon | null) 
    static new(title: string | null, subtitle: string | null, description: string | null, icon?: Gio.Icon | null, screenshot?: Gio.Icon | null): ApplicationPreview
    _init(config?: ApplicationPreview.ConstructorProperties): void
}

export module MusicPreview {

    // Signal callback interfaces

    /**
     * Signal callback interface for `play`
     */
    export interface PlaySignalCallback {
        ($obj: MusicPreview, uri: string | null): void
    }

    /**
     * Signal callback interface for `pause`
     */
    export interface PauseSignalCallback {
        ($obj: MusicPreview, uri: string | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Preview.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.MusicPreview

        current_track_uri?: string | null
        current_progress?: number | null
        current_track_state?: MusicPreviewTrackState | null
    }

}

export interface MusicPreview {

    // Own properties of Unity-6.0.Unity.MusicPreview

    current_track_uri: string | null
    current_progress: number
    current_track_state: MusicPreviewTrackState

    // Own fields of Unity-6.0.Unity.MusicPreview

    parent_instance: Preview & GObject.Object
    priv: any

    // Owm methods of Unity-6.0.Unity.MusicPreview

    add_track(track: TrackMetadata): void

    // Own signals of Unity-6.0.Unity.MusicPreview

    connect(sigName: "play", callback: MusicPreview.PlaySignalCallback): number
    connect_after(sigName: "play", callback: MusicPreview.PlaySignalCallback): number
    emit(sigName: "play", uri: string | null, ...args: any[]): void
    connect(sigName: "pause", callback: MusicPreview.PauseSignalCallback): number
    connect_after(sigName: "pause", callback: MusicPreview.PauseSignalCallback): number
    emit(sigName: "pause", uri: string | null, ...args: any[]): void

    // Class property signals of Unity-6.0.Unity.MusicPreview

    connect(sigName: "notify::current-track-uri", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-track-uri", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-track-uri", ...args: any[]): void
    connect(sigName: "notify::current-progress", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-progress", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-progress", ...args: any[]): void
    connect(sigName: "notify::current-track-state", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-track-state", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-track-state", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::description-markup", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-markup", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description-markup", ...args: any[]): void
    connect(sigName: "notify::image-source-uri", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-source-uri", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image-source-uri", ...args: any[]): void
    connect(sigName: "notify::image", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MusicPreview extends Preview {

    // Own properties of Unity-6.0.Unity.MusicPreview

    static name: string
    static $gtype: GObject.GType<MusicPreview>

    // Constructors of Unity-6.0.Unity.MusicPreview

    constructor(config?: MusicPreview.ConstructorProperties) 
    constructor(title: string | null, subtitle: string | null, image?: Gio.Icon | null) 
    static new(title: string | null, subtitle: string | null, image?: Gio.Icon | null): MusicPreview
    _init(config?: MusicPreview.ConstructorProperties): void
}

export module MoviePreview {

    // Constructor properties interface

    export interface ConstructorProperties extends Preview.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.MoviePreview

        year?: string | null
    }

}

export interface MoviePreview {

    // Own properties of Unity-6.0.Unity.MoviePreview

    year: string | null

    // Own fields of Unity-6.0.Unity.MoviePreview

    parent_instance: Preview & GObject.Object
    priv: any

    // Owm methods of Unity-6.0.Unity.MoviePreview

    set_rating(rating: number, num_ratings: number): void

    // Class property signals of Unity-6.0.Unity.MoviePreview

    connect(sigName: "notify::year", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::year", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::year", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::description-markup", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-markup", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description-markup", ...args: any[]): void
    connect(sigName: "notify::image-source-uri", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-source-uri", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image-source-uri", ...args: any[]): void
    connect(sigName: "notify::image", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MoviePreview extends Preview {

    // Own properties of Unity-6.0.Unity.MoviePreview

    static name: string
    static $gtype: GObject.GType<MoviePreview>

    // Constructors of Unity-6.0.Unity.MoviePreview

    constructor(config?: MoviePreview.ConstructorProperties) 
    constructor(title: string | null, subtitle: string | null, description: string | null, image?: Gio.Icon | null) 
    static new(title: string | null, subtitle: string | null, description: string | null, image?: Gio.Icon | null): MoviePreview
    _init(config?: MoviePreview.ConstructorProperties): void
}

export module SocialPreview {

    // Constructor properties interface

    export interface ConstructorProperties extends Preview.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.SocialPreview

        avatar?: Gio.Icon | null
        content?: string | null
        sender?: string | null
    }

}

export interface SocialPreview {

    // Own properties of Unity-6.0.Unity.SocialPreview

    avatar: Gio.Icon
    content: string | null
    sender: string | null

    // Own fields of Unity-6.0.Unity.SocialPreview

    parent_instance: Preview & GObject.Object
    priv: any

    // Owm methods of Unity-6.0.Unity.SocialPreview

    add_comment(comment: SocialPreviewComment): void

    // Class property signals of Unity-6.0.Unity.SocialPreview

    connect(sigName: "notify::avatar", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::avatar", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::avatar", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::sender", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sender", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sender", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::description-markup", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-markup", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description-markup", ...args: any[]): void
    connect(sigName: "notify::image-source-uri", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-source-uri", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image-source-uri", ...args: any[]): void
    connect(sigName: "notify::image", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SocialPreview extends Preview {

    // Own properties of Unity-6.0.Unity.SocialPreview

    static name: string
    static $gtype: GObject.GType<SocialPreview>

    // Constructors of Unity-6.0.Unity.SocialPreview

    constructor(config?: SocialPreview.ConstructorProperties) 
    constructor(sender: string | null, subtitle: string | null, content: string | null, avatar?: Gio.Icon | null) 
    static new(sender: string | null, subtitle: string | null, content: string | null, avatar?: Gio.Icon | null): SocialPreview
    _init(config?: SocialPreview.ConstructorProperties): void
}

export module SocialPreviewComment {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.SocialPreviewComment

        id?: string | null
        name?: string | null
        text?: string | null
        time?: string | null
    }

}

export interface SocialPreviewComment {

    // Own properties of Unity-6.0.Unity.SocialPreviewComment

    readonly id: string | null
    readonly name: string | null
    readonly text: string | null
    readonly time: string | null

    // Own fields of Unity-6.0.Unity.SocialPreviewComment

    parent_instance: GObject.InitiallyUnowned
    priv: CommentPrivate

    // Class property signals of Unity-6.0.Unity.SocialPreviewComment

    connect(sigName: "notify::id", callback: (($obj: SocialPreviewComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: SocialPreviewComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SocialPreviewComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SocialPreviewComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: SocialPreviewComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: SocialPreviewComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::time", callback: (($obj: SocialPreviewComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time", callback: (($obj: SocialPreviewComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SocialPreviewComment extends GObject.InitiallyUnowned {

    // Own properties of Unity-6.0.Unity.SocialPreviewComment

    static name: string
    static $gtype: GObject.GType<SocialPreviewComment>

    // Constructors of Unity-6.0.Unity.SocialPreviewComment

    constructor(config?: SocialPreviewComment.ConstructorProperties) 
    constructor(id: string | null, name: string | null, text: string | null, time: string | null) 
    static new(id: string | null, name: string | null, text: string | null, time: string | null): SocialPreviewComment
    _init(config?: SocialPreviewComment.ConstructorProperties): void
}

export module AsyncPreview {

    // Signal callback interfaces

    /**
     * Signal callback interface for `preview_ready`
     */
    export interface PreviewReadySignalCallback {
        ($obj: AsyncPreview, preview: Preview): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Preview.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.AsyncPreview

        cancellable?: Gio.Cancellable | null
    }

}

export interface AsyncPreview {

    // Own properties of Unity-6.0.Unity.AsyncPreview

    cancellable: Gio.Cancellable

    // Own fields of Unity-6.0.Unity.AsyncPreview

    parent_instance: Preview & GObject.Object
    priv: any

    // Owm methods of Unity-6.0.Unity.AsyncPreview

    emit_preview_ready(preview?: Preview | null): void

    // Own signals of Unity-6.0.Unity.AsyncPreview

    connect(sigName: "preview_ready", callback: AsyncPreview.PreviewReadySignalCallback): number
    connect_after(sigName: "preview_ready", callback: AsyncPreview.PreviewReadySignalCallback): number
    emit(sigName: "preview_ready", preview: Preview, ...args: any[]): void

    // Class property signals of Unity-6.0.Unity.AsyncPreview

    connect(sigName: "notify::cancellable", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancellable", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cancellable", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::description-markup", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-markup", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description-markup", ...args: any[]): void
    connect(sigName: "notify::image-source-uri", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-source-uri", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image-source-uri", ...args: any[]): void
    connect(sigName: "notify::image", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class AsyncPreview extends Preview {

    // Own properties of Unity-6.0.Unity.AsyncPreview

    static name: string
    static $gtype: GObject.GType<AsyncPreview>

    // Constructors of Unity-6.0.Unity.AsyncPreview

    constructor(config?: AsyncPreview.ConstructorProperties) 
    constructor() 
    static new(): AsyncPreview
    static with_cancellable(cancellable: Gio.Cancellable): AsyncPreview
    _init(config?: AsyncPreview.ConstructorProperties): void
}

export module Scope {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activate_uri`
     */
    export interface ActivateUriSignalCallback {
        ($obj: Scope, uri: string | null): ActivationResponse | null
    }

    /**
     * Signal callback interface for `preview_uri`
     */
    export interface PreviewUriSignalCallback {
        ($obj: Scope, uri: string | null): Preview | null
    }

    /**
     * Signal callback interface for `filters_changed`
     */
    export interface FiltersChangedSignalCallback {
        ($obj: Scope): void
    }

    /**
     * Signal callback interface for `active_sources_changed`
     */
    export interface ActiveSourcesChangedSignalCallback {
        ($obj: Scope, active_ids: string[]): void
    }

    /**
     * Signal callback interface for `search_changed`
     */
    export interface SearchChangedSignalCallback {
        ($obj: Scope, search: LensSearch, search_type: SearchType, cancellable: Gio.Cancellable): void
    }

    /**
     * Signal callback interface for `generate_search_key`
     */
    export interface GenerateSearchKeySignalCallback {
        ($obj: Scope, search: LensSearch): string | null
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.Scope

        active?: boolean | null
        exported?: boolean | null
        search_in_global?: boolean | null
        provides_personal_content?: boolean | null
        dbus_path?: string | null
        sources?: OptionsFilter | null
    }

}

export interface Scope {

    // Own properties of Unity-6.0.Unity.Scope

    active: boolean
    exported: boolean
    search_in_global: boolean
    provides_personal_content: boolean
    readonly dbus_path: string | null
    sources: OptionsFilter
    readonly filters: Filter[]
    readonly results_model: Dee.SerializableModel
    readonly global_results_model: Dee.SerializableModel

    // Own fields of Unity-6.0.Unity.Scope

    parent_instance: GObject.Object
    priv: ScopePrivate

    // Owm methods of Unity-6.0.Unity.Scope

    export(): void
    get_filter(id: string | null): Filter | null
    /**
     * <para>Invalidates current search and queues new search.</para>
     * <para>This method will invalidate &lpar;and cancel&rpar; last search and queue a new search &lpar;with the same search_string&rpar;. The #UnityScope::search-changed
     *  signal will be emitted immediately in case the Lens managing this scope is active, or as soon as it becomes active.</para>
     * @param search_type Type of search to queue. 
     */
    queue_search_changed(search_type: SearchType): void
    /**
     * <para>Invalidates last search.</para>
     * <para>Invalidate last search, so that the next search request will trigger the #UnityScope::search-changed signal even if the search would be 
     * otherwise discarded because of unchanged search key.</para>
     * <para>See also: #UnityScope::generate-search-key</para>
     * @param search_type Type of search to invalidate. 
     */
    invalidate_search(search_type: SearchType): void

    // Own signals of Unity-6.0.Unity.Scope

    connect(sigName: "activate_uri", callback: Scope.ActivateUriSignalCallback): number
    connect_after(sigName: "activate_uri", callback: Scope.ActivateUriSignalCallback): number
    emit(sigName: "activate_uri", uri: string | null, ...args: any[]): void
    connect(sigName: "preview_uri", callback: Scope.PreviewUriSignalCallback): number
    connect_after(sigName: "preview_uri", callback: Scope.PreviewUriSignalCallback): number
    emit(sigName: "preview_uri", uri: string | null, ...args: any[]): void
    connect(sigName: "filters_changed", callback: Scope.FiltersChangedSignalCallback): number
    connect_after(sigName: "filters_changed", callback: Scope.FiltersChangedSignalCallback): number
    emit(sigName: "filters_changed", ...args: any[]): void
    connect(sigName: "active_sources_changed", callback: Scope.ActiveSourcesChangedSignalCallback): number
    connect_after(sigName: "active_sources_changed", callback: Scope.ActiveSourcesChangedSignalCallback): number
    emit(sigName: "active_sources_changed", active_ids: string[], ...args: any[]): void
    connect(sigName: "search_changed", callback: Scope.SearchChangedSignalCallback): number
    connect_after(sigName: "search_changed", callback: Scope.SearchChangedSignalCallback): number
    emit(sigName: "search_changed", search: LensSearch, search_type: SearchType, cancellable: Gio.Cancellable, ...args: any[]): void
    connect(sigName: "generate_search_key", callback: Scope.GenerateSearchKeySignalCallback): number
    connect_after(sigName: "generate_search_key", callback: Scope.GenerateSearchKeySignalCallback): number
    emit(sigName: "generate_search_key", search: LensSearch, ...args: any[]): void

    // Class property signals of Unity-6.0.Unity.Scope

    connect(sigName: "notify::active", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::exported", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exported", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::exported", ...args: any[]): void
    connect(sigName: "notify::search-in-global", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-in-global", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-in-global", ...args: any[]): void
    connect(sigName: "notify::provides-personal-content", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provides-personal-content", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::provides-personal-content", ...args: any[]): void
    connect(sigName: "notify::dbus-path", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dbus-path", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dbus-path", ...args: any[]): void
    connect(sigName: "notify::sources", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sources", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sources", ...args: any[]): void
    connect(sigName: "notify::filters", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filters", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filters", ...args: any[]): void
    connect(sigName: "notify::results-model", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::results-model", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::results-model", ...args: any[]): void
    connect(sigName: "notify::global-results-model", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::global-results-model", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::global-results-model", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Scope extends GObject.Object {

    // Own properties of Unity-6.0.Unity.Scope

    static name: string
    static $gtype: GObject.GType<Scope>

    // Constructors of Unity-6.0.Unity.Scope

    constructor(config?: Scope.ConstructorProperties) 
    constructor(dbus_path_: string | null) 
    static new(dbus_path_: string | null): Scope
    _init(config?: Scope.ConstructorProperties): void
}

export module TrackMetadata {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.TrackMetadata

        uri?: string | null
        track_no?: number | null
        artist?: string | null
        title?: string | null
        album?: string | null
        length?: number | null
        art_location?: Gio.File | null
        art_icon?: Gio.Icon | null
    }

}

export interface TrackMetadata {

    // Own properties of Unity-6.0.Unity.TrackMetadata

    uri: string | null
    track_no: number
    artist: string | null
    title: string | null
    album: string | null
    length: number
    art_location: Gio.File
    art_icon: Gio.Icon

    // Own fields of Unity-6.0.Unity.TrackMetadata

    parent_instance: GObject.Object
    priv: TrackMetadataPrivate

    // Class property signals of Unity-6.0.Unity.TrackMetadata

    connect(sigName: "notify::uri", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::track-no", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-no", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::track-no", ...args: any[]): void
    connect(sigName: "notify::artist", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::artist", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::album", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::album", ...args: any[]): void
    connect(sigName: "notify::length", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::art-location", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::art-location", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::art-location", ...args: any[]): void
    connect(sigName: "notify::art-icon", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::art-icon", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::art-icon", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class TrackMetadata extends GObject.Object {

    // Own properties of Unity-6.0.Unity.TrackMetadata

    static name: string
    static $gtype: GObject.GType<TrackMetadata>

    // Constructors of Unity-6.0.Unity.TrackMetadata

    constructor(config?: TrackMetadata.ConstructorProperties) 
    constructor() 
    static new(): TrackMetadata
    static full(uri: string | null, track_no: number, title: string | null, artist: string | null, album: string | null, length: number): TrackMetadata
    _init(config?: TrackMetadata.ConstructorProperties): void
}

export module Playlist {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.Playlist

        id?: string | null
        name?: string | null
        icon?: Gio.Icon | null
        creation_date?: GLib.DateTime | null
        modification_date?: GLib.DateTime | null
        last_play_date?: GLib.DateTime | null
    }

}

export interface Playlist {

    // Own properties of Unity-6.0.Unity.Playlist

    readonly id: string | null
    name: string | null
    icon: Gio.Icon
    creation_date: GLib.DateTime
    modification_date: GLib.DateTime
    last_play_date: GLib.DateTime

    // Own fields of Unity-6.0.Unity.Playlist

    parent_instance: GObject.Object
    priv: PlaylistPrivate

    // Class property signals of Unity-6.0.Unity.Playlist

    connect(sigName: "notify::id", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::creation-date", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creation-date", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::creation-date", ...args: any[]): void
    connect(sigName: "notify::modification-date", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modification-date", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modification-date", ...args: any[]): void
    connect(sigName: "notify::last-play-date", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-play-date", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-play-date", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Playlist extends GObject.Object {

    // Own properties of Unity-6.0.Unity.Playlist

    static name: string
    static $gtype: GObject.GType<Playlist>

    // Constructors of Unity-6.0.Unity.Playlist

    constructor(config?: Playlist.ConstructorProperties) 
    constructor(id: string | null) 
    static new(id: string | null): Playlist
    _init(config?: Playlist.ConstructorProperties): void
}

export module MusicPlayer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `raise`
     */
    export interface RaiseSignalCallback {
        ($obj: MusicPlayer): void
    }

    /**
     * Signal callback interface for `play_pause`
     */
    export interface PlayPauseSignalCallback {
        ($obj: MusicPlayer): void
    }

    /**
     * Signal callback interface for `previous`
     */
    export interface PreviousSignalCallback {
        ($obj: MusicPlayer): void
    }

    /**
     * Signal callback interface for `next`
     */
    export interface NextSignalCallback {
        ($obj: MusicPlayer): void
    }

    /**
     * Signal callback interface for `activate_playlist`
     */
    export interface ActivatePlaylistSignalCallback {
        ($obj: MusicPlayer, playlist_id: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-6.0.Unity.MusicPlayer

        app_info?: Gio.AppInfo | null
        desktop_file_name?: string | null
        is_blacklisted?: boolean | null
        title?: string | null
        can_go_next?: boolean | null
        can_go_previous?: boolean | null
        can_play?: boolean | null
        can_pause?: boolean | null
        current_track?: TrackMetadata | null
        playback_state?: PlaybackState | null
        current_playlist?: Playlist | null
        track_menu?: Dbusmenu.Menuitem | null
        player_menu?: Dbusmenu.Menuitem | null
    }

}

export interface MusicPlayer {

    // Own properties of Unity-6.0.Unity.MusicPlayer

    readonly app_info: Gio.AppInfo
    readonly desktop_file_name: string | null
    is_blacklisted: boolean
    title: string | null
    can_go_next: boolean
    can_go_previous: boolean
    can_play: boolean
    can_pause: boolean
    current_track: TrackMetadata
    playback_state: PlaybackState
    current_playlist: Playlist
    track_menu: Dbusmenu.Menuitem
    player_menu: Dbusmenu.Menuitem

    // Own fields of Unity-6.0.Unity.MusicPlayer

    parent_instance: GObject.Object
    priv: MusicPlayerPrivate

    // Owm methods of Unity-6.0.Unity.MusicPlayer

    export(): void
    unexport(): void
    add_playlist(p: Playlist): boolean
    remove_playlist(p: Playlist): boolean
    get_playlists(): Playlist[]
    edit_playlist_name(id: string | null, name: string | null): void

    // Own signals of Unity-6.0.Unity.MusicPlayer

    connect(sigName: "raise", callback: MusicPlayer.RaiseSignalCallback): number
    connect_after(sigName: "raise", callback: MusicPlayer.RaiseSignalCallback): number
    emit(sigName: "raise", ...args: any[]): void
    connect(sigName: "play_pause", callback: MusicPlayer.PlayPauseSignalCallback): number
    connect_after(sigName: "play_pause", callback: MusicPlayer.PlayPauseSignalCallback): number
    emit(sigName: "play_pause", ...args: any[]): void
    connect(sigName: "previous", callback: MusicPlayer.PreviousSignalCallback): number
    connect_after(sigName: "previous", callback: MusicPlayer.PreviousSignalCallback): number
    emit(sigName: "previous", ...args: any[]): void
    connect(sigName: "next", callback: MusicPlayer.NextSignalCallback): number
    connect_after(sigName: "next", callback: MusicPlayer.NextSignalCallback): number
    emit(sigName: "next", ...args: any[]): void
    connect(sigName: "activate_playlist", callback: MusicPlayer.ActivatePlaylistSignalCallback): number
    connect_after(sigName: "activate_playlist", callback: MusicPlayer.ActivatePlaylistSignalCallback): number
    emit(sigName: "activate_playlist", playlist_id: string, ...args: any[]): void

    // Class property signals of Unity-6.0.Unity.MusicPlayer

    connect(sigName: "notify::app-info", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-info", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-info", ...args: any[]): void
    connect(sigName: "notify::desktop-file-name", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::desktop-file-name", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::desktop-file-name", ...args: any[]): void
    connect(sigName: "notify::is-blacklisted", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-blacklisted", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-blacklisted", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::can-go-next", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-go-next", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-go-next", ...args: any[]): void
    connect(sigName: "notify::can-go-previous", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-go-previous", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-go-previous", ...args: any[]): void
    connect(sigName: "notify::can-play", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-play", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-play", ...args: any[]): void
    connect(sigName: "notify::can-pause", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-pause", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-pause", ...args: any[]): void
    connect(sigName: "notify::current-track", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-track", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-track", ...args: any[]): void
    connect(sigName: "notify::playback-state", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playback-state", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::playback-state", ...args: any[]): void
    connect(sigName: "notify::current-playlist", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-playlist", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-playlist", ...args: any[]): void
    connect(sigName: "notify::track-menu", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-menu", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::track-menu", ...args: any[]): void
    connect(sigName: "notify::player-menu", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::player-menu", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::player-menu", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MusicPlayer extends GObject.Object {

    // Own properties of Unity-6.0.Unity.MusicPlayer

    static name: string
    static $gtype: GObject.GType<MusicPlayer>

    // Constructors of Unity-6.0.Unity.MusicPlayer

    constructor(config?: MusicPlayer.ConstructorProperties) 
    constructor(desktop: string | null) 
    static new(desktop: string | null): MusicPlayer
    _init(config?: MusicPlayer.ConstructorProperties): void
}

export interface AppInfoManagerClass {

    // Own fields of Unity-6.0.Unity.AppInfoManagerClass

    parent_class: GObject.ObjectClass
}

export abstract class AppInfoManagerClass {

    // Own properties of Unity-6.0.Unity.AppInfoManagerClass

    static name: string
}

export interface AppInfoManagerPrivate {
}

export class AppInfoManagerPrivate {

    // Own properties of Unity-6.0.Unity.AppInfoManagerPrivate

    static name: string
}

export interface AnnotatedIconClass {

    // Own fields of Unity-6.0.Unity.AnnotatedIconClass

    parent_class: GObject.ObjectClass
}

export abstract class AnnotatedIconClass {

    // Own properties of Unity-6.0.Unity.AnnotatedIconClass

    static name: string
}

export interface AnnotatedIconPrivate {
}

export class AnnotatedIconPrivate {

    // Own properties of Unity-6.0.Unity.AnnotatedIconPrivate

    static name: string
}

export interface InspectorClass {

    // Own fields of Unity-6.0.Unity.InspectorClass

    parent_class: GObject.ObjectClass
}

export abstract class InspectorClass {

    // Own properties of Unity-6.0.Unity.InspectorClass

    static name: string
}

export interface InspectorPrivate {
}

export class InspectorPrivate {

    // Own properties of Unity-6.0.Unity.InspectorPrivate

    static name: string
}

export interface LauncherEntryClass {

    // Own fields of Unity-6.0.Unity.LauncherEntryClass

    parent_class: GObject.ObjectClass
}

export abstract class LauncherEntryClass {

    // Own properties of Unity-6.0.Unity.LauncherEntryClass

    static name: string
}

export interface LauncherEntryPrivate {
}

export class LauncherEntryPrivate {

    // Own properties of Unity-6.0.Unity.LauncherEntryPrivate

    static name: string
}

export interface LauncherFavoritesClass {

    // Own fields of Unity-6.0.Unity.LauncherFavoritesClass

    parent_class: GObject.ObjectClass
}

export abstract class LauncherFavoritesClass {

    // Own properties of Unity-6.0.Unity.LauncherFavoritesClass

    static name: string
}

export interface LauncherFavoritesPrivate {
}

export class LauncherFavoritesPrivate {

    // Own properties of Unity-6.0.Unity.LauncherFavoritesPrivate

    static name: string
}

export interface ActivationResponseClass {

    // Own fields of Unity-6.0.Unity.ActivationResponseClass

    parent_class: GObject.InitiallyUnownedClass
}

export abstract class ActivationResponseClass {

    // Own properties of Unity-6.0.Unity.ActivationResponseClass

    static name: string
}

export interface ActivationResponsePrivate {
}

export class ActivationResponsePrivate {

    // Own properties of Unity-6.0.Unity.ActivationResponsePrivate

    static name: string
}

export interface CategoryClass {

    // Own fields of Unity-6.0.Unity.CategoryClass

    parent_class: GObject.ObjectClass
}

export abstract class CategoryClass {

    // Own properties of Unity-6.0.Unity.CategoryClass

    static name: string
}

export interface CategoryPrivate {
}

export class CategoryPrivate {

    // Own properties of Unity-6.0.Unity.CategoryPrivate

    static name: string
}

export interface FilterClass {

    // Own fields of Unity-6.0.Unity.FilterClass

    parent_class: GObject.ObjectClass
    get_hints: (self: Filter) => GLib.HashTable
    update: (self: Filter, properties: GLib.Variant) => void
}

export abstract class FilterClass {

    // Own properties of Unity-6.0.Unity.FilterClass

    static name: string
}

export interface FilterPrivate {
}

export class FilterPrivate {

    // Own properties of Unity-6.0.Unity.FilterPrivate

    static name: string
}

export interface FilterOptionClass {

    // Own fields of Unity-6.0.Unity.FilterOptionClass

    parent_class: GObject.ObjectClass
}

export abstract class FilterOptionClass {

    // Own properties of Unity-6.0.Unity.FilterOptionClass

    static name: string
}

export interface FilterOptionPrivate {
}

export class FilterOptionPrivate {

    // Own properties of Unity-6.0.Unity.FilterOptionPrivate

    static name: string
}

export interface OptionsFilterClass {

    // Own fields of Unity-6.0.Unity.OptionsFilterClass

    parent_class: FilterClass
}

export abstract class OptionsFilterClass {

    // Own properties of Unity-6.0.Unity.OptionsFilterClass

    static name: string
}

export interface OptionsFilterPrivate {
}

export class OptionsFilterPrivate {

    // Own properties of Unity-6.0.Unity.OptionsFilterPrivate

    static name: string
}

export interface RadioOptionFilterClass {

    // Own fields of Unity-6.0.Unity.RadioOptionFilterClass

    parent_class: OptionsFilterClass
}

export abstract class RadioOptionFilterClass {

    // Own properties of Unity-6.0.Unity.RadioOptionFilterClass

    static name: string
}

export interface RadioOptionFilterPrivate {
}

export class RadioOptionFilterPrivate {

    // Own properties of Unity-6.0.Unity.RadioOptionFilterPrivate

    static name: string
}

export interface CheckOptionFilterClass {

    // Own fields of Unity-6.0.Unity.CheckOptionFilterClass

    parent_class: OptionsFilterClass
}

export abstract class CheckOptionFilterClass {

    // Own properties of Unity-6.0.Unity.CheckOptionFilterClass

    static name: string
}

export interface CheckOptionFilterPrivate {
}

export class CheckOptionFilterPrivate {

    // Own properties of Unity-6.0.Unity.CheckOptionFilterPrivate

    static name: string
}

export interface CheckOptionFilterCompactClass {

    // Own fields of Unity-6.0.Unity.CheckOptionFilterCompactClass

    parent_class: OptionsFilterClass
}

export abstract class CheckOptionFilterCompactClass {

    // Own properties of Unity-6.0.Unity.CheckOptionFilterCompactClass

    static name: string
}

export interface CheckOptionFilterCompactPrivate {
}

export class CheckOptionFilterCompactPrivate {

    // Own properties of Unity-6.0.Unity.CheckOptionFilterCompactPrivate

    static name: string
}

export interface RatingsFilterClass {

    // Own fields of Unity-6.0.Unity.RatingsFilterClass

    parent_class: FilterClass
}

export abstract class RatingsFilterClass {

    // Own properties of Unity-6.0.Unity.RatingsFilterClass

    static name: string
}

export interface RatingsFilterPrivate {
}

export class RatingsFilterPrivate {

    // Own properties of Unity-6.0.Unity.RatingsFilterPrivate

    static name: string
}

export interface MultiRangeFilterClass {

    // Own fields of Unity-6.0.Unity.MultiRangeFilterClass

    parent_class: OptionsFilterClass
}

export abstract class MultiRangeFilterClass {

    // Own properties of Unity-6.0.Unity.MultiRangeFilterClass

    static name: string
}

export interface MultiRangeFilterPrivate {
}

export class MultiRangeFilterPrivate {

    // Own properties of Unity-6.0.Unity.MultiRangeFilterPrivate

    static name: string
}

export interface PreferencesManagerClass {

    // Own fields of Unity-6.0.Unity.PreferencesManagerClass

    parent_class: GObject.ObjectClass
}

export abstract class PreferencesManagerClass {

    // Own properties of Unity-6.0.Unity.PreferencesManagerClass

    static name: string
}

export interface PreferencesManagerPrivate {
}

export class PreferencesManagerPrivate {

    // Own properties of Unity-6.0.Unity.PreferencesManagerPrivate

    static name: string
}

export interface LensSearchClass {

    // Own fields of Unity-6.0.Unity.LensSearchClass

    parent_class: GObject.InitiallyUnownedClass
}

export abstract class LensSearchClass {

    // Own properties of Unity-6.0.Unity.LensSearchClass

    static name: string
}

export interface LensSearchPrivate {
}

export class LensSearchPrivate {

    // Own properties of Unity-6.0.Unity.LensSearchPrivate

    static name: string
}

export interface LensClass {

    // Own fields of Unity-6.0.Unity.LensClass

    parent_class: GObject.ObjectClass
}

export abstract class LensClass {

    // Own properties of Unity-6.0.Unity.LensClass

    static name: string
}

export interface LensPrivate {
}

export class LensPrivate {

    // Own properties of Unity-6.0.Unity.LensPrivate

    static name: string
}

export interface PreviewClass {

    // Own fields of Unity-6.0.Unity.PreviewClass

    parent_class: GObject.ObjectClass
    create_raw: (self: Preview) => GObject.Object
    update_property: (self: Preview, values: GLib.HashTable, _callback_?: Gio.AsyncReadyCallback | null) => void
    update_property_finish: (self: Preview, _res_: Gio.AsyncResult) => GLib.HashTable
    dummy1: (self: Preview) => void
    dummy2: (self: Preview) => void
    dummy3: (self: Preview) => void
    dummy4: (self: Preview) => void
}

export abstract class PreviewClass {

    // Own properties of Unity-6.0.Unity.PreviewClass

    static name: string
}

export interface PreviewPrivate {
}

export class PreviewPrivate {

    // Own properties of Unity-6.0.Unity.PreviewPrivate

    static name: string
}

export interface PreviewActionClass {

    // Own fields of Unity-6.0.Unity.PreviewActionClass

    parent_class: GObject.ObjectClass
    dummy1: (self: PreviewAction) => void
    dummy2: (self: PreviewAction) => void
    dummy3: (self: PreviewAction) => void
    dummy4: (self: PreviewAction) => void
}

export abstract class PreviewActionClass {

    // Own properties of Unity-6.0.Unity.PreviewActionClass

    static name: string
}

export interface PreviewActionPrivate {
}

export class PreviewActionPrivate {

    // Own properties of Unity-6.0.Unity.PreviewActionPrivate

    static name: string
}

export interface InfoHintClass {

    // Own fields of Unity-6.0.Unity.InfoHintClass

    parent_class: GObject.InitiallyUnownedClass
}

export abstract class InfoHintClass {

    // Own properties of Unity-6.0.Unity.InfoHintClass

    static name: string
}

export interface InfoHintPrivate {
}

export class InfoHintPrivate {

    // Own properties of Unity-6.0.Unity.InfoHintPrivate

    static name: string
}

export interface GenericPreviewClass {

    // Own fields of Unity-6.0.Unity.GenericPreviewClass

    parent_class: PreviewClass
}

export abstract class GenericPreviewClass {

    // Own properties of Unity-6.0.Unity.GenericPreviewClass

    static name: string
}

export interface GenericPreviewPrivate {
}

export class GenericPreviewPrivate {

    // Own properties of Unity-6.0.Unity.GenericPreviewPrivate

    static name: string
}

export interface ApplicationPreviewClass {

    // Own fields of Unity-6.0.Unity.ApplicationPreviewClass

    parent_class: PreviewClass
}

export abstract class ApplicationPreviewClass {

    // Own properties of Unity-6.0.Unity.ApplicationPreviewClass

    static name: string
}

export interface ApplicationPreviewPrivate {
}

export class ApplicationPreviewPrivate {

    // Own properties of Unity-6.0.Unity.ApplicationPreviewPrivate

    static name: string
}

export interface MusicPreviewClass {

    // Own fields of Unity-6.0.Unity.MusicPreviewClass

    parent_class: PreviewClass
}

export abstract class MusicPreviewClass {

    // Own properties of Unity-6.0.Unity.MusicPreviewClass

    static name: string
}

export interface MusicPreviewPrivate {
}

export class MusicPreviewPrivate {

    // Own properties of Unity-6.0.Unity.MusicPreviewPrivate

    static name: string
}

export interface MoviePreviewClass {

    // Own fields of Unity-6.0.Unity.MoviePreviewClass

    parent_class: PreviewClass
}

export abstract class MoviePreviewClass {

    // Own properties of Unity-6.0.Unity.MoviePreviewClass

    static name: string
}

export interface MoviePreviewPrivate {
}

export class MoviePreviewPrivate {

    // Own properties of Unity-6.0.Unity.MoviePreviewPrivate

    static name: string
}

export interface SocialPreviewClass {

    // Own fields of Unity-6.0.Unity.SocialPreviewClass

    parent_class: PreviewClass
}

export abstract class SocialPreviewClass {

    // Own properties of Unity-6.0.Unity.SocialPreviewClass

    static name: string
}

export interface SocialPreviewPrivate {
}

export class SocialPreviewPrivate {

    // Own properties of Unity-6.0.Unity.SocialPreviewPrivate

    static name: string
}

export interface CommentClass {

    // Own fields of Unity-6.0.Unity.CommentClass

    parent_class: GObject.InitiallyUnownedClass
}

export abstract class CommentClass {

    // Own properties of Unity-6.0.Unity.CommentClass

    static name: string
}

export interface CommentPrivate {
}

export class CommentPrivate {

    // Own properties of Unity-6.0.Unity.CommentPrivate

    static name: string
}

export interface AsyncPreviewClass {

    // Own fields of Unity-6.0.Unity.AsyncPreviewClass

    parent_class: PreviewClass
}

export abstract class AsyncPreviewClass {

    // Own properties of Unity-6.0.Unity.AsyncPreviewClass

    static name: string
}

export interface AsyncPreviewPrivate {
}

export class AsyncPreviewPrivate {

    // Own properties of Unity-6.0.Unity.AsyncPreviewPrivate

    static name: string
}

export interface ScopeClass {

    // Own fields of Unity-6.0.Unity.ScopeClass

    parent_class: GObject.ObjectClass
}

export abstract class ScopeClass {

    // Own properties of Unity-6.0.Unity.ScopeClass

    static name: string
}

export interface ScopePrivate {
}

export class ScopePrivate {

    // Own properties of Unity-6.0.Unity.ScopePrivate

    static name: string
}

export interface TrackMetadataClass {

    // Own fields of Unity-6.0.Unity.TrackMetadataClass

    parent_class: GObject.ObjectClass
}

export abstract class TrackMetadataClass {

    // Own properties of Unity-6.0.Unity.TrackMetadataClass

    static name: string
}

export interface TrackMetadataPrivate {
}

export class TrackMetadataPrivate {

    // Own properties of Unity-6.0.Unity.TrackMetadataPrivate

    static name: string
}

export interface PlaylistClass {

    // Own fields of Unity-6.0.Unity.PlaylistClass

    parent_class: GObject.ObjectClass
}

export abstract class PlaylistClass {

    // Own properties of Unity-6.0.Unity.PlaylistClass

    static name: string
}

export interface PlaylistPrivate {
}

export class PlaylistPrivate {

    // Own properties of Unity-6.0.Unity.PlaylistPrivate

    static name: string
}

export interface MusicPlayerClass {

    // Own fields of Unity-6.0.Unity.MusicPlayerClass

    parent_class: GObject.ObjectClass
}

export abstract class MusicPlayerClass {

    // Own properties of Unity-6.0.Unity.MusicPlayerClass

    static name: string
}

export interface MusicPlayerPrivate {
}

export class MusicPlayerPrivate {

    // Own properties of Unity-6.0.Unity.MusicPlayerPrivate

    static name: string
}

export interface MergeStrategyIface {

    // Own fields of Unity-6.0.Unity.MergeStrategyIface

    parent_iface: GObject.TypeInterface
    merge_result: (self: MergeStrategy, target: Dee.Model, row: GLib.Variant[]) => Dee.ModelIter | null
}

export abstract class MergeStrategyIface {

    // Own properties of Unity-6.0.Unity.MergeStrategyIface

    static name: string
}

export interface PlaylistDetails {

    // Own fields of Unity-6.0.Unity.PlaylistDetails

    id: string
    name: string | null
    icon_name: string | null
}

export class PlaylistDetails {

    // Own properties of Unity-6.0.Unity.PlaylistDetails

    static name: string
}

export interface ActivePlaylistContainer {

    // Own fields of Unity-6.0.Unity.ActivePlaylistContainer

    valid: boolean
    details: PlaylistDetails
}

export class ActivePlaylistContainer {

    // Own properties of Unity-6.0.Unity.ActivePlaylistContainer

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