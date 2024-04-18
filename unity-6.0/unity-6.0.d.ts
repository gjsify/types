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
     */
    function io_read_stream_async(
        input: Gio.InputStream,
        io_priority: number,
        cancellable: Gio.Cancellable,
    ): Promise<[Uint8Array, number]>;
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
    ): Promise<[Uint8Array, number]> | void;
    function io_read_stream_finish(_res_: Gio.AsyncResult): [Uint8Array, number];
    /**
     * <para>Asynchronously looks for a file with base name &apos;filename&apos; in all the directories defined in &apos;dirs&apos; and returns a file input
     * stream for it.</para>
     * <para>If the file can not be found this method returns null.</para>
     * @param filename
     * @param dirs
     */
    function io_open_from_dirs(filename: string, dirs: string[]): Promise<Gio.FileInputStream>;
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
    ): Promise<Gio.FileInputStream> | void;
    function io_open_from_dirs_finish(_res_: Gio.AsyncResult): Gio.FileInputStream;
    /**
     * <para>Like open_from_dirs&lpar;&rpar; but scans first the user data dir and then the system data dirs as defined by the XDG_DATA_DIRS environment
     * variable.</para>
     * @param filename
     */
    function io_open_from_data_dirs(filename: string): Promise<Gio.FileInputStream>;
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
    ): Promise<Gio.FileInputStream> | void;
    function io_open_from_data_dirs_finish(_res_: Gio.AsyncResult): Gio.FileInputStream;
    function io_get_system_data_dirs(): string[];
    module AppInfoManager {
        // Signal callback interfaces

        interface Changed {
            (id: string, new_appinfo: Gio.AppInfo): void;
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

        // Constructors of Unity.AppInfoManager

        constructor(properties?: Partial<AppInfoManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of Unity.AppInfoManager

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'changed', callback: (_source: this, id: string, new_appinfo: Gio.AppInfo) => void): number;
        connect_after(
            signal: 'changed',
            callback: (_source: this, id: string, new_appinfo: Gio.AppInfo) => void,
        ): number;
        emit(signal: 'changed', id: string, new_appinfo: Gio.AppInfo): void;

        // Own static methods of Unity.AppInfoManager

        static get_instance(): AppInfoManager;
        /**
         * <para>Get a ref to the singleton AppInfoManager</para>
         */
        static get_default(): AppInfoManager;

        // Own methods of Unity.AppInfoManager

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
         * @param _callback_
         */
        lookup_async(id: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        lookup_finish(_res_: Gio.AsyncResult): Gio.AppInfo;
        clear(): void;
    }

    module AnnotatedIcon {
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

        // Own properties of Unity.AnnotatedIcon

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

        // Constructors of Unity.AnnotatedIcon

        constructor(properties?: Partial<AnnotatedIcon.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](base_icon: Gio.Icon): AnnotatedIcon;

        // Own methods of Unity.AnnotatedIcon

        to_string(): string;
    }

    module Inspector {
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

        // Own properties of Unity.Inspector

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

        // Constructors of Unity.Inspector

        constructor(properties?: Partial<Inspector.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own static methods of Unity.Inspector

        /**
         * <para>Get the default singleton Unity.Inspector instance, creating it dynamically if necessary.</para>
         */
        static get_default(): Inspector;
    }

    module LauncherEntry {
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

        // Own properties of Unity.LauncherEntry

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

        // Constructors of Unity.LauncherEntry

        constructor(properties?: Partial<LauncherEntry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own static methods of Unity.LauncherEntry

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
            flags: GObject.BindingFlags,
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
            flags: GObject.BindingFlags,
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
        get_property(property_name: string): any;
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
         *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
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
        set_property(property_name: string, value: any): void;
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
        vfunc_constructed(): void;
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        vfunc_dispose(): void;
        vfunc_finalize(): void;
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
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module LauncherFavorites {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class LauncherFavorites extends GObject.Object {
        static $gtype: GObject.GType<LauncherFavorites>;

        // Constructors of Unity.LauncherFavorites

        constructor(properties?: Partial<LauncherFavorites.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of Unity.LauncherFavorites

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'changed', callback: (_source: this) => void): number;
        connect_after(signal: 'changed', callback: (_source: this) => void): number;
        emit(signal: 'changed'): void;

        // Own static methods of Unity.LauncherFavorites

        /**
         * <para>Get the default singleton Unity.LauncherFavorites instance, creating it dynamically if necessary.</para>
         */
        static get_default(): LauncherFavorites;

        // Own methods of Unity.LauncherFavorites

        has_app_info(appinfo: Gio.AppInfo): boolean;
        has_app_id(app_id: string): boolean;
        lookup(app_id: string): Gio.AppInfo;
        enumerate_ids(): string[];
        enumerate_app_infos(): Gio.AppInfo[];
    }

    module ActivationResponse {
        // Constructor properties interface

        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {
            handled: HandledType;
            goto_uri: string;
            gotoUri: string;
        }
    }

    class ActivationResponse extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<ActivationResponse>;

        // Own properties of Unity.ActivationResponse

        get handled(): HandledType;
        get goto_uri(): string;
        set goto_uri(val: string);
        get gotoUri(): string;
        set gotoUri(val: string);

        // Constructors of Unity.ActivationResponse

        constructor(properties?: Partial<ActivationResponse.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](handled: HandledType, goto_uri: string): ActivationResponse;

        static with_preview(preview: Preview): ActivationResponse;
    }

    module Category {
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

        // Own properties of Unity.Category

        get name(): string;
        get icon_hint(): Gio.Icon;
        get iconHint(): Gio.Icon;
        get default_renderer(): CategoryRenderer;
        get defaultRenderer(): CategoryRenderer;

        // Constructors of Unity.Category

        constructor(properties?: Partial<Category.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, icon_hint: Gio.Icon, renderer: CategoryRenderer): Category;
    }

    module Filter {
        // Signal callback interfaces

        interface Changed {
            (): void;
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

        // Own properties of Unity.Filter

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

        // Constructors of Unity.Filter

        constructor(properties?: Partial<Filter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of Unity.Filter

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'changed', callback: (_source: this) => void): number;
        connect_after(signal: 'changed', callback: (_source: this) => void): number;
        emit(signal: 'changed'): void;
    }

    module FilterOption {
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

        // Own properties of Unity.FilterOption

        get id(): string;
        get display_name(): string;
        get displayName(): string;
        get icon_hint(): Gio.Icon;
        get iconHint(): Gio.Icon;
        get active(): boolean;
        set active(val: boolean);

        // Constructors of Unity.FilterOption

        constructor(properties?: Partial<FilterOption.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: string, display_name: string, icon_hint: Gio.Icon, active: boolean): FilterOption;
    }

    module OptionsFilter {
        // Constructor properties interface

        interface ConstructorProps extends Filter.ConstructorProps {
            sort_type: OptionsFilterSortType;
            sortType: OptionsFilterSortType;
        }
    }

    class OptionsFilter extends Filter {
        static $gtype: GObject.GType<OptionsFilter>;

        // Own properties of Unity.OptionsFilter

        get sort_type(): OptionsFilterSortType;
        set sort_type(val: OptionsFilterSortType);
        get sortType(): OptionsFilterSortType;
        set sortType(val: OptionsFilterSortType);

        // Own fields of Unity.OptionsFilter

        options: FilterOption[];

        // Constructors of Unity.OptionsFilter

        constructor(properties?: Partial<OptionsFilter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): OptionsFilter;

        // Own methods of Unity.OptionsFilter

        add_option(id: string, display_name: string, icon_hint: Gio.Icon): FilterOption;
        get_option(id: string): FilterOption;
        /**
         * <para>Removes a FilterOption from the OptionsFilter.</para>
         * @param id
         * @returns true if a FilterOption was removed, false if FilterOption with given id couldn&apos;t be found.
         */
        remove_option(id: string): boolean;
    }

    module RadioOptionFilter {
        // Constructor properties interface

        interface ConstructorProps extends OptionsFilter.ConstructorProps {}
    }

    class RadioOptionFilter extends OptionsFilter {
        static $gtype: GObject.GType<RadioOptionFilter>;

        // Constructors of Unity.RadioOptionFilter

        constructor(properties?: Partial<RadioOptionFilter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: string, display_name: string, icon_hint: Gio.Icon, collapsed: boolean): RadioOptionFilter;
        // Conflicted with Unity.OptionsFilter.new

        static ['new'](...args: never[]): any;

        // Own methods of Unity.RadioOptionFilter

        get_active_option(): FilterOption;
    }

    module CheckOptionFilter {
        // Constructor properties interface

        interface ConstructorProps extends OptionsFilter.ConstructorProps {}
    }

    class CheckOptionFilter extends OptionsFilter {
        static $gtype: GObject.GType<CheckOptionFilter>;

        // Constructors of Unity.CheckOptionFilter

        constructor(properties?: Partial<CheckOptionFilter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: string, display_name: string, icon_hint: Gio.Icon, collapsed: boolean): CheckOptionFilter;
        // Conflicted with Unity.OptionsFilter.new

        static ['new'](...args: never[]): any;
    }

    module CheckOptionFilterCompact {
        // Constructor properties interface

        interface ConstructorProps extends OptionsFilter.ConstructorProps {}
    }

    class CheckOptionFilterCompact extends OptionsFilter {
        static $gtype: GObject.GType<CheckOptionFilterCompact>;

        // Constructors of Unity.CheckOptionFilterCompact

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
    }

    module RatingsFilter {
        // Constructor properties interface

        interface ConstructorProps extends Filter.ConstructorProps {
            rating: number;
        }
    }

    class RatingsFilter extends Filter {
        static $gtype: GObject.GType<RatingsFilter>;

        // Own properties of Unity.RatingsFilter

        get rating(): number;
        set rating(val: number);

        // Constructors of Unity.RatingsFilter

        constructor(properties?: Partial<RatingsFilter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: string, display_name: string, icon_hint: Gio.Icon, collapsed: boolean): RatingsFilter;
    }

    module MultiRangeFilter {
        // Constructor properties interface

        interface ConstructorProps extends OptionsFilter.ConstructorProps {}
    }

    class MultiRangeFilter extends OptionsFilter {
        static $gtype: GObject.GType<MultiRangeFilter>;

        // Constructors of Unity.MultiRangeFilter

        constructor(properties?: Partial<MultiRangeFilter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: string, display_name: string, icon_hint: Gio.Icon, collapsed: boolean): MultiRangeFilter;
        // Conflicted with Unity.OptionsFilter.new

        static ['new'](...args: never[]): any;

        // Own methods of Unity.MultiRangeFilter

        get_first_active(): FilterOption;
        get_last_active(): FilterOption;
    }

    module PreferencesManager {
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

        // Own properties of Unity.PreferencesManager

        get remote_content_search(): PreferencesManagerRemoteContent;
        set remote_content_search(val: PreferencesManagerRemoteContent);
        get remoteContentSearch(): PreferencesManagerRemoteContent;
        set remoteContentSearch(val: PreferencesManagerRemoteContent);

        // Constructors of Unity.PreferencesManager

        constructor(properties?: Partial<PreferencesManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own static methods of Unity.PreferencesManager

        /**
         * <para>Get a ref to the singleton PreferencesManager</para>
         */
        static get_default(): PreferencesManager;
    }

    module LensSearch {
        // Signal callback interfaces

        interface Finished {
            (): void;
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

        // Own properties of Unity.LensSearch

        get search_string(): string;
        get searchString(): string;
        get hints(): GLib.HashTable<string, GLib.Variant>;
        get results_model(): Dee.SerializableModel;
        get resultsModel(): Dee.SerializableModel;

        // Constructors of Unity.LensSearch

        constructor(properties?: Partial<LensSearch.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            search_string: string,
            hints: { [key: string]: any } | GLib.HashTable<string, GLib.Variant>,
            results_model: Dee.SerializableModel,
        ): LensSearch;

        // Own signals of Unity.LensSearch

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'finished', callback: (_source: this) => void): number;
        connect_after(signal: 'finished', callback: (_source: this) => void): number;
        emit(signal: 'finished'): void;

        // Own methods of Unity.LensSearch

        emit_finished(): void;
        equals(other: LensSearch): boolean;
        set_reply_hint(key: string, variant: GLib.Variant): void;
    }

    module Lens {
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

        // Own properties of Unity.Lens

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

        // Constructors of Unity.Lens

        constructor(properties?: Partial<Lens.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](dbus_path_: string, id_: string): Lens;

        // Own methods of Unity.Lens

        ['export'](): void;
        add_local_scope(scope: Scope): void;
    }

    module Preview {
        // Signal callback interfaces

        interface Closed {
            (): void;
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

        // Own properties of Unity.Preview

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

        // Constructors of Unity.Preview

        constructor(properties?: Partial<Preview.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of Unity.Preview

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'closed', callback: (_source: this) => void): number;
        connect_after(signal: 'closed', callback: (_source: this) => void): number;
        emit(signal: 'closed'): void;

        // Own methods of Unity.Preview

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
            flags: GObject.BindingFlags,
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
            flags: GObject.BindingFlags,
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
        get_property(property_name: string): any;
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
         *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
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
        set_property(property_name: string, value: any): void;
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
        vfunc_constructed(): void;
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        vfunc_dispose(): void;
        vfunc_finalize(): void;
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
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module PreviewAction {
        // Signal callback interfaces

        interface Activated {
            (uri: string): ActivationResponse;
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

        // Own properties of Unity.PreviewAction

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

        // Constructors of Unity.PreviewAction

        constructor(properties?: Partial<PreviewAction.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: string, display_name: string, icon_hint: Gio.Icon): PreviewAction;

        static with_layout_hint(
            id: string,
            display_name: string,
            icon_hint: Gio.Icon,
            layout: LayoutHint,
        ): PreviewAction;

        // Own signals of Unity.PreviewAction

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'activated', callback: (_source: this, uri: string) => ActivationResponse): number;
        connect_after(signal: 'activated', callback: (_source: this, uri: string) => ActivationResponse): number;
        emit(signal: 'activated', uri: string): void;

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
            flags: GObject.BindingFlags,
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
            flags: GObject.BindingFlags,
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
        get_property(property_name: string): any;
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
         *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
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
        set_property(property_name: string, value: any): void;
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
        vfunc_constructed(): void;
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        vfunc_dispose(): void;
        vfunc_finalize(): void;
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
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module InfoHint {
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

        // Own properties of Unity.InfoHint

        get id(): string;
        get display_name(): string;
        get displayName(): string;
        get icon_hint(): Gio.Icon;
        get iconHint(): Gio.Icon;
        get data(): GLib.Variant;

        // Constructors of Unity.InfoHint

        constructor(properties?: Partial<InfoHint.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: string, display_name: string, icon_hint: Gio.Icon, data: string): InfoHint;

        static with_variant(id: string, display_name: string, icon_hint: Gio.Icon, data: GLib.Variant): InfoHint;
    }

    module GenericPreview {
        // Constructor properties interface

        interface ConstructorProps extends Preview.ConstructorProps {}
    }

    class GenericPreview extends Preview {
        static $gtype: GObject.GType<GenericPreview>;

        // Constructors of Unity.GenericPreview

        constructor(properties?: Partial<GenericPreview.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](title: string, description: string, image: Gio.Icon): GenericPreview;
    }

    module ApplicationPreview {
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

        // Own properties of Unity.ApplicationPreview

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

        // Constructors of Unity.ApplicationPreview

        constructor(properties?: Partial<ApplicationPreview.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            title: string,
            subtitle: string,
            description: string,
            icon: Gio.Icon,
            screenshot: Gio.Icon,
        ): ApplicationPreview;

        // Own methods of Unity.ApplicationPreview

        set_rating(rating: number, num_ratings: number): void;
    }

    module MusicPreview {
        // Signal callback interfaces

        interface Play {
            (uri: string): void;
        }

        interface Pause {
            (uri: string): void;
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

        // Own properties of Unity.MusicPreview

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

        // Constructors of Unity.MusicPreview

        constructor(properties?: Partial<MusicPreview.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](title: string, subtitle: string, image: Gio.Icon): MusicPreview;

        // Own signals of Unity.MusicPreview

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'play', callback: (_source: this, uri: string) => void): number;
        connect_after(signal: 'play', callback: (_source: this, uri: string) => void): number;
        emit(signal: 'play', uri: string): void;
        connect(signal: 'pause', callback: (_source: this, uri: string) => void): number;
        connect_after(signal: 'pause', callback: (_source: this, uri: string) => void): number;
        emit(signal: 'pause', uri: string): void;

        // Own methods of Unity.MusicPreview

        add_track(track: TrackMetadata): void;
    }

    module MoviePreview {
        // Constructor properties interface

        interface ConstructorProps extends Preview.ConstructorProps {
            year: string;
        }
    }

    class MoviePreview extends Preview {
        static $gtype: GObject.GType<MoviePreview>;

        // Own properties of Unity.MoviePreview

        get year(): string;
        set year(val: string);

        // Constructors of Unity.MoviePreview

        constructor(properties?: Partial<MoviePreview.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](title: string, subtitle: string, description: string, image: Gio.Icon): MoviePreview;

        // Own methods of Unity.MoviePreview

        set_rating(rating: number, num_ratings: number): void;
    }

    module SocialPreview {
        // Constructor properties interface

        interface ConstructorProps extends Preview.ConstructorProps {
            avatar: Gio.Icon;
            content: string;
            sender: string;
        }
    }

    class SocialPreview extends Preview {
        static $gtype: GObject.GType<SocialPreview>;

        // Own properties of Unity.SocialPreview

        get avatar(): Gio.Icon;
        set avatar(val: Gio.Icon);
        get content(): string;
        set content(val: string);
        get sender(): string;
        set sender(val: string);

        // Constructors of Unity.SocialPreview

        constructor(properties?: Partial<SocialPreview.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](sender: string, subtitle: string, content: string, avatar: Gio.Icon): SocialPreview;

        // Own methods of Unity.SocialPreview

        add_comment(comment: SocialPreviewComment): void;
    }

    module SocialPreviewComment {
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

        // Own properties of Unity.SocialPreviewComment

        get id(): string;
        get name(): string;
        get text(): string;
        get time(): string;

        // Constructors of Unity.SocialPreviewComment

        constructor(properties?: Partial<SocialPreviewComment.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: string, name: string, text: string, time: string): SocialPreviewComment;
    }

    module AsyncPreview {
        // Signal callback interfaces

        interface PreviewReady {
            (preview: Preview): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Preview.ConstructorProps {
            cancellable: Gio.Cancellable;
        }
    }

    class AsyncPreview extends Preview {
        static $gtype: GObject.GType<AsyncPreview>;

        // Own properties of Unity.AsyncPreview

        get cancellable(): Gio.Cancellable;
        set cancellable(val: Gio.Cancellable);

        // Constructors of Unity.AsyncPreview

        constructor(properties?: Partial<AsyncPreview.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): AsyncPreview;

        static with_cancellable(cancellable: Gio.Cancellable): AsyncPreview;

        // Own signals of Unity.AsyncPreview

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'preview_ready', callback: (_source: this, preview: Preview) => void): number;
        connect_after(signal: 'preview_ready', callback: (_source: this, preview: Preview) => void): number;
        emit(signal: 'preview_ready', preview: Preview): void;

        // Own methods of Unity.AsyncPreview

        emit_preview_ready(preview: Preview): void;
    }

    module Scope {
        // Signal callback interfaces

        interface ActivateUri {
            (uri: string): ActivationResponse;
        }

        interface PreviewUri {
            (uri: string): Preview;
        }

        interface FiltersChanged {
            (): void;
        }

        interface ActiveSourcesChanged {
            (active_ids: string[]): void;
        }

        interface SearchChanged {
            (search: LensSearch, search_type: SearchType, cancellable: Gio.Cancellable): void;
        }

        interface GenerateSearchKey {
            (search: LensSearch): string;
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

        // Own properties of Unity.Scope

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

        // Constructors of Unity.Scope

        constructor(properties?: Partial<Scope.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](dbus_path_: string): Scope;

        // Own signals of Unity.Scope

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'activate_uri', callback: (_source: this, uri: string) => ActivationResponse): number;
        connect_after(signal: 'activate_uri', callback: (_source: this, uri: string) => ActivationResponse): number;
        emit(signal: 'activate_uri', uri: string): void;
        connect(signal: 'preview_uri', callback: (_source: this, uri: string) => Preview): number;
        connect_after(signal: 'preview_uri', callback: (_source: this, uri: string) => Preview): number;
        emit(signal: 'preview_uri', uri: string): void;
        connect(signal: 'filters_changed', callback: (_source: this) => void): number;
        connect_after(signal: 'filters_changed', callback: (_source: this) => void): number;
        emit(signal: 'filters_changed'): void;
        connect(signal: 'active_sources_changed', callback: (_source: this, active_ids: string[]) => void): number;
        connect_after(
            signal: 'active_sources_changed',
            callback: (_source: this, active_ids: string[]) => void,
        ): number;
        emit(signal: 'active_sources_changed', active_ids: string[]): void;
        connect(
            signal: 'search_changed',
            callback: (
                _source: this,
                search: LensSearch,
                search_type: SearchType,
                cancellable: Gio.Cancellable,
            ) => void,
        ): number;
        connect_after(
            signal: 'search_changed',
            callback: (
                _source: this,
                search: LensSearch,
                search_type: SearchType,
                cancellable: Gio.Cancellable,
            ) => void,
        ): number;
        emit(signal: 'search_changed', search: LensSearch, search_type: SearchType, cancellable: Gio.Cancellable): void;
        connect(signal: 'generate_search_key', callback: (_source: this, search: LensSearch) => string): number;
        connect_after(signal: 'generate_search_key', callback: (_source: this, search: LensSearch) => string): number;
        emit(signal: 'generate_search_key', search: LensSearch): void;

        // Own methods of Unity.Scope

        ['export'](): void;
        get_filter(id: string): Filter;
        /**
         * <para>Invalidates current search and queues new search.</para>
         * <para>This method will invalidate &lpar;and cancel&rpar; last search and queue a new search &lpar;with the same search_string&rpar;. The #UnityScope::search-changed
         *  signal will be emitted immediately in case the Lens managing this scope is active, or as soon as it becomes active.</para>
         * @param search_type Type of search to queue.
         */
        queue_search_changed(search_type: SearchType): void;
        /**
         * <para>Invalidates last search.</para>
         * <para>Invalidate last search, so that the next search request will trigger the #UnityScope::search-changed signal even if the search would be
         * otherwise discarded because of unchanged search key.</para>
         * <para>See also: #UnityScope::generate-search-key</para>
         * @param search_type Type of search to invalidate.
         */
        invalidate_search(search_type: SearchType): void;
    }

    module TrackMetadata {
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

        // Own properties of Unity.TrackMetadata

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

        // Constructors of Unity.TrackMetadata

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
    }

    module Playlist {
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

        // Own properties of Unity.Playlist

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

        // Constructors of Unity.Playlist

        constructor(properties?: Partial<Playlist.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: string): Playlist;
    }

    module MusicPlayer {
        // Signal callback interfaces

        interface Raise {
            (): void;
        }

        interface PlayPause {
            (): void;
        }

        interface Previous {
            (): void;
        }

        interface Next {
            (): void;
        }

        interface ActivatePlaylist {
            (playlist_id: never): void;
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

        // Own properties of Unity.MusicPlayer

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

        // Constructors of Unity.MusicPlayer

        constructor(properties?: Partial<MusicPlayer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](desktop: string): MusicPlayer;

        // Own signals of Unity.MusicPlayer

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'raise', callback: (_source: this) => void): number;
        connect_after(signal: 'raise', callback: (_source: this) => void): number;
        emit(signal: 'raise'): void;
        connect(signal: 'play_pause', callback: (_source: this) => void): number;
        connect_after(signal: 'play_pause', callback: (_source: this) => void): number;
        emit(signal: 'play_pause'): void;
        connect(signal: 'previous', callback: (_source: this) => void): number;
        connect_after(signal: 'previous', callback: (_source: this) => void): number;
        emit(signal: 'previous'): void;
        connect(signal: 'next', callback: (_source: this) => void): number;
        connect_after(signal: 'next', callback: (_source: this) => void): number;
        emit(signal: 'next'): void;
        connect(signal: 'activate_playlist', callback: (_source: this, playlist_id: never) => void): number;
        connect_after(signal: 'activate_playlist', callback: (_source: this, playlist_id: never) => void): number;
        emit(signal: 'activate_playlist', playlist_id: never): void;

        // Own methods of Unity.MusicPlayer

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

        // Constructors of Unity.AppInfoManagerPrivate

        _init(...args: any[]): void;
    }

    type AnnotatedIconClass = typeof AnnotatedIcon;
    abstract class AnnotatedIconPrivate {
        static $gtype: GObject.GType<AnnotatedIconPrivate>;

        // Constructors of Unity.AnnotatedIconPrivate

        _init(...args: any[]): void;
    }

    type InspectorClass = typeof Inspector;
    abstract class InspectorPrivate {
        static $gtype: GObject.GType<InspectorPrivate>;

        // Constructors of Unity.InspectorPrivate

        _init(...args: any[]): void;
    }

    type LauncherEntryClass = typeof LauncherEntry;
    abstract class LauncherEntryPrivate {
        static $gtype: GObject.GType<LauncherEntryPrivate>;

        // Constructors of Unity.LauncherEntryPrivate

        _init(...args: any[]): void;
    }

    type LauncherFavoritesClass = typeof LauncherFavorites;
    abstract class LauncherFavoritesPrivate {
        static $gtype: GObject.GType<LauncherFavoritesPrivate>;

        // Constructors of Unity.LauncherFavoritesPrivate

        _init(...args: any[]): void;
    }

    type ActivationResponseClass = typeof ActivationResponse;
    abstract class ActivationResponsePrivate {
        static $gtype: GObject.GType<ActivationResponsePrivate>;

        // Constructors of Unity.ActivationResponsePrivate

        _init(...args: any[]): void;
    }

    type CategoryClass = typeof Category;
    abstract class CategoryPrivate {
        static $gtype: GObject.GType<CategoryPrivate>;

        // Constructors of Unity.CategoryPrivate

        _init(...args: any[]): void;
    }

    type FilterClass = typeof Filter;
    abstract class FilterPrivate {
        static $gtype: GObject.GType<FilterPrivate>;

        // Constructors of Unity.FilterPrivate

        _init(...args: any[]): void;
    }

    type FilterOptionClass = typeof FilterOption;
    abstract class FilterOptionPrivate {
        static $gtype: GObject.GType<FilterOptionPrivate>;

        // Constructors of Unity.FilterOptionPrivate

        _init(...args: any[]): void;
    }

    type OptionsFilterClass = typeof OptionsFilter;
    abstract class OptionsFilterPrivate {
        static $gtype: GObject.GType<OptionsFilterPrivate>;

        // Constructors of Unity.OptionsFilterPrivate

        _init(...args: any[]): void;
    }

    type RadioOptionFilterClass = typeof RadioOptionFilter;
    abstract class RadioOptionFilterPrivate {
        static $gtype: GObject.GType<RadioOptionFilterPrivate>;

        // Constructors of Unity.RadioOptionFilterPrivate

        _init(...args: any[]): void;
    }

    type CheckOptionFilterClass = typeof CheckOptionFilter;
    abstract class CheckOptionFilterPrivate {
        static $gtype: GObject.GType<CheckOptionFilterPrivate>;

        // Constructors of Unity.CheckOptionFilterPrivate

        _init(...args: any[]): void;
    }

    type CheckOptionFilterCompactClass = typeof CheckOptionFilterCompact;
    abstract class CheckOptionFilterCompactPrivate {
        static $gtype: GObject.GType<CheckOptionFilterCompactPrivate>;

        // Constructors of Unity.CheckOptionFilterCompactPrivate

        _init(...args: any[]): void;
    }

    type RatingsFilterClass = typeof RatingsFilter;
    abstract class RatingsFilterPrivate {
        static $gtype: GObject.GType<RatingsFilterPrivate>;

        // Constructors of Unity.RatingsFilterPrivate

        _init(...args: any[]): void;
    }

    type MultiRangeFilterClass = typeof MultiRangeFilter;
    abstract class MultiRangeFilterPrivate {
        static $gtype: GObject.GType<MultiRangeFilterPrivate>;

        // Constructors of Unity.MultiRangeFilterPrivate

        _init(...args: any[]): void;
    }

    type PreferencesManagerClass = typeof PreferencesManager;
    abstract class PreferencesManagerPrivate {
        static $gtype: GObject.GType<PreferencesManagerPrivate>;

        // Constructors of Unity.PreferencesManagerPrivate

        _init(...args: any[]): void;
    }

    type LensSearchClass = typeof LensSearch;
    abstract class LensSearchPrivate {
        static $gtype: GObject.GType<LensSearchPrivate>;

        // Constructors of Unity.LensSearchPrivate

        _init(...args: any[]): void;
    }

    type LensClass = typeof Lens;
    abstract class LensPrivate {
        static $gtype: GObject.GType<LensPrivate>;

        // Constructors of Unity.LensPrivate

        _init(...args: any[]): void;
    }

    type PreviewClass = typeof Preview;
    abstract class PreviewPrivate {
        static $gtype: GObject.GType<PreviewPrivate>;

        // Constructors of Unity.PreviewPrivate

        _init(...args: any[]): void;
    }

    type PreviewActionClass = typeof PreviewAction;
    abstract class PreviewActionPrivate {
        static $gtype: GObject.GType<PreviewActionPrivate>;

        // Constructors of Unity.PreviewActionPrivate

        _init(...args: any[]): void;
    }

    type InfoHintClass = typeof InfoHint;
    abstract class InfoHintPrivate {
        static $gtype: GObject.GType<InfoHintPrivate>;

        // Constructors of Unity.InfoHintPrivate

        _init(...args: any[]): void;
    }

    type GenericPreviewClass = typeof GenericPreview;
    abstract class GenericPreviewPrivate {
        static $gtype: GObject.GType<GenericPreviewPrivate>;

        // Constructors of Unity.GenericPreviewPrivate

        _init(...args: any[]): void;
    }

    type ApplicationPreviewClass = typeof ApplicationPreview;
    abstract class ApplicationPreviewPrivate {
        static $gtype: GObject.GType<ApplicationPreviewPrivate>;

        // Constructors of Unity.ApplicationPreviewPrivate

        _init(...args: any[]): void;
    }

    type MusicPreviewClass = typeof MusicPreview;
    abstract class MusicPreviewPrivate {
        static $gtype: GObject.GType<MusicPreviewPrivate>;

        // Constructors of Unity.MusicPreviewPrivate

        _init(...args: any[]): void;
    }

    type MoviePreviewClass = typeof MoviePreview;
    abstract class MoviePreviewPrivate {
        static $gtype: GObject.GType<MoviePreviewPrivate>;

        // Constructors of Unity.MoviePreviewPrivate

        _init(...args: any[]): void;
    }

    type SocialPreviewClass = typeof SocialPreview;
    abstract class SocialPreviewPrivate {
        static $gtype: GObject.GType<SocialPreviewPrivate>;

        // Constructors of Unity.SocialPreviewPrivate

        _init(...args: any[]): void;
    }

    abstract class CommentPrivate {
        static $gtype: GObject.GType<CommentPrivate>;

        // Constructors of Unity.CommentPrivate

        _init(...args: any[]): void;
    }

    type AsyncPreviewClass = typeof AsyncPreview;
    abstract class AsyncPreviewPrivate {
        static $gtype: GObject.GType<AsyncPreviewPrivate>;

        // Constructors of Unity.AsyncPreviewPrivate

        _init(...args: any[]): void;
    }

    type ScopeClass = typeof Scope;
    abstract class ScopePrivate {
        static $gtype: GObject.GType<ScopePrivate>;

        // Constructors of Unity.ScopePrivate

        _init(...args: any[]): void;
    }

    type TrackMetadataClass = typeof TrackMetadata;
    abstract class TrackMetadataPrivate {
        static $gtype: GObject.GType<TrackMetadataPrivate>;

        // Constructors of Unity.TrackMetadataPrivate

        _init(...args: any[]): void;
    }

    type PlaylistClass = typeof Playlist;
    abstract class PlaylistPrivate {
        static $gtype: GObject.GType<PlaylistPrivate>;

        // Constructors of Unity.PlaylistPrivate

        _init(...args: any[]): void;
    }

    type MusicPlayerClass = typeof MusicPlayer;
    abstract class MusicPlayerPrivate {
        static $gtype: GObject.GType<MusicPlayerPrivate>;

        // Constructors of Unity.MusicPlayerPrivate

        _init(...args: any[]): void;
    }

    type MergeStrategyIface = typeof MergeStrategy;
    class PlaylistDetails {
        static $gtype: GObject.GType<PlaylistDetails>;

        // Own fields of Unity.PlaylistDetails

        id: never;
        name: string;
        icon_name: string;

        // Constructors of Unity.PlaylistDetails

        _init(...args: any[]): void;
    }

    class ActivePlaylistContainer {
        static $gtype: GObject.GType<ActivePlaylistContainer>;

        // Own fields of Unity.ActivePlaylistContainer

        valid: boolean;

        // Constructors of Unity.ActivePlaylistContainer

        _init(...args: any[]): void;
    }

    module MergeStrategy {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface MergeStrategyNamespace {
        $gtype: GObject.GType<MergeStrategy>;
        prototype: MergeStrategy;
    }
    interface MergeStrategy extends GObject.Object {
        // Own methods of Unity.MergeStrategy

        /**
         * <para>Virtual method to merge row from source model into target model.</para>
         * @param target The target model to merge a row into
         * @param row An array of variants with the row data for the result
         * @returns A model iter pointing to the row in the target model where &commat;row was added. Or null if the result was discarded
         */
        merge_result(target: Dee.Model, row: GLib.Variant[]): Dee.ModelIter;

        // Own virtual methods of Unity.MergeStrategy

        /**
         * <para>Virtual method to merge row from source model into target model.</para>
         * @param target The target model to merge a row into
         * @param row An array of variants with the row data for the result
         */
        vfunc_merge_result(target: Dee.Model, row: GLib.Variant[]): Dee.ModelIter;
    }

    export const MergeStrategy: MergeStrategyNamespace;

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
