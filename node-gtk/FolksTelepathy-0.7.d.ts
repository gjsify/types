/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * FolksTelepathy-0.7
 */

import type GLib from './GLib-2.0';
import type Gee from './Gee-0.8';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type TelepathyGLib from './TelepathyGLib-0.12';
import type Folks from './Folks-0.7';

export namespace FolksTelepathy {

interface PersonaStore_ConstructProps extends Folks.PersonaStore_ConstructProps {
    /* Constructor properties of FolksTelepathy-0.7.FolksTelepathy.PersonaStore */
    account?: TelepathyGLib.Account
}
class PersonaStore {
    /* Properties of FolksTelepathy-0.7.FolksTelepathy.PersonaStore */
    readonly account: TelepathyGLib.Account
    /* Properties of Folks-0.7.Folks.PersonaStore */
    readonly typeId: string
    readonly displayName: string
    readonly id: string
    readonly personas: Gee.Map
    readonly canAddPersonas: Folks.MaybeBool
    readonly canAliasPersonas: Folks.MaybeBool
    readonly canGroupPersonas: Folks.MaybeBool
    readonly canRemovePersonas: Folks.MaybeBool
    readonly isPrepared: boolean
    readonly isQuiescent: boolean
    isWriteable: boolean
    trustLevel: Folks.PersonaStoreTrust
    readonly alwaysWriteableProperties: string[]
    isPrimaryStore: boolean
    isUserSetDefault: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of FolksTelepathy-0.7.FolksTelepathy.PersonaStore */
    getAccount(): TelepathyGLib.Account
    /* Methods of Folks-0.7.Folks.PersonaStore */
    emitPersonasChanged(added: Gee.Set | null, removed: Gee.Set | null, message: string | null, actor: Folks.Persona | null, reason: Folks.GroupDetailsChangeReason): void
    prepare(callback?: Gio.AsyncReadyCallback | null): void
    prepareFinish(res: Gio.AsyncResult): void
    flush(callback?: Gio.AsyncReadyCallback | null): void
    flushFinish(res: Gio.AsyncResult): void
    addPersonaFromDetails(details: GLib.HashTable, callback?: Gio.AsyncReadyCallback | null): void
    addPersonaFromDetailsFinish(res: Gio.AsyncResult): Folks.Persona | null
    removePersona(persona: Folks.Persona, callback?: Gio.AsyncReadyCallback | null): void
    removePersonaFinish(res: Gio.AsyncResult): void
    getTypeId(): string
    getDisplayName(): string
    getId(): string
    getPersonas(): Gee.Map
    getCanAddPersonas(): Folks.MaybeBool
    getCanAliasPersonas(): Folks.MaybeBool
    getCanGroupPersonas(): Folks.MaybeBool
    getCanRemovePersonas(): Folks.MaybeBool
    getIsPrepared(): boolean
    getIsQuiescent(): boolean
    getIsWriteable(): boolean
    setIsWriteable(value: boolean): void
    getTrustLevel(): Folks.PersonaStoreTrust
    setTrustLevel(value: Folks.PersonaStoreTrust): void
    getAlwaysWriteableProperties(): string[]
    getIsPrimaryStore(): boolean
    getIsUserSetDefault(): boolean
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
    /* Signals of Folks-0.7.Folks.PersonaStore */
    connect(sigName: "personas-changed", callback: ((added: Gee.Set, removed: Gee.Set, message: string | null, actor: Folks.Persona | null, reason: Folks.GroupDetailsChangeReason) => void)): number
    on(sigName: "personas-changed", callback: (added: Gee.Set, removed: Gee.Set, message: string | null, actor: Folks.Persona | null, reason: Folks.GroupDetailsChangeReason) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "personas-changed", callback: (added: Gee.Set, removed: Gee.Set, message: string | null, actor: Folks.Persona | null, reason: Folks.GroupDetailsChangeReason) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "personas-changed", callback: (added: Gee.Set, removed: Gee.Set, message: string | null, actor: Folks.Persona | null, reason: Folks.GroupDetailsChangeReason) => void): NodeJS.EventEmitter
    emit(sigName: "personas-changed", added: Gee.Set, removed: Gee.Set, message: string | null, actor: Folks.Persona | null, reason: Folks.GroupDetailsChangeReason): void
    connect(sigName: "removed", callback: (() => void)): number
    on(sigName: "removed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "removed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "removed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "removed"): void
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
    connect(sigName: "notify::account", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::personas", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::personas", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-add-personas", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-add-personas", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-add-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-add-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-add-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-alias-personas", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-alias-personas", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-alias-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-alias-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-alias-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-group-personas", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-group-personas", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-group-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-group-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-group-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-remove-personas", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-remove-personas", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-remove-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-remove-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-remove-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-prepared", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-prepared", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-prepared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-prepared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-prepared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-quiescent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-quiescent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-quiescent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-quiescent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-quiescent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-writeable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-writeable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-writeable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-writeable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-writeable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::trust-level", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::trust-level", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::trust-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::trust-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::trust-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::always-writeable-properties", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-writeable-properties", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::always-writeable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::always-writeable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::always-writeable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-primary-store", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-primary-store", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-primary-store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-primary-store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-primary-store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-user-set-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-user-set-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-user-set-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-user-set-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-user-set-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PersonaStore_ConstructProps)
    _init (config?: PersonaStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(account: TelepathyGLib.Account): PersonaStore
    static listPersonaStores(): Gee.Map
    static dupForAccount(account: TelepathyGLib.Account): PersonaStore
    static $gtype: GObject.Type
}
interface Persona_ConstructProps extends Folks.Persona_ConstructProps {
    /* Constructor properties of FolksTelepathy-0.7.FolksTelepathy.Persona */
    isInContactList?: boolean
    contact?: TelepathyGLib.Contact
    /* Constructor properties of Folks-0.7.Folks.AliasDetails */
    alias?: string
    /* Constructor properties of Folks-0.7.Folks.AvatarDetails */
    avatar?: Gio.LoadableIcon
    /* Constructor properties of Folks-0.7.Folks.BirthdayDetails */
    birthday?: GLib.DateTime
    calendarEventId?: string
    /* Constructor properties of Folks-0.7.Folks.EmailDetails */
    emailAddresses?: Gee.Set
    /* Constructor properties of Folks-0.7.Folks.FavouriteDetails */
    isFavourite?: boolean
    /* Constructor properties of Folks-0.7.Folks.GroupDetails */
    groups?: Gee.Set
    /* Constructor properties of Folks-0.7.Folks.ImDetails */
    imAddresses?: Gee.MultiMap
    /* Constructor properties of Folks-0.7.Folks.NameDetails */
    structuredName?: Folks.StructuredName
    fullName?: string
    nickname?: string
    /* Constructor properties of Folks-0.7.Folks.PhoneDetails */
    phoneNumbers?: Gee.Set
    /* Constructor properties of Folks-0.7.Folks.PresenceDetails */
    presenceType?: Folks.PresenceType
    presenceMessage?: string
    clientTypes?: string[]
    presenceStatus?: string
    /* Constructor properties of Folks-0.7.Folks.UrlDetails */
    urls?: Gee.Set
}
class Persona {
    /* Properties of FolksTelepathy-0.7.FolksTelepathy.Persona */
    isInContactList: boolean
    readonly contact: TelepathyGLib.Contact
    /* Properties of Folks-0.7.Folks.Persona */
    readonly iid: string
    readonly uid: string
    readonly displayId: string
    readonly isUser: boolean
    readonly store: Folks.PersonaStore
    individual: Folks.Individual
    readonly linkableProperties: string[]
    readonly writeableProperties: string[]
    /* Properties of Folks-0.7.Folks.AliasDetails */
    alias: string
    /* Properties of Folks-0.7.Folks.AvatarDetails */
    avatar: Gio.LoadableIcon
    /* Properties of Folks-0.7.Folks.BirthdayDetails */
    birthday: GLib.DateTime
    calendarEventId: string
    /* Properties of Folks-0.7.Folks.EmailDetails */
    emailAddresses: Gee.Set
    /* Properties of Folks-0.7.Folks.FavouriteDetails */
    isFavourite: boolean
    /* Properties of Folks-0.7.Folks.GroupDetails */
    groups: Gee.Set
    /* Properties of Folks-0.7.Folks.InteractionDetails */
    readonly imInteractionCount: number
    readonly lastImInteractionDatetime: GLib.DateTime
    readonly callInteractionCount: number
    readonly lastCallInteractionDatetime: GLib.DateTime
    /* Properties of Folks-0.7.Folks.ImDetails */
    imAddresses: Gee.MultiMap
    /* Properties of Folks-0.7.Folks.NameDetails */
    structuredName: Folks.StructuredName
    fullName: string
    nickname: string
    /* Properties of Folks-0.7.Folks.PhoneDetails */
    phoneNumbers: Gee.Set
    /* Properties of Folks-0.7.Folks.PresenceDetails */
    presenceType: Folks.PresenceType
    presenceMessage: string
    clientTypes: string[]
    presenceStatus: string
    /* Properties of Folks-0.7.Folks.UrlDetails */
    urls: Gee.Set
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of FolksTelepathy-0.7.FolksTelepathy.Persona */
    getIsInContactList(): boolean
    setIsInContactList(value: boolean): void
    getContact(): TelepathyGLib.Contact | null
    /* Methods of Folks-0.7.Folks.Persona */
    linkablePropertyToLinks(propName: string, callback: any): void
    getIid(): string
    getUid(): string
    getDisplayId(): string
    getIsUser(): boolean
    getStore(): Folks.PersonaStore
    getIndividual(): Folks.Individual | null
    getLinkableProperties(): string[]
    getWriteableProperties(): string[]
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
    /* Methods of Folks-0.7.Folks.AliasDetails */
    changeAlias(alias: string, callback?: Gio.AsyncReadyCallback | null): void
    changeAliasFinish(res: Gio.AsyncResult): void
    getAlias(): string
    setAlias(value: string): void
    /* Methods of Folks-0.7.Folks.AvatarDetails */
    changeAvatar(avatar?: Gio.LoadableIcon | null, callback?: Gio.AsyncReadyCallback | null): void
    changeAvatarFinish(res: Gio.AsyncResult): void
    getAvatar(): Gio.LoadableIcon | null
    setAvatar(value?: Gio.LoadableIcon | null): void
    /* Methods of Folks-0.7.Folks.BirthdayDetails */
    changeBirthday(birthday?: GLib.DateTime | null, callback?: Gio.AsyncReadyCallback | null): void
    changeBirthdayFinish(res: Gio.AsyncResult): void
    changeCalendarEventId(eventId?: string | null, callback?: Gio.AsyncReadyCallback | null): void
    changeCalendarEventIdFinish(res: Gio.AsyncResult): void
    getBirthday(): GLib.DateTime | null
    setBirthday(value?: GLib.DateTime | null): void
    getCalendarEventId(): string | null
    setCalendarEventId(value?: string | null): void
    /* Methods of Folks-0.7.Folks.EmailDetails */
    changeEmailAddresses(emailAddresses: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changeEmailAddressesFinish(res: Gio.AsyncResult): void
    getEmailAddresses(): Gee.Set
    setEmailAddresses(value: Gee.Set): void
    /* Methods of Folks-0.7.Folks.FavouriteDetails */
    changeIsFavourite(isFavourite: boolean, callback?: Gio.AsyncReadyCallback | null): void
    changeIsFavouriteFinish(res: Gio.AsyncResult): void
    getIsFavourite(): boolean
    setIsFavourite(value: boolean): void
    /* Methods of Folks-0.7.Folks.GroupDetails */
    changeGroup(group: string, isMember: boolean, callback?: Gio.AsyncReadyCallback | null): void
    changeGroupFinish(res: Gio.AsyncResult): void
    changeGroups(groups: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changeGroupsFinish(res: Gio.AsyncResult): void
    getGroups(): Gee.Set
    setGroups(value: Gee.Set): void
    /* Methods of Folks-0.7.Folks.InteractionDetails */
    getImInteractionCount(): number
    getLastImInteractionDatetime(): GLib.DateTime | null
    getCallInteractionCount(): number
    getLastCallInteractionDatetime(): GLib.DateTime | null
    /* Methods of Folks-0.7.Folks.ImDetails */
    changeImAddresses(imAddresses: Gee.MultiMap, callback?: Gio.AsyncReadyCallback | null): void
    changeImAddressesFinish(res: Gio.AsyncResult): void
    getImAddresses(): Gee.MultiMap
    setImAddresses(value: Gee.MultiMap): void
    /* Methods of Folks-0.7.Folks.NameDetails */
    changeStructuredName(name?: Folks.StructuredName | null, callback?: Gio.AsyncReadyCallback | null): void
    changeStructuredNameFinish(res: Gio.AsyncResult): void
    changeFullName(fullName: string, callback?: Gio.AsyncReadyCallback | null): void
    changeFullNameFinish(res: Gio.AsyncResult): void
    changeNickname(nickname: string, callback?: Gio.AsyncReadyCallback | null): void
    changeNicknameFinish(res: Gio.AsyncResult): void
    getStructuredName(): Folks.StructuredName | null
    setStructuredName(value?: Folks.StructuredName | null): void
    getFullName(): string
    setFullName(value: string): void
    getNickname(): string
    setNickname(value: string): void
    /* Methods of Folks-0.7.Folks.PhoneDetails */
    changePhoneNumbers(phoneNumbers: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changePhoneNumbersFinish(res: Gio.AsyncResult): void
    getPhoneNumbers(): Gee.Set
    setPhoneNumbers(value: Gee.Set): void
    /* Methods of Folks-0.7.Folks.PresenceDetails */
    isOnline(): boolean
    getPresenceType(): Folks.PresenceType
    setPresenceType(value: Folks.PresenceType): void
    getPresenceMessage(): string
    setPresenceMessage(value: string): void
    getClientTypes(): string[]
    setClientTypes(value: string[]): void
    getPresenceStatus(): string
    setPresenceStatus(value: string): void
    /* Methods of Folks-0.7.Folks.UrlDetails */
    changeUrls(urls: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changeUrlsFinish(res: Gio.AsyncResult): void
    getUrls(): Gee.Set
    setUrls(value: Gee.Set): void
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
    /* Signals of Folks-0.7.Folks.GroupDetails */
    connect(sigName: "group-changed", callback: ((group: string, isMember: boolean) => void)): number
    on(sigName: "group-changed", callback: (group: string, isMember: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "group-changed", callback: (group: string, isMember: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "group-changed", callback: (group: string, isMember: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "group-changed", group: string, isMember: boolean): void
    connect(sigName: "notify::is-in-contact-list", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-in-contact-list", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-in-contact-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-in-contact-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-in-contact-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::contact", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contact", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::contact", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::contact", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::contact", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::iid", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::iid", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::iid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::iid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::iid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uid", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-user", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-user", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::store", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::store", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::individual", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::individual", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::individual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::individual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::individual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::linkable-properties", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::linkable-properties", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::linkable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::linkable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::linkable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::writeable-properties", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writeable-properties", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::writeable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::writeable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::writeable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::alias", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alias", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::alias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::alias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::alias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::avatar", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::avatar", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::avatar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::avatar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::avatar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::birthday", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::birthday", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::birthday", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::birthday", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::birthday", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::calendar-event-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar-event-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::calendar-event-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::calendar-event-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::calendar-event-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::email-addresses", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-addresses", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::email-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::email-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::email-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-favourite", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-favourite", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-favourite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-favourite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-favourite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::groups", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::groups", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::groups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::groups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::groups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-interaction-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-interaction-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-interaction-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-interaction-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-interaction-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-im-interaction-datetime", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-im-interaction-datetime", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-im-interaction-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-im-interaction-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-im-interaction-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::call-interaction-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::call-interaction-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::call-interaction-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::call-interaction-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::call-interaction-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-call-interaction-datetime", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-call-interaction-datetime", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-call-interaction-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-call-interaction-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-call-interaction-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-addresses", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-addresses", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::structured-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::structured-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::structured-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::structured-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::structured-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::full-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::nickname", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nickname", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::nickname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::nickname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::nickname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::phone-numbers", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phone-numbers", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::phone-numbers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::phone-numbers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::phone-numbers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::presence-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presence-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::presence-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::presence-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::presence-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::presence-message", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presence-message", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::presence-message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::presence-message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::presence-message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-types", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-types", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::presence-status", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presence-status", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::presence-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::presence-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::presence-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::urls", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urls", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Persona_ConstructProps)
    _init (config?: Persona_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(contact: TelepathyGLib.Contact, store: PersonaStore): Persona
    static dupForContact(contact: TelepathyGLib.Contact): Persona | null
    static normaliseImAddress(imAddress: string, protocol: string): string
    static getDefaultMessageFromType(type: Folks.PresenceType): string
    static typecmp(typeA: Folks.PresenceType, typeB: Folks.PresenceType): number
    static $gtype: GObject.Type
}
abstract class PersonaStoreClass {
    static name: string
}
class PersonaStorePrivate {
    static name: string
}
abstract class PersonaClass {
    static name: string
}
class PersonaPrivate {
    static name: string
}
}
export default FolksTelepathy;