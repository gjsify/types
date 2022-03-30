/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GjsDBus-1.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GjsDBus {

interface Implementation_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    /* Constructor properties of GjsDBus-1.0.GjsDBus.Implementation */
    gInterfaceInfo?: Gio.DBusInterfaceInfo
}
class Implementation {
    /* Properties of GjsDBus-1.0.GjsDBus.Implementation */
    readonly gInterfaceInfo: Gio.DBusInterfaceInfo
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    /**
     * Flags from the #GDBusInterfaceSkeletonFlags enumeration.
     */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GjsDBus-1.0.GjsDBus.Implementation */
    /**
     * Queue a PropertyChanged signal for emission, or update the one queued
     * adding `property`
     * @param property the name of the property that changed
     * @param newvalue the new value, or %NULL to just invalidate it
     */
    emitPropertyChanged(property: string, newvalue?: GLib.Variant | null): void
    /**
     * Emits a signal named `signal_name` from the object and interface represented
     * by `self`. This signal has no destination.
     * @param signalName the name of the signal
     * @param parameters signal parameters, or %NULL for none
     */
    emitSignal(signalName: string, parameters?: GLib.Variant | null): void
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    /**
     * Exports `interface_` at `object_path` on `connection`.
     * 
     * This can be called multiple times to export the same `interface_`
     * onto multiple connections however the `object_path` provided must be
     * the same for all connections.
     * 
     * Use g_dbus_interface_skeleton_unexport() to unexport the object.
     * @param connection A #GDBusConnection to export `interface_` on.
     * @param objectPath The path to export the interface at.
     */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    /**
     * If `interface_` has outstanding changes, request for these changes to be
     * emitted immediately.
     * 
     * For example, an exported D-Bus interface may queue up property
     * changes and emit the
     * `org.freedesktop.DBus.Properties.PropertiesChanged`
     * signal later (e.g. in an idle handler). This technique is useful
     * for collapsing multiple property changes into one.
     */
    flush(): void
    /**
     * Gets the first connection that `interface_` is exported on, if any.
     */
    getConnection(): Gio.DBusConnection | null
    /**
     * Gets a list of the connections that `interface_` is exported on.
     */
    getConnections(): Gio.DBusConnection[]
    /**
     * Gets the #GDBusInterfaceSkeletonFlags that describes what the behavior
     * of `interface_`
     */
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     */
    getInfo(): Gio.DBusInterfaceInfo
    /**
     * Gets the object path that `interface_` is exported on, if any.
     */
    getObjectPath(): string | null
    /**
     * Gets all D-Bus properties for `interface_`.
     */
    getProperties(): GLib.Variant
    /**
     * Checks if `interface_` is exported on `connection`.
     * @param connection A #GDBusConnection.
     */
    hasConnection(connection: Gio.DBusConnection): boolean
    /**
     * Sets flags describing what the behavior of `skeleton` should be.
     * @param flags Flags from the #GDBusInterfaceSkeletonFlags enumeration.
     */
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    /**
     * Stops exporting `interface_` on all connections it is exported on.
     * 
     * To unexport `interface_` from only a single connection, use
     * g_dbus_interface_skeleton_unexport_from_connection()
     */
    unexport(): void
    /**
     * Stops exporting `interface_` on `connection`.
     * 
     * To stop exporting on all connections the interface is exported on,
     * use g_dbus_interface_skeleton_unexport().
     * @param connection A #GDBusConnection.
     */
    unexportFromConnection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    /**
     * Gets the #GDBusObject that `interface_` belongs to, if any.
     */
    getObject(): Gio.DBusObject | null
    /**
     * Sets the #GDBusObject for `interface_` to `object`.
     * 
     * Note that `interface_` will hold a weak reference to `object`.
     * @param object A #GDBusObject or %NULL.
     */
    setObject(object?: Gio.DBusObject | null): void
    /* Signals of GjsDBus-1.0.GjsDBus.Implementation */
    connect(sigName: "handle-method-call", callback: ((object: string, p0: GLib.Variant, p1: Gio.DBusMethodInvocation) => void)): number
    on(sigName: "handle-method-call", callback: (object: string, p0: GLib.Variant, p1: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-method-call", callback: (object: string, p0: GLib.Variant, p1: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-method-call", callback: (object: string, p0: GLib.Variant, p1: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-method-call", object: string, p0: GLib.Variant, p1: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-property-get", callback: ((object: string) => GLib.Variant)): number
    on(sigName: "handle-property-get", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-property-get", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-property-get", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-property-get", object: string): void
    connect(sigName: "handle-property-set", callback: ((object: string, p0: GLib.Variant) => void)): number
    on(sigName: "handle-property-set", callback: (object: string, p0: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-property-set", callback: (object: string, p0: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-property-set", callback: (object: string, p0: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "handle-property-set", object: string, p0: GLib.Variant): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    /**
     * Emitted when a method is invoked by a remote caller and used to
     * determine if the method call is authorized.
     * 
     * Note that this signal is emitted in a thread dedicated to
     * handling the method call so handlers are allowed to perform
     * blocking IO. This means that it is appropriate to call e.g.
     * [polkit_authority_check_authorization_sync()](http://hal.freedesktop.org/docs/polkit/PolkitAuthority.html#polkit-authority-check-authorization-sync)
     * with the
     * [POLKIT_CHECK_AUTHORIZATION_FLAGS_ALLOW_USER_INTERACTION](http://hal.freedesktop.org/docs/polkit/PolkitAuthority.html#POLKIT-CHECK-AUTHORIZATION-FLAGS-ALLOW-USER-INTERACTION:CAPS)
     * flag set.
     * 
     * If %FALSE is returned then no further handlers are run and the
     * signal handler must take a reference to `invocation` and finish
     * handling the call (e.g. return an error via
     * g_dbus_method_invocation_return_error()).
     * 
     * Otherwise, if %TRUE is returned, signal emission continues. If no
     * handlers return %FALSE, then the method is dispatched. If
     * `interface` has an enclosing #GDBusObjectSkeleton, then the
     * #GDBusObjectSkeleton::authorize-method signal handlers run before
     * the handlers for this signal.
     * 
     * The default class handler just returns %TRUE.
     * 
     * Please note that the common case is optimized: if no signals
     * handlers are connected and the default class handler isn't
     * overridden (for both `interface` and the enclosing
     * #GDBusObjectSkeleton, if any) and #GDBusInterfaceSkeleton:g-flags does
     * not have the
     * %G_DBUS_INTERFACE_SKELETON_FLAGS_HANDLE_METHOD_INVOCATIONS_IN_THREAD
     * flags set, no dedicated thread is ever used and the call will be
     * handled in the same thread as the object that `interface` belongs
     * to was exported in.
     * @param invocation A #GDBusMethodInvocation.
     */
    connect(sigName: "g-authorize-method", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
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
    connect(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Implementation_ConstructProps)
    _init (config?: Implementation_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class ImplementationClass {
    /* Fields of GjsDBus-1.0.GjsDBus.ImplementationClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
class ImplementationPrivate {
    static name: string
}
}
export default GjsDBus;