/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Jsonrpc-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Jsonrpc {

enum ClientError {
    PARSE_ERROR,
    INVALID_REQUEST,
    METHOD_NOT_FOUND,
    INVALID_PARAMS,
    INTERNAL_ERROR,
}
/**
 * jsonrpc-glib major version component (e.g. 1 if %JSONRPC_VERSION is 1.2.3)
 */
const MAJOR_VERSION: number
/**
 * jsonrpc-glib micro version component (e.g. 3 if %JSONRPC_VERSION is 1.2.3)
 */
const MICRO_VERSION: number
/**
 * jsonrpc-glib minor version component (e.g. 2 if %JSONRPC_VERSION is 1.2.3)
 */
const MINOR_VERSION: number
/**
 * jsonrpc-glib version, encoded as a string, useful for printing and
 * concatenation.
 */
const VERSION_S: string
interface ServerHandler {
    (self: Server, client: Client, method: string, id: GLib.Variant, params: GLib.Variant): void
}
interface Client_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Jsonrpc-1.0.Jsonrpc.Client */
    /**
     * The "io-stream" property is the [class`Gio`.IOStream] to use for communicating
     * with a JSON-RPC peer.
     */
    io_stream?: Gio.IOStream
    /**
     * The "use-gvariant" property denotes if [struct`GLib`.Variant] should be used to
     * communicate with the peer instead of JSON. You should only set this
     * if you know the peer is also a Jsonrpc-GLib based client.
     * 
     * Setting this property allows the peers to communicate using GVariant
     * instead of JSON. This means that we can access the messages without
     * expensive memory allocations and parsing costs associated with JSON.
     * [struct`GLib`.Variant] is much more optimal for memory-bassed message passing.
     */
    use_gvariant?: boolean
}
class Client {
    /* Properties of Jsonrpc-1.0.Jsonrpc.Client */
    /**
     * The "io-stream" property is the [class`Gio`.IOStream] to use for communicating
     * with a JSON-RPC peer.
     */
    readonly io_stream: Gio.IOStream
    /**
     * The "use-gvariant" property denotes if [struct`GLib`.Variant] should be used to
     * communicate with the peer instead of JSON. You should only set this
     * if you know the peer is also a Jsonrpc-GLib based client.
     * 
     * Setting this property allows the peers to communicate using GVariant
     * instead of JSON. This means that we can access the messages without
     * expensive memory allocations and parsing costs associated with JSON.
     * [struct`GLib`.Variant] is much more optimal for memory-bassed message passing.
     */
    use_gvariant: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Jsonrpc-1.0.Jsonrpc.Client */
    /**
     * Synchronously calls `method` with `params` on the remote peer.
     * 
     * once a reply has been received, or failure, this function will return.
     * If successful, `return_value` will be set with the reslut field of
     * the response.
     * 
     * If `params` is floating then this function consumes the reference.
     * @param method The name of the method to call
     * @param params A [struct`GLib`.Variant] of parameters or %NULL
     * @param cancellable A #GCancellable or %NULL
     */
    call(method: string, params?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* return_value */ GLib.Variant | null ]
    /**
     * Asynchronously calls `method` with `params` on the remote peer.
     * 
     * Upon completion or failure, `callback` is executed and it should
     * call [method`Client`.call_finish] to complete the request and release
     * any memory held.
     * 
     * If `params` is floating, the floating reference is consumed.
     * @param method The name of the method to call
     * @param params A [struct`GLib`.Variant] of parameters or %NULL
     * @param cancellable A #GCancellable or %NULL
     * @param callback a callback to executed upon completion
     */
    call_async(method: string, params?: GLib.Variant | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Completes an asynchronous call to [method`Client`.call_async].
     * @param result A #GAsyncResult provided to the callback in [method`Client`.call_async]
     */
    call_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* return_value */ GLib.Variant | null ]
    /**
     * Asynchronously calls `method` with `params` on the remote peer.
     * 
     * Upon completion or failure, `callback` is executed and it should
     * call [method`Client`.call_finish] to complete the request and release
     * any memory held.
     * 
     * This function is similar to [method`Client`.call_async] except that
     * it allows the caller to get the id of the command which might be useful
     * in systems where you can cancel the operation (such as the Language
     * Server Protocol).
     * 
     * If `params` is floating, the floating reference is consumed.
     * @param method The name of the method to call
     * @param params A [struct`GLib`.Variant] of parameters or %NULL
     * @param cancellable A #GCancellable or %NULL
     * @param callback Callback to executed upon completion
     */
    call_with_id_async(method: string, params?: GLib.Variant | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* id */ GLib.Variant | null
    /**
     * Closes the underlying streams and cancels any inflight operations of the
     * #JsonrpcClient.
     * 
     * This is important to call when you are done with the
     * client so that any outstanding operations that have caused `self` to
     * hold additional references are cancelled.
     * 
     * Failure to call this method results in a leak of #JsonrpcClient.
     * @param cancellable 
     */
    close(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Asynchronous version of [method`Client`.close].
     * 
     * Currently this operation is implemented synchronously, but in the future may
     * be converted to using asynchronous operations.
     * @param cancellable 
     * @param callback 
     */
    close_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Completes an asynchronous request of [method`Client`.close_async].
     * @param result 
     */
    close_finish(result: Gio.AsyncResult): boolean
    /**
     * Gets the [property`Client:`use-gvariant] property.
     * 
     * Indicates if [struct`GLib`.Variant] is being used to communicate with the peer.
     */
    get_use_gvariant(): boolean
    /**
     * Synchronous variant of [method`Client`.reply_async].
     * 
     * If `id` or `result` are floating, there floating references are consumed.
     * @param id The id of the message to reply
     * @param result The return value or %NULL
     * @param cancellable A #GCancellable, or %NULL
     */
    reply(id: GLib.Variant, result?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean
    reply_async(id: GLib.Variant, result: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Asynchronously replies to the peer, sending a JSON-RPC error message.
     * 
     * Call [method`Client`.reply_error_finish] to get the result of this operation.
     * 
     * If `id` is floating, it's floating reference is consumed.
     * @param id A [struct`GLib`.Variant] containing the call id
     * @param code The error code
     * @param message An optional error message
     * @param cancellable A #GCancellable, or %NULL
     * @param callback A #GAsyncReadyCallback or %NULL
     */
    reply_error_async(id: GLib.Variant, code: number, message?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    reply_error_finish(result: Gio.AsyncResult): boolean
    /**
     * Completes an asynchronous request to [method`Client`.reply_async].
     * @param result A #GAsyncResult
     */
    reply_finish(result: Gio.AsyncResult): boolean
    /**
     * Synchronously calls `method` with `params` on the remote peer.
     * 
     * This function will not wait or expect a reply from the peer.
     * 
     * If `params` is floating then the reference is consumed.
     * @param method The name of the method to call
     * @param params A [struct`GLib`.Variant] of parameters or %NULL
     * @param cancellable A #GCancellable or %NULL
     */
    send_notification(method: string, params?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Asynchronously calls `method` with `params` on the remote peer.
     * 
     * This function will not wait or expect a reply from the peer.
     * 
     * This function is useful when the caller wants to be notified that
     * the bytes have been delivered to the underlying stream. This does
     * not indicate that the peer has received them.
     * 
     * If `params` is floating then the reference is consumed.
     * @param method The name of the method to call
     * @param params A [struct`GLib`.Variant] of parameters or %NULL
     * @param cancellable A #GCancellable or %NULL
     * @param callback 
     */
    send_notification_async(method: string, params?: GLib.Variant | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Completes an asynchronous call to [method`Client`.send_notification_async].
     * 
     * Successful completion of this function only indicates that the request
     * has been written to the underlying buffer, not that the peer has received
     * the notification.
     * @param result 
     */
    send_notification_finish(result: Gio.AsyncResult): boolean
    /**
     * Sets the [property`Client:`use-gvariant] property.
     * 
     * This function sets if [struct`GLib`.Variant] should be used to communicate with the
     * peer. Doing so can allow for more efficient communication by avoiding
     * expensive parsing overhead and memory allocations. However, it requires
     * that the peer also supports [struct`GLib`.Variant] encoding.
     * @param use_gvariant If [struct`GLib`.Variant] should be used
     */
    set_use_gvariant(use_gvariant: boolean): void
    /**
     * This function requests that client start processing incoming
     * messages from the peer.
     */
    start_listening(): void
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
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
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
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
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
    is_floating(): boolean
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
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
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
    notify_by_pspec(pspec: GObject.ParamSpec): void
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
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
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
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Jsonrpc-1.0.Jsonrpc.Client */
    vfunc_failed(): void
    vfunc_handle_call(method: string, id: GLib.Variant, params: GLib.Variant): boolean
    vfunc_notification(method_name: string, params: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Jsonrpc-1.0.Jsonrpc.Client */
    /**
     * The "failed" signal is called when the client has failed communication
     * or the connection has been knowingly closed.
     */
    connect(sigName: "failed", callback: (($obj: Client) => void)): number
    connect_after(sigName: "failed", callback: (($obj: Client) => void)): number
    emit(sigName: "failed"): void
    /**
     * This signal is emitted when an RPC has been received from the peer we
     * are connected to. Return %TRUE if you have handled this message, even
     * asynchronously. If no handler has returned %TRUE an error will be
     * synthesized.
     * 
     * If you handle the message, you are responsible for replying to the peer
     * in a timely manner using [method`Client`.reply] or [method`Client`.reply_async].
     * 
     * Additionally, since 3.28 you may connect to the "detail" of this signal
     * to handle a specific method call. Use the method name as the detail of
     * the signal.
     * @param method The method name
     * @param id The "id" field of the JSONRPC message
     * @param params The "params" field of the JSONRPC message
     */
    connect(sigName: "handle-call", callback: (($obj: Client, method: string, id: GLib.Variant, params?: GLib.Variant | null) => boolean)): number
    connect_after(sigName: "handle-call", callback: (($obj: Client, method: string, id: GLib.Variant, params?: GLib.Variant | null) => boolean)): number
    emit(sigName: "handle-call", method: string, id: GLib.Variant, params?: GLib.Variant | null): void
    /**
     * This signal is emitted when a notification has been received from a
     * peer. Unlike [signal`Client:`:handle-call], this does not have an "id"
     * parameter because notifications do not have ids. They do not round
     * trip.
     * @param method The method name of the notification
     * @param params Params for the notification
     */
    connect(sigName: "notification", callback: (($obj: Client, method: string, params?: GLib.Variant | null) => void)): number
    connect_after(sigName: "notification", callback: (($obj: Client, method: string, params?: GLib.Variant | null) => void)): number
    emit(sigName: "notification", method: string, params?: GLib.Variant | null): void
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
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::io-stream", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::io-stream", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::use-gvariant", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-gvariant", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(io_stream: Gio.IOStream): Client
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
interface InputStream_ConstructProps extends Gio.DataInputStream_ConstructProps {
}
class InputStream {
    /* Properties of Gio-2.0.Gio.DataInputStream */
    /**
     * The :byte-order property determines the byte ordering that
     * is used when reading multi-byte entities (such as integers)
     * from the stream.
     */
    byte_order: Gio.DataStreamByteOrder
    /**
     * The :newline-type property determines what is considered
     * as a line ending when reading complete lines from the stream.
     */
    newline_type: Gio.DataStreamNewlineType
    /* Properties of Gio-2.0.Gio.BufferedInputStream */
    buffer_size: number
    /* Properties of Gio-2.0.Gio.FilterInputStream */
    close_base_stream: boolean
    /* Fields of Gio-2.0.Gio.DataInputStream */
    parent_instance: Gio.BufferedInputStream
    /* Fields of Gio-2.0.Gio.FilterInputStream */
    base_stream: Gio.InputStream
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Jsonrpc-1.0.Jsonrpc.InputStream */
    read_message(cancellable: Gio.Cancellable | null, message: GLib.Variant): boolean
    read_message_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    read_message_finish(result: Gio.AsyncResult, message: GLib.Variant): boolean
    /* Methods of Gio-2.0.Gio.DataInputStream */
    /**
     * Gets the byte order for the data input stream.
     */
    get_byte_order(): Gio.DataStreamByteOrder
    /**
     * Gets the current newline type for the `stream`.
     */
    get_newline_type(): Gio.DataStreamNewlineType
    /**
     * Reads an unsigned 8-bit/1-byte value from `stream`.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    read_byte(cancellable?: Gio.Cancellable | null): number
    /**
     * Reads a 16-bit/2-byte value from `stream`.
     * 
     * In order to get the correct byte order for this read operation,
     * see g_data_input_stream_get_byte_order() and g_data_input_stream_set_byte_order().
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    read_int16(cancellable?: Gio.Cancellable | null): number
    /**
     * Reads a signed 32-bit/4-byte value from `stream`.
     * 
     * In order to get the correct byte order for this read operation,
     * see g_data_input_stream_get_byte_order() and g_data_input_stream_set_byte_order().
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    read_int32(cancellable?: Gio.Cancellable | null): number
    /**
     * Reads a 64-bit/8-byte value from `stream`.
     * 
     * In order to get the correct byte order for this read operation,
     * see g_data_input_stream_get_byte_order() and g_data_input_stream_set_byte_order().
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    read_int64(cancellable?: Gio.Cancellable | null): number
    /**
     * Reads a line from the data input stream.  Note that no encoding
     * checks or conversion is performed; the input is not guaranteed to
     * be UTF-8, and may in fact have embedded NUL characters.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    read_line(cancellable?: Gio.Cancellable | null): [ /* returnType */ Uint8Array | null, /* length */ number | null ]
    /**
     * The asynchronous version of g_data_input_stream_read_line().  It is
     * an error to have two outstanding calls to this function.
     * 
     * When the operation is finished, `callback` will be called. You
     * can then call g_data_input_stream_read_line_finish() to get
     * the result of the operation.
     * @param io_priority the [I/O priority][io-priority] of the request
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback callback to call when the request is satisfied.
     */
    read_line_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous call started by
     * g_data_input_stream_read_line_async().  Note the warning about
     * string encoding in g_data_input_stream_read_line() applies here as
     * well.
     * @param result the #GAsyncResult that was provided to the callback.
     */
    read_line_finish(result: Gio.AsyncResult): [ /* returnType */ Uint8Array | null, /* length */ number | null ]
    /**
     * Finish an asynchronous call started by
     * g_data_input_stream_read_line_async().
     * @param result the #GAsyncResult that was provided to the callback.
     */
    read_line_finish_utf8(result: Gio.AsyncResult): [ /* returnType */ string | null, /* length */ number | null ]
    /**
     * Reads a UTF-8 encoded line from the data input stream.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    read_line_utf8(cancellable?: Gio.Cancellable | null): [ /* returnType */ string | null, /* length */ number | null ]
    /**
     * Reads an unsigned 16-bit/2-byte value from `stream`.
     * 
     * In order to get the correct byte order for this read operation,
     * see g_data_input_stream_get_byte_order() and g_data_input_stream_set_byte_order().
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    read_uint16(cancellable?: Gio.Cancellable | null): number
    /**
     * Reads an unsigned 32-bit/4-byte value from `stream`.
     * 
     * In order to get the correct byte order for this read operation,
     * see g_data_input_stream_get_byte_order() and g_data_input_stream_set_byte_order().
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    read_uint32(cancellable?: Gio.Cancellable | null): number
    /**
     * Reads an unsigned 64-bit/8-byte value from `stream`.
     * 
     * In order to get the correct byte order for this read operation,
     * see g_data_input_stream_get_byte_order().
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    read_uint64(cancellable?: Gio.Cancellable | null): number
    /**
     * Reads a string from the data input stream, up to the first
     * occurrence of any of the stop characters.
     * 
     * Note that, in contrast to g_data_input_stream_read_until_async(),
     * this function consumes the stop character that it finds.
     * 
     * Don't use this function in new code.  Its functionality is
     * inconsistent with g_data_input_stream_read_until_async().  Both
     * functions will be marked as deprecated in a future release.  Use
     * g_data_input_stream_read_upto() instead, but note that that function
     * does not consume the stop character.
     * @param stop_chars characters to terminate the read.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    read_until(stop_chars: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ string, /* length */ number | null ]
    /**
     * The asynchronous version of g_data_input_stream_read_until().
     * It is an error to have two outstanding calls to this function.
     * 
     * Note that, in contrast to g_data_input_stream_read_until(),
     * this function does not consume the stop character that it finds.  You
     * must read it for yourself.
     * 
     * When the operation is finished, `callback` will be called. You
     * can then call g_data_input_stream_read_until_finish() to get
     * the result of the operation.
     * 
     * Don't use this function in new code.  Its functionality is
     * inconsistent with g_data_input_stream_read_until().  Both functions
     * will be marked as deprecated in a future release.  Use
     * g_data_input_stream_read_upto_async() instead.
     * @param stop_chars characters to terminate the read.
     * @param io_priority the [I/O priority][io-priority] of the request
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback callback to call when the request is satisfied.
     */
    read_until_async(stop_chars: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous call started by
     * g_data_input_stream_read_until_async().
     * @param result the #GAsyncResult that was provided to the callback.
     */
    read_until_finish(result: Gio.AsyncResult): [ /* returnType */ string, /* length */ number | null ]
    /**
     * Reads a string from the data input stream, up to the first
     * occurrence of any of the stop characters.
     * 
     * In contrast to g_data_input_stream_read_until(), this function
     * does not consume the stop character. You have to use
     * g_data_input_stream_read_byte() to get it before calling
     * g_data_input_stream_read_upto() again.
     * 
     * Note that `stop_chars` may contain '\0' if `stop_chars_len` is
     * specified.
     * 
     * The returned string will always be nul-terminated on success.
     * @param stop_chars characters to terminate the read
     * @param stop_chars_len length of `stop_chars`. May be -1 if `stop_chars` is     nul-terminated
     * @param cancellable optional #GCancellable object, %NULL to ignore
     */
    read_upto(stop_chars: string, stop_chars_len: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ string, /* length */ number | null ]
    /**
     * The asynchronous version of g_data_input_stream_read_upto().
     * It is an error to have two outstanding calls to this function.
     * 
     * In contrast to g_data_input_stream_read_until(), this function
     * does not consume the stop character. You have to use
     * g_data_input_stream_read_byte() to get it before calling
     * g_data_input_stream_read_upto() again.
     * 
     * Note that `stop_chars` may contain '\0' if `stop_chars_len` is
     * specified.
     * 
     * When the operation is finished, `callback` will be called. You
     * can then call g_data_input_stream_read_upto_finish() to get
     * the result of the operation.
     * @param stop_chars characters to terminate the read
     * @param stop_chars_len length of `stop_chars`. May be -1 if `stop_chars` is     nul-terminated
     * @param io_priority the [I/O priority][io-priority] of the request
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param callback callback to call when the request is satisfied
     */
    read_upto_async(stop_chars: string, stop_chars_len: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous call started by
     * g_data_input_stream_read_upto_async().
     * 
     * Note that this function does not consume the stop character. You
     * have to use g_data_input_stream_read_byte() to get it before calling
     * g_data_input_stream_read_upto_async() again.
     * 
     * The returned string will always be nul-terminated on success.
     * @param result the #GAsyncResult that was provided to the callback
     */
    read_upto_finish(result: Gio.AsyncResult): [ /* returnType */ string, /* length */ number | null ]
    /**
     * This function sets the byte order for the given `stream`. All subsequent
     * reads from the `stream` will be read in the given `order`.
     * @param order a #GDataStreamByteOrder to set.
     */
    set_byte_order(order: Gio.DataStreamByteOrder): void
    /**
     * Sets the newline type for the `stream`.
     * 
     * Note that using G_DATA_STREAM_NEWLINE_TYPE_ANY is slightly unsafe. If a read
     * chunk ends in "CR" we must read an additional byte to know if this is "CR" or
     * "CR LF", and this might block if there is no more data available.
     * @param type the type of new line return as #GDataStreamNewlineType.
     */
    set_newline_type(type: Gio.DataStreamNewlineType): void
    /* Methods of Gio-2.0.Gio.BufferedInputStream */
    /**
     * Tries to read `count` bytes from the stream into the buffer.
     * Will block during this read.
     * 
     * If `count` is zero, returns zero and does nothing. A value of `count`
     * larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, the number of bytes read into the buffer is returned.
     * It is not an error if this is not the same as the requested size, as it
     * can happen e.g. near the end of a file. Zero is returned on end of file
     * (or if `count` is zero),  but never otherwise.
     * 
     * If `count` is -1 then the attempted read size is equal to the number of
     * bytes that are required to fill the buffer.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     * 
     * On error -1 is returned and `error` is set accordingly.
     * 
     * For the asynchronous, non-blocking, version of this function, see
     * g_buffered_input_stream_fill_async().
     * @param count the number of bytes that will be read from the stream
     * @param cancellable optional #GCancellable object, %NULL to ignore
     */
    fill(count: number, cancellable?: Gio.Cancellable | null): number
    /**
     * Reads data into `stream'`s buffer asynchronously, up to `count` size.
     * `io_priority` can be used to prioritize reads. For the synchronous
     * version of this function, see g_buffered_input_stream_fill().
     * 
     * If `count` is -1 then the attempted read size is equal to the number
     * of bytes that are required to fill the buffer.
     * @param count the number of bytes that will be read from the stream
     * @param io_priority the [I/O priority][io-priority] of the request
     * @param cancellable optional #GCancellable object
     * @param callback a #GAsyncReadyCallback
     */
    fill_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous read.
     * @param result a #GAsyncResult
     */
    fill_finish(result: Gio.AsyncResult): number
    /**
     * Gets the size of the available data within the stream.
     */
    get_available(): number
    /**
     * Gets the size of the input buffer.
     */
    get_buffer_size(): number
    /**
     * Peeks in the buffer, copying data of size `count` into `buffer,`
     * offset `offset` bytes.
     * @param buffer a pointer to   an allocated chunk of memory
     * @param offset a #gsize
     */
    peek(buffer: Uint8Array, offset: number): number
    /**
     * Returns the buffer with the currently available bytes. The returned
     * buffer must not be modified and will become invalid when reading from
     * the stream or filling the buffer.
     */
    peek_buffer(): Uint8Array
    /**
     * Tries to read a single byte from the stream or the buffer. Will block
     * during this read.
     * 
     * On success, the byte read from the stream is returned. On end of stream
     * -1 is returned but it's not an exceptional error and `error` is not set.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     * 
     * On error -1 is returned and `error` is set accordingly.
     * @param cancellable optional #GCancellable object, %NULL to ignore
     */
    read_byte(cancellable?: Gio.Cancellable | null): number
    /**
     * Sets the size of the internal buffer of `stream` to `size,` or to the
     * size of the contents of the buffer. The buffer can never be resized
     * smaller than its current contents.
     * @param size a #gsize
     */
    set_buffer_size(size: number): void
    /* Methods of Gio-2.0.Gio.FilterInputStream */
    /**
     * Gets the base stream for the filter stream.
     */
    get_base_stream(): Gio.InputStream
    /**
     * Returns whether the base stream will be closed when `stream` is
     * closed.
     */
    get_close_base_stream(): boolean
    /**
     * Sets whether the base stream will be closed when `stream` is closed.
     * @param close_base %TRUE to close the base stream.
     */
    set_close_base_stream(close_base: boolean): void
    /* Methods of Gio-2.0.Gio.InputStream */
    /**
     * Clears the pending flag on `stream`.
     */
    clear_pending(): void
    /**
     * Closes the stream, releasing resources related to it.
     * 
     * Once the stream is closed, all other operations will return %G_IO_ERROR_CLOSED.
     * Closing a stream multiple times will not return an error.
     * 
     * Streams will be automatically closed when the last reference
     * is dropped, but you might want to call this function to make sure
     * resources are released as early as possible.
     * 
     * Some streams might keep the backing store of the stream (e.g. a file descriptor)
     * open after the stream is closed. See the documentation for the individual
     * stream for details.
     * 
     * On failure the first error that happened will be reported, but the close
     * operation will finish as much as possible. A stream that failed to
     * close will still return %G_IO_ERROR_CLOSED for all operations. Still, it
     * is important to check and report the error to the user.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * Cancelling a close will still leave the stream closed, but some streams
     * can use a faster close that doesn't block to e.g. check errors.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    close(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Requests an asynchronous closes of the stream, releasing resources related to it.
     * When the operation is finished `callback` will be called.
     * You can then call g_input_stream_close_finish() to get the result of the
     * operation.
     * 
     * For behaviour details see g_input_stream_close().
     * 
     * The asynchronous methods have a default fallback that uses threads to implement
     * asynchronicity, so they are optional for inheriting classes. However, if you
     * override one you must override all.
     * @param io_priority the [I/O priority][io-priority] of the request
     * @param cancellable optional cancellable object
     * @param callback callback to call when the request is satisfied
     */
    close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes closing a stream asynchronously, started from g_input_stream_close_async().
     * @param result a #GAsyncResult.
     */
    close_finish(result: Gio.AsyncResult): boolean
    /**
     * Checks if an input stream has pending actions.
     */
    has_pending(): boolean
    /**
     * Checks if an input stream is closed.
     */
    is_closed(): boolean
    /**
     * Tries to read `count` bytes from the stream into the buffer starting at
     * `buffer`. Will block during this read.
     * 
     * If count is zero returns zero and does nothing. A value of `count`
     * larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, the number of bytes read into the buffer is returned.
     * It is not an error if this is not the same as the requested size, as it
     * can happen e.g. near the end of a file. Zero is returned on end of file
     * (or if `count` is zero),  but never otherwise.
     * 
     * The returned `buffer` is not a nul-terminated string, it can contain nul bytes
     * at any position, and this function doesn't nul-terminate the `buffer`.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     * 
     * On error -1 is returned and `error` is set accordingly.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    read(cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array ]
    /**
     * Tries to read `count` bytes from the stream into the buffer starting at
     * `buffer`. Will block during this read.
     * 
     * This function is similar to g_input_stream_read(), except it tries to
     * read as many bytes as requested, only stopping on an error or end of stream.
     * 
     * On a successful read of `count` bytes, or if we reached the end of the
     * stream,  %TRUE is returned, and `bytes_read` is set to the number of bytes
     * read into `buffer`.
     * 
     * If there is an error during the operation %FALSE is returned and `error`
     * is set to indicate the error status.
     * 
     * As a special exception to the normal conventions for functions that
     * use #GError, if this function returns %FALSE (and sets `error)` then
     * `bytes_read` will be set to the number of bytes that were successfully
     * read before the error was encountered.  This functionality is only
     * available from C.  If you need it from another language then you must
     * write your own loop around g_input_stream_read().
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    read_all(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* buffer */ Uint8Array, /* bytes_read */ number ]
    /**
     * Request an asynchronous read of `count` bytes from the stream into the
     * buffer starting at `buffer`.
     * 
     * This is the asynchronous equivalent of g_input_stream_read_all().
     * 
     * Call g_input_stream_read_all_finish() to collect the result.
     * 
     * Any outstanding I/O request with higher priority (lower numerical
     * value) will be executed before an outstanding request with lower
     * priority. Default priority is %G_PRIORITY_DEFAULT.
     * @param io_priority the [I/O priority][io-priority] of the request
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param callback callback to call when the request is satisfied
     */
    read_all_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array
    /**
     * Finishes an asynchronous stream read operation started with
     * g_input_stream_read_all_async().
     * 
     * As a special exception to the normal conventions for functions that
     * use #GError, if this function returns %FALSE (and sets `error)` then
     * `bytes_read` will be set to the number of bytes that were successfully
     * read before the error was encountered.  This functionality is only
     * available from C.  If you need it from another language then you must
     * write your own loop around g_input_stream_read_async().
     * @param result a #GAsyncResult
     */
    read_all_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    /**
     * Request an asynchronous read of `count` bytes from the stream into the buffer
     * starting at `buffer`. When the operation is finished `callback` will be called.
     * You can then call g_input_stream_read_finish() to get the result of the
     * operation.
     * 
     * During an async request no other sync and async calls are allowed on `stream,` and will
     * result in %G_IO_ERROR_PENDING errors.
     * 
     * A value of `count` larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, the number of bytes read into the buffer will be passed to the
     * callback. It is not an error if this is not the same as the requested size, as it
     * can happen e.g. near the end of a file, but generally we try to read
     * as many bytes as requested. Zero is returned on end of file
     * (or if `count` is zero),  but never otherwise.
     * 
     * Any outstanding i/o request with higher priority (lower numerical value) will
     * be executed before an outstanding request with lower priority. Default
     * priority is %G_PRIORITY_DEFAULT.
     * 
     * The asynchronous methods have a default fallback that uses threads to implement
     * asynchronicity, so they are optional for inheriting classes. However, if you
     * override one you must override all.
     * @param io_priority the [I/O priority][io-priority] of the request.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback callback to call when the request is satisfied
     */
    read_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array
    /**
     * Like g_input_stream_read(), this tries to read `count` bytes from
     * the stream in a blocking fashion. However, rather than reading into
     * a user-supplied buffer, this will create a new #GBytes containing
     * the data that was read. This may be easier to use from language
     * bindings.
     * 
     * If count is zero, returns a zero-length #GBytes and does nothing. A
     * value of `count` larger than %G_MAXSSIZE will cause a
     * %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, a new #GBytes is returned. It is not an error if the
     * size of this object is not the same as the requested size, as it
     * can happen e.g. near the end of a file. A zero-length #GBytes is
     * returned on end of file (or if `count` is zero), but never
     * otherwise.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     * 
     * On error %NULL is returned and `error` is set accordingly.
     * @param count maximum number of bytes that will be read from the stream. Common values include 4096 and 8192.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    read_bytes(count: number, cancellable?: Gio.Cancellable | null): GLib.Bytes
    /**
     * Request an asynchronous read of `count` bytes from the stream into a
     * new #GBytes. When the operation is finished `callback` will be
     * called. You can then call g_input_stream_read_bytes_finish() to get the
     * result of the operation.
     * 
     * During an async request no other sync and async calls are allowed
     * on `stream,` and will result in %G_IO_ERROR_PENDING errors.
     * 
     * A value of `count` larger than %G_MAXSSIZE will cause a
     * %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, the new #GBytes will be passed to the callback. It is
     * not an error if this is smaller than the requested size, as it can
     * happen e.g. near the end of a file, but generally we try to read as
     * many bytes as requested. Zero is returned on end of file (or if
     * `count` is zero), but never otherwise.
     * 
     * Any outstanding I/O request with higher priority (lower numerical
     * value) will be executed before an outstanding request with lower
     * priority. Default priority is %G_PRIORITY_DEFAULT.
     * @param count the number of bytes that will be read from the stream
     * @param io_priority the [I/O priority][io-priority] of the request
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback callback to call when the request is satisfied
     */
    read_bytes_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous stream read-into-#GBytes operation.
     * @param result a #GAsyncResult.
     */
    read_bytes_finish(result: Gio.AsyncResult): GLib.Bytes
    /**
     * Finishes an asynchronous stream read operation.
     * @param result a #GAsyncResult.
     */
    read_finish(result: Gio.AsyncResult): number
    /**
     * Sets `stream` to have actions pending. If the pending flag is
     * already set or `stream` is closed, it will return %FALSE and set
     * `error`.
     */
    set_pending(): boolean
    /**
     * Tries to skip `count` bytes from the stream. Will block during the operation.
     * 
     * This is identical to g_input_stream_read(), from a behaviour standpoint,
     * but the bytes that are skipped are not returned to the user. Some
     * streams have an implementation that is more efficient than reading the data.
     * 
     * This function is optional for inherited classes, as the default implementation
     * emulates it using read.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     * @param count the number of bytes that will be skipped from the stream
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    /**
     * Request an asynchronous skip of `count` bytes from the stream.
     * When the operation is finished `callback` will be called.
     * You can then call g_input_stream_skip_finish() to get the result
     * of the operation.
     * 
     * During an async request no other sync and async calls are allowed,
     * and will result in %G_IO_ERROR_PENDING errors.
     * 
     * A value of `count` larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, the number of bytes skipped will be passed to the callback.
     * It is not an error if this is not the same as the requested size, as it
     * can happen e.g. near the end of a file, but generally we try to skip
     * as many bytes as requested. Zero is returned on end of file
     * (or if `count` is zero), but never otherwise.
     * 
     * Any outstanding i/o request with higher priority (lower numerical value)
     * will be executed before an outstanding request with lower priority.
     * Default priority is %G_PRIORITY_DEFAULT.
     * 
     * The asynchronous methods have a default fallback that uses threads to
     * implement asynchronicity, so they are optional for inheriting classes.
     * However, if you override one, you must override all.
     * @param count the number of bytes that will be skipped from the stream
     * @param io_priority the [I/O priority][io-priority] of the request
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback callback to call when the request is satisfied
     */
    skip_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a stream skip operation.
     * @param result a #GAsyncResult.
     */
    skip_finish(result: Gio.AsyncResult): number
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
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
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
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
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
    is_floating(): boolean
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
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
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
    notify_by_pspec(pspec: GObject.ParamSpec): void
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
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
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
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
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
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Seekable */
    /**
     * Tests if the stream supports the #GSeekableIface.
     */
    can_seek(): boolean
    /**
     * Tests if the length of the stream can be adjusted with
     * g_seekable_truncate().
     */
    can_truncate(): boolean
    /**
     * Seeks in the stream by the given `offset,` modified by `type`.
     * 
     * Attempting to seek past the end of the stream will have different
     * results depending on if the stream is fixed-sized or resizable.  If
     * the stream is resizable then seeking past the end and then writing
     * will result in zeros filling the empty space.  Seeking past the end
     * of a resizable stream and reading will result in EOF.  Seeking past
     * the end of a fixed-sized stream will fail.
     * 
     * Any operation that would result in a negative offset will fail.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * @param offset a #goffset.
     * @param type a #GSeekType.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Tells the current position within the stream.
     */
    tell(): number
    /**
     * Sets the length of the stream to `offset`. If the stream was previously
     * larger than `offset,` the extra data is discarded. If the stream was
     * previously shorter than `offset,` it is extended with NUL ('\0') bytes.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     * @param offset new length for `seekable,` in bytes.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Jsonrpc-1.0.Jsonrpc.InputStream */
    /**
     * Tests if the stream supports the #GSeekableIface.
     */
    vfunc_can_seek(): boolean
    /**
     * Tests if the length of the stream can be adjusted with
     * g_seekable_truncate().
     */
    vfunc_can_truncate(): boolean
    /**
     * Seeks in the stream by the given `offset,` modified by `type`.
     * 
     * Attempting to seek past the end of the stream will have different
     * results depending on if the stream is fixed-sized or resizable.  If
     * the stream is resizable then seeking past the end and then writing
     * will result in zeros filling the empty space.  Seeking past the end
     * of a resizable stream and reading will result in EOF.  Seeking past
     * the end of a fixed-sized stream will fail.
     * 
     * Any operation that would result in a negative offset will fail.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * @param offset a #goffset.
     * @param type a #GSeekType.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Tells the current position within the stream.
     */
    vfunc_tell(): number
    /**
     * Sets the length of the stream to `offset`. If the stream was previously
     * larger than `offset,` the extra data is discarded. If the stream was
     * previously shorter than `offset,` it is extended with NUL ('\0') bytes.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     * @param offset new length for `seekable,` in bytes.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio-2.0.Gio.BufferedInputStream */
    /**
     * Tries to read `count` bytes from the stream into the buffer.
     * Will block during this read.
     * 
     * If `count` is zero, returns zero and does nothing. A value of `count`
     * larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, the number of bytes read into the buffer is returned.
     * It is not an error if this is not the same as the requested size, as it
     * can happen e.g. near the end of a file. Zero is returned on end of file
     * (or if `count` is zero),  but never otherwise.
     * 
     * If `count` is -1 then the attempted read size is equal to the number of
     * bytes that are required to fill the buffer.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     * 
     * On error -1 is returned and `error` is set accordingly.
     * 
     * For the asynchronous, non-blocking, version of this function, see
     * g_buffered_input_stream_fill_async().
     * @param count the number of bytes that will be read from the stream
     * @param cancellable optional #GCancellable object, %NULL to ignore
     */
    vfunc_fill(count: number, cancellable?: Gio.Cancellable | null): number
    /**
     * Reads data into `stream'`s buffer asynchronously, up to `count` size.
     * `io_priority` can be used to prioritize reads. For the synchronous
     * version of this function, see g_buffered_input_stream_fill().
     * 
     * If `count` is -1 then the attempted read size is equal to the number
     * of bytes that are required to fill the buffer.
     * @param count the number of bytes that will be read from the stream
     * @param io_priority the [I/O priority][io-priority] of the request
     * @param cancellable optional #GCancellable object
     * @param callback a #GAsyncReadyCallback
     */
    vfunc_fill_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous read.
     * @param result a #GAsyncResult
     */
    vfunc_fill_finish(result: Gio.AsyncResult): number
    /* Virtual methods of Gio-2.0.Gio.InputStream */
    /**
     * Requests an asynchronous closes of the stream, releasing resources related to it.
     * When the operation is finished `callback` will be called.
     * You can then call g_input_stream_close_finish() to get the result of the
     * operation.
     * 
     * For behaviour details see g_input_stream_close().
     * 
     * The asynchronous methods have a default fallback that uses threads to implement
     * asynchronicity, so they are optional for inheriting classes. However, if you
     * override one you must override all.
     * @param io_priority the [I/O priority][io-priority] of the request
     * @param cancellable optional cancellable object
     * @param callback callback to call when the request is satisfied
     */
    vfunc_close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes closing a stream asynchronously, started from g_input_stream_close_async().
     * @param result a #GAsyncResult.
     */
    vfunc_close_finish(result: Gio.AsyncResult): boolean
    vfunc_close_fn(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Request an asynchronous read of `count` bytes from the stream into the buffer
     * starting at `buffer`. When the operation is finished `callback` will be called.
     * You can then call g_input_stream_read_finish() to get the result of the
     * operation.
     * 
     * During an async request no other sync and async calls are allowed on `stream,` and will
     * result in %G_IO_ERROR_PENDING errors.
     * 
     * A value of `count` larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, the number of bytes read into the buffer will be passed to the
     * callback. It is not an error if this is not the same as the requested size, as it
     * can happen e.g. near the end of a file, but generally we try to read
     * as many bytes as requested. Zero is returned on end of file
     * (or if `count` is zero),  but never otherwise.
     * 
     * Any outstanding i/o request with higher priority (lower numerical value) will
     * be executed before an outstanding request with lower priority. Default
     * priority is %G_PRIORITY_DEFAULT.
     * 
     * The asynchronous methods have a default fallback that uses threads to implement
     * asynchronicity, so they are optional for inheriting classes. However, if you
     * override one you must override all.
     * @param io_priority the [I/O priority][io-priority] of the request.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback callback to call when the request is satisfied
     */
    vfunc_read_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array | null
    /**
     * Finishes an asynchronous stream read operation.
     * @param result a #GAsyncResult.
     */
    vfunc_read_finish(result: Gio.AsyncResult): number
    vfunc_read_fn(buffer: object | null, count: number, cancellable?: Gio.Cancellable | null): number
    /**
     * Tries to skip `count` bytes from the stream. Will block during the operation.
     * 
     * This is identical to g_input_stream_read(), from a behaviour standpoint,
     * but the bytes that are skipped are not returned to the user. Some
     * streams have an implementation that is more efficient than reading the data.
     * 
     * This function is optional for inherited classes, as the default implementation
     * emulates it using read.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     * @param count the number of bytes that will be skipped from the stream
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    vfunc_skip(count: number, cancellable?: Gio.Cancellable | null): number
    /**
     * Request an asynchronous skip of `count` bytes from the stream.
     * When the operation is finished `callback` will be called.
     * You can then call g_input_stream_skip_finish() to get the result
     * of the operation.
     * 
     * During an async request no other sync and async calls are allowed,
     * and will result in %G_IO_ERROR_PENDING errors.
     * 
     * A value of `count` larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, the number of bytes skipped will be passed to the callback.
     * It is not an error if this is not the same as the requested size, as it
     * can happen e.g. near the end of a file, but generally we try to skip
     * as many bytes as requested. Zero is returned on end of file
     * (or if `count` is zero), but never otherwise.
     * 
     * Any outstanding i/o request with higher priority (lower numerical value)
     * will be executed before an outstanding request with lower priority.
     * Default priority is %G_PRIORITY_DEFAULT.
     * 
     * The asynchronous methods have a default fallback that uses threads to
     * implement asynchronicity, so they are optional for inheriting classes.
     * However, if you override one, you must override all.
     * @param count the number of bytes that will be skipped from the stream
     * @param io_priority the [I/O priority][io-priority] of the request
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback callback to call when the request is satisfied
     */
    vfunc_skip_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a stream skip operation.
     * @param result a #GAsyncResult.
     */
    vfunc_skip_finish(result: Gio.AsyncResult): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
    connect(sigName: "notify", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::byte-order", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::byte-order", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::newline-type", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::newline-type", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::buffer-size", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-size", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::close-base-stream", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-base-stream", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InputStream_ConstructProps)
    _init (config?: InputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(base_stream: Gio.InputStream): InputStream
    /* Function overloads */
    static new(base_stream: Gio.InputStream): InputStream
    static new(base_stream: Gio.InputStream): InputStream
    static $gtype: GObject.Type
}
interface OutputStream_ConstructProps extends Gio.DataOutputStream_ConstructProps {
    /* Constructor properties of Jsonrpc-1.0.Jsonrpc.OutputStream */
    use_gvariant?: boolean
}
class OutputStream {
    /* Properties of Jsonrpc-1.0.Jsonrpc.OutputStream */
    use_gvariant: boolean
    /* Properties of Gio-2.0.Gio.DataOutputStream */
    /**
     * Determines the byte ordering that is used when writing
     * multi-byte entities (such as integers) to the stream.
     */
    byte_order: Gio.DataStreamByteOrder
    /* Properties of Gio-2.0.Gio.FilterOutputStream */
    readonly close_base_stream: boolean
    /* Fields of Gio-2.0.Gio.DataOutputStream */
    parent_instance: Gio.FilterOutputStream
    /* Fields of Gio-2.0.Gio.FilterOutputStream */
    base_stream: Gio.OutputStream
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Jsonrpc-1.0.Jsonrpc.OutputStream */
    get_use_gvariant(): boolean
    set_use_gvariant(use_gvariant: boolean): void
    /**
     * Synchronously sends a message to the peer.
     * 
     * This operation will complete once the message has been buffered. There
     * is no guarantee the peer received it.
     * @param message a #GVariant
     * @param cancellable a #GCancellable or %NULL
     */
    write_message(message: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Asynchronously sends a message to the peer.
     * 
     * This asynchronous operation will complete once the message has
     * been buffered, and there is no guarantee the peer received it.
     * @param message a #GVariant
     * @param cancellable a #GCancellable or %NULL
     * @param callback a #GAsyncReadyCallback or %NULL
     */
    write_message_async(message: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_message_finish(result: Gio.AsyncResult): boolean
    /* Methods of Gio-2.0.Gio.DataOutputStream */
    /**
     * Gets the byte order for the stream.
     */
    get_byte_order(): Gio.DataStreamByteOrder
    /**
     * Puts a byte into the output stream.
     * @param data a #guchar.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    put_byte(data: number, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Puts a signed 16-bit integer into the output stream.
     * @param data a #gint16.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    put_int16(data: number, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Puts a signed 32-bit integer into the output stream.
     * @param data a #gint32.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    put_int32(data: number, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Puts a signed 64-bit integer into the stream.
     * @param data a #gint64.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    put_int64(data: number, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Puts a string into the output stream.
     * @param str a string.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    put_string(str: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Puts an unsigned 16-bit integer into the output stream.
     * @param data a #guint16.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    put_uint16(data: number, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Puts an unsigned 32-bit integer into the stream.
     * @param data a #guint32.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    put_uint32(data: number, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Puts an unsigned 64-bit integer into the stream.
     * @param data a #guint64.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    put_uint64(data: number, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets the byte order of the data output stream to `order`.
     * @param order a %GDataStreamByteOrder.
     */
    set_byte_order(order: Gio.DataStreamByteOrder): void
    /* Methods of Gio-2.0.Gio.FilterOutputStream */
    /**
     * Gets the base stream for the filter stream.
     */
    get_base_stream(): Gio.OutputStream
    /**
     * Returns whether the base stream will be closed when `stream` is
     * closed.
     */
    get_close_base_stream(): boolean
    /**
     * Sets whether the base stream will be closed when `stream` is closed.
     * @param close_base %TRUE to close the base stream.
     */
    set_close_base_stream(close_base: boolean): void
    /* Methods of Gio-2.0.Gio.OutputStream */
    /**
     * Clears the pending flag on `stream`.
     */
    clear_pending(): void
    /**
     * Closes the stream, releasing resources related to it.
     * 
     * Once the stream is closed, all other operations will return %G_IO_ERROR_CLOSED.
     * Closing a stream multiple times will not return an error.
     * 
     * Closing a stream will automatically flush any outstanding buffers in the
     * stream.
     * 
     * Streams will be automatically closed when the last reference
     * is dropped, but you might want to call this function to make sure
     * resources are released as early as possible.
     * 
     * Some streams might keep the backing store of the stream (e.g. a file descriptor)
     * open after the stream is closed. See the documentation for the individual
     * stream for details.
     * 
     * On failure the first error that happened will be reported, but the close
     * operation will finish as much as possible. A stream that failed to
     * close will still return %G_IO_ERROR_CLOSED for all operations. Still, it
     * is important to check and report the error to the user, otherwise
     * there might be a loss of data as all data might not be written.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * Cancelling a close will still leave the stream closed, but there some streams
     * can use a faster close that doesn't block to e.g. check errors. On
     * cancellation (as with any error) there is no guarantee that all written
     * data will reach the target.
     * @param cancellable optional cancellable object
     */
    close(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Requests an asynchronous close of the stream, releasing resources
     * related to it. When the operation is finished `callback` will be
     * called. You can then call g_output_stream_close_finish() to get
     * the result of the operation.
     * 
     * For behaviour details see g_output_stream_close().
     * 
     * The asynchronous methods have a default fallback that uses threads
     * to implement asynchronicity, so they are optional for inheriting
     * classes. However, if you override one you must override all.
     * @param io_priority the io priority of the request.
     * @param cancellable optional cancellable object
     * @param callback callback to call when the request is satisfied
     */
    close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Closes an output stream.
     * @param result a #GAsyncResult.
     */
    close_finish(result: Gio.AsyncResult): boolean
    /**
     * Forces a write of all user-space buffered data for the given
     * `stream`. Will block during the operation. Closing the stream will
     * implicitly cause a flush.
     * 
     * This function is optional for inherited classes.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * @param cancellable optional cancellable object
     */
    flush(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Forces an asynchronous write of all user-space buffered data for
     * the given `stream`.
     * For behaviour details see g_output_stream_flush().
     * 
     * When the operation is finished `callback` will be
     * called. You can then call g_output_stream_flush_finish() to get the
     * result of the operation.
     * @param io_priority the io priority of the request.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    flush_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes flushing an output stream.
     * @param result a GAsyncResult.
     */
    flush_finish(result: Gio.AsyncResult): boolean
    /**
     * Checks if an output stream has pending actions.
     */
    has_pending(): boolean
    /**
     * Checks if an output stream has already been closed.
     */
    is_closed(): boolean
    /**
     * Checks if an output stream is being closed. This can be
     * used inside e.g. a flush implementation to see if the
     * flush (or other i/o operation) is called from within
     * the closing operation.
     */
    is_closing(): boolean
    /**
     * Sets `stream` to have actions pending. If the pending flag is
     * already set or `stream` is closed, it will return %FALSE and set
     * `error`.
     */
    set_pending(): boolean
    /**
     * Splices an input stream into an output stream.
     * @param source a #GInputStream.
     * @param flags a set of #GOutputStreamSpliceFlags.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    splice(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, cancellable?: Gio.Cancellable | null): number
    /**
     * Splices a stream asynchronously.
     * When the operation is finished `callback` will be called.
     * You can then call g_output_stream_splice_finish() to get the
     * result of the operation.
     * 
     * For the synchronous, blocking version of this function, see
     * g_output_stream_splice().
     * @param source a #GInputStream.
     * @param flags a set of #GOutputStreamSpliceFlags.
     * @param io_priority the io priority of the request.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback.
     */
    splice_async(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous stream splice operation.
     * @param result a #GAsyncResult.
     */
    splice_finish(result: Gio.AsyncResult): number
    /**
     * Tries to write `count` bytes from `buffer` into the stream. Will block
     * during the operation.
     * 
     * If count is 0, returns 0 and does nothing. A value of `count`
     * larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, the number of bytes written to the stream is returned.
     * It is not an error if this is not the same as the requested size, as it
     * can happen e.g. on a partial I/O error, or if there is not enough
     * storage in the stream. All writes block until at least one byte
     * is written or an error occurs; 0 is never returned (unless
     * `count` is 0).
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     * 
     * On error -1 is returned and `error` is set accordingly.
     * @param buffer the buffer containing the data to write.
     * @param cancellable optional cancellable object
     */
    write(buffer: Uint8Array, cancellable?: Gio.Cancellable | null): number
    /**
     * Tries to write `count` bytes from `buffer` into the stream. Will block
     * during the operation.
     * 
     * This function is similar to g_output_stream_write(), except it tries to
     * write as many bytes as requested, only stopping on an error.
     * 
     * On a successful write of `count` bytes, %TRUE is returned, and `bytes_written`
     * is set to `count`.
     * 
     * If there is an error during the operation %FALSE is returned and `error`
     * is set to indicate the error status.
     * 
     * As a special exception to the normal conventions for functions that
     * use #GError, if this function returns %FALSE (and sets `error)` then
     * `bytes_written` will be set to the number of bytes that were
     * successfully written before the error was encountered.  This
     * functionality is only available from C.  If you need it from another
     * language then you must write your own loop around
     * g_output_stream_write().
     * @param buffer the buffer containing the data to write.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    write_all(buffer: Uint8Array, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /**
     * Request an asynchronous write of `count` bytes from `buffer` into
     * the stream. When the operation is finished `callback` will be called.
     * You can then call g_output_stream_write_all_finish() to get the result of the
     * operation.
     * 
     * This is the asynchronous version of g_output_stream_write_all().
     * 
     * Call g_output_stream_write_all_finish() to collect the result.
     * 
     * Any outstanding I/O request with higher priority (lower numerical
     * value) will be executed before an outstanding request with lower
     * priority. Default priority is %G_PRIORITY_DEFAULT.
     * 
     * Note that no copy of `buffer` will be made, so it must stay valid
     * until `callback` is called.
     * @param buffer the buffer containing the data to write
     * @param io_priority the io priority of the request
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param callback callback to call when the request is satisfied
     */
    write_all_async(buffer: Uint8Array, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous stream write operation started with
     * g_output_stream_write_all_async().
     * 
     * As a special exception to the normal conventions for functions that
     * use #GError, if this function returns %FALSE (and sets `error)` then
     * `bytes_written` will be set to the number of bytes that were
     * successfully written before the error was encountered.  This
     * functionality is only available from C.  If you need it from another
     * language then you must write your own loop around
     * g_output_stream_write_async().
     * @param result a #GAsyncResult
     */
    write_all_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /**
     * Request an asynchronous write of `count` bytes from `buffer` into
     * the stream. When the operation is finished `callback` will be called.
     * You can then call g_output_stream_write_finish() to get the result of the
     * operation.
     * 
     * During an async request no other sync and async calls are allowed,
     * and will result in %G_IO_ERROR_PENDING errors.
     * 
     * A value of `count` larger than %G_MAXSSIZE will cause a
     * %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, the number of bytes written will be passed to the
     * `callback`. It is not an error if this is not the same as the
     * requested size, as it can happen e.g. on a partial I/O error,
     * but generally we try to write as many bytes as requested.
     * 
     * You are guaranteed that this method will never fail with
     * %G_IO_ERROR_WOULD_BLOCK - if `stream` can't accept more data, the
     * method will just wait until this changes.
     * 
     * Any outstanding I/O request with higher priority (lower numerical
     * value) will be executed before an outstanding request with lower
     * priority. Default priority is %G_PRIORITY_DEFAULT.
     * 
     * The asynchronous methods have a default fallback that uses threads
     * to implement asynchronicity, so they are optional for inheriting
     * classes. However, if you override one you must override all.
     * 
     * For the synchronous, blocking version of this function, see
     * g_output_stream_write().
     * 
     * Note that no copy of `buffer` will be made, so it must stay valid
     * until `callback` is called. See g_output_stream_write_bytes_async()
     * for a #GBytes version that will automatically hold a reference to
     * the contents (without copying) for the duration of the call.
     * @param buffer the buffer containing the data to write.
     * @param io_priority the io priority of the request.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback callback to call when the request is satisfied
     */
    write_async(buffer: Uint8Array, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * A wrapper function for g_output_stream_write() which takes a
     * #GBytes as input.  This can be more convenient for use by language
     * bindings or in other cases where the refcounted nature of #GBytes
     * is helpful over a bare pointer interface.
     * 
     * However, note that this function may still perform partial writes,
     * just like g_output_stream_write().  If that occurs, to continue
     * writing, you will need to create a new #GBytes containing just the
     * remaining bytes, using g_bytes_new_from_bytes(). Passing the same
     * #GBytes instance multiple times potentially can result in duplicated
     * data in the output stream.
     * @param bytes the #GBytes to write
     * @param cancellable optional cancellable object
     */
    write_bytes(bytes: GLib.Bytes, cancellable?: Gio.Cancellable | null): number
    /**
     * This function is similar to g_output_stream_write_async(), but
     * takes a #GBytes as input.  Due to the refcounted nature of #GBytes,
     * this allows the stream to avoid taking a copy of the data.
     * 
     * However, note that this function may still perform partial writes,
     * just like g_output_stream_write_async(). If that occurs, to continue
     * writing, you will need to create a new #GBytes containing just the
     * remaining bytes, using g_bytes_new_from_bytes(). Passing the same
     * #GBytes instance multiple times potentially can result in duplicated
     * data in the output stream.
     * 
     * For the synchronous, blocking version of this function, see
     * g_output_stream_write_bytes().
     * @param bytes The bytes to write
     * @param io_priority the io priority of the request.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback callback to call when the request is satisfied
     */
    write_bytes_async(bytes: GLib.Bytes, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a stream write-from-#GBytes operation.
     * @param result a #GAsyncResult.
     */
    write_bytes_finish(result: Gio.AsyncResult): number
    /**
     * Finishes a stream write operation.
     * @param result a #GAsyncResult.
     */
    write_finish(result: Gio.AsyncResult): number
    /**
     * Tries to write the bytes contained in the `n_vectors` `vectors` into the
     * stream. Will block during the operation.
     * 
     * If `n_vectors` is 0 or the sum of all bytes in `vectors` is 0, returns 0 and
     * does nothing.
     * 
     * On success, the number of bytes written to the stream is returned.
     * It is not an error if this is not the same as the requested size, as it
     * can happen e.g. on a partial I/O error, or if there is not enough
     * storage in the stream. All writes block until at least one byte
     * is written or an error occurs; 0 is never returned (unless
     * `n_vectors` is 0 or the sum of all bytes in `vectors` is 0).
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     * 
     * Some implementations of g_output_stream_writev() may have limitations on the
     * aggregate buffer size, and will return %G_IO_ERROR_INVALID_ARGUMENT if these
     * are exceeded. For example, when writing to a local file on UNIX platforms,
     * the aggregate buffer size must not exceed %G_MAXSSIZE bytes.
     * @param vectors the buffer containing the #GOutputVectors to write.
     * @param cancellable optional cancellable object
     */
    writev(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /**
     * Tries to write the bytes contained in the `n_vectors` `vectors` into the
     * stream. Will block during the operation.
     * 
     * This function is similar to g_output_stream_writev(), except it tries to
     * write as many bytes as requested, only stopping on an error.
     * 
     * On a successful write of all `n_vectors` vectors, %TRUE is returned, and
     * `bytes_written` is set to the sum of all the sizes of `vectors`.
     * 
     * If there is an error during the operation %FALSE is returned and `error`
     * is set to indicate the error status.
     * 
     * As a special exception to the normal conventions for functions that
     * use #GError, if this function returns %FALSE (and sets `error)` then
     * `bytes_written` will be set to the number of bytes that were
     * successfully written before the error was encountered.  This
     * functionality is only available from C. If you need it from another
     * language then you must write your own loop around
     * g_output_stream_write().
     * 
     * The content of the individual elements of `vectors` might be changed by this
     * function.
     * @param vectors the buffer containing the #GOutputVectors to write.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    writev_all(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /**
     * Request an asynchronous write of the bytes contained in the `n_vectors` `vectors` into
     * the stream. When the operation is finished `callback` will be called.
     * You can then call g_output_stream_writev_all_finish() to get the result of the
     * operation.
     * 
     * This is the asynchronous version of g_output_stream_writev_all().
     * 
     * Call g_output_stream_writev_all_finish() to collect the result.
     * 
     * Any outstanding I/O request with higher priority (lower numerical
     * value) will be executed before an outstanding request with lower
     * priority. Default priority is %G_PRIORITY_DEFAULT.
     * 
     * Note that no copy of `vectors` will be made, so it must stay valid
     * until `callback` is called. The content of the individual elements
     * of `vectors` might be changed by this function.
     * @param vectors the buffer containing the #GOutputVectors to write.
     * @param io_priority the I/O priority of the request
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param callback callback to call when the request is satisfied
     */
    writev_all_async(vectors: Gio.OutputVector[], io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous stream write operation started with
     * g_output_stream_writev_all_async().
     * 
     * As a special exception to the normal conventions for functions that
     * use #GError, if this function returns %FALSE (and sets `error)` then
     * `bytes_written` will be set to the number of bytes that were
     * successfully written before the error was encountered.  This
     * functionality is only available from C.  If you need it from another
     * language then you must write your own loop around
     * g_output_stream_writev_async().
     * @param result a #GAsyncResult
     */
    writev_all_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /**
     * Request an asynchronous write of the bytes contained in `n_vectors` `vectors` into
     * the stream. When the operation is finished `callback` will be called.
     * You can then call g_output_stream_writev_finish() to get the result of the
     * operation.
     * 
     * During an async request no other sync and async calls are allowed,
     * and will result in %G_IO_ERROR_PENDING errors.
     * 
     * On success, the number of bytes written will be passed to the
     * `callback`. It is not an error if this is not the same as the
     * requested size, as it can happen e.g. on a partial I/O error,
     * but generally we try to write as many bytes as requested.
     * 
     * You are guaranteed that this method will never fail with
     * %G_IO_ERROR_WOULD_BLOCK — if `stream` can't accept more data, the
     * method will just wait until this changes.
     * 
     * Any outstanding I/O request with higher priority (lower numerical
     * value) will be executed before an outstanding request with lower
     * priority. Default priority is %G_PRIORITY_DEFAULT.
     * 
     * The asynchronous methods have a default fallback that uses threads
     * to implement asynchronicity, so they are optional for inheriting
     * classes. However, if you override one you must override all.
     * 
     * For the synchronous, blocking version of this function, see
     * g_output_stream_writev().
     * 
     * Note that no copy of `vectors` will be made, so it must stay valid
     * until `callback` is called.
     * @param vectors the buffer containing the #GOutputVectors to write.
     * @param io_priority the I/O priority of the request.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback callback to call when the request is satisfied
     */
    writev_async(vectors: Gio.OutputVector[], io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a stream writev operation.
     * @param result a #GAsyncResult.
     */
    writev_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
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
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
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
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
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
    is_floating(): boolean
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
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
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
    notify_by_pspec(pspec: GObject.ParamSpec): void
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
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
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
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
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
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Seekable */
    /**
     * Tests if the stream supports the #GSeekableIface.
     */
    can_seek(): boolean
    /**
     * Tests if the length of the stream can be adjusted with
     * g_seekable_truncate().
     */
    can_truncate(): boolean
    /**
     * Seeks in the stream by the given `offset,` modified by `type`.
     * 
     * Attempting to seek past the end of the stream will have different
     * results depending on if the stream is fixed-sized or resizable.  If
     * the stream is resizable then seeking past the end and then writing
     * will result in zeros filling the empty space.  Seeking past the end
     * of a resizable stream and reading will result in EOF.  Seeking past
     * the end of a fixed-sized stream will fail.
     * 
     * Any operation that would result in a negative offset will fail.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * @param offset a #goffset.
     * @param type a #GSeekType.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Tells the current position within the stream.
     */
    tell(): number
    /**
     * Sets the length of the stream to `offset`. If the stream was previously
     * larger than `offset,` the extra data is discarded. If the stream was
     * previously shorter than `offset,` it is extended with NUL ('\0') bytes.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     * @param offset new length for `seekable,` in bytes.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Jsonrpc-1.0.Jsonrpc.OutputStream */
    /**
     * Tests if the stream supports the #GSeekableIface.
     */
    vfunc_can_seek(): boolean
    /**
     * Tests if the length of the stream can be adjusted with
     * g_seekable_truncate().
     */
    vfunc_can_truncate(): boolean
    /**
     * Seeks in the stream by the given `offset,` modified by `type`.
     * 
     * Attempting to seek past the end of the stream will have different
     * results depending on if the stream is fixed-sized or resizable.  If
     * the stream is resizable then seeking past the end and then writing
     * will result in zeros filling the empty space.  Seeking past the end
     * of a resizable stream and reading will result in EOF.  Seeking past
     * the end of a fixed-sized stream will fail.
     * 
     * Any operation that would result in a negative offset will fail.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * @param offset a #goffset.
     * @param type a #GSeekType.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Tells the current position within the stream.
     */
    vfunc_tell(): number
    /**
     * Sets the length of the stream to `offset`. If the stream was previously
     * larger than `offset,` the extra data is discarded. If the stream was
     * previously shorter than `offset,` it is extended with NUL ('\0') bytes.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     * @param offset new length for `seekable,` in bytes.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio-2.0.Gio.OutputStream */
    /**
     * Requests an asynchronous close of the stream, releasing resources
     * related to it. When the operation is finished `callback` will be
     * called. You can then call g_output_stream_close_finish() to get
     * the result of the operation.
     * 
     * For behaviour details see g_output_stream_close().
     * 
     * The asynchronous methods have a default fallback that uses threads
     * to implement asynchronicity, so they are optional for inheriting
     * classes. However, if you override one you must override all.
     * @param io_priority the io priority of the request.
     * @param cancellable optional cancellable object
     * @param callback callback to call when the request is satisfied
     */
    vfunc_close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Closes an output stream.
     * @param result a #GAsyncResult.
     */
    vfunc_close_finish(result: Gio.AsyncResult): boolean
    vfunc_close_fn(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Forces a write of all user-space buffered data for the given
     * `stream`. Will block during the operation. Closing the stream will
     * implicitly cause a flush.
     * 
     * This function is optional for inherited classes.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * @param cancellable optional cancellable object
     */
    vfunc_flush(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Forces an asynchronous write of all user-space buffered data for
     * the given `stream`.
     * For behaviour details see g_output_stream_flush().
     * 
     * When the operation is finished `callback` will be
     * called. You can then call g_output_stream_flush_finish() to get the
     * result of the operation.
     * @param io_priority the io priority of the request.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    vfunc_flush_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes flushing an output stream.
     * @param result a GAsyncResult.
     */
    vfunc_flush_finish(result: Gio.AsyncResult): boolean
    /**
     * Splices an input stream into an output stream.
     * @param source a #GInputStream.
     * @param flags a set of #GOutputStreamSpliceFlags.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    vfunc_splice(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, cancellable?: Gio.Cancellable | null): number
    /**
     * Splices a stream asynchronously.
     * When the operation is finished `callback` will be called.
     * You can then call g_output_stream_splice_finish() to get the
     * result of the operation.
     * 
     * For the synchronous, blocking version of this function, see
     * g_output_stream_splice().
     * @param source a #GInputStream.
     * @param flags a set of #GOutputStreamSpliceFlags.
     * @param io_priority the io priority of the request.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback.
     */
    vfunc_splice_async(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous stream splice operation.
     * @param result a #GAsyncResult.
     */
    vfunc_splice_finish(result: Gio.AsyncResult): number
    /**
     * Request an asynchronous write of `count` bytes from `buffer` into
     * the stream. When the operation is finished `callback` will be called.
     * You can then call g_output_stream_write_finish() to get the result of the
     * operation.
     * 
     * During an async request no other sync and async calls are allowed,
     * and will result in %G_IO_ERROR_PENDING errors.
     * 
     * A value of `count` larger than %G_MAXSSIZE will cause a
     * %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, the number of bytes written will be passed to the
     * `callback`. It is not an error if this is not the same as the
     * requested size, as it can happen e.g. on a partial I/O error,
     * but generally we try to write as many bytes as requested.
     * 
     * You are guaranteed that this method will never fail with
     * %G_IO_ERROR_WOULD_BLOCK - if `stream` can't accept more data, the
     * method will just wait until this changes.
     * 
     * Any outstanding I/O request with higher priority (lower numerical
     * value) will be executed before an outstanding request with lower
     * priority. Default priority is %G_PRIORITY_DEFAULT.
     * 
     * The asynchronous methods have a default fallback that uses threads
     * to implement asynchronicity, so they are optional for inheriting
     * classes. However, if you override one you must override all.
     * 
     * For the synchronous, blocking version of this function, see
     * g_output_stream_write().
     * 
     * Note that no copy of `buffer` will be made, so it must stay valid
     * until `callback` is called. See g_output_stream_write_bytes_async()
     * for a #GBytes version that will automatically hold a reference to
     * the contents (without copying) for the duration of the call.
     * @param buffer the buffer containing the data to write.
     * @param io_priority the io priority of the request.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback callback to call when the request is satisfied
     */
    vfunc_write_async(buffer: Uint8Array | null, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a stream write operation.
     * @param result a #GAsyncResult.
     */
    vfunc_write_finish(result: Gio.AsyncResult): number
    /**
     * Tries to write `count` bytes from `buffer` into the stream. Will block
     * during the operation.
     * 
     * If count is 0, returns 0 and does nothing. A value of `count`
     * larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, the number of bytes written to the stream is returned.
     * It is not an error if this is not the same as the requested size, as it
     * can happen e.g. on a partial I/O error, or if there is not enough
     * storage in the stream. All writes block until at least one byte
     * is written or an error occurs; 0 is never returned (unless
     * `count` is 0).
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     * 
     * On error -1 is returned and `error` is set accordingly.
     * @param buffer the buffer containing the data to write.
     * @param cancellable optional cancellable object
     */
    vfunc_write_fn(buffer: Uint8Array | null, cancellable?: Gio.Cancellable | null): number
    /**
     * Request an asynchronous write of the bytes contained in `n_vectors` `vectors` into
     * the stream. When the operation is finished `callback` will be called.
     * You can then call g_output_stream_writev_finish() to get the result of the
     * operation.
     * 
     * During an async request no other sync and async calls are allowed,
     * and will result in %G_IO_ERROR_PENDING errors.
     * 
     * On success, the number of bytes written will be passed to the
     * `callback`. It is not an error if this is not the same as the
     * requested size, as it can happen e.g. on a partial I/O error,
     * but generally we try to write as many bytes as requested.
     * 
     * You are guaranteed that this method will never fail with
     * %G_IO_ERROR_WOULD_BLOCK — if `stream` can't accept more data, the
     * method will just wait until this changes.
     * 
     * Any outstanding I/O request with higher priority (lower numerical
     * value) will be executed before an outstanding request with lower
     * priority. Default priority is %G_PRIORITY_DEFAULT.
     * 
     * The asynchronous methods have a default fallback that uses threads
     * to implement asynchronicity, so they are optional for inheriting
     * classes. However, if you override one you must override all.
     * 
     * For the synchronous, blocking version of this function, see
     * g_output_stream_writev().
     * 
     * Note that no copy of `vectors` will be made, so it must stay valid
     * until `callback` is called.
     * @param vectors the buffer containing the #GOutputVectors to write.
     * @param io_priority the I/O priority of the request.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback callback to call when the request is satisfied
     */
    vfunc_writev_async(vectors: Gio.OutputVector[], io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a stream writev operation.
     * @param result a #GAsyncResult.
     */
    vfunc_writev_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /**
     * Tries to write the bytes contained in the `n_vectors` `vectors` into the
     * stream. Will block during the operation.
     * 
     * If `n_vectors` is 0 or the sum of all bytes in `vectors` is 0, returns 0 and
     * does nothing.
     * 
     * On success, the number of bytes written to the stream is returned.
     * It is not an error if this is not the same as the requested size, as it
     * can happen e.g. on a partial I/O error, or if there is not enough
     * storage in the stream. All writes block until at least one byte
     * is written or an error occurs; 0 is never returned (unless
     * `n_vectors` is 0 or the sum of all bytes in `vectors` is 0).
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     * 
     * Some implementations of g_output_stream_writev() may have limitations on the
     * aggregate buffer size, and will return %G_IO_ERROR_INVALID_ARGUMENT if these
     * are exceeded. For example, when writing to a local file on UNIX platforms,
     * the aggregate buffer size must not exceed %G_MAXSSIZE bytes.
     * @param vectors the buffer containing the #GOutputVectors to write.
     * @param cancellable optional cancellable object
     */
    vfunc_writev_fn(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
    connect(sigName: "notify", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::use-gvariant", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-gvariant", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::byte-order", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::byte-order", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::close-base-stream", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-base-stream", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OutputStream_ConstructProps)
    _init (config?: OutputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(base_stream: Gio.OutputStream): OutputStream
    /* Function overloads */
    static new(base_stream: Gio.OutputStream): OutputStream
    static $gtype: GObject.Type
}
interface Server_ConstructProps extends GObject.Object_ConstructProps {
}
class Server {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Jsonrpc-1.0.Jsonrpc.Server */
    /**
     * This function accepts `io_stream` as a new client to the #JsonrpcServer
     * by wrapping it in a #JsonrpcClient and starting the message accept
     * loop.
     * @param io_stream A #GIOStream
     */
    accept_io_stream(io_stream: Gio.IOStream): void
    /**
     * Adds a new handler that will be dispatched when a matching `method` arrives.
     * @param method A method to handle
     * @param handler A handler to   execute when an incoming method matches `methods`
     */
    add_handler(method: string, handler: ServerHandler): number
    /**
     * Calls `foreach_func` for every client connected.
     * @param foreach_func A callback for each client
     */
    foreach(foreach_func: GLib.Func): void
    /**
     * Removes a handler that was previously registered with [method`Server`.add_handler].
     * @param handler_id A handler returned from [method`Server`.add_handler]
     */
    remove_handler(handler_id: number): void
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
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
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
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
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
    is_floating(): boolean
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
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
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
    notify_by_pspec(pspec: GObject.ParamSpec): void
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
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
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
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Jsonrpc-1.0.Jsonrpc.Server */
    vfunc_client_accepted(client: Client): void
    vfunc_client_closed(client: Client): void
    vfunc_handle_call(client: Client, method: string, id: GLib.Variant, params: GLib.Variant): boolean
    vfunc_notification(client: Client, method: string, params: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Jsonrpc-1.0.Jsonrpc.Server */
    /**
     * This signal is emitted when a new client has been accepted.
     * @param client A #JsonrpcClient
     */
    connect(sigName: "client-accepted", callback: (($obj: Server, client: Client) => void)): number
    connect_after(sigName: "client-accepted", callback: (($obj: Server, client: Client) => void)): number
    emit(sigName: "client-accepted", client: Client): void
    /**
     * This signal is emitted when a new client has been lost.
     * @param client A #JsonrpcClient
     */
    connect(sigName: "client-closed", callback: (($obj: Server, client: Client) => void)): number
    connect_after(sigName: "client-closed", callback: (($obj: Server, client: Client) => void)): number
    emit(sigName: "client-closed", client: Client): void
    /**
     * This method is emitted when the client requests a method call.
     * 
     * If you return %TRUE from this function, you should reply to it (even upon
     * failure), using [method`Client`.reply] or [method`Client`.reply_async].
     * @param client A #JsonrpcClient
     * @param method The method that was called
     * @param id The identifier of the method call
     * @param params The parameters of the method call
     */
    connect(sigName: "handle-call", callback: (($obj: Server, client: Client, method: string, id: GLib.Variant, params: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-call", callback: (($obj: Server, client: Client, method: string, id: GLib.Variant, params: GLib.Variant) => boolean)): number
    emit(sigName: "handle-call", client: Client, method: string, id: GLib.Variant, params: GLib.Variant): void
    /**
     * This signal is emitted when the client has sent a notification to us.
     * @param client A #JsonrpcClient
     * @param method The notification name
     * @param id The params for the notification
     */
    connect(sigName: "notification", callback: (($obj: Server, client: Client, method: string, id: GLib.Variant) => void)): number
    connect_after(sigName: "notification", callback: (($obj: Server, client: Client, method: string, id: GLib.Variant) => void)): number
    emit(sigName: "notification", client: Client, method: string, id: GLib.Variant): void
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
    connect(sigName: "notify", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Server_ConstructProps)
    _init (config?: Server_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Server
    static $gtype: GObject.Type
}
abstract class ClientClass {
    /* Fields of Jsonrpc-1.0.Jsonrpc.ClientClass */
    parent_class: GObject.ObjectClass
    notification: (self: Client, method_name: string, params: GLib.Variant) => void
    handle_call: (self: Client, method: string, id: GLib.Variant, params: GLib.Variant) => boolean
    failed: (self: Client) => void
    _reserved2: object
    _reserved3: object
    _reserved4: object
    _reserved5: object
    _reserved6: object
    _reserved7: object
    _reserved8: object
    static name: string
}
abstract class InputStreamClass {
    /* Fields of Jsonrpc-1.0.Jsonrpc.InputStreamClass */
    parent_class: Gio.DataInputStreamClass
    _reserved1: object
    _reserved2: object
    _reserved3: object
    _reserved4: object
    _reserved5: object
    _reserved6: object
    _reserved7: object
    _reserved8: object
    static name: string
}
class MessageAny {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessageAny */
    magic: MessageMagic
    static name: string
}
class MessageGetBoolean {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessageGetBoolean */
    magic: MessageMagic
    valptr: boolean
    static name: string
}
class MessageGetDict {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessageGetDict */
    magic: MessageMagic
    dictptr: GLib.VariantDict
    static name: string
}
class MessageGetDouble {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessageGetDouble */
    magic: MessageMagic
    valptr: number
    static name: string
}
class MessageGetInt32 {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessageGetInt32 */
    magic: MessageMagic
    valptr: number
    static name: string
}
class MessageGetInt64 {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessageGetInt64 */
    magic: MessageMagic
    valptr: number
    static name: string
}
class MessageGetIter {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessageGetIter */
    magic: MessageMagic
    static name: string
}
class MessageGetString {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessageGetString */
    magic: MessageMagic
    valptr: string
    static name: string
}
class MessageGetStrv {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessageGetStrv */
    magic: MessageMagic
    valptr: string
    static name: string
}
class MessageGetVariant {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessageGetVariant */
    magic: MessageMagic
    variantptr: GLib.Variant
    static name: string
}
class MessageMagic {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessageMagic */
    bytes: number[]
    static name: string
}
class MessagePutBoolean {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessagePutBoolean */
    magic: MessageMagic
    val: boolean
    static name: string
}
class MessagePutDouble {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessagePutDouble */
    magic: MessageMagic
    val: number
    static name: string
}
class MessagePutInt32 {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessagePutInt32 */
    magic: MessageMagic
    val: number
    static name: string
}
class MessagePutInt64 {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessagePutInt64 */
    magic: MessageMagic
    val: number
    static name: string
}
class MessagePutString {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessagePutString */
    magic: MessageMagic
    val: string
    static name: string
}
class MessagePutStrv {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessagePutStrv */
    magic: MessageMagic
    val: string
    static name: string
}
class MessagePutVariant {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessagePutVariant */
    magic: MessageMagic
    val: GLib.Variant
    static name: string
}
abstract class OutputStreamClass {
    /* Fields of Jsonrpc-1.0.Jsonrpc.OutputStreamClass */
    parent_class: Gio.DataOutputStreamClass
    _reserved1: object
    _reserved2: object
    _reserved3: object
    _reserved4: object
    _reserved5: object
    _reserved6: object
    _reserved7: object
    _reserved8: object
    _reserved9: object
    _reserved10: object
    _reserved11: object
    _reserved12: object
    static name: string
}
abstract class ServerClass {
    /* Fields of Jsonrpc-1.0.Jsonrpc.ServerClass */
    parent_class: GObject.ObjectClass
    handle_call: (self: Server, client: Client, method: string, id: GLib.Variant, params: GLib.Variant) => boolean
    notification: (self: Server, client: Client, method: string, params: GLib.Variant) => void
    client_accepted: (self: Server, client: Client) => void
    client_closed: (self: Server, client: Client) => void
    static name: string
}
}
export default Jsonrpc;