
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * Unity-7.0
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
function category_renderer_from_string(renderer_name: string | null): CategoryRenderer
function category_renderer_to_string(val: CategoryRenderer): string | null
function category_content_type_from_string(content_type: string | null): CategoryContentType
function category_content_type_to_string(val: CategoryContentType): string | null
function filter_renderer_to_string(renderer: FilterRenderer): string | null
function filter_renderer_from_string(renderer_name: string | null): FilterRenderer
function scope_module_get_version(): number
function scope_module_load_scopes(): AbstractScope[]
function object_unref(object?: any | null): void
interface ScopeSearchBaseCallback {
    (instance: ScopeSearchBase): void
}
interface AbstractPreviewCallback {
    (previewer: ResultPreviewer, preview: AbstractPreview | null): void
}
module AppInfoManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    interface ChangedSignalCallback {
        ($obj: AppInfoManager, id: string | null, new_appinfo?: Gio.AppInfo | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface AppInfoManager {

    // Owm methods of Unity-7.0.Unity.AppInfoManager

    lookup(id: string | null): Gio.AppInfo | null
    get_categories(id: string | null): string[] | null
    get_keywords(id: string | null): string[] | null
    get_path(id: string | null): string | null
    lookup_async(id: string | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of lookup_async

    /**
     * Promisified version of {@link lookup_async}
     * 
     * 
     * @param id 
     * @param _callback_ 
     * @returns A Promise of the result of {@link lookup_async}
     */
    lookup_async(id: string | null): globalThis.Promise<Gio.AppInfo | null>
    lookup_finish(_res_: Gio.AsyncResult): Gio.AppInfo | null
    clear(): void

    // Own signals of Unity-7.0.Unity.AppInfoManager

    connect(sigName: "changed", callback: AppInfoManager.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: AppInfoManager.ChangedSignalCallback): number
    emit(sigName: "changed", id: string | null, new_appinfo?: Gio.AppInfo | null, ...args: any[]): void

    // Class property signals of Unity-7.0.Unity.AppInfoManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AppInfoManager extends GObject.Object {

    // Own properties of Unity-7.0.Unity.AppInfoManager

    static name: string
    static $gtype: GObject.GType<AppInfoManager>

    // Constructors of Unity-7.0.Unity.AppInfoManager

    constructor(config?: AppInfoManager.ConstructorProperties) 
    _init(config?: AppInfoManager.ConstructorProperties): void
    static get_instance(): AppInfoManager
    static get_default(): AppInfoManager
}

module AnnotatedIcon {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.AnnotatedIcon

        icon?: Gio.Icon | null
        ribbon?: string | null
        category?: CategoryType | null
        size_hint?: IconSizeHint | null
    }

}

interface AnnotatedIcon {

    // Own properties of Unity-7.0.Unity.AnnotatedIcon

    icon: Gio.Icon
    ribbon: string | null
    category: CategoryType
    size_hint: IconSizeHint

    // Owm methods of Unity-7.0.Unity.AnnotatedIcon

    set_colorize_rgba(r: number, g: number, b: number, a: number): void
    to_string(): string | null
    get_icon(): Gio.Icon
    set_icon(value: Gio.Icon): void
    get_ribbon(): string | null
    set_ribbon(value: string | null): void
    get_category(): CategoryType
    set_category(value: CategoryType): void
    get_size_hint(): IconSizeHint
    set_size_hint(value: IconSizeHint): void

    // Class property signals of Unity-7.0.Unity.AnnotatedIcon

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

    // Own properties of Unity-7.0.Unity.AnnotatedIcon

    static name: string
    static $gtype: GObject.GType<AnnotatedIcon>

    // Constructors of Unity-7.0.Unity.AnnotatedIcon

    constructor(config?: AnnotatedIcon.ConstructorProperties) 
    constructor(base_icon: Gio.Icon) 
    static new(base_icon: Gio.Icon): AnnotatedIcon
    _init(config?: AnnotatedIcon.ConstructorProperties): void
}

module Inspector {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Inspector {

    // Own properties of Unity-7.0.Unity.Inspector

    readonly unity_running: boolean
    readonly unity_bus_name: string | null

    // Owm methods of Unity-7.0.Unity.Inspector

    get_unity_running(): boolean
    get_unity_bus_name(): string | null

    // Class property signals of Unity-7.0.Unity.Inspector

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

class Inspector extends GObject.Object {

    // Own properties of Unity-7.0.Unity.Inspector

    static name: string
    static $gtype: GObject.GType<Inspector>

    // Constructors of Unity-7.0.Unity.Inspector

    constructor(config?: Inspector.ConstructorProperties) 
    _init(config?: Inspector.ConstructorProperties): void
    static get_default(): Inspector
}

module LauncherEntry {

    // Constructor properties interface

    interface ConstructorProperties extends Dee.Serializable.ConstructorProperties, GObject.Object.ConstructorProperties {

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

interface LauncherEntry extends Dee.Serializable {

    // Own properties of Unity-7.0.Unity.LauncherEntry

    app_uri: string | null
    count: number
    count_visible: boolean
    progress: number
    progress_visible: boolean
    urgent: boolean
    quicklist: Dbusmenu.Menuitem

    // Owm methods of Unity-7.0.Unity.LauncherEntry

    get_app_uri(): string | null
    set_app_uri(value: string | null): void
    get_count(): number
    set_count(value: number): void
    get_count_visible(): boolean
    set_count_visible(value: boolean): void
    get_progress(): number
    set_progress(value: number): void
    get_progress_visible(): boolean
    set_progress_visible(value: boolean): void
    get_urgent(): boolean
    set_urgent(value: boolean): void
    get_quicklist(): Dbusmenu.Menuitem | null
    set_quicklist(value?: Dbusmenu.Menuitem | null): void

    // Class property signals of Unity-7.0.Unity.LauncherEntry

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

class LauncherEntry extends GObject.Object {

    // Own properties of Unity-7.0.Unity.LauncherEntry

    static name: string
    static $gtype: GObject.GType<LauncherEntry>

    // Constructors of Unity-7.0.Unity.LauncherEntry

    constructor(config?: LauncherEntry.ConstructorProperties) 
    _init(config?: LauncherEntry.ConstructorProperties): void
    static get_for_app_uri(app_uri: string | null): LauncherEntry
    static get_for_desktop_id(desktop_id: string | null): LauncherEntry
    static get_for_desktop_file(desktop_file: string | null): LauncherEntry
}

module LauncherFavorites {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    interface ChangedSignalCallback {
        ($obj: LauncherFavorites): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface LauncherFavorites {

    // Owm methods of Unity-7.0.Unity.LauncherFavorites

    has_app_info(appinfo: Gio.AppInfo): boolean
    has_app_id(app_id: string | null): boolean
    lookup(app_id: string | null): Gio.AppInfo | null
    enumerate_ids(): string[]
    enumerate_app_infos(): Gio.AppInfo[]

    // Own signals of Unity-7.0.Unity.LauncherFavorites

    connect(sigName: "changed", callback: LauncherFavorites.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: LauncherFavorites.ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of Unity-7.0.Unity.LauncherFavorites

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LauncherFavorites extends GObject.Object {

    // Own properties of Unity-7.0.Unity.LauncherFavorites

    static name: string
    static $gtype: GObject.GType<LauncherFavorites>

    // Constructors of Unity-7.0.Unity.LauncherFavorites

    constructor(config?: LauncherFavorites.ConstructorProperties) 
    _init(config?: LauncherFavorites.ConstructorProperties): void
    static get_default(): LauncherFavorites
}

module MetadataProvider {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface MetadataProvider {

    // Class property signals of Unity-7.0.Unity.MetadataProvider

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MetadataProvider extends GObject.Object {

    // Own properties of Unity-7.0.Unity.MetadataProvider

    static name: string
    static $gtype: GObject.GType<MetadataProvider>

    // Constructors of Unity-7.0.Unity.MetadataProvider

    constructor(config?: MetadataProvider.ConstructorProperties) 
    _init(config?: MetadataProvider.ConstructorProperties): void
}

module ProgressSourceProvider {

    // Constructor properties interface

    interface ConstructorProperties extends MetadataProvider.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.ProgressSourceProvider

        dbus_name?: string | null
        dbus_path?: string | null
    }

}

interface ProgressSourceProvider {

    // Own properties of Unity-7.0.Unity.ProgressSourceProvider

    readonly dbus_name: string | null
    readonly dbus_path: string | null

    // Owm methods of Unity-7.0.Unity.ProgressSourceProvider

    get_dbus_name(): string | null
    get_dbus_path(): string | null

    // Class property signals of Unity-7.0.Unity.ProgressSourceProvider

    connect(sigName: "notify::dbus-name", callback: (($obj: ProgressSourceProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dbus-name", callback: (($obj: ProgressSourceProvider, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dbus-name", ...args: any[]): void
    connect(sigName: "notify::dbus-path", callback: (($obj: ProgressSourceProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dbus-path", callback: (($obj: ProgressSourceProvider, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dbus-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ProgressSourceProvider extends MetadataProvider {

    // Own properties of Unity-7.0.Unity.ProgressSourceProvider

    static name: string
    static $gtype: GObject.GType<ProgressSourceProvider>

    // Constructors of Unity-7.0.Unity.ProgressSourceProvider

    constructor(config?: ProgressSourceProvider.ConstructorProperties) 
    constructor(dbus_name: string | null, dbus_path: string | null) 
    static new(dbus_name: string | null, dbus_path: string | null): ProgressSourceProvider
    _init(config?: ProgressSourceProvider.ConstructorProperties): void
}

module Category {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.Category

        id?: string | null
        name?: string | null
        icon_hint?: Gio.Icon | null
        default_renderer?: CategoryRenderer | null
        content_type?: CategoryContentType | null
        renderer_hint?: string | null
    }

}

interface Category {

    // Own properties of Unity-7.0.Unity.Category

    readonly id: string | null
    readonly name: string | null
    readonly icon_hint: Gio.Icon
    readonly default_renderer: CategoryRenderer
    content_type: CategoryContentType
    renderer_hint: string | null
    readonly renderer: string | null

    // Owm methods of Unity-7.0.Unity.Category

    add_metadata_provider(provider: MetadataProvider): void
    get_id(): string | null
    get_name(): string | null
    get_icon_hint(): Gio.Icon | null
    get_default_renderer(): CategoryRenderer
    get_content_type(): CategoryContentType
    set_content_type(value: CategoryContentType): void
    get_renderer_hint(): string | null
    set_renderer_hint(value: string | null): void
    get_renderer(): string | null

    // Class property signals of Unity-7.0.Unity.Category

    connect(sigName: "notify::id", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::icon-hint", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-hint", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-hint", ...args: any[]): void
    connect(sigName: "notify::default-renderer", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-renderer", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-renderer", ...args: any[]): void
    connect(sigName: "notify::content-type", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-type", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::renderer-hint", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::renderer-hint", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::renderer-hint", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::renderer", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Category extends GObject.Object {

    // Own properties of Unity-7.0.Unity.Category

    static name: string
    static $gtype: GObject.GType<Category>

    // Constructors of Unity-7.0.Unity.Category

    constructor(config?: Category.ConstructorProperties) 
    constructor(id: string | null, name: string | null, icon_hint: Gio.Icon, renderer: CategoryRenderer) 
    static new(id: string | null, name: string | null, icon_hint: Gio.Icon, renderer: CategoryRenderer): Category
    _init(config?: Category.ConstructorProperties): void
}

module Filter {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    interface ChangedSignalCallback {
        ($obj: Filter): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Dee.Serializable.ConstructorProperties, GObject.Object.ConstructorProperties {

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

interface Filter extends Dee.Serializable {

    // Own properties of Unity-7.0.Unity.Filter

    readonly id: string | null
    display_name: string | null
    readonly icon_hint: Gio.Icon
    readonly renderer: FilterRenderer
    visible: boolean
    collapsed: boolean
    filtering: boolean

    // Owm methods of Unity-7.0.Unity.Filter

    get_id(): string | null
    get_display_name(): string | null
    get_icon_hint(): Gio.Icon | null
    get_renderer(): FilterRenderer
    get_visible(): boolean
    set_visible(value: boolean): void
    get_collapsed(): boolean
    get_filtering(): boolean

    // Own signals of Unity-7.0.Unity.Filter

    connect(sigName: "changed", callback: Filter.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: Filter.ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of Unity-7.0.Unity.Filter

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

    // Own properties of Unity-7.0.Unity.Filter

    static name: string
    static $gtype: GObject.GType<Filter>

    // Constructors of Unity-7.0.Unity.Filter

    constructor(config?: Filter.ConstructorProperties) 
    _init(config?: Filter.ConstructorProperties): void
}

module FilterOption {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.FilterOption

        id?: string | null
        display_name?: string | null
        icon_hint?: Gio.Icon | null
        active?: boolean | null
    }

}

interface FilterOption {

    // Own properties of Unity-7.0.Unity.FilterOption

    readonly id: string | null
    readonly display_name: string | null
    readonly icon_hint: Gio.Icon
    active: boolean

    // Owm methods of Unity-7.0.Unity.FilterOption

    get_id(): string | null
    get_display_name(): string | null
    get_icon_hint(): Gio.Icon
    get_active(): boolean
    set_active(value: boolean): void

    // Class property signals of Unity-7.0.Unity.FilterOption

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

    // Own properties of Unity-7.0.Unity.FilterOption

    static name: string
    static $gtype: GObject.GType<FilterOption>

    // Constructors of Unity-7.0.Unity.FilterOption

    constructor(config?: FilterOption.ConstructorProperties) 
    constructor(id: string | null, display_name: string | null, icon_hint: Gio.Icon | null, active: boolean) 
    static new(id: string | null, display_name: string | null, icon_hint: Gio.Icon | null, active: boolean): FilterOption
    _init(config?: FilterOption.ConstructorProperties): void
}

module OptionsFilter {

    // Constructor properties interface

    interface ConstructorProperties extends Filter.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.OptionsFilter

        sort_type?: OptionsFilterSortType | null
        show_all_button?: boolean | null
    }

}

interface OptionsFilter {

    // Own properties of Unity-7.0.Unity.OptionsFilter

    sort_type: OptionsFilterSortType
    show_all_button: boolean

    // Own fields of Unity-7.0.Unity.OptionsFilter

    options: FilterOption[]

    // Owm methods of Unity-7.0.Unity.OptionsFilter

    add_option(id: string | null, display_name: string | null, icon_hint?: Gio.Icon | null): FilterOption
    get_option(id: string | null): FilterOption | null
    remove_option(id: string | null): boolean
    get_sort_type(): OptionsFilterSortType
    set_sort_type(value: OptionsFilterSortType): void
    get_show_all_button(): boolean
    set_show_all_button(value: boolean): void

    // Class property signals of Unity-7.0.Unity.OptionsFilter

    connect(sigName: "notify::sort-type", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-type", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sort-type", ...args: any[]): void
    connect(sigName: "notify::show-all-button", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-all-button", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-all-button", ...args: any[]): void
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

    // Own properties of Unity-7.0.Unity.OptionsFilter

    static name: string
    static $gtype: GObject.GType<OptionsFilter>

    // Constructors of Unity-7.0.Unity.OptionsFilter

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

    // Owm methods of Unity-7.0.Unity.RadioOptionFilter

    get_active_option(): FilterOption | null

    // Class property signals of Unity-7.0.Unity.RadioOptionFilter

    connect(sigName: "notify::sort-type", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-type", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sort-type", ...args: any[]): void
    connect(sigName: "notify::show-all-button", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-all-button", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-all-button", ...args: any[]): void
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

    // Own properties of Unity-7.0.Unity.RadioOptionFilter

    static name: string
    static $gtype: GObject.GType<RadioOptionFilter>

    // Constructors of Unity-7.0.Unity.RadioOptionFilter

    constructor(config?: RadioOptionFilter.ConstructorProperties) 
    constructor(id: string | null, display_name: string | null, icon_hint: Gio.Icon | null, collapsed: boolean) 
    static new(id: string | null, display_name: string | null, icon_hint: Gio.Icon | null, collapsed: boolean): RadioOptionFilter

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

    // Class property signals of Unity-7.0.Unity.CheckOptionFilter

    connect(sigName: "notify::sort-type", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-type", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sort-type", ...args: any[]): void
    connect(sigName: "notify::show-all-button", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-all-button", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-all-button", ...args: any[]): void
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

    // Own properties of Unity-7.0.Unity.CheckOptionFilter

    static name: string
    static $gtype: GObject.GType<CheckOptionFilter>

    // Constructors of Unity-7.0.Unity.CheckOptionFilter

    constructor(config?: CheckOptionFilter.ConstructorProperties) 
    constructor(id: string | null, display_name: string | null, icon_hint: Gio.Icon | null, collapsed: boolean) 
    static new(id: string | null, display_name: string | null, icon_hint: Gio.Icon | null, collapsed: boolean): CheckOptionFilter

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

    // Class property signals of Unity-7.0.Unity.CheckOptionFilterCompact

    connect(sigName: "notify::sort-type", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-type", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sort-type", ...args: any[]): void
    connect(sigName: "notify::show-all-button", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-all-button", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-all-button", ...args: any[]): void
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

    // Own properties of Unity-7.0.Unity.CheckOptionFilterCompact

    static name: string
    static $gtype: GObject.GType<CheckOptionFilterCompact>

    // Constructors of Unity-7.0.Unity.CheckOptionFilterCompact

    constructor(config?: CheckOptionFilterCompact.ConstructorProperties) 
    constructor(id: string | null, display_name: string | null, icon_hint: Gio.Icon | null, collapsed: boolean) 
    static new(id: string | null, display_name: string | null, icon_hint: Gio.Icon | null, collapsed: boolean): CheckOptionFilterCompact

    // Overloads of new

    static new(): OptionsFilter
    _init(config?: CheckOptionFilterCompact.ConstructorProperties): void
}

module RatingsFilter {

    // Constructor properties interface

    interface ConstructorProperties extends Filter.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.RatingsFilter

        rating?: number | null
    }

}

interface RatingsFilter {

    // Own properties of Unity-7.0.Unity.RatingsFilter

    rating: number

    // Owm methods of Unity-7.0.Unity.RatingsFilter

    get_rating(): number

    // Class property signals of Unity-7.0.Unity.RatingsFilter

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

    // Own properties of Unity-7.0.Unity.RatingsFilter

    static name: string
    static $gtype: GObject.GType<RatingsFilter>

    // Constructors of Unity-7.0.Unity.RatingsFilter

    constructor(config?: RatingsFilter.ConstructorProperties) 
    constructor(id: string | null, display_name: string | null, icon_hint: Gio.Icon | null, collapsed: boolean) 
    static new(id: string | null, display_name: string | null, icon_hint: Gio.Icon | null, collapsed: boolean): RatingsFilter
    _init(config?: RatingsFilter.ConstructorProperties): void
}

module MultiRangeFilter {

    // Constructor properties interface

    interface ConstructorProperties extends OptionsFilter.ConstructorProperties {
    }

}

interface MultiRangeFilter {

    // Owm methods of Unity-7.0.Unity.MultiRangeFilter

    get_first_active(): FilterOption | null
    get_last_active(): FilterOption | null

    // Class property signals of Unity-7.0.Unity.MultiRangeFilter

    connect(sigName: "notify::sort-type", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-type", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sort-type", ...args: any[]): void
    connect(sigName: "notify::show-all-button", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-all-button", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-all-button", ...args: any[]): void
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

    // Own properties of Unity-7.0.Unity.MultiRangeFilter

    static name: string
    static $gtype: GObject.GType<MultiRangeFilter>

    // Constructors of Unity-7.0.Unity.MultiRangeFilter

    constructor(config?: MultiRangeFilter.ConstructorProperties) 
    constructor(id: string | null, display_name: string | null, icon_hint: Gio.Icon | null, collapsed: boolean) 
    static new(id: string | null, display_name: string | null, icon_hint: Gio.Icon | null, collapsed: boolean): MultiRangeFilter

    // Overloads of new

    static new(): OptionsFilter
    _init(config?: MultiRangeFilter.ConstructorProperties): void
}

module PreferencesManager {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.PreferencesManager

        remote_content_search?: PreferencesManagerRemoteContent | null
        always_search?: string[] | null
        home_lens_priority?: string[] | null
        home_lens_default_view?: string[] | null
        disabled_scopes?: string[] | null
    }

}

interface PreferencesManager {

    // Own properties of Unity-7.0.Unity.PreferencesManager

    remote_content_search: PreferencesManagerRemoteContent
    always_search: string[]
    home_lens_priority: string[]
    home_lens_default_view: string[]
    disabled_scopes: string[]

    // Owm methods of Unity-7.0.Unity.PreferencesManager

    get_remote_content_search(): PreferencesManagerRemoteContent
    set_remote_content_search(value: PreferencesManagerRemoteContent): void
    get_always_search(): string[]
    set_always_search(value: string[]): void
    get_home_lens_priority(): string[]
    set_home_lens_priority(value: string[]): void
    get_home_lens_default_view(): string[]
    set_home_lens_default_view(value: string[]): void
    get_disabled_scopes(): string[]
    set_disabled_scopes(value: string[]): void

    // Class property signals of Unity-7.0.Unity.PreferencesManager

    connect(sigName: "notify::remote-content-search", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-content-search", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remote-content-search", ...args: any[]): void
    connect(sigName: "notify::always-search", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-search", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::always-search", ...args: any[]): void
    connect(sigName: "notify::home-lens-priority", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::home-lens-priority", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::home-lens-priority", ...args: any[]): void
    connect(sigName: "notify::home-lens-default-view", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::home-lens-default-view", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::home-lens-default-view", ...args: any[]): void
    connect(sigName: "notify::disabled-scopes", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disabled-scopes", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::disabled-scopes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PreferencesManager extends GObject.Object {

    // Own properties of Unity-7.0.Unity.PreferencesManager

    static name: string
    static $gtype: GObject.GType<PreferencesManager>

    // Constructors of Unity-7.0.Unity.PreferencesManager

    constructor(config?: PreferencesManager.ConstructorProperties) 
    _init(config?: PreferencesManager.ConstructorProperties): void
    static get_default(): PreferencesManager
}

module DeprecatedScopeSearch {

    // Signal callback interfaces

    /**
     * Signal callback interface for `finished`
     */
    interface FinishedSignalCallback {
        ($obj: DeprecatedScopeSearch): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends ScopeSearchBase.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.DeprecatedScopeSearch

        channel_id?: string | null
        hints?: GLib.HashTable | null
        results_model?: Dee.SerializableModel | null
        owner?: DeprecatedScopeBase | null
    }

}

interface DeprecatedScopeSearch {

    // Own properties of Unity-7.0.Unity.DeprecatedScopeSearch

    readonly channel_id: string | null
    readonly search_string: string | null
    readonly search_type: SearchType
    readonly hints: GLib.HashTable
    readonly results_model: Dee.SerializableModel
    readonly owner: DeprecatedScopeBase

    // Owm methods of Unity-7.0.Unity.DeprecatedScopeSearch

    set_reply_hint(key: string | null, variant: GLib.Variant): void
    get_filter(filter_id: string | null): Filter | null
    equals(other: DeprecatedScopeSearch): boolean
    get_channel_id(): string | null
    get_search_string(): string | null
    get_search_type(): SearchType
    get_hints(): GLib.HashTable
    get_results_model(): Dee.SerializableModel
    get_owner(): DeprecatedScopeBase

    // Own signals of Unity-7.0.Unity.DeprecatedScopeSearch

    connect(sigName: "finished", callback: DeprecatedScopeSearch.FinishedSignalCallback): number
    connect_after(sigName: "finished", callback: DeprecatedScopeSearch.FinishedSignalCallback): number
    emit(sigName: "finished", ...args: any[]): void

    // Class property signals of Unity-7.0.Unity.DeprecatedScopeSearch

    connect(sigName: "notify::channel-id", callback: (($obj: DeprecatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channel-id", callback: (($obj: DeprecatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::channel-id", ...args: any[]): void
    connect(sigName: "notify::search-string", callback: (($obj: DeprecatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-string", callback: (($obj: DeprecatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-string", ...args: any[]): void
    connect(sigName: "notify::search-type", callback: (($obj: DeprecatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-type", callback: (($obj: DeprecatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-type", ...args: any[]): void
    connect(sigName: "notify::hints", callback: (($obj: DeprecatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hints", callback: (($obj: DeprecatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hints", ...args: any[]): void
    connect(sigName: "notify::results-model", callback: (($obj: DeprecatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::results-model", callback: (($obj: DeprecatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::results-model", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (($obj: DeprecatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: DeprecatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DeprecatedScopeSearch extends ScopeSearchBase {

    // Own properties of Unity-7.0.Unity.DeprecatedScopeSearch

    static name: string
    static $gtype: GObject.GType<DeprecatedScopeSearch>

    // Constructors of Unity-7.0.Unity.DeprecatedScopeSearch

    constructor(config?: DeprecatedScopeSearch.ConstructorProperties) 
    _init(config?: DeprecatedScopeSearch.ConstructorProperties): void
}

module AggregatedScopeSearch {

    // Signal callback interfaces

    /**
     * Signal callback interface for `transaction-complete`
     */
    interface TransactionCompleteSignalCallback {
        ($obj: AggregatedScopeSearch, origin_scope_id: string | null): void
    }

    /**
     * Signal callback interface for `category-order-changed`
     */
    interface CategoryOrderChangedSignalCallback {
        ($obj: AggregatedScopeSearch, category_indices: number[]): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends DeprecatedScopeSearch.ConstructorProperties {
    }

}

interface AggregatedScopeSearch {

    // Owm methods of Unity-7.0.Unity.AggregatedScopeSearch

    search_scope(scope_id: string | null, search_string: string | null, search_type: SearchType, hints?: GLib.HashTable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    search_scope_finish(_res_: Gio.AsyncResult): GLib.HashTable
    push_results(scope_id: string | null, results_model: Dee.SerializableModel, category_ids: string[], _callback_?: Gio.AsyncReadyCallback<this> | null): void
    push_results_finish(_res_: Gio.AsyncResult): void
    push_filter_settings(filters: FilterSet): void

    // Own signals of Unity-7.0.Unity.AggregatedScopeSearch

    connect(sigName: "transaction-complete", callback: AggregatedScopeSearch.TransactionCompleteSignalCallback): number
    connect_after(sigName: "transaction-complete", callback: AggregatedScopeSearch.TransactionCompleteSignalCallback): number
    emit(sigName: "transaction-complete", origin_scope_id: string | null, ...args: any[]): void
    connect(sigName: "category-order-changed", callback: AggregatedScopeSearch.CategoryOrderChangedSignalCallback): number
    connect_after(sigName: "category-order-changed", callback: AggregatedScopeSearch.CategoryOrderChangedSignalCallback): number
    emit(sigName: "category-order-changed", category_indices: number[], ...args: any[]): void

    // Class property signals of Unity-7.0.Unity.AggregatedScopeSearch

    connect(sigName: "notify::channel-id", callback: (($obj: AggregatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channel-id", callback: (($obj: AggregatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::channel-id", ...args: any[]): void
    connect(sigName: "notify::search-string", callback: (($obj: AggregatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-string", callback: (($obj: AggregatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-string", ...args: any[]): void
    connect(sigName: "notify::search-type", callback: (($obj: AggregatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-type", callback: (($obj: AggregatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-type", ...args: any[]): void
    connect(sigName: "notify::hints", callback: (($obj: AggregatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hints", callback: (($obj: AggregatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hints", ...args: any[]): void
    connect(sigName: "notify::results-model", callback: (($obj: AggregatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::results-model", callback: (($obj: AggregatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::results-model", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (($obj: AggregatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: AggregatedScopeSearch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AggregatedScopeSearch extends DeprecatedScopeSearch {

    // Own properties of Unity-7.0.Unity.AggregatedScopeSearch

    static name: string
    static $gtype: GObject.GType<AggregatedScopeSearch>

    // Constructors of Unity-7.0.Unity.AggregatedScopeSearch

    constructor(config?: AggregatedScopeSearch.ConstructorProperties) 
    constructor(owner: AggregatorScope, channel_id: string | null, hints: GLib.HashTable, results_model: Dee.SerializableModel) 
    static new(owner: AggregatorScope, channel_id: string | null, hints: GLib.HashTable, results_model: Dee.SerializableModel): AggregatedScopeSearch
    _init(config?: AggregatedScopeSearch.ConstructorProperties): void
}

module Preview {

    // Constructor properties interface

    interface ConstructorProperties extends Dee.Serializable.ConstructorProperties, AbstractPreview.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.Preview

        title?: string | null
        subtitle?: string | null
        description_markup?: string | null
        image_source_uri?: string | null
        image?: Gio.Icon | null
    }

}

interface Preview extends Dee.Serializable {

    // Own properties of Unity-7.0.Unity.Preview

    title: string | null
    subtitle: string | null
    description_markup: string | null
    image_source_uri: string | null
    image: Gio.Icon

    // Owm methods of Unity-7.0.Unity.Preview

    add_action(action: PreviewAction): void
    add_info(info_hint: InfoHint): void
    get_title(): string | null
    set_title(value: string | null): void
    get_subtitle(): string | null
    set_subtitle(value: string | null): void
    get_description_markup(): string | null
    set_description_markup(value: string | null): void
    get_image_source_uri(): string | null
    set_image_source_uri(value: string | null): void
    get_image(): Gio.Icon | null
    set_image(value?: Gio.Icon | null): void

    // Class property signals of Unity-7.0.Unity.Preview

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

class Preview extends AbstractPreview {

    // Own properties of Unity-7.0.Unity.Preview

    static name: string
    static $gtype: GObject.GType<Preview>

    // Constructors of Unity-7.0.Unity.Preview

    constructor(config?: Preview.ConstructorProperties) 
    _init(config?: Preview.ConstructorProperties): void
}

module PreviewAction {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activated`
     */
    interface ActivatedSignalCallback {
        ($obj: PreviewAction, uri: string | null): ActivationResponse
    }


    // Constructor properties interface

    interface ConstructorProperties extends Dee.Serializable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.PreviewAction

        id?: string | null
        display_name?: string | null
        extra_text?: string | null
        icon_hint?: Gio.Icon | null
        layout_hint?: LayoutHint | null
    }

}

interface PreviewAction extends Dee.Serializable {

    // Own properties of Unity-7.0.Unity.PreviewAction

    readonly id: string | null
    readonly display_name: string | null
    extra_text: string | null
    readonly icon_hint: Gio.Icon
    readonly layout_hint: LayoutHint
    readonly hints: GLib.HashTable

    // Owm methods of Unity-7.0.Unity.PreviewAction

    get_id(): string | null
    get_display_name(): string | null
    get_extra_text(): string | null
    set_extra_text(value: string | null): void
    get_icon_hint(): Gio.Icon | null
    get_layout_hint(): LayoutHint
    get_hints(): GLib.HashTable | null

    // Own signals of Unity-7.0.Unity.PreviewAction

    connect(sigName: "activated", callback: PreviewAction.ActivatedSignalCallback): number
    connect_after(sigName: "activated", callback: PreviewAction.ActivatedSignalCallback): number
    emit(sigName: "activated", uri: string | null, ...args: any[]): void

    // Class property signals of Unity-7.0.Unity.PreviewAction

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

    // Own properties of Unity-7.0.Unity.PreviewAction

    static name: string
    static $gtype: GObject.GType<PreviewAction>

    // Constructors of Unity-7.0.Unity.PreviewAction

    constructor(config?: PreviewAction.ConstructorProperties) 
    constructor(id: string | null, display_name: string | null, icon_hint?: Gio.Icon | null) 
    static new(id: string | null, display_name: string | null, icon_hint?: Gio.Icon | null): PreviewAction
    static with_layout_hint(id: string | null, display_name: string | null, icon_hint: Gio.Icon | null, layout: LayoutHint): PreviewAction
    static with_uri(uri: string | null, display_name: string | null, icon_hint?: Gio.Icon | null): PreviewAction
    _init(config?: PreviewAction.ConstructorProperties): void
}

module InfoHint {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.InfoHint

        id?: string | null
        display_name?: string | null
        icon_hint?: Gio.Icon | null
        data?: GLib.Variant | null
    }

}

interface InfoHint {

    // Own properties of Unity-7.0.Unity.InfoHint

    readonly id: string | null
    readonly display_name: string | null
    readonly icon_hint: Gio.Icon
    readonly data: GLib.Variant

    // Owm methods of Unity-7.0.Unity.InfoHint

    get_id(): string | null
    get_display_name(): string | null
    get_icon_hint(): Gio.Icon | null
    get_data(): GLib.Variant

    // Overloads of get_data

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    get_data(key: string | null): any | null

    // Class property signals of Unity-7.0.Unity.InfoHint

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

    // Own properties of Unity-7.0.Unity.InfoHint

    static name: string
    static $gtype: GObject.GType<InfoHint>

    // Constructors of Unity-7.0.Unity.InfoHint

    constructor(config?: InfoHint.ConstructorProperties) 
    constructor(id: string | null, display_name: string | null, icon_hint: Gio.Icon | null, data: string | null) 
    static new(id: string | null, display_name: string | null, icon_hint: Gio.Icon | null, data: string | null): InfoHint
    static with_variant(id: string | null, display_name: string | null, icon_hint: Gio.Icon | null, data: GLib.Variant): InfoHint
    _init(config?: InfoHint.ConstructorProperties): void
}

module GenericPreview {

    // Constructor properties interface

    interface ConstructorProperties extends Preview.ConstructorProperties {
    }

}

interface GenericPreview {

    // Class property signals of Unity-7.0.Unity.GenericPreview

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

    // Own properties of Unity-7.0.Unity.GenericPreview

    static name: string
    static $gtype: GObject.GType<GenericPreview>

    // Constructors of Unity-7.0.Unity.GenericPreview

    constructor(config?: GenericPreview.ConstructorProperties) 
    constructor(title: string | null, description: string | null, image?: Gio.Icon | null) 
    static new(title: string | null, description: string | null, image?: Gio.Icon | null): GenericPreview
    _init(config?: GenericPreview.ConstructorProperties): void
}

module ApplicationPreview {

    // Constructor properties interface

    interface ConstructorProperties extends Preview.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.ApplicationPreview

        app_icon?: Gio.Icon | null
        license?: string | null
        copyright?: string | null
        last_update?: string | null
    }

}

interface ApplicationPreview {

    // Own properties of Unity-7.0.Unity.ApplicationPreview

    app_icon: Gio.Icon
    license: string | null
    copyright: string | null
    last_update: string | null

    // Owm methods of Unity-7.0.Unity.ApplicationPreview

    set_rating(rating: number, num_ratings: number): void
    get_app_icon(): Gio.Icon
    set_app_icon(value: Gio.Icon): void
    get_license(): string | null
    set_license(value: string | null): void
    get_copyright(): string | null
    set_copyright(value: string | null): void
    get_last_update(): string | null
    set_last_update(value: string | null): void

    // Class property signals of Unity-7.0.Unity.ApplicationPreview

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

    // Own properties of Unity-7.0.Unity.ApplicationPreview

    static name: string
    static $gtype: GObject.GType<ApplicationPreview>

    // Constructors of Unity-7.0.Unity.ApplicationPreview

    constructor(config?: ApplicationPreview.ConstructorProperties) 
    constructor(title: string | null, subtitle: string | null, description: string | null, icon?: Gio.Icon | null, screenshot?: Gio.Icon | null) 
    static new(title: string | null, subtitle: string | null, description: string | null, icon?: Gio.Icon | null, screenshot?: Gio.Icon | null): ApplicationPreview
    _init(config?: ApplicationPreview.ConstructorProperties): void
}

module MusicPreview {

    // Constructor properties interface

    interface ConstructorProperties extends Preview.ConstructorProperties {
    }

}

interface MusicPreview {

    // Owm methods of Unity-7.0.Unity.MusicPreview

    add_track(track: TrackMetadata): void

    // Class property signals of Unity-7.0.Unity.MusicPreview

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

    // Own properties of Unity-7.0.Unity.MusicPreview

    static name: string
    static $gtype: GObject.GType<MusicPreview>

    // Constructors of Unity-7.0.Unity.MusicPreview

    constructor(config?: MusicPreview.ConstructorProperties) 
    constructor(title: string | null, subtitle: string | null, image?: Gio.Icon | null) 
    static new(title: string | null, subtitle: string | null, image?: Gio.Icon | null): MusicPreview
    _init(config?: MusicPreview.ConstructorProperties): void
}

module PaymentPreview {

    // Constructor properties interface

    interface ConstructorProperties extends Preview.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.PaymentPreview

        header?: string | null
        email?: string | null
        payment_method?: string | null
        purchase_prize?: string | null
        purchase_type?: string | null
        preview_type?: PaymentPreviewType | null
    }

}

interface PaymentPreview {

    // Own properties of Unity-7.0.Unity.PaymentPreview

    header: string | null
    email: string | null
    payment_method: string | null
    purchase_prize: string | null
    purchase_type: string | null
    preview_type: PaymentPreviewType

    // Owm methods of Unity-7.0.Unity.PaymentPreview

    get_header(): string | null
    set_header(value: string | null): void
    get_email(): string | null
    set_email(value: string | null): void
    get_payment_method(): string | null
    set_payment_method(value: string | null): void
    get_purchase_prize(): string | null
    set_purchase_prize(value: string | null): void
    get_purchase_type(): string | null
    set_purchase_type(value: string | null): void
    get_preview_type(): PaymentPreviewType
    set_preview_type(value: PaymentPreviewType): void

    // Class property signals of Unity-7.0.Unity.PaymentPreview

    connect(sigName: "notify::header", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::header", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::header", ...args: any[]): void
    connect(sigName: "notify::email", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::email", ...args: any[]): void
    connect(sigName: "notify::payment-method", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::payment-method", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::payment-method", ...args: any[]): void
    connect(sigName: "notify::purchase-prize", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::purchase-prize", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::purchase-prize", ...args: any[]): void
    connect(sigName: "notify::purchase-type", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::purchase-type", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::purchase-type", ...args: any[]): void
    connect(sigName: "notify::preview-type", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preview-type", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::preview-type", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::description-markup", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-markup", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description-markup", ...args: any[]): void
    connect(sigName: "notify::image-source-uri", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-source-uri", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image-source-uri", ...args: any[]): void
    connect(sigName: "notify::image", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: PaymentPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PaymentPreview extends Preview {

    // Own properties of Unity-7.0.Unity.PaymentPreview

    static name: string
    static $gtype: GObject.GType<PaymentPreview>

    // Constructors of Unity-7.0.Unity.PaymentPreview

    constructor(config?: PaymentPreview.ConstructorProperties) 
    constructor(title: string | null, subtitle: string | null, image?: Gio.Icon | null) 
    static new(title: string | null, subtitle: string | null, image?: Gio.Icon | null): PaymentPreview
    static for_type(title: string | null, subtitle: string | null, image: Gio.Icon | null, type: PaymentPreviewType): PaymentPreview
    static for_application(title: string | null, subtitle: string | null, image?: Gio.Icon | null): PaymentPreview
    static for_music(title: string | null, subtitle: string | null, image?: Gio.Icon | null): PaymentPreview
    static for_error(title: string | null, subtitle: string | null, image?: Gio.Icon | null): PaymentPreview
    _init(config?: PaymentPreview.ConstructorProperties): void
}

module MoviePreview {

    // Constructor properties interface

    interface ConstructorProperties extends Preview.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.MoviePreview

        year?: string | null
    }

}

interface MoviePreview {

    // Own properties of Unity-7.0.Unity.MoviePreview

    year: string | null

    // Owm methods of Unity-7.0.Unity.MoviePreview

    set_rating(rating: number, num_ratings: number): void
    get_year(): string | null
    set_year(value: string | null): void

    // Class property signals of Unity-7.0.Unity.MoviePreview

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

    // Own properties of Unity-7.0.Unity.MoviePreview

    static name: string
    static $gtype: GObject.GType<MoviePreview>

    // Constructors of Unity-7.0.Unity.MoviePreview

    constructor(config?: MoviePreview.ConstructorProperties) 
    constructor(title: string | null, subtitle: string | null, description: string | null, image?: Gio.Icon | null) 
    static new(title: string | null, subtitle: string | null, description: string | null, image?: Gio.Icon | null): MoviePreview
    _init(config?: MoviePreview.ConstructorProperties): void
}

module SocialPreview {

    // Constructor properties interface

    interface ConstructorProperties extends Preview.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.SocialPreview

        avatar?: Gio.Icon | null
        content?: string | null
        sender?: string | null
    }

}

interface SocialPreview {

    // Own properties of Unity-7.0.Unity.SocialPreview

    avatar: Gio.Icon
    content: string | null
    sender: string | null

    // Owm methods of Unity-7.0.Unity.SocialPreview

    add_comment(comment: SocialPreviewComment): void
    get_avatar(): Gio.Icon
    set_avatar(value: Gio.Icon): void
    get_content(): string | null
    set_content(value: string | null): void
    get_sender(): string | null
    set_sender(value: string | null): void

    // Class property signals of Unity-7.0.Unity.SocialPreview

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

    // Own properties of Unity-7.0.Unity.SocialPreview

    static name: string
    static $gtype: GObject.GType<SocialPreview>

    // Constructors of Unity-7.0.Unity.SocialPreview

    constructor(config?: SocialPreview.ConstructorProperties) 
    constructor(sender: string | null, subtitle: string | null, content: string | null, avatar?: Gio.Icon | null) 
    static new(sender: string | null, subtitle: string | null, content: string | null, avatar?: Gio.Icon | null): SocialPreview
    _init(config?: SocialPreview.ConstructorProperties): void
}

module SocialPreviewComment {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.SocialPreviewComment

        id?: string | null
        name?: string | null
        text?: string | null
        time?: string | null
    }

}

interface SocialPreviewComment {

    // Own properties of Unity-7.0.Unity.SocialPreviewComment

    readonly id: string | null
    readonly name: string | null
    readonly text: string | null
    readonly time: string | null

    // Owm methods of Unity-7.0.Unity.SocialPreviewComment

    get_id(): string | null
    get_name(): string | null
    get_text(): string | null
    get_time(): string | null

    // Class property signals of Unity-7.0.Unity.SocialPreviewComment

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

    // Own properties of Unity-7.0.Unity.SocialPreviewComment

    static name: string
    static $gtype: GObject.GType<SocialPreviewComment>

    // Constructors of Unity-7.0.Unity.SocialPreviewComment

    constructor(config?: SocialPreviewComment.ConstructorProperties) 
    constructor(id: string | null, name: string | null, text: string | null, time: string | null) 
    static new(id: string | null, name: string | null, text: string | null, time: string | null): SocialPreviewComment
    _init(config?: SocialPreviewComment.ConstructorProperties): void
}

module ActivationResponse {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.ActivationResponse

        handled?: HandledType | null
        goto_uri?: string | null
    }

}

interface ActivationResponse {

    // Own properties of Unity-7.0.Unity.ActivationResponse

    readonly handled: HandledType
    goto_uri: string | null

    // Owm methods of Unity-7.0.Unity.ActivationResponse

    get_handled(): HandledType
    get_goto_uri(): string | null
    set_goto_uri(value: string | null): void

    // Class property signals of Unity-7.0.Unity.ActivationResponse

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

class ActivationResponse extends GObject.Object {

    // Own properties of Unity-7.0.Unity.ActivationResponse

    static name: string
    static $gtype: GObject.GType<ActivationResponse>

    // Constructors of Unity-7.0.Unity.ActivationResponse

    constructor(config?: ActivationResponse.ConstructorProperties) 
    constructor(handled: HandledType, goto_uri: string | null) 
    static new(handled: HandledType, goto_uri: string | null): ActivationResponse
    static with_search(search_string: string | null, filter_set?: FilterSet | null, search_metadata?: SearchMetadata | null): ActivationResponse
    static with_preview(preview: Preview): ActivationResponse
    _init(config?: ActivationResponse.ConstructorProperties): void
}

module AggregatorActivation {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.AggregatorActivation

        channel_id?: string | null
        scope_id?: string | null
        action_type?: number | null
        scope_result?: ScopeResult | null
        hints?: GLib.HashTable | null
    }

}

interface AggregatorActivation {

    // Own properties of Unity-7.0.Unity.AggregatorActivation

    channel_id: string | null
    scope_id: string | null
    action_type: number
    scope_result: ScopeResult
    hints: GLib.HashTable

    // Owm methods of Unity-7.0.Unity.AggregatorActivation

    get_channel_id(): string | null
    set_channel_id(value: string | null): void
    get_scope_id(): string | null
    set_scope_id(value: string | null): void
    get_action_type(): number
    set_action_type(value: number): void
    get_scope_result(): ScopeResult | null
    set_scope_result(value?: ScopeResult | null): void
    get_hints(): GLib.HashTable

    // Class property signals of Unity-7.0.Unity.AggregatorActivation

    connect(sigName: "notify::channel-id", callback: (($obj: AggregatorActivation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channel-id", callback: (($obj: AggregatorActivation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::channel-id", ...args: any[]): void
    connect(sigName: "notify::scope-id", callback: (($obj: AggregatorActivation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope-id", callback: (($obj: AggregatorActivation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scope-id", ...args: any[]): void
    connect(sigName: "notify::action-type", callback: (($obj: AggregatorActivation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-type", callback: (($obj: AggregatorActivation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-type", ...args: any[]): void
    connect(sigName: "notify::scope-result", callback: (($obj: AggregatorActivation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope-result", callback: (($obj: AggregatorActivation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scope-result", ...args: any[]): void
    connect(sigName: "notify::hints", callback: (($obj: AggregatorActivation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hints", callback: (($obj: AggregatorActivation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hints", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AggregatorActivation extends GObject.Object {

    // Own properties of Unity-7.0.Unity.AggregatorActivation

    static name: string
    static $gtype: GObject.GType<AggregatorActivation>

    // Constructors of Unity-7.0.Unity.AggregatorActivation

    constructor(config?: AggregatorActivation.ConstructorProperties) 
    constructor(channel_id: string | null, scope_id: string | null, action_type: number, result?: ScopeResult | null) 
    static new(channel_id: string | null, scope_id: string | null, action_type: number, result?: ScopeResult | null): AggregatorActivation
    _init(config?: AggregatorActivation.ConstructorProperties): void
}

module FilterSet {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface FilterSet {

    // Owm methods of Unity-7.0.Unity.FilterSet

    add(filter: Filter): void
    get_filter_by_id(filter_id: string | null): Filter | null
    get_filters(): Filter[]

    // Own virtual methods of Unity-7.0.Unity.FilterSet

    vfunc_add(filter: Filter): void
    vfunc_get_filter_by_id(filter_id: string | null): Filter | null
    vfunc_get_filters(): Filter[]

    // Class property signals of Unity-7.0.Unity.FilterSet

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FilterSet extends GObject.Object {

    // Own properties of Unity-7.0.Unity.FilterSet

    static name: string
    static $gtype: GObject.GType<FilterSet>

    // Constructors of Unity-7.0.Unity.FilterSet

    constructor(config?: FilterSet.ConstructorProperties) 
    constructor() 
    static new(): FilterSet
    _init(config?: FilterSet.ConstructorProperties): void
}

module CategorySet {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface CategorySet {

    // Owm methods of Unity-7.0.Unity.CategorySet

    add(category: Category): void
    get_categories(): Category[]

    // Own virtual methods of Unity-7.0.Unity.CategorySet

    vfunc_add(category: Category): void
    vfunc_get_categories(): Category[]

    // Class property signals of Unity-7.0.Unity.CategorySet

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CategorySet extends GObject.Object {

    // Own properties of Unity-7.0.Unity.CategorySet

    static name: string
    static $gtype: GObject.GType<CategorySet>

    // Constructors of Unity-7.0.Unity.CategorySet

    constructor(config?: CategorySet.ConstructorProperties) 
    constructor() 
    static new(): CategorySet
    _init(config?: CategorySet.ConstructorProperties): void
}

module Schema {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Schema {

    // Owm methods of Unity-7.0.Unity.Schema

    add_field(name: string | null, schema: string | null, type: SchemaFieldType): void
    get_fields(): SchemaFieldInfo[]

    // Own virtual methods of Unity-7.0.Unity.Schema

    vfunc_add_field(name: string | null, schema: string | null, type: SchemaFieldType): void
    vfunc_get_fields(): SchemaFieldInfo[]

    // Class property signals of Unity-7.0.Unity.Schema

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Schema extends GObject.Object {

    // Own properties of Unity-7.0.Unity.Schema

    static name: string
    static $gtype: GObject.GType<Schema>

    // Constructors of Unity-7.0.Unity.Schema

    constructor(config?: Schema.ConstructorProperties) 
    constructor() 
    static new(): Schema
    _init(config?: Schema.ConstructorProperties): void
}

module Cancellable {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Cancellable {

    // Owm methods of Unity-7.0.Unity.Cancellable

    cancel(): void
    is_cancelled(): boolean
    get_gcancellable(): Gio.Cancellable | null

    // Own virtual methods of Unity-7.0.Unity.Cancellable

    vfunc_cancel(): void
    vfunc_is_cancelled(): boolean
    vfunc_get_gcancellable(): Gio.Cancellable | null

    // Class property signals of Unity-7.0.Unity.Cancellable

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Cancellable extends GObject.Object {

    // Own properties of Unity-7.0.Unity.Cancellable

    static name: string
    static $gtype: GObject.GType<Cancellable>

    // Constructors of Unity-7.0.Unity.Cancellable

    constructor(config?: Cancellable.ConstructorProperties) 
    _init(config?: Cancellable.ConstructorProperties): void
    static create(): Cancellable
}

module ScopeSearchBase {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ScopeSearchBase {

    // Own fields of Unity-7.0.Unity.ScopeSearchBase

    search_context?: SearchContext | null

    // Owm methods of Unity-7.0.Unity.ScopeSearchBase

    run(): void
    run_async(async_callback: ScopeSearchBaseCallback): void
    set_search_context(ctx: SearchContext): void

    // Own virtual methods of Unity-7.0.Unity.ScopeSearchBase

    vfunc_run(): void
    vfunc_run_async(async_callback: ScopeSearchBaseCallback): void
    vfunc_set_search_context(ctx: SearchContext): void

    // Class property signals of Unity-7.0.Unity.ScopeSearchBase

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ScopeSearchBase extends GObject.Object {

    // Own properties of Unity-7.0.Unity.ScopeSearchBase

    static name: string
    static $gtype: GObject.GType<ScopeSearchBase>

    // Constructors of Unity-7.0.Unity.ScopeSearchBase

    constructor(config?: ScopeSearchBase.ConstructorProperties) 
    _init(config?: ScopeSearchBase.ConstructorProperties): void
}

module ResultSet {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ResultSet {

    // Own fields of Unity-7.0.Unity.ResultSet

    ttl: number

    // Owm methods of Unity-7.0.Unity.ResultSet

    add_result(result: ScopeResult): void
    add_result_from_variant(variant: GLib.Variant): void
    flush(): void

    // Own virtual methods of Unity-7.0.Unity.ResultSet

    vfunc_add_result(result: ScopeResult): void
    vfunc_add_result_from_variant(variant: GLib.Variant): void
    vfunc_flush(): void

    // Class property signals of Unity-7.0.Unity.ResultSet

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ResultSet extends GObject.Object {

    // Own properties of Unity-7.0.Unity.ResultSet

    static name: string
    static $gtype: GObject.GType<ResultSet>

    // Constructors of Unity-7.0.Unity.ResultSet

    constructor(config?: ResultSet.ConstructorProperties) 
    _init(config?: ResultSet.ConstructorProperties): void
}

module AbstractPreview {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface AbstractPreview {

    // Owm methods of Unity-7.0.Unity.AbstractPreview

    serialize_as(serialization_type: SerializationType): Uint8Array

    // Own virtual methods of Unity-7.0.Unity.AbstractPreview

    vfunc_serialize_as(serialization_type: SerializationType): Uint8Array

    // Class property signals of Unity-7.0.Unity.AbstractPreview

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AbstractPreview extends GObject.Object {

    // Own properties of Unity-7.0.Unity.AbstractPreview

    static name: string
    static $gtype: GObject.GType<AbstractPreview>

    // Constructors of Unity-7.0.Unity.AbstractPreview

    constructor(config?: AbstractPreview.ConstructorProperties) 
    _init(config?: AbstractPreview.ConstructorProperties): void
}

module ResultPreviewer {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ResultPreviewer {

    // Own fields of Unity-7.0.Unity.ResultPreviewer

    result: ScopeResult
    metadata: SearchMetadata
    cancellable: Cancellable

    // Owm methods of Unity-7.0.Unity.ResultPreviewer

    run(): AbstractPreview | null
    run_async(async_callback: AbstractPreviewCallback): void
    set_scope_result(scope_result: ScopeResult): void
    set_search_metadata(search_metadata: SearchMetadata): void

    // Own virtual methods of Unity-7.0.Unity.ResultPreviewer

    vfunc_run(): AbstractPreview | null
    vfunc_run_async(async_callback: AbstractPreviewCallback): void

    // Class property signals of Unity-7.0.Unity.ResultPreviewer

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ResultPreviewer extends GObject.Object {

    // Own properties of Unity-7.0.Unity.ResultPreviewer

    static name: string
    static $gtype: GObject.GType<ResultPreviewer>

    // Constructors of Unity-7.0.Unity.ResultPreviewer

    constructor(config?: ResultPreviewer.ConstructorProperties) 
    _init(config?: ResultPreviewer.ConstructorProperties): void
}

module SearchMetadata {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface SearchMetadata {

    // Own properties of Unity-7.0.Unity.SearchMetadata

    readonly locale: string | null
    readonly form_factor: string | null
    readonly location: GeoCoordinate

    // Owm methods of Unity-7.0.Unity.SearchMetadata

    get_locale(): string | null
    get_form_factor(): string | null
    get_location(): GeoCoordinate | null

    // Class property signals of Unity-7.0.Unity.SearchMetadata

    connect(sigName: "notify::locale", callback: (($obj: SearchMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: SearchMetadata, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::locale", ...args: any[]): void
    connect(sigName: "notify::form-factor", callback: (($obj: SearchMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::form-factor", callback: (($obj: SearchMetadata, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::form-factor", ...args: any[]): void
    connect(sigName: "notify::location", callback: (($obj: SearchMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: SearchMetadata, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SearchMetadata extends GObject.Object {

    // Own properties of Unity-7.0.Unity.SearchMetadata

    static name: string
    static $gtype: GObject.GType<SearchMetadata>

    // Constructors of Unity-7.0.Unity.SearchMetadata

    constructor(config?: SearchMetadata.ConstructorProperties) 
    constructor() 
    static new(): SearchMetadata
    _init(config?: SearchMetadata.ConstructorProperties): void
    static create(metadata?: GLib.HashTable | null): SearchMetadata
    static create_from_variant(metadata: GLib.Variant): SearchMetadata
}

module GeoCoordinate {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface GeoCoordinate {

    // Own fields of Unity-7.0.Unity.GeoCoordinate

    latitude: number
    longitude: number
    altitude: number

    // Owm methods of Unity-7.0.Unity.GeoCoordinate

    has_valid_altitude(): boolean

    // Class property signals of Unity-7.0.Unity.GeoCoordinate

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GeoCoordinate extends GObject.Object {

    // Own properties of Unity-7.0.Unity.GeoCoordinate

    static name: string
    static $gtype: GObject.GType<GeoCoordinate>

    // Constructors of Unity-7.0.Unity.GeoCoordinate

    constructor(config?: GeoCoordinate.ConstructorProperties) 
    constructor(latitude_: number, longitude_: number) 
    static new(latitude_: number, longitude_: number): GeoCoordinate
    static with_altitude(latitude_: number, longitude_: number, altitude_: number): GeoCoordinate
    _init(config?: GeoCoordinate.ConstructorProperties): void
}

module AbstractScope {

    // Signal callback interfaces

    /**
     * Signal callback interface for `results-invalidated-internal`
     */
    interface ResultsInvalidatedInternalSignalCallback {
        ($obj: AbstractScope, search_type: SearchType): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface AbstractScope {

    // Owm methods of Unity-7.0.Unity.AbstractScope

    create_search_for_query(search_context: SearchContext): ScopeSearchBase
    create_previewer(result: ScopeResult, metadata: SearchMetadata): ResultPreviewer
    get_categories(): CategorySet
    get_filters(): FilterSet
    get_schema(): Schema
    get_search_hint(): string | null
    get_group_name(): string | null
    get_unique_name(): string | null
    activate(result: ScopeResult, metadata: SearchMetadata, action_id?: string | null): ActivationResponse | null
    normalize_search_query(search_query: string | null): string | null
    results_invalidated(search_type: SearchType): void

    // Own virtual methods of Unity-7.0.Unity.AbstractScope

    vfunc_create_search_for_query(search_context: SearchContext): ScopeSearchBase
    vfunc_create_previewer(result: ScopeResult, metadata: SearchMetadata): ResultPreviewer
    vfunc_get_categories(): CategorySet
    vfunc_get_filters(): FilterSet
    vfunc_get_schema(): Schema
    vfunc_get_search_hint(): string | null
    vfunc_get_group_name(): string | null
    vfunc_get_unique_name(): string | null
    vfunc_activate(result: ScopeResult, metadata: SearchMetadata, action_id?: string | null): ActivationResponse | null
    vfunc_normalize_search_query(search_query: string | null): string | null

    // Own signals of Unity-7.0.Unity.AbstractScope

    connect(sigName: "results-invalidated-internal", callback: AbstractScope.ResultsInvalidatedInternalSignalCallback): number
    connect_after(sigName: "results-invalidated-internal", callback: AbstractScope.ResultsInvalidatedInternalSignalCallback): number
    emit(sigName: "results-invalidated-internal", search_type: SearchType, ...args: any[]): void

    // Class property signals of Unity-7.0.Unity.AbstractScope

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AbstractScope extends GObject.Object {

    // Own properties of Unity-7.0.Unity.AbstractScope

    static name: string
    static $gtype: GObject.GType<AbstractScope>

    // Constructors of Unity-7.0.Unity.AbstractScope

    constructor(config?: AbstractScope.ConstructorProperties) 
    _init(config?: AbstractScope.ConstructorProperties): void
}

module ScopeDBusConnector {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.ScopeDBusConnector

        scope?: AbstractScope | null
    }

}

interface ScopeDBusConnector {

    // Own properties of Unity-7.0.Unity.ScopeDBusConnector

    readonly scope: AbstractScope

    // Owm methods of Unity-7.0.Unity.ScopeDBusConnector

    export(): void
    unexport(): void
    get_scope(): AbstractScope

    // Class property signals of Unity-7.0.Unity.ScopeDBusConnector

    connect(sigName: "notify::scope", callback: (($obj: ScopeDBusConnector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope", callback: (($obj: ScopeDBusConnector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scope", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ScopeDBusConnector extends GObject.Object {

    // Own properties of Unity-7.0.Unity.ScopeDBusConnector

    static name: string
    static $gtype: GObject.GType<ScopeDBusConnector>

    // Constructors of Unity-7.0.Unity.ScopeDBusConnector

    constructor(config?: ScopeDBusConnector.ConstructorProperties) 
    constructor(scope: AbstractScope) 
    static new(scope: AbstractScope): ScopeDBusConnector
    _init(config?: ScopeDBusConnector.ConstructorProperties): void
    static run(): void
    static quit(): void
}

module DeprecatedScopeBase {

    // Signal callback interfaces

    /**
     * Signal callback interface for `active-sources-changed`
     */
    interface ActiveSourcesChangedSignalCallback {
        ($obj: DeprecatedScopeBase, active_ids: string[]): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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

interface DeprecatedScopeBase {

    // Own properties of Unity-7.0.Unity.DeprecatedScopeBase

    readonly id: string | null
    readonly dbus_path: string | null
    search_in_global: boolean
    visible: boolean
    readonly is_master: boolean
    search_hint: string | null
    sources: OptionsFilter
    categories: CategorySet
    filters: FilterSet
    schema: Schema

    // Owm methods of Unity-7.0.Unity.DeprecatedScopeBase

    export(): void
    unexport(): void
    get_id(): string | null
    get_dbus_path(): string | null
    get_search_in_global(): boolean
    set_search_in_global(value: boolean): void
    get_visible(): boolean
    set_visible(value: boolean): void
    get_is_master(): boolean
    get_search_hint(): string | null
    set_search_hint(value: string | null): void
    get_sources(): OptionsFilter
    get_categories(): CategorySet
    set_categories(value: CategorySet): void
    get_filters(): FilterSet
    set_filters(value: FilterSet): void
    get_schema(): Schema
    set_schema(value: Schema): void

    // Own signals of Unity-7.0.Unity.DeprecatedScopeBase

    connect(sigName: "active-sources-changed", callback: DeprecatedScopeBase.ActiveSourcesChangedSignalCallback): number
    connect_after(sigName: "active-sources-changed", callback: DeprecatedScopeBase.ActiveSourcesChangedSignalCallback): number
    emit(sigName: "active-sources-changed", active_ids: string[], ...args: any[]): void

    // Class property signals of Unity-7.0.Unity.DeprecatedScopeBase

    connect(sigName: "notify::id", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::dbus-path", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dbus-path", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dbus-path", ...args: any[]): void
    connect(sigName: "notify::search-in-global", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-in-global", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-in-global", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::is-master", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-master", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-master", ...args: any[]): void
    connect(sigName: "notify::search-hint", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-hint", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-hint", ...args: any[]): void
    connect(sigName: "notify::sources", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sources", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sources", ...args: any[]): void
    connect(sigName: "notify::categories", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::categories", ...args: any[]): void
    connect(sigName: "notify::filters", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filters", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filters", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DeprecatedScopeBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DeprecatedScopeBase extends GObject.Object {

    // Own properties of Unity-7.0.Unity.DeprecatedScopeBase

    static name: string
    static $gtype: GObject.GType<DeprecatedScopeBase>

    // Constructors of Unity-7.0.Unity.DeprecatedScopeBase

    constructor(config?: DeprecatedScopeBase.ConstructorProperties) 
    _init(config?: DeprecatedScopeBase.ConstructorProperties): void
}

module DeprecatedScope {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activate-uri`
     */
    interface ActivateUriSignalCallback {
        ($obj: DeprecatedScope, uri: string | null): ActivationResponse | null
    }

    /**
     * Signal callback interface for `preview-uri`
     */
    interface PreviewUriSignalCallback {
        ($obj: DeprecatedScope, uri: string | null): Preview | null
    }

    /**
     * Signal callback interface for `generate-search-key`
     */
    interface GenerateSearchKeySignalCallback {
        ($obj: DeprecatedScope, search: DeprecatedScopeSearch): string | null
    }

    /**
     * Signal callback interface for `search-changed`
     */
    interface SearchChangedSignalCallback {
        ($obj: DeprecatedScope, search: DeprecatedScopeSearch, search_type: SearchType, cancellable: Gio.Cancellable): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends DeprecatedScopeBase.ConstructorProperties {
    }

}

interface DeprecatedScope {

    // Owm methods of Unity-7.0.Unity.DeprecatedScope

    preview_result(result: ScopeResult, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    preview_result_finish(_res_: Gio.AsyncResult): Preview | null
    activate_result(result: ScopeResult, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    activate_result_finish(_res_: Gio.AsyncResult): ActivationResponse | null
    queue_search_changed(search_type: SearchType): void

    // Own virtual methods of Unity-7.0.Unity.DeprecatedScope

    vfunc_preview_result(result: ScopeResult, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_preview_result_finish(_res_: Gio.AsyncResult): Preview | null
    vfunc_activate_result(result: ScopeResult, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_activate_result_finish(_res_: Gio.AsyncResult): ActivationResponse | null

    // Own signals of Unity-7.0.Unity.DeprecatedScope

    connect(sigName: "activate-uri", callback: DeprecatedScope.ActivateUriSignalCallback): number
    connect_after(sigName: "activate-uri", callback: DeprecatedScope.ActivateUriSignalCallback): number
    emit(sigName: "activate-uri", uri: string | null, ...args: any[]): void
    connect(sigName: "preview-uri", callback: DeprecatedScope.PreviewUriSignalCallback): number
    connect_after(sigName: "preview-uri", callback: DeprecatedScope.PreviewUriSignalCallback): number
    emit(sigName: "preview-uri", uri: string | null, ...args: any[]): void
    connect(sigName: "generate-search-key", callback: DeprecatedScope.GenerateSearchKeySignalCallback): number
    connect_after(sigName: "generate-search-key", callback: DeprecatedScope.GenerateSearchKeySignalCallback): number
    emit(sigName: "generate-search-key", search: DeprecatedScopeSearch, ...args: any[]): void
    connect(sigName: "search-changed", callback: DeprecatedScope.SearchChangedSignalCallback): number
    connect_after(sigName: "search-changed", callback: DeprecatedScope.SearchChangedSignalCallback): number
    emit(sigName: "search-changed", search: DeprecatedScopeSearch, search_type: SearchType, cancellable: Gio.Cancellable, ...args: any[]): void

    // Class property signals of Unity-7.0.Unity.DeprecatedScope

    connect(sigName: "notify::id", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::dbus-path", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dbus-path", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dbus-path", ...args: any[]): void
    connect(sigName: "notify::search-in-global", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-in-global", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-in-global", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::is-master", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-master", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-master", ...args: any[]): void
    connect(sigName: "notify::search-hint", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-hint", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-hint", ...args: any[]): void
    connect(sigName: "notify::sources", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sources", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sources", ...args: any[]): void
    connect(sigName: "notify::categories", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::categories", ...args: any[]): void
    connect(sigName: "notify::filters", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filters", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filters", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DeprecatedScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DeprecatedScope extends DeprecatedScopeBase {

    // Own properties of Unity-7.0.Unity.DeprecatedScope

    static name: string
    static $gtype: GObject.GType<DeprecatedScope>

    // Constructors of Unity-7.0.Unity.DeprecatedScope

    constructor(config?: DeprecatedScope.ConstructorProperties) 
    constructor(dbus_path_: string | null, id_: string | null) 
    static new(dbus_path_: string | null, id_: string | null): DeprecatedScope
    _init(config?: DeprecatedScope.ConstructorProperties): void
}

module AggregatorScope {

    // Constructor properties interface

    interface ConstructorProperties extends DeprecatedScopeBase.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.AggregatorScope

        merge_mode?: AggregatorScopeMergeMode | null
        proxy_filter_hints?: boolean | null
        automatic_flushing?: boolean | null
    }

}

interface AggregatorScope {

    // Own properties of Unity-7.0.Unity.AggregatorScope

    merge_mode: AggregatorScopeMergeMode
    proxy_filter_hints: boolean
    automatic_flushing: boolean

    // Owm methods of Unity-7.0.Unity.AggregatorScope

    category_index_for_scope_id(scope_id: string | null): number
    add_sorter(category_index: number, field: string | null, flags: AggregatorScopeSortFlags): void
    add_constraint(category_index: number, field: string | null): void
    search(scope_search: AggregatedScopeSearch, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    search_finish(_res_: Gio.AsyncResult): void
    activate(activation: AggregatorActivation, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    activate_finish(_res_: Gio.AsyncResult): ActivationResponse | null
    get_merge_mode(): AggregatorScopeMergeMode
    set_merge_mode(value: AggregatorScopeMergeMode): void
    get_proxy_filter_hints(): boolean
    set_proxy_filter_hints(value: boolean): void
    get_automatic_flushing(): boolean
    set_automatic_flushing(value: boolean): void

    // Own virtual methods of Unity-7.0.Unity.AggregatorScope

    vfunc_category_index_for_scope_id(scope_id: string | null): number
    vfunc_search(scope_search: AggregatedScopeSearch, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_search_finish(_res_: Gio.AsyncResult): void
    vfunc_activate(activation: AggregatorActivation, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_activate_finish(_res_: Gio.AsyncResult): ActivationResponse | null

    // Class property signals of Unity-7.0.Unity.AggregatorScope

    connect(sigName: "notify::merge-mode", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::merge-mode", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::merge-mode", ...args: any[]): void
    connect(sigName: "notify::proxy-filter-hints", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-filter-hints", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy-filter-hints", ...args: any[]): void
    connect(sigName: "notify::automatic-flushing", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-flushing", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::automatic-flushing", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::dbus-path", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dbus-path", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dbus-path", ...args: any[]): void
    connect(sigName: "notify::search-in-global", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-in-global", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-in-global", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::is-master", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-master", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-master", ...args: any[]): void
    connect(sigName: "notify::search-hint", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-hint", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-hint", ...args: any[]): void
    connect(sigName: "notify::sources", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sources", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sources", ...args: any[]): void
    connect(sigName: "notify::categories", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::categories", ...args: any[]): void
    connect(sigName: "notify::filters", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filters", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filters", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: AggregatorScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AggregatorScope extends DeprecatedScopeBase {

    // Own properties of Unity-7.0.Unity.AggregatorScope

    static name: string
    static $gtype: GObject.GType<AggregatorScope>

    // Constructors of Unity-7.0.Unity.AggregatorScope

    constructor(config?: AggregatorScope.ConstructorProperties) 
    _init(config?: AggregatorScope.ConstructorProperties): void
}

module MasterScope {

    // Constructor properties interface

    interface ConstructorProperties extends AggregatorScope.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.MasterScope

        no_content_hint?: string | null
    }

}

interface MasterScope {

    // Own properties of Unity-7.0.Unity.MasterScope

    no_content_hint: string | null

    // Owm methods of Unity-7.0.Unity.MasterScope

    get_no_content_hint(): string | null
    set_no_content_hint(value: string | null): void

    // Class property signals of Unity-7.0.Unity.MasterScope

    connect(sigName: "notify::no-content-hint", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-content-hint", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-content-hint", ...args: any[]): void
    connect(sigName: "notify::merge-mode", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::merge-mode", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::merge-mode", ...args: any[]): void
    connect(sigName: "notify::proxy-filter-hints", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-filter-hints", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy-filter-hints", ...args: any[]): void
    connect(sigName: "notify::automatic-flushing", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-flushing", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::automatic-flushing", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::dbus-path", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dbus-path", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dbus-path", ...args: any[]): void
    connect(sigName: "notify::search-in-global", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-in-global", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-in-global", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::is-master", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-master", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-master", ...args: any[]): void
    connect(sigName: "notify::search-hint", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-hint", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-hint", ...args: any[]): void
    connect(sigName: "notify::sources", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sources", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sources", ...args: any[]): void
    connect(sigName: "notify::categories", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::categories", ...args: any[]): void
    connect(sigName: "notify::filters", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filters", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filters", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: MasterScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MasterScope extends AggregatorScope {

    // Own properties of Unity-7.0.Unity.MasterScope

    static name: string
    static $gtype: GObject.GType<MasterScope>

    // Constructors of Unity-7.0.Unity.MasterScope

    constructor(config?: MasterScope.ConstructorProperties) 
    constructor(dbus_path_: string | null, id_: string | null) 
    static new(dbus_path_: string | null, id_: string | null): MasterScope
    _init(config?: MasterScope.ConstructorProperties): void
}

module SimpleScope {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractScope.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.SimpleScope

        filter_set?: FilterSet | null
        category_set?: CategorySet | null
        schema?: Schema | null
        search_hint?: string | null
        group_name?: string | null
        unique_name?: string | null
    }

}

interface SimpleScope {

    // Own properties of Unity-7.0.Unity.SimpleScope

    filter_set: FilterSet
    category_set: CategorySet
    schema: Schema
    search_hint: string | null
    group_name: string | null
    unique_name: string | null

    // Owm methods of Unity-7.0.Unity.SimpleScope

    set_search_func(func: any): void
    set_search_async_func(func: any | null): void
    set_activate_func(func: any | null): void
    set_preview_func(func: any): void
    set_preview_async_func(func: any | null): void
    get_filter_set(): FilterSet
    set_filter_set(value: FilterSet): void
    get_category_set(): CategorySet
    set_category_set(value: CategorySet): void
    get_schema(): Schema
    set_schema(value: Schema): void
    get_search_hint(): string | null
    set_search_hint(value: string | null): void
    get_group_name(): string | null
    set_group_name(value: string | null): void
    get_unique_name(): string | null
    set_unique_name(value: string | null): void

    // Class property signals of Unity-7.0.Unity.SimpleScope

    connect(sigName: "notify::filter-set", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-set", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filter-set", ...args: any[]): void
    connect(sigName: "notify::category-set", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::category-set", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::category-set", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: "notify::search-hint", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-hint", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-hint", ...args: any[]): void
    connect(sigName: "notify::group-name", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group-name", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::group-name", ...args: any[]): void
    connect(sigName: "notify::unique-name", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unique-name", callback: (($obj: SimpleScope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unique-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SimpleScope extends AbstractScope {

    // Own properties of Unity-7.0.Unity.SimpleScope

    static name: string
    static $gtype: GObject.GType<SimpleScope>

    // Constructors of Unity-7.0.Unity.SimpleScope

    constructor(config?: SimpleScope.ConstructorProperties) 
    constructor() 
    static new(): SimpleScope
    _init(config?: SimpleScope.ConstructorProperties): void
}

module ScopeLoader {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ScopeLoader {

    // Owm methods of Unity-7.0.Unity.ScopeLoader

    get_scopes(module_name: string | null, module_type?: string | null): AbstractScope[]
    export_scopes(scopes: AbstractScope[]): void
    load_group(group_name: string | null): void
    load_scope(scope_id: string | null): void
    load_module(module: string | null, module_type?: string | null): void

    // Own virtual methods of Unity-7.0.Unity.ScopeLoader

    vfunc_get_scopes(module_name: string | null, module_type?: string | null): AbstractScope[]
    vfunc_export_scopes(scopes: AbstractScope[]): void

    // Class property signals of Unity-7.0.Unity.ScopeLoader

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ScopeLoader extends GObject.Object {

    // Own properties of Unity-7.0.Unity.ScopeLoader

    static name: string
    static $gtype: GObject.GType<ScopeLoader>

    // Constructors of Unity-7.0.Unity.ScopeLoader

    constructor(config?: ScopeLoader.ConstructorProperties) 
    constructor() 
    static new(): ScopeLoader
    _init(config?: ScopeLoader.ConstructorProperties): void
}

module TrackMetadata {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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

interface TrackMetadata {

    // Own properties of Unity-7.0.Unity.TrackMetadata

    uri: string | null
    track_no: number
    artist: string | null
    title: string | null
    album: string | null
    length: number
    art_location: Gio.File
    art_icon: Gio.Icon

    // Owm methods of Unity-7.0.Unity.TrackMetadata

    get_uri(): string | null
    set_uri(value: string | null): void
    get_track_no(): number
    set_track_no(value: number): void
    get_artist(): string | null
    set_artist(value: string | null): void
    get_title(): string | null
    set_title(value: string | null): void
    get_album(): string | null
    set_album(value: string | null): void
    get_length(): number
    set_length(value: number): void
    get_art_location(): Gio.File
    set_art_location(value: Gio.File): void
    get_art_icon(): Gio.Icon
    set_art_icon(value: Gio.Icon): void

    // Class property signals of Unity-7.0.Unity.TrackMetadata

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

    // Own properties of Unity-7.0.Unity.TrackMetadata

    static name: string
    static $gtype: GObject.GType<TrackMetadata>

    // Constructors of Unity-7.0.Unity.TrackMetadata

    constructor(config?: TrackMetadata.ConstructorProperties) 
    constructor() 
    static new(): TrackMetadata
    static full(uri: string | null, track_no: number, title: string | null, artist: string | null, album: string | null, length: number): TrackMetadata
    _init(config?: TrackMetadata.ConstructorProperties): void
}

module Playlist {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unity-7.0.Unity.Playlist

        id?: string | null
        name?: string | null
        icon?: Gio.Icon | null
        creation_date?: GLib.DateTime | null
        modification_date?: GLib.DateTime | null
        last_play_date?: GLib.DateTime | null
    }

}

interface Playlist {

    // Own properties of Unity-7.0.Unity.Playlist

    readonly id: string | null
    name: string | null
    icon: Gio.Icon
    creation_date: GLib.DateTime
    modification_date: GLib.DateTime
    last_play_date: GLib.DateTime

    // Owm methods of Unity-7.0.Unity.Playlist

    get_id(): string | null
    get_name(): string | null
    set_name(value: string | null): void
    get_icon(): Gio.Icon
    set_icon(value: Gio.Icon): void
    get_creation_date(): GLib.DateTime
    set_creation_date(value: GLib.DateTime): void
    get_modification_date(): GLib.DateTime
    set_modification_date(value: GLib.DateTime): void
    get_last_play_date(): GLib.DateTime
    set_last_play_date(value: GLib.DateTime): void

    // Class property signals of Unity-7.0.Unity.Playlist

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

    // Own properties of Unity-7.0.Unity.Playlist

    static name: string
    static $gtype: GObject.GType<Playlist>

    // Constructors of Unity-7.0.Unity.Playlist

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
        ($obj: MusicPlayer): void
    }

    /**
     * Signal callback interface for `play-pause`
     */
    interface PlayPauseSignalCallback {
        ($obj: MusicPlayer): void
    }

    /**
     * Signal callback interface for `previous`
     */
    interface PreviousSignalCallback {
        ($obj: MusicPlayer): void
    }

    /**
     * Signal callback interface for `next`
     */
    interface NextSignalCallback {
        ($obj: MusicPlayer): void
    }

    /**
     * Signal callback interface for `activate-playlist`
     */
    interface ActivatePlaylistSignalCallback {
        ($obj: MusicPlayer, playlist_id: string): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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

interface MusicPlayer {

    // Own properties of Unity-7.0.Unity.MusicPlayer

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

    // Owm methods of Unity-7.0.Unity.MusicPlayer

    export(): void
    unexport(): void
    add_playlist(p: Playlist): boolean
    remove_playlist(p: Playlist): boolean
    get_playlists(): Playlist[]
    edit_playlist_name(id: string | null, name: string | null): void
    get_app_info(): Gio.AppInfo
    get_desktop_file_name(): string | null
    get_is_blacklisted(): boolean
    set_is_blacklisted(value: boolean): void
    get_title(): string | null
    set_title(value: string | null): void
    get_can_go_next(): boolean
    set_can_go_next(value: boolean): void
    get_can_go_previous(): boolean
    set_can_go_previous(value: boolean): void
    get_can_play(): boolean
    set_can_play(value: boolean): void
    get_can_pause(): boolean
    set_can_pause(value: boolean): void
    get_current_track(): TrackMetadata
    set_current_track(value: TrackMetadata): void
    get_playback_state(): PlaybackState
    set_playback_state(value: PlaybackState): void
    get_current_playlist(): Playlist
    set_current_playlist(value: Playlist): void
    get_track_menu(): Dbusmenu.Menuitem | null
    set_track_menu(value?: Dbusmenu.Menuitem | null): void
    get_player_menu(): Dbusmenu.Menuitem | null
    set_player_menu(value?: Dbusmenu.Menuitem | null): void

    // Own signals of Unity-7.0.Unity.MusicPlayer

    connect(sigName: "raise", callback: MusicPlayer.RaiseSignalCallback): number
    connect_after(sigName: "raise", callback: MusicPlayer.RaiseSignalCallback): number
    emit(sigName: "raise", ...args: any[]): void
    connect(sigName: "play-pause", callback: MusicPlayer.PlayPauseSignalCallback): number
    connect_after(sigName: "play-pause", callback: MusicPlayer.PlayPauseSignalCallback): number
    emit(sigName: "play-pause", ...args: any[]): void
    connect(sigName: "previous", callback: MusicPlayer.PreviousSignalCallback): number
    connect_after(sigName: "previous", callback: MusicPlayer.PreviousSignalCallback): number
    emit(sigName: "previous", ...args: any[]): void
    connect(sigName: "next", callback: MusicPlayer.NextSignalCallback): number
    connect_after(sigName: "next", callback: MusicPlayer.NextSignalCallback): number
    emit(sigName: "next", ...args: any[]): void
    connect(sigName: "activate-playlist", callback: MusicPlayer.ActivatePlaylistSignalCallback): number
    connect_after(sigName: "activate-playlist", callback: MusicPlayer.ActivatePlaylistSignalCallback): number
    emit(sigName: "activate-playlist", playlist_id: string, ...args: any[]): void

    // Class property signals of Unity-7.0.Unity.MusicPlayer

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

    // Own properties of Unity-7.0.Unity.MusicPlayer

    static name: string
    static $gtype: GObject.GType<MusicPlayer>

    // Constructors of Unity-7.0.Unity.MusicPlayer

    constructor(config?: MusicPlayer.ConstructorProperties) 
    constructor(desktop: string | null) 
    static new(desktop: string | null): MusicPlayer
    _init(config?: MusicPlayer.ConstructorProperties): void
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

    update_hints: (self: MetadataProvider, hints: GLib.HashTable) => void
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

    get_hints: (self: Filter) => GLib.HashTable
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

    create_raw: (self: Preview) => GObject.Object
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
    get_filter_by_id: (self: FilterSet, filter_id: string | null) => Filter | null
    get_filters: (self: FilterSet) => Filter[]
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
    get_categories: (self: CategorySet) => Category[]
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

    add_field: (self: Schema, name: string | null, schema: string | null, type: SchemaFieldType) => void
    get_fields: (self: Schema) => SchemaFieldInfo[]
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

    name: string | null
    schema: string | null
    type: SchemaFieldType
}

class SchemaFieldInfo {

    // Own properties of Unity-7.0.Unity.SchemaFieldInfo

    static name: string
}

interface CancellableClass {

    // Own fields of Unity-7.0.Unity.CancellableClass

    cancel: (self: Cancellable) => void
    is_cancelled: (self: Cancellable) => boolean
    get_gcancellable: (self: Cancellable) => Gio.Cancellable | null
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
    run_async: (self: ScopeSearchBase, async_callback: ScopeSearchBaseCallback) => void
    set_search_context: (self: ScopeSearchBase, ctx: SearchContext) => void
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

    add_result: (self: ResultSet, result: ScopeResult) => void
    add_result_from_variant: (self: ResultSet, variant: GLib.Variant) => void
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

    serialize_as: (self: AbstractPreview, serialization_type: SerializationType) => Uint8Array
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
    run_async: (self: ResultPreviewer, async_callback: AbstractPreviewCallback) => void
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

    create_search_for_query: (self: AbstractScope, search_context: SearchContext) => ScopeSearchBase
    create_previewer: (self: AbstractScope, result: ScopeResult, metadata: SearchMetadata) => ResultPreviewer
    get_categories: (self: AbstractScope) => CategorySet
    get_filters: (self: AbstractScope) => FilterSet
    get_schema: (self: AbstractScope) => Schema
    get_search_hint: (self: AbstractScope) => string | null
    get_group_name: (self: AbstractScope) => string | null
    get_unique_name: (self: AbstractScope) => string | null
    activate: (self: AbstractScope, result: ScopeResult, metadata: SearchMetadata, action_id?: string | null) => ActivationResponse | null
    normalize_search_query: (self: AbstractScope, search_query: string | null) => string | null
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

    create_impl: (self: DeprecatedScopeBase) => GObject.Object
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

    preview_result: (self: DeprecatedScope, result: ScopeResult, _callback_?: Gio.AsyncReadyCallback | null) => void
    preview_result_finish: (self: DeprecatedScope, _res_: Gio.AsyncResult) => Preview | null
    activate_result: (self: DeprecatedScope, result: ScopeResult, _callback_?: Gio.AsyncReadyCallback | null) => void
    activate_result_finish: (self: DeprecatedScope, _res_: Gio.AsyncResult) => ActivationResponse | null
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

    category_index_for_scope_id: (self: AggregatorScope, scope_id: string | null) => number
    search: (self: AggregatorScope, scope_search: AggregatedScopeSearch, _callback_?: Gio.AsyncReadyCallback | null) => void
    search_finish: (self: AggregatorScope, _res_: Gio.AsyncResult) => void
    activate: (self: AggregatorScope, activation: AggregatorActivation, _callback_?: Gio.AsyncReadyCallback | null) => void
    activate_finish: (self: AggregatorScope, _res_: Gio.AsyncResult) => ActivationResponse | null
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

    get_scopes: (self: ScopeLoader, module_name: string | null, module_type?: string | null) => AbstractScope[]
    export_scopes: (self: ScopeLoader, scopes: AbstractScope[]) => void
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

    uri: string | null
    icon_hint: string | null
    category: number
    result_type: ResultType
    mimetype: string | null
    title: string | null
    comment: string | null
    dnd_uri: string | null
    metadata?: GLib.HashTable | null
}

class ScopeResult {

    // Own properties of Unity-7.0.Unity.ScopeResult

    static name: string

    // Constructors of Unity-7.0.Unity.ScopeResult

    static create(uri: string | null, icon_hint: string | null, category: number, result_type: ResultType, mimetype: string | null, title: string | null, comment: string | null, dnd_uri: string | null, metadata: GLib.HashTable): ScopeResult | null
    static create_from_variant(variant: GLib.Variant): ScopeResult | null
}

interface SearchContext {

    // Own fields of Unity-7.0.Unity.SearchContext

    search_query: string | null
    search_type: SearchType
    filter_state: FilterSet
    search_metadata: SearchMetadata
    result_set: ResultSet
    cancellable: Cancellable

    // Owm methods of Unity-7.0.Unity.SearchContext

    set_search_metadata(metadata: SearchMetadata): void
}

class SearchContext {

    // Own properties of Unity-7.0.Unity.SearchContext

    static name: string

    // Constructors of Unity-7.0.Unity.SearchContext

    static create(search_query: string | null, search_type: SearchType, filter_state: FilterSet | null, metadata: GLib.HashTable | null, result_set: ResultSet, cancellable?: Cancellable | null): SearchContext | null
}

interface PlaylistDetails {

    // Own fields of Unity-7.0.Unity.PlaylistDetails

    id: string
    name: string | null
    icon_name: string | null
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

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default Unity;
// END