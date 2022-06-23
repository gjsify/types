// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Unity-7.0
 */

import type GLib from './GLib-2.0';
import type Dbusmenu from './Dbusmenu-0.4';
import type GObject from './GObject-2.0';
import type Dee from './Dee-1.0';
import type Gio from './Gio-2.0';

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
enum CategoryRenderer {
    DEFAULT,
    GRID,
    CAROUSEL,
    LIST,
    DYNAMIC,
    SPECIAL,
    VERTICAL_TILE,
    HORIZONTAL_TILE,
}
enum CategoryContentType {
    DEFAULT,
    APPLICATIONS,
    MUSIC,
    VIDEO,
    PLACES,
    SOCIAL,
    WEATHER,
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
enum HandledType {
    NOT_HANDLED,
    SHOW_DASH,
    HIDE_DASH,
    GOTO_DASH_URI,
    SHOW_PREVIEW,
    PERFORM_SEARCH,
}
enum SearchType {
    DEFAULT,
    GLOBAL,
    N_TYPES,
}
enum ResultType {
    DEFAULT,
    PERSONAL,
    SEMI_PERSONAL,
}
enum SerializationType {
    BINARY,
    JSON,
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
enum PaymentPreviewType {
    APPLICATION,
    MUSIC,
    ERROR,
}
enum SchemaFieldType {
    OPTIONAL,
    REQUIRED,
}
enum AggregatorScopeSortFlags {
    ASCENDING,
    DESCENDING,
    CASE_INSENSITIVE,
}
enum AggregatorScopeMergeMode {
    CATEGORY_ID,
    OWNER_SCOPE,
}
const SCOPE_API_VERSION: number
function categoryRendererFromString(rendererName: string): CategoryRenderer
function categoryRendererToString(val: CategoryRenderer): string
function categoryContentTypeFromString(contentType: string): CategoryContentType
function categoryContentTypeToString(val: CategoryContentType): string
function filterRendererToString(renderer: FilterRenderer): string
function filterRendererFromString(rendererName: string): FilterRenderer
function scopeModuleGetVersion(): number
function scopeModuleLoadScopes(): AbstractScope[]
function objectUnref(object?: object | null): void
interface ScopeSearchBaseCallback {
    (instance: ScopeSearchBase): void
}
interface AbstractPreviewCallback {
    (previewer: ResultPreviewer, preview: AbstractPreview | null): void
}
interface AppInfoManager_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `changed`
 */
interface AppInfoManager_ChangedSignalCallback {
    (id: string, newAppinfo?: Gio.AppInfo | null): void
}

interface AppInfoManager {

    // Owm methods of Unity-7.0.Unity.AppInfoManager

    lookup(id: string): Gio.AppInfo | null
    getCategories(id: string): string[] | null
    getKeywords(id: string): string[] | null
    getPath(id: string): string | null
    lookupAsync(id: string, callback?: Gio.AsyncReadyCallback | null): void
    lookupFinish(res: Gio.AsyncResult): Gio.AppInfo | null
    clear(): void

    // Own signals of Unity-7.0.Unity.AppInfoManager

    connect(sigName: "changed", callback: AppInfoManager_ChangedSignalCallback): number
    on(sigName: "changed", callback: AppInfoManager_ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: AppInfoManager_ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: AppInfoManager_ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", newAppinfo?: Gio.AppInfo | null, ...args: any[]): void

    // Class property signals of Unity-7.0.Unity.AppInfoManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class AppInfoManager extends GObject.Object {

    // Own properties of Unity-7.0.Unity.AppInfoManager

    static name: string
    static $gtype: GObject.GType<AppInfoManager>

    // Constructors of Unity-7.0.Unity.AppInfoManager

    constructor(config?: AppInfoManager_ConstructProps) 
    _init(config?: AppInfoManager_ConstructProps): void
    static getInstance(): AppInfoManager
    static getDefault(): AppInfoManager
}

interface AnnotatedIcon_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Unity-7.0.Unity.AnnotatedIcon

    icon?: Gio.Icon | null
    ribbon?: string | null
    category?: CategoryType | null
    sizeHint?: IconSizeHint | null
}

interface AnnotatedIcon {

    // Own properties of Unity-7.0.Unity.AnnotatedIcon

    icon: Gio.Icon
    ribbon: string
    category: CategoryType
    sizeHint: IconSizeHint

    // Owm methods of Unity-7.0.Unity.AnnotatedIcon

    setColorizeRgba(r: number, g: number, b: number, a: number): void
    toString(): string
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class AnnotatedIcon extends GObject.Object {

    // Own properties of Unity-7.0.Unity.AnnotatedIcon

    static name: string
    static $gtype: GObject.GType<AnnotatedIcon>

    // Constructors of Unity-7.0.Unity.AnnotatedIcon

    constructor(config?: AnnotatedIcon_ConstructProps) 
    constructor(baseIcon: Gio.Icon) 
    static new(baseIcon: Gio.Icon): AnnotatedIcon
    _init(config?: AnnotatedIcon_ConstructProps): void
}

interface Inspector_ConstructProps extends GObject.Object_ConstructProps {
}

interface Inspector {

    // Own properties of Unity-7.0.Unity.Inspector

    readonly unityRunning: boolean
    readonly unityBusName: string

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Inspector extends GObject.Object {

    // Own properties of Unity-7.0.Unity.Inspector

    static name: string
    static $gtype: GObject.GType<Inspector>

    // Constructors of Unity-7.0.Unity.Inspector

    constructor(config?: Inspector_ConstructProps) 
    _init(config?: Inspector_ConstructProps): void
    static getDefault(): Inspector
}

interface LauncherEntry_ConstructProps extends Dee.Serializable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Unity-7.0.Unity.LauncherEntry

    appUri?: string | null
    count?: number | null
    countVisible?: boolean | null
    progress?: number | null
    progressVisible?: boolean | null
    urgent?: boolean | null
    quicklist?: Dbusmenu.Menuitem | null
}

interface LauncherEntry extends Dee.Serializable {

    // Own properties of Unity-7.0.Unity.LauncherEntry

    appUri: string
    count: number
    countVisible: boolean
    progress: number
    progressVisible: boolean
    urgent: boolean
    quicklist: Dbusmenu.Menuitem

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class LauncherEntry extends GObject.Object {

    // Own properties of Unity-7.0.Unity.LauncherEntry

    static name: string
    static $gtype: GObject.GType<LauncherEntry>

    // Constructors of Unity-7.0.Unity.LauncherEntry

    constructor(config?: LauncherEntry_ConstructProps) 
    _init(config?: LauncherEntry_ConstructProps): void
    static getForAppUri(appUri: string): LauncherEntry
    static getForDesktopId(desktopId: string): LauncherEntry
    static getForDesktopFile(desktopFile: string): LauncherEntry
}

interface LauncherFavorites_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `changed`
 */
interface LauncherFavorites_ChangedSignalCallback {
    (): void
}

interface LauncherFavorites {

    // Owm methods of Unity-7.0.Unity.LauncherFavorites

    hasAppInfo(appinfo: Gio.AppInfo): boolean
    hasAppId(appId: string): boolean
    lookup(appId: string): Gio.AppInfo | null
    enumerateIds(): string[]
    enumerateAppInfos(): Gio.AppInfo[]

    // Own signals of Unity-7.0.Unity.LauncherFavorites

    connect(sigName: "changed", callback: LauncherFavorites_ChangedSignalCallback): number
    on(sigName: "changed", callback: LauncherFavorites_ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: LauncherFavorites_ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: LauncherFavorites_ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of Unity-7.0.Unity.LauncherFavorites

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class LauncherFavorites extends GObject.Object {

    // Own properties of Unity-7.0.Unity.LauncherFavorites

    static name: string
    static $gtype: GObject.GType<LauncherFavorites>

    // Constructors of Unity-7.0.Unity.LauncherFavorites

    constructor(config?: LauncherFavorites_ConstructProps) 
    _init(config?: LauncherFavorites_ConstructProps): void
    static getDefault(): LauncherFavorites
}

interface MetadataProvider_ConstructProps extends GObject.Object_ConstructProps {
}

interface MetadataProvider {

    // Class property signals of Unity-7.0.Unity.MetadataProvider

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MetadataProvider extends GObject.Object {

    // Own properties of Unity-7.0.Unity.MetadataProvider

    static name: string
    static $gtype: GObject.GType<MetadataProvider>

    // Constructors of Unity-7.0.Unity.MetadataProvider

    constructor(config?: MetadataProvider_ConstructProps) 
    _init(config?: MetadataProvider_ConstructProps): void
}

interface ProgressSourceProvider_ConstructProps extends MetadataProvider_ConstructProps {

    // Own constructor properties of Unity-7.0.Unity.ProgressSourceProvider

    dbusName?: string | null
    dbusPath?: string | null
}

interface ProgressSourceProvider {

    // Own properties of Unity-7.0.Unity.ProgressSourceProvider

    readonly dbusName: string
    readonly dbusPath: string

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ProgressSourceProvider extends MetadataProvider {

    // Own properties of Unity-7.0.Unity.ProgressSourceProvider

    static name: string
    static $gtype: GObject.GType<ProgressSourceProvider>

    // Constructors of Unity-7.0.Unity.ProgressSourceProvider

    constructor(config?: ProgressSourceProvider_ConstructProps) 
    constructor(dbusName: string, dbusPath: string) 
    static new(dbusName: string, dbusPath: string): ProgressSourceProvider
    _init(config?: ProgressSourceProvider_ConstructProps): void
}

interface Category_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Unity-7.0.Unity.Category

    id?: string | null
    name?: string | null
    iconHint?: Gio.Icon | null
    defaultRenderer?: CategoryRenderer | null
    contentType?: CategoryContentType | null
    rendererHint?: string | null
}

interface Category {

    // Own properties of Unity-7.0.Unity.Category

    readonly id: string
    readonly name: string
    readonly iconHint: Gio.Icon
    readonly defaultRenderer: CategoryRenderer
    contentType: CategoryContentType
    rendererHint: string
    readonly renderer: string

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Category extends GObject.Object {

    // Own properties of Unity-7.0.Unity.Category

    static name: string
    static $gtype: GObject.GType<Category>

    // Constructors of Unity-7.0.Unity.Category

    constructor(config?: Category_ConstructProps) 
    constructor(id: string, name: string, iconHint: Gio.Icon, renderer: CategoryRenderer) 
    static new(id: string, name: string, iconHint: Gio.Icon, renderer: CategoryRenderer): Category
    _init(config?: Category_ConstructProps): void
}

interface Filter_ConstructProps extends Dee.Serializable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Unity-7.0.Unity.Filter

    id?: string | null
    displayName?: string | null
    iconHint?: Gio.Icon | null
    renderer?: FilterRenderer | null
    visible?: boolean | null
    collapsed?: boolean | null
    filtering?: boolean | null
}

/**
 * Signal callback interface for `changed`
 */
interface Filter_ChangedSignalCallback {
    (): void
}

interface Filter extends Dee.Serializable {

    // Own properties of Unity-7.0.Unity.Filter

    readonly id: string
    displayName: string
    readonly iconHint: Gio.Icon
    readonly renderer: FilterRenderer
    visible: boolean
    collapsed: boolean
    filtering: boolean

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

    connect(sigName: "changed", callback: Filter_ChangedSignalCallback): number
    on(sigName: "changed", callback: Filter_ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: Filter_ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: Filter_ChangedSignalCallback): NodeJS.EventEmitter
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Filter extends GObject.Object {

    // Own properties of Unity-7.0.Unity.Filter

    static name: string
    static $gtype: GObject.GType<Filter>

    // Constructors of Unity-7.0.Unity.Filter

    constructor(config?: Filter_ConstructProps) 
    _init(config?: Filter_ConstructProps): void
}

interface FilterOption_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Unity-7.0.Unity.FilterOption

    id?: string | null
    displayName?: string | null
    iconHint?: Gio.Icon | null
    active?: boolean | null
}

interface FilterOption {

    // Own properties of Unity-7.0.Unity.FilterOption

    readonly id: string
    readonly displayName: string
    readonly iconHint: Gio.Icon
    active: boolean

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FilterOption extends GObject.Object {

    // Own properties of Unity-7.0.Unity.FilterOption

    static name: string
    static $gtype: GObject.GType<FilterOption>

    // Constructors of Unity-7.0.Unity.FilterOption

    constructor(config?: FilterOption_ConstructProps) 
    constructor(id: string, displayName: string, iconHint: Gio.Icon | null, active: boolean) 
    static new(id: string, displayName: string, iconHint: Gio.Icon | null, active: boolean): FilterOption
    _init(config?: FilterOption_ConstructProps): void
}

interface OptionsFilter_ConstructProps extends Filter_ConstructProps {

    // Own constructor properties of Unity-7.0.Unity.OptionsFilter

    sortType?: OptionsFilterSortType | null
    showAllButton?: boolean | null
}

interface OptionsFilter {

    // Own properties of Unity-7.0.Unity.OptionsFilter

    sortType: OptionsFilterSortType
    showAllButton: boolean

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

    // Own properties of Unity-7.0.Unity.OptionsFilter

    static name: string
    static $gtype: GObject.GType<OptionsFilter>

    // Constructors of Unity-7.0.Unity.OptionsFilter

    constructor(config?: OptionsFilter_ConstructProps) 
    constructor() 
    static new(): OptionsFilter
    _init(config?: OptionsFilter_ConstructProps): void
}

interface RadioOptionFilter_ConstructProps extends OptionsFilter_ConstructProps {
}

interface RadioOptionFilter {

    // Owm methods of Unity-7.0.Unity.RadioOptionFilter

    getActiveOption(): FilterOption | null

    // Class property signals of Unity-7.0.Unity.RadioOptionFilter

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
}

class RadioOptionFilter extends OptionsFilter {

    // Own properties of Unity-7.0.Unity.RadioOptionFilter

    static name: string
    static $gtype: GObject.GType<RadioOptionFilter>

    // Constructors of Unity-7.0.Unity.RadioOptionFilter

    constructor(config?: RadioOptionFilter_ConstructProps) 
    constructor(id: string, displayName: string, iconHint: Gio.Icon | null, collapsed: boolean) 
    static new(id: string, displayName: string, iconHint: Gio.Icon | null, collapsed: boolean): RadioOptionFilter

    // Overloads of new

    static new(): OptionsFilter
    _init(config?: RadioOptionFilter_ConstructProps): void
}

interface CheckOptionFilter_ConstructProps extends OptionsFilter_ConstructProps {
}

interface CheckOptionFilter {

    // Class property signals of Unity-7.0.Unity.CheckOptionFilter

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
}

class CheckOptionFilter extends OptionsFilter {

    // Own properties of Unity-7.0.Unity.CheckOptionFilter

    static name: string
    static $gtype: GObject.GType<CheckOptionFilter>

    // Constructors of Unity-7.0.Unity.CheckOptionFilter

    constructor(config?: CheckOptionFilter_ConstructProps) 
    constructor(id: string, displayName: string, iconHint: Gio.Icon | null, collapsed: boolean) 
    static new(id: string, displayName: string, iconHint: Gio.Icon | null, collapsed: boolean): CheckOptionFilter

    // Overloads of new

    static new(): OptionsFilter
    _init(config?: CheckOptionFilter_ConstructProps): void
}

interface CheckOptionFilterCompact_ConstructProps extends OptionsFilter_ConstructProps {
}

interface CheckOptionFilterCompact {

    // Class property signals of Unity-7.0.Unity.CheckOptionFilterCompact

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
}

class CheckOptionFilterCompact extends OptionsFilter {

    // Own properties of Unity-7.0.Unity.CheckOptionFilterCompact

    static name: string
    static $gtype: GObject.GType<CheckOptionFilterCompact>

    // Constructors of Unity-7.0.Unity.CheckOptionFilterCompact

    constructor(config?: CheckOptionFilterCompact_ConstructProps) 
    constructor(id: string, displayName: string, iconHint: Gio.Icon | null, collapsed: boolean) 
    static new(id: string, displayName: string, iconHint: Gio.Icon | null, collapsed: boolean): CheckOptionFilterCompact

    // Overloads of new

    static new(): OptionsFilter
    _init(config?: CheckOptionFilterCompact_ConstructProps): void
}

interface RatingsFilter_ConstructProps extends Filter_ConstructProps {

    // Own constructor properties of Unity-7.0.Unity.RatingsFilter

    rating?: number | null
}

interface RatingsFilter {

    // Own properties of Unity-7.0.Unity.RatingsFilter

    rating: number

    // Owm methods of Unity-7.0.Unity.RatingsFilter

    getRating(): number

    // Class property signals of Unity-7.0.Unity.RatingsFilter

    connect(sigName: "notify::rating", callback: (...args: any[]) => void): number
    on(sigName: "notify::rating", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rating", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rating", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rating", ...args: any[]): void
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

    // Own properties of Unity-7.0.Unity.RatingsFilter

    static name: string
    static $gtype: GObject.GType<RatingsFilter>

    // Constructors of Unity-7.0.Unity.RatingsFilter

    constructor(config?: RatingsFilter_ConstructProps) 
    constructor(id: string, displayName: string, iconHint: Gio.Icon | null, collapsed: boolean) 
    static new(id: string, displayName: string, iconHint: Gio.Icon | null, collapsed: boolean): RatingsFilter
    _init(config?: RatingsFilter_ConstructProps): void
}

interface MultiRangeFilter_ConstructProps extends OptionsFilter_ConstructProps {
}

interface MultiRangeFilter {

    // Owm methods of Unity-7.0.Unity.MultiRangeFilter

    getFirstActive(): FilterOption | null
    getLastActive(): FilterOption | null

    // Class property signals of Unity-7.0.Unity.MultiRangeFilter

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
}

class MultiRangeFilter extends OptionsFilter {

    // Own properties of Unity-7.0.Unity.MultiRangeFilter

    static name: string
    static $gtype: GObject.GType<MultiRangeFilter>

    // Constructors of Unity-7.0.Unity.MultiRangeFilter

    constructor(config?: MultiRangeFilter_ConstructProps) 
    constructor(id: string, displayName: string, iconHint: Gio.Icon | null, collapsed: boolean) 
    static new(id: string, displayName: string, iconHint: Gio.Icon | null, collapsed: boolean): MultiRangeFilter

    // Overloads of new

    static new(): OptionsFilter
    _init(config?: MultiRangeFilter_ConstructProps): void
}

interface PreferencesManager_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Unity-7.0.Unity.PreferencesManager

    remoteContentSearch?: PreferencesManagerRemoteContent | null
    alwaysSearch?: string[] | null
    homeLensPriority?: string[] | null
    homeLensDefaultView?: string[] | null
    disabledScopes?: string[] | null
}

interface PreferencesManager {

    // Own properties of Unity-7.0.Unity.PreferencesManager

    remoteContentSearch: PreferencesManagerRemoteContent
    alwaysSearch: string[]
    homeLensPriority: string[]
    homeLensDefaultView: string[]
    disabledScopes: string[]

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class PreferencesManager extends GObject.Object {

    // Own properties of Unity-7.0.Unity.PreferencesManager

    static name: string
    static $gtype: GObject.GType<PreferencesManager>

    // Constructors of Unity-7.0.Unity.PreferencesManager

    constructor(config?: PreferencesManager_ConstructProps) 
    _init(config?: PreferencesManager_ConstructProps): void
    static getDefault(): PreferencesManager
}

interface DeprecatedScopeSearch_ConstructProps extends ScopeSearchBase_ConstructProps {

    // Own constructor properties of Unity-7.0.Unity.DeprecatedScopeSearch

    channelId?: string | null
    hints?: GLib.HashTable | null
    resultsModel?: Dee.SerializableModel | null
    owner?: DeprecatedScopeBase | null
}

/**
 * Signal callback interface for `finished`
 */
interface DeprecatedScopeSearch_FinishedSignalCallback {
    (): void
}

interface DeprecatedScopeSearch {

    // Own properties of Unity-7.0.Unity.DeprecatedScopeSearch

    readonly channelId: string
    readonly searchString: string
    readonly searchType: SearchType
    readonly hints: GLib.HashTable
    readonly resultsModel: Dee.SerializableModel
    readonly owner: DeprecatedScopeBase

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

    connect(sigName: "finished", callback: DeprecatedScopeSearch_FinishedSignalCallback): number
    on(sigName: "finished", callback: DeprecatedScopeSearch_FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: DeprecatedScopeSearch_FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: DeprecatedScopeSearch_FinishedSignalCallback): NodeJS.EventEmitter
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DeprecatedScopeSearch extends ScopeSearchBase {

    // Own properties of Unity-7.0.Unity.DeprecatedScopeSearch

    static name: string
    static $gtype: GObject.GType<DeprecatedScopeSearch>

    // Constructors of Unity-7.0.Unity.DeprecatedScopeSearch

    constructor(config?: DeprecatedScopeSearch_ConstructProps) 
    _init(config?: DeprecatedScopeSearch_ConstructProps): void
}

interface AggregatedScopeSearch_ConstructProps extends DeprecatedScopeSearch_ConstructProps {
}

/**
 * Signal callback interface for `transaction-complete`
 */
interface AggregatedScopeSearch_TransactionCompleteSignalCallback {
    (originScopeId: string): void
}

/**
 * Signal callback interface for `category-order-changed`
 */
interface AggregatedScopeSearch_CategoryOrderChangedSignalCallback {
    (categoryIndices: number[]): void
}

interface AggregatedScopeSearch {

    // Owm methods of Unity-7.0.Unity.AggregatedScopeSearch

    searchScope(scopeId: string, searchString: string, searchType: SearchType, hints?: GLib.HashTable | null, callback?: Gio.AsyncReadyCallback | null): void
    searchScopeFinish(res: Gio.AsyncResult): GLib.HashTable
    pushResults(scopeId: string, resultsModel: Dee.SerializableModel, categoryIds: string[], callback?: Gio.AsyncReadyCallback | null): void
    pushResultsFinish(res: Gio.AsyncResult): void
    pushFilterSettings(filters: FilterSet): void

    // Own signals of Unity-7.0.Unity.AggregatedScopeSearch

    connect(sigName: "transaction-complete", callback: AggregatedScopeSearch_TransactionCompleteSignalCallback): number
    on(sigName: "transaction-complete", callback: AggregatedScopeSearch_TransactionCompleteSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "transaction-complete", callback: AggregatedScopeSearch_TransactionCompleteSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "transaction-complete", callback: AggregatedScopeSearch_TransactionCompleteSignalCallback): NodeJS.EventEmitter
    emit(sigName: "transaction-complete", ...args: any[]): void
    connect(sigName: "category-order-changed", callback: AggregatedScopeSearch_CategoryOrderChangedSignalCallback): number
    on(sigName: "category-order-changed", callback: AggregatedScopeSearch_CategoryOrderChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "category-order-changed", callback: AggregatedScopeSearch_CategoryOrderChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "category-order-changed", callback: AggregatedScopeSearch_CategoryOrderChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "category-order-changed", ...args: any[]): void

    // Class property signals of Unity-7.0.Unity.AggregatedScopeSearch

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
}

class AggregatedScopeSearch extends DeprecatedScopeSearch {

    // Own properties of Unity-7.0.Unity.AggregatedScopeSearch

    static name: string
    static $gtype: GObject.GType<AggregatedScopeSearch>

    // Constructors of Unity-7.0.Unity.AggregatedScopeSearch

    constructor(config?: AggregatedScopeSearch_ConstructProps) 
    constructor(owner: AggregatorScope, channelId: string, hints: GLib.HashTable, resultsModel: Dee.SerializableModel) 
    static new(owner: AggregatorScope, channelId: string, hints: GLib.HashTable, resultsModel: Dee.SerializableModel): AggregatedScopeSearch
    _init(config?: AggregatedScopeSearch_ConstructProps): void
}

interface Preview_ConstructProps extends Dee.Serializable_ConstructProps, AbstractPreview_ConstructProps {

    // Own constructor properties of Unity-7.0.Unity.Preview

    title?: string | null
    subtitle?: string | null
    descriptionMarkup?: string | null
    imageSourceUri?: string | null
    image?: Gio.Icon | null
}

interface Preview extends Dee.Serializable {

    // Own properties of Unity-7.0.Unity.Preview

    title: string
    subtitle: string
    descriptionMarkup: string
    imageSourceUri: string
    image: Gio.Icon

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Preview extends AbstractPreview {

    // Own properties of Unity-7.0.Unity.Preview

    static name: string
    static $gtype: GObject.GType<Preview>

    // Constructors of Unity-7.0.Unity.Preview

    constructor(config?: Preview_ConstructProps) 
    _init(config?: Preview_ConstructProps): void
}

interface PreviewAction_ConstructProps extends Dee.Serializable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Unity-7.0.Unity.PreviewAction

    id?: string | null
    displayName?: string | null
    extraText?: string | null
    iconHint?: Gio.Icon | null
    layoutHint?: LayoutHint | null
}

/**
 * Signal callback interface for `activated`
 */
interface PreviewAction_ActivatedSignalCallback {
    (uri: string): ActivationResponse
}

interface PreviewAction extends Dee.Serializable {

    // Own properties of Unity-7.0.Unity.PreviewAction

    readonly id: string
    readonly displayName: string
    extraText: string
    readonly iconHint: Gio.Icon
    readonly layoutHint: LayoutHint
    readonly hints: GLib.HashTable

    // Owm methods of Unity-7.0.Unity.PreviewAction

    getId(): string
    getDisplayName(): string
    getExtraText(): string
    setExtraText(value: string): void
    getIconHint(): Gio.Icon | null
    getLayoutHint(): LayoutHint
    getHints(): GLib.HashTable | null

    // Own signals of Unity-7.0.Unity.PreviewAction

    connect(sigName: "activated", callback: PreviewAction_ActivatedSignalCallback): number
    on(sigName: "activated", callback: PreviewAction_ActivatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activated", callback: PreviewAction_ActivatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activated", callback: PreviewAction_ActivatedSignalCallback): NodeJS.EventEmitter
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class PreviewAction extends GObject.Object {

    // Own properties of Unity-7.0.Unity.PreviewAction

    static name: string
    static $gtype: GObject.GType<PreviewAction>

    // Constructors of Unity-7.0.Unity.PreviewAction

    constructor(config?: PreviewAction_ConstructProps) 
    constructor(id: string, displayName: string, iconHint?: Gio.Icon | null) 
    static new(id: string, displayName: string, iconHint?: Gio.Icon | null): PreviewAction
    static withLayoutHint(id: string, displayName: string, iconHint: Gio.Icon | null, layout: LayoutHint): PreviewAction
    static withUri(uri: string, displayName: string, iconHint?: Gio.Icon | null): PreviewAction
    _init(config?: PreviewAction_ConstructProps): void
}

interface InfoHint_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {

    // Own constructor properties of Unity-7.0.Unity.InfoHint

    id?: string | null
    displayName?: string | null
    iconHint?: Gio.Icon | null
    data?: GLib.Variant | null
}

interface InfoHint {

    // Own properties of Unity-7.0.Unity.InfoHint

    readonly id: string
    readonly displayName: string
    readonly iconHint: Gio.Icon
    readonly data: GLib.Variant

    // Owm methods of Unity-7.0.Unity.InfoHint

    getId(): string
    getDisplayName(): string
    getIconHint(): Gio.Icon | null
    getData(): GLib.Variant

    // Overloads of getData

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key?: string): object | null
    getData(...args: any[]): any
    getData(args_or_key?: any[] | string): GLib.Variant | object | null | any

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class InfoHint extends GObject.InitiallyUnowned {

    // Own properties of Unity-7.0.Unity.InfoHint

    static name: string
    static $gtype: GObject.GType<InfoHint>

    // Constructors of Unity-7.0.Unity.InfoHint

    constructor(config?: InfoHint_ConstructProps) 
    constructor(id: string, displayName: string, iconHint: Gio.Icon | null, data: string) 
    static new(id: string, displayName: string, iconHint: Gio.Icon | null, data: string): InfoHint
    static withVariant(id: string, displayName: string, iconHint: Gio.Icon | null, data: GLib.Variant): InfoHint
    _init(config?: InfoHint_ConstructProps): void
}

interface GenericPreview_ConstructProps extends Preview_ConstructProps {
}

interface GenericPreview {

    // Class property signals of Unity-7.0.Unity.GenericPreview

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

    // Own properties of Unity-7.0.Unity.GenericPreview

    static name: string
    static $gtype: GObject.GType<GenericPreview>

    // Constructors of Unity-7.0.Unity.GenericPreview

    constructor(config?: GenericPreview_ConstructProps) 
    constructor(title: string, description: string, image?: Gio.Icon | null) 
    static new(title: string, description: string, image?: Gio.Icon | null): GenericPreview
    _init(config?: GenericPreview_ConstructProps): void
}

interface ApplicationPreview_ConstructProps extends Preview_ConstructProps {

    // Own constructor properties of Unity-7.0.Unity.ApplicationPreview

    appIcon?: Gio.Icon | null
    license?: string | null
    copyright?: string | null
    lastUpdate?: string | null
}

interface ApplicationPreview {

    // Own properties of Unity-7.0.Unity.ApplicationPreview

    appIcon: Gio.Icon
    license: string
    copyright: string
    lastUpdate: string

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

    // Own properties of Unity-7.0.Unity.ApplicationPreview

    static name: string
    static $gtype: GObject.GType<ApplicationPreview>

    // Constructors of Unity-7.0.Unity.ApplicationPreview

    constructor(config?: ApplicationPreview_ConstructProps) 
    constructor(title: string, subtitle: string, description: string, icon?: Gio.Icon | null, screenshot?: Gio.Icon | null) 
    static new(title: string, subtitle: string, description: string, icon?: Gio.Icon | null, screenshot?: Gio.Icon | null): ApplicationPreview
    _init(config?: ApplicationPreview_ConstructProps): void
}

interface MusicPreview_ConstructProps extends Preview_ConstructProps {
}

interface MusicPreview {

    // Owm methods of Unity-7.0.Unity.MusicPreview

    addTrack(track: TrackMetadata): void

    // Class property signals of Unity-7.0.Unity.MusicPreview

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

    // Own properties of Unity-7.0.Unity.MusicPreview

    static name: string
    static $gtype: GObject.GType<MusicPreview>

    // Constructors of Unity-7.0.Unity.MusicPreview

    constructor(config?: MusicPreview_ConstructProps) 
    constructor(title: string, subtitle: string, image?: Gio.Icon | null) 
    static new(title: string, subtitle: string, image?: Gio.Icon | null): MusicPreview
    _init(config?: MusicPreview_ConstructProps): void
}

interface PaymentPreview_ConstructProps extends Preview_ConstructProps {

    // Own constructor properties of Unity-7.0.Unity.PaymentPreview

    header?: string | null
    email?: string | null
    paymentMethod?: string | null
    purchasePrize?: string | null
    purchaseType?: string | null
    previewType?: PaymentPreviewType | null
}

interface PaymentPreview {

    // Own properties of Unity-7.0.Unity.PaymentPreview

    header: string
    email: string
    paymentMethod: string
    purchasePrize: string
    purchaseType: string
    previewType: PaymentPreviewType

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

class PaymentPreview extends Preview {

    // Own properties of Unity-7.0.Unity.PaymentPreview

    static name: string
    static $gtype: GObject.GType<PaymentPreview>

    // Constructors of Unity-7.0.Unity.PaymentPreview

    constructor(config?: PaymentPreview_ConstructProps) 
    constructor(title: string, subtitle: string, image?: Gio.Icon | null) 
    static new(title: string, subtitle: string, image?: Gio.Icon | null): PaymentPreview
    static forType(title: string, subtitle: string, image: Gio.Icon | null, type: PaymentPreviewType): PaymentPreview
    static forApplication(title: string, subtitle: string, image?: Gio.Icon | null): PaymentPreview
    static forMusic(title: string, subtitle: string, image?: Gio.Icon | null): PaymentPreview
    static forError(title: string, subtitle: string, image?: Gio.Icon | null): PaymentPreview
    _init(config?: PaymentPreview_ConstructProps): void
}

interface MoviePreview_ConstructProps extends Preview_ConstructProps {

    // Own constructor properties of Unity-7.0.Unity.MoviePreview

    year?: string | null
}

interface MoviePreview {

    // Own properties of Unity-7.0.Unity.MoviePreview

    year: string

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

    // Own properties of Unity-7.0.Unity.MoviePreview

    static name: string
    static $gtype: GObject.GType<MoviePreview>

    // Constructors of Unity-7.0.Unity.MoviePreview

    constructor(config?: MoviePreview_ConstructProps) 
    constructor(title: string, subtitle: string, description: string, image?: Gio.Icon | null) 
    static new(title: string, subtitle: string, description: string, image?: Gio.Icon | null): MoviePreview
    _init(config?: MoviePreview_ConstructProps): void
}

interface SocialPreview_ConstructProps extends Preview_ConstructProps {

    // Own constructor properties of Unity-7.0.Unity.SocialPreview

    avatar?: Gio.Icon | null
    content?: string | null
    sender?: string | null
}

interface SocialPreview {

    // Own properties of Unity-7.0.Unity.SocialPreview

    avatar: Gio.Icon
    content: string
    sender: string

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

    // Own properties of Unity-7.0.Unity.SocialPreview

    static name: string
    static $gtype: GObject.GType<SocialPreview>

    // Constructors of Unity-7.0.Unity.SocialPreview

    constructor(config?: SocialPreview_ConstructProps) 
    constructor(sender: string, subtitle: string, content: string, avatar?: Gio.Icon | null) 
    static new(sender: string, subtitle: string, content: string, avatar?: Gio.Icon | null): SocialPreview
    _init(config?: SocialPreview_ConstructProps): void
}

interface SocialPreviewComment_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {

    // Own constructor properties of Unity-7.0.Unity.SocialPreviewComment

    id?: string | null
    name?: string | null
    text?: string | null
    time?: string | null
}

interface SocialPreviewComment {

    // Own properties of Unity-7.0.Unity.SocialPreviewComment

    readonly id: string
    readonly name: string
    readonly text: string
    readonly time: string

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class SocialPreviewComment extends GObject.InitiallyUnowned {

    // Own properties of Unity-7.0.Unity.SocialPreviewComment

    static name: string
    static $gtype: GObject.GType<SocialPreviewComment>

    // Constructors of Unity-7.0.Unity.SocialPreviewComment

    constructor(config?: SocialPreviewComment_ConstructProps) 
    constructor(id: string, name: string, text: string, time: string) 
    static new(id: string, name: string, text: string, time: string): SocialPreviewComment
    _init(config?: SocialPreviewComment_ConstructProps): void
}

interface ActivationResponse_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Unity-7.0.Unity.ActivationResponse

    handled?: HandledType | null
    gotoUri?: string | null
}

interface ActivationResponse {

    // Own properties of Unity-7.0.Unity.ActivationResponse

    readonly handled: HandledType
    gotoUri: string

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ActivationResponse extends GObject.Object {

    // Own properties of Unity-7.0.Unity.ActivationResponse

    static name: string
    static $gtype: GObject.GType<ActivationResponse>

    // Constructors of Unity-7.0.Unity.ActivationResponse

    constructor(config?: ActivationResponse_ConstructProps) 
    constructor(handled: HandledType, gotoUri: string) 
    static new(handled: HandledType, gotoUri: string): ActivationResponse
    static withSearch(searchString: string, filterSet?: FilterSet | null, searchMetadata?: SearchMetadata | null): ActivationResponse
    static withPreview(preview: Preview): ActivationResponse
    _init(config?: ActivationResponse_ConstructProps): void
}

interface AggregatorActivation_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Unity-7.0.Unity.AggregatorActivation

    channelId?: string | null
    scopeId?: string | null
    actionType?: number | null
    scopeResult?: ScopeResult | null
    hints?: GLib.HashTable | null
}

interface AggregatorActivation {

    // Own properties of Unity-7.0.Unity.AggregatorActivation

    channelId: string
    scopeId: string
    actionType: number
    scopeResult: ScopeResult
    hints: GLib.HashTable

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class AggregatorActivation extends GObject.Object {

    // Own properties of Unity-7.0.Unity.AggregatorActivation

    static name: string
    static $gtype: GObject.GType<AggregatorActivation>

    // Constructors of Unity-7.0.Unity.AggregatorActivation

    constructor(config?: AggregatorActivation_ConstructProps) 
    constructor(channelId: string, scopeId: string, actionType: number, result?: ScopeResult | null) 
    static new(channelId: string, scopeId: string, actionType: number, result?: ScopeResult | null): AggregatorActivation
    _init(config?: AggregatorActivation_ConstructProps): void
}

interface FilterSet_ConstructProps extends GObject.Object_ConstructProps {
}

interface FilterSet {

    // Owm methods of Unity-7.0.Unity.FilterSet

    add(filter: Filter): void
    getFilterById(filterId: string): Filter | null
    getFilters(): Filter[]

    // Class property signals of Unity-7.0.Unity.FilterSet

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FilterSet extends GObject.Object {

    // Own properties of Unity-7.0.Unity.FilterSet

    static name: string
    static $gtype: GObject.GType<FilterSet>

    // Constructors of Unity-7.0.Unity.FilterSet

    constructor(config?: FilterSet_ConstructProps) 
    constructor() 
    static new(): FilterSet
    _init(config?: FilterSet_ConstructProps): void
}

interface CategorySet_ConstructProps extends GObject.Object_ConstructProps {
}

interface CategorySet {

    // Owm methods of Unity-7.0.Unity.CategorySet

    add(category: Category): void
    getCategories(): Category[]

    // Class property signals of Unity-7.0.Unity.CategorySet

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class CategorySet extends GObject.Object {

    // Own properties of Unity-7.0.Unity.CategorySet

    static name: string
    static $gtype: GObject.GType<CategorySet>

    // Constructors of Unity-7.0.Unity.CategorySet

    constructor(config?: CategorySet_ConstructProps) 
    constructor() 
    static new(): CategorySet
    _init(config?: CategorySet_ConstructProps): void
}

interface Schema_ConstructProps extends GObject.Object_ConstructProps {
}

interface Schema {

    // Owm methods of Unity-7.0.Unity.Schema

    addField(name: string, schema: string, type: SchemaFieldType): void
    getFields(): SchemaFieldInfo[]

    // Class property signals of Unity-7.0.Unity.Schema

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Schema extends GObject.Object {

    // Own properties of Unity-7.0.Unity.Schema

    static name: string
    static $gtype: GObject.GType<Schema>

    // Constructors of Unity-7.0.Unity.Schema

    constructor(config?: Schema_ConstructProps) 
    constructor() 
    static new(): Schema
    _init(config?: Schema_ConstructProps): void
}

interface Cancellable_ConstructProps extends GObject.Object_ConstructProps {
}

interface Cancellable {

    // Owm methods of Unity-7.0.Unity.Cancellable

    cancel(): void
    isCancelled(): boolean
    getGcancellable(): Gio.Cancellable | null

    // Class property signals of Unity-7.0.Unity.Cancellable

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Cancellable extends GObject.Object {

    // Own properties of Unity-7.0.Unity.Cancellable

    static name: string
    static $gtype: GObject.GType<Cancellable>

    // Constructors of Unity-7.0.Unity.Cancellable

    constructor(config?: Cancellable_ConstructProps) 
    _init(config?: Cancellable_ConstructProps): void
    static create(): Cancellable
}

interface ScopeSearchBase_ConstructProps extends GObject.Object_ConstructProps {
}

interface ScopeSearchBase {

    // Own fields of Unity-7.0.Unity.ScopeSearchBase

    searchContext?: SearchContext | null

    // Owm methods of Unity-7.0.Unity.ScopeSearchBase

    run(): void
    runAsync(asyncCallback: ScopeSearchBaseCallback): void
    setSearchContext(ctx: SearchContext): void

    // Class property signals of Unity-7.0.Unity.ScopeSearchBase

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ScopeSearchBase extends GObject.Object {

    // Own properties of Unity-7.0.Unity.ScopeSearchBase

    static name: string
    static $gtype: GObject.GType<ScopeSearchBase>

    // Constructors of Unity-7.0.Unity.ScopeSearchBase

    constructor(config?: ScopeSearchBase_ConstructProps) 
    _init(config?: ScopeSearchBase_ConstructProps): void
}

interface ResultSet_ConstructProps extends GObject.Object_ConstructProps {
}

interface ResultSet {

    // Own fields of Unity-7.0.Unity.ResultSet

    ttl: number

    // Owm methods of Unity-7.0.Unity.ResultSet

    addResult(result: ScopeResult): void
    addResultFromVariant(variant: GLib.Variant): void
    flush(): void

    // Class property signals of Unity-7.0.Unity.ResultSet

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ResultSet extends GObject.Object {

    // Own properties of Unity-7.0.Unity.ResultSet

    static name: string
    static $gtype: GObject.GType<ResultSet>

    // Constructors of Unity-7.0.Unity.ResultSet

    constructor(config?: ResultSet_ConstructProps) 
    _init(config?: ResultSet_ConstructProps): void
}

interface AbstractPreview_ConstructProps extends GObject.Object_ConstructProps {
}

interface AbstractPreview {

    // Owm methods of Unity-7.0.Unity.AbstractPreview

    serializeAs(serializationType: SerializationType): Uint8Array

    // Class property signals of Unity-7.0.Unity.AbstractPreview

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class AbstractPreview extends GObject.Object {

    // Own properties of Unity-7.0.Unity.AbstractPreview

    static name: string
    static $gtype: GObject.GType<AbstractPreview>

    // Constructors of Unity-7.0.Unity.AbstractPreview

    constructor(config?: AbstractPreview_ConstructProps) 
    _init(config?: AbstractPreview_ConstructProps): void
}

interface ResultPreviewer_ConstructProps extends GObject.Object_ConstructProps {
}

interface ResultPreviewer {

    // Own fields of Unity-7.0.Unity.ResultPreviewer

    result: ScopeResult
    metadata: SearchMetadata
    cancellable: Cancellable

    // Owm methods of Unity-7.0.Unity.ResultPreviewer

    run(): AbstractPreview | null
    runAsync(asyncCallback: AbstractPreviewCallback): void
    setScopeResult(scopeResult: ScopeResult): void
    setSearchMetadata(searchMetadata: SearchMetadata): void

    // Class property signals of Unity-7.0.Unity.ResultPreviewer

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ResultPreviewer extends GObject.Object {

    // Own properties of Unity-7.0.Unity.ResultPreviewer

    static name: string
    static $gtype: GObject.GType<ResultPreviewer>

    // Constructors of Unity-7.0.Unity.ResultPreviewer

    constructor(config?: ResultPreviewer_ConstructProps) 
    _init(config?: ResultPreviewer_ConstructProps): void
}

interface SearchMetadata_ConstructProps extends GObject.Object_ConstructProps {
}

interface SearchMetadata {

    // Own properties of Unity-7.0.Unity.SearchMetadata

    readonly locale: string
    readonly formFactor: string
    readonly location: GeoCoordinate

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class SearchMetadata extends GObject.Object {

    // Own properties of Unity-7.0.Unity.SearchMetadata

    static name: string
    static $gtype: GObject.GType<SearchMetadata>

    // Constructors of Unity-7.0.Unity.SearchMetadata

    constructor(config?: SearchMetadata_ConstructProps) 
    constructor() 
    static new(): SearchMetadata
    _init(config?: SearchMetadata_ConstructProps): void
    static create(metadata?: GLib.HashTable | null): SearchMetadata
    static createFromVariant(metadata: GLib.Variant): SearchMetadata
}

interface GeoCoordinate_ConstructProps extends GObject.Object_ConstructProps {
}

interface GeoCoordinate {

    // Own fields of Unity-7.0.Unity.GeoCoordinate

    latitude: number
    longitude: number
    altitude: number

    // Owm methods of Unity-7.0.Unity.GeoCoordinate

    hasValidAltitude(): boolean

    // Class property signals of Unity-7.0.Unity.GeoCoordinate

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GeoCoordinate extends GObject.Object {

    // Own properties of Unity-7.0.Unity.GeoCoordinate

    static name: string
    static $gtype: GObject.GType<GeoCoordinate>

    // Constructors of Unity-7.0.Unity.GeoCoordinate

    constructor(config?: GeoCoordinate_ConstructProps) 
    constructor(latitude: number, longitude: number) 
    static new(latitude: number, longitude: number): GeoCoordinate
    static withAltitude(latitude: number, longitude: number, altitude: number): GeoCoordinate
    _init(config?: GeoCoordinate_ConstructProps): void
}

interface AbstractScope_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `results-invalidated-internal`
 */
interface AbstractScope_ResultsInvalidatedInternalSignalCallback {
    (searchType: SearchType): void
}

interface AbstractScope {

    // Owm methods of Unity-7.0.Unity.AbstractScope

    createSearchForQuery(searchContext: SearchContext): ScopeSearchBase
    createPreviewer(result: ScopeResult, metadata: SearchMetadata): ResultPreviewer
    getCategories(): CategorySet
    getFilters(): FilterSet
    getSchema(): Schema
    getSearchHint(): string
    getGroupName(): string
    getUniqueName(): string
    activate(result: ScopeResult, metadata: SearchMetadata, actionId?: string | null): ActivationResponse | null
    normalizeSearchQuery(searchQuery: string): string
    resultsInvalidated(searchType: SearchType): void

    // Own signals of Unity-7.0.Unity.AbstractScope

    connect(sigName: "results-invalidated-internal", callback: AbstractScope_ResultsInvalidatedInternalSignalCallback): number
    on(sigName: "results-invalidated-internal", callback: AbstractScope_ResultsInvalidatedInternalSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "results-invalidated-internal", callback: AbstractScope_ResultsInvalidatedInternalSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "results-invalidated-internal", callback: AbstractScope_ResultsInvalidatedInternalSignalCallback): NodeJS.EventEmitter
    emit(sigName: "results-invalidated-internal", ...args: any[]): void

    // Class property signals of Unity-7.0.Unity.AbstractScope

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class AbstractScope extends GObject.Object {

    // Own properties of Unity-7.0.Unity.AbstractScope

    static name: string
    static $gtype: GObject.GType<AbstractScope>

    // Constructors of Unity-7.0.Unity.AbstractScope

    constructor(config?: AbstractScope_ConstructProps) 
    _init(config?: AbstractScope_ConstructProps): void
}

interface ScopeDBusConnector_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Unity-7.0.Unity.ScopeDBusConnector

    scope?: AbstractScope | null
}

interface ScopeDBusConnector {

    // Own properties of Unity-7.0.Unity.ScopeDBusConnector

    readonly scope: AbstractScope

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ScopeDBusConnector extends GObject.Object {

    // Own properties of Unity-7.0.Unity.ScopeDBusConnector

    static name: string
    static $gtype: GObject.GType<ScopeDBusConnector>

    // Constructors of Unity-7.0.Unity.ScopeDBusConnector

    constructor(config?: ScopeDBusConnector_ConstructProps) 
    constructor(scope: AbstractScope) 
    static new(scope: AbstractScope): ScopeDBusConnector
    _init(config?: ScopeDBusConnector_ConstructProps): void
    static run(): void
    static quit(): void
}

interface DeprecatedScopeBase_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Unity-7.0.Unity.DeprecatedScopeBase

    id?: string | null
    dbusPath?: string | null
    searchInGlobal?: boolean | null
    visible?: boolean | null
    isMaster?: boolean | null
    searchHint?: string | null
    sources?: OptionsFilter | null
    categories?: CategorySet | null
    filters?: FilterSet | null
    schema?: Schema | null
}

/**
 * Signal callback interface for `active-sources-changed`
 */
interface DeprecatedScopeBase_ActiveSourcesChangedSignalCallback {
    (activeIds: string[]): void
}

interface DeprecatedScopeBase {

    // Own properties of Unity-7.0.Unity.DeprecatedScopeBase

    readonly id: string
    readonly dbusPath: string
    searchInGlobal: boolean
    visible: boolean
    readonly isMaster: boolean
    searchHint: string
    sources: OptionsFilter
    categories: CategorySet
    filters: FilterSet
    schema: Schema

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

    connect(sigName: "active-sources-changed", callback: DeprecatedScopeBase_ActiveSourcesChangedSignalCallback): number
    on(sigName: "active-sources-changed", callback: DeprecatedScopeBase_ActiveSourcesChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-sources-changed", callback: DeprecatedScopeBase_ActiveSourcesChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-sources-changed", callback: DeprecatedScopeBase_ActiveSourcesChangedSignalCallback): NodeJS.EventEmitter
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DeprecatedScopeBase extends GObject.Object {

    // Own properties of Unity-7.0.Unity.DeprecatedScopeBase

    static name: string
    static $gtype: GObject.GType<DeprecatedScopeBase>

    // Constructors of Unity-7.0.Unity.DeprecatedScopeBase

    constructor(config?: DeprecatedScopeBase_ConstructProps) 
    _init(config?: DeprecatedScopeBase_ConstructProps): void
}

interface DeprecatedScope_ConstructProps extends DeprecatedScopeBase_ConstructProps {
}

/**
 * Signal callback interface for `activate-uri`
 */
interface DeprecatedScope_ActivateUriSignalCallback {
    (uri: string): ActivationResponse | null
}

/**
 * Signal callback interface for `preview-uri`
 */
interface DeprecatedScope_PreviewUriSignalCallback {
    (uri: string): Preview | null
}

/**
 * Signal callback interface for `generate-search-key`
 */
interface DeprecatedScope_GenerateSearchKeySignalCallback {
    (search: DeprecatedScopeSearch): string
}

/**
 * Signal callback interface for `search-changed`
 */
interface DeprecatedScope_SearchChangedSignalCallback {
    (search: DeprecatedScopeSearch, searchType: SearchType, cancellable: Gio.Cancellable): void
}

interface DeprecatedScope {

    // Owm methods of Unity-7.0.Unity.DeprecatedScope

    previewResult(result: ScopeResult, callback?: Gio.AsyncReadyCallback | null): void
    previewResultFinish(res: Gio.AsyncResult): Preview | null
    activateResult(result: ScopeResult, callback?: Gio.AsyncReadyCallback | null): void
    activateResultFinish(res: Gio.AsyncResult): ActivationResponse | null
    queueSearchChanged(searchType: SearchType): void

    // Own signals of Unity-7.0.Unity.DeprecatedScope

    connect(sigName: "activate-uri", callback: DeprecatedScope_ActivateUriSignalCallback): number
    on(sigName: "activate-uri", callback: DeprecatedScope_ActivateUriSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate-uri", callback: DeprecatedScope_ActivateUriSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate-uri", callback: DeprecatedScope_ActivateUriSignalCallback): NodeJS.EventEmitter
    emit(sigName: "activate-uri", ...args: any[]): void
    connect(sigName: "preview-uri", callback: DeprecatedScope_PreviewUriSignalCallback): number
    on(sigName: "preview-uri", callback: DeprecatedScope_PreviewUriSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "preview-uri", callback: DeprecatedScope_PreviewUriSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "preview-uri", callback: DeprecatedScope_PreviewUriSignalCallback): NodeJS.EventEmitter
    emit(sigName: "preview-uri", ...args: any[]): void
    connect(sigName: "generate-search-key", callback: DeprecatedScope_GenerateSearchKeySignalCallback): number
    on(sigName: "generate-search-key", callback: DeprecatedScope_GenerateSearchKeySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "generate-search-key", callback: DeprecatedScope_GenerateSearchKeySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "generate-search-key", callback: DeprecatedScope_GenerateSearchKeySignalCallback): NodeJS.EventEmitter
    emit(sigName: "generate-search-key", ...args: any[]): void
    connect(sigName: "search-changed", callback: DeprecatedScope_SearchChangedSignalCallback): number
    on(sigName: "search-changed", callback: DeprecatedScope_SearchChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "search-changed", callback: DeprecatedScope_SearchChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "search-changed", callback: DeprecatedScope_SearchChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "search-changed", searchType: SearchType, cancellable: Gio.Cancellable, ...args: any[]): void

    // Class property signals of Unity-7.0.Unity.DeprecatedScope

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
}

class DeprecatedScope extends DeprecatedScopeBase {

    // Own properties of Unity-7.0.Unity.DeprecatedScope

    static name: string
    static $gtype: GObject.GType<DeprecatedScope>

    // Constructors of Unity-7.0.Unity.DeprecatedScope

    constructor(config?: DeprecatedScope_ConstructProps) 
    constructor(dbusPath: string, id: string) 
    static new(dbusPath: string, id: string): DeprecatedScope
    _init(config?: DeprecatedScope_ConstructProps): void
}

interface AggregatorScope_ConstructProps extends DeprecatedScopeBase_ConstructProps {

    // Own constructor properties of Unity-7.0.Unity.AggregatorScope

    mergeMode?: AggregatorScopeMergeMode | null
    proxyFilterHints?: boolean | null
    automaticFlushing?: boolean | null
}

interface AggregatorScope {

    // Own properties of Unity-7.0.Unity.AggregatorScope

    mergeMode: AggregatorScopeMergeMode
    proxyFilterHints: boolean
    automaticFlushing: boolean

    // Owm methods of Unity-7.0.Unity.AggregatorScope

    categoryIndexForScopeId(scopeId: string): number
    addSorter(categoryIndex: number, field: string, flags: AggregatorScopeSortFlags): void
    addConstraint(categoryIndex: number, field: string): void
    search(scopeSearch: AggregatedScopeSearch, callback?: Gio.AsyncReadyCallback | null): void
    searchFinish(res: Gio.AsyncResult): void
    activate(activation: AggregatorActivation, callback?: Gio.AsyncReadyCallback | null): void
    activateFinish(res: Gio.AsyncResult): ActivationResponse | null
    getMergeMode(): AggregatorScopeMergeMode
    setMergeMode(value: AggregatorScopeMergeMode): void
    getProxyFilterHints(): boolean
    setProxyFilterHints(value: boolean): void
    getAutomaticFlushing(): boolean
    setAutomaticFlushing(value: boolean): void

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
}

class AggregatorScope extends DeprecatedScopeBase {

    // Own properties of Unity-7.0.Unity.AggregatorScope

    static name: string
    static $gtype: GObject.GType<AggregatorScope>

    // Constructors of Unity-7.0.Unity.AggregatorScope

    constructor(config?: AggregatorScope_ConstructProps) 
    _init(config?: AggregatorScope_ConstructProps): void
}

interface MasterScope_ConstructProps extends AggregatorScope_ConstructProps {

    // Own constructor properties of Unity-7.0.Unity.MasterScope

    noContentHint?: string | null
}

interface MasterScope {

    // Own properties of Unity-7.0.Unity.MasterScope

    noContentHint: string

    // Owm methods of Unity-7.0.Unity.MasterScope

    getNoContentHint(): string
    setNoContentHint(value: string): void

    // Class property signals of Unity-7.0.Unity.MasterScope

    connect(sigName: "notify::no-content-hint", callback: (...args: any[]) => void): number
    on(sigName: "notify::no-content-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::no-content-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::no-content-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::no-content-hint", ...args: any[]): void
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
}

class MasterScope extends AggregatorScope {

    // Own properties of Unity-7.0.Unity.MasterScope

    static name: string
    static $gtype: GObject.GType<MasterScope>

    // Constructors of Unity-7.0.Unity.MasterScope

    constructor(config?: MasterScope_ConstructProps) 
    constructor(dbusPath: string, id: string) 
    static new(dbusPath: string, id: string): MasterScope
    _init(config?: MasterScope_ConstructProps): void
}

interface SimpleScope_ConstructProps extends AbstractScope_ConstructProps {

    // Own constructor properties of Unity-7.0.Unity.SimpleScope

    filterSet?: FilterSet | null
    categorySet?: CategorySet | null
    schema?: Schema | null
    searchHint?: string | null
    groupName?: string | null
    uniqueName?: string | null
}

interface SimpleScope {

    // Own properties of Unity-7.0.Unity.SimpleScope

    filterSet: FilterSet
    categorySet: CategorySet
    schema: Schema
    searchHint: string
    groupName: string
    uniqueName: string

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
    setSchema(value: Schema): void
    getSearchHint(): string
    setSearchHint(value: string): void
    getGroupName(): string
    setGroupName(value: string): void
    getUniqueName(): string
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class SimpleScope extends AbstractScope {

    // Own properties of Unity-7.0.Unity.SimpleScope

    static name: string
    static $gtype: GObject.GType<SimpleScope>

    // Constructors of Unity-7.0.Unity.SimpleScope

    constructor(config?: SimpleScope_ConstructProps) 
    constructor() 
    static new(): SimpleScope
    _init(config?: SimpleScope_ConstructProps): void
}

interface ScopeLoader_ConstructProps extends GObject.Object_ConstructProps {
}

interface ScopeLoader {

    // Owm methods of Unity-7.0.Unity.ScopeLoader

    getScopes(moduleName: string, moduleType?: string | null): AbstractScope[]
    exportScopes(scopes: AbstractScope[]): void
    loadGroup(groupName: string): void
    loadScope(scopeId: string): void
    loadModule(module: string, moduleType?: string | null): void

    // Class property signals of Unity-7.0.Unity.ScopeLoader

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ScopeLoader extends GObject.Object {

    // Own properties of Unity-7.0.Unity.ScopeLoader

    static name: string
    static $gtype: GObject.GType<ScopeLoader>

    // Constructors of Unity-7.0.Unity.ScopeLoader

    constructor(config?: ScopeLoader_ConstructProps) 
    constructor() 
    static new(): ScopeLoader
    _init(config?: ScopeLoader_ConstructProps): void
}

interface TrackMetadata_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Unity-7.0.Unity.TrackMetadata

    uri?: string | null
    trackNo?: number | null
    artist?: string | null
    title?: string | null
    album?: string | null
    length?: number | null
    artLocation?: Gio.File | null
    artIcon?: Gio.Icon | null
}

interface TrackMetadata {

    // Own properties of Unity-7.0.Unity.TrackMetadata

    uri: string
    trackNo: number
    artist: string
    title: string
    album: string
    length: number
    artLocation: Gio.File
    artIcon: Gio.Icon

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class TrackMetadata extends GObject.Object {

    // Own properties of Unity-7.0.Unity.TrackMetadata

    static name: string
    static $gtype: GObject.GType<TrackMetadata>

    // Constructors of Unity-7.0.Unity.TrackMetadata

    constructor(config?: TrackMetadata_ConstructProps) 
    constructor() 
    static new(): TrackMetadata
    static full(uri: string, trackNo: number, title: string, artist: string, album: string, length: number): TrackMetadata
    _init(config?: TrackMetadata_ConstructProps): void
}

interface Playlist_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Unity-7.0.Unity.Playlist

    id?: string | null
    name?: string | null
    icon?: Gio.Icon | null
    creationDate?: GLib.DateTime | null
    modificationDate?: GLib.DateTime | null
    lastPlayDate?: GLib.DateTime | null
}

interface Playlist {

    // Own properties of Unity-7.0.Unity.Playlist

    readonly id: string
    name: string
    icon: Gio.Icon
    creationDate: GLib.DateTime
    modificationDate: GLib.DateTime
    lastPlayDate: GLib.DateTime

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Playlist extends GObject.Object {

    // Own properties of Unity-7.0.Unity.Playlist

    static name: string
    static $gtype: GObject.GType<Playlist>

    // Constructors of Unity-7.0.Unity.Playlist

    constructor(config?: Playlist_ConstructProps) 
    constructor(id: string) 
    static new(id: string): Playlist
    _init(config?: Playlist_ConstructProps): void
}

interface MusicPlayer_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Unity-7.0.Unity.MusicPlayer

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

/**
 * Signal callback interface for `raise`
 */
interface MusicPlayer_RaiseSignalCallback {
    (): void
}

/**
 * Signal callback interface for `play-pause`
 */
interface MusicPlayer_PlayPauseSignalCallback {
    (): void
}

/**
 * Signal callback interface for `previous`
 */
interface MusicPlayer_PreviousSignalCallback {
    (): void
}

/**
 * Signal callback interface for `next`
 */
interface MusicPlayer_NextSignalCallback {
    (): void
}

/**
 * Signal callback interface for `activate-playlist`
 */
interface MusicPlayer_ActivatePlaylistSignalCallback {
    (playlistId: string): void
}

interface MusicPlayer {

    // Own properties of Unity-7.0.Unity.MusicPlayer

    readonly appInfo: Gio.AppInfo
    readonly desktopFileName: string
    isBlacklisted: boolean
    title: string
    canGoNext: boolean
    canGoPrevious: boolean
    canPlay: boolean
    canPause: boolean
    currentTrack: TrackMetadata
    playbackState: PlaybackState
    currentPlaylist: Playlist
    trackMenu: Dbusmenu.Menuitem
    playerMenu: Dbusmenu.Menuitem

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

    connect(sigName: "raise", callback: MusicPlayer_RaiseSignalCallback): number
    on(sigName: "raise", callback: MusicPlayer_RaiseSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "raise", callback: MusicPlayer_RaiseSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "raise", callback: MusicPlayer_RaiseSignalCallback): NodeJS.EventEmitter
    emit(sigName: "raise", ...args: any[]): void
    connect(sigName: "play-pause", callback: MusicPlayer_PlayPauseSignalCallback): number
    on(sigName: "play-pause", callback: MusicPlayer_PlayPauseSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "play-pause", callback: MusicPlayer_PlayPauseSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "play-pause", callback: MusicPlayer_PlayPauseSignalCallback): NodeJS.EventEmitter
    emit(sigName: "play-pause", ...args: any[]): void
    connect(sigName: "previous", callback: MusicPlayer_PreviousSignalCallback): number
    on(sigName: "previous", callback: MusicPlayer_PreviousSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "previous", callback: MusicPlayer_PreviousSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "previous", callback: MusicPlayer_PreviousSignalCallback): NodeJS.EventEmitter
    emit(sigName: "previous", ...args: any[]): void
    connect(sigName: "next", callback: MusicPlayer_NextSignalCallback): number
    on(sigName: "next", callback: MusicPlayer_NextSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "next", callback: MusicPlayer_NextSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "next", callback: MusicPlayer_NextSignalCallback): NodeJS.EventEmitter
    emit(sigName: "next", ...args: any[]): void
    connect(sigName: "activate-playlist", callback: MusicPlayer_ActivatePlaylistSignalCallback): number
    on(sigName: "activate-playlist", callback: MusicPlayer_ActivatePlaylistSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate-playlist", callback: MusicPlayer_ActivatePlaylistSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate-playlist", callback: MusicPlayer_ActivatePlaylistSignalCallback): NodeJS.EventEmitter
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MusicPlayer extends GObject.Object {

    // Own properties of Unity-7.0.Unity.MusicPlayer

    static name: string
    static $gtype: GObject.GType<MusicPlayer>

    // Constructors of Unity-7.0.Unity.MusicPlayer

    constructor(config?: MusicPlayer_ConstructProps) 
    constructor(desktop: string) 
    static new(desktop: string): MusicPlayer
    _init(config?: MusicPlayer_ConstructProps): void
}

interface AppInfoManagerClass {
}

abstract class AppInfoManagerClass {

    // Own properties of Unity-7.0.Unity.AppInfoManagerClass

    static name: string
}

interface AppInfoManagerPrivate {
}

class AppInfoManagerPrivate {

    // Own properties of Unity-7.0.Unity.AppInfoManagerPrivate

    static name: string
}

interface AnnotatedIconClass {
}

abstract class AnnotatedIconClass {

    // Own properties of Unity-7.0.Unity.AnnotatedIconClass

    static name: string
}

interface AnnotatedIconPrivate {
}

class AnnotatedIconPrivate {

    // Own properties of Unity-7.0.Unity.AnnotatedIconPrivate

    static name: string
}

interface InspectorClass {
}

abstract class InspectorClass {

    // Own properties of Unity-7.0.Unity.InspectorClass

    static name: string
}

interface InspectorPrivate {
}

class InspectorPrivate {

    // Own properties of Unity-7.0.Unity.InspectorPrivate

    static name: string
}

interface LauncherEntryClass {
}

abstract class LauncherEntryClass {

    // Own properties of Unity-7.0.Unity.LauncherEntryClass

    static name: string
}

interface LauncherEntryPrivate {
}

class LauncherEntryPrivate {

    // Own properties of Unity-7.0.Unity.LauncherEntryPrivate

    static name: string
}

interface LauncherFavoritesClass {
}

abstract class LauncherFavoritesClass {

    // Own properties of Unity-7.0.Unity.LauncherFavoritesClass

    static name: string
}

interface LauncherFavoritesPrivate {
}

class LauncherFavoritesPrivate {

    // Own properties of Unity-7.0.Unity.LauncherFavoritesPrivate

    static name: string
}

interface MetadataProviderClass {

    // Own fields of Unity-7.0.Unity.MetadataProviderClass

    updateHints: (self: MetadataProvider, hints: GLib.HashTable) => void
}

abstract class MetadataProviderClass {

    // Own properties of Unity-7.0.Unity.MetadataProviderClass

    static name: string
}

interface MetadataProviderPrivate {
}

class MetadataProviderPrivate {

    // Own properties of Unity-7.0.Unity.MetadataProviderPrivate

    static name: string
}

interface ProgressSourceProviderClass {
}

abstract class ProgressSourceProviderClass {

    // Own properties of Unity-7.0.Unity.ProgressSourceProviderClass

    static name: string
}

interface ProgressSourceProviderPrivate {
}

class ProgressSourceProviderPrivate {

    // Own properties of Unity-7.0.Unity.ProgressSourceProviderPrivate

    static name: string
}

interface CategoryClass {
}

abstract class CategoryClass {

    // Own properties of Unity-7.0.Unity.CategoryClass

    static name: string
}

interface CategoryPrivate {
}

class CategoryPrivate {

    // Own properties of Unity-7.0.Unity.CategoryPrivate

    static name: string
}

interface FilterClass {

    // Own fields of Unity-7.0.Unity.FilterClass

    getHints: (self: Filter) => GLib.HashTable
    update: (self: Filter, properties: GLib.Variant) => void
}

abstract class FilterClass {

    // Own properties of Unity-7.0.Unity.FilterClass

    static name: string
}

interface FilterPrivate {
}

class FilterPrivate {

    // Own properties of Unity-7.0.Unity.FilterPrivate

    static name: string
}

interface FilterOptionClass {
}

abstract class FilterOptionClass {

    // Own properties of Unity-7.0.Unity.FilterOptionClass

    static name: string
}

interface FilterOptionPrivate {
}

class FilterOptionPrivate {

    // Own properties of Unity-7.0.Unity.FilterOptionPrivate

    static name: string
}

interface OptionsFilterClass {
}

abstract class OptionsFilterClass {

    // Own properties of Unity-7.0.Unity.OptionsFilterClass

    static name: string
}

interface OptionsFilterPrivate {
}

class OptionsFilterPrivate {

    // Own properties of Unity-7.0.Unity.OptionsFilterPrivate

    static name: string
}

interface RadioOptionFilterClass {
}

abstract class RadioOptionFilterClass {

    // Own properties of Unity-7.0.Unity.RadioOptionFilterClass

    static name: string
}

interface RadioOptionFilterPrivate {
}

class RadioOptionFilterPrivate {

    // Own properties of Unity-7.0.Unity.RadioOptionFilterPrivate

    static name: string
}

interface CheckOptionFilterClass {
}

abstract class CheckOptionFilterClass {

    // Own properties of Unity-7.0.Unity.CheckOptionFilterClass

    static name: string
}

interface CheckOptionFilterPrivate {
}

class CheckOptionFilterPrivate {

    // Own properties of Unity-7.0.Unity.CheckOptionFilterPrivate

    static name: string
}

interface CheckOptionFilterCompactClass {
}

abstract class CheckOptionFilterCompactClass {

    // Own properties of Unity-7.0.Unity.CheckOptionFilterCompactClass

    static name: string
}

interface CheckOptionFilterCompactPrivate {
}

class CheckOptionFilterCompactPrivate {

    // Own properties of Unity-7.0.Unity.CheckOptionFilterCompactPrivate

    static name: string
}

interface RatingsFilterClass {
}

abstract class RatingsFilterClass {

    // Own properties of Unity-7.0.Unity.RatingsFilterClass

    static name: string
}

interface RatingsFilterPrivate {
}

class RatingsFilterPrivate {

    // Own properties of Unity-7.0.Unity.RatingsFilterPrivate

    static name: string
}

interface MultiRangeFilterClass {
}

abstract class MultiRangeFilterClass {

    // Own properties of Unity-7.0.Unity.MultiRangeFilterClass

    static name: string
}

interface MultiRangeFilterPrivate {
}

class MultiRangeFilterPrivate {

    // Own properties of Unity-7.0.Unity.MultiRangeFilterPrivate

    static name: string
}

interface PreferencesManagerClass {
}

abstract class PreferencesManagerClass {

    // Own properties of Unity-7.0.Unity.PreferencesManagerClass

    static name: string
}

interface PreferencesManagerPrivate {
}

class PreferencesManagerPrivate {

    // Own properties of Unity-7.0.Unity.PreferencesManagerPrivate

    static name: string
}

interface DeprecatedScopeSearchClass {
}

abstract class DeprecatedScopeSearchClass {

    // Own properties of Unity-7.0.Unity.DeprecatedScopeSearchClass

    static name: string
}

interface DeprecatedScopeSearchPrivate {
}

class DeprecatedScopeSearchPrivate {

    // Own properties of Unity-7.0.Unity.DeprecatedScopeSearchPrivate

    static name: string
}

interface AggregatedScopeSearchClass {
}

abstract class AggregatedScopeSearchClass {

    // Own properties of Unity-7.0.Unity.AggregatedScopeSearchClass

    static name: string
}

interface AggregatedScopeSearchPrivate {
}

class AggregatedScopeSearchPrivate {

    // Own properties of Unity-7.0.Unity.AggregatedScopeSearchPrivate

    static name: string
}

interface PreviewClass {

    // Own fields of Unity-7.0.Unity.PreviewClass

    createRaw: (self: Preview) => GObject.Object
}

abstract class PreviewClass {

    // Own properties of Unity-7.0.Unity.PreviewClass

    static name: string
}

interface PreviewPrivate {
}

class PreviewPrivate {

    // Own properties of Unity-7.0.Unity.PreviewPrivate

    static name: string
}

interface PreviewActionClass {
}

abstract class PreviewActionClass {

    // Own properties of Unity-7.0.Unity.PreviewActionClass

    static name: string
}

interface PreviewActionPrivate {
}

class PreviewActionPrivate {

    // Own properties of Unity-7.0.Unity.PreviewActionPrivate

    static name: string
}

interface InfoHintClass {
}

abstract class InfoHintClass {

    // Own properties of Unity-7.0.Unity.InfoHintClass

    static name: string
}

interface InfoHintPrivate {
}

class InfoHintPrivate {

    // Own properties of Unity-7.0.Unity.InfoHintPrivate

    static name: string
}

interface GenericPreviewClass {
}

abstract class GenericPreviewClass {

    // Own properties of Unity-7.0.Unity.GenericPreviewClass

    static name: string
}

interface GenericPreviewPrivate {
}

class GenericPreviewPrivate {

    // Own properties of Unity-7.0.Unity.GenericPreviewPrivate

    static name: string
}

interface ApplicationPreviewClass {
}

abstract class ApplicationPreviewClass {

    // Own properties of Unity-7.0.Unity.ApplicationPreviewClass

    static name: string
}

interface ApplicationPreviewPrivate {
}

class ApplicationPreviewPrivate {

    // Own properties of Unity-7.0.Unity.ApplicationPreviewPrivate

    static name: string
}

interface MusicPreviewClass {
}

abstract class MusicPreviewClass {

    // Own properties of Unity-7.0.Unity.MusicPreviewClass

    static name: string
}

interface MusicPreviewPrivate {
}

class MusicPreviewPrivate {

    // Own properties of Unity-7.0.Unity.MusicPreviewPrivate

    static name: string
}

interface PaymentPreviewClass {
}

abstract class PaymentPreviewClass {

    // Own properties of Unity-7.0.Unity.PaymentPreviewClass

    static name: string
}

interface PaymentPreviewPrivate {
}

class PaymentPreviewPrivate {

    // Own properties of Unity-7.0.Unity.PaymentPreviewPrivate

    static name: string
}

interface MoviePreviewClass {
}

abstract class MoviePreviewClass {

    // Own properties of Unity-7.0.Unity.MoviePreviewClass

    static name: string
}

interface MoviePreviewPrivate {
}

class MoviePreviewPrivate {

    // Own properties of Unity-7.0.Unity.MoviePreviewPrivate

    static name: string
}

interface SocialPreviewClass {
}

abstract class SocialPreviewClass {

    // Own properties of Unity-7.0.Unity.SocialPreviewClass

    static name: string
}

interface SocialPreviewPrivate {
}

class SocialPreviewPrivate {

    // Own properties of Unity-7.0.Unity.SocialPreviewPrivate

    static name: string
}

interface SocialPreviewCommentClass {
}

abstract class SocialPreviewCommentClass {

    // Own properties of Unity-7.0.Unity.SocialPreviewCommentClass

    static name: string
}

interface SocialPreviewCommentPrivate {
}

class SocialPreviewCommentPrivate {

    // Own properties of Unity-7.0.Unity.SocialPreviewCommentPrivate

    static name: string
}

interface ActivationResponseClass {
}

abstract class ActivationResponseClass {

    // Own properties of Unity-7.0.Unity.ActivationResponseClass

    static name: string
}

interface ActivationResponsePrivate {
}

class ActivationResponsePrivate {

    // Own properties of Unity-7.0.Unity.ActivationResponsePrivate

    static name: string
}

interface AggregatorActivationClass {
}

abstract class AggregatorActivationClass {

    // Own properties of Unity-7.0.Unity.AggregatorActivationClass

    static name: string
}

interface AggregatorActivationPrivate {
}

class AggregatorActivationPrivate {

    // Own properties of Unity-7.0.Unity.AggregatorActivationPrivate

    static name: string
}

interface FilterSetClass {

    // Own fields of Unity-7.0.Unity.FilterSetClass

    add: (self: FilterSet, filter: Filter) => void
    getFilterById: (self: FilterSet, filterId: string) => Filter | null
    getFilters: (self: FilterSet) => Filter[]
}

abstract class FilterSetClass {

    // Own properties of Unity-7.0.Unity.FilterSetClass

    static name: string
}

interface FilterSetPrivate {
}

class FilterSetPrivate {

    // Own properties of Unity-7.0.Unity.FilterSetPrivate

    static name: string
}

interface CategorySetClass {

    // Own fields of Unity-7.0.Unity.CategorySetClass

    add: (self: CategorySet, category: Category) => void
    getCategories: (self: CategorySet) => Category[]
}

abstract class CategorySetClass {

    // Own properties of Unity-7.0.Unity.CategorySetClass

    static name: string
}

interface CategorySetPrivate {
}

class CategorySetPrivate {

    // Own properties of Unity-7.0.Unity.CategorySetPrivate

    static name: string
}

interface SchemaClass {

    // Own fields of Unity-7.0.Unity.SchemaClass

    addField: (self: Schema, name: string, schema: string, type: SchemaFieldType) => void
    getFields: (self: Schema) => SchemaFieldInfo[]
}

abstract class SchemaClass {

    // Own properties of Unity-7.0.Unity.SchemaClass

    static name: string
}

interface SchemaPrivate {
}

class SchemaPrivate {

    // Own properties of Unity-7.0.Unity.SchemaPrivate

    static name: string
}

interface SchemaFieldInfo {

    // Own fields of Unity-7.0.Unity.SchemaFieldInfo

    name: string
    schema: string
    type: SchemaFieldType
}

class SchemaFieldInfo {

    // Own properties of Unity-7.0.Unity.SchemaFieldInfo

    static name: string
}

interface CancellableClass {

    // Own fields of Unity-7.0.Unity.CancellableClass

    cancel: (self: Cancellable) => void
    isCancelled: (self: Cancellable) => boolean
    getGcancellable: (self: Cancellable) => Gio.Cancellable | null
}

abstract class CancellableClass {

    // Own properties of Unity-7.0.Unity.CancellableClass

    static name: string
}

interface CancellablePrivate {
}

class CancellablePrivate {

    // Own properties of Unity-7.0.Unity.CancellablePrivate

    static name: string
}

interface ScopeSearchBaseClass {

    // Own fields of Unity-7.0.Unity.ScopeSearchBaseClass

    run: (self: ScopeSearchBase) => void
    runAsync: (self: ScopeSearchBase, asyncCallback: ScopeSearchBaseCallback) => void
    setSearchContext: (self: ScopeSearchBase, ctx: SearchContext) => void
}

abstract class ScopeSearchBaseClass {

    // Own properties of Unity-7.0.Unity.ScopeSearchBaseClass

    static name: string
}

interface ScopeSearchBasePrivate {
}

class ScopeSearchBasePrivate {

    // Own properties of Unity-7.0.Unity.ScopeSearchBasePrivate

    static name: string
}

interface ResultSetClass {

    // Own fields of Unity-7.0.Unity.ResultSetClass

    addResult: (self: ResultSet, result: ScopeResult) => void
    addResultFromVariant: (self: ResultSet, variant: GLib.Variant) => void
    flush: (self: ResultSet) => void
}

abstract class ResultSetClass {

    // Own properties of Unity-7.0.Unity.ResultSetClass

    static name: string
}

interface ResultSetPrivate {
}

class ResultSetPrivate {

    // Own properties of Unity-7.0.Unity.ResultSetPrivate

    static name: string
}

interface AbstractPreviewClass {

    // Own fields of Unity-7.0.Unity.AbstractPreviewClass

    serializeAs: (self: AbstractPreview, serializationType: SerializationType) => Uint8Array
}

abstract class AbstractPreviewClass {

    // Own properties of Unity-7.0.Unity.AbstractPreviewClass

    static name: string
}

interface AbstractPreviewPrivate {
}

class AbstractPreviewPrivate {

    // Own properties of Unity-7.0.Unity.AbstractPreviewPrivate

    static name: string
}

interface ResultPreviewerClass {

    // Own fields of Unity-7.0.Unity.ResultPreviewerClass

    run: (self: ResultPreviewer) => AbstractPreview | null
    runAsync: (self: ResultPreviewer, asyncCallback: AbstractPreviewCallback) => void
}

abstract class ResultPreviewerClass {

    // Own properties of Unity-7.0.Unity.ResultPreviewerClass

    static name: string
}

interface ResultPreviewerPrivate {
}

class ResultPreviewerPrivate {

    // Own properties of Unity-7.0.Unity.ResultPreviewerPrivate

    static name: string
}

interface SearchMetadataClass {
}

abstract class SearchMetadataClass {

    // Own properties of Unity-7.0.Unity.SearchMetadataClass

    static name: string
}

interface SearchMetadataPrivate {
}

class SearchMetadataPrivate {

    // Own properties of Unity-7.0.Unity.SearchMetadataPrivate

    static name: string
}

interface GeoCoordinateClass {
}

abstract class GeoCoordinateClass {

    // Own properties of Unity-7.0.Unity.GeoCoordinateClass

    static name: string
}

interface GeoCoordinatePrivate {
}

class GeoCoordinatePrivate {

    // Own properties of Unity-7.0.Unity.GeoCoordinatePrivate

    static name: string
}

interface AbstractScopeClass {

    // Own fields of Unity-7.0.Unity.AbstractScopeClass

    createSearchForQuery: (self: AbstractScope, searchContext: SearchContext) => ScopeSearchBase
    createPreviewer: (self: AbstractScope, result: ScopeResult, metadata: SearchMetadata) => ResultPreviewer
    getCategories: (self: AbstractScope) => CategorySet
    getFilters: (self: AbstractScope) => FilterSet
    getSchema: (self: AbstractScope) => Schema
    getSearchHint: (self: AbstractScope) => string
    getGroupName: (self: AbstractScope) => string
    getUniqueName: (self: AbstractScope) => string
    activate: (self: AbstractScope, result: ScopeResult, metadata: SearchMetadata, actionId?: string | null) => ActivationResponse | null
    normalizeSearchQuery: (self: AbstractScope, searchQuery: string) => string
}

abstract class AbstractScopeClass {

    // Own properties of Unity-7.0.Unity.AbstractScopeClass

    static name: string
}

interface AbstractScopePrivate {
}

class AbstractScopePrivate {

    // Own properties of Unity-7.0.Unity.AbstractScopePrivate

    static name: string
}

interface ScopeDBusConnectorClass {
}

abstract class ScopeDBusConnectorClass {

    // Own properties of Unity-7.0.Unity.ScopeDBusConnectorClass

    static name: string
}

interface ScopeDBusConnectorPrivate {
}

class ScopeDBusConnectorPrivate {

    // Own properties of Unity-7.0.Unity.ScopeDBusConnectorPrivate

    static name: string
}

interface DeprecatedScopeBaseClass {

    // Own fields of Unity-7.0.Unity.DeprecatedScopeBaseClass

    createImpl: (self: DeprecatedScopeBase) => GObject.Object
}

abstract class DeprecatedScopeBaseClass {

    // Own properties of Unity-7.0.Unity.DeprecatedScopeBaseClass

    static name: string
}

interface DeprecatedScopeBasePrivate {
}

class DeprecatedScopeBasePrivate {

    // Own properties of Unity-7.0.Unity.DeprecatedScopeBasePrivate

    static name: string
}

interface DeprecatedScopeClass {

    // Own fields of Unity-7.0.Unity.DeprecatedScopeClass

    previewResult: (self: DeprecatedScope, result: ScopeResult, callback?: Gio.AsyncReadyCallback | null) => void
    previewResultFinish: (self: DeprecatedScope, res: Gio.AsyncResult) => Preview | null
    activateResult: (self: DeprecatedScope, result: ScopeResult, callback?: Gio.AsyncReadyCallback | null) => void
    activateResultFinish: (self: DeprecatedScope, res: Gio.AsyncResult) => ActivationResponse | null
}

abstract class DeprecatedScopeClass {

    // Own properties of Unity-7.0.Unity.DeprecatedScopeClass

    static name: string
}

interface DeprecatedScopePrivate {
}

class DeprecatedScopePrivate {

    // Own properties of Unity-7.0.Unity.DeprecatedScopePrivate

    static name: string
}

interface AggregatorScopeClass {

    // Own fields of Unity-7.0.Unity.AggregatorScopeClass

    categoryIndexForScopeId: (self: AggregatorScope, scopeId: string) => number
    search: (self: AggregatorScope, scopeSearch: AggregatedScopeSearch, callback?: Gio.AsyncReadyCallback | null) => void
    searchFinish: (self: AggregatorScope, res: Gio.AsyncResult) => void
    activate: (self: AggregatorScope, activation: AggregatorActivation, callback?: Gio.AsyncReadyCallback | null) => void
    activateFinish: (self: AggregatorScope, res: Gio.AsyncResult) => ActivationResponse | null
}

abstract class AggregatorScopeClass {

    // Own properties of Unity-7.0.Unity.AggregatorScopeClass

    static name: string
}

interface AggregatorScopePrivate {
}

class AggregatorScopePrivate {

    // Own properties of Unity-7.0.Unity.AggregatorScopePrivate

    static name: string
}

interface MasterScopeClass {
}

abstract class MasterScopeClass {

    // Own properties of Unity-7.0.Unity.MasterScopeClass

    static name: string
}

interface MasterScopePrivate {
}

class MasterScopePrivate {

    // Own properties of Unity-7.0.Unity.MasterScopePrivate

    static name: string
}

interface SimpleScopeClass {
}

abstract class SimpleScopeClass {

    // Own properties of Unity-7.0.Unity.SimpleScopeClass

    static name: string
}

interface SimpleScopePrivate {
}

class SimpleScopePrivate {

    // Own properties of Unity-7.0.Unity.SimpleScopePrivate

    static name: string
}

interface ScopeLoaderClass {

    // Own fields of Unity-7.0.Unity.ScopeLoaderClass

    getScopes: (self: ScopeLoader, moduleName: string, moduleType?: string | null) => AbstractScope[]
    exportScopes: (self: ScopeLoader, scopes: AbstractScope[]) => void
}

abstract class ScopeLoaderClass {

    // Own properties of Unity-7.0.Unity.ScopeLoaderClass

    static name: string
}

interface ScopeLoaderPrivate {
}

class ScopeLoaderPrivate {

    // Own properties of Unity-7.0.Unity.ScopeLoaderPrivate

    static name: string
}

interface TrackMetadataClass {
}

abstract class TrackMetadataClass {

    // Own properties of Unity-7.0.Unity.TrackMetadataClass

    static name: string
}

interface TrackMetadataPrivate {
}

class TrackMetadataPrivate {

    // Own properties of Unity-7.0.Unity.TrackMetadataPrivate

    static name: string
}

interface PlaylistClass {
}

abstract class PlaylistClass {

    // Own properties of Unity-7.0.Unity.PlaylistClass

    static name: string
}

interface PlaylistPrivate {
}

class PlaylistPrivate {

    // Own properties of Unity-7.0.Unity.PlaylistPrivate

    static name: string
}

interface MusicPlayerClass {
}

abstract class MusicPlayerClass {

    // Own properties of Unity-7.0.Unity.MusicPlayerClass

    static name: string
}

interface MusicPlayerPrivate {
}

class MusicPlayerPrivate {

    // Own properties of Unity-7.0.Unity.MusicPlayerPrivate

    static name: string
}

interface ScopeResult {

    // Own fields of Unity-7.0.Unity.ScopeResult

    uri: string
    iconHint: string
    category: number
    resultType: ResultType
    mimetype: string
    title: string
    comment: string
    dndUri: string
    metadata?: GLib.HashTable | null
}

class ScopeResult {

    // Own properties of Unity-7.0.Unity.ScopeResult

    static name: string

    // Constructors of Unity-7.0.Unity.ScopeResult

    static create(uri: string, iconHint: string | null, category: number, resultType: ResultType, mimetype: string, title: string, comment: string, dndUri: string, metadata: GLib.HashTable): ScopeResult | null
    static createFromVariant(variant: GLib.Variant): ScopeResult | null
}

interface SearchContext {

    // Own fields of Unity-7.0.Unity.SearchContext

    searchQuery: string
    searchType: SearchType
    filterState: FilterSet
    searchMetadata: SearchMetadata
    resultSet: ResultSet
    cancellable: Cancellable

    // Owm methods of Unity-7.0.Unity.SearchContext

    setSearchMetadata(metadata: SearchMetadata): void
}

class SearchContext {

    // Own properties of Unity-7.0.Unity.SearchContext

    static name: string

    // Constructors of Unity-7.0.Unity.SearchContext

    static create(searchQuery: string, searchType: SearchType, filterState: FilterSet | null, metadata: GLib.HashTable | null, resultSet: ResultSet, cancellable?: Cancellable | null): SearchContext | null
}

interface PlaylistDetails {

    // Own fields of Unity-7.0.Unity.PlaylistDetails

    id: string
    name: string
    iconName: string
}

class PlaylistDetails {

    // Own properties of Unity-7.0.Unity.PlaylistDetails

    static name: string
}

interface ActivePlaylistContainer {

    // Own fields of Unity-7.0.Unity.ActivePlaylistContainer

    valid: boolean
    details: PlaylistDetails
}

class ActivePlaylistContainer {

    // Own properties of Unity-7.0.Unity.ActivePlaylistContainer

    static name: string
}

}
export default Unity;