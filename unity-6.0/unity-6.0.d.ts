
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
     * Unity-6.0
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
        VERTICAL_TILE,
        HORIZONTAL_TILE,
        LIST_TILE,
        FLOW,
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
     * <para>Asynchronously read a stream into memory. This method will close the input stream when done.</para>
     * @param input 
     * @param io_priority 
     * @param cancellable 
     */
    function io_read_stream_async(input: Gio.InputStream, io_priority: number, cancellable: Gio.Cancellable): globalThis.Promise<[Uint8Array, (bigint | number)]>;
    /**
     * <para>Asynchronously read a stream into memory. This method will close the input stream when done.</para>
     * @param input 
     * @param io_priority 
     * @param cancellable 
     * @param _callback_ 
     */
    function io_read_stream_async(input: Gio.InputStream, io_priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<Gio.InputStream>): void;
    /**
     * <para>Asynchronously read a stream into memory. This method will close the input stream when done.</para>
     * @param input 
     * @param io_priority 
     * @param cancellable 
     * @param _callback_ 
     */
    function io_read_stream_async(input: Gio.InputStream, io_priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<Gio.InputStream>): (globalThis.Promise<[Uint8Array, (bigint | number)]> | void);

    /**
     * @param _res_ 
     */
    function io_read_stream_finish(_res_: Gio.AsyncResult): [Uint8Array, number];

    /**
     * <para>Asynchronously looks for a file with base name &apos;filename&apos; in all the directories defined in &apos;dirs&apos; and returns a file input 
     * stream for it.</para>
     * <para>If the file can not be found this method returns null.</para>
     * @param filename 
     * @param dirs 
     */
    function io_open_from_dirs(filename: string, dirs: string[]): globalThis.Promise<Gio.FileInputStream>;
    /**
     * <para>Asynchronously looks for a file with base name &apos;filename&apos; in all the directories defined in &apos;dirs&apos; and returns a file input 
     * stream for it.</para>
     * <para>If the file can not be found this method returns null.</para>
     * @param filename 
     * @param dirs 
     * @param _callback_ 
     */
    function io_open_from_dirs(filename: string, dirs: string[], _callback_: Gio.AsyncReadyCallback<string>): void;
    /**
     * <para>Asynchronously looks for a file with base name &apos;filename&apos; in all the directories defined in &apos;dirs&apos; and returns a file input 
     * stream for it.</para>
     * <para>If the file can not be found this method returns null.</para>
     * @param filename 
     * @param dirs 
     * @param _callback_ 
     */
    function io_open_from_dirs(filename: string, dirs: string[], _callback_: Gio.AsyncReadyCallback<string>): (globalThis.Promise<Gio.FileInputStream> | void);

    /**
     * @param _res_ 
     */
    function io_open_from_dirs_finish(_res_: Gio.AsyncResult): Gio.FileInputStream;

    /**
     * <para>Like open_from_dirs&lpar;&rpar; but scans first the user data dir and then the system data dirs as defined by the XDG_DATA_DIRS environment 
     * variable.</para>
     * @param filename 
     */
    function io_open_from_data_dirs(filename: string): globalThis.Promise<Gio.FileInputStream>;
    /**
     * <para>Like open_from_dirs&lpar;&rpar; but scans first the user data dir and then the system data dirs as defined by the XDG_DATA_DIRS environment 
     * variable.</para>
     * @param filename 
     * @param _callback_ 
     */
    function io_open_from_data_dirs(filename: string, _callback_: Gio.AsyncReadyCallback<string>): void;
    /**
     * <para>Like open_from_dirs&lpar;&rpar; but scans first the user data dir and then the system data dirs as defined by the XDG_DATA_DIRS environment 
     * variable.</para>
     * @param filename 
     * @param _callback_ 
     */
    function io_open_from_data_dirs(filename: string, _callback_: Gio.AsyncReadyCallback<string>): (globalThis.Promise<Gio.FileInputStream> | void);

    /**
     * @param _res_ 
     */
    function io_open_from_data_dirs_finish(_res_: Gio.AsyncResult): Gio.FileInputStream;

    function io_get_system_data_dirs(): string[];

    namespace AppInfoManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * <para>Emitted whenever an AppInfo in any of the monitored paths change. Note that &commat;new_appinfo may be null in case it has been removed.</para>
             * @signal
             */
            changed: (arg0: string, arg1: Gio.AppInfo) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * <para>A singleton class that caches GLib.AppInfo objects. Singletons are evil, yes, but this on slightly less so because the exposed API is immutable.
     * </para>
     * <para>To detect when any of the managed AppInfo objects changes, appears, or goes away listen for the &apos;changed&apos; signal.</para>
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

        /**
         * <para>Get a ref to the singleton AppInfoManager</para>
         */
        static get_default(): AppInfoManager;

        // Methods
        /**
         * <para>Look up an AppInfo given its desktop id or absolute path. The desktop id is the base filename of the .desktop file for the application 
         * including the .desktop extension.</para>
         * <para>If the AppInfo is not already cached this method will do synchronous IO to look it up.</para>
         * @param id 
         */
        lookup(id: string): Gio.AppInfo;

        /**
         * <para>Look up XDG categories for for desktop id or file path &commat;id. Returns null if id is not found. This method will do sync IO if the desktop 
         * file for &commat;id is not already cached. So if you are living in an async world you must first do an async call to lookup_async&lpar;id&rpar; 
         * before calling this method, in which case no sync io will be done.</para>
         * @param id 
         */
        get_categories(id: string): string[];

        /**
         * <para>Look up keywords for for desktop id or file path &commat;id. The keywords will be an amalgamation of the X-GNOME-Keywords and X-AppInstall-
         * Keywords fields from the .desktopfile. Returns null if id is not found. This method will do sync IO if the desktop file for &commat;id is not already 
         * cached. So if you are living in an async world you must first do an async call to lookup_async&lpar;id&rpar; before calling this method, in which 
         * case no sync io will be done.</para>
         * @param id 
         */
        get_keywords(id: string): string[];

        /**
         * <para>Look up the full path to the desktop file for desktop id &commat;id. Returns null if &commat;id is not found. This method will do sync IO if 
         * the desktop file for &commat;id is not already cached. So if you are living in an async world you must first do an async call to lookup_async&lpar;id
         * &rpar; before calling this method, in which case no sync io will be done.</para>
         * @param id 
         */
        get_path(id: string): string;

        /**
         * <para>Look up an AppInfo given its desktop id or absolute path. The desktop id is the base filename of the .desktop file for the application 
         * including the .desktop extension.</para>
         * <para>If the AppInfo is not already cached this method will do asynchronous IO to look it up.</para>
         * @param id 
         */
        lookup_async(id: string): globalThis.Promise<Gio.AppInfo>;

        /**
         * <para>Look up an AppInfo given its desktop id or absolute path. The desktop id is the base filename of the .desktop file for the application 
         * including the .desktop extension.</para>
         * <para>If the AppInfo is not already cached this method will do asynchronous IO to look it up.</para>
         * @param id 
         * @param _callback_ 
         */
        lookup_async(id: string, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * <para>Look up an AppInfo given its desktop id or absolute path. The desktop id is the base filename of the .desktop file for the application 
         * including the .desktop extension.</para>
         * <para>If the AppInfo is not already cached this method will do asynchronous IO to look it up.</para>
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
        to_string(): string;
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
     * <para>The Unity.Inspector is a singleton that can be used to inspect the state of Unity.</para>
     * <para>One of the most basic and most useful applications of the inspector is to check if Unity is running or not.</para>
     * @gir-type Class
     */
    class Inspector extends GObject.Object {
        static $gtype: GObject.GType<Inspector>;

        // Properties
        /**
         * <para>Boolean property determining whether Unity is running or not. You can use this property to determine whether Unity is running or not.</para>
         * @read-only
         */
        get unity_running(): boolean;

        /**
         * <para>Boolean property determining whether Unity is running or not. You can use this property to determine whether Unity is running or not.</para>
         * @read-only
         */
        get unityRunning(): boolean;

        /**
         * <para>Property holding the unique DBus name of the Unity process if Unity is running, or null otherwise.</para>
         * @read-only
         */
        get unity_bus_name(): string;

        /**
         * <para>Property holding the unique DBus name of the Unity process if Unity is running, or null otherwise.</para>
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
        /**
         * <para>Get the default singleton Unity.Inspector instance, creating it dynamically if necessary.</para>
         */
        static get_default(): Inspector;
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
     * <para>This class represents your control point for your application&apos;s icon in the Unity Launcher. You can control properties such as a counter, 
     * progress, or emblem that will be overlaid on your application&apos;s launcher icon. You can also set a quicklist on it by setting the &quot;quicklist
     * &quot; property to point at the Dbusmenu.Menuitem which is the root of your quicklist.</para>
     * <para>Create a LauncherEntry by giving your desktop file id to the constructor &lpar;eg. &quot;myapp.desktop&quot;&rpar;.</para>
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
        /**
         * <para>Get the default singleton Unity.LauncherFavorites instance, creating it dynamically if necessary.</para>
         */
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


    namespace ActivationResponse {
        // Signal signatures
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {
            "notify::handled": (pspec: GObject.ParamSpec) => void;
            "notify::goto-uri": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {
            handled: HandledType;
            goto_uri: string;
            gotoUri: string;
        }
    }

    /**
     * @gir-type Class
     */
    class ActivationResponse extends GObject.InitiallyUnowned {
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
    }


    namespace Category {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::icon-hint": (pspec: GObject.ParamSpec) => void;
            "notify::default-renderer": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
            icon_hint: Gio.Icon;
            iconHint: Gio.Icon;
            default_renderer: CategoryRenderer;
            defaultRenderer: CategoryRenderer;
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

        static ["new"](name: string, icon_hint: Gio.Icon, renderer: CategoryRenderer): Category;

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
        interface ConstructorProps extends GObject.Object.ConstructorProps {
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
    abstract class Filter extends GObject.Object {
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

        /**
         * @construct-only
         */
        get collapsed(): boolean;

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
    }


    namespace OptionsFilter {
        // Signal signatures
        interface SignalSignatures extends Filter.SignalSignatures {
            "notify::sort-type": (pspec: GObject.ParamSpec) => void;
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
         * <para>Removes a FilterOption from the OptionsFilter.</para>
         * @param id 
         * @returns true if a FilterOption was removed, false if FilterOption with given id couldn&apos;t be found.
         */
        remove_option(id: string): boolean;
    }


    namespace RadioOptionFilter {
        // Signal signatures
        interface SignalSignatures extends OptionsFilter.SignalSignatures {
            "notify::sort-type": (pspec: GObject.ParamSpec) => void;
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
    }


    namespace MultiRangeFilter {
        // Signal signatures
        interface SignalSignatures extends OptionsFilter.SignalSignatures {
            "notify::sort-type": (pspec: GObject.ParamSpec) => void;
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
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            remote_content_search: PreferencesManagerRemoteContent;
            remoteContentSearch: PreferencesManagerRemoteContent;
        }
    }

    /**
     * <para>A singleton class that caches different gsettings settings.</para>
     * @gir-type Class
     */
    class PreferencesManager extends GObject.Object {
        static $gtype: GObject.GType<PreferencesManager>;

        // Properties
        get remote_content_search(): PreferencesManagerRemoteContent;
        set remote_content_search(val: PreferencesManagerRemoteContent);

        get remoteContentSearch(): PreferencesManagerRemoteContent;
        set remoteContentSearch(val: PreferencesManagerRemoteContent);

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
        /**
         * <para>Get a ref to the singleton PreferencesManager</para>
         */
        static get_default(): PreferencesManager;
    }


    namespace LensSearch {
        // Signal signatures
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {
            /**
             * @signal
             */
            finished: () => void;
            "notify::search-string": (pspec: GObject.ParamSpec) => void;
            "notify::hints": (pspec: GObject.ParamSpec) => void;
            "notify::results-model": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {
            search_string: string;
            searchString: string;
            hints: ({ [key: string]: any } | GLib.HashTable<string, GLib.Variant>);
            results_model: Dee.SerializableModel;
            resultsModel: Dee.SerializableModel;
        }
    }

    /**
     * @gir-type Class
     */
    class LensSearch extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<LensSearch>;

        // Properties
        /**
         * @construct-only
         */
        get search_string(): string;

        /**
         * @construct-only
         */
        get searchString(): string;

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
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LensSearch.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<LensSearch.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](search_string: string, hints: ({ [key: string]: any } | GLib.HashTable<string, GLib.Variant>), results_model: Dee.SerializableModel): LensSearch;

        // Signals
        /** @signal */
        connect<K extends keyof LensSearch.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LensSearch.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof LensSearch.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LensSearch.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof LensSearch.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<LensSearch.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        emit_finished(): void;

        /**
         * @param other 
         */
        equals(other: LensSearch): boolean;

        /**
         * @param key 
         * @param variant 
         */
        set_reply_hint(key: string, variant: GLib.Variant): void;
    }


    namespace Lens {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::searching": (pspec: GObject.ParamSpec) => void;
            "notify::exported": (pspec: GObject.ParamSpec) => void;
            "notify::search-in-global": (pspec: GObject.ParamSpec) => void;
            "notify::home-lens-default-name": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::dbus-path": (pspec: GObject.ParamSpec) => void;
            "notify::search-hint": (pspec: GObject.ParamSpec) => void;
            "notify::filters": (pspec: GObject.ParamSpec) => void;
            "notify::categories": (pspec: GObject.ParamSpec) => void;
            "notify::merge-strategy": (pspec: GObject.ParamSpec) => void;
            "notify::global-merge-strategy": (pspec: GObject.ParamSpec) => void;
            "notify::sources-display-name": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            active: boolean;
            visible: boolean;
            searching: boolean;
            exported: boolean;
            search_in_global: boolean;
            searchInGlobal: boolean;
            home_lens_default_name: string;
            homeLensDefaultName: string;
            id: string;
            dbus_path: string;
            dbusPath: string;
            search_hint: string;
            searchHint: string;
            filters: Filter[];
            categories: Category[];
            merge_strategy: MergeStrategy;
            mergeStrategy: MergeStrategy;
            global_merge_strategy: MergeStrategy;
            globalMergeStrategy: MergeStrategy;
            sources_display_name: string;
            sourcesDisplayName: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Lens extends GObject.Object {
        static $gtype: GObject.GType<Lens>;

        // Properties
        get active(): boolean;
        set active(val: boolean);

        get visible(): boolean;
        set visible(val: boolean);

        get searching(): boolean;
        set searching(val: boolean);

        get exported(): boolean;
        set exported(val: boolean);

        get search_in_global(): boolean;
        set search_in_global(val: boolean);

        get searchInGlobal(): boolean;
        set searchInGlobal(val: boolean);

        get home_lens_default_name(): string;
        set home_lens_default_name(val: string);

        get homeLensDefaultName(): string;
        set homeLensDefaultName(val: string);

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

        get search_hint(): string;
        set search_hint(val: string);

        get searchHint(): string;
        set searchHint(val: string);

        get filters(): Filter[];
        set filters(val: Filter[]);

        get categories(): Category[];
        set categories(val: Category[]);

        get merge_strategy(): MergeStrategy;
        set merge_strategy(val: MergeStrategy);

        get mergeStrategy(): MergeStrategy;
        set mergeStrategy(val: MergeStrategy);

        get global_merge_strategy(): MergeStrategy;
        set global_merge_strategy(val: MergeStrategy);

        get globalMergeStrategy(): MergeStrategy;
        set globalMergeStrategy(val: MergeStrategy);

        get sources_display_name(): string;
        set sources_display_name(val: string);

        get sourcesDisplayName(): string;
        set sourcesDisplayName(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Lens.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Lens.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](dbus_path_: string, id_: string): Lens;

        // Signals
        /** @signal */
        connect<K extends keyof Lens.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Lens.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Lens.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Lens.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Lens.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Lens.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        ["export"](): void;

        /**
         * @param scope 
         */
        add_local_scope(scope: Scope): void;
    }


    namespace Preview {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            closed: () => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::subtitle": (pspec: GObject.ParamSpec) => void;
            "notify::description-markup": (pspec: GObject.ParamSpec) => void;
            "notify::image-source-uri": (pspec: GObject.ParamSpec) => void;
            "notify::image": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Dee.Serializable.ConstructorProps {
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
    abstract class Preview extends GObject.Object implements Dee.Serializable {
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
    }


    namespace MusicPreview {
        // Signal signatures
        interface SignalSignatures extends Preview.SignalSignatures {
            /**
             * @signal
             */
            play: (arg0: string) => void;
            /**
             * @signal
             */
            pause: (arg0: string) => void;
            "notify::current-track-uri": (pspec: GObject.ParamSpec) => void;
            "notify::current-progress": (pspec: GObject.ParamSpec) => void;
            "notify::current-track-state": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::subtitle": (pspec: GObject.ParamSpec) => void;
            "notify::description-markup": (pspec: GObject.ParamSpec) => void;
            "notify::image-source-uri": (pspec: GObject.ParamSpec) => void;
            "notify::image": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Preview.ConstructorProps {
            current_track_uri: string;
            currentTrackUri: string;
            current_progress: number;
            currentProgress: number;
            current_track_state: MusicPreviewTrackState;
            currentTrackState: MusicPreviewTrackState;
        }
    }

    /**
     * @gir-type Class
     */
    class MusicPreview extends Preview {
        static $gtype: GObject.GType<MusicPreview>;

        // Properties
        get current_track_uri(): string;
        set current_track_uri(val: string);

        get currentTrackUri(): string;
        set currentTrackUri(val: string);

        get current_progress(): number;
        set current_progress(val: number);

        get currentProgress(): number;
        set currentProgress(val: number);

        get current_track_state(): MusicPreviewTrackState;
        set current_track_state(val: MusicPreviewTrackState);

        get currentTrackState(): MusicPreviewTrackState;
        set currentTrackState(val: MusicPreviewTrackState);

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
    }


    namespace AsyncPreview {
        // Signal signatures
        interface SignalSignatures extends Preview.SignalSignatures {
            /**
             * @signal
             */
            preview_ready: (arg0: Preview) => void;
            "notify::cancellable": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::subtitle": (pspec: GObject.ParamSpec) => void;
            "notify::description-markup": (pspec: GObject.ParamSpec) => void;
            "notify::image-source-uri": (pspec: GObject.ParamSpec) => void;
            "notify::image": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Preview.ConstructorProps {
            cancellable: Gio.Cancellable;
        }
    }

    /**
     * @gir-type Class
     */
    class AsyncPreview extends Preview {
        static $gtype: GObject.GType<AsyncPreview>;

        // Properties
        get cancellable(): Gio.Cancellable;
        set cancellable(val: Gio.Cancellable);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AsyncPreview.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AsyncPreview.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): AsyncPreview;

        static with_cancellable(cancellable: Gio.Cancellable): AsyncPreview;

        // Signals
        /** @signal */
        connect<K extends keyof AsyncPreview.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AsyncPreview.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AsyncPreview.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AsyncPreview.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AsyncPreview.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AsyncPreview.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param preview 
         */
        emit_preview_ready(preview: Preview): void;
    }


    namespace Scope {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            activate_uri: (arg0: string) => ActivationResponse;
            /**
             * @signal
             */
            preview_uri: (arg0: string) => Preview;
            /**
             * @signal
             */
            filters_changed: () => void;
            /**
             * @signal
             */
            active_sources_changed: (arg0: string[]) => void;
            /**
             * @signal
             */
            search_changed: (arg0: LensSearch, arg1: SearchType, arg2: Gio.Cancellable) => void;
            /**
             * @signal
             */
            generate_search_key: (arg0: LensSearch) => string;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::exported": (pspec: GObject.ParamSpec) => void;
            "notify::search-in-global": (pspec: GObject.ParamSpec) => void;
            "notify::provides-personal-content": (pspec: GObject.ParamSpec) => void;
            "notify::dbus-path": (pspec: GObject.ParamSpec) => void;
            "notify::sources": (pspec: GObject.ParamSpec) => void;
            "notify::filters": (pspec: GObject.ParamSpec) => void;
            "notify::results-model": (pspec: GObject.ParamSpec) => void;
            "notify::global-results-model": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            active: boolean;
            exported: boolean;
            search_in_global: boolean;
            searchInGlobal: boolean;
            provides_personal_content: boolean;
            providesPersonalContent: boolean;
            dbus_path: string;
            dbusPath: string;
            sources: OptionsFilter;
            filters: Filter[];
            results_model: Dee.SerializableModel;
            resultsModel: Dee.SerializableModel;
            global_results_model: Dee.SerializableModel;
            globalResultsModel: Dee.SerializableModel;
        }
    }

    /**
     * @gir-type Class
     */
    class Scope extends GObject.Object {
        static $gtype: GObject.GType<Scope>;

        // Properties
        get active(): boolean;
        set active(val: boolean);

        get exported(): boolean;
        set exported(val: boolean);

        get search_in_global(): boolean;
        set search_in_global(val: boolean);

        get searchInGlobal(): boolean;
        set searchInGlobal(val: boolean);

        get provides_personal_content(): boolean;
        set provides_personal_content(val: boolean);

        get providesPersonalContent(): boolean;
        set providesPersonalContent(val: boolean);

        /**
         * @construct-only
         */
        get dbus_path(): string;

        /**
         * @construct-only
         */
        get dbusPath(): string;

        get sources(): OptionsFilter;
        set sources(val: OptionsFilter);

        /**
         * @read-only
         */
        get filters(): Filter[];

        /**
         * @read-only
         */
        get results_model(): Dee.SerializableModel;

        /**
         * @read-only
         */
        get resultsModel(): Dee.SerializableModel;

        /**
         * @read-only
         */
        get global_results_model(): Dee.SerializableModel;

        /**
         * @read-only
         */
        get globalResultsModel(): Dee.SerializableModel;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Scope.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Scope.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](dbus_path_: string): Scope;

        // Signals
        /** @signal */
        connect<K extends keyof Scope.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Scope.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Scope.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Scope.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Scope.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Scope.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        ["export"](): void;

        /**
         * @param id 
         */
        get_filter(id: string): Filter;

        /**
         * <para>Invalidates current search and queues new search.</para>
         * <para>This method will invalidate &lpar;and cancel&rpar; last search and queue a new search &lpar;with the same search_string&rpar;. The {@link Unity.Scope.SignalSignatures.search_changed | Unity.Scope::search-changed}
         *  signal will be emitted immediately in case the Lens managing this scope is active, or as soon as it becomes active.</para>
         * @param search_type Type of search to queue.
         */
        queue_search_changed(search_type: SearchType): void;

        /**
         * <para>Invalidates last search.</para>
         * <para>Invalidate last search, so that the next search request will trigger the {@link Unity.Scope.SignalSignatures.search_changed | Unity.Scope::search-changed} signal even if the search would be 
         * otherwise discarded because of unchanged search key.</para>
         * <para>See also: {@link Unity.Scope.SignalSignatures.generate_search_key | Unity.Scope::generate-search-key}</para>
         * @param search_type Type of search to invalidate.
         */
        invalidate_search(search_type: SearchType): void;
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
            play_pause: () => void;
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
            activate_playlist: (arg0: never) => void;
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
    type LensSearchClass = typeof LensSearch;

    /**
     * @gir-type Struct
     */
    abstract class LensSearchPrivate {
        static $gtype: GObject.GType<LensSearchPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type LensClass = typeof Lens;

    /**
     * @gir-type Struct
     */
    abstract class LensPrivate {
        static $gtype: GObject.GType<LensPrivate>;
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
     * @gir-type Struct
     */
    abstract class CommentPrivate {
        static $gtype: GObject.GType<CommentPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type AsyncPreviewClass = typeof AsyncPreview;

    /**
     * @gir-type Struct
     */
    abstract class AsyncPreviewPrivate {
        static $gtype: GObject.GType<AsyncPreviewPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ScopeClass = typeof Scope;

    /**
     * @gir-type Struct
     */
    abstract class ScopePrivate {
        static $gtype: GObject.GType<ScopePrivate>;
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
     * @gir-type Alias
     */
    type MergeStrategyIface = typeof MergeStrategy;

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


    namespace MergeStrategy {
        /**
         * Interface for implementing MergeStrategy.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * <para>Virtual method to merge row from source model into target model.</para>
             * @param target The target model to merge a row into
             * @param row An array of variants with the row data for the result
             * @virtual
             */
            vfunc_merge_result(target: Dee.Model, row: GLib.Variant[]): Dee.ModelIter;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    export interface MergeStrategyNamespace {
        $gtype: GObject.GType<MergeStrategy>;
        prototype: MergeStrategy;
    }
    /**
     * @gir-type Interface
     */
    interface MergeStrategy extends GObject.Object, MergeStrategy.Interface {

        // Methods
        /**
         * <para>Virtual method to merge row from source model into target model.</para>
         * @param target The target model to merge a row into
         * @param row An array of variants with the row data for the result
         * @returns A model iter pointing to the row in the target model where &commat;row was added. Or null if the result was discarded
         */
        merge_result(target: Dee.Model, row: GLib.Variant[]): Dee.ModelIter;
    }


    export const MergeStrategy: MergeStrategyNamespace & {
        new (): MergeStrategy; // This allows `obj instanceof MergeStrategy`
    };

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
