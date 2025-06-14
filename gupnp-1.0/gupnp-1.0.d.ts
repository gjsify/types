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
import type Soup from '@girs/soup-2.4';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GSSDP from '@girs/gssdp-1.0';

export namespace GUPnP {
    /**
     * GUPnP-1.0
     */

    /**
     * #GError codes used for errors in the #GUPNP_CONTROL_ERROR domain, during
     * invocation of service actions.
     */
    class ControlError extends GLib.Error {
        static $gtype: GObject.GType<ControlError>;

        // Static fields

        /**
         * The action name was invalid.
         */
        static INVALID_ACTION: number;
        /**
         * The action arguments were invalid.
         */
        static INVALID_ARGS: number;
        /**
         * Out of sync (deprecated).
         */
        static OUT_OF_SYNC: number;
        /**
         * The action failed.
         */
        static ACTION_FAILED: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    /**
     * #GError codes used for errors in the #GUPNP_EVENTING_ERROR domain, during
     * eventing of state variables.
     */
    class EventingError extends GLib.Error {
        static $gtype: GObject.GType<EventingError>;

        // Static fields

        /**
         * The subscription attempt failed.
         */
        static SUBSCRIPTION_FAILED: number;
        /**
         * The subscription was lost.
         */
        static SUBSCRIPTION_LOST: number;
        /**
         * The notification failed.
         */
        static NOTIFY_FAILED: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    /**
     * #GError codes used for errors in the #GUPNP_SERVER_ERROR domain, when there
     * is communication with another server.
     */
    class ServerError extends GLib.Error {
        static $gtype: GObject.GType<ServerError>;

        // Static fields

        /**
         * Internal server error.
         */
        static INTERNAL_SERVER_ERROR: number;
        /**
         * The resource was not found.
         */
        static NOT_FOUND: number;
        /**
         * This method is not implemented.
         */
        static NOT_IMPLEMENTED: number;
        /**
         * Invalid response.
         */
        static INVALID_RESPONSE: number;
        /**
         * Invalid URL.
         */
        static INVALID_URL: number;
        /**
         * Unknown/unhandled error.
         */
        static OTHER: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    /**
     * Represents the direction of a service state variable.
     */

    /**
     * Represents the direction of a service state variable.
     */
    export namespace ServiceActionArgDirection {
        export const $gtype: GObject.GType<ServiceActionArgDirection>;
    }

    enum ServiceActionArgDirection {
        /**
         * An "in" variable, to the service.
         */
        IN,
        /**
         * An "out" variable, from the service.
         */
        OUT,
    }
    /**
     * #GError codes used for errors in the #GUPNP_XML_ERROR domain, during
     * processing of XML data.
     */
    class XMLError extends GLib.Error {
        static $gtype: GObject.GType<XMLError>;

        // Static fields

        /**
         * Generic XML parsing error.
         */
        static PARSE: number;
        /**
         * A required XML node was not found.
         */
        static NO_NODE: number;
        /**
         * An XML node is unexpectedly empty.
         */
        static EMPTY_NODE: number;
        /**
         * An XML node has an unknown attribute.
         */
        static INVALID_ATTRIBUTE: number;
        /**
         * Unknown/unhandled XML related errors.
         */
        static OTHER: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    function control_error_quark(): GLib.Quark;
    function eventing_error_quark(): GLib.Quark;
    /**
     * Generate and return a new UUID.
     * @returns A newly generated UUID in string representation.
     */
    function get_uuid(): string;
    function server_error_quark(): GLib.Quark;
    function xml_error_quark(): GLib.Quark;
    interface ServiceIntrospectionCallback {
        (info: ServiceInfo, introspection: ServiceIntrospection, error: GLib.Error): void;
    }
    interface ServiceProxyActionCallback {
        (proxy: ServiceProxy, action: ServiceProxyAction): void;
    }
    interface ServiceProxyNotifyCallback {
        (proxy: ServiceProxy, variable: string, value: GObject.Value | any): void;
    }
    type BinBase64 = object | null;
    type BinHex = object | null;
    type Date = object | null;
    type DateTime = object | null;
    type DateTimeTZ = object | null;
    type Time = object | null;
    type TimeTZ = object | null;
    type URI = object | null;
    type UUID = object | null;
    namespace Context {
        // Signal signatures
        interface SignalSignatures extends GSSDP.Client.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GSSDP.Client.ConstructorProps, Gio.Initable.ConstructorProps {
            acl: Acl;
            default_language: string;
            defaultLanguage: string;
            port: number;
            server: Soup.Server;
            session: Soup.Session;
            subscription_timeout: number;
            subscriptionTimeout: number;
        }
    }

    /**
     * This struct contains private data only, and should be accessed using the
     * functions below.
     */
    class Context extends GSSDP.Client implements Gio.Initable {
        static $gtype: GObject.GType<Context>;

        // Properties

        /**
         * An access control list.
         */
        get acl(): Acl;
        set acl(val: Acl);
        /**
         * The content of the Content-Language header id the client
         * sends Accept-Language and no language-specific pages to serve
         * exist. The property defaults to 'en'.
         */
        get default_language(): string;
        set default_language(val: string);
        /**
         * The content of the Content-Language header id the client
         * sends Accept-Language and no language-specific pages to serve
         * exist. The property defaults to 'en'.
         */
        get defaultLanguage(): string;
        set defaultLanguage(val: string);
        /**
         * The port to run on. Set to 0 if you don't care what port to run on.
         */
        get port(): number;
        /**
         * The #SoupServer HTTP server used by GUPnP.
         */
        get server(): Soup.Server;
        /**
         * The #SoupSession object used by GUPnP.
         */
        get session(): Soup.Session;
        /**
         * The preferred subscription timeout: the number of seconds after
         * which subscriptions are renewed. Set to '0' if subscriptions
         * are never to time out.
         */
        get subscription_timeout(): number;
        /**
         * The preferred subscription timeout: the number of seconds after
         * which subscriptions are renewed. Set to '0' if subscriptions
         * are never to time out.
         */
        get subscriptionTimeout(): number;

        // Constructors

        constructor(properties?: Partial<Context.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](main_context: GLib.MainContext | null, iface: string | null, port: number): Context;
        // Conflicted with GSSDP.Client.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof Context.SignalSignatures>(signal: K, callback: Context.SignalSignatures[K]): number;
        connect_after<K extends keyof Context.SignalSignatures>(
            signal: K,
            callback: Context.SignalSignatures[K],
        ): number;
        emit<K extends keyof Context.SignalSignatures>(
            signal: K,
            ...args: Context.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Methods

        /**
         * Add a #SoupServerCallback to the #GUPnPContext<!-- -->'s #SoupServer.
         * @param use_acl %TRUE, if the path should query the GUPnPContext::acl before serving the resource, %FALSE otherwise.
         * @param path the toplevel path for the handler.
         * @param callback callback to invoke for requests under @path
         * @param destroy A #GDestroyNotify for @user_data or %NULL if none.
         */
        add_server_handler(
            use_acl: boolean,
            path: string,
            callback: Soup.ServerCallback,
            destroy?: GLib.DestroyNotify | null,
        ): void;
        get_acl(): Acl;
        /**
         * Get the default Content-Language header for this context.
         * @returns The default content of the Content-Language header.
         */
        get_default_language(): string;
        /**
         * Get the IP address we advertise ourselves as using.
         * @returns The IP address. This string should not be freed.
         */
        get_host_ip(): string;
        /**
         * Get the port that the SOAP server is running on.
         * @returns The port the SOAP server is running on.
         */
        get_port(): number;
        /**
         * Get the #SoupServer HTTP server that GUPnP is using.
         * @returns The #SoupServer used by GUPnP. Do not unref this when finished.
         */
        get_server(): Soup.Server;
        /**
         * Get the #SoupSession object that GUPnP is using.
         * @returns The #SoupSession used by GUPnP. Do not unref this when finished.
         */
        get_session(): Soup.Session;
        /**
         * Get the event subscription timeout (in seconds), or 0 meaning there is no
         * timeout.
         * @returns The event subscription timeout in seconds.
         */
        get_subscription_timeout(): number;
        /**
         * Start hosting `local_path` at `server_path`. Files with the path
         * `local_path`.LOCALE (if they exist) will be served up when LOCALE is
         * specified in the request's Accept-Language header.
         * @param local_path Path to the local file or folder to be hosted
         * @param server_path Web server path where @local_path should be hosted
         */
        host_path(local_path: string, server_path: string): void;
        /**
         * Use this method to serve different local path to specific user-agent(s). The
         * path `server_path` must already be hosted by `context`.
         * @param local_path Path to the local file or folder to be hosted
         * @param server_path Web server path already being hosted
         * @param user_agent The user-agent as a #GRegex.
         * @returns %TRUE on success, %FALSE otherwise.
         */
        host_path_for_agent(local_path: string, server_path: string, user_agent: GLib.Regex): boolean;
        /**
         * Remove a #SoupServerCallback from the #GUPnPContext<!-- -->'s #SoupServer.
         * @param path the toplevel path for the handler.
         */
        remove_server_handler(path: string): void;
        set_acl(acl?: Acl | null): void;
        /**
         * Set the default language for the Content-Length header to `language`.
         *
         * If the client sends an Accept-Language header the UPnP HTTP server
         * is required to send a Content-Language header in return. If there are
         * no files hosted in languages which match the requested ones the
         * Content-Language header is set to this value. The default value is "en".
         * @param language A language tag as defined in RFC 2616 3.10
         */
        set_default_language(language: string): void;
        /**
         * Sets the event subscription timeout to `timeout`. Use 0 if you don't
         * want subscriptions to time out. Note that any client side subscriptions
         * will automatically be renewed.
         * @param timeout Event subscription timeout in seconds
         */
        set_subscription_timeout(timeout: number): void;
        /**
         * Stop hosting the file or folder at `server_path`.
         * @param server_path Web server path where the file or folder is hosted
         */
        unhost_path(server_path: string): void;

        // Inherited methods
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [description][iface`Gio`.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [description][iface`Gio`.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
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

    namespace ContextManager {
        // Signal callback interfaces

        interface ContextAvailable {
            (_source: ContextManager, context: Context): void;
        }

        interface ContextUnavailable {
            (_source: ContextManager, context: Context): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'context-available': ContextAvailable;
            'context-unavailable': ContextUnavailable;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            main_context: any;
            mainContext: any;
            port: number;
            white_list: WhiteList;
            whiteList: WhiteList;
        }
    }

    /**
     * This struct contains private data only, and should be accessed using the
     * functions below.
     */
    abstract class ContextManager extends GObject.Object {
        static $gtype: GObject.GType<ContextManager>;

        // Properties

        get main_context(): any;
        get mainContext(): any;
        /**
         * Port the contexts listen on, or 0 if you don't care what
         * port is used by #GUPnPContext objects created by this object.
         */
        get port(): number;
        /**
         * The white list to use.
         */
        get white_list(): WhiteList;
        /**
         * The white list to use.
         */
        get whiteList(): WhiteList;

        // Constructors

        constructor(properties?: Partial<ContextManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](main_context: GLib.MainContext | null, port: number): ContextManager;

        // Signals

        connect<K extends keyof ContextManager.SignalSignatures>(
            signal: K,
            callback: ContextManager.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ContextManager.SignalSignatures>(
            signal: K,
            callback: ContextManager.SignalSignatures[K],
        ): number;
        emit<K extends keyof ContextManager.SignalSignatures>(
            signal: K,
            ...args: ContextManager.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Static methods

        /**
         * Factory-method to create a new #GUPnPContextManager. The final type of the
         * #GUPnPContextManager depends on the compile-time selection or - in case of
         * NetworkManager - on its availability during runtime. If it is not available,
         * the implementation falls back to the basic Unix context manager instead.
         * @param port Port to create contexts for, or 0 if you don't care what port is used.
         */
        static create(port: number): ContextManager;

        // Methods

        /**
         * Get the network port associated with this context manager.
         * @returns The network port asssociated with this context manager.
         */
        get_port(): number;
        /**
         * Get the #GUPnPWhiteList associated with `manager`.
         * @returns The #GUPnPWhiteList asssociated with this context manager.
         */
        get_white_list(): WhiteList;
        /**
         * By calling this function, you are asking `manager` to keep a reference to
         * `control_point` until its associated #GUPnPContext is no longer available.
         * You usually want to call this function from
         * #GUPnPContextManager::context-available handler after you create a
         * #GUPnPControlPoint object for the newly available context.
         * @param control_point The #GUPnPControlPoint to be taken care of
         */
        manage_control_point(control_point: ControlPoint): void;
        /**
         * By calling this function, you are asking `manager` to keep a reference to
         * `root_device` when its associated #GUPnPContext is no longer available. You
         * usually want to call this function from
         * #GUPnPContextManager::context-available handler after you create a
         * #GUPnPRootDevice object for the newly available context.
         * @param root_device The #GUPnPRootDevice to be taken care of
         */
        manage_root_device(root_device: RootDevice): void;
        /**
         * This function starts a rescan on every control point managed by `manager`.
         * Only the active control points send discovery messages.
         * This function should be called when servers are suspected to have
         * disappeared.
         */
        rescan_control_points(): void;
    }

    namespace ControlPoint {
        // Signal callback interfaces

        interface DeviceProxyAvailable {
            (_source: ControlPoint, proxy: DeviceProxy): void;
        }

        interface DeviceProxyUnavailable {
            (_source: ControlPoint, proxy: DeviceProxy): void;
        }

        interface ServiceProxyAvailable {
            (_source: ControlPoint, proxy: ServiceProxy): void;
        }

        interface ServiceProxyUnavailable {
            (_source: ControlPoint, proxy: ServiceProxy): void;
        }

        // Signal signatures
        interface SignalSignatures extends GSSDP.ResourceBrowser.SignalSignatures {
            'device-proxy-available': DeviceProxyAvailable;
            'device-proxy-unavailable': DeviceProxyUnavailable;
            'service-proxy-available': ServiceProxyAvailable;
            'service-proxy-unavailable': ServiceProxyUnavailable;
        }

        // Constructor properties interface

        interface ConstructorProps extends GSSDP.ResourceBrowser.ConstructorProps {
            resource_factory: ResourceFactory;
            resourceFactory: ResourceFactory;
        }
    }

    /**
     * This struct contains private data only, and should be accessed using the
     * functions below.
     */
    class ControlPoint extends GSSDP.ResourceBrowser {
        static $gtype: GObject.GType<ControlPoint>;

        // Properties

        /**
         * The resource factory to use. Set to NULL for default factory.
         */
        get resource_factory(): ResourceFactory;
        /**
         * The resource factory to use. Set to NULL for default factory.
         */
        get resourceFactory(): ResourceFactory;

        // Constructors

        constructor(properties?: Partial<ControlPoint.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](context: Context, target: string): ControlPoint;

        static new_full(context: Context, factory: ResourceFactory, target: string): ControlPoint;

        // Signals

        connect<K extends keyof ControlPoint.SignalSignatures>(
            signal: K,
            callback: ControlPoint.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ControlPoint.SignalSignatures>(
            signal: K,
            callback: ControlPoint.SignalSignatures[K],
        ): number;
        emit<K extends keyof ControlPoint.SignalSignatures>(
            signal: K,
            ...args: ControlPoint.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Virtual methods

        vfunc_device_proxy_available(proxy: DeviceProxy): void;
        vfunc_device_proxy_unavailable(proxy: DeviceProxy): void;
        vfunc_service_proxy_available(proxy: ServiceProxy): void;
        vfunc_service_proxy_unavailable(proxy: ServiceProxy): void;

        // Methods

        /**
         * Get the #GUPnPControlPoint associated with `control_point`.
         * @returns The #GUPnPContext.
         */
        get_context(): Context;
        /**
         * Get the #GUPnPResourceFactory used by the `control_point`.
         * @returns A #GUPnPResourceFactory.
         */
        get_resource_factory(): ResourceFactory;
        /**
         * Get the #GList of discovered #GUPnPDeviceProxy objects. Do not free the list
         * nor its elements.
         * @returns a #GList of #GUPnPDeviceProxy objects.
         */
        list_device_proxies(): DeviceProxy[];
        /**
         * Get the #GList of discovered #GUPnPServiceProxy objects. Do not free the
         * list nor its elements.
         * @returns a #GList of #GUPnPServiceProxy objects.
         */
        list_service_proxies(): ServiceProxy[];
    }

    namespace Device {
        // Signal signatures
        interface SignalSignatures extends DeviceInfo.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends DeviceInfo.ConstructorProps {
            root_device: RootDevice;
            rootDevice: RootDevice;
        }
    }

    /**
     * This struct contains private data only, and should be accessed using the
     * functions below.
     */
    class Device extends DeviceInfo {
        static $gtype: GObject.GType<Device>;

        // Properties

        /**
         * The containing #GUPnPRootDevice, or NULL if this is the root
         * device.
         */
        get root_device(): RootDevice;
        /**
         * The containing #GUPnPRootDevice, or NULL if this is the root
         * device.
         */
        get rootDevice(): RootDevice;

        // Constructors

        constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Device.SignalSignatures>(signal: K, callback: Device.SignalSignatures[K]): number;
        connect_after<K extends keyof Device.SignalSignatures>(signal: K, callback: Device.SignalSignatures[K]): number;
        emit<K extends keyof Device.SignalSignatures>(
            signal: K,
            ...args: Device.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
    }

    namespace DeviceInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            context: Context;
            device_type: string;
            deviceType: string;
            document: XMLDoc;
            element: any;
            location: string;
            resource_factory: ResourceFactory;
            resourceFactory: ResourceFactory;
            udn: string;
            url_base: Soup.URI;
            urlBase: Soup.URI;
        }
    }

    /**
     * This struct contains private data only, and should be accessed using the
     * functions below.
     */
    abstract class DeviceInfo extends GObject.Object {
        static $gtype: GObject.GType<DeviceInfo>;

        // Properties

        /**
         * The #GUPnPContext to use.
         */
        get context(): Context;
        /**
         * The device type.
         */
        get device_type(): string;
        /**
         * The device type.
         */
        get deviceType(): string;
        /**
         * Private property.
         */
        get document(): XMLDoc;
        /**
         * Private property.
         */
        set element(val: any);
        /**
         * The location of the device description file.
         */
        get location(): string;
        /**
         * The resource factory to use. Set to NULL for default factory.
         */
        get resource_factory(): ResourceFactory;
        /**
         * The resource factory to use. Set to NULL for default factory.
         */
        get resourceFactory(): ResourceFactory;
        /**
         * The UDN of this device.
         */
        get udn(): string;
        /**
         * The URL base (#SoupURI).
         */
        get url_base(): Soup.URI;
        /**
         * The URL base (#SoupURI).
         */
        get urlBase(): Soup.URI;

        // Constructors

        constructor(properties?: Partial<DeviceInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof DeviceInfo.SignalSignatures>(
            signal: K,
            callback: DeviceInfo.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof DeviceInfo.SignalSignatures>(
            signal: K,
            callback: DeviceInfo.SignalSignatures[K],
        ): number;
        emit<K extends keyof DeviceInfo.SignalSignatures>(
            signal: K,
            ...args: DeviceInfo.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Methods

        /**
         * Get the associated #GUPnPContext.
         * @returns A #GUPnPContext.
         */
        get_context(): Context;
        /**
         * This function provides generic access to the contents of arbitrary elements
         * in the device description file.
         * @param element Name of the description element to retrieve
         * @returns a newly allocated string or %NULL if the device               description doesn't contain the given @element
         */
        get_description_value(element: string): string;
        /**
         * Get the service with type `type` directly contained in `info` as
         * a new object implementing #GUPnPDeviceInfo, or %NULL if no such device
         * was found. The returned object should be unreffed when done.
         *
         * Note that devices are not cached internally, so that every time you call
         * this function a new object is created. The application must cache any used
         * devices if it wishes to keep them around and re-use them.
         * @param type The type of the device to be retrieved.
         * @returns A new #GUPnPDeviceInfo.
         */
        get_device(type: string): DeviceInfo | null;
        /**
         * Get the UPnP device type.
         * @returns A constant string, or %NULL.
         */
        get_device_type(): string;
        /**
         * Get the friendly name of the device.
         * @returns A string, or %NULL. g_free() after use.
         */
        get_friendly_name(): string;
        /**
         * Get a URL pointing to the icon most closely matching the
         * given criteria, or %NULL. If `requested_mime_type` is set, only icons with
         * this mime type will be returned. If `requested_depth` is set, only icons with
         * this or lower depth will be returned. If `requested_width` and/or
         * `requested_height` are set, only icons that are this size or smaller are
         * returned, unless `prefer_bigger` is set, in which case the next biggest icon
         * will be returned. The returned strings should be freed.
         * @param requested_mime_type The requested file format, or %NULL for any
         * @param requested_depth The requested color depth, or -1 for any
         * @param requested_width The requested width, or -1 for any
         * @param requested_height The requested height, or -1 for any
         * @param prefer_bigger %TRUE if a bigger, rather than a smaller icon should be returned if no exact match could be found
         * @returns a string, or %NULL.  g_free() after use.
         */
        get_icon_url(
            requested_mime_type: string | null,
            requested_depth: number,
            requested_width: number,
            requested_height: number,
            prefer_bigger: boolean,
        ): [string, string, number, number, number];
        /**
         * Get the location of the device description file.
         * @returns A constant string.
         */
        get_location(): string;
        /**
         * Get the manufacturer of the device.
         * @returns A string, or %NULL. g_free() after use.
         */
        get_manufacturer(): string;
        /**
         * Get a URL pointing to the manufacturer's website.
         * @returns A string, or %NULL. g_free() after use.
         */
        get_manufacturer_url(): string;
        /**
         * Get the description of the device model.
         * @returns A string, or %NULL. g_free() after use.
         */
        get_model_description(): string;
        /**
         * Get the model name of the device.
         * @returns A string, or %NULL. g_free() after use.
         */
        get_model_name(): string;
        /**
         * Get the model number of the device.
         * @returns A string, or %NULL. g_free() after use.
         */
        get_model_number(): string;
        /**
         * Get a URL pointing to the device model's website.
         * @returns A string, or %NULL. g_free() after use.
         */
        get_model_url(): string;
        /**
         * Get a URL pointing to the device's presentation page, for web-based
         * administration.
         * @returns A string, or %NULL. g_free() after use.
         */
        get_presentation_url(): string;
        /**
         * Get the #GUPnPResourceFactory used by the `device_info`.
         * @returns A #GUPnPResourceFactory.
         */
        get_resource_factory(): ResourceFactory;
        /**
         * Get the serial number of the device.
         * @returns A string, or %NULL. g_free() after use.
         */
        get_serial_number(): string;
        /**
         * Get the service with type `type` directly contained in `info` as a new object
         * implementing #GUPnPServiceInfo, or %NULL if no such device was found. The
         * returned object should be unreffed when done.
         *
         * Note that services are not cached internally, so that every time you call
         * this function a new object is created. The application must cache any used
         * services if it wishes to keep them around and re-use them.
         * @param type The type of the service to be retrieved.
         * @returns A #GUPnPServiceInfo.
         */
        get_service(type: string): ServiceInfo;
        /**
         * Get the Unique Device Name of the device.
         * @returns A constant string.
         */
        get_udn(): string;
        /**
         * Get the Universal Product Code of the device.
         * @returns A string, or %NULL. g_free() after use.
         */
        get_upc(): string;
        /**
         * Get the URL base of this device.
         * @returns A #SoupURI.
         */
        get_url_base(): Soup.URI;
        /**
         * Get a #GList of strings representing the types of the devices
         * directly contained in `info`.
         * @returns A #GList of strings. The elements should be g_free()'d and the list should be g_list_free()'d.
         */
        list_device_types(): string[];
        /**
         * Get a #GList of new objects implementing #GUPnPDeviceInfo
         * representing the devices directly contained in `info`. The returned list
         * should be g_list_free()'d and the elements should be g_object_unref()'d.
         *
         * Note that devices are not cached internally, so that every time you
         * call this function new objects are created. The application
         * must cache any used devices if it wishes to keep them around and re-use
         * them.
         * @returns a #GList of new #GUPnPDeviceInfo objects.
         */
        list_devices(): DeviceInfo[];
        /**
         * Get a #GList of strings that represent the device capabilities as announced
         * in the device description file using the &lt;dlna:X_DLNACAP&gt; element.
         * @returns a #GList of newly allocated strings or %NULL if the device description doesn't contain the &lt;dlna:X_DLNACAP&gt; element.
         */
        list_dlna_capabilities(): string[];
        /**
         * Get a #GList of strings that represent the device class and version as
         * announced in the device description file using the &lt;dlna:X_DLNADOC&gt;
         * element.
         * @returns a #GList of newly allocated strings or %NULL if the device description doesn't contain the &lt;dlna:X_DLNADOC&gt; element.
         */
        list_dlna_device_class_identifier(): string[];
        /**
         * Get a #GList of strings representing the types of the services
         * directly contained in `info`.
         * @returns A #GList of strings. The elements should be g_free()'d and the list should be g_list_free()'d.
         */
        list_service_types(): string[];
        /**
         * Get a #GList of new objects implementing #GUPnPServiceInfo representing the
         * services directly contained in `info`. The returned list should be
         * g_list_free()'d and the elements should be g_object_unref()'d.
         *
         * Note that services are not cached internally, so that every time you call
         * function new objects are created. The application must cache any used
         * services if it wishes to keep them around and re-use them.
         * @returns A #GList of new #GUPnPServiceInfo objects.
         */
        list_services(): ServiceInfo[];
    }

    namespace DeviceProxy {
        // Signal signatures
        interface SignalSignatures extends DeviceInfo.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends DeviceInfo.ConstructorProps {}
    }

    /**
     * This struct contains private data only, and should be accessed using the
     * functions below.
     */
    class DeviceProxy extends DeviceInfo {
        static $gtype: GObject.GType<DeviceProxy>;

        // Constructors

        constructor(properties?: Partial<DeviceProxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof DeviceProxy.SignalSignatures>(
            signal: K,
            callback: DeviceProxy.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof DeviceProxy.SignalSignatures>(
            signal: K,
            callback: DeviceProxy.SignalSignatures[K],
        ): number;
        emit<K extends keyof DeviceProxy.SignalSignatures>(
            signal: K,
            ...args: DeviceProxy.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
    }

    namespace ResourceFactory {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * This struct contains private data only, and should be accessed using the
     * functions below.
     */
    class ResourceFactory extends GObject.Object {
        static $gtype: GObject.GType<ResourceFactory>;

        // Constructors

        constructor(properties?: Partial<ResourceFactory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ResourceFactory;

        // Signals

        connect<K extends keyof ResourceFactory.SignalSignatures>(
            signal: K,
            callback: ResourceFactory.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ResourceFactory.SignalSignatures>(
            signal: K,
            callback: ResourceFactory.SignalSignatures[K],
        ): number;
        emit<K extends keyof ResourceFactory.SignalSignatures>(
            signal: K,
            ...args: ResourceFactory.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Static methods

        /**
         * Get the default singleton #GUPnPResourceFactory object.
         */
        static get_default(): ResourceFactory;

        // Methods

        /**
         * Registers the GType `type` for the proxy of resource of UPnP type `upnp_type`.
         * After this call, the factory `factory` will create object of GType `type` each
         * time it is asked to create a resource proxy object for UPnP type `upnp_type`.
         *
         * Note: GType `type` must be a derived type of #GUPNP_TYPE_DEVICE_PROXY if
         * resource is a device or #GUPNP_TYPE_SERVICE_PROXY if its a service.
         * @param upnp_type The UPnP type name of the resource.
         * @param type The requested GType assignment for the resource proxy.
         */
        register_resource_proxy_type(upnp_type: string, type: GObject.GType): void;
        /**
         * Registers the GType `type` for the resource of UPnP type `upnp_type`. After
         * this call, the factory `factory` will create object of GType `type` each time
         * it is asked to create a resource object for UPnP type `upnp_type`.
         *
         * Note: GType `type` must be a derived type of #GUPNP_TYPE_DEVICE if resource is
         * a device or #GUPNP_TYPE_SERVICE if its a service.
         * @param upnp_type The UPnP type name of the resource.
         * @param type The requested GType assignment for the resource.
         */
        register_resource_type(upnp_type: string, type: GObject.GType): void;
        /**
         * Unregisters the GType assignment for the proxy of resource of UPnP type
         * `upnp_type`.
         * @param upnp_type The UPnP type name of the resource.
         * @returns %TRUE if GType assignment was removed successfully, %FALSE otherwise.
         */
        unregister_resource_proxy_type(upnp_type: string): boolean;
        /**
         * Unregisters the GType assignment for the resource of UPnP type `upnp_type`.
         * @param upnp_type The UPnP type name of the resource.
         * @returns %TRUE if GType assignment was removed successfully, %FALSE otherwise.
         */
        unregister_resource_type(upnp_type: string): boolean;
    }

    namespace RootDevice {
        // Signal signatures
        interface SignalSignatures extends Device.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Device.ConstructorProps {
            available: boolean;
            description_dir: string;
            descriptionDir: string;
            description_doc: XMLDoc;
            descriptionDoc: XMLDoc;
            description_path: string;
            descriptionPath: string;
        }
    }

    /**
     * This struct contains private data only, and should be accessed using the
     * functions below.
     */
    class RootDevice extends Device {
        static $gtype: GObject.GType<RootDevice>;

        // Properties

        /**
         * TRUE if this device is available.
         */
        get available(): boolean;
        set available(val: boolean);
        /**
         * The path to directory where description documents are provided.
         */
        get description_dir(): string;
        /**
         * The path to directory where description documents are provided.
         */
        get descriptionDir(): string;
        /**
         * Device description document. Constructor property.
         */
        set description_doc(val: XMLDoc);
        /**
         * Device description document. Constructor property.
         */
        set descriptionDoc(val: XMLDoc);
        /**
         * The path to device description document. This could either be an
         * absolute path or path relative to GUPnPRootDevice:description-dir.
         */
        get description_path(): string;
        /**
         * The path to device description document. This could either be an
         * absolute path or path relative to GUPnPRootDevice:description-dir.
         */
        get descriptionPath(): string;

        // Constructors

        constructor(properties?: Partial<RootDevice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](context: Context, description_path: string, description_dir: string): RootDevice;

        static new_full(
            context: Context,
            factory: ResourceFactory,
            description_doc: XMLDoc,
            description_path: string,
            description_dir: string,
        ): RootDevice;

        // Signals

        connect<K extends keyof RootDevice.SignalSignatures>(
            signal: K,
            callback: RootDevice.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof RootDevice.SignalSignatures>(
            signal: K,
            callback: RootDevice.SignalSignatures[K],
        ): number;
        emit<K extends keyof RootDevice.SignalSignatures>(
            signal: K,
            ...args: RootDevice.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Methods

        /**
         * Get whether or not `root_device` is available (announcing its presence).
         * @returns %TRUE if @root_device is available, %FALSE otherwise.
         */
        get_available(): boolean;
        /**
         * Get the path to the directory containing description documents related to
         * `root_device`.
         * @returns The path to description document directory of @root_device.
         */
        get_description_dir(): string;
        /**
         * Get the path to the device description document of `root_device`.
         * @returns The path to device description document of @root_device.
         */
        get_description_path(): string;
        /**
         * Get the relative location of `root_device`.
         * @returns The relative location of @root_device.
         */
        get_relative_location(): string;
        /**
         * Get the #GSSDPResourceGroup used by `root_device`.
         * @returns The #GSSDPResourceGroup of @root_device.
         */
        get_ssdp_resource_group(): GSSDP.ResourceGroup;
        /**
         * Controls whether or not `root_device` is available (announcing
         * its presence).
         * @param available %TRUE if @root_device should be available
         */
        set_available(available: boolean): void;
    }

    namespace Service {
        // Signal callback interfaces

        interface ActionInvoked {
            (_source: Service, action: ServiceAction): void;
        }

        interface NotifyFailed {
            (_source: Service, callback_url: Soup.URI[], reason: GLib.Error): void;
        }

        interface QueryVariable {
            (_source: Service, variable: string, value: GObject.Value | any): void;
        }

        // Signal signatures
        interface SignalSignatures extends ServiceInfo.SignalSignatures {
            'action-invoked': ActionInvoked;
            'notify-failed': NotifyFailed;
            'query-variable': QueryVariable;
        }

        // Constructor properties interface

        interface ConstructorProps extends ServiceInfo.ConstructorProps {
            root_device: RootDevice;
            rootDevice: RootDevice;
        }
    }

    /**
     * This struct contains private data only, and should be accessed using the
     * functions below.
     */
    class Service extends ServiceInfo {
        static $gtype: GObject.GType<Service>;

        // Properties

        /**
         * The containing #GUPnPRootDevice.
         */
        get root_device(): RootDevice;
        /**
         * The containing #GUPnPRootDevice.
         */
        get rootDevice(): RootDevice;

        // Constructors

        constructor(properties?: Partial<Service.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Service.SignalSignatures>(signal: K, callback: Service.SignalSignatures[K]): number;
        connect_after<K extends keyof Service.SignalSignatures>(
            signal: K,
            callback: Service.SignalSignatures[K],
        ): number;
        emit<K extends keyof Service.SignalSignatures>(
            signal: K,
            ...args: Service.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Virtual methods

        vfunc_action_invoked(action: ServiceAction): void;
        vfunc_query_variable(variable: string, value: GObject.Value | any): void;

        // Methods

        /**
         * Causes new notifications to be queued up until gupnp_service_thaw_notify()
         * is called.
         */
        freeze_notify(): void;
        /**
         * Notifies listening clients that `variable` has changed to `value`.
         * @param variable The name of the variable to notify
         * @param value The value of the variable
         */
        notify_value(variable: string, value: GObject.Value | any): void;
        /**
         * A convenience function that attempts to connect all possible
         * #GUPnPService::action-invoked and #GUPnPService::query-variable signals to
         * appropriate callbacks for the service `service`. It uses service introspection
         * and #GModule<!-- -->'s introspective features. It is very simillar to
         * gtk_builder_connect_signals() except that it attempts to guess the names of
         * the signal handlers on its own.
         *
         * For this function to do its magic, the application must name the callback
         * functions for #GUPnPService::action-invoked signals by striping the CamelCase
         * off the action names and either prepend "on_" or append "_cb" to them. Same
         * goes for #GUPnPService::query-variable signals, except that "query_" should
         * be prepended to the variable name. For example, callback function for
         * <varname>GetSystemUpdateID</varname> action should be either named as
         * "get_system_update_id_cb" or "on_get_system_update_id" and callback function
         * for the query of "SystemUpdateID" state variable should be named
         * <function>query_system_update_id_cb</function> or
         * <function>on_query_system_update_id</function>.
         *
         * <note>This function will not work correctly if #GModule is not supported
         * on the platform or introspection is not available for `service`.</note>
         *
         * <warning>This function can not and therefore does not guarantee that the
         * resulting signal connections will be correct as it depends heavily on a
         * particular naming schemes described above.</warning>
         * @param user_data the data to pass to each of the callbacks
         */
        signals_autoconnect(user_data?: any | null): void;
        /**
         * Sends out any pending notifications, and stops queuing of new ones.
         */
        thaw_notify(): void;
    }

    namespace ServiceInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            context: Context;
            document: XMLDoc;
            element: any;
            location: string;
            service_type: string;
            serviceType: string;
            udn: string;
            url_base: Soup.URI;
            urlBase: Soup.URI;
        }
    }

    /**
     * This struct contains private data only, and should be accessed using the
     * functions below.
     */
    abstract class ServiceInfo extends GObject.Object {
        static $gtype: GObject.GType<ServiceInfo>;

        // Properties

        /**
         * The #GUPnPContext to use.
         */
        get context(): Context;
        /**
         * Private property.
         */
        set document(val: XMLDoc);
        /**
         * Private property.
         */
        set element(val: any);
        /**
         * The location of the device description file.
         */
        get location(): string;
        /**
         * The service type.
         */
        get service_type(): string;
        /**
         * The service type.
         */
        get serviceType(): string;
        /**
         * The UDN of the containing device.
         */
        get udn(): string;
        /**
         * The URL base (#SoupURI).
         */
        get url_base(): Soup.URI;
        /**
         * The URL base (#SoupURI).
         */
        get urlBase(): Soup.URI;

        // Constructors

        constructor(properties?: Partial<ServiceInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof ServiceInfo.SignalSignatures>(
            signal: K,
            callback: ServiceInfo.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ServiceInfo.SignalSignatures>(
            signal: K,
            callback: ServiceInfo.SignalSignatures[K],
        ): number;
        emit<K extends keyof ServiceInfo.SignalSignatures>(
            signal: K,
            ...args: ServiceInfo.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Methods

        /**
         * Get the #GUPnPContext associated with `info`.
         * @returns A #GUPnPContext.
         */
        get_context(): Context;
        /**
         * Get the control URL for this service, or %NULL..
         * @returns A string. This string should be freed with g_free() after use.
         */
        get_control_url(): string;
        /**
         * Get the event subscription URL for this service, or %NULL.
         * @returns A string. This string should be freed with g_free() after use.
         */
        get_event_subscription_url(): string;
        /**
         * Get the ID of this service, or %NULL if there is no ID.
         * @returns A string. This string should be freed with g_free() after use.
         */
        get_id(): string;
        /**
         * Note that introspection object is created from the information in service
         * description document (SCPD) provided by the service so it can not be created
         * if the service does not provide an SCPD.
         *
         * Warning: You  should use gupnp_service_info_get_introspection_async()
         * instead, this function re-enter the GMainloop before returning or might
         * even block.
         * @returns A new #GUPnPServiceIntrospection for this service or %NULL. Unref after use.
         */
        get_introspection(): ServiceIntrospection;
        /**
         * Note that introspection object is created from the information in service
         * description document (SCPD) provided by the service so it can not be created
         * if the service does not provide an SCPD.
         * @param callback callback to be called when introspection object is ready.
         */
        get_introspection_async(callback: ServiceIntrospectionCallback): void;
        /**
         * Note that introspection object is created from the information in service
         * description document (SCPD) provided by the service so it can not be created
         * if the service does not provide an SCPD.
         *
         * If `cancellable` is used to cancel the call, `callback` will be called with
         * error code %G_IO_ERROR_CANCELLED.
         * @param callback callback to be called when introspection object is ready.
         * @param cancellable GCancellable that can be used to cancel the call, or %NULL.
         */
        get_introspection_async_full(
            callback: ServiceIntrospectionCallback,
            cancellable?: Gio.Cancellable | null,
        ): void;
        /**
         * Get the location of the device description file.
         * @returns A constant string.
         */
        get_location(): string;
        /**
         * Get the SCPD URL for this service, or %NULL if there is no SCPD.
         * @returns A string. This string should be freed with g_free() after use.
         */
        get_scpd_url(): string;
        /**
         * Get the UPnP service type, or %NULL.
         * @returns A constant string.
         */
        get_service_type(): string;
        /**
         * Get the Unique Device Name of the containing device.
         * @returns A constant string.
         */
        get_udn(): string;
        /**
         * Get the URL base of this service.
         * @returns A constant #SoupURI.
         */
        get_url_base(): Soup.URI;
    }

    namespace ServiceIntrospection {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            scpd: any;
        }
    }

    /**
     * This struct contains private data only, and should be accessed using the
     * functions below.
     */
    class ServiceIntrospection extends GObject.Object {
        static $gtype: GObject.GType<ServiceIntrospection>;

        // Properties

        /**
         * The scpd of the device description file.
         */
        set scpd(val: any);

        // Constructors

        constructor(properties?: Partial<ServiceIntrospection.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof ServiceIntrospection.SignalSignatures>(
            signal: K,
            callback: ServiceIntrospection.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ServiceIntrospection.SignalSignatures>(
            signal: K,
            callback: ServiceIntrospection.SignalSignatures[K],
        ): number;
        emit<K extends keyof ServiceIntrospection.SignalSignatures>(
            signal: K,
            ...args: ServiceIntrospection.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Methods

        /**
         * Returns the action by the name `action_name` in this service.
         * @param action_name The name of the action to retrieve
         * @returns the action or %NULL. Do not modify or free it.
         */
        get_action(action_name: string): ServiceActionInfo;
        /**
         * Returns the state variable by the name `variable_name` in this service.
         * @param variable_name The name of the variable to retrieve
         * @returns the state variable or %NULL. Do not modify or free it.
         */
        get_state_variable(variable_name: string): ServiceStateVariableInfo;
        /**
         * Returns a GList of names of all the actions in this service.
         * @returns A GList of names of all the actions or %NULL. Do not modify or free it or its contents.
         */
        list_action_names(): string[];
        /**
         * Returns a #GList of all the actions (of type #GUPnPServiceActionInfo) in
         * this service.
         * @returns A #GList of all the actions or %NULL. Do not modify or free it or its contents.
         */
        list_actions(): ServiceActionInfo[];
        /**
         * Returns a #GList of names of all the state variables in this service.
         * @returns A #GList of names of all the state variables or %NULL. Do not modify or free it or its contents.
         */
        list_state_variable_names(): string[];
        /**
         * Returns a GList of all the state variables (of type
         * #GUPnPServiceStateVariableInfo) in this service.
         * @returns A #GList of all the state variables or %NULL. Do not modify or free it or its contents.
         */
        list_state_variables(): ServiceStateVariableInfo[];
    }

    namespace ServiceProxy {
        // Signal callback interfaces

        interface SubscriptionLost {
            (_source: ServiceProxy, error: GLib.Error): void;
        }

        // Signal signatures
        interface SignalSignatures extends ServiceInfo.SignalSignatures {
            'subscription-lost': SubscriptionLost;
        }

        // Constructor properties interface

        interface ConstructorProps extends ServiceInfo.ConstructorProps {
            subscribed: boolean;
        }
    }

    /**
     * This struct contains private data only, and should be accessed using the
     * functions below.
     */
    class ServiceProxy extends ServiceInfo {
        static $gtype: GObject.GType<ServiceProxy>;

        // Properties

        /**
         * Whether we are subscribed to this service.
         */
        get subscribed(): boolean;
        set subscribed(val: boolean);

        // Constructors

        constructor(properties?: Partial<ServiceProxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof ServiceProxy.SignalSignatures>(
            signal: K,
            callback: ServiceProxy.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ServiceProxy.SignalSignatures>(
            signal: K,
            callback: ServiceProxy.SignalSignatures[K],
        ): number;
        emit<K extends keyof ServiceProxy.SignalSignatures>(
            signal: K,
            ...args: ServiceProxy.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Virtual methods

        vfunc_subscription_lost(reason: GLib.Error): void;

        // Methods

        /**
         * Sets up `callback` to be called whenever a change notification for
         * `variable` is recieved.
         * @param variable The variable to add notification for
         * @param type The type of the variable
         * @param callback The callback to call when @variable changes
         * @param notify Function to call when the notification is removed, or %NULL
         * @returns %TRUE on success.
         */
        add_notify(
            variable: string,
            type: GObject.GType,
            callback: ServiceProxyNotifyCallback,
            notify?: GLib.DestroyNotify | null,
        ): boolean;
        /**
         * Get a notification for anything that happens on the peer. `value` in
         * `callback` will be of type #G_TYPE_POINTER and contain the pre-parsed
         * #xmlDoc. Do NOT free or modify this document.
         * @param callback The callback to call when the peer issues any variable notification.
         * @param notify A #GDestroyNotify for @user_data
         * @returns %TRUE on success.
         */
        add_raw_notify(callback: ServiceProxyNotifyCallback, notify?: GLib.DestroyNotify | null): boolean;
        /**
         * A variant of #gupnp_service_proxy_begin_action that takes lists of
         * in-parameter names, types and values.
         * @param action An action
         * @param in_names #GList of 'in' parameter names (as strings)
         * @param in_values #GList of values (as #GValue) that line up with @in_names
         * @param callback The callback to call when sending the action has succeeded or failed
         * @returns A #GUPnPServiceProxyAction handle. This will be freed when calling gupnp_service_proxy_cancel_action() or gupnp_service_proxy_end_action_list().
         */
        begin_action_list(
            action: string,
            in_names: string[],
            in_values: (GObject.Value | any)[],
            callback: ServiceProxyActionCallback,
        ): ServiceProxyAction;
        /**
         * Cancels `action,` freeing the `action` handle.
         * @param action A #GUPnPServiceProxyAction handle
         */
        cancel_action(action: ServiceProxyAction): void;
        /**
         * See gupnp_service_proxy_end_action(); this version takes a #GHashTable for
         * runtime generated parameter lists.
         * @param action A #GUPnPServiceProxyAction handle
         * @param error The location where to store any error, or %NULL
         * @returns %TRUE on success.
         */
        end_action_hash(
            action: ServiceProxyAction,
            error: GLib.Error,
        ): [boolean, GLib.HashTable<string, GObject.Value>];
        /**
         * See gupnp_service_proxy_end_action(); this version takes a #GHashTable for
         * runtime generated parameter lists.
         * @param action A #GUPnPServiceProxyAction handle
         * @param hash A #GHashTable of out parameter name and initialised #GValue pairs
         * @returns %TRUE on success.
         */
        end_action_hash(
            action: ServiceProxyAction,
            hash: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
        ): [boolean, GLib.HashTable<string, GObject.Value>];
        /**
         * A variant of #gupnp_service_proxy_end_action that takes lists of
         * out-parameter names, types and place-holders for values. The returned list
         * in `out_values` must be freed using #g_list_free and each element in it using
         * #g_value_unset and #g_slice_free.
         * @param action A #GUPnPServiceProxyAction handle
         * @param out_names #GList of 'out' parameter names (as strings)
         * @param out_types #GList of types (as #GType) that line up with @out_names
         * @returns %TRUE on success.
         */
        end_action_list(
            action: ServiceProxyAction,
            out_names: string[],
            out_types: GObject.GType[],
        ): [boolean, unknown[]];
        /**
         * Returns if we are subscribed to this service.
         * @returns %TRUE if we are subscribed to this service, otherwise %FALSE.
         */
        get_subscribed(): boolean;
        /**
         * Cancels the variable change notification for `callback` and `user_data`.
         *
         * Up to version 0.20.9 this function must not be called directlya or
         * indirectly from a #GUPnPServiceProxyNotifyCallback associated with this
         * service proxy, even if it is for another variable. In later versions such
         * calls are allowed.
         * @param variable The variable to add notification for
         * @param callback The callback to call when @variable changes
         * @returns %TRUE on success.
         */
        remove_notify(variable: string, callback: ServiceProxyNotifyCallback): boolean;
        /**
         * Cancels the variable change notification for `callback` and `user_data`.
         *
         * This function must not be called directly or indirectly from a
         * #GUPnPServiceProxyNotifyCallback associated with this service proxy, even
         * if it is for another variable.
         * @param callback The callback to call when @variable changes
         * @returns %TRUE on success.
         */
        remove_raw_notify(callback: ServiceProxyNotifyCallback): boolean;
        /**
         * The synchronous variant of #gupnp_service_proxy_begin_action_list and
         * #gupnp_service_proxy_end_action_list.
         * @param action An action
         * @param in_names #GList of 'in' parameter names (as strings)
         * @param in_values #GList of values (as #GValue) that line up with @in_names
         * @param out_names #GList of 'out' parameter names (as strings)
         * @param out_types #GList of types (as #GType) that line up with @out_names
         * @returns %TRUE if sending the action was succesful.
         */
        send_action_list(
            action: string,
            in_names: string[],
            in_values: (GObject.Value | any)[],
            out_names: string[],
            out_types: GObject.GType[],
        ): [boolean, unknown[]];
        /**
         * (Un)subscribes to this service.
         *
         * Note that the relevant messages are not immediately sent but queued.
         * If you want to unsubcribe from this service because the application
         * is quitting, rely on automatic synchronised unsubscription on object
         * destruction instead.
         * @param subscribed %TRUE to subscribe to this service
         */
        set_subscribed(subscribed: boolean): void;
    }

    namespace WhiteList {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            enabled: boolean;
            entries: string[];
        }
    }

    /**
     * This struct contains private data only, and should be accessed using the
     * functions below.
     */
    class WhiteList extends GObject.Object {
        static $gtype: GObject.GType<WhiteList>;

        // Properties

        /**
         * Whether this white list is active or not.
         */
        get enabled(): boolean;
        set enabled(val: boolean);
        /**
         * Whether this white list is active or not.
         */
        get entries(): string[];

        // Constructors

        constructor(properties?: Partial<WhiteList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): WhiteList;

        // Signals

        connect<K extends keyof WhiteList.SignalSignatures>(signal: K, callback: WhiteList.SignalSignatures[K]): number;
        connect_after<K extends keyof WhiteList.SignalSignatures>(
            signal: K,
            callback: WhiteList.SignalSignatures[K],
        ): number;
        emit<K extends keyof WhiteList.SignalSignatures>(
            signal: K,
            ...args: WhiteList.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Methods

        /**
         * Add `entry` in the list of valid criteria used by `white_list` to
         * filter networks.
         * if `entry` already exists, it won't be added a second time.
         * @param entry A value used to filter network
         * @returns %TRUE if @entry is added, %FALSE otherwise.
         */
        add_entry(entry: string): boolean;
        /**
         * Add a list of entries to a #GUPnPWhiteList. This is a helper function to
         * directly add a %NULL-terminated array of string usually aquired from
         * commandline args.
         * @param entries A %NULL-terminated list of strings
         */
        add_entryv(entries: string[]): void;
        /**
         * It will check if the `context` is allowed or not. The `white_list` will check
         * all its entries againt #GUPnPContext interface, host ip and network fields
         * information. This function doesn't take into account the `white_list` status
         * (enabled or not).
         * @param context A #GUPnPContext to test.
         * @returns %TRUE if @context is matching the @white_list criterias, %FALSE otherwise.
         */
        check_context(context: Context): boolean;
        /**
         * Remove all entries from #GList that compose the white list.
         * The list is now empty. Even if #GUPnPWhiteList is enabled, it will have the
         * same behavior as if it was disabled.
         */
        clear(): void;
        /**
         * Return the status of the #GUPnPWhiteList
         * @returns %TRUE if @white_list is enabled, %FALSE otherwise.
         */
        get_enabled(): boolean;
        /**
         * Get the #GList of entries that compose the white list. Do not free
         * @returns a #GList of entries used to filter networks, interfaces,... or %NULL. Do not modify or free the list nor its elements.
         */
        get_entries(): string[];
        /**
         * Return the state of the entries list of #GUPnPWhiteList
         * @returns %TRUE if @white_list is empty, %FALSE otherwise.
         */
        is_empty(): boolean;
        /**
         * Remove `entry` in the list of valid criteria used by `white_list` to
         * filter networks.
         * @param entry A value to remove from the filter list.
         * @returns %TRUE if @entry is removed, %FALSE otherwise.
         */
        remove_entry(entry: string): boolean;
        /**
         * Enable or disable the #GUPnPWhiteList to perform the network filtering.
         * @param enable %TRUE to enable @white_list, %FALSE otherwise
         */
        set_enabled(enable: boolean): void;
    }

    namespace XMLDoc {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Reference-counting wrapper for libxml's #xmlDoc
     */
    class XMLDoc extends GObject.Object {
        static $gtype: GObject.GType<XMLDoc>;

        // Constructors

        constructor(properties?: Partial<XMLDoc.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](xml_doc: libxml2.Doc): XMLDoc;

        static new_from_path(path: string): XMLDoc;

        // Signals

        connect<K extends keyof XMLDoc.SignalSignatures>(signal: K, callback: XMLDoc.SignalSignatures[K]): number;
        connect_after<K extends keyof XMLDoc.SignalSignatures>(signal: K, callback: XMLDoc.SignalSignatures[K]): number;
        emit<K extends keyof XMLDoc.SignalSignatures>(
            signal: K,
            ...args: XMLDoc.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
    }

    type AclInterface = typeof Acl;
    type ContextClass = typeof Context;
    type ContextManagerClass = typeof ContextManager;
    abstract class ContextManagerPrivate {
        static $gtype: GObject.GType<ContextManagerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class ContextPrivate {
        static $gtype: GObject.GType<ContextPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ControlPointClass = typeof ControlPoint;
    abstract class ControlPointPrivate {
        static $gtype: GObject.GType<ControlPointPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DeviceClass = typeof Device;
    type DeviceInfoClass = typeof DeviceInfo;
    abstract class DeviceInfoPrivate {
        static $gtype: GObject.GType<DeviceInfoPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class DevicePrivate {
        static $gtype: GObject.GType<DevicePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DeviceProxyClass = typeof DeviceProxy;
    abstract class DeviceProxyPrivate {
        static $gtype: GObject.GType<DeviceProxyPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ResourceFactoryClass = typeof ResourceFactory;
    abstract class ResourceFactoryPrivate {
        static $gtype: GObject.GType<ResourceFactoryPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type RootDeviceClass = typeof RootDevice;
    abstract class RootDevicePrivate {
        static $gtype: GObject.GType<RootDevicePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * Opaque structure for holding in-progress action data.
     */
    class ServiceAction {
        static $gtype: GObject.GType<ServiceAction>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * Get the number of IN arguments from the `action` and return it.
         * @returns The number of IN arguments from the @action.
         */
        get_argument_count(): number;
        /**
         * Retrieves the value of `argument` into a GValue of type `type` and returns it.
         * The method exists only and only to satify PyGI, please use
         * gupnp_service_action_get_value() and ignore this if possible.
         * @param argument The name of the argument to retrieve
         * @param type The type of argument to retrieve
         * @returns Value as #GValue associated with @action. g_value_unset() and g_slice_free() it after usage.
         */
        get_value(argument: string, type: GObject.GType): unknown;
        /**
         * Get an ordered (preferred first) #GList of locales preferred by
         * the client. Free list and elements after use.
         * @returns A #GList of #char* locale names.
         */
        get_locales(): string[];
        /**
         * Get the #SoupMessage associated with `action`. Mainly intended for
         * applications to be able to read HTTP headers received from clients.
         * @returns #SoupMessage associated with @action. Unref after using it.
         */
        get_message(): Soup.Message;
        /**
         * Get the name of `action`.
         * @returns The name of @action
         */
        get_name(): string;
        /**
         * A variant of #gupnp_service_action_get that uses #GList instead of varargs.
         * @param arg_names A #GList of argument names as string
         * @param arg_types A #GList of argument types as #GType
         * @returns The values as #GList of #GValue. g_list_free() the returned list and g_value_unset() and g_slice_free() each element.
         */
        get_values(arg_names: string[], arg_types: GObject.GType[]): unknown[];
        /**
         * Return succesfully.
         */
        ['return'](): void;
        /**
         * Return `error_code`.
         * @param error_code The error code
         * @param error_description The error description, or %NULL if @error_code is one of #GUPNP_CONTROL_ERROR_INVALID_ACTION, #GUPNP_CONTROL_ERROR_INVALID_ARGS, #GUPNP_CONTROL_ERROR_OUT_OF_SYNC or #GUPNP_CONTROL_ERROR_ACTION_FAILED, in which case a description is provided automatically.
         */
        return_error(error_code: number, error_description: string): void;
        /**
         * Sets the value of `argument` to `value`.
         * @param argument The name of the return value to retrieve
         * @param value The #GValue to store the return value
         */
        set_value(argument: string, value: GObject.Value | any): void;
        /**
         * Sets the specified action return values.
         * @param arg_names A #GList of argument names
         * @param arg_values The #GList of values (as #GValues) that line up with @arg_names.
         */
        set_values(arg_names: string[], arg_values: (GObject.Value | any)[]): void;
    }

    /**
     * This structure contains information about the argument of service action.
     */
    class ServiceActionArgInfo {
        static $gtype: GObject.GType<ServiceActionArgInfo>;

        // Fields

        name: string;
        direction: ServiceActionArgDirection;
        related_state_variable: string;
        retval: boolean;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * This structure contains information about a service action.
     */
    class ServiceActionInfo {
        static $gtype: GObject.GType<ServiceActionInfo>;

        // Fields

        name: string;

        // Constructors

        _init(...args: any[]): void;
    }

    type ServiceClass = typeof Service;
    type ServiceInfoClass = typeof ServiceInfo;
    abstract class ServiceInfoPrivate {
        static $gtype: GObject.GType<ServiceInfoPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ServiceIntrospectionClass = typeof ServiceIntrospection;
    abstract class ServiceIntrospectionPrivate {
        static $gtype: GObject.GType<ServiceIntrospectionPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class ServicePrivate {
        static $gtype: GObject.GType<ServicePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * Opaque structure for holding in-progress action data.
     */
    class ServiceProxyAction {
        static $gtype: GObject.GType<ServiceProxyAction>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ServiceProxyClass = typeof ServiceProxy;
    abstract class ServiceProxyPrivate {
        static $gtype: GObject.GType<ServiceProxyPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * This structure contains information about service state variable.
     */
    class ServiceStateVariableInfo {
        static $gtype: GObject.GType<ServiceStateVariableInfo>;

        // Fields

        name: string;
        send_events: boolean;
        is_numeric: boolean;
        type: GObject.GType;
        allowed_values: string[];

        // Constructors

        _init(...args: any[]): void;
    }

    type WhiteListClass = typeof WhiteList;
    abstract class WhiteListPrivate {
        static $gtype: GObject.GType<WhiteListPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type XMLDocClass = typeof XMLDoc;
    namespace Acl {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface AclNamespace {
        $gtype: GObject.GType<Acl>;
        prototype: Acl;
    }
    interface Acl extends GObject.Object {
        // Methods

        /**
         * Check whether gupnp_acl_is_allowed_async() is supported.
         */
        can_sync(): boolean;
        /**
         * Check whether an IP address is allowed to access this resource.
         * @param device The #GUPnPDevice associated with @path or %NULL if unknown.
         * @param service The #GUPnPService associated with @path or %NULL if unknown.
         * @param path The path being served.
         * @param address IP address of the peer.
         * @param agent The User-Agent header of the peer or %NULL if not unknown. @returns %TRUE if the peer is allowed, %FALSE otherwise
         */
        is_allowed(
            device: any | null,
            service: any | null,
            path: string,
            address: string,
            agent?: string | null,
        ): boolean;
        /**
         * Optional. Check asynchronously whether an IP address is allowed to access
         * this resource. Use this function if the process of verifying the access right
         * is expected to take some time, for example when using D-Bus etc.
         *
         * If this function is supported, gupnp_acl_can_sync() should return %TRUE.
         *
         * Use gupnp_acl_is_allowed_finish() to retrieve the result.
         * @param device The #GUPnPDevice associated with @path or %NULL if unknown.
         * @param service The #GUPnPService associated with @path or %NULL if unknown.
         * @param path The path being served.
         * @param address IP address of the peer
         * @param agent The User-Agent header of the peer or %NULL if not unknown.
         * @param cancellable A #GCancellable which can be used to cancel the operation.
         */
        is_allowed_async(
            device: any | null,
            service: any | null,
            path: string,
            address: string,
            agent?: string | null,
            cancellable?: Gio.Cancellable | null,
        ): Promise<boolean>;
        /**
         * Optional. Check asynchronously whether an IP address is allowed to access
         * this resource. Use this function if the process of verifying the access right
         * is expected to take some time, for example when using D-Bus etc.
         *
         * If this function is supported, gupnp_acl_can_sync() should return %TRUE.
         *
         * Use gupnp_acl_is_allowed_finish() to retrieve the result.
         * @param device The #GUPnPDevice associated with @path or %NULL if unknown.
         * @param service The #GUPnPService associated with @path or %NULL if unknown.
         * @param path The path being served.
         * @param address IP address of the peer
         * @param agent The User-Agent header of the peer or %NULL if not unknown.
         * @param cancellable A #GCancellable which can be used to cancel the operation.
         * @param callback Callback to call after the function is done.
         */
        is_allowed_async(
            device: any | null,
            service: any | null,
            path: string,
            address: string,
            agent: string | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Optional. Check asynchronously whether an IP address is allowed to access
         * this resource. Use this function if the process of verifying the access right
         * is expected to take some time, for example when using D-Bus etc.
         *
         * If this function is supported, gupnp_acl_can_sync() should return %TRUE.
         *
         * Use gupnp_acl_is_allowed_finish() to retrieve the result.
         * @param device The #GUPnPDevice associated with @path or %NULL if unknown.
         * @param service The #GUPnPService associated with @path or %NULL if unknown.
         * @param path The path being served.
         * @param address IP address of the peer
         * @param agent The User-Agent header of the peer or %NULL if not unknown.
         * @param cancellable A #GCancellable which can be used to cancel the operation.
         * @param callback Callback to call after the function is done.
         */
        is_allowed_async(
            device: any | null,
            service: any | null,
            path: string,
            address: string,
            agent?: string | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<boolean> | void;
        is_allowed_finish(res: Gio.AsyncResult): boolean;

        // Virtual methods

        /**
         * Check whether gupnp_acl_is_allowed_async() is supported.
         */
        vfunc_can_sync(): boolean;
        /**
         * Check whether an IP address is allowed to access this resource.
         * @param device The #GUPnPDevice associated with @path or %NULL if unknown.
         * @param service The #GUPnPService associated with @path or %NULL if unknown.
         * @param path The path being served.
         * @param address IP address of the peer.
         * @param agent The User-Agent header of the peer or %NULL if not unknown. @returns %TRUE if the peer is allowed, %FALSE otherwise
         */
        vfunc_is_allowed(
            device: any | null,
            service: any | null,
            path: string,
            address: string,
            agent?: string | null,
        ): boolean;
        /**
         * Optional. Check asynchronously whether an IP address is allowed to access
         * this resource. Use this function if the process of verifying the access right
         * is expected to take some time, for example when using D-Bus etc.
         *
         * If this function is supported, gupnp_acl_can_sync() should return %TRUE.
         *
         * Use gupnp_acl_is_allowed_finish() to retrieve the result.
         * @param device The #GUPnPDevice associated with @path or %NULL if unknown.
         * @param service The #GUPnPService associated with @path or %NULL if unknown.
         * @param path The path being served.
         * @param address IP address of the peer
         * @param agent The User-Agent header of the peer or %NULL if not unknown.
         * @param cancellable A #GCancellable which can be used to cancel the operation.
         * @param callback Callback to call after the function is done.
         */
        vfunc_is_allowed_async(
            device: any | null,
            service: any | null,
            path: string,
            address: string,
            agent?: string | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_is_allowed_finish(res: Gio.AsyncResult): boolean;
    }

    export const Acl: AclNamespace & {
        new (): Acl; // This allows `obj instanceof Acl`
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

export default GUPnP;

// END
