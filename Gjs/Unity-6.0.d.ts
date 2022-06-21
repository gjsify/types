// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Unity-6.0
 */

import type * as Gjs from './Gjs';
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
 * @param io_priority 
 * @param cancellable 
 * @param _callback_ 
 */
function io_read_stream_async(input: Gio.InputStream, io_priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
function io_read_stream_finish(_res_: Gio.AsyncResult): [ /* data */ Uint8Array, /* size */ number ]
/**
 * <para>Asynchronously looks for a file with base name &apos;filename&apos; in all the directories defined in &apos;dirs&apos; and returns a file input 
 * stream for it.</para>
 * <para>If the file can not be found this method returns null.</para>
 * @param filename 
 * @param dirs 
 * @param _callback_ 
 */
function io_open_from_dirs(filename: string, dirs: string[], _callback_?: Gio.AsyncReadyCallback | null): void
function io_open_from_dirs_finish(_res_: Gio.AsyncResult): Gio.FileInputStream | null
/**
 * <para>Like open_from_dirs&lpar;&rpar; but scans first the user data dir and then the system data dirs as defined by the XDG_DATA_DIRS environment 
 * variable.</para>
 * @param filename 
 * @param _callback_ 
 */
function io_open_from_data_dirs(filename: string, _callback_?: Gio.AsyncReadyCallback | null): void
function io_open_from_data_dirs_finish(_res_: Gio.AsyncResult): Gio.FileInputStream | null
function io_get_system_data_dirs(): string[]
interface MergeStrategy_ConstructProps extends GObject.Object_ConstructProps {
}

interface MergeStrategy extends GObject.Object {

    // Owm methods of Unity-6.0.Unity.MergeStrategy

    /**
     * <para>Virtual method to merge row from source model into target model.</para>
     * @param target The target model to merge a row into 
     * @param row An array of variants with the row data for the result 
     */
    merge_result(target: Dee.Model, row: GLib.Variant[]): Dee.ModelIter | null

    // Own virtual methods of Unity-6.0.Unity.MergeStrategy

    /**
     * <para>Virtual method to merge row from source model into target model.</para>
     * @virtual 
     * @param target The target model to merge a row into 
     * @param row An array of variants with the row data for the result 
     */
    vfunc_merge_result(target: Dee.Model, row: GLib.Variant[]): Dee.ModelIter | null

    // Class property signals of Unity-6.0.Unity.MergeStrategy

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MergeStrategy {

    // Own properties of Unity-6.0.Unity.MergeStrategy

    static name: string
    static $gtype: GObject.GType<MergeStrategy>

    // Constructors of Unity-6.0.Unity.MergeStrategy

    constructor(config?: MergeStrategy_ConstructProps) 
    _init(config?: MergeStrategy_ConstructProps): void
}

interface AppInfoManager_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `changed`
 */
interface AppInfoManager_ChangedSignalCallback {
    ($obj: AppInfoManager, id: string, new_appinfo?: Gio.AppInfo | null): void
}

interface AppInfoManager {

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
    lookup(id: string): Gio.AppInfo | null
    /**
     * <para>Look up XDG categories for for desktop id or file path &commat;id. Returns null if id is not found. This method will do sync IO if the desktop 
     * file for &commat;id is not already cached. So if you are living in an async world you must first do an async call to lookup_async&lpar;id&rpar; 
     * before calling this method, in which case no sync io will be done.</para>
     * @param id 
     */
    get_categories(id: string): string[] | null
    /**
     * <para>Look up keywords for for desktop id or file path &commat;id. The keywords will be an amalgamation of the X-GNOME-Keywords and X-AppInstall-
     * Keywords fields from the .desktopfile. Returns null if id is not found. This method will do sync IO if the desktop file for &commat;id is not already 
     * cached. So if you are living in an async world you must first do an async call to lookup_async&lpar;id&rpar; before calling this method, in which 
     * case no sync io will be done.</para>
     * @param id 
     */
    get_keywords(id: string): string[] | null
    /**
     * <para>Look up the full path to the desktop file for desktop id &commat;id. Returns null if &commat;id is not found. This method will do sync IO if 
     * the desktop file for &commat;id is not already cached. So if you are living in an async world you must first do an async call to lookup_async&lpar;id
     * &rpar; before calling this method, in which case no sync io will be done.</para>
     * @param id 
     */
    get_path(id: string): string | null
    /**
     * <para>Look up an AppInfo given its desktop id or absolute path. The desktop id is the base filename of the .desktop file for the application 
     * including the .desktop extension.</para>
     * <para>If the AppInfo is not already cached this method will do asynchronous IO to look it up.</para>
     * @param id 
     * @param _callback_ 
     */
    lookup_async(id: string, _callback_?: Gio.AsyncReadyCallback | null): void
    lookup_finish(_res_: Gio.AsyncResult): Gio.AppInfo | null
    clear(): void

    // Own signals of Unity-6.0.Unity.AppInfoManager

    connect(sigName: "changed", callback: AppInfoManager_ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: AppInfoManager_ChangedSignalCallback): number
    emit(sigName: "changed", id: string, new_appinfo?: Gio.AppInfo | null, ...args: any[]): void

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
class AppInfoManager extends GObject.Object {

    // Own properties of Unity-6.0.Unity.AppInfoManager

    static name: string
    static $gtype: GObject.GType<AppInfoManager>

    // Constructors of Unity-6.0.Unity.AppInfoManager

    constructor(config?: AppInfoManager_ConstructProps) 
    _init(config?: AppInfoManager_ConstructProps): void
    static get_instance(): AppInfoManager
    /**
     * <para>Get a ref to the singleton AppInfoManager</para>
     */
    static get_default(): AppInfoManager
}

interface AnnotatedIcon_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Unity-6.0.Unity.AnnotatedIcon

    icon?: Gio.Icon | null
    ribbon?: string | null
    category?: CategoryType | null
    size_hint?: IconSizeHint | null
}

interface AnnotatedIcon {

    // Own properties of Unity-6.0.Unity.AnnotatedIcon

    icon: Gio.Icon
    ribbon: string
    category: CategoryType
    size_hint: IconSizeHint

    // Own fields of Unity-6.0.Unity.AnnotatedIcon

    parent_instance: GObject.Object
    priv: AnnotatedIconPrivate

    // Owm methods of Unity-6.0.Unity.AnnotatedIcon

    to_string(): string

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

class AnnotatedIcon extends GObject.Object {

    // Own properties of Unity-6.0.Unity.AnnotatedIcon

    static name: string
    static $gtype: GObject.GType<AnnotatedIcon>

    // Constructors of Unity-6.0.Unity.AnnotatedIcon

    constructor(config?: AnnotatedIcon_ConstructProps) 
    constructor(base_icon: Gio.Icon) 
    static new(base_icon: Gio.Icon): AnnotatedIcon
    _init(config?: AnnotatedIcon_ConstructProps): void
}

interface Inspector_ConstructProps extends GObject.Object_ConstructProps {
}

interface Inspector {

    // Own properties of Unity-6.0.Unity.Inspector

    /**
     * <para>Boolean property determining whether Unity is running or not. You can use this property to determine whether Unity is running or not.</para>
     */
    readonly unity_running: boolean
    /**
     * <para>Property holding the unique DBus name of the Unity process if Unity is running, or null otherwise.</para>
     */
    readonly unity_bus_name: string

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
class Inspector extends GObject.Object {

    // Own properties of Unity-6.0.Unity.Inspector

    static name: string
    static $gtype: GObject.GType<Inspector>

    // Constructors of Unity-6.0.Unity.Inspector

    constructor(config?: Inspector_ConstructProps) 
    _init(config?: Inspector_ConstructProps): void
    /**
     * <para>Get the default singleton Unity.Inspector instance, creating it dynamically if necessary.</para>
     */
    static get_default(): Inspector
}

interface LauncherEntry_ConstructProps extends Dee.Serializable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Unity-6.0.Unity.LauncherEntry

    app_uri?: string | null
    count?: number | null
    count_visible?: boolean | null
    progress?: number | null
    progress_visible?: boolean | null
    urgent?: boolean | null
    quicklist?: Dbusmenu.Menuitem | null
}

interface LauncherEntry extends Dee.Serializable {

    // Own properties of Unity-6.0.Unity.LauncherEntry

    app_uri: string
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
class LauncherEntry extends GObject.Object {

    // Own properties of Unity-6.0.Unity.LauncherEntry

    static name: string
    static $gtype: GObject.GType<LauncherEntry>

    // Constructors of Unity-6.0.Unity.LauncherEntry

    constructor(config?: LauncherEntry_ConstructProps) 
    _init(config?: LauncherEntry_ConstructProps): void
    static get_for_app_uri(app_uri: string): LauncherEntry
    static get_for_desktop_id(desktop_id: string): LauncherEntry
    static get_for_desktop_file(desktop_file: string): LauncherEntry
}

interface LauncherFavorites_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `changed`
 */
interface LauncherFavorites_ChangedSignalCallback {
    ($obj: LauncherFavorites): void
}

interface LauncherFavorites {

    // Own fields of Unity-6.0.Unity.LauncherFavorites

    parent_instance: GObject.Object
    priv: LauncherFavoritesPrivate

    // Owm methods of Unity-6.0.Unity.LauncherFavorites

    has_app_info(appinfo: Gio.AppInfo): boolean
    has_app_id(app_id: string): boolean
    lookup(app_id: string): Gio.AppInfo | null
    enumerate_ids(): string[]
    enumerate_app_infos(): Gio.AppInfo[]

    // Own signals of Unity-6.0.Unity.LauncherFavorites

    connect(sigName: "changed", callback: LauncherFavorites_ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: LauncherFavorites_ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of Unity-6.0.Unity.LauncherFavorites

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LauncherFavorites extends GObject.Object {

    // Own properties of Unity-6.0.Unity.LauncherFavorites

    static name: string
    static $gtype: GObject.GType<LauncherFavorites>

    // Constructors of Unity-6.0.Unity.LauncherFavorites

    constructor(config?: LauncherFavorites_ConstructProps) 
    _init(config?: LauncherFavorites_ConstructProps): void
    /**
     * <para>Get the default singleton Unity.LauncherFavorites instance, creating it dynamically if necessary.</para>
     */
    static get_default(): LauncherFavorites
}

interface ActivationResponse_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {

    // Own constructor properties of Unity-6.0.Unity.ActivationResponse

    handled?: HandledType | null
    goto_uri?: string | null
}

interface ActivationResponse {

    // Own properties of Unity-6.0.Unity.ActivationResponse

    readonly handled: HandledType
    goto_uri: string

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

class ActivationResponse extends GObject.InitiallyUnowned {

    // Own properties of Unity-6.0.Unity.ActivationResponse

    static name: string
    static $gtype: GObject.GType<ActivationResponse>

    // Constructors of Unity-6.0.Unity.ActivationResponse

    constructor(config?: ActivationResponse_ConstructProps) 
    constructor(handled: HandledType, goto_uri: string) 
    static new(handled: HandledType, goto_uri: string): ActivationResponse
    static with_preview(preview: Preview): ActivationResponse
    _init(config?: ActivationResponse_ConstructProps): void
}

interface Category_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Unity-6.0.Unity.Category

    name?: string | null
    icon_hint?: Gio.Icon | null
    default_renderer?: CategoryRenderer | null
}

interface Category {

    // Own properties of Unity-6.0.Unity.Category

    readonly name: string
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

class Category extends GObject.Object {

    // Own properties of Unity-6.0.Unity.Category

    static name: string
    static $gtype: GObject.GType<Category>

    // Constructors of Unity-6.0.Unity.Category

    constructor(config?: Category_ConstructProps) 
    constructor(name: string, icon_hint: Gio.Icon, renderer: CategoryRenderer) 
    static new(name: string, icon_hint: Gio.Icon, renderer: CategoryRenderer): Category
    _init(config?: Category_ConstructProps): void
}

interface Filter_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Unity-6.0.Unity.Filter

    id?: string | null
    display_name?: string | null
    icon_hint?: Gio.Icon | null
    renderer?: FilterRenderer | null
    visible?: boolean | null
    collapsed?: boolean | null
    filtering?: boolean | null
}

/**
 * Signal callback interface for `changed`
 */
interface Filter_ChangedSignalCallback {
    ($obj: Filter): void
}

interface Filter {

    // Own properties of Unity-6.0.Unity.Filter

    readonly id: string
    display_name: string
    readonly icon_hint: Gio.Icon
    readonly renderer: FilterRenderer
    visible: boolean
    readonly collapsed: boolean
    filtering: boolean

    // Own fields of Unity-6.0.Unity.Filter

    parent_instance: GObject.Object
    priv: FilterPrivate

    // Own signals of Unity-6.0.Unity.Filter

    connect(sigName: "changed", callback: Filter_ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: Filter_ChangedSignalCallback): number
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

class Filter extends GObject.Object {

    // Own properties of Unity-6.0.Unity.Filter

    static name: string
    static $gtype: GObject.GType<Filter>

    // Constructors of Unity-6.0.Unity.Filter

    constructor(config?: Filter_ConstructProps) 
    _init(config?: Filter_ConstructProps): void
}

interface FilterOption_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Unity-6.0.Unity.FilterOption

    id?: string | null
    display_name?: string | null
    icon_hint?: Gio.Icon | null
    active?: boolean | null
}

interface FilterOption {

    // Own properties of Unity-6.0.Unity.FilterOption

    readonly id: string
    readonly display_name: string
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

class FilterOption extends GObject.Object {

    // Own properties of Unity-6.0.Unity.FilterOption

    static name: string
    static $gtype: GObject.GType<FilterOption>

    // Constructors of Unity-6.0.Unity.FilterOption

    constructor(config?: FilterOption_ConstructProps) 
    constructor(id: string, display_name: string, icon_hint: Gio.Icon | null, active: boolean) 
    static new(id: string, display_name: string, icon_hint: Gio.Icon | null, active: boolean): FilterOption
    _init(config?: FilterOption_ConstructProps): void
}

interface OptionsFilter_ConstructProps extends Filter_ConstructProps {

    // Own constructor properties of Unity-6.0.Unity.OptionsFilter

    sort_type?: OptionsFilterSortType | null
}

interface OptionsFilter {

    // Own properties of Unity-6.0.Unity.OptionsFilter

    sort_type: OptionsFilterSortType

    // Own fields of Unity-6.0.Unity.OptionsFilter

    parent_instance: Filter
    priv: OptionsFilterPrivate
    options: FilterOption[]

    // Owm methods of Unity-6.0.Unity.OptionsFilter

    add_option(id: string, display_name: string, icon_hint?: Gio.Icon | null): FilterOption
    get_option(id: string): FilterOption | null
    /**
     * <para>Removes a FilterOption from the OptionsFilter.</para>
     * @param id 
     */
    remove_option(id: string): boolean

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

class OptionsFilter extends Filter {

    // Own properties of Unity-6.0.Unity.OptionsFilter

    static name: string
    static $gtype: GObject.GType<OptionsFilter>

    // Constructors of Unity-6.0.Unity.OptionsFilter

    constructor(config?: OptionsFilter_ConstructProps) 
    constructor() 
    static new(): OptionsFilter
    _init(config?: OptionsFilter_ConstructProps): void
}

interface RadioOptionFilter_ConstructProps extends OptionsFilter_ConstructProps {
}

interface RadioOptionFilter {

    // Own fields of Unity-6.0.Unity.RadioOptionFilter

    parent_instance: OptionsFilter
    priv: RadioOptionFilterPrivate

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

class RadioOptionFilter extends OptionsFilter {

    // Own properties of Unity-6.0.Unity.RadioOptionFilter

    static name: string
    static $gtype: GObject.GType<RadioOptionFilter>

    // Constructors of Unity-6.0.Unity.RadioOptionFilter

    constructor(config?: RadioOptionFilter_ConstructProps) 
    constructor(id: string, display_name: string, icon_hint: Gio.Icon | null, collapsed: boolean) 
    static new(id: string, display_name: string, icon_hint: Gio.Icon | null, collapsed: boolean): RadioOptionFilter

    // Overloads of new

    static new(): OptionsFilter
    _init(config?: RadioOptionFilter_ConstructProps): void
}

interface CheckOptionFilter_ConstructProps extends OptionsFilter_ConstructProps {
}

interface CheckOptionFilter {

    // Own fields of Unity-6.0.Unity.CheckOptionFilter

    parent_instance: OptionsFilter
    priv: CheckOptionFilterPrivate

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

class CheckOptionFilter extends OptionsFilter {

    // Own properties of Unity-6.0.Unity.CheckOptionFilter

    static name: string
    static $gtype: GObject.GType<CheckOptionFilter>

    // Constructors of Unity-6.0.Unity.CheckOptionFilter

    constructor(config?: CheckOptionFilter_ConstructProps) 
    constructor(id: string, display_name: string, icon_hint: Gio.Icon | null, collapsed: boolean) 
    static new(id: string, display_name: string, icon_hint: Gio.Icon | null, collapsed: boolean): CheckOptionFilter

    // Overloads of new

    static new(): OptionsFilter
    _init(config?: CheckOptionFilter_ConstructProps): void
}

interface CheckOptionFilterCompact_ConstructProps extends OptionsFilter_ConstructProps {
}

interface CheckOptionFilterCompact {

    // Own fields of Unity-6.0.Unity.CheckOptionFilterCompact

    parent_instance: OptionsFilter
    priv: CheckOptionFilterCompactPrivate

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

class CheckOptionFilterCompact extends OptionsFilter {

    // Own properties of Unity-6.0.Unity.CheckOptionFilterCompact

    static name: string
    static $gtype: GObject.GType<CheckOptionFilterCompact>

    // Constructors of Unity-6.0.Unity.CheckOptionFilterCompact

    constructor(config?: CheckOptionFilterCompact_ConstructProps) 
    constructor(id: string, display_name: string, icon_hint: Gio.Icon | null, collapsed: boolean) 
    static new(id: string, display_name: string, icon_hint: Gio.Icon | null, collapsed: boolean): CheckOptionFilterCompact

    // Overloads of new

    static new(): OptionsFilter
    _init(config?: CheckOptionFilterCompact_ConstructProps): void
}

interface RatingsFilter_ConstructProps extends Filter_ConstructProps {

    // Own constructor properties of Unity-6.0.Unity.RatingsFilter

    rating?: number | null
}

interface RatingsFilter {

    // Own properties of Unity-6.0.Unity.RatingsFilter

    rating: number

    // Own fields of Unity-6.0.Unity.RatingsFilter

    parent_instance: Filter
    priv: RatingsFilterPrivate

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

class RatingsFilter extends Filter {

    // Own properties of Unity-6.0.Unity.RatingsFilter

    static name: string
    static $gtype: GObject.GType<RatingsFilter>

    // Constructors of Unity-6.0.Unity.RatingsFilter

    constructor(config?: RatingsFilter_ConstructProps) 
    constructor(id: string, display_name: string, icon_hint: Gio.Icon | null, collapsed: boolean) 
    static new(id: string, display_name: string, icon_hint: Gio.Icon | null, collapsed: boolean): RatingsFilter
    _init(config?: RatingsFilter_ConstructProps): void
}

interface MultiRangeFilter_ConstructProps extends OptionsFilter_ConstructProps {
}

interface MultiRangeFilter {

    // Own fields of Unity-6.0.Unity.MultiRangeFilter

    parent_instance: OptionsFilter
    priv: MultiRangeFilterPrivate

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

class MultiRangeFilter extends OptionsFilter {

    // Own properties of Unity-6.0.Unity.MultiRangeFilter

    static name: string
    static $gtype: GObject.GType<MultiRangeFilter>

    // Constructors of Unity-6.0.Unity.MultiRangeFilter

    constructor(config?: MultiRangeFilter_ConstructProps) 
    constructor(id: string, display_name: string, icon_hint: Gio.Icon | null, collapsed: boolean) 
    static new(id: string, display_name: string, icon_hint: Gio.Icon | null, collapsed: boolean): MultiRangeFilter

    // Overloads of new

    static new(): OptionsFilter
    _init(config?: MultiRangeFilter_ConstructProps): void
}

interface PreferencesManager_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Unity-6.0.Unity.PreferencesManager

    remote_content_search?: PreferencesManagerRemoteContent | null
}

interface PreferencesManager {

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
class PreferencesManager extends GObject.Object {

    // Own properties of Unity-6.0.Unity.PreferencesManager

    static name: string
    static $gtype: GObject.GType<PreferencesManager>

    // Constructors of Unity-6.0.Unity.PreferencesManager

    constructor(config?: PreferencesManager_ConstructProps) 
    _init(config?: PreferencesManager_ConstructProps): void
    /**
     * <para>Get a ref to the singleton PreferencesManager</para>
     */
    static get_default(): PreferencesManager
}

interface LensSearch_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {

    // Own constructor properties of Unity-6.0.Unity.LensSearch

    search_string?: string | null
    hints?: GLib.HashTable | null
    results_model?: Dee.SerializableModel | null
}

/**
 * Signal callback interface for `finished`
 */
interface LensSearch_FinishedSignalCallback {
    ($obj: LensSearch): void
}

interface LensSearch {

    // Own properties of Unity-6.0.Unity.LensSearch

    readonly search_string: string
    readonly hints: GLib.HashTable
    readonly results_model: Dee.SerializableModel

    // Own fields of Unity-6.0.Unity.LensSearch

    parent_instance: GObject.InitiallyUnowned
    priv: LensSearchPrivate

    // Owm methods of Unity-6.0.Unity.LensSearch

    emit_finished(): void
    equals(other?: LensSearch | null): boolean
    set_reply_hint(key: string, variant: GLib.Variant): void

    // Own signals of Unity-6.0.Unity.LensSearch

    connect(sigName: "finished", callback: LensSearch_FinishedSignalCallback): number
    connect_after(sigName: "finished", callback: LensSearch_FinishedSignalCallback): number
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

class LensSearch extends GObject.InitiallyUnowned {

    // Own properties of Unity-6.0.Unity.LensSearch

    static name: string
    static $gtype: GObject.GType<LensSearch>

    // Constructors of Unity-6.0.Unity.LensSearch

    constructor(config?: LensSearch_ConstructProps) 
    constructor(search_string: string, hints: GLib.HashTable, results_model: Dee.SerializableModel) 
    static new(search_string: string, hints: GLib.HashTable, results_model: Dee.SerializableModel): LensSearch
    _init(config?: LensSearch_ConstructProps): void
}

interface Lens_ConstructProps extends GObject.Object_ConstructProps {

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

interface Lens {

    // Own properties of Unity-6.0.Unity.Lens

    active: boolean
    visible: boolean
    searching: boolean
    exported: boolean
    search_in_global: boolean
    home_lens_default_name: string
    readonly id: string
    readonly dbus_path: string
    search_hint: string
    filters: Filter[]
    categories: Category[]
    merge_strategy: MergeStrategy
    global_merge_strategy: MergeStrategy
    sources_display_name: string

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

class Lens extends GObject.Object {

    // Own properties of Unity-6.0.Unity.Lens

    static name: string
    static $gtype: GObject.GType<Lens>

    // Constructors of Unity-6.0.Unity.Lens

    constructor(config?: Lens_ConstructProps) 
    constructor(dbus_path_: string, id_: string) 
    static new(dbus_path_: string, id_: string): Lens
    _init(config?: Lens_ConstructProps): void
}

interface Preview_ConstructProps extends Dee.Serializable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Unity-6.0.Unity.Preview

    title?: string | null
    subtitle?: string | null
    description_markup?: string | null
    image_source_uri?: string | null
    image?: Gio.Icon | null
}

/**
 * Signal callback interface for `closed`
 */
interface Preview_ClosedSignalCallback {
    ($obj: Preview): void
}

interface Preview extends Dee.Serializable {

    // Own properties of Unity-6.0.Unity.Preview

    title: string
    subtitle: string
    description_markup: string
    image_source_uri: string
    image: Gio.Icon

    // Own fields of Unity-6.0.Unity.Preview

    parent_instance: GObject.Object
    priv: PreviewPrivate

    // Owm methods of Unity-6.0.Unity.Preview

    add_action(action: PreviewAction): void
    add_info(info_hint: InfoHint): void

    // Own signals of Unity-6.0.Unity.Preview

    connect(sigName: "closed", callback: Preview_ClosedSignalCallback): number
    connect_after(sigName: "closed", callback: Preview_ClosedSignalCallback): number
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

class Preview extends GObject.Object {

    // Own properties of Unity-6.0.Unity.Preview

    static name: string
    static $gtype: GObject.GType<Preview>

    // Constructors of Unity-6.0.Unity.Preview

    constructor(config?: Preview_ConstructProps) 
    _init(config?: Preview_ConstructProps): void
}

interface PreviewAction_ConstructProps extends Dee.Serializable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Unity-6.0.Unity.PreviewAction

    id?: string | null
    display_name?: string | null
    extra_text?: string | null
    icon_hint?: Gio.Icon | null
    layout_hint?: LayoutHint | null
}

/**
 * Signal callback interface for `activated`
 */
interface PreviewAction_ActivatedSignalCallback {
    ($obj: PreviewAction, uri: string): ActivationResponse
}

interface PreviewAction extends Dee.Serializable {

    // Own properties of Unity-6.0.Unity.PreviewAction

    readonly id: string
    readonly display_name: string
    extra_text: string
    readonly icon_hint: Gio.Icon
    readonly layout_hint: LayoutHint
    readonly hints: GLib.HashTable

    // Own fields of Unity-6.0.Unity.PreviewAction

    parent_instance: GObject.Object
    priv: PreviewActionPrivate

    // Own signals of Unity-6.0.Unity.PreviewAction

    connect(sigName: "activated", callback: PreviewAction_ActivatedSignalCallback): number
    connect_after(sigName: "activated", callback: PreviewAction_ActivatedSignalCallback): number
    emit(sigName: "activated", uri: string, ...args: any[]): void

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

class PreviewAction extends GObject.Object {

    // Own properties of Unity-6.0.Unity.PreviewAction

    static name: string
    static $gtype: GObject.GType<PreviewAction>

    // Constructors of Unity-6.0.Unity.PreviewAction

    constructor(config?: PreviewAction_ConstructProps) 
    constructor(id: string, display_name: string, icon_hint?: Gio.Icon | null) 
    static new(id: string, display_name: string, icon_hint?: Gio.Icon | null): PreviewAction
    static with_layout_hint(id: string, display_name: string, icon_hint: Gio.Icon | null, layout: LayoutHint): PreviewAction
    _init(config?: PreviewAction_ConstructProps): void
}

interface InfoHint_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {

    // Own constructor properties of Unity-6.0.Unity.InfoHint

    id?: string | null
    display_name?: string | null
    icon_hint?: Gio.Icon | null
    data?: GLib.Variant | null
}

interface InfoHint {

    // Own properties of Unity-6.0.Unity.InfoHint

    readonly id: string
    readonly display_name: string
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

class InfoHint extends GObject.InitiallyUnowned {

    // Own properties of Unity-6.0.Unity.InfoHint

    static name: string
    static $gtype: GObject.GType<InfoHint>

    // Constructors of Unity-6.0.Unity.InfoHint

    constructor(config?: InfoHint_ConstructProps) 
    constructor(id: string, display_name: string, icon_hint: Gio.Icon | null, data: string) 
    static new(id: string, display_name: string, icon_hint: Gio.Icon | null, data: string): InfoHint
    static with_variant(id: string, display_name: string, icon_hint: Gio.Icon | null, data: GLib.Variant): InfoHint
    _init(config?: InfoHint_ConstructProps): void
}

interface GenericPreview_ConstructProps extends Preview_ConstructProps {
}

interface GenericPreview {

    // Own fields of Unity-6.0.Unity.GenericPreview

    parent_instance: Preview
    priv: GenericPreviewPrivate

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

class GenericPreview extends Preview {

    // Own properties of Unity-6.0.Unity.GenericPreview

    static name: string
    static $gtype: GObject.GType<GenericPreview>

    // Constructors of Unity-6.0.Unity.GenericPreview

    constructor(config?: GenericPreview_ConstructProps) 
    constructor(title: string, description: string, image?: Gio.Icon | null) 
    static new(title: string, description: string, image?: Gio.Icon | null): GenericPreview
    _init(config?: GenericPreview_ConstructProps): void
}

interface ApplicationPreview_ConstructProps extends Preview_ConstructProps {

    // Own constructor properties of Unity-6.0.Unity.ApplicationPreview

    app_icon?: Gio.Icon | null
    license?: string | null
    copyright?: string | null
    last_update?: string | null
}

interface ApplicationPreview {

    // Own properties of Unity-6.0.Unity.ApplicationPreview

    app_icon: Gio.Icon
    license: string
    copyright: string
    last_update: string

    // Own fields of Unity-6.0.Unity.ApplicationPreview

    parent_instance: Preview
    priv: ApplicationPreviewPrivate

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

class ApplicationPreview extends Preview {

    // Own properties of Unity-6.0.Unity.ApplicationPreview

    static name: string
    static $gtype: GObject.GType<ApplicationPreview>

    // Constructors of Unity-6.0.Unity.ApplicationPreview

    constructor(config?: ApplicationPreview_ConstructProps) 
    constructor(title: string, subtitle: string, description: string, icon?: Gio.Icon | null, screenshot?: Gio.Icon | null) 
    static new(title: string, subtitle: string, description: string, icon?: Gio.Icon | null, screenshot?: Gio.Icon | null): ApplicationPreview
    _init(config?: ApplicationPreview_ConstructProps): void
}

interface MusicPreview_ConstructProps extends Preview_ConstructProps {

    // Own constructor properties of Unity-6.0.Unity.MusicPreview

    current_track_uri?: string | null
    current_progress?: number | null
    current_track_state?: MusicPreviewTrackState | null
}

/**
 * Signal callback interface for `play`
 */
interface MusicPreview_PlaySignalCallback {
    ($obj: MusicPreview, uri: string): void
}

/**
 * Signal callback interface for `pause`
 */
interface MusicPreview_PauseSignalCallback {
    ($obj: MusicPreview, uri: string): void
}

interface MusicPreview {

    // Own properties of Unity-6.0.Unity.MusicPreview

    current_track_uri: string
    current_progress: number
    current_track_state: MusicPreviewTrackState

    // Own fields of Unity-6.0.Unity.MusicPreview

    parent_instance: Preview
    priv: MusicPreviewPrivate

    // Owm methods of Unity-6.0.Unity.MusicPreview

    add_track(track: TrackMetadata): void

    // Own signals of Unity-6.0.Unity.MusicPreview

    connect(sigName: "play", callback: MusicPreview_PlaySignalCallback): number
    connect_after(sigName: "play", callback: MusicPreview_PlaySignalCallback): number
    emit(sigName: "play", uri: string, ...args: any[]): void
    connect(sigName: "pause", callback: MusicPreview_PauseSignalCallback): number
    connect_after(sigName: "pause", callback: MusicPreview_PauseSignalCallback): number
    emit(sigName: "pause", uri: string, ...args: any[]): void

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

class MusicPreview extends Preview {

    // Own properties of Unity-6.0.Unity.MusicPreview

    static name: string
    static $gtype: GObject.GType<MusicPreview>

    // Constructors of Unity-6.0.Unity.MusicPreview

    constructor(config?: MusicPreview_ConstructProps) 
    constructor(title: string, subtitle: string, image?: Gio.Icon | null) 
    static new(title: string, subtitle: string, image?: Gio.Icon | null): MusicPreview
    _init(config?: MusicPreview_ConstructProps): void
}

interface MoviePreview_ConstructProps extends Preview_ConstructProps {

    // Own constructor properties of Unity-6.0.Unity.MoviePreview

    year?: string | null
}

interface MoviePreview {

    // Own properties of Unity-6.0.Unity.MoviePreview

    year: string

    // Own fields of Unity-6.0.Unity.MoviePreview

    parent_instance: Preview
    priv: MoviePreviewPrivate

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

class MoviePreview extends Preview {

    // Own properties of Unity-6.0.Unity.MoviePreview

    static name: string
    static $gtype: GObject.GType<MoviePreview>

    // Constructors of Unity-6.0.Unity.MoviePreview

    constructor(config?: MoviePreview_ConstructProps) 
    constructor(title: string, subtitle: string, description: string, image?: Gio.Icon | null) 
    static new(title: string, subtitle: string, description: string, image?: Gio.Icon | null): MoviePreview
    _init(config?: MoviePreview_ConstructProps): void
}

interface SocialPreview_ConstructProps extends Preview_ConstructProps {

    // Own constructor properties of Unity-6.0.Unity.SocialPreview

    avatar?: Gio.Icon | null
    content?: string | null
    sender?: string | null
}

interface SocialPreview {

    // Own properties of Unity-6.0.Unity.SocialPreview

    avatar: Gio.Icon
    content: string
    sender: string

    // Own fields of Unity-6.0.Unity.SocialPreview

    parent_instance: Preview
    priv: SocialPreviewPrivate

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

class SocialPreview extends Preview {

    // Own properties of Unity-6.0.Unity.SocialPreview

    static name: string
    static $gtype: GObject.GType<SocialPreview>

    // Constructors of Unity-6.0.Unity.SocialPreview

    constructor(config?: SocialPreview_ConstructProps) 
    constructor(sender: string, subtitle: string, content: string, avatar?: Gio.Icon | null) 
    static new(sender: string, subtitle: string, content: string, avatar?: Gio.Icon | null): SocialPreview
    _init(config?: SocialPreview_ConstructProps): void
}

interface SocialPreviewComment_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {

    // Own constructor properties of Unity-6.0.Unity.SocialPreviewComment

    id?: string | null
    name?: string | null
    text?: string | null
    time?: string | null
}

interface SocialPreviewComment {

    // Own properties of Unity-6.0.Unity.SocialPreviewComment

    readonly id: string
    readonly name: string
    readonly text: string
    readonly time: string

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

class SocialPreviewComment extends GObject.InitiallyUnowned {

    // Own properties of Unity-6.0.Unity.SocialPreviewComment

    static name: string
    static $gtype: GObject.GType<SocialPreviewComment>

    // Constructors of Unity-6.0.Unity.SocialPreviewComment

    constructor(config?: SocialPreviewComment_ConstructProps) 
    constructor(id: string, name: string, text: string, time: string) 
    static new(id: string, name: string, text: string, time: string): SocialPreviewComment
    _init(config?: SocialPreviewComment_ConstructProps): void
}

interface AsyncPreview_ConstructProps extends Preview_ConstructProps {

    // Own constructor properties of Unity-6.0.Unity.AsyncPreview

    cancellable?: Gio.Cancellable | null
}

/**
 * Signal callback interface for `preview_ready`
 */
interface AsyncPreview_PreviewReadySignalCallback {
    ($obj: AsyncPreview, preview: Preview): void
}

interface AsyncPreview {

    // Own properties of Unity-6.0.Unity.AsyncPreview

    cancellable: Gio.Cancellable

    // Own fields of Unity-6.0.Unity.AsyncPreview

    parent_instance: Preview
    priv: AsyncPreviewPrivate

    // Owm methods of Unity-6.0.Unity.AsyncPreview

    emit_preview_ready(preview?: Preview | null): void

    // Own signals of Unity-6.0.Unity.AsyncPreview

    connect(sigName: "preview_ready", callback: AsyncPreview_PreviewReadySignalCallback): number
    connect_after(sigName: "preview_ready", callback: AsyncPreview_PreviewReadySignalCallback): number
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

class AsyncPreview extends Preview {

    // Own properties of Unity-6.0.Unity.AsyncPreview

    static name: string
    static $gtype: GObject.GType<AsyncPreview>

    // Constructors of Unity-6.0.Unity.AsyncPreview

    constructor(config?: AsyncPreview_ConstructProps) 
    constructor() 
    static new(): AsyncPreview
    static with_cancellable(cancellable: Gio.Cancellable): AsyncPreview
    _init(config?: AsyncPreview_ConstructProps): void
}

interface Scope_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Unity-6.0.Unity.Scope

    active?: boolean | null
    exported?: boolean | null
    search_in_global?: boolean | null
    provides_personal_content?: boolean | null
    dbus_path?: string | null
    sources?: OptionsFilter | null
}

/**
 * Signal callback interface for `activate_uri`
 */
interface Scope_ActivateUriSignalCallback {
    ($obj: Scope, uri: string): ActivationResponse | null
}

/**
 * Signal callback interface for `preview_uri`
 */
interface Scope_PreviewUriSignalCallback {
    ($obj: Scope, uri: string): Preview | null
}

/**
 * Signal callback interface for `filters_changed`
 */
interface Scope_FiltersChangedSignalCallback {
    ($obj: Scope): void
}

/**
 * Signal callback interface for `active_sources_changed`
 */
interface Scope_ActiveSourcesChangedSignalCallback {
    ($obj: Scope, active_ids: string[]): void
}

/**
 * Signal callback interface for `search_changed`
 */
interface Scope_SearchChangedSignalCallback {
    ($obj: Scope, search: LensSearch, search_type: SearchType, cancellable: Gio.Cancellable): void
}

/**
 * Signal callback interface for `generate_search_key`
 */
interface Scope_GenerateSearchKeySignalCallback {
    ($obj: Scope, search: LensSearch): string
}

interface Scope {

    // Own properties of Unity-6.0.Unity.Scope

    active: boolean
    exported: boolean
    search_in_global: boolean
    provides_personal_content: boolean
    readonly dbus_path: string
    sources: OptionsFilter
    readonly filters: Filter[]
    readonly results_model: Dee.SerializableModel
    readonly global_results_model: Dee.SerializableModel

    // Own fields of Unity-6.0.Unity.Scope

    parent_instance: GObject.Object
    priv: ScopePrivate

    // Owm methods of Unity-6.0.Unity.Scope

    export(): void
    get_filter(id: string): Filter | null
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

    connect(sigName: "activate_uri", callback: Scope_ActivateUriSignalCallback): number
    connect_after(sigName: "activate_uri", callback: Scope_ActivateUriSignalCallback): number
    emit(sigName: "activate_uri", uri: string, ...args: any[]): void
    connect(sigName: "preview_uri", callback: Scope_PreviewUriSignalCallback): number
    connect_after(sigName: "preview_uri", callback: Scope_PreviewUriSignalCallback): number
    emit(sigName: "preview_uri", uri: string, ...args: any[]): void
    connect(sigName: "filters_changed", callback: Scope_FiltersChangedSignalCallback): number
    connect_after(sigName: "filters_changed", callback: Scope_FiltersChangedSignalCallback): number
    emit(sigName: "filters_changed", ...args: any[]): void
    connect(sigName: "active_sources_changed", callback: Scope_ActiveSourcesChangedSignalCallback): number
    connect_after(sigName: "active_sources_changed", callback: Scope_ActiveSourcesChangedSignalCallback): number
    emit(sigName: "active_sources_changed", active_ids: string[], ...args: any[]): void
    connect(sigName: "search_changed", callback: Scope_SearchChangedSignalCallback): number
    connect_after(sigName: "search_changed", callback: Scope_SearchChangedSignalCallback): number
    emit(sigName: "search_changed", search: LensSearch, search_type: SearchType, cancellable: Gio.Cancellable, ...args: any[]): void
    connect(sigName: "generate_search_key", callback: Scope_GenerateSearchKeySignalCallback): number
    connect_after(sigName: "generate_search_key", callback: Scope_GenerateSearchKeySignalCallback): number
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

class Scope extends GObject.Object {

    // Own properties of Unity-6.0.Unity.Scope

    static name: string
    static $gtype: GObject.GType<Scope>

    // Constructors of Unity-6.0.Unity.Scope

    constructor(config?: Scope_ConstructProps) 
    constructor(dbus_path_: string) 
    static new(dbus_path_: string): Scope
    _init(config?: Scope_ConstructProps): void
}

interface TrackMetadata_ConstructProps extends GObject.Object_ConstructProps {

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

interface TrackMetadata {

    // Own properties of Unity-6.0.Unity.TrackMetadata

    uri: string
    track_no: number
    artist: string
    title: string
    album: string
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

class TrackMetadata extends GObject.Object {

    // Own properties of Unity-6.0.Unity.TrackMetadata

    static name: string
    static $gtype: GObject.GType<TrackMetadata>

    // Constructors of Unity-6.0.Unity.TrackMetadata

    constructor(config?: TrackMetadata_ConstructProps) 
    constructor() 
    static new(): TrackMetadata
    static full(uri: string, track_no: number, title: string, artist: string, album: string, length: number): TrackMetadata
    _init(config?: TrackMetadata_ConstructProps): void
}

interface Playlist_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Unity-6.0.Unity.Playlist

    id?: string | null
    name?: string | null
    icon?: Gio.Icon | null
    creation_date?: GLib.DateTime | null
    modification_date?: GLib.DateTime | null
    last_play_date?: GLib.DateTime | null
}

interface Playlist {

    // Own properties of Unity-6.0.Unity.Playlist

    readonly id: string
    name: string
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

class Playlist extends GObject.Object {

    // Own properties of Unity-6.0.Unity.Playlist

    static name: string
    static $gtype: GObject.GType<Playlist>

    // Constructors of Unity-6.0.Unity.Playlist

    constructor(config?: Playlist_ConstructProps) 
    constructor(id: string) 
    static new(id: string): Playlist
    _init(config?: Playlist_ConstructProps): void
}

interface MusicPlayer_ConstructProps extends GObject.Object_ConstructProps {

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

/**
 * Signal callback interface for `raise`
 */
interface MusicPlayer_RaiseSignalCallback {
    ($obj: MusicPlayer): void
}

/**
 * Signal callback interface for `play_pause`
 */
interface MusicPlayer_PlayPauseSignalCallback {
    ($obj: MusicPlayer): void
}

/**
 * Signal callback interface for `previous`
 */
interface MusicPlayer_PreviousSignalCallback {
    ($obj: MusicPlayer): void
}

/**
 * Signal callback interface for `next`
 */
interface MusicPlayer_NextSignalCallback {
    ($obj: MusicPlayer): void
}

/**
 * Signal callback interface for `activate_playlist`
 */
interface MusicPlayer_ActivatePlaylistSignalCallback {
    ($obj: MusicPlayer, playlist_id: string): void
}

interface MusicPlayer {

    // Own properties of Unity-6.0.Unity.MusicPlayer

    readonly app_info: Gio.AppInfo
    readonly desktop_file_name: string
    is_blacklisted: boolean
    title: string
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
    edit_playlist_name(id: string, name: string): void

    // Own signals of Unity-6.0.Unity.MusicPlayer

    connect(sigName: "raise", callback: MusicPlayer_RaiseSignalCallback): number
    connect_after(sigName: "raise", callback: MusicPlayer_RaiseSignalCallback): number
    emit(sigName: "raise", ...args: any[]): void
    connect(sigName: "play_pause", callback: MusicPlayer_PlayPauseSignalCallback): number
    connect_after(sigName: "play_pause", callback: MusicPlayer_PlayPauseSignalCallback): number
    emit(sigName: "play_pause", ...args: any[]): void
    connect(sigName: "previous", callback: MusicPlayer_PreviousSignalCallback): number
    connect_after(sigName: "previous", callback: MusicPlayer_PreviousSignalCallback): number
    emit(sigName: "previous", ...args: any[]): void
    connect(sigName: "next", callback: MusicPlayer_NextSignalCallback): number
    connect_after(sigName: "next", callback: MusicPlayer_NextSignalCallback): number
    emit(sigName: "next", ...args: any[]): void
    connect(sigName: "activate_playlist", callback: MusicPlayer_ActivatePlaylistSignalCallback): number
    connect_after(sigName: "activate_playlist", callback: MusicPlayer_ActivatePlaylistSignalCallback): number
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

class MusicPlayer extends GObject.Object {

    // Own properties of Unity-6.0.Unity.MusicPlayer

    static name: string
    static $gtype: GObject.GType<MusicPlayer>

    // Constructors of Unity-6.0.Unity.MusicPlayer

    constructor(config?: MusicPlayer_ConstructProps) 
    constructor(desktop: string) 
    static new(desktop: string): MusicPlayer
    _init(config?: MusicPlayer_ConstructProps): void
}

interface AppInfoManagerClass {

    // Own fields of Unity-6.0.Unity.AppInfoManagerClass

    parent_class: GObject.ObjectClass
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

    parent_class: GObject.ObjectClass
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

    parent_class: GObject.ObjectClass
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

    parent_class: GObject.ObjectClass
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

    parent_class: GObject.ObjectClass
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

    parent_class: GObject.InitiallyUnownedClass
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

    parent_class: GObject.ObjectClass
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

    parent_class: GObject.ObjectClass
    get_hints: (self: Filter) => GLib.HashTable
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

    parent_class: GObject.ObjectClass
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

    parent_class: FilterClass
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

    parent_class: OptionsFilterClass
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

    parent_class: OptionsFilterClass
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

    parent_class: OptionsFilterClass
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

    parent_class: FilterClass
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

    parent_class: OptionsFilterClass
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

    parent_class: GObject.ObjectClass
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

    parent_class: GObject.InitiallyUnownedClass
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

    parent_class: GObject.ObjectClass
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

    parent_class: GObject.ObjectClass
    create_raw: (self: Preview) => GObject.Object
    update_property: (self: Preview, values: GLib.HashTable, _callback_?: Gio.AsyncReadyCallback | null) => void
    update_property_finish: (self: Preview, _res_: Gio.AsyncResult) => GLib.HashTable
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

    parent_class: GObject.ObjectClass
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

    parent_class: GObject.InitiallyUnownedClass
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

    parent_class: PreviewClass
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

    parent_class: PreviewClass
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

    parent_class: PreviewClass
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

    parent_class: PreviewClass
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

    parent_class: PreviewClass
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

    parent_class: GObject.InitiallyUnownedClass
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

    parent_class: PreviewClass
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

    parent_class: GObject.ObjectClass
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

    parent_class: GObject.ObjectClass
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

    parent_class: GObject.ObjectClass
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

    parent_class: GObject.ObjectClass
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

    parent_iface: GObject.TypeInterface
    merge_result: (self: MergeStrategy, target: Dee.Model, row: GLib.Variant[]) => Dee.ModelIter | null
}

abstract class MergeStrategyIface {

    // Own properties of Unity-6.0.Unity.MergeStrategyIface

    static name: string
}

interface PlaylistDetails {

    // Own fields of Unity-6.0.Unity.PlaylistDetails

    id: string
    name: string
    icon_name: string
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