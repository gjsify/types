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
import type Json from '@girs/json-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace Liferea {
    /**
     * Liferea-3.0
     */

    /**
     * @gir-type Enum
     */
    enum feedListFindType {
        ODE_BY_URL,
        ODE_BY_ID,
        OLDER_BY_TITLE,
    }

    /**
     * @gir-type Enum
     */
    enum itemViewMode {
        SINGLE_ITEM,
        NODE_INFO,
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    enum nodeViewSortType {
        TIME,
        TITLE,
        PARENT,
        STATE,
    }

    /**
     * @gir-type Enum
     */
    enum nodeViewType {
        NORMAL,
        WIDE,
        AUTO,
    }

    /**
     * @gir-type Enum
     */
    enum request_state {
        PENDING,
        PROCESSING,
        FINISHED,
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
     * `liferea_auth_info_from_store()` to set them.
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
    function download_show(): void;
    /**
     * @param url
     */
    function download_url(url: string): void;
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
    /**
     * Interactive node adding (e.g. feed menu->new subscription),
     * launches some dialog that upon success adds a feed of the
     * given type.
     * @param provider the node provider
     * @returns TRUE on success
     */
    function node_provider_request_add(provider: nodeProviderPtr): boolean;
    /**
     * Registers a new node source type. Needs to be called before feed list import!
     * To be used only via NodeSourceTypeActivatable
     * @param iface the type interface to register
     */
    function node_source_type_register(iface: typeof NodeSourceProvider): void;
    /**
     * @param action
     * @param parameter
     * @param user_data
     */
    function on_action_launch_item_in_browser(
        action: Gio.SimpleAction,
        parameter: GLib.Variant,
        user_data?: any | null,
    ): void;
    /**
     * @param action
     * @param parameter
     * @param user_data
     */
    function on_action_launch_item_in_external_browser(
        action: Gio.SimpleAction,
        parameter: GLib.Variant,
        user_data?: any | null,
    ): void;
    /**
     * @param action
     * @param parameter
     * @param user_data
     */
    function on_action_launch_item_in_tab(
        action: Gio.SimpleAction,
        parameter: GLib.Variant,
        user_data?: any | null,
    ): void;
    /**
     * @param action
     * @param parameter
     * @param user_data
     */
    function on_remove_items_activate(action: Gio.SimpleAction, parameter: GLib.Variant, user_data?: any | null): void;
    /**
     * @returns the name of the currently configured social bookmarking site.
     */
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
    /**
     * Frees the given update state.
     * @param updateState the update state
     */
    function update_state_free(updateState: updateStatePtr): void;
    /**
     * @param state
     */
    function update_state_get_cache_maxage(state: updateStatePtr): number;
    /**
     * @param state
     */
    function update_state_get_cookies(state: updateStatePtr): string;
    /**
     * @param state
     */
    function update_state_get_etag(state: updateStatePtr): string;
    /**
     * @param state
     */
    function update_state_get_lastmodified(state: updateStatePtr): number;
    /**
     * @param state
     * @param maxage
     */
    function update_state_set_cache_maxage(state: updateStatePtr, maxage: number): void;
    /**
     * @param state
     * @param cookies
     */
    function update_state_set_cookies(state: updateStatePtr, cookies: string): void;
    /**
     * @param state
     * @param etag
     */
    function update_state_set_etag(state: updateStatePtr, etag: string): void;
    /**
     * @param state
     * @param lastmodified
     */
    function update_state_set_lastmodified(state: updateStatePtr, lastmodified: number): void;
    /**
     * @gir-type Callback
     */
    interface itemActionFunc {
        (item: itemPtr, userdata?: any | null): void;
    }
    /**
     * @gir-type Callback
     */
    interface nodeActionDataFunc {
        (node: Node): void;
    }
    /**
     * @gir-type Callback
     */
    interface nodeActionFunc {
        (node: Node): void;
    }
    /**
     * @gir-type Callback
     */
    interface update_result_cb {
        (result: UpdateResult, flags: updateFlags): void;
    }
    /**
     * @gir-type Flags
     */
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

    /**
     * @gir-type Flags
     */
    enum nodeSourceState {
        NONE,
        IN_PROGRESS,
        ACTIVE,
        NO_AUTH,
        MIGRATE,
    }

    /**
     * @gir-type Flags
     */
    enum nodeSourceUpdate {
        LIST,
        LOGIN,
    }

    /**
     * @gir-type Flags
     */
    enum updateFlags {
        RESET_TITLE,
        PRIORITY_HIGH,
        NO_FEED,
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
            extends
                Gtk.Application.ConstructorProps,
                Gio.ActionGroup.ConstructorProps,
                Gio.ActionMap.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
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

        /** @signal */
        connect<K extends keyof Application.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Application.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Application.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Application.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
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
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
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
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
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
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
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
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
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
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
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
         * @virtual
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
            /**
             * @signal
             * @action
             * @run-last
             */
            'location-changed': (arg0: string) => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            'statusbar-changed': (arg0: string) => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            'title-changed': (arg0: string) => void;
            'notify::hidden-urlbar': (pspec: GObject.ParamSpec) => void;
            'notify::renderwidget': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            hidden_urlbar: boolean;
            hiddenUrlbar: boolean;
            renderwidget: Gtk.Widget;
        }
    }

    /**
     * @gir-type Class
     */
    class Browser extends GObject.Object {
        static $gtype: GObject.GType<Browser>;

        // Properties

        get hidden_urlbar(): boolean;
        set hidden_urlbar(val: boolean);
        get hiddenUrlbar(): boolean;
        set hiddenUrlbar(val: boolean);
        /**
         * @read-only
         */
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

        /** @signal */
        connect<K extends keyof Browser.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Browser.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Browser.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Browser.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
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
        /**
         * @param location
         */
        location_changed(location: string): void;
        /**
         * @param url
         */
        on_url(url: string): void;
        /**
         * @param progress
         */
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
        /**
         * @param title
         */
        title_changed(title: string): void;
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

    /**
     * @gir-type Class
     */
    class BrowserTabs extends GObject.Object {
        static $gtype: GObject.GType<BrowserTabs>;

        // Properties

        /**
         * @read-only
         */
        get head_lines(): Gtk.Widget;
        /**
         * @read-only
         */
        get headLines(): Gtk.Widget;
        /**
         * @read-only
         */
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

        /** @signal */
        connect<K extends keyof BrowserTabs.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BrowserTabs.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BrowserTabs.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BrowserTabs.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
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
            /**
             * @signal
             * @action
             * @run-last
             */
            'items-updated': (arg0: string) => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            'new-items': (arg0: any | null) => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            'node-updated': (arg0: string) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
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

        /** @signal */
        connect<K extends keyof FeedList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FeedList.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FeedList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FeedList.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
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
         * Adds a new subscription to the feed list. Does not check for duplicates.
         * Is interactive.
         * @param url the subscription URL to add
         */
        static add_subscription_by_url(url: string): void;
        /**
         * Search trough list of subscriptions for a node matching exactly
         * to an criteria defined by the find type and comparison string.
         * Searches recursively from a given parent node or the root node.
         * Always returns just the first occurence in traversal order.
         * @param parent parent node to traverse from (or NULL)
         * @param type NODE_BY_(URL|FOLDER_TITLE|ID)
         * @param str string to compare to
         */
        static find_node(parent: Node | null, type: feedListFindType, str: string): Node | null;
        /**
         * Query overall number of new items.
         *
         * Note: result might be slightly off, but error
         * won't aggregate over time.
         */
        static get_new_item_count(): number;
        /**
         * Helper function to query the feed list root node.
         */
        static get_root(): Node;
        /**
         * Get currently selected feed list node
         */
        static get_selected(): Node | null;
        /**
         * Query overall number of unread items.
         */
        static get_unread_item_count(): number;
        static is_writable(): boolean;
        /**
         * Triggers a recursive mark-all-read on the given node
         * and updates the feed list afterwards.
         * @param node the node to start with
         */
        static mark_all_read(node: Node): void;
        /**
         * To be called when node subscription update gained new items.
         * @param newCount number of new and unread items
         */
        static new_items(newCount: number): void;
        /**
         * Notifies the feed list controller that a new node
         * was added to the feed list. This method will insert
         * the new node into the feed list view and select
         * the new node.
         *
         * This method is used for all node types (feeds, folders...).
         *
         * Before calling this method the node must be given
         * a parent node using `node_set_parent()`.
         * @param node the new node
         */
        static node_added(node: Node): void;
        /**
         * Notifies the feed list controller that a new node
         * was added to the feed list. Similar to `feedlist_node_added()`
         * the new node will be added to the feed list but the
         * selection won't be changed.
         *
         * This method is used for all node types (feeds, folders...).
         *
         * Before calling this method the node must be given
         * a parent node using `node_set_parent()`.
         * @param node the new node
         */
        static node_imported(node: Node): void;
        /**
         * Notifies the feed list controller that an existing
         * node was removed from it's source (feed list subtree)
         * and is to be destroyed and to be removed from the
         * feed list view.
         * @param node the removed node
         */
        static node_removed(node: Node): void;
        /**
         * To be called when a feed is updated and has
         * new or dropped items forcing a node unread count
         * update for all affected nodes in the feed list.
         * @param node the updated node
         */
        static node_was_updated(node: Node): void;
        /**
         * Removes the given node from the feed list.
         * @param node the node to remove
         */
        static remove_node(node: Node): void;
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

    /**
     * @gir-type Class
     */
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

        static ['new'](): Item;

        // Signals

        /** @signal */
        connect<K extends keyof Item.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Item.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Item.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Item.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Item.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Item.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Returns the item structure for the given item id or
         * NULL if no such item does exist. The caller has to free
         * the item with `item_unload()` once it is not used anymore.
         * @param id item id to load
         */
        static load(id: number): Item | null;

        // Methods

        /**
         * Method to create a copy of an item. The copy will be
         * linked to the original item to allow state update
         * propagation (to be used with vfolders).
         * @returns copy of the item.
         */
        copy(): Item;
        /**
         * Returns the resolved author for the item
         * @returns pointer to string in GSList meta data
         */
        get_author(): string;
        /**
         * Returns the base URL for the given item.
         * @returns base URL
         */
        get_base_url(): string;
        /**
         * Returns the description of the item.
         */
        get_description(): string;
        /**
         * @returns the id of the item.
         */
        get_id(): string;
        /**
         * Returns the source of the item.
         */
        get_source(): string;
        /**
         * Create a plain text teaser from the item description
         * @returns newly allocated string to be free'd using `g_free()` (or NULL)
         */
        get_teaser(): string;
        /**
         * Returns the text direction of the item based on title or description.
         */
        get_text_direction(): string;
        /**
         * Returns the title of the item.
         */
        get_title(): string;
        /**
         * Returns the resolved link for the item.
         * @returns newly allocated URI to be free'd using `g_free()`
         */
        make_link(): string;
        /**
         * Sets the item description. If called more than once it
         * will merge the new description against the old one deciding
         * on the best to keep.
         * @param description the content
         */
        set_description(description: string): void;
        /**
         * Sets the item id
         * @param id the id
         */
        set_id(id: string): void;
        /**
         * Sets the item source
         * @param source the source
         */
        set_source(source: string): void;
        /**
         * Sets the item time. Always use this when a valid date was
         * supplied for the item!
         * @param time the time
         */
        set_time(time: number): void;
        /**
         * Sets the item title
         * @param title the title
         */
        set_title(title: string): void;
    }

    namespace ItemList {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @action
             * @run-last
             */
            'item-updated': (arg0: string) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
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

        /** @signal */
        connect<K extends keyof ItemList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ItemList.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ItemList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ItemList.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ItemList.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ItemList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Returns the currently displayed node.
         */
        static get_displayed_node(): Node | null;
        /**
         * Returns the id of the currently selected item.
         */
        static get_selected_id(): number;
        /**
         * Loads the passed nodes items into the item list.
         * @param node the node
         */
        static load(node: Node): void;
        /**
         * Tries to select the next unread item that is currently in the
         * item list. Or does nothing if there are no unread items left.
         */
        static select_next_unread(): void;
        /**
         * Clears the item list.
         */
        static unload(): void;
        /**
         * @param item
         */
        static update_item(item: itemPtr): void;
    }

    namespace ItemListView {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
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

        /** @signal */
        connect<K extends keyof ItemListView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ItemListView.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ItemListView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ItemListView.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
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
        /**
         * @param enabled
         */
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

    /**
     * @gir-type Class
     */
    class ItemView extends GObject.Object {
        static $gtype: GObject.GType<ItemView>;

        // Properties

        /**
         * @read-only
         */
        get html_view(): Browser;
        /**
         * @read-only
         */
        get htmlView(): Browser;
        /**
         * @read-only
         */
        get item_list_view(): ItemListView;
        /**
         * @read-only
         */
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

        /** @signal */
        connect<K extends keyof ItemView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ItemView.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ItemView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ItemView.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
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
         * Returns the effective layout mode. Never returns NODE_VIEW_MODE_AUTO.
         */
        static get_effective_layout(): number;
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
            /**
             * @signal
             * @action
             * @run-last
             */
            'online-status-changed': (arg0: boolean) => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            'proxy-changed': () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
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

        /** @signal */
        connect<K extends keyof NetworkMonitor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NetworkMonitor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof NetworkMonitor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NetworkMonitor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
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

    namespace Node {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Node extends GObject.Object {
        static $gtype: GObject.GType<Node>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Node.SignalSignatures;

        // Fields

        data: any;
        subscription: any;
        provider: any;
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

        constructor(properties?: Partial<Node.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string): Node;

        // Signals

        /** @signal */
        connect<K extends keyof Node.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Node.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Node.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Node.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Node.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Node.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Node *lookup by node id. Will report an error if the queried
         * id does not exist.
         * @param id the node id to look up
         */
        static from_id(id: string): Node | null;
        /**
         * Can be used to check whether an id is used or not.
         * @param id the node id to check
         */
        static is_used_id(id: string): Node | null;
        /**
         * Returns a new unused unique node id.
         */
        static new_id(): string;

        // Methods

        /**
         * Helper function to be used with `node_foreach_child()`
         * to mass-auto-update subscriptions.
         */
        auto_update_subscription(): void;
        /**
         * Query whether a feed be added to the given node.
         * @returns TRUE if a feed can be added
         */
        can_add_child_feed(): boolean;
        /**
         * Query whether a folder be added to the given node.
         * @returns TRUE if a folder can be added
         */
        can_add_child_folder(): boolean;
        /**
         * Do not call this method directly! Do use
         * `node_foreach_child()` or `node_foreach_child_data()`!
         * @param func the function to process all found elements
         * @param params 0 if func should be called without user_data, 1 if func should be called with user_data
         * @param user_data specifies the second argument that func should be passed
         */
        foreach_child_full(func: any | null, params: number, user_data?: any | null): void;
        /**
         * Returns the base URL for the given node.
         * If it is a mixed item set NULL will be returned.
         * @returns base URL
         */
        get_base_url(): string;
        /**
         * Returns the name of the favicon cache file for the given node.
         * If there is no favicon a default icon file name will be returned.
         * @returns a file name
         */
        get_favicon_file(): string;
        /**
         * Query the unique id string of the node.
         * @returns id string
         */
        get_id(): string;
        /**
         * Query the node's title for the feed list.
         * @returns the title
         */
        get_title(): string;
        /**
         * Determines whether node1 is an ancestor of node2
         * @param node2 the possible child
         * @returns TRUE if node1 is ancestor of node2
         */
        is_ancestor(node2: Node): boolean;
        /**
         * Load node icon in memory. Should be called only once on startup
         * and when the node icon has changed.
         */
        load_icon(): void;
        /**
         * Maps node type to string. For feed nodes
         * it maps to the feed type string.
         * @returns type string (or NULL if unknown)
         */
        provider_get_name(): string;
        /**
         * Test whether a node belongs to of a given provider type name
         * @param name the node provider name to test for
         * @returns TRUE if node is of the given type
         */
        provider_is(name: string): boolean;
        /**
         * Removes all data associated with the given node.
         */
        remove(): void;
        /**
         * Set a node's new parent and update UI. If a node already has a parent,
         * it will be removed from its parent children list.
         * @param new_parent nodes new parent
         */
        reparent(new_parent: Node): void;
        /**
         * Helper function to be used with `node_foreach_child()`
         * to mass-auto-update subscriptions.
         * @param now the current timestamp
         */
        reset_update_counter(now: number): void;
        /**
         * Saves the given node to cache.
         */
        save(): void;
        /**
         * Exports all items in this node as a RSS2 feed.
         * @param filename the destination file name
         */
        save_items_to_file(filename: string): void;
        /**
         * Attaches a data structure to the given node.
         * @param data the structure
         */
        set_data(data?: any | null): void;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.set_data
        set_data(...args: never[]): any;
        /**
         * Set the unique id string of the node.
         * @param id the id string
         */
        set_id(id: string): void;
        /**
         * Sets a nodes parent. If no parent node is given the
         * parent node of the currently selected feed or the
         * selected folder will be used.
         *
         * To be used before calling `feedlist_node_added()`
         * @param parent the parent node (optional can be NULL)
         * @param position insert position (optional can be 0)
         */
        set_parent(parent: Node | null, position: number): void;
        /**
         * Change/Set the sort column of a given node.
         * @param sortColumn sort column id
         * @param reversed TRUE if order should be reversed
         * @returns TRUE if the passed settings were different from the previous ones
         */
        set_sort_column(sortColumn: nodeViewSortType | null, reversed: boolean): boolean;
        /**
         * Attaches the subscription to the given node.
         * @param subscription the subscription
         */
        set_subscription(subscription?: any | null): void;
        /**
         * Sets the node's title for the feed list.
         * @param title the title
         */
        set_title(title: string): void;
        /**
         * @param item
         * @param newState
         */
        source_item_set_flag(item: itemPtr, newState: boolean): void;
        /**
         * Returns a JSON representation of the node to be free'd with `g_free()`
         */
        to_json(): string;
        /**
         * Update the number of items and unread items of a node from
         * the DB. This method ensures propagation to parent folders.
         */
        update_counters(): void;
        /**
         * Called when updating favicons is requested.
         */
        update_favicon(): void;
        /**
         * Helper function to be used with `node_foreach_child()`
         * to mass-update subscriptions.
         * @param user_data update flags
         */
        update_subscription(user_data?: any | null): void;
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

    /**
     * @gir-type Class
     */
    class Shell extends GObject.Object {
        static $gtype: GObject.GType<Shell>;

        // Properties

        /**
         * @read-only
         */
        get browser_tabs(): BrowserTabs;
        /**
         * @read-only
         */
        get browserTabs(): BrowserTabs;
        /**
         * @read-only
         */
        get builder(): Gtk.Builder;
        /**
         * @read-only
         */
        get feed_list(): FeedList;
        /**
         * @read-only
         */
        get feedList(): FeedList;
        /**
         * @read-only
         */
        get item_list(): ItemList;
        /**
         * @read-only
         */
        get itemList(): ItemList;
        /**
         * @read-only
         */
        get item_view(): ItemView;
        /**
         * @read-only
         */
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

        /** @signal */
        connect<K extends keyof Shell.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Shell.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Shell.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Shell.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
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

    namespace UpdateJob {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class UpdateJob extends GObject.Object {
        static $gtype: GObject.GType<UpdateJob>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UpdateJob.SignalSignatures;

        // Fields

        request: UpdateRequest;
        result: UpdateResult;
        owner: any;
        callback: update_result_cb;
        user_data: any;
        flags: updateFlags;
        state: number;

        // Constructors

        constructor(properties?: Partial<UpdateJob.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof UpdateJob.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UpdateJob.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof UpdateJob.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UpdateJob.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof UpdateJob.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<UpdateJob.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Queues the given job. The job might be delayed if other requests are pending.
         * @param job the job to queue
         * @param flags request/result processing flags
         */
        static queue_add(job: any | null, flags: updateFlags): void;

        // Methods

        /**
         * To be called when an update job has been executed. Triggers
         * the job specific result processing callback.
         */
        finished(): void;
        /**
         * `returns` update job state (see enum request_state)
         * Method to query the update state of currently processed jobs.
         * @returns enum state
         */
        get_state(): number;
    }

    namespace UpdateRequest {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class UpdateRequest extends GObject.Object {
        static $gtype: GObject.GType<UpdateRequest>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UpdateRequest.SignalSignatures;

        // Fields

        source: string;
        postdata: string;
        authValue: string;
        filtercmd: string;
        allowCommands: boolean;

        // Constructors

        constructor(properties?: Partial<UpdateRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](source: string, state: updateStatePtr, options: updateOptionsPtr): UpdateRequest;

        // Signals

        /** @signal */
        connect<K extends keyof UpdateRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UpdateRequest.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof UpdateRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UpdateRequest.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof UpdateRequest.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<UpdateRequest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Allows *this* request to run local commands.
         *
         * At first it may look this flag should be in updateOptions, but we can
         * take a safer path: feed commands are restricted to a few use cases while
         * options are propagated to downstream requests (feed enrichment, comments,
         * etc.), so it is a good idea to prevent these from running commands in the
         * local system via tricky URLs without needing to validate these options
         * everywhere (which is error-prone).
         * @param allowCommands TRUE if the request can run commands, FALSE otherwise.
         */
        allow_commands(allowCommands: boolean): void;
        /**
         * Sets a custom authorization header value.
         * @param authValue the authorization header value
         */
        set_auth_value(authValue: string): void;
        /**
         * Sets the source for an updateRequest. Only use this when the source
         * is not known at `update_request_new()` calling time.
         * @param source the new source URL
         */
        set_source(source: string): void;
    }

    namespace UpdateResult {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class UpdateResult extends GObject.Object {
        static $gtype: GObject.GType<UpdateResult>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UpdateResult.SignalSignatures;

        // Fields

        source: string;
        httpstatus: number;
        data: string;
        size: number;
        contentType: string;
        filterErrors: string;

        // Constructors

        constructor(properties?: Partial<UpdateResult.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof UpdateResult.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UpdateResult.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof UpdateResult.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UpdateResult.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof UpdateResult.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<UpdateResult.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    /**
     * @gir-type Alias
     */
    type ActivatableInterface = typeof Activatable;
    /**
     * @gir-type Alias
     */
    type ApplicationClass = typeof Application;
    /**
     * @gir-type Alias
     */
    type AuthActivatableInterface = typeof AuthActivatable;
    /**
     * @gir-type Alias
     */
    type BrowserClass = typeof Browser;
    /**
     * @gir-type Alias
     */
    type BrowserTabsClass = typeof BrowserTabs;
    /**
     * @gir-type Alias
     */
    type DownloadActivatableInterface = typeof DownloadActivatable;
    /**
     * @gir-type Alias
     */
    type FeedListClass = typeof FeedList;
    /**
     * @gir-type Alias
     */
    type ItemClass = typeof Item;
    /**
     * @gir-type Alias
     */
    type ItemListClass = typeof ItemList;
    /**
     * @gir-type Struct
     */
    abstract class ItemListPrivate {
        static $gtype: GObject.GType<ItemListPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ItemListViewClass = typeof ItemListView;
    /**
     * @gir-type Alias
     */
    type ItemViewClass = typeof ItemView;
    /**
     * @gir-type Alias
     */
    type NetworkMonitorClass = typeof NetworkMonitor;
    /**
     * @gir-type Struct
     */
    abstract class NetworkMonitorPrivate {
        static $gtype: GObject.GType<NetworkMonitorPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type NodeClass = typeof Node;
    /**
     * @gir-type Alias
     */
    type NodeSourceActivatableInterface = typeof NodeSourceActivatable;
    /**
     * @gir-type Alias
     */
    type NodeSourceProviderInterface = typeof NodeSourceProvider;
    /**
     * @gir-type Alias
     */
    type ShellActivatableInterface = typeof ShellActivatable;
    /**
     * @gir-type Alias
     */
    type ShellClass = typeof Shell;
    /**
     * @gir-type Alias
     */
    type UpdateJobClass = typeof UpdateJob;
    /**
     * @gir-type Alias
     */
    type UpdateRequestClass = typeof UpdateRequest;
    /**
     * @gir-type Alias
     */
    type UpdateResultClass = typeof UpdateResult;
    /**
     * @gir-type Struct
     */
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

        // Static methods

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

    /**
     * @gir-type Struct
     */
    abstract class enclosurePtr {
        static $gtype: GObject.GType<enclosurePtr>;
    }

    /**
     * @gir-type Struct
     */
    abstract class itemPtr {
        static $gtype: GObject.GType<itemPtr>;
    }

    /**
     * @gir-type Struct
     */
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
    }

    /**
     * @gir-type Struct
     */
    abstract class itemSetPtr {
        static $gtype: GObject.GType<itemSetPtr>;
    }

    /**
     * @gir-type Struct
     */
    class nodeProvider {
        static $gtype: GObject.GType<nodeProvider>;

        // Fields

        capabilities: number;
        id: string;
        icon: number;

        // Constructors

        constructor(
            properties?: Partial<{
                capabilities: number;
                id: string;
                icon: number;
            }>,
        );

        // Static methods

        /**
         * Interactive node adding (e.g. feed menu->new subscription),
         * launches some dialog that upon success adds a feed of the
         * given type.
         * @param provider the node provider
         */
        static request_add(provider: nodeProviderPtr): boolean;
    }

    /**
     * @gir-type Struct
     */
    abstract class nodeProviderPtr {
        static $gtype: GObject.GType<nodeProviderPtr>;
    }

    /**
     * @gir-type Struct
     */
    class nodeSource {
        static $gtype: GObject.GType<nodeSource>;

        // Fields

        root: Node;
        actionQueue: GLib.Queue;
        loginState: number;
        authToken: string;
        authFailures: number;

        // Static methods

        /**
         * Registers a new node source type. Needs to be called before feed list import!
         * To be used only via NodeSourceTypeActivatable
         * @param iface the type interface to register
         */
        static type_register(iface: typeof NodeSourceProvider): void;
    }

    /**
     * @gir-type Struct
     */
    abstract class nodeSourcePtr {
        static $gtype: GObject.GType<nodeSourcePtr>;
    }

    /**
     * @gir-type Struct
     */
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
    }

    /**
     * @gir-type Struct
     */
    abstract class socialSitePtr {
        static $gtype: GObject.GType<socialSitePtr>;
    }

    /**
     * @gir-type Struct
     */
    class subscriptionType {
        static $gtype: GObject.GType<subscriptionType>;
    }

    /**
     * @gir-type Struct
     */
    abstract class subscriptionTypePtr {
        static $gtype: GObject.GType<subscriptionTypePtr>;
    }

    /**
     * @gir-type Struct
     */
    class updateCommandState {
        static $gtype: GObject.GType<updateCommandState>;

        // Fields

        pid: GLib.Pid;
        timeout_id: number;
        io_watch_id: number;
        child_watch_id: number;
        fd: number;
    }

    /**
     * @gir-type Struct
     */
    class updateOptions {
        static $gtype: GObject.GType<updateOptions>;

        // Fields

        username: string;
        password: string;
        dontUseProxy: boolean;

        // Constructors

        constructor(
            properties?: Partial<{
                username: string;
                password: string;
                dontUseProxy: boolean;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    abstract class updateOptionsPtr {
        static $gtype: GObject.GType<updateOptionsPtr>;
    }

    /**
     * @gir-type Struct
     */
    class updateState {
        static $gtype: GObject.GType<updateState>;

        // Fields

        lastModified: number;
        lastPoll: number;
        lastFaviconPoll: number;
        cookies: string;
        etag: string;
        maxAgeMinutes: number;
        synFrequency: number;
        synPeriod: number;
        timeToLive: number;

        // Constructors

        constructor(
            properties?: Partial<{
                lastModified: number;
                lastPoll: number;
                lastFaviconPoll: number;
                cookies: string;
                etag: string;
                maxAgeMinutes: number;
                synFrequency: number;
                synPeriod: number;
                timeToLive: number;
            }>,
        );

        // Static methods

        /**
         * Frees the given update state.
         * @param updateState the update state
         */
        static free(updateState: updateStatePtr): void;
        /**
         * @param state
         */
        static get_cache_maxage(state: updateStatePtr): number;
        /**
         * @param state
         */
        static get_cookies(state: updateStatePtr): string;
        /**
         * @param state
         */
        static get_etag(state: updateStatePtr): string;
        /**
         * @param state
         */
        static get_lastmodified(state: updateStatePtr): number;
        /**
         * @param state
         * @param maxage
         */
        static set_cache_maxage(state: updateStatePtr, maxage: number): void;
        /**
         * @param state
         * @param cookies
         */
        static set_cookies(state: updateStatePtr, cookies: string): void;
        /**
         * @param state
         * @param etag
         */
        static set_etag(state: updateStatePtr, etag: string): void;
        /**
         * @param state
         * @param lastmodified
         */
        static set_lastmodified(state: updateStatePtr, lastmodified: number): void;
    }

    /**
     * @gir-type Struct
     */
    abstract class updateStatePtr {
        static $gtype: GObject.GType<updateStatePtr>;
    }

    namespace Activatable {
        /**
         * Interface for implementing Activatable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Activates the extension.
             * @virtual
             */
            vfunc_activate(): void;
            /**
             * Creates the configure widget for the extension.
             * This interface method is optional.
             * @virtual
             */
            vfunc_create_configure_widget(): void;
            /**
             * Deactivates the extension.
             * @virtual
             */
            vfunc_deactivate(): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ActivatableNamespace {
        $gtype: GObject.GType<Activatable>;
        prototype: Activatable;
    }
    /**
     * @gir-type Interface
     */
    interface Activatable extends GObject.Object, Activatable.Interface {
        // Methods

        /**
         * Activates the extension.
         */
        activate(): void;
        /**
         * Creates the configure widget for the extension.
         * This interface method is optional.
         */
        create_configure_widget(): void;
        /**
         * Deactivates the extension.
         */
        deactivate(): void;
    }

    export const Activatable: ActivatableNamespace & {
        new (): Activatable; // This allows `obj instanceof Activatable`
    };

    namespace AuthActivatable {
        /**
         * Interface for implementing AuthActivatable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Activatable.Interface {
            // Virtual methods

            /**
             * Triggers a query for authentication infos for a given subscription.
             * Expects triggered plugins to use `liferea_auth_info_add()` to provide
             * any matches.
             * @param authId a unique auth info id
             * @virtual
             */
            vfunc_query(authId: string): void;
            /**
             * Triggers a query for authentication infos for a given subscription.
             * Expects triggered plugins to use `liferea_auth_info_add()` to provide
             * any matches.
             * @param authId a unique auth info id
             * @param username the username to store
             * @param password the password to store
             * @virtual
             */
            vfunc_store(authId: string, username: string, password: string): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Activatable.ConstructorProps {}
    }

    export interface AuthActivatableNamespace {
        $gtype: GObject.GType<AuthActivatable>;
        prototype: AuthActivatable;
    }
    /**
     * @gir-type Interface
     */
    interface AuthActivatable extends Activatable, AuthActivatable.Interface {
        // Methods

        /**
         * Triggers a query for authentication infos for a given subscription.
         * Expects triggered plugins to use `liferea_auth_info_add()` to provide
         * any matches.
         * @param authId a unique auth info id
         */
        query(authId: string): void;
        /**
         * Triggers a query for authentication infos for a given subscription.
         * Expects triggered plugins to use `liferea_auth_info_add()` to provide
         * any matches.
         * @param authId a unique auth info id
         * @param username the username to store
         * @param password the password to store
         */
        store(authId: string, username: string, password: string): void;
    }

    export const AuthActivatable: AuthActivatableNamespace & {
        new (): AuthActivatable; // This allows `obj instanceof AuthActivatable`
    };

    namespace DownloadActivatable {
        /**
         * Interface for implementing DownloadActivatable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Activatable.Interface {
            // Virtual methods

            /**
             * Triggers a download.
             * @param url an URL to download
             * @virtual
             */
            vfunc_download(url: string): void;
            /**
             * Show the download GUI
             * @virtual
             */
            vfunc_show(): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Activatable.ConstructorProps {
            shell: Shell;
        }
    }

    export interface DownloadActivatableNamespace {
        $gtype: GObject.GType<DownloadActivatable>;
        prototype: DownloadActivatable;
    }
    /**
     * @gir-type Interface
     */
    interface DownloadActivatable extends Activatable, DownloadActivatable.Interface {
        // Properties

        /**
         * @construct-only
         */
        get shell(): Shell;

        // Methods

        /**
         * Triggers a download.
         * @param url an URL to download
         */
        download(url: string): void;
        /**
         * Show the download GUI
         */
        show(): void;
    }

    export const DownloadActivatable: DownloadActivatableNamespace & {
        new (): DownloadActivatable; // This allows `obj instanceof DownloadActivatable`
    };

    namespace NodeSourceActivatable {
        // Constructor properties interface

        interface ConstructorProps extends Activatable.ConstructorProps {}
    }

    export interface NodeSourceActivatableNamespace {
        $gtype: GObject.GType<NodeSourceActivatable>;
        prototype: NodeSourceActivatable;
    }
    /**
     * @gir-type Interface
     */
    interface NodeSourceActivatable extends Activatable {}

    export const NodeSourceActivatable: NodeSourceActivatableNamespace & {
        new (): NodeSourceActivatable; // This allows `obj instanceof NodeSourceActivatable`
    };

    namespace NodeSourceProvider {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface NodeSourceProviderNamespace {
        $gtype: GObject.GType<NodeSourceProvider>;
        prototype: NodeSourceProvider;
    }
    /**
     * @gir-type Interface
     */
    interface NodeSourceProvider extends GObject.Object {}

    export const NodeSourceProvider: NodeSourceProviderNamespace & {
        new (): NodeSourceProvider; // This allows `obj instanceof NodeSourceProvider`
    };

    namespace ShellActivatable {
        /**
         * Interface for implementing ShellActivatable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Activatable.Interface {
            // Virtual methods

            /**
             * Triggers an update of the extension internal state to take into account
             * state changes in the window, due to some event or user action.
             * @virtual
             */
            vfunc_update_state(): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Activatable.ConstructorProps {
            shell: Shell;
        }
    }

    export interface ShellActivatableNamespace {
        $gtype: GObject.GType<ShellActivatable>;
        prototype: ShellActivatable;
    }
    /**
     * @gir-type Interface
     */
    interface ShellActivatable extends Activatable, ShellActivatable.Interface {
        // Properties

        /**
         * @construct-only
         */
        get shell(): Shell;

        // Methods

        /**
         * Triggers an update of the extension internal state to take into account
         * state changes in the window, due to some event or user action.
         */
        update_state(): void;
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
