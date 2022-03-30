/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Grl-0.1
 */

import type * as Gjs from './Gjs';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace Grl {

/**
 * These constants identify all the available core errors
 */
enum CoreError {
    BROWSE_FAILED,
    SEARCH_FAILED,
    SEARCH_NULL_UNSUPPORTED,
    QUERY_FAILED,
    METADATA_FAILED,
    RESOLVE_FAILED,
    MEDIA_NOT_FOUND,
    STORE_FAILED,
    REMOVE_FAILED,
    SET_METADATA_FAILED,
    MEDIA_FROM_URI_FAILED,
    CONFIG_LOAD_FAILED,
    CONFIG_FAILED,
    UNREGISTER_SOURCE_FAILED,
    LOAD_PLUGIN_FAILED,
    UNLOAD_PLUGIN_FAILED,
    REGISTER_METADATA_KEY_FAILED,
    NOTIFY_CHANGED_FAILED,
    OPERATION_CANCELLED,
}
/**
 * Grilo log levels. Defines the level of verbosity selected in Grilo.
 */
enum LogLevel {
    NONE,
    ERROR,
    WARNING,
    MESSAGE,
    INFO,
    DEBUG,
    LAST,
}
/**
 * GrlMedia serialize type
 */
enum MediaSerializeType {
    BASIC,
    PARTIAL,
    FULL,
}
/**
 * Specifies which kind of change has happened in the plugin
 */
enum MediaSourceChangeType {
    CHANGED,
    ADDED,
    REMOVED,
}
/**
 * Module priority ranks. Defines the order in which the resolver
 * (or similar rank-picking mechanisms) will choose this plugin
 * over an alternative one with the same function.
 * 
 * These constants serve as a rough guidance for defining the rank
 * of a GrlPluginInfo. Any value is valid, including values bigger
 * than GRL_PLUGIN_RANK_HIGHEST.
 */
enum PluginRank {
    LOWEST,
    LOW,
    DEFAULT,
    HIGH,
    HIGHEST,
}
/**
 * GrlMetadata resolution flags
 */
enum MetadataResolutionFlags {
    NORMAL,
    FULL,
    IDLE_RELAY,
    FAST_ONLY,
}
/**
 * Flags for metadata writing operations.
 */
enum MetadataWritingFlags {
    NORMAL,
    FULL,
}
/**
 * Bitwise flags which reflect the kind of operations that a
 * #GrlMediaPlugin supports.
 */
enum SupportedOps {
    NONE,
    METADATA,
    RESOLVE,
    BROWSE,
    SEARCH,
    QUERY,
    STORE,
    STORE_PARENT,
    REMOVE,
    SET_METADATA,
    MEDIA_FROM_URI,
    NOTIFY_CHANGE,
}
const CONFIG_KEY_APIKEY: string
const CONFIG_KEY_APIKEY_BLOB: string
const CONFIG_KEY_APISECRET: string
const CONFIG_KEY_APITOKEN: string
const CONFIG_KEY_PASSWORD: string
const CONFIG_KEY_PLUGIN: string
const CONFIG_KEY_SOURCE: string
const CONFIG_KEY_USERNAME: string
const KEYID_FORMAT: string
const MEDIA_PLUGIN_AUTHOR: string
const MEDIA_PLUGIN_DESCRIPTION: string
const MEDIA_PLUGIN_LICENSE: string
const MEDIA_PLUGIN_NAME: string
const MEDIA_PLUGIN_SITE: string
const MEDIA_PLUGIN_VERSION: string
const METADATA_KEY_CHILDCOUNT_UNKNOWN: number
const PADDING: number
const PADDING_SMALL: number
const PLUGIN_LIST_VAR: string
const PLUGIN_PATH_VAR: string
const PLUGIN_RANKS_VAR: string
const SOURCE_REMAINING_UNKNOWN: number
function init(argv?: string[] | null): /* argv */ string[] | null
function log_configure(config: string): void
function marshal_VOID__BOXED_ENUM_BOOLEAN(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint: object, marshal_data: object): void
function metadata_key_get_desc(key: GObject.ParamSpec): string
function metadata_key_get_name(key: GObject.ParamSpec): string
function metadata_key_setup_system_keys(registry: PluginRegistry): void
function multiple_cancel(search_id: number): void
function multiple_get_media_from_uri(uri: string, keys: KeyID[], flags: MetadataResolutionFlags, callback: MediaSourceMetadataCb): void
function multiple_search(sources: MediaSource[] | null, text: string, keys: GObject.ParamSpec[], count: number, flags: MetadataResolutionFlags, callback: MediaSourceResultCb): number
function multiple_search_sync(sources: MediaSource[] | null, text: string, keys: GObject.ParamSpec[], count: number, flags: MetadataResolutionFlags): Media[]
function operation_cancel(operation_id: number): void
function operation_get_data(operation_id: number): object
function operation_set_data(operation_id: number, user_data: object): void
function paging_translate(skip: number, count: number, max_page_size: number, page_size: number, page_number: number, internal_offset: number): void
/**
 * Prototype for the callback passed to grl_media_source_metadata()
 */
interface MediaSourceMetadataCb {
    (source: MediaSource, operation_id: number, media: Media, error: number): void
}
/**
 * Prototype for the callback passed to grl_media_source_remove()
 */
interface MediaSourceRemoveCb {
    (source: MediaSource, media: Media, error: number): void
}
/**
 * Prototype for the callback passed to the media sources' methods
 */
interface MediaSourceResultCb {
    (source: MediaSource, operation_id: number, media: Media, remaining: number, error: number): void
}
/**
 * Prototype for the callback passed to grl_media_source_store()
 */
interface MediaSourceStoreCb {
    (source: MediaSource, parent: MediaBox, media: Media, error: number): void
}
/**
 * Prototype for the callback passed to grl_metadata_source_resolve()
 */
interface MetadataSourceResolveCb {
    (source: MetadataSource, operation_id: number, media: Media, error: number): void
}
/**
 * Prototype for the callback passed to grl_metadata_source_set_metadata()
 */
interface MetadataSourceSetMetadataCb {
    (source: MetadataSource, media: Media, failed_keys: GObject.ParamSpec[], error: number): void
}
interface Config_ConstructProps extends GObject.Object_ConstructProps {
}
class Config {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Grl-0.1.Grl.Config */
    get_api_key(): string
    get_api_key_blob(size: number): number
    get_api_secret(): string
    get_api_token(): string
    get_binary(param: string, size: number): number
    get_boolean(param: string): boolean
    get_float(param: string): number
    get_int(param: string): number
    get_password(): string
    get_plugin(): string
    get_string(param: string): string
    get_username(): string
    /**
     * otherwise.
     * @param param the param
     */
    has_param(param: string): boolean
    set(param: string, value: any): void
    /**
     * Set the webservice API key in the configuration
     * @param key the API key
     */
    set_api_key(key: string): void
    /**
     * Set the binary API key in the configuration
     * @param blob the binary API key blob
     * @param size the size of the blob
     */
    set_api_key_blob(blob: number, size: number): void
    /**
     * Set the webservice passphrase in the configuration
     * @param secret the webservice passphrase
     */
    set_api_secret(secret: string): void
    /**
     * Set the webservice API token in the configuration
     * @param token the API token
     */
    set_api_token(token: string): void
    set_binary(param: string, blob: number, size: number): void
    set_boolean(param: string, value: boolean): void
    set_float(param: string, value: number): void
    set_int(param: string, value: number): void
    /**
     * Set the password in the configuration
     * @param password the password
     */
    set_password(password: string): void
    /**
     * Set the plugin key in the configuration
     * @param plugin the plugin id
     */
    set_plugin(plugin: string): void
    /**
     * Set the plugin key in the configuration
     * @param source the source id
     */
    set_source(source: string): void
    set_string(param: string, value: string): void
    /**
     * Set the username in the configuration
     * @param username the username
     */
    set_username(username: string): void
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
    connect(sigName: "notify", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Config_ConstructProps)
    _init (config?: Config_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(plugin: string, source?: string | null): Config
    static $gtype: GObject.Type
}
interface Data_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Grl-0.1.Grl.Data */
    overwrite?: boolean
}
class Data {
    /* Properties of Grl-0.1.Grl.Data */
    overwrite: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Grl-0.1.Grl.Data */
    /**
     * Adds a new `key` to `data,` with no value. If key already exists, it does
     * nothing.
     * @param key key to add
     */
    add(key: GObject.ParamSpec): void
    /**
     * Appends a new binary value for `key` in `data`.
     * @param key key to append
     * @param buf the buffer containing the new value
     * @param size size of buffer
     */
    add_binary(key: GObject.ParamSpec, buf: number, size: number): void
    /**
     * Appends a new float value for `key` in `data`.
     * @param key key to append
     * @param floatvalue the new value
     */
    add_float(key: GObject.ParamSpec, floatvalue: number): void
    /**
     * Appends a new int value for `key` in `data`.
     * @param key key to append
     * @param intvalue the new value
     */
    add_int(key: GObject.ParamSpec, intvalue: number): void
    /**
     * Adds a new set of values into `data`.
     * 
     * All keys in `prop` must be related among them.
     * 
     * `data` will take the ownership of `relkeys,` so do not modify it.
     * @param relkeys a set of related properties with their values
     */
    add_related_keys(relkeys: RelatedKeys): void
    /**
     * Appends a new string value for `key` in `data`.
     * @param key key to append
     * @param strvalue the new value
     */
    add_string(key: GObject.ParamSpec, strvalue: string): void
    /**
     * Makes a deep copy of `data` and all its contents.
     */
    dup(): Data
    /**
     * Get the first value from `data` associated with `key`.
     * 
     * freed by user.
     * @param key key to look up.
     */
    get(key: GObject.ParamSpec): any
    /**
     * Returns all non-%NULL values for `key` from `data`. This ignores related keys.
     * 
     * values. Do not change or free the values. Free the list with #g_list_free.
     * @param key a metadata key
     */
    get_all_single_related_keys(key: KeyID): any[]
    /**
     * Returns all non-%NULL values for `key` from `data`. `key` must have been
     * registered as a string-type key. This ignores related keys.
     * 
     * not change or free the strings. Free the list with #g_list_free.
     * @param key a metadata key
     */
    get_all_single_related_keys_string(key: KeyID): string[]
    /**
     * Returns the first binary value associated with `key` from `data`. If `key` has
     * no first value, or value is not a gfloat, or `key` is not in data, then %NULL
     * is returned.
     * 
     * successful `size` will be set the to the buffer size.
     * @param key key to use
     */
    get_binary(key: GObject.ParamSpec): [ /* returnType */ number, /* size */ number ]
    /**
     * Returns the first float value associated with `key` from `data`. If `key` has no
     * first value, or value is not a gfloat, or `key` is not in data, then 0 is
     * returned.
     * @param key key to use
     */
    get_float(key: GObject.ParamSpec): number
    /**
     * Returns the first int value associated with `key` from `data`. If `key` has no
     * first value, or value is not a gint, or `key` is not in data, then 0 is
     * returned.
     * @param key key to use
     */
    get_int(key: GObject.ParamSpec): number
    /**
     * Returns a list with keys contained in `data`.
     * 
     * keys. The content of the list should not be modified or freed. Use
     * g_list_free() when done using the list.
     */
    get_keys(): GObject.ParamSpec[]
    /**
     * Checks if old values are replaced when calling #grl_data_set.
     */
    get_overwrite(): boolean
    /**
     * Returns a set containing the values for `key` and related keys at position
     * `index` from `data`.
     * 
     * If user changes any of the values in the related keys, the changes will
     * become permanent.
     * @param key a metadata key
     * @param index element to retrieve, starting at 0
     */
    get_related_keys(key: KeyID, index: number): RelatedKeys
    /**
     * Returns all non-%NULL values for `key` from `data`. This ignores related keys.
     * 
     * values. Do not change or free the values. Free the list with #g_list_free.
     * @param key a metadata key
     */
    get_single_values_for_key(key: KeyID): any[]
    /**
     * Returns all non-%NULL values for `key` from `data`. `key` must have been
     * registered as a string-type key. This ignores related keys.
     * 
     * not change or free the strings. Free the list with #g_list_free.
     * @param key a metadata key
     */
    get_single_values_for_key_string(key: KeyID): string[]
    /**
     * Returns the first string value associated with `key` from `data`. If `key` has
     * no first value, or value is not string, or `key` is not in `data,` then %NULL
     * is returned.
     * 
     * not change nor free the value.
     * @param key key to use
     */
    get_string(key: GObject.ParamSpec): string
    /**
     * Checks if `key` is in `data`.
     * @param key key to search
     */
    has_key(key: GObject.ParamSpec): boolean
    /**
     * Checks if the `key` has a first value in `data`.
     * @param key key to search
     */
    key_is_known(key: GObject.ParamSpec): boolean
    /**
     * Returns how many values `key` or related keys have in `data:` if `key` has no
     * value, but a related key has, then it is counted as positive.
     * 
     * As example, let's think in three related keys, K1, K2 and K3, and then thinks
     * we have added several values for those keys, as:
     * 
     * (V10, V20, V30),, (V11, NULL, V31), (V12, NULL, V32)
     * 
     * Therefore, when invoking grl_data_length (data, K2) it will return 3:
     * considering K2 and the related keys (K1 and K3), there are 3 values.
     * @param key a metadata key
     */
    length(key: KeyID): number
    /**
     * Removes the first value for `key` from `data`. If there are other keys related
     * to `key` their values will also be removed from `data`.
     * @param key key to remove
     */
    remove(key: GObject.ParamSpec): void
    /**
     * Removes the value at position `index` for `key` from `data`. If there are other
     * keys related to `key,` their values at position `index` will also be removed
     * from `data`.
     * @param key a metadata key
     * @param index index of key to be removed, starting at 0
     */
    remove_nth(key: KeyID, index: number): void
    /**
     * Sets the first value associated with `key` in `data`. If key already has a
     * value old value is freed and the new one is set.
     * 
     * Also, checks that `value` is compliant with `key` specification, modifying it
     * accordingly. For instance, if `key` requires a number between 0 and 10, but
     * `value` is outside this range, it will be adapted accordingly.
     * @param key key to change or add
     * @param value the new value
     */
    set(key: GObject.ParamSpec, value: any): void
    /**
     * Sets the first binary value associated with `key` in `data`. If `key` already
     * has a first value old value is replaced by the new one.
     * @param key key to change or add
     * @param buf buffer holding the data
     * @param size size of the buffer
     */
    set_binary(key: GObject.ParamSpec, buf: number, size: number): void
    /**
     * Sets the first float value associated with `key` in `data`. If `key` already has
     * a first value old value is replaced by the new one.
     * @param key key to change or add
     * @param floatvalue the new value
     */
    set_float(key: GObject.ParamSpec, floatvalue: number): void
    /**
     * Sets the first int value associated with `key` in `data`. If `key` already has a
     * first value old value is replaced by the new one.
     * @param key key to change or add
     * @param intvalue the new value
     */
    set_int(key: GObject.ParamSpec, intvalue: number): void
    /**
     * This controls if #grl_data_set will overwrite the current value of a property
     * with the new one.
     * 
     * Set it to %TRUE so old values are overwritten, or %FALSE in other case
     * (default is %FALSE).
     * @param overwrite if data can be overwritten
     */
    set_overwrite(overwrite: boolean): void
    /**
     * Updates the values at position `index` in `data` with values in `relkeys`.
     * 
     * `data` will take ownership of `relkeys,` so do not free it after invoking this
     * function.
     * @param relkeys a set of related keys
     * @param index position to be updated, starting at 0
     */
    set_related_keys(relkeys: RelatedKeys, index: number): void
    /**
     * Sets the first string value associated with `key` in `data`. If `key` already
     * has a value old value is freed and the new one is set.
     * @param key key to change or add
     * @param strvalue the new value
     */
    set_string(key: GObject.ParamSpec, strvalue: string): void
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
    connect(sigName: "notify", callback: (($obj: Data, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Data, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::overwrite", callback: (($obj: Data, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite", callback: (($obj: Data, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Data_ConstructProps)
    _init (config?: Data_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Data
    static $gtype: GObject.Type
}
interface Media_ConstructProps extends Data_ConstructProps {
}
class Media {
    /* Properties of Grl-0.1.Grl.Data */
    overwrite: boolean
    /* Fields of Grl-0.1.Grl.Data */
    parent: GObject.Object
    priv: DataPrivate
    _grl_reserved: object[]
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Grl-0.1.Grl.Media */
    /**
     * Adds a new author to `media`.
     * @param author an author for `media`
     */
    add_author(author: string): void
    /**
     * Adds a new external player to `media`.
     * @param player an external player for `media`
     */
    add_external_player(player: string): void
    /**
     * Adds a new external url to `media`.
     * @param url an external url for `media`
     */
    add_external_url(url: string): void
    /**
     * Adds a new thumbnail to `media`.
     * @param thumbnail a thumbnail for `media`
     */
    add_thumbnail(thumbnail: string): void
    /**
     * Adds a new thumbnail to `media`.
     * @param thumbnail a buffer containing the thumbnail for `media`
     * @param size size of buffer
     */
    add_thumbnail_binary(thumbnail: number, size: number): void
    /**
     * Adds a new media's URL with its mime-type.
     * @param url a media's URL
     * @param mime th `url` mime type
     */
    add_url_data(url: string, mime: string): void
    get_author(): string
    get_author_nth(index: number): string
    get_certificate(): string
    get_creation_date(): string
    get_date(): string
    get_description(): string
    get_duration(): number
    /**
     * where the user play the media.
     */
    get_external_url(): string
    get_external_url_nth(index: number): string
    get_id(): string
    get_last_played(): string
    get_last_position(): number
    get_license(): string
    get_mime(): string
    get_play_count(): number
    /**
     * object for this media
     */
    get_player(): string
    get_player_nth(index: number): string
    get_rating(): number
    get_site(): string
    get_source(): string
    get_studio(): string
    get_thumbnail(): string
    get_thumbnail_binary(size: number): number
    /**
     * buffer size.
     * @param size pointer to store the thumbnail buffer size
     * @param index element to retrieve
     */
    get_thumbnail_binary_nth(size: number, index: number): number
    get_thumbnail_nth(index: number): string
    get_title(): string
    get_url(): string
    get_url_data(): [ /* returnType */ string, /* mime */ string ]
    get_url_data_nth(index: number): [ /* returnType */ string, /* mime */ string ]
    /**
     * Serializes a GrlMedia into a string. It does a basic serialization.
     * 
     * See grl_media_serialize_extended() to get more serialization approaches.
     */
    serialize(): string
    /**
     * Set the media's author
     * @param author the media's author
     */
    set_author(author: string): void
    /**
     * Set the media certificate
     * @param certificate The rating certificate of the media
     */
    set_certificate(certificate: string): void
    /**
     * Set the creation_date of the media
     * @param creation_date date when media was created
     */
    set_creation_date(creation_date: string): void
    /**
     * Set the media's date (TBD)
     * @param date the date
     */
    set_date(date: string): void
    /**
     * Set the media's description
     * @param description the description
     */
    set_description(description: string): void
    /**
     * Set the media's duration
     * @param duration the duration
     */
    set_duration(duration: number): void
    /**
     * Set the location of a player for the media (usually a flash player)
     * @param player location of an external player for this media
     */
    set_external_player(player: string): void
    /**
     * Set an external location where users can play the media
     * @param url external location where this media can be played.
     */
    set_external_url(url: string): void
    /**
     * Set the media identifier
     * @param id the identifier of the media
     */
    set_id(id: string): void
    /**
     * Set the media last played date
     * @param last_played date when the media was last played
     */
    set_last_played(last_played: string): void
    /**
     * Set the media last played position
     * @param last_position second at which the media playback was interrupted
     */
    set_last_position(last_position: number): void
    /**
     * Set the media license
     * @param license The license of the media
     */
    set_license(license: string): void
    /**
     * Set the media's mime-type
     * @param mime the mime type
     */
    set_mime(mime: string): void
    /**
     * Set the media play count
     * @param play_count the play count
     */
    set_play_count(play_count: number): void
    /**
     * This method receives a rating and its scale and normalizes it
     * @param rating a rating value
     * @param max maximum rating value
     */
    set_rating(rating: number, max: number): void
    /**
     * Set the media's site
     * @param site the site
     */
    set_site(site: string): void
    /**
     * Set the media's source
     * @param source the source
     */
    set_source(source: string): void
    /**
     * Set the media studio
     * @param studio The studio the media is from
     */
    set_studio(studio: string): void
    /**
     * Set the media's thumbnail URL
     * @param thumbnail the thumbnail URL
     */
    set_thumbnail(thumbnail: string): void
    /**
     * Set the media's binary thumbnail
     * @param thumbnail thumbnail buffer
     * @param size thumbnail buffer size
     */
    set_thumbnail_binary(thumbnail: number, size: number): void
    /**
     * Set the media's title
     * @param title the title
     */
    set_title(title: string): void
    /**
     * Set the media's URL
     * @param url the media's URL
     */
    set_url(url: string): void
    /**
     * Set the media's URL and its mime-type.
     * @param url the media's URL
     * @param mime the `url` mime type
     */
    set_url_data(url: string, mime: string): void
    /* Methods of Grl-0.1.Grl.Data */
    /**
     * Adds a new `key` to `data,` with no value. If key already exists, it does
     * nothing.
     * @param key key to add
     */
    add(key: GObject.ParamSpec): void
    /**
     * Appends a new binary value for `key` in `data`.
     * @param key key to append
     * @param buf the buffer containing the new value
     * @param size size of buffer
     */
    add_binary(key: GObject.ParamSpec, buf: number, size: number): void
    /**
     * Appends a new float value for `key` in `data`.
     * @param key key to append
     * @param floatvalue the new value
     */
    add_float(key: GObject.ParamSpec, floatvalue: number): void
    /**
     * Appends a new int value for `key` in `data`.
     * @param key key to append
     * @param intvalue the new value
     */
    add_int(key: GObject.ParamSpec, intvalue: number): void
    /**
     * Adds a new set of values into `data`.
     * 
     * All keys in `prop` must be related among them.
     * 
     * `data` will take the ownership of `relkeys,` so do not modify it.
     * @param relkeys a set of related properties with their values
     */
    add_related_keys(relkeys: RelatedKeys): void
    /**
     * Appends a new string value for `key` in `data`.
     * @param key key to append
     * @param strvalue the new value
     */
    add_string(key: GObject.ParamSpec, strvalue: string): void
    /**
     * Makes a deep copy of `data` and all its contents.
     */
    dup(): Data
    /**
     * Get the first value from `data` associated with `key`.
     * 
     * freed by user.
     * @param key key to look up.
     */
    get(key: GObject.ParamSpec): any
    /**
     * Returns all non-%NULL values for `key` from `data`. This ignores related keys.
     * 
     * values. Do not change or free the values. Free the list with #g_list_free.
     * @param key a metadata key
     */
    get_all_single_related_keys(key: KeyID): any[]
    /**
     * Returns all non-%NULL values for `key` from `data`. `key` must have been
     * registered as a string-type key. This ignores related keys.
     * 
     * not change or free the strings. Free the list with #g_list_free.
     * @param key a metadata key
     */
    get_all_single_related_keys_string(key: KeyID): string[]
    /**
     * Returns the first binary value associated with `key` from `data`. If `key` has
     * no first value, or value is not a gfloat, or `key` is not in data, then %NULL
     * is returned.
     * 
     * successful `size` will be set the to the buffer size.
     * @param key key to use
     */
    get_binary(key: GObject.ParamSpec): [ /* returnType */ number, /* size */ number ]
    /**
     * Returns the first float value associated with `key` from `data`. If `key` has no
     * first value, or value is not a gfloat, or `key` is not in data, then 0 is
     * returned.
     * @param key key to use
     */
    get_float(key: GObject.ParamSpec): number
    /**
     * Returns the first int value associated with `key` from `data`. If `key` has no
     * first value, or value is not a gint, or `key` is not in data, then 0 is
     * returned.
     * @param key key to use
     */
    get_int(key: GObject.ParamSpec): number
    /**
     * Returns a list with keys contained in `data`.
     * 
     * keys. The content of the list should not be modified or freed. Use
     * g_list_free() when done using the list.
     */
    get_keys(): GObject.ParamSpec[]
    /**
     * Checks if old values are replaced when calling #grl_data_set.
     */
    get_overwrite(): boolean
    /**
     * Returns a set containing the values for `key` and related keys at position
     * `index` from `data`.
     * 
     * If user changes any of the values in the related keys, the changes will
     * become permanent.
     * @param key a metadata key
     * @param index element to retrieve, starting at 0
     */
    get_related_keys(key: KeyID, index: number): RelatedKeys
    /**
     * Returns all non-%NULL values for `key` from `data`. This ignores related keys.
     * 
     * values. Do not change or free the values. Free the list with #g_list_free.
     * @param key a metadata key
     */
    get_single_values_for_key(key: KeyID): any[]
    /**
     * Returns all non-%NULL values for `key` from `data`. `key` must have been
     * registered as a string-type key. This ignores related keys.
     * 
     * not change or free the strings. Free the list with #g_list_free.
     * @param key a metadata key
     */
    get_single_values_for_key_string(key: KeyID): string[]
    /**
     * Returns the first string value associated with `key` from `data`. If `key` has
     * no first value, or value is not string, or `key` is not in `data,` then %NULL
     * is returned.
     * 
     * not change nor free the value.
     * @param key key to use
     */
    get_string(key: GObject.ParamSpec): string
    /**
     * Checks if `key` is in `data`.
     * @param key key to search
     */
    has_key(key: GObject.ParamSpec): boolean
    /**
     * Checks if the `key` has a first value in `data`.
     * @param key key to search
     */
    key_is_known(key: GObject.ParamSpec): boolean
    /**
     * Returns how many values `key` or related keys have in `data:` if `key` has no
     * value, but a related key has, then it is counted as positive.
     * 
     * As example, let's think in three related keys, K1, K2 and K3, and then thinks
     * we have added several values for those keys, as:
     * 
     * (V10, V20, V30),, (V11, NULL, V31), (V12, NULL, V32)
     * 
     * Therefore, when invoking grl_data_length (data, K2) it will return 3:
     * considering K2 and the related keys (K1 and K3), there are 3 values.
     * @param key a metadata key
     */
    length(key: KeyID): number
    /**
     * Removes the first value for `key` from `data`. If there are other keys related
     * to `key` their values will also be removed from `data`.
     * @param key key to remove
     */
    remove(key: GObject.ParamSpec): void
    /**
     * Removes the value at position `index` for `key` from `data`. If there are other
     * keys related to `key,` their values at position `index` will also be removed
     * from `data`.
     * @param key a metadata key
     * @param index index of key to be removed, starting at 0
     */
    remove_nth(key: KeyID, index: number): void
    /**
     * Sets the first value associated with `key` in `data`. If key already has a
     * value old value is freed and the new one is set.
     * 
     * Also, checks that `value` is compliant with `key` specification, modifying it
     * accordingly. For instance, if `key` requires a number between 0 and 10, but
     * `value` is outside this range, it will be adapted accordingly.
     * @param key key to change or add
     * @param value the new value
     */
    set(key: GObject.ParamSpec, value: any): void
    /**
     * Sets the first binary value associated with `key` in `data`. If `key` already
     * has a first value old value is replaced by the new one.
     * @param key key to change or add
     * @param buf buffer holding the data
     * @param size size of the buffer
     */
    set_binary(key: GObject.ParamSpec, buf: number, size: number): void
    /**
     * Sets the first float value associated with `key` in `data`. If `key` already has
     * a first value old value is replaced by the new one.
     * @param key key to change or add
     * @param floatvalue the new value
     */
    set_float(key: GObject.ParamSpec, floatvalue: number): void
    /**
     * Sets the first int value associated with `key` in `data`. If `key` already has a
     * first value old value is replaced by the new one.
     * @param key key to change or add
     * @param intvalue the new value
     */
    set_int(key: GObject.ParamSpec, intvalue: number): void
    /**
     * This controls if #grl_data_set will overwrite the current value of a property
     * with the new one.
     * 
     * Set it to %TRUE so old values are overwritten, or %FALSE in other case
     * (default is %FALSE).
     * @param overwrite if data can be overwritten
     */
    set_overwrite(overwrite: boolean): void
    /**
     * Updates the values at position `index` in `data` with values in `relkeys`.
     * 
     * `data` will take ownership of `relkeys,` so do not free it after invoking this
     * function.
     * @param relkeys a set of related keys
     * @param index position to be updated, starting at 0
     */
    set_related_keys(relkeys: RelatedKeys, index: number): void
    /**
     * Sets the first string value associated with `key` in `data`. If `key` already
     * has a value old value is freed and the new one is set.
     * @param key key to change or add
     * @param strvalue the new value
     */
    set_string(key: GObject.ParamSpec, strvalue: string): void
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
    connect(sigName: "notify", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::overwrite", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Media_ConstructProps)
    _init (config?: Media_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Media
    /* Function overloads */
    static new(): Media
    /**
     * Unserializes a GrlMedia.
     * @param serial a serialized media
     */
    static unserialize(serial: string): Media
    static $gtype: GObject.Type
}
interface MediaAudio_ConstructProps extends Media_ConstructProps {
}
class MediaAudio {
    /* Properties of Grl-0.1.Grl.Data */
    overwrite: boolean
    /* Fields of Grl-0.1.Grl.Media */
    parent: Data
    /* Fields of Grl-0.1.Grl.Data */
    priv: DataPrivate
    _grl_reserved: object[]
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Grl-0.1.Grl.MediaAudio */
    /**
     * Adds a new artist to `audio`.
     * @param artist an audio's artist
     */
    add_artist(artist: string): void
    /**
     * Adds a new genre to `audio`.
     * @param genre an audio's genre
     */
    add_genre(genre: string): void
    /**
     * Adds a new lyrics to `audio`.
     * @param lyrics an audio's lyrics
     */
    add_lyrics(lyrics: string): void
    /**
     * Sets all the keys related with the URL of a media resource and adds it to
     * `audio` (useful for resources with more than one URL).
     * @param url an audio's url
     * @param mime the `url` mime-type
     * @param bitrate the `url` bitrate, or -1 to ignore
     */
    add_url_data(url: string, mime: string, bitrate: number): void
    get_album(): string
    get_artist(): string
    get_artist_nth(index: number): string
    get_bitrate(): number
    get_genre(): string
    get_genre_nth(index: number): string
    get_lyrics(): string
    get_lyrics_nth(index: number): string
    get_track_number(): number
    get_url_data(): [ /* returnType */ string, /* mime */ string, /* bitrate */ number ]
    /**
     * in one go.
     * @param index element to retrieve, starting at 0
     */
    get_url_data_nth(index: number): [ /* returnType */ string, /* mime */ string, /* bitrate */ number ]
    /**
     * Set the album of the audio
     * @param album the audio's album
     */
    set_album(album: string): void
    /**
     * Set the artist of the audio
     * @param artist the audio's artist
     */
    set_artist(artist: string): void
    /**
     * Set the bitrate of the audio
     * @param bitrate the audio's bitrate
     */
    set_bitrate(bitrate: number): void
    /**
     * Set the genre of the audio
     * @param genre the audio's genre
     */
    set_genre(genre: string): void
    /**
     * Set the lyrics of the audio
     * @param lyrics the audio's lyrics
     */
    set_lyrics(lyrics: string): void
    /**
     * Set the track number of the audio
     * @param track_number the audio's track number
     */
    set_track_number(track_number: number): void
    /**
     * Sets all the keys related with the URL of an audio resource in one go.
     * @param url the audio's url
     * @param mime the `url` mime-type
     * @param bitrate the `url` bitrate, or -1 to ignore
     */
    set_url_data(url: string, mime: string, bitrate: number): void
    /* Methods of Grl-0.1.Grl.Media */
    /**
     * Adds a new author to `media`.
     * @param author an author for `media`
     */
    add_author(author: string): void
    /**
     * Adds a new external player to `media`.
     * @param player an external player for `media`
     */
    add_external_player(player: string): void
    /**
     * Adds a new external url to `media`.
     * @param url an external url for `media`
     */
    add_external_url(url: string): void
    /**
     * Adds a new thumbnail to `media`.
     * @param thumbnail a thumbnail for `media`
     */
    add_thumbnail(thumbnail: string): void
    /**
     * Adds a new thumbnail to `media`.
     * @param thumbnail a buffer containing the thumbnail for `media`
     * @param size size of buffer
     */
    add_thumbnail_binary(thumbnail: number, size: number): void
    /**
     * Adds a new media's URL with its mime-type.
     * @param url a media's URL
     * @param mime th `url` mime type
     */
    add_url_data(url: string, mime: string): void
    get_author(): string
    get_author_nth(index: number): string
    get_certificate(): string
    get_creation_date(): string
    get_date(): string
    get_description(): string
    get_duration(): number
    /**
     * where the user play the media.
     */
    get_external_url(): string
    get_external_url_nth(index: number): string
    get_id(): string
    get_last_played(): string
    get_last_position(): number
    get_license(): string
    get_mime(): string
    get_play_count(): number
    /**
     * object for this media
     */
    get_player(): string
    get_player_nth(index: number): string
    get_rating(): number
    get_site(): string
    get_source(): string
    get_studio(): string
    get_thumbnail(): string
    get_thumbnail_binary(size: number): number
    /**
     * buffer size.
     * @param size pointer to store the thumbnail buffer size
     * @param index element to retrieve
     */
    get_thumbnail_binary_nth(size: number, index: number): number
    get_thumbnail_nth(index: number): string
    get_title(): string
    get_url(): string
    get_url_data(): [ /* returnType */ string, /* mime */ string ]
    get_url_data_nth(index: number): [ /* returnType */ string, /* mime */ string ]
    /**
     * Serializes a GrlMedia into a string. It does a basic serialization.
     * 
     * See grl_media_serialize_extended() to get more serialization approaches.
     */
    serialize(): string
    /**
     * Set the media's author
     * @param author the media's author
     */
    set_author(author: string): void
    /**
     * Set the media certificate
     * @param certificate The rating certificate of the media
     */
    set_certificate(certificate: string): void
    /**
     * Set the creation_date of the media
     * @param creation_date date when media was created
     */
    set_creation_date(creation_date: string): void
    /**
     * Set the media's date (TBD)
     * @param date the date
     */
    set_date(date: string): void
    /**
     * Set the media's description
     * @param description the description
     */
    set_description(description: string): void
    /**
     * Set the media's duration
     * @param duration the duration
     */
    set_duration(duration: number): void
    /**
     * Set the location of a player for the media (usually a flash player)
     * @param player location of an external player for this media
     */
    set_external_player(player: string): void
    /**
     * Set an external location where users can play the media
     * @param url external location where this media can be played.
     */
    set_external_url(url: string): void
    /**
     * Set the media identifier
     * @param id the identifier of the media
     */
    set_id(id: string): void
    /**
     * Set the media last played date
     * @param last_played date when the media was last played
     */
    set_last_played(last_played: string): void
    /**
     * Set the media last played position
     * @param last_position second at which the media playback was interrupted
     */
    set_last_position(last_position: number): void
    /**
     * Set the media license
     * @param license The license of the media
     */
    set_license(license: string): void
    /**
     * Set the media's mime-type
     * @param mime the mime type
     */
    set_mime(mime: string): void
    /**
     * Set the media play count
     * @param play_count the play count
     */
    set_play_count(play_count: number): void
    /**
     * This method receives a rating and its scale and normalizes it
     * @param rating a rating value
     * @param max maximum rating value
     */
    set_rating(rating: number, max: number): void
    /**
     * Set the media's site
     * @param site the site
     */
    set_site(site: string): void
    /**
     * Set the media's source
     * @param source the source
     */
    set_source(source: string): void
    /**
     * Set the media studio
     * @param studio The studio the media is from
     */
    set_studio(studio: string): void
    /**
     * Set the media's thumbnail URL
     * @param thumbnail the thumbnail URL
     */
    set_thumbnail(thumbnail: string): void
    /**
     * Set the media's binary thumbnail
     * @param thumbnail thumbnail buffer
     * @param size thumbnail buffer size
     */
    set_thumbnail_binary(thumbnail: number, size: number): void
    /**
     * Set the media's title
     * @param title the title
     */
    set_title(title: string): void
    /**
     * Set the media's URL
     * @param url the media's URL
     */
    set_url(url: string): void
    /**
     * Set the media's URL and its mime-type.
     * @param url the media's URL
     * @param mime the `url` mime type
     */
    set_url_data(url: string, mime: string): void
    /* Methods of Grl-0.1.Grl.Data */
    /**
     * Adds a new `key` to `data,` with no value. If key already exists, it does
     * nothing.
     * @param key key to add
     */
    add(key: GObject.ParamSpec): void
    /**
     * Appends a new binary value for `key` in `data`.
     * @param key key to append
     * @param buf the buffer containing the new value
     * @param size size of buffer
     */
    add_binary(key: GObject.ParamSpec, buf: number, size: number): void
    /**
     * Appends a new float value for `key` in `data`.
     * @param key key to append
     * @param floatvalue the new value
     */
    add_float(key: GObject.ParamSpec, floatvalue: number): void
    /**
     * Appends a new int value for `key` in `data`.
     * @param key key to append
     * @param intvalue the new value
     */
    add_int(key: GObject.ParamSpec, intvalue: number): void
    /**
     * Adds a new set of values into `data`.
     * 
     * All keys in `prop` must be related among them.
     * 
     * `data` will take the ownership of `relkeys,` so do not modify it.
     * @param relkeys a set of related properties with their values
     */
    add_related_keys(relkeys: RelatedKeys): void
    /**
     * Appends a new string value for `key` in `data`.
     * @param key key to append
     * @param strvalue the new value
     */
    add_string(key: GObject.ParamSpec, strvalue: string): void
    /**
     * Makes a deep copy of `data` and all its contents.
     */
    dup(): Data
    /**
     * Get the first value from `data` associated with `key`.
     * 
     * freed by user.
     * @param key key to look up.
     */
    get(key: GObject.ParamSpec): any
    /**
     * Returns all non-%NULL values for `key` from `data`. This ignores related keys.
     * 
     * values. Do not change or free the values. Free the list with #g_list_free.
     * @param key a metadata key
     */
    get_all_single_related_keys(key: KeyID): any[]
    /**
     * Returns all non-%NULL values for `key` from `data`. `key` must have been
     * registered as a string-type key. This ignores related keys.
     * 
     * not change or free the strings. Free the list with #g_list_free.
     * @param key a metadata key
     */
    get_all_single_related_keys_string(key: KeyID): string[]
    /**
     * Returns the first binary value associated with `key` from `data`. If `key` has
     * no first value, or value is not a gfloat, or `key` is not in data, then %NULL
     * is returned.
     * 
     * successful `size` will be set the to the buffer size.
     * @param key key to use
     */
    get_binary(key: GObject.ParamSpec): [ /* returnType */ number, /* size */ number ]
    /**
     * Returns the first float value associated with `key` from `data`. If `key` has no
     * first value, or value is not a gfloat, or `key` is not in data, then 0 is
     * returned.
     * @param key key to use
     */
    get_float(key: GObject.ParamSpec): number
    /**
     * Returns the first int value associated with `key` from `data`. If `key` has no
     * first value, or value is not a gint, or `key` is not in data, then 0 is
     * returned.
     * @param key key to use
     */
    get_int(key: GObject.ParamSpec): number
    /**
     * Returns a list with keys contained in `data`.
     * 
     * keys. The content of the list should not be modified or freed. Use
     * g_list_free() when done using the list.
     */
    get_keys(): GObject.ParamSpec[]
    /**
     * Checks if old values are replaced when calling #grl_data_set.
     */
    get_overwrite(): boolean
    /**
     * Returns a set containing the values for `key` and related keys at position
     * `index` from `data`.
     * 
     * If user changes any of the values in the related keys, the changes will
     * become permanent.
     * @param key a metadata key
     * @param index element to retrieve, starting at 0
     */
    get_related_keys(key: KeyID, index: number): RelatedKeys
    /**
     * Returns all non-%NULL values for `key` from `data`. This ignores related keys.
     * 
     * values. Do not change or free the values. Free the list with #g_list_free.
     * @param key a metadata key
     */
    get_single_values_for_key(key: KeyID): any[]
    /**
     * Returns all non-%NULL values for `key` from `data`. `key` must have been
     * registered as a string-type key. This ignores related keys.
     * 
     * not change or free the strings. Free the list with #g_list_free.
     * @param key a metadata key
     */
    get_single_values_for_key_string(key: KeyID): string[]
    /**
     * Returns the first string value associated with `key` from `data`. If `key` has
     * no first value, or value is not string, or `key` is not in `data,` then %NULL
     * is returned.
     * 
     * not change nor free the value.
     * @param key key to use
     */
    get_string(key: GObject.ParamSpec): string
    /**
     * Checks if `key` is in `data`.
     * @param key key to search
     */
    has_key(key: GObject.ParamSpec): boolean
    /**
     * Checks if the `key` has a first value in `data`.
     * @param key key to search
     */
    key_is_known(key: GObject.ParamSpec): boolean
    /**
     * Returns how many values `key` or related keys have in `data:` if `key` has no
     * value, but a related key has, then it is counted as positive.
     * 
     * As example, let's think in three related keys, K1, K2 and K3, and then thinks
     * we have added several values for those keys, as:
     * 
     * (V10, V20, V30),, (V11, NULL, V31), (V12, NULL, V32)
     * 
     * Therefore, when invoking grl_data_length (data, K2) it will return 3:
     * considering K2 and the related keys (K1 and K3), there are 3 values.
     * @param key a metadata key
     */
    length(key: KeyID): number
    /**
     * Removes the first value for `key` from `data`. If there are other keys related
     * to `key` their values will also be removed from `data`.
     * @param key key to remove
     */
    remove(key: GObject.ParamSpec): void
    /**
     * Removes the value at position `index` for `key` from `data`. If there are other
     * keys related to `key,` their values at position `index` will also be removed
     * from `data`.
     * @param key a metadata key
     * @param index index of key to be removed, starting at 0
     */
    remove_nth(key: KeyID, index: number): void
    /**
     * Sets the first value associated with `key` in `data`. If key already has a
     * value old value is freed and the new one is set.
     * 
     * Also, checks that `value` is compliant with `key` specification, modifying it
     * accordingly. For instance, if `key` requires a number between 0 and 10, but
     * `value` is outside this range, it will be adapted accordingly.
     * @param key key to change or add
     * @param value the new value
     */
    set(key: GObject.ParamSpec, value: any): void
    /**
     * Sets the first binary value associated with `key` in `data`. If `key` already
     * has a first value old value is replaced by the new one.
     * @param key key to change or add
     * @param buf buffer holding the data
     * @param size size of the buffer
     */
    set_binary(key: GObject.ParamSpec, buf: number, size: number): void
    /**
     * Sets the first float value associated with `key` in `data`. If `key` already has
     * a first value old value is replaced by the new one.
     * @param key key to change or add
     * @param floatvalue the new value
     */
    set_float(key: GObject.ParamSpec, floatvalue: number): void
    /**
     * Sets the first int value associated with `key` in `data`. If `key` already has a
     * first value old value is replaced by the new one.
     * @param key key to change or add
     * @param intvalue the new value
     */
    set_int(key: GObject.ParamSpec, intvalue: number): void
    /**
     * This controls if #grl_data_set will overwrite the current value of a property
     * with the new one.
     * 
     * Set it to %TRUE so old values are overwritten, or %FALSE in other case
     * (default is %FALSE).
     * @param overwrite if data can be overwritten
     */
    set_overwrite(overwrite: boolean): void
    /**
     * Updates the values at position `index` in `data` with values in `relkeys`.
     * 
     * `data` will take ownership of `relkeys,` so do not free it after invoking this
     * function.
     * @param relkeys a set of related keys
     * @param index position to be updated, starting at 0
     */
    set_related_keys(relkeys: RelatedKeys, index: number): void
    /**
     * Sets the first string value associated with `key` in `data`. If `key` already
     * has a value old value is freed and the new one is set.
     * @param key key to change or add
     * @param strvalue the new value
     */
    set_string(key: GObject.ParamSpec, strvalue: string): void
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
    connect(sigName: "notify", callback: (($obj: MediaAudio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaAudio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::overwrite", callback: (($obj: MediaAudio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite", callback: (($obj: MediaAudio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MediaAudio_ConstructProps)
    _init (config?: MediaAudio_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MediaAudio
    /* Function overloads */
    static new(): MediaAudio
    static $gtype: GObject.Type
}
interface MediaBox_ConstructProps extends Media_ConstructProps {
}
class MediaBox {
    /* Properties of Grl-0.1.Grl.Data */
    overwrite: boolean
    /* Fields of Grl-0.1.Grl.Media */
    parent: Data
    /* Fields of Grl-0.1.Grl.Data */
    priv: DataPrivate
    _grl_reserved: object[]
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Grl-0.1.Grl.MediaBox */
    /**
     * Number of children of this box.
     * 
     * unknown.
     */
    get_childcount(): number
    /**
     * Sets the number of children of this box. Use
     * #GRL_METADATA_KEY_CHILDCOUNT_UNKNOWN if it is unknown.
     * @param childcount number of children
     */
    set_childcount(childcount: number): void
    /* Methods of Grl-0.1.Grl.Media */
    /**
     * Adds a new author to `media`.
     * @param author an author for `media`
     */
    add_author(author: string): void
    /**
     * Adds a new external player to `media`.
     * @param player an external player for `media`
     */
    add_external_player(player: string): void
    /**
     * Adds a new external url to `media`.
     * @param url an external url for `media`
     */
    add_external_url(url: string): void
    /**
     * Adds a new thumbnail to `media`.
     * @param thumbnail a thumbnail for `media`
     */
    add_thumbnail(thumbnail: string): void
    /**
     * Adds a new thumbnail to `media`.
     * @param thumbnail a buffer containing the thumbnail for `media`
     * @param size size of buffer
     */
    add_thumbnail_binary(thumbnail: number, size: number): void
    /**
     * Adds a new media's URL with its mime-type.
     * @param url a media's URL
     * @param mime th `url` mime type
     */
    add_url_data(url: string, mime: string): void
    get_author(): string
    get_author_nth(index: number): string
    get_certificate(): string
    get_creation_date(): string
    get_date(): string
    get_description(): string
    get_duration(): number
    /**
     * where the user play the media.
     */
    get_external_url(): string
    get_external_url_nth(index: number): string
    get_id(): string
    get_last_played(): string
    get_last_position(): number
    get_license(): string
    get_mime(): string
    get_play_count(): number
    /**
     * object for this media
     */
    get_player(): string
    get_player_nth(index: number): string
    get_rating(): number
    get_site(): string
    get_source(): string
    get_studio(): string
    get_thumbnail(): string
    get_thumbnail_binary(size: number): number
    /**
     * buffer size.
     * @param size pointer to store the thumbnail buffer size
     * @param index element to retrieve
     */
    get_thumbnail_binary_nth(size: number, index: number): number
    get_thumbnail_nth(index: number): string
    get_title(): string
    get_url(): string
    get_url_data(): [ /* returnType */ string, /* mime */ string ]
    get_url_data_nth(index: number): [ /* returnType */ string, /* mime */ string ]
    /**
     * Serializes a GrlMedia into a string. It does a basic serialization.
     * 
     * See grl_media_serialize_extended() to get more serialization approaches.
     */
    serialize(): string
    /**
     * Set the media's author
     * @param author the media's author
     */
    set_author(author: string): void
    /**
     * Set the media certificate
     * @param certificate The rating certificate of the media
     */
    set_certificate(certificate: string): void
    /**
     * Set the creation_date of the media
     * @param creation_date date when media was created
     */
    set_creation_date(creation_date: string): void
    /**
     * Set the media's date (TBD)
     * @param date the date
     */
    set_date(date: string): void
    /**
     * Set the media's description
     * @param description the description
     */
    set_description(description: string): void
    /**
     * Set the media's duration
     * @param duration the duration
     */
    set_duration(duration: number): void
    /**
     * Set the location of a player for the media (usually a flash player)
     * @param player location of an external player for this media
     */
    set_external_player(player: string): void
    /**
     * Set an external location where users can play the media
     * @param url external location where this media can be played.
     */
    set_external_url(url: string): void
    /**
     * Set the media identifier
     * @param id the identifier of the media
     */
    set_id(id: string): void
    /**
     * Set the media last played date
     * @param last_played date when the media was last played
     */
    set_last_played(last_played: string): void
    /**
     * Set the media last played position
     * @param last_position second at which the media playback was interrupted
     */
    set_last_position(last_position: number): void
    /**
     * Set the media license
     * @param license The license of the media
     */
    set_license(license: string): void
    /**
     * Set the media's mime-type
     * @param mime the mime type
     */
    set_mime(mime: string): void
    /**
     * Set the media play count
     * @param play_count the play count
     */
    set_play_count(play_count: number): void
    /**
     * This method receives a rating and its scale and normalizes it
     * @param rating a rating value
     * @param max maximum rating value
     */
    set_rating(rating: number, max: number): void
    /**
     * Set the media's site
     * @param site the site
     */
    set_site(site: string): void
    /**
     * Set the media's source
     * @param source the source
     */
    set_source(source: string): void
    /**
     * Set the media studio
     * @param studio The studio the media is from
     */
    set_studio(studio: string): void
    /**
     * Set the media's thumbnail URL
     * @param thumbnail the thumbnail URL
     */
    set_thumbnail(thumbnail: string): void
    /**
     * Set the media's binary thumbnail
     * @param thumbnail thumbnail buffer
     * @param size thumbnail buffer size
     */
    set_thumbnail_binary(thumbnail: number, size: number): void
    /**
     * Set the media's title
     * @param title the title
     */
    set_title(title: string): void
    /**
     * Set the media's URL
     * @param url the media's URL
     */
    set_url(url: string): void
    /**
     * Set the media's URL and its mime-type.
     * @param url the media's URL
     * @param mime the `url` mime type
     */
    set_url_data(url: string, mime: string): void
    /* Methods of Grl-0.1.Grl.Data */
    /**
     * Adds a new `key` to `data,` with no value. If key already exists, it does
     * nothing.
     * @param key key to add
     */
    add(key: GObject.ParamSpec): void
    /**
     * Appends a new binary value for `key` in `data`.
     * @param key key to append
     * @param buf the buffer containing the new value
     * @param size size of buffer
     */
    add_binary(key: GObject.ParamSpec, buf: number, size: number): void
    /**
     * Appends a new float value for `key` in `data`.
     * @param key key to append
     * @param floatvalue the new value
     */
    add_float(key: GObject.ParamSpec, floatvalue: number): void
    /**
     * Appends a new int value for `key` in `data`.
     * @param key key to append
     * @param intvalue the new value
     */
    add_int(key: GObject.ParamSpec, intvalue: number): void
    /**
     * Adds a new set of values into `data`.
     * 
     * All keys in `prop` must be related among them.
     * 
     * `data` will take the ownership of `relkeys,` so do not modify it.
     * @param relkeys a set of related properties with their values
     */
    add_related_keys(relkeys: RelatedKeys): void
    /**
     * Appends a new string value for `key` in `data`.
     * @param key key to append
     * @param strvalue the new value
     */
    add_string(key: GObject.ParamSpec, strvalue: string): void
    /**
     * Makes a deep copy of `data` and all its contents.
     */
    dup(): Data
    /**
     * Get the first value from `data` associated with `key`.
     * 
     * freed by user.
     * @param key key to look up.
     */
    get(key: GObject.ParamSpec): any
    /**
     * Returns all non-%NULL values for `key` from `data`. This ignores related keys.
     * 
     * values. Do not change or free the values. Free the list with #g_list_free.
     * @param key a metadata key
     */
    get_all_single_related_keys(key: KeyID): any[]
    /**
     * Returns all non-%NULL values for `key` from `data`. `key` must have been
     * registered as a string-type key. This ignores related keys.
     * 
     * not change or free the strings. Free the list with #g_list_free.
     * @param key a metadata key
     */
    get_all_single_related_keys_string(key: KeyID): string[]
    /**
     * Returns the first binary value associated with `key` from `data`. If `key` has
     * no first value, or value is not a gfloat, or `key` is not in data, then %NULL
     * is returned.
     * 
     * successful `size` will be set the to the buffer size.
     * @param key key to use
     */
    get_binary(key: GObject.ParamSpec): [ /* returnType */ number, /* size */ number ]
    /**
     * Returns the first float value associated with `key` from `data`. If `key` has no
     * first value, or value is not a gfloat, or `key` is not in data, then 0 is
     * returned.
     * @param key key to use
     */
    get_float(key: GObject.ParamSpec): number
    /**
     * Returns the first int value associated with `key` from `data`. If `key` has no
     * first value, or value is not a gint, or `key` is not in data, then 0 is
     * returned.
     * @param key key to use
     */
    get_int(key: GObject.ParamSpec): number
    /**
     * Returns a list with keys contained in `data`.
     * 
     * keys. The content of the list should not be modified or freed. Use
     * g_list_free() when done using the list.
     */
    get_keys(): GObject.ParamSpec[]
    /**
     * Checks if old values are replaced when calling #grl_data_set.
     */
    get_overwrite(): boolean
    /**
     * Returns a set containing the values for `key` and related keys at position
     * `index` from `data`.
     * 
     * If user changes any of the values in the related keys, the changes will
     * become permanent.
     * @param key a metadata key
     * @param index element to retrieve, starting at 0
     */
    get_related_keys(key: KeyID, index: number): RelatedKeys
    /**
     * Returns all non-%NULL values for `key` from `data`. This ignores related keys.
     * 
     * values. Do not change or free the values. Free the list with #g_list_free.
     * @param key a metadata key
     */
    get_single_values_for_key(key: KeyID): any[]
    /**
     * Returns all non-%NULL values for `key` from `data`. `key` must have been
     * registered as a string-type key. This ignores related keys.
     * 
     * not change or free the strings. Free the list with #g_list_free.
     * @param key a metadata key
     */
    get_single_values_for_key_string(key: KeyID): string[]
    /**
     * Returns the first string value associated with `key` from `data`. If `key` has
     * no first value, or value is not string, or `key` is not in `data,` then %NULL
     * is returned.
     * 
     * not change nor free the value.
     * @param key key to use
     */
    get_string(key: GObject.ParamSpec): string
    /**
     * Checks if `key` is in `data`.
     * @param key key to search
     */
    has_key(key: GObject.ParamSpec): boolean
    /**
     * Checks if the `key` has a first value in `data`.
     * @param key key to search
     */
    key_is_known(key: GObject.ParamSpec): boolean
    /**
     * Returns how many values `key` or related keys have in `data:` if `key` has no
     * value, but a related key has, then it is counted as positive.
     * 
     * As example, let's think in three related keys, K1, K2 and K3, and then thinks
     * we have added several values for those keys, as:
     * 
     * (V10, V20, V30),, (V11, NULL, V31), (V12, NULL, V32)
     * 
     * Therefore, when invoking grl_data_length (data, K2) it will return 3:
     * considering K2 and the related keys (K1 and K3), there are 3 values.
     * @param key a metadata key
     */
    length(key: KeyID): number
    /**
     * Removes the first value for `key` from `data`. If there are other keys related
     * to `key` their values will also be removed from `data`.
     * @param key key to remove
     */
    remove(key: GObject.ParamSpec): void
    /**
     * Removes the value at position `index` for `key` from `data`. If there are other
     * keys related to `key,` their values at position `index` will also be removed
     * from `data`.
     * @param key a metadata key
     * @param index index of key to be removed, starting at 0
     */
    remove_nth(key: KeyID, index: number): void
    /**
     * Sets the first value associated with `key` in `data`. If key already has a
     * value old value is freed and the new one is set.
     * 
     * Also, checks that `value` is compliant with `key` specification, modifying it
     * accordingly. For instance, if `key` requires a number between 0 and 10, but
     * `value` is outside this range, it will be adapted accordingly.
     * @param key key to change or add
     * @param value the new value
     */
    set(key: GObject.ParamSpec, value: any): void
    /**
     * Sets the first binary value associated with `key` in `data`. If `key` already
     * has a first value old value is replaced by the new one.
     * @param key key to change or add
     * @param buf buffer holding the data
     * @param size size of the buffer
     */
    set_binary(key: GObject.ParamSpec, buf: number, size: number): void
    /**
     * Sets the first float value associated with `key` in `data`. If `key` already has
     * a first value old value is replaced by the new one.
     * @param key key to change or add
     * @param floatvalue the new value
     */
    set_float(key: GObject.ParamSpec, floatvalue: number): void
    /**
     * Sets the first int value associated with `key` in `data`. If `key` already has a
     * first value old value is replaced by the new one.
     * @param key key to change or add
     * @param intvalue the new value
     */
    set_int(key: GObject.ParamSpec, intvalue: number): void
    /**
     * This controls if #grl_data_set will overwrite the current value of a property
     * with the new one.
     * 
     * Set it to %TRUE so old values are overwritten, or %FALSE in other case
     * (default is %FALSE).
     * @param overwrite if data can be overwritten
     */
    set_overwrite(overwrite: boolean): void
    /**
     * Updates the values at position `index` in `data` with values in `relkeys`.
     * 
     * `data` will take ownership of `relkeys,` so do not free it after invoking this
     * function.
     * @param relkeys a set of related keys
     * @param index position to be updated, starting at 0
     */
    set_related_keys(relkeys: RelatedKeys, index: number): void
    /**
     * Sets the first string value associated with `key` in `data`. If `key` already
     * has a value old value is freed and the new one is set.
     * @param key key to change or add
     * @param strvalue the new value
     */
    set_string(key: GObject.ParamSpec, strvalue: string): void
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
    connect(sigName: "notify", callback: (($obj: MediaBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::overwrite", callback: (($obj: MediaBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite", callback: (($obj: MediaBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MediaBox_ConstructProps)
    _init (config?: MediaBox_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MediaBox
    /* Function overloads */
    static new(): MediaBox
    static $gtype: GObject.Type
}
interface MediaImage_ConstructProps extends Media_ConstructProps {
}
class MediaImage {
    /* Properties of Grl-0.1.Grl.Data */
    overwrite: boolean
    /* Fields of Grl-0.1.Grl.Media */
    parent: Data
    /* Fields of Grl-0.1.Grl.Data */
    priv: DataPrivate
    _grl_reserved: object[]
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Grl-0.1.Grl.MediaImage */
    /**
     * Sets all the keys related with the URL of a media resource and adds it to
     * `image` (useful for resources with more than one URL).
     * @param url a image's url
     * @param mime image mime-type
     * @param width image width, or -1 to ignore
     * @param height image height, or -1 to ignore
     */
    add_url_data(url: string, mime: string, width: number, height: number): void
    get_camera_model(): string
    get_exposure_time(): number
    /**
     * See
     * http://library.gnome.org/devel/ontology/unstable/nmm-classes.html#nmm-Flash
     */
    get_flash_used(): string
    get_height(): number
    get_iso_speed(): number
    get_orientation(): number
    get_url_data(width: number, height: number): [ /* returnType */ string, /* mime */ string ]
    /**
     * in one go.
     * @param index element to retrieve
     * @param width the width, or %NULL to ignore
     * @param height the height, or %NULL to ignore
     */
    get_url_data_nth(index: number, width: number, height: number): [ /* returnType */ string, /* mime */ string ]
    get_width(): number
    set_camera_model(camera_model: string): void
    set_exposure_time(exposure_time: number): void
    set_flash_used(flash_used: string): void
    /**
     * Set the height of the image
     * @param height the image's height
     */
    set_height(height: number): void
    set_iso_speed(iso_speed: number): void
    set_orientation(orientation: number): void
    /**
     * Set the size of the image
     * @param width the image's width
     * @param height the image's height
     */
    set_size(width: number, height: number): void
    /**
     * Sets all the keys related with the URL of an image resource in one go.
     * @param url the image's url
     * @param mime image mime-type
     * @param width image width, or -1 to ignore
     * @param height image height, or -1 to ignore
     */
    set_url_data(url: string, mime: string, width: number, height: number): void
    /**
     * Set the width of the image
     * @param width the image's width
     */
    set_width(width: number): void
    /* Methods of Grl-0.1.Grl.Media */
    /**
     * Adds a new author to `media`.
     * @param author an author for `media`
     */
    add_author(author: string): void
    /**
     * Adds a new external player to `media`.
     * @param player an external player for `media`
     */
    add_external_player(player: string): void
    /**
     * Adds a new external url to `media`.
     * @param url an external url for `media`
     */
    add_external_url(url: string): void
    /**
     * Adds a new thumbnail to `media`.
     * @param thumbnail a thumbnail for `media`
     */
    add_thumbnail(thumbnail: string): void
    /**
     * Adds a new thumbnail to `media`.
     * @param thumbnail a buffer containing the thumbnail for `media`
     * @param size size of buffer
     */
    add_thumbnail_binary(thumbnail: number, size: number): void
    /**
     * Adds a new media's URL with its mime-type.
     * @param url a media's URL
     * @param mime th `url` mime type
     */
    add_url_data(url: string, mime: string): void
    get_author(): string
    get_author_nth(index: number): string
    get_certificate(): string
    get_creation_date(): string
    get_date(): string
    get_description(): string
    get_duration(): number
    /**
     * where the user play the media.
     */
    get_external_url(): string
    get_external_url_nth(index: number): string
    get_id(): string
    get_last_played(): string
    get_last_position(): number
    get_license(): string
    get_mime(): string
    get_play_count(): number
    /**
     * object for this media
     */
    get_player(): string
    get_player_nth(index: number): string
    get_rating(): number
    get_site(): string
    get_source(): string
    get_studio(): string
    get_thumbnail(): string
    get_thumbnail_binary(size: number): number
    /**
     * buffer size.
     * @param size pointer to store the thumbnail buffer size
     * @param index element to retrieve
     */
    get_thumbnail_binary_nth(size: number, index: number): number
    get_thumbnail_nth(index: number): string
    get_title(): string
    get_url(): string
    get_url_data(): [ /* returnType */ string, /* mime */ string ]
    get_url_data_nth(index: number): [ /* returnType */ string, /* mime */ string ]
    /**
     * Serializes a GrlMedia into a string. It does a basic serialization.
     * 
     * See grl_media_serialize_extended() to get more serialization approaches.
     */
    serialize(): string
    /**
     * Set the media's author
     * @param author the media's author
     */
    set_author(author: string): void
    /**
     * Set the media certificate
     * @param certificate The rating certificate of the media
     */
    set_certificate(certificate: string): void
    /**
     * Set the creation_date of the media
     * @param creation_date date when media was created
     */
    set_creation_date(creation_date: string): void
    /**
     * Set the media's date (TBD)
     * @param date the date
     */
    set_date(date: string): void
    /**
     * Set the media's description
     * @param description the description
     */
    set_description(description: string): void
    /**
     * Set the media's duration
     * @param duration the duration
     */
    set_duration(duration: number): void
    /**
     * Set the location of a player for the media (usually a flash player)
     * @param player location of an external player for this media
     */
    set_external_player(player: string): void
    /**
     * Set an external location where users can play the media
     * @param url external location where this media can be played.
     */
    set_external_url(url: string): void
    /**
     * Set the media identifier
     * @param id the identifier of the media
     */
    set_id(id: string): void
    /**
     * Set the media last played date
     * @param last_played date when the media was last played
     */
    set_last_played(last_played: string): void
    /**
     * Set the media last played position
     * @param last_position second at which the media playback was interrupted
     */
    set_last_position(last_position: number): void
    /**
     * Set the media license
     * @param license The license of the media
     */
    set_license(license: string): void
    /**
     * Set the media's mime-type
     * @param mime the mime type
     */
    set_mime(mime: string): void
    /**
     * Set the media play count
     * @param play_count the play count
     */
    set_play_count(play_count: number): void
    /**
     * This method receives a rating and its scale and normalizes it
     * @param rating a rating value
     * @param max maximum rating value
     */
    set_rating(rating: number, max: number): void
    /**
     * Set the media's site
     * @param site the site
     */
    set_site(site: string): void
    /**
     * Set the media's source
     * @param source the source
     */
    set_source(source: string): void
    /**
     * Set the media studio
     * @param studio The studio the media is from
     */
    set_studio(studio: string): void
    /**
     * Set the media's thumbnail URL
     * @param thumbnail the thumbnail URL
     */
    set_thumbnail(thumbnail: string): void
    /**
     * Set the media's binary thumbnail
     * @param thumbnail thumbnail buffer
     * @param size thumbnail buffer size
     */
    set_thumbnail_binary(thumbnail: number, size: number): void
    /**
     * Set the media's title
     * @param title the title
     */
    set_title(title: string): void
    /**
     * Set the media's URL
     * @param url the media's URL
     */
    set_url(url: string): void
    /**
     * Set the media's URL and its mime-type.
     * @param url the media's URL
     * @param mime the `url` mime type
     */
    set_url_data(url: string, mime: string): void
    /* Methods of Grl-0.1.Grl.Data */
    /**
     * Adds a new `key` to `data,` with no value. If key already exists, it does
     * nothing.
     * @param key key to add
     */
    add(key: GObject.ParamSpec): void
    /**
     * Appends a new binary value for `key` in `data`.
     * @param key key to append
     * @param buf the buffer containing the new value
     * @param size size of buffer
     */
    add_binary(key: GObject.ParamSpec, buf: number, size: number): void
    /**
     * Appends a new float value for `key` in `data`.
     * @param key key to append
     * @param floatvalue the new value
     */
    add_float(key: GObject.ParamSpec, floatvalue: number): void
    /**
     * Appends a new int value for `key` in `data`.
     * @param key key to append
     * @param intvalue the new value
     */
    add_int(key: GObject.ParamSpec, intvalue: number): void
    /**
     * Adds a new set of values into `data`.
     * 
     * All keys in `prop` must be related among them.
     * 
     * `data` will take the ownership of `relkeys,` so do not modify it.
     * @param relkeys a set of related properties with their values
     */
    add_related_keys(relkeys: RelatedKeys): void
    /**
     * Appends a new string value for `key` in `data`.
     * @param key key to append
     * @param strvalue the new value
     */
    add_string(key: GObject.ParamSpec, strvalue: string): void
    /**
     * Makes a deep copy of `data` and all its contents.
     */
    dup(): Data
    /**
     * Get the first value from `data` associated with `key`.
     * 
     * freed by user.
     * @param key key to look up.
     */
    get(key: GObject.ParamSpec): any
    /**
     * Returns all non-%NULL values for `key` from `data`. This ignores related keys.
     * 
     * values. Do not change or free the values. Free the list with #g_list_free.
     * @param key a metadata key
     */
    get_all_single_related_keys(key: KeyID): any[]
    /**
     * Returns all non-%NULL values for `key` from `data`. `key` must have been
     * registered as a string-type key. This ignores related keys.
     * 
     * not change or free the strings. Free the list with #g_list_free.
     * @param key a metadata key
     */
    get_all_single_related_keys_string(key: KeyID): string[]
    /**
     * Returns the first binary value associated with `key` from `data`. If `key` has
     * no first value, or value is not a gfloat, or `key` is not in data, then %NULL
     * is returned.
     * 
     * successful `size` will be set the to the buffer size.
     * @param key key to use
     */
    get_binary(key: GObject.ParamSpec): [ /* returnType */ number, /* size */ number ]
    /**
     * Returns the first float value associated with `key` from `data`. If `key` has no
     * first value, or value is not a gfloat, or `key` is not in data, then 0 is
     * returned.
     * @param key key to use
     */
    get_float(key: GObject.ParamSpec): number
    /**
     * Returns the first int value associated with `key` from `data`. If `key` has no
     * first value, or value is not a gint, or `key` is not in data, then 0 is
     * returned.
     * @param key key to use
     */
    get_int(key: GObject.ParamSpec): number
    /**
     * Returns a list with keys contained in `data`.
     * 
     * keys. The content of the list should not be modified or freed. Use
     * g_list_free() when done using the list.
     */
    get_keys(): GObject.ParamSpec[]
    /**
     * Checks if old values are replaced when calling #grl_data_set.
     */
    get_overwrite(): boolean
    /**
     * Returns a set containing the values for `key` and related keys at position
     * `index` from `data`.
     * 
     * If user changes any of the values in the related keys, the changes will
     * become permanent.
     * @param key a metadata key
     * @param index element to retrieve, starting at 0
     */
    get_related_keys(key: KeyID, index: number): RelatedKeys
    /**
     * Returns all non-%NULL values for `key` from `data`. This ignores related keys.
     * 
     * values. Do not change or free the values. Free the list with #g_list_free.
     * @param key a metadata key
     */
    get_single_values_for_key(key: KeyID): any[]
    /**
     * Returns all non-%NULL values for `key` from `data`. `key` must have been
     * registered as a string-type key. This ignores related keys.
     * 
     * not change or free the strings. Free the list with #g_list_free.
     * @param key a metadata key
     */
    get_single_values_for_key_string(key: KeyID): string[]
    /**
     * Returns the first string value associated with `key` from `data`. If `key` has
     * no first value, or value is not string, or `key` is not in `data,` then %NULL
     * is returned.
     * 
     * not change nor free the value.
     * @param key key to use
     */
    get_string(key: GObject.ParamSpec): string
    /**
     * Checks if `key` is in `data`.
     * @param key key to search
     */
    has_key(key: GObject.ParamSpec): boolean
    /**
     * Checks if the `key` has a first value in `data`.
     * @param key key to search
     */
    key_is_known(key: GObject.ParamSpec): boolean
    /**
     * Returns how many values `key` or related keys have in `data:` if `key` has no
     * value, but a related key has, then it is counted as positive.
     * 
     * As example, let's think in three related keys, K1, K2 and K3, and then thinks
     * we have added several values for those keys, as:
     * 
     * (V10, V20, V30),, (V11, NULL, V31), (V12, NULL, V32)
     * 
     * Therefore, when invoking grl_data_length (data, K2) it will return 3:
     * considering K2 and the related keys (K1 and K3), there are 3 values.
     * @param key a metadata key
     */
    length(key: KeyID): number
    /**
     * Removes the first value for `key` from `data`. If there are other keys related
     * to `key` their values will also be removed from `data`.
     * @param key key to remove
     */
    remove(key: GObject.ParamSpec): void
    /**
     * Removes the value at position `index` for `key` from `data`. If there are other
     * keys related to `key,` their values at position `index` will also be removed
     * from `data`.
     * @param key a metadata key
     * @param index index of key to be removed, starting at 0
     */
    remove_nth(key: KeyID, index: number): void
    /**
     * Sets the first value associated with `key` in `data`. If key already has a
     * value old value is freed and the new one is set.
     * 
     * Also, checks that `value` is compliant with `key` specification, modifying it
     * accordingly. For instance, if `key` requires a number between 0 and 10, but
     * `value` is outside this range, it will be adapted accordingly.
     * @param key key to change or add
     * @param value the new value
     */
    set(key: GObject.ParamSpec, value: any): void
    /**
     * Sets the first binary value associated with `key` in `data`. If `key` already
     * has a first value old value is replaced by the new one.
     * @param key key to change or add
     * @param buf buffer holding the data
     * @param size size of the buffer
     */
    set_binary(key: GObject.ParamSpec, buf: number, size: number): void
    /**
     * Sets the first float value associated with `key` in `data`. If `key` already has
     * a first value old value is replaced by the new one.
     * @param key key to change or add
     * @param floatvalue the new value
     */
    set_float(key: GObject.ParamSpec, floatvalue: number): void
    /**
     * Sets the first int value associated with `key` in `data`. If `key` already has a
     * first value old value is replaced by the new one.
     * @param key key to change or add
     * @param intvalue the new value
     */
    set_int(key: GObject.ParamSpec, intvalue: number): void
    /**
     * This controls if #grl_data_set will overwrite the current value of a property
     * with the new one.
     * 
     * Set it to %TRUE so old values are overwritten, or %FALSE in other case
     * (default is %FALSE).
     * @param overwrite if data can be overwritten
     */
    set_overwrite(overwrite: boolean): void
    /**
     * Updates the values at position `index` in `data` with values in `relkeys`.
     * 
     * `data` will take ownership of `relkeys,` so do not free it after invoking this
     * function.
     * @param relkeys a set of related keys
     * @param index position to be updated, starting at 0
     */
    set_related_keys(relkeys: RelatedKeys, index: number): void
    /**
     * Sets the first string value associated with `key` in `data`. If `key` already
     * has a value old value is freed and the new one is set.
     * @param key key to change or add
     * @param strvalue the new value
     */
    set_string(key: GObject.ParamSpec, strvalue: string): void
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
    connect(sigName: "notify", callback: (($obj: MediaImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::overwrite", callback: (($obj: MediaImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite", callback: (($obj: MediaImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MediaImage_ConstructProps)
    _init (config?: MediaImage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MediaImage
    /* Function overloads */
    static new(): MediaImage
    static $gtype: GObject.Type
}
interface MediaPlugin_ConstructProps extends GObject.Object_ConstructProps {
}
class MediaPlugin {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Grl-0.1.Grl.MediaPlugin */
    /**
     * Get the author of the plugin
     */
    get_author(): string
    /**
     * Get the description of the plugin
     */
    get_description(): string
    /**
     * Get the filename containing the plugin
     */
    get_filename(): string
    /**
     * Get the id of the plugin
     */
    get_id(): string
    /**
     * Get the information of the `plugin` that is associated with the given key
     * @param key a key representing information about this plugin
     */
    get_info(key: string): string
    /**
     * Returns a list of keys that can be queried to retrieve information about the
     * plugin.
     * 
     * a #GList of strings containing the keys. The content of the list is
     * owned by the plugin and should not be modified or freed. Use g_list_free()
     * when done using the list.
     */
    get_info_keys(): string[]
    /**
     * Get the license of the plugin
     */
    get_license(): string
    /**
     * Get the name of the plugin
     */
    get_name(): string
    /**
     * Get the #GrlPluginRank of the plugin
     */
    get_rank(): number
    /**
     * Get the site of the plugin
     */
    get_site(): string
    /**
     * Get the version of the plugin
     */
    get_version(): string
    set_plugin_info(info: PluginInfo): void
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
    connect(sigName: "notify", callback: (($obj: MediaPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaPlugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MediaPlugin_ConstructProps)
    _init (config?: MediaPlugin_ConstructProps): void
    static $gtype: GObject.Type
}
interface MediaSource_ConstructProps extends MetadataSource_ConstructProps {
    /* Constructor properties of Grl-0.1.Grl.MediaSource */
    /**
     * Transparently split queries with count requests
     * bigger than a certain threshold into smaller queries.
     */
    auto_split_threshold?: number
}
class MediaSource {
    /* Properties of Grl-0.1.Grl.MediaSource */
    /**
     * Transparently split queries with count requests
     * bigger than a certain threshold into smaller queries.
     */
    auto_split_threshold: number
    /* Properties of Grl-0.1.Grl.MetadataSource */
    /**
     * A description of the source
     */
    source_desc: string
    /**
     * The identifier of the source.
     */
    source_id: string
    /**
     * The name of the source.
     */
    source_name: string
    /* Fields of Grl-0.1.Grl.MetadataSource */
    parent: MediaPlugin
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Grl-0.1.Grl.MediaSource */
    /**
     * Browse from `skip,` a `count` number of media elements through an available list.
     * 
     * This method is asynchronous.
     * @param container a container of data transfer objects
     * @param keys the #GList of #GrlKeyID<!-- -->s to request
     * @param skip the number if elements to skip in the browse operation
     * @param count the number of elements to retrieve in the browse operation
     * @param flags the resolution mode
     * @param callback the user defined callback
     */
    browse(container: Media | null, keys: GObject.ParamSpec[], skip: number, count: number, flags: MetadataResolutionFlags, callback: MediaSourceResultCb): number
    /**
     * Browse from `skip,` a `count` number of media elements through an available
     * list.
     * 
     * This method is synchronous.
     * 
     * elements. After use g_object_unref() every element and g_list_free() the
     * list.
     * @param container a container of data transfer objects
     * @param keys the #GList of #GrlKeyID<!-- -->s to request
     * @param skip the number if elements to skip in the browse operation
     * @param count the number of elements to retrieve in the browse operation
     * @param flags the resolution mode
     */
    browse_sync(container: Media | null, keys: GObject.ParamSpec[], skip: number, count: number, flags: MetadataResolutionFlags): Media[]
    /**
     * Cancel a running method.
     * 
     * The derived class must implement the cancel vmethod in order to honour the
     * request correctly. Otherwise, the operation will not be interrupted.
     * 
     * In all cases, if this function is called on an ongoing operation, the
     * corresponding callback will be called with the
     * `GRL_CORE_ERROR_OPERATION_CANCELLED` error set, and no more action will be
     * taken for that operation after the said callback with error has been called.
     * @param operation_id the identifier of the running operation, as returned by the function that started it
     */
    cancel(operation_id: number): void
    /**
     * TBD
     */
    get_auto_split_threshold(): number
    /**
     * Creates an instance of #GrlMedia representing the media resource
     * exposed at `uri`.
     * 
     * It is recommended to call grl_media_source_test_media_from_uri() before
     * invoking this to check whether the target source can theoretically do the
     * resolution.
     * 
     * This method is asynchronous.
     * @param uri A URI that can be used to identify a media resource
     * @param keys A list of keys to resolve
     * @param flags the resolution mode
     * @param callback the user defined callback
     */
    get_media_from_uri(uri: string, keys: KeyID[], flags: MetadataResolutionFlags, callback: MediaSourceMetadataCb): number
    /**
     * Creates an instance of #GrlMedia representing the media resource
     * exposed at `uri`.
     * 
     * It is recommended to call grl_media_source_test_media_from_uri() before
     * invoking this to check whether the target source can theoretically do the
     * resolution.
     * 
     * This method is synchronous.
     * @param uri A URI that can be used to identify a media resource
     * @param keys A list of keys to resolve
     * @param flags the resolution mode
     */
    get_media_from_uri_sync(uri: string, keys: KeyID[], flags: MetadataResolutionFlags): Media
    /**
     * Obtains the previously attached data
     * @param operation_id the identifier of a running operation
     */
    get_operation_data(operation_id: number): object
    /**
     * This method is intended to fetch the requested keys of metadata of
     * a given `media` to the media source.
     * 
     * This method is asynchronous.
     * @param media a data transfer object
     * @param keys the #GList of #GrlKeyID<!-- -->s to request
     * @param flags the resolution mode
     * @param callback the user defined callback
     */
    metadata(media: Media | null, keys: GObject.ParamSpec[], flags: MetadataResolutionFlags, callback: MediaSourceMetadataCb): number
    /**
     * This method is intended to fetch the requested keys of metadata of
     * a given `media` to the media source.
     * 
     * This method is synchronous.
     * @param media a data transfer object
     * @param keys the #GList of #GrlKeyID<!-- -->s to request
     * @param flags the resolution mode
     */
    metadata_sync(media: Media | null, keys: GObject.ParamSpec[], flags: MetadataResolutionFlags): Media
    /**
     * Emits "content-changed" signal to notify subscribers that a change ocurred
     * in `source`.
     * 
     * See #grl_media_source_notify_change_list() function.
     * 
     * <note>
     * <para>
     * This function is intended to be used only by plugins.
     * </para>
     * </note>
     * @param media the media which has changed, or `NULL` to use the root box.
     * @param change_type the type of change
     * @param location_unknown if change has happened in `media` or any descendant
     */
    notify_change(media: Media | null, change_type: MediaSourceChangeType, location_unknown: boolean): void
    /**
     * Emits "content-changed" signal to notify subscribers that a change ocurred
     * in `source`.
     * 
     * The function will take ownership of `changed` medias and it should not be
     * manipulated in any way by the caller after invoking this function. If that is
     * needed, the caller must ref the array in advance.
     * 
     * See GrlMediaSource::content-changed signal.
     * 
     * <note>
     * <para>
     * This function is intended to be used only by plugins.
     * </para>
     * </note>
     * @param changed_medias : the list of medias that have changed
     * @param change_type the type of change
     * @param location_unknown if change has happpened in `media` or any descendant
     */
    notify_change_list(changed_medias: Media[], change_type: MediaSourceChangeType, location_unknown: boolean): void
    /**
     * Starts emitting ::content-changed signals when `source` discovers changes in
     * the content. This instructs `source` to setup the machinery needed to be aware
     * of changes in the content.
     */
    notify_change_start(): boolean
    /**
     * This will drop emission of ::content-changed signals from `source`. When this
     * is done `source` should stop the machinery required for it to track changes in
     * the content.
     */
    notify_change_stop(): boolean
    /**
     * Execute a specialized query (specific for each provider) on a media
     * repository.
     * 
     * It is different from grl_media_source_search() semantically, because
     * the query implies a carefully crafted string, rather than a simple
     * string to search.
     * 
     * This method is asynchronous.
     * @param query the query to process
     * @param keys the #GList of #GrlKeyID<!-- -->s to request
     * @param skip the number if elements to skip in the query operation
     * @param count the number of elements to retrieve in the query operation
     * @param flags the resolution mode
     * @param callback the user defined callback
     */
    query(query: string, keys: GObject.ParamSpec[], skip: number, count: number, flags: MetadataResolutionFlags, callback: MediaSourceResultCb): number
    /**
     * Execute a specialized query (specific for each provider) on a media
     * repository.
     * 
     * This method is synchronous.
     * 
     * elements. After use g_object_unref() every element and g_list_free() the
     * list.
     * @param query the query to process
     * @param keys the #GList of #GrlKeyID<!-- -->s to request
     * @param skip the number if elements to skip in the query operation
     * @param count the number of elements to retrieve in the query operation
     * @param flags the resolution mode
     */
    query_sync(query: string, keys: GObject.ParamSpec[], skip: number, count: number, flags: MetadataResolutionFlags): Media[]
    /**
     * Remove a `media` from the `source` repository.
     * 
     * This method is asynchronous.
     * @param media a data transfer object
     * @param callback the user defined callback
     */
    remove(media: Media, callback: MediaSourceRemoveCb): void
    /**
     * Remove a `media` from the `source` repository.
     * 
     * This method is synchronous.
     * @param media a data transfer object
     */
    remove_sync(media: Media): void
    /**
     * Search for the `text` string in a media source for data identified with
     * that string.
     * 
     * If `text` is `NULL` then no text filter will be applied, and thus, no media
     * items from `source` will be filtered. If `source` does not support NULL-text
     * search operations it should notiy the client by setting
     * `GRL_CORE_ERROR_SEARCH_NULL_UNSUPPORTED` in `callback'`s error parameter.
     * 
     * This method is asynchronous.
     * @param text the text to search
     * @param keys the #GList of #GrlKeyID<!-- -->s to request
     * @param skip the number if elements to skip in the search operation
     * @param count the number of elements to retrieve in the search operation
     * @param flags the resolution mode
     * @param callback the user defined callback
     */
    search(text: string, keys: GObject.ParamSpec[], skip: number, count: number, flags: MetadataResolutionFlags, callback: MediaSourceResultCb): number
    /**
     * Search for the `text` string in a media source for data identified with
     * that string.
     * 
     * If `text` is `NULL` then no text filter will be applied, and thus, no media
     * items from `source` will be filtered. If `source` does not support NULL-text
     * search operations it should notiy the client by setting
     * `GRL_CORE_ERROR_SEARCH_NULL_UNSUPPORTED` in the error parameter.
     * 
     * This method is synchronous.
     * 
     * elements. After use g_object_unref() every element and g_list_free() the
     * list.
     * @param text the text to search
     * @param keys the #GList of #GrlKeyID<!-- -->s to request
     * @param skip the number if elements to skip in the search operation
     * @param count the number of elements to retrieve in the search operation
     * @param flags the resolution mode
     */
    search_sync(text: string, keys: GObject.ParamSpec[], skip: number, count: number, flags: MetadataResolutionFlags): Media[]
    /**
     * TBD
     * @param threshold the threshold to request
     */
    set_auto_split_threshold(threshold: number): void
    /**
     * Attach a pointer to the specific operation.
     * @param operation_id the identifier of a running operation
     * @param data the data to attach
     */
    set_operation_data(operation_id: number, data: object): void
    /**
     * Store the `media` into the `parent` container
     * 
     * This method is asynchronous.
     * @param parent a parent to store the data transfer objects
     * @param media a data transfer object
     * @param callback the user defined callback
     */
    store(parent: MediaBox | null, media: Media, callback: MediaSourceStoreCb): void
    /**
     * Store the `media` into the `parent` container.
     * 
     * This method is synchronous.
     * @param parent a #GrlMediaBox to store the data transfer objects
     * @param media a #GrlMedia data transfer object
     */
    store_sync(parent: MediaBox | null, media: Media): void
    /**
     * Tests whether `source` can instantiate a #GrlMedia object representing
     * the media resource exposed at `uri`.
     * 
     * 
     * This method is synchronous.
     * @param uri A URI that can be used to identify a media resource
     */
    test_media_from_uri(uri: string): boolean
    /* Methods of Grl-0.1.Grl.MetadataSource */
    /**
     * Cancel a running method.
     * 
     * The derived class must implement the cancel vmethod in order to honour the
     * request correctly. Otherwise, the operation will not be interrupted.
     * 
     * In all cases, if this function is called on an ongoing operation, the
     * corresponding callback will be called with the
     * `GRL_CORE_ERROR_OPERATION_CANCELLED` error set, and no more action will be
     * taken for that operation after the said callback with error has been called.
     * @param operation_id the identifier of the running operation, as returned by the function that started it
     */
    cancel(operation_id: number): void
    /**
     * This function does the opposite of other filter functions: removes the slow
     * keys from `keys`. If `return_filtered` is %TRUE the removed slow keys are
     * returned in a new list.
     * 
     * `return_filtered` is %TRUE will return the list of slow keys; otherwise
     * %NULL
     * @param keys  the list of keys to filter out
     * @param return_filtered if %TRUE the return value shall be a new list with the slow keys
     */
    filter_slow(keys: GObject.ParamSpec[] | null, return_filtered: boolean): [ /* returnType */ GObject.ParamSpec[], /* keys */ GObject.ParamSpec[] | null ]
    /**
     * Compares the received `keys` list with the supported key list by the
     * metadata `source,` and deletes those keys which are not supported.
     * 
     * if `return_filtered` is %TRUE will return the list of removed keys;
     * otherwise %NULL
     * @param keys  the list of keys to filter out
     * @param return_filtered if %TRUE the return value shall be a new list with the unsupported keys
     */
    filter_supported(keys: GObject.ParamSpec[] | null, return_filtered: boolean): [ /* returnType */ GObject.ParamSpec[], /* keys */ GObject.ParamSpec[] | null ]
    /**
     * Similar to grl_metadata_source_filter_supported() but applied to
     * the writable keys in grl_metadata_source_writable_keys().
     * 
     * Filter the `keys` list keeping only those keys that are writtable in
     * `source`. If `return_filtered` is %TRUE then the removed keys are returned in a
     * new list.
     * 
     * if `return_filtered` is %TRUE will return the list of non-writtable keys;
     * otherwise %NULL
     * @param keys  the list of keys to filter out
     * @param return_filtered if %TRUE the return value shall be a new list with the non-writable keys
     */
    filter_writable(keys: GObject.ParamSpec[] | null, return_filtered: boolean): [ /* returnType */ GObject.ParamSpec[], /* keys */ GObject.ParamSpec[] | null ]
    gen_operation_id(): number
    get_description(): string
    get_id(): string
    get_name(): string
    /**
     * Obtains the previously attached data
     * @param operation_id the identifier of a running operation
     */
    get_operation_data(operation_id: number): object
    /**
     * Get the list of #GrlKeyID which are needed a priori, in order to fetch
     * and store the requested `key_id`
     * 
     * a #GList with the keys, or `NULL` if it can not resolve `key_id`
     * @param key_id the requested metadata key
     */
    key_depends(key_id: GObject.ParamSpec): GObject.ParamSpec[]
    /**
     * Checks whether `key_id` may be resolved with `source` for `media,` so that the
     * caller can avoid calling grl_metadata_source_resolve() if it can be known in
     * advance it will fail.
     * 
     * If the resolution is known to be impossible because more keys are needed in
     * `media,` and `missing_keys` is not `NULL,` it is populated with the list of
     * GrlKeyID that would be needed.
     * 
     * This function is synchronous and should not block.
     * 
     * `media,` `FALSE` otherwise.
     * @param media a media on which we want more metadata
     * @param key_id the key corresponding to a metadata we might want
     */
    may_resolve(media: Media, key_id: KeyID): [ /* returnType */ boolean, /* missing_keys */ KeyID[] ]
    operation_is_cancelled(operation_id: number): boolean
    operation_is_completed(operation_id: number): boolean
    operation_is_finished(operation_id: number): boolean
    operation_is_ongoing(operation_id: number): boolean
    /**
     * This is the main method of the #GrlMetadataSource class. It will fetch the
     * metadata of the requested keys.
     * 
     * This function is asynchronous.
     * @param keys the #GList of #GrlKeyID to retrieve
     * @param media Transfer object where all the metadata is stored.
     * @param flags bitwise mask of #GrlMetadataResolutionFlags with the resolution strategy
     * @param callback the callback to execute when the `media` metadata is filled up
     */
    resolve(keys: GObject.ParamSpec[] | null, media: Media, flags: MetadataResolutionFlags, callback: MetadataSourceResolveCb): number
    /**
     * This is the main method of the #GrlMetadataSource class. It will fetch the
     * metadata of the requested keys.
     * 
     * This function is synchronous.
     * @param keys the #GList of #GrlKeyID to retrieve
     * @param media Transfer object where all the metadata is stored
     * @param flags bitwise mask of #GrlMetadataResolutionFlags with the resolution strategy
     */
    resolve_sync(keys: GObject.ParamSpec[] | null, media: Media, flags: MetadataResolutionFlags): Media
    /**
     * This is the main method of the #GrlMetadataSource class. It will
     * get the values for `keys` from `media` and store it permanently. After
     * calling this method, future queries that return this media object
     * shall return this new values for the selected keys.
     * 
     * This function is asynchronous and uses the Glib's main loop.
     * @param media the #GrlMedia object that we want to operate on.
     * @param keys a list of #GrlKeyID whose values we want to change.
     * @param flags Flags to configure specific behaviors of the operation.
     * @param callback the callback to execute when the operation is finished.
     */
    set_metadata(media: Media, keys: GObject.ParamSpec[] | null, flags: MetadataWritingFlags, callback: MetadataSourceSetMetadataCb): void
    /**
     * This is the main method of the #GrlMetadataSource class. It will
     * get the value for `key` from `media` and store it permanently. After
     * calling this method, future queries that return this media object
     * shall return this new value for the selected key.
     * 
     * This function is synchronous.
     * 
     * a #GList of keys that could not be updated, or `NULL`
     * @param media the #GrlMedia object that we want to operate on
     * @param keys a list of #GrlKeyID whose values we want to change
     * @param flags Flags to configure specific behaviors of the operation.
     */
    set_metadata_sync(media: Media, keys: GObject.ParamSpec[] | null, flags: MetadataWritingFlags): GObject.ParamSpec[]
    set_operation_cancelled(operation_id: number): void
    set_operation_completed(operation_id: number): void
    /**
     * Attach a pointer to the specific operation.
     * @param operation_id the identifier of a running operation
     * @param data the data to attach
     */
    set_operation_data(operation_id: number, data: object): void
    set_operation_finished(operation_id: number): void
    set_operation_ongoing(operation_id: number): void
    /**
     * Similar to grl_metadata_source_supported_keys(), but this keys
     * are marked as slow because of the amount of traffic/processing needed
     * to fetch them.
     */
    slow_keys(): GObject.ParamSpec[]
    /**
     * Get a list of #GrlKeyID, which describe a metadata types that this
     * source can fetch and store.
     */
    supported_keys(): GObject.ParamSpec[]
    /**
     * By default the derived objects of #GrlMetadataSource can only resolve.
     * 
     * the source
     */
    supported_operations(): number
    /**
     * Similar to grl_metadata_source_supported_keys(), but these keys
     * are marked as writable, meaning the source allows the client
     * to provide new values for these keys that will be stored permanently.
     * 
     * a #GList with the keys
     */
    writable_keys(): GObject.ParamSpec[]
    /* Methods of Grl-0.1.Grl.MediaPlugin */
    /**
     * Get the author of the plugin
     */
    get_author(): string
    /**
     * Get the filename containing the plugin
     */
    get_filename(): string
    /**
     * Get the information of the `plugin` that is associated with the given key
     * @param key a key representing information about this plugin
     */
    get_info(key: string): string
    /**
     * Returns a list of keys that can be queried to retrieve information about the
     * plugin.
     * 
     * a #GList of strings containing the keys. The content of the list is
     * owned by the plugin and should not be modified or freed. Use g_list_free()
     * when done using the list.
     */
    get_info_keys(): string[]
    /**
     * Get the license of the plugin
     */
    get_license(): string
    /**
     * Get the #GrlPluginRank of the plugin
     */
    get_rank(): number
    /**
     * Get the site of the plugin
     */
    get_site(): string
    /**
     * Get the version of the plugin
     */
    get_version(): string
    set_plugin_info(info: PluginInfo): void
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
    /* Virtual methods of Grl-0.1.Grl.MediaSource */
    vfunc_browse(bs: MediaSourceBrowseSpec): void
    /**
     * Cancel a running method.
     * 
     * The derived class must implement the cancel vmethod in order to honour the
     * request correctly. Otherwise, the operation will not be interrupted.
     * 
     * In all cases, if this function is called on an ongoing operation, the
     * corresponding callback will be called with the
     * `GRL_CORE_ERROR_OPERATION_CANCELLED` error set, and no more action will be
     * taken for that operation after the said callback with error has been called.
     * @param operation_id the identifier of the running operation, as returned by the function that started it
     */
    vfunc_cancel(operation_id: number): void
    /* Function overloads */
    /**
     * Cancel a running method.
     * 
     * The derived class must implement the cancel vmethod in order to honour the
     * request correctly. Otherwise, the operation will not be interrupted.
     * 
     * In all cases, if this function is called on an ongoing operation, the
     * corresponding callback will be called with the
     * `GRL_CORE_ERROR_OPERATION_CANCELLED` error set, and no more action will be
     * taken for that operation after the said callback with error has been called.
     * @param operation_id the identifier of the running operation, as returned by the function that started it
     */
    vfunc_cancel(operation_id: number): void
    vfunc_media_from_uri(mfss: MediaSourceMediaFromUriSpec): void
    vfunc_metadata(ms: MediaSourceMetadataSpec): void
    /**
     * Starts emitting ::content-changed signals when `source` discovers changes in
     * the content. This instructs `source` to setup the machinery needed to be aware
     * of changes in the content.
     */
    vfunc_notify_change_start(): boolean
    /**
     * This will drop emission of ::content-changed signals from `source`. When this
     * is done `source` should stop the machinery required for it to track changes in
     * the content.
     */
    vfunc_notify_change_stop(): boolean
    vfunc_query(qs: MediaSourceQuerySpec): void
    vfunc_remove(ss: MediaSourceRemoveSpec): void
    vfunc_search(ss: MediaSourceSearchSpec): void
    vfunc_store(ss: MediaSourceStoreSpec): void
    /**
     * Tests whether `source` can instantiate a #GrlMedia object representing
     * the media resource exposed at `uri`.
     * 
     * 
     * This method is synchronous.
     * @param uri A URI that can be used to identify a media resource
     */
    vfunc_test_media_from_uri(uri: string): boolean
    /* Virtual methods of Grl-0.1.Grl.MetadataSource */
    /**
     * Cancel a running method.
     * 
     * The derived class must implement the cancel vmethod in order to honour the
     * request correctly. Otherwise, the operation will not be interrupted.
     * 
     * In all cases, if this function is called on an ongoing operation, the
     * corresponding callback will be called with the
     * `GRL_CORE_ERROR_OPERATION_CANCELLED` error set, and no more action will be
     * taken for that operation after the said callback with error has been called.
     * @param operation_id the identifier of the running operation, as returned by the function that started it
     */
    vfunc_cancel(operation_id: number): void
    /**
     * Get the list of #GrlKeyID which are needed a priori, in order to fetch
     * and store the requested `key_id`
     * 
     * a #GList with the keys, or `NULL` if it can not resolve `key_id`
     * @param key_id the requested metadata key
     */
    vfunc_key_depends(key_id: GObject.ParamSpec): GObject.ParamSpec[]
    /**
     * Checks whether `key_id` may be resolved with `source` for `media,` so that the
     * caller can avoid calling grl_metadata_source_resolve() if it can be known in
     * advance it will fail.
     * 
     * If the resolution is known to be impossible because more keys are needed in
     * `media,` and `missing_keys` is not `NULL,` it is populated with the list of
     * GrlKeyID that would be needed.
     * 
     * This function is synchronous and should not block.
     * 
     * `media,` `FALSE` otherwise.
     * @param media a media on which we want more metadata
     * @param key_id the key corresponding to a metadata we might want
     */
    vfunc_may_resolve(media: Media, key_id: KeyID): [ /* returnType */ boolean, /* missing_keys */ KeyID[] ]
    vfunc_resolve(rs: MetadataSourceResolveSpec): void
    vfunc_set_metadata(sms: MetadataSourceSetMetadataSpec): void
    /**
     * Similar to grl_metadata_source_supported_keys(), but this keys
     * are marked as slow because of the amount of traffic/processing needed
     * to fetch them.
     */
    vfunc_slow_keys(): GObject.ParamSpec[]
    /**
     * Get a list of #GrlKeyID, which describe a metadata types that this
     * source can fetch and store.
     */
    vfunc_supported_keys(): GObject.ParamSpec[]
    vfunc_supported_operations(): SupportedOps
    /**
     * Similar to grl_metadata_source_supported_keys(), but these keys
     * are marked as writable, meaning the source allows the client
     * to provide new values for these keys that will be stored permanently.
     * 
     * a #GList with the keys
     */
    vfunc_writable_keys(): GObject.ParamSpec[]
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
    /* Signals of Grl-0.1.Grl.MediaSource */
    /**
     * Signals that the content in the source has changed. `changed_medias` is the
     * list of elements that have changed. Usually these medias are of type
     * #GrlMediaBox, meaning that the content of that box has changed.
     * 
     * If `location_unknown` is `TRUE` it means the source cannot establish where the
     * change happened: could be either in the box, in any child, or in any other
     * descendant of the box in the hierarchy.
     * 
     * Both `change_type` and `location_unknown` are applied to all elements in the
     * list.
     * 
     * For the cases where the source can only signal that a change happened, but
     * not where, it would use a list with the the root box (`NULL` id) and set
     * location_unknown as `TRUE`.
     * @param changed_medias a #GPtrArray with the medias that changed or a common ancestor of them of type #GrlMediaBox.
     * @param change_type the kind of change that ocurred
     * @param location_unknown `TRUE` if the change happened in `media` itself or in one of its direct children (when `media` is a #GrlMediaBox). `FALSE` otherwise
     */
    connect(sigName: "content-changed", callback: (($obj: MediaSource, changed_medias: object[], change_type: MediaSourceChangeType, location_unknown: boolean) => void)): number
    connect_after(sigName: "content-changed", callback: (($obj: MediaSource, changed_medias: object[], change_type: MediaSourceChangeType, location_unknown: boolean) => void)): number
    emit(sigName: "content-changed", changed_medias: object[], change_type: MediaSourceChangeType, location_unknown: boolean): void
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
    connect(sigName: "notify", callback: (($obj: MediaSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auto-split-threshold", callback: (($obj: MediaSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-split-threshold", callback: (($obj: MediaSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source-desc", callback: (($obj: MediaSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-desc", callback: (($obj: MediaSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source-id", callback: (($obj: MediaSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-id", callback: (($obj: MediaSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source-name", callback: (($obj: MediaSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-name", callback: (($obj: MediaSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MediaSource_ConstructProps)
    _init (config?: MediaSource_ConstructProps): void
    static $gtype: GObject.Type
}
interface MediaVideo_ConstructProps extends Media_ConstructProps {
}
class MediaVideo {
    /* Properties of Grl-0.1.Grl.Data */
    overwrite: boolean
    /* Fields of Grl-0.1.Grl.Media */
    parent: Data
    /* Fields of Grl-0.1.Grl.Data */
    priv: DataPrivate
    _grl_reserved: object[]
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Grl-0.1.Grl.MediaVideo */
    /**
     * Sets all the keys related with the URL of a media resource and adds it to
     * `video` (useful for resources with more than one URL).
     * @param url a video's url
     * @param mime video mime-type
     * @param framerate video framerate, or -1 to ignore
     * @param width video width, or -1 to ignore
     * @param height video height, or -1 to ignore
     */
    add_url_data(url: string, mime: string, framerate: number, width: number, height: number): void
    get_episode(): number
    get_framerate(): number
    get_height(): number
    get_season(): number
    get_show(): string
    get_url_data(framerate: number, width: number, height: number): [ /* returnType */ string, /* mime */ string ]
    /**
     * in one go.
     * @param index element to retrieve
     * @param framerate the url framerate, or %NULL to ignore
     * @param width the url width, or %NULL to ignore
     * @param height the url height, or %NULL to ignore
     */
    get_url_data_nth(index: number, framerate: number, width: number, height: number): [ /* returnType */ string, /* mime */ string ]
    get_width(): number
    /**
     * Sets the episode number of the video
     * @param episode the video's episode
     */
    set_episode(episode: number): void
    /**
     * Set the framerate of the video
     * @param framerate the video's framerate
     */
    set_framerate(framerate: number): void
    /**
     * Set the height of the video
     * @param height the video's height
     */
    set_height(height: number): void
    /**
     * Sets the season number of the video
     * @param season the video's season
     */
    set_season(season: number): void
    /**
     * Sets the show title of the video
     * @param show the video's show name
     */
    set_show(show: string): void
    /**
     * Set the width and the height of the video
     * @param width the video's width
     * @param height the video's height
     */
    set_size(width: number, height: number): void
    /**
     * Sets all the keys related with the URL of a video resource in one go.
     * @param url the video's url
     * @param mime video mime-type
     * @param framerate video framerate, or -1 to ignore
     * @param width video width, or -1 to ignore
     * @param height video height, or -1 to ignore
     */
    set_url_data(url: string, mime: string, framerate: number, width: number, height: number): void
    /**
     * Set the width of the video
     * @param width the video's width
     */
    set_width(width: number): void
    /* Methods of Grl-0.1.Grl.Media */
    /**
     * Adds a new author to `media`.
     * @param author an author for `media`
     */
    add_author(author: string): void
    /**
     * Adds a new external player to `media`.
     * @param player an external player for `media`
     */
    add_external_player(player: string): void
    /**
     * Adds a new external url to `media`.
     * @param url an external url for `media`
     */
    add_external_url(url: string): void
    /**
     * Adds a new thumbnail to `media`.
     * @param thumbnail a thumbnail for `media`
     */
    add_thumbnail(thumbnail: string): void
    /**
     * Adds a new thumbnail to `media`.
     * @param thumbnail a buffer containing the thumbnail for `media`
     * @param size size of buffer
     */
    add_thumbnail_binary(thumbnail: number, size: number): void
    /**
     * Adds a new media's URL with its mime-type.
     * @param url a media's URL
     * @param mime th `url` mime type
     */
    add_url_data(url: string, mime: string): void
    get_author(): string
    get_author_nth(index: number): string
    get_certificate(): string
    get_creation_date(): string
    get_date(): string
    get_description(): string
    get_duration(): number
    /**
     * where the user play the media.
     */
    get_external_url(): string
    get_external_url_nth(index: number): string
    get_id(): string
    get_last_played(): string
    get_last_position(): number
    get_license(): string
    get_mime(): string
    get_play_count(): number
    /**
     * object for this media
     */
    get_player(): string
    get_player_nth(index: number): string
    get_rating(): number
    get_site(): string
    get_source(): string
    get_studio(): string
    get_thumbnail(): string
    get_thumbnail_binary(size: number): number
    /**
     * buffer size.
     * @param size pointer to store the thumbnail buffer size
     * @param index element to retrieve
     */
    get_thumbnail_binary_nth(size: number, index: number): number
    get_thumbnail_nth(index: number): string
    get_title(): string
    get_url(): string
    get_url_data(): [ /* returnType */ string, /* mime */ string ]
    get_url_data_nth(index: number): [ /* returnType */ string, /* mime */ string ]
    /**
     * Serializes a GrlMedia into a string. It does a basic serialization.
     * 
     * See grl_media_serialize_extended() to get more serialization approaches.
     */
    serialize(): string
    /**
     * Set the media's author
     * @param author the media's author
     */
    set_author(author: string): void
    /**
     * Set the media certificate
     * @param certificate The rating certificate of the media
     */
    set_certificate(certificate: string): void
    /**
     * Set the creation_date of the media
     * @param creation_date date when media was created
     */
    set_creation_date(creation_date: string): void
    /**
     * Set the media's date (TBD)
     * @param date the date
     */
    set_date(date: string): void
    /**
     * Set the media's description
     * @param description the description
     */
    set_description(description: string): void
    /**
     * Set the media's duration
     * @param duration the duration
     */
    set_duration(duration: number): void
    /**
     * Set the location of a player for the media (usually a flash player)
     * @param player location of an external player for this media
     */
    set_external_player(player: string): void
    /**
     * Set an external location where users can play the media
     * @param url external location where this media can be played.
     */
    set_external_url(url: string): void
    /**
     * Set the media identifier
     * @param id the identifier of the media
     */
    set_id(id: string): void
    /**
     * Set the media last played date
     * @param last_played date when the media was last played
     */
    set_last_played(last_played: string): void
    /**
     * Set the media last played position
     * @param last_position second at which the media playback was interrupted
     */
    set_last_position(last_position: number): void
    /**
     * Set the media license
     * @param license The license of the media
     */
    set_license(license: string): void
    /**
     * Set the media's mime-type
     * @param mime the mime type
     */
    set_mime(mime: string): void
    /**
     * Set the media play count
     * @param play_count the play count
     */
    set_play_count(play_count: number): void
    /**
     * This method receives a rating and its scale and normalizes it
     * @param rating a rating value
     * @param max maximum rating value
     */
    set_rating(rating: number, max: number): void
    /**
     * Set the media's site
     * @param site the site
     */
    set_site(site: string): void
    /**
     * Set the media's source
     * @param source the source
     */
    set_source(source: string): void
    /**
     * Set the media studio
     * @param studio The studio the media is from
     */
    set_studio(studio: string): void
    /**
     * Set the media's thumbnail URL
     * @param thumbnail the thumbnail URL
     */
    set_thumbnail(thumbnail: string): void
    /**
     * Set the media's binary thumbnail
     * @param thumbnail thumbnail buffer
     * @param size thumbnail buffer size
     */
    set_thumbnail_binary(thumbnail: number, size: number): void
    /**
     * Set the media's title
     * @param title the title
     */
    set_title(title: string): void
    /**
     * Set the media's URL
     * @param url the media's URL
     */
    set_url(url: string): void
    /**
     * Set the media's URL and its mime-type.
     * @param url the media's URL
     * @param mime the `url` mime type
     */
    set_url_data(url: string, mime: string): void
    /* Methods of Grl-0.1.Grl.Data */
    /**
     * Adds a new `key` to `data,` with no value. If key already exists, it does
     * nothing.
     * @param key key to add
     */
    add(key: GObject.ParamSpec): void
    /**
     * Appends a new binary value for `key` in `data`.
     * @param key key to append
     * @param buf the buffer containing the new value
     * @param size size of buffer
     */
    add_binary(key: GObject.ParamSpec, buf: number, size: number): void
    /**
     * Appends a new float value for `key` in `data`.
     * @param key key to append
     * @param floatvalue the new value
     */
    add_float(key: GObject.ParamSpec, floatvalue: number): void
    /**
     * Appends a new int value for `key` in `data`.
     * @param key key to append
     * @param intvalue the new value
     */
    add_int(key: GObject.ParamSpec, intvalue: number): void
    /**
     * Adds a new set of values into `data`.
     * 
     * All keys in `prop` must be related among them.
     * 
     * `data` will take the ownership of `relkeys,` so do not modify it.
     * @param relkeys a set of related properties with their values
     */
    add_related_keys(relkeys: RelatedKeys): void
    /**
     * Appends a new string value for `key` in `data`.
     * @param key key to append
     * @param strvalue the new value
     */
    add_string(key: GObject.ParamSpec, strvalue: string): void
    /**
     * Makes a deep copy of `data` and all its contents.
     */
    dup(): Data
    /**
     * Get the first value from `data` associated with `key`.
     * 
     * freed by user.
     * @param key key to look up.
     */
    get(key: GObject.ParamSpec): any
    /**
     * Returns all non-%NULL values for `key` from `data`. This ignores related keys.
     * 
     * values. Do not change or free the values. Free the list with #g_list_free.
     * @param key a metadata key
     */
    get_all_single_related_keys(key: KeyID): any[]
    /**
     * Returns all non-%NULL values for `key` from `data`. `key` must have been
     * registered as a string-type key. This ignores related keys.
     * 
     * not change or free the strings. Free the list with #g_list_free.
     * @param key a metadata key
     */
    get_all_single_related_keys_string(key: KeyID): string[]
    /**
     * Returns the first binary value associated with `key` from `data`. If `key` has
     * no first value, or value is not a gfloat, or `key` is not in data, then %NULL
     * is returned.
     * 
     * successful `size` will be set the to the buffer size.
     * @param key key to use
     */
    get_binary(key: GObject.ParamSpec): [ /* returnType */ number, /* size */ number ]
    /**
     * Returns the first float value associated with `key` from `data`. If `key` has no
     * first value, or value is not a gfloat, or `key` is not in data, then 0 is
     * returned.
     * @param key key to use
     */
    get_float(key: GObject.ParamSpec): number
    /**
     * Returns the first int value associated with `key` from `data`. If `key` has no
     * first value, or value is not a gint, or `key` is not in data, then 0 is
     * returned.
     * @param key key to use
     */
    get_int(key: GObject.ParamSpec): number
    /**
     * Returns a list with keys contained in `data`.
     * 
     * keys. The content of the list should not be modified or freed. Use
     * g_list_free() when done using the list.
     */
    get_keys(): GObject.ParamSpec[]
    /**
     * Checks if old values are replaced when calling #grl_data_set.
     */
    get_overwrite(): boolean
    /**
     * Returns a set containing the values for `key` and related keys at position
     * `index` from `data`.
     * 
     * If user changes any of the values in the related keys, the changes will
     * become permanent.
     * @param key a metadata key
     * @param index element to retrieve, starting at 0
     */
    get_related_keys(key: KeyID, index: number): RelatedKeys
    /**
     * Returns all non-%NULL values for `key` from `data`. This ignores related keys.
     * 
     * values. Do not change or free the values. Free the list with #g_list_free.
     * @param key a metadata key
     */
    get_single_values_for_key(key: KeyID): any[]
    /**
     * Returns all non-%NULL values for `key` from `data`. `key` must have been
     * registered as a string-type key. This ignores related keys.
     * 
     * not change or free the strings. Free the list with #g_list_free.
     * @param key a metadata key
     */
    get_single_values_for_key_string(key: KeyID): string[]
    /**
     * Returns the first string value associated with `key` from `data`. If `key` has
     * no first value, or value is not string, or `key` is not in `data,` then %NULL
     * is returned.
     * 
     * not change nor free the value.
     * @param key key to use
     */
    get_string(key: GObject.ParamSpec): string
    /**
     * Checks if `key` is in `data`.
     * @param key key to search
     */
    has_key(key: GObject.ParamSpec): boolean
    /**
     * Checks if the `key` has a first value in `data`.
     * @param key key to search
     */
    key_is_known(key: GObject.ParamSpec): boolean
    /**
     * Returns how many values `key` or related keys have in `data:` if `key` has no
     * value, but a related key has, then it is counted as positive.
     * 
     * As example, let's think in three related keys, K1, K2 and K3, and then thinks
     * we have added several values for those keys, as:
     * 
     * (V10, V20, V30),, (V11, NULL, V31), (V12, NULL, V32)
     * 
     * Therefore, when invoking grl_data_length (data, K2) it will return 3:
     * considering K2 and the related keys (K1 and K3), there are 3 values.
     * @param key a metadata key
     */
    length(key: KeyID): number
    /**
     * Removes the first value for `key` from `data`. If there are other keys related
     * to `key` their values will also be removed from `data`.
     * @param key key to remove
     */
    remove(key: GObject.ParamSpec): void
    /**
     * Removes the value at position `index` for `key` from `data`. If there are other
     * keys related to `key,` their values at position `index` will also be removed
     * from `data`.
     * @param key a metadata key
     * @param index index of key to be removed, starting at 0
     */
    remove_nth(key: KeyID, index: number): void
    /**
     * Sets the first value associated with `key` in `data`. If key already has a
     * value old value is freed and the new one is set.
     * 
     * Also, checks that `value` is compliant with `key` specification, modifying it
     * accordingly. For instance, if `key` requires a number between 0 and 10, but
     * `value` is outside this range, it will be adapted accordingly.
     * @param key key to change or add
     * @param value the new value
     */
    set(key: GObject.ParamSpec, value: any): void
    /**
     * Sets the first binary value associated with `key` in `data`. If `key` already
     * has a first value old value is replaced by the new one.
     * @param key key to change or add
     * @param buf buffer holding the data
     * @param size size of the buffer
     */
    set_binary(key: GObject.ParamSpec, buf: number, size: number): void
    /**
     * Sets the first float value associated with `key` in `data`. If `key` already has
     * a first value old value is replaced by the new one.
     * @param key key to change or add
     * @param floatvalue the new value
     */
    set_float(key: GObject.ParamSpec, floatvalue: number): void
    /**
     * Sets the first int value associated with `key` in `data`. If `key` already has a
     * first value old value is replaced by the new one.
     * @param key key to change or add
     * @param intvalue the new value
     */
    set_int(key: GObject.ParamSpec, intvalue: number): void
    /**
     * This controls if #grl_data_set will overwrite the current value of a property
     * with the new one.
     * 
     * Set it to %TRUE so old values are overwritten, or %FALSE in other case
     * (default is %FALSE).
     * @param overwrite if data can be overwritten
     */
    set_overwrite(overwrite: boolean): void
    /**
     * Updates the values at position `index` in `data` with values in `relkeys`.
     * 
     * `data` will take ownership of `relkeys,` so do not free it after invoking this
     * function.
     * @param relkeys a set of related keys
     * @param index position to be updated, starting at 0
     */
    set_related_keys(relkeys: RelatedKeys, index: number): void
    /**
     * Sets the first string value associated with `key` in `data`. If `key` already
     * has a value old value is freed and the new one is set.
     * @param key key to change or add
     * @param strvalue the new value
     */
    set_string(key: GObject.ParamSpec, strvalue: string): void
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
    connect(sigName: "notify", callback: (($obj: MediaVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::overwrite", callback: (($obj: MediaVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite", callback: (($obj: MediaVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MediaVideo_ConstructProps)
    _init (config?: MediaVideo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MediaVideo
    /* Function overloads */
    static new(): MediaVideo
    static $gtype: GObject.Type
}
interface MetadataSource_ConstructProps extends MediaPlugin_ConstructProps {
    /* Constructor properties of Grl-0.1.Grl.MetadataSource */
    /**
     * A description of the source
     */
    source_desc?: string
    /**
     * The identifier of the source.
     */
    source_id?: string
    /**
     * The name of the source.
     */
    source_name?: string
}
class MetadataSource {
    /* Properties of Grl-0.1.Grl.MetadataSource */
    /**
     * A description of the source
     */
    source_desc: string
    /**
     * The identifier of the source.
     */
    source_id: string
    /**
     * The name of the source.
     */
    source_name: string
    /* Fields of Grl-0.1.Grl.MediaPlugin */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Grl-0.1.Grl.MetadataSource */
    /**
     * Cancel a running method.
     * 
     * The derived class must implement the cancel vmethod in order to honour the
     * request correctly. Otherwise, the operation will not be interrupted.
     * 
     * In all cases, if this function is called on an ongoing operation, the
     * corresponding callback will be called with the
     * `GRL_CORE_ERROR_OPERATION_CANCELLED` error set, and no more action will be
     * taken for that operation after the said callback with error has been called.
     * @param operation_id the identifier of the running operation, as returned by the function that started it
     */
    cancel(operation_id: number): void
    /**
     * This function does the opposite of other filter functions: removes the slow
     * keys from `keys`. If `return_filtered` is %TRUE the removed slow keys are
     * returned in a new list.
     * 
     * `return_filtered` is %TRUE will return the list of slow keys; otherwise
     * %NULL
     * @param keys  the list of keys to filter out
     * @param return_filtered if %TRUE the return value shall be a new list with the slow keys
     */
    filter_slow(keys: GObject.ParamSpec[] | null, return_filtered: boolean): [ /* returnType */ GObject.ParamSpec[], /* keys */ GObject.ParamSpec[] | null ]
    /**
     * Compares the received `keys` list with the supported key list by the
     * metadata `source,` and deletes those keys which are not supported.
     * 
     * if `return_filtered` is %TRUE will return the list of removed keys;
     * otherwise %NULL
     * @param keys  the list of keys to filter out
     * @param return_filtered if %TRUE the return value shall be a new list with the unsupported keys
     */
    filter_supported(keys: GObject.ParamSpec[] | null, return_filtered: boolean): [ /* returnType */ GObject.ParamSpec[], /* keys */ GObject.ParamSpec[] | null ]
    /**
     * Similar to grl_metadata_source_filter_supported() but applied to
     * the writable keys in grl_metadata_source_writable_keys().
     * 
     * Filter the `keys` list keeping only those keys that are writtable in
     * `source`. If `return_filtered` is %TRUE then the removed keys are returned in a
     * new list.
     * 
     * if `return_filtered` is %TRUE will return the list of non-writtable keys;
     * otherwise %NULL
     * @param keys  the list of keys to filter out
     * @param return_filtered if %TRUE the return value shall be a new list with the non-writable keys
     */
    filter_writable(keys: GObject.ParamSpec[] | null, return_filtered: boolean): [ /* returnType */ GObject.ParamSpec[], /* keys */ GObject.ParamSpec[] | null ]
    gen_operation_id(): number
    get_description(): string
    get_id(): string
    get_name(): string
    /**
     * Obtains the previously attached data
     * @param operation_id the identifier of a running operation
     */
    get_operation_data(operation_id: number): object
    /**
     * Get the list of #GrlKeyID which are needed a priori, in order to fetch
     * and store the requested `key_id`
     * 
     * a #GList with the keys, or `NULL` if it can not resolve `key_id`
     * @param key_id the requested metadata key
     */
    key_depends(key_id: GObject.ParamSpec): GObject.ParamSpec[]
    /**
     * Checks whether `key_id` may be resolved with `source` for `media,` so that the
     * caller can avoid calling grl_metadata_source_resolve() if it can be known in
     * advance it will fail.
     * 
     * If the resolution is known to be impossible because more keys are needed in
     * `media,` and `missing_keys` is not `NULL,` it is populated with the list of
     * GrlKeyID that would be needed.
     * 
     * This function is synchronous and should not block.
     * 
     * `media,` `FALSE` otherwise.
     * @param media a media on which we want more metadata
     * @param key_id the key corresponding to a metadata we might want
     */
    may_resolve(media: Media, key_id: KeyID): [ /* returnType */ boolean, /* missing_keys */ KeyID[] ]
    operation_is_cancelled(operation_id: number): boolean
    operation_is_completed(operation_id: number): boolean
    operation_is_finished(operation_id: number): boolean
    operation_is_ongoing(operation_id: number): boolean
    /**
     * This is the main method of the #GrlMetadataSource class. It will fetch the
     * metadata of the requested keys.
     * 
     * This function is asynchronous.
     * @param keys the #GList of #GrlKeyID to retrieve
     * @param media Transfer object where all the metadata is stored.
     * @param flags bitwise mask of #GrlMetadataResolutionFlags with the resolution strategy
     * @param callback the callback to execute when the `media` metadata is filled up
     */
    resolve(keys: GObject.ParamSpec[] | null, media: Media, flags: MetadataResolutionFlags, callback: MetadataSourceResolveCb): number
    /**
     * This is the main method of the #GrlMetadataSource class. It will fetch the
     * metadata of the requested keys.
     * 
     * This function is synchronous.
     * @param keys the #GList of #GrlKeyID to retrieve
     * @param media Transfer object where all the metadata is stored
     * @param flags bitwise mask of #GrlMetadataResolutionFlags with the resolution strategy
     */
    resolve_sync(keys: GObject.ParamSpec[] | null, media: Media, flags: MetadataResolutionFlags): Media
    /**
     * This is the main method of the #GrlMetadataSource class. It will
     * get the values for `keys` from `media` and store it permanently. After
     * calling this method, future queries that return this media object
     * shall return this new values for the selected keys.
     * 
     * This function is asynchronous and uses the Glib's main loop.
     * @param media the #GrlMedia object that we want to operate on.
     * @param keys a list of #GrlKeyID whose values we want to change.
     * @param flags Flags to configure specific behaviors of the operation.
     * @param callback the callback to execute when the operation is finished.
     */
    set_metadata(media: Media, keys: GObject.ParamSpec[] | null, flags: MetadataWritingFlags, callback: MetadataSourceSetMetadataCb): void
    /**
     * This is the main method of the #GrlMetadataSource class. It will
     * get the value for `key` from `media` and store it permanently. After
     * calling this method, future queries that return this media object
     * shall return this new value for the selected key.
     * 
     * This function is synchronous.
     * 
     * a #GList of keys that could not be updated, or `NULL`
     * @param media the #GrlMedia object that we want to operate on
     * @param keys a list of #GrlKeyID whose values we want to change
     * @param flags Flags to configure specific behaviors of the operation.
     */
    set_metadata_sync(media: Media, keys: GObject.ParamSpec[] | null, flags: MetadataWritingFlags): GObject.ParamSpec[]
    set_operation_cancelled(operation_id: number): void
    set_operation_completed(operation_id: number): void
    /**
     * Attach a pointer to the specific operation.
     * @param operation_id the identifier of a running operation
     * @param data the data to attach
     */
    set_operation_data(operation_id: number, data: object): void
    set_operation_finished(operation_id: number): void
    set_operation_ongoing(operation_id: number): void
    /**
     * Similar to grl_metadata_source_supported_keys(), but this keys
     * are marked as slow because of the amount of traffic/processing needed
     * to fetch them.
     */
    slow_keys(): GObject.ParamSpec[]
    /**
     * Get a list of #GrlKeyID, which describe a metadata types that this
     * source can fetch and store.
     */
    supported_keys(): GObject.ParamSpec[]
    /**
     * By default the derived objects of #GrlMetadataSource can only resolve.
     * 
     * the source
     */
    supported_operations(): number
    /**
     * Similar to grl_metadata_source_supported_keys(), but these keys
     * are marked as writable, meaning the source allows the client
     * to provide new values for these keys that will be stored permanently.
     * 
     * a #GList with the keys
     */
    writable_keys(): GObject.ParamSpec[]
    /* Methods of Grl-0.1.Grl.MediaPlugin */
    /**
     * Get the author of the plugin
     */
    get_author(): string
    /**
     * Get the filename containing the plugin
     */
    get_filename(): string
    /**
     * Get the information of the `plugin` that is associated with the given key
     * @param key a key representing information about this plugin
     */
    get_info(key: string): string
    /**
     * Returns a list of keys that can be queried to retrieve information about the
     * plugin.
     * 
     * a #GList of strings containing the keys. The content of the list is
     * owned by the plugin and should not be modified or freed. Use g_list_free()
     * when done using the list.
     */
    get_info_keys(): string[]
    /**
     * Get the license of the plugin
     */
    get_license(): string
    /**
     * Get the #GrlPluginRank of the plugin
     */
    get_rank(): number
    /**
     * Get the site of the plugin
     */
    get_site(): string
    /**
     * Get the version of the plugin
     */
    get_version(): string
    set_plugin_info(info: PluginInfo): void
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
    /* Virtual methods of Grl-0.1.Grl.MetadataSource */
    /**
     * Cancel a running method.
     * 
     * The derived class must implement the cancel vmethod in order to honour the
     * request correctly. Otherwise, the operation will not be interrupted.
     * 
     * In all cases, if this function is called on an ongoing operation, the
     * corresponding callback will be called with the
     * `GRL_CORE_ERROR_OPERATION_CANCELLED` error set, and no more action will be
     * taken for that operation after the said callback with error has been called.
     * @param operation_id the identifier of the running operation, as returned by the function that started it
     */
    vfunc_cancel(operation_id: number): void
    /**
     * Get the list of #GrlKeyID which are needed a priori, in order to fetch
     * and store the requested `key_id`
     * 
     * a #GList with the keys, or `NULL` if it can not resolve `key_id`
     * @param key_id the requested metadata key
     */
    vfunc_key_depends(key_id: GObject.ParamSpec): GObject.ParamSpec[]
    /**
     * Checks whether `key_id` may be resolved with `source` for `media,` so that the
     * caller can avoid calling grl_metadata_source_resolve() if it can be known in
     * advance it will fail.
     * 
     * If the resolution is known to be impossible because more keys are needed in
     * `media,` and `missing_keys` is not `NULL,` it is populated with the list of
     * GrlKeyID that would be needed.
     * 
     * This function is synchronous and should not block.
     * 
     * `media,` `FALSE` otherwise.
     * @param media a media on which we want more metadata
     * @param key_id the key corresponding to a metadata we might want
     */
    vfunc_may_resolve(media: Media, key_id: KeyID): [ /* returnType */ boolean, /* missing_keys */ KeyID[] ]
    vfunc_resolve(rs: MetadataSourceResolveSpec): void
    vfunc_set_metadata(sms: MetadataSourceSetMetadataSpec): void
    /**
     * Similar to grl_metadata_source_supported_keys(), but this keys
     * are marked as slow because of the amount of traffic/processing needed
     * to fetch them.
     */
    vfunc_slow_keys(): GObject.ParamSpec[]
    /**
     * Get a list of #GrlKeyID, which describe a metadata types that this
     * source can fetch and store.
     */
    vfunc_supported_keys(): GObject.ParamSpec[]
    vfunc_supported_operations(): SupportedOps
    /**
     * Similar to grl_metadata_source_supported_keys(), but these keys
     * are marked as writable, meaning the source allows the client
     * to provide new values for these keys that will be stored permanently.
     * 
     * a #GList with the keys
     */
    vfunc_writable_keys(): GObject.ParamSpec[]
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
    connect(sigName: "notify", callback: (($obj: MetadataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MetadataSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::source-desc", callback: (($obj: MetadataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-desc", callback: (($obj: MetadataSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source-id", callback: (($obj: MetadataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-id", callback: (($obj: MetadataSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source-name", callback: (($obj: MetadataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-name", callback: (($obj: MetadataSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MetadataSource_ConstructProps)
    _init (config?: MetadataSource_ConstructProps): void
    static $gtype: GObject.Type
}
interface PluginRegistry_ConstructProps extends GObject.Object_ConstructProps {
}
class PluginRegistry {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Grl-0.1.Grl.PluginRegistry */
    /**
     * Add a configuration for a plugin/source.
     * @param config a configuration set
     */
    add_config(config: Config): boolean
    /**
     * Load plugin configurations from a .ini-like config file.
     * @param config_file a key-value file containing the configuration
     */
    add_config_from_file(config_file: string): boolean
    /**
     * Set this path as part of default paths to load plugins.
     * @param path a path with plugins
     */
    add_directory(path: string): void
    /**
     * Returns a list with all registered keys in system.
     * 
     * with all the available #GrlKeyID<!-- -->s. The content of the list should
     * not be modified or freed. Use g_list_free() when done using the list.
     */
    get_metadata_keys(): GObject.ParamSpec[]
    /**
     * This function will return all the available sources in the `registry`.
     * 
     * If `ranked` is %TRUE, the source list will be ordered by rank.
     * 
     * available #GrlMediaPlugins<!-- -->s. The content of the list should not be
     * modified or freed. Use g_list_free() when done using the list.
     * @param ranked whether the returned list shall be returned ordered by rank
     */
    get_sources(ranked: boolean): MediaPlugin[]
    /**
     * Give an array of all the available sources in the `registry` capable of
     * perform the operations requested in `ops`.
     * 
     * If `ranked` is %TRUE, the source list will be ordered by rank.
     * 
     * available #GrlMediaPlugins<!-- -->s. The content of the list should not be
     * modified or freed. Use g_list_free() when done using the list.
     * @param ops a bitwise mangle of the requested operations.
     * @param ranked whether the returned list shall be returned ordered by rank
     */
    get_sources_by_operations(ops: SupportedOps, ranked: boolean): MediaPlugin[]
    /**
     * Loads a module from shared object file stored in `path`
     * @param library_filename the path to the so file
     */
    load(library_filename: string): boolean
    /**
     * Load all the modules available in the default directory path.
     * 
     * The default directory path can be changed through the environment
     * variable %GRL_PLUGIN_PATH and it can contain several paths separated
     * by ":"
     * 
     * %TRUE% otherwise.
     */
    load_all(): boolean
    /**
     * Loads plugin identified by `plugin_id`.
     * 
     * This requires the XML plugin information file to define a "module" key with
     * the name of the module that provides the plugin or the absolute path of the
     * actual module file.
     * @param plugin_id plugin identifier
     */
    load_by_id(plugin_id: string): boolean
    /**
     * Loads a set of modules from directory in `path` which contains
     * a group shared object files.
     * @param path the path to the directory
     */
    load_directory(path: string): boolean
    /**
     * Look up for the metadata key with name `key_name`.
     * @param key_name the key name
     */
    lookup_metadata_key(key_name: string): GObject.ParamSpec
    /**
     * Look up the list of keys that have a relation with `key`.
     * 
     * `key` is included in that list.
     * 
     * related keys, or `NULL` if key is invalid.
     * @param key a metadata key
     */
    lookup_metadata_key_relation(key: KeyID): GObject.ParamSpec[]
    /**
     * This function will search and retrieve a source given its identifier.
     * @param source_id the id of a source
     */
    lookup_source(source_id: string): MediaPlugin
    /**
     * Registers a metadata key
     * 
     * or `NULL` on error.
     * @param key The key to register
     */
    register_metadata_key(key: GObject.ParamSpec): GObject.ParamSpec
    /**
     * Creates a relation between `key1` and `key2`, meaning that the values of both
     * keys are somehow related.
     * 
     * One example of a relation would be the one between the URI of a media
     * resource and its mime-type: they are both tied together and one does not make
     * sense without the other.
     * 
     * Relations between keys allow the framework to provide all the data that is
     * somehow related when any of the related keys are requested.
     * @param key1 key involved in relationship
     * @param key2 key involved in relationship
     */
    register_metadata_key_relation(key1: KeyID, key2: KeyID): void
    /**
     * Register a `source` in the `registry` with the given `plugin` information
     * @param plugin the descriptor of the plugin which owns the source
     * @param source the source to register
     */
    register_source(plugin: PluginInfo, source: MediaPlugin): boolean
    /**
     * Restrict the plugins that application sees to this list.
     * 
     * Other plugins will not be available for the application, unless it uses
     * directly #grl_plugin_registry_load() function.
     * @param plugins a `NULL-terminated` array of plugins identifiers
     */
    restrict_plugins(plugins: string): void
    /**
     * Unload from memory a module identified by `plugin_id`. This means call the
     * module's deinit function.
     * @param plugin_id the identifier of the plugin
     */
    unload(plugin_id: string): boolean
    /**
     * Removes the `source` from the `registry` hash table
     * @param source the source to unregister
     */
    unregister_source(source: MediaPlugin): boolean
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
    /* Signals of Grl-0.1.Grl.PluginRegistry */
    /**
     * Signals that a plugin has been added to the registry.
     * @param plugin the plugin that has been added
     */
    connect(sigName: "source-added", callback: (($obj: PluginRegistry, plugin: MediaPlugin) => void)): number
    connect_after(sigName: "source-added", callback: (($obj: PluginRegistry, plugin: MediaPlugin) => void)): number
    emit(sigName: "source-added", plugin: MediaPlugin): void
    /**
     * Signals that a plugin has been removed from the registry.
     * @param plugin the plugin that has been removed
     */
    connect(sigName: "source-removed", callback: (($obj: PluginRegistry, plugin: MediaPlugin) => void)): number
    connect_after(sigName: "source-removed", callback: (($obj: PluginRegistry, plugin: MediaPlugin) => void)): number
    emit(sigName: "source-removed", plugin: MediaPlugin): void
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
    connect(sigName: "notify", callback: (($obj: PluginRegistry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PluginRegistry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PluginRegistry_ConstructProps)
    _init (config?: PluginRegistry_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * As the registry is designed to work as a singleton, this
     * method is in charge of creating the only instance or
     * returned it if it is already in memory.
     * 
     * 
     * It is NOT MT-safe
     */
    static get_default(): PluginRegistry
    static $gtype: GObject.Type
}
interface RelatedKeys_ConstructProps extends GObject.Object_ConstructProps {
}
class RelatedKeys {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Grl-0.1.Grl.RelatedKeys */
    /**
     * Adds a new `key` to `relkeys,` with no value. If `key` already exists, it does
     * nothing.
     * @param key key to add
     */
    add(key: GObject.ParamSpec): void
    /**
     * Makes a deep copy of `relkeys` and its contents.
     * 
     * Free it with #g_object_unref.
     */
    dup(): RelatedKeys
    /**
     * Get the value associated with `key` from `relkeys`. If it does not contain any
     * value, %NULL will be returned.
     * 
     * freed by user.
     * @param key key to look up.
     */
    get(key: GObject.ParamSpec): any
    /**
     * Returns the value associated with `key` from `relkeys`. If `key` has no value,
     * or value is not a binary, or `key` is not in `relkeys,` then 0 is returned.
     * 
     * successful `size` will be set to the buffer size.
     * @param key key to use
     */
    get_binary(key: GObject.ParamSpec): [ /* returnType */ number, /* size */ number ]
    /**
     * Returns the value associated with `key` from `relkeys`. If `key` has no value,
     * or value is not a gfloat, or `key` is not in `relkeys,` then 0 is returned.
     * @param key key to use
     */
    get_float(key: GObject.ParamSpec): number
    /**
     * Returns the value associated with `key` from `relkeys`. If `key` has no value,
     * or value is not a gint, or `key` is not in `relkeys,` then 0 is returned.
     * @param key key to use
     */
    get_int(key: GObject.ParamSpec): number
    /**
     * Returns a list with keys contained in `relkeys`.
     * 
     * the keys. The content of the list should not be modified or freed. Use
     * g_list_free() when done using the list.
     */
    get_keys(): GObject.ParamSpec[]
    /**
     * Returns the value associated with `key` from `relkeys`. If `key` has no value,
     * or value is not string, or `key` is not in `relkeys,` then %NULL is returned.
     * 
     * not change nor free the value.
     * @param key key to use
     */
    get_string(key: GObject.ParamSpec): string
    /**
     * Checks if `key` is in `relkeys`.
     * @param key key to search
     */
    has_key(key: GObject.ParamSpec): boolean
    /**
     * Checks if `key` has a value in `relkeys`.
     * @param key key to search
     */
    key_is_known(key: GObject.ParamSpec): boolean
    /**
     * Sets the value associated with `key` into `relkeys`. Old value is freed and
     * the new one is set.
     * 
     * Also, checks that `value` is compliant with `key` specification, modifying it
     * accordingly. For instance, if `key` requires a number between 0 and 10, but
     * value is outside this range, it will be adapted accordingly.
     * @param key key to change or add
     * @param value the new value
     */
    set(key: GObject.ParamSpec, value: any): void
    /**
     * Sets the value associated with `key` into `relkeys`. `key` must have been
     * registered as a binary-type key. Old value is replaced by the new one.
     * @param key key to change or add
     * @param buf buffer holding the relkeys
     * @param size size of the buffer
     */
    set_binary(key: GObject.ParamSpec, buf: number, size: number): void
    /**
     * Sets the value associated with `key` into `relkeys`. `key` must have been
     * registered as a float-type key. Old value is replaced by the new one.
     * @param key key to change or add
     * @param floatvalue the new value
     */
    set_float(key: GObject.ParamSpec, floatvalue: number): void
    /**
     * Sets the value associated with `key` into `relkeys`. `key` must have been
     * registered as an int-type key. Old value is replaced by the new one.
     * @param key key to change or add
     * @param intvalue the new value
     */
    set_int(key: GObject.ParamSpec, intvalue: number): void
    /**
     * Sets the value associated with `key` into `relkeys`. `key` must have been
     * registered as a strying-type key. Old value is freed and the new one is set.
     * @param key key to change or add
     * @param strvalue the new value
     */
    set_string(key: GObject.ParamSpec, strvalue: string): void
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
    connect(sigName: "notify", callback: (($obj: RelatedKeys, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RelatedKeys, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RelatedKeys_ConstructProps)
    _init (config?: RelatedKeys_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RelatedKeys
    static $gtype: GObject.Type
}
abstract class ConfigClass {
    /* Fields of Grl-0.1.Grl.ConfigClass */
    parent_class: GObject.ObjectClass
    static name: string
}
class ConfigPrivate {
    static name: string
}
abstract class DataClass {
    /* Fields of Grl-0.1.Grl.DataClass */
    parent_class: GObject.ObjectClass
    static name: string
}
class DataPrivate {
    static name: string
}
class LogDomain {
    /* Methods of Grl-0.1.Grl.LogDomain */
    free(): void
    static name: string
}
abstract class MediaAudioClass {
    /* Fields of Grl-0.1.Grl.MediaAudioClass */
    parent_class: MediaClass
    static name: string
}
abstract class MediaBoxClass {
    /* Fields of Grl-0.1.Grl.MediaBoxClass */
    parent_class: MediaClass
    static name: string
}
abstract class MediaClass {
    /* Fields of Grl-0.1.Grl.MediaClass */
    parent_class: DataClass
    static name: string
}
abstract class MediaImageClass {
    /* Fields of Grl-0.1.Grl.MediaImageClass */
    parent_class: MediaClass
    static name: string
}
abstract class MediaPluginClass {
    /* Fields of Grl-0.1.Grl.MediaPluginClass */
    parent_class: GObject.ObjectClass
    static name: string
}
class MediaPluginPrivate {
    static name: string
}
class MediaSourceBrowseSpec {
    /* Fields of Grl-0.1.Grl.MediaSourceBrowseSpec */
    source: MediaSource
    browse_id: number
    container: Media
    keys: object[]
    skip: number
    count: number
    flags: MetadataResolutionFlags
    callback: MediaSourceResultCb
    user_data: object
    static name: string
}
abstract class MediaSourceClass {
    /* Fields of Grl-0.1.Grl.MediaSourceClass */
    parent_class: MetadataSourceClass
    browse: (source: MediaSource, bs: MediaSourceBrowseSpec) => void
    search: (source: MediaSource, ss: MediaSourceSearchSpec) => void
    query: (source: MediaSource, qs: MediaSourceQuerySpec) => void
    cancel: (source: MediaSource, operation_id: number) => void
    metadata: (source: MediaSource, ms: MediaSourceMetadataSpec) => void
    store: (source: MediaSource, ss: MediaSourceStoreSpec) => void
    remove: (source: MediaSource, ss: MediaSourceRemoveSpec) => void
    test_media_from_uri: (source: MediaSource, uri: string) => boolean
    media_from_uri: (source: MediaSource, mfss: MediaSourceMediaFromUriSpec) => void
    notify_change_start: (source: MediaSource) => boolean
    notify_change_stop: (source: MediaSource) => boolean
    static name: string
}
class MediaSourceMediaFromUriSpec {
    /* Fields of Grl-0.1.Grl.MediaSourceMediaFromUriSpec */
    source: MediaSource
    media_from_uri_id: number
    uri: string
    keys: object[]
    flags: MetadataResolutionFlags
    callback: MediaSourceMetadataCb
    user_data: object
    static name: string
}
class MediaSourceMetadataSpec {
    /* Fields of Grl-0.1.Grl.MediaSourceMetadataSpec */
    source: MediaSource
    metadata_id: number
    media: Media
    keys: object[]
    flags: MetadataResolutionFlags
    callback: MediaSourceMetadataCb
    user_data: object
    static name: string
}
class MediaSourcePrivate {
    static name: string
}
class MediaSourceQuerySpec {
    /* Fields of Grl-0.1.Grl.MediaSourceQuerySpec */
    source: MediaSource
    query_id: number
    query: string
    keys: object[]
    skip: number
    count: number
    flags: MetadataResolutionFlags
    callback: MediaSourceResultCb
    user_data: object
    static name: string
}
class MediaSourceRemoveSpec {
    /* Fields of Grl-0.1.Grl.MediaSourceRemoveSpec */
    source: MediaSource
    media_id: string
    media: Media
    callback: MediaSourceRemoveCb
    user_data: object
    static name: string
}
class MediaSourceSearchSpec {
    /* Fields of Grl-0.1.Grl.MediaSourceSearchSpec */
    source: MediaSource
    search_id: number
    text: string
    keys: object[]
    skip: number
    count: number
    flags: MetadataResolutionFlags
    callback: MediaSourceResultCb
    user_data: object
    static name: string
}
class MediaSourceStoreSpec {
    /* Fields of Grl-0.1.Grl.MediaSourceStoreSpec */
    source: MediaSource
    parent: MediaBox
    media: Media
    callback: MediaSourceStoreCb
    user_data: object
    static name: string
}
abstract class MediaVideoClass {
    /* Fields of Grl-0.1.Grl.MediaVideoClass */
    parent_class: MediaClass
    static name: string
}
abstract class MetadataSourceClass {
    /* Fields of Grl-0.1.Grl.MetadataSourceClass */
    parent_class: MediaPluginClass
    operation_id: number
    supported_operations: (source: MetadataSource) => SupportedOps
    supported_keys: (source: MetadataSource) => GObject.ParamSpec[]
    slow_keys: (source: MetadataSource) => GObject.ParamSpec[]
    key_depends: (source: MetadataSource, key_id: GObject.ParamSpec) => GObject.ParamSpec[]
    writable_keys: (source: MetadataSource) => GObject.ParamSpec[]
    resolve: (source: MetadataSource, rs: MetadataSourceResolveSpec) => void
    set_metadata: (source: MetadataSource, sms: MetadataSourceSetMetadataSpec) => void
    may_resolve: (source: MetadataSource, media: Media, key_id: KeyID) => [ /* returnType */ boolean, /* missing_keys */ KeyID[] ]
    cancel: (source: MetadataSource, operation_id: number) => void
    static name: string
}
class MetadataSourcePrivate {
    static name: string
}
class MetadataSourceResolveSpec {
    /* Fields of Grl-0.1.Grl.MetadataSourceResolveSpec */
    source: MetadataSource
    resolve_id: number
    keys: object[]
    media: Media
    flags: MetadataResolutionFlags
    callback: MetadataSourceResolveCb
    user_data: object
    static name: string
}
class MetadataSourceSetMetadataSpec {
    /* Fields of Grl-0.1.Grl.MetadataSourceSetMetadataSpec */
    source: MetadataSource
    media: Media
    keys: object[]
    flags: MetadataWritingFlags
    callback: MetadataSourceSetMetadataCb
    user_data: object
    failed_keys: object[]
    static name: string
}
class PluginDescriptor {
    /* Fields of Grl-0.1.Grl.PluginDescriptor */
    plugin_id: string
    plugin_deinit: () => void
    module: GModule.Module
    static name: string
}
class PluginInfo {
    /* Fields of Grl-0.1.Grl.PluginInfo */
    id: string
    filename: string
    optional_info: GLib.HashTable
    rank: number
    static name: string
}
abstract class PluginRegistryClass {
    /* Fields of Grl-0.1.Grl.PluginRegistryClass */
    parent_class: GObject.ObjectClass
    static name: string
}
class PluginRegistryPrivate {
    static name: string
}
abstract class RelatedKeysClass {
    /* Fields of Grl-0.1.Grl.RelatedKeysClass */
    parent_class: GObject.ObjectClass
    static name: string
}
class RelatedKeysPrivate {
    static name: string
}
    type KeyID = object
}
export default Grl;