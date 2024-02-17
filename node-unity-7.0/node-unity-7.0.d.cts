
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-unity-7.0-import.d.ts';
    
/**
 * Unity-7.0
 */

import type GLib from '@girs/node-glib-2.0';
import type Dbusmenu from '@girs/node-dbusmenu-0.4';
import type GObject from '@girs/node-gobject-2.0';
import type Dee from '@girs/node-dee-1.0';
import type Gio from '@girs/node-gio-2.0';

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
export enum CategoryRenderer {
    DEFAULT,
    GRID,
    CAROUSEL,
    LIST,
    DYNAMIC,
    SPECIAL,
    VERTICAL_TILE,
    HORIZONTAL_TILE,
}
export enum CategoryContentType {
    DEFAULT,
    APPLICATIONS,
    MUSIC,
    VIDEO,
    PLACES,
    SOCIAL,
    WEATHER,
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
export enum HandledType {
    NOT_HANDLED,
    SHOW_DASH,
    HIDE_DASH,
    GOTO_DASH_URI,
    SHOW_PREVIEW,
    PERFORM_SEARCH,
}
export enum SearchType {
    DEFAULT,
    GLOBAL,
    N_TYPES,
}
export enum ResultType {
    DEFAULT,
    PERSONAL,
    SEMI_PERSONAL,
}
export enum SerializationType {
    BINARY,
    JSON,
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
export enum PaymentPreviewType {
    APPLICATION,
    MUSIC,
    ERROR,
}
export enum SchemaFieldType {
    OPTIONAL,
    REQUIRED,
}
export enum AggregatorScopeSortFlags {
    ASCENDING,
    DESCENDING,
    CASE_INSENSITIVE,
}
export enum AggregatorScopeMergeMode {
    CATEGORY_ID,
    OWNER_SCOPE,
}
export const SCOPE_API_VERSION: number
export function categoryRendererFromString(rendererName: string): CategoryRenderer
export function categoryRendererToString(val: CategoryRenderer): string
export function categoryContentTypeFromString(contentType: string): CategoryContentType
export function categoryContentTypeToString(val: CategoryContentType): string
export function filterRendererToString(renderer: FilterRenderer): string
export function filterRendererFromString(rendererName: string): FilterRenderer
export function scopeModuleGetVersion(): number
export function scopeModuleLoadScopes(): AbstractScope[]
export function objectUnref(object?: any | null): void
export interface ScopeSearchBaseCallback {
    (instance: ScopeSearchBase): void
}
export interface AbstractPreviewCallback {
    (previewer: ResultPreviewer, preview: AbstractPreview | null): void
}
export module AppInfoManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        (id: string, newAppinfo?: Gio.AppInfo | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface AppInfoManager {

    // Own properties of Unity-7.0.Unity.AppInfoManager

    __gtype__: number

    // Owm methods of Unity-7.0.Unity.AppInfoManager

    lookup(id: string): Gio.AppInfo | null
    getCategories(id: string): string[] | null
    getKeywords(id: string): string[] | null
    getPath(id: string): string | null
    lookupAsync(id: string, callback?: Gio.AsyncReadyCallback | null): void
    lookupFinish(res: Gio.AsyncResult): Gio.AppInfo | null
    clear(): void

    // Own signals of Unity-7.0.Unity.AppInfoManager

    connect(sigName: "changed", callback: AppInfoManager.ChangedSignalCallback): number
    on(sigName: "changed", callback: AppInfoManager.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: AppInfoManager.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: AppInfoManager.ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", newAppinfo?: Gio.AppInfo | null, ...args: any[]): void

    // Class property signals of Unity-7.0.Unity.AppInfoManager

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

export class AppInfoManager extends GObject.Object {

    // Own properties of Unity-7.0.Unity.AppInfoManager

    static name: string

    // Constructors of Unity-7.0.Unity.AppInfoManager

    constructor(config?: AppInfoManager.ConstructorProperties) 
    _init(config?: AppInfoManager.ConstructorProperties): void
    static getInstance(): AppInfoManager
    static getDefault(): AppInfoManager
}

export module AnnotatedIcon {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.AnnotatedIcon

        icon?: Gio.Icon | null
        ribbon?: string | null
        category?: CategoryType | null
        size_hint?: IconSizeHint | null
    }

}

export interface AnnotatedIcon {

    // Own properties of Unity-7.0.Unity.AnnotatedIcon

    icon: Gio.Icon
    ribbon: string | null
    category: CategoryType
    sizeHint: IconSizeHint
    __gtype__: number

    // Owm methods of Unity-7.0.Unity.AnnotatedIcon

    setColorizeRgba(r: number, g: number, b: number, a: number): void
    toString(): string | null
    getIcon(): Gio.Icon
    setIcon(value: Gio.Icon): void
    getRibbon(): string
    setRibbon(value: string): void
    getCategory(): CategoryType
    setCategory(value: CategoryType): void
    getSizeHint(): IconSizeHint
    setSizeHint(value: IconSizeHint): void

    // Class property signals of Unity-7.0.Unity.AnnotatedIcon

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
    disconnect(id: number): void
}

export class AnnotatedIcon extends GObject.Object {

    // Own properties of Unity-7.0.Unity.AnnotatedIcon

    static name: string

    // Constructors of Unity-7.0.Unity.AnnotatedIcon

    constructor(config?: AnnotatedIcon.ConstructorProperties) 
    constructor(baseIcon: Gio.Icon) 
    static new(baseIcon: Gio.Icon): AnnotatedIcon
    _init(config?: AnnotatedIcon.ConstructorProperties): void
}

export module Inspector {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Inspector {

    // Own properties of Unity-7.0.Unity.Inspector

    readonly unityRunning: boolean
    readonly unityBusName: string | null
    __gtype__: number

    // Owm methods of Unity-7.0.Unity.Inspector

    getUnityRunning(): boolean
    getUnityBusName(): string | null

    // Class property signals of Unity-7.0.Unity.Inspector

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
    disconnect(id: number): void
}

export class Inspector extends GObject.Object {

    // Own properties of Unity-7.0.Unity.Inspector

    static name: string

    // Constructors of Unity-7.0.Unity.Inspector

    constructor(config?: Inspector.ConstructorProperties) 
    _init(config?: Inspector.ConstructorProperties): void
    static getDefault(): Inspector
}

export module LauncherEntry {

    // Constructor properties interface

    export interface ConstructorProperties extends Dee.Serializable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.LauncherEntry

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

    // Own properties of Unity-7.0.Unity.LauncherEntry

    appUri: string | null
    count: number
    countVisible: boolean
    progress: number
    progressVisible: boolean
    urgent: boolean
    quicklist: Dbusmenu.Menuitem
    __gtype__: number

    // Owm methods of Unity-7.0.Unity.LauncherEntry

    getAppUri(): string
    setAppUri(value: string): void
    getCount(): number
    setCount(value: number): void
    getCountVisible(): boolean
    setCountVisible(value: boolean): void
    getProgress(): number
    setProgress(value: number): void
    getProgressVisible(): boolean
    setProgressVisible(value: boolean): void
    getUrgent(): boolean
    setUrgent(value: boolean): void
    getQuicklist(): Dbusmenu.Menuitem | null
    setQuicklist(value?: Dbusmenu.Menuitem | null): void

    // Class property signals of Unity-7.0.Unity.LauncherEntry

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
    disconnect(id: number): void
}

export class LauncherEntry extends GObject.Object {

    // Own properties of Unity-7.0.Unity.LauncherEntry

    static name: string

    // Constructors of Unity-7.0.Unity.LauncherEntry

    constructor(config?: LauncherEntry.ConstructorProperties) 
    _init(config?: LauncherEntry.ConstructorProperties): void
    static getForAppUri(appUri: string): LauncherEntry
    static getForDesktopId(desktopId: string): LauncherEntry
    static getForDesktopFile(desktopFile: string): LauncherEntry
}

export module LauncherFavorites {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface LauncherFavorites {

    // Own properties of Unity-7.0.Unity.LauncherFavorites

    __gtype__: number

    // Owm methods of Unity-7.0.Unity.LauncherFavorites

    hasAppInfo(appinfo: Gio.AppInfo): boolean
    hasAppId(appId: string): boolean
    lookup(appId: string): Gio.AppInfo | null
    enumerateIds(): string[]
    enumerateAppInfos(): Gio.AppInfo[]

    // Own signals of Unity-7.0.Unity.LauncherFavorites

    connect(sigName: "changed", callback: LauncherFavorites.ChangedSignalCallback): number
    on(sigName: "changed", callback: LauncherFavorites.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: LauncherFavorites.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: LauncherFavorites.ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of Unity-7.0.Unity.LauncherFavorites

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

export class LauncherFavorites extends GObject.Object {

    // Own properties of Unity-7.0.Unity.LauncherFavorites

    static name: string

    // Constructors of Unity-7.0.Unity.LauncherFavorites

    constructor(config?: LauncherFavorites.ConstructorProperties) 
    _init(config?: LauncherFavorites.ConstructorProperties): void
    static getDefault(): LauncherFavorites
}

export module MetadataProvider {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface MetadataProvider {

    // Own properties of Unity-7.0.Unity.MetadataProvider

    __gtype__: number

    // Class property signals of Unity-7.0.Unity.MetadataProvider

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

export class MetadataProvider extends GObject.Object {

    // Own properties of Unity-7.0.Unity.MetadataProvider

    static name: string

    // Constructors of Unity-7.0.Unity.MetadataProvider

    constructor(config?: MetadataProvider.ConstructorProperties) 
    _init(config?: MetadataProvider.ConstructorProperties): void
}

export module ProgressSourceProvider {

    // Constructor properties interface

    export interface ConstructorProperties extends MetadataProvider.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.ProgressSourceProvider

        dbus_name?: string | null
        dbus_path?: string | null
    }

}

export interface ProgressSourceProvider {

    // Own properties of Unity-7.0.Unity.ProgressSourceProvider

    readonly dbusName: string | null
    readonly dbusPath: string | null
    __gtype__: number

    // Owm methods of Unity-7.0.Unity.ProgressSourceProvider

    getDbusName(): string
    getDbusPath(): string

    // Class property signals of Unity-7.0.Unity.ProgressSourceProvider

    connect(sigName: "notify::dbus-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::dbus-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dbus-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dbus-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dbus-name", ...args: any[]): void
    connect(sigName: "notify::dbus-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dbus-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dbus-path", ...args: any[]): void
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

export class ProgressSourceProvider extends MetadataProvider {

    // Own properties of Unity-7.0.Unity.ProgressSourceProvider

    static name: string

    // Constructors of Unity-7.0.Unity.ProgressSourceProvider

    constructor(config?: ProgressSourceProvider.ConstructorProperties) 
    constructor(dbusName: string, dbusPath: string) 
    static new(dbusName: string, dbusPath: string): ProgressSourceProvider
    _init(config?: ProgressSourceProvider.ConstructorProperties): void
}

export module Category {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.Category

        id?: string | null
        name?: string | null
        icon_hint?: Gio.Icon | null
        default_renderer?: CategoryRenderer | null
        content_type?: CategoryContentType | null
        renderer_hint?: string | null
    }

}

export interface Category {

    // Own properties of Unity-7.0.Unity.Category

    readonly id: string | null
    readonly name: string | null
    readonly iconHint: Gio.Icon
    readonly defaultRenderer: CategoryRenderer
    contentType: CategoryContentType
    rendererHint: string | null
    readonly renderer: string | null
    __gtype__: number

    // Owm methods of Unity-7.0.Unity.Category

    addMetadataProvider(provider: MetadataProvider): void
    getId(): string
    getName(): string
    getIconHint(): Gio.Icon | null
    getDefaultRenderer(): CategoryRenderer
    getContentType(): CategoryContentType
    setContentType(value: CategoryContentType): void
    getRendererHint(): string
    setRendererHint(value: string): void
    getRenderer(): string

    // Class property signals of Unity-7.0.Unity.Category

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
    connect(sigName: "notify::content-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::renderer-hint", callback: (...args: any[]) => void): number
    on(sigName: "notify::renderer-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::renderer-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::renderer-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::renderer-hint", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: (...args: any[]) => void): number
    on(sigName: "notify::renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::renderer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::renderer", ...args: any[]): void
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

export class Category extends GObject.Object {

    // Own properties of Unity-7.0.Unity.Category

    static name: string

    // Constructors of Unity-7.0.Unity.Category

    constructor(config?: Category.ConstructorProperties) 
    constructor(id: string, name: string, iconHint: Gio.Icon, renderer: CategoryRenderer) 
    static new(id: string, name: string, iconHint: Gio.Icon, renderer: CategoryRenderer): Category
    _init(config?: Category.ConstructorProperties): void
}

export module Filter {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Dee.Serializable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.Filter

        id?: string | null
        display_name?: string | null
        icon_hint?: Gio.Icon | null
        renderer?: FilterRenderer | null
        visible?: boolean | null
        collapsed?: boolean | null
        filtering?: boolean | null
    }

}

export interface Filter extends Dee.Serializable {

    // Own properties of Unity-7.0.Unity.Filter

    readonly id: string | null
    displayName: string | null
    readonly iconHint: Gio.Icon
    readonly renderer: FilterRenderer
    visible: boolean
    collapsed: boolean
    filtering: boolean
    __gtype__: number

    // Owm methods of Unity-7.0.Unity.Filter

    getId(): string
    getDisplayName(): string
    getIconHint(): Gio.Icon | null
    getRenderer(): FilterRenderer
    getVisible(): boolean
    setVisible(value: boolean): void
    getCollapsed(): boolean
    getFiltering(): boolean

    // Own signals of Unity-7.0.Unity.Filter

    connect(sigName: "changed", callback: Filter.ChangedSignalCallback): number
    on(sigName: "changed", callback: Filter.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: Filter.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: Filter.ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of Unity-7.0.Unity.Filter

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
    disconnect(id: number): void
}

export class Filter extends GObject.Object {

    // Own properties of Unity-7.0.Unity.Filter

    static name: string

    // Constructors of Unity-7.0.Unity.Filter

    constructor(config?: Filter.ConstructorProperties) 
    _init(config?: Filter.ConstructorProperties): void
}

export module FilterOption {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.FilterOption

        id?: string | null
        display_name?: string | null
        icon_hint?: Gio.Icon | null
        active?: boolean | null
    }

}

export interface FilterOption {

    // Own properties of Unity-7.0.Unity.FilterOption

    readonly id: string | null
    readonly displayName: string | null
    readonly iconHint: Gio.Icon
    active: boolean
    __gtype__: number

    // Owm methods of Unity-7.0.Unity.FilterOption

    getId(): string
    getDisplayName(): string
    getIconHint(): Gio.Icon
    getActive(): boolean
    setActive(value: boolean): void

    // Class property signals of Unity-7.0.Unity.FilterOption

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
    disconnect(id: number): void
}

export class FilterOption extends GObject.Object {

    // Own properties of Unity-7.0.Unity.FilterOption

    static name: string

    // Constructors of Unity-7.0.Unity.FilterOption

    constructor(config?: FilterOption.ConstructorProperties) 
    constructor(id: string, displayName: string, iconHint: Gio.Icon | null, active: boolean) 
    static new(id: string, displayName: string, iconHint: Gio.Icon | null, active: boolean): FilterOption
    _init(config?: FilterOption.ConstructorProperties): void
}

export module OptionsFilter {

    // Constructor properties interface

    export interface ConstructorProperties extends Filter.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.OptionsFilter

        sort_type?: OptionsFilterSortType | null
        show_all_button?: boolean | null
    }

}

export interface OptionsFilter {

    // Own properties of Unity-7.0.Unity.OptionsFilter

    sortType: OptionsFilterSortType
    showAllButton: boolean
    __gtype__: number

    // Own fields of Unity-7.0.Unity.OptionsFilter

    options: FilterOption[]

    // Owm methods of Unity-7.0.Unity.OptionsFilter

    addOption(id: string, displayName: string, iconHint?: Gio.Icon | null): FilterOption
    getOption(id: string): FilterOption | null
    removeOption(id: string): boolean
    getSortType(): OptionsFilterSortType
    setSortType(value: OptionsFilterSortType): void
    getShowAllButton(): boolean
    setShowAllButton(value: boolean): void

    // Class property signals of Unity-7.0.Unity.OptionsFilter

    connect(sigName: "notify::sort-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::sort-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sort-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sort-type", ...args: any[]): void
    connect(sigName: "notify::show-all-button", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-all-button", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-all-button", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-all-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-all-button", ...args: any[]): void
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
    disconnect(id: number): void
}

export class OptionsFilter extends Filter {

    // Own properties of Unity-7.0.Unity.OptionsFilter

    static name: string

    // Constructors of Unity-7.0.Unity.OptionsFilter

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

    // Own properties of Unity-7.0.Unity.RadioOptionFilter

    __gtype__: number

    // Owm methods of Unity-7.0.Unity.RadioOptionFilter

    getActiveOption(): FilterOption | null

    // Class property signals of Unity-7.0.Unity.RadioOptionFilter

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
    connect(sigName: "notify::show-all-button", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-all-button", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-all-button", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-all-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-all-button", ...args: any[]): void
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
    disconnect(id: number): void
}

export class RadioOptionFilter extends OptionsFilter {

    // Own properties of Unity-7.0.Unity.RadioOptionFilter

    static name: string

    // Constructors of Unity-7.0.Unity.RadioOptionFilter

    constructor(config?: RadioOptionFilter.ConstructorProperties) 
    constructor(id: string, displayName: string, iconHint: Gio.Icon | null, collapsed: boolean) 
    static new(id: string, displayName: string, iconHint: Gio.Icon | null, collapsed: boolean): RadioOptionFilter

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

    // Own properties of Unity-7.0.Unity.CheckOptionFilter

    __gtype__: number

    // Class property signals of Unity-7.0.Unity.CheckOptionFilter

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
    connect(sigName: "notify::show-all-button", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-all-button", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-all-button", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-all-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-all-button", ...args: any[]): void
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
    disconnect(id: number): void
}

export class CheckOptionFilter extends OptionsFilter {

    // Own properties of Unity-7.0.Unity.CheckOptionFilter

    static name: string

    // Constructors of Unity-7.0.Unity.CheckOptionFilter

    constructor(config?: CheckOptionFilter.ConstructorProperties) 
    constructor(id: string, displayName: string, iconHint: Gio.Icon | null, collapsed: boolean) 
    static new(id: string, displayName: string, iconHint: Gio.Icon | null, collapsed: boolean): CheckOptionFilter

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

    // Own properties of Unity-7.0.Unity.CheckOptionFilterCompact

    __gtype__: number

    // Class property signals of Unity-7.0.Unity.CheckOptionFilterCompact

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
    connect(sigName: "notify::show-all-button", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-all-button", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-all-button", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-all-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-all-button", ...args: any[]): void
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
    disconnect(id: number): void
}

export class CheckOptionFilterCompact extends OptionsFilter {

    // Own properties of Unity-7.0.Unity.CheckOptionFilterCompact

    static name: string

    // Constructors of Unity-7.0.Unity.CheckOptionFilterCompact

    constructor(config?: CheckOptionFilterCompact.ConstructorProperties) 
    constructor(id: string, displayName: string, iconHint: Gio.Icon | null, collapsed: boolean) 
    static new(id: string, displayName: string, iconHint: Gio.Icon | null, collapsed: boolean): CheckOptionFilterCompact

    // Overloads of new

    static new(): OptionsFilter
    _init(config?: CheckOptionFilterCompact.ConstructorProperties): void
}

export module RatingsFilter {

    // Constructor properties interface

    export interface ConstructorProperties extends Filter.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.RatingsFilter

        rating?: number | null
    }

}

export interface RatingsFilter {

    // Own properties of Unity-7.0.Unity.RatingsFilter

    rating: number
    __gtype__: number

    // Owm methods of Unity-7.0.Unity.RatingsFilter

    getRating(): number

    // Class property signals of Unity-7.0.Unity.RatingsFilter

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
    disconnect(id: number): void
}

export class RatingsFilter extends Filter {

    // Own properties of Unity-7.0.Unity.RatingsFilter

    static name: string

    // Constructors of Unity-7.0.Unity.RatingsFilter

    constructor(config?: RatingsFilter.ConstructorProperties) 
    constructor(id: string, displayName: string, iconHint: Gio.Icon | null, collapsed: boolean) 
    static new(id: string, displayName: string, iconHint: Gio.Icon | null, collapsed: boolean): RatingsFilter
    _init(config?: RatingsFilter.ConstructorProperties): void
}

export module MultiRangeFilter {

    // Constructor properties interface

    export interface ConstructorProperties extends OptionsFilter.ConstructorProperties {
    }

}

export interface MultiRangeFilter {

    // Own properties of Unity-7.0.Unity.MultiRangeFilter

    __gtype__: number

    // Owm methods of Unity-7.0.Unity.MultiRangeFilter

    getFirstActive(): FilterOption | null
    getLastActive(): FilterOption | null

    // Class property signals of Unity-7.0.Unity.MultiRangeFilter

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
    connect(sigName: "notify::show-all-button", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-all-button", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-all-button", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-all-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-all-button", ...args: any[]): void
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
    disconnect(id: number): void
}

export class MultiRangeFilter extends OptionsFilter {

    // Own properties of Unity-7.0.Unity.MultiRangeFilter

    static name: string

    // Constructors of Unity-7.0.Unity.MultiRangeFilter

    constructor(config?: MultiRangeFilter.ConstructorProperties) 
    constructor(id: string, displayName: string, iconHint: Gio.Icon | null, collapsed: boolean) 
    static new(id: string, displayName: string, iconHint: Gio.Icon | null, collapsed: boolean): MultiRangeFilter

    // Overloads of new

    static new(): OptionsFilter
    _init(config?: MultiRangeFilter.ConstructorProperties): void
}

export module PreferencesManager {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.PreferencesManager

        remote_content_search?: PreferencesManagerRemoteContent | null
        always_search?: string[] | null
        home_lens_priority?: string[] | null
        home_lens_default_view?: string[] | null
        disabled_scopes?: string[] | null
    }

}

export interface PreferencesManager {

    // Own properties of Unity-7.0.Unity.PreferencesManager

    remoteContentSearch: PreferencesManagerRemoteContent
    alwaysSearch: string[]
    homeLensPriority: string[]
    homeLensDefaultView: string[]
    disabledScopes: string[]
    __gtype__: number

    // Owm methods of Unity-7.0.Unity.PreferencesManager

    getRemoteContentSearch(): PreferencesManagerRemoteContent
    setRemoteContentSearch(value: PreferencesManagerRemoteContent): void
    getAlwaysSearch(): string[]
    setAlwaysSearch(value: string[]): void
    getHomeLensPriority(): string[]
    setHomeLensPriority(value: string[]): void
    getHomeLensDefaultView(): string[]
    setHomeLensDefaultView(value: string[]): void
    getDisabledScopes(): string[]
    setDisabledScopes(value: string[]): void

    // Class property signals of Unity-7.0.Unity.PreferencesManager

    connect(sigName: "notify::remote-content-search", callback: (...args: any[]) => void): number
    on(sigName: "notify::remote-content-search", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::remote-content-search", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::remote-content-search", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::remote-content-search", ...args: any[]): void
    connect(sigName: "notify::always-search", callback: (...args: any[]) => void): number
    on(sigName: "notify::always-search", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::always-search", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::always-search", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::always-search", ...args: any[]): void
    connect(sigName: "notify::home-lens-priority", callback: (...args: any[]) => void): number
    on(sigName: "notify::home-lens-priority", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::home-lens-priority", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::home-lens-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::home-lens-priority", ...args: any[]): void
    connect(sigName: "notify::home-lens-default-view", callback: (...args: any[]) => void): number
    on(sigName: "notify::home-lens-default-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::home-lens-default-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::home-lens-default-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::home-lens-default-view", ...args: any[]): void
    connect(sigName: "notify::disabled-scopes", callback: (...args: any[]) => void): number
    on(sigName: "notify::disabled-scopes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::disabled-scopes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::disabled-scopes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::disabled-scopes", ...args: any[]): void
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

export class PreferencesManager extends GObject.Object {

    // Own properties of Unity-7.0.Unity.PreferencesManager

    static name: string

    // Constructors of Unity-7.0.Unity.PreferencesManager

    constructor(config?: PreferencesManager.ConstructorProperties) 
    _init(config?: PreferencesManager.ConstructorProperties): void
    static getDefault(): PreferencesManager
}

export module DeprecatedScopeSearch {

    // Signal callback interfaces

    /**
     * Signal callback interface for `finished`
     */
    export interface FinishedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends ScopeSearchBase.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.DeprecatedScopeSearch

        channel_id?: string | null
        hints?: GLib.HashTable | null
        results_model?: Dee.SerializableModel | null
        owner?: DeprecatedScopeBase | null
    }

}

export interface DeprecatedScopeSearch {

    // Own properties of Unity-7.0.Unity.DeprecatedScopeSearch

    readonly channelId: string | null
    readonly searchString: string | null
    readonly searchType: SearchType
    readonly hints: GLib.HashTable
    readonly resultsModel: Dee.SerializableModel
    readonly owner: DeprecatedScopeBase
    __gtype__: number

    // Owm methods of Unity-7.0.Unity.DeprecatedScopeSearch

    setReplyHint(key: string, variant: GLib.Variant): void
    getFilter(filterId: string): Filter | null
    equals(other: DeprecatedScopeSearch): boolean
    getChannelId(): string
    getSearchString(): string
    getSearchType(): SearchType
    getHints(): GLib.HashTable
    getResultsModel(): Dee.SerializableModel
    getOwner(): DeprecatedScopeBase

    // Own signals of Unity-7.0.Unity.DeprecatedScopeSearch

    connect(sigName: "finished", callback: DeprecatedScopeSearch.FinishedSignalCallback): number
    on(sigName: "finished", callback: DeprecatedScopeSearch.FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: DeprecatedScopeSearch.FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: DeprecatedScopeSearch.FinishedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "finished", ...args: any[]): void

    // Class property signals of Unity-7.0.Unity.DeprecatedScopeSearch

    connect(sigName: "notify::channel-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::channel-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel-id", ...args: any[]): void
    connect(sigName: "notify::search-string", callback: (...args: any[]) => void): number
    on(sigName: "notify::search-string", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::search-string", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::search-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::search-string", ...args: any[]): void
    connect(sigName: "notify::search-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::search-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::search-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::search-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::search-type", ...args: any[]): void
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
    connect(sigName: "notify::owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::owner", ...args: any[]): void
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

export class DeprecatedScopeSearch extends ScopeSearchBase {

    // Own properties of Unity-7.0.Unity.DeprecatedScopeSearch

    static name: string

    // Constructors of Unity-7.0.Unity.DeprecatedScopeSearch

    constructor(config?: DeprecatedScopeSearch.ConstructorProperties) 
    _init(config?: DeprecatedScopeSearch.ConstructorProperties): void
}

export module AggregatedScopeSearch {

    // Signal callback interfaces

    /**
     * Signal callback interface for `transaction-complete`
     */
    export interface TransactionCompleteSignalCallback {
        (originScopeId: string): void
    }

    /**
     * Signal callback interface for `category-order-changed`
     */
    export interface CategoryOrderChangedSignalCallback {
        (categoryIndices: number[]): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends DeprecatedScopeSearch.ConstructorProperties {
    }

}

export interface AggregatedScopeSearch {

    // Own properties of Unity-7.0.Unity.AggregatedScopeSearch

    __gtype__: number

    // Owm methods of Unity-7.0.Unity.AggregatedScopeSearch

    searchScope(scopeId: string, searchString: string, searchType: SearchType, hints?: GLib.HashTable | null, callback?: Gio.AsyncReadyCallback | null): void
    searchScopeFinish(res: Gio.AsyncResult): GLib.HashTable
    pushResults(scopeId: string, resultsModel: Dee.SerializableModel, categoryIds: string[], callback?: Gio.AsyncReadyCallback | null): void
    pushResultsFinish(res: Gio.AsyncResult): void
    pushFilterSettings(filters: FilterSet): void

    // Own signals of Unity-7.0.Unity.AggregatedScopeSearch

    connect(sigName: "transaction-complete", callback: AggregatedScopeSearch.TransactionCompleteSignalCallback): number
    on(sigName: "transaction-complete", callback: AggregatedScopeSearch.TransactionCompleteSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "transaction-complete", callback: AggregatedScopeSearch.TransactionCompleteSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "transaction-complete", callback: AggregatedScopeSearch.TransactionCompleteSignalCallback): NodeJS.EventEmitter
    emit(sigName: "transaction-complete", ...args: any[]): void
    connect(sigName: "category-order-changed", callback: AggregatedScopeSearch.CategoryOrderChangedSignalCallback): number
    on(sigName: "category-order-changed", callback: AggregatedScopeSearch.CategoryOrderChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "category-order-changed", callback: AggregatedScopeSearch.CategoryOrderChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "category-order-changed", callback: AggregatedScopeSearch.CategoryOrderChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "category-order-changed", ...args: any[]): void

    // Class property signals of Unity-7.0.Unity.AggregatedScopeSearch

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::channel-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::channel-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel-id", ...args: any[]): void
    connect(sigName: "notify::search-string", callback: (...args: any[]) => void): number
    on(sigName: "notify::search-string", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::search-string", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::search-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::search-string", ...args: any[]): void
    connect(sigName: "notify::search-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::search-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::search-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::search-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::search-type", ...args: any[]): void
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
    connect(sigName: "notify::owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class AggregatedScopeSearch extends DeprecatedScopeSearch {

    // Own properties of Unity-7.0.Unity.AggregatedScopeSearch

    static name: string

    // Constructors of Unity-7.0.Unity.AggregatedScopeSearch

    constructor(config?: AggregatedScopeSearch.ConstructorProperties) 
    constructor(owner: AggregatorScope, channelId: string, hints: GLib.HashTable, resultsModel: Dee.SerializableModel) 
    static new(owner: AggregatorScope, channelId: string, hints: GLib.HashTable, resultsModel: Dee.SerializableModel): AggregatedScopeSearch
    _init(config?: AggregatedScopeSearch.ConstructorProperties): void
}

export module Preview {

    // Constructor properties interface

    export interface ConstructorProperties extends Dee.Serializable.ConstructorProperties, AbstractPreview.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.Preview

        title?: string | null
        subtitle?: string | null
        description_markup?: string | null
        image_source_uri?: string | null
        image?: Gio.Icon | null
    }

}

export interface Preview extends Dee.Serializable {

    // Own properties of Unity-7.0.Unity.Preview

    title: string | null
    subtitle: string | null
    descriptionMarkup: string | null
    imageSourceUri: string | null
    image: Gio.Icon
    __gtype__: number

    // Owm methods of Unity-7.0.Unity.Preview

    addAction(action: PreviewAction): void
    addInfo(infoHint: InfoHint): void
    getTitle(): string
    setTitle(value: string): void
    getSubtitle(): string
    setSubtitle(value: string): void
    getDescriptionMarkup(): string
    setDescriptionMarkup(value: string): void
    getImageSourceUri(): string
    setImageSourceUri(value: string): void
    getImage(): Gio.Icon | null
    setImage(value?: Gio.Icon | null): void

    // Class property signals of Unity-7.0.Unity.Preview

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
    disconnect(id: number): void
}

export class Preview extends AbstractPreview {

    // Own properties of Unity-7.0.Unity.Preview

    static name: string

    // Constructors of Unity-7.0.Unity.Preview

    constructor(config?: Preview.ConstructorProperties) 
    _init(config?: Preview.ConstructorProperties): void
}

export module PreviewAction {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activated`
     */
    export interface ActivatedSignalCallback {
        (uri: string): ActivationResponse
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Dee.Serializable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.PreviewAction

        id?: string | null
        display_name?: string | null
        extra_text?: string | null
        icon_hint?: Gio.Icon | null
        layout_hint?: LayoutHint | null
    }

}

export interface PreviewAction extends Dee.Serializable {

    // Own properties of Unity-7.0.Unity.PreviewAction

    readonly id: string | null
    readonly displayName: string | null
    extraText: string | null
    readonly iconHint: Gio.Icon
    readonly layoutHint: LayoutHint
    readonly hints: GLib.HashTable
    __gtype__: number

    // Owm methods of Unity-7.0.Unity.PreviewAction

    getId(): string
    getDisplayName(): string
    getExtraText(): string
    setExtraText(value: string): void
    getIconHint(): Gio.Icon | null
    getLayoutHint(): LayoutHint
    getHints(): GLib.HashTable | null

    // Own signals of Unity-7.0.Unity.PreviewAction

    connect(sigName: "activated", callback: PreviewAction.ActivatedSignalCallback): number
    on(sigName: "activated", callback: PreviewAction.ActivatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activated", callback: PreviewAction.ActivatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activated", callback: PreviewAction.ActivatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "activated", ...args: any[]): void

    // Class property signals of Unity-7.0.Unity.PreviewAction

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
    disconnect(id: number): void
}

export class PreviewAction extends GObject.Object {

    // Own properties of Unity-7.0.Unity.PreviewAction

    static name: string

    // Constructors of Unity-7.0.Unity.PreviewAction

    constructor(config?: PreviewAction.ConstructorProperties) 
    constructor(id: string, displayName: string, iconHint?: Gio.Icon | null) 
    static new(id: string, displayName: string, iconHint?: Gio.Icon | null): PreviewAction
    static withLayoutHint(id: string, displayName: string, iconHint: Gio.Icon | null, layout: LayoutHint): PreviewAction
    static withUri(uri: string, displayName: string, iconHint?: Gio.Icon | null): PreviewAction
    _init(config?: PreviewAction.ConstructorProperties): void
}

export module InfoHint {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.InfoHint

        id?: string | null
        display_name?: string | null
        icon_hint?: Gio.Icon | null
        data?: GLib.Variant | null
    }

}

export interface InfoHint {

    // Own properties of Unity-7.0.Unity.InfoHint

    readonly id: string | null
    readonly displayName: string | null
    readonly iconHint: Gio.Icon
    readonly data: GLib.Variant
    __gtype__: number

    // Owm methods of Unity-7.0.Unity.InfoHint

    getId(): string
    getDisplayName(): string
    getIconHint(): Gio.Icon | null
    getData(): GLib.Variant

    // Overloads of getData

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    getData(key: string): any | null

    // Class property signals of Unity-7.0.Unity.InfoHint

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
    disconnect(id: number): void
}

export class InfoHint extends GObject.InitiallyUnowned {

    // Own properties of Unity-7.0.Unity.InfoHint

    static name: string

    // Constructors of Unity-7.0.Unity.InfoHint

    constructor(config?: InfoHint.ConstructorProperties) 
    constructor(id: string, displayName: string, iconHint: Gio.Icon | null, data: string) 
    static new(id: string, displayName: string, iconHint: Gio.Icon | null, data: string): InfoHint
    static withVariant(id: string, displayName: string, iconHint: Gio.Icon | null, data: GLib.Variant): InfoHint
    _init(config?: InfoHint.ConstructorProperties): void
}

export module GenericPreview {

    // Constructor properties interface

    export interface ConstructorProperties extends Preview.ConstructorProperties {
    }

}

export interface GenericPreview {

    // Own properties of Unity-7.0.Unity.GenericPreview

    __gtype__: number

    // Class property signals of Unity-7.0.Unity.GenericPreview

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
    disconnect(id: number): void
}

export class GenericPreview extends Preview {

    // Own properties of Unity-7.0.Unity.GenericPreview

    static name: string

    // Constructors of Unity-7.0.Unity.GenericPreview

    constructor(config?: GenericPreview.ConstructorProperties) 
    constructor(title: string, description: string, image?: Gio.Icon | null) 
    static new(title: string, description: string, image?: Gio.Icon | null): GenericPreview
    _init(config?: GenericPreview.ConstructorProperties): void
}

export module ApplicationPreview {

    // Constructor properties interface

    export interface ConstructorProperties extends Preview.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.ApplicationPreview

        app_icon?: Gio.Icon | null
        license?: string | null
        copyright?: string | null
        last_update?: string | null
    }

}

export interface ApplicationPreview {

    // Own properties of Unity-7.0.Unity.ApplicationPreview

    appIcon: Gio.Icon
    license: string | null
    copyright: string | null
    lastUpdate: string | null
    __gtype__: number

    // Owm methods of Unity-7.0.Unity.ApplicationPreview

    setRating(rating: number, numRatings: number): void
    getAppIcon(): Gio.Icon
    setAppIcon(value: Gio.Icon): void
    getLicense(): string
    setLicense(value: string): void
    getCopyright(): string
    setCopyright(value: string): void
    getLastUpdate(): string
    setLastUpdate(value: string): void

    // Class property signals of Unity-7.0.Unity.ApplicationPreview

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
    disconnect(id: number): void
}

export class ApplicationPreview extends Preview {

    // Own properties of Unity-7.0.Unity.ApplicationPreview

    static name: string

    // Constructors of Unity-7.0.Unity.ApplicationPreview

    constructor(config?: ApplicationPreview.ConstructorProperties) 
    constructor(title: string, subtitle: string, description: string, icon?: Gio.Icon | null, screenshot?: Gio.Icon | null) 
    static new(title: string, subtitle: string, description: string, icon?: Gio.Icon | null, screenshot?: Gio.Icon | null): ApplicationPreview
    _init(config?: ApplicationPreview.ConstructorProperties): void
}

export module MusicPreview {

    // Constructor properties interface

    export interface ConstructorProperties extends Preview.ConstructorProperties {
    }

}

export interface MusicPreview {

    // Own properties of Unity-7.0.Unity.MusicPreview

    __gtype__: number

    // Owm methods of Unity-7.0.Unity.MusicPreview

    addTrack(track: TrackMetadata): void

    // Class property signals of Unity-7.0.Unity.MusicPreview

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
    disconnect(id: number): void
}

export class MusicPreview extends Preview {

    // Own properties of Unity-7.0.Unity.MusicPreview

    static name: string

    // Constructors of Unity-7.0.Unity.MusicPreview

    constructor(config?: MusicPreview.ConstructorProperties) 
    constructor(title: string, subtitle: string, image?: Gio.Icon | null) 
    static new(title: string, subtitle: string, image?: Gio.Icon | null): MusicPreview
    _init(config?: MusicPreview.ConstructorProperties): void
}

export module PaymentPreview {

    // Constructor properties interface

    export interface ConstructorProperties extends Preview.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.PaymentPreview

        header?: string | null
        email?: string | null
        payment_method?: string | null
        purchase_prize?: string | null
        purchase_type?: string | null
        preview_type?: PaymentPreviewType | null
    }

}

export interface PaymentPreview {

    // Own properties of Unity-7.0.Unity.PaymentPreview

    header: string | null
    email: string | null
    paymentMethod: string | null
    purchasePrize: string | null
    purchaseType: string | null
    previewType: PaymentPreviewType
    __gtype__: number

    // Owm methods of Unity-7.0.Unity.PaymentPreview

    getHeader(): string
    setHeader(value: string): void
    getEmail(): string
    setEmail(value: string): void
    getPaymentMethod(): string
    setPaymentMethod(value: string): void
    getPurchasePrize(): string
    setPurchasePrize(value: string): void
    getPurchaseType(): string
    setPurchaseType(value: string): void
    getPreviewType(): PaymentPreviewType
    setPreviewType(value: PaymentPreviewType): void

    // Class property signals of Unity-7.0.Unity.PaymentPreview

    connect(sigName: "notify::header", callback: (...args: any[]) => void): number
    on(sigName: "notify::header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::header", ...args: any[]): void
    connect(sigName: "notify::email", callback: (...args: any[]) => void): number
    on(sigName: "notify::email", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::email", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::email", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::email", ...args: any[]): void
    connect(sigName: "notify::payment-method", callback: (...args: any[]) => void): number
    on(sigName: "notify::payment-method", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::payment-method", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::payment-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::payment-method", ...args: any[]): void
    connect(sigName: "notify::purchase-prize", callback: (...args: any[]) => void): number
    on(sigName: "notify::purchase-prize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::purchase-prize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::purchase-prize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::purchase-prize", ...args: any[]): void
    connect(sigName: "notify::purchase-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::purchase-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::purchase-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::purchase-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::purchase-type", ...args: any[]): void
    connect(sigName: "notify::preview-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::preview-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::preview-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::preview-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::preview-type", ...args: any[]): void
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
    disconnect(id: number): void
}

export class PaymentPreview extends Preview {

    // Own properties of Unity-7.0.Unity.PaymentPreview

    static name: string

    // Constructors of Unity-7.0.Unity.PaymentPreview

    constructor(config?: PaymentPreview.ConstructorProperties) 
    constructor(title: string, subtitle: string, image?: Gio.Icon | null) 
    static new(title: string, subtitle: string, image?: Gio.Icon | null): PaymentPreview
    static forType(title: string, subtitle: string, image: Gio.Icon | null, type: PaymentPreviewType): PaymentPreview
    static forApplication(title: string, subtitle: string, image?: Gio.Icon | null): PaymentPreview
    static forMusic(title: string, subtitle: string, image?: Gio.Icon | null): PaymentPreview
    static forError(title: string, subtitle: string, image?: Gio.Icon | null): PaymentPreview
    _init(config?: PaymentPreview.ConstructorProperties): void
}

export module MoviePreview {

    // Constructor properties interface

    export interface ConstructorProperties extends Preview.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.MoviePreview

        year?: string | null
    }

}

export interface MoviePreview {

    // Own properties of Unity-7.0.Unity.MoviePreview

    year: string | null
    __gtype__: number

    // Owm methods of Unity-7.0.Unity.MoviePreview

    setRating(rating: number, numRatings: number): void
    getYear(): string
    setYear(value: string): void

    // Class property signals of Unity-7.0.Unity.MoviePreview

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
    disconnect(id: number): void
}

export class MoviePreview extends Preview {

    // Own properties of Unity-7.0.Unity.MoviePreview

    static name: string

    // Constructors of Unity-7.0.Unity.MoviePreview

    constructor(config?: MoviePreview.ConstructorProperties) 
    constructor(title: string, subtitle: string, description: string, image?: Gio.Icon | null) 
    static new(title: string, subtitle: string, description: string, image?: Gio.Icon | null): MoviePreview
    _init(config?: MoviePreview.ConstructorProperties): void
}

export module SocialPreview {

    // Constructor properties interface

    export interface ConstructorProperties extends Preview.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.SocialPreview

        avatar?: Gio.Icon | null
        content?: string | null
        sender?: string | null
    }

}

export interface SocialPreview {

    // Own properties of Unity-7.0.Unity.SocialPreview

    avatar: Gio.Icon
    content: string | null
    sender: string | null
    __gtype__: number

    // Owm methods of Unity-7.0.Unity.SocialPreview

    addComment(comment: SocialPreviewComment): void
    getAvatar(): Gio.Icon
    setAvatar(value: Gio.Icon): void
    getContent(): string
    setContent(value: string): void
    getSender(): string
    setSender(value: string): void

    // Class property signals of Unity-7.0.Unity.SocialPreview

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
    disconnect(id: number): void
}

export class SocialPreview extends Preview {

    // Own properties of Unity-7.0.Unity.SocialPreview

    static name: string

    // Constructors of Unity-7.0.Unity.SocialPreview

    constructor(config?: SocialPreview.ConstructorProperties) 
    constructor(sender: string, subtitle: string, content: string, avatar?: Gio.Icon | null) 
    static new(sender: string, subtitle: string, content: string, avatar?: Gio.Icon | null): SocialPreview
    _init(config?: SocialPreview.ConstructorProperties): void
}

export module SocialPreviewComment {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.SocialPreviewComment

        id?: string | null
        name?: string | null
        text?: string | null
        time?: string | null
    }

}

export interface SocialPreviewComment {

    // Own properties of Unity-7.0.Unity.SocialPreviewComment

    readonly id: string | null
    readonly name: string | null
    readonly text: string | null
    readonly time: string | null
    __gtype__: number

    // Owm methods of Unity-7.0.Unity.SocialPreviewComment

    getId(): string
    getName(): string
    getText(): string
    getTime(): string

    // Class property signals of Unity-7.0.Unity.SocialPreviewComment

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
    disconnect(id: number): void
}

export class SocialPreviewComment extends GObject.InitiallyUnowned {

    // Own properties of Unity-7.0.Unity.SocialPreviewComment

    static name: string

    // Constructors of Unity-7.0.Unity.SocialPreviewComment

    constructor(config?: SocialPreviewComment.ConstructorProperties) 
    constructor(id: string, name: string, text: string, time: string) 
    static new(id: string, name: string, text: string, time: string): SocialPreviewComment
    _init(config?: SocialPreviewComment.ConstructorProperties): void
}

export module ActivationResponse {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.ActivationResponse

        handled?: HandledType | null
        goto_uri?: string | null
    }

}

export interface ActivationResponse {

    // Own properties of Unity-7.0.Unity.ActivationResponse

    readonly handled: HandledType
    gotoUri: string | null
    __gtype__: number

    // Owm methods of Unity-7.0.Unity.ActivationResponse

    getHandled(): HandledType
    getGotoUri(): string
    setGotoUri(value: string): void

    // Class property signals of Unity-7.0.Unity.ActivationResponse

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
    disconnect(id: number): void
}

export class ActivationResponse extends GObject.Object {

    // Own properties of Unity-7.0.Unity.ActivationResponse

    static name: string

    // Constructors of Unity-7.0.Unity.ActivationResponse

    constructor(config?: ActivationResponse.ConstructorProperties) 
    constructor(handled: HandledType, gotoUri: string) 
    static new(handled: HandledType, gotoUri: string): ActivationResponse
    static withSearch(searchString: string, filterSet?: FilterSet | null, searchMetadata?: SearchMetadata | null): ActivationResponse
    static withPreview(preview: Preview): ActivationResponse
    _init(config?: ActivationResponse.ConstructorProperties): void
}

export module AggregatorActivation {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.AggregatorActivation

        channel_id?: string | null
        scope_id?: string | null
        action_type?: number | null
        scope_result?: ScopeResult | null
        hints?: GLib.HashTable | null
    }

}

export interface AggregatorActivation {

    // Own properties of Unity-7.0.Unity.AggregatorActivation

    channelId: string | null
    scopeId: string | null
    actionType: number
    scopeResult: ScopeResult
    hints: GLib.HashTable
    __gtype__: number

    // Owm methods of Unity-7.0.Unity.AggregatorActivation

    getChannelId(): string
    setChannelId(value: string): void
    getScopeId(): string
    setScopeId(value: string): void
    getActionType(): number
    setActionType(value: number): void
    getScopeResult(): ScopeResult | null
    setScopeResult(value?: ScopeResult | null): void
    getHints(): GLib.HashTable

    // Class property signals of Unity-7.0.Unity.AggregatorActivation

    connect(sigName: "notify::channel-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::channel-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel-id", ...args: any[]): void
    connect(sigName: "notify::scope-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::scope-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scope-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scope-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scope-id", ...args: any[]): void
    connect(sigName: "notify::action-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::action-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::action-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::action-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::action-type", ...args: any[]): void
    connect(sigName: "notify::scope-result", callback: (...args: any[]) => void): number
    on(sigName: "notify::scope-result", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scope-result", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scope-result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scope-result", ...args: any[]): void
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
    disconnect(id: number): void
}

export class AggregatorActivation extends GObject.Object {

    // Own properties of Unity-7.0.Unity.AggregatorActivation

    static name: string

    // Constructors of Unity-7.0.Unity.AggregatorActivation

    constructor(config?: AggregatorActivation.ConstructorProperties) 
    constructor(channelId: string, scopeId: string, actionType: number, result?: ScopeResult | null) 
    static new(channelId: string, scopeId: string, actionType: number, result?: ScopeResult | null): AggregatorActivation
    _init(config?: AggregatorActivation.ConstructorProperties): void
}

export module FilterSet {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface FilterSet {

    // Own properties of Unity-7.0.Unity.FilterSet

    __gtype__: number

    // Owm methods of Unity-7.0.Unity.FilterSet

    // Has conflict: add(filter: Filter): void
    // Has conflict: getFilterById(filterId: string): Filter | null
    // Has conflict: getFilters(): Filter[]

    // Own virtual methods of Unity-7.0.Unity.FilterSet

    add(filter: Filter): void
    getFilterById(filterId: string): Filter | null
    getFilters(): Filter[]

    // Class property signals of Unity-7.0.Unity.FilterSet

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

export class FilterSet extends GObject.Object {

    // Own properties of Unity-7.0.Unity.FilterSet

    static name: string

    // Constructors of Unity-7.0.Unity.FilterSet

    constructor(config?: FilterSet.ConstructorProperties) 
    constructor() 
    static new(): FilterSet
    _init(config?: FilterSet.ConstructorProperties): void
}

export module CategorySet {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface CategorySet {

    // Own properties of Unity-7.0.Unity.CategorySet

    __gtype__: number

    // Owm methods of Unity-7.0.Unity.CategorySet

    // Has conflict: add(category: Category): void
    // Has conflict: getCategories(): Category[]

    // Own virtual methods of Unity-7.0.Unity.CategorySet

    add(category: Category): void
    getCategories(): Category[]

    // Class property signals of Unity-7.0.Unity.CategorySet

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

export class CategorySet extends GObject.Object {

    // Own properties of Unity-7.0.Unity.CategorySet

    static name: string

    // Constructors of Unity-7.0.Unity.CategorySet

    constructor(config?: CategorySet.ConstructorProperties) 
    constructor() 
    static new(): CategorySet
    _init(config?: CategorySet.ConstructorProperties): void
}

export module Schema {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Schema {

    // Own properties of Unity-7.0.Unity.Schema

    __gtype__: number

    // Owm methods of Unity-7.0.Unity.Schema

    // Has conflict: addField(name: string, schema: string, type: SchemaFieldType): void
    // Has conflict: getFields(): SchemaFieldInfo[]

    // Own virtual methods of Unity-7.0.Unity.Schema

    addField(name: string, schema: string, type: SchemaFieldType): void
    getFields(): SchemaFieldInfo[]

    // Class property signals of Unity-7.0.Unity.Schema

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

export class Schema extends GObject.Object {

    // Own properties of Unity-7.0.Unity.Schema

    static name: string

    // Constructors of Unity-7.0.Unity.Schema

    constructor(config?: Schema.ConstructorProperties) 
    constructor() 
    static new(): Schema
    _init(config?: Schema.ConstructorProperties): void
}

export module Cancellable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Cancellable {

    // Own properties of Unity-7.0.Unity.Cancellable

    __gtype__: number

    // Owm methods of Unity-7.0.Unity.Cancellable

    // Has conflict: cancel(): void
    // Has conflict: isCancelled(): boolean
    // Has conflict: getGcancellable(): Gio.Cancellable | null

    // Own virtual methods of Unity-7.0.Unity.Cancellable

    cancel(): void
    isCancelled(): boolean
    getGcancellable(): Gio.Cancellable | null

    // Class property signals of Unity-7.0.Unity.Cancellable

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

export class Cancellable extends GObject.Object {

    // Own properties of Unity-7.0.Unity.Cancellable

    static name: string

    // Constructors of Unity-7.0.Unity.Cancellable

    constructor(config?: Cancellable.ConstructorProperties) 
    _init(config?: Cancellable.ConstructorProperties): void
    static create(): Cancellable
}

export module ScopeSearchBase {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ScopeSearchBase {

    // Own properties of Unity-7.0.Unity.ScopeSearchBase

    __gtype__: number

    // Own fields of Unity-7.0.Unity.ScopeSearchBase

    searchContext?: SearchContext | null

    // Owm methods of Unity-7.0.Unity.ScopeSearchBase

    // Has conflict: run(): void
    // Has conflict: runAsync(asyncCallback: ScopeSearchBaseCallback): void
    // Has conflict: setSearchContext(ctx: SearchContext): void

    // Own virtual methods of Unity-7.0.Unity.ScopeSearchBase

    run(): void
    runAsync(asyncCallback: ScopeSearchBaseCallback): void
    setSearchContext(ctx: SearchContext): void

    // Class property signals of Unity-7.0.Unity.ScopeSearchBase

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

export class ScopeSearchBase extends GObject.Object {

    // Own properties of Unity-7.0.Unity.ScopeSearchBase

    static name: string

    // Constructors of Unity-7.0.Unity.ScopeSearchBase

    constructor(config?: ScopeSearchBase.ConstructorProperties) 
    _init(config?: ScopeSearchBase.ConstructorProperties): void
}

export module ResultSet {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ResultSet {

    // Own properties of Unity-7.0.Unity.ResultSet

    __gtype__: number

    // Own fields of Unity-7.0.Unity.ResultSet

    ttl: number

    // Owm methods of Unity-7.0.Unity.ResultSet

    // Has conflict: addResult(result: ScopeResult): void
    // Has conflict: addResultFromVariant(variant: GLib.Variant): void
    // Has conflict: flush(): void

    // Own virtual methods of Unity-7.0.Unity.ResultSet

    addResult(result: ScopeResult): void
    addResultFromVariant(variant: GLib.Variant): void
    flush(): void

    // Class property signals of Unity-7.0.Unity.ResultSet

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

export class ResultSet extends GObject.Object {

    // Own properties of Unity-7.0.Unity.ResultSet

    static name: string

    // Constructors of Unity-7.0.Unity.ResultSet

    constructor(config?: ResultSet.ConstructorProperties) 
    _init(config?: ResultSet.ConstructorProperties): void
}

export module AbstractPreview {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface AbstractPreview {

    // Own properties of Unity-7.0.Unity.AbstractPreview

    __gtype__: number

    // Owm methods of Unity-7.0.Unity.AbstractPreview

    // Has conflict: serializeAs(serializationType: SerializationType): number[]

    // Own virtual methods of Unity-7.0.Unity.AbstractPreview

    serializeAs(serializationType: SerializationType): number[]

    // Class property signals of Unity-7.0.Unity.AbstractPreview

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

export class AbstractPreview extends GObject.Object {

    // Own properties of Unity-7.0.Unity.AbstractPreview

    static name: string

    // Constructors of Unity-7.0.Unity.AbstractPreview

    constructor(config?: AbstractPreview.ConstructorProperties) 
    _init(config?: AbstractPreview.ConstructorProperties): void
}

export module ResultPreviewer {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ResultPreviewer {

    // Own properties of Unity-7.0.Unity.ResultPreviewer

    __gtype__: number

    // Own fields of Unity-7.0.Unity.ResultPreviewer

    result: ScopeResult
    metadata: SearchMetadata
    cancellable: Cancellable

    // Owm methods of Unity-7.0.Unity.ResultPreviewer

    // Has conflict: run(): AbstractPreview | null
    // Has conflict: runAsync(asyncCallback: AbstractPreviewCallback): void
    setScopeResult(scopeResult: ScopeResult): void
    setSearchMetadata(searchMetadata: SearchMetadata): void

    // Own virtual methods of Unity-7.0.Unity.ResultPreviewer

    run(): AbstractPreview | null
    runAsync(asyncCallback: AbstractPreviewCallback): void

    // Class property signals of Unity-7.0.Unity.ResultPreviewer

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

export class ResultPreviewer extends GObject.Object {

    // Own properties of Unity-7.0.Unity.ResultPreviewer

    static name: string

    // Constructors of Unity-7.0.Unity.ResultPreviewer

    constructor(config?: ResultPreviewer.ConstructorProperties) 
    _init(config?: ResultPreviewer.ConstructorProperties): void
}

export module SearchMetadata {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface SearchMetadata {

    // Own properties of Unity-7.0.Unity.SearchMetadata

    readonly locale: string | null
    readonly formFactor: string | null
    readonly location: GeoCoordinate
    __gtype__: number

    // Owm methods of Unity-7.0.Unity.SearchMetadata

    getLocale(): string | null
    getFormFactor(): string | null
    getLocation(): GeoCoordinate | null

    // Class property signals of Unity-7.0.Unity.SearchMetadata

    connect(sigName: "notify::locale", callback: (...args: any[]) => void): number
    on(sigName: "notify::locale", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::locale", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::locale", ...args: any[]): void
    connect(sigName: "notify::form-factor", callback: (...args: any[]) => void): number
    on(sigName: "notify::form-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::form-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::form-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::form-factor", ...args: any[]): void
    connect(sigName: "notify::location", callback: (...args: any[]) => void): number
    on(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::location", ...args: any[]): void
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

export class SearchMetadata extends GObject.Object {

    // Own properties of Unity-7.0.Unity.SearchMetadata

    static name: string

    // Constructors of Unity-7.0.Unity.SearchMetadata

    constructor(config?: SearchMetadata.ConstructorProperties) 
    constructor() 
    static new(): SearchMetadata
    _init(config?: SearchMetadata.ConstructorProperties): void
    static create(metadata?: GLib.HashTable | null): SearchMetadata
    static createFromVariant(metadata: GLib.Variant): SearchMetadata
}

export module GeoCoordinate {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface GeoCoordinate {

    // Own properties of Unity-7.0.Unity.GeoCoordinate

    __gtype__: number

    // Own fields of Unity-7.0.Unity.GeoCoordinate

    latitude: number
    longitude: number
    altitude: number

    // Owm methods of Unity-7.0.Unity.GeoCoordinate

    hasValidAltitude(): boolean

    // Class property signals of Unity-7.0.Unity.GeoCoordinate

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

export class GeoCoordinate extends GObject.Object {

    // Own properties of Unity-7.0.Unity.GeoCoordinate

    static name: string

    // Constructors of Unity-7.0.Unity.GeoCoordinate

    constructor(config?: GeoCoordinate.ConstructorProperties) 
    constructor(latitude: number, longitude: number) 
    static new(latitude: number, longitude: number): GeoCoordinate
    static withAltitude(latitude: number, longitude: number, altitude: number): GeoCoordinate
    _init(config?: GeoCoordinate.ConstructorProperties): void
}

export module AbstractScope {

    // Signal callback interfaces

    /**
     * Signal callback interface for `results-invalidated-internal`
     */
    export interface ResultsInvalidatedInternalSignalCallback {
        (searchType: SearchType): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface AbstractScope {

    // Own properties of Unity-7.0.Unity.AbstractScope

    __gtype__: number

    // Owm methods of Unity-7.0.Unity.AbstractScope

    // Has conflict: createSearchForQuery(searchContext: SearchContext): ScopeSearchBase
    // Has conflict: createPreviewer(result: ScopeResult, metadata: SearchMetadata): ResultPreviewer
    // Has conflict: getCategories(): CategorySet
    // Has conflict: getFilters(): FilterSet
    // Has conflict: getSchema(): Schema
    // Has conflict: getSearchHint(): string | null
    // Has conflict: getGroupName(): string | null
    // Has conflict: getUniqueName(): string | null
    // Has conflict: activate(result: ScopeResult, metadata: SearchMetadata, actionId?: string | null): ActivationResponse | null
    // Has conflict: normalizeSearchQuery(searchQuery: string): string | null
    resultsInvalidated(searchType: SearchType): void

    // Own virtual methods of Unity-7.0.Unity.AbstractScope

    createSearchForQuery(searchContext: SearchContext): ScopeSearchBase
    createPreviewer(result: ScopeResult, metadata: SearchMetadata): ResultPreviewer
    getCategories(): CategorySet
    getFilters(): FilterSet
    getSchema(): Schema
    getSearchHint(): string | null
    getGroupName(): string | null
    getUniqueName(): string | null
    activate(result: ScopeResult, metadata: SearchMetadata, actionId?: string | null): ActivationResponse | null
    normalizeSearchQuery(searchQuery: string): string | null

    // Own signals of Unity-7.0.Unity.AbstractScope

    connect(sigName: "results-invalidated-internal", callback: AbstractScope.ResultsInvalidatedInternalSignalCallback): number
    on(sigName: "results-invalidated-internal", callback: AbstractScope.ResultsInvalidatedInternalSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "results-invalidated-internal", callback: AbstractScope.ResultsInvalidatedInternalSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "results-invalidated-internal", callback: AbstractScope.ResultsInvalidatedInternalSignalCallback): NodeJS.EventEmitter
    emit(sigName: "results-invalidated-internal", ...args: any[]): void

    // Class property signals of Unity-7.0.Unity.AbstractScope

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

export class AbstractScope extends GObject.Object {

    // Own properties of Unity-7.0.Unity.AbstractScope

    static name: string

    // Constructors of Unity-7.0.Unity.AbstractScope

    constructor(config?: AbstractScope.ConstructorProperties) 
    _init(config?: AbstractScope.ConstructorProperties): void
}

export module ScopeDBusConnector {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.ScopeDBusConnector

        scope?: AbstractScope | null
    }

}

export interface ScopeDBusConnector {

    // Own properties of Unity-7.0.Unity.ScopeDBusConnector

    readonly scope: AbstractScope
    __gtype__: number

    // Owm methods of Unity-7.0.Unity.ScopeDBusConnector

    export(): void
    unexport(): void
    getScope(): AbstractScope

    // Class property signals of Unity-7.0.Unity.ScopeDBusConnector

    connect(sigName: "notify::scope", callback: (...args: any[]) => void): number
    on(sigName: "notify::scope", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scope", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scope", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scope", ...args: any[]): void
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

export class ScopeDBusConnector extends GObject.Object {

    // Own properties of Unity-7.0.Unity.ScopeDBusConnector

    static name: string

    // Constructors of Unity-7.0.Unity.ScopeDBusConnector

    constructor(config?: ScopeDBusConnector.ConstructorProperties) 
    constructor(scope: AbstractScope) 
    static new(scope: AbstractScope): ScopeDBusConnector
    _init(config?: ScopeDBusConnector.ConstructorProperties): void
    static run(): void
    static quit(): void
}

export module DeprecatedScopeBase {

    // Signal callback interfaces

    /**
     * Signal callback interface for `active-sources-changed`
     */
    export interface ActiveSourcesChangedSignalCallback {
        (activeIds: string[]): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.DeprecatedScopeBase

        id?: string | null
        dbus_path?: string | null
        search_in_global?: boolean | null
        visible?: boolean | null
        is_master?: boolean | null
        search_hint?: string | null
        sources?: OptionsFilter | null
        categories?: CategorySet | null
        filters?: FilterSet | null
        schema?: Schema | null
    }

}

export interface DeprecatedScopeBase {

    // Own properties of Unity-7.0.Unity.DeprecatedScopeBase

    readonly id: string | null
    readonly dbusPath: string | null
    searchInGlobal: boolean
    visible: boolean
    readonly isMaster: boolean
    searchHint: string | null
    sources: OptionsFilter
    categories: CategorySet
    filters: FilterSet
    schema: Schema
    __gtype__: number

    // Owm methods of Unity-7.0.Unity.DeprecatedScopeBase

    export(): void
    unexport(): void
    getId(): string
    getDbusPath(): string
    getSearchInGlobal(): boolean
    setSearchInGlobal(value: boolean): void
    getVisible(): boolean
    setVisible(value: boolean): void
    getIsMaster(): boolean
    getSearchHint(): string
    setSearchHint(value: string): void
    getSources(): OptionsFilter
    getCategories(): CategorySet
    setCategories(value: CategorySet): void
    getFilters(): FilterSet
    setFilters(value: FilterSet): void
    getSchema(): Schema
    setSchema(value: Schema): void

    // Own signals of Unity-7.0.Unity.DeprecatedScopeBase

    connect(sigName: "active-sources-changed", callback: DeprecatedScopeBase.ActiveSourcesChangedSignalCallback): number
    on(sigName: "active-sources-changed", callback: DeprecatedScopeBase.ActiveSourcesChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-sources-changed", callback: DeprecatedScopeBase.ActiveSourcesChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-sources-changed", callback: DeprecatedScopeBase.ActiveSourcesChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "active-sources-changed", ...args: any[]): void

    // Class property signals of Unity-7.0.Unity.DeprecatedScopeBase

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
    connect(sigName: "notify::search-in-global", callback: (...args: any[]) => void): number
    on(sigName: "notify::search-in-global", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::search-in-global", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::search-in-global", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::search-in-global", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::is-master", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-master", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-master", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-master", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-master", ...args: any[]): void
    connect(sigName: "notify::search-hint", callback: (...args: any[]) => void): number
    on(sigName: "notify::search-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::search-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::search-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::search-hint", ...args: any[]): void
    connect(sigName: "notify::sources", callback: (...args: any[]) => void): number
    on(sigName: "notify::sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sources", ...args: any[]): void
    connect(sigName: "notify::categories", callback: (...args: any[]) => void): number
    on(sigName: "notify::categories", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::categories", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::categories", ...args: any[]): void
    connect(sigName: "notify::filters", callback: (...args: any[]) => void): number
    on(sigName: "notify::filters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filters", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
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

export class DeprecatedScopeBase extends GObject.Object {

    // Own properties of Unity-7.0.Unity.DeprecatedScopeBase

    static name: string

    // Constructors of Unity-7.0.Unity.DeprecatedScopeBase

    constructor(config?: DeprecatedScopeBase.ConstructorProperties) 
    _init(config?: DeprecatedScopeBase.ConstructorProperties): void
}

export module DeprecatedScope {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activate-uri`
     */
    export interface ActivateUriSignalCallback {
        (uri: string): ActivationResponse | null
    }

    /**
     * Signal callback interface for `preview-uri`
     */
    export interface PreviewUriSignalCallback {
        (uri: string): Preview | null
    }

    /**
     * Signal callback interface for `generate-search-key`
     */
    export interface GenerateSearchKeySignalCallback {
        (search: DeprecatedScopeSearch): string | null
    }

    /**
     * Signal callback interface for `search-changed`
     */
    export interface SearchChangedSignalCallback {
        (search: DeprecatedScopeSearch, searchType: SearchType, cancellable: Gio.Cancellable): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends DeprecatedScopeBase.ConstructorProperties {
    }

}

export interface DeprecatedScope {

    // Own properties of Unity-7.0.Unity.DeprecatedScope

    __gtype__: number

    // Owm methods of Unity-7.0.Unity.DeprecatedScope

    // Has conflict: previewResult(result: ScopeResult, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: previewResultFinish(res: Gio.AsyncResult): Preview | null
    // Has conflict: activateResult(result: ScopeResult, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: activateResultFinish(res: Gio.AsyncResult): ActivationResponse | null
    queueSearchChanged(searchType: SearchType): void

    // Own virtual methods of Unity-7.0.Unity.DeprecatedScope

    previewResult(result: ScopeResult, callback?: Gio.AsyncReadyCallback | null): void
    previewResultFinish(res: Gio.AsyncResult): Preview | null
    activateResult(result: ScopeResult, callback?: Gio.AsyncReadyCallback | null): void
    activateResultFinish(res: Gio.AsyncResult): ActivationResponse | null

    // Own signals of Unity-7.0.Unity.DeprecatedScope

    connect(sigName: "activate-uri", callback: DeprecatedScope.ActivateUriSignalCallback): number
    on(sigName: "activate-uri", callback: DeprecatedScope.ActivateUriSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate-uri", callback: DeprecatedScope.ActivateUriSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate-uri", callback: DeprecatedScope.ActivateUriSignalCallback): NodeJS.EventEmitter
    emit(sigName: "activate-uri", ...args: any[]): void
    connect(sigName: "preview-uri", callback: DeprecatedScope.PreviewUriSignalCallback): number
    on(sigName: "preview-uri", callback: DeprecatedScope.PreviewUriSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "preview-uri", callback: DeprecatedScope.PreviewUriSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "preview-uri", callback: DeprecatedScope.PreviewUriSignalCallback): NodeJS.EventEmitter
    emit(sigName: "preview-uri", ...args: any[]): void
    connect(sigName: "generate-search-key", callback: DeprecatedScope.GenerateSearchKeySignalCallback): number
    on(sigName: "generate-search-key", callback: DeprecatedScope.GenerateSearchKeySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "generate-search-key", callback: DeprecatedScope.GenerateSearchKeySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "generate-search-key", callback: DeprecatedScope.GenerateSearchKeySignalCallback): NodeJS.EventEmitter
    emit(sigName: "generate-search-key", ...args: any[]): void
    connect(sigName: "search-changed", callback: DeprecatedScope.SearchChangedSignalCallback): number
    on(sigName: "search-changed", callback: DeprecatedScope.SearchChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "search-changed", callback: DeprecatedScope.SearchChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "search-changed", callback: DeprecatedScope.SearchChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "search-changed", searchType: SearchType, cancellable: Gio.Cancellable, ...args: any[]): void

    // Class property signals of Unity-7.0.Unity.DeprecatedScope

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
    connect(sigName: "notify::dbus-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dbus-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dbus-path", ...args: any[]): void
    connect(sigName: "notify::search-in-global", callback: (...args: any[]) => void): number
    on(sigName: "notify::search-in-global", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::search-in-global", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::search-in-global", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::search-in-global", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::is-master", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-master", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-master", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-master", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-master", ...args: any[]): void
    connect(sigName: "notify::search-hint", callback: (...args: any[]) => void): number
    on(sigName: "notify::search-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::search-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::search-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::search-hint", ...args: any[]): void
    connect(sigName: "notify::sources", callback: (...args: any[]) => void): number
    on(sigName: "notify::sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sources", ...args: any[]): void
    connect(sigName: "notify::categories", callback: (...args: any[]) => void): number
    on(sigName: "notify::categories", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::categories", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::categories", ...args: any[]): void
    connect(sigName: "notify::filters", callback: (...args: any[]) => void): number
    on(sigName: "notify::filters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filters", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DeprecatedScope extends DeprecatedScopeBase {

    // Own properties of Unity-7.0.Unity.DeprecatedScope

    static name: string

    // Constructors of Unity-7.0.Unity.DeprecatedScope

    constructor(config?: DeprecatedScope.ConstructorProperties) 
    constructor(dbusPath: string, id: string) 
    static new(dbusPath: string, id: string): DeprecatedScope
    _init(config?: DeprecatedScope.ConstructorProperties): void
}

export module AggregatorScope {

    // Constructor properties interface

    export interface ConstructorProperties extends DeprecatedScopeBase.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.AggregatorScope

        merge_mode?: AggregatorScopeMergeMode | null
        proxy_filter_hints?: boolean | null
        automatic_flushing?: boolean | null
    }

}

export interface AggregatorScope {

    // Own properties of Unity-7.0.Unity.AggregatorScope

    mergeMode: AggregatorScopeMergeMode
    proxyFilterHints: boolean
    automaticFlushing: boolean
    __gtype__: number

    // Owm methods of Unity-7.0.Unity.AggregatorScope

    // Has conflict: categoryIndexForScopeId(scopeId: string): number
    addSorter(categoryIndex: number, field: string, flags: AggregatorScopeSortFlags): void
    addConstraint(categoryIndex: number, field: string): void
    // Has conflict: search(scopeSearch: AggregatedScopeSearch, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: searchFinish(res: Gio.AsyncResult): void
    // Has conflict: activate(activation: AggregatorActivation, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: activateFinish(res: Gio.AsyncResult): ActivationResponse | null
    getMergeMode(): AggregatorScopeMergeMode
    setMergeMode(value: AggregatorScopeMergeMode): void
    getProxyFilterHints(): boolean
    setProxyFilterHints(value: boolean): void
    getAutomaticFlushing(): boolean
    setAutomaticFlushing(value: boolean): void

    // Own virtual methods of Unity-7.0.Unity.AggregatorScope

    categoryIndexForScopeId(scopeId: string): number
    search(scopeSearch: AggregatedScopeSearch, callback?: Gio.AsyncReadyCallback | null): void
    searchFinish(res: Gio.AsyncResult): void
    activate(activation: AggregatorActivation, callback?: Gio.AsyncReadyCallback | null): void
    activateFinish(res: Gio.AsyncResult): ActivationResponse | null

    // Class property signals of Unity-7.0.Unity.AggregatorScope

    connect(sigName: "notify::merge-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::merge-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::merge-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::merge-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::merge-mode", ...args: any[]): void
    connect(sigName: "notify::proxy-filter-hints", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy-filter-hints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-filter-hints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-filter-hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-filter-hints", ...args: any[]): void
    connect(sigName: "notify::automatic-flushing", callback: (...args: any[]) => void): number
    on(sigName: "notify::automatic-flushing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::automatic-flushing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::automatic-flushing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::automatic-flushing", ...args: any[]): void
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
    connect(sigName: "notify::dbus-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dbus-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dbus-path", ...args: any[]): void
    connect(sigName: "notify::search-in-global", callback: (...args: any[]) => void): number
    on(sigName: "notify::search-in-global", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::search-in-global", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::search-in-global", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::search-in-global", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::is-master", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-master", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-master", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-master", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-master", ...args: any[]): void
    connect(sigName: "notify::search-hint", callback: (...args: any[]) => void): number
    on(sigName: "notify::search-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::search-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::search-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::search-hint", ...args: any[]): void
    connect(sigName: "notify::sources", callback: (...args: any[]) => void): number
    on(sigName: "notify::sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sources", ...args: any[]): void
    connect(sigName: "notify::categories", callback: (...args: any[]) => void): number
    on(sigName: "notify::categories", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::categories", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::categories", ...args: any[]): void
    connect(sigName: "notify::filters", callback: (...args: any[]) => void): number
    on(sigName: "notify::filters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filters", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class AggregatorScope extends DeprecatedScopeBase {

    // Own properties of Unity-7.0.Unity.AggregatorScope

    static name: string

    // Constructors of Unity-7.0.Unity.AggregatorScope

    constructor(config?: AggregatorScope.ConstructorProperties) 
    _init(config?: AggregatorScope.ConstructorProperties): void
}

export module MasterScope {

    // Constructor properties interface

    export interface ConstructorProperties extends AggregatorScope.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.MasterScope

        no_content_hint?: string | null
    }

}

export interface MasterScope {

    // Own properties of Unity-7.0.Unity.MasterScope

    noContentHint: string | null
    __gtype__: number

    // Owm methods of Unity-7.0.Unity.MasterScope

    getNoContentHint(): string
    setNoContentHint(value: string): void

    // Class property signals of Unity-7.0.Unity.MasterScope

    connect(sigName: "notify::no-content-hint", callback: (...args: any[]) => void): number
    on(sigName: "notify::no-content-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::no-content-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::no-content-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::no-content-hint", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::merge-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::merge-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::merge-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::merge-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::merge-mode", ...args: any[]): void
    connect(sigName: "notify::proxy-filter-hints", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy-filter-hints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-filter-hints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-filter-hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-filter-hints", ...args: any[]): void
    connect(sigName: "notify::automatic-flushing", callback: (...args: any[]) => void): number
    on(sigName: "notify::automatic-flushing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::automatic-flushing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::automatic-flushing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::automatic-flushing", ...args: any[]): void
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
    connect(sigName: "notify::search-in-global", callback: (...args: any[]) => void): number
    on(sigName: "notify::search-in-global", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::search-in-global", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::search-in-global", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::search-in-global", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::is-master", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-master", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-master", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-master", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-master", ...args: any[]): void
    connect(sigName: "notify::search-hint", callback: (...args: any[]) => void): number
    on(sigName: "notify::search-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::search-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::search-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::search-hint", ...args: any[]): void
    connect(sigName: "notify::sources", callback: (...args: any[]) => void): number
    on(sigName: "notify::sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sources", ...args: any[]): void
    connect(sigName: "notify::categories", callback: (...args: any[]) => void): number
    on(sigName: "notify::categories", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::categories", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::categories", ...args: any[]): void
    connect(sigName: "notify::filters", callback: (...args: any[]) => void): number
    on(sigName: "notify::filters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filters", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MasterScope extends AggregatorScope {

    // Own properties of Unity-7.0.Unity.MasterScope

    static name: string

    // Constructors of Unity-7.0.Unity.MasterScope

    constructor(config?: MasterScope.ConstructorProperties) 
    constructor(dbusPath: string, id: string) 
    static new(dbusPath: string, id: string): MasterScope
    _init(config?: MasterScope.ConstructorProperties): void
}

export module SimpleScope {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractScope.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.SimpleScope

        filter_set?: FilterSet | null
        category_set?: CategorySet | null
        schema?: Schema | null
        search_hint?: string | null
        group_name?: string | null
        unique_name?: string | null
    }

}

export interface SimpleScope {

    // Own properties of Unity-7.0.Unity.SimpleScope

    filterSet: FilterSet
    categorySet: CategorySet
    schema: Schema
    searchHint: string | null
    groupName: string | null
    uniqueName: string | null
    __gtype__: number

    // Owm methods of Unity-7.0.Unity.SimpleScope

    setSearchFunc(func: any): void
    setSearchAsyncFunc(func: any | null): void
    setActivateFunc(func: any | null): void
    setPreviewFunc(func: any): void
    setPreviewAsyncFunc(func: any | null): void
    getFilterSet(): FilterSet
    setFilterSet(value: FilterSet): void
    getCategorySet(): CategorySet
    setCategorySet(value: CategorySet): void
    getSchema(): Schema

    // Overloads of getSchema

    getSchema(): Schema
    setSchema(value: Schema): void
    getSearchHint(): string

    // Overloads of getSearchHint

    getSearchHint(): string | null
    setSearchHint(value: string): void
    getGroupName(): string

    // Overloads of getGroupName

    getGroupName(): string | null
    setGroupName(value: string): void
    getUniqueName(): string

    // Overloads of getUniqueName

    getUniqueName(): string | null
    setUniqueName(value: string): void

    // Class property signals of Unity-7.0.Unity.SimpleScope

    connect(sigName: "notify::filter-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::filter-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filter-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filter-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filter-set", ...args: any[]): void
    connect(sigName: "notify::category-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::category-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::category-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::category-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::category-set", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: "notify::search-hint", callback: (...args: any[]) => void): number
    on(sigName: "notify::search-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::search-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::search-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::search-hint", ...args: any[]): void
    connect(sigName: "notify::group-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::group-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::group-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::group-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::group-name", ...args: any[]): void
    connect(sigName: "notify::unique-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::unique-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::unique-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::unique-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::unique-name", ...args: any[]): void
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

export class SimpleScope extends AbstractScope {

    // Own properties of Unity-7.0.Unity.SimpleScope

    static name: string

    // Constructors of Unity-7.0.Unity.SimpleScope

    constructor(config?: SimpleScope.ConstructorProperties) 
    constructor() 
    static new(): SimpleScope
    _init(config?: SimpleScope.ConstructorProperties): void
}

export module ScopeLoader {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ScopeLoader {

    // Own properties of Unity-7.0.Unity.ScopeLoader

    __gtype__: number

    // Owm methods of Unity-7.0.Unity.ScopeLoader

    // Has conflict: getScopes(moduleName: string, moduleType?: string | null): AbstractScope[]
    // Has conflict: exportScopes(scopes: AbstractScope[]): void
    loadGroup(groupName: string): void
    loadScope(scopeId: string): void
    loadModule(module: string, moduleType?: string | null): void

    // Own virtual methods of Unity-7.0.Unity.ScopeLoader

    getScopes(moduleName: string, moduleType?: string | null): AbstractScope[]
    exportScopes(scopes: AbstractScope[]): void

    // Class property signals of Unity-7.0.Unity.ScopeLoader

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

export class ScopeLoader extends GObject.Object {

    // Own properties of Unity-7.0.Unity.ScopeLoader

    static name: string

    // Constructors of Unity-7.0.Unity.ScopeLoader

    constructor(config?: ScopeLoader.ConstructorProperties) 
    constructor() 
    static new(): ScopeLoader
    _init(config?: ScopeLoader.ConstructorProperties): void
}

export module TrackMetadata {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.TrackMetadata

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

    // Own properties of Unity-7.0.Unity.TrackMetadata

    uri: string | null
    trackNo: number
    artist: string | null
    title: string | null
    album: string | null
    length: number
    artLocation: Gio.File
    artIcon: Gio.Icon
    __gtype__: number

    // Owm methods of Unity-7.0.Unity.TrackMetadata

    getUri(): string
    setUri(value: string): void
    getTrackNo(): number
    setTrackNo(value: number): void
    getArtist(): string
    setArtist(value: string): void
    getTitle(): string
    setTitle(value: string): void
    getAlbum(): string
    setAlbum(value: string): void
    getLength(): number
    setLength(value: number): void
    getArtLocation(): Gio.File
    setArtLocation(value: Gio.File): void
    getArtIcon(): Gio.Icon
    setArtIcon(value: Gio.Icon): void

    // Class property signals of Unity-7.0.Unity.TrackMetadata

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
    disconnect(id: number): void
}

export class TrackMetadata extends GObject.Object {

    // Own properties of Unity-7.0.Unity.TrackMetadata

    static name: string

    // Constructors of Unity-7.0.Unity.TrackMetadata

    constructor(config?: TrackMetadata.ConstructorProperties) 
    constructor() 
    static new(): TrackMetadata
    static full(uri: string, trackNo: number, title: string, artist: string, album: string, length: number): TrackMetadata
    _init(config?: TrackMetadata.ConstructorProperties): void
}

export module Playlist {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.Playlist

        id?: string | null
        name?: string | null
        icon?: Gio.Icon | null
        creation_date?: GLib.DateTime | null
        modification_date?: GLib.DateTime | null
        last_play_date?: GLib.DateTime | null
    }

}

export interface Playlist {

    // Own properties of Unity-7.0.Unity.Playlist

    readonly id: string | null
    name: string | null
    icon: Gio.Icon
    creationDate: GLib.DateTime
    modificationDate: GLib.DateTime
    lastPlayDate: GLib.DateTime
    __gtype__: number

    // Owm methods of Unity-7.0.Unity.Playlist

    getId(): string
    getName(): string
    setName(value: string): void
    getIcon(): Gio.Icon
    setIcon(value: Gio.Icon): void
    getCreationDate(): GLib.DateTime
    setCreationDate(value: GLib.DateTime): void
    getModificationDate(): GLib.DateTime
    setModificationDate(value: GLib.DateTime): void
    getLastPlayDate(): GLib.DateTime
    setLastPlayDate(value: GLib.DateTime): void

    // Class property signals of Unity-7.0.Unity.Playlist

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
    disconnect(id: number): void
}

export class Playlist extends GObject.Object {

    // Own properties of Unity-7.0.Unity.Playlist

    static name: string

    // Constructors of Unity-7.0.Unity.Playlist

    constructor(config?: Playlist.ConstructorProperties) 
    constructor(id: string) 
    static new(id: string): Playlist
    _init(config?: Playlist.ConstructorProperties): void
}

export module MusicPlayer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `raise`
     */
    export interface RaiseSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `play-pause`
     */
    export interface PlayPauseSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `previous`
     */
    export interface PreviousSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `next`
     */
    export interface NextSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `activate-playlist`
     */
    export interface ActivatePlaylistSignalCallback {
        (playlistId: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.MusicPlayer

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

    // Own properties of Unity-7.0.Unity.MusicPlayer

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

    // Owm methods of Unity-7.0.Unity.MusicPlayer

    export(): void
    unexport(): void
    addPlaylist(p: Playlist): boolean
    removePlaylist(p: Playlist): boolean
    getPlaylists(): Playlist[]
    editPlaylistName(id: string, name: string): void
    getAppInfo(): Gio.AppInfo
    getDesktopFileName(): string
    getIsBlacklisted(): boolean
    setIsBlacklisted(value: boolean): void
    getTitle(): string
    setTitle(value: string): void
    getCanGoNext(): boolean
    setCanGoNext(value: boolean): void
    getCanGoPrevious(): boolean
    setCanGoPrevious(value: boolean): void
    getCanPlay(): boolean
    setCanPlay(value: boolean): void
    getCanPause(): boolean
    setCanPause(value: boolean): void
    getCurrentTrack(): TrackMetadata
    setCurrentTrack(value: TrackMetadata): void
    getPlaybackState(): PlaybackState
    setPlaybackState(value: PlaybackState): void
    getCurrentPlaylist(): Playlist
    setCurrentPlaylist(value: Playlist): void
    getTrackMenu(): Dbusmenu.Menuitem | null
    setTrackMenu(value?: Dbusmenu.Menuitem | null): void
    getPlayerMenu(): Dbusmenu.Menuitem | null
    setPlayerMenu(value?: Dbusmenu.Menuitem | null): void

    // Own signals of Unity-7.0.Unity.MusicPlayer

    connect(sigName: "raise", callback: MusicPlayer.RaiseSignalCallback): number
    on(sigName: "raise", callback: MusicPlayer.RaiseSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "raise", callback: MusicPlayer.RaiseSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "raise", callback: MusicPlayer.RaiseSignalCallback): NodeJS.EventEmitter
    emit(sigName: "raise", ...args: any[]): void
    connect(sigName: "play-pause", callback: MusicPlayer.PlayPauseSignalCallback): number
    on(sigName: "play-pause", callback: MusicPlayer.PlayPauseSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "play-pause", callback: MusicPlayer.PlayPauseSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "play-pause", callback: MusicPlayer.PlayPauseSignalCallback): NodeJS.EventEmitter
    emit(sigName: "play-pause", ...args: any[]): void
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
    connect(sigName: "activate-playlist", callback: MusicPlayer.ActivatePlaylistSignalCallback): number
    on(sigName: "activate-playlist", callback: MusicPlayer.ActivatePlaylistSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate-playlist", callback: MusicPlayer.ActivatePlaylistSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate-playlist", callback: MusicPlayer.ActivatePlaylistSignalCallback): NodeJS.EventEmitter
    emit(sigName: "activate-playlist", ...args: any[]): void

    // Class property signals of Unity-7.0.Unity.MusicPlayer

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
    disconnect(id: number): void
}

export class MusicPlayer extends GObject.Object {

    // Own properties of Unity-7.0.Unity.MusicPlayer

    static name: string

    // Constructors of Unity-7.0.Unity.MusicPlayer

    constructor(config?: MusicPlayer.ConstructorProperties) 
    constructor(desktop: string) 
    static new(desktop: string): MusicPlayer
    _init(config?: MusicPlayer.ConstructorProperties): void
}

export interface AppInfoManagerClass {
}

export abstract class AppInfoManagerClass {

    // Own properties of Unity-7.0.Unity.AppInfoManagerClass

    static name: string
}

export interface AppInfoManagerPrivate {
}

export class AppInfoManagerPrivate {

    // Own properties of Unity-7.0.Unity.AppInfoManagerPrivate

    static name: string
}

export interface AnnotatedIconClass {
}

export abstract class AnnotatedIconClass {

    // Own properties of Unity-7.0.Unity.AnnotatedIconClass

    static name: string
}

export interface AnnotatedIconPrivate {
}

export class AnnotatedIconPrivate {

    // Own properties of Unity-7.0.Unity.AnnotatedIconPrivate

    static name: string
}

export interface InspectorClass {
}

export abstract class InspectorClass {

    // Own properties of Unity-7.0.Unity.InspectorClass

    static name: string
}

export interface InspectorPrivate {
}

export class InspectorPrivate {

    // Own properties of Unity-7.0.Unity.InspectorPrivate

    static name: string
}

export interface LauncherEntryClass {
}

export abstract class LauncherEntryClass {

    // Own properties of Unity-7.0.Unity.LauncherEntryClass

    static name: string
}

export interface LauncherEntryPrivate {
}

export class LauncherEntryPrivate {

    // Own properties of Unity-7.0.Unity.LauncherEntryPrivate

    static name: string
}

export interface LauncherFavoritesClass {
}

export abstract class LauncherFavoritesClass {

    // Own properties of Unity-7.0.Unity.LauncherFavoritesClass

    static name: string
}

export interface LauncherFavoritesPrivate {
}

export class LauncherFavoritesPrivate {

    // Own properties of Unity-7.0.Unity.LauncherFavoritesPrivate

    static name: string
}

export interface MetadataProviderClass {

    // Own fields of Unity-7.0.Unity.MetadataProviderClass

    updateHints: (self: MetadataProvider, hints: GLib.HashTable) => void
}

export abstract class MetadataProviderClass {

    // Own properties of Unity-7.0.Unity.MetadataProviderClass

    static name: string
}

export interface MetadataProviderPrivate {
}

export class MetadataProviderPrivate {

    // Own properties of Unity-7.0.Unity.MetadataProviderPrivate

    static name: string
}

export interface ProgressSourceProviderClass {
}

export abstract class ProgressSourceProviderClass {

    // Own properties of Unity-7.0.Unity.ProgressSourceProviderClass

    static name: string
}

export interface ProgressSourceProviderPrivate {
}

export class ProgressSourceProviderPrivate {

    // Own properties of Unity-7.0.Unity.ProgressSourceProviderPrivate

    static name: string
}

export interface CategoryClass {
}

export abstract class CategoryClass {

    // Own properties of Unity-7.0.Unity.CategoryClass

    static name: string
}

export interface CategoryPrivate {
}

export class CategoryPrivate {

    // Own properties of Unity-7.0.Unity.CategoryPrivate

    static name: string
}

export interface FilterClass {

    // Own fields of Unity-7.0.Unity.FilterClass

    getHints: (self: Filter) => GLib.HashTable
    update: (self: Filter, properties: GLib.Variant) => void
}

export abstract class FilterClass {

    // Own properties of Unity-7.0.Unity.FilterClass

    static name: string
}

export interface FilterPrivate {
}

export class FilterPrivate {

    // Own properties of Unity-7.0.Unity.FilterPrivate

    static name: string
}

export interface FilterOptionClass {
}

export abstract class FilterOptionClass {

    // Own properties of Unity-7.0.Unity.FilterOptionClass

    static name: string
}

export interface FilterOptionPrivate {
}

export class FilterOptionPrivate {

    // Own properties of Unity-7.0.Unity.FilterOptionPrivate

    static name: string
}

export interface OptionsFilterClass {
}

export abstract class OptionsFilterClass {

    // Own properties of Unity-7.0.Unity.OptionsFilterClass

    static name: string
}

export interface OptionsFilterPrivate {
}

export class OptionsFilterPrivate {

    // Own properties of Unity-7.0.Unity.OptionsFilterPrivate

    static name: string
}

export interface RadioOptionFilterClass {
}

export abstract class RadioOptionFilterClass {

    // Own properties of Unity-7.0.Unity.RadioOptionFilterClass

    static name: string
}

export interface RadioOptionFilterPrivate {
}

export class RadioOptionFilterPrivate {

    // Own properties of Unity-7.0.Unity.RadioOptionFilterPrivate

    static name: string
}

export interface CheckOptionFilterClass {
}

export abstract class CheckOptionFilterClass {

    // Own properties of Unity-7.0.Unity.CheckOptionFilterClass

    static name: string
}

export interface CheckOptionFilterPrivate {
}

export class CheckOptionFilterPrivate {

    // Own properties of Unity-7.0.Unity.CheckOptionFilterPrivate

    static name: string
}

export interface CheckOptionFilterCompactClass {
}

export abstract class CheckOptionFilterCompactClass {

    // Own properties of Unity-7.0.Unity.CheckOptionFilterCompactClass

    static name: string
}

export interface CheckOptionFilterCompactPrivate {
}

export class CheckOptionFilterCompactPrivate {

    // Own properties of Unity-7.0.Unity.CheckOptionFilterCompactPrivate

    static name: string
}

export interface RatingsFilterClass {
}

export abstract class RatingsFilterClass {

    // Own properties of Unity-7.0.Unity.RatingsFilterClass

    static name: string
}

export interface RatingsFilterPrivate {
}

export class RatingsFilterPrivate {

    // Own properties of Unity-7.0.Unity.RatingsFilterPrivate

    static name: string
}

export interface MultiRangeFilterClass {
}

export abstract class MultiRangeFilterClass {

    // Own properties of Unity-7.0.Unity.MultiRangeFilterClass

    static name: string
}

export interface MultiRangeFilterPrivate {
}

export class MultiRangeFilterPrivate {

    // Own properties of Unity-7.0.Unity.MultiRangeFilterPrivate

    static name: string
}

export interface PreferencesManagerClass {
}

export abstract class PreferencesManagerClass {

    // Own properties of Unity-7.0.Unity.PreferencesManagerClass

    static name: string
}

export interface PreferencesManagerPrivate {
}

export class PreferencesManagerPrivate {

    // Own properties of Unity-7.0.Unity.PreferencesManagerPrivate

    static name: string
}

export interface DeprecatedScopeSearchClass {
}

export abstract class DeprecatedScopeSearchClass {

    // Own properties of Unity-7.0.Unity.DeprecatedScopeSearchClass

    static name: string
}

export interface DeprecatedScopeSearchPrivate {
}

export class DeprecatedScopeSearchPrivate {

    // Own properties of Unity-7.0.Unity.DeprecatedScopeSearchPrivate

    static name: string
}

export interface AggregatedScopeSearchClass {
}

export abstract class AggregatedScopeSearchClass {

    // Own properties of Unity-7.0.Unity.AggregatedScopeSearchClass

    static name: string
}

export interface AggregatedScopeSearchPrivate {
}

export class AggregatedScopeSearchPrivate {

    // Own properties of Unity-7.0.Unity.AggregatedScopeSearchPrivate

    static name: string
}

export interface PreviewClass {

    // Own fields of Unity-7.0.Unity.PreviewClass

    createRaw: (self: Preview) => GObject.Object
}

export abstract class PreviewClass {

    // Own properties of Unity-7.0.Unity.PreviewClass

    static name: string
}

export interface PreviewPrivate {
}

export class PreviewPrivate {

    // Own properties of Unity-7.0.Unity.PreviewPrivate

    static name: string
}

export interface PreviewActionClass {
}

export abstract class PreviewActionClass {

    // Own properties of Unity-7.0.Unity.PreviewActionClass

    static name: string
}

export interface PreviewActionPrivate {
}

export class PreviewActionPrivate {

    // Own properties of Unity-7.0.Unity.PreviewActionPrivate

    static name: string
}

export interface InfoHintClass {
}

export abstract class InfoHintClass {

    // Own properties of Unity-7.0.Unity.InfoHintClass

    static name: string
}

export interface InfoHintPrivate {
}

export class InfoHintPrivate {

    // Own properties of Unity-7.0.Unity.InfoHintPrivate

    static name: string
}

export interface GenericPreviewClass {
}

export abstract class GenericPreviewClass {

    // Own properties of Unity-7.0.Unity.GenericPreviewClass

    static name: string
}

export interface GenericPreviewPrivate {
}

export class GenericPreviewPrivate {

    // Own properties of Unity-7.0.Unity.GenericPreviewPrivate

    static name: string
}

export interface ApplicationPreviewClass {
}

export abstract class ApplicationPreviewClass {

    // Own properties of Unity-7.0.Unity.ApplicationPreviewClass

    static name: string
}

export interface ApplicationPreviewPrivate {
}

export class ApplicationPreviewPrivate {

    // Own properties of Unity-7.0.Unity.ApplicationPreviewPrivate

    static name: string
}

export interface MusicPreviewClass {
}

export abstract class MusicPreviewClass {

    // Own properties of Unity-7.0.Unity.MusicPreviewClass

    static name: string
}

export interface MusicPreviewPrivate {
}

export class MusicPreviewPrivate {

    // Own properties of Unity-7.0.Unity.MusicPreviewPrivate

    static name: string
}

export interface PaymentPreviewClass {
}

export abstract class PaymentPreviewClass {

    // Own properties of Unity-7.0.Unity.PaymentPreviewClass

    static name: string
}

export interface PaymentPreviewPrivate {
}

export class PaymentPreviewPrivate {

    // Own properties of Unity-7.0.Unity.PaymentPreviewPrivate

    static name: string
}

export interface MoviePreviewClass {
}

export abstract class MoviePreviewClass {

    // Own properties of Unity-7.0.Unity.MoviePreviewClass

    static name: string
}

export interface MoviePreviewPrivate {
}

export class MoviePreviewPrivate {

    // Own properties of Unity-7.0.Unity.MoviePreviewPrivate

    static name: string
}

export interface SocialPreviewClass {
}

export abstract class SocialPreviewClass {

    // Own properties of Unity-7.0.Unity.SocialPreviewClass

    static name: string
}

export interface SocialPreviewPrivate {
}

export class SocialPreviewPrivate {

    // Own properties of Unity-7.0.Unity.SocialPreviewPrivate

    static name: string
}

export interface SocialPreviewCommentClass {
}

export abstract class SocialPreviewCommentClass {

    // Own properties of Unity-7.0.Unity.SocialPreviewCommentClass

    static name: string
}

export interface SocialPreviewCommentPrivate {
}

export class SocialPreviewCommentPrivate {

    // Own properties of Unity-7.0.Unity.SocialPreviewCommentPrivate

    static name: string
}

export interface ActivationResponseClass {
}

export abstract class ActivationResponseClass {

    // Own properties of Unity-7.0.Unity.ActivationResponseClass

    static name: string
}

export interface ActivationResponsePrivate {
}

export class ActivationResponsePrivate {

    // Own properties of Unity-7.0.Unity.ActivationResponsePrivate

    static name: string
}

export interface AggregatorActivationClass {
}

export abstract class AggregatorActivationClass {

    // Own properties of Unity-7.0.Unity.AggregatorActivationClass

    static name: string
}

export interface AggregatorActivationPrivate {
}

export class AggregatorActivationPrivate {

    // Own properties of Unity-7.0.Unity.AggregatorActivationPrivate

    static name: string
}

export interface FilterSetClass {

    // Own fields of Unity-7.0.Unity.FilterSetClass

    add: (self: FilterSet, filter: Filter) => void
    getFilterById: (self: FilterSet, filterId: string) => Filter | null
    getFilters: (self: FilterSet) => Filter[]
}

export abstract class FilterSetClass {

    // Own properties of Unity-7.0.Unity.FilterSetClass

    static name: string
}

export interface FilterSetPrivate {
}

export class FilterSetPrivate {

    // Own properties of Unity-7.0.Unity.FilterSetPrivate

    static name: string
}

export interface CategorySetClass {

    // Own fields of Unity-7.0.Unity.CategorySetClass

    add: (self: CategorySet, category: Category) => void
    getCategories: (self: CategorySet) => Category[]
}

export abstract class CategorySetClass {

    // Own properties of Unity-7.0.Unity.CategorySetClass

    static name: string
}

export interface CategorySetPrivate {
}

export class CategorySetPrivate {

    // Own properties of Unity-7.0.Unity.CategorySetPrivate

    static name: string
}

export interface SchemaClass {

    // Own fields of Unity-7.0.Unity.SchemaClass

    addField: (self: Schema, name: string, schema: string, type: SchemaFieldType) => void
    getFields: (self: Schema) => SchemaFieldInfo[]
}

export abstract class SchemaClass {

    // Own properties of Unity-7.0.Unity.SchemaClass

    static name: string
}

export interface SchemaPrivate {
}

export class SchemaPrivate {

    // Own properties of Unity-7.0.Unity.SchemaPrivate

    static name: string
}

export interface SchemaFieldInfo {

    // Own fields of Unity-7.0.Unity.SchemaFieldInfo

    name: string | null
    schema: string | null
    type: SchemaFieldType
}

export class SchemaFieldInfo {

    // Own properties of Unity-7.0.Unity.SchemaFieldInfo

    static name: string
}

export interface CancellableClass {

    // Own fields of Unity-7.0.Unity.CancellableClass

    cancel: (self: Cancellable) => void
    isCancelled: (self: Cancellable) => boolean
    getGcancellable: (self: Cancellable) => Gio.Cancellable | null
}

export abstract class CancellableClass {

    // Own properties of Unity-7.0.Unity.CancellableClass

    static name: string
}

export interface CancellablePrivate {
}

export class CancellablePrivate {

    // Own properties of Unity-7.0.Unity.CancellablePrivate

    static name: string
}

export interface ScopeSearchBaseClass {

    // Own fields of Unity-7.0.Unity.ScopeSearchBaseClass

    run: (self: ScopeSearchBase) => void
    runAsync: (self: ScopeSearchBase, asyncCallback: ScopeSearchBaseCallback) => void
    setSearchContext: (self: ScopeSearchBase, ctx: SearchContext) => void
}

export abstract class ScopeSearchBaseClass {

    // Own properties of Unity-7.0.Unity.ScopeSearchBaseClass

    static name: string
}

export interface ScopeSearchBasePrivate {
}

export class ScopeSearchBasePrivate {

    // Own properties of Unity-7.0.Unity.ScopeSearchBasePrivate

    static name: string
}

export interface ResultSetClass {

    // Own fields of Unity-7.0.Unity.ResultSetClass

    addResult: (self: ResultSet, result: ScopeResult) => void
    addResultFromVariant: (self: ResultSet, variant: GLib.Variant) => void
    flush: (self: ResultSet) => void
}

export abstract class ResultSetClass {

    // Own properties of Unity-7.0.Unity.ResultSetClass

    static name: string
}

export interface ResultSetPrivate {
}

export class ResultSetPrivate {

    // Own properties of Unity-7.0.Unity.ResultSetPrivate

    static name: string
}

export interface AbstractPreviewClass {

    // Own fields of Unity-7.0.Unity.AbstractPreviewClass

    serializeAs: (self: AbstractPreview, serializationType: SerializationType) => number[]
}

export abstract class AbstractPreviewClass {

    // Own properties of Unity-7.0.Unity.AbstractPreviewClass

    static name: string
}

export interface AbstractPreviewPrivate {
}

export class AbstractPreviewPrivate {

    // Own properties of Unity-7.0.Unity.AbstractPreviewPrivate

    static name: string
}

export interface ResultPreviewerClass {

    // Own fields of Unity-7.0.Unity.ResultPreviewerClass

    run: (self: ResultPreviewer) => AbstractPreview | null
    runAsync: (self: ResultPreviewer, asyncCallback: AbstractPreviewCallback) => void
}

export abstract class ResultPreviewerClass {

    // Own properties of Unity-7.0.Unity.ResultPreviewerClass

    static name: string
}

export interface ResultPreviewerPrivate {
}

export class ResultPreviewerPrivate {

    // Own properties of Unity-7.0.Unity.ResultPreviewerPrivate

    static name: string
}

export interface SearchMetadataClass {
}

export abstract class SearchMetadataClass {

    // Own properties of Unity-7.0.Unity.SearchMetadataClass

    static name: string
}

export interface SearchMetadataPrivate {
}

export class SearchMetadataPrivate {

    // Own properties of Unity-7.0.Unity.SearchMetadataPrivate

    static name: string
}

export interface GeoCoordinateClass {
}

export abstract class GeoCoordinateClass {

    // Own properties of Unity-7.0.Unity.GeoCoordinateClass

    static name: string
}

export interface GeoCoordinatePrivate {
}

export class GeoCoordinatePrivate {

    // Own properties of Unity-7.0.Unity.GeoCoordinatePrivate

    static name: string
}

export interface AbstractScopeClass {

    // Own fields of Unity-7.0.Unity.AbstractScopeClass

    createSearchForQuery: (self: AbstractScope, searchContext: SearchContext) => ScopeSearchBase
    createPreviewer: (self: AbstractScope, result: ScopeResult, metadata: SearchMetadata) => ResultPreviewer
    getCategories: (self: AbstractScope) => CategorySet
    getFilters: (self: AbstractScope) => FilterSet
    getSchema: (self: AbstractScope) => Schema
    getSearchHint: (self: AbstractScope) => string | null
    getGroupName: (self: AbstractScope) => string | null
    getUniqueName: (self: AbstractScope) => string | null
    activate: (self: AbstractScope, result: ScopeResult, metadata: SearchMetadata, actionId?: string | null) => ActivationResponse | null
    normalizeSearchQuery: (self: AbstractScope, searchQuery: string) => string | null
}

export abstract class AbstractScopeClass {

    // Own properties of Unity-7.0.Unity.AbstractScopeClass

    static name: string
}

export interface AbstractScopePrivate {
}

export class AbstractScopePrivate {

    // Own properties of Unity-7.0.Unity.AbstractScopePrivate

    static name: string
}

export interface ScopeDBusConnectorClass {
}

export abstract class ScopeDBusConnectorClass {

    // Own properties of Unity-7.0.Unity.ScopeDBusConnectorClass

    static name: string
}

export interface ScopeDBusConnectorPrivate {
}

export class ScopeDBusConnectorPrivate {

    // Own properties of Unity-7.0.Unity.ScopeDBusConnectorPrivate

    static name: string
}

export interface DeprecatedScopeBaseClass {

    // Own fields of Unity-7.0.Unity.DeprecatedScopeBaseClass

    createImpl: (self: DeprecatedScopeBase) => GObject.Object
}

export abstract class DeprecatedScopeBaseClass {

    // Own properties of Unity-7.0.Unity.DeprecatedScopeBaseClass

    static name: string
}

export interface DeprecatedScopeBasePrivate {
}

export class DeprecatedScopeBasePrivate {

    // Own properties of Unity-7.0.Unity.DeprecatedScopeBasePrivate

    static name: string
}

export interface DeprecatedScopeClass {

    // Own fields of Unity-7.0.Unity.DeprecatedScopeClass

    previewResult: (self: DeprecatedScope, result: ScopeResult, callback?: Gio.AsyncReadyCallback | null) => void
    previewResultFinish: (self: DeprecatedScope, res: Gio.AsyncResult) => Preview | null
    activateResult: (self: DeprecatedScope, result: ScopeResult, callback?: Gio.AsyncReadyCallback | null) => void
    activateResultFinish: (self: DeprecatedScope, res: Gio.AsyncResult) => ActivationResponse | null
}

export abstract class DeprecatedScopeClass {

    // Own properties of Unity-7.0.Unity.DeprecatedScopeClass

    static name: string
}

export interface DeprecatedScopePrivate {
}

export class DeprecatedScopePrivate {

    // Own properties of Unity-7.0.Unity.DeprecatedScopePrivate

    static name: string
}

export interface AggregatorScopeClass {

    // Own fields of Unity-7.0.Unity.AggregatorScopeClass

    categoryIndexForScopeId: (self: AggregatorScope, scopeId: string) => number
    search: (self: AggregatorScope, scopeSearch: AggregatedScopeSearch, callback?: Gio.AsyncReadyCallback | null) => void
    searchFinish: (self: AggregatorScope, res: Gio.AsyncResult) => void
    activate: (self: AggregatorScope, activation: AggregatorActivation, callback?: Gio.AsyncReadyCallback | null) => void
    activateFinish: (self: AggregatorScope, res: Gio.AsyncResult) => ActivationResponse | null
}

export abstract class AggregatorScopeClass {

    // Own properties of Unity-7.0.Unity.AggregatorScopeClass

    static name: string
}

export interface AggregatorScopePrivate {
}

export class AggregatorScopePrivate {

    // Own properties of Unity-7.0.Unity.AggregatorScopePrivate

    static name: string
}

export interface MasterScopeClass {
}

export abstract class MasterScopeClass {

    // Own properties of Unity-7.0.Unity.MasterScopeClass

    static name: string
}

export interface MasterScopePrivate {
}

export class MasterScopePrivate {

    // Own properties of Unity-7.0.Unity.MasterScopePrivate

    static name: string
}

export interface SimpleScopeClass {
}

export abstract class SimpleScopeClass {

    // Own properties of Unity-7.0.Unity.SimpleScopeClass

    static name: string
}

export interface SimpleScopePrivate {
}

export class SimpleScopePrivate {

    // Own properties of Unity-7.0.Unity.SimpleScopePrivate

    static name: string
}

export interface ScopeLoaderClass {

    // Own fields of Unity-7.0.Unity.ScopeLoaderClass

    getScopes: (self: ScopeLoader, moduleName: string, moduleType?: string | null) => AbstractScope[]
    exportScopes: (self: ScopeLoader, scopes: AbstractScope[]) => void
}

export abstract class ScopeLoaderClass {

    // Own properties of Unity-7.0.Unity.ScopeLoaderClass

    static name: string
}

export interface ScopeLoaderPrivate {
}

export class ScopeLoaderPrivate {

    // Own properties of Unity-7.0.Unity.ScopeLoaderPrivate

    static name: string
}

export interface TrackMetadataClass {
}

export abstract class TrackMetadataClass {

    // Own properties of Unity-7.0.Unity.TrackMetadataClass

    static name: string
}

export interface TrackMetadataPrivate {
}

export class TrackMetadataPrivate {

    // Own properties of Unity-7.0.Unity.TrackMetadataPrivate

    static name: string
}

export interface PlaylistClass {
}

export abstract class PlaylistClass {

    // Own properties of Unity-7.0.Unity.PlaylistClass

    static name: string
}

export interface PlaylistPrivate {
}

export class PlaylistPrivate {

    // Own properties of Unity-7.0.Unity.PlaylistPrivate

    static name: string
}

export interface MusicPlayerClass {
}

export abstract class MusicPlayerClass {

    // Own properties of Unity-7.0.Unity.MusicPlayerClass

    static name: string
}

export interface MusicPlayerPrivate {
}

export class MusicPlayerPrivate {

    // Own properties of Unity-7.0.Unity.MusicPlayerPrivate

    static name: string
}

export interface ScopeResult {

    // Own fields of Unity-7.0.Unity.ScopeResult

    uri: string | null
    iconHint: string | null
    category: number
    resultType: ResultType
    mimetype: string | null
    title: string | null
    comment: string | null
    dndUri: string | null
    metadata?: GLib.HashTable | null
}

export class ScopeResult {

    // Own properties of Unity-7.0.Unity.ScopeResult

    static name: string

    // Constructors of Unity-7.0.Unity.ScopeResult

    static create(uri: string, iconHint: string | null, category: number, resultType: ResultType, mimetype: string, title: string, comment: string, dndUri: string, metadata: GLib.HashTable): ScopeResult | null
    static createFromVariant(variant: GLib.Variant): ScopeResult | null
}

export interface SearchContext {

    // Own fields of Unity-7.0.Unity.SearchContext

    searchQuery: string | null
    searchType: SearchType
    filterState: FilterSet
    searchMetadata: SearchMetadata
    resultSet: ResultSet
    cancellable: Cancellable

    // Owm methods of Unity-7.0.Unity.SearchContext

    setSearchMetadata(metadata: SearchMetadata): void
}

export class SearchContext {

    // Own properties of Unity-7.0.Unity.SearchContext

    static name: string

    // Constructors of Unity-7.0.Unity.SearchContext

    static create(searchQuery: string, searchType: SearchType, filterState: FilterSet | null, metadata: GLib.HashTable | null, resultSet: ResultSet, cancellable?: Cancellable | null): SearchContext | null
}

export interface PlaylistDetails {

    // Own fields of Unity-7.0.Unity.PlaylistDetails

    id: string
    name: string | null
    iconName: string | null
}

export class PlaylistDetails {

    // Own properties of Unity-7.0.Unity.PlaylistDetails

    static name: string
}

export interface ActivePlaylistContainer {

    // Own fields of Unity-7.0.Unity.ActivePlaylistContainer

    valid: boolean
    details: PlaylistDetails
}

export class ActivePlaylistContainer {

    // Own properties of Unity-7.0.Unity.ActivePlaylistContainer

    static name: string
}

// END