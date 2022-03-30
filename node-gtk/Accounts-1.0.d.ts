/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Accounts-1.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Accounts {

/**
 * These identify the various errors that can occur with methods in
 * libaccounts-glib that return a #GError.
 */
enum AccountsError {
    /**
     * there was an error accessing the accounts database
     */
    DB,
    /**
     * the account was in the process of being
     * disposed
     */
    DISPOSED,
    /**
     * the account was in the process of being deleted
     */
    DELETED,
    /**
     * the database was locked
     */
    DB_LOCKED,
    /**
     * the requested account was not found
     */
    ACCOUNT_NOT_FOUND,
    /**
     * an asynchronous store operation is
     * already in progress. Since 1.4
     */
    STORE_IN_PROGRESS,
    /**
     * the accounts DB is in read-only mode. Since 1.4
     */
    READONLY,
}
enum Error {
    DB,
    DISPOSED,
    DELETED,
    DB_LOCKED,
    ACCOUNT_NOT_FOUND,
}
/**
 * The source of a setting on a #AgAccount.
 */
enum SettingSource {
    /**
     * the setting is not present
     */
    NONE,
    /**
     * the setting comes from the current account
     * configuration
     */
    ACCOUNT,
    /**
     * the setting comes from the predefined profile
     */
    PROFILE,
}
const MANAGER_INTERFACE: string
const MANAGER_OBJECT_PATH: string
const MANAGER_SERVICE_NAME: string
function accountsErrorQuark(): GLib.Quark
function errorsQuark(): GLib.Quark
function providerListFree(list: Provider[]): void
function serviceListFree(list: Service[]): void
function serviceTypeListFree(list: ServiceType[]): void
/**
 * This callback is invoked when the value of an account configuration setting
 * changes. If the callback was installed with ag_account_watch_key() then `key`
 * is the name of the configuration setting which changed; if it was installed
 * with ag_account_watch_dir() then `key` is the same key prefix that was used
 * when installing this callback.
 */
interface AccountNotifyCb {
    (account: Account, key: string): void
}
/**
 * This callback is invoked when storing the account settings is completed. If
 * `error` is not %NULL, then some error occurred and the data has most likely
 * not been written.
 */
interface AccountStoreCb {
    (account: Account, error: GLib.Error): void
}
interface Account_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Accounts-1.0.Accounts.Account */
    foreign?: boolean
    /**
     * The AgAccountId for the account.
     */
    id?: number
    /**
     * The #AgManager from which the account was instantiated.
     */
    manager?: Manager
    /**
     * The ID of the provider for the account.
     */
    provider?: string
}
class Account {
    /* Properties of Accounts-1.0.Accounts.Account */
    /**
     * The display name of the account.
     */
    readonly displayName: string
    /**
     * Whether the account is currently enabled.
     */
    readonly enabled: boolean
    readonly foreign: boolean
    /**
     * The AgAccountId for the account.
     */
    readonly id: number
    /**
     * The #AgManager from which the account was instantiated.
     */
    readonly manager: Manager
    /**
     * The ID of the provider for the account.
     */
    readonly provider: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Accounts-1.0.Accounts.Account */
    /**
     * Deletes the account. Call ag_account_store() in order to record the change
     * in the storage.
     */
    delete(): void
    /**
     * Get the display name of `account`.
     */
    getDisplayName(): string
    /**
     * Gets whether the selected service is enabled for `account`.
     */
    getEnabled(): boolean
    /**
     * Get the #AgManager for `account`.
     */
    getManager(): Manager
    /**
     * Get the name of the provider of `account`.
     */
    getProviderName(): string
    /**
     * Gets the selected #AgService for `account`.
     */
    getSelectedService(): Service
    /**
     * Creates a new iterator. This method is useful for language bindings only.
     * @param keyPrefix enumerate only the settings whose key starts with `key_prefix`.
     */
    getSettingsIter(keyPrefix?: string | null): AccountSettingIter
    /**
     * Gets the value of the configuration setting `key:` `value` must be a
     * #GValue initialized to the type of the setting.
     * @param key the name of the setting to retrieve.
     * @param value an initialized #GValue to receive the setting's value.
     */
    getValue(key: string, value: any): [ /* returnType */ SettingSource, /* value */ any ]
    /**
     * Gets the value of the configuration setting `key`.
     * @param key the name of the setting to retrieve.
     */
    getVariant(key: string): [ /* returnType */ GLib.Variant, /* source */ SettingSource | null ]
    /**
     * Gets a list of services that are enabled for `account`.
     */
    listEnabledServices(): Service[]
    /**
     * Get the list of services for `account`. If the #AgManager was created with
     * specified service_type this will return only services with this service_type.
     */
    listServices(): Service[]
    /**
     * Get the list of services supported by `account,` filtered by `service_type`.
     * @param serviceType the service type which all the returned services should provide.
     */
    listServicesByType(serviceType: string): Service[]
    /**
     * Removes the notification callback identified by `watch`.
     * @param watch the watch to remove.
     */
    removeWatch(watch: AccountWatch): void
    /**
     * Selects the configuration of service `service:` from now on, all the
     * subsequent calls on the #AgAccount configuration will act on the `service`.
     * If `service` is %NULL, the global account configuration is selected.
     * 
     * Note that if `account` is being shared with other code one must take special
     * care to make sure the desired service is always selected.
     * @param service the #AgService to select.
     */
    selectService(service?: Service | null): void
    /**
     * Changes the display name for `account` to `display_name`.
     * @param displayName the display name to set.
     */
    setDisplayName(displayName: string): void
    /**
     * Sets the "enabled" flag on the selected service for `account`.
     * @param enabled whether `account` should be enabled.
     */
    setEnabled(enabled: boolean): void
    /**
     * Sets the value of the configuration setting `key` to the value `value`.
     * If `value` is %NULL, then the setting is unset.
     * @param key the name of the setting to change.
     * @param value a #GValue holding the new setting's value.
     */
    setValue(key: string, value?: any | null): void
    /**
     * Sets the value of the configuration setting `key` to the value `value`.
     * If `value` has a floating reference, the `account` will take ownership
     * of it.
     * If `value` is %NULL, then the setting is unset.
     * @param key the name of the setting to change.
     * @param value a #GVariant holding the new setting's value.
     */
    setVariant(key: string, value?: GLib.Variant | null): void
    /**
     * Initializes `iter` to iterate over the account settings. If `key_prefix` is
     * not %NULL, only keys whose names start with `key_prefix` will be iterated
     * over.
     * @param iter an uninitialized #AgAccountSettingIter structure.
     * @param keyPrefix enumerate only the settings whose key starts with `key_prefix`.
     */
    settingsIterInit(iter: AccountSettingIter, keyPrefix?: string | null): void
    /**
     * Creates signature of the `key` with given `token`. The account must be
     * stored prior to calling this function.
     * @param key the name of the key or prefix of the keys to be signed.
     * @param token a signing token (%NULL-terminated string) for creating the signature. The application must possess (request) the token.
     */
    sign(key: string, token: string): void
    /**
     * Commit the changed account settings to the account database, and invoke
     * `callback` when the operation has been completed.
     * @param callback function to be called when the settings have been written.
     */
    store(callback: AccountStoreCb): void
    /**
     * Commit the changed account settings to the account database, and invoke
     * `callback` when the operation has been completed.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback function to be called when the settings have been written.
     */
    storeAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Commit the changed account settings to the account database, and invoke
     * `callback` when the operation has been completed.
     */
    storeBlocking(): boolean
    /**
     * Finishes the store operation started by ag_account_store_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to ag_account_store_async().
     */
    storeFinish(res: Gio.AsyncResult): boolean
    /**
     * Get whether `service_type` is supported on `account`.
     * @param serviceType the name of the service type to check for
     */
    supportsService(serviceType: string): boolean
    /**
     * Verify if the key is signed and the signature matches the value
     * and provides the aegis token which was used for signing the `key`.
     * @param key the name of the key or prefix of the keys to be verified.
     * @param token location to receive the pointer to aegis token.
     */
    verify(key: string, token: string): boolean
    /**
     * Verify if the `key` is signed with any of the tokens from the `tokens`
     * and the signature is valid.
     * @param key the name of the key or prefix of the keys to be verified.
     * @param tokens array of aegis tokens.
     */
    verifyWithTokens(key: string, tokens: string): boolean
    /**
     * Installs a watch on all the keys under `key_prefix:` `callback` will be
     * invoked whenever the value of any of these keys changes (or a key is
     * removed).
     * @param keyPrefix the prefix of the keys to watch.
     * @param callback a #AgAccountNotifyCb callback to be called.
     */
    watchDir(keyPrefix: string, callback: AccountNotifyCb): AccountWatch
    /**
     * Installs a watch on `key:` `callback` will be invoked whenever the value of
     * `key` changes (or the key is removed).
     * @param key the name of the key to watch.
     * @param callback a #AgAccountNotifyCb callback to be called.
     */
    watchKey(key: string, callback: AccountNotifyCb): AccountWatch
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
    /* Signals of Accounts-1.0.Accounts.Account */
    /**
     * Emitted when the account has been deleted.
     */
    connect(sigName: "deleted", callback: (() => void)): number
    on(sigName: "deleted", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deleted", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deleted", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "deleted"): void
    /**
     * Emitted when the account display name has changed.
     */
    connect(sigName: "display-name-changed", callback: (() => void)): number
    on(sigName: "display-name-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "display-name-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "display-name-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "display-name-changed"): void
    /**
     * Emitted when the account "enabled" status was changed for one of its
     * services, or for the account globally.
     * @param service the service which was enabled/disabled, or %NULL if the global enabledness of the account changed.
     * @param enabled the new state of the `account`.
     */
    connect(sigName: "enabled", callback: ((service: string, enabled: boolean) => void)): number
    on(sigName: "enabled", callback: (service: string, enabled: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enabled", callback: (service: string, enabled: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enabled", callback: (service: string, enabled: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "enabled", service: string, enabled: boolean): void
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
    connect(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::foreign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::foreign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::foreign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::foreign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::provider", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Account_ConstructProps)
    _init (config?: Account_ConstructProps): void
    /* Static methods and pseudo-constructors */
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
interface AccountService_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Accounts-1.0.Accounts.AccountService */
    /**
     * The #AgAccount used by the account service.
     */
    account?: Account
    /**
     * The #AgService used by the account service.
     */
    service?: Service
}
class AccountService {
    /* Properties of Accounts-1.0.Accounts.AccountService */
    /**
     * The #AgAccount used by the account service.
     */
    readonly account: Account
    /**
     * Whether the account service is currently enabled. The value of
     * this property is %TRUE if and only if the underlying #AgAccount
     * is enabled and the selected #AgService is enabled on it. If this
     * property is %FALSE, applications should not try to use this
     * object.
     */
    readonly enabled: boolean
    /**
     * The #AgService used by the account service.
     */
    readonly service: Service
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Accounts-1.0.Accounts.AccountService */
    /**
     * Get the #AgAccount associated with `self`.
     */
    getAccount(): Account
    /**
     * Reads the authentication data stored in the account (merging the
     * service-specific settings with the global account settings) and returns an
     * #AgAuthData structure.
     * The method and mechanism are read from the "auth/method" and
     * "auth/mechanism" keys, respectively. The authentication parameters are
     * found under the "auth/&lt;method&gt;/&lt;mechanism&gt;/" group.
     */
    getAuthData(): AuthData
    /**
     * This method should be called only in the context of a handler of the
     * #AgAccountService::changed signal, and can be used to retrieve the set of
     * changes.
     */
    getChangedFields(): string[]
    /**
     * Checks whether the underlying #AgAccount is enabled and the selected
     * #AgService is enabled on it. If this method returns %FALSE, applications
     * should not try to use this object.
     */
    getEnabled(): boolean
    /**
     * Get the #AgService associated with `self`.
     */
    getService(): Service
    /**
     * Creates a new iterator. This method is useful for language bindings only.
     * @param keyPrefix enumerate only the settings whose key starts with `key_prefix`.
     */
    getSettingsIter(keyPrefix?: string | null): AccountSettingIter
    /**
     * Gets the value of the configuration setting `key:` `value` must be a
     * #GValue initialized to the type of the setting.
     * @param key the name of the setting to retrieve.
     * @param value an initialized #GValue to receive the setting's value.
     */
    getValue(key: string, value: any): [ /* returnType */ SettingSource, /* value */ any ]
    /**
     * Gets the value of the configuration setting `key`.
     * @param key the name of the setting to retrieve.
     */
    getVariant(key: string): [ /* returnType */ GLib.Variant, /* source */ SettingSource | null ]
    /**
     * Sets the value of the configuration setting `key` to the value `value`.
     * If `value` is %NULL, then the setting is unset.
     * @param key the name of the setting to change.
     * @param value a #GValue holding the new setting's value.
     */
    setValue(key: string, value?: any | null): void
    /**
     * Sets the value of the configuration setting `key` to the value `value`.
     * If `value` has a floating reference, the `account` will take ownership
     * of it.
     * If `value` is %NULL, then the setting is unset.
     * @param key the name of the setting to change.
     * @param value a #GVariant holding the new setting's value.
     */
    setVariant(key: string, value?: GLib.Variant | null): void
    /**
     * Initializes `iter` to iterate over the account settings. If `key_prefix` is
     * not %NULL, only keys whose names start with `key_prefix` will be iterated
     * over.
     * After calling this method, one would typically call
     * ag_account_settings_iter_get_next() to read the settings one by one.
     * @param iter an uninitialized #AgAccountSettingIter structure.
     * @param keyPrefix enumerate only the settings whose key starts with `key_prefix`.
     */
    settingsIterInit(iter: AccountSettingIter, keyPrefix?: string | null): void
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
    /* Signals of Accounts-1.0.Accounts.AccountService */
    /**
     * Emitted when some setting has changed on the account service. You can
     * use the ag_account_service_get_changed_fields() method to retrieve the
     * list of the settings which have changed.
     */
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    /**
     * Emitted when the service enabled state changes.
     * @param enabled whether the service is enabled.
     */
    connect(sigName: "enabled", callback: ((enabled: boolean) => void)): number
    on(sigName: "enabled", callback: (enabled: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enabled", callback: (enabled: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enabled", callback: (enabled: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "enabled", enabled: boolean): void
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
    connect(sigName: "notify::enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::service", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AccountService_ConstructProps)
    _init (config?: AccountService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(account: Account, service?: Service | null): AccountService
    /**
     * Iterates over the account keys. `iter` must be an iterator previously
     * initialized with ag_account_service_settings_iter_init().
     * @param iter an initialized #AgAccountSettingIter structure.
     */
    static settingsIterNext(iter: AccountSettingIter): [ /* returnType */ boolean, /* key */ string, /* value */ any ]
    static $gtype: GObject.Type
}
interface Manager_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Accounts-1.0.Accounts.Manager */
    /**
     * Whether to abort the application when a database timeout occurs.
     */
    abortOnDbTimeout?: boolean
    /**
     * Timeout for database operations, in milliseconds.
     */
    dbTimeout?: number
    /**
     * If the service type is set, certain operations on the #AgManager, such
     * as ag_manager_list() and ag_manager_list_services(), will be restricted
     * to only affect accounts or services with that service type.
     */
    serviceType?: string
    /**
     * Whether to use D-Bus for inter-process change notification. Setting this
     * property to %FALSE causes libaccounts not to emit the change
     * notification signals, and also not react to changes made by other
     * processes. Disabling D-Bus is only meant to be used for specific cases,
     * such as maintenance programs.
     */
    useDbus?: boolean
}
class Manager {
    /* Properties of Accounts-1.0.Accounts.Manager */
    /**
     * Whether to abort the application when a database timeout occurs.
     */
    abortOnDbTimeout: boolean
    /**
     * Timeout for database operations, in milliseconds.
     */
    dbTimeout: number
    /**
     * If the service type is set, certain operations on the #AgManager, such
     * as ag_manager_list() and ag_manager_list_services(), will be restricted
     * to only affect accounts or services with that service type.
     */
    readonly serviceType: string
    /**
     * Whether to use D-Bus for inter-process change notification. Setting this
     * property to %FALSE causes libaccounts not to emit the change
     * notification signals, and also not react to changes made by other
     * processes. Disabling D-Bus is only meant to be used for specific cases,
     * such as maintenance programs.
     */
    readonly useDbus: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Accounts-1.0.Accounts.Manager */
    /**
     * Create a new account. The account is not stored in the database until
     * ag_account_store() has successfully returned; the `id` field in the
     * #AgAccount structure is also not meant to be valid until the account has
     * been stored.
     * @param providerName name of the provider of the account.
     */
    createAccount(providerName: string): Account
    /**
     * Get whether the library will abort when a timeout error occurs.
     */
    getAbortOnDbTimeout(): boolean
    /**
     * Instantiates the object representing the account identified by
     * `account_id`.
     * @param accountId the #AgAccountId of the account.
     */
    getAccount(accountId: AccountId): Account
    /**
     * Gets all the account services. If the `manager` was created for a
     * specific service type, only services with that type will be returned.
     * <note>
     *   <para>
     *   This method causes the loading of all the service settings for all the
     *   returned accounts (unless they have been loaded previously). If you are
     *   interested in a specific account/service, consider using
     *   ag_manager_load_account() to first load the the account, and then create
     *   the AgAccountService for that account only.
     *   </para>
     * </note>
     */
    getAccountServices(): AccountService[]
    /**
     * Search for `application_name` in the list of applications, and return a new
     * #AgApplication if a matching application was found.
     * @param applicationName the name of an application to search for
     */
    getApplication(applicationName: string): Application
    /**
     * Get the timeout of database operations for `manager,` in milliseconds.
     */
    getDbTimeout(): number
    /**
     * Gets all the enabled account services. If the `manager` was created for a
     * specific service type, only services with that type will be returned.
     * <note>
     *   <para>
     *   This method causes the loading of all the service settings for all the
     *   returned accounts (unless they have been loaded previously). If you are
     *   interested in a specific account/service, consider using
     *   ag_manager_load_account() to first load the the account, and then create
     *   the AgAccountService for that account only.
     *   </para>
     * </note>
     */
    getEnabledAccountServices(): AccountService[]
    /**
     * Loads the provider identified by `provider_name`.
     * @param providerName the name of the provider.
     */
    getProvider(providerName: string): Provider
    /**
     * Loads the service identified by `service_name`.
     * @param serviceName the name of the service.
     */
    getService(serviceName: string): Service
    /**
     * Get the service type for `manager`.
     */
    getServiceType(): string
    /**
     * Lists the accounts. If the #AgManager is created with a specified
     * #AgManager:service-type, it will return only the accounts supporting this
     * service type.
     */
    list(): AccountId[]
    /**
     * Lists the registered applications which support the given service.
     * @param service the #AgService for which we want to get the applications list.
     */
    listApplicationsByService(service: Service): Application[]
    /**
     * Lists the accounts supporting the given service type.
     * @param serviceType the name of the service type to check for.
     */
    listByServiceType(serviceType: string): AccountId[]
    /**
     * Lists the enabled accounts.
     */
    listEnabled(): AccountId[]
    /**
     * Lists the enabled accounts supporting the given service type.
     * @param serviceType the name of the service type to check for.
     */
    listEnabledByServiceType(serviceType: string): AccountId[]
    /**
     * Gets a list of all the installed providers.
     */
    listProviders(): Provider[]
    /**
     * Gets a list of all the installed service types.
     */
    listServiceTypes(): ServiceType[]
    /**
     * Gets a list of all the installed services.
     * If the #AgManager was created with a specified #AgManager:service_type
     * it will return only the installed services supporting that service type.
     */
    listServices(): Service[]
    /**
     * Gets a list of all the installed services where the service type name is
     * `service_type`.
     * @param serviceType the type of the service.
     */
    listServicesByType(serviceType: string): Service[]
    /**
     * Instantiates the object representing the account identified by
     * `account_id`.
     * @param accountId the #AgAccountId of the account.
     */
    loadAccount(accountId: AccountId): Account
    /**
     * Instantiate the service type with the name `service_type`.
     * @param serviceType the name of the service type.
     */
    loadServiceType(serviceType: string): ServiceType
    /**
     * Tells libaccounts whether it should make the client application abort when
     * a timeout error occurs. The default is %FALSE.
     * @param abort whether to abort when a DB timeout occurs.
     */
    setAbortOnDbTimeout(abort: boolean): void
    /**
     * Sets the timeout for database operations. This tells the library how long
     * it is allowed to block while waiting for a locked DB to become accessible.
     * Higher values mean a higher chance of successful reads, but also mean that
     * the execution might be blocked for a longer time.
     * The default is 5 seconds.
     * @param timeoutMs the new timeout, in milliseconds.
     */
    setDbTimeout(timeoutMs: number): void
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
    /* Signals of Accounts-1.0.Accounts.Manager */
    /**
     * Emitted when a new account has been created; note that the account must
     * have been stored in the database: the signal is not emitted just in
     * response to ag_manager_create_account().
     * @param accountId the #AgAccountId of the account that has been created.
     */
    connect(sigName: "account-created", callback: ((accountId: number) => void)): number
    on(sigName: "account-created", callback: (accountId: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "account-created", callback: (accountId: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "account-created", callback: (accountId: number) => void): NodeJS.EventEmitter
    emit(sigName: "account-created", accountId: number): void
    /**
     * Emitted when an account has been deleted.
     * This signal is redundant with #AgAccount::deleted, but it is convenient
     * to provide full change notification with #AgManager.
     * @param accountId the #AgAccountId of the account that has been deleted.
     */
    connect(sigName: "account-deleted", callback: ((accountId: number) => void)): number
    on(sigName: "account-deleted", callback: (accountId: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "account-deleted", callback: (accountId: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "account-deleted", callback: (accountId: number) => void): NodeJS.EventEmitter
    emit(sigName: "account-deleted", accountId: number): void
    /**
     * Emitted when particular service of an account has been updated.
     * This signal is redundant with #AgAccount::deleted, but it is convenient
     * to provide full change notification with #AgManager.
     * @param accountId the #AgAccountId of the account that has been update.
     */
    connect(sigName: "account-updated", callback: ((accountId: number) => void)): number
    on(sigName: "account-updated", callback: (accountId: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "account-updated", callback: (accountId: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "account-updated", callback: (accountId: number) => void): NodeJS.EventEmitter
    emit(sigName: "account-updated", accountId: number): void
    /**
     * If the manager has been created with ag_manager_new_for_service_type(),
     * this signal will be emitted when an account (identified by `account_id)`
     * has been modified in such a way that the application might be interested
     * to start or stop using it: the "enabled" flag on the account or in some
     * service supported by the account and matching the
     * #AgManager:service-type have changed.
     * In practice, this signal might be emitted more often than when strictly
     * needed; applications must call ag_account_list_enabled_services() or
     * ag_manager_list_enabled() to get the current state.
     * @param accountId the #AgAccountId of the account that has been enabled.
     */
    connect(sigName: "enabled-event", callback: ((accountId: number) => void)): number
    on(sigName: "enabled-event", callback: (accountId: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enabled-event", callback: (accountId: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enabled-event", callback: (accountId: number) => void): NodeJS.EventEmitter
    emit(sigName: "enabled-event", accountId: number): void
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
    connect(sigName: "notify::abort-on-db-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::abort-on-db-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::abort-on-db-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::abort-on-db-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::abort-on-db-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::db-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::db-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::db-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::db-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::db-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::service-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::service-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::service-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::service-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-dbus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-dbus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-dbus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-dbus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-dbus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Manager_ConstructProps)
    _init (config?: Manager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Manager
    static newForServiceType(serviceType: string): Manager
    /**
     * Frees the memory taken by a #GList of #AgAccountId allocated by #AgManager,
     * such as by ag_manager_list(), ag_manager_list_enabled() or
     * ag_manager_list_enabled_by_service_type().
     * @param list a #GList returned from a #AgManager method which returns account IDs.
     */
    static listFree(list: AccountId[]): void
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
abstract class AccountClass {
    /* Fields of Accounts-1.0.Accounts.AccountClass */
    parentClass: GObject.ObjectClass
    static name: string
}
class AccountPrivate {
    static name: string
}
abstract class AccountServiceClass {
    /* Fields of Accounts-1.0.Accounts.AccountServiceClass */
    parentClass: GObject.ObjectClass
    static name: string
}
class AccountServicePrivate {
    static name: string
}
class AccountSettingIter {
    /* Fields of Accounts-1.0.Accounts.AccountSettingIter */
    /**
     * the AgAccount to iterate over
     */
    account: Account
    /* Methods of Accounts-1.0.Accounts.AccountSettingIter */
    /**
     * Frees the memory associated with an #AgAccountSettingIter.
     */
    free(): void
    /**
     * Iterates over the account keys. `iter` must be an iterator previously
     * initialized with ag_account_settings_iter_init().
     */
    getNext(): [ /* returnType */ boolean, /* key */ string, /* value */ GLib.Variant ]
    /**
     * Iterates over the account keys. `iter` must be an iterator previously
     * initialized with ag_account_settings_iter_init().
     */
    next(): [ /* returnType */ boolean, /* key */ string, /* value */ any ]
    static name: string
}
class AccountWatch {
    static name: string
}
class Application {
    /* Methods of Accounts-1.0.Accounts.Application */
    /**
     * Get the description of the #AgApplication.
     */
    getDescription(): string
    /**
     * Get the #GDesktopAppInfo of the application.
     */
    getDesktopAppInfo(): Gio.DesktopAppInfo
    /**
     * Get the translation domain of the #AgApplication.
     */
    getI18nDomain(): string
    /**
     * Get the name of the #AgApplication.
     */
    getName(): string
    /**
     * Get the description from the application XML file, for the specified
     * service; if not found, get the service-type description instead.
     * @param service an #AgService.
     */
    getServiceUsage(service: Service): string
    /**
     * Increment the reference count of `self`.
     */
    ref(): Application
    /**
     * Decrements the reference count of `self`. The item is destroyed when the
     * count gets to 0.
     */
    unref(): void
    static name: string
}
class AuthData {
    /* Methods of Accounts-1.0.Accounts.AuthData */
    /**
     * Gets the ID of the credentials associated with this account.
     */
    getCredentialsId(): number
    /**
     * Gets the authentication parameters.
     * @param extraParameters a #GVariant containing client-specific authentication parameters to be added to the returned dictionary.
     */
    getLoginParameters(extraParameters?: GLib.Variant | null): GLib.Variant
    /**
     * Gets the authentication mechanism.
     */
    getMechanism(): string
    /**
     * Gets the authentication method.
     */
    getMethod(): string
    /**
     * Gets the authentication parameters.
     */
    getParameters(): GLib.HashTable
    /**
     * Insert the given authentication parameters into the authentication data. If
     * some parameters were already present, the parameters passed with this method
     * take precedence.
     * @param parameters a #GHashTable containing the authentication parameters to be added.
     */
    insertParameters(parameters: GLib.HashTable): void
    /**
     * Increment the reference count of `self`.
     */
    ref(): AuthData
    /**
     * Decrements the reference count of `self`. The item is destroyed when the
     * count gets to 0.
     */
    unref(): void
    static name: string
}
abstract class ManagerClass {
    /* Fields of Accounts-1.0.Accounts.ManagerClass */
    parentClass: GObject.ObjectClass
    accountDeleted: (manager: Manager, id: AccountId) => void
    static name: string
}
class ManagerPrivate {
    static name: string
}
class Provider {
    /* Methods of Accounts-1.0.Accounts.Provider */
    /**
     * Get the description of the #AgProvider.
     */
    getDescription(): string
    /**
     * Get the display name of the #AgProvider.
     */
    getDisplayName(): string
    /**
     * Get a regular expression matching all domains where this provider's accounts
     * can be used.
     */
    getDomainsRegex(): string
    /**
     * Gets the contents of the XML provider file.  The buffer returned in `contents`
     * should not be modified or freed, and is guaranteed to be valid as long as
     * `provider` is referenced.
     * If some error occurs, `contents` is set to %NULL.
     * @param contents location to receive the pointer to the file contents.
     */
    getFileContents(contents: string): void
    /**
     * Get the translation domain of the #AgProvider.
     */
    getI18nDomain(): string
    /**
     * Get the icon name of the #AgProvider.
     */
    getIconName(): string
    /**
     * Get the name of the #AgProvider.
     */
    getName(): string
    /**
     * Get the name of the account plugin which manages all accounts created from
     * this #AgProvider.
     * Some platforms might find it useful to store plugin names in the provider
     * XML files, especially when the same plugin can work for different providers.
     */
    getPluginName(): string
    /**
     * Tell whether the provider doesn't support creating more than one account.
     * Note that libaccounts itself does not enforce preventing the creation of
     * multiple accounts when this flag is set: the flag is only informative, and
     * its implementation is left to the client.
     */
    getSingleAccount(): boolean
    /**
     * Check whether `domain` is supported by this provider, by matching it with the
     * regex returned by ag_provider_get_domains_regex().
     * If the provider does not define a regular expression to match the supported
     * domains, this function will return %FALSE.
     * @param domain a domain name.
     */
    matchDomain(domain: string): boolean
    /**
     * Adds a reference to `provider`.
     */
    ref(): Provider
    /**
     * Used to unreference the #AgProvider structure.
     */
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the list `list`.
     * @param list a #GList of providers returned by some function of this library.
     */
    static listFree(list: Provider[]): void
}
class Service {
    /* Methods of Accounts-1.0.Accounts.Service */
    /**
     * Gets the description of the #AgService.
     */
    getDescription(): string
    /**
     * Gets the display name of the #AgService.
     */
    getDisplayName(): string
    /**
     * Gets the contents of the XML service file.  The buffer returned in `contents`
     * should not be modified or freed, and is guaranteed to be valid as long as
     * `service` is referenced. If `data_offset` is not %NULL, it is set to the
     * offset where the &lt;type_data&gt; element can be found.
     * If some error occurs, `contents` is set to %NULL.
     * @param contents location to receive the pointer to the file contents.
     * @param dataOffset pointer to receive the offset of the type data.
     */
    getFileContents(contents: string, dataOffset: number): void
    /**
     * Gets the translation domain of the #AgService.
     */
    getI18nDomain(): string
    /**
     * Gets the icon name of the #AgService.
     */
    getIconName(): string
    /**
     * Gets the name of the #AgService.
     */
    getName(): string
    /**
     * Gets the provider name of the #AgService.
     */
    getProvider(): string
    /**
     * Gets the service type of the #AgService.
     */
    getServiceType(): string
    /**
     * Get list of tags specified for the #AgService. If the service has not
     * defined tags, tags from the service type will be returned.
     */
    getTags(): string[]
    /**
     * Checks if the #AgService has the requested tag.
     * @param tag tag to check for.
     */
    hasTag(tag: string): boolean
    /**
     * Adds a reference to `service`.
     */
    ref(): Service
    /**
     * Used to unreference the #AgService structure.
     */
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the list `list`.
     * @param list a #GList of services returned by some function of this library.
     */
    static listFree(list: Service[]): void
}
class ServiceType {
    /* Methods of Accounts-1.0.Accounts.ServiceType */
    /**
     * Get the description of the #AgServiceType.
     */
    getDescription(): string
    /**
     * Get the display name of the #AgServiceType.
     */
    getDisplayName(): string
    /**
     * Gets the contents of the XML service type file.  The buffer returned in
     * `contents` should not be modified or freed, and is guaranteed to be valid as
     * long as `service_type` is referenced.
     * If some error occurs, `contents` is set to %NULL.
     * @param contents location to receive the pointer to the file contents.
     * @param len location to receive the length of the file, in bytes.
     */
    getFileContents(contents: string, len: number): void
    /**
     * Get the translation domain of the #AgServiceType.
     */
    getI18nDomain(): string
    /**
     * Get the icon name of the #AgServiceType.
     */
    getIconName(): string
    /**
     * Get the name of the #AgServiceType.
     */
    getName(): string
    /**
     * Get list of tags specified for the #AgServiceType.
     */
    getTags(): string[]
    /**
     * Check if the #AgServiceType has the requested tag.
     * @param tag the tag to check for.
     */
    hasTag(tag: string): boolean
    /**
     * Adds a reference to `service_type`.
     */
    ref(): ServiceType
    /**
     * Used to unreference the #AgServiceType structure.
     */
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the list `list`.
     * @param list a #GList of service types returned by some function of this library, such as ag_manager_list_service_types().
     */
    static listFree(list: ServiceType[]): void
}
    type AccountId = number
}
export default Accounts;