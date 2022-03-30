/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Flatpak-1.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Flatpak {

/**
 * Error codes for library functions.
 */
enum Error {
    /**
     * App/runtime is already installed
     */
    ALREADY_INSTALLED,
    /**
     * App/runtime is not installed
     */
    NOT_INSTALLED,
    /**
     * App/runtime was only pulled into the local
     *                             repository but not installed.
     */
    ONLY_PULLED,
    /**
     * The App/Runtime is already installed, but from a different remote.
     */
    DIFFERENT_REMOTE,
    /**
     * The transaction was aborted (returned %TRUE in operation-error signal).
     */
    ABORTED,
    /**
     * The App/Runtime install was skipped due to earlier errors.
     */
    SKIPPED,
    /**
     * The App/Runtime needs a more recent version of flatpak.
     */
    NEED_NEW_FLATPAK,
    /**
     * The specified remote was not found.
     */
    REMOTE_NOT_FOUND,
    /**
     * A runtime needed for the app was not found.
     */
    RUNTIME_NOT_FOUND,
    /**
     * The pulled commit is a downgrade, and a downgrade wasn't
     *                           specifically allowed. (Since: 1.0)
     */
    DOWNGRADE,
    /**
     * A ref could not be parsed. (Since: 1.0.3)
     */
    INVALID_REF,
    /**
     * Invalid data. (Since: 1.0.3)
     */
    INVALID_DATA,
    /**
     * Missing GPG key or signature. (Since: 1.0.3)
     */
    UNTRUSTED,
    /**
     * Sandbox setup failed. (Since: 1.0.3)
     */
    SETUP_FAILED,
    /**
     * Exporting data failed. (Since: 1.0.3)
     */
    EXPORT_FAILED,
    /**
     * Remote can't be uninstalled. (Since: 1.0.3)
     */
    REMOTE_USED,
    /**
     * Runtime can't be uninstalled. (Since: 1.0.3)
     */
    RUNTIME_USED,
    /**
     * Application, runtime or remote name is invalid. (Since: 1.0.3)
     */
    INVALID_NAME,
    /**
     * More disk space needed. (Since: 1.2.0)
     */
    OUT_OF_SPACE,
    /**
     * An operation is being attempted by the wrong user (such as
     *                            root operating on a user installation). (Since: 1.2.0)
     */
    WRONG_USER,
    /**
     * Cached data was requested, but it was not available. (Since: 1.4.0)
     */
    NOT_CACHED,
    /**
     * The specified ref was not found. (Since: 1.4.0)
     */
    REF_NOT_FOUND,
    /**
     * An operation was not allowed by the administrative policy.
     *                                   For example, an app is not allowed to be installed due
     *                                   to not complying with the parental controls policy. (Since: 1.5.1)
     */
    PERMISSION_DENIED,
    /**
     * An authentication operation failed, for example, no
     *                                       correct password was supplied. (Since: 1.7.3)
     */
    AUTHENTICATION_FAILED,
    /**
     * An operation tried to access a ref, or information about it that it
     *                                was not authorized. For example, when succesfully authenticating with a
     *                                server but the user doesn't have permissions for a private ref. (Since: 1.7.3)
     */
    NOT_AUTHORIZED,
}
/**
 * Error codes returned by portal calls.
 */
enum PortalError {
    /**
     * General portal failure
     */
    FAILED,
    /**
     * An argument was invalid
     */
    INVALID_ARGUMENT,
    /**
     * The object was not found
     */
    NOT_FOUND,
    /**
     * The object already exists
     */
    EXISTS,
    /**
     * The call was not allowed
     */
    NOT_ALLOWED,
    /**
     * The call was cancelled by the user
     */
    CANCELLED,
    /**
     * The window was destroyed by the user
     */
    WINDOW_DESTROYED,
}
/**
 * The kind of artifact that a FlatpakRef refers to.
 */
enum RefKind {
    /**
     * An application
     */
    APP,
    /**
     * A runtime that applications can use.
     */
    RUNTIME,
}
/**
 * Different types of `FlatpakRemote`.
 */
enum RemoteType {
    /**
     * Statically configured remote
     */
    STATIC,
    /**
     * Dynamically detected local pathname remote
     */
    USB,
    /**
     * Dynamically detected network remote
     */
    LAN,
}
/**
 * Information about the storage of an installation.
 */
enum StorageType {
    /**
     * default
     */
    DEFAULT,
    /**
     * installation is on a hard disk
     */
    HARD_DISK,
    /**
     * installation is on a SD card
     */
    SDCARD,
    /**
     * installation is on an MMC
     */
    MMC,
    /**
     * installation is on the network
     */
    NETWORK,
}
/**
 * The type of a #FlatpakTransactionOperation.
 */
enum TransactionOperationType {
    /**
     * Install a ref from a remote
     */
    INSTALL,
    /**
     * Update an installed ref
     */
    UPDATE,
    /**
     * Install a bundle from a file
     */
    INSTALL_BUNDLE,
    /**
     * Uninstall a ref
     */
    UNINSTALL,
    /**
     * The (currently) last operation type
     */
    LAST_TYPE,
}
/**
 * The reason for #FlatpakTransaction::add-new-remote.
 */
enum TransactionRemoteReason {
    /**
     * The remote specified in the flatpakref has other apps too
     */
    GENERIC_REPO,
    /**
     * The remote has runtimes needed for the app
     */
    RUNTIME_DEPS,
}
/**
 * Flags to alter the behavior of flatpak_installation_install_full().
 */
enum InstallFlags {
    /**
     * Default
     */
    NONE,
    /**
     * Don't use static deltas when pulling
     */
    NO_STATIC_DELTAS,
    /**
     * Don't install any new builds that might be fetched
     */
    NO_DEPLOY,
    /**
     * Don't try to fetch new builds from the remote repo
     */
    NO_PULL,
    /**
     * Don't call triggers after installing. If used,
     * the caller must later call flatpak_installation_run_triggers() to update
     * the exported files. (Since: 1.0.3)
     */
    NO_TRIGGERS,
}
/**
 * Flags to alter the behavior of flatpak_installation_launch_full().
 */
enum LaunchFlags {
    /**
     * Default
     */
    NONE,
    /**
     * Do not reap the child. Use this if you want to wait
     * for the child with g_child_watch_add(). (Snce: 1.1)
     */
    DO_NOT_REAP,
}
/**
 * Flags to alter the behavior of e.g flatpak_installation_list_remote_refs_sync_full().
 */
enum QueryFlags {
    /**
     * Default
     */
    NONE,
    /**
     * Don't do any network i/o, but only return cached data.
     * This can return stale data, or a #FLATPAK_ERROR_NOT_CACHED error, however it is a
     * lot more efficient if you're doing many requests.
     */
    ONLY_CACHED,
    /**
     * Only list refs available from any eventuall sideload repos. (Snce: 1.7)
     */
    ONLY_SIDELOADED,
}
/**
 * The details for #FlatpakTransaction::operation-error.
 */
enum TransactionErrorDetails {
    /**
     * The operation failure was not fatal
     */
    FATAL,
}
/**
 * The details for #FlatpakTransaction::operation-done.
 */
enum TransactionResult {
    /**
     * The update caused no changes
     */
    CHANGE,
}
/**
 * Flags to alter the behavior of flatpak_installation_uninstall_full().
 */
enum UninstallFlags {
    /**
     * Default
     */
    NONE,
    /**
     * Don't prune the local OSTree repository after uninstalling
     */
    NO_PRUNE,
    /**
     * Don't call triggers after uninstalling. If used,
     * the caller must later call flatpak_installation_run_triggers() to update
     * the exported file. (Since: 1.0.3)
     */
    NO_TRIGGERS,
}
/**
 * Flags to alter the behavior of flatpak_installation_update().
 */
enum UpdateFlags {
    /**
     * Fetch remote builds and install the latest one (default)
     */
    NONE,
    /**
     * Don't install any new builds that might be fetched
     */
    NO_DEPLOY,
    /**
     * Don't try to fetch new builds from the remote repo
     */
    NO_PULL,
    /**
     * Don't use static deltas when pulling
     */
    NO_STATIC_DELTAS,
    /**
     * Don't prune the local OSTree repository after updating (Since: 0.11.8)
     */
    NO_PRUNE,
    /**
     * Don't call triggers after updating. If used,
     * the caller must later call flatpak_installation_run_triggers() to update
     * the exported files. (Since: 1.0.3)
     */
    NO_TRIGGERS,
}
/**
 * The major version.
 */
const MAJOR_VERSION: number
/**
 * The micro version.
 */
const MICRO_VERSION: number
/**
 * The minor version.
 */
const MINOR_VERSION: number
function errorQuark(): GLib.Quark
function getDefaultArch(): string
function getSupportedArches(): string[]
function getSystemInstallations(cancellable?: Gio.Cancellable | null): Installation[]
function portalErrorQuark(): GLib.Quark
function transactionOperationTypeToString(kind: TransactionOperationType): string
/**
 * The progress callback is called repeatedly during long-running operations
 * such as installations or updates, and can be used to update progress information
 * in a user interface.
 * 
 * The callback occurs in the thread-default context of the caller.
 */
interface ProgressCallback {
    (status: string, progress: number, estimating: boolean): void
}
interface BundleRef_ConstructProps extends Ref_ConstructProps {
    /* Constructor properties of Flatpak-1.0.Flatpak.BundleRef */
    /**
     * The bundle file that this ref refers to.
     */
    file?: Gio.File
}
class BundleRef {
    /* Properties of Flatpak-1.0.Flatpak.BundleRef */
    /**
     * The bundle file that this ref refers to.
     */
    readonly file: Gio.File
    /* Properties of Flatpak-1.0.Flatpak.Ref */
    readonly arch: string
    readonly branch: string
    readonly collectionId: string
    readonly commit: string
    readonly kind: RefKind
    readonly name: string
    /* Fields of Flatpak-1.0.Flatpak.Ref */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Flatpak-1.0.Flatpak.BundleRef */
    /**
     * Get the compressed appstream for the app/runtime
     */
    getAppstream(): any
    /**
     * Get the file this bundle is stored in.
     */
    getFile(): Gio.File
    /**
     * Get the icon png data for the app/runtime
     * @param size 64 or 128
     */
    getIcon(size: number): any
    /**
     * Returns the installed size for the bundle.
     */
    getInstalledSize(): number
    /**
     * Get the metadata for the app/runtime
     */
    getMetadata(): any
    /**
     * Get the origin url stored in the bundle
     */
    getOrigin(): string
    /**
     * Get the runtime flatpakrepo url stored in the bundle (if any)
     */
    getRuntimeRepoUrl(): string
    /* Methods of Flatpak-1.0.Flatpak.Ref */
    /**
     * Convert an FlatpakRef object into a string representation that
     * can be parsed by flatpak_ref_parse().
     */
    formatRef(): string
    /**
     * Gets the arch or the ref.
     */
    getArch(): string
    /**
     * Gets the branch of the ref.
     */
    getBranch(): string
    /**
     * Gets the collection ID of the ref.
     */
    getCollectionId(): string
    /**
     * Gets the commit of the ref.
     */
    getCommit(): string
    /**
     * Gets the kind of artifact that this ref refers to.
     */
    getKind(): RefKind
    /**
     * Gets the name of the ref.
     */
    getName(): string
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
    connect(sigName: "notify::file", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::arch", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::arch", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::arch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::arch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::arch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::branch", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::branch", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::branch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::branch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::branch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::collection-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collection-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::collection-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::collection-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::collection-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::commit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::commit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::kind", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BundleRef_ConstructProps)
    _init (config?: BundleRef_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(file: Gio.File): BundleRef
    static $gtype: GObject.Type
}
interface Installation_ConstructProps extends GObject.Object_ConstructProps {
}
class Installation {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Flatpak-1.0.Flatpak.Installation */
    /**
     * Adds a new `remote` object to the set of remotes. This is similar
     * to flatpak_installation_modify_remote() for non-existing remote
     * names. However, if the named remote already exists then instead of
     * modifying it it fails with %FLATPAK_ERROR_ALREADY_INSTALLED, or if
     * `if_needed` is true it silently succeeds without doing anything.
     * 
     * As an exception to the last, if the local config has a filter defined,
     * but the new remote unsets the filter (for example, it comes from an
     * unfiltered .flatpakref via flatpak_remote_new_from_file()) the the local
     * remote filter gets reset. This is to allow the setup where there is a
     * default setup of a filtered remote, yet you can still use the standard
     * flatpakref file to get the full contents without getting two remotes.
     * @param remote the new #FlatpakRemote
     * @param ifNeeded if %TRUE, only add if it doesn't exists
     * @param cancellable a #GCancellable
     */
    addRemote(remote: Remote, ifNeeded: boolean, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Remove all OSTree refs from the local flatpak repository which are not
     * in a deployed state. The next time the underlying OSTree repo is pruned,
     * objects which were attached to that ref will be removed. This is useful if
     * you pulled a flatpak refs using flatpak_installation_install_full() and
     * specified %FLATPAK_INSTALL_FLAGS_NO_DEPLOY but then decided not to
     * deploy the refs later on and want to remove the local refs to prevent them
     * from taking up disk space. Note that this will not remove the objects
     * referred to by `ref` from the underlying OSTree repo, you should use
     * flatpak_installation_prune_local_repo() to do that.
     * @param cancellable a #GCancellable
     */
    cleanupLocalRefsSync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Gets monitor object for the installation. The returned file monitor will
     * emit the #GFileMonitor::changed signal whenever an application or runtime
     * was installed, uninstalled or updated.
     * @param cancellable a #GCancellable
     */
    createMonitor(cancellable?: Gio.Cancellable | null): Gio.FileMonitor
    /**
     * Drops all internal (in-memory) caches. For instance, this may be needed to pick up new or changed
     * remotes configured outside this installation instance.
     * @param cancellable a #GCancellable
     */
    dropCaches(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Obtains the metadata file from a commit.
     * 
     * NOTE: Since 0.11.4 this information is accessible in FlatpakRemoteRef, so this
     * function is not very useful anymore.
     * @param remoteName the name of the remote
     * @param ref the ref
     * @param cancellable a #GCancellable
     */
    fetchRemoteMetadataSync(remoteName: string, ref: Ref, cancellable?: Gio.Cancellable | null): any
    /**
     * Gets the current remote branch of a ref in the remote.
     * @param remoteName the name of the remote
     * @param kind what this ref contains (an #FlatpakRefKind)
     * @param name name of the app/runtime to fetch
     * @param arch which architecture to fetch (default: current architecture)
     * @param branch which branch to fetch (default: 'master')
     * @param cancellable a #GCancellable
     */
    fetchRemoteRefSync(remoteName: string, kind: RefKind, name: string, arch?: string | null, branch?: string | null, cancellable?: Gio.Cancellable | null): RemoteRef
    /**
     * Gets the current remote branch of a ref in the remote.
     * @param remoteName the name of the remote
     * @param kind what this ref contains (an #FlatpakRefKind)
     * @param name name of the app/runtime to fetch
     * @param arch which architecture to fetch (default: current architecture)
     * @param branch which branch to fetch (default: 'master')
     * @param flags set of #FlatpakQueryFlags
     * @param cancellable a #GCancellable
     */
    fetchRemoteRefSyncFull(remoteName: string, kind: RefKind, name: string, arch: string | null, branch: string | null, flags: QueryFlags, cancellable?: Gio.Cancellable | null): RemoteRef
    /**
     * Gets information about the maximum amount of data that needs to be transferred
     * to pull the ref from a remote repository, and about the amount of
     * local disk space that is required to check out this commit.
     * 
     * Note that if there are locally available data that are in the ref, which is common
     * for instance if you're doing an update then the real download size may be smaller
     * than what is returned here.
     * 
     * NOTE: Since 0.11.4 this information is accessible in FlatpakRemoteRef, so this
     * function is not very useful anymore.
     * @param remoteName the name of the remote
     * @param ref the ref
     * @param cancellable a #GCancellable
     */
    fetchRemoteSizeSync(remoteName: string, ref: Ref, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* downloadSize */ number, /* installedSize */ number ]
    /**
     * Get a global configuration option for the installation, see
     * flatpak_installation_set_config_sync() for supported keys.
     * @param key the name of the key to get
     * @param cancellable a #GCancellable
     */
    getConfig(key: string, cancellable?: Gio.Cancellable | null): string
    /**
     * Get the last build of reference `name` that was installed with
     * flatpak_installation_install(), or %NULL if the reference has
     * never been installed locally.
     * @param name the name of the app
     * @param cancellable a #GCancellable
     */
    getCurrentInstalledApp(name: string, cancellable?: Gio.Cancellable | null): InstalledRef
    /**
     * Get the default languages used by the installation to decide which
     * subpaths to install of locale extensions. This list may also be used
     * by frontends like GNOME Software to decide which language-specific apps
     * to display. An empty array means that all languages should be installed.
     */
    getDefaultLanguages(): string[]
    /**
     * Like flatpak_installation_get_default_languages() but includes territory
     * information (e.g. `en_US` rather than `en`) which may be included in the
     * `extra-languages` configuration.
     * 
     * Strings returned by this function are in the format specified by
     * [`setlocale()`](man:setlocale): `language[_territory][.codeset][`modifier]``.
     */
    getDefaultLocales(): string[]
    /**
     * Returns the display name of the installation for `self`.
     * 
     * Note that this function may return %NULL if the installation
     * does not have a display name.
     */
    getDisplayName(): string
    /**
     * Returns the ID of the installation for `self`.
     * 
     * The ID for the default system installation is "default".
     * The ID for the user installation is "user".
     */
    getId(): string
    /**
     * Returns information about an installed ref, such as the available builds,
     * its size, location, etc.
     * @param kind whether this is an app or runtime
     * @param name name of the app/runtime to fetch
     * @param arch which architecture to fetch (default: current architecture)
     * @param branch which branch to fetch (default: "master")
     * @param cancellable a #GCancellable
     */
    getInstalledRef(kind: RefKind, name: string, arch?: string | null, branch?: string | null, cancellable?: Gio.Cancellable | null): InstalledRef
    /**
     * Returns whether the installation is for a user-specific location.
     */
    getIsUser(): boolean
    /**
     * Returns the min-free-space config value from the OSTree repository of this installation.
     * 
     * Applications can use this value, together with information about the available
     * disk space and the size of pending updates or installs, to estimate whether a
     * pull operation will fail due to running out of disk space.
     */
    getMinFreeSpaceBytes(): [ /* returnType */ boolean, /* outBytes */ number ]
    /**
     * Returns the value set with flatpak_installation_set_no_interaction().
     */
    getNoInteraction(): boolean
    /**
     * Returns the installation location for `self`.
     */
    getPath(): Gio.File
    /**
     * Returns the numeric priority of the installation for `self`.
     */
    getPriority(): number
    /**
     * Looks up a remote by name.
     * @param name a remote name
     * @param cancellable a #GCancellable
     */
    getRemoteByName(name: string, cancellable?: Gio.Cancellable | null): Remote
    /**
     * Returns the type of storage of the installation for `self`.
     */
    getStorageType(): StorageType
    /**
     * This is an old deprecated function, you should use
     * #FlatpakTransaction and flatpak_transaction_add_install()
     * instead. It has a lot more interesting features.
     * 
     * Install a new application or runtime.
     * 
     * Note that this function was originally written to always return a
     * #FlatpakInstalledRef. Since 0.9.13, passing
     * FLATPAK_INSTALL_FLAGS_NO_DEPLOY will only pull refs into the local flatpak
     * repository without deploying them, however this function will
     * be unable to provide information on the installed ref, so
     * FLATPAK_ERROR_ONLY_PULLED will be set and the caller must respond
     * accordingly.
     * @param remoteName name of the remote to use
     * @param kind what this ref contains (an #FlatpakRefKind)
     * @param name name of the app/runtime to fetch
     * @param arch which architecture to fetch (default: current architecture)
     * @param branch which branch to fetch (default: 'master')
     * @param cancellable a #GCancellable
     */
    install(remoteName: string, kind: RefKind, name: string, arch?: string | null, branch?: string | null, cancellable?: Gio.Cancellable | null): InstalledRef
    /**
     * This is an old deprecated function, you should use
     * #FlatpakTransaction and flatpak_transaction_add_install_bundle()
     * instead. It has a lot more interesting features.
     * 
     * Install an application or runtime from an flatpak bundle file.
     * See flatpak-build-bundle(1) for how to create bundles.
     * @param file a #GFile that is an flatpak bundle
     * @param cancellable a #GCancellable
     */
    installBundle(file: Gio.File, cancellable?: Gio.Cancellable | null): InstalledRef
    /**
     * This is an old deprecated function, you should use
     * #FlatpakTransaction and flatpak_transaction_add_install()
     * instead. It has a lot more interesting features.
     * 
     * Install a new application or runtime.
     * 
     * Note that this function was originally written to always return a
     * #FlatpakInstalledRef. Since 0.9.13, passing
     * FLATPAK_INSTALL_FLAGS_NO_DEPLOY will only pull refs into the local flatpak
     * repository without deploying them, however this function will
     * be unable to provide information on the installed ref, so
     * FLATPAK_ERROR_ONLY_PULLED will be set and the caller must respond
     * accordingly.
     * @param flags set of #FlatpakInstallFlags flag
     * @param remoteName name of the remote to use
     * @param kind what this ref contains (an #FlatpakRefKind)
     * @param name name of the app/runtime to fetch
     * @param arch which architecture to fetch (default: current architecture)
     * @param branch which branch to fetch (default: 'master')
     * @param subpaths A list of subpaths to fetch, or %NULL for everything
     * @param cancellable a #GCancellable
     */
    installFull(flags: InstallFlags, remoteName: string, kind: RefKind, name: string, arch?: string | null, branch?: string | null, subpaths?: string[] | null, cancellable?: Gio.Cancellable | null): InstalledRef
    /**
     * This is an old deprecated function, you should use
     * #FlatpakTransaction and flatpak_transaction_add_install_flatpakref()
     * instead. It has a lot more interesting features.
     * 
     * Creates a remote based on the passed in .flatpakref file contents
     * in `ref_file_data` and returns the #FlatpakRemoteRef that can be used
     * to install it.
     * 
     * Note, the #FlatpakRemoteRef will not have the commit field set, or other details, to
     * avoid unnecessary roundtrips. If you need that you have to resolve it
     * explicitly with flatpak_installation_fetch_remote_ref_sync ().
     * @param refFileData The ref file contents
     * @param cancellable a #GCancellable
     */
    installRefFile(refFileData: any, cancellable?: Gio.Cancellable | null): RemoteRef
    /**
     * Launch an installed application.
     * 
     * You can use flatpak_installation_get_installed_ref() or
     * flatpak_installation_get_current_installed_app() to find out what builds
     * are available, in order to get a value for `commit`.
     * @param name name of the app to launch
     * @param arch which architecture to launch (default: current architecture)
     * @param branch which branch of the application (default: "master")
     * @param commit the commit of `branch` to launch
     * @param cancellable a #GCancellable
     */
    launch(name: string, arch?: string | null, branch?: string | null, commit?: string | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Launch an installed application.
     * 
     * You can use flatpak_installation_get_installed_ref() or
     * flatpak_installation_get_current_installed_app() to find out what builds
     * are available, in order to get a value for `commit`.
     * 
     * Compared to flatpak_installation_launch(), this function returns a #FlatpakInstance
     * that can be used to get information about the running instance. You can also use
     * it to wait for the instance to be done with g_child_watch_add() if you pass the
     * #FLATPAK_LAUNCH_FLAGS_DO_NOT_REAP flag.
     * @param flags set of #FlatpakLaunchFlags
     * @param name name of the app to launch
     * @param arch which architecture to launch (default: current architecture)
     * @param branch which branch of the application (default: "master")
     * @param commit the commit of `branch` to launch
     * @param instanceOut return location for a #FlatpakInstance
     * @param cancellable a #GCancellable
     */
    launchFull(flags: LaunchFlags, name: string, arch?: string | null, branch?: string | null, commit?: string | null, instanceOut?: Instance | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Lists the installed references.
     * @param cancellable a #GCancellable
     */
    listInstalledRefs(cancellable?: Gio.Cancellable | null): InstalledRef[]
    /**
     * Lists the installed references of a specific kind.
     * @param kind the kind of installation
     * @param cancellable a #GCancellable
     */
    listInstalledRefsByKind(kind: RefKind, cancellable?: Gio.Cancellable | null): InstalledRef[]
    /**
     * Lists the installed apps and runtimes that have an update available, either
     * from the configured remote or locally available but not deployed (see
     * flatpak_transaction_set_no_deploy()).
     * 
     * This also checks if any of #FlatpakInstalledRef has a missing #FlatpakRelatedRef
     * (which has `should-download` set to %TRUE) or runtime. If so, it adds the
     * ref to the returning #GPtrArray to pull in the #FlatpakRelatedRef or runtime
     * again via an update operation in #FlatpakTransaction.
     * 
     * In case more than one app needs an update of the same runtime or extension,
     * this function will return all of those apps.
     * @param cancellable a #GCancellable
     */
    listInstalledRefsForUpdate(cancellable?: Gio.Cancellable | null): InstalledRef[]
    /**
     * Lists all the locally installed refs from `remote_name` that are
     * related to `ref`. These are things that are interesting to install,
     * update, or uninstall together with `ref`. For instance, locale data
     * or debug information.
     * 
     * This function is similar to flatpak_installation_list_remote_related_refs_sync,
     * but instead of looking at what is available on the remote, it only looks
     * at the locally installed refs. This is useful for instance when you're
     * looking for related refs to uninstall, or when you're planning to use
     * FLATPAK_UPDATE_FLAGS_NO_PULL to install previously pulled refs.
     * @param remoteName the name of the remote
     * @param ref the ref
     * @param cancellable a #GCancellable
     */
    listInstalledRelatedRefsSync(remoteName: string, ref: string, cancellable?: Gio.Cancellable | null): RelatedRef[]
    /**
     * Lists all the applications and runtimes in a remote.
     * @param remoteOrUri the name or URI of the remote
     * @param cancellable a #GCancellable
     */
    listRemoteRefsSync(remoteOrUri: string, cancellable?: Gio.Cancellable | null): RemoteRef[]
    /**
     * Lists all the applications and runtimes in a remote.
     * @param remoteOrUri the name or URI of the remote
     * @param flags set of #FlatpakQueryFlags
     * @param cancellable a #GCancellable
     */
    listRemoteRefsSyncFull(remoteOrUri: string, flags: QueryFlags, cancellable?: Gio.Cancellable | null): RemoteRef[]
    /**
     * Lists all the available refs on `remote_name` that are related to
     * `ref,` and the subpaths to use. These are things that are
     * interesting to install, update, or uninstall together with
     * `ref`. For instance, locale data or debug information.
     * 
     * The returned list contains all available related refs, but not
     * every one should always be installed. For example,
     * flatpak_related_ref_should_download() returns %TRUE if the
     * reference should be installed/updated with the app, and
     * flatpak_related_ref_should_delete() returns %TRUE if it
     * should be uninstalled with the main ref.
     * 
     * The commit property of each #FlatpakRelatedRef is not guaranteed to be
     * non-%NULL.
     * @param remoteName the name of the remote
     * @param ref the ref
     * @param cancellable a #GCancellable
     */
    listRemoteRelatedRefsSync(remoteName: string, ref: string, cancellable?: Gio.Cancellable | null): RelatedRef[]
    /**
     * Lists the static remotes, in priority (highest first) order. For same
     * priority, an earlier added remote comes before a later added one.
     * @param cancellable a #GCancellable
     */
    listRemotes(cancellable?: Gio.Cancellable | null): Remote[]
    /**
     * Lists only the remotes whose type is included in the `types` argument.
     * 
     * Since flatpak 1.7 this will never return any types except FLATPAK_REMOTE_TYPE_STATIC.
     * Equivalent functionallity to FLATPAK_REMOTE_TYPE_USB can be had by listing remote refs
     * with FLATPAK_QUERY_FLAGS_ONLY_SIDELOADED.
     * @param types an array of #FlatpakRemoteType
     * @param cancellable a #GCancellable
     */
    listRemotesByType(types: RemoteType[], cancellable?: Gio.Cancellable | null): Remote[]
    /**
     * Lists the installed references that are not 'used'.
     * 
     * A reference is used if it is either an application, or an sdk,
     * or the runtime of a used ref, or an extension of a used ref.
     * @param arch if non-%NULL, the architecture of refs to collect
     * @param cancellable a #GCancellable
     */
    listUnusedRefs(arch?: string | null, cancellable?: Gio.Cancellable | null): InstalledRef[]
    /**
     * Loads the metadata overrides file for an application.
     * @param appId an application id
     * @param cancellable a #GCancellable
     */
    loadAppOverrides(appId: string, cancellable?: Gio.Cancellable | null): string
    /**
     * Saves changes in the `remote` object.
     * @param remote the modified #FlatpakRemote
     * @param cancellable a #GCancellable
     */
    modifyRemote(remote: Remote, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Remove all orphaned OSTree objects from the underlying OSTree repo in
     * `self`.
     * @param cancellable a #GCancellable
     */
    pruneLocalRepo(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Remove the OSTree ref given by `remote_name:``ref` from the local flatpak
     * repository. The next time the underlying OSTree repo is pruned, objects
     * which were attached to that ref will be removed. This is useful if you
     * pulled a flatpak ref using flatpak_installation_install_full() and
     * specified %FLATPAK_INSTALL_FLAGS_NO_DEPLOY but then decided not to
     * deploy the ref later on and want to remove the local ref to prevent it
     * from taking up disk space. Note that this will not remove the objects
     * referred to by `ref` from the underlying OSTree repo, you should use
     * flatpak_installation_prune_local_repo() to do that.
     * @param remoteName the name of the remote
     * @param ref the ref
     * @param cancellable a #GCancellable
     */
    removeLocalRefSync(remoteName: string, ref: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Removes the remote with the given name from the installation.
     * @param name the name of the remote to remove
     * @param cancellable a #GCancellable
     */
    removeRemote(name: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Run the trigger commands to update the files exported by the apps in
     * `self`. Should be used after one or more app install, upgrade or
     * uninstall operations with the %FLATPAK_INSTALL_FLAGS_NO_TRIGGERS,
     * %FLATPAK_UPDATE_FLAGS_NO_TRIGGERS or %FLATPAK_UNINSTALL_FLAGS_NO_TRIGGERS
     * flags set.
     * @param cancellable a #GCancellable
     */
    runTriggers(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Set a global configuration option for the installation, currently
     * the only supported keys are `languages`, which is a semicolon-separated
     * list of language codes like `"sv;en;pl"`, or `""` to mean all languages,
     * and `extra-languages`, which is a semicolon-separated list of locale
     * identifiers like `"en;en_DK;zh_HK.big5hkscs;uz_UZ.utf8`cyrillic"``.
     * @param key the name of the key to set
     * @param value the new value, or %NULL to unset
     * @param cancellable a #GCancellable
     */
    setConfigSync(key: string, value: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * This method can be used to prevent interactive authorization dialogs to appear
     * for operations on `self`. This is useful for background operations that are not
     * directly triggered by a user action.
     * 
     * By default, interaction is allowed.
     * @param noInteraction Whether to disallow interactive authorization for operations
     */
    setNoInteraction(noInteraction: boolean): void
    /**
     * This is an old deprecated function, you should use
     * #FlatpakTransaction and flatpak_transaction_add_uninstall()
     * instead. It has a lot more interesting features.
     * 
     * Uninstall an application or runtime.
     * @param kind what this ref contains (an #FlatpakRefKind)
     * @param name name of the app or runtime to uninstall
     * @param arch architecture of the app or runtime to uninstall; if  %NULL, flatpak_get_default_arch() is assumed
     * @param branch name of the branch of the app or runtime to uninstall;  if %NULL, `master` is assumed
     * @param cancellable a #GCancellable
     */
    uninstall(kind: RefKind, name: string, arch?: string | null, branch?: string | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * This is an old deprecated function, you should use
     * #FlatpakTransaction and flatpak_transaction_add_uninstall()
     * instead. It has a lot more interesting features.
     * 
     * Uninstall an application or runtime.
     * @param flags set of #FlatpakUninstallFlags flags
     * @param kind what this ref contains (an #FlatpakRefKind)
     * @param name name of the app or runtime to uninstall
     * @param arch architecture of the app or runtime to uninstall; if  %NULL, flatpak_get_default_arch() is assumed
     * @param branch name of the branch of the app or runtime to uninstall;  if %NULL, `master` is assumed
     * @param cancellable a #GCancellable
     */
    uninstallFull(flags: UninstallFlags, kind: RefKind, name: string, arch?: string | null, branch?: string | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * This is an old deprecated function, you should use
     * #FlatpakTransaction and flatpak_transaction_add_update()
     * instead. It has a lot more interesting features.
     * 
     * Update an application or runtime.
     * 
     * If the specified package is not installed, then %FLATPAK_ERROR_NOT_INSTALLED
     * will be thrown.
     * 
     * If no updates could be found on the remote end and the package is
     * already up to date, then %FLATPAK_ERROR_ALREADY_INSTALLED will be thrown.
     * @param flags set of #FlatpakUpdateFlags flag
     * @param kind whether this is an app or runtime
     * @param name name of the app or runtime to update
     * @param arch architecture of the app or runtime to update (default: current architecture)
     * @param branch name of the branch of the app or runtime to update (default: master)
     * @param cancellable a #GCancellable
     */
    update(flags: UpdateFlags, kind: RefKind, name: string, arch?: string | null, branch?: string | null, cancellable?: Gio.Cancellable | null): InstalledRef
    /**
     * Updates the local copy of appstream for `remote_name` for the specified `arch`.
     * @param remoteName the name of the remote
     * @param arch Architecture to update, or %NULL for the local machine arch
     * @param outChanged Set to %TRUE if the contents of the appstream changed, %FALSE if nothing changed
     * @param cancellable a #GCancellable
     */
    updateAppstreamFullSync(remoteName: string, arch?: string | null, outChanged?: boolean | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Updates the local copy of appstream for `remote_name` for the specified `arch`.
     * If you need progress feedback, use flatpak_installation_update_appstream_full_sync().
     * @param remoteName the name of the remote
     * @param arch Architecture to update, or %NULL for the local machine arch
     * @param outChanged Set to %TRUE if the contents of the appstream changed, %FALSE if nothing changed
     * @param cancellable a #GCancellable
     */
    updateAppstreamSync(remoteName: string, arch?: string | null, outChanged?: boolean | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * This is an old deprecated function, you should use
     * #FlatpakTransaction and flatpak_transaction_add_update()
     * instead. It has a lot more interesting features.
     * 
     * Update an application or runtime.
     * 
     * If the specified package is not installed, then %FLATPAK_ERROR_NOT_INSTALLED
     * will be thrown.
     * 
     * If no updates could be found on the remote end and the package is
     * already up to date, then %FLATPAK_ERROR_ALREADY_INSTALLED will be thrown.
     * @param flags set of #FlatpakUpdateFlags flag
     * @param kind whether this is an app or runtime
     * @param name name of the app or runtime to update
     * @param arch architecture of the app or runtime to update (default: current architecture)
     * @param branch name of the branch of the app or runtime to update (default: master)
     * @param subpaths A list of subpaths to fetch, or %NULL for everything
     * @param cancellable a #GCancellable
     */
    updateFull(flags: UpdateFlags, kind: RefKind, name: string, arch?: string | null, branch?: string | null, subpaths?: string[] | null, cancellable?: Gio.Cancellable | null): InstalledRef
    /**
     * Updates the local configuration of a remote repository by fetching
     * the related information from the summary file in the remote OSTree
     * repository and committing the changes to the local installation.
     * @param name the name of the remote to update
     * @param cancellable a #GCancellable
     */
    updateRemoteSync(name: string, cancellable?: Gio.Cancellable | null): boolean
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
    constructor (config?: Installation_ConstructProps)
    _init (config?: Installation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newForPath(path: Gio.File, user: boolean, cancellable?: Gio.Cancellable | null): Installation
    static newSystem(cancellable?: Gio.Cancellable | null): Installation
    static newSystemWithId(id?: string | null, cancellable?: Gio.Cancellable | null): Installation
    static newUser(cancellable?: Gio.Cancellable | null): Installation
    static $gtype: GObject.Type
}
interface InstalledRef_ConstructProps extends Ref_ConstructProps {
    /* Constructor properties of Flatpak-1.0.Flatpak.InstalledRef */
    appdataContentRating?: GLib.HashTable
    appdataContentRatingType?: string
    appdataLicense?: string
    appdataName?: string
    appdataSummary?: string
    appdataVersion?: string
    deployDir?: string
    endOfLife?: string
    endOfLifeRebase?: string
    installedSize?: number
    isCurrent?: boolean
    latestCommit?: string
    origin?: string
    subpaths?: string[]
}
class InstalledRef {
    /* Properties of Flatpak-1.0.Flatpak.InstalledRef */
    readonly appdataContentRating: GLib.HashTable
    readonly appdataContentRatingType: string
    readonly appdataLicense: string
    readonly appdataName: string
    readonly appdataSummary: string
    readonly appdataVersion: string
    deployDir: string
    readonly endOfLife: string
    readonly endOfLifeRebase: string
    installedSize: number
    isCurrent: boolean
    latestCommit: string
    origin: string
    subpaths: string[]
    /* Properties of Flatpak-1.0.Flatpak.Ref */
    readonly arch: string
    readonly branch: string
    readonly collectionId: string
    readonly commit: string
    readonly kind: RefKind
    readonly name: string
    /* Fields of Flatpak-1.0.Flatpak.Ref */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Flatpak-1.0.Flatpak.InstalledRef */
    /**
     * Returns the content rating field from the appdata. This is a potentially
     * empty mapping of content rating attribute IDs to values, to be interpreted
     * by the semantics of the content rating type (see
     * flatpak_installed_ref_get_appdata_content_rating_type()).
     */
    getAppdataContentRating(): GLib.HashTable | null
    /**
     * Returns the content rating type from the appdata. For example, `oars-1.0` or
     * `oars-1.1`.
     */
    getAppdataContentRatingType(): string | null
    /**
     * Returns the license field from the appdata.
     */
    getAppdataLicense(): string
    /**
     * Returns the name field from the appdata.
     * 
     * The returned string is localized.
     */
    getAppdataName(): string
    /**
     * Returns the summary field from the appdata.
     * 
     * The returned string is localized.
     */
    getAppdataSummary(): string
    /**
     * Returns the default version field from the appdata.
     */
    getAppdataVersion(): string
    /**
     * Gets the deploy dir of the ref.
     */
    getDeployDir(): string
    /**
     * Returns the end-of-life reason string, or %NULL if the
     * ref is not end-of-lifed.
     */
    getEol(): string
    /**
     * Returns the end-of-life rebased ref, or %NULL if the
     * ref is not end-of-lifed.
     */
    getEolRebase(): string
    /**
     * Returns the installed size of the ref.
     */
    getInstalledSize(): number
    /**
     * Returns whether the ref is current.
     */
    getIsCurrent(): boolean
    /**
     * Gets the latest commit of the ref.
     */
    getLatestCommit(): string | null
    /**
     * Gets the origin of the ref.
     */
    getOrigin(): string
    /**
     * Returns the subpaths that are installed, or %NULL if all files installed.
     */
    getSubpaths(): string[]
    /**
     * Loads the compressed xml appdata for this ref (if it exists).
     * @param cancellable a #GCancellable
     */
    loadAppdata(cancellable?: Gio.Cancellable | null): any
    /**
     * Loads the metadata file for this ref.
     * @param cancellable a #GCancellable
     */
    loadMetadata(cancellable?: Gio.Cancellable | null): any
    /* Methods of Flatpak-1.0.Flatpak.Ref */
    /**
     * Convert an FlatpakRef object into a string representation that
     * can be parsed by flatpak_ref_parse().
     */
    formatRef(): string
    /**
     * Gets the arch or the ref.
     */
    getArch(): string
    /**
     * Gets the branch of the ref.
     */
    getBranch(): string
    /**
     * Gets the collection ID of the ref.
     */
    getCollectionId(): string
    /**
     * Gets the commit of the ref.
     */
    getCommit(): string
    /**
     * Gets the kind of artifact that this ref refers to.
     */
    getKind(): RefKind
    /**
     * Gets the name of the ref.
     */
    getName(): string
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
    connect(sigName: "notify::appdata-content-rating", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::appdata-content-rating", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::appdata-content-rating", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::appdata-content-rating", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::appdata-content-rating", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::appdata-content-rating-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::appdata-content-rating-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::appdata-content-rating-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::appdata-content-rating-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::appdata-content-rating-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::appdata-license", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::appdata-license", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::appdata-license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::appdata-license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::appdata-license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::appdata-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::appdata-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::appdata-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::appdata-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::appdata-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::appdata-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::appdata-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::appdata-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::appdata-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::appdata-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::appdata-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::appdata-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::appdata-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::appdata-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::appdata-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::deploy-dir", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deploy-dir", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::deploy-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::deploy-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::deploy-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::end-of-life", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-of-life", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::end-of-life", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::end-of-life", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::end-of-life", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::end-of-life-rebase", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-of-life-rebase", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::end-of-life-rebase", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::end-of-life-rebase", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::end-of-life-rebase", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::installed-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::installed-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::installed-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::installed-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::installed-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-current", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-current", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-current", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-current", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-current", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::latest-commit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latest-commit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::latest-commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::latest-commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::latest-commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::origin", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::origin", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subpaths", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subpaths", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subpaths", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subpaths", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subpaths", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::arch", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::arch", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::arch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::arch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::arch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::branch", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::branch", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::branch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::branch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::branch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::collection-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collection-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::collection-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::collection-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::collection-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::commit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::commit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::kind", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InstalledRef_ConstructProps)
    _init (config?: InstalledRef_ConstructProps): void
    static $gtype: GObject.Type
}
interface Instance_ConstructProps extends GObject.Object_ConstructProps {
}
class Instance {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Flatpak-1.0.Flatpak.Instance */
    /**
     * Gets the application ID of the application running in the instance.
     * 
     * Note that this may return %NULL for sandboxes that don't have an application.
     */
    getApp(): string
    /**
     * Gets the architecture of the application running in the instance.
     */
    getArch(): string
    /**
     * Gets the branch of the application running in the instance.
     */
    getBranch(): string
    /**
     * Gets the PID of the application process in the sandbox.
     * 
     * See flatpak_instance_get_pid().
     * 
     * Note that this function may return 0 immediately after launching
     * a sandbox, for a short amount of time.
     */
    getChildPid(): number
    /**
     * Gets the commit of the application running in the instance.
     */
    getCommit(): string
    /**
     * Gets the instance ID. The ID is used by Flatpak for bookkeeping
     * purposes and has no further relevance.
     */
    getId(): string
    /**
     * Gets a keyfile that holds information about the running sandbox.
     * 
     * This file is available as /.flatpak-info inside the sandbox as well.
     * 
     * The most important data in the keyfile is available with separate getters,
     * but there may be more information in the keyfile.
     */
    getInfo(): GLib.KeyFile
    /**
     * Gets the PID of the outermost process in the sandbox. This is not the
     * application process itself, but a bubblewrap 'babysitter' process.
     * 
     * See flatpak_instance_get_child_pid().
     */
    getPid(): number
    /**
     * Gets the ref of the runtime used in the instance.
     */
    getRuntime(): string
    /**
     * Gets the commit of the runtime used in the instance.
     */
    getRuntimeCommit(): string
    /**
     * Finds out if the sandbox represented by `self` is still running.
     */
    isRunning(): boolean
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
    constructor (config?: Instance_ConstructProps)
    _init (config?: Instance_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Gets FlatpakInstance objects for all running sandboxes in the current session.
     */
    static getAll(): Instance[]
    static $gtype: GObject.Type
}
interface Ref_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Flatpak-1.0.Flatpak.Ref */
    arch?: string
    branch?: string
    collectionId?: string
    commit?: string
    kind?: RefKind
    name?: string
}
class Ref {
    /* Properties of Flatpak-1.0.Flatpak.Ref */
    readonly arch: string
    readonly branch: string
    readonly collectionId: string
    readonly commit: string
    readonly kind: RefKind
    readonly name: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Flatpak-1.0.Flatpak.Ref */
    /**
     * Convert an FlatpakRef object into a string representation that
     * can be parsed by flatpak_ref_parse().
     */
    formatRef(): string
    /**
     * Gets the arch or the ref.
     */
    getArch(): string
    /**
     * Gets the branch of the ref.
     */
    getBranch(): string
    /**
     * Gets the collection ID of the ref.
     */
    getCollectionId(): string
    /**
     * Gets the commit of the ref.
     */
    getCommit(): string
    /**
     * Gets the kind of artifact that this ref refers to.
     */
    getKind(): RefKind
    /**
     * Gets the name of the ref.
     */
    getName(): string
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
    connect(sigName: "notify::arch", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::arch", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::arch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::arch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::arch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::branch", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::branch", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::branch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::branch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::branch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::collection-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collection-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::collection-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::collection-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::collection-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::commit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::commit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::kind", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Ref_ConstructProps)
    _init (config?: Ref_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Tries to parse a full ref name and return a #FlatpakRef (without a
     * commit set) or fail if the ref is invalid somehow.
     * @param ref A string ref name, such as "app/org.test.App/x86_64/master"
     */
    static parse(ref: string): Ref
    static $gtype: GObject.Type
}
interface RelatedRef_ConstructProps extends Ref_ConstructProps {
    /* Constructor properties of Flatpak-1.0.Flatpak.RelatedRef */
    shouldAutoprune?: boolean
    shouldDelete?: boolean
    shouldDownload?: boolean
    subpaths?: string[]
}
class RelatedRef {
    /* Properties of Flatpak-1.0.Flatpak.RelatedRef */
    readonly shouldAutoprune: boolean
    readonly shouldDelete: boolean
    readonly shouldDownload: boolean
    readonly subpaths: string[]
    /* Properties of Flatpak-1.0.Flatpak.Ref */
    readonly arch: string
    readonly branch: string
    readonly collectionId: string
    readonly commit: string
    readonly kind: RefKind
    readonly name: string
    /* Fields of Flatpak-1.0.Flatpak.Ref */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Flatpak-1.0.Flatpak.RelatedRef */
    /**
     * Returns the subpaths that should be installed/updated for the ref.
     * This returns %NULL if all files should be installed.
     */
    getSubpaths(): string[]
    /* Methods of Flatpak-1.0.Flatpak.Ref */
    /**
     * Convert an FlatpakRef object into a string representation that
     * can be parsed by flatpak_ref_parse().
     */
    formatRef(): string
    /**
     * Gets the arch or the ref.
     */
    getArch(): string
    /**
     * Gets the branch of the ref.
     */
    getBranch(): string
    /**
     * Gets the collection ID of the ref.
     */
    getCollectionId(): string
    /**
     * Gets the commit of the ref.
     */
    getCommit(): string
    /**
     * Gets the kind of artifact that this ref refers to.
     */
    getKind(): RefKind
    /**
     * Gets the name of the ref.
     */
    getName(): string
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
    connect(sigName: "notify::should-autoprune", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::should-autoprune", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::should-autoprune", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::should-autoprune", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::should-autoprune", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::should-delete", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::should-delete", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::should-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::should-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::should-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::should-download", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::should-download", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::should-download", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::should-download", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::should-download", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subpaths", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subpaths", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subpaths", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subpaths", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subpaths", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::arch", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::arch", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::arch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::arch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::arch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::branch", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::branch", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::branch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::branch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::branch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::collection-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collection-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::collection-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::collection-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::collection-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::commit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::commit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::kind", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RelatedRef_ConstructProps)
    _init (config?: RelatedRef_ConstructProps): void
    static $gtype: GObject.Type
}
interface Remote_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Flatpak-1.0.Flatpak.Remote */
    /**
     * Name of the remote, as used in configuration files and when interfacing
     * with OSTree. This is typically human readable, but could be generated, and
     * must conform to ostree_validate_remote_name(). It should typically not be
     * presented in the UI.
     */
    name?: string
    /**
     * The type of the remote: whether it comes from static configuration files
     * (`FLATPAK_REMOTE_TYPE_STATIC)` or has been dynamically found from the local
     * network or a mounted USB drive (`FLATPAK_REMOTE_TYPE_LAN,`
     * `FLATPAK_REMOTE_TYPE_USB)`. Dynamic remotes may be added and removed over
     * time.
     */
    type?: RemoteType
}
class Remote {
    /* Properties of Flatpak-1.0.Flatpak.Remote */
    /**
     * Name of the remote, as used in configuration files and when interfacing
     * with OSTree. This is typically human readable, but could be generated, and
     * must conform to ostree_validate_remote_name(). It should typically not be
     * presented in the UI.
     */
    name: string
    /**
     * The type of the remote: whether it comes from static configuration files
     * (`FLATPAK_REMOTE_TYPE_STATIC)` or has been dynamically found from the local
     * network or a mounted USB drive (`FLATPAK_REMOTE_TYPE_LAN,`
     * `FLATPAK_REMOTE_TYPE_USB)`. Dynamic remotes may be added and removed over
     * time.
     */
    readonly type: RemoteType
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Flatpak-1.0.Flatpak.Remote */
    /**
     * Returns the directory where this remote will store locally cached
     * appstream information for the specified `arch`.
     * @param arch which architecture to fetch (default: current architecture)
     */
    getAppstreamDir(arch?: string | null): Gio.File
    /**
     * Returns the timestamp file that will be updated whenever the appstream information
     * has been updated (or tried to update) for the specified `arch`.
     * @param arch which architecture to fetch (default: current architecture)
     */
    getAppstreamTimestamp(arch?: string | null): Gio.File
    /**
     * Returns the repository collection ID of this remote, if set.
     */
    getCollectionId(): string | null
    /**
     * Returns the comment of the remote.
     */
    getComment(): string
    /**
     * Returns the default branch configured for the remote.
     */
    getDefaultBranch(): string
    /**
     * Returns the description of the remote.
     */
    getDescription(): string
    /**
     * Returns whether this remote is disabled.
     */
    getDisabled(): boolean
    /**
     * Returns the filter file of the remote.
     */
    getFilter(): string
    /**
     * Returns whether GPG verification is enabled for the remote.
     */
    getGpgVerify(): boolean
    /**
     * Returns the homepage url of the remote.
     */
    getHomepage(): string
    /**
     * Returns the icon url of the remote.
     */
    getIcon(): string
    /**
     * Returns the main ref of this remote, if set. The main ref is the ref that an
     * origin remote is created for.
     */
    getMainRef(): string
    /**
     * Returns the name of the remote repository.
     */
    getName(): string
    /**
     * Returns whether this remote should be used to find dependencies.
     */
    getNodeps(): boolean
    /**
     * Returns whether this remote should be used to list applications.
     */
    getNoenumerate(): boolean
    /**
     * Returns the priority for the remote.
     */
    getPrio(): number
    /**
     * Get the value of #FlatpakRemote:type.
     */
    getRemoteType(): RemoteType
    /**
     * Returns the title of the remote.
     */
    getTitle(): string
    /**
     * Returns the repository URL of this remote.
     */
    getUrl(): string
    /**
     * Sets the repository collection ID of this remote.
     * 
     * Note: This is a local modification of this object, you must commit changes
     * using flatpak_installation_modify_remote() for the changes to take
     * effect.
     * @param collectionId The new collection ID, or %NULL to unset
     */
    setCollectionId(collectionId?: string | null): void
    /**
     * Sets the comment of this remote.
     * 
     * Note: This is a local modification of this object, you must commit changes
     * using flatpak_installation_modify_remote() for the changes to take
     * effect.
     * @param comment The new comment
     */
    setComment(comment: string): void
    /**
     * Sets the default branch configured for this remote.
     * 
     * Note: This is a local modification of this object, you must commit changes
     * using flatpak_installation_modify_remote() for the changes to take
     * effect.
     * @param defaultBranch The new default_branch
     */
    setDefaultBranch(defaultBranch: string): void
    /**
     * Sets the description of this remote.
     * 
     * Note: This is a local modification of this object, you must commit changes
     * using flatpak_installation_modify_remote() for the changes to take
     * effect.
     * @param description The new description
     */
    setDescription(description: string): void
    /**
     * Sets the disabled config of this remote. See flatpak_remote_get_disabled().
     * 
     * Note: This is a local modification of this object, you must commit changes
     * using flatpak_installation_modify_remote() for the changes to take
     * effect.
     * @param disabled a bool
     */
    setDisabled(disabled: boolean): void
    /**
     * Sets a filter for this remote.
     * 
     * Note: This is a local modification of this object, you must commit changes
     * using flatpak_installation_modify_remote() for the changes to take
     * effect.
     * @param filterPath The pathname of the new filter file
     */
    setFilter(filterPath: string): void
    /**
     * Sets the trusted gpg key for this remote.
     * 
     * Note: This is a local modification of this object, you must commit changes
     * using flatpak_installation_modify_remote() for the changes to take
     * effect.
     * @param gpgKey a #GBytes with gpg binary key data
     */
    setGpgKey(gpgKey: any): void
    /**
     * Sets the gpg_verify config of this remote. See flatpak_remote_get_gpg_verify().
     * 
     * Note: This is a local modification of this object, you must commit changes
     * using flatpak_installation_modify_remote() for the changes to take
     * effect.
     * @param gpgVerify a bool
     */
    setGpgVerify(gpgVerify: boolean): void
    /**
     * Sets the homepage of this remote.
     * 
     * Note: This is a local modification of this object, you must commit changes
     * using flatpak_installation_modify_remote() for the changes to take
     * effect.
     * @param homepage The new homepage
     */
    setHomepage(homepage: string): void
    /**
     * Sets the homepage of this remote.
     * 
     * Note: This is a local modification of this object, you must commit changes
     * using flatpak_installation_modify_remote() for the changes to take
     * effect.
     * @param icon The new homepage
     */
    setIcon(icon: string): void
    /**
     * Sets the main ref of this remote. The main ref is the ref that an origin
     * remote is created for.
     * 
     * Note: This is a local modification of this object, you must commit changes
     * using flatpak_installation_modify_remote() for the changes to take
     * effect.
     * @param mainRef The new main ref
     */
    setMainRef(mainRef: string): void
    /**
     * Sets the nodeps config of this remote. See flatpak_remote_get_nodeps().
     * 
     * Note: This is a local modification of this object, you must commit changes
     * using flatpak_installation_modify_remote() for the changes to take
     * effect.
     * @param nodeps a bool
     */
    setNodeps(nodeps: boolean): void
    /**
     * Sets the noenumeration config of this remote. See flatpak_remote_get_noenumerate().
     * 
     * Note: This is a local modification of this object, you must commit changes
     * using flatpak_installation_modify_remote() for the changes to take
     * effect.
     * @param noenumerate a bool
     */
    setNoenumerate(noenumerate: boolean): void
    /**
     * Sets the prio config of this remote. See flatpak_remote_get_prio().
     * 
     * Note: This is a local modification of this object, you must commit changes
     * using flatpak_installation_modify_remote() for the changes to take
     * effect.
     * @param prio a bool
     */
    setPrio(prio: number): void
    /**
     * Sets the repository title of this remote.
     * 
     * Note: This is a local modification of this object, you must commit changes
     * using flatpak_installation_modify_remote() for the changes to take
     * effect.
     * @param title The new title
     */
    setTitle(title: string): void
    /**
     * Sets the repository URL of this remote.
     * 
     * Note: This is a local modification of this object, you must commit changes
     * using flatpak_installation_modify_remote() for the changes to take
     * effect.
     * @param url The new url
     */
    setUrl(url: string): void
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
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Remote_ConstructProps)
    _init (config?: Remote_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string): Remote
    static newFromFile(name: string, data: any): Remote
    static $gtype: GObject.Type
}
interface RemoteRef_ConstructProps extends Ref_ConstructProps {
    /* Constructor properties of Flatpak-1.0.Flatpak.RemoteRef */
    downloadSize?: number
    endOfLife?: string
    endOfLifeRebase?: string
    installedSize?: number
    metadata?: any
    remoteName?: string
}
class RemoteRef {
    /* Properties of Flatpak-1.0.Flatpak.RemoteRef */
    readonly downloadSize: number
    readonly endOfLife: string
    readonly endOfLifeRebase: string
    readonly installedSize: number
    readonly metadata: any
    readonly remoteName: string
    /* Properties of Flatpak-1.0.Flatpak.Ref */
    readonly arch: string
    readonly branch: string
    readonly collectionId: string
    readonly commit: string
    readonly kind: RefKind
    readonly name: string
    /* Fields of Flatpak-1.0.Flatpak.Ref */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Flatpak-1.0.Flatpak.RemoteRef */
    /**
     * Returns the download size of the ref.
     */
    getDownloadSize(): number
    /**
     * Returns the end-of-life reason string, or %NULL if the
     * ref is not end-of-lifed.
     */
    getEol(): string
    /**
     * Returns the end-of-life rebased ref, or %NULL if the
     * ref is not end-of-lifed.
     */
    getEolRebase(): string
    /**
     * Returns the installed size of the ref.
     */
    getInstalledSize(): number
    /**
     * Returns the app metadata from the metadata cache of the ref.
     */
    getMetadata(): any | null
    /**
     * Gets the remote name of the ref.
     */
    getRemoteName(): string
    /* Methods of Flatpak-1.0.Flatpak.Ref */
    /**
     * Convert an FlatpakRef object into a string representation that
     * can be parsed by flatpak_ref_parse().
     */
    formatRef(): string
    /**
     * Gets the arch or the ref.
     */
    getArch(): string
    /**
     * Gets the branch of the ref.
     */
    getBranch(): string
    /**
     * Gets the collection ID of the ref.
     */
    getCollectionId(): string
    /**
     * Gets the commit of the ref.
     */
    getCommit(): string
    /**
     * Gets the kind of artifact that this ref refers to.
     */
    getKind(): RefKind
    /**
     * Gets the name of the ref.
     */
    getName(): string
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
    connect(sigName: "notify::download-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::download-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::download-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::download-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::download-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::end-of-life", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-of-life", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::end-of-life", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::end-of-life", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::end-of-life", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::end-of-life-rebase", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-of-life-rebase", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::end-of-life-rebase", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::end-of-life-rebase", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::end-of-life-rebase", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::installed-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::installed-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::installed-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::installed-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::installed-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::metadata", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadata", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remote-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remote-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remote-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remote-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::arch", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::arch", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::arch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::arch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::arch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::branch", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::branch", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::branch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::branch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::branch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::collection-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collection-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::collection-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::collection-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::collection-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::commit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::commit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::kind", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RemoteRef_ConstructProps)
    _init (config?: RemoteRef_ConstructProps): void
    static $gtype: GObject.Type
}
interface Transaction_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Flatpak-1.0.Flatpak.Transaction */
    /**
     * The installation that the transaction operates on.
     */
    installation?: Installation
}
class Transaction {
    /* Properties of Flatpak-1.0.Flatpak.Transaction */
    /**
     * The installation that the transaction operates on.
     */
    readonly installation: Installation
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Flatpak-1.0.Flatpak.Transaction */
    /**
     * Cancel an ongoing webflow authentication request. This can be call
     * in the time between #FlatpakTransaction::webflow-start returned
     * %TRUE, and #FlatpakTransaction::webflow-done is emitted. It will
     * cancel the ongoing authentication operation.
     * 
     * This is useful for example if you're showing an authenticaion
     * window with a browser, but the user closed it before it was finished.
     * @param id The webflow id, as passed into the webflow-start signal
     */
    abortWebflow(id: number): void
    /**
     * Similar to flatpak_transaction_add_dependency_source(), but adds
     * all the default installations, which means all the defined system-wide
     * (but not per-user) installations.
     */
    addDefaultDependencySources(): void
    /**
     * Adds an extra installation as a source for application dependencies.
     * This means that applications can be installed in this transaction relying
     * on runtimes from this additional installation (whereas it would normally
     * install required runtimes that are not installed in the installation
     * the transaction works on).
     * 
     * Also see flatpak_transaction_add_default_dependency_sources().
     * @param installation a #FlatpakInstallation
     */
    addDependencySource(installation: Installation): void
    /**
     * Adds installing the given ref to this transaction.
     * 
     * The `remote` can either be a configured remote of the installation,
     * or a file:// uri pointing at a local repository to install from,
     * in which case an origin remote is created.
     * @param remote the name of the remote
     * @param ref the ref
     * @param subpaths subpaths to install, or the  empty list or %NULL to pull all subpaths
     */
    addInstall(remote: string, ref: string, subpaths?: string[] | null): boolean
    /**
     * Adds installing the given bundle to this transaction.
     * @param file a #GFile that is an flatpak bundle
     * @param gpgData GPG key with which to check bundle signatures, or  %NULL to use the key embedded in the bundle (if any)
     */
    addInstallBundle(file: Gio.File, gpgData?: any | null): boolean
    /**
     * Adds installing the given flatpakref to this transaction.
     * @param flatpakrefData data from a flatpakref file
     */
    addInstallFlatpakref(flatpakrefData: any): boolean
    /**
     * Adds updating the `previous_ids` of the given ref to this transaction, via either
     * installing the `ref` if it was not already present. The will treat `ref` as the
     * result of following an eol-rebase, and data migration from the refs in
     * `previous_ids` will be set up.
     * 
     * See flatpak_transaction_add_install() for a description of `remote`.
     * @param remote the name of the remote
     * @param ref the ref
     * @param subpaths the subpaths to include, or %NULL to install the complete ref
     * @param previousIds Previous ids to add to the     given ref. These should simply be the ids, not the full ref names (e.g. org.foo.Bar,     not org.foo.Bar/x86_64/master).
     */
    addRebase(remote: string, ref: string, subpaths?: string | null, previousIds?: string[] | null): boolean
    /**
     * Adds an extra local ostree repo as source for installation. This is
     * equivalent to using the sideload-repos directories (see flatpak(1)), but can
     * be done dynamically. Any path added here is used in addition to ones in
     * those directories.
     * @param path a path to a local flatpak repository
     */
    addSideloadRepo(path: string): void
    /**
     * Adds uninstalling the given ref to this transaction.
     * @param ref the ref
     */
    addUninstall(ref: string): boolean
    /**
     * Adds updating the given ref to this transaction.
     * @param ref the ref
     * @param subpaths subpaths to install; %NULL  to use the current set plus the set of configured languages, or  `{ "", NULL }` to pull all subpaths.
     * @param commit the commit to update to, or %NULL to use the latest
     */
    addUpdate(ref: string, subpaths?: string[] | null, commit?: string | null): boolean
    /**
     * Finishes (or aborts) an ongoing basic auth request.
     * @param id The webflow id, as passed into the webflow-start signal
     * @param user The user name, or %NULL if aborting request
     * @param password The password
     * @param options Extra a{sv] variant with options (or %NULL), currently unused.
     */
    completeBasicAuth(id: number, user: string, password: string, options: GLib.Variant): void
    /**
     * Gets the current operation.
     */
    getCurrentOperation(): TransactionOperation
    /**
     * Gets the installation this transaction was created for.
     */
    getInstallation(): Installation
    /**
     * Gets whether the transaction is only downloading updates,
     * and not deploying them.
     */
    getNoDeploy(): boolean
    /**
     * Gets whether the transaction should operate only on locally
     * available data.
     */
    getNoPull(): boolean
    /**
     * Gets the list of operations. Skipped operations are not included.
     */
    getOperations(): TransactionOperation[]
    /**
     * Gets the parent window set for this transaction, or %NULL if unset. See
     * flatpak_transaction_get_parent_window().
     */
    getParentWindow(): string
    /**
     * Returns whether the transaction contains any non-skipped operations.
     */
    isEmpty(): boolean
    /**
     * Executes the transaction.
     * 
     * During the course of the execution, various signals will get emitted.
     * The FlatpakTransaction::choose-remote-for-ref  and
     * #FlatpakTransaction::add-new-remote signals may get emitted while
     * resolving operations. #FlatpakTransaction::ready is emitted when
     * the transaction has been fully resolved, and #FlatpakTransaction::new-operation
     * and #FlatpakTransaction::operation-done are emitted while the operations
     * are carried out. If an error occurs at any point during the execution,
     * #FlatpakTransaction::operation-error is emitted.
     * 
     * Note that this call blocks until the transaction is done.
     * @param cancellable a #GCancellable
     */
    run(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets the architecture to default to where it is unspecified.
     * @param arch the arch to make default
     */
    setDefaultArch(arch: string): void
    /**
     * Sets whether the transaction should ignore runtime dependencies
     * when resolving operations for applications.
     * @param disableDependencies whether to disable runtime dependencies
     */
    setDisableDependencies(disableDependencies: boolean): void
    /**
     * Sets whether the transaction should avoid pruning the local OSTree
     * repository after updating.
     * @param disablePrune whether to avoid pruning
     */
    setDisablePrune(disablePrune: boolean): void
    /**
     * Sets whether the transaction should avoid adding related refs
     * when resolving operations. Related refs are extensions that are
     * suggested by apps, such as locales.
     * @param disableRelated whether to avoid adding related refs
     */
    setDisableRelated(disableRelated: boolean): void
    /**
     * Sets whether the transaction should avoid using static
     * deltas when pulling.
     * @param disableStaticDeltas whether to avoid static deltas
     */
    setDisableStaticDeltas(disableStaticDeltas: boolean): void
    /**
     * Sets whether the transaction should uninstall files even
     * if they're used by a running application.
     * @param forceUninstall whether to force-uninstall refs
     */
    setForceUninstall(forceUninstall: boolean): void
    /**
     * Sets whether the transaction should download updates, but
     * not deploy them.
     * @param noDeploy whether to avoid deploying
     */
    setNoDeploy(noDeploy: boolean): void
    /**
     * This method can be used to prevent interactive authorization dialogs to appear
     * for operations on `self`. This is useful for background operations that are not
     * directly triggered by a user action.
     * 
     * By default, the setting from the parent #FlatpakInstallation is used.
     * @param noInteraction Whether to disallow interactive authorization for operations
     */
    setNoInteraction(noInteraction: boolean): void
    /**
     * Sets whether the transaction should operate only on locally
     * available data.
     * @param noPull whether to avoid pulls
     */
    setNoPull(noPull: boolean): void
    /**
     * Sets the parent window (if any) to use for any UI show by this transaction.
     * This is used by authenticators if they need to interact with the user during
     * authentication.
     * 
     * The format of this string depends on the display system in use, and is the
     * same as used by xdg-desktop-portal.
     * 
     * On X11 it should be of the form x11:$xid where $xid is the hex
     * version of the xwindows id.
     * 
     * On wayland is should be wayland:$handle where handle is gotten by
     * using the export call of the xdg-foreign-unstable wayland extension.
     * @param parentWindow whether to avoid pulls
     */
    setParentWindow(parentWindow: string): void
    /**
     * Sets whether the transaction should uninstall first if a
     * ref is already installed.
     * @param reinstall whether to reinstall refs
     */
    setReinstall(reinstall: boolean): void
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
    /* Signals of Flatpak-1.0.Flatpak.Transaction */
    /**
     * The ::add-new-remote signal gets emitted if, as part of the transaction,
     * it is required or recommended that a new remote is added, for the reason
     * described in `reason`.
     * @param reason A #FlatpakTransactionRemoteReason for this suggestion
     * @param fromId The id of the app/runtime
     * @param suggestedRemoteName The suggested remote name
     * @param url The repo url
     */
    connect(sigName: "add-new-remote", callback: ((reason: TransactionRemoteReason, fromId: string, suggestedRemoteName: string, url: string) => boolean)): number
    on(sigName: "add-new-remote", callback: (reason: TransactionRemoteReason, fromId: string, suggestedRemoteName: string, url: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "add-new-remote", callback: (reason: TransactionRemoteReason, fromId: string, suggestedRemoteName: string, url: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "add-new-remote", callback: (reason: TransactionRemoteReason, fromId: string, suggestedRemoteName: string, url: string) => void): NodeJS.EventEmitter
    emit(sigName: "add-new-remote", reason: TransactionRemoteReason, fromId: string, suggestedRemoteName: string, url: string): void
    /**
     * The ::basic-auth-start signal gets emitted when a basic user/password
     * authentication is needed during the operation. If the caller handles this
     * it should ask the user for the user and password and return %TRUE. Once
     * the information is gathered call flatpak_transaction_complete_basic_auth()
     * with it.
     * 
     * If the client does not support basic auth then return %FALSE from this signal
     * (or don't implement it). This will abort the authentication and likely
     * result in the transaction failing (unless the authentication was somehow
     * optional).
     * @param remote The remote we're authenticating with
     * @param realm The url to show
     * @param options Extra options, currently unused
     * @param id The id of the operation, can be used to finish it
     */
    connect(sigName: "basic-auth-start", callback: ((remote: string, realm: string, options: GLib.Variant, id: number) => boolean)): number
    on(sigName: "basic-auth-start", callback: (remote: string, realm: string, options: GLib.Variant, id: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "basic-auth-start", callback: (remote: string, realm: string, options: GLib.Variant, id: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "basic-auth-start", callback: (remote: string, realm: string, options: GLib.Variant, id: number) => void): NodeJS.EventEmitter
    emit(sigName: "basic-auth-start", remote: string, realm: string, options: GLib.Variant, id: number): void
    /**
     * The ::choose-remote-for-ref signal gets emitted when a
     * remote needs to be selected during the execution of the transaction.
     * @param forRef The ref we are installing
     * @param runtimeRef The ref we are looking for
     * @param remotes the remotes that has the ref, sorted in prio order
     */
    connect(sigName: "choose-remote-for-ref", callback: ((forRef: string, runtimeRef: string, remotes: string[]) => number)): number
    on(sigName: "choose-remote-for-ref", callback: (forRef: string, runtimeRef: string, remotes: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "choose-remote-for-ref", callback: (forRef: string, runtimeRef: string, remotes: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "choose-remote-for-ref", callback: (forRef: string, runtimeRef: string, remotes: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "choose-remote-for-ref", forRef: string, runtimeRef: string, remotes: string[]): void
    /**
     * The ::end-of-lifed signal gets emitted when a ref is found to
     * be marked as end-of-life during the execution of the transaction.
     * @param ref The ref we are installing
     * @param reason The eol reason, or %NULL
     * @param rebase The new name, if rebased, or %NULL
     */
    connect(sigName: "end-of-lifed", callback: ((ref: string, reason: string, rebase: string) => void)): number
    on(sigName: "end-of-lifed", callback: (ref: string, reason: string, rebase: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "end-of-lifed", callback: (ref: string, reason: string, rebase: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "end-of-lifed", callback: (ref: string, reason: string, rebase: string) => void): NodeJS.EventEmitter
    emit(sigName: "end-of-lifed", ref: string, reason: string, rebase: string): void
    /**
     * The ::end-of-lifed-with-rebase signal gets emitted when a ref is found
     * to be marked as end-of-life before the transaction begins. Unlike
     * #FlatpakTransaction::end-of-lifed, this signal allows for the
     * transaction to be modified in order to e.g. install the rebased
     * ref.
     * @param remote The remote for the ref we are processing
     * @param ref The ref we are processing
     * @param reason The eol reason, or %NULL
     * @param rebasedToRef The new name, if rebased, or %NULL
     * @param previousIds The previous names for the rebased ref (if any), including the one from `ref`
     */
    connect(sigName: "end-of-lifed-with-rebase", callback: ((remote: string, ref: string, reason: string, rebasedToRef: string, previousIds: string[]) => boolean)): number
    on(sigName: "end-of-lifed-with-rebase", callback: (remote: string, ref: string, reason: string, rebasedToRef: string, previousIds: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "end-of-lifed-with-rebase", callback: (remote: string, ref: string, reason: string, rebasedToRef: string, previousIds: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "end-of-lifed-with-rebase", callback: (remote: string, ref: string, reason: string, rebasedToRef: string, previousIds: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "end-of-lifed-with-rebase", remote: string, ref: string, reason: string, rebasedToRef: string, previousIds: string[]): void
    /**
     * The ::install-authenticator signal gets emitted if, as part of
     * resolving the transaction, we need to use an authenticator, but the authentication
     * is not installed, but is available to be installed from the ref.
     * 
     * The application can handle this signal, and if so create another transaction
     * to install the authenticator.
     * 
     * The default handler does nothing, and if the authenticator is not installed when
     * the signal handler fails the transaction will error out.
     * @param remote The remote name
     * @param authenticatorRef The ref for the authenticator
     */
    connect(sigName: "install-authenticator", callback: ((remote: string, authenticatorRef: string) => void)): number
    on(sigName: "install-authenticator", callback: (remote: string, authenticatorRef: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "install-authenticator", callback: (remote: string, authenticatorRef: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "install-authenticator", callback: (remote: string, authenticatorRef: string) => void): NodeJS.EventEmitter
    emit(sigName: "install-authenticator", remote: string, authenticatorRef: string): void
    /**
     * The ::new-operation signal gets emitted during the execution of
     * the transaction when a new operation is beginning.
     * @param operation The new #FlatpakTransactionOperation
     * @param progress A #FlatpakTransactionProgress for `operation`
     */
    connect(sigName: "new-operation", callback: ((operation: TransactionOperation, progress: TransactionProgress) => void)): number
    on(sigName: "new-operation", callback: (operation: TransactionOperation, progress: TransactionProgress) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-operation", callback: (operation: TransactionOperation, progress: TransactionProgress) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-operation", callback: (operation: TransactionOperation, progress: TransactionProgress) => void): NodeJS.EventEmitter
    emit(sigName: "new-operation", operation: TransactionOperation, progress: TransactionProgress): void
    /**
     * The ::operation-done signal gets emitted during the execution of
     * the transaction when an operation is finished.
     * @param operation The #FlatpakTransactionOperation which finished
     * @param commit The commit
     * @param result A #FlatpakTransactionResult giving details about the result
     */
    connect(sigName: "operation-done", callback: ((operation: TransactionOperation, commit: string, result: TransactionResult) => void)): number
    on(sigName: "operation-done", callback: (operation: TransactionOperation, commit: string, result: TransactionResult) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "operation-done", callback: (operation: TransactionOperation, commit: string, result: TransactionResult) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "operation-done", callback: (operation: TransactionOperation, commit: string, result: TransactionResult) => void): NodeJS.EventEmitter
    emit(sigName: "operation-done", operation: TransactionOperation, commit: string, result: TransactionResult): void
    /**
     * The ::operation-error signal gets emitted when an error occurs during the
     * execution of the transaction.
     * @param operation The #FlatpakTransactionOperation which failed
     * @param error A #GError
     * @param details A #FlatpakTransactionErrorDetails with details about the error
     */
    connect(sigName: "operation-error", callback: ((operation: TransactionOperation, error: GLib.Error, details: TransactionErrorDetails) => boolean)): number
    on(sigName: "operation-error", callback: (operation: TransactionOperation, error: GLib.Error, details: TransactionErrorDetails) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "operation-error", callback: (operation: TransactionOperation, error: GLib.Error, details: TransactionErrorDetails) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "operation-error", callback: (operation: TransactionOperation, error: GLib.Error, details: TransactionErrorDetails) => void): NodeJS.EventEmitter
    emit(sigName: "operation-error", operation: TransactionOperation, error: GLib.Error, details: TransactionErrorDetails): void
    /**
     * The ::ready signal is emitted when all the refs involved in the operation
     * have been resolved to commits. At this point flatpak_transaction_get_operations()
     * will return all the operations that will be executed as part of the
     * transaction.
     */
    connect(sigName: "ready", callback: (() => boolean)): number
    on(sigName: "ready", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "ready", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "ready", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "ready"): void
    /**
     * The ::webflow-done signal gets emitted when the authentication
     * finished the webflow, independent of the reason and results.  If
     * you for were showing a web-browser window it can now be closed.
     * @param options Extra options, currently unused
     * @param id The id of the operation
     */
    connect(sigName: "webflow-done", callback: ((options: GLib.Variant, id: number) => void)): number
    on(sigName: "webflow-done", callback: (options: GLib.Variant, id: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "webflow-done", callback: (options: GLib.Variant, id: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "webflow-done", callback: (options: GLib.Variant, id: number) => void): NodeJS.EventEmitter
    emit(sigName: "webflow-done", options: GLib.Variant, id: number): void
    /**
     * The ::webflow-start signal gets emitted when some kind of user
     * authentication is needed during the operation. If the caller handles this
     * it should show the url in a webbrowser and return %TRUE. This will
     * eventually cause the webbrowser to finish the authentication operation and
     * operation will continue, as signaled by the webflow-done being emitted.
     * 
     * If the client does not support webflow then return %FALSE from this signal
     * (or don't implement it). This will abort the authentication and likely
     * result in the transaction failing (unless the authentication was somehow
     * optional).
     * 
     * During the time between webflow-start and webflow-done the client can call
     * flatpak_transaction_abort_webflow() to manually abort the authentication.
     * This is useful if the user aborted the authentication operation some way,
     * like e.g. closing the browser window.
     * @param remote The remote we're authenticating with
     * @param url The url to show
     * @param options Extra options, currently unused
     * @param id The id of the operation, can be used to cancel it
     */
    connect(sigName: "webflow-start", callback: ((remote: string, url: string, options: GLib.Variant, id: number) => boolean)): number
    on(sigName: "webflow-start", callback: (remote: string, url: string, options: GLib.Variant, id: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "webflow-start", callback: (remote: string, url: string, options: GLib.Variant, id: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "webflow-start", callback: (remote: string, url: string, options: GLib.Variant, id: number) => void): NodeJS.EventEmitter
    emit(sigName: "webflow-start", remote: string, url: string, options: GLib.Variant, id: number): void
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
    connect(sigName: "notify::installation", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::installation", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::installation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::installation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::installation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Transaction_ConstructProps)
    _init (config?: Transaction_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newForInstallation(installation: Installation, cancellable?: Gio.Cancellable | null): Transaction
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
interface TransactionOperation_ConstructProps extends GObject.Object_ConstructProps {
}
class TransactionOperation {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Flatpak-1.0.Flatpak.TransactionOperation */
    /**
     * Gets the path to the bundle.
     */
    getBundlePath(): Gio.File
    /**
     * Gets the commit ID for the operation.
     * 
     * This information is available when the transaction is resolved,
     * i.e. when #FlatpakTransaction::ready is emitted.
     */
    getCommit(): string
    /**
     * Gets the maximum download size for the operation.
     * 
     * Note that this does not include the size of dependencies, and
     * the actual download may be smaller, if some of the data is already
     * available locally.
     * 
     * For uninstall operations, this returns 0.
     * 
     * This information is available when the transaction is resolved,
     * i.e. when #FlatpakTransaction::ready is emitted.
     */
    getDownloadSize(): number
    /**
     * Gets the installed size for the operation.
     * 
     * Note that even for a new install, the extra space required on
     * disk may be smaller than this number, if some of the data is already
     * available locally.
     * 
     * For uninstall operations, this returns 0.
     * 
     * This information is available when the transaction is resolved,
     * i.e. when #FlatpakTransaction::ready is emitted.
     */
    getInstalledSize(): number
    /**
     * Gets whether this operation will be skipped when the transaction is run.
     * Operations are skipped in some transaction situations, for example when an
     * app has reached end of life and needs a rebase, or when it would have been
     * updated but no update is available. By default, skipped
     * operations are not returned by flatpak_transaction_get_operations() — but
     * they can be accessed by traversing the operation graph using
     * flatpak_transaction_operation_get_related_to_ops().
     */
    getIsSkipped(): boolean
    /**
     * Gets the metadata that will be applicable when the
     * operation is done.
     * 
     * This can be compared to the current metadata returned
     * by flatpak_transaction_operation_get_old_metadata()
     * to find new required permissions and similar changes.
     * 
     * This information is available when the transaction is resolved,
     * i.e. when #FlatpakTransaction::ready is emitted.
     */
    getMetadata(): GLib.KeyFile
    /**
     * Gets the metadata current metadata for the ref that `self` works on.
     * Also see flatpak_transaction_operation_get_metadata().
     * 
     * This information is available when the transaction is resolved,
     * i.e. when #FlatpakTransaction::ready is emitted.
     */
    getOldMetadata(): GLib.KeyFile
    /**
     * Gets the type of the operation.
     */
    getOperationType(): TransactionOperationType
    /**
     * Gets the ref that the operation applies to.
     */
    getRef(): string
    /**
     * Gets the operations which caused this operation to be added to the
     * transaction. In the case of a runtime, it's the apps whose runtime it is (and
     * this could be multiple apps, if they all require the same runtime). In
     * the case of a related ref such as an extension, it's the main app or
     * runtime. In the case of a main app or something added to the transaction by
     * flatpak_transaction_add_ref(), %NULL or an empty array will be returned.
     * 
     * Note that an op will be returned even if it’s marked as to be skipped when
     * the transaction is run. Check that using
     * flatpak_transaction_operation_get_is_skipped().
     * 
     * Elements in the returned array are only safe to access while the parent
     * #FlatpakTransaction is alive.
     */
    getRelatedToOps(): TransactionOperation[] | null
    /**
     * Gets the remote that the operation applies to.
     */
    getRemote(): string
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
    constructor (config?: TransactionOperation_ConstructProps)
    _init (config?: TransactionOperation_ConstructProps): void
    static $gtype: GObject.Type
}
interface TransactionProgress_ConstructProps extends GObject.Object_ConstructProps {
}
class TransactionProgress {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Flatpak-1.0.Flatpak.TransactionProgress */
    /**
     * Gets the number of bytes that have been transferred.
     */
    getBytesTransferred(): number
    /**
     * Gets whether the progress is currently estimating
     */
    getIsEstimating(): boolean
    /**
     * Gets the current progress.
     */
    getProgress(): number
    /**
     * Gets the time at which this operation has started, as monotonic time.
     */
    getStartTime(): number
    /**
     * Gets the current status string
     */
    getStatus(): string
    /**
     * Sets how often progress should be updated.
     * @param updateInterval the update interval, in milliseconds
     */
    setUpdateFrequency(updateInterval: number): void
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
    /* Signals of Flatpak-1.0.Flatpak.TransactionProgress */
    /**
     * Emitted when some detail of the progress object changes, you can call the various methods to get the current status.
     */
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
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
    constructor (config?: TransactionProgress_ConstructProps)
    _init (config?: TransactionProgress_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class BundleRefClass {
    /* Fields of Flatpak-1.0.Flatpak.BundleRefClass */
    parentClass: RefClass
    static name: string
}
abstract class InstallationClass {
    /* Fields of Flatpak-1.0.Flatpak.InstallationClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class InstalledRefClass {
    /* Fields of Flatpak-1.0.Flatpak.InstalledRefClass */
    parentClass: RefClass
    static name: string
}
abstract class InstanceClass {
    /* Fields of Flatpak-1.0.Flatpak.InstanceClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class RefClass {
    /* Fields of Flatpak-1.0.Flatpak.RefClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class RelatedRefClass {
    /* Fields of Flatpak-1.0.Flatpak.RelatedRefClass */
    parentClass: RefClass
    static name: string
}
abstract class RemoteClass {
    /* Fields of Flatpak-1.0.Flatpak.RemoteClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class RemoteRefClass {
    /* Fields of Flatpak-1.0.Flatpak.RemoteRefClass */
    parentClass: RefClass
    static name: string
}
abstract class TransactionClass {
    /* Fields of Flatpak-1.0.Flatpak.TransactionClass */
    parentClass: GObject.ObjectClass
    newOperation: (transaction: Transaction, operation: TransactionOperation, progress: TransactionProgress) => void
    operationDone: (transaction: Transaction, operation: TransactionOperation, commit: string, details: TransactionResult) => void
    operationError: (transaction: Transaction, operation: TransactionOperation, error: GLib.Error, detail: TransactionErrorDetails) => boolean
    chooseRemoteForRef: (transaction: Transaction, forRef: string, runtimeRef: string, remotes: string) => number
    endOfLifed: (transaction: Transaction, ref: string, reason: string, rebase: string) => void
    ready: (transaction: Transaction) => boolean
    addNewRemote: (transaction: Transaction, reason: TransactionRemoteReason, fromId: string, remoteName: string, url: string) => boolean
    run: (transaction: Transaction, cancellable?: Gio.Cancellable | null) => boolean
    endOfLifedWithRebase: (transaction: Transaction, remote: string, ref: string, reason: string, rebasedToRef: string, previousIds: string) => boolean
    webflowStart: (transaction: Transaction, remote: string, url: string, options: GLib.Variant, id: number) => boolean
    webflowDone: (transaction: Transaction, options: GLib.Variant, id: number) => void
    basicAuthStart: (transaction: Transaction, remote: string, realm: string, options: GLib.Variant, id: number) => boolean
    installAuthenticator: (transaction: Transaction, remote: string, authenticatorRef: string) => void
    padding: object[]
    static name: string
}
abstract class TransactionOperationClass {
    /* Fields of Flatpak-1.0.Flatpak.TransactionOperationClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class TransactionProgressClass {
    /* Fields of Flatpak-1.0.Flatpak.TransactionProgressClass */
    parentClass: GObject.ObjectClass
    static name: string
}
}
export default Flatpak;