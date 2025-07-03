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
import type libxml2 from '@girs/libxml2-2.0';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace Liferea {
    /**
     * Liferea-3.0
     */

    export namespace feedListFindType {
        export const $gtype: GObject.GType<feedListFindType>;
    }

    enum feedListFindType {
        ODE_BY_URL,
        ODE_BY_ID,
        OLDER_BY_TITLE,
    }

    export namespace itemViewMode {
        export const $gtype: GObject.GType<itemViewMode>;
    }

    enum itemViewMode {
        SINGLE_ITEM,
        NODE_INFO,
    }

    export namespace lifereaIcon {
        export const $gtype: GObject.GType<lifereaIcon>;
    }

    enum lifereaIcon {
        CON_UNREAD,
        CON_FLAG,
        CON_UNAVAILABLE,
        CON_DEFAULT,
        CON_FOLDER,
        CON_VFOLDER,
        CON_NEWSBIN,
        AX_ICONS,
    }

    export namespace nodeSourceState {
        export const $gtype: GObject.GType<nodeSourceState>;
    }

    enum nodeSourceState {
        NONE,
        IN_PROGRESS,
        ACTIVE,
        NO_AUTH,
        MIGRATE,
    }

    export namespace nodeViewSortType {
        export const $gtype: GObject.GType<nodeViewSortType>;
    }

    enum nodeViewSortType {
        TIME,
        TITLE,
        PARENT,
        STATE,
    }

    export namespace nodeViewType {
        export const $gtype: GObject.GType<nodeViewType>;
    }

    enum nodeViewType {
        NORMAL,
        WIDE,
        AUTO,
    }
    const NODE_SOURCE_MAX_AUTH_FAILURES: number;
    const NODE_SOURCE_TYPE_DUMMY_ID: string;
    /**
     * Method to query whether there is an active password store.
     *
     * `returns` TRUE if there is a password store
     */
    function auth_has_active_store(): boolean;
    /**
     * `param` authId		a node id
     * `param` username
     * `param` password
     *
     * Allow plugins to provide authentication infos
     * @param authId
     * @param username
     * @param password
     */
    function auth_info_from_store(authId: string, username: string, password: string): void;
    /**
     * Return auth information for a given node. Each extension able to
     * supply a user name and password for the given id is to synchronously call
     * liferea_auth_info_from_store() to set them.
     *
     * `param` authId		a node id
     * `param` username		reference to return username
     * `param` password		reference to return password
     * @param authId
     */
    function auth_info_query(authId: string): void;
    /**
     * `param` subscription		pointer to a subscription
     *
     * Save given authentication info of a given subscription into password store (if available).
     * @param subscription
     */
    function auth_info_store(subscription?: any | null): void;
    /**
     * Get MIME type from enclosure string
     * @param str enclosure string to parse
     * @returns MIME type string, free after use
     */
    function enclosure_get_mime(str: string): string;
    /**
     * Get URL from enclosure string
     * @param str enclosure string to parse
     * @returns URL string, free after use
     */
    function enclosure_get_url(str: string): string;
    /**
     * Serialize enclosure infos to string.
     * @param url the enclosure URL
     * @param mime the MIME type (optional, can be NULL)
     * @param size the enclosure size (optional, can be 0, and also -1)
     * @param downloaded downloading state (TRUE=downloaded)
     * @returns new string (to be free'd using g_free)
     */
    function enclosure_values_to_string(url: string, mime: string, size: number, downloaded: boolean): string;
    /**
     * Takes a file name relative to "pixmaps" directory and tries to load the
     * image into a GdkPixbuf. Can be used to load icons not in lifereaIcon
     * on demand.
     * @param filename the name of the file
     * @returns a new pixbuf or NULL
     */
    function icon_create_from_file(filename: string): GdkPixbuf.Pixbuf;
    /**
     * Takes a file name relative to "pixmaps" directory and returns it's path.
     * @param filename the name of the file
     * @returns file path or NULL
     */
    function icon_find_pixmap_file(filename: string): string;
    /**
     * Returns a GIcon for the requested item.
     * @param icon the icon
     * @returns GIcon
     */
    function icon_get(icon: lifereaIcon | null): Gio.Icon;
    function node_foreach_child_full(ptr: nodePtr, func: any | null, params: number, user_data?: any | null): void;
    /**
     * Returns a new unused unique node id.
     * @returns new id (to be free'd using g_free)
     */
    function node_new_id(): string;
    function node_source_item_set_flag(node: nodePtr, item: itemPtr, newState: boolean): void;
    function on_action_launch_item_in_browser(
        action: Gio.SimpleAction,
        parameter: GLib.Variant,
        user_data?: any | null,
    ): void;
    function on_action_launch_item_in_external_browser(
        action: Gio.SimpleAction,
        parameter: GLib.Variant,
        user_data?: any | null,
    ): void;
    function on_action_launch_item_in_tab(
        action: Gio.SimpleAction,
        parameter: GLib.Variant,
        user_data?: any | null,
    ): void;
    function on_remove_items_activate(action: Gio.SimpleAction, parameter: GLib.Variant, user_data?: any | null): void;
    function social_get_bookmark_site(): string;
    /**
     * Returns a social bookmarking link for the configured site
     * @param link the link to encode (mandatory)
     * @param title the title to encode (mandatory)
     * @returns new URL string
     */
    function social_get_bookmark_url(link: string, title: string): string;
    /**
     * Add a new site to the social bookmarking site list. Note that
     * the URL needs to have at least one '{url}' placeholder and optionally
     * a '{title}' placeholder.
     * @param name descriptive name
     * @param url valid HTTP GET URL with one or two %s format codes
     */
    function social_register_bookmark_site(name: string, url: string): void;
    /**
     * Change the site used for bookmarking.
     * @param name name of the site
     */
    function social_set_bookmark_site(name: string): void;
    /**
     * Removes a site from the social bookmarking site list. Does nothing
     * if the given name is not in the list
     * @param name descriptive name
     */
    function social_unregister_bookmark_site(name: string): void;
    interface itemActionFunc {
        (item: itemPtr, userdata?: any | null): void;
    }
    interface nodeActionDataFunc {
        (node: nodePtr): void;
    }
    interface nodeActionFunc {
        (node: nodePtr): void;
    }

    export namespace nodeSourceCapability {
        export const $gtype: GObject.GType<nodeSourceCapability>;
    }

    enum nodeSourceCapability {
        IS_ROOT,
        DYNAMIC_CREATION,
        WRITABLE_FEEDLIST,
        ADD_FEED,
        ADD_FOLDER,
        HIERARCHIC_FEEDLIST,
        ITEM_STATE_SYNC,
        CONVERT_TO_LOCAL,
        GOOGLE_READER_API,
        CAN_LOGIN,
        REPARENT_NODE,
    }

    export namespace nodeSourceUpdate {
        export const $gtype: GObject.GType<nodeSourceUpdate>;
    }

    enum nodeSourceUpdate {
        LIST,
        LOGIN,
    }
    namespace Application {
        // Signal signatures
        interface SignalSignatures extends Gtk.Application.SignalSignatures {
            'notify::active-window': (pspec: GObject.ParamSpec) => void;
            'notify::app-menu': (pspec: GObject.ParamSpec) => void;
            'notify::menubar': (pspec: GObject.ParamSpec) => void;
            'notify::register-session': (pspec: GObject.ParamSpec) => void;
            'notify::screensaver-active': (pspec: GObject.ParamSpec) => void;
            'notify::action-group': (pspec: GObject.ParamSpec) => void;
            'notify::application-id': (pspec: GObject.ParamSpec) => void;
            'notify::flags': (pspec: GObject.ParamSpec) => void;
            'notify::inactivity-timeout': (pspec: GObject.ParamSpec) => void;
            'notify::is-busy': (pspec: GObject.ParamSpec) => void;
            'notify::is-registered': (pspec: GObject.ParamSpec) => void;
            'notify::is-remote': (pspec: GObject.ParamSpec) => void;
            'notify::resource-base-path': (pspec: GObject.ParamSpec) => void;
            'notify::version': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Application.ConstructorProps,
                Gio.ActionGroup.ConstructorProps,
                Gio.ActionMap.ConstructorProps {}
    }

    class Application extends Gtk.Application implements Gio.ActionGroup, Gio.ActionMap {
        static $gtype: GObject.GType<Application>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Application.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Application.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Application.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Application.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Application.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Application.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Application.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Application.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static rebuild_css(): void;
        /**
         * Shutdown GApplication
         */
        static shutdown(): void;

        // Inherited methods
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

    namespace Browser {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'location-changed': (arg0: string) => void;
            'statusbar-changed': (arg0: string) => void;
            'title-changed': (arg0: string) => void;
            'notify::renderwidget': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            renderwidget: Gtk.Widget;
        }
    }

    class Browser extends GObject.Object {
        static $gtype: GObject.GType<Browser>;

        // Properties

        get renderwidget(): Gtk.Widget;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Browser.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Browser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Browser.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Browser.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Browser.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Browser.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Browser.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Browser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * To be called when HTML view needs to change the text size
         * of the rendering widget implementation.
         * @param zoom 1 for zoom in, -1 for zoom out, 0 for reset
         */
        do_zoom(zoom: number): void;
        /**
         * Allows to query the currently active reader mode setting
         * @returns TRUE if reader mode is on
         */
        get_reader_mode(): boolean;
        /**
         * Returns the rendering widget for a HTML view. Only
         * to be used by liferea_shell.c for widget reparenting.
         * @returns the rendering widget
         */
        get_widget(): Gtk.Widget;
        /**
         * Function to determine the current zoom level.
         * @returns the currently set zoom level
         */
        get_zoom(): number;
        load_finished(location: string): void;
        location_changed(location: string): void;
        on_url(url: string): void;
        progress_changed(progress: number): void;
        /**
         * Function scrolls down the given HTML view if possible.
         */
        scroll(): void;
        /**
         * Make this LifereaBrowser instance a headline view. This causes
         * an additional "go back" step for the history tab allowing to go back
         * from Web content to the headline when browsing inline.
         */
        set_headline_view(): void;
        /**
         * Allows to temporarily change the reader mode of the browser, will be
         * reset when navigating to another URL
         * @param readerMode new mode
         */
        set_reader_mode(readerMode: boolean): void;
        /**
         * Function to change the zoom level of the HTML widget.
         * 1.0 is a 1:1 zoom.
         * @param zoom New zoom
         */
        set_zoom(zoom: number): void;
        title_changed(title: string): void;
        /**
         * Renders item or node info into the given HTML view.
         *
         * `param` browser	HTML view to render to
         * `param` mode		item view mode (see type itemViewMode)
         * @param mode
         */
        update(mode: number): void;
        /**
         * Update the user stylesheet of the WebView
         */
        update_stylesheet(): void;
    }

    namespace BrowserTabs {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::head-lines': (pspec: GObject.ParamSpec) => void;
            'notify::notebook': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            head_lines: Gtk.Widget;
            headLines: Gtk.Widget;
            notebook: Gtk.Notebook;
        }
    }

    class BrowserTabs extends GObject.Object {
        static $gtype: GObject.GType<BrowserTabs>;

        // Properties

        get head_lines(): Gtk.Widget;
        get headLines(): Gtk.Widget;
        get notebook(): Gtk.Notebook;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BrowserTabs.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BrowserTabs.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static add_new(url: string, title: string, activate: boolean): BrowserTabs;

        // Signals

        connect<K extends keyof BrowserTabs.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BrowserTabs.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BrowserTabs.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BrowserTabs.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BrowserTabs.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BrowserTabs.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Requests the tab to change zoom level.
         * @param zoom 1 for zoom in, -1 for zoom out, 0 for reset
         */
        static do_zoom(zoom: number): void;
        /**
         * Used to determine which HTML view (a tab or the headlines view)
         * is currently visible and can be used to display HTML that
         * is to be loaded
         */
        static get_active_htmlview(): Browser | null;
        /**
         * makes the headline tab visible
         */
        static show_headlines(): void;
    }

    namespace FeedList {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'items-updated': (arg0: string) => void;
            'new-items': (arg0: any | null) => void;
            'node-updated': (arg0: string) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class FeedList extends GObject.Object {
        static $gtype: GObject.GType<FeedList>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FeedList.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FeedList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof FeedList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FeedList.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FeedList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FeedList.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FeedList.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FeedList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Adds a folder to the feed list without any user interaction.
         * @param title the title of the new folder.
         */
        static add_folder(title: string): void;
        /**
         * Query overall number of new items.
         *
         * Note: result might be slightly off, but error
         * won't aggregate over time.
         */
        static get_new_item_count(): number;
        /**
         * Query overall number of unread items.
         */
        static get_unread_item_count(): number;
        static is_writable(): boolean;
        /**
         * Reset the global feed list new item counter.
         *
         * TODO: use signal instead
         */
        static reset_new_item_count(): void;
    }

    namespace Item {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Item extends GObject.Object {
        static $gtype: GObject.GType<Item>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Item.SignalSignatures;

        // Fields

        id: number;
        readStatus: boolean;
        popupStatus: boolean;
        updateStatus: boolean;
        flagStatus: boolean;
        hasEnclosure: boolean;
        isHidden: boolean;
        title: string;
        source: string;
        sourceId: string;
        validGuid: boolean;
        validTime: boolean;
        description: string;
        metadata: any[];
        time: number;
        commentFeedId: string;
        parentItemId: number;
        isComment: boolean;
        nodeId: string;
        parentNodeId: string;
        sourceNr: number;
        remoteReadStatus: boolean;
        remoteFlagStatus: boolean;

        // Constructors

        constructor(properties?: Partial<Item.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Item.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Item.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Item.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Item.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Item.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Item.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_description(): string;
        get_id(): string;
        get_source(): string;
        get_title(): string;
    }

    namespace ItemList {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'item-updated': (arg0: string) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class ItemList extends GObject.Object {
        static $gtype: GObject.GType<ItemList>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ItemList.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ItemList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof ItemList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ItemList.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ItemList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ItemList.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ItemList.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ItemList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Returns the id of the currently selected item.
         */
        static get_selected_id(): number;
        /**
         * Tries to select the next unread item that is currently in the
         * item list. Or does nothing if there are no unread items left.
         */
        static select_next_unread(): void;
        static update_item(item: itemPtr): void;
    }

    namespace ItemListView {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class ItemListView extends GObject.Object {
        static $gtype: GObject.GType<ItemListView>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ItemListView.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ItemListView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof ItemListView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ItemListView.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ItemListView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ItemListView.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ItemListView.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ItemListView.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Checks whether the given id is in the ItemListView.
         * @param id the item id
         * @returns TRUE if the item is in the ItemListView
         */
        contains_id(id: number): boolean;
        enable_favicon_column(enabled: boolean): void;
        /**
         * Returns the GtkWidget used by the ItemListView instance.
         * @returns a GtkWidget
         */
        get_widget(): Gtk.Widget;
        /**
         * Moves the cursor in the item list step times.
         * Negative value means moving backwards.
         * @param step move distance
         */
        move_cursor(step: number): void;
        /**
         * Moves the cursor to the first element.
         */
        move_cursor_to_first(): void;
        /**
         * Changes the sorting type (and direction).
         * @param sortType new sort type
         * @param sortReversed TRUE for ascending order
         */
        set_sort_column(sortType: nodeViewSortType | null, sortReversed: boolean): void;
    }

    namespace ItemView {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::html-view': (pspec: GObject.ParamSpec) => void;
            'notify::item-list-view': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            html_view: Browser;
            htmlView: Browser;
            item_list_view: ItemListView;
            itemListView: ItemListView;
        }
    }

    class ItemView extends GObject.Object {
        static $gtype: GObject.GType<ItemView>;

        // Properties

        get html_view(): Browser;
        get htmlView(): Browser;
        get item_list_view(): ItemListView;
        get itemListView(): ItemListView;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ItemView.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ItemView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof ItemView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ItemView.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ItemView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ItemView.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ItemView.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ItemView.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Requests the item view to change zoom level.
         * @param zoom 1 for zoom in, -1 for zoom out, 0 for reset
         */
        static do_zoom(zoom: number): void;
        /**
         * Returns the viewing mode property of the currently displayed item set.
         */
        static get_layout(): number;
        /**
         * Launch the given URL in the currently active HTML view.
         * @param url the link to load
         * @param internal TRUE if internal browsing is to be enforced
         */
        static launch_URL(url: string, internal: boolean): void;
        /**
         * Moves the cursor in the item list step times.
         * Negative value means moving backwards.
         * @param step moving steps
         */
        static move_cursor(step: number): void;
        /**
         * Moves the cursor in the item list to the first element.
         */
        static move_cursor_to_first(): void;
        /**
         * Paging/skimming the item view. If possible scrolls
         * down otherwise it triggers Next-Unread.
         */
        static scroll(): void;
        /**
         * Selects the nth enclosure in the enclosure list view currently presented.
         * @param position the position to select
         */
        static select_enclosure(position: number): void;
        /**
         * Switches the layout for the given viewing mode.
         * @param newMode new view mode (NODE_VIEW_MODE_*)
         */
        static set_layout(newMode: nodeViewType): void;
        /**
         * Set/unset the display mode of the item view.
         * @param mode item view mode constant
         */
        static set_mode(mode: itemViewMode): void;
        /**
         * Invokes a change of the href attribute in WebView's <link> tag
         */
        static style_update(): void;
        /**
         * Requests updating the rendering of a all displayed items.
         */
        static update_all_items(): void;

        // Methods

        /**
         * Selects and open the next enclosure in the list.
         */
        open_next_enclosure(): void;
    }

    namespace NetworkMonitor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'online-status-changed': (arg0: boolean) => void;
            'proxy-changed': () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class NetworkMonitor extends GObject.Object {
        static $gtype: GObject.GType<NetworkMonitor>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: NetworkMonitor.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<NetworkMonitor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof NetworkMonitor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NetworkMonitor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof NetworkMonitor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NetworkMonitor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof NetworkMonitor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<NetworkMonitor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Queries the online status.
         *
         * `return` TRUE if online
         */
        static is_online(): boolean;
        /**
         * Sets the online status according to mode.
         *
         * `param` mode	TRUE for online, FALSE for offline
         * @param mode
         */
        static set_online(mode: boolean): void;
    }

    namespace Shell {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::browser-tabs': (pspec: GObject.ParamSpec) => void;
            'notify::builder': (pspec: GObject.ParamSpec) => void;
            'notify::feed-list': (pspec: GObject.ParamSpec) => void;
            'notify::item-list': (pspec: GObject.ParamSpec) => void;
            'notify::item-view': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            browser_tabs: BrowserTabs;
            browserTabs: BrowserTabs;
            builder: Gtk.Builder;
            feed_list: FeedList;
            feedList: FeedList;
            item_list: ItemList;
            itemList: ItemList;
            item_view: ItemView;
            itemView: ItemView;
        }
    }

    class Shell extends GObject.Object {
        static $gtype: GObject.GType<Shell>;

        // Properties

        get browser_tabs(): BrowserTabs;
        get browserTabs(): BrowserTabs;
        get builder(): Gtk.Builder;
        get feed_list(): FeedList;
        get feedList(): FeedList;
        get item_list(): ItemList;
        get itemList(): ItemList;
        get item_view(): ItemView;
        get itemView(): ItemView;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Shell.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Shell.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Shell.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Shell.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Shell.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Shell.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Shell.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Shell.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Returns the Liferea main window.
         */
        static get_window(): Gtk.Widget;
        /**
         * Searches the glade XML UI tree for the given widget
         * name and returns the found widget.
         * @param name the widget name
         */
        static lookup(name: string): Gtk.Widget | null;
        /**
         * Invokes a rebuild of the WebView CSS.
         */
        static rebuild_css(): void;
        /**
         * Save the position of the Liferea main window.
         */
        static save_position(): void;
        /**
         * Sets the toolbar to a particular style
         * @param toolbar_style text string containing the type of style to use
         */
        static set_toolbar_style(toolbar_style: string): void;
        /**
         * Show the main window.
         */
        static show_window(): void;
        /**
         * Toggles main window visibility.
         */
        static toggle_visibility(): void;
    }

    type ApplicationClass = typeof Application;
    type AuthActivatableInterface = typeof AuthActivatable;
    type BrowserClass = typeof Browser;
    type BrowserTabsClass = typeof BrowserTabs;
    type FeedListClass = typeof FeedList;
    type ItemClass = typeof Item;
    type ItemListClass = typeof ItemList;
    abstract class ItemListPrivate {
        static $gtype: GObject.GType<ItemListPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ItemListViewClass = typeof ItemListView;
    type ItemViewClass = typeof ItemView;
    type NetworkMonitorClass = typeof NetworkMonitor;
    abstract class NetworkMonitorPrivate {
        static $gtype: GObject.GType<NetworkMonitorPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type NodeSourceActivatableInterface = typeof NodeSourceActivatable;
    type ShellActivatableInterface = typeof ShellActivatable;
    type ShellClass = typeof Shell;
    class encType {
        static $gtype: GObject.GType<encType>;

        // Fields

        mime: string;
        extension: string;
        cmd: string;
        permanent: boolean;

        // Constructors

        constructor(
            properties?: Partial<{
                mime: string;
                extension: string;
                cmd: string;
                permanent: boolean;
            }>,
        );
        _init(...args: any[]): void;
    }

    abstract class encTypePtr {
        static $gtype: GObject.GType<encTypePtr>;

        // Constructors

        _init(...args: any[]): void;
    }

    class enclosure {
        static $gtype: GObject.GType<enclosure>;

        // Fields

        url: string;
        mime: string;
        size: number;
        downloaded: boolean;

        // Constructors

        constructor(
            properties?: Partial<{
                url: string;
                mime: string;
                size: number;
                downloaded: boolean;
            }>,
        );
        _init(...args: any[]): void;

        // Static methods

        /**
         * Get MIME type from enclosure string
         * @param str enclosure string to parse
         */
        static get_mime(str: string): string;
        /**
         * Get URL from enclosure string
         * @param str enclosure string to parse
         */
        static get_url(str: string): string;
        /**
         * Serialize enclosure infos to string.
         * @param url the enclosure URL
         * @param mime the MIME type (optional, can be NULL)
         * @param size the enclosure size (optional, can be 0, and also -1)
         * @param downloaded downloading state (TRUE=downloaded)
         */
        static values_to_string(url: string, mime: string, size: number, downloaded: boolean): string;
    }

    abstract class enclosurePtr {
        static $gtype: GObject.GType<enclosurePtr>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class itemPtr {
        static $gtype: GObject.GType<itemPtr>;

        // Constructors

        _init(...args: any[]): void;
    }

    class itemSet {
        static $gtype: GObject.GType<itemSet>;

        // Fields

        rules: any[];
        anyMatch: boolean;
        ids: any[];
        nodeId: string;

        // Constructors

        constructor(
            properties?: Partial<{
                anyMatch: boolean;
                nodeId: string;
            }>,
        );
        _init(...args: any[]): void;
    }

    abstract class itemSetPtr {
        static $gtype: GObject.GType<itemSetPtr>;

        // Constructors

        _init(...args: any[]): void;
    }

    class node {
        static $gtype: GObject.GType<node>;

        // Fields

        data: any;
        subscription: any;
        type: any;
        source: any;
        iconFile: string;
        children: any[];
        id: string;
        itemCount: number;
        unreadCount: number;
        popupCount: number;
        newCount: number;
        title: string;
        icon: any;
        available: boolean;
        expanded: boolean;
        sortColumn: nodeViewSortType;
        sortReversed: boolean;
        needsUpdate: boolean;
        needsRecount: boolean;

        // Constructors

        _init(...args: any[]): void;

        // Static methods

        static foreach_child_full(ptr: nodePtr, func: any | null, params: number, user_data?: any | null): void;
        /**
         * Returns a new unused unique node id.
         */
        static new_id(): string;
    }

    abstract class nodePtr {
        static $gtype: GObject.GType<nodePtr>;

        // Constructors

        _init(...args: any[]): void;
    }

    class nodeSource {
        static $gtype: GObject.GType<nodeSource>;

        // Fields

        actionQueue: GLib.Queue;
        loginState: number;
        authToken: string;
        authFailures: number;

        // Constructors

        _init(...args: any[]): void;

        // Static methods

        static item_set_flag(node: nodePtr, item: itemPtr, newState: boolean): void;
    }

    abstract class nodeSourcePtr {
        static $gtype: GObject.GType<nodeSourcePtr>;

        // Constructors

        _init(...args: any[]): void;
    }

    class nodeSourceType {
        static $gtype: GObject.GType<nodeSourceType>;

        // Fields

        id: string;
        name: string;
        capabilities: number;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class nodeSourceTypePtr {
        static $gtype: GObject.GType<nodeSourceTypePtr>;

        // Constructors

        _init(...args: any[]): void;
    }

    class socialSite {
        static $gtype: GObject.GType<socialSite>;

        // Fields

        name: string;
        url: string;
        title: boolean;
        titleFirst: boolean;

        // Constructors

        constructor(
            properties?: Partial<{
                name: string;
                url: string;
                title: boolean;
                titleFirst: boolean;
            }>,
        );
        _init(...args: any[]): void;
    }

    abstract class socialSitePtr {
        static $gtype: GObject.GType<socialSitePtr>;

        // Constructors

        _init(...args: any[]): void;
    }

    class subscriptionType {
        static $gtype: GObject.GType<subscriptionType>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class subscriptionTypePtr {
        static $gtype: GObject.GType<subscriptionTypePtr>;

        // Constructors

        _init(...args: any[]): void;
    }

    namespace AuthActivatable {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface AuthActivatableNamespace {
        $gtype: GObject.GType<AuthActivatable>;
        prototype: AuthActivatable;
    }
    interface AuthActivatable extends GObject.Object {
        // Methods

        /**
         * Activates the extension.
         */
        activate(): void;
        /**
         * Deactivates the extension.
         */
        deactivate(): void;
        /**
         * Triggers a query for authentication infos for a given subscription.
         * Expects triggered plugins to use liferea_auth_info_add() to provide
         * any matches.
         * @param authId a unique auth info id
         */
        query(authId: string): void;
        /**
         * Triggers a query for authentication infos for a given subscription.
         * Expects triggered plugins to use liferea_auth_info_add() to provide
         * any matches.
         * @param authId a unique auth info id
         * @param username the username to store
         * @param password the password to store
         */
        store(authId: string, username: string, password: string): void;

        // Virtual methods

        /**
         * Activates the extension.
         */
        vfunc_activate(): void;
        /**
         * Deactivates the extension.
         */
        vfunc_deactivate(): void;
        /**
         * Triggers a query for authentication infos for a given subscription.
         * Expects triggered plugins to use liferea_auth_info_add() to provide
         * any matches.
         * @param authId a unique auth info id
         */
        vfunc_query(authId: string): void;
        /**
         * Triggers a query for authentication infos for a given subscription.
         * Expects triggered plugins to use liferea_auth_info_add() to provide
         * any matches.
         * @param authId a unique auth info id
         * @param username the username to store
         * @param password the password to store
         */
        vfunc_store(authId: string, username: string, password: string): void;
    }

    export const AuthActivatable: AuthActivatableNamespace & {
        new (): AuthActivatable; // This allows `obj instanceof AuthActivatable`
    };

    namespace NodeSourceActivatable {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface NodeSourceActivatableNamespace {
        $gtype: GObject.GType<NodeSourceActivatable>;
        prototype: NodeSourceActivatable;
    }
    interface NodeSourceActivatable extends GObject.Object {
        // Methods

        activate(): void;
        deactivate(): void;

        // Virtual methods

        vfunc_activate(): void;
        vfunc_deactivate(): void;
    }

    export const NodeSourceActivatable: NodeSourceActivatableNamespace & {
        new (): NodeSourceActivatable; // This allows `obj instanceof NodeSourceActivatable`
    };

    namespace ShellActivatable {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            shell: Shell;
        }
    }

    export interface ShellActivatableNamespace {
        $gtype: GObject.GType<ShellActivatable>;
        prototype: ShellActivatable;
    }
    interface ShellActivatable extends GObject.Object {
        // Properties

        get shell(): Shell;

        // Methods

        /**
         * Activates the extension on the shell property.
         */
        activate(): void;
        /**
         * Deactivates the extension on the shell property.
         */
        deactivate(): void;
        /**
         * Triggers an update of the extension internal state to take into account
         * state changes in the window, due to some event or user action.
         */
        update_state(): void;

        // Virtual methods

        /**
         * Activates the extension on the shell property.
         */
        vfunc_activate(): void;
        /**
         * Deactivates the extension on the shell property.
         */
        vfunc_deactivate(): void;
        /**
         * Triggers an update of the extension internal state to take into account
         * state changes in the window, due to some event or user action.
         */
        vfunc_update_state(): void;
    }

    export const ShellActivatable: ShellActivatableNamespace & {
        new (): ShellActivatable; // This allows `obj instanceof ShellActivatable`
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

export default Liferea;

// END
