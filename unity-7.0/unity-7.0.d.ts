
/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type GLib from '@girs/glib-2.0';
import type Dbusmenu from '@girs/dbusmenu-0.4';
import type GObject from '@girs/gobject-2.0';
import type Dee from '@girs/dee-1.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Unity {

    /**
     * Unity-7.0
     */


    /**
     * @gir-type Enum
     */
    export namespace CategoryType {
        export const $gtype: GObject.GType<CategoryType>;
    }

    /**
     * @gir-type Enum
     */
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


    /**
     * @gir-type Enum
     */
    export namespace IconSizeHint {
        export const $gtype: GObject.GType<IconSizeHint>;
    }

    /**
     * @gir-type Enum
     */
    enum IconSizeHint {
        DEFAULT,
        SMALL,
        LARGE,
    }


    /**
     * @gir-type Enum
     */
    export namespace CategoryRenderer {
        export const $gtype: GObject.GType<CategoryRenderer>;
    }

    /**
     * @gir-type Enum
     */
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


    /**
     * @gir-type Enum
     */
    export namespace CategoryContentType {
        export const $gtype: GObject.GType<CategoryContentType>;
    }

    /**
     * @gir-type Enum
     */
    enum CategoryContentType {
        DEFAULT,
        APPLICATIONS,
        MUSIC,
        VIDEO,
        PLACES,
        SOCIAL,
        WEATHER,
    }


    /**
     * @gir-type Enum
     */
    export namespace FilterRenderer {
        export const $gtype: GObject.GType<FilterRenderer>;
    }

    /**
     * @gir-type Enum
     */
    enum FilterRenderer {
        CHECK_OPTIONS,
        RADIO_OPTIONS,
        MULTIRANGE,
        RATINGS,
        CHECK_OPTIONS_COMPACT,
    }


    /**
     * @gir-type Enum
     */
    export namespace LayoutHint {
        export const $gtype: GObject.GType<LayoutHint>;
    }

    /**
     * @gir-type Enum
     */
    enum LayoutHint {
        NONE,
        LEFT,
        RIGHT,
        TOP,
        BOTTOM,
    }


    /**
     * @gir-type Enum
     */
    export namespace HandledType {
        export const $gtype: GObject.GType<HandledType>;
    }

    /**
     * @gir-type Enum
     */
    enum HandledType {
        NOT_HANDLED,
        SHOW_DASH,
        HIDE_DASH,
        GOTO_DASH_URI,
        SHOW_PREVIEW,
        PERFORM_SEARCH,
    }


    /**
     * @gir-type Enum
     */
    export namespace SearchType {
        export const $gtype: GObject.GType<SearchType>;
    }

    /**
     * @gir-type Enum
     */
    enum SearchType {
        DEFAULT,
        GLOBAL,
        N_TYPES,
    }


    /**
     * @gir-type Enum
     */
    export namespace ResultType {
        export const $gtype: GObject.GType<ResultType>;
    }

    /**
     * @gir-type Enum
     */
    enum ResultType {
        DEFAULT,
        PERSONAL,
        SEMI_PERSONAL,
    }


    /**
     * @gir-type Enum
     */
    export namespace SerializationType {
        export const $gtype: GObject.GType<SerializationType>;
    }

    /**
     * @gir-type Enum
     */
    enum SerializationType {
        BINARY,
        JSON,
    }


    /**
     * @gir-type Enum
     */
    export namespace PlaybackState {
        export const $gtype: GObject.GType<PlaybackState>;
    }

    /**
     * @gir-type Enum
     */
    enum PlaybackState {
        PLAYING,
        PAUSED,
    }


    /**
     * @gir-type Enum
     */
    export namespace OptionsFilterSortType {
        export const $gtype: GObject.GType<OptionsFilterSortType>;
    }

    /**
     * @gir-type Enum
     */
    enum OptionsFilterSortType {
        MANUAL,
        DISPLAY_NAME,
        ID,
    }


    /**
     * @gir-type Enum
     */
    export namespace PreferencesManagerRemoteContent {
        export const $gtype: GObject.GType<PreferencesManagerRemoteContent>;
    }

    /**
     * @gir-type Enum
     */
    enum PreferencesManagerRemoteContent {
        ALL,
        NONE,
    }


    /**
     * @gir-type Enum
     */
    export namespace MusicPreviewTrackState {
        export const $gtype: GObject.GType<MusicPreviewTrackState>;
    }

    /**
     * @gir-type Enum
     */
    enum MusicPreviewTrackState {
        STOPPED,
        PLAYING,
        PAUSED,
    }


    /**
     * @gir-type Enum
     */
    export namespace PaymentPreviewType {
        export const $gtype: GObject.GType<PaymentPreviewType>;
    }

    /**
     * @gir-type Enum
     */
    enum PaymentPreviewType {
        APPLICATION,
        MUSIC,
        ERROR,
    }


    /**
     * @gir-type Enum
     */
    export namespace SchemaFieldType {
        export const $gtype: GObject.GType<SchemaFieldType>;
    }

    /**
     * @gir-type Enum
     */
    enum SchemaFieldType {
        OPTIONAL,
        REQUIRED,
    }


    /**
     * @gir-type Enum
     */
    export namespace AggregatorScopeSortFlags {
        export const $gtype: GObject.GType<AggregatorScopeSortFlags>;
    }

    /**
     * @gir-type Enum
     */
    enum AggregatorScopeSortFlags {
        ASCENDING,
        DESCENDING,
        CASE_INSENSITIVE,
    }


    /**
     * @gir-type Enum
     */
    export namespace AggregatorScopeMergeMode {
        export const $gtype: GObject.GType<AggregatorScopeMergeMode>;
    }

    /**
     * @gir-type Enum
     */
    enum AggregatorScopeMergeMode {
        CATEGORY_ID,
        OWNER_SCOPE,
    }


    const SCOPE_API_VERSION: number;

    /**
     * @param renderer_name 
     */
    function category_renderer_from_string(renderer_name: string): CategoryRenderer;

    /**
     * @param val 
     */
    function category_renderer_to_string(val: CategoryRenderer): string;

    /**
     * @param content_type 
     */
    function category_content_type_from_string(content_type: string): CategoryContentType;

    /**
     * @param val 
     */
    function category_content_type_to_string(val: CategoryContentType): string;

    /**
     * @param renderer 
     */
    function filter_renderer_to_string(renderer: FilterRenderer): string;

    /**
     * @param renderer_name 
     */
    function filter_renderer_from_string(renderer_name: string): FilterRenderer;

    function scope_module_get_version(): number;

    function scope_module_load_scopes(): AbstractScope[];

    /**
     * @param object 
     */
    function object_unref(object: any): void;

    /**
     * @gir-type Callback
     */
    interface ScopeSearchBaseCallback {
        (instance: ScopeSearchBase): void;
    }

    /**
     * @gir-type Callback
     */
    interface AbstractPreviewCallback {
        (previewer: ResultPreviewer, preview: AbstractPreview): void;
    }

    namespace AppInfoManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            changed: (arg0: string, arg1: Gio.AppInfo) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class AppInfoManager extends GObject.Object {
        static $gtype: GObject.GType<AppInfoManager>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AppInfoManager.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AppInfoManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof AppInfoManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AppInfoManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AppInfoManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AppInfoManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AppInfoManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AppInfoManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        static get_instance(): AppInfoManager;

        static get_default(): AppInfoManager;

        // Methods
        /**
         * @param id 
         */
        lookup(id: string): Gio.AppInfo;

        /**
         * @param id 
         */
        get_categories(id: string): string[];

        /**
         * @param id 
         */
        get_keywords(id: string): string[];

        /**
         * @param id 
         */
        get_path(id: string): string;

        /**
         * @param id 
         */
        lookup_async(id: string): globalThis.Promise<Gio.AppInfo>;

        /**
         * @param id 
         * @param _callback_ 
         */
        lookup_async(id: string, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param id 
         * @param _callback_ 
         */
        lookup_async(id: string, _callback_?: Gio.AsyncReadyCallback<this>): (globalThis.Promise<Gio.AppInfo> | void);

        /**
         * @param _res_ 
         */
        lookup_finish(_res_: Gio.AsyncResult): Gio.AppInfo;

        clear(): void;
    }


    namespace AnnotatedIcon {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::ribbon": (pspec: GObject.ParamSpec) => void;
            "notify::category": (pspec: GObject.ParamSpec) => void;
            "notify::size-hint": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            icon: Gio.Icon;
            ribbon: string;
            category: CategoryType;
            size_hint: IconSizeHint;
            sizeHint: IconSizeHint;
        }
    }

    /**
     * @gir-type Class
     */
    class AnnotatedIcon extends GObject.Object {
        static $gtype: GObject.GType<AnnotatedIcon>;

        // Properties
        get icon(): Gio.Icon;
        set icon(val: Gio.Icon);

        get ribbon(): string;
        set ribbon(val: string);

        get category(): CategoryType;
        set category(val: CategoryType);

        get size_hint(): IconSizeHint;
        set size_hint(val: IconSizeHint);

        get sizeHint(): IconSizeHint;
        set sizeHint(val: IconSizeHint);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AnnotatedIcon.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AnnotatedIcon.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](base_icon: Gio.Icon): AnnotatedIcon;

        // Signals
        /** @signal */
        connect<K extends keyof AnnotatedIcon.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotatedIcon.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AnnotatedIcon.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AnnotatedIcon.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AnnotatedIcon.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AnnotatedIcon.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param r 
         * @param g 
         * @param b 
         * @param a 
         */
        set_colorize_rgba(r: number, g: number, b: number, a: number): void;

        to_string(): string;

        get_icon(): Gio.Icon;

        /**
         * @param value 
         */
        set_icon(value: Gio.Icon): void;

        get_ribbon(): string;

        /**
         * @param value 
         */
        set_ribbon(value: string): void;

        get_category(): CategoryType;

        /**
         * @param value 
         */
        set_category(value: CategoryType): void;

        get_size_hint(): IconSizeHint;

        /**
         * @param value 
         */
        set_size_hint(value: IconSizeHint): void;
    }


    namespace Inspector {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::unity-running": (pspec: GObject.ParamSpec) => void;
            "notify::unity-bus-name": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            unity_running: boolean;
            unityRunning: boolean;
            unity_bus_name: string;
            unityBusName: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Inspector extends GObject.Object {
        static $gtype: GObject.GType<Inspector>;

        // Properties
        /**
         * @read-only
         */
        get unity_running(): boolean;

        /**
         * @read-only
         */
        get unityRunning(): boolean;

        /**
         * @read-only
         */
        get unity_bus_name(): string;

        /**
         * @read-only
         */
        get unityBusName(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Inspector.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Inspector.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Inspector.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Inspector.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Inspector.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Inspector.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Inspector.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Inspector.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        static get_default(): Inspector;

        // Methods
        get_unity_running(): boolean;

        get_unity_bus_name(): string;
    }


    namespace LauncherEntry {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::app-uri": (pspec: GObject.ParamSpec) => void;
            "notify::count": (pspec: GObject.ParamSpec) => void;
            "notify::count-visible": (pspec: GObject.ParamSpec) => void;
            "notify::progress": (pspec: GObject.ParamSpec) => void;
            "notify::progress-visible": (pspec: GObject.ParamSpec) => void;
            "notify::urgent": (pspec: GObject.ParamSpec) => void;
            "notify::quicklist": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Dee.Serializable.ConstructorProps {
            app_uri: string;
            appUri: string;
            count: (bigint | number);
            count_visible: boolean;
            countVisible: boolean;
            progress: number;
            progress_visible: boolean;
            progressVisible: boolean;
            urgent: boolean;
            quicklist: Dbusmenu.Menuitem;
        }
    }

    /**
     * @gir-type Class
     */
    class LauncherEntry extends GObject.Object implements Dee.Serializable {
        static $gtype: GObject.GType<LauncherEntry>;

        // Properties
        get app_uri(): string;
        set app_uri(val: string);

        get appUri(): string;
        set appUri(val: string);

        get count(): number;
        set count(val: (bigint | number));

        get count_visible(): boolean;
        set count_visible(val: boolean);

        get countVisible(): boolean;
        set countVisible(val: boolean);

        get progress(): number;
        set progress(val: number);

        get progress_visible(): boolean;
        set progress_visible(val: boolean);

        get progressVisible(): boolean;
        set progressVisible(val: boolean);

        get urgent(): boolean;
        set urgent(val: boolean);

        get quicklist(): Dbusmenu.Menuitem;
        set quicklist(val: Dbusmenu.Menuitem);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LauncherEntry.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<LauncherEntry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof LauncherEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LauncherEntry.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof LauncherEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LauncherEntry.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof LauncherEntry.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<LauncherEntry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param app_uri 
         */
        static get_for_app_uri(app_uri: string): LauncherEntry;

        /**
         * @param desktop_id 
         */
        static get_for_desktop_id(desktop_id: string): LauncherEntry;

        /**
         * @param desktop_file 
         */
        static get_for_desktop_file(desktop_file: string): LauncherEntry;

        // Methods
        get_app_uri(): string;

        /**
         * @param value 
         */
        set_app_uri(value: string): void;

        get_count(): number;

        /**
         * @param value 
         */
        set_count(value: (bigint | number)): void;

        get_count_visible(): boolean;

        /**
         * @param value 
         */
        set_count_visible(value: boolean): void;

        get_progress(): number;

        /**
         * @param value 
         */
        set_progress(value: number): void;

        get_progress_visible(): boolean;

        /**
         * @param value 
         */
        set_progress_visible(value: boolean): void;

        get_urgent(): boolean;

        /**
         * @param value 
         */
        set_urgent(value: boolean): void;

        get_quicklist(): Dbusmenu.Menuitem;

        /**
         * @param value 
         */
        set_quicklist(value: Dbusmenu.Menuitem): void;

        /**
         * Build an externalized form of `self` which can be used together with
         * `dee_serializable_parse_external()` to rebuild a copy of `self`.
         * 
         * It is important to note that the variant returned from this method does
         * not have the same type signature as returned from a call to
         * `dee_serializable_serialize()`. Externalization will wrap the serialized data
         * in a container format with versioning information and headers with type
         * information.
         * @returns A floating reference to a {@link GLib.Variant} with the externalized data.
         */
        externalize(): GLib.Variant;

        /**
         * Build a clean serialized representation of `self`. The signature of the
         * returned variant is entirely determined by the underlying implementation.
         * You can recreate a serialized instance by calling `dee_serializable_parse()`
         * provided that you know the correct {@link GObject.GType} for the serialized instance.
         * @returns A reference to a {@link GLib.Variant} with               the serialized data. The variants type signature is entirely               dependent of the underlying implementation. Free using               `g_variant_unref()`.
         */
        serialize(): GLib.Variant;

        /**
         * Build a clean serialized representation of `self`. The signature of the
         * returned variant is entirely determined by the underlying implementation.
         * You can recreate a serialized instance by calling `dee_serializable_parse()`
         * provided that you know the correct {@link GObject.GType} for the serialized instance.
         * @virtual
         */
        vfunc_serialize(): GLib.Variant;
    }


    namespace LauncherFavorites {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            changed: () => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class LauncherFavorites extends GObject.Object {
        static $gtype: GObject.GType<LauncherFavorites>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LauncherFavorites.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<LauncherFavorites.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof LauncherFavorites.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LauncherFavorites.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof LauncherFavorites.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LauncherFavorites.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof LauncherFavorites.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<LauncherFavorites.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        static get_default(): LauncherFavorites;

        // Methods
        /**
         * @param appinfo 
         */
        has_app_info(appinfo: Gio.AppInfo): boolean;

        /**
         * @param app_id 
         */
        has_app_id(app_id: string): boolean;

        /**
         * @param app_id 
         */
        lookup(app_id: string): Gio.AppInfo;

        enumerate_ids(): string[];

        enumerate_app_infos(): Gio.AppInfo[];
    }


    namespace MetadataProvider {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    abstract class MetadataProvider extends GObject.Object {
        static $gtype: GObject.GType<MetadataProvider>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MetadataProvider.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MetadataProvider.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof MetadataProvider.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MetadataProvider.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MetadataProvider.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MetadataProvider.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MetadataProvider.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MetadataProvider.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace ProgressSourceProvider {
        // Signal signatures
        interface SignalSignatures extends MetadataProvider.SignalSignatures {
            "notify::dbus-name": (pspec: GObject.ParamSpec) => void;
            "notify::dbus-path": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends MetadataProvider.ConstructorProps {
            dbus_name: string;
            dbusName: string;
            dbus_path: string;
            dbusPath: string;
        }
    }

    /**
     * @gir-type Class
     */
    class ProgressSourceProvider extends MetadataProvider {
        static $gtype: GObject.GType<ProgressSourceProvider>;

        // Properties
        /**
         * @construct-only
         */
        get dbus_name(): string;

        /**
         * @construct-only
         */
        get dbusName(): string;

        /**
         * @construct-only
         */
        get dbus_path(): string;

        /**
         * @construct-only
         */
        get dbusPath(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ProgressSourceProvider.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ProgressSourceProvider.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](dbus_name: string, dbus_path: string): ProgressSourceProvider;

        // Signals
        /** @signal */
        connect<K extends keyof ProgressSourceProvider.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProgressSourceProvider.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ProgressSourceProvider.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProgressSourceProvider.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ProgressSourceProvider.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ProgressSourceProvider.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_dbus_name(): string;

        get_dbus_path(): string;
    }


    namespace Category {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::icon-hint": (pspec: GObject.ParamSpec) => void;
            "notify::default-renderer": (pspec: GObject.ParamSpec) => void;
            "notify::content-type": (pspec: GObject.ParamSpec) => void;
            "notify::renderer-hint": (pspec: GObject.ParamSpec) => void;
            "notify::renderer": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            id: string;
            name: string;
            icon_hint: Gio.Icon;
            iconHint: Gio.Icon;
            default_renderer: CategoryRenderer;
            defaultRenderer: CategoryRenderer;
            content_type: CategoryContentType;
            contentType: CategoryContentType;
            renderer_hint: string;
            rendererHint: string;
            renderer: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Category extends GObject.Object {
        static $gtype: GObject.GType<Category>;

        // Properties
        /**
         * @construct-only
         */
        get id(): string;

        /**
         * @construct-only
         */
        get name(): string;

        /**
         * @construct-only
         */
        get icon_hint(): Gio.Icon;

        /**
         * @construct-only
         */
        get iconHint(): Gio.Icon;

        /**
         * @construct-only
         */
        get default_renderer(): CategoryRenderer;

        /**
         * @construct-only
         */
        get defaultRenderer(): CategoryRenderer;

        get content_type(): CategoryContentType;
        set content_type(val: CategoryContentType);

        get contentType(): CategoryContentType;
        set contentType(val: CategoryContentType);

        get renderer_hint(): string;
        set renderer_hint(val: string);

        get rendererHint(): string;
        set rendererHint(val: string);

        /**
         * @read-only
         */
        get renderer(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Category.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Category.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](id: string, name: string, icon_hint: Gio.Icon, renderer: CategoryRenderer): Category;

        // Signals
        /** @signal */
        connect<K extends keyof Category.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Category.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Category.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Category.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Category.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Category.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param provider 
         */
        add_metadata_provider(provider: MetadataProvider): void;

        get_id(): string;

        get_name(): string;

        get_icon_hint(): Gio.Icon;

        get_default_renderer(): CategoryRenderer;

        get_content_type(): CategoryContentType;

        /**
         * @param value 
         */
        set_content_type(value: CategoryContentType): void;

        get_renderer_hint(): string;

        /**
         * @param value 
         */
        set_renderer_hint(value: string): void;

        get_renderer(): string;
    }


    namespace Filter {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            changed: () => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::display-name": (pspec: GObject.ParamSpec) => void;
            "notify::icon-hint": (pspec: GObject.ParamSpec) => void;
            "notify::renderer": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::collapsed": (pspec: GObject.ParamSpec) => void;
            "notify::filtering": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Dee.Serializable.ConstructorProps {
            id: string;
            display_name: string;
            displayName: string;
            icon_hint: Gio.Icon;
            iconHint: Gio.Icon;
            renderer: FilterRenderer;
            visible: boolean;
            collapsed: boolean;
            filtering: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class Filter extends GObject.Object implements Dee.Serializable {
        static $gtype: GObject.GType<Filter>;

        // Properties
        /**
         * @construct-only
         */
        get id(): string;

        get display_name(): string;
        set display_name(val: string);

        get displayName(): string;
        set displayName(val: string);

        /**
         * @construct-only
         */
        get icon_hint(): Gio.Icon;

        /**
         * @construct-only
         */
        get iconHint(): Gio.Icon;

        /**
         * @construct-only
         */
        get renderer(): FilterRenderer;

        get visible(): boolean;
        set visible(val: boolean);

        get collapsed(): boolean;
        set collapsed(val: boolean);

        get filtering(): boolean;
        set filtering(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Filter.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Filter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Filter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Filter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Filter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Filter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Filter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Filter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_id(): string;

        get_display_name(): string;

        get_icon_hint(): Gio.Icon;

        get_renderer(): FilterRenderer;

        get_visible(): boolean;

        /**
         * @param value 
         */
        set_visible(value: boolean): void;

        get_collapsed(): boolean;

        get_filtering(): boolean;

        /**
         * Build an externalized form of `self` which can be used together with
         * `dee_serializable_parse_external()` to rebuild a copy of `self`.
         * 
         * It is important to note that the variant returned from this method does
         * not have the same type signature as returned from a call to
         * `dee_serializable_serialize()`. Externalization will wrap the serialized data
         * in a container format with versioning information and headers with type
         * information.
         * @returns A floating reference to a {@link GLib.Variant} with the externalized data.
         */
        externalize(): GLib.Variant;

        /**
         * Build a clean serialized representation of `self`. The signature of the
         * returned variant is entirely determined by the underlying implementation.
         * You can recreate a serialized instance by calling `dee_serializable_parse()`
         * provided that you know the correct {@link GObject.GType} for the serialized instance.
         * @returns A reference to a {@link GLib.Variant} with               the serialized data. The variants type signature is entirely               dependent of the underlying implementation. Free using               `g_variant_unref()`.
         */
        serialize(): GLib.Variant;

        /**
         * Build a clean serialized representation of `self`. The signature of the
         * returned variant is entirely determined by the underlying implementation.
         * You can recreate a serialized instance by calling `dee_serializable_parse()`
         * provided that you know the correct {@link GObject.GType} for the serialized instance.
         * @virtual
         */
        vfunc_serialize(): GLib.Variant;
    }


    namespace FilterOption {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::display-name": (pspec: GObject.ParamSpec) => void;
            "notify::icon-hint": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            id: string;
            display_name: string;
            displayName: string;
            icon_hint: Gio.Icon;
            iconHint: Gio.Icon;
            active: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class FilterOption extends GObject.Object {
        static $gtype: GObject.GType<FilterOption>;

        // Properties
        /**
         * @construct-only
         */
        get id(): string;

        /**
         * @construct-only
         */
        get display_name(): string;

        /**
         * @construct-only
         */
        get displayName(): string;

        /**
         * @construct-only
         */
        get icon_hint(): Gio.Icon;

        /**
         * @construct-only
         */
        get iconHint(): Gio.Icon;

        get active(): boolean;
        set active(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FilterOption.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<FilterOption.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](id: string, display_name: string, icon_hint: Gio.Icon, active: boolean): FilterOption;

        // Signals
        /** @signal */
        connect<K extends keyof FilterOption.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FilterOption.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FilterOption.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FilterOption.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FilterOption.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FilterOption.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_id(): string;

        get_display_name(): string;

        get_icon_hint(): Gio.Icon;

        get_active(): boolean;

        /**
         * @param value 
         */
        set_active(value: boolean): void;
    }


    namespace OptionsFilter {
        // Signal signatures
        interface SignalSignatures extends Filter.SignalSignatures {
            "notify::sort-type": (pspec: GObject.ParamSpec) => void;
            "notify::show-all-button": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::display-name": (pspec: GObject.ParamSpec) => void;
            "notify::icon-hint": (pspec: GObject.ParamSpec) => void;
            "notify::renderer": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::collapsed": (pspec: GObject.ParamSpec) => void;
            "notify::filtering": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Filter.ConstructorProps {
            sort_type: OptionsFilterSortType;
            sortType: OptionsFilterSortType;
            show_all_button: boolean;
            showAllButton: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class OptionsFilter extends Filter {
        static $gtype: GObject.GType<OptionsFilter>;

        // Properties
        get sort_type(): OptionsFilterSortType;
        set sort_type(val: OptionsFilterSortType);

        get sortType(): OptionsFilterSortType;
        set sortType(val: OptionsFilterSortType);

        get show_all_button(): boolean;
        set show_all_button(val: boolean);

        get showAllButton(): boolean;
        set showAllButton(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: OptionsFilter.SignalSignatures;

        // Fields
        options: FilterOption[];

        // Constructors
        constructor(properties?: Partial<OptionsFilter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): OptionsFilter;

        // Signals
        /** @signal */
        connect<K extends keyof OptionsFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OptionsFilter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof OptionsFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OptionsFilter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof OptionsFilter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<OptionsFilter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param id 
         * @param display_name 
         * @param icon_hint 
         */
        add_option(id: string, display_name: string, icon_hint: Gio.Icon): FilterOption;

        /**
         * @param id 
         */
        get_option(id: string): FilterOption;

        /**
         * @param id 
         */
        remove_option(id: string): boolean;

        get_sort_type(): OptionsFilterSortType;

        /**
         * @param value 
         */
        set_sort_type(value: OptionsFilterSortType): void;

        get_show_all_button(): boolean;

        /**
         * @param value 
         */
        set_show_all_button(value: boolean): void;
    }


    namespace RadioOptionFilter {
        // Signal signatures
        interface SignalSignatures extends OptionsFilter.SignalSignatures {
            "notify::sort-type": (pspec: GObject.ParamSpec) => void;
            "notify::show-all-button": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::display-name": (pspec: GObject.ParamSpec) => void;
            "notify::icon-hint": (pspec: GObject.ParamSpec) => void;
            "notify::renderer": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::collapsed": (pspec: GObject.ParamSpec) => void;
            "notify::filtering": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends OptionsFilter.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class RadioOptionFilter extends OptionsFilter {
        static $gtype: GObject.GType<RadioOptionFilter>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RadioOptionFilter.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<RadioOptionFilter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](id: string, display_name: string, icon_hint: Gio.Icon, collapsed: boolean): RadioOptionFilter;

        // Conflicted with Unity.OptionsFilter.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof RadioOptionFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RadioOptionFilter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof RadioOptionFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RadioOptionFilter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof RadioOptionFilter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RadioOptionFilter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_active_option(): FilterOption;
    }


    namespace CheckOptionFilter {
        // Signal signatures
        interface SignalSignatures extends OptionsFilter.SignalSignatures {
            "notify::sort-type": (pspec: GObject.ParamSpec) => void;
            "notify::show-all-button": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::display-name": (pspec: GObject.ParamSpec) => void;
            "notify::icon-hint": (pspec: GObject.ParamSpec) => void;
            "notify::renderer": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::collapsed": (pspec: GObject.ParamSpec) => void;
            "notify::filtering": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends OptionsFilter.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class CheckOptionFilter extends OptionsFilter {
        static $gtype: GObject.GType<CheckOptionFilter>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CheckOptionFilter.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<CheckOptionFilter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](id: string, display_name: string, icon_hint: Gio.Icon, collapsed: boolean): CheckOptionFilter;

        // Conflicted with Unity.OptionsFilter.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof CheckOptionFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CheckOptionFilter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CheckOptionFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CheckOptionFilter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CheckOptionFilter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CheckOptionFilter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace CheckOptionFilterCompact {
        // Signal signatures
        interface SignalSignatures extends OptionsFilter.SignalSignatures {
            "notify::sort-type": (pspec: GObject.ParamSpec) => void;
            "notify::show-all-button": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::display-name": (pspec: GObject.ParamSpec) => void;
            "notify::icon-hint": (pspec: GObject.ParamSpec) => void;
            "notify::renderer": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::collapsed": (pspec: GObject.ParamSpec) => void;
            "notify::filtering": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends OptionsFilter.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class CheckOptionFilterCompact extends OptionsFilter {
        static $gtype: GObject.GType<CheckOptionFilterCompact>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CheckOptionFilterCompact.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<CheckOptionFilterCompact.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](id: string, display_name: string, icon_hint: Gio.Icon, collapsed: boolean): CheckOptionFilterCompact;

        // Conflicted with Unity.OptionsFilter.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof CheckOptionFilterCompact.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CheckOptionFilterCompact.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CheckOptionFilterCompact.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CheckOptionFilterCompact.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CheckOptionFilterCompact.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CheckOptionFilterCompact.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace RatingsFilter {
        // Signal signatures
        interface SignalSignatures extends Filter.SignalSignatures {
            "notify::rating": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::display-name": (pspec: GObject.ParamSpec) => void;
            "notify::icon-hint": (pspec: GObject.ParamSpec) => void;
            "notify::renderer": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::collapsed": (pspec: GObject.ParamSpec) => void;
            "notify::filtering": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Filter.ConstructorProps {
            rating: number;
        }
    }

    /**
     * @gir-type Class
     */
    class RatingsFilter extends Filter {
        static $gtype: GObject.GType<RatingsFilter>;

        // Properties
        get rating(): number;
        set rating(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RatingsFilter.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<RatingsFilter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](id: string, display_name: string, icon_hint: Gio.Icon, collapsed: boolean): RatingsFilter;

        // Signals
        /** @signal */
        connect<K extends keyof RatingsFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RatingsFilter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof RatingsFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RatingsFilter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof RatingsFilter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RatingsFilter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_rating(): number;
    }


    namespace MultiRangeFilter {
        // Signal signatures
        interface SignalSignatures extends OptionsFilter.SignalSignatures {
            "notify::sort-type": (pspec: GObject.ParamSpec) => void;
            "notify::show-all-button": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::display-name": (pspec: GObject.ParamSpec) => void;
            "notify::icon-hint": (pspec: GObject.ParamSpec) => void;
            "notify::renderer": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::collapsed": (pspec: GObject.ParamSpec) => void;
            "notify::filtering": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends OptionsFilter.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class MultiRangeFilter extends OptionsFilter {
        static $gtype: GObject.GType<MultiRangeFilter>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MultiRangeFilter.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MultiRangeFilter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](id: string, display_name: string, icon_hint: Gio.Icon, collapsed: boolean): MultiRangeFilter;

        // Conflicted with Unity.OptionsFilter.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof MultiRangeFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MultiRangeFilter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MultiRangeFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MultiRangeFilter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MultiRangeFilter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MultiRangeFilter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_first_active(): FilterOption;

        get_last_active(): FilterOption;
    }


    namespace PreferencesManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::remote-content-search": (pspec: GObject.ParamSpec) => void;
            "notify::always-search": (pspec: GObject.ParamSpec) => void;
            "notify::home-lens-priority": (pspec: GObject.ParamSpec) => void;
            "notify::home-lens-default-view": (pspec: GObject.ParamSpec) => void;
            "notify::disabled-scopes": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            remote_content_search: PreferencesManagerRemoteContent;
            remoteContentSearch: PreferencesManagerRemoteContent;
            always_search: string[];
            alwaysSearch: string[];
            home_lens_priority: string[];
            homeLensPriority: string[];
            home_lens_default_view: string[];
            homeLensDefaultView: string[];
            disabled_scopes: string[];
            disabledScopes: string[];
        }
    }

    /**
     * @gir-type Class
     */
    class PreferencesManager extends GObject.Object {
        static $gtype: GObject.GType<PreferencesManager>;

        // Properties
        get remote_content_search(): PreferencesManagerRemoteContent;
        set remote_content_search(val: PreferencesManagerRemoteContent);

        get remoteContentSearch(): PreferencesManagerRemoteContent;
        set remoteContentSearch(val: PreferencesManagerRemoteContent);

        get always_search(): string[];
        set always_search(val: string[]);

        get alwaysSearch(): string[];
        set alwaysSearch(val: string[]);

        get home_lens_priority(): string[];
        set home_lens_priority(val: string[]);

        get homeLensPriority(): string[];
        set homeLensPriority(val: string[]);

        get home_lens_default_view(): string[];
        set home_lens_default_view(val: string[]);

        get homeLensDefaultView(): string[];
        set homeLensDefaultView(val: string[]);

        get disabled_scopes(): string[];
        set disabled_scopes(val: string[]);

        get disabledScopes(): string[];
        set disabledScopes(val: string[]);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PreferencesManager.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PreferencesManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof PreferencesManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PreferencesManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PreferencesManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PreferencesManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PreferencesManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PreferencesManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        static get_default(): PreferencesManager;

        // Methods
        get_remote_content_search(): PreferencesManagerRemoteContent;

        /**
         * @param value 
         */
        set_remote_content_search(value: PreferencesManagerRemoteContent): void;

        get_always_search(): string[];

        /**
         * @param value 
         */
        set_always_search(value: string[]): void;

        get_home_lens_priority(): string[];

        /**
         * @param value 
         */
        set_home_lens_priority(value: string[]): void;

        get_home_lens_default_view(): string[];

        /**
         * @param value 
         */
        set_home_lens_default_view(value: string[]): void;

        get_disabled_scopes(): string[];

        /**
         * @param value 
         */
        set_disabled_scopes(value: string[]): void;
    }


    namespace DeprecatedScopeSearch {
        // Signal signatures
        interface SignalSignatures extends ScopeSearchBase.SignalSignatures {
            /**
             * @signal
             */
            finished: () => void;
            "notify::channel-id": (pspec: GObject.ParamSpec) => void;
            "notify::search-string": (pspec: GObject.ParamSpec) => void;
            "notify::search-type": (pspec: GObject.ParamSpec) => void;
            "notify::hints": (pspec: GObject.ParamSpec) => void;
            "notify::results-model": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends ScopeSearchBase.ConstructorProps {
            channel_id: string;
            channelId: string;
            search_string: string;
            searchString: string;
            search_type: SearchType;
            searchType: SearchType;
            hints: ({ [key: string]: any } | GLib.HashTable<string, GLib.Variant>);
            results_model: Dee.SerializableModel;
            resultsModel: Dee.SerializableModel;
            owner: DeprecatedScopeBase;
        }
    }

    /**
     * @gir-type Class
     */
    class DeprecatedScopeSearch extends ScopeSearchBase {
        static $gtype: GObject.GType<DeprecatedScopeSearch>;

        // Properties
        /**
         * @construct-only
         */
        get channel_id(): string;

        /**
         * @construct-only
         */
        get channelId(): string;

        /**
         * @read-only
         */
        get search_string(): string;

        /**
         * @read-only
         */
        get searchString(): string;

        /**
         * @read-only
         */
        get search_type(): SearchType;

        /**
         * @read-only
         */
        get searchType(): SearchType;

        /**
         * @construct-only
         */
        get hints(): GLib.HashTable<string, GLib.Variant>;

        /**
         * @construct-only
         */
        get results_model(): Dee.SerializableModel;

        /**
         * @construct-only
         */
        get resultsModel(): Dee.SerializableModel;

        /**
         * @construct-only
         */
        get owner(): DeprecatedScopeBase;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DeprecatedScopeSearch.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DeprecatedScopeSearch.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof DeprecatedScopeSearch.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeprecatedScopeSearch.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DeprecatedScopeSearch.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeprecatedScopeSearch.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DeprecatedScopeSearch.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DeprecatedScopeSearch.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param key 
         * @param variant 
         */
        set_reply_hint(key: string, variant: GLib.Variant): void;

        /**
         * @param filter_id 
         */
        get_filter(filter_id: string): Filter;

        /**
         * @param other 
         */
        equals(other: DeprecatedScopeSearch): boolean;

        get_channel_id(): string;

        get_search_string(): string;

        get_search_type(): SearchType;

        get_hints(): GLib.HashTable<string, GLib.Variant>;

        get_results_model(): Dee.SerializableModel;

        get_owner(): DeprecatedScopeBase;
    }


    namespace AggregatedScopeSearch {
        // Signal signatures
        interface SignalSignatures extends DeprecatedScopeSearch.SignalSignatures {
            /**
             * @signal
             */
            "transaction-complete": (arg0: string) => void;
            /**
             * @signal
             */
            "category-order-changed": (arg0: number[]) => void;
            "notify::channel-id": (pspec: GObject.ParamSpec) => void;
            "notify::search-string": (pspec: GObject.ParamSpec) => void;
            "notify::search-type": (pspec: GObject.ParamSpec) => void;
            "notify::hints": (pspec: GObject.ParamSpec) => void;
            "notify::results-model": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends DeprecatedScopeSearch.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class AggregatedScopeSearch extends DeprecatedScopeSearch {
        static $gtype: GObject.GType<AggregatedScopeSearch>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AggregatedScopeSearch.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AggregatedScopeSearch.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](owner: AggregatorScope, channel_id: string, hints: ({ [key: string]: any } | GLib.HashTable<string, GLib.Variant>), results_model: Dee.SerializableModel): AggregatedScopeSearch;

        // Signals
        /** @signal */
        connect<K extends keyof AggregatedScopeSearch.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AggregatedScopeSearch.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AggregatedScopeSearch.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AggregatedScopeSearch.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AggregatedScopeSearch.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AggregatedScopeSearch.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param scope_id 
         * @param search_string 
         * @param search_type 
         * @param hints 
         */
        search_scope(scope_id: string, search_string: string, search_type: SearchType, hints: ({ [key: string]: any } | GLib.HashTable<string, GLib.Variant>)): globalThis.Promise<GLib.HashTable<string, GLib.Variant>>;

        /**
         * @param scope_id 
         * @param search_string 
         * @param search_type 
         * @param hints 
         * @param _callback_ 
         */
        search_scope(scope_id: string, search_string: string, search_type: SearchType, hints: ({ [key: string]: any } | GLib.HashTable<string, GLib.Variant>), _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param scope_id 
         * @param search_string 
         * @param search_type 
         * @param hints 
         * @param _callback_ 
         */
        search_scope(scope_id: string, search_string: string, search_type: SearchType, hints: ({ [key: string]: any } | GLib.HashTable<string, GLib.Variant>), _callback_?: Gio.AsyncReadyCallback<this>): (globalThis.Promise<GLib.HashTable<string, GLib.Variant>> | void);

        /**
         * @param _res_ 
         */
        search_scope_finish(_res_: Gio.AsyncResult): GLib.HashTable<string, GLib.Variant>;

        /**
         * @param scope_id 
         * @param results_model 
         * @param category_ids 
         */
        push_results(scope_id: string, results_model: Dee.SerializableModel, category_ids: string[]): globalThis.Promise<void>;

        /**
         * @param scope_id 
         * @param results_model 
         * @param category_ids 
         * @param _callback_ 
         */
        push_results(scope_id: string, results_model: Dee.SerializableModel, category_ids: string[], _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param scope_id 
         * @param results_model 
         * @param category_ids 
         * @param _callback_ 
         */
        push_results(scope_id: string, results_model: Dee.SerializableModel, category_ids: string[], _callback_?: Gio.AsyncReadyCallback<this>): (globalThis.Promise<void> | void);

        /**
         * @param _res_ 
         */
        push_results_finish(_res_: Gio.AsyncResult): void;

        /**
         * @param filters 
         */
        push_filter_settings(filters: FilterSet): void;
    }


    namespace Preview {
        // Signal signatures
        interface SignalSignatures extends AbstractPreview.SignalSignatures {
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::subtitle": (pspec: GObject.ParamSpec) => void;
            "notify::description-markup": (pspec: GObject.ParamSpec) => void;
            "notify::image-source-uri": (pspec: GObject.ParamSpec) => void;
            "notify::image": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends AbstractPreview.ConstructorProps, Dee.Serializable.ConstructorProps {
            title: string;
            subtitle: string;
            description_markup: string;
            descriptionMarkup: string;
            image_source_uri: string;
            imageSourceUri: string;
            image: Gio.Icon;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class Preview extends AbstractPreview implements Dee.Serializable {
        static $gtype: GObject.GType<Preview>;

        // Properties
        get title(): string;
        set title(val: string);

        get subtitle(): string;
        set subtitle(val: string);

        get description_markup(): string;
        set description_markup(val: string);

        get descriptionMarkup(): string;
        set descriptionMarkup(val: string);

        get image_source_uri(): string;
        set image_source_uri(val: string);

        get imageSourceUri(): string;
        set imageSourceUri(val: string);

        get image(): Gio.Icon;
        set image(val: Gio.Icon);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Preview.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Preview.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Preview.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Preview.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Preview.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Preview.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Preview.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Preview.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param action 
         */
        add_action(action: PreviewAction): void;

        /**
         * @param info_hint 
         */
        add_info(info_hint: InfoHint): void;

        get_title(): string;

        /**
         * @param value 
         */
        set_title(value: string): void;

        get_subtitle(): string;

        /**
         * @param value 
         */
        set_subtitle(value: string): void;

        get_description_markup(): string;

        /**
         * @param value 
         */
        set_description_markup(value: string): void;

        get_image_source_uri(): string;

        /**
         * @param value 
         */
        set_image_source_uri(value: string): void;

        get_image(): Gio.Icon;

        /**
         * @param value 
         */
        set_image(value: Gio.Icon): void;

        /**
         * Build an externalized form of `self` which can be used together with
         * `dee_serializable_parse_external()` to rebuild a copy of `self`.
         * 
         * It is important to note that the variant returned from this method does
         * not have the same type signature as returned from a call to
         * `dee_serializable_serialize()`. Externalization will wrap the serialized data
         * in a container format with versioning information and headers with type
         * information.
         * @returns A floating reference to a {@link GLib.Variant} with the externalized data.
         */
        externalize(): GLib.Variant;

        /**
         * Build a clean serialized representation of `self`. The signature of the
         * returned variant is entirely determined by the underlying implementation.
         * You can recreate a serialized instance by calling `dee_serializable_parse()`
         * provided that you know the correct {@link GObject.GType} for the serialized instance.
         * @returns A reference to a {@link GLib.Variant} with               the serialized data. The variants type signature is entirely               dependent of the underlying implementation. Free using               `g_variant_unref()`.
         */
        serialize(): GLib.Variant;

        /**
         * Build a clean serialized representation of `self`. The signature of the
         * returned variant is entirely determined by the underlying implementation.
         * You can recreate a serialized instance by calling `dee_serializable_parse()`
         * provided that you know the correct {@link GObject.GType} for the serialized instance.
         * @virtual
         */
        vfunc_serialize(): GLib.Variant;
    }


    namespace PreviewAction {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            activated: (arg0: string) => ActivationResponse;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::display-name": (pspec: GObject.ParamSpec) => void;
            "notify::extra-text": (pspec: GObject.ParamSpec) => void;
            "notify::icon-hint": (pspec: GObject.ParamSpec) => void;
            "notify::layout-hint": (pspec: GObject.ParamSpec) => void;
            "notify::hints": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Dee.Serializable.ConstructorProps {
            id: string;
            display_name: string;
            displayName: string;
            extra_text: string;
            extraText: string;
            icon_hint: Gio.Icon;
            iconHint: Gio.Icon;
            layout_hint: LayoutHint;
            layoutHint: LayoutHint;
            hints: ({ [key: string]: any } | GLib.HashTable<string, GLib.Variant>);
        }
    }

    /**
     * @gir-type Class
     */
    class PreviewAction extends GObject.Object implements Dee.Serializable {
        static $gtype: GObject.GType<PreviewAction>;

        // Properties
        /**
         * @construct-only
         */
        get id(): string;

        /**
         * @construct-only
         */
        get display_name(): string;

        /**
         * @construct-only
         */
        get displayName(): string;

        get extra_text(): string;
        set extra_text(val: string);

        get extraText(): string;
        set extraText(val: string);

        /**
         * @construct-only
         */
        get icon_hint(): Gio.Icon;

        /**
         * @construct-only
         */
        get iconHint(): Gio.Icon;

        /**
         * @construct-only
         */
        get layout_hint(): LayoutHint;

        /**
         * @construct-only
         */
        get layoutHint(): LayoutHint;

        /**
         * @read-only
         */
        get hints(): GLib.HashTable<string, GLib.Variant>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PreviewAction.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PreviewAction.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](id: string, display_name: string, icon_hint: Gio.Icon): PreviewAction;

        static with_layout_hint(id: string, display_name: string, icon_hint: Gio.Icon, layout: LayoutHint): PreviewAction;

        static with_uri(uri: string, display_name: string, icon_hint: Gio.Icon): PreviewAction;

        // Signals
        /** @signal */
        connect<K extends keyof PreviewAction.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PreviewAction.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PreviewAction.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PreviewAction.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PreviewAction.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PreviewAction.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_id(): string;

        get_display_name(): string;

        get_extra_text(): string;

        /**
         * @param value 
         */
        set_extra_text(value: string): void;

        get_icon_hint(): Gio.Icon;

        get_layout_hint(): LayoutHint;

        get_hints(): GLib.HashTable<string, GLib.Variant>;

        /**
         * Build an externalized form of `self` which can be used together with
         * `dee_serializable_parse_external()` to rebuild a copy of `self`.
         * 
         * It is important to note that the variant returned from this method does
         * not have the same type signature as returned from a call to
         * `dee_serializable_serialize()`. Externalization will wrap the serialized data
         * in a container format with versioning information and headers with type
         * information.
         * @returns A floating reference to a {@link GLib.Variant} with the externalized data.
         */
        externalize(): GLib.Variant;

        /**
         * Build a clean serialized representation of `self`. The signature of the
         * returned variant is entirely determined by the underlying implementation.
         * You can recreate a serialized instance by calling `dee_serializable_parse()`
         * provided that you know the correct {@link GObject.GType} for the serialized instance.
         * @returns A reference to a {@link GLib.Variant} with               the serialized data. The variants type signature is entirely               dependent of the underlying implementation. Free using               `g_variant_unref()`.
         */
        serialize(): GLib.Variant;

        /**
         * Build a clean serialized representation of `self`. The signature of the
         * returned variant is entirely determined by the underlying implementation.
         * You can recreate a serialized instance by calling `dee_serializable_parse()`
         * provided that you know the correct {@link GObject.GType} for the serialized instance.
         * @virtual
         */
        vfunc_serialize(): GLib.Variant;
    }


    namespace InfoHint {
        // Signal signatures
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::display-name": (pspec: GObject.ParamSpec) => void;
            "notify::icon-hint": (pspec: GObject.ParamSpec) => void;
            "notify::data": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {
            id: string;
            display_name: string;
            displayName: string;
            icon_hint: Gio.Icon;
            iconHint: Gio.Icon;
            data: GLib.Variant;
        }
    }

    /**
     * @gir-type Class
     */
    class InfoHint extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<InfoHint>;

        // Properties
        /**
         * @construct-only
         */
        get id(): string;

        /**
         * @construct-only
         */
        get display_name(): string;

        /**
         * @construct-only
         */
        get displayName(): string;

        /**
         * @construct-only
         */
        get icon_hint(): Gio.Icon;

        /**
         * @construct-only
         */
        get iconHint(): Gio.Icon;

        /**
         * @construct-only
         */
        get data(): GLib.Variant;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: InfoHint.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<InfoHint.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](id: string, display_name: string, icon_hint: Gio.Icon, data: string): InfoHint;

        static with_variant(id: string, display_name: string, icon_hint: Gio.Icon, data: GLib.Variant): InfoHint;

        // Signals
        /** @signal */
        connect<K extends keyof InfoHint.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InfoHint.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof InfoHint.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InfoHint.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof InfoHint.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<InfoHint.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_id(): string;

        get_display_name(): string;

        get_icon_hint(): Gio.Icon;

        get_data(): GLib.Variant;

        /**
         * @param args 
         */
    // Conflicted with GObject.Object.get_data
        get_data(...args: never[]): any;
    }


    namespace GenericPreview {
        // Signal signatures
        interface SignalSignatures extends Preview.SignalSignatures {
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::subtitle": (pspec: GObject.ParamSpec) => void;
            "notify::description-markup": (pspec: GObject.ParamSpec) => void;
            "notify::image-source-uri": (pspec: GObject.ParamSpec) => void;
            "notify::image": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Preview.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class GenericPreview extends Preview {
        static $gtype: GObject.GType<GenericPreview>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GenericPreview.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GenericPreview.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](title: string, description: string, image: Gio.Icon): GenericPreview;

        // Signals
        /** @signal */
        connect<K extends keyof GenericPreview.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GenericPreview.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GenericPreview.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GenericPreview.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GenericPreview.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GenericPreview.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace ApplicationPreview {
        // Signal signatures
        interface SignalSignatures extends Preview.SignalSignatures {
            "notify::app-icon": (pspec: GObject.ParamSpec) => void;
            "notify::license": (pspec: GObject.ParamSpec) => void;
            "notify::copyright": (pspec: GObject.ParamSpec) => void;
            "notify::last-update": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::subtitle": (pspec: GObject.ParamSpec) => void;
            "notify::description-markup": (pspec: GObject.ParamSpec) => void;
            "notify::image-source-uri": (pspec: GObject.ParamSpec) => void;
            "notify::image": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Preview.ConstructorProps {
            app_icon: Gio.Icon;
            appIcon: Gio.Icon;
            license: string;
            copyright: string;
            last_update: string;
            lastUpdate: string;
        }
    }

    /**
     * @gir-type Class
     */
    class ApplicationPreview extends Preview {
        static $gtype: GObject.GType<ApplicationPreview>;

        // Properties
        get app_icon(): Gio.Icon;
        set app_icon(val: Gio.Icon);

        get appIcon(): Gio.Icon;
        set appIcon(val: Gio.Icon);

        get license(): string;
        set license(val: string);

        get copyright(): string;
        set copyright(val: string);

        get last_update(): string;
        set last_update(val: string);

        get lastUpdate(): string;
        set lastUpdate(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ApplicationPreview.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ApplicationPreview.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](title: string, subtitle: string, description: string, icon: Gio.Icon, screenshot: Gio.Icon): ApplicationPreview;

        // Signals
        /** @signal */
        connect<K extends keyof ApplicationPreview.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ApplicationPreview.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ApplicationPreview.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ApplicationPreview.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ApplicationPreview.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ApplicationPreview.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param rating 
         * @param num_ratings 
         */
        set_rating(rating: number, num_ratings: number): void;

        get_app_icon(): Gio.Icon;

        /**
         * @param value 
         */
        set_app_icon(value: Gio.Icon): void;

        get_license(): string;

        /**
         * @param value 
         */
        set_license(value: string): void;

        get_copyright(): string;

        /**
         * @param value 
         */
        set_copyright(value: string): void;

        get_last_update(): string;

        /**
         * @param value 
         */
        set_last_update(value: string): void;
    }


    namespace MusicPreview {
        // Signal signatures
        interface SignalSignatures extends Preview.SignalSignatures {
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::subtitle": (pspec: GObject.ParamSpec) => void;
            "notify::description-markup": (pspec: GObject.ParamSpec) => void;
            "notify::image-source-uri": (pspec: GObject.ParamSpec) => void;
            "notify::image": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Preview.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class MusicPreview extends Preview {
        static $gtype: GObject.GType<MusicPreview>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MusicPreview.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MusicPreview.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](title: string, subtitle: string, image: Gio.Icon): MusicPreview;

        // Signals
        /** @signal */
        connect<K extends keyof MusicPreview.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MusicPreview.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MusicPreview.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MusicPreview.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MusicPreview.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MusicPreview.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param track 
         */
        add_track(track: TrackMetadata): void;
    }


    namespace PaymentPreview {
        // Signal signatures
        interface SignalSignatures extends Preview.SignalSignatures {
            "notify::header": (pspec: GObject.ParamSpec) => void;
            "notify::email": (pspec: GObject.ParamSpec) => void;
            "notify::payment-method": (pspec: GObject.ParamSpec) => void;
            "notify::purchase-prize": (pspec: GObject.ParamSpec) => void;
            "notify::purchase-type": (pspec: GObject.ParamSpec) => void;
            "notify::preview-type": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::subtitle": (pspec: GObject.ParamSpec) => void;
            "notify::description-markup": (pspec: GObject.ParamSpec) => void;
            "notify::image-source-uri": (pspec: GObject.ParamSpec) => void;
            "notify::image": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Preview.ConstructorProps {
            header: string;
            email: string;
            payment_method: string;
            paymentMethod: string;
            purchase_prize: string;
            purchasePrize: string;
            purchase_type: string;
            purchaseType: string;
            preview_type: PaymentPreviewType;
            previewType: PaymentPreviewType;
        }
    }

    /**
     * @gir-type Class
     */
    class PaymentPreview extends Preview {
        static $gtype: GObject.GType<PaymentPreview>;

        // Properties
        get header(): string;
        set header(val: string);

        get email(): string;
        set email(val: string);

        get payment_method(): string;
        set payment_method(val: string);

        get paymentMethod(): string;
        set paymentMethod(val: string);

        get purchase_prize(): string;
        set purchase_prize(val: string);

        get purchasePrize(): string;
        set purchasePrize(val: string);

        get purchase_type(): string;
        set purchase_type(val: string);

        get purchaseType(): string;
        set purchaseType(val: string);

        get preview_type(): PaymentPreviewType;
        set preview_type(val: PaymentPreviewType);

        get previewType(): PaymentPreviewType;
        set previewType(val: PaymentPreviewType);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PaymentPreview.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PaymentPreview.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](title: string, subtitle: string, image: Gio.Icon): PaymentPreview;

        static for_type(title: string, subtitle: string, image: Gio.Icon, type: PaymentPreviewType): PaymentPreview;

        static for_application(title: string, subtitle: string, image: Gio.Icon): PaymentPreview;

        static for_music(title: string, subtitle: string, image: Gio.Icon): PaymentPreview;

        static for_error(title: string, subtitle: string, image: Gio.Icon): PaymentPreview;

        // Signals
        /** @signal */
        connect<K extends keyof PaymentPreview.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PaymentPreview.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PaymentPreview.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PaymentPreview.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PaymentPreview.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PaymentPreview.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_header(): string;

        /**
         * @param value 
         */
        set_header(value: string): void;

        get_email(): string;

        /**
         * @param value 
         */
        set_email(value: string): void;

        get_payment_method(): string;

        /**
         * @param value 
         */
        set_payment_method(value: string): void;

        get_purchase_prize(): string;

        /**
         * @param value 
         */
        set_purchase_prize(value: string): void;

        get_purchase_type(): string;

        /**
         * @param value 
         */
        set_purchase_type(value: string): void;

        get_preview_type(): PaymentPreviewType;

        /**
         * @param value 
         */
        set_preview_type(value: PaymentPreviewType): void;
    }


    namespace MoviePreview {
        // Signal signatures
        interface SignalSignatures extends Preview.SignalSignatures {
            "notify::year": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::subtitle": (pspec: GObject.ParamSpec) => void;
            "notify::description-markup": (pspec: GObject.ParamSpec) => void;
            "notify::image-source-uri": (pspec: GObject.ParamSpec) => void;
            "notify::image": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Preview.ConstructorProps {
            year: string;
        }
    }

    /**
     * @gir-type Class
     */
    class MoviePreview extends Preview {
        static $gtype: GObject.GType<MoviePreview>;

        // Properties
        get year(): string;
        set year(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MoviePreview.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MoviePreview.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](title: string, subtitle: string, description: string, image: Gio.Icon): MoviePreview;

        // Signals
        /** @signal */
        connect<K extends keyof MoviePreview.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MoviePreview.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MoviePreview.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MoviePreview.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MoviePreview.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MoviePreview.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param rating 
         * @param num_ratings 
         */
        set_rating(rating: number, num_ratings: number): void;

        get_year(): string;

        /**
         * @param value 
         */
        set_year(value: string): void;
    }


    namespace SocialPreview {
        // Signal signatures
        interface SignalSignatures extends Preview.SignalSignatures {
            "notify::avatar": (pspec: GObject.ParamSpec) => void;
            "notify::content": (pspec: GObject.ParamSpec) => void;
            "notify::sender": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::subtitle": (pspec: GObject.ParamSpec) => void;
            "notify::description-markup": (pspec: GObject.ParamSpec) => void;
            "notify::image-source-uri": (pspec: GObject.ParamSpec) => void;
            "notify::image": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Preview.ConstructorProps {
            avatar: Gio.Icon;
            content: string;
            sender: string;
        }
    }

    /**
     * @gir-type Class
     */
    class SocialPreview extends Preview {
        static $gtype: GObject.GType<SocialPreview>;

        // Properties
        get avatar(): Gio.Icon;
        set avatar(val: Gio.Icon);

        get content(): string;
        set content(val: string);

        get sender(): string;
        set sender(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SocialPreview.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SocialPreview.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](sender: string, subtitle: string, content: string, avatar: Gio.Icon): SocialPreview;

        // Signals
        /** @signal */
        connect<K extends keyof SocialPreview.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SocialPreview.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SocialPreview.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SocialPreview.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SocialPreview.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SocialPreview.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param comment 
         */
        add_comment(comment: SocialPreviewComment): void;

        get_avatar(): Gio.Icon;

        /**
         * @param value 
         */
        set_avatar(value: Gio.Icon): void;

        get_content(): string;

        /**
         * @param value 
         */
        set_content(value: string): void;

        get_sender(): string;

        /**
         * @param value 
         */
        set_sender(value: string): void;
    }


    namespace SocialPreviewComment {
        // Signal signatures
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::time": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {
            id: string;
            name: string;
            text: string;
            time: string;
        }
    }

    /**
     * @gir-type Class
     */
    class SocialPreviewComment extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<SocialPreviewComment>;

        // Properties
        /**
         * @construct-only
         */
        get id(): string;

        /**
         * @construct-only
         */
        get name(): string;

        /**
         * @construct-only
         */
        get text(): string;

        /**
         * @construct-only
         */
        get time(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SocialPreviewComment.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SocialPreviewComment.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](id: string, name: string, text: string, time: string): SocialPreviewComment;

        // Signals
        /** @signal */
        connect<K extends keyof SocialPreviewComment.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SocialPreviewComment.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SocialPreviewComment.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SocialPreviewComment.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SocialPreviewComment.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SocialPreviewComment.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_id(): string;

        get_name(): string;

        get_text(): string;

        get_time(): string;
    }


    namespace ActivationResponse {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::handled": (pspec: GObject.ParamSpec) => void;
            "notify::goto-uri": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handled: HandledType;
            goto_uri: string;
            gotoUri: string;
        }
    }

    /**
     * @gir-type Class
     */
    class ActivationResponse extends GObject.Object {
        static $gtype: GObject.GType<ActivationResponse>;

        // Properties
        /**
         * @construct-only
         */
        get handled(): HandledType;

        get goto_uri(): string;
        set goto_uri(val: string);

        get gotoUri(): string;
        set gotoUri(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ActivationResponse.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ActivationResponse.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](handled: HandledType, goto_uri: string): ActivationResponse;

        static with_search(search_string: string, filter_set: FilterSet, search_metadata: SearchMetadata): ActivationResponse;

        static with_preview(preview: Preview): ActivationResponse;

        // Signals
        /** @signal */
        connect<K extends keyof ActivationResponse.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ActivationResponse.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ActivationResponse.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ActivationResponse.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ActivationResponse.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ActivationResponse.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_handled(): HandledType;

        get_goto_uri(): string;

        /**
         * @param value 
         */
        set_goto_uri(value: string): void;
    }


    namespace AggregatorActivation {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::channel-id": (pspec: GObject.ParamSpec) => void;
            "notify::scope-id": (pspec: GObject.ParamSpec) => void;
            "notify::action-type": (pspec: GObject.ParamSpec) => void;
            "notify::scope-result": (pspec: GObject.ParamSpec) => void;
            "notify::hints": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            channel_id: string;
            channelId: string;
            scope_id: string;
            scopeId: string;
            action_type: number;
            actionType: number;
            scope_result: ScopeResult;
            scopeResult: ScopeResult;
            hints: ({ [key: string]: any } | GLib.HashTable<string, GLib.Variant>);
        }
    }

    /**
     * @gir-type Class
     */
    class AggregatorActivation extends GObject.Object {
        static $gtype: GObject.GType<AggregatorActivation>;

        // Properties
        get channel_id(): string;
        set channel_id(val: string);

        get channelId(): string;
        set channelId(val: string);

        get scope_id(): string;
        set scope_id(val: string);

        get scopeId(): string;
        set scopeId(val: string);

        get action_type(): number;
        set action_type(val: number);

        get actionType(): number;
        set actionType(val: number);

        get scope_result(): ScopeResult;
        set scope_result(val: ScopeResult);

        get scopeResult(): ScopeResult;
        set scopeResult(val: ScopeResult);

        get hints(): GLib.HashTable<string, GLib.Variant>;
        set hints(val: ({ [key: string]: any } | GLib.HashTable<string, GLib.Variant>));

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AggregatorActivation.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AggregatorActivation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](channel_id: string, scope_id: string, action_type: number, result: ScopeResult): AggregatorActivation;

        // Signals
        /** @signal */
        connect<K extends keyof AggregatorActivation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AggregatorActivation.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AggregatorActivation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AggregatorActivation.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AggregatorActivation.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AggregatorActivation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_channel_id(): string;

        /**
         * @param value 
         */
        set_channel_id(value: string): void;

        get_scope_id(): string;

        /**
         * @param value 
         */
        set_scope_id(value: string): void;

        get_action_type(): number;

        /**
         * @param value 
         */
        set_action_type(value: number): void;

        get_scope_result(): ScopeResult;

        /**
         * @param value 
         */
        set_scope_result(value: ScopeResult): void;

        get_hints(): GLib.HashTable<string, GLib.Variant>;
    }


    namespace FilterSet {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class FilterSet extends GObject.Object {
        static $gtype: GObject.GType<FilterSet>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FilterSet.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<FilterSet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): FilterSet;

        // Signals
        /** @signal */
        connect<K extends keyof FilterSet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FilterSet.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FilterSet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FilterSet.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FilterSet.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FilterSet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param filter 
         * @virtual
         */
        vfunc_add(filter: Filter): void;

        /**
         * @param filter_id 
         * @virtual
         */
        vfunc_get_filter_by_id(filter_id: string): Filter;

        /**
         * @virtual
         */
        vfunc_get_filters(): Filter[];

        // Methods
        /**
         * @param filter 
         */
        add(filter: Filter): void;

        /**
         * @param filter_id 
         */
        get_filter_by_id(filter_id: string): Filter;

        get_filters(): Filter[];
    }


    namespace CategorySet {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class CategorySet extends GObject.Object {
        static $gtype: GObject.GType<CategorySet>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CategorySet.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<CategorySet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): CategorySet;

        // Signals
        /** @signal */
        connect<K extends keyof CategorySet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CategorySet.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CategorySet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CategorySet.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CategorySet.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CategorySet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param category 
         * @virtual
         */
        vfunc_add(category: Category): void;

        /**
         * @virtual
         */
        vfunc_get_categories(): Category[];

        // Methods
        /**
         * @param category 
         */
        add(category: Category): void;

        get_categories(): Category[];
    }


    namespace Schema {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class Schema extends GObject.Object {
        static $gtype: GObject.GType<Schema>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Schema.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Schema.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Schema;

        // Signals
        /** @signal */
        connect<K extends keyof Schema.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Schema.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Schema.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Schema.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Schema.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Schema.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param name 
         * @param schema 
         * @param type 
         * @virtual
         */
        vfunc_add_field(name: string, schema: string, type: SchemaFieldType): void;

        /**
         * @virtual
         */
        vfunc_get_fields(): SchemaFieldInfo[];

        // Methods
        /**
         * @param name 
         * @param schema 
         * @param type 
         */
        add_field(name: string, schema: string, type: SchemaFieldType): void;

        get_fields(): SchemaFieldInfo[];
    }


    namespace Cancellable {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    abstract class Cancellable extends GObject.Object {
        static $gtype: GObject.GType<Cancellable>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Cancellable.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Cancellable.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Cancellable.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Cancellable.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Cancellable.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Cancellable.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Cancellable.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Cancellable.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        static create(): Cancellable;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_cancel(): void;

        /**
         * @virtual
         */
        vfunc_is_cancelled(): boolean;

        /**
         * @virtual
         */
        vfunc_get_gcancellable(): Gio.Cancellable;

        // Methods
        cancel(): void;

        is_cancelled(): boolean;

        get_gcancellable(): Gio.Cancellable;
    }


    namespace ScopeSearchBase {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    abstract class ScopeSearchBase extends GObject.Object {
        static $gtype: GObject.GType<ScopeSearchBase>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ScopeSearchBase.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ScopeSearchBase.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ScopeSearchBase.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ScopeSearchBase.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ScopeSearchBase.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ScopeSearchBase.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ScopeSearchBase.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ScopeSearchBase.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_run(): void;

        /**
         * @param async_callback 
         * @virtual
         */
        vfunc_run_async(async_callback: ScopeSearchBaseCallback): void;

        /**
         * @param ctx 
         * @virtual
         */
        vfunc_set_search_context(ctx: SearchContext): void;

        // Methods
        run(): void;

        /**
         * @param async_callback 
         */
        run_async(async_callback: ScopeSearchBaseCallback): void;

        /**
         * @param ctx 
         */
        set_search_context(ctx: SearchContext): void;
    }


    namespace ResultSet {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    abstract class ResultSet extends GObject.Object {
        static $gtype: GObject.GType<ResultSet>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ResultSet.SignalSignatures;

        // Fields
        ttl: number;

        // Constructors
        constructor(properties?: Partial<ResultSet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ResultSet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ResultSet.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ResultSet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ResultSet.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ResultSet.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ResultSet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param result 
         * @virtual
         */
        vfunc_add_result(result: ScopeResult): void;

        /**
         * @param variant 
         * @virtual
         */
        vfunc_add_result_from_variant(variant: GLib.Variant): void;

        /**
         * @virtual
         */
        vfunc_flush(): void;

        // Methods
        /**
         * @param result 
         */
        add_result(result: ScopeResult): void;

        /**
         * @param variant 
         */
        add_result_from_variant(variant: GLib.Variant): void;

        flush(): void;
    }


    namespace AbstractPreview {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    abstract class AbstractPreview extends GObject.Object {
        static $gtype: GObject.GType<AbstractPreview>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AbstractPreview.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AbstractPreview.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof AbstractPreview.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AbstractPreview.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AbstractPreview.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AbstractPreview.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AbstractPreview.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AbstractPreview.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param serialization_type 
         * @virtual
         */
        vfunc_serialize_as(serialization_type: SerializationType): (Uint8Array | string);

        // Methods
        /**
         * @param serialization_type 
         */
        serialize_as(serialization_type: SerializationType): Uint8Array;
    }


    namespace ResultPreviewer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    abstract class ResultPreviewer extends GObject.Object {
        static $gtype: GObject.GType<ResultPreviewer>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ResultPreviewer.SignalSignatures;

        // Fields
        metadata: SearchMetadata;

        cancellable: Cancellable;

        // Constructors
        constructor(properties?: Partial<ResultPreviewer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ResultPreviewer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ResultPreviewer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ResultPreviewer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ResultPreviewer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ResultPreviewer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ResultPreviewer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_run(): AbstractPreview;

        /**
         * @param async_callback 
         * @virtual
         */
        vfunc_run_async(async_callback: AbstractPreviewCallback): void;

        // Methods
        run(): AbstractPreview;

        /**
         * @param async_callback 
         */
        run_async(async_callback: AbstractPreviewCallback): void;

        /**
         * @param scope_result 
         */
        set_scope_result(scope_result: ScopeResult): void;

        /**
         * @param search_metadata 
         */
        set_search_metadata(search_metadata: SearchMetadata): void;
    }


    namespace SearchMetadata {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::locale": (pspec: GObject.ParamSpec) => void;
            "notify::form-factor": (pspec: GObject.ParamSpec) => void;
            "notify::location": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            locale: string;
            form_factor: string;
            formFactor: string;
            location: GeoCoordinate;
        }
    }

    /**
     * @gir-type Class
     */
    class SearchMetadata extends GObject.Object {
        static $gtype: GObject.GType<SearchMetadata>;

        // Properties
        /**
         * @read-only
         */
        get locale(): string;

        /**
         * @read-only
         */
        get form_factor(): string;

        /**
         * @read-only
         */
        get formFactor(): string;

        /**
         * @read-only
         */
        get location(): GeoCoordinate;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SearchMetadata.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SearchMetadata.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): SearchMetadata;

        // Signals
        /** @signal */
        connect<K extends keyof SearchMetadata.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SearchMetadata.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SearchMetadata.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SearchMetadata.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SearchMetadata.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SearchMetadata.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param metadata 
         */
        static create(metadata: ({ [key: string]: any } | GLib.HashTable<string, GLib.Variant>)): SearchMetadata;

        /**
         * @param metadata 
         */
        static create_from_variant(metadata: GLib.Variant): SearchMetadata;

        // Methods
        get_locale(): string;

        get_form_factor(): string;

        get_location(): GeoCoordinate;
    }


    namespace GeoCoordinate {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class GeoCoordinate extends GObject.Object {
        static $gtype: GObject.GType<GeoCoordinate>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GeoCoordinate.SignalSignatures;

        // Fields
        latitude: number;

        longitude: number;

        altitude: number;

        // Constructors
        constructor(properties?: Partial<GeoCoordinate.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](latitude_: number, longitude_: number): GeoCoordinate;

        static with_altitude(latitude_: number, longitude_: number, altitude_: number): GeoCoordinate;

        // Signals
        /** @signal */
        connect<K extends keyof GeoCoordinate.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GeoCoordinate.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GeoCoordinate.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GeoCoordinate.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GeoCoordinate.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GeoCoordinate.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        has_valid_altitude(): boolean;
    }


    namespace AbstractScope {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            "results-invalidated-internal": (arg0: SearchType) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    abstract class AbstractScope extends GObject.Object {
        static $gtype: GObject.GType<AbstractScope>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AbstractScope.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AbstractScope.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof AbstractScope.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AbstractScope.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AbstractScope.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AbstractScope.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AbstractScope.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AbstractScope.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param search_context 
         * @virtual
         */
        vfunc_create_search_for_query(search_context: SearchContext): ScopeSearchBase;

        /**
         * @param result 
         * @param metadata 
         * @virtual
         */
        vfunc_create_previewer(result: ScopeResult, metadata: SearchMetadata): ResultPreviewer;

        /**
         * @virtual
         */
        vfunc_get_categories(): CategorySet;

        /**
         * @virtual
         */
        vfunc_get_filters(): FilterSet;

        /**
         * @virtual
         */
        vfunc_get_schema(): Schema;

        /**
         * @virtual
         */
        vfunc_get_search_hint(): string;

        /**
         * @virtual
         */
        vfunc_get_group_name(): string;

        /**
         * @virtual
         */
        vfunc_get_unique_name(): string;

        /**
         * @param result 
         * @param metadata 
         * @param action_id 
         * @virtual
         */
        vfunc_activate(result: ScopeResult, metadata: SearchMetadata, action_id: string): ActivationResponse;

        /**
         * @param search_query 
         * @virtual
         */
        vfunc_normalize_search_query(search_query: string): string;

        // Methods
        /**
         * @param search_context 
         */
        create_search_for_query(search_context: SearchContext): ScopeSearchBase;

        /**
         * @param result 
         * @param metadata 
         */
        create_previewer(result: ScopeResult, metadata: SearchMetadata): ResultPreviewer;

        get_categories(): CategorySet;

        get_filters(): FilterSet;

        get_schema(): Schema;

        get_search_hint(): string;

        get_group_name(): string;

        get_unique_name(): string;

        /**
         * @param result 
         * @param metadata 
         * @param action_id 
         */
        activate(result: ScopeResult, metadata: SearchMetadata, action_id: string): ActivationResponse;

        /**
         * @param search_query 
         */
        normalize_search_query(search_query: string): string;

        /**
         * @param search_type 
         */
        results_invalidated(search_type: SearchType): void;
    }


    namespace ScopeDBusConnector {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::scope": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            scope: AbstractScope;
        }
    }

    /**
     * @gir-type Class
     */
    class ScopeDBusConnector extends GObject.Object {
        static $gtype: GObject.GType<ScopeDBusConnector>;

        // Properties
        /**
         * @construct-only
         */
        get scope(): AbstractScope;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ScopeDBusConnector.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ScopeDBusConnector.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](scope: AbstractScope): ScopeDBusConnector;

        // Signals
        /** @signal */
        connect<K extends keyof ScopeDBusConnector.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ScopeDBusConnector.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ScopeDBusConnector.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ScopeDBusConnector.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ScopeDBusConnector.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ScopeDBusConnector.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        static run(): void;

        static quit(): void;

        // Methods
        ["export"](): void;

        unexport(): void;

        get_scope(): AbstractScope;
    }


    namespace DeprecatedScopeBase {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            "active-sources-changed": (arg0: string[]) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::dbus-path": (pspec: GObject.ParamSpec) => void;
            "notify::search-in-global": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::is-master": (pspec: GObject.ParamSpec) => void;
            "notify::search-hint": (pspec: GObject.ParamSpec) => void;
            "notify::sources": (pspec: GObject.ParamSpec) => void;
            "notify::categories": (pspec: GObject.ParamSpec) => void;
            "notify::filters": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            id: string;
            dbus_path: string;
            dbusPath: string;
            search_in_global: boolean;
            searchInGlobal: boolean;
            visible: boolean;
            is_master: boolean;
            isMaster: boolean;
            search_hint: string;
            searchHint: string;
            sources: OptionsFilter;
            categories: CategorySet;
            filters: FilterSet;
            schema: Schema;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class DeprecatedScopeBase extends GObject.Object {
        static $gtype: GObject.GType<DeprecatedScopeBase>;

        // Properties
        /**
         * @construct-only
         */
        get id(): string;

        /**
         * @construct-only
         */
        get dbus_path(): string;

        /**
         * @construct-only
         */
        get dbusPath(): string;

        get search_in_global(): boolean;
        set search_in_global(val: boolean);

        get searchInGlobal(): boolean;
        set searchInGlobal(val: boolean);

        get visible(): boolean;
        set visible(val: boolean);

        /**
         * @construct-only
         */
        get is_master(): boolean;

        /**
         * @construct-only
         */
        get isMaster(): boolean;

        get search_hint(): string;
        set search_hint(val: string);

        get searchHint(): string;
        set searchHint(val: string);

        get sources(): OptionsFilter;
        set sources(val: OptionsFilter);

        get categories(): CategorySet;
        set categories(val: CategorySet);

        get filters(): FilterSet;
        set filters(val: FilterSet);

        get schema(): Schema;
        set schema(val: Schema);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DeprecatedScopeBase.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DeprecatedScopeBase.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof DeprecatedScopeBase.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeprecatedScopeBase.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DeprecatedScopeBase.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeprecatedScopeBase.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DeprecatedScopeBase.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DeprecatedScopeBase.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        ["export"](): void;

        unexport(): void;

        get_id(): string;

        get_dbus_path(): string;

        get_search_in_global(): boolean;

        /**
         * @param value 
         */
        set_search_in_global(value: boolean): void;

        get_visible(): boolean;

        /**
         * @param value 
         */
        set_visible(value: boolean): void;

        get_is_master(): boolean;

        get_search_hint(): string;

        /**
         * @param value 
         */
        set_search_hint(value: string): void;

        get_sources(): OptionsFilter;

        get_categories(): CategorySet;

        /**
         * @param value 
         */
        set_categories(value: CategorySet): void;

        get_filters(): FilterSet;

        /**
         * @param value 
         */
        set_filters(value: FilterSet): void;

        get_schema(): Schema;

        /**
         * @param value 
         */
        set_schema(value: Schema): void;
    }


    namespace DeprecatedScope {
        // Signal signatures
        interface SignalSignatures extends DeprecatedScopeBase.SignalSignatures {
            /**
             * @signal
             */
            "activate-uri": (arg0: string) => ActivationResponse;
            /**
             * @signal
             */
            "preview-uri": (arg0: string) => Preview;
            /**
             * @signal
             */
            "generate-search-key": (arg0: DeprecatedScopeSearch) => string;
            /**
             * @signal
             */
            "search-changed": (arg0: DeprecatedScopeSearch, arg1: SearchType, arg2: Gio.Cancellable) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::dbus-path": (pspec: GObject.ParamSpec) => void;
            "notify::search-in-global": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::is-master": (pspec: GObject.ParamSpec) => void;
            "notify::search-hint": (pspec: GObject.ParamSpec) => void;
            "notify::sources": (pspec: GObject.ParamSpec) => void;
            "notify::categories": (pspec: GObject.ParamSpec) => void;
            "notify::filters": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends DeprecatedScopeBase.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class DeprecatedScope extends DeprecatedScopeBase {
        static $gtype: GObject.GType<DeprecatedScope>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DeprecatedScope.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DeprecatedScope.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](dbus_path_: string, id_: string): DeprecatedScope;

        // Signals
        /** @signal */
        connect<K extends keyof DeprecatedScope.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeprecatedScope.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DeprecatedScope.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeprecatedScope.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DeprecatedScope.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DeprecatedScope.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param result 
         * @param _callback_ 
         * @virtual
         */
        vfunc_preview_result(result: ScopeResult, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_preview_result_finish(_res_: Gio.AsyncResult): Preview;

        /**
         * @param result 
         * @param _callback_ 
         * @virtual
         */
        vfunc_activate_result(result: ScopeResult, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_activate_result_finish(_res_: Gio.AsyncResult): ActivationResponse;

        // Methods
        /**
         * @param result 
         */
        preview_result(result: ScopeResult): globalThis.Promise<Preview>;

        /**
         * @param result 
         * @param _callback_ 
         */
        preview_result(result: ScopeResult, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param result 
         * @param _callback_ 
         */
        preview_result(result: ScopeResult, _callback_?: Gio.AsyncReadyCallback<this>): (globalThis.Promise<Preview> | void);

        /**
         * @param _res_ 
         */
        preview_result_finish(_res_: Gio.AsyncResult): Preview;

        /**
         * @param result 
         */
        activate_result(result: ScopeResult): globalThis.Promise<ActivationResponse>;

        /**
         * @param result 
         * @param _callback_ 
         */
        activate_result(result: ScopeResult, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param result 
         * @param _callback_ 
         */
        activate_result(result: ScopeResult, _callback_?: Gio.AsyncReadyCallback<this>): (globalThis.Promise<ActivationResponse> | void);

        /**
         * @param _res_ 
         */
        activate_result_finish(_res_: Gio.AsyncResult): ActivationResponse;

        /**
         * @param search_type 
         */
        queue_search_changed(search_type: SearchType): void;
    }


    namespace AggregatorScope {
        // Signal signatures
        interface SignalSignatures extends DeprecatedScopeBase.SignalSignatures {
            "notify::merge-mode": (pspec: GObject.ParamSpec) => void;
            "notify::proxy-filter-hints": (pspec: GObject.ParamSpec) => void;
            "notify::automatic-flushing": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::dbus-path": (pspec: GObject.ParamSpec) => void;
            "notify::search-in-global": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::is-master": (pspec: GObject.ParamSpec) => void;
            "notify::search-hint": (pspec: GObject.ParamSpec) => void;
            "notify::sources": (pspec: GObject.ParamSpec) => void;
            "notify::categories": (pspec: GObject.ParamSpec) => void;
            "notify::filters": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends DeprecatedScopeBase.ConstructorProps {
            merge_mode: AggregatorScopeMergeMode;
            mergeMode: AggregatorScopeMergeMode;
            proxy_filter_hints: boolean;
            proxyFilterHints: boolean;
            automatic_flushing: boolean;
            automaticFlushing: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class AggregatorScope extends DeprecatedScopeBase {
        static $gtype: GObject.GType<AggregatorScope>;

        // Properties
        get merge_mode(): AggregatorScopeMergeMode;
        set merge_mode(val: AggregatorScopeMergeMode);

        get mergeMode(): AggregatorScopeMergeMode;
        set mergeMode(val: AggregatorScopeMergeMode);

        get proxy_filter_hints(): boolean;
        set proxy_filter_hints(val: boolean);

        get proxyFilterHints(): boolean;
        set proxyFilterHints(val: boolean);

        get automatic_flushing(): boolean;
        set automatic_flushing(val: boolean);

        get automaticFlushing(): boolean;
        set automaticFlushing(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AggregatorScope.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AggregatorScope.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof AggregatorScope.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AggregatorScope.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AggregatorScope.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AggregatorScope.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AggregatorScope.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AggregatorScope.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param scope_id 
         * @virtual
         */
        vfunc_category_index_for_scope_id(scope_id: string): number;

        /**
         * @param scope_search 
         * @param _callback_ 
         * @virtual
         */
        vfunc_search(scope_search: AggregatedScopeSearch, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_search_finish(_res_: Gio.AsyncResult): void;

        /**
         * @param activation 
         * @param _callback_ 
         * @virtual
         */
        vfunc_activate(activation: AggregatorActivation, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_activate_finish(_res_: Gio.AsyncResult): ActivationResponse;

        // Methods
        /**
         * @param scope_id 
         */
        category_index_for_scope_id(scope_id: string): number;

        /**
         * @param category_index 
         * @param field 
         * @param flags 
         */
        add_sorter(category_index: number, field: string, flags: AggregatorScopeSortFlags): void;

        /**
         * @param category_index 
         * @param field 
         */
        add_constraint(category_index: number, field: string): void;

        /**
         * @param scope_search 
         */
        search(scope_search: AggregatedScopeSearch): globalThis.Promise<void>;

        /**
         * @param scope_search 
         * @param _callback_ 
         */
        search(scope_search: AggregatedScopeSearch, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param scope_search 
         * @param _callback_ 
         */
        search(scope_search: AggregatedScopeSearch, _callback_?: Gio.AsyncReadyCallback<this>): (globalThis.Promise<void> | void);

        /**
         * @param _res_ 
         */
        search_finish(_res_: Gio.AsyncResult): void;

        /**
         * @param activation 
         */
        activate(activation: AggregatorActivation): globalThis.Promise<ActivationResponse>;

        /**
         * @param activation 
         * @param _callback_ 
         */
        activate(activation: AggregatorActivation, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param activation 
         * @param _callback_ 
         */
        activate(activation: AggregatorActivation, _callback_?: Gio.AsyncReadyCallback<this>): (globalThis.Promise<ActivationResponse> | void);

        /**
         * @param _res_ 
         */
        activate_finish(_res_: Gio.AsyncResult): ActivationResponse;

        get_merge_mode(): AggregatorScopeMergeMode;

        /**
         * @param value 
         */
        set_merge_mode(value: AggregatorScopeMergeMode): void;

        get_proxy_filter_hints(): boolean;

        /**
         * @param value 
         */
        set_proxy_filter_hints(value: boolean): void;

        get_automatic_flushing(): boolean;

        /**
         * @param value 
         */
        set_automatic_flushing(value: boolean): void;
    }


    namespace MasterScope {
        // Signal signatures
        interface SignalSignatures extends AggregatorScope.SignalSignatures {
            "notify::no-content-hint": (pspec: GObject.ParamSpec) => void;
            "notify::merge-mode": (pspec: GObject.ParamSpec) => void;
            "notify::proxy-filter-hints": (pspec: GObject.ParamSpec) => void;
            "notify::automatic-flushing": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::dbus-path": (pspec: GObject.ParamSpec) => void;
            "notify::search-in-global": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::is-master": (pspec: GObject.ParamSpec) => void;
            "notify::search-hint": (pspec: GObject.ParamSpec) => void;
            "notify::sources": (pspec: GObject.ParamSpec) => void;
            "notify::categories": (pspec: GObject.ParamSpec) => void;
            "notify::filters": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends AggregatorScope.ConstructorProps {
            no_content_hint: string;
            noContentHint: string;
        }
    }

    /**
     * @gir-type Class
     */
    class MasterScope extends AggregatorScope {
        static $gtype: GObject.GType<MasterScope>;

        // Properties
        get no_content_hint(): string;
        set no_content_hint(val: string);

        get noContentHint(): string;
        set noContentHint(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MasterScope.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MasterScope.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](dbus_path_: string, id_: string): MasterScope;

        // Signals
        /** @signal */
        connect<K extends keyof MasterScope.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MasterScope.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MasterScope.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MasterScope.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MasterScope.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MasterScope.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_no_content_hint(): string;

        /**
         * @param value 
         */
        set_no_content_hint(value: string): void;
    }


    namespace SimpleScope {
        // Signal signatures
        interface SignalSignatures extends AbstractScope.SignalSignatures {
            "notify::filter-set": (pspec: GObject.ParamSpec) => void;
            "notify::category-set": (pspec: GObject.ParamSpec) => void;
            "notify::schema": (pspec: GObject.ParamSpec) => void;
            "notify::search-hint": (pspec: GObject.ParamSpec) => void;
            "notify::group-name": (pspec: GObject.ParamSpec) => void;
            "notify::unique-name": (pspec: GObject.ParamSpec) => void;
        }
    interface SearchRunFunc {
        (search: ScopeSearchBase): void;
    }
    interface SearchRunAsyncFunc {
        (search: ScopeSearchBase, cb: ScopeSearchBaseCallback): void;
    }
    interface PreviewRunFunc {
        (previewer: ResultPreviewer): AbstractPreview;
    }
    interface PreviewRunAsyncFunc {
        (previewer: ResultPreviewer, cb: AbstractPreviewCallback): void;
    }
    interface ActivateFunc {
        (result: ScopeResult, metadata: SearchMetadata, action_id: string): ActivationResponse;
    }

        // Constructor properties interface
        interface ConstructorProps extends AbstractScope.ConstructorProps {
            filter_set: FilterSet;
            filterSet: FilterSet;
            category_set: CategorySet;
            categorySet: CategorySet;
            schema: Schema;
            search_hint: string;
            searchHint: string;
            group_name: string;
            groupName: string;
            unique_name: string;
            uniqueName: string;
        }
    }

    /**
     * @gir-type Class
     */
    class SimpleScope extends AbstractScope {
        static $gtype: GObject.GType<SimpleScope>;

        // Properties
        get filter_set(): FilterSet;
        set filter_set(val: FilterSet);

        get filterSet(): FilterSet;
        set filterSet(val: FilterSet);

        get category_set(): CategorySet;
        set category_set(val: CategorySet);

        get categorySet(): CategorySet;
        set categorySet(val: CategorySet);

        get schema(): Schema;
        set schema(val: Schema);

        get search_hint(): string;
        set search_hint(val: string);

        get searchHint(): string;
        set searchHint(val: string);

        get group_name(): string;
        set group_name(val: string);

        get groupName(): string;
        set groupName(val: string);

        get unique_name(): string;
        set unique_name(val: string);

        get uniqueName(): string;
        set uniqueName(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SimpleScope.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SimpleScope.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): SimpleScope;

        // Signals
        /** @signal */
        connect<K extends keyof SimpleScope.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SimpleScope.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SimpleScope.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SimpleScope.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SimpleScope.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SimpleScope.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param func 
         */
        set_search_func(func: SimpleScope.SearchRunFunc): void;

        /**
         * @param func 
         */
        set_search_async_func(func: SimpleScope.SearchRunAsyncFunc): void;

        /**
         * @param func 
         */
        set_activate_func(func: SimpleScope.ActivateFunc): void;

        /**
         * @param func 
         */
        set_preview_func(func: SimpleScope.PreviewRunFunc): void;

        /**
         * @param func 
         */
        set_preview_async_func(func: SimpleScope.PreviewRunAsyncFunc): void;

        get_filter_set(): FilterSet;

        /**
         * @param value 
         */
        set_filter_set(value: FilterSet): void;

        get_category_set(): CategorySet;

        /**
         * @param value 
         */
        set_category_set(value: CategorySet): void;

        get_schema(): Schema;

        /**
         * @param value 
         */
        set_schema(value: Schema): void;

        get_search_hint(): string;

        /**
         * @param value 
         */
        set_search_hint(value: string): void;

        get_group_name(): string;

        /**
         * @param value 
         */
        set_group_name(value: string): void;

        get_unique_name(): string;

        /**
         * @param value 
         */
        set_unique_name(value: string): void;
    }


    namespace ScopeLoader {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class ScopeLoader extends GObject.Object {
        static $gtype: GObject.GType<ScopeLoader>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ScopeLoader.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ScopeLoader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): ScopeLoader;

        // Signals
        /** @signal */
        connect<K extends keyof ScopeLoader.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ScopeLoader.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ScopeLoader.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ScopeLoader.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ScopeLoader.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ScopeLoader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param module_name 
         * @param module_type 
         * @virtual
         */
        vfunc_get_scopes(module_name: string, module_type: string): AbstractScope[];

        /**
         * @param scopes 
         * @virtual
         */
        vfunc_export_scopes(scopes: AbstractScope[]): void;

        // Methods
        /**
         * @param module_name 
         * @param module_type 
         */
        get_scopes(module_name: string, module_type: string): AbstractScope[];

        /**
         * @param scopes 
         */
        export_scopes(scopes: AbstractScope[]): void;

        /**
         * @param group_name 
         */
        load_group(group_name: string): void;

        /**
         * @param scope_id 
         */
        load_scope(scope_id: string): void;

        /**
         * @param module 
         * @param module_type 
         */
        load_module(module: string, module_type: string): void;
    }


    namespace TrackMetadata {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::uri": (pspec: GObject.ParamSpec) => void;
            "notify::track-no": (pspec: GObject.ParamSpec) => void;
            "notify::artist": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::album": (pspec: GObject.ParamSpec) => void;
            "notify::length": (pspec: GObject.ParamSpec) => void;
            "notify::art-location": (pspec: GObject.ParamSpec) => void;
            "notify::art-icon": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            uri: string;
            track_no: number;
            trackNo: number;
            artist: string;
            title: string;
            album: string;
            length: number;
            art_location: Gio.File;
            artLocation: Gio.File;
            art_icon: Gio.Icon;
            artIcon: Gio.Icon;
        }
    }

    /**
     * @gir-type Class
     */
    class TrackMetadata extends GObject.Object {
        static $gtype: GObject.GType<TrackMetadata>;

        // Properties
        get uri(): string;
        set uri(val: string);

        get track_no(): number;
        set track_no(val: number);

        get trackNo(): number;
        set trackNo(val: number);

        get artist(): string;
        set artist(val: string);

        get title(): string;
        set title(val: string);

        get album(): string;
        set album(val: string);

        get length(): number;
        set length(val: number);

        get art_location(): Gio.File;
        set art_location(val: Gio.File);

        get artLocation(): Gio.File;
        set artLocation(val: Gio.File);

        get art_icon(): Gio.Icon;
        set art_icon(val: Gio.Icon);

        get artIcon(): Gio.Icon;
        set artIcon(val: Gio.Icon);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TrackMetadata.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<TrackMetadata.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): TrackMetadata;

        static full(uri: string, track_no: number, title: string, artist: string, album: string, length: number): TrackMetadata;

        // Signals
        /** @signal */
        connect<K extends keyof TrackMetadata.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TrackMetadata.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof TrackMetadata.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TrackMetadata.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof TrackMetadata.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TrackMetadata.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_uri(): string;

        /**
         * @param value 
         */
        set_uri(value: string): void;

        get_track_no(): number;

        /**
         * @param value 
         */
        set_track_no(value: number): void;

        get_artist(): string;

        /**
         * @param value 
         */
        set_artist(value: string): void;

        get_title(): string;

        /**
         * @param value 
         */
        set_title(value: string): void;

        get_album(): string;

        /**
         * @param value 
         */
        set_album(value: string): void;

        get_length(): number;

        /**
         * @param value 
         */
        set_length(value: number): void;

        get_art_location(): Gio.File;

        /**
         * @param value 
         */
        set_art_location(value: Gio.File): void;

        get_art_icon(): Gio.Icon;

        /**
         * @param value 
         */
        set_art_icon(value: Gio.Icon): void;
    }


    namespace Playlist {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::creation-date": (pspec: GObject.ParamSpec) => void;
            "notify::modification-date": (pspec: GObject.ParamSpec) => void;
            "notify::last-play-date": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            id: string;
            name: string;
            icon: Gio.Icon;
            creation_date: GLib.DateTime;
            creationDate: GLib.DateTime;
            modification_date: GLib.DateTime;
            modificationDate: GLib.DateTime;
            last_play_date: GLib.DateTime;
            lastPlayDate: GLib.DateTime;
        }
    }

    /**
     * @gir-type Class
     */
    class Playlist extends GObject.Object {
        static $gtype: GObject.GType<Playlist>;

        // Properties
        /**
         * @construct-only
         */
        get id(): string;

        get name(): string;
        set name(val: string);

        get icon(): Gio.Icon;
        set icon(val: Gio.Icon);

        get creation_date(): GLib.DateTime;
        set creation_date(val: GLib.DateTime);

        get creationDate(): GLib.DateTime;
        set creationDate(val: GLib.DateTime);

        get modification_date(): GLib.DateTime;
        set modification_date(val: GLib.DateTime);

        get modificationDate(): GLib.DateTime;
        set modificationDate(val: GLib.DateTime);

        get last_play_date(): GLib.DateTime;
        set last_play_date(val: GLib.DateTime);

        get lastPlayDate(): GLib.DateTime;
        set lastPlayDate(val: GLib.DateTime);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Playlist.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Playlist.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](id: string): Playlist;

        // Signals
        /** @signal */
        connect<K extends keyof Playlist.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Playlist.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Playlist.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Playlist.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Playlist.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Playlist.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_id(): string;

        get_name(): string;

        /**
         * @param value 
         */
        set_name(value: string): void;

        get_icon(): Gio.Icon;

        /**
         * @param value 
         */
        set_icon(value: Gio.Icon): void;

        get_creation_date(): GLib.DateTime;

        /**
         * @param value 
         */
        set_creation_date(value: GLib.DateTime): void;

        get_modification_date(): GLib.DateTime;

        /**
         * @param value 
         */
        set_modification_date(value: GLib.DateTime): void;

        get_last_play_date(): GLib.DateTime;

        /**
         * @param value 
         */
        set_last_play_date(value: GLib.DateTime): void;
    }


    namespace MusicPlayer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            raise: () => void;
            /**
             * @signal
             */
            "play-pause": () => void;
            /**
             * @signal
             */
            previous: () => void;
            /**
             * @signal
             */
            next: () => void;
            /**
             * @signal
             */
            "activate-playlist": (arg0: never) => void;
            "notify::app-info": (pspec: GObject.ParamSpec) => void;
            "notify::desktop-file-name": (pspec: GObject.ParamSpec) => void;
            "notify::is-blacklisted": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::can-go-next": (pspec: GObject.ParamSpec) => void;
            "notify::can-go-previous": (pspec: GObject.ParamSpec) => void;
            "notify::can-play": (pspec: GObject.ParamSpec) => void;
            "notify::can-pause": (pspec: GObject.ParamSpec) => void;
            "notify::current-track": (pspec: GObject.ParamSpec) => void;
            "notify::playback-state": (pspec: GObject.ParamSpec) => void;
            "notify::current-playlist": (pspec: GObject.ParamSpec) => void;
            "notify::track-menu": (pspec: GObject.ParamSpec) => void;
            "notify::player-menu": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            app_info: Gio.AppInfo;
            appInfo: Gio.AppInfo;
            desktop_file_name: string;
            desktopFileName: string;
            is_blacklisted: boolean;
            isBlacklisted: boolean;
            title: string;
            can_go_next: boolean;
            canGoNext: boolean;
            can_go_previous: boolean;
            canGoPrevious: boolean;
            can_play: boolean;
            canPlay: boolean;
            can_pause: boolean;
            canPause: boolean;
            current_track: TrackMetadata;
            currentTrack: TrackMetadata;
            playback_state: PlaybackState;
            playbackState: PlaybackState;
            current_playlist: Playlist;
            currentPlaylist: Playlist;
            track_menu: Dbusmenu.Menuitem;
            trackMenu: Dbusmenu.Menuitem;
            player_menu: Dbusmenu.Menuitem;
            playerMenu: Dbusmenu.Menuitem;
        }
    }

    /**
     * @gir-type Class
     */
    class MusicPlayer extends GObject.Object {
        static $gtype: GObject.GType<MusicPlayer>;

        // Properties
        /**
         * @construct-only
         */
        get app_info(): Gio.AppInfo;

        /**
         * @construct-only
         */
        get appInfo(): Gio.AppInfo;

        /**
         * @construct-only
         */
        get desktop_file_name(): string;

        /**
         * @construct-only
         */
        get desktopFileName(): string;

        get is_blacklisted(): boolean;
        set is_blacklisted(val: boolean);

        get isBlacklisted(): boolean;
        set isBlacklisted(val: boolean);

        get title(): string;
        set title(val: string);

        get can_go_next(): boolean;
        set can_go_next(val: boolean);

        get canGoNext(): boolean;
        set canGoNext(val: boolean);

        get can_go_previous(): boolean;
        set can_go_previous(val: boolean);

        get canGoPrevious(): boolean;
        set canGoPrevious(val: boolean);

        get can_play(): boolean;
        set can_play(val: boolean);

        get canPlay(): boolean;
        set canPlay(val: boolean);

        get can_pause(): boolean;
        set can_pause(val: boolean);

        get canPause(): boolean;
        set canPause(val: boolean);

        get current_track(): TrackMetadata;
        set current_track(val: TrackMetadata);

        get currentTrack(): TrackMetadata;
        set currentTrack(val: TrackMetadata);

        get playback_state(): PlaybackState;
        set playback_state(val: PlaybackState);

        get playbackState(): PlaybackState;
        set playbackState(val: PlaybackState);

        get current_playlist(): Playlist;
        set current_playlist(val: Playlist);

        get currentPlaylist(): Playlist;
        set currentPlaylist(val: Playlist);

        get track_menu(): Dbusmenu.Menuitem;
        set track_menu(val: Dbusmenu.Menuitem);

        get trackMenu(): Dbusmenu.Menuitem;
        set trackMenu(val: Dbusmenu.Menuitem);

        get player_menu(): Dbusmenu.Menuitem;
        set player_menu(val: Dbusmenu.Menuitem);

        get playerMenu(): Dbusmenu.Menuitem;
        set playerMenu(val: Dbusmenu.Menuitem);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MusicPlayer.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MusicPlayer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](desktop: string): MusicPlayer;

        // Signals
        /** @signal */
        connect<K extends keyof MusicPlayer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MusicPlayer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MusicPlayer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MusicPlayer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MusicPlayer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MusicPlayer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        ["export"](): void;

        unexport(): void;

        /**
         * @param p 
         */
        add_playlist(p: Playlist): boolean;

        /**
         * @param p 
         */
        remove_playlist(p: Playlist): boolean;

        get_playlists(): Playlist[];

        /**
         * @param id 
         * @param name 
         */
        edit_playlist_name(id: string, name: string): void;

        get_app_info(): Gio.AppInfo;

        get_desktop_file_name(): string;

        get_is_blacklisted(): boolean;

        /**
         * @param value 
         */
        set_is_blacklisted(value: boolean): void;

        get_title(): string;

        /**
         * @param value 
         */
        set_title(value: string): void;

        get_can_go_next(): boolean;

        /**
         * @param value 
         */
        set_can_go_next(value: boolean): void;

        get_can_go_previous(): boolean;

        /**
         * @param value 
         */
        set_can_go_previous(value: boolean): void;

        get_can_play(): boolean;

        /**
         * @param value 
         */
        set_can_play(value: boolean): void;

        get_can_pause(): boolean;

        /**
         * @param value 
         */
        set_can_pause(value: boolean): void;

        get_current_track(): TrackMetadata;

        /**
         * @param value 
         */
        set_current_track(value: TrackMetadata): void;

        get_playback_state(): PlaybackState;

        /**
         * @param value 
         */
        set_playback_state(value: PlaybackState): void;

        get_current_playlist(): Playlist;

        /**
         * @param value 
         */
        set_current_playlist(value: Playlist): void;

        get_track_menu(): Dbusmenu.Menuitem;

        /**
         * @param value 
         */
        set_track_menu(value: Dbusmenu.Menuitem): void;

        get_player_menu(): Dbusmenu.Menuitem;

        /**
         * @param value 
         */
        set_player_menu(value: Dbusmenu.Menuitem): void;
    }


    /**
     * @gir-type Alias
     */
    type AppInfoManagerClass = typeof AppInfoManager;

    /**
     * @gir-type Struct
     */
    abstract class AppInfoManagerPrivate {
        static $gtype: GObject.GType<AppInfoManagerPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type AnnotatedIconClass = typeof AnnotatedIcon;

    /**
     * @gir-type Struct
     */
    abstract class AnnotatedIconPrivate {
        static $gtype: GObject.GType<AnnotatedIconPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type InspectorClass = typeof Inspector;

    /**
     * @gir-type Struct
     */
    abstract class InspectorPrivate {
        static $gtype: GObject.GType<InspectorPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type LauncherEntryClass = typeof LauncherEntry;

    /**
     * @gir-type Struct
     */
    abstract class LauncherEntryPrivate {
        static $gtype: GObject.GType<LauncherEntryPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type LauncherFavoritesClass = typeof LauncherFavorites;

    /**
     * @gir-type Struct
     */
    abstract class LauncherFavoritesPrivate {
        static $gtype: GObject.GType<LauncherFavoritesPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type MetadataProviderClass = typeof MetadataProvider;

    /**
     * @gir-type Struct
     */
    abstract class MetadataProviderPrivate {
        static $gtype: GObject.GType<MetadataProviderPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ProgressSourceProviderClass = typeof ProgressSourceProvider;

    /**
     * @gir-type Struct
     */
    abstract class ProgressSourceProviderPrivate {
        static $gtype: GObject.GType<ProgressSourceProviderPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type CategoryClass = typeof Category;

    /**
     * @gir-type Struct
     */
    abstract class CategoryPrivate {
        static $gtype: GObject.GType<CategoryPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type FilterClass = typeof Filter;

    /**
     * @gir-type Struct
     */
    abstract class FilterPrivate {
        static $gtype: GObject.GType<FilterPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type FilterOptionClass = typeof FilterOption;

    /**
     * @gir-type Struct
     */
    abstract class FilterOptionPrivate {
        static $gtype: GObject.GType<FilterOptionPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type OptionsFilterClass = typeof OptionsFilter;

    /**
     * @gir-type Struct
     */
    abstract class OptionsFilterPrivate {
        static $gtype: GObject.GType<OptionsFilterPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type RadioOptionFilterClass = typeof RadioOptionFilter;

    /**
     * @gir-type Struct
     */
    abstract class RadioOptionFilterPrivate {
        static $gtype: GObject.GType<RadioOptionFilterPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type CheckOptionFilterClass = typeof CheckOptionFilter;

    /**
     * @gir-type Struct
     */
    abstract class CheckOptionFilterPrivate {
        static $gtype: GObject.GType<CheckOptionFilterPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type CheckOptionFilterCompactClass = typeof CheckOptionFilterCompact;

    /**
     * @gir-type Struct
     */
    abstract class CheckOptionFilterCompactPrivate {
        static $gtype: GObject.GType<CheckOptionFilterCompactPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type RatingsFilterClass = typeof RatingsFilter;

    /**
     * @gir-type Struct
     */
    abstract class RatingsFilterPrivate {
        static $gtype: GObject.GType<RatingsFilterPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type MultiRangeFilterClass = typeof MultiRangeFilter;

    /**
     * @gir-type Struct
     */
    abstract class MultiRangeFilterPrivate {
        static $gtype: GObject.GType<MultiRangeFilterPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type PreferencesManagerClass = typeof PreferencesManager;

    /**
     * @gir-type Struct
     */
    abstract class PreferencesManagerPrivate {
        static $gtype: GObject.GType<PreferencesManagerPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type DeprecatedScopeSearchClass = typeof DeprecatedScopeSearch;

    /**
     * @gir-type Struct
     */
    abstract class DeprecatedScopeSearchPrivate {
        static $gtype: GObject.GType<DeprecatedScopeSearchPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type AggregatedScopeSearchClass = typeof AggregatedScopeSearch;

    /**
     * @gir-type Struct
     */
    abstract class AggregatedScopeSearchPrivate {
        static $gtype: GObject.GType<AggregatedScopeSearchPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type PreviewClass = typeof Preview;

    /**
     * @gir-type Struct
     */
    abstract class PreviewPrivate {
        static $gtype: GObject.GType<PreviewPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type PreviewActionClass = typeof PreviewAction;

    /**
     * @gir-type Struct
     */
    abstract class PreviewActionPrivate {
        static $gtype: GObject.GType<PreviewActionPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type InfoHintClass = typeof InfoHint;

    /**
     * @gir-type Struct
     */
    abstract class InfoHintPrivate {
        static $gtype: GObject.GType<InfoHintPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GenericPreviewClass = typeof GenericPreview;

    /**
     * @gir-type Struct
     */
    abstract class GenericPreviewPrivate {
        static $gtype: GObject.GType<GenericPreviewPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ApplicationPreviewClass = typeof ApplicationPreview;

    /**
     * @gir-type Struct
     */
    abstract class ApplicationPreviewPrivate {
        static $gtype: GObject.GType<ApplicationPreviewPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type MusicPreviewClass = typeof MusicPreview;

    /**
     * @gir-type Struct
     */
    abstract class MusicPreviewPrivate {
        static $gtype: GObject.GType<MusicPreviewPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type PaymentPreviewClass = typeof PaymentPreview;

    /**
     * @gir-type Struct
     */
    abstract class PaymentPreviewPrivate {
        static $gtype: GObject.GType<PaymentPreviewPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type MoviePreviewClass = typeof MoviePreview;

    /**
     * @gir-type Struct
     */
    abstract class MoviePreviewPrivate {
        static $gtype: GObject.GType<MoviePreviewPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type SocialPreviewClass = typeof SocialPreview;

    /**
     * @gir-type Struct
     */
    abstract class SocialPreviewPrivate {
        static $gtype: GObject.GType<SocialPreviewPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type SocialPreviewCommentClass = typeof SocialPreviewComment;

    /**
     * @gir-type Struct
     */
    abstract class SocialPreviewCommentPrivate {
        static $gtype: GObject.GType<SocialPreviewCommentPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ActivationResponseClass = typeof ActivationResponse;

    /**
     * @gir-type Struct
     */
    abstract class ActivationResponsePrivate {
        static $gtype: GObject.GType<ActivationResponsePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type AggregatorActivationClass = typeof AggregatorActivation;

    /**
     * @gir-type Struct
     */
    abstract class AggregatorActivationPrivate {
        static $gtype: GObject.GType<AggregatorActivationPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type FilterSetClass = typeof FilterSet;

    /**
     * @gir-type Struct
     */
    abstract class FilterSetPrivate {
        static $gtype: GObject.GType<FilterSetPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type CategorySetClass = typeof CategorySet;

    /**
     * @gir-type Struct
     */
    abstract class CategorySetPrivate {
        static $gtype: GObject.GType<CategorySetPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type SchemaClass = typeof Schema;

    /**
     * @gir-type Struct
     */
    abstract class SchemaPrivate {
        static $gtype: GObject.GType<SchemaPrivate>;
    }


    /**
     * @gir-type Struct
     */
    class SchemaFieldInfo {
        static $gtype: GObject.GType<SchemaFieldInfo>;

        // Fields
        name: string;

        schema: string;

        type: SchemaFieldType;
    }


    /**
     * @gir-type Alias
     */
    type CancellableClass = typeof Cancellable;

    /**
     * @gir-type Struct
     */
    abstract class CancellablePrivate {
        static $gtype: GObject.GType<CancellablePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ScopeSearchBaseClass = typeof ScopeSearchBase;

    /**
     * @gir-type Struct
     */
    abstract class ScopeSearchBasePrivate {
        static $gtype: GObject.GType<ScopeSearchBasePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ResultSetClass = typeof ResultSet;

    /**
     * @gir-type Struct
     */
    abstract class ResultSetPrivate {
        static $gtype: GObject.GType<ResultSetPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type AbstractPreviewClass = typeof AbstractPreview;

    /**
     * @gir-type Struct
     */
    abstract class AbstractPreviewPrivate {
        static $gtype: GObject.GType<AbstractPreviewPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ResultPreviewerClass = typeof ResultPreviewer;

    /**
     * @gir-type Struct
     */
    abstract class ResultPreviewerPrivate {
        static $gtype: GObject.GType<ResultPreviewerPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type SearchMetadataClass = typeof SearchMetadata;

    /**
     * @gir-type Struct
     */
    abstract class SearchMetadataPrivate {
        static $gtype: GObject.GType<SearchMetadataPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GeoCoordinateClass = typeof GeoCoordinate;

    /**
     * @gir-type Struct
     */
    abstract class GeoCoordinatePrivate {
        static $gtype: GObject.GType<GeoCoordinatePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type AbstractScopeClass = typeof AbstractScope;

    /**
     * @gir-type Struct
     */
    abstract class AbstractScopePrivate {
        static $gtype: GObject.GType<AbstractScopePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ScopeDBusConnectorClass = typeof ScopeDBusConnector;

    /**
     * @gir-type Struct
     */
    abstract class ScopeDBusConnectorPrivate {
        static $gtype: GObject.GType<ScopeDBusConnectorPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type DeprecatedScopeBaseClass = typeof DeprecatedScopeBase;

    /**
     * @gir-type Struct
     */
    abstract class DeprecatedScopeBasePrivate {
        static $gtype: GObject.GType<DeprecatedScopeBasePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type DeprecatedScopeClass = typeof DeprecatedScope;

    /**
     * @gir-type Struct
     */
    abstract class DeprecatedScopePrivate {
        static $gtype: GObject.GType<DeprecatedScopePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type AggregatorScopeClass = typeof AggregatorScope;

    /**
     * @gir-type Struct
     */
    abstract class AggregatorScopePrivate {
        static $gtype: GObject.GType<AggregatorScopePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type MasterScopeClass = typeof MasterScope;

    /**
     * @gir-type Struct
     */
    abstract class MasterScopePrivate {
        static $gtype: GObject.GType<MasterScopePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type SimpleScopeClass = typeof SimpleScope;

    /**
     * @gir-type Struct
     */
    abstract class SimpleScopePrivate {
        static $gtype: GObject.GType<SimpleScopePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ScopeLoaderClass = typeof ScopeLoader;

    /**
     * @gir-type Struct
     */
    abstract class ScopeLoaderPrivate {
        static $gtype: GObject.GType<ScopeLoaderPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type TrackMetadataClass = typeof TrackMetadata;

    /**
     * @gir-type Struct
     */
    abstract class TrackMetadataPrivate {
        static $gtype: GObject.GType<TrackMetadataPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type PlaylistClass = typeof Playlist;

    /**
     * @gir-type Struct
     */
    abstract class PlaylistPrivate {
        static $gtype: GObject.GType<PlaylistPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type MusicPlayerClass = typeof MusicPlayer;

    /**
     * @gir-type Struct
     */
    abstract class MusicPlayerPrivate {
        static $gtype: GObject.GType<MusicPlayerPrivate>;
    }


    /**
     * @gir-type Struct
     */
    class ScopeResult {
        static $gtype: GObject.GType<ScopeResult>;

        // Fields
        uri: string;

        icon_hint: string;

        category: number;

        result_type: ResultType;

        mimetype: string;

        title: string;

        comment: string;

        dnd_uri: string;

        // Static methods
        /**
         * @param uri 
         * @param icon_hint 
         * @param category 
         * @param result_type 
         * @param mimetype 
         * @param title 
         * @param comment 
         * @param dnd_uri 
         * @param metadata 
         */
        static create(uri: string, icon_hint: string, category: number, result_type: ResultType, mimetype: string, title: string, comment: string, dnd_uri: string, metadata: ({ [key: string]: any } | GLib.HashTable<string, GLib.Variant>)): ScopeResult;

        /**
         * @param variant 
         */
        static create_from_variant(variant: GLib.Variant): ScopeResult;
    }


    /**
     * @gir-type Struct
     */
    class SearchContext {
        static $gtype: GObject.GType<SearchContext>;

        // Fields
        search_query: string;

        search_type: SearchType;

        filter_state: FilterSet;

        search_metadata: SearchMetadata;

        result_set: ResultSet;

        cancellable: Cancellable;

        // Static methods
        /**
         * @param search_query 
         * @param search_type 
         * @param filter_state 
         * @param metadata 
         * @param result_set 
         * @param cancellable 
         */
        static create(search_query: string, search_type: SearchType, filter_state: FilterSet, metadata: ({ [key: string]: any } | GLib.HashTable<string, GLib.Variant>), result_set: ResultSet, cancellable: Cancellable): SearchContext;

        // Methods
        /**
         * @param metadata 
         */
        set_search_metadata(metadata: SearchMetadata): void;
    }


    /**
     * @gir-type Struct
     */
    class PlaylistDetails {
        static $gtype: GObject.GType<PlaylistDetails>;

        // Fields
        id: never;

        name: string;

        icon_name: string;
    }


    /**
     * @gir-type Struct
     */
    class ActivePlaylistContainer {
        static $gtype: GObject.GType<ActivePlaylistContainer>;

        // Fields
        valid: boolean;
    }


    /**
     * Name of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
     */
    const __name__: string;

    /**
     * Version of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
     */
    const __version__: string;
}

export default Unity;

// END
