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

    export namespace CategoryType {
        export const $gtype: GObject.GType<CategoryType>;
    }

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

    export namespace IconSizeHint {
        export const $gtype: GObject.GType<IconSizeHint>;
    }

    enum IconSizeHint {
        DEFAULT,
        SMALL,
        LARGE,
    }

    export namespace HandledType {
        export const $gtype: GObject.GType<HandledType>;
    }

    enum HandledType {
        NOT_HANDLED,
        SHOW_DASH,
        HIDE_DASH,
        GOTO_DASH_URI,
        SHOW_PREVIEW,
    }

    export namespace CategoryRenderer {
        export const $gtype: GObject.GType<CategoryRenderer>;
    }

    enum CategoryRenderer {
        VERTICAL_TILE,
        HORIZONTAL_TILE,
        LIST_TILE,
        FLOW,
    }

    export namespace FilterRenderer {
        export const $gtype: GObject.GType<FilterRenderer>;
    }

    enum FilterRenderer {
        CHECK_OPTIONS,
        RADIO_OPTIONS,
        MULTIRANGE,
        RATINGS,
        CHECK_OPTIONS_COMPACT,
    }

    export namespace LayoutHint {
        export const $gtype: GObject.GType<LayoutHint>;
    }

    enum LayoutHint {
        NONE,
        LEFT,
        RIGHT,
        TOP,
        BOTTOM,
    }

    export namespace SearchType {
        export const $gtype: GObject.GType<SearchType>;
    }

    enum SearchType {
        DEFAULT,
        GLOBAL,
        N_TYPES,
    }

    export namespace PlaybackState {
        export const $gtype: GObject.GType<PlaybackState>;
    }

    enum PlaybackState {
        PLAYING,
        PAUSED,
    }

    export namespace OptionsFilterSortType {
        export const $gtype: GObject.GType<OptionsFilterSortType>;
    }

    enum OptionsFilterSortType {
        MANUAL,
        DISPLAY_NAME,
        ID,
    }

    export namespace PreferencesManagerRemoteContent {
        export const $gtype: GObject.GType<PreferencesManagerRemoteContent>;
    }

    enum PreferencesManagerRemoteContent {
        ALL,
        NONE,
    }

    export namespace MusicPreviewTrackState {
        export const $gtype: GObject.GType<MusicPreviewTrackState>;
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
     */
    function io_read_stream_async(
        input: Gio.InputStream,
        io_priority: number,
        cancellable: Gio.Cancellable,
    ): globalThis.Promise<[Uint8Array, number]>;
    /**
     * <para>Asynchronously read a stream into memory. This method will close the input stream when done.</para>
     * @param input
     * @param io_priority
     * @param cancellable
     * @param _callback_
     */
    function io_read_stream_async(
        input: Gio.InputStream,
        io_priority: number,
        cancellable: Gio.Cancellable,
        _callback_: Gio.AsyncReadyCallback<Gio.InputStream>,
    ): void;
    /**
     * <para>Asynchronously read a stream into memory. This method will close the input stream when done.</para>
     * @param input
     * @param io_priority
     * @param cancellable
     * @param _callback_
     */
    function io_read_stream_async(
        input: Gio.InputStream,
        io_priority: number,
        cancellable: Gio.Cancellable,
        _callback_: Gio.AsyncReadyCallback<Gio.InputStream>,
    ): globalThis.Promise<[Uint8Array, number]> | void;
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
    function io_open_from_dirs(
        filename: string,
        dirs: string[],
        _callback_: Gio.AsyncReadyCallback<string>,
    ): globalThis.Promise<Gio.FileInputStream> | void;
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
    function io_open_from_data_dirs(
        filename: string,
        _callback_: Gio.AsyncReadyCallback<string>,
    ): globalThis.Promise<Gio.FileInputStream> | void;
    function io_open_from_data_dirs_finish(_res_: Gio.AsyncResult): Gio.FileInputStream;
    function io_get_system_data_dirs(): string[];
    namespace AppInfoManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            changed: (arg0: string, arg1: Gio.AppInfo) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * <para>A singleton class that caches GLib.AppInfo objects. Singletons are evil, yes, but this on slightly less so because the exposed API is immutable.
     * </para>
     * <para>To detect when any of the managed AppInfo objects changes, appears, or goes away listen for the &apos;changed&apos; signal.</para>
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

        connect<K extends keyof AppInfoManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AppInfoManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AppInfoManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AppInfoManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AppInfoManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AppInfoManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
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
        lookup_async(id: string, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<Gio.AppInfo> | void;
        lookup_finish(_res_: Gio.AsyncResult): Gio.AppInfo;
        clear(): void;
    }

    namespace AnnotatedIcon {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::ribbon': (pspec: GObject.ParamSpec) => void;
            'notify::category': (pspec: GObject.ParamSpec) => void;
            'notify::size-hint': (pspec: GObject.ParamSpec) => void;
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

        static ['new'](base_icon: Gio.Icon): AnnotatedIcon;

        // Signals

        connect<K extends keyof AnnotatedIcon.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AnnotatedIcon.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AnnotatedIcon.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AnnotatedIcon.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AnnotatedIcon.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AnnotatedIcon.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        to_string(): string;
    }

    namespace Inspector {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::unity-running': (pspec: GObject.ParamSpec) => void;
            'notify::unity-bus-name': (pspec: GObject.ParamSpec) => void;
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
     */
    class Inspector extends GObject.Object {
        static $gtype: GObject.GType<Inspector>;

        // Properties

        /**
         * <para>Boolean property determining whether Unity is running or not. You can use this property to determine whether Unity is running or not.</para>
         */
        get unity_running(): boolean;
        /**
         * <para>Boolean property determining whether Unity is running or not. You can use this property to determine whether Unity is running or not.</para>
         */
        get unityRunning(): boolean;
        /**
         * <para>Property holding the unique DBus name of the Unity process if Unity is running, or null otherwise.</para>
         */
        get unity_bus_name(): string;
        /**
         * <para>Property holding the unique DBus name of the Unity process if Unity is running, or null otherwise.</para>
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

        connect<K extends keyof Inspector.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Inspector.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Inspector.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Inspector.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Inspector.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Inspector.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
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
            'notify::app-uri': (pspec: GObject.ParamSpec) => void;
            'notify::count': (pspec: GObject.ParamSpec) => void;
            'notify::count-visible': (pspec: GObject.ParamSpec) => void;
            'notify::progress': (pspec: GObject.ParamSpec) => void;
            'notify::progress-visible': (pspec: GObject.ParamSpec) => void;
            'notify::urgent': (pspec: GObject.ParamSpec) => void;
            'notify::quicklist': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Dee.Serializable.ConstructorProps {
            app_uri: string;
            appUri: string;
            count: number;
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
     */
    class LauncherEntry extends GObject.Object implements Dee.Serializable {
        static $gtype: GObject.GType<LauncherEntry>;

        // Properties

        get app_uri(): string;
        set app_uri(val: string);
        get appUri(): string;
        set appUri(val: string);
        get count(): number;
        set count(val: number);
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

        connect<K extends keyof LauncherEntry.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LauncherEntry.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof LauncherEntry.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LauncherEntry.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof LauncherEntry.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LauncherEntry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_for_app_uri(app_uri: string): LauncherEntry;
        static get_for_desktop_id(desktop_id: string): LauncherEntry;
        static get_for_desktop_file(desktop_file: string): LauncherEntry;

        // Inherited methods
        /**
         * Build an externalized form of `self` which can be used together with
         * dee_serializable_parse_external() to rebuild a copy of `self`.
         *
         * It is important to note that the variant returned from this method does
         * not have the same type signature as returned from a call to
         * dee_serializable_serialize(). Externalization will wrap the serialized data
         * in a container format with versioning information and headers with type
         * information.
         * @returns A floating reference to a #GVariant with the externalized data.
         */
        externalize(): GLib.Variant;
        /**
         * Build a clean serialized representation of `self`. The signature of the
         * returned variant is entirely determined by the underlying implementation.
         * You can recreate a serialized instance by calling dee_serializable_parse()
         * provided that you know the correct #GType for the serialized instance.
         * @returns A reference to a #GVariant with               the serialized data. The variants type signature is entirely               dependent of the underlying implementation. Free using               g_variant_unref().
         */
        serialize(): GLib.Variant;
        /**
         * Build a clean serialized representation of `self`. The signature of the
         * returned variant is entirely determined by the underlying implementation.
         * You can recreate a serialized instance by calling dee_serializable_parse()
         * provided that you know the correct #GType for the serialized instance.
         */
        vfunc_serialize(): GLib.Variant;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace LauncherFavorites {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            changed: () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

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

        connect<K extends keyof LauncherFavorites.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LauncherFavorites.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof LauncherFavorites.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LauncherFavorites.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof LauncherFavorites.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LauncherFavorites.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * <para>Get the default singleton Unity.LauncherFavorites instance, creating it dynamically if necessary.</para>
         */
        static get_default(): LauncherFavorites;

        // Methods

        has_app_info(appinfo: Gio.AppInfo): boolean;
        has_app_id(app_id: string): boolean;
        lookup(app_id: string): Gio.AppInfo;
        enumerate_ids(): string[];
        enumerate_app_infos(): Gio.AppInfo[];
    }

    namespace ActivationResponse {
        // Signal signatures
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {
            'notify::handled': (pspec: GObject.ParamSpec) => void;
            'notify::goto-uri': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {
            handled: HandledType;
            goto_uri: string;
            gotoUri: string;
        }
    }

    class ActivationResponse extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<ActivationResponse>;

        // Properties

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

        static ['new'](handled: HandledType, goto_uri: string): ActivationResponse;

        static with_preview(preview: Preview): ActivationResponse;

        // Signals

        connect<K extends keyof ActivationResponse.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ActivationResponse.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ActivationResponse.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ActivationResponse.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ActivationResponse.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ActivationResponse.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Category {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::icon-hint': (pspec: GObject.ParamSpec) => void;
            'notify::default-renderer': (pspec: GObject.ParamSpec) => void;
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

    class Category extends GObject.Object {
        static $gtype: GObject.GType<Category>;

        // Properties

        get name(): string;
        get icon_hint(): Gio.Icon;
        get iconHint(): Gio.Icon;
        get default_renderer(): CategoryRenderer;
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

        static ['new'](name: string, icon_hint: Gio.Icon, renderer: CategoryRenderer): Category;

        // Signals

        connect<K extends keyof Category.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Category.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Category.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Category.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Category.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Category.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Filter {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            changed: () => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::display-name': (pspec: GObject.ParamSpec) => void;
            'notify::icon-hint': (pspec: GObject.ParamSpec) => void;
            'notify::renderer': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::collapsed': (pspec: GObject.ParamSpec) => void;
            'notify::filtering': (pspec: GObject.ParamSpec) => void;
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

    abstract class Filter extends GObject.Object {
        static $gtype: GObject.GType<Filter>;

        // Properties

        get id(): string;
        get display_name(): string;
        set display_name(val: string);
        get displayName(): string;
        set displayName(val: string);
        get icon_hint(): Gio.Icon;
        get iconHint(): Gio.Icon;
        get renderer(): FilterRenderer;
        get visible(): boolean;
        set visible(val: boolean);
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

        connect<K extends keyof Filter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Filter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Filter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Filter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Filter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Filter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace FilterOption {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::display-name': (pspec: GObject.ParamSpec) => void;
            'notify::icon-hint': (pspec: GObject.ParamSpec) => void;
            'notify::active': (pspec: GObject.ParamSpec) => void;
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

    class FilterOption extends GObject.Object {
        static $gtype: GObject.GType<FilterOption>;

        // Properties

        get id(): string;
        get display_name(): string;
        get displayName(): string;
        get icon_hint(): Gio.Icon;
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

        static ['new'](id: string, display_name: string, icon_hint: Gio.Icon, active: boolean): FilterOption;

        // Signals

        connect<K extends keyof FilterOption.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterOption.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FilterOption.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterOption.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FilterOption.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FilterOption.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace OptionsFilter {
        // Signal signatures
        interface SignalSignatures extends Filter.SignalSignatures {
            'notify::sort-type': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::display-name': (pspec: GObject.ParamSpec) => void;
            'notify::icon-hint': (pspec: GObject.ParamSpec) => void;
            'notify::renderer': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::collapsed': (pspec: GObject.ParamSpec) => void;
            'notify::filtering': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Filter.ConstructorProps {
            sort_type: OptionsFilterSortType;
            sortType: OptionsFilterSortType;
        }
    }

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

        static ['new'](): OptionsFilter;

        // Signals

        connect<K extends keyof OptionsFilter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OptionsFilter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OptionsFilter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OptionsFilter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OptionsFilter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<OptionsFilter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        add_option(id: string, display_name: string, icon_hint: Gio.Icon): FilterOption;
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
            'notify::sort-type': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::display-name': (pspec: GObject.ParamSpec) => void;
            'notify::icon-hint': (pspec: GObject.ParamSpec) => void;
            'notify::renderer': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::collapsed': (pspec: GObject.ParamSpec) => void;
            'notify::filtering': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends OptionsFilter.ConstructorProps {}
    }

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

        static ['new'](id: string, display_name: string, icon_hint: Gio.Icon, collapsed: boolean): RadioOptionFilter;
        // Conflicted with Unity.OptionsFilter.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof RadioOptionFilter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RadioOptionFilter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof RadioOptionFilter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RadioOptionFilter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof RadioOptionFilter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RadioOptionFilter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_active_option(): FilterOption;
    }

    namespace CheckOptionFilter {
        // Signal signatures
        interface SignalSignatures extends OptionsFilter.SignalSignatures {
            'notify::sort-type': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::display-name': (pspec: GObject.ParamSpec) => void;
            'notify::icon-hint': (pspec: GObject.ParamSpec) => void;
            'notify::renderer': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::collapsed': (pspec: GObject.ParamSpec) => void;
            'notify::filtering': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends OptionsFilter.ConstructorProps {}
    }

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

        static ['new'](id: string, display_name: string, icon_hint: Gio.Icon, collapsed: boolean): CheckOptionFilter;
        // Conflicted with Unity.OptionsFilter.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof CheckOptionFilter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CheckOptionFilter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CheckOptionFilter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CheckOptionFilter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CheckOptionFilter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CheckOptionFilter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace CheckOptionFilterCompact {
        // Signal signatures
        interface SignalSignatures extends OptionsFilter.SignalSignatures {
            'notify::sort-type': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::display-name': (pspec: GObject.ParamSpec) => void;
            'notify::icon-hint': (pspec: GObject.ParamSpec) => void;
            'notify::renderer': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::collapsed': (pspec: GObject.ParamSpec) => void;
            'notify::filtering': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends OptionsFilter.ConstructorProps {}
    }

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

        static ['new'](
            id: string,
            display_name: string,
            icon_hint: Gio.Icon,
            collapsed: boolean,
        ): CheckOptionFilterCompact;
        // Conflicted with Unity.OptionsFilter.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof CheckOptionFilterCompact.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CheckOptionFilterCompact.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CheckOptionFilterCompact.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CheckOptionFilterCompact.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CheckOptionFilterCompact.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CheckOptionFilterCompact.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace RatingsFilter {
        // Signal signatures
        interface SignalSignatures extends Filter.SignalSignatures {
            'notify::rating': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::display-name': (pspec: GObject.ParamSpec) => void;
            'notify::icon-hint': (pspec: GObject.ParamSpec) => void;
            'notify::renderer': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::collapsed': (pspec: GObject.ParamSpec) => void;
            'notify::filtering': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Filter.ConstructorProps {
            rating: number;
        }
    }

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

        static ['new'](id: string, display_name: string, icon_hint: Gio.Icon, collapsed: boolean): RatingsFilter;

        // Signals

        connect<K extends keyof RatingsFilter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RatingsFilter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof RatingsFilter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RatingsFilter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof RatingsFilter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RatingsFilter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace MultiRangeFilter {
        // Signal signatures
        interface SignalSignatures extends OptionsFilter.SignalSignatures {
            'notify::sort-type': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::display-name': (pspec: GObject.ParamSpec) => void;
            'notify::icon-hint': (pspec: GObject.ParamSpec) => void;
            'notify::renderer': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::collapsed': (pspec: GObject.ParamSpec) => void;
            'notify::filtering': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends OptionsFilter.ConstructorProps {}
    }

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

        static ['new'](id: string, display_name: string, icon_hint: Gio.Icon, collapsed: boolean): MultiRangeFilter;
        // Conflicted with Unity.OptionsFilter.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof MultiRangeFilter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MultiRangeFilter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MultiRangeFilter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MultiRangeFilter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MultiRangeFilter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MultiRangeFilter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_first_active(): FilterOption;
        get_last_active(): FilterOption;
    }

    namespace PreferencesManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::remote-content-search': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            remote_content_search: PreferencesManagerRemoteContent;
            remoteContentSearch: PreferencesManagerRemoteContent;
        }
    }

    /**
     * <para>A singleton class that caches different gsettings settings.</para>
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

        connect<K extends keyof PreferencesManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PreferencesManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PreferencesManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PreferencesManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PreferencesManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PreferencesManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
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
            finished: () => void;
            'notify::search-string': (pspec: GObject.ParamSpec) => void;
            'notify::hints': (pspec: GObject.ParamSpec) => void;
            'notify::results-model': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {
            search_string: string;
            searchString: string;
            hints: GLib.HashTable<string, GLib.Variant>;
            results_model: Dee.SerializableModel;
            resultsModel: Dee.SerializableModel;
        }
    }

    class LensSearch extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<LensSearch>;

        // Properties

        get search_string(): string;
        get searchString(): string;
        get hints(): GLib.HashTable<string, GLib.Variant>;
        get results_model(): Dee.SerializableModel;
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

        static ['new'](
            search_string: string,
            hints: { [key: string]: any } | GLib.HashTable<string, GLib.Variant>,
            results_model: Dee.SerializableModel,
        ): LensSearch;

        // Signals

        connect<K extends keyof LensSearch.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LensSearch.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof LensSearch.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LensSearch.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof LensSearch.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LensSearch.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        emit_finished(): void;
        equals(other: LensSearch): boolean;
        set_reply_hint(key: string, variant: GLib.Variant): void;
    }

    namespace Lens {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::active': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::searching': (pspec: GObject.ParamSpec) => void;
            'notify::exported': (pspec: GObject.ParamSpec) => void;
            'notify::search-in-global': (pspec: GObject.ParamSpec) => void;
            'notify::home-lens-default-name': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::dbus-path': (pspec: GObject.ParamSpec) => void;
            'notify::search-hint': (pspec: GObject.ParamSpec) => void;
            'notify::filters': (pspec: GObject.ParamSpec) => void;
            'notify::categories': (pspec: GObject.ParamSpec) => void;
            'notify::merge-strategy': (pspec: GObject.ParamSpec) => void;
            'notify::global-merge-strategy': (pspec: GObject.ParamSpec) => void;
            'notify::sources-display-name': (pspec: GObject.ParamSpec) => void;
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
        get id(): string;
        get dbus_path(): string;
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

        static ['new'](dbus_path_: string, id_: string): Lens;

        // Signals

        connect<K extends keyof Lens.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Lens.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Lens.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Lens.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Lens.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Lens.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        ['export'](): void;
        add_local_scope(scope: Scope): void;
    }

    namespace Preview {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            closed: () => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::subtitle': (pspec: GObject.ParamSpec) => void;
            'notify::description-markup': (pspec: GObject.ParamSpec) => void;
            'notify::image-source-uri': (pspec: GObject.ParamSpec) => void;
            'notify::image': (pspec: GObject.ParamSpec) => void;
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

        connect<K extends keyof Preview.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Preview.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Preview.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Preview.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Preview.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Preview.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        add_action(action: PreviewAction): void;
        add_info(info_hint: InfoHint): void;

        // Inherited methods
        /**
         * Build an externalized form of `self` which can be used together with
         * dee_serializable_parse_external() to rebuild a copy of `self`.
         *
         * It is important to note that the variant returned from this method does
         * not have the same type signature as returned from a call to
         * dee_serializable_serialize(). Externalization will wrap the serialized data
         * in a container format with versioning information and headers with type
         * information.
         * @returns A floating reference to a #GVariant with the externalized data.
         */
        externalize(): GLib.Variant;
        /**
         * Build a clean serialized representation of `self`. The signature of the
         * returned variant is entirely determined by the underlying implementation.
         * You can recreate a serialized instance by calling dee_serializable_parse()
         * provided that you know the correct #GType for the serialized instance.
         * @returns A reference to a #GVariant with               the serialized data. The variants type signature is entirely               dependent of the underlying implementation. Free using               g_variant_unref().
         */
        serialize(): GLib.Variant;
        /**
         * Build a clean serialized representation of `self`. The signature of the
         * returned variant is entirely determined by the underlying implementation.
         * You can recreate a serialized instance by calling dee_serializable_parse()
         * provided that you know the correct #GType for the serialized instance.
         */
        vfunc_serialize(): GLib.Variant;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace PreviewAction {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            activated: (arg0: string) => ActivationResponse;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::display-name': (pspec: GObject.ParamSpec) => void;
            'notify::extra-text': (pspec: GObject.ParamSpec) => void;
            'notify::icon-hint': (pspec: GObject.ParamSpec) => void;
            'notify::layout-hint': (pspec: GObject.ParamSpec) => void;
            'notify::hints': (pspec: GObject.ParamSpec) => void;
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
            hints: GLib.HashTable<string, GLib.Variant>;
        }
    }

    class PreviewAction extends GObject.Object implements Dee.Serializable {
        static $gtype: GObject.GType<PreviewAction>;

        // Properties

        get id(): string;
        get display_name(): string;
        get displayName(): string;
        get extra_text(): string;
        set extra_text(val: string);
        get extraText(): string;
        set extraText(val: string);
        get icon_hint(): Gio.Icon;
        get iconHint(): Gio.Icon;
        get layout_hint(): LayoutHint;
        get layoutHint(): LayoutHint;
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

        static ['new'](id: string, display_name: string, icon_hint: Gio.Icon): PreviewAction;

        static with_layout_hint(
            id: string,
            display_name: string,
            icon_hint: Gio.Icon,
            layout: LayoutHint,
        ): PreviewAction;

        // Signals

        connect<K extends keyof PreviewAction.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PreviewAction.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PreviewAction.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PreviewAction.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PreviewAction.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PreviewAction.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited methods
        /**
         * Build an externalized form of `self` which can be used together with
         * dee_serializable_parse_external() to rebuild a copy of `self`.
         *
         * It is important to note that the variant returned from this method does
         * not have the same type signature as returned from a call to
         * dee_serializable_serialize(). Externalization will wrap the serialized data
         * in a container format with versioning information and headers with type
         * information.
         * @returns A floating reference to a #GVariant with the externalized data.
         */
        externalize(): GLib.Variant;
        /**
         * Build a clean serialized representation of `self`. The signature of the
         * returned variant is entirely determined by the underlying implementation.
         * You can recreate a serialized instance by calling dee_serializable_parse()
         * provided that you know the correct #GType for the serialized instance.
         * @returns A reference to a #GVariant with               the serialized data. The variants type signature is entirely               dependent of the underlying implementation. Free using               g_variant_unref().
         */
        serialize(): GLib.Variant;
        /**
         * Build a clean serialized representation of `self`. The signature of the
         * returned variant is entirely determined by the underlying implementation.
         * You can recreate a serialized instance by calling dee_serializable_parse()
         * provided that you know the correct #GType for the serialized instance.
         */
        vfunc_serialize(): GLib.Variant;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace InfoHint {
        // Signal signatures
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::display-name': (pspec: GObject.ParamSpec) => void;
            'notify::icon-hint': (pspec: GObject.ParamSpec) => void;
            'notify::data': (pspec: GObject.ParamSpec) => void;
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

    class InfoHint extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<InfoHint>;

        // Properties

        get id(): string;
        get display_name(): string;
        get displayName(): string;
        get icon_hint(): Gio.Icon;
        get iconHint(): Gio.Icon;
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

        static ['new'](id: string, display_name: string, icon_hint: Gio.Icon, data: string): InfoHint;

        static with_variant(id: string, display_name: string, icon_hint: Gio.Icon, data: GLib.Variant): InfoHint;

        // Signals

        connect<K extends keyof InfoHint.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InfoHint.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InfoHint.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InfoHint.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InfoHint.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<InfoHint.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace GenericPreview {
        // Signal signatures
        interface SignalSignatures extends Preview.SignalSignatures {
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::subtitle': (pspec: GObject.ParamSpec) => void;
            'notify::description-markup': (pspec: GObject.ParamSpec) => void;
            'notify::image-source-uri': (pspec: GObject.ParamSpec) => void;
            'notify::image': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Preview.ConstructorProps {}
    }

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

        static ['new'](title: string, description: string, image: Gio.Icon): GenericPreview;

        // Signals

        connect<K extends keyof GenericPreview.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GenericPreview.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GenericPreview.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GenericPreview.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GenericPreview.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GenericPreview.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace ApplicationPreview {
        // Signal signatures
        interface SignalSignatures extends Preview.SignalSignatures {
            'notify::app-icon': (pspec: GObject.ParamSpec) => void;
            'notify::license': (pspec: GObject.ParamSpec) => void;
            'notify::copyright': (pspec: GObject.ParamSpec) => void;
            'notify::last-update': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::subtitle': (pspec: GObject.ParamSpec) => void;
            'notify::description-markup': (pspec: GObject.ParamSpec) => void;
            'notify::image-source-uri': (pspec: GObject.ParamSpec) => void;
            'notify::image': (pspec: GObject.ParamSpec) => void;
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

        static ['new'](
            title: string,
            subtitle: string,
            description: string,
            icon: Gio.Icon,
            screenshot: Gio.Icon,
        ): ApplicationPreview;

        // Signals

        connect<K extends keyof ApplicationPreview.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ApplicationPreview.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ApplicationPreview.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ApplicationPreview.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ApplicationPreview.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ApplicationPreview.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        set_rating(rating: number, num_ratings: number): void;
    }

    namespace MusicPreview {
        // Signal signatures
        interface SignalSignatures extends Preview.SignalSignatures {
            play: (arg0: string) => void;
            pause: (arg0: string) => void;
            'notify::current-track-uri': (pspec: GObject.ParamSpec) => void;
            'notify::current-progress': (pspec: GObject.ParamSpec) => void;
            'notify::current-track-state': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::subtitle': (pspec: GObject.ParamSpec) => void;
            'notify::description-markup': (pspec: GObject.ParamSpec) => void;
            'notify::image-source-uri': (pspec: GObject.ParamSpec) => void;
            'notify::image': (pspec: GObject.ParamSpec) => void;
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

        static ['new'](title: string, subtitle: string, image: Gio.Icon): MusicPreview;

        // Signals

        connect<K extends keyof MusicPreview.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MusicPreview.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MusicPreview.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MusicPreview.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MusicPreview.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MusicPreview.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        add_track(track: TrackMetadata): void;
    }

    namespace MoviePreview {
        // Signal signatures
        interface SignalSignatures extends Preview.SignalSignatures {
            'notify::year': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::subtitle': (pspec: GObject.ParamSpec) => void;
            'notify::description-markup': (pspec: GObject.ParamSpec) => void;
            'notify::image-source-uri': (pspec: GObject.ParamSpec) => void;
            'notify::image': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Preview.ConstructorProps {
            year: string;
        }
    }

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

        static ['new'](title: string, subtitle: string, description: string, image: Gio.Icon): MoviePreview;

        // Signals

        connect<K extends keyof MoviePreview.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MoviePreview.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MoviePreview.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MoviePreview.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MoviePreview.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MoviePreview.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        set_rating(rating: number, num_ratings: number): void;
    }

    namespace SocialPreview {
        // Signal signatures
        interface SignalSignatures extends Preview.SignalSignatures {
            'notify::avatar': (pspec: GObject.ParamSpec) => void;
            'notify::content': (pspec: GObject.ParamSpec) => void;
            'notify::sender': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::subtitle': (pspec: GObject.ParamSpec) => void;
            'notify::description-markup': (pspec: GObject.ParamSpec) => void;
            'notify::image-source-uri': (pspec: GObject.ParamSpec) => void;
            'notify::image': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Preview.ConstructorProps {
            avatar: Gio.Icon;
            content: string;
            sender: string;
        }
    }

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

        static ['new'](sender: string, subtitle: string, content: string, avatar: Gio.Icon): SocialPreview;

        // Signals

        connect<K extends keyof SocialPreview.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SocialPreview.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SocialPreview.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SocialPreview.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SocialPreview.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SocialPreview.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        add_comment(comment: SocialPreviewComment): void;
    }

    namespace SocialPreviewComment {
        // Signal signatures
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::text': (pspec: GObject.ParamSpec) => void;
            'notify::time': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {
            id: string;
            name: string;
            text: string;
            time: string;
        }
    }

    class SocialPreviewComment extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<SocialPreviewComment>;

        // Properties

        get id(): string;
        get name(): string;
        get text(): string;
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

        static ['new'](id: string, name: string, text: string, time: string): SocialPreviewComment;

        // Signals

        connect<K extends keyof SocialPreviewComment.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SocialPreviewComment.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SocialPreviewComment.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SocialPreviewComment.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SocialPreviewComment.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SocialPreviewComment.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace AsyncPreview {
        // Signal signatures
        interface SignalSignatures extends Preview.SignalSignatures {
            preview_ready: (arg0: Preview) => void;
            'notify::cancellable': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::subtitle': (pspec: GObject.ParamSpec) => void;
            'notify::description-markup': (pspec: GObject.ParamSpec) => void;
            'notify::image-source-uri': (pspec: GObject.ParamSpec) => void;
            'notify::image': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Preview.ConstructorProps {
            cancellable: Gio.Cancellable;
        }
    }

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

        static ['new'](): AsyncPreview;

        static with_cancellable(cancellable: Gio.Cancellable): AsyncPreview;

        // Signals

        connect<K extends keyof AsyncPreview.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AsyncPreview.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AsyncPreview.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AsyncPreview.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AsyncPreview.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AsyncPreview.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        emit_preview_ready(preview: Preview): void;
    }

    namespace Scope {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            activate_uri: (arg0: string) => ActivationResponse;
            preview_uri: (arg0: string) => Preview;
            filters_changed: () => void;
            active_sources_changed: (arg0: string[]) => void;
            search_changed: (arg0: LensSearch, arg1: SearchType, arg2: Gio.Cancellable) => void;
            generate_search_key: (arg0: LensSearch) => string;
            'notify::active': (pspec: GObject.ParamSpec) => void;
            'notify::exported': (pspec: GObject.ParamSpec) => void;
            'notify::search-in-global': (pspec: GObject.ParamSpec) => void;
            'notify::provides-personal-content': (pspec: GObject.ParamSpec) => void;
            'notify::dbus-path': (pspec: GObject.ParamSpec) => void;
            'notify::sources': (pspec: GObject.ParamSpec) => void;
            'notify::filters': (pspec: GObject.ParamSpec) => void;
            'notify::results-model': (pspec: GObject.ParamSpec) => void;
            'notify::global-results-model': (pspec: GObject.ParamSpec) => void;
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
        get dbus_path(): string;
        get dbusPath(): string;
        get sources(): OptionsFilter;
        set sources(val: OptionsFilter);
        get filters(): Filter[];
        get results_model(): Dee.SerializableModel;
        get resultsModel(): Dee.SerializableModel;
        get global_results_model(): Dee.SerializableModel;
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

        static ['new'](dbus_path_: string): Scope;

        // Signals

        connect<K extends keyof Scope.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Scope.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Scope.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Scope.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Scope.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Scope.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        ['export'](): void;
        get_filter(id: string): Filter;
        /**
         * <para>Invalidates current search and queues new search.</para>
         * <para>This method will invalidate &lpar;and cancel&rpar; last search and queue a new search &lpar;with the same search_string&rpar;. The #UnityScope::search-changed
         *  signal will be emitted immediately in case the Lens managing this scope is active, or as soon as it becomes active.</para>
         * @param search_type Type of search to queue.
         */
        queue_search_changed(search_type: SearchType | null): void;
        /**
         * <para>Invalidates last search.</para>
         * <para>Invalidate last search, so that the next search request will trigger the #UnityScope::search-changed signal even if the search would be
         * otherwise discarded because of unchanged search key.</para>
         * <para>See also: #UnityScope::generate-search-key</para>
         * @param search_type Type of search to invalidate.
         */
        invalidate_search(search_type: SearchType | null): void;
    }

    namespace TrackMetadata {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::uri': (pspec: GObject.ParamSpec) => void;
            'notify::track-no': (pspec: GObject.ParamSpec) => void;
            'notify::artist': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::album': (pspec: GObject.ParamSpec) => void;
            'notify::length': (pspec: GObject.ParamSpec) => void;
            'notify::art-location': (pspec: GObject.ParamSpec) => void;
            'notify::art-icon': (pspec: GObject.ParamSpec) => void;
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

        static ['new'](): TrackMetadata;

        static full(
            uri: string,
            track_no: number,
            title: string,
            artist: string,
            album: string,
            length: number,
        ): TrackMetadata;

        // Signals

        connect<K extends keyof TrackMetadata.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TrackMetadata.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TrackMetadata.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TrackMetadata.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TrackMetadata.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TrackMetadata.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Playlist {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::creation-date': (pspec: GObject.ParamSpec) => void;
            'notify::modification-date': (pspec: GObject.ParamSpec) => void;
            'notify::last-play-date': (pspec: GObject.ParamSpec) => void;
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

    class Playlist extends GObject.Object {
        static $gtype: GObject.GType<Playlist>;

        // Properties

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

        static ['new'](id: string): Playlist;

        // Signals

        connect<K extends keyof Playlist.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Playlist.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Playlist.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Playlist.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Playlist.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Playlist.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace MusicPlayer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            raise: () => void;
            play_pause: () => void;
            previous: () => void;
            next: () => void;
            activate_playlist: (arg0: never) => void;
            'notify::app-info': (pspec: GObject.ParamSpec) => void;
            'notify::desktop-file-name': (pspec: GObject.ParamSpec) => void;
            'notify::is-blacklisted': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::can-go-next': (pspec: GObject.ParamSpec) => void;
            'notify::can-go-previous': (pspec: GObject.ParamSpec) => void;
            'notify::can-play': (pspec: GObject.ParamSpec) => void;
            'notify::can-pause': (pspec: GObject.ParamSpec) => void;
            'notify::current-track': (pspec: GObject.ParamSpec) => void;
            'notify::playback-state': (pspec: GObject.ParamSpec) => void;
            'notify::current-playlist': (pspec: GObject.ParamSpec) => void;
            'notify::track-menu': (pspec: GObject.ParamSpec) => void;
            'notify::player-menu': (pspec: GObject.ParamSpec) => void;
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

    class MusicPlayer extends GObject.Object {
        static $gtype: GObject.GType<MusicPlayer>;

        // Properties

        get app_info(): Gio.AppInfo;
        get appInfo(): Gio.AppInfo;
        get desktop_file_name(): string;
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

        static ['new'](desktop: string): MusicPlayer;

        // Signals

        connect<K extends keyof MusicPlayer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MusicPlayer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MusicPlayer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MusicPlayer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MusicPlayer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MusicPlayer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        ['export'](): void;
        unexport(): void;
        add_playlist(p: Playlist): boolean;
        remove_playlist(p: Playlist): boolean;
        get_playlists(): Playlist[];
        edit_playlist_name(id: string, name: string): void;
    }

    type AppInfoManagerClass = typeof AppInfoManager;
    abstract class AppInfoManagerPrivate {
        static $gtype: GObject.GType<AppInfoManagerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type AnnotatedIconClass = typeof AnnotatedIcon;
    abstract class AnnotatedIconPrivate {
        static $gtype: GObject.GType<AnnotatedIconPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type InspectorClass = typeof Inspector;
    abstract class InspectorPrivate {
        static $gtype: GObject.GType<InspectorPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type LauncherEntryClass = typeof LauncherEntry;
    abstract class LauncherEntryPrivate {
        static $gtype: GObject.GType<LauncherEntryPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type LauncherFavoritesClass = typeof LauncherFavorites;
    abstract class LauncherFavoritesPrivate {
        static $gtype: GObject.GType<LauncherFavoritesPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ActivationResponseClass = typeof ActivationResponse;
    abstract class ActivationResponsePrivate {
        static $gtype: GObject.GType<ActivationResponsePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type CategoryClass = typeof Category;
    abstract class CategoryPrivate {
        static $gtype: GObject.GType<CategoryPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type FilterClass = typeof Filter;
    abstract class FilterPrivate {
        static $gtype: GObject.GType<FilterPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type FilterOptionClass = typeof FilterOption;
    abstract class FilterOptionPrivate {
        static $gtype: GObject.GType<FilterOptionPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type OptionsFilterClass = typeof OptionsFilter;
    abstract class OptionsFilterPrivate {
        static $gtype: GObject.GType<OptionsFilterPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type RadioOptionFilterClass = typeof RadioOptionFilter;
    abstract class RadioOptionFilterPrivate {
        static $gtype: GObject.GType<RadioOptionFilterPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type CheckOptionFilterClass = typeof CheckOptionFilter;
    abstract class CheckOptionFilterPrivate {
        static $gtype: GObject.GType<CheckOptionFilterPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type CheckOptionFilterCompactClass = typeof CheckOptionFilterCompact;
    abstract class CheckOptionFilterCompactPrivate {
        static $gtype: GObject.GType<CheckOptionFilterCompactPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type RatingsFilterClass = typeof RatingsFilter;
    abstract class RatingsFilterPrivate {
        static $gtype: GObject.GType<RatingsFilterPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type MultiRangeFilterClass = typeof MultiRangeFilter;
    abstract class MultiRangeFilterPrivate {
        static $gtype: GObject.GType<MultiRangeFilterPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type PreferencesManagerClass = typeof PreferencesManager;
    abstract class PreferencesManagerPrivate {
        static $gtype: GObject.GType<PreferencesManagerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type LensSearchClass = typeof LensSearch;
    abstract class LensSearchPrivate {
        static $gtype: GObject.GType<LensSearchPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type LensClass = typeof Lens;
    abstract class LensPrivate {
        static $gtype: GObject.GType<LensPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type PreviewClass = typeof Preview;
    abstract class PreviewPrivate {
        static $gtype: GObject.GType<PreviewPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type PreviewActionClass = typeof PreviewAction;
    abstract class PreviewActionPrivate {
        static $gtype: GObject.GType<PreviewActionPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type InfoHintClass = typeof InfoHint;
    abstract class InfoHintPrivate {
        static $gtype: GObject.GType<InfoHintPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type GenericPreviewClass = typeof GenericPreview;
    abstract class GenericPreviewPrivate {
        static $gtype: GObject.GType<GenericPreviewPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ApplicationPreviewClass = typeof ApplicationPreview;
    abstract class ApplicationPreviewPrivate {
        static $gtype: GObject.GType<ApplicationPreviewPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type MusicPreviewClass = typeof MusicPreview;
    abstract class MusicPreviewPrivate {
        static $gtype: GObject.GType<MusicPreviewPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type MoviePreviewClass = typeof MoviePreview;
    abstract class MoviePreviewPrivate {
        static $gtype: GObject.GType<MoviePreviewPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SocialPreviewClass = typeof SocialPreview;
    abstract class SocialPreviewPrivate {
        static $gtype: GObject.GType<SocialPreviewPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class CommentPrivate {
        static $gtype: GObject.GType<CommentPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type AsyncPreviewClass = typeof AsyncPreview;
    abstract class AsyncPreviewPrivate {
        static $gtype: GObject.GType<AsyncPreviewPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ScopeClass = typeof Scope;
    abstract class ScopePrivate {
        static $gtype: GObject.GType<ScopePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type TrackMetadataClass = typeof TrackMetadata;
    abstract class TrackMetadataPrivate {
        static $gtype: GObject.GType<TrackMetadataPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type PlaylistClass = typeof Playlist;
    abstract class PlaylistPrivate {
        static $gtype: GObject.GType<PlaylistPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type MusicPlayerClass = typeof MusicPlayer;
    abstract class MusicPlayerPrivate {
        static $gtype: GObject.GType<MusicPlayerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type MergeStrategyIface = typeof MergeStrategy;
    class PlaylistDetails {
        static $gtype: GObject.GType<PlaylistDetails>;

        // Fields

        id: never;
        name: string;
        icon_name: string;

        // Constructors

        _init(...args: any[]): void;
    }

    class ActivePlaylistContainer {
        static $gtype: GObject.GType<ActivePlaylistContainer>;

        // Fields

        valid: boolean;

        // Constructors

        _init(...args: any[]): void;
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
             */
            vfunc_merge_result(target: Dee.Model, row: GLib.Variant[]): Dee.ModelIter;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface MergeStrategyNamespace {
        $gtype: GObject.GType<MergeStrategy>;
        prototype: MergeStrategy;
    }
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
