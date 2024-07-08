/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './unity-7.0-ambient.d.ts';

/**
 * Unity-7.0
 */

import type GLib from '@girs/glib-2.0';
import type Dbusmenu from '@girs/dbusmenu-0.4';
import type GObject from '@girs/gobject-2.0';
import type Dee from '@girs/dee-1.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';

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
    const SCOPE_API_VERSION: number;
    function category_renderer_from_string(renderer_name: string): CategoryRenderer;
    function category_renderer_to_string(val: CategoryRenderer): string;
    function category_content_type_from_string(content_type: string): CategoryContentType;
    function category_content_type_to_string(val: CategoryContentType): string;
    function filter_renderer_to_string(renderer: FilterRenderer): string;
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
    module AppInfoManager {
        // Signal callback interfaces

        interface Changed {
            (id: string, new_appinfo: Gio.AppInfo): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

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
        static get_default(): AppInfoManager;

        // Own methods of Unity.AppInfoManager

        lookup(id: string): Gio.AppInfo;
        get_categories(id: string): string[];
        get_keywords(id: string): string[];
        get_path(id: string): string;
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

        set_colorize_rgba(r: number, g: number, b: number, a: number): void;
        to_string(): string;
        get_icon(): Gio.Icon;
        set_icon(value: Gio.Icon): void;
        get_ribbon(): string;
        set_ribbon(value: string): void;
        get_category(): CategoryType;
        set_category(value: CategoryType): void;
        get_size_hint(): IconSizeHint;
        set_size_hint(value: IconSizeHint): void;
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

    class Inspector extends GObject.Object {
        static $gtype: GObject.GType<Inspector>;

        // Own properties of Unity.Inspector

        get unity_running(): boolean;
        get unityRunning(): boolean;
        get unity_bus_name(): string;
        get unityBusName(): string;

        // Constructors of Unity.Inspector

        constructor(properties?: Partial<Inspector.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own static methods of Unity.Inspector

        static get_default(): Inspector;

        // Own methods of Unity.Inspector

        get_unity_running(): boolean;
        get_unity_bus_name(): string;
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

        // Own methods of Unity.LauncherEntry

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

        static get_default(): LauncherFavorites;

        // Own methods of Unity.LauncherFavorites

        has_app_info(appinfo: Gio.AppInfo): boolean;
        has_app_id(app_id: string): boolean;
        lookup(app_id: string): Gio.AppInfo;
        enumerate_ids(): string[];
        enumerate_app_infos(): Gio.AppInfo[];
    }

    module MetadataProvider {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class MetadataProvider extends GObject.Object {
        static $gtype: GObject.GType<MetadataProvider>;

        // Constructors of Unity.MetadataProvider

        constructor(properties?: Partial<MetadataProvider.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module ProgressSourceProvider {
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

        // Own properties of Unity.ProgressSourceProvider

        get dbus_name(): string;
        get dbusName(): string;
        get dbus_path(): string;
        get dbusPath(): string;

        // Constructors of Unity.ProgressSourceProvider

        constructor(properties?: Partial<ProgressSourceProvider.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](dbus_name: string, dbus_path: string): ProgressSourceProvider;

        // Own methods of Unity.ProgressSourceProvider

        get_dbus_name(): string;
        get_dbus_path(): string;
    }

    module Category {
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

        // Own properties of Unity.Category

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

        // Constructors of Unity.Category

        constructor(properties?: Partial<Category.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: string, name: string, icon_hint: Gio.Icon, renderer: CategoryRenderer): Category;

        // Own methods of Unity.Category

        add_metadata_provider(provider: MetadataProvider): void;
        get_id(): string;
        get_name(): string;
        get_icon_hint(): Gio.Icon;
        get_default_renderer(): CategoryRenderer;
        get_content_type(): CategoryContentType;
        set_content_type(value: CategoryContentType): void;
        get_renderer_hint(): string;
        set_renderer_hint(value: string): void;
        get_renderer(): string;
    }

    module Filter {
        // Signal callback interfaces

        interface Changed {
            (): void;
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
        set collapsed(val: boolean);
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

        // Own methods of Unity.Filter

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
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
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

        // Own methods of Unity.FilterOption

        get_id(): string;
        get_display_name(): string;
        get_icon_hint(): Gio.Icon;
        get_active(): boolean;
        set_active(value: boolean): void;
    }

    module OptionsFilter {
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

        // Own properties of Unity.OptionsFilter

        get sort_type(): OptionsFilterSortType;
        set sort_type(val: OptionsFilterSortType);
        get sortType(): OptionsFilterSortType;
        set sortType(val: OptionsFilterSortType);
        get show_all_button(): boolean;
        set show_all_button(val: boolean);
        get showAllButton(): boolean;
        set showAllButton(val: boolean);

        // Own fields of Unity.OptionsFilter

        options: FilterOption[];

        // Constructors of Unity.OptionsFilter

        constructor(properties?: Partial<OptionsFilter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): OptionsFilter;

        // Own methods of Unity.OptionsFilter

        add_option(id: string, display_name: string, icon_hint: Gio.Icon): FilterOption;
        get_option(id: string): FilterOption;
        remove_option(id: string): boolean;
        get_sort_type(): OptionsFilterSortType;
        set_sort_type(value: OptionsFilterSortType): void;
        get_show_all_button(): boolean;
        set_show_all_button(value: boolean): void;
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

        // Own methods of Unity.RatingsFilter

        get_rating(): number;
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

        // Own properties of Unity.PreferencesManager

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

        // Constructors of Unity.PreferencesManager

        constructor(properties?: Partial<PreferencesManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own static methods of Unity.PreferencesManager

        static get_default(): PreferencesManager;

        // Own methods of Unity.PreferencesManager

        get_remote_content_search(): PreferencesManagerRemoteContent;
        set_remote_content_search(value: PreferencesManagerRemoteContent): void;
        get_always_search(): string[];
        set_always_search(value: string[]): void;
        get_home_lens_priority(): string[];
        set_home_lens_priority(value: string[]): void;
        get_home_lens_default_view(): string[];
        set_home_lens_default_view(value: string[]): void;
        get_disabled_scopes(): string[];
        set_disabled_scopes(value: string[]): void;
    }

    module DeprecatedScopeSearch {
        // Signal callback interfaces

        interface Finished {
            (): void;
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

        // Own properties of Unity.DeprecatedScopeSearch

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

        // Constructors of Unity.DeprecatedScopeSearch

        constructor(properties?: Partial<DeprecatedScopeSearch.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of Unity.DeprecatedScopeSearch

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'finished', callback: (_source: this) => void): number;
        connect_after(signal: 'finished', callback: (_source: this) => void): number;
        emit(signal: 'finished'): void;

        // Own methods of Unity.DeprecatedScopeSearch

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

    module AggregatedScopeSearch {
        // Signal callback interfaces

        interface TransactionComplete {
            (origin_scope_id: string): void;
        }

        interface CategoryOrderChanged {
            (category_indices: number[]): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DeprecatedScopeSearch.ConstructorProps {}
    }

    class AggregatedScopeSearch extends DeprecatedScopeSearch {
        static $gtype: GObject.GType<AggregatedScopeSearch>;

        // Constructors of Unity.AggregatedScopeSearch

        constructor(properties?: Partial<AggregatedScopeSearch.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            owner: AggregatorScope,
            channel_id: string,
            hints: { [key: string]: any } | GLib.HashTable<string, GLib.Variant>,
            results_model: Dee.SerializableModel,
        ): AggregatedScopeSearch;

        // Own signals of Unity.AggregatedScopeSearch

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'transaction-complete', callback: (_source: this, origin_scope_id: string) => void): number;
        connect_after(
            signal: 'transaction-complete',
            callback: (_source: this, origin_scope_id: string) => void,
        ): number;
        emit(signal: 'transaction-complete', origin_scope_id: string): void;
        connect(
            signal: 'category-order-changed',
            callback: (_source: this, category_indices: number[]) => void,
        ): number;
        connect_after(
            signal: 'category-order-changed',
            callback: (_source: this, category_indices: number[]) => void,
        ): number;
        emit(signal: 'category-order-changed', category_indices: number[]): void;

        // Own methods of Unity.AggregatedScopeSearch

        search_scope(
            scope_id: string,
            search_string: string,
            search_type: SearchType,
            hints: { [key: string]: any } | GLib.HashTable<string, GLib.Variant>,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        search_scope_finish(_res_: Gio.AsyncResult): GLib.HashTable<string, GLib.Variant>;
        push_results(
            scope_id: string,
            results_model: Dee.SerializableModel,
            category_ids: string[],
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        push_results_finish(_res_: Gio.AsyncResult): void;
        push_filter_settings(filters: FilterSet): void;
    }

    module Preview {
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

        // Own methods of Unity.Preview

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

        static with_uri(uri: string, display_name: string, icon_hint: Gio.Icon): PreviewAction;

        // Own signals of Unity.PreviewAction

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'activated', callback: (_source: this, uri: string) => ActivationResponse): number;
        connect_after(signal: 'activated', callback: (_source: this, uri: string) => ActivationResponse): number;
        emit(signal: 'activated', uri: string): void;

        // Own methods of Unity.PreviewAction

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

        // Own methods of Unity.InfoHint

        get_id(): string;
        get_display_name(): string;
        get_icon_hint(): Gio.Icon;
        get_data(): GLib.Variant;
        // Conflicted with GObject.Object.get_data
        get_data(...args: never[]): any;
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
        get_app_icon(): Gio.Icon;
        set_app_icon(value: Gio.Icon): void;
        get_license(): string;
        set_license(value: string): void;
        get_copyright(): string;
        set_copyright(value: string): void;
        get_last_update(): string;
        set_last_update(value: string): void;
    }

    module MusicPreview {
        // Constructor properties interface

        interface ConstructorProps extends Preview.ConstructorProps {}
    }

    class MusicPreview extends Preview {
        static $gtype: GObject.GType<MusicPreview>;

        // Constructors of Unity.MusicPreview

        constructor(properties?: Partial<MusicPreview.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](title: string, subtitle: string, image: Gio.Icon): MusicPreview;

        // Own methods of Unity.MusicPreview

        add_track(track: TrackMetadata): void;
    }

    module PaymentPreview {
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

        // Own properties of Unity.PaymentPreview

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

        // Constructors of Unity.PaymentPreview

        constructor(properties?: Partial<PaymentPreview.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](title: string, subtitle: string, image: Gio.Icon): PaymentPreview;

        static for_type(title: string, subtitle: string, image: Gio.Icon, type: PaymentPreviewType): PaymentPreview;

        static for_application(title: string, subtitle: string, image: Gio.Icon): PaymentPreview;

        static for_music(title: string, subtitle: string, image: Gio.Icon): PaymentPreview;

        static for_error(title: string, subtitle: string, image: Gio.Icon): PaymentPreview;

        // Own methods of Unity.PaymentPreview

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
        set_preview_type(value: PaymentPreviewType): void;
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
        get_year(): string;
        set_year(value: string): void;
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
        get_avatar(): Gio.Icon;
        set_avatar(value: Gio.Icon): void;
        get_content(): string;
        set_content(value: string): void;
        get_sender(): string;
        set_sender(value: string): void;
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

        // Own methods of Unity.SocialPreviewComment

        get_id(): string;
        get_name(): string;
        get_text(): string;
        get_time(): string;
    }

    module ActivationResponse {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handled: HandledType;
            goto_uri: string;
            gotoUri: string;
        }
    }

    class ActivationResponse extends GObject.Object {
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

        static with_search(
            search_string: string,
            filter_set: FilterSet,
            search_metadata: SearchMetadata,
        ): ActivationResponse;

        static with_preview(preview: Preview): ActivationResponse;

        // Own methods of Unity.ActivationResponse

        get_handled(): HandledType;
        get_goto_uri(): string;
        set_goto_uri(value: string): void;
    }

    module AggregatorActivation {
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

        // Own properties of Unity.AggregatorActivation

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

        // Constructors of Unity.AggregatorActivation

        constructor(properties?: Partial<AggregatorActivation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            channel_id: string,
            scope_id: string,
            action_type: number,
            result: ScopeResult,
        ): AggregatorActivation;

        // Own methods of Unity.AggregatorActivation

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

    module FilterSet {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class FilterSet extends GObject.Object {
        static $gtype: GObject.GType<FilterSet>;

        // Constructors of Unity.FilterSet

        constructor(properties?: Partial<FilterSet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FilterSet;

        // Own virtual methods of Unity.FilterSet

        vfunc_add(filter: Filter): void;
        vfunc_get_filter_by_id(filter_id: string): Filter;
        vfunc_get_filters(): Filter[];

        // Own methods of Unity.FilterSet

        add(filter: Filter): void;
        get_filter_by_id(filter_id: string): Filter;
        get_filters(): Filter[];
    }

    module CategorySet {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class CategorySet extends GObject.Object {
        static $gtype: GObject.GType<CategorySet>;

        // Constructors of Unity.CategorySet

        constructor(properties?: Partial<CategorySet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CategorySet;

        // Own virtual methods of Unity.CategorySet

        vfunc_add(category: Category): void;
        vfunc_get_categories(): Category[];

        // Own methods of Unity.CategorySet

        add(category: Category): void;
        get_categories(): Category[];
    }

    module Schema {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Schema extends GObject.Object {
        static $gtype: GObject.GType<Schema>;

        // Constructors of Unity.Schema

        constructor(properties?: Partial<Schema.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Schema;

        // Own virtual methods of Unity.Schema

        vfunc_add_field(name: string, schema: string, type: SchemaFieldType): void;
        vfunc_get_fields(): SchemaFieldInfo[];

        // Own methods of Unity.Schema

        add_field(name: string, schema: string, type: SchemaFieldType): void;
        get_fields(): SchemaFieldInfo[];
    }

    module Cancellable {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class Cancellable extends GObject.Object {
        static $gtype: GObject.GType<Cancellable>;

        // Constructors of Unity.Cancellable

        constructor(properties?: Partial<Cancellable.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own static methods of Unity.Cancellable

        static create(): Cancellable;

        // Own virtual methods of Unity.Cancellable

        vfunc_cancel(): void;
        vfunc_is_cancelled(): boolean;
        vfunc_get_gcancellable(): Gio.Cancellable;

        // Own methods of Unity.Cancellable

        cancel(): void;
        is_cancelled(): boolean;
        get_gcancellable(): Gio.Cancellable;
    }

    module ScopeSearchBase {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class ScopeSearchBase extends GObject.Object {
        static $gtype: GObject.GType<ScopeSearchBase>;

        // Constructors of Unity.ScopeSearchBase

        constructor(properties?: Partial<ScopeSearchBase.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Unity.ScopeSearchBase

        vfunc_run(): void;
        vfunc_run_async(async_callback: ScopeSearchBaseCallback): void;
        vfunc_set_search_context(ctx: SearchContext): void;

        // Own methods of Unity.ScopeSearchBase

        run(): void;
        run_async(async_callback: ScopeSearchBaseCallback): void;
        set_search_context(ctx: SearchContext): void;
    }

    module ResultSet {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class ResultSet extends GObject.Object {
        static $gtype: GObject.GType<ResultSet>;

        // Own fields of Unity.ResultSet

        ttl: number;

        // Constructors of Unity.ResultSet

        constructor(properties?: Partial<ResultSet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Unity.ResultSet

        vfunc_add_result(result: ScopeResult): void;
        vfunc_add_result_from_variant(variant: GLib.Variant): void;
        vfunc_flush(): void;

        // Own methods of Unity.ResultSet

        add_result(result: ScopeResult): void;
        add_result_from_variant(variant: GLib.Variant): void;
        flush(): void;
    }

    module AbstractPreview {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class AbstractPreview extends GObject.Object {
        static $gtype: GObject.GType<AbstractPreview>;

        // Constructors of Unity.AbstractPreview

        constructor(properties?: Partial<AbstractPreview.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Unity.AbstractPreview

        vfunc_serialize_as(serialization_type: SerializationType): Uint8Array;

        // Own methods of Unity.AbstractPreview

        serialize_as(serialization_type: SerializationType): Uint8Array;
    }

    module ResultPreviewer {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class ResultPreviewer extends GObject.Object {
        static $gtype: GObject.GType<ResultPreviewer>;

        // Own fields of Unity.ResultPreviewer

        metadata: SearchMetadata;
        cancellable: Cancellable;

        // Constructors of Unity.ResultPreviewer

        constructor(properties?: Partial<ResultPreviewer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Unity.ResultPreviewer

        vfunc_run(): AbstractPreview;
        vfunc_run_async(async_callback: AbstractPreviewCallback): void;

        // Own methods of Unity.ResultPreviewer

        run(): AbstractPreview;
        run_async(async_callback: AbstractPreviewCallback): void;
        set_scope_result(scope_result: ScopeResult): void;
        set_search_metadata(search_metadata: SearchMetadata): void;
    }

    module SearchMetadata {
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

        // Own properties of Unity.SearchMetadata

        get locale(): string;
        get form_factor(): string;
        get formFactor(): string;
        get location(): GeoCoordinate;

        // Constructors of Unity.SearchMetadata

        constructor(properties?: Partial<SearchMetadata.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SearchMetadata;

        // Own static methods of Unity.SearchMetadata

        static create(metadata: { [key: string]: any } | GLib.HashTable<string, GLib.Variant>): SearchMetadata;
        static create_from_variant(metadata: GLib.Variant): SearchMetadata;

        // Own methods of Unity.SearchMetadata

        get_locale(): string;
        get_form_factor(): string;
        get_location(): GeoCoordinate;
    }

    module GeoCoordinate {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class GeoCoordinate extends GObject.Object {
        static $gtype: GObject.GType<GeoCoordinate>;

        // Own fields of Unity.GeoCoordinate

        latitude: number;
        longitude: number;
        altitude: number;

        // Constructors of Unity.GeoCoordinate

        constructor(properties?: Partial<GeoCoordinate.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](latitude_: number, longitude_: number): GeoCoordinate;

        static with_altitude(latitude_: number, longitude_: number, altitude_: number): GeoCoordinate;

        // Own methods of Unity.GeoCoordinate

        has_valid_altitude(): boolean;
    }

    module AbstractScope {
        // Signal callback interfaces

        interface ResultsInvalidatedInternal {
            (search_type: SearchType): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class AbstractScope extends GObject.Object {
        static $gtype: GObject.GType<AbstractScope>;

        // Constructors of Unity.AbstractScope

        constructor(properties?: Partial<AbstractScope.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of Unity.AbstractScope

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(
            signal: 'results-invalidated-internal',
            callback: (_source: this, search_type: SearchType) => void,
        ): number;
        connect_after(
            signal: 'results-invalidated-internal',
            callback: (_source: this, search_type: SearchType) => void,
        ): number;
        emit(signal: 'results-invalidated-internal', search_type: SearchType): void;

        // Own virtual methods of Unity.AbstractScope

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

        // Own methods of Unity.AbstractScope

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
        results_invalidated(search_type: SearchType): void;
    }

    module ScopeDBusConnector {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            scope: AbstractScope;
        }
    }

    class ScopeDBusConnector extends GObject.Object {
        static $gtype: GObject.GType<ScopeDBusConnector>;

        // Own properties of Unity.ScopeDBusConnector

        get scope(): AbstractScope;

        // Constructors of Unity.ScopeDBusConnector

        constructor(properties?: Partial<ScopeDBusConnector.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](scope: AbstractScope): ScopeDBusConnector;

        // Own static methods of Unity.ScopeDBusConnector

        static run(): void;
        static quit(): void;

        // Own methods of Unity.ScopeDBusConnector

        ['export'](): void;
        unexport(): void;
        get_scope(): AbstractScope;
    }

    module DeprecatedScopeBase {
        // Signal callback interfaces

        interface ActiveSourcesChanged {
            (active_ids: string[]): void;
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

        // Own properties of Unity.DeprecatedScopeBase

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

        // Constructors of Unity.DeprecatedScopeBase

        constructor(properties?: Partial<DeprecatedScopeBase.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of Unity.DeprecatedScopeBase

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'active-sources-changed', callback: (_source: this, active_ids: string[]) => void): number;
        connect_after(
            signal: 'active-sources-changed',
            callback: (_source: this, active_ids: string[]) => void,
        ): number;
        emit(signal: 'active-sources-changed', active_ids: string[]): void;

        // Own methods of Unity.DeprecatedScopeBase

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

    module DeprecatedScope {
        // Signal callback interfaces

        interface ActivateUri {
            (uri: string): ActivationResponse;
        }

        interface PreviewUri {
            (uri: string): Preview;
        }

        interface GenerateSearchKey {
            (search: DeprecatedScopeSearch): string;
        }

        interface SearchChanged {
            (search: DeprecatedScopeSearch, search_type: SearchType, cancellable: Gio.Cancellable): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DeprecatedScopeBase.ConstructorProps {}
    }

    class DeprecatedScope extends DeprecatedScopeBase {
        static $gtype: GObject.GType<DeprecatedScope>;

        // Constructors of Unity.DeprecatedScope

        constructor(properties?: Partial<DeprecatedScope.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](dbus_path_: string, id_: string): DeprecatedScope;

        // Own signals of Unity.DeprecatedScope

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'activate-uri', callback: (_source: this, uri: string) => ActivationResponse): number;
        connect_after(signal: 'activate-uri', callback: (_source: this, uri: string) => ActivationResponse): number;
        emit(signal: 'activate-uri', uri: string): void;
        connect(signal: 'preview-uri', callback: (_source: this, uri: string) => Preview): number;
        connect_after(signal: 'preview-uri', callback: (_source: this, uri: string) => Preview): number;
        emit(signal: 'preview-uri', uri: string): void;
        connect(
            signal: 'generate-search-key',
            callback: (_source: this, search: DeprecatedScopeSearch) => string,
        ): number;
        connect_after(
            signal: 'generate-search-key',
            callback: (_source: this, search: DeprecatedScopeSearch) => string,
        ): number;
        emit(signal: 'generate-search-key', search: DeprecatedScopeSearch): void;
        connect(
            signal: 'search-changed',
            callback: (
                _source: this,
                search: DeprecatedScopeSearch,
                search_type: SearchType,
                cancellable: Gio.Cancellable,
            ) => void,
        ): number;
        connect_after(
            signal: 'search-changed',
            callback: (
                _source: this,
                search: DeprecatedScopeSearch,
                search_type: SearchType,
                cancellable: Gio.Cancellable,
            ) => void,
        ): number;
        emit(
            signal: 'search-changed',
            search: DeprecatedScopeSearch,
            search_type: SearchType,
            cancellable: Gio.Cancellable,
        ): void;

        // Own virtual methods of Unity.DeprecatedScope

        vfunc_preview_result(result: ScopeResult, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_preview_result_finish(_res_: Gio.AsyncResult): Preview;
        vfunc_activate_result(result: ScopeResult, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_activate_result_finish(_res_: Gio.AsyncResult): ActivationResponse;

        // Own methods of Unity.DeprecatedScope

        preview_result(result: ScopeResult, _callback_: Gio.AsyncReadyCallback<this>): void;
        preview_result_finish(_res_: Gio.AsyncResult): Preview;
        activate_result(result: ScopeResult, _callback_: Gio.AsyncReadyCallback<this>): void;
        activate_result_finish(_res_: Gio.AsyncResult): ActivationResponse;
        queue_search_changed(search_type: SearchType): void;
    }

    module AggregatorScope {
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

        // Own properties of Unity.AggregatorScope

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

        // Constructors of Unity.AggregatorScope

        constructor(properties?: Partial<AggregatorScope.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Unity.AggregatorScope

        vfunc_category_index_for_scope_id(scope_id: string): number;
        vfunc_search(scope_search: AggregatedScopeSearch, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_search_finish(_res_: Gio.AsyncResult): void;
        vfunc_activate(activation: AggregatorActivation, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_activate_finish(_res_: Gio.AsyncResult): ActivationResponse;

        // Own methods of Unity.AggregatorScope

        category_index_for_scope_id(scope_id: string): number;
        add_sorter(category_index: number, field: string, flags: AggregatorScopeSortFlags): void;
        add_constraint(category_index: number, field: string): void;
        search(scope_search: AggregatedScopeSearch, _callback_: Gio.AsyncReadyCallback<this>): void;
        search_finish(_res_: Gio.AsyncResult): void;
        activate(activation: AggregatorActivation, _callback_: Gio.AsyncReadyCallback<this>): void;
        activate_finish(_res_: Gio.AsyncResult): ActivationResponse;
        get_merge_mode(): AggregatorScopeMergeMode;
        set_merge_mode(value: AggregatorScopeMergeMode): void;
        get_proxy_filter_hints(): boolean;
        set_proxy_filter_hints(value: boolean): void;
        get_automatic_flushing(): boolean;
        set_automatic_flushing(value: boolean): void;
    }

    module MasterScope {
        // Constructor properties interface

        interface ConstructorProps extends AggregatorScope.ConstructorProps {
            no_content_hint: string;
            noContentHint: string;
        }
    }

    class MasterScope extends AggregatorScope {
        static $gtype: GObject.GType<MasterScope>;

        // Own properties of Unity.MasterScope

        get no_content_hint(): string;
        set no_content_hint(val: string);
        get noContentHint(): string;
        set noContentHint(val: string);

        // Constructors of Unity.MasterScope

        constructor(properties?: Partial<MasterScope.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](dbus_path_: string, id_: string): MasterScope;

        // Own methods of Unity.MasterScope

        get_no_content_hint(): string;
        set_no_content_hint(value: string): void;
    }

    module SimpleScope {
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

        // Own properties of Unity.SimpleScope

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

        // Constructors of Unity.SimpleScope

        constructor(properties?: Partial<SimpleScope.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SimpleScope;

        // Own methods of Unity.SimpleScope

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

    module ScopeLoader {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class ScopeLoader extends GObject.Object {
        static $gtype: GObject.GType<ScopeLoader>;

        // Constructors of Unity.ScopeLoader

        constructor(properties?: Partial<ScopeLoader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ScopeLoader;

        // Own virtual methods of Unity.ScopeLoader

        vfunc_get_scopes(module_name: string, module_type: string): AbstractScope[];
        vfunc_export_scopes(scopes: AbstractScope[]): void;

        // Own methods of Unity.ScopeLoader

        get_scopes(module_name: string, module_type: string): AbstractScope[];
        export_scopes(scopes: AbstractScope[]): void;
        load_group(group_name: string): void;
        load_scope(scope_id: string): void;
        load_module(module: string, module_type: string): void;
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

        // Own methods of Unity.TrackMetadata

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

        // Own methods of Unity.Playlist

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
        connect(signal: 'play-pause', callback: (_source: this) => void): number;
        connect_after(signal: 'play-pause', callback: (_source: this) => void): number;
        emit(signal: 'play-pause'): void;
        connect(signal: 'previous', callback: (_source: this) => void): number;
        connect_after(signal: 'previous', callback: (_source: this) => void): number;
        emit(signal: 'previous'): void;
        connect(signal: 'next', callback: (_source: this) => void): number;
        connect_after(signal: 'next', callback: (_source: this) => void): number;
        emit(signal: 'next'): void;
        connect(signal: 'activate-playlist', callback: (_source: this, playlist_id: never) => void): number;
        connect_after(signal: 'activate-playlist', callback: (_source: this, playlist_id: never) => void): number;
        emit(signal: 'activate-playlist', playlist_id: never): void;

        // Own methods of Unity.MusicPlayer

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
        set_playback_state(value: PlaybackState): void;
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

    type MetadataProviderClass = typeof MetadataProvider;
    abstract class MetadataProviderPrivate {
        static $gtype: GObject.GType<MetadataProviderPrivate>;

        // Constructors of Unity.MetadataProviderPrivate

        _init(...args: any[]): void;
    }

    type ProgressSourceProviderClass = typeof ProgressSourceProvider;
    abstract class ProgressSourceProviderPrivate {
        static $gtype: GObject.GType<ProgressSourceProviderPrivate>;

        // Constructors of Unity.ProgressSourceProviderPrivate

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

    type DeprecatedScopeSearchClass = typeof DeprecatedScopeSearch;
    abstract class DeprecatedScopeSearchPrivate {
        static $gtype: GObject.GType<DeprecatedScopeSearchPrivate>;

        // Constructors of Unity.DeprecatedScopeSearchPrivate

        _init(...args: any[]): void;
    }

    type AggregatedScopeSearchClass = typeof AggregatedScopeSearch;
    abstract class AggregatedScopeSearchPrivate {
        static $gtype: GObject.GType<AggregatedScopeSearchPrivate>;

        // Constructors of Unity.AggregatedScopeSearchPrivate

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

    type PaymentPreviewClass = typeof PaymentPreview;
    abstract class PaymentPreviewPrivate {
        static $gtype: GObject.GType<PaymentPreviewPrivate>;

        // Constructors of Unity.PaymentPreviewPrivate

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

    type SocialPreviewCommentClass = typeof SocialPreviewComment;
    abstract class SocialPreviewCommentPrivate {
        static $gtype: GObject.GType<SocialPreviewCommentPrivate>;

        // Constructors of Unity.SocialPreviewCommentPrivate

        _init(...args: any[]): void;
    }

    type ActivationResponseClass = typeof ActivationResponse;
    abstract class ActivationResponsePrivate {
        static $gtype: GObject.GType<ActivationResponsePrivate>;

        // Constructors of Unity.ActivationResponsePrivate

        _init(...args: any[]): void;
    }

    type AggregatorActivationClass = typeof AggregatorActivation;
    abstract class AggregatorActivationPrivate {
        static $gtype: GObject.GType<AggregatorActivationPrivate>;

        // Constructors of Unity.AggregatorActivationPrivate

        _init(...args: any[]): void;
    }

    type FilterSetClass = typeof FilterSet;
    abstract class FilterSetPrivate {
        static $gtype: GObject.GType<FilterSetPrivate>;

        // Constructors of Unity.FilterSetPrivate

        _init(...args: any[]): void;
    }

    type CategorySetClass = typeof CategorySet;
    abstract class CategorySetPrivate {
        static $gtype: GObject.GType<CategorySetPrivate>;

        // Constructors of Unity.CategorySetPrivate

        _init(...args: any[]): void;
    }

    type SchemaClass = typeof Schema;
    abstract class SchemaPrivate {
        static $gtype: GObject.GType<SchemaPrivate>;

        // Constructors of Unity.SchemaPrivate

        _init(...args: any[]): void;
    }

    class SchemaFieldInfo {
        static $gtype: GObject.GType<SchemaFieldInfo>;

        // Own fields of Unity.SchemaFieldInfo

        name: string;
        schema: string;
        type: SchemaFieldType;

        // Constructors of Unity.SchemaFieldInfo

        _init(...args: any[]): void;
    }

    type CancellableClass = typeof Cancellable;
    abstract class CancellablePrivate {
        static $gtype: GObject.GType<CancellablePrivate>;

        // Constructors of Unity.CancellablePrivate

        _init(...args: any[]): void;
    }

    type ScopeSearchBaseClass = typeof ScopeSearchBase;
    abstract class ScopeSearchBasePrivate {
        static $gtype: GObject.GType<ScopeSearchBasePrivate>;

        // Constructors of Unity.ScopeSearchBasePrivate

        _init(...args: any[]): void;
    }

    type ResultSetClass = typeof ResultSet;
    abstract class ResultSetPrivate {
        static $gtype: GObject.GType<ResultSetPrivate>;

        // Constructors of Unity.ResultSetPrivate

        _init(...args: any[]): void;
    }

    type AbstractPreviewClass = typeof AbstractPreview;
    abstract class AbstractPreviewPrivate {
        static $gtype: GObject.GType<AbstractPreviewPrivate>;

        // Constructors of Unity.AbstractPreviewPrivate

        _init(...args: any[]): void;
    }

    type ResultPreviewerClass = typeof ResultPreviewer;
    abstract class ResultPreviewerPrivate {
        static $gtype: GObject.GType<ResultPreviewerPrivate>;

        // Constructors of Unity.ResultPreviewerPrivate

        _init(...args: any[]): void;
    }

    type SearchMetadataClass = typeof SearchMetadata;
    abstract class SearchMetadataPrivate {
        static $gtype: GObject.GType<SearchMetadataPrivate>;

        // Constructors of Unity.SearchMetadataPrivate

        _init(...args: any[]): void;
    }

    type GeoCoordinateClass = typeof GeoCoordinate;
    abstract class GeoCoordinatePrivate {
        static $gtype: GObject.GType<GeoCoordinatePrivate>;

        // Constructors of Unity.GeoCoordinatePrivate

        _init(...args: any[]): void;
    }

    type AbstractScopeClass = typeof AbstractScope;
    abstract class AbstractScopePrivate {
        static $gtype: GObject.GType<AbstractScopePrivate>;

        // Constructors of Unity.AbstractScopePrivate

        _init(...args: any[]): void;
    }

    type ScopeDBusConnectorClass = typeof ScopeDBusConnector;
    abstract class ScopeDBusConnectorPrivate {
        static $gtype: GObject.GType<ScopeDBusConnectorPrivate>;

        // Constructors of Unity.ScopeDBusConnectorPrivate

        _init(...args: any[]): void;
    }

    type DeprecatedScopeBaseClass = typeof DeprecatedScopeBase;
    abstract class DeprecatedScopeBasePrivate {
        static $gtype: GObject.GType<DeprecatedScopeBasePrivate>;

        // Constructors of Unity.DeprecatedScopeBasePrivate

        _init(...args: any[]): void;
    }

    type DeprecatedScopeClass = typeof DeprecatedScope;
    abstract class DeprecatedScopePrivate {
        static $gtype: GObject.GType<DeprecatedScopePrivate>;

        // Constructors of Unity.DeprecatedScopePrivate

        _init(...args: any[]): void;
    }

    type AggregatorScopeClass = typeof AggregatorScope;
    abstract class AggregatorScopePrivate {
        static $gtype: GObject.GType<AggregatorScopePrivate>;

        // Constructors of Unity.AggregatorScopePrivate

        _init(...args: any[]): void;
    }

    type MasterScopeClass = typeof MasterScope;
    abstract class MasterScopePrivate {
        static $gtype: GObject.GType<MasterScopePrivate>;

        // Constructors of Unity.MasterScopePrivate

        _init(...args: any[]): void;
    }

    type SimpleScopeClass = typeof SimpleScope;
    abstract class SimpleScopePrivate {
        static $gtype: GObject.GType<SimpleScopePrivate>;

        // Constructors of Unity.SimpleScopePrivate

        _init(...args: any[]): void;
    }

    type ScopeLoaderClass = typeof ScopeLoader;
    abstract class ScopeLoaderPrivate {
        static $gtype: GObject.GType<ScopeLoaderPrivate>;

        // Constructors of Unity.ScopeLoaderPrivate

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

    class ScopeResult {
        static $gtype: GObject.GType<ScopeResult>;

        // Own fields of Unity.ScopeResult

        uri: string;
        icon_hint: string;
        category: number;
        result_type: ResultType;
        mimetype: string;
        title: string;
        comment: string;
        dnd_uri: string;

        // Constructors of Unity.ScopeResult

        _init(...args: any[]): void;

        // Own static methods of Unity.ScopeResult

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

        // Own fields of Unity.SearchContext

        search_query: string;
        search_type: SearchType;
        filter_state: FilterSet;
        search_metadata: SearchMetadata;
        result_set: ResultSet;
        cancellable: Cancellable;

        // Constructors of Unity.SearchContext

        _init(...args: any[]): void;

        // Own static methods of Unity.SearchContext

        static create(
            search_query: string,
            search_type: SearchType,
            filter_state: FilterSet,
            metadata: { [key: string]: any } | GLib.HashTable<string, GLib.Variant>,
            result_set: ResultSet,
            cancellable: Cancellable,
        ): SearchContext;

        // Own methods of Unity.SearchContext

        set_search_metadata(metadata: SearchMetadata): void;
    }

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
