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

    export namespace CategoryRenderer {
        export const $gtype: GObject.GType<CategoryRenderer>;
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

    export namespace CategoryContentType {
        export const $gtype: GObject.GType<CategoryContentType>;
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

    export namespace HandledType {
        export const $gtype: GObject.GType<HandledType>;
    }

    enum HandledType {
        NOT_HANDLED,
        SHOW_DASH,
        HIDE_DASH,
        GOTO_DASH_URI,
        SHOW_PREVIEW,
        PERFORM_SEARCH,
    }

    export namespace SearchType {
        export const $gtype: GObject.GType<SearchType>;
    }

    enum SearchType {
        DEFAULT,
        GLOBAL,
        N_TYPES,
    }

    export namespace ResultType {
        export const $gtype: GObject.GType<ResultType>;
    }

    enum ResultType {
        DEFAULT,
        PERSONAL,
        SEMI_PERSONAL,
    }

    export namespace SerializationType {
        export const $gtype: GObject.GType<SerializationType>;
    }

    enum SerializationType {
        BINARY,
        JSON,
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

    export namespace PaymentPreviewType {
        export const $gtype: GObject.GType<PaymentPreviewType>;
    }

    enum PaymentPreviewType {
        APPLICATION,
        MUSIC,
        ERROR,
    }

    export namespace SchemaFieldType {
        export const $gtype: GObject.GType<SchemaFieldType>;
    }

    enum SchemaFieldType {
        OPTIONAL,
        REQUIRED,
    }

    export namespace AggregatorScopeSortFlags {
        export const $gtype: GObject.GType<AggregatorScopeSortFlags>;
    }

    enum AggregatorScopeSortFlags {
        ASCENDING,
        DESCENDING,
        CASE_INSENSITIVE,
    }

    export namespace AggregatorScopeMergeMode {
        export const $gtype: GObject.GType<AggregatorScopeMergeMode>;
    }

    enum AggregatorScopeMergeMode {
        CATEGORY_ID,
        OWNER_SCOPE,
    }
    const SCOPE_API_VERSION: number;
    function category_renderer_from_string(renderer_name: string): CategoryRenderer;
    function category_renderer_to_string(val: CategoryRenderer | null): string;
    function category_content_type_from_string(content_type: string): CategoryContentType;
    function category_content_type_to_string(val: CategoryContentType | null): string;
    function filter_renderer_to_string(renderer: FilterRenderer | null): string;
    function filter_renderer_from_string(renderer_name: string): FilterRenderer;
    function scope_module_get_version(): number;
    function scope_module_load_scopes(): AbstractScope[];
    function object_unref(object: any): void;
    interface ScopeSearchBaseCallback {
        (instance: ScopeSearchBase): void;
    }
    interface AbstractPreviewCallback {
        (previewer: ResultPreviewer, preview: AbstractPreview): void;
    }
    namespace AppInfoManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            changed: (arg0: string, arg1: Gio.AppInfo) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

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
        static get_default(): AppInfoManager;

        // Methods

        lookup(id: string): Gio.AppInfo;
        get_categories(id: string): string[];
        get_keywords(id: string): string[];
        get_path(id: string): string;
        lookup_async(id: string): Promise<Gio.AppInfo>;
        lookup_async(id: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        lookup_async(id: string, _callback_?: Gio.AsyncReadyCallback<this>): Promise<Gio.AppInfo> | void;
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

        set_colorize_rgba(r: number, g: number, b: number, a: number): void;
        to_string(): string;
        get_icon(): Gio.Icon;
        set_icon(value: Gio.Icon): void;
        get_ribbon(): string;
        set_ribbon(value: string): void;
        get_category(): CategoryType;
        set_category(value: CategoryType | null): void;
        get_size_hint(): IconSizeHint;
        set_size_hint(value: IconSizeHint | null): void;
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

    class Inspector extends GObject.Object {
        static $gtype: GObject.GType<Inspector>;

        // Properties

        get unity_running(): boolean;
        get unityRunning(): boolean;
        get unity_bus_name(): string;
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

        static get_default(): Inspector;

        // Methods

        get_unity_running(): boolean;
        get_unity_bus_name(): string;
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

        // Methods

        get_app_uri(): string;
        set_app_uri(value: string): void;
        get_count(): number;
        set_count(value: number): void;
        get_count_visible(): boolean;
        set_count_visible(value: boolean): void;
        get_progress(): number;
        set_progress(value: number): void;
        get_progress_visible(): boolean;
        set_progress_visible(value: boolean): void;
        get_urgent(): boolean;
        set_urgent(value: boolean): void;
        get_quicklist(): Dbusmenu.Menuitem;
        set_quicklist(value: Dbusmenu.Menuitem): void;

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

        static get_default(): LauncherFavorites;

        // Methods

        has_app_info(appinfo: Gio.AppInfo): boolean;
        has_app_id(app_id: string): boolean;
        lookup(app_id: string): Gio.AppInfo;
        enumerate_ids(): string[];
        enumerate_app_infos(): Gio.AppInfo[];
    }

    namespace MetadataProvider {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

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

        connect<K extends keyof MetadataProvider.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MetadataProvider.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MetadataProvider.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MetadataProvider.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MetadataProvider.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MetadataProvider.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace ProgressSourceProvider {
        // Signal signatures
        interface SignalSignatures extends MetadataProvider.SignalSignatures {
            'notify::dbus-name': (pspec: GObject.ParamSpec) => void;
            'notify::dbus-path': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends MetadataProvider.ConstructorProps {
            dbus_name: string;
            dbusName: string;
            dbus_path: string;
            dbusPath: string;
        }
    }

    class ProgressSourceProvider extends MetadataProvider {
        static $gtype: GObject.GType<ProgressSourceProvider>;

        // Properties

        get dbus_name(): string;
        get dbusName(): string;
        get dbus_path(): string;
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

        static ['new'](dbus_name: string, dbus_path: string): ProgressSourceProvider;

        // Signals

        connect<K extends keyof ProgressSourceProvider.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ProgressSourceProvider.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ProgressSourceProvider.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ProgressSourceProvider.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ProgressSourceProvider.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ProgressSourceProvider.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_dbus_name(): string;
        get_dbus_path(): string;
    }

    namespace Category {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::icon-hint': (pspec: GObject.ParamSpec) => void;
            'notify::default-renderer': (pspec: GObject.ParamSpec) => void;
            'notify::content-type': (pspec: GObject.ParamSpec) => void;
            'notify::renderer-hint': (pspec: GObject.ParamSpec) => void;
            'notify::renderer': (pspec: GObject.ParamSpec) => void;
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

    class Category extends GObject.Object {
        static $gtype: GObject.GType<Category>;

        // Properties

        get id(): string;
        get name(): string;
        get icon_hint(): Gio.Icon;
        get iconHint(): Gio.Icon;
        get default_renderer(): CategoryRenderer;
        get defaultRenderer(): CategoryRenderer;
        get content_type(): CategoryContentType;
        set content_type(val: CategoryContentType);
        get contentType(): CategoryContentType;
        set contentType(val: CategoryContentType);
        get renderer_hint(): string;
        set renderer_hint(val: string);
        get rendererHint(): string;
        set rendererHint(val: string);
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

        static ['new'](id: string, name: string, icon_hint: Gio.Icon, renderer: CategoryRenderer): Category;

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

        // Methods

        add_metadata_provider(provider: MetadataProvider): void;
        get_id(): string;
        get_name(): string;
        get_icon_hint(): Gio.Icon;
        get_default_renderer(): CategoryRenderer;
        get_content_type(): CategoryContentType;
        set_content_type(value: CategoryContentType | null): void;
        get_renderer_hint(): string;
        set_renderer_hint(value: string): void;
        get_renderer(): string;
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

    abstract class Filter extends GObject.Object implements Dee.Serializable {
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

        // Methods

        get_id(): string;
        get_display_name(): string;
        get_icon_hint(): Gio.Icon;
        get_renderer(): FilterRenderer;
        get_visible(): boolean;
        set_visible(value: boolean): void;
        get_collapsed(): boolean;
        get_filtering(): boolean;

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

        // Methods

        get_id(): string;
        get_display_name(): string;
        get_icon_hint(): Gio.Icon;
        get_active(): boolean;
        set_active(value: boolean): void;
    }

    namespace OptionsFilter {
        // Signal signatures
        interface SignalSignatures extends Filter.SignalSignatures {
            'notify::sort-type': (pspec: GObject.ParamSpec) => void;
            'notify::show-all-button': (pspec: GObject.ParamSpec) => void;
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
            show_all_button: boolean;
            showAllButton: boolean;
        }
    }

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
        remove_option(id: string): boolean;
        get_sort_type(): OptionsFilterSortType;
        set_sort_type(value: OptionsFilterSortType | null): void;
        get_show_all_button(): boolean;
        set_show_all_button(value: boolean): void;
    }

    namespace RadioOptionFilter {
        // Signal signatures
        interface SignalSignatures extends OptionsFilter.SignalSignatures {
            'notify::sort-type': (pspec: GObject.ParamSpec) => void;
            'notify::show-all-button': (pspec: GObject.ParamSpec) => void;
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
            'notify::show-all-button': (pspec: GObject.ParamSpec) => void;
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
            'notify::show-all-button': (pspec: GObject.ParamSpec) => void;
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

        // Methods

        get_rating(): number;
    }

    namespace MultiRangeFilter {
        // Signal signatures
        interface SignalSignatures extends OptionsFilter.SignalSignatures {
            'notify::sort-type': (pspec: GObject.ParamSpec) => void;
            'notify::show-all-button': (pspec: GObject.ParamSpec) => void;
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
            'notify::always-search': (pspec: GObject.ParamSpec) => void;
            'notify::home-lens-priority': (pspec: GObject.ParamSpec) => void;
            'notify::home-lens-default-view': (pspec: GObject.ParamSpec) => void;
            'notify::disabled-scopes': (pspec: GObject.ParamSpec) => void;
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

        static get_default(): PreferencesManager;

        // Methods

        get_remote_content_search(): PreferencesManagerRemoteContent;
        set_remote_content_search(value: PreferencesManagerRemoteContent | null): void;
        get_always_search(): string[];
        set_always_search(value: string[]): void;
        get_home_lens_priority(): string[];
        set_home_lens_priority(value: string[]): void;
        get_home_lens_default_view(): string[];
        set_home_lens_default_view(value: string[]): void;
        get_disabled_scopes(): string[];
        set_disabled_scopes(value: string[]): void;
    }

    namespace DeprecatedScopeSearch {
        // Signal signatures
        interface SignalSignatures extends ScopeSearchBase.SignalSignatures {
            finished: () => void;
            'notify::channel-id': (pspec: GObject.ParamSpec) => void;
            'notify::search-string': (pspec: GObject.ParamSpec) => void;
            'notify::search-type': (pspec: GObject.ParamSpec) => void;
            'notify::hints': (pspec: GObject.ParamSpec) => void;
            'notify::results-model': (pspec: GObject.ParamSpec) => void;
            'notify::owner': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends ScopeSearchBase.ConstructorProps {
            channel_id: string;
            channelId: string;
            search_string: string;
            searchString: string;
            search_type: SearchType;
            searchType: SearchType;
            hints: GLib.HashTable<string, GLib.Variant>;
            results_model: Dee.SerializableModel;
            resultsModel: Dee.SerializableModel;
            owner: DeprecatedScopeBase;
        }
    }

    class DeprecatedScopeSearch extends ScopeSearchBase {
        static $gtype: GObject.GType<DeprecatedScopeSearch>;

        // Properties

        get channel_id(): string;
        get channelId(): string;
        get search_string(): string;
        get searchString(): string;
        get search_type(): SearchType;
        get searchType(): SearchType;
        get hints(): GLib.HashTable<string, GLib.Variant>;
        get results_model(): Dee.SerializableModel;
        get resultsModel(): Dee.SerializableModel;
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

        connect<K extends keyof DeprecatedScopeSearch.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DeprecatedScopeSearch.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DeprecatedScopeSearch.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DeprecatedScopeSearch.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DeprecatedScopeSearch.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DeprecatedScopeSearch.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        set_reply_hint(key: string, variant: GLib.Variant): void;
        get_filter(filter_id: string): Filter;
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
            'transaction-complete': (arg0: string) => void;
            'category-order-changed': (arg0: number[]) => void;
            'notify::channel-id': (pspec: GObject.ParamSpec) => void;
            'notify::search-string': (pspec: GObject.ParamSpec) => void;
            'notify::search-type': (pspec: GObject.ParamSpec) => void;
            'notify::hints': (pspec: GObject.ParamSpec) => void;
            'notify::results-model': (pspec: GObject.ParamSpec) => void;
            'notify::owner': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DeprecatedScopeSearch.ConstructorProps {}
    }

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

        static ['new'](
            owner: AggregatorScope,
            channel_id: string,
            hints: { [key: string]: any } | GLib.HashTable<string, GLib.Variant>,
            results_model: Dee.SerializableModel,
        ): AggregatedScopeSearch;

        // Signals

        connect<K extends keyof AggregatedScopeSearch.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AggregatedScopeSearch.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AggregatedScopeSearch.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AggregatedScopeSearch.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AggregatedScopeSearch.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AggregatedScopeSearch.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        search_scope(
            scope_id: string,
            search_string: string,
            search_type: SearchType | null,
            hints: { [key: string]: any } | GLib.HashTable<string, GLib.Variant>,
        ): Promise<GLib.HashTable<string, GLib.Variant>>;
        search_scope(
            scope_id: string,
            search_string: string,
            search_type: SearchType | null,
            hints: { [key: string]: any } | GLib.HashTable<string, GLib.Variant>,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        search_scope(
            scope_id: string,
            search_string: string,
            search_type: SearchType | null,
            hints: { [key: string]: any } | GLib.HashTable<string, GLib.Variant>,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): Promise<GLib.HashTable<string, GLib.Variant>> | void;
        search_scope_finish(_res_: Gio.AsyncResult): GLib.HashTable<string, GLib.Variant>;
        push_results(scope_id: string, results_model: Dee.SerializableModel, category_ids: string[]): Promise<void>;
        push_results(
            scope_id: string,
            results_model: Dee.SerializableModel,
            category_ids: string[],
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        push_results(
            scope_id: string,
            results_model: Dee.SerializableModel,
            category_ids: string[],
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): Promise<void> | void;
        push_results_finish(_res_: Gio.AsyncResult): void;
        push_filter_settings(filters: FilterSet): void;
    }

    namespace Preview {
        // Signal signatures
        interface SignalSignatures extends AbstractPreview.SignalSignatures {
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::subtitle': (pspec: GObject.ParamSpec) => void;
            'notify::description-markup': (pspec: GObject.ParamSpec) => void;
            'notify::image-source-uri': (pspec: GObject.ParamSpec) => void;
            'notify::image': (pspec: GObject.ParamSpec) => void;
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
        get_title(): string;
        set_title(value: string): void;
        get_subtitle(): string;
        set_subtitle(value: string): void;
        get_description_markup(): string;
        set_description_markup(value: string): void;
        get_image_source_uri(): string;
        set_image_source_uri(value: string): void;
        get_image(): Gio.Icon;
        set_image(value: Gio.Icon): void;

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

        static with_uri(uri: string, display_name: string, icon_hint: Gio.Icon): PreviewAction;

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

        // Methods

        get_id(): string;
        get_display_name(): string;
        get_extra_text(): string;
        set_extra_text(value: string): void;
        get_icon_hint(): Gio.Icon;
        get_layout_hint(): LayoutHint;
        get_hints(): GLib.HashTable<string, GLib.Variant>;

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

        // Methods

        get_id(): string;
        get_display_name(): string;
        get_icon_hint(): Gio.Icon;
        get_data(): GLib.Variant;
        // Conflicted with GObject.Object.get_data
        get_data(...args: never[]): any;
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
        get_app_icon(): Gio.Icon;
        set_app_icon(value: Gio.Icon): void;
        get_license(): string;
        set_license(value: string): void;
        get_copyright(): string;
        set_copyright(value: string): void;
        get_last_update(): string;
        set_last_update(value: string): void;
    }

    namespace MusicPreview {
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

    namespace PaymentPreview {
        // Signal signatures
        interface SignalSignatures extends Preview.SignalSignatures {
            'notify::header': (pspec: GObject.ParamSpec) => void;
            'notify::email': (pspec: GObject.ParamSpec) => void;
            'notify::payment-method': (pspec: GObject.ParamSpec) => void;
            'notify::purchase-prize': (pspec: GObject.ParamSpec) => void;
            'notify::purchase-type': (pspec: GObject.ParamSpec) => void;
            'notify::preview-type': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::subtitle': (pspec: GObject.ParamSpec) => void;
            'notify::description-markup': (pspec: GObject.ParamSpec) => void;
            'notify::image-source-uri': (pspec: GObject.ParamSpec) => void;
            'notify::image': (pspec: GObject.ParamSpec) => void;
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

        static ['new'](title: string, subtitle: string, image: Gio.Icon): PaymentPreview;

        static for_type(title: string, subtitle: string, image: Gio.Icon, type: PaymentPreviewType): PaymentPreview;

        static for_application(title: string, subtitle: string, image: Gio.Icon): PaymentPreview;

        static for_music(title: string, subtitle: string, image: Gio.Icon): PaymentPreview;

        static for_error(title: string, subtitle: string, image: Gio.Icon): PaymentPreview;

        // Signals

        connect<K extends keyof PaymentPreview.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PaymentPreview.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PaymentPreview.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PaymentPreview.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PaymentPreview.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PaymentPreview.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_header(): string;
        set_header(value: string): void;
        get_email(): string;
        set_email(value: string): void;
        get_payment_method(): string;
        set_payment_method(value: string): void;
        get_purchase_prize(): string;
        set_purchase_prize(value: string): void;
        get_purchase_type(): string;
        set_purchase_type(value: string): void;
        get_preview_type(): PaymentPreviewType;
        set_preview_type(value: PaymentPreviewType | null): void;
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
        get_year(): string;
        set_year(value: string): void;
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
        get_avatar(): Gio.Icon;
        set_avatar(value: Gio.Icon): void;
        get_content(): string;
        set_content(value: string): void;
        get_sender(): string;
        set_sender(value: string): void;
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

        // Methods

        get_id(): string;
        get_name(): string;
        get_text(): string;
        get_time(): string;
    }

    namespace ActivationResponse {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::handled': (pspec: GObject.ParamSpec) => void;
            'notify::goto-uri': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handled: HandledType;
            goto_uri: string;
            gotoUri: string;
        }
    }

    class ActivationResponse extends GObject.Object {
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

        static with_search(
            search_string: string,
            filter_set: FilterSet,
            search_metadata: SearchMetadata,
        ): ActivationResponse;

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

        // Methods

        get_handled(): HandledType;
        get_goto_uri(): string;
        set_goto_uri(value: string): void;
    }

    namespace AggregatorActivation {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::channel-id': (pspec: GObject.ParamSpec) => void;
            'notify::scope-id': (pspec: GObject.ParamSpec) => void;
            'notify::action-type': (pspec: GObject.ParamSpec) => void;
            'notify::scope-result': (pspec: GObject.ParamSpec) => void;
            'notify::hints': (pspec: GObject.ParamSpec) => void;
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
            hints: GLib.HashTable<string, GLib.Variant>;
        }
    }

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
        set hints(val: GLib.HashTable<string, GLib.Variant>);

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

        static ['new'](
            channel_id: string,
            scope_id: string,
            action_type: number,
            result: ScopeResult,
        ): AggregatorActivation;

        // Signals

        connect<K extends keyof AggregatorActivation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AggregatorActivation.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AggregatorActivation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AggregatorActivation.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AggregatorActivation.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AggregatorActivation.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_channel_id(): string;
        set_channel_id(value: string): void;
        get_scope_id(): string;
        set_scope_id(value: string): void;
        get_action_type(): number;
        set_action_type(value: number): void;
        get_scope_result(): ScopeResult;
        set_scope_result(value: ScopeResult): void;
        get_hints(): GLib.HashTable<string, GLib.Variant>;
    }

    namespace FilterSet {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

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

        static ['new'](): FilterSet;

        // Signals

        connect<K extends keyof FilterSet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterSet.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FilterSet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterSet.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FilterSet.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FilterSet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_add(filter: Filter): void;
        vfunc_get_filter_by_id(filter_id: string): Filter;
        vfunc_get_filters(): Filter[];

        // Methods

        add(filter: Filter): void;
        get_filter_by_id(filter_id: string): Filter;
        get_filters(): Filter[];
    }

    namespace CategorySet {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

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

        static ['new'](): CategorySet;

        // Signals

        connect<K extends keyof CategorySet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CategorySet.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CategorySet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CategorySet.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CategorySet.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CategorySet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_add(category: Category): void;
        vfunc_get_categories(): Category[];

        // Methods

        add(category: Category): void;
        get_categories(): Category[];
    }

    namespace Schema {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

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

        static ['new'](): Schema;

        // Signals

        connect<K extends keyof Schema.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Schema.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Schema.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Schema.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Schema.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Schema.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_add_field(name: string, schema: string, type: SchemaFieldType): void;
        vfunc_get_fields(): SchemaFieldInfo[];

        // Methods

        add_field(name: string, schema: string, type: SchemaFieldType | null): void;
        get_fields(): SchemaFieldInfo[];
    }

    namespace Cancellable {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

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

        connect<K extends keyof Cancellable.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cancellable.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Cancellable.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cancellable.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Cancellable.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Cancellable.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static create(): Cancellable;

        // Virtual methods

        vfunc_cancel(): void;
        vfunc_is_cancelled(): boolean;
        vfunc_get_gcancellable(): Gio.Cancellable;

        // Methods

        cancel(): void;
        is_cancelled(): boolean;
        get_gcancellable(): Gio.Cancellable;
    }

    namespace ScopeSearchBase {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

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

        connect<K extends keyof ScopeSearchBase.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ScopeSearchBase.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ScopeSearchBase.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ScopeSearchBase.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ScopeSearchBase.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ScopeSearchBase.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_run(): void;
        vfunc_run_async(async_callback: ScopeSearchBaseCallback): void;
        vfunc_set_search_context(ctx: SearchContext): void;

        // Methods

        run(): void;
        run_async(async_callback: ScopeSearchBaseCallback): void;
        set_search_context(ctx: SearchContext): void;
    }

    namespace ResultSet {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

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

        connect<K extends keyof ResultSet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ResultSet.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ResultSet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ResultSet.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ResultSet.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ResultSet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_add_result(result: ScopeResult): void;
        vfunc_add_result_from_variant(variant: GLib.Variant): void;
        vfunc_flush(): void;

        // Methods

        add_result(result: ScopeResult): void;
        add_result_from_variant(variant: GLib.Variant): void;
        flush(): void;
    }

    namespace AbstractPreview {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

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

        connect<K extends keyof AbstractPreview.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AbstractPreview.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AbstractPreview.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AbstractPreview.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AbstractPreview.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AbstractPreview.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_serialize_as(serialization_type: SerializationType): Uint8Array;

        // Methods

        serialize_as(serialization_type: SerializationType | null): Uint8Array;
    }

    namespace ResultPreviewer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

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

        connect<K extends keyof ResultPreviewer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ResultPreviewer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ResultPreviewer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ResultPreviewer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ResultPreviewer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ResultPreviewer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_run(): AbstractPreview;
        vfunc_run_async(async_callback: AbstractPreviewCallback): void;

        // Methods

        run(): AbstractPreview;
        run_async(async_callback: AbstractPreviewCallback): void;
        set_scope_result(scope_result: ScopeResult): void;
        set_search_metadata(search_metadata: SearchMetadata): void;
    }

    namespace SearchMetadata {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::locale': (pspec: GObject.ParamSpec) => void;
            'notify::form-factor': (pspec: GObject.ParamSpec) => void;
            'notify::location': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            locale: string;
            form_factor: string;
            formFactor: string;
            location: GeoCoordinate;
        }
    }

    class SearchMetadata extends GObject.Object {
        static $gtype: GObject.GType<SearchMetadata>;

        // Properties

        get locale(): string;
        get form_factor(): string;
        get formFactor(): string;
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

        static ['new'](): SearchMetadata;

        // Signals

        connect<K extends keyof SearchMetadata.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SearchMetadata.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SearchMetadata.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SearchMetadata.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SearchMetadata.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SearchMetadata.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static create(metadata: { [key: string]: any } | GLib.HashTable<string, GLib.Variant>): SearchMetadata;
        static create_from_variant(metadata: GLib.Variant): SearchMetadata;

        // Methods

        get_locale(): string;
        get_form_factor(): string;
        get_location(): GeoCoordinate;
    }

    namespace GeoCoordinate {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

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

        static ['new'](latitude_: number, longitude_: number): GeoCoordinate;

        static with_altitude(latitude_: number, longitude_: number, altitude_: number): GeoCoordinate;

        // Signals

        connect<K extends keyof GeoCoordinate.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GeoCoordinate.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GeoCoordinate.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GeoCoordinate.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GeoCoordinate.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GeoCoordinate.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        has_valid_altitude(): boolean;
    }

    namespace AbstractScope {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'results-invalidated-internal': (arg0: SearchType) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

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

        connect<K extends keyof AbstractScope.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AbstractScope.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AbstractScope.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AbstractScope.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AbstractScope.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AbstractScope.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_create_search_for_query(search_context: SearchContext): ScopeSearchBase;
        vfunc_create_previewer(result: ScopeResult, metadata: SearchMetadata): ResultPreviewer;
        vfunc_get_categories(): CategorySet;
        vfunc_get_filters(): FilterSet;
        vfunc_get_schema(): Schema;
        vfunc_get_search_hint(): string;
        vfunc_get_group_name(): string;
        vfunc_get_unique_name(): string;
        vfunc_activate(result: ScopeResult, metadata: SearchMetadata, action_id: string): ActivationResponse;
        vfunc_normalize_search_query(search_query: string): string;

        // Methods

        create_search_for_query(search_context: SearchContext): ScopeSearchBase;
        create_previewer(result: ScopeResult, metadata: SearchMetadata): ResultPreviewer;
        get_categories(): CategorySet;
        get_filters(): FilterSet;
        get_schema(): Schema;
        get_search_hint(): string;
        get_group_name(): string;
        get_unique_name(): string;
        activate(result: ScopeResult, metadata: SearchMetadata, action_id: string): ActivationResponse;
        normalize_search_query(search_query: string): string;
        results_invalidated(search_type: SearchType | null): void;
    }

    namespace ScopeDBusConnector {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::scope': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            scope: AbstractScope;
        }
    }

    class ScopeDBusConnector extends GObject.Object {
        static $gtype: GObject.GType<ScopeDBusConnector>;

        // Properties

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

        static ['new'](scope: AbstractScope): ScopeDBusConnector;

        // Signals

        connect<K extends keyof ScopeDBusConnector.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ScopeDBusConnector.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ScopeDBusConnector.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ScopeDBusConnector.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ScopeDBusConnector.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ScopeDBusConnector.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static run(): void;
        static quit(): void;

        // Methods

        ['export'](): void;
        unexport(): void;
        get_scope(): AbstractScope;
    }

    namespace DeprecatedScopeBase {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'active-sources-changed': (arg0: string[]) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::dbus-path': (pspec: GObject.ParamSpec) => void;
            'notify::search-in-global': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::is-master': (pspec: GObject.ParamSpec) => void;
            'notify::search-hint': (pspec: GObject.ParamSpec) => void;
            'notify::sources': (pspec: GObject.ParamSpec) => void;
            'notify::categories': (pspec: GObject.ParamSpec) => void;
            'notify::filters': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
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

    abstract class DeprecatedScopeBase extends GObject.Object {
        static $gtype: GObject.GType<DeprecatedScopeBase>;

        // Properties

        get id(): string;
        get dbus_path(): string;
        get dbusPath(): string;
        get search_in_global(): boolean;
        set search_in_global(val: boolean);
        get searchInGlobal(): boolean;
        set searchInGlobal(val: boolean);
        get visible(): boolean;
        set visible(val: boolean);
        get is_master(): boolean;
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

        connect<K extends keyof DeprecatedScopeBase.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DeprecatedScopeBase.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DeprecatedScopeBase.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DeprecatedScopeBase.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DeprecatedScopeBase.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DeprecatedScopeBase.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        ['export'](): void;
        unexport(): void;
        get_id(): string;
        get_dbus_path(): string;
        get_search_in_global(): boolean;
        set_search_in_global(value: boolean): void;
        get_visible(): boolean;
        set_visible(value: boolean): void;
        get_is_master(): boolean;
        get_search_hint(): string;
        set_search_hint(value: string): void;
        get_sources(): OptionsFilter;
        get_categories(): CategorySet;
        set_categories(value: CategorySet): void;
        get_filters(): FilterSet;
        set_filters(value: FilterSet): void;
        get_schema(): Schema;
        set_schema(value: Schema): void;
    }

    namespace DeprecatedScope {
        // Signal signatures
        interface SignalSignatures extends DeprecatedScopeBase.SignalSignatures {
            'activate-uri': (arg0: string) => ActivationResponse;
            'preview-uri': (arg0: string) => Preview;
            'generate-search-key': (arg0: DeprecatedScopeSearch) => string;
            'search-changed': (arg0: DeprecatedScopeSearch, arg1: SearchType, arg2: Gio.Cancellable) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::dbus-path': (pspec: GObject.ParamSpec) => void;
            'notify::search-in-global': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::is-master': (pspec: GObject.ParamSpec) => void;
            'notify::search-hint': (pspec: GObject.ParamSpec) => void;
            'notify::sources': (pspec: GObject.ParamSpec) => void;
            'notify::categories': (pspec: GObject.ParamSpec) => void;
            'notify::filters': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DeprecatedScopeBase.ConstructorProps {}
    }

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

        static ['new'](dbus_path_: string, id_: string): DeprecatedScope;

        // Signals

        connect<K extends keyof DeprecatedScope.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DeprecatedScope.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DeprecatedScope.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DeprecatedScope.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DeprecatedScope.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DeprecatedScope.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_preview_result(result: ScopeResult, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_preview_result_finish(_res_: Gio.AsyncResult): Preview;
        vfunc_activate_result(result: ScopeResult, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_activate_result_finish(_res_: Gio.AsyncResult): ActivationResponse;

        // Methods

        preview_result(result: ScopeResult): Promise<Preview>;
        preview_result(result: ScopeResult, _callback_: Gio.AsyncReadyCallback<this>): void;
        preview_result(result: ScopeResult, _callback_?: Gio.AsyncReadyCallback<this>): Promise<Preview> | void;
        preview_result_finish(_res_: Gio.AsyncResult): Preview;
        activate_result(result: ScopeResult): Promise<ActivationResponse>;
        activate_result(result: ScopeResult, _callback_: Gio.AsyncReadyCallback<this>): void;
        activate_result(
            result: ScopeResult,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): Promise<ActivationResponse> | void;
        activate_result_finish(_res_: Gio.AsyncResult): ActivationResponse;
        queue_search_changed(search_type: SearchType | null): void;
    }

    namespace AggregatorScope {
        // Signal signatures
        interface SignalSignatures extends DeprecatedScopeBase.SignalSignatures {
            'notify::merge-mode': (pspec: GObject.ParamSpec) => void;
            'notify::proxy-filter-hints': (pspec: GObject.ParamSpec) => void;
            'notify::automatic-flushing': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::dbus-path': (pspec: GObject.ParamSpec) => void;
            'notify::search-in-global': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::is-master': (pspec: GObject.ParamSpec) => void;
            'notify::search-hint': (pspec: GObject.ParamSpec) => void;
            'notify::sources': (pspec: GObject.ParamSpec) => void;
            'notify::categories': (pspec: GObject.ParamSpec) => void;
            'notify::filters': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
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

        connect<K extends keyof AggregatorScope.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AggregatorScope.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AggregatorScope.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AggregatorScope.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AggregatorScope.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AggregatorScope.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_category_index_for_scope_id(scope_id: string): number;
        vfunc_search(scope_search: AggregatedScopeSearch, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_search_finish(_res_: Gio.AsyncResult): void;
        vfunc_activate(activation: AggregatorActivation, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_activate_finish(_res_: Gio.AsyncResult): ActivationResponse;

        // Methods

        category_index_for_scope_id(scope_id: string): number;
        add_sorter(category_index: number, field: string, flags: AggregatorScopeSortFlags | null): void;
        add_constraint(category_index: number, field: string): void;
        search(scope_search: AggregatedScopeSearch): Promise<void>;
        search(scope_search: AggregatedScopeSearch, _callback_: Gio.AsyncReadyCallback<this>): void;
        search(scope_search: AggregatedScopeSearch, _callback_?: Gio.AsyncReadyCallback<this>): Promise<void> | void;
        search_finish(_res_: Gio.AsyncResult): void;
        activate(activation: AggregatorActivation): Promise<ActivationResponse>;
        activate(activation: AggregatorActivation, _callback_: Gio.AsyncReadyCallback<this>): void;
        activate(
            activation: AggregatorActivation,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): Promise<ActivationResponse> | void;
        activate_finish(_res_: Gio.AsyncResult): ActivationResponse;
        get_merge_mode(): AggregatorScopeMergeMode;
        set_merge_mode(value: AggregatorScopeMergeMode | null): void;
        get_proxy_filter_hints(): boolean;
        set_proxy_filter_hints(value: boolean): void;
        get_automatic_flushing(): boolean;
        set_automatic_flushing(value: boolean): void;
    }

    namespace MasterScope {
        // Signal signatures
        interface SignalSignatures extends AggregatorScope.SignalSignatures {
            'notify::no-content-hint': (pspec: GObject.ParamSpec) => void;
            'notify::merge-mode': (pspec: GObject.ParamSpec) => void;
            'notify::proxy-filter-hints': (pspec: GObject.ParamSpec) => void;
            'notify::automatic-flushing': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::dbus-path': (pspec: GObject.ParamSpec) => void;
            'notify::search-in-global': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::is-master': (pspec: GObject.ParamSpec) => void;
            'notify::search-hint': (pspec: GObject.ParamSpec) => void;
            'notify::sources': (pspec: GObject.ParamSpec) => void;
            'notify::categories': (pspec: GObject.ParamSpec) => void;
            'notify::filters': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends AggregatorScope.ConstructorProps {
            no_content_hint: string;
            noContentHint: string;
        }
    }

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

        static ['new'](dbus_path_: string, id_: string): MasterScope;

        // Signals

        connect<K extends keyof MasterScope.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MasterScope.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MasterScope.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MasterScope.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MasterScope.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MasterScope.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_no_content_hint(): string;
        set_no_content_hint(value: string): void;
    }

    namespace SimpleScope {
        // Signal signatures
        interface SignalSignatures extends AbstractScope.SignalSignatures {
            'notify::filter-set': (pspec: GObject.ParamSpec) => void;
            'notify::category-set': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
            'notify::search-hint': (pspec: GObject.ParamSpec) => void;
            'notify::group-name': (pspec: GObject.ParamSpec) => void;
            'notify::unique-name': (pspec: GObject.ParamSpec) => void;
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

        static ['new'](): SimpleScope;

        // Signals

        connect<K extends keyof SimpleScope.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SimpleScope.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SimpleScope.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SimpleScope.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SimpleScope.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SimpleScope.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        set_search_func(func: SimpleScope.SearchRunFunc): void;
        set_search_async_func(func: SimpleScope.SearchRunAsyncFunc): void;
        set_activate_func(func: SimpleScope.ActivateFunc): void;
        set_preview_func(func: SimpleScope.PreviewRunFunc): void;
        set_preview_async_func(func: SimpleScope.PreviewRunAsyncFunc): void;
        get_filter_set(): FilterSet;
        set_filter_set(value: FilterSet): void;
        get_category_set(): CategorySet;
        set_category_set(value: CategorySet): void;
        get_schema(): Schema;
        set_schema(value: Schema): void;
        get_search_hint(): string;
        set_search_hint(value: string): void;
        get_group_name(): string;
        set_group_name(value: string): void;
        get_unique_name(): string;
        set_unique_name(value: string): void;
    }

    namespace ScopeLoader {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

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

        static ['new'](): ScopeLoader;

        // Signals

        connect<K extends keyof ScopeLoader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ScopeLoader.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ScopeLoader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ScopeLoader.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ScopeLoader.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ScopeLoader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_get_scopes(module_name: string, module_type: string): AbstractScope[];
        vfunc_export_scopes(scopes: AbstractScope[]): void;

        // Methods

        get_scopes(module_name: string, module_type: string): AbstractScope[];
        export_scopes(scopes: AbstractScope[]): void;
        load_group(group_name: string): void;
        load_scope(scope_id: string): void;
        load_module(module: string, module_type: string): void;
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

        // Methods

        get_uri(): string;
        set_uri(value: string): void;
        get_track_no(): number;
        set_track_no(value: number): void;
        get_artist(): string;
        set_artist(value: string): void;
        get_title(): string;
        set_title(value: string): void;
        get_album(): string;
        set_album(value: string): void;
        get_length(): number;
        set_length(value: number): void;
        get_art_location(): Gio.File;
        set_art_location(value: Gio.File): void;
        get_art_icon(): Gio.Icon;
        set_art_icon(value: Gio.Icon): void;
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

        // Methods

        get_id(): string;
        get_name(): string;
        set_name(value: string): void;
        get_icon(): Gio.Icon;
        set_icon(value: Gio.Icon): void;
        get_creation_date(): GLib.DateTime;
        set_creation_date(value: GLib.DateTime): void;
        get_modification_date(): GLib.DateTime;
        set_modification_date(value: GLib.DateTime): void;
        get_last_play_date(): GLib.DateTime;
        set_last_play_date(value: GLib.DateTime): void;
    }

    namespace MusicPlayer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            raise: () => void;
            'play-pause': () => void;
            previous: () => void;
            next: () => void;
            'activate-playlist': (arg0: never) => void;
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
        get_app_info(): Gio.AppInfo;
        get_desktop_file_name(): string;
        get_is_blacklisted(): boolean;
        set_is_blacklisted(value: boolean): void;
        get_title(): string;
        set_title(value: string): void;
        get_can_go_next(): boolean;
        set_can_go_next(value: boolean): void;
        get_can_go_previous(): boolean;
        set_can_go_previous(value: boolean): void;
        get_can_play(): boolean;
        set_can_play(value: boolean): void;
        get_can_pause(): boolean;
        set_can_pause(value: boolean): void;
        get_current_track(): TrackMetadata;
        set_current_track(value: TrackMetadata): void;
        get_playback_state(): PlaybackState;
        set_playback_state(value: PlaybackState | null): void;
        get_current_playlist(): Playlist;
        set_current_playlist(value: Playlist): void;
        get_track_menu(): Dbusmenu.Menuitem;
        set_track_menu(value: Dbusmenu.Menuitem): void;
        get_player_menu(): Dbusmenu.Menuitem;
        set_player_menu(value: Dbusmenu.Menuitem): void;
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

    type MetadataProviderClass = typeof MetadataProvider;
    abstract class MetadataProviderPrivate {
        static $gtype: GObject.GType<MetadataProviderPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ProgressSourceProviderClass = typeof ProgressSourceProvider;
    abstract class ProgressSourceProviderPrivate {
        static $gtype: GObject.GType<ProgressSourceProviderPrivate>;

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

    type DeprecatedScopeSearchClass = typeof DeprecatedScopeSearch;
    abstract class DeprecatedScopeSearchPrivate {
        static $gtype: GObject.GType<DeprecatedScopeSearchPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type AggregatedScopeSearchClass = typeof AggregatedScopeSearch;
    abstract class AggregatedScopeSearchPrivate {
        static $gtype: GObject.GType<AggregatedScopeSearchPrivate>;

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

    type PaymentPreviewClass = typeof PaymentPreview;
    abstract class PaymentPreviewPrivate {
        static $gtype: GObject.GType<PaymentPreviewPrivate>;

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

    type SocialPreviewCommentClass = typeof SocialPreviewComment;
    abstract class SocialPreviewCommentPrivate {
        static $gtype: GObject.GType<SocialPreviewCommentPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ActivationResponseClass = typeof ActivationResponse;
    abstract class ActivationResponsePrivate {
        static $gtype: GObject.GType<ActivationResponsePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type AggregatorActivationClass = typeof AggregatorActivation;
    abstract class AggregatorActivationPrivate {
        static $gtype: GObject.GType<AggregatorActivationPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type FilterSetClass = typeof FilterSet;
    abstract class FilterSetPrivate {
        static $gtype: GObject.GType<FilterSetPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type CategorySetClass = typeof CategorySet;
    abstract class CategorySetPrivate {
        static $gtype: GObject.GType<CategorySetPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SchemaClass = typeof Schema;
    abstract class SchemaPrivate {
        static $gtype: GObject.GType<SchemaPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    class SchemaFieldInfo {
        static $gtype: GObject.GType<SchemaFieldInfo>;

        // Fields

        name: string;
        schema: string;
        type: SchemaFieldType;

        // Constructors

        _init(...args: any[]): void;
    }

    type CancellableClass = typeof Cancellable;
    abstract class CancellablePrivate {
        static $gtype: GObject.GType<CancellablePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ScopeSearchBaseClass = typeof ScopeSearchBase;
    abstract class ScopeSearchBasePrivate {
        static $gtype: GObject.GType<ScopeSearchBasePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ResultSetClass = typeof ResultSet;
    abstract class ResultSetPrivate {
        static $gtype: GObject.GType<ResultSetPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type AbstractPreviewClass = typeof AbstractPreview;
    abstract class AbstractPreviewPrivate {
        static $gtype: GObject.GType<AbstractPreviewPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ResultPreviewerClass = typeof ResultPreviewer;
    abstract class ResultPreviewerPrivate {
        static $gtype: GObject.GType<ResultPreviewerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SearchMetadataClass = typeof SearchMetadata;
    abstract class SearchMetadataPrivate {
        static $gtype: GObject.GType<SearchMetadataPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type GeoCoordinateClass = typeof GeoCoordinate;
    abstract class GeoCoordinatePrivate {
        static $gtype: GObject.GType<GeoCoordinatePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type AbstractScopeClass = typeof AbstractScope;
    abstract class AbstractScopePrivate {
        static $gtype: GObject.GType<AbstractScopePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ScopeDBusConnectorClass = typeof ScopeDBusConnector;
    abstract class ScopeDBusConnectorPrivate {
        static $gtype: GObject.GType<ScopeDBusConnectorPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DeprecatedScopeBaseClass = typeof DeprecatedScopeBase;
    abstract class DeprecatedScopeBasePrivate {
        static $gtype: GObject.GType<DeprecatedScopeBasePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DeprecatedScopeClass = typeof DeprecatedScope;
    abstract class DeprecatedScopePrivate {
        static $gtype: GObject.GType<DeprecatedScopePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type AggregatorScopeClass = typeof AggregatorScope;
    abstract class AggregatorScopePrivate {
        static $gtype: GObject.GType<AggregatorScopePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type MasterScopeClass = typeof MasterScope;
    abstract class MasterScopePrivate {
        static $gtype: GObject.GType<MasterScopePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SimpleScopeClass = typeof SimpleScope;
    abstract class SimpleScopePrivate {
        static $gtype: GObject.GType<SimpleScopePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ScopeLoaderClass = typeof ScopeLoader;
    abstract class ScopeLoaderPrivate {
        static $gtype: GObject.GType<ScopeLoaderPrivate>;

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

        // Constructors

        _init(...args: any[]): void;

        // Static methods

        static create(
            uri: string,
            icon_hint: string,
            category: number,
            result_type: ResultType,
            mimetype: string,
            title: string,
            comment: string,
            dnd_uri: string,
            metadata: { [key: string]: any } | GLib.HashTable<string, GLib.Variant>,
        ): ScopeResult;
        static create_from_variant(variant: GLib.Variant): ScopeResult;
    }

    class SearchContext {
        static $gtype: GObject.GType<SearchContext>;

        // Fields

        search_query: string;
        search_type: SearchType;
        filter_state: FilterSet;
        search_metadata: SearchMetadata;
        result_set: ResultSet;
        cancellable: Cancellable;

        // Constructors

        _init(...args: any[]): void;

        // Static methods

        static create(
            search_query: string,
            search_type: SearchType,
            filter_state: FilterSet,
            metadata: { [key: string]: any } | GLib.HashTable<string, GLib.Variant>,
            result_set: ResultSet,
            cancellable: Cancellable,
        ): SearchContext;

        // Methods

        set_search_metadata(metadata: SearchMetadata): void;
    }

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
