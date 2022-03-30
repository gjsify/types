/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GConf-2.0
 */

import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GConf {

enum ClientErrorHandlingMode {
    HANDLE_NONE,
    HANDLE_UNRETURNED,
    HANDLE_ALL,
}
enum ClientPreloadType {
    PRELOAD_NONE,
    PRELOAD_ONELEVEL,
    PRELOAD_RECURSIVE,
}
enum Error {
    SUCCESS,
    FAILED,
    NO_SERVER,
    NO_PERMISSION,
    BAD_ADDRESS,
    BAD_KEY,
    PARSE_ERROR,
    CORRUPT,
    TYPE_MISMATCH,
    IS_DIR,
    IS_KEY,
    OVERRIDDEN,
    OAF_ERROR,
    LOCAL_ENGINE,
    LOCK_FAILED,
    NO_WRITABLE_DATABASE,
    IN_SHUTDOWN,
}
enum ValueType {
    INVALID,
    STRING,
    INT,
    FLOAT,
    BOOL,
    SCHEMA,
    LIST,
    PAIR,
}
enum UnsetFlags {
    NAMES,
}
function concatDirAndKey(dir: string, key: string): string
function debugShutdown(): number
function enumToString(lookupTable: EnumStringPair, enumValue: number): string
function errorQuark(): GLib.Quark
function escapeKey(arbitraryText: string, len: number): string
function init(argc: number, argv: string): boolean
function isInitialized(): boolean
function keyIsBelow(above: string, below: string): boolean
function postinit(app?: object | null, modInfo?: object | null): void
function preinit(app?: object | null, modInfo?: object | null): void
function stringToEnum(lookupTable: EnumStringPair, str: string, enumValueRetloc: number): boolean
function unescapeKey(escapedKey: string, len: number): string
function uniqueKey(): string
function validKey(key: string, whyInvalid: string): boolean
function valueDecode(encoded: string): Value
interface ChangeSetForeachFunc {
    (cs: ChangeSet, key: string, value: Value): void
}
interface ClientErrorHandlerFunc {
    (client: Client, error: GLib.Error): void
}
interface ClientNotifyFunc {
    (client: Client, cnxnId: number, entry: Entry): void
}
interface ListenersForeach {
    (location: string, cnxnId: number, listenerData?: object | null): void
}
interface ListenersPredicate {
    (location: string, cnxnId: number, listenerData?: object | null): boolean
}
interface Client_ConstructProps extends GObject.Object_ConstructProps {
}
class Client {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GConf-2.0.GConf.Client */
    addDir(dir: string, preload: ClientPreloadType): void
    /**
     * Lists the subdirectories in `dir`. The returned list contains
     * allocated strings. Each string is the absolute path of a
     * subdirectory. You should g_free() each string in the list, then
     * g_slist_free() the list itself.  Just like gconf_engine_all_dirs(),
     * but uses #GConfClient caching and error-handling features.
     * @param dir directory to get subdirectories from.
     */
    allDirs(dir: string): string[]
    /**
     * Lists the key-value pairs in `dir`. Does not list subdirectories; for
     * that use gconf_client_all_dirs(). The returned list contains #GConfEntry
     * objects. A #GConfEntry contains an <emphasis>absolute</emphasis> key
     * and a value. The list is not recursive, it contains only the immediate
     * children of `dir`.  To free the returned list, gconf_entry_free()
     * each list element, then g_slist_free() the list itself.
     * Just like gconf_engine_all_entries (), but uses #GConfClient caching and error-handling features.
     * @param dir directory to list.
     */
    allEntries(dir: string): Entry[]
    changeSetFromCurrentv(keys: string): ChangeSet
    clearCache(): void
    commitChangeSet(cs: ChangeSet, removeCommitted: boolean): boolean
    dirExists(dir: string): boolean
    error(error: GLib.Error): void
    get(key: string): Value
    getBool(key: string): boolean
    getDefaultFromSchema(key: string): Value
    getEntry(key: string, locale: string, useSchemaDefault: boolean): Entry
    getFloat(key: string): number
    getInt(key: string): number
    getPair(key: string, carType: ValueType, cdrType: ValueType, carRetloc?: object | null, cdrRetloc?: object | null): boolean
    getString(key: string): string
    getWithoutDefault(key: string): Value
    keyIsWritable(key: string): boolean
    notify(key: string): void
    notifyAdd(namespaceSection: string, func: ClientNotifyFunc): number
    notifyRemove(cnxn: number): void
    preload(dirname: string, type: ClientPreloadType): void
    recursiveUnset(key: string, flags: UnsetFlags): boolean
    removeDir(dir: string): void
    reverseChangeSet(cs: ChangeSet): ChangeSet
    set(key: string, val: Value): void
    setBool(key: string, val: boolean): boolean
    setErrorHandling(mode: ClientErrorHandlingMode): void
    setFloat(key: string, val: number): boolean
    setInt(key: string, val: number): boolean
    setPair(key: string, carType: ValueType, cdrType: ValueType, addressOfCar?: object | null, addressOfCdr?: object | null): boolean
    setString(key: string, val: string): boolean
    suggestSync(): void
    unreturnedError(error: GLib.Error): void
    unset(key: string): boolean
    valueChanged(key: string, value: Value): void
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
    /* Signals of GConf-2.0.GConf.Client */
    connect(sigName: "error", callback: ((object?: object | null) => void)): number
    on(sigName: "error", callback: (object?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: (object?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: (object?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "error", object?: object | null): void
    connect(sigName: "unreturned-error", callback: ((object?: object | null) => void)): number
    on(sigName: "unreturned-error", callback: (object?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unreturned-error", callback: (object?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unreturned-error", callback: (object?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "unreturned-error", object?: object | null): void
    connect(sigName: "value-changed", callback: ((object: string, p0?: object | null) => void)): number
    on(sigName: "value-changed", callback: (object: string, p0?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "value-changed", callback: (object: string, p0?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "value-changed", callback: (object: string, p0?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "value-changed", object: string, p0?: object | null): void
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
    /**
     * Creates a new #GConfClient using the default #GConfEngine. Normally this is the
     * engine you want. If someone else is already using the default
     * #GConfClient, this function returns the same one they're using, but
     * with the reference count incremented. So you have to unref either way.
     */
    static getDefault(): Client
    static $gtype: GObject.Type
}
class ChangeSet {
    /* Methods of GConf-2.0.GConf.ChangeSet */
    checkValue(key: string, valueRetloc: Value): boolean
    clear(): void
    /**
     * Iterates over a #GConfChangeSet by calling a
     * #GConfChangeSetForeachFunc for each change in the set. See the
     * description of #GConfChangeSetForeachFunc for details.  You may not
     * call gconf_change_set_remove() during the iteration, because you'll
     * confuse the internal data structures and cause memory corruption.
     * @param func function to call for each change in the change set.
     */
    foreach(func: ChangeSetForeachFunc): void
    ref(): ChangeSet
    remove(key: string): void
    set(key: string, value: Value): void
    setBool(key: string, val: boolean): void
    setFloat(key: string, val: number): void
    setInt(key: string, val: number): void
    setNocopy(key: string, value: Value): void
    setPair(key: string, carType: ValueType, cdrType: ValueType, addressOfCar?: object | null, addressOfCdr?: object | null): void
    setString(key: string, val: string): void
    size(): number
    unref(): void
    unset(key: string): void
    static name: string
    static new(): ChangeSet
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ChangeSet
}
abstract class ClientClass {
    /* Fields of GConf-2.0.GConf.ClientClass */
    parentClass: GObject.ObjectClass
    valueChanged: (client: Client, key: string, value: Value) => void
    unreturnedError: (client: Client, error: GLib.Error) => void
    error: (client: Client, error: GLib.Error) => void
    pad1: GLib.Func
    pad2: GLib.Func
    pad3: GLib.Func
    static name: string
}
class Engine {
    /* Methods of GConf-2.0.GConf.Engine */
    /**
     * Lists the subdirectories in `dir`. The returned list contains
     * allocated strings. Each string is the absolute path of a
     * subdirectory. You should g_free() each string in the list, then
     * g_slist_free() the list itself.
     * @param dir Directory to get subdirectories from.
     */
    allDirs(dir: string): string[]
    /**
     * Lists the key-value pairs in `dir`. Does not list subdirectories; for
     * that use gconf_engine_all_dirs(). The returned list contains #GConfEntry
     * objects. A #GConfEntry contains an <emphasis>absolute</emphasis> key
     * and a value. The list is not recursive, it contains only the immediate
     * children of `dir`.  To free the returned list, gconf_entry_free()
     * each list element, then g_slist_free() the list itself.
     * @param dir Directory to list.
     */
    allEntries(dir: string): Entry[]
    associateSchema(key: string, schemaKey: string): boolean
    changeSetFromCurrent(err: GLib.Error, firstKey: string, ...args: any): ChangeSet
    changeSetFromCurrentv(keys: string): ChangeSet
    commitChangeSet(cs: ChangeSet, removeCommitted: boolean): boolean
    dirExists(dir: string): boolean
    get(key: string): Value
    getBool(key: string): boolean
    getDefaultFromSchema(key: string): Value
    getEntry(key: string, locale: string, useSchemaDefault: boolean): Entry
    getFloat(key: string): number
    getFull(key: string, locale: string, useSchemaDefault: boolean, isDefaultP: boolean, isWritableP: boolean): Value
    getInt(key: string): number
    getPair(key: string, carType: ValueType, cdrType: ValueType, carRetloc?: object | null, cdrRetloc?: object | null): boolean
    getString(key: string): string
    getUserData(): object | null
    getWithLocale(key: string, locale: string): Value
    getWithoutDefault(key: string): Value
    keyIsWritable(key: string): boolean
    notifyRemove(cnxn: number): void
    ref(): void
    removeDir(dir: string): void
    reverseChangeSet(cs: ChangeSet): ChangeSet
    set(key: string, value: Value): boolean
    setBool(key: string, val: boolean): boolean
    setFloat(key: string, val: number): boolean
    setInt(key: string, val: number): boolean
    setList(key: string, listType: ValueType, list: object[]): boolean
    setPair(key: string, carType: ValueType, cdrType: ValueType, addressOfCar?: object | null, addressOfCdr?: object | null): boolean
    setString(key: string, val: string): boolean
    setUserData(data: object | null, dnotify: GLib.DestroyNotify): void
    suggestSync(): void
    unref(): void
    unset(key: string): boolean
    static name: string
}
class Entry {
    /* Fields of GConf-2.0.GConf.Entry */
    key: string
    value: Value
    /* Methods of GConf-2.0.GConf.Entry */
    copy(): Entry
    equal(b: Entry): boolean
    free(): void
    getIsDefault(): boolean
    getIsWritable(): boolean
    getKey(): string
    getSchemaName(): string
    getValue(): Value
    ref(): Entry
    setIsDefault(isDefault: boolean): void
    setIsWritable(isWritable: boolean): void
    setSchemaName(name: string): void
    setValue(val: Value): void
    setValueNocopy(val: Value): void
    stealValue(): Value
    unref(): void
    static name: string
    static new(key: string, val: Value): Entry
    constructor(key: string, val: Value)
    /* Static methods and pseudo-constructors */
    static new(key: string, val: Value): Entry
    static newNocopy(key: string, val: Value): Entry
}
class EnumStringPair {
    /* Fields of GConf-2.0.GConf.EnumStringPair */
    enumValue: number
    str: string
    static name: string
}
class Listeners {
    /* Methods of GConf-2.0.GConf.Listeners */
    add(listenPoint: string, listenerData: object | null, destroyNotify: GLib.FreeFunc): number
    count(): number
    foreach(callback: ListenersForeach): void
    free(): void
    getData(cnxnId: number, listenerDataP: object | null, locationP: string): boolean
    notify(allAbove: string, callback: any): void
    remove(cnxnId: number): void
    removeIf(predicate: ListenersPredicate): void
    static name: string
}
class MetaInfo {
    /* Fields of GConf-2.0.GConf.MetaInfo */
    schema: string
    modUser: string
    modTime: GLib.Time
    /* Methods of GConf-2.0.GConf.MetaInfo */
    free(): void
    getModUser(): string
    getSchema(): string
    setModTime(modTime: GLib.Time): void
    setModUser(modUser: string): void
    setSchema(schemaName: string): void
    static name: string
}
class Schema {
    /* Methods of GConf-2.0.GConf.Schema */
    free(): void
    getCarType(): ValueType
    getCdrType(): ValueType
    getDefaultValue(): Value
    getListType(): ValueType
    getLocale(): string
    getLongDesc(): string
    getOwner(): string
    getShortDesc(): string
    getType(): ValueType
    setCarType(type: ValueType): void
    setCdrType(type: ValueType): void
    setDefaultValue(val: Value): void
    setDefaultValueNocopy(val: Value): void
    setListType(type: ValueType): void
    setLocale(locale: string): void
    setLongDesc(desc: string): void
    setOwner(owner: string): void
    setShortDesc(desc: string): void
    setType(type: ValueType): void
    static name: string
}
class Value {
    /* Fields of GConf-2.0.GConf.Value */
    type: ValueType
    /* Methods of GConf-2.0.GConf.Value */
    compare(valueB: Value): number
    copy(): Value
    encode(): string
    free(): void
    getBool(): boolean
    getCar(): Value
    getCdr(): Value
    getFloat(): number
    getInt(): number
    /**
     * Returns a #GSList containing #GConfValue objects. Each #GConfValue in
     * the returned list will have the type returned by
     * gconf_value_get_list_type(). Remember that the empty #GSList is equal to
     * <symbol>NULL</symbol>.  The list is not a copy; it is "owned" by the
     * #GConfValue and will be destroyed when the #GConfValue is destroyed.
     */
    getList(): Value[]
    getListType(): ValueType
    getString(): string
    setBool(theBool: boolean): void
    setCar(car: Value): void
    setCarNocopy(car: Value): void
    setCdr(cdr: Value): void
    setCdrNocopy(cdr: Value): void
    setFloat(theFloat: number): void
    setInt(theInt: number): void
    setListType(type: ValueType): void
    setString(theStr: string): void
    toString(): string
    static name: string
    static new(type: ValueType): Value
    constructor(type: ValueType)
    /* Static methods and pseudo-constructors */
    static new(type: ValueType): Value
    static newFromString(type: ValueType, str: string): Value
    static decode(encoded: string): Value
}
}
export default GConf;