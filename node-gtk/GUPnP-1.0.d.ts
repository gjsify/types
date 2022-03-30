/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GUPnP-1.0
 */

import type libxml2 from './libxml2-2.0';
import type Soup from './Soup-2.4';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GSSDP from './GSSDP-1.0';

export namespace GUPnP {

/**
 * #GError codes used for errors in the #GUPNP_CONTROL_ERROR domain, during
 * invocation of service actions.
 */
enum ControlError {
    /**
     * The action name was invalid.
     */
    INVALID_ACTION,
    /**
     * The action arguments were invalid.
     */
    INVALID_ARGS,
    /**
     * Out of sync (deprecated).
     */
    OUT_OF_SYNC,
    /**
     * The action failed.
     */
    ACTION_FAILED,
}
/**
 * #GError codes used for errors in the #GUPNP_EVENTING_ERROR domain, during
 * eventing of state variables.
 */
enum EventingError {
    /**
     * The subscription attempt failed.
     */
    SUBSCRIPTION_FAILED,
    /**
     * The subscription was lost.
     */
    SUBSCRIPTION_LOST,
    /**
     * The notification failed.
     */
    NOTIFY_FAILED,
}
/**
 * #GError codes used for errors in the #GUPNP_SERVER_ERROR domain, when there
 * is communication with another server.
 */
enum ServerError {
    /**
     * Internal server error.
     */
    INTERNAL_SERVER_ERROR,
    /**
     * The resource was not found.
     */
    NOT_FOUND,
    /**
     * This method is not implemented.
     */
    NOT_IMPLEMENTED,
    /**
     * Invalid response.
     */
    INVALID_RESPONSE,
    /**
     * Invalid URL.
     */
    INVALID_URL,
    /**
     * Unknown/unhandled error.
     */
    OTHER,
}
/**
 * Represents the direction of a service state variable.
 */
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
enum XMLError {
    /**
     * Generic XML parsing error.
     */
    PARSE,
    /**
     * A required XML node was not found.
     */
    NO_NODE,
    /**
     * An XML node is unexpectedly empty.
     */
    EMPTY_NODE,
    /**
     * An XML node has an unknown attribute.
     */
    INVALID_ATTRIBUTE,
    /**
     * Unknown/unhandled XML related errors.
     */
    OTHER,
}
function controlErrorQuark(): GLib.Quark
function eventingErrorQuark(): GLib.Quark
function getUuid(): string
function serverErrorQuark(): GLib.Quark
function xmlErrorQuark(): GLib.Quark
/**
 * Callback notifying that `introspection` for `info` has been obtained.
 */
interface ServiceIntrospectionCallback {
    (info: ServiceInfo, introspection: ServiceIntrospection, error: GLib.Error): void
}
/**
 * Callback notifying that `action` on `proxy` has returned and
 * gupnp_service_proxy_end_action() etc can be called.
 */
interface ServiceProxyActionCallback {
    (proxy: ServiceProxy, action: ServiceProxyAction): void
}
/**
 * Callback notifying that the state variable `variable` on `proxy` has changed to
 * `value`.
 */
interface ServiceProxyNotifyCallback {
    (proxy: ServiceProxy, variable: string, value: any): void
}
class Acl {
    /* Methods of GUPnP-1.0.GUPnP.Acl */
    /**
     * Check whether gupnp_acl_is_allowed_async() is supported.
     */
    canSync(): boolean
    /**
     * Check whether an IP address is allowed to access this resource.
     * @param device The #GUPnPDevice associated with `path` or %NULL if unknown.
     * @param service The #GUPnPService associated with `path` or %NULL if unknown.
     * @param path The path being served.
     * @param address IP address of the peer.
     * @param agent The User-Agent header of the peer or %NULL if not unknown. `returns` %TRUE if the peer is allowed, %FALSE otherwise
     */
    isAllowed(device: object | null, service: object | null, path: string, address: string, agent?: string | null): boolean
    /**
     * Optional. Check asynchronously whether an IP address is allowed to access
     * this resource. Use this function if the process of verifying the access right
     * is expected to take some time, for example when using D-Bus etc.
     * 
     * If this function is supported, gupnp_acl_can_sync() should return %TRUE.
     * 
     * Use gupnp_acl_is_allowed_finish() to retrieve the result.
     * @param device The #GUPnPDevice associated with `path` or %NULL if unknown.
     * @param service The #GUPnPService associated with `path` or %NULL if unknown.
     * @param path The path being served.
     * @param address IP address of the peer
     * @param agent The User-Agent header of the peer or %NULL if not unknown.
     * @param cancellable A #GCancellable which can be used to cancel the operation.
     * @param callback Callback to call after the function is done.
     */
    isAllowedAsync(device: object | null, service: object | null, path: string, address: string, agent?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    isAllowedFinish(res: Gio.AsyncResult): boolean
    static name: string
}
interface Context_ConstructProps extends GSSDP.Client_ConstructProps {
    /* Constructor properties of GUPnP-1.0.GUPnP.Context */
    /**
     * An access control list.
     */
    acl?: Acl
    /**
     * The content of the Content-Language header id the client
     * sends Accept-Language and no language-specific pages to serve
     * exist. The property defaults to 'en'.
     */
    defaultLanguage?: string
    /**
     * The port to run on. Set to 0 if you don't care what port to run on.
     */
    port?: number
    /**
     * The preferred subscription timeout: the number of seconds after
     * which subscriptions are renewed. Set to '0' if subscriptions
     * are never to time out.
     */
    subscriptionTimeout?: number
}
class Context {
    /* Properties of GUPnP-1.0.GUPnP.Context */
    /**
     * An access control list.
     */
    acl: Acl
    /**
     * The content of the Content-Language header id the client
     * sends Accept-Language and no language-specific pages to serve
     * exist. The property defaults to 'en'.
     */
    defaultLanguage: string
    /**
     * The port to run on. Set to 0 if you don't care what port to run on.
     */
    readonly port: number
    /**
     * The #SoupServer HTTP server used by GUPnP.
     */
    readonly server: Soup.Server
    /**
     * The #SoupSession object used by GUPnP.
     */
    readonly session: Soup.Session
    /**
     * The preferred subscription timeout: the number of seconds after
     * which subscriptions are renewed. Set to '0' if subscriptions
     * are never to time out.
     */
    readonly subscriptionTimeout: number
    /* Properties of GSSDP-1.0.GSSDP.Client */
    /**
     * Whether this client is active or not (passive). When active
     * (default), the client sends messages on the network, otherwise
     * not. In most cases, you don't want to touch this property.
     */
    active: boolean
    /**
     * The IP address of the assoicated network interface.
     */
    hostIp: string
    /**
     * The name of the network interface this client is associated with.
     * Set to NULL to autodetect.
     */
    readonly interface: string
    /**
     * UDP port to use for sending multicast M-SEARCH requests on the
     * network. If not set (or set to 0) a random port will be used.
     * This property can be only set during object construction.
     */
    readonly msearchPort: number
    /**
     * The network this client is currently connected to. You could set this
     * to anything you want to identify the network this client is
     * associated with. If you are using #GUPnPContextManager and associated
     * interface is a WiFi interface, this property is set to the ESSID of
     * the network. Otherwise, expect this to be the network IP address by
     * default.
     */
    network: string
    /**
     * The SSDP server's identifier.
     */
    serverId: string
    /**
     * Time-to-live value to use for all sockets created by this client.
     * If not set (or set to 0) the value recommended by UPnP will be used.
     * This property can only be set during object construction.
     */
    readonly socketTtl: number
    /* Fields of GSSDP-1.0.GSSDP.Client */
    parent: GObject.Object
    priv: GSSDP.ClientPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.0.GUPnP.Context */
    /**
     * Add a #SoupServerCallback to the #GUPnPContext<!-- -->'s #SoupServer.
     * @param useAcl %TRUE, if the path should query the GUPnPContext::acl before serving the resource, %FALSE otherwise.
     * @param path the toplevel path for the handler.
     * @param callback callback to invoke for requests under `path`
     */
    addServerHandler(useAcl: boolean, path: string, callback: Soup.ServerCallback): void
    getAcl(): Acl
    /**
     * Get the default Content-Language header for this context.
     */
    getDefaultLanguage(): string
    /**
     * Get the IP address we advertise ourselves as using.
     */
    getHostIp(): string
    /**
     * Get the port that the SOAP server is running on.
     */
    getPort(): number
    /**
     * Get the #SoupServer HTTP server that GUPnP is using.
     */
    getServer(): Soup.Server
    /**
     * Get the #SoupSession object that GUPnP is using.
     */
    getSession(): Soup.Session
    /**
     * Get the event subscription timeout (in seconds), or 0 meaning there is no
     * timeout.
     */
    getSubscriptionTimeout(): number
    /**
     * Start hosting `local_path` at `server_path`. Files with the path
     * `local_path`.LOCALE (if they exist) will be served up when LOCALE is
     * specified in the request's Accept-Language header.
     * @param localPath Path to the local file or folder to be hosted
     * @param serverPath Web server path where `local_path` should be hosted
     */
    hostPath(localPath: string, serverPath: string): void
    /**
     * Use this method to serve different local path to specific user-agent(s). The
     * path `server_path` must already be hosted by `context`.
     * @param localPath Path to the local file or folder to be hosted
     * @param serverPath Web server path already being hosted
     * @param userAgent The user-agent as a #GRegex.
     */
    hostPathForAgent(localPath: string, serverPath: string, userAgent: GLib.Regex): boolean
    /**
     * Remove a #SoupServerCallback from the #GUPnPContext<!-- -->'s #SoupServer.
     * @param path the toplevel path for the handler.
     */
    removeServerHandler(path: string): void
    setAcl(acl?: Acl | null): void
    /**
     * Set the default language for the Content-Length header to `language`.
     * 
     * If the client sends an Accept-Language header the UPnP HTTP server
     * is required to send a Content-Language header in return. If there are
     * no files hosted in languages which match the requested ones the
     * Content-Language header is set to this value. The default value is "en".
     * @param language A language tag as defined in RFC 2616 3.10
     */
    setDefaultLanguage(language: string): void
    /**
     * Sets the event subscription timeout to `timeout`. Use 0 if you don't
     * want subscriptions to time out. Note that any client side subscriptions
     * will automatically be renewed.
     * @param timeout Event subscription timeout in seconds
     */
    setSubscriptionTimeout(timeout: number): void
    /**
     * Stop hosting the file or folder at `server_path`.
     * @param serverPath Web server path where the file or folder is hosted
     */
    unhostPath(serverPath: string): void
    /* Methods of GSSDP-1.0.GSSDP.Client */
    addCacheEntry(ipAddress: string, userAgent: string): void
    /**
     * Adds a header field to the message sent by this `client`. It is intended to
     * be used by clients requiring vendor specific header fields. (If there is an
     * existing header with name name , then this creates a second one).
     * @param name Header name
     * @param value Header value
     */
    appendHeader(name: string, value: string): void
    /**
     * Removes all the headers for this `client`.
     */
    clearHeaders(): void
    getActive(): boolean
    /**
     * Get the name of the network interface associated to `client`.
     */
    getInterface(): string
    getMainContext(): GLib.MainContext
    /**
     * Get the network this client is associated with.
     */
    getNetwork(): string
    getServerId(): string
    guessUserAgent(ipAddress: string): string
    /**
     * Removes `name` from the list of headers . If there are multiple values for
     * `name,` they are all removed.
     * @param name Header name
     */
    removeHeader(name: string): void
    /**
     * Sets the network identification of `client` to `network`.
     * @param network The string identifying the network
     */
    setNetwork(network: string): void
    /**
     * Sets the server ID of `client` to `server_id`.
     * @param serverId The server ID
     */
    setServerId(serverId: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Initable */
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
     * behaviour. See the [introduction][ginitable] for more details.
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
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GSSDP-1.0.GSSDP.Client */
    /**
     * Internal signal.
     * @param fromIp The IP address of the source.
     * @param fromPort The UDP port used by the sender.
     * @param type The #_GSSDPMessageType.
     * @param headers Parsed #SoupMessageHeaders from the message.
     */
    connect(sigName: "message-received", callback: ((fromIp: string, fromPort: number, type: number, headers: Soup.MessageHeaders) => void)): number
    on(sigName: "message-received", callback: (fromIp: string, fromPort: number, type: number, headers: Soup.MessageHeaders) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "message-received", callback: (fromIp: string, fromPort: number, type: number, headers: Soup.MessageHeaders) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "message-received", callback: (fromIp: string, fromPort: number, type: number, headers: Soup.MessageHeaders) => void): NodeJS.EventEmitter
    emit(sigName: "message-received", fromIp: string, fromPort: number, type: number, headers: Soup.MessageHeaders): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::acl", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::acl", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::acl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::acl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::acl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-language", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-language", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::port", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::server", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::server", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::session", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subscription-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subscription-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subscription-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subscription-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subscription-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::host-ip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host-ip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::host-ip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::host-ip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::host-ip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::msearch-port", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::msearch-port", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::msearch-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::msearch-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::msearch-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::network", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::network", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::network", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::network", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::server-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::server-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::server-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::server-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::server-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::socket-ttl", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socket-ttl", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::socket-ttl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::socket-ttl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::socket-ttl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Context_ConstructProps)
    _init (config?: Context_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(mainContext: GLib.MainContext | null, iface: string | null, port: number): Context
    /* Function overloads */
    static new(mainContext?: GLib.MainContext | null, iface?: string | null): Context
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     * @param objectType a #GType supporting #GInitable.
     * @param parameters the parameters to use to construct the object
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface ContextManager_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GUPnP-1.0.GUPnP.ContextManager */
    mainContext?: object
    /**
     * Port the contexts listen on, or 0 if you don't care what
     * port is used by #GUPnPContext objects created by this object.
     */
    port?: number
}
class ContextManager {
    /* Properties of GUPnP-1.0.GUPnP.ContextManager */
    readonly mainContext: object
    /**
     * Port the contexts listen on, or 0 if you don't care what
     * port is used by #GUPnPContext objects created by this object.
     */
    readonly port: number
    /**
     * The white list to use.
     */
    readonly whiteList: WhiteList
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.0.GUPnP.ContextManager */
    /**
     * Get the network port associated with this context manager.
     */
    getPort(): number
    /**
     * Get the #GUPnPWhiteList associated with `manager`.
     */
    getWhiteList(): WhiteList
    /**
     * By calling this function, you are asking `manager` to keep a reference to
     * `control_point` until its associated #GUPnPContext is no longer available.
     * You usually want to call this function from
     * #GUPnPContextManager::context-available handler after you create a
     * #GUPnPControlPoint object for the newly available context.
     * @param controlPoint The #GUPnPControlPoint to be taken care of
     */
    manageControlPoint(controlPoint: ControlPoint): void
    /**
     * By calling this function, you are asking `manager` to keep a reference to
     * `root_device` when its associated #GUPnPContext is no longer available. You
     * usually want to call this function from
     * #GUPnPContextManager::context-available handler after you create a
     * #GUPnPRootDevice object for the newly available context.
     * @param rootDevice The #GUPnPRootDevice to be taken care of
     */
    manageRootDevice(rootDevice: RootDevice): void
    /**
     * This function starts a rescan on every control point managed by `manager`.
     * Only the active control points send discovery messages.
     * This function should be called when servers are suspected to have
     * disappeared.
     */
    rescanControlPoints(): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of GUPnP-1.0.GUPnP.ContextManager */
    /**
     * Signals the availability of new #GUPnPContext.
     * @param context The now available #GUPnPContext
     */
    connect(sigName: "context-available", callback: ((context: Context) => void)): number
    on(sigName: "context-available", callback: (context: Context) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "context-available", callback: (context: Context) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "context-available", callback: (context: Context) => void): NodeJS.EventEmitter
    emit(sigName: "context-available", context: Context): void
    /**
     * Signals the unavailability of a #GUPnPContext.
     * @param context The now unavailable #GUPnPContext
     */
    connect(sigName: "context-unavailable", callback: ((context: Context) => void)): number
    on(sigName: "context-unavailable", callback: (context: Context) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "context-unavailable", callback: (context: Context) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "context-unavailable", callback: (context: Context) => void): NodeJS.EventEmitter
    emit(sigName: "context-unavailable", context: Context): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::main-context", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::port", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::white-list", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::white-list", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::white-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::white-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::white-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ContextManager_ConstructProps)
    _init (config?: ContextManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(mainContext: GLib.MainContext | null, port: number): ContextManager
    /**
     * Factory-method to create a new #GUPnPContextManager. The final type of the
     * #GUPnPContextManager depends on the compile-time selection or - in case of
     * NetworkManager - on its availability during runtime. If it is not available,
     * the implementation falls back to the basic Unix context manager instead.
     * @param port Port to create contexts for, or 0 if you don't care what port is used.
     */
    static create(port: number): ContextManager
    static $gtype: GObject.Type
}
interface ControlPoint_ConstructProps extends GSSDP.ResourceBrowser_ConstructProps {
    /* Constructor properties of GUPnP-1.0.GUPnP.ControlPoint */
    /**
     * The resource factory to use. Set to NULL for default factory.
     */
    resourceFactory?: ResourceFactory
}
class ControlPoint {
    /* Properties of GUPnP-1.0.GUPnP.ControlPoint */
    /**
     * The resource factory to use. Set to NULL for default factory.
     */
    readonly resourceFactory: ResourceFactory
    /* Properties of GSSDP-1.0.GSSDP.ResourceBrowser */
    /**
     * Whether this browser is active or not.
     */
    active: boolean
    /**
     * The #GSSDPClient to use.
     */
    readonly client: GSSDP.Client
    /**
     * The maximum number of seconds in which to request other parties
     * to respond.
     */
    mx: number
    /**
     * The discovery target.
     */
    target: string
    /* Fields of GSSDP-1.0.GSSDP.ResourceBrowser */
    parent: GObject.Object
    priv: GSSDP.ResourceBrowserPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.0.GUPnP.ControlPoint */
    /**
     * Get the #GUPnPControlPoint associated with `control_point`.
     */
    getContext(): Context
    /**
     * Get the #GUPnPResourceFactory used by the `control_point`.
     */
    getResourceFactory(): ResourceFactory
    /**
     * Get the #GList of discovered #GUPnPDeviceProxy objects. Do not free the list
     * nor its elements.
     */
    listDeviceProxies(): DeviceProxy[]
    /**
     * Get the #GList of discovered #GUPnPServiceProxy objects. Do not free the
     * list nor its elements.
     */
    listServiceProxies(): ServiceProxy[]
    /* Methods of GSSDP-1.0.GSSDP.ResourceBrowser */
    getActive(): boolean
    getClient(): GSSDP.Client
    getMx(): number
    getTarget(): string
    /**
     * Begins discovery if `resource_browser` is active and no discovery is
     * performed. Otherwise does nothing.
     */
    rescan(): boolean
    /**
     * (De)activates `resource_browser`.
     * @param active %TRUE to activate `resource_browser`
     */
    setActive(active: boolean): void
    /**
     * Sets the used MX value of `resource_browser` to `mx`.
     * @param mx The to be used MX value
     */
    setMx(mx: number): void
    /**
     * Sets the browser target of `resource_browser` to `target`.
     * @param target The browser target
     */
    setTarget(target: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of GUPnP-1.0.GUPnP.ControlPoint */
    /**
     * The ::device-proxy-available signal is emitted whenever a new
     * device has become available.
     * @param proxy The now available #GUPnPDeviceProxy
     */
    connect(sigName: "device-proxy-available", callback: ((proxy: DeviceProxy) => void)): number
    on(sigName: "device-proxy-available", callback: (proxy: DeviceProxy) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-proxy-available", callback: (proxy: DeviceProxy) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-proxy-available", callback: (proxy: DeviceProxy) => void): NodeJS.EventEmitter
    emit(sigName: "device-proxy-available", proxy: DeviceProxy): void
    /**
     * The ::device-proxy-unavailable signal is emitted whenever a
     * device is not available any more.
     * @param proxy The now unavailable #GUPnPDeviceProxy
     */
    connect(sigName: "device-proxy-unavailable", callback: ((proxy: DeviceProxy) => void)): number
    on(sigName: "device-proxy-unavailable", callback: (proxy: DeviceProxy) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-proxy-unavailable", callback: (proxy: DeviceProxy) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-proxy-unavailable", callback: (proxy: DeviceProxy) => void): NodeJS.EventEmitter
    emit(sigName: "device-proxy-unavailable", proxy: DeviceProxy): void
    /**
     * The ::service-proxy-available signal is emitted whenever a new
     * service has become available.
     * @param proxy The now available #GUPnPServiceProxy
     */
    connect(sigName: "service-proxy-available", callback: ((proxy: ServiceProxy) => void)): number
    on(sigName: "service-proxy-available", callback: (proxy: ServiceProxy) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "service-proxy-available", callback: (proxy: ServiceProxy) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "service-proxy-available", callback: (proxy: ServiceProxy) => void): NodeJS.EventEmitter
    emit(sigName: "service-proxy-available", proxy: ServiceProxy): void
    /**
     * The ::service-proxy-unavailable signal is emitted whenever a
     * service is not available any more.
     * @param proxy The now unavailable #GUPnPServiceProxy
     */
    connect(sigName: "service-proxy-unavailable", callback: ((proxy: ServiceProxy) => void)): number
    on(sigName: "service-proxy-unavailable", callback: (proxy: ServiceProxy) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "service-proxy-unavailable", callback: (proxy: ServiceProxy) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "service-proxy-unavailable", callback: (proxy: ServiceProxy) => void): NodeJS.EventEmitter
    emit(sigName: "service-proxy-unavailable", proxy: ServiceProxy): void
    /* Signals of GSSDP-1.0.GSSDP.ResourceBrowser */
    /**
     * The ::resource-available signal is emitted whenever a new resource
     * has become available.
     * @param usn The USN of the discovered resource
     * @param locations A #GList of strings describing the locations of the discovered resource.
     */
    connect(sigName: "resource-available", callback: ((usn: string, locations: string[]) => void)): number
    on(sigName: "resource-available", callback: (usn: string, locations: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resource-available", callback: (usn: string, locations: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resource-available", callback: (usn: string, locations: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "resource-available", usn: string, locations: string[]): void
    /**
     * The ::resource-unavailable signal is emitted whenever a resource
     * is not available any more.
     * @param usn The USN of the resource
     */
    connect(sigName: "resource-unavailable", callback: ((usn: string) => void)): number
    on(sigName: "resource-unavailable", callback: (usn: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resource-unavailable", callback: (usn: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resource-unavailable", callback: (usn: string) => void): NodeJS.EventEmitter
    emit(sigName: "resource-unavailable", usn: string): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::resource-factory", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-factory", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resource-factory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resource-factory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resource-factory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mx", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mx", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::target", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ControlPoint_ConstructProps)
    _init (config?: ControlPoint_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: Context, target: string): ControlPoint
    /* Function overloads */
    static new(client: GSSDP.Client, target: string): ControlPoint
    static newFull(context: Context, factory: ResourceFactory, target: string): ControlPoint
    static $gtype: GObject.Type
}
interface Device_ConstructProps extends DeviceInfo_ConstructProps {
    /* Constructor properties of GUPnP-1.0.GUPnP.Device */
    /**
     * The containing #GUPnPRootDevice, or NULL if this is the root
     * device.
     */
    rootDevice?: RootDevice
}
class Device {
    /* Properties of GUPnP-1.0.GUPnP.Device */
    /**
     * The containing #GUPnPRootDevice, or NULL if this is the root
     * device.
     */
    readonly rootDevice: RootDevice
    /* Properties of GUPnP-1.0.GUPnP.DeviceInfo */
    /**
     * The #GUPnPContext to use.
     */
    readonly context: Context
    /**
     * The device type.
     */
    readonly deviceType: string
    /**
     * Private property.
     */
    readonly document: XMLDoc
    /**
     * Private property.
     */
    readonly element: object
    /**
     * The location of the device description file.
     */
    readonly location: string
    /**
     * The resource factory to use. Set to NULL for default factory.
     */
    readonly resourceFactory: ResourceFactory
    /**
     * The UDN of this device.
     */
    readonly udn: string
    /**
     * The URL base (#SoupURI).
     */
    readonly urlBase: Soup.URI
    /* Fields of GUPnP-1.0.GUPnP.DeviceInfo */
    parent: GObject.Object
    priv: DeviceInfoPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.0.GUPnP.DeviceInfo */
    /**
     * Get the associated #GUPnPContext.
     */
    getContext(): Context
    /**
     * This function provides generic access to the contents of arbitrary elements
     * in the device description file.
     * @param element Name of the description element to retrieve
     */
    getDescriptionValue(element: string): string
    /**
     * Get the service with type `type` directly contained in `info` as
     * a new object implementing #GUPnPDeviceInfo, or %NULL if no such device
     * was found. The returned object should be unreffed when done.
     * 
     * Note that devices are not cached internally, so that every time you call
     * this function a new object is created. The application must cache any used
     * devices if it wishes to keep them around and re-use them.
     * @param type The type of the device to be retrieved.
     */
    getDevice(type: string): DeviceInfo | null
    /**
     * Get the UPnP device type.
     */
    getDeviceType(): string
    /**
     * Get the friendly name of the device.
     */
    getFriendlyName(): string
    /**
     * Get a URL pointing to the icon most closely matching the
     * given criteria, or %NULL. If `requested_mime_type` is set, only icons with
     * this mime type will be returned. If `requested_depth` is set, only icons with
     * this or lower depth will be returned. If `requested_width` and/or
     * `requested_height` are set, only icons that are this size or smaller are
     * returned, unless `prefer_bigger` is set, in which case the next biggest icon
     * will be returned. The returned strings should be freed.
     * @param requestedMimeType The requested file format, or %NULL for any
     * @param requestedDepth The requested color depth, or -1 for any
     * @param requestedWidth The requested width, or -1 for any
     * @param requestedHeight The requested height, or -1 for any
     * @param preferBigger %TRUE if a bigger, rather than a smaller icon should be returned if no exact match could be found
     */
    getIconUrl(requestedMimeType: string | null, requestedDepth: number, requestedWidth: number, requestedHeight: number, preferBigger: boolean): [ /* returnType */ string, /* mimeType */ string | null, /* depth */ number | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Get the location of the device description file.
     */
    getLocation(): string
    /**
     * Get the manufacturer of the device.
     */
    getManufacturer(): string
    /**
     * Get a URL pointing to the manufacturer's website.
     */
    getManufacturerUrl(): string
    /**
     * Get the description of the device model.
     */
    getModelDescription(): string
    /**
     * Get the model name of the device.
     */
    getModelName(): string
    /**
     * Get the model number of the device.
     */
    getModelNumber(): string
    /**
     * Get a URL pointing to the device model's website.
     */
    getModelUrl(): string
    /**
     * Get a URL pointing to the device's presentation page, for web-based
     * administration.
     */
    getPresentationUrl(): string
    /**
     * Get the #GUPnPResourceFactory used by the `device_info`.
     */
    getResourceFactory(): ResourceFactory
    /**
     * Get the serial number of the device.
     */
    getSerialNumber(): string
    /**
     * Get the service with type `type` directly contained in `info` as a new object
     * implementing #GUPnPServiceInfo, or %NULL if no such device was found. The
     * returned object should be unreffed when done.
     * 
     * Note that services are not cached internally, so that every time you call
     * this function a new object is created. The application must cache any used
     * services if it wishes to keep them around and re-use them.
     * @param type The type of the service to be retrieved.
     */
    getService(type: string): ServiceInfo
    /**
     * Get the Unique Device Name of the device.
     */
    getUdn(): string
    /**
     * Get the Universal Product Code of the device.
     */
    getUpc(): string
    /**
     * Get the URL base of this device.
     */
    getUrlBase(): Soup.URI
    /**
     * Get a #GList of strings representing the types of the devices
     * directly contained in `info`.
     */
    listDeviceTypes(): string[]
    /**
     * Get a #GList of new objects implementing #GUPnPDeviceInfo
     * representing the devices directly contained in `info`. The returned list
     * should be g_list_free()'d and the elements should be g_object_unref()'d.
     * 
     * Note that devices are not cached internally, so that every time you
     * call this function new objects are created. The application
     * must cache any used devices if it wishes to keep them around and re-use
     * them.
     */
    listDevices(): DeviceInfo[]
    /**
     * Get a #GList of strings that represent the device capabilities as announced
     * in the device description file using the &lt;dlna:X_DLNACAP&gt; element.
     */
    listDlnaCapabilities(): string[]
    /**
     * Get a #GList of strings that represent the device class and version as
     * announced in the device description file using the &lt;dlna:X_DLNADOC&gt;
     * element.
     */
    listDlnaDeviceClassIdentifier(): string[]
    /**
     * Get a #GList of strings representing the types of the services
     * directly contained in `info`.
     */
    listServiceTypes(): string[]
    /**
     * Get a #GList of new objects implementing #GUPnPServiceInfo representing the
     * services directly contained in `info`. The returned list should be
     * g_list_free()'d and the elements should be g_object_unref()'d.
     * 
     * Note that services are not cached internally, so that every time you call
     * function new objects are created. The application must cache any used
     * services if it wishes to keep them around and re-use them.
     */
    listServices(): ServiceInfo[]
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::root-device", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root-device", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::context", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::document", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resource-factory", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-factory", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resource-factory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resource-factory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resource-factory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udn", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udn", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::url-base", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-base", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Device_ConstructProps)
    _init (config?: Device_ConstructProps): void
    static $gtype: GObject.Type
}
interface DeviceInfo_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GUPnP-1.0.GUPnP.DeviceInfo */
    /**
     * The #GUPnPContext to use.
     */
    context?: Context
    /**
     * The device type.
     */
    deviceType?: string
    /**
     * Private property.
     */
    document?: XMLDoc
    /**
     * Private property.
     */
    element?: object
    /**
     * The location of the device description file.
     */
    location?: string
    /**
     * The resource factory to use. Set to NULL for default factory.
     */
    resourceFactory?: ResourceFactory
    /**
     * The UDN of this device.
     */
    udn?: string
    /**
     * The URL base (#SoupURI).
     */
    urlBase?: Soup.URI
}
class DeviceInfo {
    /* Properties of GUPnP-1.0.GUPnP.DeviceInfo */
    /**
     * The #GUPnPContext to use.
     */
    readonly context: Context
    /**
     * The device type.
     */
    readonly deviceType: string
    /**
     * Private property.
     */
    readonly document: XMLDoc
    /**
     * Private property.
     */
    readonly element: object
    /**
     * The location of the device description file.
     */
    readonly location: string
    /**
     * The resource factory to use. Set to NULL for default factory.
     */
    readonly resourceFactory: ResourceFactory
    /**
     * The UDN of this device.
     */
    readonly udn: string
    /**
     * The URL base (#SoupURI).
     */
    readonly urlBase: Soup.URI
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.0.GUPnP.DeviceInfo */
    /**
     * Get the associated #GUPnPContext.
     */
    getContext(): Context
    /**
     * This function provides generic access to the contents of arbitrary elements
     * in the device description file.
     * @param element Name of the description element to retrieve
     */
    getDescriptionValue(element: string): string
    /**
     * Get the service with type `type` directly contained in `info` as
     * a new object implementing #GUPnPDeviceInfo, or %NULL if no such device
     * was found. The returned object should be unreffed when done.
     * 
     * Note that devices are not cached internally, so that every time you call
     * this function a new object is created. The application must cache any used
     * devices if it wishes to keep them around and re-use them.
     * @param type The type of the device to be retrieved.
     */
    getDevice(type: string): DeviceInfo | null
    /**
     * Get the UPnP device type.
     */
    getDeviceType(): string
    /**
     * Get the friendly name of the device.
     */
    getFriendlyName(): string
    /**
     * Get a URL pointing to the icon most closely matching the
     * given criteria, or %NULL. If `requested_mime_type` is set, only icons with
     * this mime type will be returned. If `requested_depth` is set, only icons with
     * this or lower depth will be returned. If `requested_width` and/or
     * `requested_height` are set, only icons that are this size or smaller are
     * returned, unless `prefer_bigger` is set, in which case the next biggest icon
     * will be returned. The returned strings should be freed.
     * @param requestedMimeType The requested file format, or %NULL for any
     * @param requestedDepth The requested color depth, or -1 for any
     * @param requestedWidth The requested width, or -1 for any
     * @param requestedHeight The requested height, or -1 for any
     * @param preferBigger %TRUE if a bigger, rather than a smaller icon should be returned if no exact match could be found
     */
    getIconUrl(requestedMimeType: string | null, requestedDepth: number, requestedWidth: number, requestedHeight: number, preferBigger: boolean): [ /* returnType */ string, /* mimeType */ string | null, /* depth */ number | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Get the location of the device description file.
     */
    getLocation(): string
    /**
     * Get the manufacturer of the device.
     */
    getManufacturer(): string
    /**
     * Get a URL pointing to the manufacturer's website.
     */
    getManufacturerUrl(): string
    /**
     * Get the description of the device model.
     */
    getModelDescription(): string
    /**
     * Get the model name of the device.
     */
    getModelName(): string
    /**
     * Get the model number of the device.
     */
    getModelNumber(): string
    /**
     * Get a URL pointing to the device model's website.
     */
    getModelUrl(): string
    /**
     * Get a URL pointing to the device's presentation page, for web-based
     * administration.
     */
    getPresentationUrl(): string
    /**
     * Get the #GUPnPResourceFactory used by the `device_info`.
     */
    getResourceFactory(): ResourceFactory
    /**
     * Get the serial number of the device.
     */
    getSerialNumber(): string
    /**
     * Get the service with type `type` directly contained in `info` as a new object
     * implementing #GUPnPServiceInfo, or %NULL if no such device was found. The
     * returned object should be unreffed when done.
     * 
     * Note that services are not cached internally, so that every time you call
     * this function a new object is created. The application must cache any used
     * services if it wishes to keep them around and re-use them.
     * @param type The type of the service to be retrieved.
     */
    getService(type: string): ServiceInfo
    /**
     * Get the Unique Device Name of the device.
     */
    getUdn(): string
    /**
     * Get the Universal Product Code of the device.
     */
    getUpc(): string
    /**
     * Get the URL base of this device.
     */
    getUrlBase(): Soup.URI
    /**
     * Get a #GList of strings representing the types of the devices
     * directly contained in `info`.
     */
    listDeviceTypes(): string[]
    /**
     * Get a #GList of new objects implementing #GUPnPDeviceInfo
     * representing the devices directly contained in `info`. The returned list
     * should be g_list_free()'d and the elements should be g_object_unref()'d.
     * 
     * Note that devices are not cached internally, so that every time you
     * call this function new objects are created. The application
     * must cache any used devices if it wishes to keep them around and re-use
     * them.
     */
    listDevices(): DeviceInfo[]
    /**
     * Get a #GList of strings that represent the device capabilities as announced
     * in the device description file using the &lt;dlna:X_DLNACAP&gt; element.
     */
    listDlnaCapabilities(): string[]
    /**
     * Get a #GList of strings that represent the device class and version as
     * announced in the device description file using the &lt;dlna:X_DLNADOC&gt;
     * element.
     */
    listDlnaDeviceClassIdentifier(): string[]
    /**
     * Get a #GList of strings representing the types of the services
     * directly contained in `info`.
     */
    listServiceTypes(): string[]
    /**
     * Get a #GList of new objects implementing #GUPnPServiceInfo representing the
     * services directly contained in `info`. The returned list should be
     * g_list_free()'d and the elements should be g_object_unref()'d.
     * 
     * Note that services are not cached internally, so that every time you call
     * function new objects are created. The application must cache any used
     * services if it wishes to keep them around and re-use them.
     */
    listServices(): ServiceInfo[]
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::context", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::document", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resource-factory", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-factory", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resource-factory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resource-factory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resource-factory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udn", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udn", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::url-base", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-base", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceInfo_ConstructProps)
    _init (config?: DeviceInfo_ConstructProps): void
    static $gtype: GObject.Type
}
interface DeviceProxy_ConstructProps extends DeviceInfo_ConstructProps {
}
class DeviceProxy {
    /* Properties of GUPnP-1.0.GUPnP.DeviceInfo */
    /**
     * The #GUPnPContext to use.
     */
    readonly context: Context
    /**
     * The device type.
     */
    readonly deviceType: string
    /**
     * Private property.
     */
    readonly document: XMLDoc
    /**
     * Private property.
     */
    readonly element: object
    /**
     * The location of the device description file.
     */
    readonly location: string
    /**
     * The resource factory to use. Set to NULL for default factory.
     */
    readonly resourceFactory: ResourceFactory
    /**
     * The UDN of this device.
     */
    readonly udn: string
    /**
     * The URL base (#SoupURI).
     */
    readonly urlBase: Soup.URI
    /* Fields of GUPnP-1.0.GUPnP.DeviceInfo */
    parent: GObject.Object
    priv: DeviceInfoPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.0.GUPnP.DeviceInfo */
    /**
     * Get the associated #GUPnPContext.
     */
    getContext(): Context
    /**
     * This function provides generic access to the contents of arbitrary elements
     * in the device description file.
     * @param element Name of the description element to retrieve
     */
    getDescriptionValue(element: string): string
    /**
     * Get the service with type `type` directly contained in `info` as
     * a new object implementing #GUPnPDeviceInfo, or %NULL if no such device
     * was found. The returned object should be unreffed when done.
     * 
     * Note that devices are not cached internally, so that every time you call
     * this function a new object is created. The application must cache any used
     * devices if it wishes to keep them around and re-use them.
     * @param type The type of the device to be retrieved.
     */
    getDevice(type: string): DeviceInfo | null
    /**
     * Get the UPnP device type.
     */
    getDeviceType(): string
    /**
     * Get the friendly name of the device.
     */
    getFriendlyName(): string
    /**
     * Get a URL pointing to the icon most closely matching the
     * given criteria, or %NULL. If `requested_mime_type` is set, only icons with
     * this mime type will be returned. If `requested_depth` is set, only icons with
     * this or lower depth will be returned. If `requested_width` and/or
     * `requested_height` are set, only icons that are this size or smaller are
     * returned, unless `prefer_bigger` is set, in which case the next biggest icon
     * will be returned. The returned strings should be freed.
     * @param requestedMimeType The requested file format, or %NULL for any
     * @param requestedDepth The requested color depth, or -1 for any
     * @param requestedWidth The requested width, or -1 for any
     * @param requestedHeight The requested height, or -1 for any
     * @param preferBigger %TRUE if a bigger, rather than a smaller icon should be returned if no exact match could be found
     */
    getIconUrl(requestedMimeType: string | null, requestedDepth: number, requestedWidth: number, requestedHeight: number, preferBigger: boolean): [ /* returnType */ string, /* mimeType */ string | null, /* depth */ number | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Get the location of the device description file.
     */
    getLocation(): string
    /**
     * Get the manufacturer of the device.
     */
    getManufacturer(): string
    /**
     * Get a URL pointing to the manufacturer's website.
     */
    getManufacturerUrl(): string
    /**
     * Get the description of the device model.
     */
    getModelDescription(): string
    /**
     * Get the model name of the device.
     */
    getModelName(): string
    /**
     * Get the model number of the device.
     */
    getModelNumber(): string
    /**
     * Get a URL pointing to the device model's website.
     */
    getModelUrl(): string
    /**
     * Get a URL pointing to the device's presentation page, for web-based
     * administration.
     */
    getPresentationUrl(): string
    /**
     * Get the #GUPnPResourceFactory used by the `device_info`.
     */
    getResourceFactory(): ResourceFactory
    /**
     * Get the serial number of the device.
     */
    getSerialNumber(): string
    /**
     * Get the service with type `type` directly contained in `info` as a new object
     * implementing #GUPnPServiceInfo, or %NULL if no such device was found. The
     * returned object should be unreffed when done.
     * 
     * Note that services are not cached internally, so that every time you call
     * this function a new object is created. The application must cache any used
     * services if it wishes to keep them around and re-use them.
     * @param type The type of the service to be retrieved.
     */
    getService(type: string): ServiceInfo
    /**
     * Get the Unique Device Name of the device.
     */
    getUdn(): string
    /**
     * Get the Universal Product Code of the device.
     */
    getUpc(): string
    /**
     * Get the URL base of this device.
     */
    getUrlBase(): Soup.URI
    /**
     * Get a #GList of strings representing the types of the devices
     * directly contained in `info`.
     */
    listDeviceTypes(): string[]
    /**
     * Get a #GList of new objects implementing #GUPnPDeviceInfo
     * representing the devices directly contained in `info`. The returned list
     * should be g_list_free()'d and the elements should be g_object_unref()'d.
     * 
     * Note that devices are not cached internally, so that every time you
     * call this function new objects are created. The application
     * must cache any used devices if it wishes to keep them around and re-use
     * them.
     */
    listDevices(): DeviceInfo[]
    /**
     * Get a #GList of strings that represent the device capabilities as announced
     * in the device description file using the &lt;dlna:X_DLNACAP&gt; element.
     */
    listDlnaCapabilities(): string[]
    /**
     * Get a #GList of strings that represent the device class and version as
     * announced in the device description file using the &lt;dlna:X_DLNADOC&gt;
     * element.
     */
    listDlnaDeviceClassIdentifier(): string[]
    /**
     * Get a #GList of strings representing the types of the services
     * directly contained in `info`.
     */
    listServiceTypes(): string[]
    /**
     * Get a #GList of new objects implementing #GUPnPServiceInfo representing the
     * services directly contained in `info`. The returned list should be
     * g_list_free()'d and the elements should be g_object_unref()'d.
     * 
     * Note that services are not cached internally, so that every time you call
     * function new objects are created. The application must cache any used
     * services if it wishes to keep them around and re-use them.
     */
    listServices(): ServiceInfo[]
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::context", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::document", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resource-factory", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-factory", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resource-factory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resource-factory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resource-factory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udn", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udn", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::url-base", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-base", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceProxy_ConstructProps)
    _init (config?: DeviceProxy_ConstructProps): void
    static $gtype: GObject.Type
}
interface ResourceFactory_ConstructProps extends GObject.Object_ConstructProps {
}
class ResourceFactory {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.0.GUPnP.ResourceFactory */
    /**
     * Registers the GType `type` for the proxy of resource of UPnP type `upnp_type`.
     * After this call, the factory `factory` will create object of GType `type` each
     * time it is asked to create a resource proxy object for UPnP type `upnp_type`.
     * 
     * Note: GType `type` must be a derived type of #GUPNP_TYPE_DEVICE_PROXY if
     * resource is a device or #GUPNP_TYPE_SERVICE_PROXY if its a service.
     * @param upnpType The UPnP type name of the resource.
     * @param type The requested GType assignment for the resource proxy.
     */
    registerResourceProxyType(upnpType: string, type: GObject.Type): void
    /**
     * Registers the GType `type` for the resource of UPnP type `upnp_type`. After
     * this call, the factory `factory` will create object of GType `type` each time
     * it is asked to create a resource object for UPnP type `upnp_type`.
     * 
     * Note: GType `type` must be a derived type of #GUPNP_TYPE_DEVICE if resource is
     * a device or #GUPNP_TYPE_SERVICE if its a service.
     * @param upnpType The UPnP type name of the resource.
     * @param type The requested GType assignment for the resource.
     */
    registerResourceType(upnpType: string, type: GObject.Type): void
    /**
     * Unregisters the GType assignment for the proxy of resource of UPnP type
     * `upnp_type`.
     * @param upnpType The UPnP type name of the resource.
     */
    unregisterResourceProxyType(upnpType: string): boolean
    /**
     * Unregisters the GType assignment for the resource of UPnP type `upnp_type`.
     * @param upnpType The UPnP type name of the resource.
     */
    unregisterResourceType(upnpType: string): boolean
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ResourceFactory_ConstructProps)
    _init (config?: ResourceFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ResourceFactory
    /**
     * Get the default singleton #GUPnPResourceFactory object.
     */
    static getDefault(): ResourceFactory
    static $gtype: GObject.Type
}
interface RootDevice_ConstructProps extends Device_ConstructProps {
    /* Constructor properties of GUPnP-1.0.GUPnP.RootDevice */
    /**
     * TRUE if this device is available.
     */
    available?: boolean
    /**
     * The path to directory where description documents are provided.
     */
    descriptionDir?: string
    /**
     * Device description document. Constructor property.
     */
    descriptionDoc?: XMLDoc
    /**
     * The path to device description document. This could either be an
     * absolute path or path relative to GUPnPRootDevice:description-dir.
     */
    descriptionPath?: string
}
class RootDevice {
    /* Properties of GUPnP-1.0.GUPnP.RootDevice */
    /**
     * TRUE if this device is available.
     */
    available: boolean
    /**
     * The path to directory where description documents are provided.
     */
    readonly descriptionDir: string
    /**
     * Device description document. Constructor property.
     */
    readonly descriptionDoc: XMLDoc
    /**
     * The path to device description document. This could either be an
     * absolute path or path relative to GUPnPRootDevice:description-dir.
     */
    readonly descriptionPath: string
    /* Properties of GUPnP-1.0.GUPnP.Device */
    /**
     * The containing #GUPnPRootDevice, or NULL if this is the root
     * device.
     */
    readonly rootDevice: RootDevice
    /* Properties of GUPnP-1.0.GUPnP.DeviceInfo */
    /**
     * The #GUPnPContext to use.
     */
    readonly context: Context
    /**
     * The device type.
     */
    readonly deviceType: string
    /**
     * Private property.
     */
    readonly document: XMLDoc
    /**
     * Private property.
     */
    readonly element: object
    /**
     * The location of the device description file.
     */
    readonly location: string
    /**
     * The resource factory to use. Set to NULL for default factory.
     */
    readonly resourceFactory: ResourceFactory
    /**
     * The UDN of this device.
     */
    readonly udn: string
    /**
     * The URL base (#SoupURI).
     */
    readonly urlBase: Soup.URI
    /* Fields of GUPnP-1.0.GUPnP.Device */
    parent: DeviceInfo
    priv: DevicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.0.GUPnP.RootDevice */
    /**
     * Get whether or not `root_device` is available (announcing its presence).
     */
    getAvailable(): boolean
    /**
     * Get the path to the directory containing description documents related to
     * `root_device`.
     */
    getDescriptionDir(): string
    /**
     * Get the path to the device description document of `root_device`.
     */
    getDescriptionPath(): string
    /**
     * Get the relative location of `root_device`.
     */
    getRelativeLocation(): string
    /**
     * Get the #GSSDPResourceGroup used by `root_device`.
     */
    getSsdpResourceGroup(): GSSDP.ResourceGroup
    /**
     * Controls whether or not `root_device` is available (announcing
     * its presence).
     * @param available %TRUE if `root_device` should be available
     */
    setAvailable(available: boolean): void
    /* Methods of GUPnP-1.0.GUPnP.DeviceInfo */
    /**
     * Get the associated #GUPnPContext.
     */
    getContext(): Context
    /**
     * This function provides generic access to the contents of arbitrary elements
     * in the device description file.
     * @param element Name of the description element to retrieve
     */
    getDescriptionValue(element: string): string
    /**
     * Get the service with type `type` directly contained in `info` as
     * a new object implementing #GUPnPDeviceInfo, or %NULL if no such device
     * was found. The returned object should be unreffed when done.
     * 
     * Note that devices are not cached internally, so that every time you call
     * this function a new object is created. The application must cache any used
     * devices if it wishes to keep them around and re-use them.
     * @param type The type of the device to be retrieved.
     */
    getDevice(type: string): DeviceInfo | null
    /**
     * Get the UPnP device type.
     */
    getDeviceType(): string
    /**
     * Get the friendly name of the device.
     */
    getFriendlyName(): string
    /**
     * Get a URL pointing to the icon most closely matching the
     * given criteria, or %NULL. If `requested_mime_type` is set, only icons with
     * this mime type will be returned. If `requested_depth` is set, only icons with
     * this or lower depth will be returned. If `requested_width` and/or
     * `requested_height` are set, only icons that are this size or smaller are
     * returned, unless `prefer_bigger` is set, in which case the next biggest icon
     * will be returned. The returned strings should be freed.
     * @param requestedMimeType The requested file format, or %NULL for any
     * @param requestedDepth The requested color depth, or -1 for any
     * @param requestedWidth The requested width, or -1 for any
     * @param requestedHeight The requested height, or -1 for any
     * @param preferBigger %TRUE if a bigger, rather than a smaller icon should be returned if no exact match could be found
     */
    getIconUrl(requestedMimeType: string | null, requestedDepth: number, requestedWidth: number, requestedHeight: number, preferBigger: boolean): [ /* returnType */ string, /* mimeType */ string | null, /* depth */ number | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Get the location of the device description file.
     */
    getLocation(): string
    /**
     * Get the manufacturer of the device.
     */
    getManufacturer(): string
    /**
     * Get a URL pointing to the manufacturer's website.
     */
    getManufacturerUrl(): string
    /**
     * Get the description of the device model.
     */
    getModelDescription(): string
    /**
     * Get the model name of the device.
     */
    getModelName(): string
    /**
     * Get the model number of the device.
     */
    getModelNumber(): string
    /**
     * Get a URL pointing to the device model's website.
     */
    getModelUrl(): string
    /**
     * Get a URL pointing to the device's presentation page, for web-based
     * administration.
     */
    getPresentationUrl(): string
    /**
     * Get the #GUPnPResourceFactory used by the `device_info`.
     */
    getResourceFactory(): ResourceFactory
    /**
     * Get the serial number of the device.
     */
    getSerialNumber(): string
    /**
     * Get the service with type `type` directly contained in `info` as a new object
     * implementing #GUPnPServiceInfo, or %NULL if no such device was found. The
     * returned object should be unreffed when done.
     * 
     * Note that services are not cached internally, so that every time you call
     * this function a new object is created. The application must cache any used
     * services if it wishes to keep them around and re-use them.
     * @param type The type of the service to be retrieved.
     */
    getService(type: string): ServiceInfo
    /**
     * Get the Unique Device Name of the device.
     */
    getUdn(): string
    /**
     * Get the Universal Product Code of the device.
     */
    getUpc(): string
    /**
     * Get the URL base of this device.
     */
    getUrlBase(): Soup.URI
    /**
     * Get a #GList of strings representing the types of the devices
     * directly contained in `info`.
     */
    listDeviceTypes(): string[]
    /**
     * Get a #GList of new objects implementing #GUPnPDeviceInfo
     * representing the devices directly contained in `info`. The returned list
     * should be g_list_free()'d and the elements should be g_object_unref()'d.
     * 
     * Note that devices are not cached internally, so that every time you
     * call this function new objects are created. The application
     * must cache any used devices if it wishes to keep them around and re-use
     * them.
     */
    listDevices(): DeviceInfo[]
    /**
     * Get a #GList of strings that represent the device capabilities as announced
     * in the device description file using the &lt;dlna:X_DLNACAP&gt; element.
     */
    listDlnaCapabilities(): string[]
    /**
     * Get a #GList of strings that represent the device class and version as
     * announced in the device description file using the &lt;dlna:X_DLNADOC&gt;
     * element.
     */
    listDlnaDeviceClassIdentifier(): string[]
    /**
     * Get a #GList of strings representing the types of the services
     * directly contained in `info`.
     */
    listServiceTypes(): string[]
    /**
     * Get a #GList of new objects implementing #GUPnPServiceInfo representing the
     * services directly contained in `info`. The returned list should be
     * g_list_free()'d and the elements should be g_object_unref()'d.
     * 
     * Note that services are not cached internally, so that every time you call
     * function new objects are created. The application must cache any used
     * services if it wishes to keep them around and re-use them.
     */
    listServices(): ServiceInfo[]
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::available", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description-dir", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-dir", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description-doc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-doc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description-doc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description-doc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description-doc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root-device", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root-device", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::context", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::document", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resource-factory", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-factory", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resource-factory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resource-factory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resource-factory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udn", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udn", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::url-base", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-base", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RootDevice_ConstructProps)
    _init (config?: RootDevice_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: Context, descriptionPath: string, descriptionDir: string): RootDevice
    static newFull(context: Context, factory: ResourceFactory, descriptionDoc: XMLDoc, descriptionPath: string, descriptionDir: string): RootDevice
    static $gtype: GObject.Type
}
interface Service_ConstructProps extends ServiceInfo_ConstructProps {
    /* Constructor properties of GUPnP-1.0.GUPnP.Service */
    /**
     * The containing #GUPnPRootDevice.
     */
    rootDevice?: RootDevice
}
class Service {
    /* Properties of GUPnP-1.0.GUPnP.Service */
    /**
     * The containing #GUPnPRootDevice.
     */
    readonly rootDevice: RootDevice
    /* Properties of GUPnP-1.0.GUPnP.ServiceInfo */
    /**
     * The #GUPnPContext to use.
     */
    readonly context: Context
    /**
     * Private property.
     */
    readonly document: XMLDoc
    /**
     * Private property.
     */
    readonly element: object
    /**
     * The location of the device description file.
     */
    readonly location: string
    /**
     * The service type.
     */
    readonly serviceType: string
    /**
     * The UDN of the containing device.
     */
    readonly udn: string
    /**
     * The URL base (#SoupURI).
     */
    readonly urlBase: Soup.URI
    /* Fields of GUPnP-1.0.GUPnP.ServiceInfo */
    parent: GObject.Object
    priv: ServiceInfoPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.0.GUPnP.Service */
    /**
     * Causes new notifications to be queued up until gupnp_service_thaw_notify()
     * is called.
     */
    freezeNotify(): void
    /**
     * Notifies listening clients that `variable` has changed to `value`.
     * @param variable The name of the variable to notify
     * @param value The value of the variable
     */
    notifyValue(variable: string, value: any): void
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
     * @param userData the data to pass to each of the callbacks
     */
    signalsAutoconnect(userData?: object | null): void
    /**
     * Sends out any pending notifications, and stops queuing of new ones.
     */
    thawNotify(): void
    /* Methods of GUPnP-1.0.GUPnP.ServiceInfo */
    /**
     * Get the #GUPnPContext associated with `info`.
     */
    getContext(): Context
    /**
     * Get the control URL for this service, or %NULL..
     */
    getControlUrl(): string
    /**
     * Get the event subscription URL for this service, or %NULL.
     */
    getEventSubscriptionUrl(): string
    /**
     * Get the ID of this service, or %NULL if there is no ID.
     */
    getId(): string
    /**
     * Note that introspection object is created from the information in service
     * description document (SCPD) provided by the service so it can not be created
     * if the service does not provide an SCPD.
     * 
     * Warning: You  should use gupnp_service_info_get_introspection_async()
     * instead, this function re-enter the GMainloop before returning or might
     * even block.
     */
    getIntrospection(): ServiceIntrospection
    /**
     * Note that introspection object is created from the information in service
     * description document (SCPD) provided by the service so it can not be created
     * if the service does not provide an SCPD.
     * @param callback callback to be called when introspection object is ready.
     */
    getIntrospectionAsync(callback: ServiceIntrospectionCallback): void
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
    getIntrospectionAsyncFull(callback: ServiceIntrospectionCallback, cancellable?: Gio.Cancellable | null): void
    /**
     * Get the location of the device description file.
     */
    getLocation(): string
    /**
     * Get the SCPD URL for this service, or %NULL if there is no SCPD.
     */
    getScpdUrl(): string
    /**
     * Get the UPnP service type, or %NULL.
     */
    getServiceType(): string
    /**
     * Get the Unique Device Name of the containing device.
     */
    getUdn(): string
    /**
     * Get the URL base of this service.
     */
    getUrlBase(): Soup.URI
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of GUPnP-1.0.GUPnP.Service */
    /**
     * Emitted whenever an action is invoked. Handler should process
     * `action` and must call either gupnp_service_action_return() or
     * gupnp_service_action_return_error().
     * @param action The invoked #GUPnPServiceAction
     */
    connect(sigName: "action-invoked", callback: ((action: ServiceAction) => void)): number
    on(sigName: "action-invoked", callback: (action: ServiceAction) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "action-invoked", callback: (action: ServiceAction) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "action-invoked", callback: (action: ServiceAction) => void): NodeJS.EventEmitter
    emit(sigName: "action-invoked", action: ServiceAction): void
    /**
     * Emitted whenever notification of a client fails.
     * @param callbackUrl A #GList of callback URLs
     * @param reason A pointer to a #GError describing why the notify failed
     */
    connect(sigName: "notify-failed", callback: ((callbackUrl: Soup.URI[], reason: GLib.Error) => void)): number
    on(sigName: "notify-failed", callback: (callbackUrl: Soup.URI[], reason: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-failed", callback: (callbackUrl: Soup.URI[], reason: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-failed", callback: (callbackUrl: Soup.URI[], reason: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "notify-failed", callbackUrl: Soup.URI[], reason: GLib.Error): void
    /**
     * Emitted whenever `service` needs to know the value of `variable`.
     * Handler should fill `value` with the value of `variable`.
     * @param variable The variable that is being queried
     * @param value The location of the #GValue of the variable
     */
    connect(sigName: "query-variable", callback: ((variable: string, value: any) => void)): number
    on(sigName: "query-variable", callback: (variable: string, value: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-variable", callback: (variable: string, value: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-variable", callback: (variable: string, value: any) => void): NodeJS.EventEmitter
    emit(sigName: "query-variable", variable: string, value: any): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::root-device", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root-device", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::context", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::document", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::service-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::service-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::service-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::service-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udn", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udn", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::url-base", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-base", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Service_ConstructProps)
    _init (config?: Service_ConstructProps): void
    static $gtype: GObject.Type
}
interface ServiceInfo_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GUPnP-1.0.GUPnP.ServiceInfo */
    /**
     * The #GUPnPContext to use.
     */
    context?: Context
    /**
     * Private property.
     */
    document?: XMLDoc
    /**
     * Private property.
     */
    element?: object
    /**
     * The location of the device description file.
     */
    location?: string
    /**
     * The service type.
     */
    serviceType?: string
    /**
     * The UDN of the containing device.
     */
    udn?: string
    /**
     * The URL base (#SoupURI).
     */
    urlBase?: Soup.URI
}
class ServiceInfo {
    /* Properties of GUPnP-1.0.GUPnP.ServiceInfo */
    /**
     * The #GUPnPContext to use.
     */
    readonly context: Context
    /**
     * Private property.
     */
    readonly document: XMLDoc
    /**
     * Private property.
     */
    readonly element: object
    /**
     * The location of the device description file.
     */
    readonly location: string
    /**
     * The service type.
     */
    readonly serviceType: string
    /**
     * The UDN of the containing device.
     */
    readonly udn: string
    /**
     * The URL base (#SoupURI).
     */
    readonly urlBase: Soup.URI
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.0.GUPnP.ServiceInfo */
    /**
     * Get the #GUPnPContext associated with `info`.
     */
    getContext(): Context
    /**
     * Get the control URL for this service, or %NULL..
     */
    getControlUrl(): string
    /**
     * Get the event subscription URL for this service, or %NULL.
     */
    getEventSubscriptionUrl(): string
    /**
     * Get the ID of this service, or %NULL if there is no ID.
     */
    getId(): string
    /**
     * Note that introspection object is created from the information in service
     * description document (SCPD) provided by the service so it can not be created
     * if the service does not provide an SCPD.
     * 
     * Warning: You  should use gupnp_service_info_get_introspection_async()
     * instead, this function re-enter the GMainloop before returning or might
     * even block.
     */
    getIntrospection(): ServiceIntrospection
    /**
     * Note that introspection object is created from the information in service
     * description document (SCPD) provided by the service so it can not be created
     * if the service does not provide an SCPD.
     * @param callback callback to be called when introspection object is ready.
     */
    getIntrospectionAsync(callback: ServiceIntrospectionCallback): void
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
    getIntrospectionAsyncFull(callback: ServiceIntrospectionCallback, cancellable?: Gio.Cancellable | null): void
    /**
     * Get the location of the device description file.
     */
    getLocation(): string
    /**
     * Get the SCPD URL for this service, or %NULL if there is no SCPD.
     */
    getScpdUrl(): string
    /**
     * Get the UPnP service type, or %NULL.
     */
    getServiceType(): string
    /**
     * Get the Unique Device Name of the containing device.
     */
    getUdn(): string
    /**
     * Get the URL base of this service.
     */
    getUrlBase(): Soup.URI
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::context", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::document", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::service-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::service-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::service-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::service-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udn", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udn", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::url-base", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-base", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ServiceInfo_ConstructProps)
    _init (config?: ServiceInfo_ConstructProps): void
    static $gtype: GObject.Type
}
interface ServiceIntrospection_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GUPnP-1.0.GUPnP.ServiceIntrospection */
    /**
     * The scpd of the device description file.
     */
    scpd?: object
}
class ServiceIntrospection {
    /* Properties of GUPnP-1.0.GUPnP.ServiceIntrospection */
    /**
     * The scpd of the device description file.
     */
    readonly scpd: object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.0.GUPnP.ServiceIntrospection */
    /**
     * Returns the action by the name `action_name` in this service.
     * @param actionName The name of the action to retrieve
     */
    getAction(actionName: string): ServiceActionInfo
    /**
     * Returns the state variable by the name `variable_name` in this service.
     * @param variableName The name of the variable to retrieve
     */
    getStateVariable(variableName: string): ServiceStateVariableInfo
    /**
     * Returns a GList of names of all the actions in this service.
     */
    listActionNames(): string[]
    /**
     * Returns a #GList of all the actions (of type #GUPnPServiceActionInfo) in
     * this service.
     */
    listActions(): ServiceActionInfo[]
    /**
     * Returns a #GList of names of all the state variables in this service.
     */
    listStateVariableNames(): string[]
    /**
     * Returns a GList of all the state variables (of type
     * #GUPnPServiceStateVariableInfo) in this service.
     */
    listStateVariables(): ServiceStateVariableInfo[]
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::scpd", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scpd", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scpd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scpd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scpd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ServiceIntrospection_ConstructProps)
    _init (config?: ServiceIntrospection_ConstructProps): void
    static $gtype: GObject.Type
}
interface ServiceProxy_ConstructProps extends ServiceInfo_ConstructProps {
    /* Constructor properties of GUPnP-1.0.GUPnP.ServiceProxy */
    /**
     * Whether we are subscribed to this service.
     */
    subscribed?: boolean
}
class ServiceProxy {
    /* Properties of GUPnP-1.0.GUPnP.ServiceProxy */
    /**
     * Whether we are subscribed to this service.
     */
    subscribed: boolean
    /* Properties of GUPnP-1.0.GUPnP.ServiceInfo */
    /**
     * The #GUPnPContext to use.
     */
    readonly context: Context
    /**
     * Private property.
     */
    readonly document: XMLDoc
    /**
     * Private property.
     */
    readonly element: object
    /**
     * The location of the device description file.
     */
    readonly location: string
    /**
     * The service type.
     */
    readonly serviceType: string
    /**
     * The UDN of the containing device.
     */
    readonly udn: string
    /**
     * The URL base (#SoupURI).
     */
    readonly urlBase: Soup.URI
    /* Fields of GUPnP-1.0.GUPnP.ServiceInfo */
    parent: GObject.Object
    priv: ServiceInfoPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.0.GUPnP.ServiceProxy */
    /**
     * Sets up `callback` to be called whenever a change notification for
     * `variable` is recieved.
     * @param variable The variable to add notification for
     * @param type The type of the variable
     * @param callback The callback to call when `variable` changes
     */
    addNotify(variable: string, type: GObject.Type, callback: ServiceProxyNotifyCallback): boolean
    /**
     * Get a notification for anything that happens on the peer. `value` in
     * `callback` will be of type #G_TYPE_POINTER and contain the pre-parsed
     * #xmlDoc. Do NOT free or modify this document.
     * @param callback The callback to call when the peer issues any variable notification.
     */
    addRawNotify(callback: ServiceProxyNotifyCallback): boolean
    /**
     * A variant of #gupnp_service_proxy_begin_action that takes lists of
     * in-parameter names, types and values.
     * @param action An action
     * @param inNames #GList of 'in' parameter names (as strings)
     * @param inValues #GList of values (as #GValue) that line up with `in_names`
     * @param callback The callback to call when sending the action has succeeded or failed
     */
    beginActionList(action: string, inNames: string[], inValues: any[], callback: ServiceProxyActionCallback): ServiceProxyAction
    /**
     * Cancels `action,` freeing the `action` handle.
     * @param action A #GUPnPServiceProxyAction handle
     */
    cancelAction(action: ServiceProxyAction): void
    /**
     * See gupnp_service_proxy_end_action(); this version takes a #GHashTable for
     * runtime generated parameter lists.
     * @param action A #GUPnPServiceProxyAction handle
     * @param hash A #GHashTable of out parameter name and initialised #GValue pairs
     */
    endActionHash(action: ServiceProxyAction, hash: GLib.HashTable): [ /* returnType */ boolean, /* hash */ GLib.HashTable ]
    /**
     * A variant of #gupnp_service_proxy_end_action that takes lists of
     * out-parameter names, types and place-holders for values. The returned list
     * in `out_values` must be freed using #g_list_free and each element in it using
     * #g_value_unset and #g_slice_free.
     * @param action A #GUPnPServiceProxyAction handle
     * @param outNames #GList of 'out' parameter names (as strings)
     * @param outTypes #GList of types (as #GType) that line up with `out_names`
     */
    endActionList(action: ServiceProxyAction, outNames: string[], outTypes: GObject.Type[]): [ /* returnType */ boolean, /* outValues */ any[] ]
    /**
     * Returns if we are subscribed to this service.
     */
    getSubscribed(): boolean
    /**
     * Cancels the variable change notification for `callback` and `user_data`.
     * 
     * Up to version 0.20.9 this function must not be called directlya or
     * indirectly from a #GUPnPServiceProxyNotifyCallback associated with this
     * service proxy, even if it is for another variable. In later versions such
     * calls are allowed.
     * @param variable The variable to add notification for
     * @param callback The callback to call when `variable` changes
     */
    removeNotify(variable: string, callback: ServiceProxyNotifyCallback): boolean
    /**
     * Cancels the variable change notification for `callback` and `user_data`.
     * 
     * This function must not be called directly or indirectly from a
     * #GUPnPServiceProxyNotifyCallback associated with this service proxy, even
     * if it is for another variable.
     * @param callback The callback to call when `variable` changes
     */
    removeRawNotify(callback: ServiceProxyNotifyCallback): boolean
    /**
     * The synchronous variant of #gupnp_service_proxy_begin_action_list and
     * #gupnp_service_proxy_end_action_list.
     * @param action An action
     * @param inNames #GList of 'in' parameter names (as strings)
     * @param inValues #GList of values (as #GValue) that line up with `in_names`
     * @param outNames #GList of 'out' parameter names (as strings)
     * @param outTypes #GList of types (as #GType) that line up with `out_names`
     */
    sendActionList(action: string, inNames: string[], inValues: any[], outNames: string[], outTypes: GObject.Type[]): [ /* returnType */ boolean, /* outValues */ any[] ]
    /**
     * (Un)subscribes to this service.
     * 
     * Note that the relevant messages are not immediately sent but queued.
     * If you want to unsubcribe from this service because the application
     * is quitting, rely on automatic synchronised unsubscription on object
     * destruction instead.
     * @param subscribed %TRUE to subscribe to this service
     */
    setSubscribed(subscribed: boolean): void
    /* Methods of GUPnP-1.0.GUPnP.ServiceInfo */
    /**
     * Get the #GUPnPContext associated with `info`.
     */
    getContext(): Context
    /**
     * Get the control URL for this service, or %NULL..
     */
    getControlUrl(): string
    /**
     * Get the event subscription URL for this service, or %NULL.
     */
    getEventSubscriptionUrl(): string
    /**
     * Get the ID of this service, or %NULL if there is no ID.
     */
    getId(): string
    /**
     * Note that introspection object is created from the information in service
     * description document (SCPD) provided by the service so it can not be created
     * if the service does not provide an SCPD.
     * 
     * Warning: You  should use gupnp_service_info_get_introspection_async()
     * instead, this function re-enter the GMainloop before returning or might
     * even block.
     */
    getIntrospection(): ServiceIntrospection
    /**
     * Note that introspection object is created from the information in service
     * description document (SCPD) provided by the service so it can not be created
     * if the service does not provide an SCPD.
     * @param callback callback to be called when introspection object is ready.
     */
    getIntrospectionAsync(callback: ServiceIntrospectionCallback): void
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
    getIntrospectionAsyncFull(callback: ServiceIntrospectionCallback, cancellable?: Gio.Cancellable | null): void
    /**
     * Get the location of the device description file.
     */
    getLocation(): string
    /**
     * Get the SCPD URL for this service, or %NULL if there is no SCPD.
     */
    getScpdUrl(): string
    /**
     * Get the UPnP service type, or %NULL.
     */
    getServiceType(): string
    /**
     * Get the Unique Device Name of the containing device.
     */
    getUdn(): string
    /**
     * Get the URL base of this service.
     */
    getUrlBase(): Soup.URI
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of GUPnP-1.0.GUPnP.ServiceProxy */
    /**
     * Emitted whenever the subscription to this service has been lost due
     * to an error condition.
     * @param error A pointer to a #GError describing why the subscription has been lost
     */
    connect(sigName: "subscription-lost", callback: ((error: GLib.Error) => void)): number
    on(sigName: "subscription-lost", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "subscription-lost", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "subscription-lost", callback: (error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "subscription-lost", error: GLib.Error): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::subscribed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subscribed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subscribed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subscribed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subscribed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::context", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::document", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::element", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::service-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::service-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::service-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::service-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udn", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udn", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::url-base", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-base", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ServiceProxy_ConstructProps)
    _init (config?: ServiceProxy_ConstructProps): void
    static $gtype: GObject.Type
}
interface WhiteList_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GUPnP-1.0.GUPnP.WhiteList */
    /**
     * Whether this white list is active or not.
     */
    enabled?: boolean
    /**
     * Whether this white list is active or not.
     */
    entries?: string[]
}
class WhiteList {
    /* Properties of GUPnP-1.0.GUPnP.WhiteList */
    /**
     * Whether this white list is active or not.
     */
    enabled: boolean
    /**
     * Whether this white list is active or not.
     */
    readonly entries: string[]
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnP-1.0.GUPnP.WhiteList */
    /**
     * Add `entry` in the list of valid criteria used by `white_list` to
     * filter networks.
     * if `entry` already exists, it won't be added a second time.
     * @param entry A value used to filter network
     */
    addEntry(entry: string): boolean
    /**
     * Add a list of entries to a #GUPnPWhiteList. This is a helper function to
     * directly add a %NULL-terminated array of string usually aquired from
     * commandline args.
     * @param entries A %NULL-terminated list of strings
     */
    addEntryv(entries: string[]): void
    /**
     * It will check if the `context` is allowed or not. The `white_list` will check
     * all its entries againt #GUPnPContext interface, host ip and network fields
     * information. This function doesn't take into account the `white_list` status
     * (enabled or not).
     * @param context A #GUPnPContext to test.
     */
    checkContext(context: Context): boolean
    /**
     * Remove all entries from #GList that compose the white list.
     * The list is now empty. Even if #GUPnPWhiteList is enabled, it will have the
     * same behavior as if it was disabled.
     */
    clear(): void
    /**
     * Return the status of the #GUPnPWhiteList
     */
    getEnabled(): boolean
    /**
     * Get the #GList of entries that compose the white list. Do not free
     */
    getEntries(): string[]
    /**
     * Return the state of the entries list of #GUPnPWhiteList
     */
    isEmpty(): boolean
    /**
     * Remove `entry` in the list of valid criteria used by `white_list` to
     * filter networks.
     * @param entry A value to remove from the filter list.
     */
    removeEntry(entry: string): boolean
    /**
     * Enable or disable the #GUPnPWhiteList to perform the network filtering.
     * @param enable %TRUE to enable `white_list,` %FALSE otherwise
     */
    setEnabled(enable: boolean): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::entries", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WhiteList_ConstructProps)
    _init (config?: WhiteList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): WhiteList
    static $gtype: GObject.Type
}
interface XMLDoc_ConstructProps extends GObject.Object_ConstructProps {
}
class XMLDoc {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: XMLDoc_ConstructProps)
    _init (config?: XMLDoc_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(xmlDoc: libxml2.Doc): XMLDoc
    static newFromPath(path: string): XMLDoc
    static $gtype: GObject.Type
}
abstract class AclInterface {
    /* Fields of GUPnP-1.0.GUPnP.AclInterface */
    /**
     * The parent interface.
     */
    parent: GObject.TypeInterface
    isAllowed: (self: Acl, device: object | null, service: object | null, path: string, address: string, agent?: string | null) => boolean
    isAllowedAsync: (self: Acl, device: object | null, service: object | null, path: string, address: string, agent?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    isAllowedFinish: (self: Acl, res: Gio.AsyncResult) => boolean
    canSync: (self: Acl) => boolean
    static name: string
}
abstract class ContextClass {
    /* Fields of GUPnP-1.0.GUPnP.ContextClass */
    parentClass: GSSDP.ClientClass
    static name: string
}
abstract class ContextManagerClass {
    /* Fields of GUPnP-1.0.GUPnP.ContextManagerClass */
    parentClass: GObject.ObjectClass
    static name: string
}
class ContextManagerPrivate {
    static name: string
}
class ContextPrivate {
    static name: string
}
abstract class ControlPointClass {
    /* Fields of GUPnP-1.0.GUPnP.ControlPointClass */
    parentClass: GSSDP.ResourceBrowserClass
    deviceProxyAvailable: (controlPoint: ControlPoint, proxy: DeviceProxy) => void
    deviceProxyUnavailable: (controlPoint: ControlPoint, proxy: DeviceProxy) => void
    serviceProxyAvailable: (controlPoint: ControlPoint, proxy: ServiceProxy) => void
    serviceProxyUnavailable: (controlPoint: ControlPoint, proxy: ServiceProxy) => void
    static name: string
}
class ControlPointPrivate {
    static name: string
}
abstract class DeviceClass {
    /* Fields of GUPnP-1.0.GUPnP.DeviceClass */
    parentClass: DeviceInfoClass
    static name: string
}
abstract class DeviceInfoClass {
    /* Fields of GUPnP-1.0.GUPnP.DeviceInfoClass */
    parentClass: GObject.ObjectClass
    static name: string
}
class DeviceInfoPrivate {
    static name: string
}
class DevicePrivate {
    static name: string
}
abstract class DeviceProxyClass {
    /* Fields of GUPnP-1.0.GUPnP.DeviceProxyClass */
    parentClass: DeviceInfoClass
    static name: string
}
class DeviceProxyPrivate {
    static name: string
}
abstract class ResourceFactoryClass {
    /* Fields of GUPnP-1.0.GUPnP.ResourceFactoryClass */
    parentClass: GObject.ObjectClass
    static name: string
}
class ResourceFactoryPrivate {
    static name: string
}
abstract class RootDeviceClass {
    /* Fields of GUPnP-1.0.GUPnP.RootDeviceClass */
    parentClass: DeviceClass
    static name: string
}
class RootDevicePrivate {
    static name: string
}
class ServiceAction {
    /* Methods of GUPnP-1.0.GUPnP.ServiceAction */
    /**
     * Get the number of IN arguments from the `action` and return it.
     */
    getArgumentCount(): number
    /**
     * Retrieves the value of `argument` into a GValue of type `type` and returns it.
     * The method exists only and only to satify PyGI, please use
     * gupnp_service_action_get_value() and ignore this if possible.
     * @param argument The name of the argument to retrieve
     * @param type The type of argument to retrieve
     */
    getValue(argument: string, type: GObject.Type): any
    /**
     * Get an ordered (preferred first) #GList of locales preferred by
     * the client. Free list and elements after use.
     */
    getLocales(): string[]
    /**
     * Get the #SoupMessage associated with `action`. Mainly intended for
     * applications to be able to read HTTP headers received from clients.
     */
    getMessage(): Soup.Message
    /**
     * Get the name of `action`.
     */
    getName(): string
    /**
     * A variant of #gupnp_service_action_get that uses #GList instead of varargs.
     * @param argNames A #GList of argument names as string
     * @param argTypes A #GList of argument types as #GType
     */
    getValues(argNames: string[], argTypes: GObject.Type[]): any[]
    /**
     * Return succesfully.
     */
    return(): void
    /**
     * Return `error_code`.
     * @param errorCode The error code
     * @param errorDescription The error description, or %NULL if `error_code` is one of #GUPNP_CONTROL_ERROR_INVALID_ACTION, #GUPNP_CONTROL_ERROR_INVALID_ARGS, #GUPNP_CONTROL_ERROR_OUT_OF_SYNC or #GUPNP_CONTROL_ERROR_ACTION_FAILED, in which case a description is provided automatically.
     */
    returnError(errorCode: number, errorDescription: string): void
    /**
     * Sets the value of `argument` to `value`.
     * @param argument The name of the return value to retrieve
     * @param value The #GValue to store the return value
     */
    setValue(argument: string, value: any): void
    /**
     * Sets the specified action return values.
     * @param argNames A #GList of argument names
     * @param argValues The #GList of values (as #GValues) that line up with `arg_names`.
     */
    setValues(argNames: string[], argValues: any[]): void
    static name: string
}
class ServiceActionArgInfo {
    /* Fields of GUPnP-1.0.GUPnP.ServiceActionArgInfo */
    /**
     * The name of the action argument.
     */
    name: string
    /**
     * The direction of the action argument.
     */
    direction: ServiceActionArgDirection
    /**
     * The name of the state variable associated with this
     * argument.
     */
    relatedStateVariable: string
    /**
     * Whether this argument is the return value of the action.
     */
    retval: boolean
    static name: string
}
class ServiceActionInfo {
    /* Fields of GUPnP-1.0.GUPnP.ServiceActionInfo */
    /**
     * The name of the action argument.
     */
    name: string
    /**
     * A GList of all the arguments
     * (of type #GUPnPServiceActionArgInfo) of this action.
     */
    arguments_: ServiceActionArgInfo[]
    static name: string
}
abstract class ServiceClass {
    /* Fields of GUPnP-1.0.GUPnP.ServiceClass */
    parentClass: ServiceInfoClass
    actionInvoked: (service: Service, action: ServiceAction) => void
    queryVariable: (service: Service, variable: string, value: any) => void
    static name: string
}
abstract class ServiceInfoClass {
    /* Fields of GUPnP-1.0.GUPnP.ServiceInfoClass */
    parentClass: GObject.ObjectClass
    static name: string
}
class ServiceInfoPrivate {
    static name: string
}
abstract class ServiceIntrospectionClass {
    /* Fields of GUPnP-1.0.GUPnP.ServiceIntrospectionClass */
    parentClass: GObject.ObjectClass
    static name: string
}
class ServiceIntrospectionPrivate {
    static name: string
}
class ServicePrivate {
    static name: string
}
class ServiceProxyAction {
    static name: string
}
abstract class ServiceProxyClass {
    /* Fields of GUPnP-1.0.GUPnP.ServiceProxyClass */
    parentClass: ServiceInfoClass
    subscriptionLost: (proxy: ServiceProxy, reason: GLib.Error) => void
    static name: string
}
class ServiceProxyPrivate {
    static name: string
}
class ServiceStateVariableInfo {
    /* Fields of GUPnP-1.0.GUPnP.ServiceStateVariableInfo */
    /**
     * The name of the state variable.
     */
    name: string
    /**
     * Whether this state variable can source events.
     */
    sendEvents: boolean
    /**
     * Wether this state variable is a numeric type (integer and
     * float).
     */
    isNumeric: boolean
    /**
     * The GType of this state variable.
     */
    type: GObject.Type
    /**
     * The default value of this state variable.
     */
    defaultValue: any
    /**
     * The minimum value of this state variable. Only applies to numeric
     * data types.
     */
    minimum: any
    /**
     * The maximum value of this state variable. Only applies to numeric
     * data types.
     */
    maximum: any
    /**
     * The step value of this state variable. Only applies to numeric
     * data types.
     */
    step: any
    /**
     * The allowed values of this state variable. Only applies to
     * string data types. Unlike the other fields in this structure, this field
     * contains a list of (char *) strings rather than GValues.
     */
    allowedValues: string[]
    static name: string
}
abstract class WhiteListClass {
    /* Fields of GUPnP-1.0.GUPnP.WhiteListClass */
    parentClass: GObject.ObjectClass
    static name: string
}
class WhiteListPrivate {
    static name: string
}
abstract class XMLDocClass {
    /* Fields of GUPnP-1.0.GUPnP.XMLDocClass */
    parentClass: GObject.ObjectClass
    static name: string
}
}
export default GUPnP;