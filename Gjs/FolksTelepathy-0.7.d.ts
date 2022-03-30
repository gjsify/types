/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * FolksTelepathy-0.7
 */

import type * as Gjs from './Gjs';
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
    readonly type_id: string
    readonly display_name: string
    readonly id: string
    readonly personas: Gee.Map
    readonly can_add_personas: Folks.MaybeBool
    readonly can_alias_personas: Folks.MaybeBool
    readonly can_group_personas: Folks.MaybeBool
    readonly can_remove_personas: Folks.MaybeBool
    readonly is_prepared: boolean
    readonly is_quiescent: boolean
    is_writeable: boolean
    trust_level: Folks.PersonaStoreTrust
    readonly always_writeable_properties: string[]
    is_primary_store: boolean
    is_user_set_default: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of FolksTelepathy-0.7.FolksTelepathy.PersonaStore */
    get_account(): TelepathyGLib.Account
    /* Methods of Folks-0.7.Folks.PersonaStore */
    _emit_personas_changed(added: Gee.Set | null, removed: Gee.Set | null, message: string | null, actor: Folks.Persona | null, reason: Folks.GroupDetailsChangeReason): void
    prepare(_callback_?: Gio.AsyncReadyCallback | null): void
    prepare_finish(_res_: Gio.AsyncResult): void
    flush(_callback_?: Gio.AsyncReadyCallback | null): void
    flush_finish(_res_: Gio.AsyncResult): void
    add_persona_from_details(details: GLib.HashTable, _callback_?: Gio.AsyncReadyCallback | null): void
    add_persona_from_details_finish(_res_: Gio.AsyncResult): Folks.Persona | null
    remove_persona(persona: Folks.Persona, _callback_?: Gio.AsyncReadyCallback | null): void
    remove_persona_finish(_res_: Gio.AsyncResult): void
    get_type_id(): string
    get_display_name(): string
    get_id(): string
    get_personas(): Gee.Map
    get_can_add_personas(): Folks.MaybeBool
    get_can_alias_personas(): Folks.MaybeBool
    get_can_group_personas(): Folks.MaybeBool
    get_can_remove_personas(): Folks.MaybeBool
    get_is_prepared(): boolean
    get_is_quiescent(): boolean
    get_is_writeable(): boolean
    set_is_writeable(value: boolean): void
    get_trust_level(): Folks.PersonaStoreTrust
    set_trust_level(value: Folks.PersonaStoreTrust): void
    get_always_writeable_properties(): string[]
    get_is_primary_store(): boolean
    get_is_user_set_default(): boolean
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
    /* Virtual methods of Folks-0.7.Folks.PersonaStore */
    vfunc_prepare(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_prepare_finish(_res_: Gio.AsyncResult): void
    vfunc_flush(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_flush_finish(_res_: Gio.AsyncResult): void
    vfunc_add_persona_from_details(details: GLib.HashTable, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_add_persona_from_details_finish(_res_: Gio.AsyncResult): Folks.Persona | null
    vfunc_remove_persona(persona: Folks.Persona, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_remove_persona_finish(_res_: Gio.AsyncResult): void
    vfunc_get_type_id(): string
    vfunc_get_personas(): Gee.Map
    vfunc_get_can_add_personas(): Folks.MaybeBool
    vfunc_get_can_alias_personas(): Folks.MaybeBool
    vfunc_get_can_group_personas(): Folks.MaybeBool
    vfunc_get_can_remove_personas(): Folks.MaybeBool
    vfunc_get_is_prepared(): boolean
    vfunc_get_is_quiescent(): boolean
    vfunc_get_always_writeable_properties(): string[]
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
    /* Signals of Folks-0.7.Folks.PersonaStore */
    connect(sigName: "personas-changed", callback: (($obj: PersonaStore, added: Gee.Set, removed: Gee.Set, message: string | null, actor: Folks.Persona | null, reason: Folks.GroupDetailsChangeReason) => void)): number
    connect_after(sigName: "personas-changed", callback: (($obj: PersonaStore, added: Gee.Set, removed: Gee.Set, message: string | null, actor: Folks.Persona | null, reason: Folks.GroupDetailsChangeReason) => void)): number
    emit(sigName: "personas-changed", added: Gee.Set, removed: Gee.Set, message: string | null, actor: Folks.Persona | null, reason: Folks.GroupDetailsChangeReason): void
    connect(sigName: "removed", callback: (($obj: PersonaStore) => void)): number
    connect_after(sigName: "removed", callback: (($obj: PersonaStore) => void)): number
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
    connect(sigName: "notify", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::account", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type-id", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-id", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-add-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-add-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-alias-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-alias-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-group-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-group-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-remove-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-remove-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-prepared", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-prepared", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-quiescent", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-quiescent", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-writeable", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-writeable", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::trust-level", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::trust-level", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::always-writeable-properties", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-writeable-properties", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-primary-store", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-primary-store", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-user-set-default", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-user-set-default", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PersonaStore_ConstructProps)
    _init (config?: PersonaStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(account: TelepathyGLib.Account): PersonaStore
    static list_persona_stores(): Gee.Map
    static dup_for_account(account: TelepathyGLib.Account): PersonaStore
    static $gtype: GObject.Type
}
interface Persona_ConstructProps extends Folks.Persona_ConstructProps {
    /* Constructor properties of FolksTelepathy-0.7.FolksTelepathy.Persona */
    is_in_contact_list?: boolean
    contact?: TelepathyGLib.Contact
    /* Constructor properties of Folks-0.7.Folks.AliasDetails */
    alias?: string
    /* Constructor properties of Folks-0.7.Folks.AvatarDetails */
    avatar?: Gio.LoadableIcon
    /* Constructor properties of Folks-0.7.Folks.BirthdayDetails */
    birthday?: GLib.DateTime
    calendar_event_id?: string
    /* Constructor properties of Folks-0.7.Folks.EmailDetails */
    email_addresses?: Gee.Set
    /* Constructor properties of Folks-0.7.Folks.FavouriteDetails */
    is_favourite?: boolean
    /* Constructor properties of Folks-0.7.Folks.GroupDetails */
    groups?: Gee.Set
    /* Constructor properties of Folks-0.7.Folks.ImDetails */
    im_addresses?: Gee.MultiMap
    /* Constructor properties of Folks-0.7.Folks.NameDetails */
    structured_name?: Folks.StructuredName
    full_name?: string
    nickname?: string
    /* Constructor properties of Folks-0.7.Folks.PhoneDetails */
    phone_numbers?: Gee.Set
    /* Constructor properties of Folks-0.7.Folks.PresenceDetails */
    presence_type?: Folks.PresenceType
    presence_message?: string
    client_types?: string[]
    presence_status?: string
    /* Constructor properties of Folks-0.7.Folks.UrlDetails */
    urls?: Gee.Set
}
class Persona {
    /* Properties of FolksTelepathy-0.7.FolksTelepathy.Persona */
    is_in_contact_list: boolean
    readonly contact: TelepathyGLib.Contact
    /* Properties of Folks-0.7.Folks.Persona */
    readonly iid: string
    readonly uid: string
    readonly display_id: string
    readonly is_user: boolean
    readonly store: Folks.PersonaStore
    individual: Folks.Individual
    readonly linkable_properties: string[]
    readonly writeable_properties: string[]
    /* Properties of Folks-0.7.Folks.AliasDetails */
    alias: string
    /* Properties of Folks-0.7.Folks.AvatarDetails */
    avatar: Gio.LoadableIcon
    /* Properties of Folks-0.7.Folks.BirthdayDetails */
    birthday: GLib.DateTime
    calendar_event_id: string
    /* Properties of Folks-0.7.Folks.EmailDetails */
    email_addresses: Gee.Set
    /* Properties of Folks-0.7.Folks.FavouriteDetails */
    is_favourite: boolean
    /* Properties of Folks-0.7.Folks.GroupDetails */
    groups: Gee.Set
    /* Properties of Folks-0.7.Folks.InteractionDetails */
    readonly im_interaction_count: number
    readonly last_im_interaction_datetime: GLib.DateTime
    readonly call_interaction_count: number
    readonly last_call_interaction_datetime: GLib.DateTime
    /* Properties of Folks-0.7.Folks.ImDetails */
    im_addresses: Gee.MultiMap
    /* Properties of Folks-0.7.Folks.NameDetails */
    structured_name: Folks.StructuredName
    full_name: string
    nickname: string
    /* Properties of Folks-0.7.Folks.PhoneDetails */
    phone_numbers: Gee.Set
    /* Properties of Folks-0.7.Folks.PresenceDetails */
    presence_type: Folks.PresenceType
    presence_message: string
    client_types: string[]
    presence_status: string
    /* Properties of Folks-0.7.Folks.UrlDetails */
    urls: Gee.Set
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of FolksTelepathy-0.7.FolksTelepathy.Persona */
    get_is_in_contact_list(): boolean
    set_is_in_contact_list(value: boolean): void
    get_contact(): TelepathyGLib.Contact | null
    /* Methods of Folks-0.7.Folks.Persona */
    linkable_property_to_links(prop_name: string, callback: any): void
    get_iid(): string
    get_uid(): string
    get_display_id(): string
    get_is_user(): boolean
    get_store(): Folks.PersonaStore
    get_individual(): Folks.Individual | null
    get_linkable_properties(): string[]
    get_writeable_properties(): string[]
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
    /* Methods of Folks-0.7.Folks.AliasDetails */
    change_alias(alias: string, _callback_?: Gio.AsyncReadyCallback | null): void
    change_alias_finish(_res_: Gio.AsyncResult): void
    get_alias(): string
    set_alias(value: string): void
    /* Methods of Folks-0.7.Folks.AvatarDetails */
    change_avatar(avatar?: Gio.LoadableIcon | null, _callback_?: Gio.AsyncReadyCallback | null): void
    change_avatar_finish(_res_: Gio.AsyncResult): void
    get_avatar(): Gio.LoadableIcon | null
    set_avatar(value?: Gio.LoadableIcon | null): void
    /* Methods of Folks-0.7.Folks.BirthdayDetails */
    change_birthday(birthday?: GLib.DateTime | null, _callback_?: Gio.AsyncReadyCallback | null): void
    change_birthday_finish(_res_: Gio.AsyncResult): void
    change_calendar_event_id(event_id?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    change_calendar_event_id_finish(_res_: Gio.AsyncResult): void
    get_birthday(): GLib.DateTime | null
    set_birthday(value?: GLib.DateTime | null): void
    get_calendar_event_id(): string | null
    set_calendar_event_id(value?: string | null): void
    /* Methods of Folks-0.7.Folks.EmailDetails */
    change_email_addresses(email_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    change_email_addresses_finish(_res_: Gio.AsyncResult): void
    get_email_addresses(): Gee.Set
    set_email_addresses(value: Gee.Set): void
    /* Methods of Folks-0.7.Folks.FavouriteDetails */
    change_is_favourite(is_favourite: boolean, _callback_?: Gio.AsyncReadyCallback | null): void
    change_is_favourite_finish(_res_: Gio.AsyncResult): void
    get_is_favourite(): boolean
    set_is_favourite(value: boolean): void
    /* Methods of Folks-0.7.Folks.GroupDetails */
    change_group(group: string, is_member: boolean, _callback_?: Gio.AsyncReadyCallback | null): void
    change_group_finish(_res_: Gio.AsyncResult): void
    change_groups(groups: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    change_groups_finish(_res_: Gio.AsyncResult): void
    get_groups(): Gee.Set
    set_groups(value: Gee.Set): void
    /* Methods of Folks-0.7.Folks.InteractionDetails */
    get_im_interaction_count(): number
    get_last_im_interaction_datetime(): GLib.DateTime | null
    get_call_interaction_count(): number
    get_last_call_interaction_datetime(): GLib.DateTime | null
    /* Methods of Folks-0.7.Folks.ImDetails */
    change_im_addresses(im_addresses: Gee.MultiMap, _callback_?: Gio.AsyncReadyCallback | null): void
    change_im_addresses_finish(_res_: Gio.AsyncResult): void
    get_im_addresses(): Gee.MultiMap
    set_im_addresses(value: Gee.MultiMap): void
    /* Methods of Folks-0.7.Folks.NameDetails */
    change_structured_name(name?: Folks.StructuredName | null, _callback_?: Gio.AsyncReadyCallback | null): void
    change_structured_name_finish(_res_: Gio.AsyncResult): void
    change_full_name(full_name: string, _callback_?: Gio.AsyncReadyCallback | null): void
    change_full_name_finish(_res_: Gio.AsyncResult): void
    change_nickname(nickname: string, _callback_?: Gio.AsyncReadyCallback | null): void
    change_nickname_finish(_res_: Gio.AsyncResult): void
    get_structured_name(): Folks.StructuredName | null
    set_structured_name(value?: Folks.StructuredName | null): void
    get_full_name(): string
    set_full_name(value: string): void
    get_nickname(): string
    set_nickname(value: string): void
    /* Methods of Folks-0.7.Folks.PhoneDetails */
    change_phone_numbers(phone_numbers: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    change_phone_numbers_finish(_res_: Gio.AsyncResult): void
    get_phone_numbers(): Gee.Set
    set_phone_numbers(value: Gee.Set): void
    /* Methods of Folks-0.7.Folks.PresenceDetails */
    is_online(): boolean
    get_presence_type(): Folks.PresenceType
    set_presence_type(value: Folks.PresenceType): void
    get_presence_message(): string
    set_presence_message(value: string): void
    get_client_types(): string[]
    set_client_types(value: string[]): void
    get_presence_status(): string
    set_presence_status(value: string): void
    /* Methods of Folks-0.7.Folks.UrlDetails */
    change_urls(urls: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    change_urls_finish(_res_: Gio.AsyncResult): void
    get_urls(): Gee.Set
    set_urls(value: Gee.Set): void
    /* Virtual methods of FolksTelepathy-0.7.FolksTelepathy.Persona */
    vfunc_change_alias(alias: string, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_alias_finish(_res_: Gio.AsyncResult): void
    vfunc_get_alias(): string
    vfunc_set_alias(value: string): void
    vfunc_change_avatar(avatar?: Gio.LoadableIcon | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_avatar_finish(_res_: Gio.AsyncResult): void
    vfunc_get_avatar(): Gio.LoadableIcon | null
    vfunc_set_avatar(value?: Gio.LoadableIcon | null): void
    vfunc_change_birthday(birthday?: GLib.DateTime | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_birthday_finish(_res_: Gio.AsyncResult): void
    vfunc_change_calendar_event_id(event_id?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_calendar_event_id_finish(_res_: Gio.AsyncResult): void
    vfunc_get_birthday(): GLib.DateTime | null
    vfunc_set_birthday(value?: GLib.DateTime | null): void
    vfunc_get_calendar_event_id(): string | null
    vfunc_set_calendar_event_id(value?: string | null): void
    vfunc_change_email_addresses(email_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_email_addresses_finish(_res_: Gio.AsyncResult): void
    vfunc_get_email_addresses(): Gee.Set
    vfunc_set_email_addresses(value: Gee.Set): void
    vfunc_change_is_favourite(is_favourite: boolean, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_is_favourite_finish(_res_: Gio.AsyncResult): void
    vfunc_get_is_favourite(): boolean
    vfunc_set_is_favourite(value: boolean): void
    vfunc_change_group(group: string, is_member: boolean, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_group_finish(_res_: Gio.AsyncResult): void
    vfunc_change_groups(groups: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_groups_finish(_res_: Gio.AsyncResult): void
    vfunc_get_groups(): Gee.Set
    vfunc_set_groups(value: Gee.Set): void
    vfunc_get_im_interaction_count(): number
    vfunc_get_last_im_interaction_datetime(): GLib.DateTime | null
    vfunc_get_call_interaction_count(): number
    vfunc_get_last_call_interaction_datetime(): GLib.DateTime | null
    vfunc_change_im_addresses(im_addresses: Gee.MultiMap, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_im_addresses_finish(_res_: Gio.AsyncResult): void
    vfunc_get_im_addresses(): Gee.MultiMap
    vfunc_set_im_addresses(value: Gee.MultiMap): void
    vfunc_change_structured_name(name?: Folks.StructuredName | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_structured_name_finish(_res_: Gio.AsyncResult): void
    vfunc_change_full_name(full_name: string, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_full_name_finish(_res_: Gio.AsyncResult): void
    vfunc_change_nickname(nickname: string, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_nickname_finish(_res_: Gio.AsyncResult): void
    vfunc_get_structured_name(): Folks.StructuredName | null
    vfunc_set_structured_name(value?: Folks.StructuredName | null): void
    vfunc_get_full_name(): string
    vfunc_set_full_name(value: string): void
    vfunc_get_nickname(): string
    vfunc_set_nickname(value: string): void
    vfunc_change_phone_numbers(phone_numbers: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_phone_numbers_finish(_res_: Gio.AsyncResult): void
    vfunc_get_phone_numbers(): Gee.Set
    vfunc_set_phone_numbers(value: Gee.Set): void
    vfunc_get_presence_type(): Folks.PresenceType
    vfunc_set_presence_type(value: Folks.PresenceType): void
    vfunc_get_presence_message(): string
    vfunc_set_presence_message(value: string): void
    vfunc_get_client_types(): string[]
    vfunc_set_client_types(value: string[]): void
    vfunc_get_presence_status(): string
    vfunc_set_presence_status(value: string): void
    vfunc_change_urls(urls: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_urls_finish(_res_: Gio.AsyncResult): void
    vfunc_get_urls(): Gee.Set
    vfunc_set_urls(value: Gee.Set): void
    /* Virtual methods of Folks-0.7.Folks.Persona */
    vfunc_linkable_property_to_links(prop_name: string, callback: any): void
    vfunc_get_linkable_properties(): string[]
    vfunc_get_writeable_properties(): string[]
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
    connect(sigName: "notify", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Folks-0.7.Folks.GroupDetails */
    connect(sigName: "group-changed", callback: (($obj: Persona, group: string, is_member: boolean) => void)): number
    connect_after(sigName: "group-changed", callback: (($obj: Persona, group: string, is_member: boolean) => void)): number
    emit(sigName: "group-changed", group: string, is_member: boolean): void
    connect(sigName: "notify::is-in-contact-list", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-in-contact-list", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::contact", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contact", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::iid", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::iid", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uid", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-id", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-id", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-user", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-user", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::store", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::store", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::individual", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::individual", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::linkable-properties", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::linkable-properties", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::writeable-properties", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writeable-properties", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::alias", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alias", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::avatar", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::avatar", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::birthday", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::birthday", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::calendar-event-id", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar-event-id", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::email-addresses", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-addresses", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-favourite", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-favourite", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::groups", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::groups", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-interaction-count", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-interaction-count", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-im-interaction-datetime", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-im-interaction-datetime", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::call-interaction-count", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::call-interaction-count", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-call-interaction-datetime", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-call-interaction-datetime", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-addresses", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-addresses", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::structured-name", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::structured-name", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::full-name", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-name", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::nickname", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nickname", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::phone-numbers", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phone-numbers", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::presence-type", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presence-type", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::presence-message", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presence-message", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-types", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-types", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::presence-status", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presence-status", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::urls", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urls", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Persona_ConstructProps)
    _init (config?: Persona_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(contact: TelepathyGLib.Contact, store: PersonaStore): Persona
    static dup_for_contact(contact: TelepathyGLib.Contact): Persona | null
    static normalise_im_address(im_address: string, protocol: string): string
    static get_default_message_from_type(type: Folks.PresenceType): string
    static typecmp(type_a: Folks.PresenceType, type_b: Folks.PresenceType): number
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