/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Snapd-1
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Snapd {

/**
 * Status of an alias.
 */
enum AliasStatus {
    /**
     * the alias status is unknown.
     */
    UNKNOWN,
    /**
     * deprecated, do not use.
     */
    DEFAULT,
    /**
     * deprecated, do not use.
     */
    ENABLED,
    /**
     * the alias is disabled.
     */
    DISABLED,
    /**
     * the alias is automatically enabled.
     */
    AUTO,
    /**
     * the alias is manually enabled.
     */
    MANUAL,
}
/**
 * Filter to apply to changes.
 */
enum ChangeFilter {
    /**
     * Return all changes.
     */
    ALL,
    /**
     * Return only changes that are in-progress.
     */
    IN_PROGRESS,
    /**
     * Return only changes that are ready.
     */
    READY,
}
/**
 * Confinement used by a snap.
 */
enum Confinement {
    /**
     * the confinement of the snap is unknown.
     */
    UNKNOWN,
    /**
     * the snap is using confinement.
     */
    STRICT,
    /**
     * the snap is in dev mode (i.e. unconfined).
     */
    DEVMODE,
    /**
     * the snap is using classic confinement.
     */
    CLASSIC,
}
/**
 * Type of daemon.
 */
enum DaemonType {
    /**
     * Not a daemon
     */
    NONE,
    /**
     * Unknown daemon type
     */
    UNKNOWN,
    /**
     * Simple daemon
     */
    SIMPLE,
    /**
     * Forking daemon
     */
    FORKING,
    /**
     * One-shot daemon
     */
    ONESHOT,
    /**
     * D-Bus daemon
     */
    DBUS,
    /**
     * Notify daemon
     */
    NOTIFY,
}
/**
 * Error codes returned by snapd operations.
 */
enum Error {
    /**
     * not able to connect to snapd.
     */
    CONNECTION_FAILED,
    /**
     * an error occurred while writing to snapd.
     */
    WRITE_FAILED,
    /**
     * an error occurred while reading from snapd.
     */
    READ_FAILED,
    /**
     * snapd did not understand the request that was sent.
     */
    BAD_REQUEST,
    /**
     * the response received from snapd was not
     *     understood.
     */
    BAD_RESPONSE,
    /**
     * the requested operation requires
     *     authorization data.
     */
    AUTH_DATA_REQUIRED,
    /**
     * the provided authorization data is invalid.
     */
    AUTH_DATA_INVALID,
    /**
     * login requires a two factor code.
     */
    TWO_FACTOR_REQUIRED,
    /**
     * the two factor code provided at login is
     *     invalid.
     */
    TWO_FACTOR_INVALID,
    /**
     * this user account is not permitted to perform
     *     the requested operation.
     */
    PERMISSION_DENIED,
    /**
     * an unspecified error occurred while communicating
     *     with snapd.
     */
    FAILED,
    /**
     * this user has not accepted the store's terms
     *     of service.
     */
    TERMS_NOT_ACCEPTED,
    /**
     * this user has not configured a payment
     *     method.
     */
    PAYMENT_NOT_SETUP,
    /**
     * this user has had their payment method
     *     declined by the payment provider.
     */
    PAYMENT_DECLINED,
    /**
     * the requested snap is already installed.
     */
    ALREADY_INSTALLED,
    /**
     * the requested snap is not installed.
     */
    NOT_INSTALLED,
    /**
     * no update is available for this snap.
     */
    NO_UPDATE_AVAILABLE,
    /**
     * provided password is not valid.
     */
    PASSWORD_POLICY_ERROR,
    /**
     * this snap needs to be installed using devmode.
     */
    NEEDS_DEVMODE,
    /**
     * this snap needs to be installed using classic
     *     mode.
     */
    NEEDS_CLASSIC,
    /**
     * a classic system is required to install
     *    this snap.
     */
    NEEDS_CLASSIC_SYSTEM,
    /**
     * a bad query was provided.
     */
    BAD_QUERY,
    /**
     * A timeout occurred during the request.
     */
    NETWORK_TIMEOUT,
    /**
     * the requested snap couldn't be found.
     */
    NOT_FOUND,
    /**
     * the requested snap is not in the store.
     */
    NOT_IN_STORE,
    /**
     * authentication was cancelled by the user.
     */
    AUTH_CANCELLED,
    /**
     * snap not compatible with classic mode.
     */
    NOT_CLASSIC,
    /**
     * requested snap revision not available.
     */
    REVISION_NOT_AVAILABLE,
    /**
     * requested snap channel not available.
     */
    CHANNEL_NOT_AVAILABLE,
    /**
     * the given snap or directory does not look like a snap.
     */
    NOT_A_SNAP,
    /**
     * A hostname failed to resolve during the request.
     */
    DNS_FAILURE,
    /**
     * A requested configuration option is not set.
     */
    OPTION_NOT_FOUND,
}
/**
 * Type of snap.
 */
enum MaintenanceKind {
    /**
     * an unknown maintenance kind is occurring.
     */
    UNKNOWN,
    /**
     * the daemon is restarting.
     */
    DAEMON_RESTART,
    /**
     * the system is restarting.
     */
    SYSTEM_RESTART,
}
/**
 * Type of markdown node.
 */
enum MarkdownNodeType {
    /**
     * a piece of text.
     */
    TEXT,
    /**
     * a paragraph.
     */
    PARAGRAPH,
    /**
     * an unordered list.
     */
    UNORDERED_LIST,
    /**
     * a list item.
     */
    LIST_ITEM,
    /**
     * a code block.
     */
    CODE_BLOCK,
    /**
     * a code span.
     */
    CODE_SPAN,
    /**
     * emphasised text.
     */
    EMPHASIS,
    /**
     * strongly emphasised text.
     */
    STRONG_EMPHASIS,
    /**
     * a URL.
     */
    URL,
}
/**
 * Version of markdown to parse. Picking a version will ensure only nodes of the expected type are decoded.
 */
enum MarkdownVersion {
    /**
     * the initial version of Snap markdown.
     */
    TODO_0,
}
/**
 * State of validation for a publisher.
 */
enum PublisherValidation {
    /**
     * the validation state of the publisher is unknown.
     */
    UNKNOWN,
    /**
     * the publisher has not proven their identity.
     */
    UNPROVEN,
    /**
     * the publisher has had their identity verified.
     */
    VERIFIED,
}
/**
 * The current state of a snap.
 */
enum SnapStatus {
    /**
     * the snap state is unknown.
     */
    UNKNOWN,
    /**
     * the snap is available for installation.
     */
    AVAILABLE,
    /**
     * the snap is available for purchase.
     */
    PRICED,
    /**
     * the snap is installed but not active.
     */
    INSTALLED,
    /**
     * the snap is installed and active.
     */
    ACTIVE,
}
/**
 * Type of snap.
 */
enum SnapType {
    /**
     * the type of snap is unknown.
     */
    UNKNOWN,
    /**
     * the snap is an application.
     */
    APP,
    /**
     * the snap is a kernel.
     */
    KERNEL,
    /**
     * the snapd is a gadget.
     */
    GADGET,
    /**
     * the snap is an operating system.
     */
    OS,
    /**
     * the snap is a core snap.
     */
    CORE,
    /**
     * the snap is a base snap.
     */
    BASE,
    /**
     * the snap is the snap daemon.
     */
    SNAPD,
}
/**
 * Confinement used by a snap.
 */
enum SystemConfinement {
    /**
     * the confinement of the system is unknown.
     */
    UNKNOWN,
    /**
     * the system supports strict confinement.
     */
    STRICT,
    /**
     * the system supports partial confinement.
     */
    PARTIAL,
}
/**
 * Flag to control when a user accounts is created.
 */
enum CreateUserFlags {
    /**
     * No flags, default behaviour.
     */
    NONE,
    /**
     * Gives sudo access to created user.
     */
    SUDO,
    /**
     * Use the local system-user assertions to create the user.
     */
    KNOWN,
}
/**
 * Flag to change how a find is performed.
 */
enum FindFlags {
    /**
     * No flags, default behaviour.
     */
    NONE,
    /**
     * Search for snaps whose name matches the given
     *     string. The match is exact unless the string ends in *.
     */
    MATCH_NAME,
    /**
     * Search private snaps.
     */
    SELECT_PRIVATE,
    /**
     * Deprecated, do not use.
     */
    SELECT_REFRESH,
    /**
     * Search for snaps from any architecture or branch.
     */
    SCOPE_WIDE,
    /**
     * Search for snaps whose common ID matches
     *     the given string.
     */
    MATCH_COMMON_ID,
}
/**
 * Flag to change which apps are returned.
 */
enum GetAppsFlags {
    /**
     * No flags, default behaviour.
     */
    NONE,
    /**
     * Select services only.
     */
    SELECT_SERVICES,
}
/**
 * Flag to change how connections are returned.
 */
enum GetConnectionsFlags {
    /**
     * No flags, default behaviour.
     */
    NONE,
    /**
     * Select all connections, not just connected ones.
     */
    SELECT_ALL,
}
/**
 * Flags to control how interface information is returned.
 */
enum GetInterfacesFlags {
    /**
     * No flags, default behaviour.
     */
    NONE,
    /**
     * Include interface documentation.
     */
    INCLUDE_DOCS,
    /**
     * Include associated plugs.
     */
    INCLUDE_PLUGS,
    /**
     * Include associated slots.
     */
    INCLUDE_SLOTS,
    /**
     * Only return connected interfaces.
     */
    ONLY_CONNECTED,
}
/**
 * Flag to change which snaps are returned.
 */
enum GetSnapsFlags {
    /**
     * No flags, default behaviour.
     */
    NONE,
    /**
     * Return snaps that are installed but not active.
     */
    INCLUDE_INACTIVE,
}
/**
 * Flags to control install options.
 */
enum InstallFlags {
    /**
     * No flags, default behaviour.
     */
    NONE,
    /**
     * Put snap in classic mode and disable security confinement.
     */
    CLASSIC,
    /**
     * Install the given snap file even if there are
     *    no pre-acknowledged signatures for it, meaning it was not verified and
     *    could be dangerous (implied by #SNAPD_INSTALL_FLAGS_DEVMODE).
     */
    DANGEROUS,
    /**
     * Put snap in development mode and disable security confinement.
     */
    DEVMODE,
    /**
     * Put snap in enforced confinement mode.
     */
    JAILMODE,
}
/**
 * Flags to control remove options.
 */
enum RemoveFlags {
    /**
     * No flags, default behaviour.
     */
    NONE,
    /**
     * Don't save a snapshot the snap's data when removing.
     */
    PURGE,
}
function errorQuark(): GLib.Quark
function loginAsync(username: string, password: string, otp?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function loginFinish(result: Gio.AsyncResult): AuthData
function loginSync(username: string, password: string, otp?: string | null, cancellable?: Gio.Cancellable | null): AuthData
/**
 * Signature for callback function used in
 * snapd_client_connect_interface_sync(),
 * snapd_client_disconnect_interface_async(),
 * snapd_client_install2_sync(),
 * snapd_client_refresh_sync(),
 * snapd_client_remove2_sync(),
 * snapd_client_enable_sync() and
 * snapd_client_disable_sync().
 */
interface ProgressCallback {
    (client: Client, change: Change, deprecated?: object | null): void
}
interface Alias_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.Alias */
    appAuto?: string
    appManual?: string
    command?: string
    name?: string
    snap?: string
    status?: AliasStatus
}
class Alias {
    /* Properties of Snapd-1.Snapd.Alias */
    readonly appAuto: string
    readonly appManual: string
    readonly command: string
    readonly name: string
    readonly snap: string
    readonly status: AliasStatus
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.Alias */
    /**
     * Get the app this is an alias for.
     */
    getApp(): string | null
    /**
     * Get the app this alias has been automatically set to (status is %SNAPD_ALIAS_STATUS_AUTO).
     * Can be overridden when status is %SNAPD_ALIAS_STATUS_MANUAL.
     */
    getAppAuto(): string | null
    /**
     * Get the app this alias has been manually set to (status is %SNAPD_ALIAS_STATUS_MANUAL).
     * This overrides the app from snapd_alias_get_app_auto().
     */
    getAppManual(): string | null
    /**
     * Get the command this alias runs.
     */
    getCommand(): string
    /**
     * Get the name of this alias.
     */
    getName(): string
    /**
     * Get the snap this alias is for.
     */
    getSnap(): string
    /**
     * Get the status of this alias.
     */
    getStatus(): AliasStatus
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
    connect(sigName: "notify::app-auto", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-auto", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-auto", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-auto", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-auto", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-manual", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-manual", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-manual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-manual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-manual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::command", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::command", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::command", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::command", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::command", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::snap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::snap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::snap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::snap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::snap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Alias_ConstructProps)
    _init (config?: Alias_ConstructProps): void
    static $gtype: GObject.Type
}
interface App_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.App */
    active?: boolean
    aliases?: string[]
    commonId?: string
    daemonType?: DaemonType
    desktopFile?: string
    enabled?: boolean
    name?: string
    snap?: string
}
class App {
    /* Properties of Snapd-1.Snapd.App */
    readonly active: boolean
    readonly aliases: string[]
    readonly commonId: string
    readonly daemonType: DaemonType
    readonly desktopFile: string
    readonly enabled: boolean
    readonly name: string
    readonly snap: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.App */
    /**
     * Get if this service is active.
     */
    getActive(): boolean
    /**
     * Get the aliases for this app.
     */
    getAliases(): string[]
    /**
     * Get the common ID associated with this app.
     */
    getCommonId(): string | null
    /**
     * Get the daemon type for this app.
     */
    getDaemonType(): DaemonType | null
    /**
     * Get the path to the desktop file for this app.
     */
    getDesktopFile(): string | null
    /**
     * Get if this service is enabled.
     */
    getEnabled(): boolean
    /**
     * Get the name of this app.
     */
    getName(): string
    /**
     * Get the snap this app is associated with.
     */
    getSnap(): string
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
    connect(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::aliases", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::aliases", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::common-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::common-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::common-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::common-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::common-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::daemon-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::daemon-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::daemon-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::daemon-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::daemon-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::desktop-file", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::desktop-file", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::desktop-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::desktop-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::desktop-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::snap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::snap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::snap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::snap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::snap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: App_ConstructProps)
    _init (config?: App_ConstructProps): void
    static $gtype: GObject.Type
}
interface Assertion_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.Assertion */
    content?: string
}
class Assertion {
    /* Properties of Snapd-1.Snapd.Assertion */
    readonly content: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.Assertion */
    /**
     * Get the body of the assertion.
     */
    getBody(): string | null
    /**
     * Get a header from an assertion.
     * @param name name of the header.
     */
    getHeader(name: string): string | null
    /**
     * Get the headers provided by this assertion.
     */
    getHeaders(): string[]
    /**
     * Get the signature of the assertion.
     */
    getSignature(): string
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
    connect(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Assertion_ConstructProps)
    _init (config?: Assertion_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(content: string): Assertion
    static $gtype: GObject.Type
}
interface AuthData_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.AuthData */
    discharges?: string[]
    macaroon?: string
}
class AuthData {
    /* Properties of Snapd-1.Snapd.AuthData */
    discharges: string[]
    macaroon: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.AuthData */
    /**
     * Get the discharges that this authorization uses.
     */
    getDischarges(): string[]
    /**
     * Get the Macaroon that this authorization uses.
     */
    getMacaroon(): string
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
    connect(sigName: "notify::discharges", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discharges", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::discharges", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::discharges", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::discharges", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::macaroon", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::macaroon", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::macaroon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::macaroon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::macaroon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AuthData_ConstructProps)
    _init (config?: AuthData_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(macaroon: string, discharges: string[]): AuthData
    static $gtype: GObject.Type
}
interface Change_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.Change */
    error?: string
    id?: string
    kind?: string
    ready?: boolean
    readyTime?: GLib.DateTime
    spawnTime?: GLib.DateTime
    status?: string
    summary?: string
    tasks?: object[]
}
class Change {
    /* Properties of Snapd-1.Snapd.Change */
    readonly error: string
    readonly id: string
    readonly kind: string
    readonly ready: boolean
    readonly readyTime: GLib.DateTime
    readonly spawnTime: GLib.DateTime
    readonly status: string
    readonly summary: string
    readonly tasks: object[]
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.Change */
    /**
     * Gets the error string associated with this change.
     */
    getError(): string | null
    /**
     * Get the unique ID for this change.
     */
    getId(): string
    /**
     * Gets the kind of change this is.
     */
    getKind(): string
    /**
     * Get if this change is completed.
     */
    getReady(): boolean
    /**
     * Get the time this task completed or %NULL if not yet completed.
     */
    getReadyTime(): GLib.DateTime | null
    /**
     * Get the time this change started.
     */
    getSpawnTime(): GLib.DateTime
    /**
     * Get the status of the change.
     */
    getStatus(): string
    /**
     * Get a human readable description of the change.
     */
    getSummary(): string
    /**
     * Get the tasks that are in this change.
     */
    getTasks(): Task[]
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
    connect(sigName: "notify::error", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::error", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::kind", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ready", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ready", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ready-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ready-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ready-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ready-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ready-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::spawn-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spawn-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::spawn-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::spawn-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::spawn-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tasks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tasks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tasks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tasks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tasks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Change_ConstructProps)
    _init (config?: Change_ConstructProps): void
    static $gtype: GObject.Type
}
interface Channel_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.Channel */
    confinement?: Confinement
    epoch?: string
    name?: string
    releasedAt?: GLib.DateTime
    revision?: string
    size?: number
    version?: string
}
class Channel {
    /* Properties of Snapd-1.Snapd.Channel */
    readonly confinement: Confinement
    readonly epoch: string
    readonly name: string
    readonly releasedAt: GLib.DateTime
    readonly revision: string
    readonly size: number
    readonly version: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.Channel */
    /**
     * Get the branch this channel is tracking.
     */
    getBranch(): string | null
    /**
     * Get the confinement this snap is using, e.g. %SNAPD_CONFINEMENT_STRICT.
     */
    getConfinement(): Confinement
    /**
     * Get the epoch used on this channel, e.g. "1".
     */
    getEpoch(): string
    /**
     * Get the name of this channel, e.g. "stable".
     * 
     * Channel names are in the form `track/risk/branch`
     * 
     * `track` is the name of the feature track. Defaults to `latest` and is implied
     *         if the track is not present.
     * `risk` is the risk of the channel, one of `stable`, `candidate`, `beta` or `edge`.
     * `branch` is an optional branch name.
     * 
     * Example names:
     * `beta` (alias to `latest/beta`)
     * `xenial/stable` (stable release on xenial track)
     * `latest/stable/red-button` (red button feature branch)
     */
    getName(): string
    /**
     * Get the date this revision was released into the channel or %NULL if unknown.
     */
    getReleasedAt(): GLib.DateTime | null
    /**
     * Get the revision for this snap. The format of the string is undefined.
     * See also snapd_channel_get_version().
     */
    getRevision(): string
    /**
     * Get the risk this channel is on, one of `stable`, `candidate`, `beta` or `edge`.
     */
    getRisk(): string
    /**
     * Get the download size of this snap.
     */
    getSize(): number
    /**
     * Get the track this channel is on.
     */
    getTrack(): string
    /**
     * Get the version for this snap. The format of the string is undefined.
     * See also snapd_channel_get_revision().
     */
    getVersion(): string
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
    connect(sigName: "notify::confinement", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::confinement", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::confinement", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::confinement", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::confinement", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::epoch", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::epoch", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::epoch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::epoch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::epoch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::released-at", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::released-at", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::released-at", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::released-at", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::released-at", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::revision", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::revision", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::revision", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::revision", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::revision", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Channel_ConstructProps)
    _init (config?: Channel_ConstructProps): void
    static $gtype: GObject.Type
}
interface Client_ConstructProps extends GObject.Object_ConstructProps {
}
class Client {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.Client */
    /**
     * Asynchronously abort a change.
     * See snapd_client_abort_change_sync() for more information.
     * @param id a change ID to abort.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    abortChangeAsync(id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_abort_change_async().
     * See snapd_client_abort_change_sync() for more information.
     * @param result a #GAsyncResult.
     */
    abortChangeFinish(result: Gio.AsyncResult): Change
    /**
     * Get information on a change.
     * @param id a change ID to abort.
     * @param cancellable a #GCancellable or %NULL.
     */
    abortChangeSync(id: string, cancellable?: Gio.Cancellable | null): Change
    /**
     * Asynchronously add an assertion.
     * See snapd_client_add_assertions_sync() for more information.
     * @param assertions assertions to add.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    addAssertionsAsync(assertions: string[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_add_assertions_async().
     * See snapd_client_add_assertions_sync() for more information.
     * @param result a #GAsyncResult.
     */
    addAssertionsFinish(result: Gio.AsyncResult): boolean
    /**
     * Add an assertion.
     * @param assertions assertions to add.
     * @param cancellable a #GCancellable or %NULL.
     */
    addAssertionsSync(assertions: string[], cancellable?: Gio.Cancellable | null): boolean
    /**
     * Asynchronously create an alias to an app.
     * See snapd_client_alias_sync() for more information.
     * @param snap the name of the snap to modify.
     * @param app an app in the snap to make the alias to.
     * @param alias the name of the alias (i.e. the command that will run this app).
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    aliasAsync(snap: string, app: string, alias: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_alias_async().
     * See snapd_client_alias_sync() for more information.
     * @param result a #GAsyncResult.
     */
    aliasFinish(result: Gio.AsyncResult): boolean
    /**
     * Create an alias to an app.
     * @param snap the name of the snap to modify.
     * @param app an app in the snap to make the alias to.
     * @param alias the name of the alias (i.e. the command that will run this app).
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     */
    aliasSync(snap: string, app: string, alias: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Asynchronously buy a snap from the store.
     * See snapd_client_buy_sync() for more information.
     * @param id id of snap to buy.
     * @param amount amount of currency to spend, e.g. 0.99.
     * @param currency the currency to buy with as an ISO 4217 currency code, e.g. "NZD".
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    buyAsync(id: string, amount: number, currency: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_buy_async().
     * See snapd_client_buy_sync() for more information.
     * @param result a #GAsyncResult.
     */
    buyFinish(result: Gio.AsyncResult): boolean
    /**
     * Buy a snap from the store. Once purchased, this snap can be installed with
     * snapd_client_install2_sync().
     * @param id id of snap to buy.
     * @param amount amount of currency to spend, e.g. 0.99.
     * @param currency the currency to buy with as an ISO 4217 currency code, e.g. "NZD".
     * @param cancellable a #GCancellable or %NULL.
     */
    buySync(id: string, amount: number, currency: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Asynchronously check if able to buy snaps.
     * See snapd_client_check_buy_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    checkBuyAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_check_buy_async().
     * See snapd_client_check_buy_sync() for more information.
     * @param result a #GAsyncResult.
     */
    checkBuyFinish(result: Gio.AsyncResult): boolean
    /**
     * Check if able to buy snaps.
     * @param cancellable a #GCancellable or %NULL.
     */
    checkBuySync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * This method is no longer required and does nothing, snapd-glib now connects on demand.
     * @param cancellable a #GCancellable or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    connectAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_connect_async().
     * See snapd_client_connect_sync() for more information.
     * @param result a #GAsyncResult.
     */
    connectFinish(result: Gio.AsyncResult): boolean
    /**
     * Asynchronously connect two interfaces together.
     * See snapd_client_connect_interface_sync() for more information.
     * @param plugSnap name of snap containing plug.
     * @param plugName name of plug to connect.
     * @param slotSnap name of snap containing socket.
     * @param slotName name of slot to connect.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    connectInterfaceAsync(plugSnap: string, plugName: string, slotSnap: string, slotName: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_connect_interface_async().
     * See snapd_client_connect_interface_sync() for more information.
     * @param result a #GAsyncResult.
     */
    connectInterfaceFinish(result: Gio.AsyncResult): boolean
    /**
     * Connect two interfaces together.
     * An asynchronous version of this function is snapd_client_connect_interface_async().
     * @param plugSnap name of snap containing plug.
     * @param plugName name of plug to connect.
     * @param slotSnap name of snap containing socket.
     * @param slotName name of slot to connect.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     */
    connectInterfaceSync(plugSnap: string, plugName: string, slotSnap: string, slotName: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * This method is no longer required and does nothing, snapd-glib now connects on demand.
     * @param cancellable a #GCancellable or %NULL
     */
    connectSync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Asynchronously create a local user account.
     * See snapd_client_create_user_sync() for more information.
     * @param email the email of the user to create.
     * @param flags a set of #SnapdCreateUserFlags to control how the user account is created.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    createUserAsync(email: string, flags: CreateUserFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_create_user_async().
     * See snapd_client_create_user_sync() for more information.
     * @param result a #GAsyncResult.
     */
    createUserFinish(result: Gio.AsyncResult): UserInformation
    /**
     * Create a local user account for the given user.
     * @param email the email of the user to create.
     * @param flags a set of #SnapdCreateUserFlags to control how the user account is created.
     * @param cancellable a #GCancellable or %NULL.
     */
    createUserSync(email: string, flags: CreateUserFlags, cancellable?: Gio.Cancellable | null): UserInformation
    /**
     * Asynchronously create local user accounts using the system-user assertions that are valid for this device.
     * See snapd_client_create_users_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    createUsersAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_create_users_async().
     * See snapd_client_create_users_sync() for more information.
     * @param result a #GAsyncResult.
     */
    createUsersFinish(result: Gio.AsyncResult): UserInformation[]
    /**
     * Create local user accounts using the system-user assertions that are valid for this device.
     * @param cancellable a #GCancellable or %NULL.
     */
    createUsersSync(cancellable?: Gio.Cancellable | null): UserInformation[]
    /**
     * Asynchronously change the state of aliases.
     * See snapd_client_disable_aliases_sync() for more information.
     * @param snap the name of the snap to modify.
     * @param aliases the aliases to modify.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    disableAliasesAsync(snap: string, aliases: string[], progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_disable_aliases_async().
     * See snapd_client_disable_aliases_sync() for more information.
     * @param result a #GAsyncResult.
     */
    disableAliasesFinish(result: Gio.AsyncResult): boolean
    /**
     * Change the state of aliases.
     * @param snap the name of the snap to modify.
     * @param aliases the aliases to modify.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     */
    disableAliasesSync(snap: string, aliases: string[], progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Asynchronously disable an installed snap.
     * See snapd_client_disable_sync() for more information.
     * @param name name of snap to disable.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    disableAsync(name: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_disable_async().
     * See snapd_client_disable_sync() for more information.
     * @param result a #GAsyncResult.
     */
    disableFinish(result: Gio.AsyncResult): boolean
    /**
     * Disable an installed snap.
     * @param name name of snap to disable.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     */
    disableSync(name: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Asynchronously disconnect two interfaces.
     * See snapd_client_disconnect_interface_sync() for more information.
     * @param plugSnap name of snap containing plug.
     * @param plugName name of plug to disconnect.
     * @param slotSnap name of snap containing socket.
     * @param slotName name of slot to disconnect.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    disconnectInterfaceAsync(plugSnap: string, plugName: string, slotSnap: string, slotName: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_disconnect_interface_async().
     * See snapd_client_disconnect_interface_sync() for more information.
     * @param result a #GAsyncResult.
     */
    disconnectInterfaceFinish(result: Gio.AsyncResult): boolean
    /**
     * Disconnect two interfaces.
     * @param plugSnap name of snap containing plug.
     * @param plugName name of plug to disconnect.
     * @param slotSnap name of snap containing socket.
     * @param slotName name of slot to disconnect.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     */
    disconnectInterfaceSync(plugSnap: string, plugName: string, slotSnap: string, slotName: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Asynchronously download a snap.
     * See snapd_client_download_sync() for more information.
     * @param name name of snap to download.
     * @param channel channel to download from.
     * @param revision revision to download.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    downloadAsync(name: string, channel?: string | null, revision?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_download_async().
     * See snapd_client_download_sync() for more information.
     * @param result a #GAsyncResult.
     */
    downloadFinish(result: Gio.AsyncResult): any
    /**
     * Download the given snap.
     * @param name name of snap to download.
     * @param channel channel to download from.
     * @param revision revision to download.
     * @param cancellable a #GCancellable or %NULL.
     */
    downloadSync(name: string, channel?: string | null, revision?: string | null, cancellable?: Gio.Cancellable | null): any
    /**
     * Asynchronously change the state of aliases.
     * See snapd_client_enable_aliases_sync() for more information.
     * @param snap the name of the snap to modify.
     * @param aliases the aliases to modify.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    enableAliasesAsync(snap: string, aliases: string[], progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_enable_aliases_async().
     * See snapd_client_enable_aliases_sync() for more information.
     * @param result a #GAsyncResult.
     */
    enableAliasesFinish(result: Gio.AsyncResult): boolean
    /**
     * Change the state of aliases.
     * @param snap the name of the snap to modify.
     * @param aliases the aliases to modify.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     */
    enableAliasesSync(snap: string, aliases: string[], progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Asynchronously enable an installed snap.
     * See snapd_client_enable_sync() for more information.
     * @param name name of snap to enable.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    enableAsync(name: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_enable_async().
     * See snapd_client_enable_sync() for more information.
     * @param result a #GAsyncResult.
     */
    enableFinish(result: Gio.AsyncResult): boolean
    /**
     * Enable an installed snap.
     * @param name name of snap to enable.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     */
    enableSync(name: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Asynchronously find snaps in the store.
     * See snapd_client_find_sync() for more information.
     * @param flags a set of #SnapdFindFlags to control how the find is performed.
     * @param query query string to send.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    findAsync(flags: FindFlags, query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_find_async().
     * See snapd_client_find_sync() for more information.
     * @param result a #GAsyncResult.
     */
    findFinish(result: Gio.AsyncResult): [ /* returnType */ Snap[], /* suggestedCurrency */ string | null ]
    /**
     * Asynchronously find snaps in store that are newer revisions than locally installed versions.
     * See snapd_client_find_refreshable_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    findRefreshableAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_find_refreshable_async().
     * See snapd_client_find_refreshable_sync() for more information.
     * @param result a #GAsyncResult.
     */
    findRefreshableFinish(result: Gio.AsyncResult): Snap[]
    /**
     * Find snaps in store that are newer revisions than locally installed versions.
     * @param cancellable a #GCancellable or %NULL.
     */
    findRefreshableSync(cancellable?: Gio.Cancellable | null): Snap[]
    /**
     * Asynchronously find snaps in the store.
     * See snapd_client_find_section_sync() for more information.
     * @param flags a set of #SnapdFindFlags to control how the find is performed.
     * @param section store section to search in or %NULL to search in all sections.
     * @param query query string to send or %NULL to get all snaps from the given section.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    findSectionAsync(flags: FindFlags, section?: string | null, query?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_find_async().
     * See snapd_client_find_sync() for more information.
     * @param result a #GAsyncResult.
     */
    findSectionFinish(result: Gio.AsyncResult): [ /* returnType */ Snap[], /* suggestedCurrency */ string | null ]
    /**
     * Find snaps in the store.
     * @param flags a set of #SnapdFindFlags to control how the find is performed.
     * @param section store section to search in or %NULL to search in all sections.
     * @param query query string to send or %NULL to get all snaps from the given section.
     * @param cancellable a #GCancellable or %NULL.
     */
    findSectionSync(flags: FindFlags, section?: string | null, query?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ Snap[], /* suggestedCurrency */ string | null ]
    /**
     * Find snaps in the store.
     * @param flags a set of #SnapdFindFlags to control how the find is performed.
     * @param query query string to send.
     * @param cancellable a #GCancellable or %NULL.
     */
    findSync(flags: FindFlags, query: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ Snap[], /* suggestedCurrency */ string | null ]
    /**
     * Asynchronously get the available aliases.
     * See snapd_client_get_aliases_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    getAliasesAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_get_aliases_async().
     * See snapd_client_get_aliases_sync() for more information.
     * @param result a #GAsyncResult.
     */
    getAliasesFinish(result: Gio.AsyncResult): Alias[]
    /**
     * Get the available aliases.
     * @param cancellable a #GCancellable or %NULL.
     */
    getAliasesSync(cancellable?: Gio.Cancellable | null): Alias[]
    /**
     * Get whether snapd operations are allowed to interact with the user.
     */
    getAllowInteraction(): boolean
    /**
     * Asynchronously get information on installed apps.
     * See snapd_client_get_apps2_sync() for more information.
     * @param flags a set of #SnapdGetAppsFlags to control what results are returned.
     * @param snaps A list of snap names to return results for. If %NULL or empty then apps for all installed snaps are returned.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    getApps2Async(flags: GetAppsFlags, snaps?: string[] | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_get_apps2_async().
     * See snapd_client_get_apps2_sync() for more information.
     * @param result a #GAsyncResult.
     */
    getApps2Finish(result: Gio.AsyncResult): App[]
    /**
     * Get information on installed apps.
     * @param flags a set of #SnapdGetAppsFlags to control what results are returned.
     * @param snaps A list of snap names to return results for. If %NULL or empty then apps for all installed snaps are returned.
     * @param cancellable a #GCancellable or %NULL.
     */
    getApps2Sync(flags: GetAppsFlags, snaps?: string[] | null, cancellable?: Gio.Cancellable | null): App[]
    /**
     * Asynchronously get information on installed apps.
     * See snapd_client_get_apps_sync() for more information.
     * @param flags a set of #SnapdGetAppsFlags to control what results are returned.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    getAppsAsync(flags: GetAppsFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_get_apps_async().
     * See snapd_client_get_apps_sync() for more information.
     * @param result a #GAsyncResult.
     */
    getAppsFinish(result: Gio.AsyncResult): App[]
    /**
     * Get information on installed apps.
     * @param flags a set of #SnapdGetAppsFlags to control what results are returned.
     * @param cancellable a #GCancellable or %NULL.
     */
    getAppsSync(flags: GetAppsFlags, cancellable?: Gio.Cancellable | null): App[]
    /**
     * Asynchronously get assertions.
     * See snapd_client_get_assertions_sync() for more information.
     * @param type assertion type to get.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    getAssertionsAsync(type: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_get_assertions_async().
     * See snapd_client_get_assertions_sync() for more information.
     * @param result a #GAsyncResult.
     */
    getAssertionsFinish(result: Gio.AsyncResult): string[]
    /**
     * Get assertions.
     * @param type assertion type to get.
     * @param cancellable a #GCancellable or %NULL.
     */
    getAssertionsSync(type: string, cancellable?: Gio.Cancellable | null): string[]
    /**
     * Get the authorization data that is used for requests.
     */
    getAuthData(): AuthData | null
    /**
     * Asynchronously get information on a change.
     * See snapd_client_get_change_sync() for more information.
     * @param id a change ID to get information on.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    getChangeAsync(id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_get_change_async().
     * See snapd_client_get_change_sync() for more information.
     * @param result a #GAsyncResult.
     */
    getChangeFinish(result: Gio.AsyncResult): Change
    /**
     * Get information on a change.
     * @param id a change ID to get information on.
     * @param cancellable a #GCancellable or %NULL.
     */
    getChangeSync(id: string, cancellable?: Gio.Cancellable | null): Change
    /**
     * Asynchronously get changes that have occurred / are occurring on the snap daemon.
     * See snapd_client_get_changes_sync() for more information.
     * @param filter changes to filter on.
     * @param snapName name of snap to filter on or %NULL for changes for any snap.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    getChangesAsync(filter: ChangeFilter, snapName?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_get_changes_async().
     * See snapd_client_get_changes_sync() for more information.
     * @param result a #GAsyncResult.
     */
    getChangesFinish(result: Gio.AsyncResult): Change[]
    /**
     * Get changes that have occurred / are occurring on the snap daemon.
     * @param filter changes to filter on.
     * @param snapName name of snap to filter on or %NULL for changes for any snap.
     * @param cancellable a #GCancellable or %NULL.
     */
    getChangesSync(filter: ChangeFilter, snapName?: string | null, cancellable?: Gio.Cancellable | null): Change[]
    /**
     * Asynchronously get the installed snap connections.
     * See snapd_client_get_connections_sync() for more information.
     * @param flags a set of #SnapdGetConnectionsFlags to control what results are returned.
     * @param snap the name of the snap to get connections for or %NULL for all snaps.
     * @param interface the name of the interface to get connections for or %NULL for all interfaces.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    getConnections2Async(flags: GetConnectionsFlags, snap?: string | null, interface?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_get_connections_async().
     * See snapd_client_get_connections_sync() for more information.
     * @param result a #GAsyncResult.
     */
    getConnections2Finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* established */ Connection[] | null, /* undesired */ Connection[] | null, /* plugs */ Plug[] | null, /* slots */ Slot[] | null ]
    /**
     * Get the installed snap connections.
     * @param flags a set of #SnapdGetConnectionsFlags to control what results are returned.
     * @param snap the name of the snap to get connections for or %NULL for all snaps.
     * @param interface the name of the interface to get connections for or %NULL for all interfaces.
     * @param cancellable a #GCancellable or %NULL.
     */
    getConnections2Sync(flags: GetConnectionsFlags, snap?: string | null, interface?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* established */ Connection[] | null, /* undesired */ Connection[] | null, /* plugs */ Plug[] | null, /* slots */ Slot[] | null ]
    /**
     * Asynchronously get the installed snap connections.
     * See snapd_client_get_connections_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    getConnectionsAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_get_connections_async().
     * See snapd_client_get_connections_sync() for more information.
     * @param result a #GAsyncResult.
     */
    getConnectionsFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* established */ Connection[] | null, /* undesired */ Connection[] | null, /* plugs */ Plug[] | null, /* slots */ Slot[] | null ]
    /**
     * Get the installed snap connections.
     * @param cancellable a #GCancellable or %NULL.
     */
    getConnectionsSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* established */ Connection[] | null, /* undesired */ Connection[] | null, /* plugs */ Plug[] | null, /* slots */ Slot[] | null ]
    /**
     * Asynchronously get the icon for an installed snap.
     * See snapd_client_get_icon_sync() for more information.
     * @param name name of snap to get icon for.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    getIconAsync(name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_get_icon_async().
     * See snapd_client_get_icon_sync() for more information.
     * @param result a #GAsyncResult.
     */
    getIconFinish(result: Gio.AsyncResult): Icon
    /**
     * Get the icon for an installed snap.
     * @param name name of snap to get icon for.
     * @param cancellable a #GCancellable or %NULL.
     */
    getIconSync(name: string, cancellable?: Gio.Cancellable | null): Icon
    /**
     * Asynchronously get the installed snap interfaces.
     * See snapd_client_get_interfaces2_sync() for more information.
     * @param flags a set of #SnapdGetInterfacesFlags to control what information is returned about the interfaces.
     * @param names a null-terminated array of interface names or %NULL.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    getInterfaces2Async(flags: GetInterfacesFlags, names?: string[] | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_get_interfaces2_async().
     * See snapd_client_get_interfaces2_sync() for more information.
     * @param result a #GAsyncResult.
     */
    getInterfaces2Finish(result: Gio.AsyncResult): Interface[]
    /**
     * Get information about the available snap interfaces.
     * @param flags a set of #SnapdGetInterfacesFlags to control what information is returned about the interfaces.
     * @param names a null-terminated array of interface names or %NULL.
     * @param cancellable a #GCancellable or %NULL.
     */
    getInterfaces2Sync(flags: GetInterfacesFlags, names?: string[] | null, cancellable?: Gio.Cancellable | null): Interface[]
    /**
     * Asynchronously get the installed snap interfaces.
     * See snapd_client_get_interfaces_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    getInterfacesAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_get_interfaces_async().
     * See snapd_client_get_interfaces_sync() for more information.
     * @param result a #GAsyncResult.
     */
    getInterfacesFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* plugs */ Plug[] | null, /* slots */ Slot[] | null ]
    /**
     * Get the installed snap interfaces.
     * @param cancellable a #GCancellable or %NULL.
     */
    getInterfacesSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* plugs */ Plug[] | null, /* slots */ Slot[] | null ]
    /**
     * Get the maintenance information reported by snapd or %NULL if no maintenance is in progress.
     * This information is updated after every request.
     */
    getMaintenance(): Maintenance | null
    /**
     * Asynchronously get the store sections.
     * See snapd_client_get_sections_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    getSectionsAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_get_sections_async().
     * See snapd_client_get_sections_sync() for more information.
     * @param result a #GAsyncResult.
     */
    getSectionsFinish(result: Gio.AsyncResult): string[]
    /**
     * Get the store sections.
     * @param cancellable a #GCancellable or %NULL.
     */
    getSectionsSync(cancellable?: Gio.Cancellable | null): string[]
    /**
     * Asynchronously get information of a single installed snap.
     * See snapd_client_get_snap_sync() for more information.
     * @param name name of snap to get.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    getSnapAsync(name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Asynchronously get configuration for a snap.
     * See snapd_client_get_snap_conf_sync() for more information.
     * @param name name of snap to get configuration from.
     * @param keys keys to returns or %NULL to return all.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    getSnapConfAsync(name: string, keys?: string[] | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_get_snap_conf_async().
     * See snapd_client_get_snap_conf_sync() for more information.
     * @param result a #GAsyncResult.
     */
    getSnapConfFinish(result: Gio.AsyncResult): GLib.HashTable
    /**
     * Get configuration for a snap. System configuration is stored using the name "system".
     * @param name name of snap to get configuration from.
     * @param keys keys to returns or %NULL to return all.
     * @param cancellable a #GCancellable or %NULL.
     */
    getSnapConfSync(name: string, keys?: string[] | null, cancellable?: Gio.Cancellable | null): GLib.HashTable
    /**
     * Complete request started with snapd_client_get_snap_async().
     * See snapd_client_get_snap_sync() for more information.
     * @param result a #GAsyncResult.
     */
    getSnapFinish(result: Gio.AsyncResult): Snap
    /**
     * Get information of a single installed snap. If the snap does not exist an error occurs.
     * @param name name of snap to get.
     * @param cancellable a #GCancellable or %NULL.
     */
    getSnapSync(name: string, cancellable?: Gio.Cancellable | null): Snap
    /**
     * Asynchronously get information on installed snaps.
     * See snapd_client_get_snaps_sync() for more information.
     * @param flags a set of #SnapdGetSnapsFlags to control what results are returned.
     * @param names A list of snap names to return results for. If %NULL or empty then all installed snaps are returned.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    getSnapsAsync(flags: GetSnapsFlags, names?: string[] | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_get_snaps_async().
     * See snapd_client_get_snaps_sync() for more information.
     * @param result a #GAsyncResult.
     */
    getSnapsFinish(result: Gio.AsyncResult): Snap[]
    /**
     * Get information on installed snaps (snaps with status %SNAPD_SNAP_STATUS_ACTIVE).
     * If `flags` contains %SNAPD_GET_SNAPS_FLAGS_INCLUDE_INACTIVE then also return snaps
     * with status %SNAPD_SNAP_STATUS_INSTALLED.
     * 
     * If `names` is not %NULL and contains at least one name only snaps that match these names are
     * returned. If a snap is not installed it is not returned (no error is generated).
     * @param flags a set of #SnapdGetSnapsFlags to control what results are returned.
     * @param names A list of snap names or %NULL.
     * @param cancellable a #GCancellable or %NULL.
     */
    getSnapsSync(flags: GetSnapsFlags, names?: string[] | null, cancellable?: Gio.Cancellable | null): Snap[]
    /**
     * Get the unix socket path to connect to snapd with.
     */
    getSocketPath(): string
    /**
     * Request system information asynchronously from snapd.
     * See snapd_client_get_system_information_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    getSystemInformationAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_get_system_information_async().
     * See snapd_client_get_system_information_sync() for more information.
     * @param result a #GAsyncResult.
     */
    getSystemInformationFinish(result: Gio.AsyncResult): SystemInformation
    /**
     * Request system information from snapd.
     * While this blocks, snapd is expected to return the information quickly.
     * @param cancellable a #GCancellable or %NULL.
     */
    getSystemInformationSync(cancellable?: Gio.Cancellable | null): SystemInformation
    /**
     * Get the HTTP user-agent that is sent with each request to snapd.
     */
    getUserAgent(): string | null
    /**
     * Asynchronously get user accounts that are valid for this device.
     * See snapd_client_get_users_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    getUsersAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_get_users_async().
     * See snapd_client_get_users_sync() for more information.
     * @param result a #GAsyncResult.
     */
    getUsersFinish(result: Gio.AsyncResult): UserInformation[]
    /**
     * Get user accounts that are valid for this device.
     * @param cancellable a #GCancellable or %NULL.
     */
    getUsersSync(cancellable?: Gio.Cancellable | null): UserInformation[]
    /**
     * Asynchronously install a snap from the store.
     * See snapd_client_install2_sync() for more information.
     * @param flags a set of #SnapdInstallFlags to control install options.
     * @param name name of snap to install.
     * @param channel channel to install from or %NULL for default.
     * @param revision revision to install or %NULL for default.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    install2Async(flags: InstallFlags, name: string, channel?: string | null, revision?: string | null, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_install2_async().
     * See snapd_client_install2_sync() for more information.
     * @param result a #GAsyncResult.
     */
    install2Finish(result: Gio.AsyncResult): boolean
    /**
     * Install a snap from the store.
     * @param flags a set of #SnapdInstallFlags to control install options.
     * @param name name of snap to install.
     * @param channel channel to install from or %NULL for default.
     * @param revision revision to install or %NULL for default.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     */
    install2Sync(flags: InstallFlags, name: string, channel?: string | null, revision?: string | null, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Asynchronously install a snap from the store.
     * See snapd_client_install_sync() for more information.
     * @param name name of snap to install.
     * @param channel channel to install from or %NULL for default.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    installAsync(name: string, channel?: string | null, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_install_async().
     * See snapd_client_install_sync() for more information.
     * @param result a #GAsyncResult.
     */
    installFinish(result: Gio.AsyncResult): boolean
    /**
     * Asynchronously install a snap.
     * See snapd_client_install_stream_sync() for more information.
     * @param flags a set of #SnapdInstallFlags to control install options.
     * @param stream a #GInputStream containing the snap file contents to install.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    installStreamAsync(flags: InstallFlags, stream: Gio.InputStream, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_install_stream_async().
     * See snapd_client_install_stream_sync() for more information.
     * @param result a #GAsyncResult.
     */
    installStreamFinish(result: Gio.AsyncResult): boolean
    /**
     * Install a snap. The snap contents are provided in the form of an input stream.
     * To install from a local file, do the following:
     * 
     * |[
     * g_autoptr(GFile) file = g_file_new_for_path (path_to_snap_file);
     * g_autoptr(GInputStream) stream = g_file_read (file, cancellable, &error);
     * snapd_client_install_stream_sync (self, stream, progress_cb, NULL, cancellable, &error);
     * \]
     * 
     * Or if you have the file in memory you can use:
     * 
     * |[
     * g_autoptr(GInputStream) stream = g_memory_input_stream_new_from_data (data, data_length, free_data);
     * snapd_client_install_stream_sync (self, stream, progress_cb, NULL, cancellable, &error);
     * \]
     * @param flags a set of #SnapdInstallFlags to control install options.
     * @param stream a #GInputStream containing the snap file contents to install.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     */
    installStreamSync(flags: InstallFlags, stream: Gio.InputStream, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Install a snap from the store.
     * @param name name of snap to install.
     * @param channel channel to install from or %NULL for default.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     */
    installSync(name: string, channel?: string | null, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Asynchronously get information on all installed snaps.
     * See snapd_client_list_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    listAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_list_async().
     * See snapd_client_list_sync() for more information.
     * @param result a #GAsyncResult.
     */
    listFinish(result: Gio.AsyncResult): Snap[]
    /**
     * Asynchronously get information of a single installed snap.
     * See snapd_client_list_one_sync() for more information.
     * @param name name of snap to get.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    listOneAsync(name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_list_one_async().
     * See snapd_client_list_one_sync() for more information.
     * @param result a #GAsyncResult.
     */
    listOneFinish(result: Gio.AsyncResult): Snap
    /**
     * Get information of a single installed snap.
     * @param name name of snap to get.
     * @param cancellable a #GCancellable or %NULL.
     */
    listOneSync(name: string, cancellable?: Gio.Cancellable | null): Snap
    /**
     * Get information on all installed snaps.
     * @param cancellable a #GCancellable or %NULL.
     */
    listSync(cancellable?: Gio.Cancellable | null): Snap[]
    /**
     * Asynchronously get authorization to install/remove snaps.
     * See snapd_client_login2_sync() for more information.
     * @param email email address to log in with.
     * @param password password to log in with.
     * @param otp response to one-time password challenge.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    login2Async(email: string, password: string, otp?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_login2_async().
     * See snapd_client_login2_sync() for more information.
     * @param result a #GAsyncResult.
     */
    login2Finish(result: Gio.AsyncResult): UserInformation
    /**
     * Log in to snapd and get authorization to install/remove snaps.
     * @param email email address to log in with.
     * @param password password to log in with.
     * @param otp response to one-time password challenge.
     * @param cancellable a #GCancellable or %NULL.
     */
    login2Sync(email: string, password: string, otp?: string | null, cancellable?: Gio.Cancellable | null): UserInformation
    /**
     * Asynchronously get authorization to install/remove snaps.
     * See snapd_client_login_sync() for more information.
     * @param email email address to log in with.
     * @param password password to log in with.
     * @param otp response to one-time password challenge.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    loginAsync(email: string, password: string, otp?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_login_async().
     * See snapd_client_login_sync() for more information.
     * @param result a #GAsyncResult.
     */
    loginFinish(result: Gio.AsyncResult): AuthData
    /**
     * Log in to snapd and get authorization to install/remove snaps.
     * @param email email address to log in with.
     * @param password password to log in with.
     * @param otp response to one-time password challenge.
     * @param cancellable a #GCancellable or %NULL.
     */
    loginSync(email: string, password: string, otp?: string | null, cancellable?: Gio.Cancellable | null): AuthData
    /**
     * Asynchronously log out from the snap store.
     * See snapd_client_logout_sync() for more information.
     * @param id login ID to use.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    logoutAsync(id: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_logout_async().
     * See snapd_client_logout_sync() for more information.
     * @param result a #GAsyncResult.
     */
    logoutFinish(result: Gio.AsyncResult): boolean
    /**
     * Log out from snapd.
     * @param id login ID to use.
     * @param cancellable a #GCancellable or %NULL.
     */
    logoutSync(id: number, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Asynchronously ???.
     * See snapd_client_prefer_sync() for more information.
     * @param snap the name of the snap to modify.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    preferAsync(snap: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_prefer_async().
     * See snapd_client_prefer_sync() for more information.
     * @param result a #GAsyncResult.
     */
    preferFinish(result: Gio.AsyncResult): boolean
    /**
     * ???
     * @param snap the name of the snap to modify.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     */
    preferSync(snap: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Asynchronously ensure all snaps are updated to their latest versions.
     * See snapd_client_refresh_all_sync() for more information.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    refreshAllAsync(progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_refresh_all_async().
     * See snapd_client_refresh_all_sync() for more information.
     * @param result a #GAsyncResult.
     */
    refreshAllFinish(result: Gio.AsyncResult): string[]
    /**
     * Update all installed snaps to their latest version.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     */
    refreshAllSync(progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): string[]
    /**
     * Asynchronously ensure an installed snap is at the latest version.
     * See snapd_client_refresh_sync() for more information.
     * @param name name of snap to refresh.
     * @param channel channel to refresh from or %NULL for default.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    refreshAsync(name: string, channel?: string | null, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_refresh_async().
     * See snapd_client_refresh_sync() for more information.
     * @param result a #GAsyncResult.
     */
    refreshFinish(result: Gio.AsyncResult): boolean
    /**
     * Ensure an installed snap is at the latest version.
     * @param name name of snap to refresh.
     * @param channel channel to refresh from or %NULL for default.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     */
    refreshSync(name: string, channel?: string | null, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Asynchronously uninstall a snap.
     * See snapd_client_remove2_sync() for more information.
     * @param flags a set of #SnapdRemoveFlags to control remove options.
     * @param name name of snap to remove.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    remove2Async(flags: RemoveFlags, name: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_remove2_async().
     * See snapd_client_remove2_sync() for more information.
     * @param result a #GAsyncResult.
     */
    remove2Finish(result: Gio.AsyncResult): boolean
    /**
     * Uninstall a snap.
     * @param flags a set of #SnapdRemoveFlags to control remove options.
     * @param name name of snap to remove.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     */
    remove2Sync(flags: RemoveFlags, name: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Asynchronously uninstall a snap.
     * See snapd_client_remove_sync() for more information.
     * @param name name of snap to remove.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    removeAsync(name: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_remove_async().
     * See snapd_client_remove_sync() for more information.
     * @param result a #GAsyncResult.
     */
    removeFinish(result: Gio.AsyncResult): boolean
    /**
     * Uninstall a snap.
     * @param name name of snap to remove.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     */
    removeSync(name: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Asynchronously change the state of aliases.
     * See snapd_client_reset_aliases_sync() for more information.
     * @param snap the name of the snap to modify.
     * @param aliases the aliases to modify.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    resetAliasesAsync(snap: string, aliases: string[], progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_reset_aliases_async().
     * See snapd_client_reset_aliases_sync() for more information.
     * @param result a #GAsyncResult.
     */
    resetAliasesFinish(result: Gio.AsyncResult): boolean
    /**
     * Change the state of aliases.
     * @param snap the name of the snap to modify.
     * @param aliases the aliases to modify.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     */
    resetAliasesSync(snap: string, aliases: string[], progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Asynchronously run a snapctl command.
     * See snapd_client_run_snapctl_sync() for more information.
     * @param contextId context for this call.
     * @param args the arguments to pass to snapctl.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    runSnapctlAsync(contextId: string, args: string[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_run_snapctl_async().
     * See snapd_client_run_snapctl_sync() for more information.
     * @param result a #GAsyncResult.
     */
    runSnapctlFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* stdoutOutput */ string | null, /* stderrOutput */ string | null ]
    /**
     * Run a snapctl command.
     * @param contextId context for this call.
     * @param args the arguments to pass to snapctl.
     * @param cancellable a #GCancellable or %NULL.
     */
    runSnapctlSync(contextId: string, args: string[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* stdoutOutput */ string[] | null, /* stderrOutput */ string[] | null ]
    /**
     * Set whether snapd operations are allowed to interact with the user.
     * This affects operations that use polkit authorisation.
     * Defaults to TRUE.
     * @param allowInteraction whether to allow interaction.
     */
    setAllowInteraction(allowInteraction: boolean): void
    /**
     * Set the authorization data to use for requests. Authorization data can be
     * obtained by:
     * 
     * - Logging into snapd using snapd_client_login_sync()
     * 
     * - Using an existing authorization with snapd_auth_data_new().
     * @param authData a #SnapdAuthData or %NULL.
     */
    setAuthData(authData?: AuthData | null): void
    /**
     * Asynchronously set configuration for a snap.
     * See snapd_client_set_snap_conf_sync() for more information.
     * @param name name of snap to set configuration for.
     * @param keyValues Keys to set.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    setSnapConfAsync(name: string, keyValues: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_set_snap_conf_async().
     * See snapd_client_set_snap_conf_sync() for more information.
     * @param result a #GAsyncResult.
     */
    setSnapConfFinish(result: Gio.AsyncResult): boolean
    /**
     * Set configuration for a snap. System configuration is stored using the name "system".
     * @param name name of snap to set configuration for.
     * @param keyValues Keys to set.
     * @param cancellable a #GCancellable or %NULL.
     */
    setSnapConfSync(name: string, keyValues: GLib.HashTable, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Set the Unix socket path to connect to snapd with.
     * Defaults to the system socket.
     * @param socketPath a socket path or %NULL to reset to the default.
     */
    setSocketPath(socketPath?: string | null): void
    /**
     * Set the HTTP user-agent that is sent with each request to snapd.
     * Defaults to "snapd-glib/VERSION".
     * @param userAgent a user agent or %NULL.
     */
    setUserAgent(userAgent?: string | null): void
    /**
     * Asynchronously set the tracking channel on an installed snap.
     * See snapd_client_switch_sync() for more information.
     * @param name name of snap to switch channel.
     * @param channel channel to track.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    switchAsync(name: string, channel: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_switch_async().
     * See snapd_client_switch_sync() for more information.
     * @param result a #GAsyncResult.
     */
    switchFinish(result: Gio.AsyncResult): boolean
    /**
     * Set the tracking channel on an installed snap.
     * @param name name of snap to switch channel.
     * @param channel channel to track.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     */
    switchSync(name: string, channel: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Asynchronously try a snap.
     * See snapd_client_try_sync() for more information.
     * @param path path to snap directory to try.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    tryAsync(path: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_try_async().
     * See snapd_client_try_sync() for more information.
     * @param result a #GAsyncResult.
     */
    tryFinish(result: Gio.AsyncResult): boolean
    /**
     * Try a snap.
     * @param path path to snap directory to try.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     */
    trySync(path: string, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Asynchronously remove an alias from an app.
     * See snapd_client_unalias_sync() for more information.
     * @param snap the name of the snap to modify or %NULL.
     * @param alias the name of the alias to remove or %NULL to remove all aliases for the given snap.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    unaliasAsync(snap?: string | null, alias?: string | null, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_unalias_async().
     * See snapd_client_unalias_sync() for more information.
     * @param result a #GAsyncResult.
     */
    unaliasFinish(result: Gio.AsyncResult): boolean
    /**
     * Remove an alias from an app.
     * @param snap the name of the snap to modify or %NULL.
     * @param alias the name of the alias to remove or %NULL to remove all aliases for the given snap.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     */
    unaliasSync(snap?: string | null, alias?: string | null, progressCallback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): boolean
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
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Client
    static newFromSocket(socket: Gio.Socket): Client
    static $gtype: GObject.Type
}
interface Connection_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.Connection */
    gadget?: boolean
    interface?: string
    manual?: boolean
    name?: string
    plug?: PlugRef
    plugAttrs?: GLib.HashTable
    slot?: SlotRef
    slotAttrs?: GLib.HashTable
    snap?: string
}
class Connection {
    /* Properties of Snapd-1.Snapd.Connection */
    readonly gadget: boolean
    readonly interface: string
    readonly manual: boolean
    readonly name: string
    readonly plug: PlugRef
    readonly plugAttrs: GLib.HashTable
    readonly slot: SlotRef
    readonly slotAttrs: GLib.HashTable
    readonly snap: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.Connection */
    /**
     * Get if this connection was made by the gadget snap.
     */
    getGadget(): boolean
    /**
     * Get the interface this connections uses.
     */
    getInterface(): string
    /**
     * Get if this connection was made manually.
     */
    getManual(): boolean
    /**
     * Get the name of this connection (i.e. a slot or plug name).
     */
    getName(): string
    /**
     * Get the plug this connection is made with.
     */
    getPlug(): PlugRef
    /**
     * Get an attribute for connected plug.
     * @param name an attribute name.
     */
    getPlugAttribute(name: string): GLib.Variant | null
    /**
     * Get the names of the attributes the connected plug has.
     */
    getPlugAttributeNames(): [ /* returnType */ string[], /* length */ number | null ]
    /**
     * Get the slot this connection is made with.
     */
    getSlot(): SlotRef
    /**
     * Get an attribute for connected slot.
     * @param name an attribute name.
     */
    getSlotAttribute(name: string): GLib.Variant | null
    /**
     * Get the names of the attributes the connected slot has.
     */
    getSlotAttributeNames(): [ /* returnType */ string[], /* length */ number | null ]
    /**
     * Get the snap this connection is on.
     */
    getSnap(): string
    /**
     * Check if the connected plug has an attribute.
     * @param name an attribute name.
     */
    hasPlugAttribute(name: string): boolean
    /**
     * Check if the connected slot has an attribute.
     * @param name an attribute name.
     */
    hasSlotAttribute(name: string): boolean
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
    connect(sigName: "notify::gadget", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gadget", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gadget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gadget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gadget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::manual", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manual", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::manual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::manual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::manual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::plug", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plug", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::plug", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::plug", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::plug", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::plug-attrs", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plug-attrs", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::plug-attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::plug-attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::plug-attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::slot", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slot", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::slot", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::slot", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::slot", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::slot-attrs", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slot-attrs", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::slot-attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::slot-attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::slot-attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::snap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::snap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::snap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::snap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::snap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Connection_ConstructProps)
    _init (config?: Connection_ConstructProps): void
    static $gtype: GObject.Type
}
interface Icon_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.Icon */
    data?: any
    mimeType?: string
}
class Icon {
    /* Properties of Snapd-1.Snapd.Icon */
    readonly data: any
    readonly mimeType: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.Icon */
    /**
     * Get the binary data for this icon.
     */
    getData(): any
    /**
     * Get the mime-type for this icon, e.g. "image/png".
     */
    getMimeType(): string
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
    connect(sigName: "notify::data", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mime-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Icon_ConstructProps)
    _init (config?: Icon_ConstructProps): void
    static $gtype: GObject.Type
}
interface Interface_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.Interface */
    docUrl?: string
    name?: string
    plugs?: object[]
    slots?: object[]
    summary?: string
}
class Interface {
    /* Properties of Snapd-1.Snapd.Interface */
    readonly docUrl: string
    readonly name: string
    readonly plugs: object[]
    readonly slots: object[]
    readonly summary: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.Interface */
    /**
     * Get the documentation URL of this interface.
     */
    getDocUrl(): string
    /**
     * Get the name of this interface.
     */
    getName(): string
    /**
     * Get the plugs matching this interface type.
     */
    getPlugs(): Plug[]
    /**
     * Get the slots matching this interface type.
     */
    getSlots(): Slot[]
    /**
     * Get the summary of this interface.
     */
    getSummary(): string
    /**
     * Make a label for this interface suitable for a user interface.
     */
    makeLabel(): string
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
    connect(sigName: "notify::doc-url", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::doc-url", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::doc-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::doc-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::doc-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::plugs", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plugs", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::plugs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::plugs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::plugs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::slots", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slots", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::slots", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::slots", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::slots", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Interface_ConstructProps)
    _init (config?: Interface_ConstructProps): void
    static $gtype: GObject.Type
}
interface Maintenance_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.Maintenance */
    kind?: MaintenanceKind
    message?: string
}
class Maintenance {
    /* Properties of Snapd-1.Snapd.Maintenance */
    readonly kind: MaintenanceKind
    readonly message: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.Maintenance */
    /**
     * Get the kind of maintenance kind, e.g. %SNAPD_MAINTENANCE_KIND_DAEMON_RESTART.
     */
    getKind(): MaintenanceKind
    /**
     * Get the user readable message associate with the maintenance state.
     */
    getMessage(): string
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
    connect(sigName: "notify::kind", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::message", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Maintenance_ConstructProps)
    _init (config?: Maintenance_ConstructProps): void
    static $gtype: GObject.Type
}
interface MarkdownNode_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.MarkdownNode */
    children?: object[]
    nodeType?: MarkdownNodeType
    text?: string
}
class MarkdownNode {
    /* Properties of Snapd-1.Snapd.MarkdownNode */
    readonly children: object[]
    readonly nodeType: MarkdownNodeType
    readonly text: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.MarkdownNode */
    /**
     * Get the child nodes of this node.
     */
    getChildren(): MarkdownNode[]
    /**
     * Get the type of node this is.
     */
    getNodeType(): MarkdownNodeType
    /**
     * Gets the text associated with this node. This is only present for nodes of type
     * %SNAPD_MARKDOWN_NODE_TYPE_TEXT.
     */
    getText(): string
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
    connect(sigName: "notify::children", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::text", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MarkdownNode_ConstructProps)
    _init (config?: MarkdownNode_ConstructProps): void
    static $gtype: GObject.Type
}
interface MarkdownParser_ConstructProps extends GObject.Object_ConstructProps {
}
class MarkdownParser {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.MarkdownParser */
    /**
     * Check if paragraph whitespace will be kept intact.
     */
    getPreserveWhitespace(): boolean
    /**
     * Convert text in snapd markdown format to markup.
     * @param text text to parse.
     */
    parse(text: string): MarkdownNode[]
    /**
     * Consecutive paragraph whitespace (space, tabs, newlines) is automatically
     * combined into a single space character. This renders the paragraphs in the
     * form that HTML uses. If you need the original whitespace that the markdown
     * author wrote then set this to %FALSE.
     * @param preserveWhitespace %TRUE if the parse should keep paragraph whitespace intact.
     */
    setPreserveWhitespace(preserveWhitespace: boolean): void
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
    constructor (config?: MarkdownParser_ConstructProps)
    _init (config?: MarkdownParser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(version: MarkdownVersion): MarkdownParser
    static $gtype: GObject.Type
}
interface Media_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.Media */
    height?: number
    type?: string
    url?: string
    width?: number
}
class Media {
    /* Properties of Snapd-1.Snapd.Media */
    readonly height: number
    readonly type: string
    readonly url: string
    readonly width: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.Media */
    /**
     * Get the height of the media in pixels or 0 if unknown.
     */
    getHeight(): number
    /**
     * Get the type for this media, e.g. "icon" or "screenshot".
     */
    getMediaType(): string
    /**
     * Get the URL for this media, e.g. "http://example.com/media.png"
     */
    getUrl(): string
    /**
     * Get the width of the media in pixels or 0 if unknown.
     */
    getWidth(): number
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
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::url", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Media_ConstructProps)
    _init (config?: Media_ConstructProps): void
    static $gtype: GObject.Type
}
interface Plug_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.Plug */
    attributes?: GLib.HashTable
    connections?: object[]
    interface?: string
    label?: string
    name?: string
    snap?: string
}
class Plug {
    /* Properties of Snapd-1.Snapd.Plug */
    readonly attributes: GLib.HashTable
    readonly connections: object[]
    readonly interface: string
    readonly label: string
    readonly name: string
    readonly snap: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.Plug */
    /**
     * Get an attribute for this interface.
     * @param name an attribute name.
     */
    getAttribute(name: string): GLib.Variant | null
    /**
     * Get the names of the attributes this plug has.
     */
    getAttributeNames(): [ /* returnType */ string[], /* length */ number | null ]
    /**
     * Get the slots connected to this plug.
     */
    getConnectedSlots(): SlotRef[]
    /**
     * Get the connections being made with this plug.
     */
    getConnections(): Connection[]
    /**
     * Get the name of the interface this plug provides.
     */
    getInterface(): string
    /**
     * Get a human readable label for this plug.
     */
    getLabel(): string
    /**
     * Get the name of this plug.
     */
    getName(): string
    /**
     * Get the snap this plug is on.
     */
    getSnap(): string
    /**
     * Check if this plug has an attribute.
     * @param name an attribute name.
     */
    hasAttribute(name: string): boolean
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
    connect(sigName: "notify::attributes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connections", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connections", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::snap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::snap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::snap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::snap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::snap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Plug_ConstructProps)
    _init (config?: Plug_ConstructProps): void
    static $gtype: GObject.Type
}
interface PlugRef_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.PlugRef */
    plug?: string
    snap?: string
}
class PlugRef {
    /* Properties of Snapd-1.Snapd.PlugRef */
    readonly plug: string
    readonly snap: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.PlugRef */
    /**
     * Get the name of the plug.
     */
    getPlug(): string
    /**
     * Get the snap this plug is on.
     */
    getSnap(): string
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
    connect(sigName: "notify::plug", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plug", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::plug", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::plug", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::plug", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::snap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::snap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::snap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::snap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::snap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PlugRef_ConstructProps)
    _init (config?: PlugRef_ConstructProps): void
    static $gtype: GObject.Type
}
interface Price_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.Price */
    amount?: number
    currency?: string
}
class Price {
    /* Properties of Snapd-1.Snapd.Price */
    readonly amount: number
    readonly currency: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.Price */
    /**
     * Get the currency amount for this price, e.g. 0.99.
     */
    getAmount(): number
    /**
     * Get the currency this price is in, e.g. "NZD".
     */
    getCurrency(): string
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
    connect(sigName: "notify::amount", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::amount", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::amount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::amount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::amount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::currency", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::currency", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::currency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::currency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::currency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Price_ConstructProps)
    _init (config?: Price_ConstructProps): void
    static $gtype: GObject.Type
}
interface Screenshot_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.Screenshot */
    height?: number
    url?: string
    width?: number
}
class Screenshot {
    /* Properties of Snapd-1.Snapd.Screenshot */
    readonly height: number
    readonly url: string
    readonly width: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.Screenshot */
    /**
     * Get the height of the screenshot in pixels or 0 if unknown.
     */
    getHeight(): number
    /**
     * Get the URL for this screenshot, e.g. "http://example.com/screenshot.png"
     */
    getUrl(): string
    /**
     * Get the width of the screenshot in pixels or 0 if unknown.
     */
    getWidth(): number
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
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::url", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Screenshot_ConstructProps)
    _init (config?: Screenshot_ConstructProps): void
    static $gtype: GObject.Type
}
interface Slot_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.Slot */
    attributes?: GLib.HashTable
    connections?: object[]
    interface?: string
    label?: string
    name?: string
    snap?: string
}
class Slot {
    /* Properties of Snapd-1.Snapd.Slot */
    readonly attributes: GLib.HashTable
    readonly connections: object[]
    readonly interface: string
    readonly label: string
    readonly name: string
    readonly snap: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.Slot */
    /**
     * Get an attribute for this interface.
     * @param name an attribute name.
     */
    getAttribute(name: string): GLib.Variant | null
    /**
     * Get the names of the attributes this slot has.
     */
    getAttributeNames(): [ /* returnType */ string[], /* length */ number | null ]
    /**
     * Get the plugs connected to this slot.
     */
    getConnectedPlugs(): PlugRef[]
    /**
     * Get the connections being made with this slot.
     */
    getConnections(): Connection[]
    /**
     * Get the name of the interface this slot accepts.
     */
    getInterface(): string
    /**
     * Get a human readable label for this slot.
     */
    getLabel(): string
    /**
     * Get the name of this slot.
     */
    getName(): string
    /**
     * Get the snap this slot is on.
     */
    getSnap(): string
    /**
     * Check if this slot has an attribute.
     * @param name an attribute name.
     */
    hasAttribute(name: string): boolean
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
    connect(sigName: "notify::attributes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connections", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connections", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::snap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::snap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::snap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::snap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::snap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Slot_ConstructProps)
    _init (config?: Slot_ConstructProps): void
    static $gtype: GObject.Type
}
interface SlotRef_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.SlotRef */
    slot?: string
    snap?: string
}
class SlotRef {
    /* Properties of Snapd-1.Snapd.SlotRef */
    readonly slot: string
    readonly snap: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.SlotRef */
    /**
     * Get the name of the slot.
     */
    getSlot(): string
    /**
     * Get the snap this slot is on.
     */
    getSnap(): string
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
    connect(sigName: "notify::slot", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slot", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::slot", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::slot", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::slot", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::snap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::snap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::snap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::snap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::snap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SlotRef_ConstructProps)
    _init (config?: SlotRef_ConstructProps): void
    static $gtype: GObject.Type
}
interface Snap_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.Snap */
    apps?: object[]
    base?: string
    broken?: string
    channel?: string
    channels?: object[]
    commonIds?: string[]
    confinement?: Confinement
    contact?: string
    description?: string
    developer?: string
    devmode?: boolean
    downloadSize?: number
    icon?: string
    id?: string
    installDate?: GLib.DateTime
    installedSize?: number
    jailmode?: boolean
    license?: string
    media?: object[]
    mountedFrom?: string
    name?: string
    prices?: object[]
    private?: boolean
    publisherDisplayName?: string
    publisherId?: string
    publisherUsername?: string
    publisherValidation?: PublisherValidation
    revision?: string
    screenshots?: object[]
    snapType?: SnapType
    status?: SnapStatus
    summary?: string
    title?: string
    trackingChannel?: string
    tracks?: string[]
    trymode?: boolean
    version?: string
    website?: string
}
class Snap {
    /* Properties of Snapd-1.Snapd.Snap */
    readonly apps: object[]
    readonly base: string
    readonly broken: string
    readonly channel: string
    readonly channels: object[]
    readonly commonIds: string[]
    readonly confinement: Confinement
    readonly contact: string
    readonly description: string
    readonly developer: string
    readonly devmode: boolean
    readonly downloadSize: number
    readonly icon: string
    readonly id: string
    readonly installDate: GLib.DateTime
    readonly installedSize: number
    readonly jailmode: boolean
    readonly license: string
    readonly media: object[]
    readonly mountedFrom: string
    readonly name: string
    readonly prices: object[]
    readonly private: boolean
    readonly publisherDisplayName: string
    readonly publisherId: string
    readonly publisherUsername: string
    readonly publisherValidation: PublisherValidation
    readonly revision: string
    readonly screenshots: object[]
    readonly snapType: SnapType
    readonly status: SnapStatus
    readonly summary: string
    readonly title: string
    readonly trackingChannel: string
    readonly tracks: string[]
    readonly trymode: boolean
    readonly version: string
    readonly website: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.Snap */
    /**
     * Get the apps this snap provides.
     */
    getApps(): App[]
    /**
     * Get the base snap this snap uses.
     */
    getBase(): string | null
    /**
     * Get the reason this snap is broken.
     */
    getBroken(): string | null
    /**
     * Get the channel this snap is from, e.g. "stable".
     */
    getChannel(): string
    /**
     * Gets the available channels for this snap.
     */
    getChannels(): Channel[]
    /**
     * Get common IDs associated with this snap.
     */
    getCommonIds(): string[]
    /**
     * Get the confinement this snap is using, e.g. %SNAPD_CONFINEMENT_STRICT.
     */
    getConfinement(): Confinement
    /**
     * Get the means of contacting the snap developer, e.g. "mailto:developer`example`.com".
     */
    getContact(): string
    /**
     * Get a multi-line description of this snap. The description is formatted using
     * a subset of Markdown. To parse this use a #SnapdMarkdownParser.
     */
    getDescription(): string
    /**
     * Get the developer who created this snap.
     */
    getDeveloper(): string
    /**
     * Get if this snap is running in developer mode.
     */
    getDevmode(): boolean
    /**
     * Get the download size of this snap or 0 if unknown.
     */
    getDownloadSize(): number
    /**
     * Get the icon for this Snap, either a URL or an absolute path to retrieve it
     * from snapd directly.
     */
    getIcon(): string
    /**
     * Gets the unique ID for this snap.
     */
    getId(): string
    /**
     * Get the date this snap was installed or %NULL if unknown.
     */
    getInstallDate(): GLib.DateTime | null
    /**
     * Get the installed size of this snap or 0 if unknown.
     */
    getInstalledSize(): number
    /**
     * Get if this snap is running in enforced confinement (jail) mode.
     */
    getJailmode(): boolean
    /**
     * Gets the SPDX license expression for this snap, e.g. "GPL-3.0+".
     */
    getLicense(): string | null
    /**
     * Get media that is associated with this snap.
     */
    getMedia(): Media[]
    /**
     * Gets the path this snap is mounted from, which is a .snap file for installed
     * snaps and a directory for snaps in try mode.
     */
    getMountedFrom(): string | null
    /**
     * Get the name of this snap. This is used to reference this snap, e.g. for
     * installing / removing.
     */
    getName(): string
    /**
     * Get the prices that this snap can be purchased at.
     */
    getPrices(): Price[]
    /**
     * Get if this snap is only available to the developer.
     */
    getPrivate(): boolean
    /**
     * Get the display name of the publisher who created this snap.
     */
    getPublisherDisplayName(): string
    /**
     * Get the ID of the publisher who created this snap.
     */
    getPublisherId(): string
    /**
     * Get the username of the publisher who created this snap.
     */
    getPublisherUsername(): string
    /**
     * Get the validation for the snap publisher, e.g. %SNAPD_PUBLISHER_VALIDATION_VERIFIED
     */
    getPublisherValidation(): PublisherValidation
    /**
     * Get the revision for this snap. The format of the string is undefined.
     * See also snapd_snap_get_version().
     */
    getRevision(): string
    /**
     * Get the screenshots that are available for this snap.
     */
    getScreenshots(): Screenshot[]
    /**
     * Get the type of snap, e.g. %SNAPD_SNAP_TYPE_APP
     */
    getSnapType(): SnapType
    /**
     * Get the current status of this snap, e.g. SNAPD_SNAP_STATUS_INSTALLED.
     */
    getStatus(): SnapStatus
    /**
     * Get a single line summary for this snap, e.g. "Best app ever!".
     */
    getSummary(): string
    /**
     * Get the title for this snap. If not available use the snap name instead.
     */
    getTitle(): string | null
    /**
     * Get the channel that updates will be installed from, e.g. "stable".
     */
    getTrackingChannel(): string
    /**
     * Get the tracks that are available.
     */
    getTracks(): string[]
    /**
     * Get if this snap is running in try mode (installed locally and able to be
     * directly modified).
     */
    getTrymode(): boolean
    /**
     * Get the version for this snap. The format of the string is undefined.
     * See also snapd_snap_get_revision().
     */
    getVersion(): string
    /**
     * Get the website of the snap developer, e.g. "http://example.com".
     */
    getWebsite(): string
    /**
     * Finds the available channel that best matches the given name.
     * If none matches %NULL is returned.
     * @param name a channel name.
     */
    matchChannel(name: string): Channel | null
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
    connect(sigName: "notify::apps", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::apps", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::apps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::apps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::apps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::base", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::broken", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::broken", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::broken", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::broken", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::broken", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::channel", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channel", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::channels", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channels", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::common-ids", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::common-ids", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::common-ids", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::common-ids", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::common-ids", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::confinement", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::confinement", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::confinement", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::confinement", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::confinement", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::contact", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contact", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::contact", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::contact", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::contact", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::developer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::developer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::developer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::developer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::developer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::devmode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::devmode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::devmode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::devmode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::devmode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::download-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::download-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::download-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::download-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::download-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::install-date", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::install-date", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::install-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::install-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::install-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::installed-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::installed-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::installed-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::installed-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::installed-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::jailmode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::jailmode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::jailmode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::jailmode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::jailmode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::license", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::media", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::media", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::media", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::media", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mounted-from", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mounted-from", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mounted-from", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mounted-from", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mounted-from", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::prices", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prices", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::private", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::private", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::private", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::private", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::private", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::publisher-display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::publisher-display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::publisher-display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::publisher-display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::publisher-display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::publisher-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::publisher-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::publisher-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::publisher-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::publisher-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::publisher-username", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::publisher-username", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::publisher-username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::publisher-username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::publisher-username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::publisher-validation", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::publisher-validation", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::publisher-validation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::publisher-validation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::publisher-validation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::revision", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::revision", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::revision", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::revision", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::revision", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::screenshots", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screenshots", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::screenshots", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::screenshots", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::screenshots", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::snap-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::snap-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::snap-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::snap-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::snap-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tracking-channel", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tracking-channel", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tracking-channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tracking-channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tracking-channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tracks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tracks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::trymode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::trymode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::trymode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::trymode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::trymode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::website", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::website", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::website", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::website", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::website", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Snap_ConstructProps)
    _init (config?: Snap_ConstructProps): void
    static $gtype: GObject.Type
}
interface SystemInformation_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.SystemInformation */
    binariesDirectory?: string
    buildId?: string
    confinement?: SystemConfinement
    kernelVersion?: string
    managed?: boolean
    mountDirectory?: string
    onClassic?: boolean
    osId?: string
    osVersion?: string
    refreshHold?: GLib.DateTime
    refreshLast?: GLib.DateTime
    refreshNext?: GLib.DateTime
    refreshSchedule?: string
    refreshTimer?: string
    sandboxFeatures?: object
    series?: string
    store?: string
    version?: string
}
class SystemInformation {
    /* Properties of Snapd-1.Snapd.SystemInformation */
    readonly binariesDirectory: string
    readonly buildId: string
    readonly confinement: SystemConfinement
    readonly kernelVersion: string
    readonly managed: boolean
    readonly mountDirectory: string
    readonly onClassic: boolean
    readonly osId: string
    readonly osVersion: string
    readonly refreshHold: GLib.DateTime
    readonly refreshLast: GLib.DateTime
    readonly refreshNext: GLib.DateTime
    readonly refreshSchedule: string
    readonly refreshTimer: string
    readonly sandboxFeatures: object
    readonly series: string
    readonly store: string
    readonly version: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.SystemInformation */
    /**
     * Get the directory snap binaries are stored, e.g. "/snap/bin".
     */
    getBinariesDirectory(): string
    /**
     * Gets the unique build ID for the snap build, e.g. "efdd0b5e69b0742fa5e5bad0771df4d1df2459d1"
     */
    getBuildId(): string
    /**
     * Get the level of confinement the system supports, e.g. %SNAPD_SYSTEM_CONFINEMENT_STRICT.
     */
    getConfinement(): SystemConfinement
    /**
     * Get the version of the kernel snapd is running on, e.g. "4.10.0-15-generic".
     */
    getKernelVersion(): string
    /**
     * Get if snapd is running on a managed system.
     */
    getManaged(): boolean
    /**
     * Get the directory snaps are mounted, e.g. "/snap".
     */
    getMountDirectory(): string
    /**
     * Get if this system is a classic system.
     */
    getOnClassic(): boolean
    /**
     * Get the operating system ID, e.g. "ubuntu".
     */
    getOsId(): string
    /**
     * Get the operating system version, e.g. "16.04".
     */
    getOsVersion(): string
    /**
     * Get the time refreshes will be applied at, or %NULL if they are applied immediately.
     */
    getRefreshHold(): GLib.DateTime | null
    /**
     * Get the time the last refresh occurred, or %NULL if has not occurred.
     */
    getRefreshLast(): GLib.DateTime | null
    /**
     * Get the time the next refresh is scheduled for, or %NULL if none has been scheduled.
     */
    getRefreshNext(): GLib.DateTime | null
    /**
     * Get the schedule when snap refreshes will occur.
     */
    getRefreshSchedule(): string | null
    /**
     * Get the timer that refreshes are running to.
     */
    getRefreshTimer(): string | null
    /**
     * Gets the sandbox features that snapd provides. Each backend in snapd provides
     * a list of features that it supports. For example, the "confinement-options"
     * backend may provide "classic", "devmode" and "strict".
     */
    getSandboxFeatures(): GLib.HashTable
    /**
     * Get the series of snapd running, e.g. "16".
     */
    getSeries(): string
    /**
     * Get the store being used by snapd, e.g. "Ubuntu"
     */
    getStore(): string | null
    /**
     * Get the version of snapd running, e.g. "2.11+ppa174-1".
     */
    getVersion(): string
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
    connect(sigName: "notify::binaries-directory", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::binaries-directory", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::binaries-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::binaries-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::binaries-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::build-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::build-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::build-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::build-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::build-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::confinement", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::confinement", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::confinement", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::confinement", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::confinement", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::kernel-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kernel-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::kernel-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::kernel-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::kernel-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::managed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mount-directory", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mount-directory", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mount-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mount-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mount-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::on-classic", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::on-classic", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::on-classic", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::on-classic", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::on-classic", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::os-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::os-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::os-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::os-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::os-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::os-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::os-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::os-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::os-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::os-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::refresh-hold", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refresh-hold", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::refresh-hold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::refresh-hold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::refresh-hold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::refresh-last", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refresh-last", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::refresh-last", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::refresh-last", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::refresh-last", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::refresh-next", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refresh-next", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::refresh-next", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::refresh-next", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::refresh-next", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::refresh-schedule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refresh-schedule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::refresh-schedule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::refresh-schedule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::refresh-schedule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::refresh-timer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refresh-timer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::refresh-timer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::refresh-timer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::refresh-timer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sandbox-features", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sandbox-features", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sandbox-features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sandbox-features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sandbox-features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::series", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::series", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::series", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::series", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::series", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::store", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::store", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SystemInformation_ConstructProps)
    _init (config?: SystemInformation_ConstructProps): void
    static $gtype: GObject.Type
}
interface Task_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.Task */
    id?: string
    kind?: string
    progressDone?: number
    progressLabel?: string
    progressTotal?: number
    ready?: boolean
    readyTime?: GLib.DateTime
    spawnTime?: GLib.DateTime
    status?: string
    summary?: string
}
class Task {
    /* Properties of Snapd-1.Snapd.Task */
    readonly id: string
    readonly kind: string
    readonly progressDone: number
    readonly progressLabel: string
    readonly progressTotal: number
    readonly ready: boolean
    readonly readyTime: GLib.DateTime
    readonly spawnTime: GLib.DateTime
    readonly status: string
    readonly summary: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.Task */
    /**
     * Get the unique ID for this task.
     */
    getId(): string
    /**
     * Gets the kind of task this is.
     */
    getKind(): string
    /**
     * Get the the number of items completed in this task.
     */
    getProgressDone(): number
    /**
     * Get the the label associated with the progress.
     */
    getProgressLabel(): string
    /**
     * Get the the total number of items to be completed in this task.
     */
    getProgressTotal(): number
    /**
     * Get if this task is completed.
     */
    getReady(): boolean
    /**
     * Get the time this task completed or %NULL if not yet completed.
     */
    getReadyTime(): GLib.DateTime | null
    /**
     * Get the time this task started.
     */
    getSpawnTime(): GLib.DateTime
    /**
     * Get the status of the task.
     */
    getStatus(): string
    /**
     * Get a human readable description of the task.
     */
    getSummary(): string
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
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::kind", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::progress-done", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-done", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::progress-done", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::progress-done", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::progress-done", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::progress-label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::progress-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::progress-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::progress-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::progress-total", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-total", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::progress-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::progress-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::progress-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ready", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ready", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ready-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ready-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ready-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ready-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ready-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::spawn-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spawn-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::spawn-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::spawn-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::spawn-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Task_ConstructProps)
    _init (config?: Task_ConstructProps): void
    static $gtype: GObject.Type
}
interface UserInformation_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Snapd-1.Snapd.UserInformation */
    authData?: AuthData
    email?: string
    id?: number
    sshKeys?: string[]
    username?: string
}
class UserInformation {
    /* Properties of Snapd-1.Snapd.UserInformation */
    readonly authData: AuthData
    readonly email: string
    readonly id: number
    readonly sshKeys: string[]
    readonly username: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Snapd-1.Snapd.UserInformation */
    /**
     * Get the email address for this account.
     */
    getAuthData(): AuthData | null
    /**
     * Get the email address for this account.
     */
    getEmail(): string
    /**
     * Get the id for this account.
     */
    getId(): number
    /**
     * Get the SSH keys added to this account.
     */
    getSshKeys(): string[]
    /**
     * Get the local username for this account.
     */
    getUsername(): string
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
    connect(sigName: "notify::auth-data", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-data", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::email", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::email", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::email", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::email", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ssh-keys", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssh-keys", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ssh-keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ssh-keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ssh-keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::username", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UserInformation_ConstructProps)
    _init (config?: UserInformation_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class AliasClass {
    /* Fields of Snapd-1.Snapd.AliasClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class AppClass {
    /* Fields of Snapd-1.Snapd.AppClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class AssertionClass {
    /* Fields of Snapd-1.Snapd.AssertionClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class AuthDataClass {
    /* Fields of Snapd-1.Snapd.AuthDataClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class ChangeClass {
    /* Fields of Snapd-1.Snapd.ChangeClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class ChannelClass {
    /* Fields of Snapd-1.Snapd.ChannelClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class ClientClass {
    static name: string
}
abstract class ConnectionClass {
    /* Fields of Snapd-1.Snapd.ConnectionClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class IconClass {
    /* Fields of Snapd-1.Snapd.IconClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class InterfaceClass {
    /* Fields of Snapd-1.Snapd.InterfaceClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class MaintenanceClass {
    /* Fields of Snapd-1.Snapd.MaintenanceClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class MarkdownNodeClass {
    /* Fields of Snapd-1.Snapd.MarkdownNodeClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class MarkdownParserClass {
    /* Fields of Snapd-1.Snapd.MarkdownParserClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class MediaClass {
    /* Fields of Snapd-1.Snapd.MediaClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class PlugClass {
    /* Fields of Snapd-1.Snapd.PlugClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class PlugRefClass {
    /* Fields of Snapd-1.Snapd.PlugRefClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class PriceClass {
    /* Fields of Snapd-1.Snapd.PriceClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class ScreenshotClass {
    /* Fields of Snapd-1.Snapd.ScreenshotClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class SlotClass {
    /* Fields of Snapd-1.Snapd.SlotClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class SlotRefClass {
    /* Fields of Snapd-1.Snapd.SlotRefClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class SnapClass {
    /* Fields of Snapd-1.Snapd.SnapClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class SystemInformationClass {
    /* Fields of Snapd-1.Snapd.SystemInformationClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class TaskClass {
    /* Fields of Snapd-1.Snapd.TaskClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class UserInformationClass {
    /* Fields of Snapd-1.Snapd.UserInformationClass */
    parentClass: GObject.ObjectClass
    static name: string
}
}
export default Snapd;