/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Uhm-0.0
 */

import type Soup from './Soup-2.4';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Uhm {

/**
 * Error codes for #UhmServer operations.
 */
enum ServerError {
    /**
     * In comparison mode, a message received from the client did not match the next message in the current trace file.
     */
    SERVER_ERROR_MESSAGE_MISMATCH,
}
/**
 * Evaluates to the major version of the libuhttpmock headers at compile time.
 * (e.g. in libuhttpmock version 1.2.3 this is 1).
 */
const MAJOR_VERSION: number
/**
 * Evaluates to the micro version of the libuhttpmock headers at compile time.
 * (e.g. in libuhttpmock version 1.2.3 this is 3).
 */
const MICRO_VERSION: number
/**
 * Evaluates to the minor version of the libuhttpmock headers at compile time.
 * (e.g. in libuhttpmock version 1.2.3 this is 2).
 */
const MINOR_VERSION: number
interface Resolver_ConstructProps extends Gio.Resolver_ConstructProps {
}
class Resolver {
    /* Fields of Gio-2.0.Gio.Resolver */
    parentInstance: GObject.Object
    priv: Gio.ResolverPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Uhm-0.0.Uhm.Resolver */
    /**
     * Adds a resolution mapping from the host name `hostname` to the IP address `addr`.
     * @param hostname the hostname to match
     * @param addr the IP address to resolve to
     */
    addA(hostname: string, addr: string): boolean
    /**
     * Adds a resolution mapping the given `service` (on `protocol` and `domain)` to the IP address `addr` and given `port`.
     * @param service the service name to match
     * @param protocol the protocol name to match
     * @param domain the domain name to match
     * @param addr the IP address to resolve to
     * @param port the port to resolve to
     */
    addSRV(service: string, protocol: string, domain: string, addr: string, port: number): boolean
    /**
     * Resets the state of the #UhmResolver, deleting all records added with uhm_resolver_add_A() and uhm_resolver_add_SRV().
     */
    reset(): void
    /* Methods of Gio-2.0.Gio.Resolver */
    /**
     * Synchronously reverse-resolves `address` to determine its
     * associated hostname.
     * 
     * If the DNS resolution fails, `error` (if non-%NULL) will be set to
     * a value from #GResolverError.
     * 
     * If `cancellable` is non-%NULL, it can be used to cancel the
     * operation, in which case `error` (if non-%NULL) will be set to
     * %G_IO_ERROR_CANCELLED.
     * @param address the address to reverse-resolve
     * @param cancellable a #GCancellable, or %NULL
     */
    lookupByAddress(address: Gio.InetAddress, cancellable?: Gio.Cancellable | null): string
    /**
     * Begins asynchronously reverse-resolving `address` to determine its
     * associated hostname, and eventually calls `callback,` which must
     * call g_resolver_lookup_by_address_finish() to get the final result.
     * @param address the address to reverse-resolve
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to call after resolution completes
     */
    lookupByAddressAsync(address: Gio.InetAddress, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Retrieves the result of a previous call to
     * g_resolver_lookup_by_address_async().
     * 
     * If the DNS resolution failed, `error` (if non-%NULL) will be set to
     * a value from #GResolverError. If the operation was cancelled,
     * `error` will be set to %G_IO_ERROR_CANCELLED.
     * @param result the result passed to your #GAsyncReadyCallback
     */
    lookupByAddressFinish(result: Gio.AsyncResult): string
    /**
     * Synchronously resolves `hostname` to determine its associated IP
     * address(es). `hostname` may be an ASCII-only or UTF-8 hostname, or
     * the textual form of an IP address (in which case this just becomes
     * a wrapper around g_inet_address_new_from_string()).
     * 
     * On success, g_resolver_lookup_by_name() will return a non-empty #GList of
     * #GInetAddress, sorted in order of preference and guaranteed to not
     * contain duplicates. That is, if using the result to connect to
     * `hostname,` you should attempt to connect to the first address
     * first, then the second if the first fails, etc. If you are using
     * the result to listen on a socket, it is appropriate to add each
     * result using e.g. g_socket_listener_add_address().
     * 
     * If the DNS resolution fails, `error` (if non-%NULL) will be set to a
     * value from #GResolverError and %NULL will be returned.
     * 
     * If `cancellable` is non-%NULL, it can be used to cancel the
     * operation, in which case `error` (if non-%NULL) will be set to
     * %G_IO_ERROR_CANCELLED.
     * 
     * If you are planning to connect to a socket on the resolved IP
     * address, it may be easier to create a #GNetworkAddress and use its
     * #GSocketConnectable interface.
     * @param hostname the hostname to look up
     * @param cancellable a #GCancellable, or %NULL
     */
    lookupByName(hostname: string, cancellable?: Gio.Cancellable | null): Gio.InetAddress[]
    /**
     * Begins asynchronously resolving `hostname` to determine its
     * associated IP address(es), and eventually calls `callback,` which
     * must call g_resolver_lookup_by_name_finish() to get the result.
     * See g_resolver_lookup_by_name() for more details.
     * @param hostname the hostname to look up the address of
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to call after resolution completes
     */
    lookupByNameAsync(hostname: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Retrieves the result of a call to
     * g_resolver_lookup_by_name_async().
     * 
     * If the DNS resolution failed, `error` (if non-%NULL) will be set to
     * a value from #GResolverError. If the operation was cancelled,
     * `error` will be set to %G_IO_ERROR_CANCELLED.
     * @param result the result passed to your #GAsyncReadyCallback
     */
    lookupByNameFinish(result: Gio.AsyncResult): Gio.InetAddress[]
    /**
     * This differs from g_resolver_lookup_by_name() in that you can modify
     * the lookup behavior with `flags`. For example this can be used to limit
     * results with %G_RESOLVER_NAME_LOOKUP_FLAGS_IPV4_ONLY.
     * @param hostname the hostname to look up
     * @param flags extra #GResolverNameLookupFlags for the lookup
     * @param cancellable a #GCancellable, or %NULL
     */
    lookupByNameWithFlags(hostname: string, flags: Gio.ResolverNameLookupFlags, cancellable?: Gio.Cancellable | null): Gio.InetAddress[]
    /**
     * Begins asynchronously resolving `hostname` to determine its
     * associated IP address(es), and eventually calls `callback,` which
     * must call g_resolver_lookup_by_name_with_flags_finish() to get the result.
     * See g_resolver_lookup_by_name() for more details.
     * @param hostname the hostname to look up the address of
     * @param flags extra #GResolverNameLookupFlags for the lookup
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to call after resolution completes
     */
    lookupByNameWithFlagsAsync(hostname: string, flags: Gio.ResolverNameLookupFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Retrieves the result of a call to
     * g_resolver_lookup_by_name_with_flags_async().
     * 
     * If the DNS resolution failed, `error` (if non-%NULL) will be set to
     * a value from #GResolverError. If the operation was cancelled,
     * `error` will be set to %G_IO_ERROR_CANCELLED.
     * @param result the result passed to your #GAsyncReadyCallback
     */
    lookupByNameWithFlagsFinish(result: Gio.AsyncResult): Gio.InetAddress[]
    /**
     * Synchronously performs a DNS record lookup for the given `rrname` and returns
     * a list of records as #GVariant tuples. See #GResolverRecordType for
     * information on what the records contain for each `record_type`.
     * 
     * If the DNS resolution fails, `error` (if non-%NULL) will be set to
     * a value from #GResolverError and %NULL will be returned.
     * 
     * If `cancellable` is non-%NULL, it can be used to cancel the
     * operation, in which case `error` (if non-%NULL) will be set to
     * %G_IO_ERROR_CANCELLED.
     * @param rrname the DNS name to look up the record for
     * @param recordType the type of DNS record to look up
     * @param cancellable a #GCancellable, or %NULL
     */
    lookupRecords(rrname: string, recordType: Gio.ResolverRecordType, cancellable?: Gio.Cancellable | null): GLib.Variant[]
    /**
     * Begins asynchronously performing a DNS lookup for the given
     * `rrname,` and eventually calls `callback,` which must call
     * g_resolver_lookup_records_finish() to get the final result. See
     * g_resolver_lookup_records() for more details.
     * @param rrname the DNS name to look up the record for
     * @param recordType the type of DNS record to look up
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to call after resolution completes
     */
    lookupRecordsAsync(rrname: string, recordType: Gio.ResolverRecordType, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Retrieves the result of a previous call to
     * g_resolver_lookup_records_async(). Returns a non-empty list of records as
     * #GVariant tuples. See #GResolverRecordType for information on what the
     * records contain.
     * 
     * If the DNS resolution failed, `error` (if non-%NULL) will be set to
     * a value from #GResolverError. If the operation was cancelled,
     * `error` will be set to %G_IO_ERROR_CANCELLED.
     * @param result the result passed to your #GAsyncReadyCallback
     */
    lookupRecordsFinish(result: Gio.AsyncResult): GLib.Variant[]
    /**
     * Synchronously performs a DNS SRV lookup for the given `service` and
     * `protocol` in the given `domain` and returns an array of #GSrvTarget.
     * `domain` may be an ASCII-only or UTF-8 hostname. Note also that the
     * `service` and `protocol` arguments do not include the leading underscore
     * that appears in the actual DNS entry.
     * 
     * On success, g_resolver_lookup_service() will return a non-empty #GList of
     * #GSrvTarget, sorted in order of preference. (That is, you should
     * attempt to connect to the first target first, then the second if
     * the first fails, etc.)
     * 
     * If the DNS resolution fails, `error` (if non-%NULL) will be set to
     * a value from #GResolverError and %NULL will be returned.
     * 
     * If `cancellable` is non-%NULL, it can be used to cancel the
     * operation, in which case `error` (if non-%NULL) will be set to
     * %G_IO_ERROR_CANCELLED.
     * 
     * If you are planning to connect to the service, it is usually easier
     * to create a #GNetworkService and use its #GSocketConnectable
     * interface.
     * @param service the service type to look up (eg, "ldap")
     * @param protocol the networking protocol to use for `service` (eg, "tcp")
     * @param domain the DNS domain to look up the service in
     * @param cancellable a #GCancellable, or %NULL
     */
    lookupService(service: string, protocol: string, domain: string, cancellable?: Gio.Cancellable | null): Gio.SrvTarget[]
    /**
     * Begins asynchronously performing a DNS SRV lookup for the given
     * `service` and `protocol` in the given `domain,` and eventually calls
     * `callback,` which must call g_resolver_lookup_service_finish() to
     * get the final result. See g_resolver_lookup_service() for more
     * details.
     * @param service the service type to look up (eg, "ldap")
     * @param protocol the networking protocol to use for `service` (eg, "tcp")
     * @param domain the DNS domain to look up the service in
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to call after resolution completes
     */
    lookupServiceAsync(service: string, protocol: string, domain: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Retrieves the result of a previous call to
     * g_resolver_lookup_service_async().
     * 
     * If the DNS resolution failed, `error` (if non-%NULL) will be set to
     * a value from #GResolverError. If the operation was cancelled,
     * `error` will be set to %G_IO_ERROR_CANCELLED.
     * @param result the result passed to your #GAsyncReadyCallback
     */
    lookupServiceFinish(result: Gio.AsyncResult): Gio.SrvTarget[]
    /**
     * Sets `resolver` to be the application's default resolver (reffing
     * `resolver,` and unreffing the previous default resolver, if any).
     * Future calls to g_resolver_get_default() will return this resolver.
     * 
     * This can be used if an application wants to perform any sort of DNS
     * caching or "pinning"; it can implement its own #GResolver that
     * calls the original default resolver for DNS operations, and
     * implements its own cache policies on top of that, and then set
     * itself as the default resolver for all later code to use.
     */
    setDefault(): void
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
    /* Signals of Gio-2.0.Gio.Resolver */
    /**
     * Emitted when the resolver notices that the system resolver
     * configuration has changed.
     */
    connect(sigName: "reload", callback: (() => void)): number
    on(sigName: "reload", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reload", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reload", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "reload"): void
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
    constructor (config?: Resolver_ConstructProps)
    _init (config?: Resolver_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Resolver
    static $gtype: GObject.Type
}
interface Server_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Uhm-0.0.Uhm.Server */
    /**
     * %TRUE if network traffic should be logged to a trace file (specified by calling uhm_server_start_trace()). This operates independently
     * of whether traffic is online or being handled locally by the mock server.
     * Use this in conjunction with #UhmServer:enable-online to either log online traffic, or replay logged traffic locally.
     */
    enableLogging?: boolean
    /**
     * %TRUE if network traffic should reach the Internet as normal; %FALSE to redirect it to the local mock server.
     * Use this in conjunction with #UhmServer:enable-logging to either log online traffic, or replay logged traffic locally.
     */
    enableOnline?: boolean
    /**
     * TLS certificate for the mock server to use when serving HTTPS pages. If this is non-%NULL, the server will always use HTTPS. If it is %NULL,
     * the server will always use HTTP. The TLS certificate may be changed after constructing the #UhmServer, but changes to the property will not
     * take effect until the next call to uhm_server_run().
     * 
     * A certificate and private key may be generated by executing:
     * <code>openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -nodes</code>. These files may then be used to construct a
     * #GTlsCertificate by calling g_tls_certificate_new_from_files().
     * 
     * Alternatively, a default #GTlsCertificate which wraps a dummy certificate (not signed by any certificate authority) may be set by
     * calling uhm_server_set_default_tls_certificate(). This may be used as the #UhmServer:tls-certificate if the code under test has no specific
     * requirements of the certificate used by the mock server it's tested against.
     */
    tlsCertificate?: Gio.TlsCertificate
    /**
     * Directory relative to which all trace files specified in calls to uhm_server_start_trace() will be resolved.
     * This is not used for any other methods, but must be non-%NULL if uhm_server_start_trace() is called.
     */
    traceDirectory?: Gio.File
}
class Server {
    /* Properties of Uhm-0.0.Uhm.Server */
    /**
     * Address of the local mock server if it's running, or %NULL otherwise. This will be non-%NULL between calls to uhm_server_run() and
     * uhm_server_stop(). The address is a physical IP address, e.g. <code class="literal">127.0.0.1</code>.
     * 
     * This should not normally need to be passed into client code under test, unless the code references IP addresses specifically. The mock server
     * runs a DNS resolver which automatically redirects client requests for known domain names to this address (#UhmServer:resolver).
     */
    readonly address: string
    /**
     * %TRUE if network traffic should be logged to a trace file (specified by calling uhm_server_start_trace()). This operates independently
     * of whether traffic is online or being handled locally by the mock server.
     * Use this in conjunction with #UhmServer:enable-online to either log online traffic, or replay logged traffic locally.
     */
    enableLogging: boolean
    /**
     * %TRUE if network traffic should reach the Internet as normal; %FALSE to redirect it to the local mock server.
     * Use this in conjunction with #UhmServer:enable-logging to either log online traffic, or replay logged traffic locally.
     */
    enableOnline: boolean
    /**
     * Port of the local mock server if it's running, or <code class="literal">0</code> otherwise. This will be non-<code class="literal">0</code> between
     * calls to uhm_server_run() and uhm_server_stop().
     * 
     * It is intended that this port be passed into the client code under test, to substitute for the default HTTPS port (443) which it would otherwise
     * use.
     */
    readonly port: number
    /**
     * Mock resolver used to redirect HTTP requests from specified domain names to the local mock server instance. This will always be set while the
     * server is running (between calls to uhm_server_run() and uhm_server_stop()), and is %NULL otherwise.
     * 
     * Use the resolver specified in this property to add domain names which are expected to be requested by the current trace. Domain names not added
     * to the resolver will be rejected by the mock server. The set of domain names in the resolver will be reset when uhm_server_stop() is
     * called.
     */
    readonly resolver: Resolver
    /**
     * TLS certificate for the mock server to use when serving HTTPS pages. If this is non-%NULL, the server will always use HTTPS. If it is %NULL,
     * the server will always use HTTP. The TLS certificate may be changed after constructing the #UhmServer, but changes to the property will not
     * take effect until the next call to uhm_server_run().
     * 
     * A certificate and private key may be generated by executing:
     * <code>openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -nodes</code>. These files may then be used to construct a
     * #GTlsCertificate by calling g_tls_certificate_new_from_files().
     * 
     * Alternatively, a default #GTlsCertificate which wraps a dummy certificate (not signed by any certificate authority) may be set by
     * calling uhm_server_set_default_tls_certificate(). This may be used as the #UhmServer:tls-certificate if the code under test has no specific
     * requirements of the certificate used by the mock server it's tested against.
     */
    tlsCertificate: Gio.TlsCertificate
    /**
     * Directory relative to which all trace files specified in calls to uhm_server_start_trace() will be resolved.
     * This is not used for any other methods, but must be non-%NULL if uhm_server_start_trace() is called.
     */
    traceDirectory: Gio.File
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Uhm-0.0.Uhm.Server */
    /**
     * Remove a #UhmServer:compare-messages filter function installed previously by
     * calling something like uhm_server_filter_ignore_parameter_values().
     * 
     * It is an error to call this function with an invalid `filter_id`.
     * @param filterId filter ID returned by the filter addition function
     */
    compareMessagesRemoveFilter(filterId: number): void
    /**
     * Convenience function to finish logging to or reading from a trace file previously passed to uhm_server_start_trace() or
     * uhm_server_start_trace_full().
     * 
     * If #UhmServer:enable-online is %FALSE, this will shut down the mock server (as if uhm_server_stop() had been called).
     */
    endTrace(): void
    /**
     * Install a #UhmServer:compare-messages filter function which will override the
     * default comparison function to one which ignores differences in the values of
     * the given query `parameter_names`. The named parameters must still be present
     * in the query, however.
     * 
     * The filter will remain in place for the lifetime of the #UhmServer, until
     * `uhm_server_compare_messages_remove_filter(`) is called with the returned
     * filter ID.
     * 
     * Note that currently only one of the installed comparison functions will be
     * used. This may change in future.
     * @param parameterNames %NULL-terminated array of    parameter names to ignore
     */
    filterIgnoreParameterValues(parameterNames: string[]): number
    /**
     * Gets the value of the #UhmServer:address property.
     */
    getAddress(): string | null
    /**
     * Gets the value of the #UhmServer:enable-logging property.
     */
    getEnableLogging(): boolean
    /**
     * Gets the value of the #UhmServer:enable-online property.
     */
    getEnableOnline(): boolean
    /**
     * Gets the value of the #UhmServer:port property.
     */
    getPort(): number
    /**
     * Gets the value of the #UhmServer:resolver property.
     */
    getResolver(): Resolver | null
    /**
     * Gets the value of the #UhmServer:tls-certificate property.
     */
    getTlsCertificate(): Gio.TlsCertificate | null
    /**
     * Gets the value of the #UhmServer:trace-directory property.
     */
    getTraceDirectory(): Gio.File | null
    /**
     * Synchronously loads the given `trace_file` of network messages, ready to simulate a network conversation by matching
     * requests against the file and returning the associated responses. Call uhm_server_run() to start the mock
     * server afterwards.
     * 
     * Loading the trace file may be cancelled from another thread using `cancellable`.
     * 
     * On error, `error` will be set and the state of the #UhmServer will not change. A #GIOError will be set if there is
     * a problem reading the trace file.
     * @param traceFile trace file to load
     * @param cancellable a #GCancellable, or %NULL
     */
    loadTrace(traceFile: Gio.File, cancellable?: Gio.Cancellable | null): void
    /**
     * Asynchronous version of uhm_server_load_trace(). In `callback,` call uhm_server_load_trace_finish() to complete the operation.
     * @param traceFile trace file to load
     * @param cancellable a #GCancellable, or %NULL
     * @param callback function to call once the async operation is complete
     */
    loadTraceAsync(traceFile: Gio.File, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous operation started by uhm_server_load_trace_async().
     * 
     * On error, `error` will be set and the state of the #UhmServer will not change.
     * See uhm_server_load_trace() for details on the error domains used.
     * @param result asynchronous operation result passed to the callback
     */
    loadTraceFinish(result: Gio.AsyncResult): void
    /**
     * Indicates to the mock server that a single new line of a message was received from the real server. The message line may be
     * appended to the current trace file if logging is enabled (#UhmServer:enable-logging is %TRUE), adding a newline character
     * at the end. If logging is disabled but online mode is enabled (#UhmServer:enable-online is %TRUE), the message line will
     * be compared to the next expected line in the existing trace file. Otherwise, this function is a no-op.
     * 
     * On failure, `error` will be set and the #UhmServer state will remain unchanged apart from the parse state machine, which will remain
     * in the state reached after parsing `message_chunk`. A %G_IO_ERROR will be returned if writing to the trace file failed. If in
     * comparison mode and the received message chunk corresponds to an unexpected message in the trace file, a %UHM_SERVER_ERROR will
     * be returned.
     * 
     * <note><para>In common cases where message log data only needs to be passed to a #UhmServer and not (for example) logged to an
     * application-specific file or the command line as  well, it is simpler to use uhm_server_received_message_chunk_from_soup(), passing
     * it directly to soup_logger_set_printer(). See the documentation for uhm_server_received_message_chunk_from_soup() for details.</para></note>
     * @param messageChunk single line of a message which was received
     * @param messageChunkLength length of `message_chunk` in bytes
     */
    receivedMessageChunk(messageChunk: string, messageChunkLength: number): void
    /**
     * Convenience version of uhm_server_received_message_chunk() which takes the
     * message `direction` and `data` separately, as provided by libsoup in a
     * #SoupLoggerPrinter callback.
     * 
     * <informalexample><programlisting>
     * UhmServer *mock_server;
     * SoupSession *session;
     * SoupLogger *logger;
     * 
     * static void
     * soup_log_printer (SoupLogger *logger, SoupLoggerLogLevel level, char direction, const char *data, gpointer user_data)
     * {
     * 	/<!-- -->* Pass the data to libuhttpmock. *<!-- -->/
     * UhmServer *mock_server = UHM_SERVER (user_data);
     * 	uhm_server_received_message_chunk_with_direction (mock_server, direction, data, strlen (data), NULL);
     * }
     * 
     * mock_server = uhm_server_new ();
     * session = soup_session_new ();
     * 
     * logger = soup_logger_new (SOUP_LOGGER_LOG_BODY, -1);
     * soup_logger_set_printer (logger, (SoupLoggerPrinter) soup_log_printer, g_object_ref (mock_server), g_object_unref);
     * soup_session_add_feature (session, SOUP_SESSION_FEATURE (logger));
     * g_object_unref (logger);
     * 
     * /<!-- -->* Do something with mock_server here. *<!-- -->/
     * </programlisting></informalexample>
     * @param direction single character indicating the direction of message transmission
     * @param data single line of a message which was received
     * @param dataLength length of `data` in bytes
     */
    receivedMessageChunkWithDirection(direction: number, data: string, dataLength: number): void
    /**
     * Runs the mock server, binding to a loopback TCP/IP interface and preparing a HTTPS server which is ready to accept requests.
     * The TCP/IP address and port number are chosen randomly out of the loopback addresses, and are exposed as #UhmServer:address and #UhmServer:port
     * once this function has returned. A #UhmResolver (exposed as #UhmServer:resolver) is set as the default #GResolver while the server is running.
     * 
     * The server is started in a worker thread, so this function returns immediately and the server continues to run in the background. Use uhm_server_stop()
     * to shut it down.
     * 
     * This function always succeeds.
     */
    run(): void
    /**
     * Sets the value of the #UhmServer:tls-certificate property to the default TLS certificate built in to libuhttpmock.
     * This default certificate is not signed by any certificate authority, and contains minimal metadata details. It may
     * be used by clients which have no special certificate requirements; clients which have special requirements should
     * construct a custom #GTlsCertificate and pass it to uhm_server_set_tls_certificate().
     */
    setDefaultTlsCertificate(): Gio.TlsCertificate
    /**
     * Sets the value of the #UhmServer:enable-logging property.
     * @param enableLogging %TRUE to log client network traffic to a trace file; %FALSE otherwise
     */
    setEnableLogging(enableLogging: boolean): void
    /**
     * Sets the value of the #UhmServer:enable-online property.
     * @param enableOnline %TRUE to not intercept and handle network connections from client code; %FALSE otherwise
     */
    setEnableOnline(enableOnline: boolean): void
    /**
     * Set the domain names which are expected to have requests made of them by the client code interacting with this #UhmServer.
     * This is a convenience method which calls uhm_resolver_add_A() on the server’s #UhmResolver for each of the domain names
     * listed in `domain_names`. It associates them with the server’s current IP address, and automatically updates the mappings
     * if the IP address or resolver change.
     * 
     * Note that this will reset all records on the server’s #UhmResolver, replacing all of them with the provided `domain_names`.
     * 
     * It is safe to add further domain names to the #UhmResolver in a callback for the #GObject::notify signal for #UhmServer:resolver;
     * that signal is emitted after the resolver is cleared and these `domain_names` are added.
     * @param domainNames %NULL-terminated array of domain names to expect, or %NULL to not expect any
     */
    setExpectedDomainNames(domainNames?: string[] | null): void
    /**
     * Sets the value of the #UhmServer:tls-certificate property.
     * @param tlsCertificate TLS certificate for the server to use; or %NULL to serve HTTP only
     */
    setTlsCertificate(tlsCertificate?: Gio.TlsCertificate | null): void
    /**
     * Sets the value of the #UhmServer:trace-directory property.
     * @param traceDirectory a directory to load/store trace files from, or %NULL to unset it
     */
    setTraceDirectory(traceDirectory?: Gio.File | null): void
    /**
     * Starts a mock server which follows the trace file of filename `trace_name` in the #UhmServer:trace-directory directory.
     * See uhm_server_start_trace_full() for further documentation.
     * 
     * This function has undefined behaviour if #UhmServer:trace-directory is %NULL.
     * 
     * On failure, `error` will be set and the #UhmServer state will remain unchanged. See uhm_server_start_trace_full() for
     * details of the error domains used.
     * @param traceName name of the trace
     */
    startTrace(traceName: string): void
    /**
     * Convenience function to start logging to or reading from the given `trace_file,` depending on the values of #UhmServer:enable-logging and
     * #UhmServer:enable-online.
     * 
     * If #UhmServer:enable-logging is %TRUE, a log handler will be set up to redirect all client network activity into the given `trace_file`.
     * If `trace_file` already exists, it will be overwritten.
     * 
     * If #UhmServer:enable-online is %FALSE, the given `trace_file` is loaded using uhm_server_load_trace() and then a mock server is
     * started using uhm_server_run().
     * 
     * On failure, `error` will be set and the #UhmServer state will remain unchanged. A #GIOError will be set if logging is enabled
     * (#UhmServer:enable-logging) and there is a problem writing to the trace file; or if a trace needs to be loaded and there is a problem
     * reading from the trace file.
     * @param traceFile a trace file to load
     */
    startTraceFull(traceFile: Gio.File): void
    /**
     * Stops a mock server started by calling uhm_server_run(). This shuts down the server's worker thread and unbinds it from its TCP/IP socket.
     * 
     * This unloads any trace file loaded by calling uhm_server_load_trace() (or its asynchronous counterpart). It also resets the set of domain
     * names loaded into the #UhmServer:resolver.
     * 
     * This function always succeeds.
     */
    stop(): void
    /**
     * Unloads the current trace file of network messages, as loaded by uhm_server_load_trace() or uhm_server_load_trace_async().
     */
    unloadTrace(): void
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
    /* Signals of Uhm-0.0.Uhm.Server */
    /**
     * Emitted whenever the mock server must compare two #SoupMessage<!-- -->s for equality; e.g. when in the testing or comparison modes.
     * Test code may connect to this signal and implement a handler which checks custom properties of the messages. The default handler compares
     * the URI and method of the messages, but no headers and not the message bodies.
     * 
     * Signal handlers should return %TRUE if the messages match; and %FALSE otherwise. The first signal handler executed when
     * this signal is emitted wins.
     * @param expectedMessage a message containing the expected HTTP(S) message provided by #UhmServer::handle-message
     * @param actualMessage a message containing the incoming HTTP(S) request
     * @param actualClient additional data about the HTTP client making the request
     */
    connect(sigName: "compare-messages", callback: ((expectedMessage: Soup.Message, actualMessage: Soup.Message, actualClient: Soup.ClientContext) => boolean)): number
    on(sigName: "compare-messages", callback: (expectedMessage: Soup.Message, actualMessage: Soup.Message, actualClient: Soup.ClientContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "compare-messages", callback: (expectedMessage: Soup.Message, actualMessage: Soup.Message, actualClient: Soup.ClientContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "compare-messages", callback: (expectedMessage: Soup.Message, actualMessage: Soup.Message, actualClient: Soup.ClientContext) => void): NodeJS.EventEmitter
    emit(sigName: "compare-messages", expectedMessage: Soup.Message, actualMessage: Soup.Message, actualClient: Soup.ClientContext): void
    /**
     * Emitted whenever the mock server is running and receives a request from a client. Test code may connect to this signal and implement a handler
     * which builds and returns a suitable response for a given message. The default handler reads a request–response pair from the current trace file,
     * matches the requests and then returns the given response. If the requests don't match, an error is raised.
     * 
     * Signal handlers should return %TRUE if they have handled the request and set an appropriate response; and %FALSE otherwise.
     * @param message a message containing the incoming HTTP(S) request, and which the outgoing HTTP(S) response should be set on
     * @param client additional data about the HTTP client making the request
     */
    connect(sigName: "handle-message", callback: ((message: Soup.Message, client: Soup.ClientContext) => boolean)): number
    on(sigName: "handle-message", callback: (message: Soup.Message, client: Soup.ClientContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-message", callback: (message: Soup.Message, client: Soup.ClientContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-message", callback: (message: Soup.Message, client: Soup.ClientContext) => void): NodeJS.EventEmitter
    emit(sigName: "handle-message", message: Soup.Message, client: Soup.ClientContext): void
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
    connect(sigName: "notify::address", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-logging", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-logging", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-logging", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-logging", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-logging", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-online", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-online", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::port", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tls-certificate", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-certificate", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tls-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tls-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tls-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::trace-directory", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::trace-directory", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::trace-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::trace-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::trace-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Server_ConstructProps)
    _init (config?: Server_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Server
    static errorQuark(): GLib.Quark
    /**
     * Convenience version of uhm_server_received_message_chunk() which can be passed directly to soup_logger_set_printer()
     * to forward all libsoup traffic logging to a #UhmServer. The #UhmServer must be passed to soup_logger_set_printer() as
     * its user data.
     * 
     * <informalexample><programlisting>
     * UhmServer *mock_server;
     * SoupSession *session;
     * SoupLogger *logger;
     * 
     * mock_server = uhm_server_new ();
     * session = soup_session_new ();
     * 
     * logger = soup_logger_new (SOUP_LOGGER_LOG_BODY, -1);
     * soup_logger_set_printer (logger, uhm_server_received_message_chunk_from_soup, g_object_ref (mock_server), g_object_unref);
     * soup_session_add_feature (session, SOUP_SESSION_FEATURE (logger));
     * g_object_unref (logger);
     * 
     * /<!-- -->* Do something with mock_server here. *<!-- -->/
     * </programlisting></informalexample>
     * @param logger a #SoupLogger
     * @param level the detail level of this log message
     * @param direction the transmission direction of the message
     * @param data message data
     * @param userData user data passed to the #SoupLogger, or %NULL
     */
    static receivedMessageChunkFromSoup(logger: Soup.Logger, level: Soup.LoggerLogLevel, direction: number, data: string, userData?: object | null): void
    static $gtype: GObject.Type
}
abstract class ResolverClass {
    static name: string
}
class ResolverPrivate {
    static name: string
}
abstract class ServerClass {
    /* Fields of Uhm-0.0.Uhm.ServerClass */
    handleMessage: (self: Server, message: Soup.Message, client: Soup.ClientContext) => boolean
    compareMessages: (self: Server, expectedMessage: Soup.Message, actualMessage: Soup.Message, actualClient: Soup.ClientContext) => boolean
    static name: string
}
class ServerPrivate {
    static name: string
}
}
export default Uhm;