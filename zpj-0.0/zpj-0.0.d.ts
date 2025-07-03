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
import type Soup from '@girs/soup-2.4';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Rest from '@girs/rest-0.7';
import type Json from '@girs/json-1.0';

export namespace Zpj {
    /**
     * Zpj-0.0
     */

    /**
     * This enumeration can be expanded at a later date.
     */
    class Error extends GLib.Error {
        static $gtype: GObject.GType<Error>;

        // Static fields

        /**
         * The server received an invalid URL,
         *   possibly because of an invalid `file_id`.
         */
        static REQUEST_URL_INVALID: number;
        /**
         * An unknown error occurred.
         */
        static UNKNOWN: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    /**
     * The types of Skydrive
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh243648">
     * objects</ulink>.
     *
     * This enumeration can be expanded at a later date.
     */

    /**
     * The types of Skydrive
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh243648">
     * objects</ulink>.
     *
     * This enumeration can be expanded at a later date.
     */
    export namespace SkydriveEntryType {
        export const $gtype: GObject.GType<SkydriveEntryType>;
    }

    enum SkydriveEntryType {
        /**
         * A file.
         */
        FILE,
        /**
         * A folder.
         */
        FOLDER,
        /**
         * A photo.
         */
        PHOTO,
        /**
         * A video.
         */
        VIDEO,
        /**
         * Invalid or unknown object.
         */
        INVALID,
    }
    /**
     * Different
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826522.aspx#reading_photos_videos_props">
     * thumbnail sizes</ulink> offered by SkyDrive.
     *
     * This enumeration can be expanded at a later date.
     */

    /**
     * Different
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826522.aspx#reading_photos_videos_props">
     * thumbnail sizes</ulink> offered by SkyDrive.
     *
     * This enumeration can be expanded at a later date.
     */
    export namespace ThumbnailSize {
        export const $gtype: GObject.GType<ThumbnailSize>;
    }

    enum ThumbnailSize {
        /**
         * Smallest possible size.
         */
        SMALL,
        /**
         * The default.
         */
        NORMAL,
    }
    /**
     * <ulink
     * url="http://msdn.microsoft.com/en-us/library/live/hh826545#friendly">
     * Friendly name</ulink> for the Documents folder. It can be used as
     * the #ZpjSkydriveEntry:id and #ZpjSkydriveEntry:parent_id.
     */
    const SKYDRIVE_FOLDER_MY_DOCUMENTS: string;
    /**
     * <ulink
     * url="http://msdn.microsoft.com/en-us/library/live/hh826545#friendly">
     * Friendly name</ulink> for the Pictures folder. It can be used as the
     * #ZpjSkydriveEntry:id and #ZpjSkydriveEntry:parent_id.
     */
    const SKYDRIVE_FOLDER_MY_PHOTOS: string;
    /**
     * <ulink
     * url="http://msdn.microsoft.com/en-us/library/live/hh826545#friendly">
     * Friendly name</ulink> for the Public folder. It can be used as the
     * #ZpjSkydriveEntry:id and #ZpjSkydriveEntry:parent_id.
     */
    const SKYDRIVE_FOLDER_PUBLIC_DOCUMENTS: string;
    /**
     * <ulink
     * url="http://msdn.microsoft.com/en-us/library/live/hh826545#friendly">
     * Friendly name</ulink> for the Skydrive top-level folder. It can be
     * used as the #ZpjSkydriveEntry:id and #ZpjSkydriveEntry:parent_id.
     */
    const SKYDRIVE_FOLDER_SKYDRIVE: string;
    function error_quark(): GLib.Quark;
    namespace AuthorizationDomain {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::scope': (pspec: GObject.ParamSpec) => void;
            'notify::service-name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            scope: string;
            service_name: string;
            serviceName: string;
        }
    }

    class AuthorizationDomain extends GObject.Object {
        static $gtype: GObject.GType<AuthorizationDomain>;

        // Properties

        get scope(): string;
        get service_name(): string;
        get serviceName(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AuthorizationDomain.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AuthorizationDomain.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof AuthorizationDomain.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AuthorizationDomain.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AuthorizationDomain.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AuthorizationDomain.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AuthorizationDomain.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AuthorizationDomain.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_scope(): string;
        get_service_name(): string;
    }

    namespace GoaAuthorizer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Authorizer.ConstructorProps {}
    }

    /**
     * The #ZpjGoaAuthorizer structure contains only private data and
     * should only be accessed using the provided API.
     */
    class GoaAuthorizer extends GObject.Object implements Authorizer {
        static $gtype: GObject.GType<GoaAuthorizer>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GoaAuthorizer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GoaAuthorizer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof GoaAuthorizer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GoaAuthorizer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GoaAuthorizer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GoaAuthorizer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GoaAuthorizer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GoaAuthorizer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited methods
        /**
         * Whether the authorization tokens held by `iface` are valid for
         * `domain`.
         *
         * This method is thread safe.
         * @param domain A #ZpjAuthorizationDomain.
         * @returns %TRUE if the tokens are valid.
         */
        is_authorized_for_domain(domain: AuthorizationDomain): boolean;
        /**
         * Adds the necessary authorization to `call`.
         *
         * This method modifies `call` in place and is thread safe.
         * @param domain An optional #ZpjAuthorizationDomain object,   or %NULL.
         * @param call A #RestProxyCall.
         */
        process_call(domain: AuthorizationDomain | null, call: Rest.ProxyCall): void;
        /**
         * Adds the necessary authorization to `message`. The type of `message`
         * can be DELETE, GET and POST.
         *
         * This method modifies `message` in place and is thread safe.
         * @param domain An optional #ZpjAuthorizationDomain object,   or %NULL.
         * @param message A #SoupMessage.
         */
        process_message(domain: AuthorizationDomain | null, message: Soup.Message): void;
        /**
         * Synchronously forces `iface` to refresh any authorization tokens
         * held by it. See zpj_authorizer_refresh_authorization_async() for the
         * asynchronous version of this call.
         *
         * This method is thread safe.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         * @returns %TRUE if the authorizer now has a valid token.
         */
        refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously forces `iface` to refresh any authorization tokens
         * held by it. See zpj_authorizer_refresh_authorization() for the
         * synchronous version of this call.
         *
         * When the operation is finished, `callback` will be called. You can
         * then call zpj_authorizer_refresh_authorization_finish() to get the
         * result of the operation.
         *
         * This method is thread safe.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         */
        refresh_authorization_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously forces `iface` to refresh any authorization tokens
         * held by it. See zpj_authorizer_refresh_authorization() for the
         * synchronous version of this call.
         *
         * When the operation is finished, `callback` will be called. You can
         * then call zpj_authorizer_refresh_authorization_finish() to get the
         * result of the operation.
         *
         * This method is thread safe.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         * @param callback A #GAsyncReadyCallback to call when the   request is satisfied.
         */
        refresh_authorization_async(
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously forces `iface` to refresh any authorization tokens
         * held by it. See zpj_authorizer_refresh_authorization() for the
         * synchronous version of this call.
         *
         * When the operation is finished, `callback` will be called. You can
         * then call zpj_authorizer_refresh_authorization_finish() to get the
         * result of the operation.
         *
         * This method is thread safe.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         * @param callback A #GAsyncReadyCallback to call when the   request is satisfied.
         */
        refresh_authorization_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an asynchronous operation started with
         * zpj_authorizer_refresh_authorization_async().
         * @param res A #GAsyncResult.
         * @returns %TRUE if the authorizer now has a valid token.
         */
        refresh_authorization_finish(res: Gio.AsyncResult): boolean;
        /**
         * Whether the authorization tokens held by `iface` are valid for
         * `domain`.
         *
         * This method is thread safe.
         * @param domain A #ZpjAuthorizationDomain.
         */
        vfunc_is_authorized_for_domain(domain: AuthorizationDomain): boolean;
        /**
         * Adds the necessary authorization to `call`.
         *
         * This method modifies `call` in place and is thread safe.
         * @param domain An optional #ZpjAuthorizationDomain object,   or %NULL.
         * @param call A #RestProxyCall.
         */
        vfunc_process_call(domain: AuthorizationDomain | null, call: Rest.ProxyCall): void;
        /**
         * Adds the necessary authorization to `message`. The type of `message`
         * can be DELETE, GET and POST.
         *
         * This method modifies `message` in place and is thread safe.
         * @param domain An optional #ZpjAuthorizationDomain object,   or %NULL.
         * @param message A #SoupMessage.
         */
        vfunc_process_message(domain: AuthorizationDomain | null, message: Soup.Message): void;
        /**
         * Synchronously forces `iface` to refresh any authorization tokens
         * held by it. See zpj_authorizer_refresh_authorization_async() for the
         * asynchronous version of this call.
         *
         * This method is thread safe.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         */
        vfunc_refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;
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

    namespace Skydrive {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::authorizer': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            authorizer: Authorizer;
        }
    }

    /**
     * The #ZpjSkydrive structure contains only private data and should
     * only be accessed using the provided API.
     */
    class Skydrive extends GObject.Object {
        static $gtype: GObject.GType<Skydrive>;

        // Properties

        get authorizer(): Authorizer;
        set authorizer(val: Authorizer);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Skydrive.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Skydrive.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](authorizer: Authorizer): Skydrive;

        // Signals

        connect<K extends keyof Skydrive.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Skydrive.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Skydrive.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Skydrive.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Skydrive.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Skydrive.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        create_folder(folder: SkydriveFolder, cancellable?: Gio.Cancellable | null): boolean;
        create_folder_from_name(name: string, parent_id: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Synchronously deletes the entry corresponding to `entry_id` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>.
         * @param entry_id The ID of the #ZpjSkydriveEntry to be deleted.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         * @returns %TRUE if the #ZpjSkydriveEntry was deleted successfully.
         */
        delete_entry_id(entry_id: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Synchronously downloads the file corresponding to `file_id` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink> and saves it in `path`. The file is temporarily
         * saved in the preferred directory for temporary files (as returned
         * by g_get_tmp_dir()) while the download is going on, and then moved
         * to `path`.
         * @param file_id The ID of the #ZpjSkydriveFile to be downloaded.
         * @param path The destination.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         * @returns %TRUE if the #ZpjSkydriveFile was downloaded successfully.
         */
        download_file_id_to_path(file_id: string, path: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Synchronously returns a stream for downloading the file
         * corresponding to `file_id` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>. See
         * zpj_skydrive_download_file_id_to_stream_async() for the asynchronous
         * version of this call.
         * @param file_id The ID of the #ZpjSkydriveFile to be downloaded.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         * @returns A #GInputStream to read the file data from. Free the returned object with g_object_unref().
         */
        download_file_id_to_stream(file_id: string, cancellable?: Gio.Cancellable | null): Gio.InputStream;
        /**
         * Asynchronously returns a stream for downloading the file
         * corresponding to `file_id` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>. See zpj_skydrive_download_file_id_to_stream() for
         * the synchronous version of this call.
         *
         * When the operation is finished, `callback` will be called. You can
         * then call zpj_skydrive_download_file_id_to_stream_finish() to get
         * the result of the operation.
         * @param file_id The ID of the #ZpjSkydriveFile to be downloaded.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         */
        download_file_id_to_stream_async(
            file_id: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<Gio.InputStream>;
        /**
         * Asynchronously returns a stream for downloading the file
         * corresponding to `file_id` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>. See zpj_skydrive_download_file_id_to_stream() for
         * the synchronous version of this call.
         *
         * When the operation is finished, `callback` will be called. You can
         * then call zpj_skydrive_download_file_id_to_stream_finish() to get
         * the result of the operation.
         * @param file_id The ID of the #ZpjSkydriveFile to be downloaded.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         * @param callback A #GAsyncReadyCallback to call when the   request is satisfied.
         */
        download_file_id_to_stream_async(
            file_id: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously returns a stream for downloading the file
         * corresponding to `file_id` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>. See zpj_skydrive_download_file_id_to_stream() for
         * the synchronous version of this call.
         *
         * When the operation is finished, `callback` will be called. You can
         * then call zpj_skydrive_download_file_id_to_stream_finish() to get
         * the result of the operation.
         * @param file_id The ID of the #ZpjSkydriveFile to be downloaded.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         * @param callback A #GAsyncReadyCallback to call when the   request is satisfied.
         */
        download_file_id_to_stream_async(
            file_id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Gio.InputStream> | void;
        /**
         * Finishes an asynchronous operation started with
         * zpj_skydrive_download_file_id_to_stream_async().
         * @param res A #GAsyncResult.
         * @returns A #GInputStream to read the file data from. Free the returned object with g_object_unref().
         */
        download_file_id_to_stream_finish(res: Gio.AsyncResult): Gio.InputStream;
        /**
         * Synchronously downloads `file` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink> and saves it in `path`. The file is temporarily
         * saved in the preferred directory for temporary files (as returned
         * by g_get_tmp_dir()) while the download is going on, and then moved
         * to `path`.
         * @param file The #ZpjSkydriveFile to be downloaded.
         * @param path The destination.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         * @returns %TRUE if the #ZpjSkydriveFile was downloaded successfully.
         */
        download_file_to_path(file: SkydriveFile, path: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Synchronously returns a stream for downloading `file` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>. See zpj_skydrive_download_file_to_stream_async()
         * for the asynchronous version of this call.
         * @param file The #ZpjSkydriveFile to be downloaded.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         * @returns A #GInputStream to read the file data from. Free the returned object with g_object_unref().
         */
        download_file_to_stream(file: SkydriveFile, cancellable?: Gio.Cancellable | null): Gio.InputStream;
        /**
         * Asynchronously returns a stream for downloading `file` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>. See zpj_skydrive_download_file_to_stream() for the
         * synchronous version of this call.
         *
         * When the operation is finished, `callback` will be called. You can
         * then call zpj_skydrive_download_file_to_stream_finish() to get the
         * result of the operation.
         * @param file The #ZpjSkydriveFile to be downloaded.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         */
        download_file_to_stream_async(
            file: SkydriveFile,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<Gio.InputStream>;
        /**
         * Asynchronously returns a stream for downloading `file` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>. See zpj_skydrive_download_file_to_stream() for the
         * synchronous version of this call.
         *
         * When the operation is finished, `callback` will be called. You can
         * then call zpj_skydrive_download_file_to_stream_finish() to get the
         * result of the operation.
         * @param file The #ZpjSkydriveFile to be downloaded.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         * @param callback A #GAsyncReadyCallback to call when the   request is satisfied.
         */
        download_file_to_stream_async(
            file: SkydriveFile,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously returns a stream for downloading `file` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>. See zpj_skydrive_download_file_to_stream() for the
         * synchronous version of this call.
         *
         * When the operation is finished, `callback` will be called. You can
         * then call zpj_skydrive_download_file_to_stream_finish() to get the
         * result of the operation.
         * @param file The #ZpjSkydriveFile to be downloaded.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         * @param callback A #GAsyncReadyCallback to call when the   request is satisfied.
         */
        download_file_to_stream_async(
            file: SkydriveFile,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Gio.InputStream> | void;
        /**
         * Finishes an asynchronous operation started with
         * zpj_skydrive_download_file_to_stream_async().
         * @param res A #GAsyncResult.
         * @returns A #GInputStream to read the file data from. Free the returned object with g_object_unref().
         */
        download_file_to_stream_finish(res: Gio.AsyncResult): Gio.InputStream;
        /**
         * Gets the authorizer used to authorize requests to `self`.
         * @returns A #ZpjAuthorizer. The returned object is owned by #ZpjSkydrive and should not be modified or freed.
         */
        get_authorizer(): Authorizer;
        /**
         * Synchronously lists the contents of `folder_id` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>.
         * @param folder The #ZpjSkydriveFolder to be listed.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         * @returns A list of the #ZpjSkydrive entries within the #ZpjSkydriveFolder. Free the returned list with g_list_free() after each element has been freed with g_object_unref().
         */
        list_folder(folder: SkydriveFolder, cancellable?: Gio.Cancellable | null): SkydriveEntry[];
        /**
         * Synchronously lists the contents of the folder corresponding to
         * `folder_id` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>.
         * @param folder_id The ID of the #ZpjSkydriveFolder to be listed.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         * @returns A list of the #ZpjSkydrive entries within the #ZpjSkydriveFolder, or %NULL on error. Free the returned list with g_list_free() after each element has been freed with g_object_unref().
         */
        list_folder_id(folder_id: string, cancellable?: Gio.Cancellable | null): SkydriveEntry[];
        /**
         * Asynchronously lists the contents of the folder corresponding to
         * `folder_id` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>. See zpj_skydrive_list_folder_id() for the
         * synchronous version of this call.
         *
         * When the operation is finished, `callback` will be called. You can
         * then call zpj_skydrive_list_folder_id_finish() to get the result
         * of the operation.
         * @param folder_id The ID of the #ZpjSkydriveFolder to be listed.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         */
        list_folder_id_async(
            folder_id: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<SkydriveEntry[]>;
        /**
         * Asynchronously lists the contents of the folder corresponding to
         * `folder_id` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>. See zpj_skydrive_list_folder_id() for the
         * synchronous version of this call.
         *
         * When the operation is finished, `callback` will be called. You can
         * then call zpj_skydrive_list_folder_id_finish() to get the result
         * of the operation.
         * @param folder_id The ID of the #ZpjSkydriveFolder to be listed.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         * @param callback A #GAsyncReadyCallback to call when the   request is satisfied.
         */
        list_folder_id_async(
            folder_id: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously lists the contents of the folder corresponding to
         * `folder_id` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>. See zpj_skydrive_list_folder_id() for the
         * synchronous version of this call.
         *
         * When the operation is finished, `callback` will be called. You can
         * then call zpj_skydrive_list_folder_id_finish() to get the result
         * of the operation.
         * @param folder_id The ID of the #ZpjSkydriveFolder to be listed.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         * @param callback A #GAsyncReadyCallback to call when the   request is satisfied.
         */
        list_folder_id_async(
            folder_id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<SkydriveEntry[]> | void;
        /**
         * Finishes an asynchronous operation started with
         * zpj_skydrive_list_folder_id_async().
         * @param res A #GAsyncResult.
         * @returns A list of the #ZpjSkydrive entries within the #ZpjSkydriveFolder, or %NULL on error. Free the returned list with g_list_free() after each element has been freed with g_object_unref().
         */
        list_folder_id_finish(res: Gio.AsyncResult): SkydriveEntry[];
        /**
         * Synchronously reads the properties of the entry corresponding to
         * `id` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>. See zpj_skydrive_query_info_from_id_async() for
         * the asynchronous version of this call.
         * @param id An ID to be queried.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         * @returns A new #ZpjSkydriveEntry. Free the returned object with g_object_unref().
         */
        query_info_from_id(id: string, cancellable?: Gio.Cancellable | null): SkydriveEntry;
        /**
         * Asynchronously reads the properties of the entry corresponding to
         * `id` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>. See zpj_skydrive_query_info_from_id() for the
         * synchronous version of this call.
         *
         * When the operation is finished, `callback` will be called. You can
         * then call zpj_skydrive_query_info_from_id_finish() to get the result
         * of the operation.
         * @param id The ID to be queried.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         */
        query_info_from_id_async(id: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<SkydriveEntry>;
        /**
         * Asynchronously reads the properties of the entry corresponding to
         * `id` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>. See zpj_skydrive_query_info_from_id() for the
         * synchronous version of this call.
         *
         * When the operation is finished, `callback` will be called. You can
         * then call zpj_skydrive_query_info_from_id_finish() to get the result
         * of the operation.
         * @param id The ID to be queried.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         * @param callback A #GAsyncReadyCallback to call when the   request is satisfied.
         */
        query_info_from_id_async(
            id: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously reads the properties of the entry corresponding to
         * `id` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>. See zpj_skydrive_query_info_from_id() for the
         * synchronous version of this call.
         *
         * When the operation is finished, `callback` will be called. You can
         * then call zpj_skydrive_query_info_from_id_finish() to get the result
         * of the operation.
         * @param id The ID to be queried.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         * @param callback A #GAsyncReadyCallback to call when the   request is satisfied.
         */
        query_info_from_id_async(
            id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<SkydriveEntry> | void;
        /**
         * Finishes an asynchronous operation started with
         * zpj_skydrive_query_info_from_id_async().
         * @param res A #GAsyncResult.
         * @returns A new #ZpjSkydriveEntry. Free the returned object with g_object_unref().
         */
        query_info_from_id_finish(res: Gio.AsyncResult): SkydriveEntry;
        /**
         * Uses the new `authorizer` to replace the old one that was used to
         * authorize requests to `self`.
         * @param authorizer A new #ZpjAuthorizer.
         */
        set_authorizer(authorizer: Authorizer): void;
        /**
         * Synchronously returns a stream for downloading the thumbnail of the
         * file corresponding to `file_id` from
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink>. See
         * zpj_skydrive_thumbnail_file_id_to_stream_async() for the
         * asynchronous version of this call.
         *
         * Thumbnails are only available for #ZpjSkydrivePhoto and
         * #ZpjSkydriveVideo objects. If `file_id` refers to some other kind of
         * #ZpjSkydriveFile, the error %ZPJ_ERROR_REQUEST_URL_INVALID will be
         * returned.
         * @param file_id The ID of the #ZpjSkydriveFile to be thumbnailed.
         * @param size The thumbnail size.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         * @returns A #GInputStream to read the thumbnail data from. Free the returned object with g_object_unref().
         */
        thumbnail_file_id_to_stream(
            file_id: string,
            size: ThumbnailSize | null,
            cancellable?: Gio.Cancellable | null,
        ): Gio.InputStream;
        /**
         * Synchronously uploads the file at `path` to
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink> and places it under `folder`.
         * @param path The source.
         * @param folder The destination #ZpjSkydriveFolder.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         * @returns %TRUE if the file was uploaded successfully.
         */
        upload_path_to_folder(path: string, folder: SkydriveFolder, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Synchronously uploads the file at `path` to
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
         * Skydrive</ulink> and places it under the folder corresponding to
         * `folder_id`.
         * @param path The source.
         * @param folder_id The ID of the destination #ZpjSkydriveFolder.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         * @returns %TRUE if the file was uploaded successfully.
         */
        upload_path_to_folder_id(path: string, folder_id: string, cancellable?: Gio.Cancellable | null): boolean;
    }

    namespace SkydriveEntry {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::created-time': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::from-id': (pspec: GObject.ParamSpec) => void;
            'notify::from-name': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::json': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent-id': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::updated-time': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            created_time: GLib.DateTime;
            createdTime: GLib.DateTime;
            description: string;
            from_id: string;
            fromId: string;
            from_name: string;
            fromName: string;
            id: string;
            json: Json.Node;
            name: string;
            parent_id: string;
            parentId: string;
            type: SkydriveEntryType;
            updated_time: GLib.DateTime;
            updatedTime: GLib.DateTime;
        }
    }

    /**
     * The #ZpjSkydriveEntry structure contains only private data and
     * should only be accessed using the provided API.
     */
    abstract class SkydriveEntry extends GObject.Object {
        static $gtype: GObject.GType<SkydriveEntry>;

        // Properties

        get created_time(): GLib.DateTime;
        get createdTime(): GLib.DateTime;
        get description(): string;
        get from_id(): string;
        get fromId(): string;
        get from_name(): string;
        get fromName(): string;
        get id(): string;
        set json(val: Json.Node);
        get name(): string;
        get parent_id(): string;
        get parentId(): string;
        get type(): SkydriveEntryType;
        get updated_time(): GLib.DateTime;
        get updatedTime(): GLib.DateTime;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SkydriveEntry.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SkydriveEntry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof SkydriveEntry.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SkydriveEntry.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SkydriveEntry.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SkydriveEntry.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SkydriveEntry.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SkydriveEntry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_parse_json_node(node: Json.Node): void;

        // Methods

        /**
         * Gets the time at which `self` was created. This is the value of the
         * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh243648">
         * updated_time</ulink> member in the JSON returned by the server.
         * @returns a #GDateTime representing the time at which the entry was created. The returned time is owned by the #ZpjSkydriveEntry and should not be unreferenced.
         */
        get_created_time(): GLib.DateTime;
        /**
         * Gets the description of `self`. This is the value of the <ulink
         * url="http://msdn.microsoft.com/en-us/library/live/hh243648">
         * description</ulink> member in the JSON returned by the server.
         * @returns description of the entry. This string is owned by the #ZpjSkydriveEntry and should not be modified or freed.
         */
        get_description(): string;
        /**
         * Gets the ID of the user who created or uploaded `self`. This is part
         * of the <ulink
         * url="http://msdn.microsoft.com/en-us/library/live/hh243648">
         * from</ulink> object in the JSON returned by the server.
         * @returns ID of the user who created the entry. This string is by the #ZpjSkydriveEntry and should not be modified or freed.
         */
        get_from_id(): string;
        /**
         * Gets the name of the user who created or uploaded `self`. This is
         * part of the <ulink
         * url="http://msdn.microsoft.com/en-us/library/live/hh243648">
         * from</ulink> object in the JSON returned by the server.
         * @returns name of the user who created the entry. This string is by the #ZpjSkydriveEntry and should not be modified or freed.
         */
        get_from_name(): string;
        /**
         * Gets the ID of `self`. This is the value of the <ulink
         * url="http://msdn.microsoft.com/en-us/library/live/hh243648">
         * id</ulink> member in the JSON returned by the server.
         * @returns the entry's ID. This string is owned by the #ZpjSkydriveEntry and should not be modified or freed.
         */
        get_id(): string;
        /**
         * Gets the name of `self`. This is the value of the <ulink
         * url="http://msdn.microsoft.com/en-us/library/live/hh243648">
         * name</ulink> member in the JSON returned by the server.
         * @returns name of the entry. This string is owned by the #ZpjSkydriveEntry and should not be modified or freed.
         */
        get_name(): string;
        /**
         * Gets the ID of the folder containing `self`. This is the value of
         * the <ulink
         * url="http://msdn.microsoft.com/en-us/library/live/hh243648">
         * parent_id</ulink> member in the JSON returned by the server.
         * @returns ID of the parent folder. This string is owned by the #ZpjSkydriveEntry and should not be modified or freed.
         */
        get_parent_id(): string;
        /**
         * Gets the time at which `self` was last updated. This is the value of
         * the <ulink
         * url="http://msdn.microsoft.com/en-us/library/live/hh243648">
         * updated_time</ulink> member in the JSON returned by the server.
         * @returns a #GDateTime representing the time at which the entry was last updated. The returned time is owned by the #ZpjSkydriveEntry and should not be unreferenced.
         */
        get_updated_time(): GLib.DateTime;
        /**
         * Whether `self` is a folder.
         * @returns %TRUE if the entry is a folder.
         */
        is_folder(): boolean;
    }

    namespace SkydriveFile {
        // Signal signatures
        interface SignalSignatures extends SkydriveEntry.SignalSignatures {
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::created-time': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::from-id': (pspec: GObject.ParamSpec) => void;
            'notify::from-name': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::json': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent-id': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::updated-time': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends SkydriveEntry.ConstructorProps {
            size: number;
        }
    }

    /**
     * The #ZpjSkydriveFile structure contains only private data and should
     * only be accessed using the provided API.
     */
    class SkydriveFile extends SkydriveEntry {
        static $gtype: GObject.GType<SkydriveFile>;

        // Properties

        get size(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SkydriveFile.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SkydriveFile.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](node: Json.Node): SkydriveFile;

        // Signals

        connect<K extends keyof SkydriveFile.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SkydriveFile.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SkydriveFile.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SkydriveFile.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SkydriveFile.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SkydriveFile.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the size of `self` in bytes. This is the value of the <ulink
         * url="http://msdn.microsoft.com/en-us/library/live/hh243648#file">
         * size</ulink> member in the JSON returned by the server.
         * @returns The entry's size in bytes.
         */
        get_size(): number;
    }

    namespace SkydriveFolder {
        // Signal signatures
        interface SignalSignatures extends SkydriveEntry.SignalSignatures {
            'notify::created-time': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::from-id': (pspec: GObject.ParamSpec) => void;
            'notify::from-name': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::json': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent-id': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::updated-time': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends SkydriveEntry.ConstructorProps {}
    }

    /**
     * The #ZpjSkydriveFolder structure contains only private data and
     * should only be accessed using the provided API.
     */
    class SkydriveFolder extends SkydriveEntry {
        static $gtype: GObject.GType<SkydriveFolder>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SkydriveFolder.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SkydriveFolder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](node: Json.Node): SkydriveFolder;

        // Signals

        connect<K extends keyof SkydriveFolder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SkydriveFolder.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SkydriveFolder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SkydriveFolder.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SkydriveFolder.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SkydriveFolder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace SkydrivePhoto {
        // Signal signatures
        interface SignalSignatures extends SkydriveFile.SignalSignatures {
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::created-time': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::from-id': (pspec: GObject.ParamSpec) => void;
            'notify::from-name': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::json': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent-id': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::updated-time': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends SkydriveFile.ConstructorProps {}
    }

    /**
     * The #ZpjSkydrivePhoto structure contains only private data and
     * should only be accessed using the provided API.
     */
    class SkydrivePhoto extends SkydriveFile {
        static $gtype: GObject.GType<SkydrivePhoto>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SkydrivePhoto.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SkydrivePhoto.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](node: Json.Node): SkydrivePhoto;

        // Signals

        connect<K extends keyof SkydrivePhoto.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SkydrivePhoto.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SkydrivePhoto.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SkydrivePhoto.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SkydrivePhoto.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SkydrivePhoto.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace SkydriveVideo {
        // Signal signatures
        interface SignalSignatures extends SkydriveFile.SignalSignatures {
            'notify::bitrate': (pspec: GObject.ParamSpec) => void;
            'notify::duration': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::created-time': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::from-id': (pspec: GObject.ParamSpec) => void;
            'notify::from-name': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::json': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent-id': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::updated-time': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends SkydriveFile.ConstructorProps {
            bitrate: number;
            duration: number;
            height: number;
            width: number;
        }
    }

    /**
     * The #ZpjSkydriveVideo structure contains only private data and
     * should only be accessed using the provided API.
     */
    class SkydriveVideo extends SkydriveFile {
        static $gtype: GObject.GType<SkydriveVideo>;

        // Properties

        get bitrate(): number;
        get duration(): number;
        get height(): number;
        get width(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SkydriveVideo.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SkydriveVideo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](node: Json.Node): SkydriveVideo;

        // Signals

        connect<K extends keyof SkydriveVideo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SkydriveVideo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SkydriveVideo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SkydriveVideo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SkydriveVideo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SkydriveVideo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the bit rate of `self` in bits per second. This is the value of
         * the <ulink
         * url="http://msdn.microsoft.com/en-us/library/live/hh243648#video">
         * bitrate</ulink> member in the JSON returned by the server.
         * @returns The video's bit rate in bits per second.
         */
        get_bitrate(): number;
        /**
         * Gets the run time duration of `self` in milliseconds. This is the
         * value of the <ulink
         * url="http://msdn.microsoft.com/en-us/library/live/hh243648#video">
         * duration</ulink> member in the JSON returned by the server.
         * @returns The video's run time duration in milliseconds.
         */
        get_duration(): number;
        /**
         * Gets the height of `self` in pixels. This is the value of the <ulink
         * url="http://msdn.microsoft.com/en-us/library/live/hh243648#video">
         * height</ulink> member in the JSON returned by the server.
         * @returns The video's height in pixels.
         */
        get_height(): number;
        /**
         * Gets the width of `self` in pixels. This is the value of the <ulink
         * url="http://msdn.microsoft.com/en-us/library/live/hh243648#video">
         * width</ulink> member in the JSON returned by the server.
         * @returns The video's width in pixels.
         */
        get_width(): number;
    }

    type AuthorizationDomainClass = typeof AuthorizationDomain;
    abstract class AuthorizationDomainPrivate {
        static $gtype: GObject.GType<AuthorizationDomainPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type AuthorizerInterface = typeof Authorizer;
    type GoaAuthorizerClass = typeof GoaAuthorizer;
    abstract class GoaAuthorizerPrivate {
        static $gtype: GObject.GType<GoaAuthorizerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SkydriveClass = typeof Skydrive;
    type SkydriveEntryClass = typeof SkydriveEntry;
    abstract class SkydriveEntryPrivate {
        static $gtype: GObject.GType<SkydriveEntryPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SkydriveFileClass = typeof SkydriveFile;
    abstract class SkydriveFilePrivate {
        static $gtype: GObject.GType<SkydriveFilePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SkydriveFolderClass = typeof SkydriveFolder;
    type SkydrivePhotoClass = typeof SkydrivePhoto;
    abstract class SkydrivePrivate {
        static $gtype: GObject.GType<SkydrivePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SkydriveVideoClass = typeof SkydriveVideo;
    abstract class SkydriveVideoPrivate {
        static $gtype: GObject.GType<SkydriveVideoPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    namespace Authorizer {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface AuthorizerNamespace {
        $gtype: GObject.GType<Authorizer>;
        prototype: Authorizer;
    }
    interface Authorizer extends GObject.Object {
        // Methods

        /**
         * Whether the authorization tokens held by `iface` are valid for
         * `domain`.
         *
         * This method is thread safe.
         * @param domain A #ZpjAuthorizationDomain.
         * @returns %TRUE if the tokens are valid.
         */
        is_authorized_for_domain(domain: AuthorizationDomain): boolean;
        /**
         * Adds the necessary authorization to `call`.
         *
         * This method modifies `call` in place and is thread safe.
         * @param domain An optional #ZpjAuthorizationDomain object,   or %NULL.
         * @param call A #RestProxyCall.
         */
        process_call(domain: AuthorizationDomain | null, call: Rest.ProxyCall): void;
        /**
         * Adds the necessary authorization to `message`. The type of `message`
         * can be DELETE, GET and POST.
         *
         * This method modifies `message` in place and is thread safe.
         * @param domain An optional #ZpjAuthorizationDomain object,   or %NULL.
         * @param message A #SoupMessage.
         */
        process_message(domain: AuthorizationDomain | null, message: Soup.Message): void;
        /**
         * Synchronously forces `iface` to refresh any authorization tokens
         * held by it. See zpj_authorizer_refresh_authorization_async() for the
         * asynchronous version of this call.
         *
         * This method is thread safe.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         * @returns %TRUE if the authorizer now has a valid token.
         */
        refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously forces `iface` to refresh any authorization tokens
         * held by it. See zpj_authorizer_refresh_authorization() for the
         * synchronous version of this call.
         *
         * When the operation is finished, `callback` will be called. You can
         * then call zpj_authorizer_refresh_authorization_finish() to get the
         * result of the operation.
         *
         * This method is thread safe.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         */
        refresh_authorization_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously forces `iface` to refresh any authorization tokens
         * held by it. See zpj_authorizer_refresh_authorization() for the
         * synchronous version of this call.
         *
         * When the operation is finished, `callback` will be called. You can
         * then call zpj_authorizer_refresh_authorization_finish() to get the
         * result of the operation.
         *
         * This method is thread safe.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         * @param callback A #GAsyncReadyCallback to call when the   request is satisfied.
         */
        refresh_authorization_async(
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously forces `iface` to refresh any authorization tokens
         * held by it. See zpj_authorizer_refresh_authorization() for the
         * synchronous version of this call.
         *
         * When the operation is finished, `callback` will be called. You can
         * then call zpj_authorizer_refresh_authorization_finish() to get the
         * result of the operation.
         *
         * This method is thread safe.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         * @param callback A #GAsyncReadyCallback to call when the   request is satisfied.
         */
        refresh_authorization_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an asynchronous operation started with
         * zpj_authorizer_refresh_authorization_async().
         * @param res A #GAsyncResult.
         * @returns %TRUE if the authorizer now has a valid token.
         */
        refresh_authorization_finish(res: Gio.AsyncResult): boolean;

        // Virtual methods

        /**
         * Whether the authorization tokens held by `iface` are valid for
         * `domain`.
         *
         * This method is thread safe.
         * @param domain A #ZpjAuthorizationDomain.
         */
        vfunc_is_authorized_for_domain(domain: AuthorizationDomain): boolean;
        /**
         * Adds the necessary authorization to `call`.
         *
         * This method modifies `call` in place and is thread safe.
         * @param domain An optional #ZpjAuthorizationDomain object,   or %NULL.
         * @param call A #RestProxyCall.
         */
        vfunc_process_call(domain: AuthorizationDomain | null, call: Rest.ProxyCall): void;
        /**
         * Adds the necessary authorization to `message`. The type of `message`
         * can be DELETE, GET and POST.
         *
         * This method modifies `message` in place and is thread safe.
         * @param domain An optional #ZpjAuthorizationDomain object,   or %NULL.
         * @param message A #SoupMessage.
         */
        vfunc_process_message(domain: AuthorizationDomain | null, message: Soup.Message): void;
        /**
         * Synchronously forces `iface` to refresh any authorization tokens
         * held by it. See zpj_authorizer_refresh_authorization_async() for the
         * asynchronous version of this call.
         *
         * This method is thread safe.
         * @param cancellable An optional #GCancellable object, or   %NULL.
         */
        vfunc_refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;
    }

    export const Authorizer: AuthorizerNamespace & {
        new (): Authorizer; // This allows `obj instanceof Authorizer`
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

export default Zpj;

// END
