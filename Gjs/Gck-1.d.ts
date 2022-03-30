/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gck-1
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Gck {

/**
 * Flags to be used with a [method`Builder`.init_full] and [ctor`Builder`.new].
 */
enum BuilderFlags {
    /**
     * no special flags
     */
    NONE,
    /**
     * use non-pageable memory for the values of the attributes
     */
    SECURE_MEMORY,
}
/**
 * Various error codes. All the `CKR_XXX` error codes from PKCS#11 are also
 * relevant error codes.
 * 
 * Note that errors are returned as [struct`GLib`.Error] structures. The `code`
 * member of the error then contains the raw PKCS#11 `CK_RV` result value.
 */
enum Error {
    /**
     * a result code that signifies there was a problem
     *                            loading a PKCS#11 module, usually a shared library
     */
    PROBLEM,
}
/**
 * Various error codes used with PKCS#11 URIs
 */
enum UriError {
    /**
     * invalid URI scheme
     */
    BAD_SCHEME,
    /**
     * bad URI encoding
     */
    BAD_ENCODING,
    /**
     * bad URI syntax
     */
    BAD_SYNTAX,
    /**
     * bad URI version component
     */
    BAD_VERSION,
    /**
     * piece of the URI was not found
     */
    NOT_FOUND,
}
/**
 * Options for creating sessions.
 */
enum SessionOptions {
    /**
     * Open session as read only
     */
    READ_ONLY,
    /**
     * Open sessions as read/write
     */
    READ_WRITE,
    /**
     * Login as user on new sessions
     */
    LOGIN_USER,
    /**
     * Authenticate as necessary
     */
    AUTHENTICATE,
}
/**
 * Which parts of the PKCS#11 URI will be parsed or formatted. These can be
 * combined.
 */
enum UriFlags {
    /**
     * the URI will be used to match objects.
     */
    FOR_OBJECT,
    /**
     * the URI will be used to match tokens.
     */
    FOR_TOKEN,
    /**
     * the URI will be used to match modules.
     */
    FOR_MODULE,
    /**
     * the URI has specific version numbers for module and/or token
     */
    WITH_VERSION,
    /**
     * parse all recognized components of the URI.
     */
    FOR_ANY,
}
/**
 * Used as a terminator at the end of variable argument lists.
 */
const INVALID: number
/**
 * The major version number of the Gck library.
 */
const MAJOR_VERSION: number
/**
 * The micro version number of the Gck library.
 */
const MICRO_VERSION: number
/**
 * The minor version number of the Gck library.
 */
const MINOR_VERSION: number
/**
 * The URI will match specific version of modules. To be used as a GckUriFlags argument.
 */
const URI_FOR_MODULE_WITH_VERSION: number
/**
 * The URI will match objects on a specific token. To be used as a GckUriFlags argument.
 */
const URI_FOR_OBJECT_ON_TOKEN: number
/**
 * The token inserted into a device with a specific module.
 */
const URI_FOR_OBJECT_ON_TOKEN_AND_MODULE: number
/**
 * Custom PKCS#11 errors that originate from the gck library, are
 * based at this error code.
 */
const VENDOR_CODE: number
function builder_unref(builder?: object | null): void
function error_get_quark(): GLib.Quark
function list_get_boxed_type(): GObject.Type
function message_from_rv(rv: number): string
function modules_enumerate_objects(modules: Module[], attrs: Attributes, session_options: SessionOptions): Enumerator
function modules_enumerate_uri(modules: Module[], uri: string, session_options: SessionOptions): Enumerator
function modules_get_slots(modules: Module[], token_present: boolean): Slot[]
function modules_initialize_registered(cancellable?: Gio.Cancellable | null): Module[]
function modules_initialize_registered_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function modules_initialize_registered_finish(result: Gio.AsyncResult): Module[]
function modules_object_for_uri(modules: Module[], uri: string, session_options: SessionOptions): Object | null
function modules_objects_for_uri(modules: Module[], uri: string, session_options: SessionOptions): Object[]
function modules_token_for_uri(modules: Module[], uri: string): Slot
function modules_tokens_for_uri(modules: Module[], uri: string): Slot[]
function objects_from_handle_array(session: Session, object_handles: number[]): Object[]
function slots_enumerate_objects(slots: Slot[], match: Attributes, options: SessionOptions): Enumerator
function uri_build(uri_data: UriData, flags: UriFlags): string
function uri_error_get_quark(): GLib.Quark
function uri_parse(string: string, flags: UriFlags): UriData
function value_to_boolean(value: Uint8Array): [ /* returnType */ boolean, /* result */ boolean ]
function value_to_ulong(value: Uint8Array): [ /* returnType */ boolean, /* result */ number ]
/**
 * An allocator used to allocate data for the attributes in this
 * [struct`Attributes]` set.
 * 
 * This is a function that acts like g_realloc. Specifically it frees when length is
 * set to zero, it allocates when data is set to %NULL, and it reallocates when both
 * are valid.
 */
interface Allocator {
    (data: object | null, length: number): object | null
}
interface ObjectCache_ConstructProps extends Object_ConstructProps {
    /* Constructor properties of Gck-1.Gck.ObjectCache */
    /**
     * The attributes cached on this object.
     */
    attributes?: Attributes
}
class ObjectCache {
    /* Properties of Gck-1.Gck.ObjectCache */
    /**
     * The attributes cached on this object.
     */
    attributes: Attributes
    /* Properties of Gck-1.Gck.Object */
    /**
     * The raw PKCS11 handle for this object.
     */
    readonly handle: number
    /**
     * The GckModule that this object belongs to.
     */
    readonly module: Module
    /**
     * The PKCS11 session to make calls on when this object needs to
     * perform operations on itself.
     * 
     * If this is NULL then a new session is opened for each operation,
     * such as gck_object_get(), gck_object_set() or gck_object_destroy().
     */
    readonly session: Session
    /* Fields of Gck-1.Gck.Object */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gck-1.Gck.ObjectCache */
    /**
     * Adds the attributes to the set cached on this object. If an attribute is
     * already present in the cache it will be overridden by this value.
     * 
     * This will be done in a thread-safe manner.
     * 
     * If the `attrs` #GckAttributes is floating, it is consumed.
     * @param attrs the attributes to cache
     */
    fill(attrs: Attributes): void
    /**
     * Sets the attributes cached on this object.
     * 
     * If the `attrs` #GckAttributes is floating, it is consumed.
     * @param attrs the attributes to set
     */
    set_attributes(attrs?: Attributes | null): void
    /**
     * Update the object cache with given attributes. If an attribute already
     * exists in the cache, it will be updated, and if it doesn't it will be added.
     * 
     * This may block, use the asynchronous version when this is not desirable
     * @param attr_types the types of attributes to update
     * @param cancellable optional cancellation object
     */
    update(attr_types: number[], cancellable?: Gio.Cancellable | null): boolean
    /**
     * Update the object cache with given attributes. If an attribute already
     * exists in the cache, it will be updated, and if it doesn't it will be added.
     * 
     * This call will return immediately and complete asynchronously.
     * @param attr_types the types of attributes to update
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    update_async(attr_types: number[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete an asynchronous operation to update the object cache with given
     * attributes.
     * @param result the asynchronous result passed to the callback
     */
    update_finish(result: Gio.AsyncResult): boolean
    /* Methods of Gck-1.Gck.Object */
    /**
     * Lookup attributes in the cache, or retrieve them from the object if necessary.
     * 
     * If `object` is a #GckObjectCache then this will lookup the attributes there
     * first if available, otherwise will read them from the object and update
     * the cache.
     * 
     * If `object` is not a #GckObjectCache, then the attributes will simply be
     * read from the object.
     * 
     * This may block, use the asynchronous version when this is not desirable
     * @param attr_types the types of attributes to update
     * @param cancellable optional cancellation object
     */
    cache_lookup(attr_types: number[], cancellable?: Gio.Cancellable | null): Attributes
    /**
     * Lookup attributes in the cache, or retrieve them from the object if necessary.
     * 
     * If `object` is a #GckObjectCache then this will lookup the attributes there
     * first if available, otherwise will read them from the object and update
     * the cache.
     * 
     * If `object` is not a #GckObjectCache, then the attributes will simply be
     * read from the object.
     * 
     * This will return immediately and complete asynchronously
     * @param attr_types the types of attributes to update
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    cache_lookup_async(attr_types: number[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete an operation to lookup attributes in the cache or retrieve them
     * from the object if necessary.
     * @param result the asynchrounous result passed to the callback
     */
    cache_lookup_finish(result: Gio.AsyncResult): Attributes
    /**
     * Destroy a PKCS#11 object, deleting it from storage or the session.
     * This call may block for an indefinite period.
     * @param cancellable Optional cancellable object, or %NULL to ignore.
     */
    destroy(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Destroy a PKCS#11 object, deleting it from storage or the session.
     * This call will return immediately and complete asynchronously.
     * @param cancellable Optional cancellable object, or %NULL to ignore.
     * @param callback Callback which is called when operation completes.
     */
    destroy_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Get the status of the operation to destroy a PKCS#11 object, begun with
     * gck_object_destroy_async().
     * @param result The result of the destory operation passed to the callback.
     */
    destroy_finish(result: Gio.AsyncResult): boolean
    /**
     * Checks equality of two objects. Two GckObject objects can point to the same
     * underlying PKCS#11 object.
     * @param object2 a pointer to the second #GckObject
     */
    equal(object2: Object): boolean
    /**
     * Get the specified attributes from the object. The attributes will be cleared
     * of their current values, and new attributes will be stored. The attributes
     * should not be accessed in any way except for referencing and unreferencing
     * them until gck_object_get_finish() is called.
     * 
     * This call returns immediately and completes asynchronously.
     * @param attr_types the types of the attributes to get
     * @param cancellable optional cancellation object, or %NULL
     * @param callback A callback which is called when the operation completes.
     */
    get_async(attr_types: number[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Get the data for the specified attribute from the object. For convenience
     * the returned data has a null terminator.
     * 
     * This call may block for an indefinite period.
     * @param attr_type The attribute to get data for.
     * @param cancellable A #GCancellable or %NULL
     */
    get_data(attr_type: number, cancellable?: Gio.Cancellable | null): Uint8Array
    /**
     * Get the data for the specified attribute from the object.
     * 
     * This call will return immediately and complete asynchronously.
     * @param attr_type The attribute to get data for.
     * @param allocator An allocator with which to allocate memory for the data, or %NULL for default.
     * @param cancellable Optional cancellation object, or %NULL.
     * @param callback Called when the operation completes.
     */
    get_data_async(attr_type: number, allocator: Allocator, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of an operation to get attribute data from
     * an object. For convenience the returned data has an extra null terminator,
     * not included in the returned length.
     * @param result The result passed to the callback.
     */
    get_data_finish(result: Gio.AsyncResult): Uint8Array
    /**
     * Get the result of a get operation and return specified attributes from
     * the object.
     * 
     * No extra references are added to the returned attributes pointer.
     * @param result The result passed to the callback.
     */
    get_finish(result: Gio.AsyncResult): Attributes
    /**
     * Get the specified attributes from the object. This call may
     * block for an indefinite period.
     * 
     * No extra references are added to the returned attributes pointer.
     * During this call you may not access the attributes in any way.
     * @param attr_types the types of the attributes to get
     * @param cancellable optional cancellation object, or %NULL
     */
    get_full(attr_types: number[], cancellable?: Gio.Cancellable | null): Attributes
    /**
     * Get the raw PKCS#11 handle of a GckObject.
     */
    get_handle(): number
    /**
     * Get the PKCS#11 module to which this object belongs.
     */
    get_module(): Module
    /**
     * Get the PKCS#11 session assigned to make calls on when operating
     * on this object.
     * 
     * This will only return a session if it was set explitly on this
     * object. By default an object will open and close sessions
     * appropriate for its calls.
     */
    get_session(): Session
    /**
     * Get an attribute template from the object. The attr_type must be for
     * an attribute which returns a template.
     * 
     * This call may block for an indefinite period.
     * @param attr_type The template attribute type.
     * @param cancellable Optional cancellation object, or %NULL.
     */
    get_template(attr_type: number, cancellable?: Gio.Cancellable | null): Attributes
    /**
     * Get an attribute template from the object. The `attr_type` must be for
     * an attribute which returns a template.
     * 
     * This call will return immediately and complete asynchronously.
     * @param attr_type The template attribute type.
     * @param cancellable Optional cancellation object, or %NULL.
     * @param callback Called when the operation completes.
     */
    get_template_async(attr_type: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of an operation to get attribute template from
     * an object.
     * @param result The result passed to the callback.
     */
    get_template_finish(result: Gio.AsyncResult): Attributes
    /**
     * Create a hash value for the GckObject.
     * 
     * This function is intended for easily hashing a GckObject to add to
     * a GHashTable or similar data structure.
     */
    hash(): number
    /**
     * Set PKCS#11 attributes on an object. This call may block for an indefinite period.
     * 
     * If the `attrs` #GckAttributes is floating, it is consumed.
     * @param attrs The attributes to set on the object.
     * @param cancellable Optional cancellable object, or %NULL to ignore.
     */
    set(attrs: Attributes, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Set PKCS#11 attributes on an object. This call will return
     * immediately and completes asynchronously.
     * 
     * If the `attrs` #GckAttributes is floating, it is consumed.
     * @param attrs The attributes to set on the object.
     * @param cancellable Optional cancellable object, or %NULL to ignore.
     * @param callback Callback which is called when operation completes.
     */
    set_async(attrs: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Get the status of the operation to set attributes on a PKCS#11 object,
     * begun with gck_object_set_async().
     * @param result The result of the destory operation passed to the callback.
     */
    set_finish(result: Gio.AsyncResult): boolean
    /**
     * Set an attribute template on the object. The attr_type must be for
     * an attribute which contains a template.
     * 
     * If the `attrs` #GckAttributes is floating, it is consumed.
     * 
     * This call may block for an indefinite period.
     * @param attr_type The attribute template type.
     * @param attrs The attribute template.
     * @param cancellable Optional cancellation object, or %NULL.
     */
    set_template(attr_type: number, attrs: Attributes, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Set an attribute template on the object. The attr_type must be for
     * an attribute which contains a template.
     * 
     * If the `attrs` #GckAttributes is floating, it is consumed.
     * 
     * This call will return immediately and complete asynchronously.
     * @param attr_type The attribute template type.
     * @param attrs The attribute template.
     * @param cancellable Optional cancellation object, or %NULL.
     * @param callback Called when the operation completes.
     */
    set_template_async(attr_type: number, attrs: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of an operation to set attribute template on
     * an object.
     * @param result The result passed to the callback.
     */
    set_template_finish(result: Gio.AsyncResult): boolean
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
    /* Virtual methods of Gck-1.Gck.ObjectCache */
    /**
     * Adds the attributes to the set cached on this object. If an attribute is
     * already present in the cache it will be overridden by this value.
     * 
     * This will be done in a thread-safe manner.
     * 
     * If the `attrs` #GckAttributes is floating, it is consumed.
     * @param attrs the attributes to cache
     */
    vfunc_fill(attrs: Attributes): void
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
    connect(sigName: "notify", callback: (($obj: ObjectCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ObjectCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::attributes", callback: (($obj: ObjectCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: ObjectCache, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::handle", callback: (($obj: ObjectCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handle", callback: (($obj: ObjectCache, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::module", callback: (($obj: ObjectCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::module", callback: (($obj: ObjectCache, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::session", callback: (($obj: ObjectCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session", callback: (($obj: ObjectCache, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ObjectCache_ConstructProps)
    _init (config?: ObjectCache_ConstructProps): void
    static $gtype: GObject.Type
}
interface Enumerator_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gck-1.Gck.Enumerator */
    /**
     * Chained enumerator, which will be enumerated when this enumerator
     * has enumerated all its objects.
     */
    chained?: Enumerator
    /**
     * Interaction object used to ask the user for pins when opening
     * sessions. Used if the session_options of the enumerator have
     * %GCK_SESSION_LOGIN_USER
     */
    interaction?: Gio.TlsInteraction
}
class Enumerator {
    /* Properties of Gck-1.Gck.Enumerator */
    /**
     * Chained enumerator, which will be enumerated when this enumerator
     * has enumerated all its objects.
     */
    chained: Enumerator
    /**
     * Interaction object used to ask the user for pins when opening
     * sessions. Used if the session_options of the enumerator have
     * %GCK_SESSION_LOGIN_USER
     */
    interaction: Gio.TlsInteraction
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gck-1.Gck.Enumerator */
    /**
     * Get the enumerator that will be run after all objects from this one
     * are seen.
     */
    get_chained(): Enumerator | null
    /**
     * Get the interaction used when a pin is needed
     */
    get_interaction(): Gio.TlsInteraction | null
    /**
     * Get the type of objects created by this enumerator. The type will always
     * either be #GckObject or derived from it.
     */
    get_object_type(): GObject.Type
    /**
     * Get the next object in the enumerator, or %NULL if there are no more objects.
     * 
     * %NULL is also returned if the function fails. Use the `error` to determine
     * whether a failure occurred or not.
     * @param cancellable A #GCancellable or %NULL
     */
    next(cancellable?: Gio.Cancellable | null): Object | null
    /**
     * Get the next set of objects from the enumerator. This operation completes
     * asynchronously.The maximum number of objects can be specified with
     * `max_objects`. If -1 is specified, then all the remaining objects will be
     * enumerated.
     * @param max_objects The maximum number of objects to get
     * @param cancellable A #GCancellable or %NULL
     * @param callback Called when the result is ready
     */
    next_async(max_objects: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete an operation to enumerate next objects.
     * 
     * %NULL is also returned if the function fails. Use the `error` to determine
     * whether a failure occurred or not.
     * @param result The result passed to the callback
     */
    next_finish(result: Gio.AsyncResult): Object[]
    /**
     * Get the next set of objects from the enumerator. The maximum number of
     * objects can be specified with `max_objects`. If -1 is specified, then all
     * the remaining objects will be returned.
     * 
     * %NULL is also returned if the function fails. Use the `error` to determine
     * whether a failure occurred or not.
     * @param max_objects The maximum amount of objects to enumerate
     * @param cancellable A #GCancellable or %NULL
     */
    next_n(max_objects: number, cancellable?: Gio.Cancellable | null): Object[]
    /**
     * Set a chained enumerator that will be run after all objects from this one
     * are seen.
     * @param chained the chained enumerator or %NULL
     */
    set_chained(chained?: Enumerator | null): void
    /**
     * Set the interaction used when a pin is needed
     * @param interaction the interaction or %NULL
     */
    set_interaction(interaction?: Gio.TlsInteraction | null): void
    /**
     * Set the type of objects to be created by this enumerator. The type must
     * always be either #GckObject or derived from it.
     * 
     * If `attr_types` and `attr_count` are non-NULL and non-zero respectively,
     * then the #GckObjectCache interface is expected to be implemented on the
     * derived class, then the enumerator will retrieve attributes for each object.
     * @param object_type the type of objects to create
     * @param attr_types types of attributes to retrieve for objects
     */
    set_object_type(object_type: GObject.Type, attr_types: number[]): void
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
    connect(sigName: "notify", callback: (($obj: Enumerator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Enumerator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::chained", callback: (($obj: Enumerator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chained", callback: (($obj: Enumerator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interaction", callback: (($obj: Enumerator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interaction", callback: (($obj: Enumerator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Enumerator_ConstructProps)
    _init (config?: Enumerator_ConstructProps): void
    static $gtype: GObject.Type
}
interface Module_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gck-1.Gck.Module */
    /**
     * The raw PKCS&num;11 function list for the module.
     * 
     * This points to a CK_FUNCTION_LIST structure.
     */
    functions?: object
    /**
     * The PKCS&num;11 module file path.
     * 
     * This may be set to NULL if this object was created from an already
     * initialized module via the gck_module_new() function.
     */
    path?: string
}
class Module {
    /* Properties of Gck-1.Gck.Module */
    /**
     * The raw PKCS&num;11 function list for the module.
     * 
     * This points to a CK_FUNCTION_LIST structure.
     */
    readonly functions: object
    /**
     * The PKCS&num;11 module file path.
     * 
     * This may be set to NULL if this object was created from an already
     * initialized module via the gck_module_new() function.
     */
    readonly path: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gck-1.Gck.Module */
    /**
     * Checks equality of two modules. Two GckModule objects can point to the same
     * underlying PKCS#11 module.
     * @param module2 a pointer to the second #GckModule
     */
    equal(module2: Module): boolean
    /**
     * Get the info about a PKCS#11 module.
     */
    get_info(): ModuleInfo
    /**
     * Get the file path of this module. This may not be an absolute path, and
     * usually reflects the path passed to [func`Module`.initialize].
     */
    get_path(): string
    /**
     * Get the GckSlot objects for a given module.
     * @param token_present Whether to limit only to slots with a token present.
     */
    get_slots(token_present: boolean): Slot[]
    /**
     * Create a hash value for the GckModule.
     * 
     * This function is intended for easily hashing a [class`Module]` to add to
     * a [struct`GLib`.HashTable] or similar data structure.
     */
    hash(): number
    /**
     * Check whether the PKCS#11 URI matches the module
     * @param uri the uri to match against the module
     */
    match(uri: UriData): boolean
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
    /* Virtual methods of Gck-1.Gck.Module */
    vfunc_authenticate_object(object: Object, label: string, password: string): boolean
    vfunc_authenticate_slot(slot: Slot, label: string, password: string): boolean
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
    /* Signals of Gck-1.Gck.Module */
    /**
     * Use gck_session_set_interaction() instead of connecting to this signal.
     * @param object The object to be authenticated.
     * @param label A displayable label which describes the object.
     * @param password A gchar** where a password should be returned.
     */
    connect(sigName: "authenticate-object", callback: (($obj: Module, object: Object, label: string, password?: object | null) => boolean)): number
    connect_after(sigName: "authenticate-object", callback: (($obj: Module, object: Object, label: string, password?: object | null) => boolean)): number
    emit(sigName: "authenticate-object", object: Object, label: string, password?: object | null): void
    /**
     * Use gck_session_set_interaction() instead of connecting to this signal.
     * @param slot The slot to be authenticated.
     * @param string A displayable label which describes the object.
     * @param password A gchar** where a password should be returned.
     */
    connect(sigName: "authenticate-slot", callback: (($obj: Module, slot: Slot, string: string, password?: object | null) => boolean)): number
    connect_after(sigName: "authenticate-slot", callback: (($obj: Module, slot: Slot, string: string, password?: object | null) => boolean)): number
    emit(sigName: "authenticate-slot", slot: Slot, string: string, password?: object | null): void
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
    connect(sigName: "notify", callback: (($obj: Module, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Module, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::functions", callback: (($obj: Module, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::functions", callback: (($obj: Module, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::path", callback: (($obj: Module, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: Module, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Module_ConstructProps)
    _init (config?: Module_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Load and initialize a PKCS#11 module represented by a GckModule object.
     * @param path The file system path to the PKCS#11 module to load.
     * @param cancellable optional cancellation object
     */
    static initialize(path: string, cancellable?: Gio.Cancellable | null): Module
    /**
     * Asynchronously load and initialize a PKCS#11 module represented by a
     * [class`Module]` object.
     * @param path the file system path to the PKCS#11 module to load
     * @param cancellable optional cancellation object
     * @param callback a callback which will be called when the operation completes
     */
    static initialize_async(path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the asynchronous initialize operation.
     * @param result the asynchronous result
     */
    static initialize_finish(result: Gio.AsyncResult): Module | null
    static $gtype: GObject.Type
}
interface Object_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gck-1.Gck.Object */
    /**
     * The raw PKCS11 handle for this object.
     */
    handle?: number
    /**
     * The GckModule that this object belongs to.
     */
    module?: Module
    /**
     * The PKCS11 session to make calls on when this object needs to
     * perform operations on itself.
     * 
     * If this is NULL then a new session is opened for each operation,
     * such as gck_object_get(), gck_object_set() or gck_object_destroy().
     */
    session?: Session
}
class Object {
    /* Properties of Gck-1.Gck.Object */
    /**
     * The raw PKCS11 handle for this object.
     */
    readonly handle: number
    /**
     * The GckModule that this object belongs to.
     */
    readonly module: Module
    /**
     * The PKCS11 session to make calls on when this object needs to
     * perform operations on itself.
     * 
     * If this is NULL then a new session is opened for each operation,
     * such as gck_object_get(), gck_object_set() or gck_object_destroy().
     */
    readonly session: Session
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gck-1.Gck.Object */
    /**
     * Lookup attributes in the cache, or retrieve them from the object if necessary.
     * 
     * If `object` is a #GckObjectCache then this will lookup the attributes there
     * first if available, otherwise will read them from the object and update
     * the cache.
     * 
     * If `object` is not a #GckObjectCache, then the attributes will simply be
     * read from the object.
     * 
     * This may block, use the asynchronous version when this is not desirable
     * @param attr_types the types of attributes to update
     * @param cancellable optional cancellation object
     */
    cache_lookup(attr_types: number[], cancellable?: Gio.Cancellable | null): Attributes
    /**
     * Lookup attributes in the cache, or retrieve them from the object if necessary.
     * 
     * If `object` is a #GckObjectCache then this will lookup the attributes there
     * first if available, otherwise will read them from the object and update
     * the cache.
     * 
     * If `object` is not a #GckObjectCache, then the attributes will simply be
     * read from the object.
     * 
     * This will return immediately and complete asynchronously
     * @param attr_types the types of attributes to update
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    cache_lookup_async(attr_types: number[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete an operation to lookup attributes in the cache or retrieve them
     * from the object if necessary.
     * @param result the asynchrounous result passed to the callback
     */
    cache_lookup_finish(result: Gio.AsyncResult): Attributes
    /**
     * Destroy a PKCS#11 object, deleting it from storage or the session.
     * This call may block for an indefinite period.
     * @param cancellable Optional cancellable object, or %NULL to ignore.
     */
    destroy(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Destroy a PKCS#11 object, deleting it from storage or the session.
     * This call will return immediately and complete asynchronously.
     * @param cancellable Optional cancellable object, or %NULL to ignore.
     * @param callback Callback which is called when operation completes.
     */
    destroy_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Get the status of the operation to destroy a PKCS#11 object, begun with
     * gck_object_destroy_async().
     * @param result The result of the destory operation passed to the callback.
     */
    destroy_finish(result: Gio.AsyncResult): boolean
    /**
     * Checks equality of two objects. Two GckObject objects can point to the same
     * underlying PKCS#11 object.
     * @param object2 a pointer to the second #GckObject
     */
    equal(object2: Object): boolean
    /**
     * Get the specified attributes from the object. The attributes will be cleared
     * of their current values, and new attributes will be stored. The attributes
     * should not be accessed in any way except for referencing and unreferencing
     * them until gck_object_get_finish() is called.
     * 
     * This call returns immediately and completes asynchronously.
     * @param attr_types the types of the attributes to get
     * @param cancellable optional cancellation object, or %NULL
     * @param callback A callback which is called when the operation completes.
     */
    get_async(attr_types: number[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Get the data for the specified attribute from the object. For convenience
     * the returned data has a null terminator.
     * 
     * This call may block for an indefinite period.
     * @param attr_type The attribute to get data for.
     * @param cancellable A #GCancellable or %NULL
     */
    get_data(attr_type: number, cancellable?: Gio.Cancellable | null): Uint8Array
    /**
     * Get the data for the specified attribute from the object.
     * 
     * This call will return immediately and complete asynchronously.
     * @param attr_type The attribute to get data for.
     * @param allocator An allocator with which to allocate memory for the data, or %NULL for default.
     * @param cancellable Optional cancellation object, or %NULL.
     * @param callback Called when the operation completes.
     */
    get_data_async(attr_type: number, allocator: Allocator, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of an operation to get attribute data from
     * an object. For convenience the returned data has an extra null terminator,
     * not included in the returned length.
     * @param result The result passed to the callback.
     */
    get_data_finish(result: Gio.AsyncResult): Uint8Array
    /**
     * Get the result of a get operation and return specified attributes from
     * the object.
     * 
     * No extra references are added to the returned attributes pointer.
     * @param result The result passed to the callback.
     */
    get_finish(result: Gio.AsyncResult): Attributes
    /**
     * Get the specified attributes from the object. This call may
     * block for an indefinite period.
     * 
     * No extra references are added to the returned attributes pointer.
     * During this call you may not access the attributes in any way.
     * @param attr_types the types of the attributes to get
     * @param cancellable optional cancellation object, or %NULL
     */
    get_full(attr_types: number[], cancellable?: Gio.Cancellable | null): Attributes
    /**
     * Get the raw PKCS#11 handle of a GckObject.
     */
    get_handle(): number
    /**
     * Get the PKCS#11 module to which this object belongs.
     */
    get_module(): Module
    /**
     * Get the PKCS#11 session assigned to make calls on when operating
     * on this object.
     * 
     * This will only return a session if it was set explitly on this
     * object. By default an object will open and close sessions
     * appropriate for its calls.
     */
    get_session(): Session
    /**
     * Get an attribute template from the object. The attr_type must be for
     * an attribute which returns a template.
     * 
     * This call may block for an indefinite period.
     * @param attr_type The template attribute type.
     * @param cancellable Optional cancellation object, or %NULL.
     */
    get_template(attr_type: number, cancellable?: Gio.Cancellable | null): Attributes
    /**
     * Get an attribute template from the object. The `attr_type` must be for
     * an attribute which returns a template.
     * 
     * This call will return immediately and complete asynchronously.
     * @param attr_type The template attribute type.
     * @param cancellable Optional cancellation object, or %NULL.
     * @param callback Called when the operation completes.
     */
    get_template_async(attr_type: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of an operation to get attribute template from
     * an object.
     * @param result The result passed to the callback.
     */
    get_template_finish(result: Gio.AsyncResult): Attributes
    /**
     * Create a hash value for the GckObject.
     * 
     * This function is intended for easily hashing a GckObject to add to
     * a GHashTable or similar data structure.
     */
    hash(): number
    /**
     * Set PKCS#11 attributes on an object. This call may block for an indefinite period.
     * 
     * If the `attrs` #GckAttributes is floating, it is consumed.
     * @param attrs The attributes to set on the object.
     * @param cancellable Optional cancellable object, or %NULL to ignore.
     */
    set(attrs: Attributes, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Set PKCS#11 attributes on an object. This call will return
     * immediately and completes asynchronously.
     * 
     * If the `attrs` #GckAttributes is floating, it is consumed.
     * @param attrs The attributes to set on the object.
     * @param cancellable Optional cancellable object, or %NULL to ignore.
     * @param callback Callback which is called when operation completes.
     */
    set_async(attrs: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Get the status of the operation to set attributes on a PKCS#11 object,
     * begun with gck_object_set_async().
     * @param result The result of the destory operation passed to the callback.
     */
    set_finish(result: Gio.AsyncResult): boolean
    /**
     * Set an attribute template on the object. The attr_type must be for
     * an attribute which contains a template.
     * 
     * If the `attrs` #GckAttributes is floating, it is consumed.
     * 
     * This call may block for an indefinite period.
     * @param attr_type The attribute template type.
     * @param attrs The attribute template.
     * @param cancellable Optional cancellation object, or %NULL.
     */
    set_template(attr_type: number, attrs: Attributes, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Set an attribute template on the object. The attr_type must be for
     * an attribute which contains a template.
     * 
     * If the `attrs` #GckAttributes is floating, it is consumed.
     * 
     * This call will return immediately and complete asynchronously.
     * @param attr_type The attribute template type.
     * @param attrs The attribute template.
     * @param cancellable Optional cancellation object, or %NULL.
     * @param callback Called when the operation completes.
     */
    set_template_async(attr_type: number, attrs: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of an operation to set attribute template on
     * an object.
     * @param result The result passed to the callback.
     */
    set_template_finish(result: Gio.AsyncResult): boolean
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
    connect(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::handle", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handle", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::module", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::module", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::session", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static from_handle(session: Session, object_handle: number): Object
    static $gtype: GObject.Type
}
interface Password_ConstructProps extends Gio.TlsPassword_ConstructProps {
    /* Constructor properties of Gck-1.Gck.Password */
    /**
     * The PKCS#11 key that the password is being requested for. If this
     * is set then the GckPassword:token property will be %NULL
     */
    key?: Object
    /**
     * The PKCS#11 token the password is for, if this is set then
     * the GckPassword:object property will be %NULL
     */
    token?: Slot
}
class Password {
    /* Properties of Gck-1.Gck.Password */
    /**
     * The PKCS#11 key that the password is being requested for. If this
     * is set then the GckPassword:token property will be %NULL
     */
    readonly key: Object
    /**
     * The PKCS#11 module that is requesting the password
     */
    readonly module: Module
    /**
     * The PKCS#11 token the password is for, if this is set then
     * the GckPassword:object property will be %NULL
     */
    readonly token: Slot
    /* Properties of Gio-2.0.Gio.TlsPassword */
    description: string
    flags: Gio.TlsPasswordFlags
    warning: string
    /* Fields of Gio-2.0.Gio.TlsPassword */
    parent_instance: GObject.Object
    priv: Gio.TlsPasswordPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gck-1.Gck.Password */
    /**
     * If the password request is to unlock a PKCS#11 key, then this is the
     * the object representing that key.
     */
    get_key(): Object
    /**
     * Get the PKCS#11 module that is requesting the password.
     */
    get_module(): Module
    /**
     * If the password request is to unlock a PKCS#11 token, then this is the
     * slot containing that token.
     */
    get_token(): Slot
    /* Methods of Gio-2.0.Gio.TlsPassword */
    /**
     * Get a description string about what the password will be used for.
     */
    get_description(): string
    /**
     * Get flags about the password.
     */
    get_flags(): Gio.TlsPasswordFlags
    /**
     * Get the password value. If `length` is not %NULL then it will be
     * filled in with the length of the password value. (Note that the
     * password value is not nul-terminated, so you can only pass %NULL
     * for `length` in contexts where you know the password will have a
     * certain fixed length.)
     */
    get_value(): Uint8Array
    /**
     * Get a user readable translated warning. Usually this warning is a
     * representation of the password flags returned from
     * g_tls_password_get_flags().
     */
    get_warning(): string
    /**
     * Set a description string about what the password will be used for.
     * @param description The description of the password
     */
    set_description(description: string): void
    /**
     * Set flags about the password.
     * @param flags The flags about the password
     */
    set_flags(flags: Gio.TlsPasswordFlags): void
    /**
     * Set the value for this password. The `value` will be copied by the password
     * object.
     * 
     * Specify the `length,` for a non-nul-terminated password. Pass -1 as
     * `length` if using a nul-terminated password, and `length` will be
     * calculated automatically. (Note that the terminating nul is not
     * considered part of the password in this case.)
     * @param value the new password value
     */
    set_value(value: Uint8Array): void
    /**
     * Provide the value for this password.
     * 
     * The `value` will be owned by the password object, and later freed using
     * the `destroy` function callback.
     * 
     * Specify the `length,` for a non-nul-terminated password. Pass -1 as
     * `length` if using a nul-terminated password, and `length` will be
     * calculated automatically. (Note that the terminating nul is not
     * considered part of the password in this case.)
     * @param value the value for the password
     * @param destroy a function to use to free the password.
     */
    set_value_full(value: Uint8Array, destroy?: GLib.DestroyNotify | null): void
    /**
     * Set a user readable translated warning. Usually this warning is a
     * representation of the password flags returned from
     * g_tls_password_get_flags().
     * @param warning The user readable warning
     */
    set_warning(warning: string): void
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
    /* Virtual methods of Gio-2.0.Gio.TlsPassword */
    vfunc_get_default_warning(): string
    /**
     * Get the password value. If `length` is not %NULL then it will be
     * filled in with the length of the password value. (Note that the
     * password value is not nul-terminated, so you can only pass %NULL
     * for `length` in contexts where you know the password will have a
     * certain fixed length.)
     */
    vfunc_get_value(): Uint8Array
    /**
     * Provide the value for this password.
     * 
     * The `value` will be owned by the password object, and later freed using
     * the `destroy` function callback.
     * 
     * Specify the `length,` for a non-nul-terminated password. Pass -1 as
     * `length` if using a nul-terminated password, and `length` will be
     * calculated automatically. (Note that the terminating nul is not
     * considered part of the password in this case.)
     * @param value the value for the password
     * @param destroy a function to use to free the password.
     */
    vfunc_set_value(value: Uint8Array, destroy?: GLib.DestroyNotify | null): void
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
    connect(sigName: "notify", callback: (($obj: Password, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Password, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::key", callback: (($obj: Password, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key", callback: (($obj: Password, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::module", callback: (($obj: Password, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::module", callback: (($obj: Password, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::token", callback: (($obj: Password, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::token", callback: (($obj: Password, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: Password, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Password, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::flags", callback: (($obj: Password, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Password, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::warning", callback: (($obj: Password, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning", callback: (($obj: Password, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Password_ConstructProps)
    _init (config?: Password_ConstructProps): void
    static $gtype: GObject.Type
}
interface Session_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gck-1.Gck.Session */
    /**
     * Raw PKCS#11 application data used to open the PKCS#11 session.
     */
    app_data?: object
    /**
     * The raw CK_SESSION_HANDLE handle of this session.
     */
    handle?: number
    /**
     * Interaction object used to ask the user for pins when opening
     * sessions. Used if the session_options of the enumerator have
     * %GCK_SESSION_LOGIN_USER
     */
    interaction?: Gio.TlsInteraction
    /**
     * Raw PKCS#11 flags used to open the PKCS#11 session.
     */
    opening_flags?: number
    /**
     * The options this session was opened with.
     */
    options?: SessionOptions
    /**
     * The GckSlot this session is opened on.
     */
    slot?: Slot
}
class Session {
    /* Properties of Gck-1.Gck.Session */
    /**
     * Raw PKCS#11 application data used to open the PKCS#11 session.
     */
    readonly app_data: object
    /**
     * The raw CK_SESSION_HANDLE handle of this session.
     */
    readonly handle: number
    /**
     * Interaction object used to ask the user for pins when opening
     * sessions. Used if the session_options of the enumerator have
     * %GCK_SESSION_LOGIN_USER
     */
    interaction: Gio.TlsInteraction
    /**
     * The GckModule that this session is opened on.
     */
    readonly module: Module
    /**
     * Raw PKCS#11 flags used to open the PKCS#11 session.
     */
    readonly opening_flags: number
    /**
     * The options this session was opened with.
     */
    readonly options: SessionOptions
    /**
     * The GckSlot this session is opened on.
     */
    readonly slot: Slot
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gck-1.Gck.Session */
    /**
     * Create a new PKCS#11 object. This call may block for an
     * indefinite period.
     * 
     * If the `attrs` #GckAttributes is floating, it is consumed.
     * @param attrs The attributes to create the object with.
     * @param cancellable Optional cancellation object, or %NULL.
     */
    create_object(attrs: Attributes, cancellable?: Gio.Cancellable | null): Object
    /**
     * Create a new PKCS#11 object. This call will return immediately
     * and complete asynchronously.
     * 
     * If `attrs` is a floating reference, it is consumed.
     * @param attrs The attributes to create the object with.
     * @param cancellable Optional cancellation object or %NULL.
     * @param callback Called when the operation completes.
     */
    create_object_async(attrs: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of creating a new PKCS#11 object.
     * @param result The result passed to the callback.
     */
    create_object_finish(result: Gio.AsyncResult): Object
    /**
     * Decrypt data in a mechanism specific manner. This call may
     * block for an indefinite period.
     * @param key The key to decrypt with.
     * @param mech_type The mechanism type to use for decryption.
     * @param input data to decrypt
     * @param cancellable Optional cancellation object, or %NULL
     */
    decrypt(key: Object, mech_type: number, input: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    /**
     * Decrypt data in a mechanism specific manner. This call will
     * return immediately and complete asynchronously.
     * @param key The key to decrypt with.
     * @param mechanism The mechanism type and parameters to use for decryption.
     * @param input data to decrypt
     * @param cancellable A GCancellable which can be used to cancel the operation.
     * @param callback Called when the operation completes.
     */
    decrypt_async(key: Object, mechanism: Mechanism, input: Uint8Array, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of an decryption operation.
     * @param result The result object passed to the callback.
     */
    decrypt_finish(result: Gio.AsyncResult): Uint8Array
    /**
     * Decrypt data in a mechanism specific manner. This call may
     * block for an indefinite period.
     * @param key The key to decrypt with.
     * @param mechanism The mechanism type and parameters to use for decryption.
     * @param input data to decrypt
     * @param cancellable A GCancellable which can be used to cancel the operation.
     */
    decrypt_full(key: Object, mechanism: Mechanism, input: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    /**
     * Derive a key from another key. This call may block for an
     * indefinite period.
     * 
     * If the `attrs` #GckAttributes is floating, it is consumed.
     * @param base The key to derive from.
     * @param mech_type The mechanism to use for derivation.
     * @param attrs Additional attributes for the derived key.
     * @param cancellable Optional cancellation object, or %NULL.
     */
    derive_key(base: Object, mech_type: number, attrs: Attributes, cancellable?: Gio.Cancellable | null): Object
    /**
     * Derive a key from another key. This call will
     * return immediately and complete asynchronously.
     * 
     * If the `attrs` #GckAttributes is floating, it is consumed.
     * @param base The key to derive from.
     * @param mechanism The mechanism to use for derivation.
     * @param attrs Additional attributes for the derived key.
     * @param cancellable Optional cancellation object or %NULL.
     * @param callback Called when the operation completes.
     */
    derive_key_async(base: Object, mechanism: Mechanism, attrs: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of a derive key operation.
     * @param result The async result passed to the callback.
     */
    derive_key_finish(result: Gio.AsyncResult): Object
    /**
     * Derive a key from another key. This call may block for an
     * indefinite period.
     * 
     * If the `attrs` #GckAttributes is floating, it is consumed.
     * @param base The key to derive from.
     * @param mechanism The mechanism to use for derivation.
     * @param attrs Additional attributes for the derived key.
     * @param cancellable Optional cancellation object, or %NULL.
     */
    derive_key_full(base: Object, mechanism: Mechanism, attrs: Attributes, cancellable?: Gio.Cancellable | null): Object
    /**
     * Encrypt data in a mechanism specific manner. This call may
     * block for an indefinite period.
     * @param key The key to encrypt with.
     * @param mech_type The mechanism type to use for encryption.
     * @param input the data to encrypt
     * @param cancellable Optional cancellation object, or %NULL
     */
    encrypt(key: Object, mech_type: number, input: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    /**
     * Encrypt data in a mechanism specific manner. This call will
     * return immediately and complete asynchronously.
     * @param key The key to encrypt with.
     * @param mechanism The mechanism type and parameters to use for encryption.
     * @param input the data to encrypt
     * @param cancellable A GCancellable which can be used to cancel the operation.
     * @param callback Called when the operation completes.
     */
    encrypt_async(key: Object, mechanism: Mechanism, input: Uint8Array, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of an encryption operation.
     * @param result The result object passed to the callback.
     */
    encrypt_finish(result: Gio.AsyncResult): Uint8Array
    /**
     * Encrypt data in a mechanism specific manner. This call may
     * block for an indefinite period.
     * @param key The key to encrypt with.
     * @param mechanism The mechanism type and parameters to use for encryption.
     * @param input the data to encrypt
     * @param cancellable A GCancellable which can be used to cancel the operation.
     */
    encrypt_full(key: Object, mechanism: Mechanism, input: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    /**
     * Setup an enumerator for listing matching objects available via this session.
     * 
     * If `match` is a floating reference, it is consumed.
     * 
     * This call will not block but will return an enumerator immediately.
     * @param match attributes that the objects must match, or empty for all objects
     */
    enumerate_objects(match: Attributes): Enumerator
    /**
     * Find the objects matching the passed attributes. This call may
     * block for an indefinite period.
     * 
     * If `match` is a floating reference, it is consumed.
     * @param match the attributes to match against objects
     * @param cancellable optional cancellation object or %NULL
     */
    find_handles(match: Attributes, cancellable?: Gio.Cancellable | null): number[] | null
    /**
     * Find the objects matching the passed attributes. This call will
     * return immediately and complete asynchronously.
     * 
     * If `match` is a floating reference, it is consumed.
     * @param match the attributes to match against the objects
     * @param cancellable optional cancellation object or %NULL
     * @param callback called when the operation completes
     */
    find_handles_async(match: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of a find handles operation.
     * @param result the asynchronous result
     */
    find_handles_finish(result: Gio.AsyncResult): number[] | null
    /**
     * Find the objects matching the passed attributes. This call may
     * block for an indefinite period.
     * 
     * If `match` is a floating reference, it is consumed.
     * @param match the attributes to match
     * @param cancellable Optional cancellation object or %NULL.
     */
    find_objects(match: Attributes, cancellable?: Gio.Cancellable | null): Object[]
    /**
     * Find the objects matching the passed attributes. This call will
     * return immediately and complete asynchronously.
     * 
     * If the `match` #GckAttributes is floating, it is consumed.
     * @param match The attributes to match.
     * @param cancellable Optional cancellation object or %NULL.
     * @param callback Called when the operation completes.
     */
    find_objects_async(match: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of a find operation.
     * @param result The attributes to match.
     */
    find_objects_finish(result: Gio.AsyncResult): Object[]
    /**
     * Generate a new key pair of public and private keys. This call may block for
     * an indefinite period.
     * 
     * If `public_attrs` and/or `private_attrs` is a floating reference, it is
     * consumed.
     * @param mech_type The mechanism type to use for key generation.
     * @param public_attrs Additional attributes for the generated public key.
     * @param private_attrs Additional attributes for the generated private key.
     * @param cancellable Optional cancellation object, or %NULL.
     */
    generate_key_pair(mech_type: number, public_attrs: Attributes, private_attrs: Attributes, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* public_key */ Object | null, /* private_key */ Object | null ]
    /**
     * Generate a new key pair of public and private keys. This call will
     * return immediately and complete asynchronously.
     * 
     * If `public_attrs` and/or `private_attrs` is a floating reference, it is
     * consumed.
     * @param mechanism The mechanism to use for key generation.
     * @param public_attrs Additional attributes for the generated public key.
     * @param private_attrs Additional attributes for the generated private key.
     * @param cancellable Optional cancellation object or %NULL.
     * @param callback Called when the operation completes.
     */
    generate_key_pair_async(mechanism: Mechanism, public_attrs: Attributes, private_attrs: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of a generate key pair operation.
     * @param result The async result passed to the callback.
     */
    generate_key_pair_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* public_key */ Object | null, /* private_key */ Object | null ]
    /**
     * Generate a new key pair of public and private keys. This call may block for an
     * indefinite period.
     * 
     * If `public_attrs` and/or `private_attrs` is a floating reference, it is
     * consumed.
     * @param mechanism The mechanism to use for key generation.
     * @param public_attrs Additional attributes for the generated public key.
     * @param private_attrs Additional attributes for the generated private key.
     * @param cancellable Optional cancellation object, or %NULL.
     */
    generate_key_pair_full(mechanism: Mechanism, public_attrs: Attributes, private_attrs: Attributes, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* public_key */ Object | null, /* private_key */ Object | null ]
    /**
     * Get the raw PKCS#11 session handle from a session object.
     */
    get_handle(): number
    /**
     * Get information about the session.
     */
    get_info(): SessionInfo
    /**
     * Get the interaction object set on this session, which is used to prompt
     * for pins and the like.
     */
    get_interaction(): Gio.TlsInteraction | null
    /**
     * Get the PKCS#11 module to which this session belongs.
     */
    get_module(): Module
    /**
     * Get the options this session was opened with.
     */
    get_options(): SessionOptions
    /**
     * Get the PKCS#11 slot to which this session belongs.
     */
    get_slot(): Slot
    /**
     * Get the session state. The state is the various PKCS#11 CKS_XXX flags.
     */
    get_state(): number
    /**
     * Initialize the user's pin on this slot that this session is opened on.
     * According to the PKCS#11 standards, the session must be logged in with
     * the CKU_SO user type.
     * 
     * This call may block for an indefinite period.
     * @param pin the user's PIN, or %NULL for       protected authentication path
     * @param cancellable Optional cancellation object, or %NULL.
     */
    init_pin(pin: Uint8Array | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Initialize the user's pin on this slot that this session is opened on.
     * According to the PKCS#11 standards, the session must be logged in with
     * the `CKU_SO` user type.
     * 
     * This call will return immediately and completes asynchronously.
     * @param pin the user's PIN, or %NULL for protected authentication path
     * @param cancellable Optional cancellation object, or %NULL.
     * @param callback Called when the operation completes.
     */
    init_pin_async(pin: Uint8Array | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of initializing a user's PIN.
     * @param result The result passed to the callback.
     */
    init_pin_finish(result: Gio.AsyncResult): boolean
    /**
     * Login the user on the session. This call may block for
     * an indefinite period.
     * @param user_type The type of login user.
     * @param pin the user's PIN, or %NULL for       protected authentication path
     * @param cancellable Optional cancellation object, or %NULL.
     */
    login(user_type: number, pin: Uint8Array | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Login the user on the session. This call will return
     * immediately and completes asynchronously.
     * @param user_type The type of login user.
     * @param pin the user's PIN, or %NULL for       protected authentication path
     * @param cancellable Optional cancellation object, or %NULL.
     * @param callback Called when the operation completes.
     */
    login_async(user_type: number, pin: Uint8Array | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of a login operation.
     * @param result The result passed to the callback.
     */
    login_finish(result: Gio.AsyncResult): boolean
    /**
     * Login the user on the session requesting the password interactively
     * when necessary. This call may block for an indefinite period.
     * @param user_type the type of login user
     * @param interaction interaction to request PIN when necessary
     * @param cancellable optional cancellation object, or %NULL
     */
    login_interactive(user_type: number, interaction?: Gio.TlsInteraction | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Login the user on the session prompting for passwords interactively when
     * necessary. This call will return immediately and completes asynchronously.
     * @param user_type the type of login user
     * @param interaction interaction to request PIN when necessary
     * @param cancellable optional cancellation object, or %NULL
     * @param callback called when the operation completes
     */
    login_interactive_async(user_type: number, interaction?: Gio.TlsInteraction | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of a login operation.
     * @param result the result passed to the callback
     */
    login_interactive_finish(result: Gio.AsyncResult): boolean
    /**
     * Log out of the session. This call may block for an indefinite period.
     * @param cancellable Optional cancellation object, or %NULL.
     */
    logout(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Log out of the session. This call returns immediately and completes
     * asynchronously.
     * @param cancellable Optional cancellation object, or %NULL.
     * @param callback Called when the operation completes.
     */
    logout_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of logging out of a session.
     * @param result The result passed to the callback.
     */
    logout_finish(result: Gio.AsyncResult): boolean
    /**
     * Set the interaction object on this session, which is used to prompt for
     * pins and the like.
     * @param interaction the interaction or %NULL
     */
    set_interaction(interaction?: Gio.TlsInteraction | null): void
    /**
     * Change the user's pin on this slot that this session is opened on.
     * 
     * This call may block for an indefinite period.
     * @param old_pin the user's old PIN, or %NULL           for protected authentication path.
     * @param new_pin the user's new PIN, or %NULL           for protected authentication path
     * @param cancellable Optional cancellation object, or %NULL.
     */
    set_pin(old_pin: Uint8Array | null, new_pin: Uint8Array | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Change the user's pin on this slot that this session is opened on.
     * 
     * This call will return immediately and completes asynchronously.
     * @param old_pin the user's old PIN, or %NULL           for protected authentication path
     * @param n_old_pin the length of the old PIN
     * @param new_pin the user's new PIN, or %NULL           for protected authentication path
     * @param cancellable Optional cancellation object, or %NULL.
     * @param callback Called when the operation completes.
     */
    set_pin_async(old_pin: Uint8Array | null, n_old_pin: number, new_pin: Uint8Array | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of changing a user's PIN.
     * @param result The result passed to the callback.
     */
    set_pin_finish(result: Gio.AsyncResult): boolean
    /**
     * Sign data in a mechanism specific manner. This call may
     * block for an indefinite period.
     * @param key The key to sign with.
     * @param mech_type The mechanism type to use for signing.
     * @param input data to sign
     * @param cancellable Optional cancellation object, or %NULL
     */
    sign(key: Object, mech_type: number, input: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    /**
     * Sign data in a mechanism specific manner. This call will
     * return immediately and complete asynchronously.
     * @param key The key to sign with.
     * @param mechanism The mechanism type and parameters to use for signing.
     * @param input data to sign
     * @param cancellable A GCancellable which can be used to cancel the operation.
     * @param callback Called when the operation completes.
     */
    sign_async(key: Object, mechanism: Mechanism, input: Uint8Array, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of an signing operation.
     * @param result The result object passed to the callback.
     */
    sign_finish(result: Gio.AsyncResult): Uint8Array
    /**
     * Sign data in a mechanism specific manner. This call may
     * block for an indefinite period.
     * @param key The key to sign with.
     * @param mechanism The mechanism type and parameters to use for signing.
     * @param input data to sign
     * @param n_result location to store the length of the result data
     * @param cancellable A GCancellable which can be used to cancel the operation.
     */
    sign_full(key: Object, mechanism: Mechanism, input: Uint8Array, n_result: number, cancellable?: Gio.Cancellable | null): number
    /**
     * Unwrap a key from a byte stream. This call may block for an
     * indefinite period.
     * 
     * If `attrs` is a floating reference, it is consumed.
     * @param wrapper The key to use for unwrapping.
     * @param mech_type The mechanism to use for unwrapping.
     * @param input the wrapped data as a byte stream
     * @param attrs Additional attributes for the unwrapped key.
     * @param cancellable Optional cancellation object, or %NULL.
     */
    unwrap_key(wrapper: Object, mech_type: number, input: Uint8Array, attrs: Attributes, cancellable?: Gio.Cancellable | null): Object
    /**
     * Unwrap a key from a byte stream. This call will
     * return immediately and complete asynchronously.
     * 
     * If `attrs` is a floating reference, it is consumed.
     * @param wrapper The key to use for unwrapping.
     * @param mechanism The mechanism to use for unwrapping.
     * @param input the wrapped data as a byte stream
     * @param attrs Additional attributes for the unwrapped key.
     * @param cancellable Optional cancellation object or %NULL.
     * @param callback Called when the operation completes.
     */
    unwrap_key_async(wrapper: Object, mechanism: Mechanism, input: Uint8Array, attrs: Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of a unwrap key operation.
     * @param result The async result passed to the callback.
     */
    unwrap_key_finish(result: Gio.AsyncResult): Object
    /**
     * Unwrap a key from a byte stream. This call may block for an
     * indefinite period.
     * 
     * If `attrs` is a floating reference, it is consumed.
     * @param wrapper The key to use for unwrapping.
     * @param mechanism The mechanism to use for unwrapping.
     * @param input the wrapped data as a byte stream
     * @param attrs Additional attributes for the unwrapped key.
     * @param cancellable Optional cancellation object, or %NULL.
     */
    unwrap_key_full(wrapper: Object, mechanism: Mechanism, input: Uint8Array, attrs: Attributes, cancellable?: Gio.Cancellable | null): Object
    /**
     * Verify data in a mechanism specific manner. This call may
     * block for an indefinite period.
     * @param key The key to verify with.
     * @param mech_type The mechanism type to use for verifying.
     * @param input data to verify
     * @param signature the signature
     * @param cancellable Optional cancellation object, or %NULL
     */
    verify(key: Object, mech_type: number, input: Uint8Array, signature: Uint8Array, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Verify data in a mechanism specific manner. This call returns
     * immediately and completes asynchronously.
     * @param key The key to verify with.
     * @param mechanism The mechanism type and parameters to use for signing.
     * @param input data to verify
     * @param signature the signature
     * @param cancellable A GCancellable which can be used to cancel the operation.
     * @param callback Called when the operation completes.
     */
    verify_async(key: Object, mechanism: Mechanism, input: Uint8Array, signature: Uint8Array, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of an verify operation.
     * @param result The result object passed to the callback.
     */
    verify_finish(result: Gio.AsyncResult): boolean
    /**
     * Verify data in a mechanism specific manner. This call may
     * block for an indefinite period.
     * @param key The key to verify with.
     * @param mechanism The mechanism type and parameters to use for signing.
     * @param input data to verify
     * @param signature the signature
     * @param cancellable A GCancellable which can be used to cancel the operation.
     */
    verify_full(key: Object, mechanism: Mechanism, input: Uint8Array, signature: Uint8Array, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Wrap a key into a byte stream. This call may block for an
     * indefinite period.
     * @param wrapper The key to use for wrapping.
     * @param mech_type The mechanism type to use for wrapping.
     * @param wrapped The key to wrap.
     * @param cancellable A #GCancellable or %NULL
     */
    wrap_key(wrapper: Object, mech_type: number, wrapped: Object, cancellable?: Gio.Cancellable | null): Uint8Array
    /**
     * Wrap a key into a byte stream. This call will
     * return immediately and complete asynchronously.
     * @param wrapper The key to use for wrapping.
     * @param mechanism The mechanism to use for wrapping.
     * @param wrapped The key to wrap.
     * @param cancellable Optional cancellation object or %NULL.
     * @param callback Called when the operation completes.
     */
    wrap_key_async(wrapper: Object, mechanism: Mechanism, wrapped: Object, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of a wrap key operation.
     * @param result The async result passed to the callback.
     */
    wrap_key_finish(result: Gio.AsyncResult): Uint8Array
    /**
     * Wrap a key into a byte stream. This call may block for an
     * indefinite period.
     * @param wrapper The key to use for wrapping.
     * @param mechanism The mechanism to use for wrapping.
     * @param wrapped The key to wrap.
     * @param cancellable Optional cancellation object, or %NULL.
     */
    wrap_key_full(wrapper: Object, mechanism: Mechanism, wrapped: Object, cancellable?: Gio.Cancellable | null): Uint8Array
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes asynchronous initialization and returns the result.
     * See g_async_initable_init_async().
     * @param res a #GAsyncResult.
     */
    init_finish(res: Gio.AsyncResult): boolean
    /**
     * Finishes the async construction for the various g_async_initable_new
     * calls, returning the created object or %NULL on error.
     * @param res the #GAsyncResult from the callback
     */
    new_finish(res: Gio.AsyncResult): GObject.Object
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
    /* Virtual methods of Gck-1.Gck.Session */
    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes asynchronous initialization and returns the result.
     * See g_async_initable_init_async().
     * @param res a #GAsyncResult.
     */
    vfunc_init_finish(res: Gio.AsyncResult): boolean
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
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
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
    /* Signals of Gck-1.Gck.Session */
    /**
     * When a GckSession is being disposed of it emits this signal to allow
     * a session pool to pick up the handle and keep it around.
     * 
     * If no signal handler claims the handle, then it is closed.
     * @param handle The handle being discarded.
     */
    connect(sigName: "discard-handle", callback: (($obj: Session, handle: number) => boolean)): number
    connect_after(sigName: "discard-handle", callback: (($obj: Session, handle: number) => boolean)): number
    emit(sigName: "discard-handle", handle: number): void
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
    connect(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::app-data", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-data", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::handle", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handle", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interaction", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interaction", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::module", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::module", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opening-flags", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opening-flags", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::options", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::options", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::slot", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slot", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Session_ConstructProps)
    _init (config?: Session_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Initialize a session object from a raw PKCS#11 session handle.
     * Usually one would use the [method`Slot`.open_session] function to
     * create a session.
     * @param slot The slot which the session belongs to.
     * @param session_handle the raw PKCS#11 handle of the session
     * @param options Session options. Those which are used during opening a session have no effect.
     */
    static from_handle(slot: Slot, session_handle: number, options: SessionOptions): Session
    /**
     * Open a session on the slot. This call may block for an indefinite period.
     * @param slot the slot to open session on
     * @param options session options
     * @param interaction optional interaction for logins or object authentication
     * @param cancellable optional cancellation object
     */
    static open(slot: Slot, options: SessionOptions, interaction?: Gio.TlsInteraction | null, cancellable?: Gio.Cancellable | null): Session
    /**
     * Open a session on the slot. This call will return immediately and complete
     * asynchronously.
     * @param slot the slot to open session on
     * @param options session options
     * @param interaction optional interaction for logins or object authentication
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    static open_async(slot: Slot, options: SessionOptions, interaction?: Gio.TlsInteraction | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of an open session operation.
     * @param result the result passed to the callback
     */
    static open_finish(result: Gio.AsyncResult): Session
    /**
     * Helper function for constructing #GAsyncInitable object. This is
     * similar to g_object_newv() but also initializes the object asynchronously.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_new_finish() to get the new object and check
     * for any errors.
     * @param object_type a #GType supporting #GAsyncInitable.
     * @param n_parameters the number of parameters in `parameters`
     * @param parameters the parameters to use to construct the object
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the initialization is     finished
     */
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     * @param object_type a #GType supporting #GInitable.
     * @param parameters the parameters to use to construct the object
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface Slot_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gck-1.Gck.Slot */
    /**
     * The raw CK_SLOT_ID handle of this slot.
     */
    handle?: number
    /**
     * The PKCS11 object that this slot is a part of.
     */
    module?: Module
}
class Slot {
    /* Properties of Gck-1.Gck.Slot */
    /**
     * The raw CK_SLOT_ID handle of this slot.
     */
    readonly handle: number
    /**
     * The PKCS11 object that this slot is a part of.
     */
    readonly module: Module
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gck-1.Gck.Slot */
    /**
     * Setup an enumerator for listing matching objects on the slot.
     * 
     * If the `match` #GckAttributes is floating, it is consumed.
     * 
     * This call will not block but will return an enumerator immediately.
     * @param match attributes that the objects must match, or empty for all objects
     * @param options options for opening a session
     */
    enumerate_objects(match: Attributes, options: SessionOptions): Enumerator
    /**
     * Checks equality of two slots. Two GckSlot objects can point to the same
     * underlying PKCS#11 slot.
     * @param slot2 a pointer to the second #GckSlot
     */
    equal(slot2: Slot): boolean
    /**
     * Get the raw PKCS#11 handle of a slot.
     */
    get_handle(): number
    /**
     * Get the information for this slot.
     */
    get_info(): SlotInfo
    /**
     * Get information for the specified mechanism.
     * @param mech_type The mechanisms type to get info for.
     */
    get_mechanism_info(mech_type: number): MechanismInfo
    /**
     * Get the available mechanisms for this slot.
     */
    get_mechanisms(): number[]
    /**
     * Get the module that this slot is on.
     */
    get_module(): Module
    /**
     * Get the token information for this slot.
     */
    get_token_info(): TokenInfo
    /**
     * Check if the PKCS11 slot has the given flags.
     * @param flags The flags to check.
     */
    has_flags(flags: number): boolean
    /**
     * Create a hash value for the GckSlot.
     * 
     * This function is intended for easily hashing a GckSlot to add to
     * a GHashTable or similar data structure.
     */
    hash(): number
    /**
     * Check whether the PKCS#11 URI matches the slot
     * @param uri the uri to match against the slot
     */
    match(uri: UriData): boolean
    /**
     * Open a session on the slot. If the 'auto reuse' setting is set,
     * then this may be a recycled session with the same flags.
     * 
     * This call may block for an indefinite period.
     * @param options The #GckSessionOptions to open a session with.
     * @param cancellable An optional cancellation object, or %NULL.
     */
    open_session(options: SessionOptions, cancellable?: Gio.Cancellable | null): Session
    /**
     * Open a session on the slot. If the 'auto reuse' setting is set,
     * then this may be a recycled session with the same flags.
     * 
     * This call will return immediately and complete asynchronously.
     * @param options The options to open the new session with.
     * @param cancellable Optional cancellation object, or %NULL.
     * @param callback Called when the operation completes.
     */
    open_session_async(options: SessionOptions, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of an open session operation. If the 'auto reuse' setting is set,
     * then this may be a recycled session with the same flags.
     * @param result The result passed to the callback.
     */
    open_session_finish(result: Gio.AsyncResult): Session
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
    connect(sigName: "notify", callback: (($obj: Slot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Slot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::handle", callback: (($obj: Slot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handle", callback: (($obj: Slot, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::module", callback: (($obj: Slot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::module", callback: (($obj: Slot, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Slot_ConstructProps)
    _init (config?: Slot_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Create a new GckSlot object for a raw PKCS#11 handle.
     * @param module The module that this slot is on.
     * @param slot_id The raw PKCS#11 handle or slot id of this slot.
     */
    static from_handle(module: Module, slot_id: number): Slot
    static $gtype: GObject.Type
}
class Attribute {
    /* Fields of Gck-1.Gck.Attribute */
    /**
     * The attribute type, such as `CKA_LABEL`.
     */
    type: number
    /**
     * The value of the attribute. May be %NULL.
     */
    value: Uint8Array
    /**
     * The length of the attribute. May be [const`INVALID]` if the
     * attribute is invalid.
     */
    length: number
    /* Methods of Gck-1.Gck.Attribute */
    /**
     * Clear allocated memory held by a #GckAttribute.
     * 
     * This attribute must have been allocated by a Gck library function, or
     * the results of this method are undefined.
     * 
     * The type of the attribute will remain set.
     */
    clear(): void
    /**
     * Dump the specified attribute using g_printerr().
     */
    dump(): void
    /**
     * Duplicate the PKCS#11 attribute. All value memory is
     * also copied.
     * 
     * The `attr` must have been allocated or initialized by a Gck function or
     * the results of this function are undefined.
     */
    dup(): Attribute
    /**
     * Compare two attributes. Useful with <code>GHashTable</code>.
     * @param attr2 second attribute to compare
     */
    equal(attr2: Attribute): boolean
    /**
     * Free an attribute and its allocated memory. These is usually
     * used with attributes that are allocated by [ctor`Attribute`.new]
     * or a similar function.
     */
    free(): void
    /**
     * Get the CK_BBOOL of a PKCS#11 attribute. No conversion
     * is performed. It is an error to pass an attribute to this
     * function unless you're know it's supposed to contain a
     * boolean value.
     */
    get_boolean(): boolean
    /**
     * Get the raw value in the attribute.
     * 
     * This is useful from scripting languages. C callers will generally
     * access the #GckAttribute struct directly.
     * 
     * This function will %NULL if the attribute contains empty or invalid
     * data. The returned data must not be modified and is only valid
     * as long as this `attribute`.
     */
    get_data(): Uint8Array
    /**
     * Get the CK_DATE of a PKCS#11 attribute. No
     * conversion is performed. It is an error to pass an attribute
     * to this function unless you're know it's supposed to contain
     * a value of the right type.
     * @param value The date value to fill in with the parsed date.
     */
    get_date(value: GLib.Date): void
    /**
     * Get the string value of a PKCS#11 attribute. No
     * conversion is performed. It is an error to pass an attribute
     * to this function unless you're know it's supposed to contain
     * a value of the right type.
     */
    get_string(): string | null
    /**
     * Get the CK_ULONG value of a PKCS#11 attribute. No
     * conversion is performed. It is an error to pass an attribute
     * to this function unless you're know it's supposed to contain
     * a value of the right type.
     */
    get_ulong(): number
    /**
     * Hash an attribute for use in <code>GHashTable</code> keys.
     */
    hash(): number
    /**
     * Initialize a PKCS#11 attribute as a copy of another attribute.
     * This copies the value memory as well.
     * 
     * When done with the copied attribute you should use
     * [method`Attribute`.clear] to free the internal memory.
     * @param src An attribute to copy.
     */
    init_copy(src: Attribute): void
    /**
     * Check if the PKCS#11 attribute represents 'invalid' or 'not found'
     * according to the PKCS#11 spec. That is, having length
     * of (CK_ULONG)-1.
     */
    is_invalid(): boolean
    static name: string
    static new(attr_type: number, value: number, length: number): Attribute
    constructor(attr_type: number, value: number, length: number)
    /* Static methods and pseudo-constructors */
    static new(attr_type: number, value: number, length: number): Attribute
    static new_boolean(attr_type: number, value: boolean): Attribute
    static new_date(attr_type: number, value: GLib.Date): Attribute
    static new_empty(attr_type: number): Attribute
    static new_invalid(attr_type: number): Attribute
    static new_string(attr_type: number, value: string): Attribute
    static new_ulong(attr_type: number, value: number): Attribute
}
class Attributes {
    /* Methods of Gck-1.Gck.Attributes */
    /**
     * Get attribute at the specified index in the attribute array.
     * 
     * Use [method`Attributes`.count] to determine how many attributes are
     * in the array.
     * @param index The attribute index to retrieve.
     */
    at(index: number): Attribute
    /**
     * Check whether the attributes contain a certain attribute.
     * @param match The attribute to find
     */
    contains(match: Attribute): boolean
    /**
     * Get the number of attributes in this attribute array.
     */
    count(): number
    /**
     * Dump the attributes using g_printerr().
     */
    dump(): void
    /**
     * Find an attribute with the specified type in the array.
     * @param attr_type The type of attribute to find.
     */
    find(attr_type: number): Attribute
    /**
     * Find an attribute with the specified type in the array.
     * 
     * The attribute (if found) must be of the right size to store
     * a boolean value (ie: CK_BBOOL). If the attribute is marked invalid
     * then it will be treated as not found.
     * @param attr_type The type of attribute to find.
     */
    find_boolean(attr_type: number): [ /* returnType */ boolean, /* value */ boolean ]
    /**
     * Find an attribute with the specified type in the array.
     * 
     * The attribute (if found) must be of the right size to store
     * a date value (ie: CK_DATE). If the attribute is marked invalid
     * then it will be treated as not found.
     * @param attr_type The type of attribute to find.
     */
    find_date(attr_type: number): [ /* returnType */ boolean, /* value */ GLib.Date ]
    /**
     * Find an attribute with the specified type in the array.
     * 
     * If the attribute is marked invalid then it will be treated as not found.
     * The resulting string will be null-terminated, and must be freed by the caller
     * using g_free().
     * @param attr_type The type of attribute to find.
     */
    find_string(attr_type: number): [ /* returnType */ boolean, /* value */ string ]
    /**
     * Find an attribute with the specified type in the array.
     * 
     * The attribute (if found) must be of the right size to store
     * a unsigned long value (ie: CK_ULONG). If the attribute is marked invalid
     * then it will be treated as not found.
     * @param attr_type The type of attribute to find.
     */
    find_ulong(attr_type: number): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Reference this attributes array.
     */
    ref(): Attributes
    /**
     * #GckAttributes uses a floating reference count system. [method`Builder`.end]
     * and [ctor`Attributes`.new_empty] both return floating references.
     * 
     * Calling this function on a `GckAttributes` with a floating
     * reference will convert the floating reference into a full reference.
     * Calling this function on a non-floating `GckAttributes` results
     * in an additional normal reference being added.
     * 
     * In other words, if the `attrs` is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference.  If the `attrs` is not floating, then this call adds a
     * new normal reference increasing the reference count by one.
     * 
     * All Gck library functions that assume ownership of floating references
     * are documented as such. Essentially any Gck function that performs
     * an operation using a #GckAttributes argument rather than operating on the
     * attributes themselves, will accept a floating reference.
     */
    ref_sink(): Attributes
    /**
     * Print out attributes to a string in aform that's useful for debugging
     * or logging.
     * 
     * The format of the string returned may change in the future.
     */
    to_string(): string
    /**
     * Unreference this attribute array.
     * 
     * When all outstanding references are gone, the array will be freed.
     */
    unref(): void
    static name: string
    static new(reserved: number): Attributes
    constructor(reserved: number)
    /* Static methods and pseudo-constructors */
    static new(reserved: number): Attributes
}
class Builder {
    /* Methods of Gck-1.Gck.Builder */
    /**
     * Add all the `attrs` attributes to the builder. The attributes are added
     * uncondititionally whether or not attributes with the same types already
     * exist in the builder.
     * 
     * As an optimization, the attribute memory values are automatically shared
     * between the attributes and the builder.
     * @param attrs the attributes to add
     */
    add_all(attrs: Attributes): void
    /**
     * Add an attribute to the builder. The attribute is added unconditionally whether
     * or not an attribute with the same type already exists on the builder.
     * 
     * The `attr` attribute must have been created or owned by the Gck library.
     * If you call this function on an arbitrary `GckAttribute` that is allocated on
     * the stack or elsewhere, then this will result in undefined behavior.
     * 
     * As an optimization, the attribute memory value is automatically shared
     * between the attribute and the builder.
     * @param attr the attribute to add
     */
    add_attribute(attr: Attribute): void
    /**
     * Add a new attribute to the builder for the boolean `value`.
     * Unconditionally adds a new attribute, even if one with the same `attr_type`
     * already exists.
     * @param attr_type the new attribute type
     * @param value the attribute value
     */
    add_boolean(attr_type: number, value: boolean): void
    /**
     * Add a new attribute to the builder with an arbitrary value. Unconditionally
     * adds a new attribute, even if one with the same `attr_type` already exists.
     * 
     * The memory in `value` is copied by the builder.
     * 
     * %NULL may be specified for the `value` argument, in which case an empty
     * attribute is created. [const`INVALID]` may be specified for the length, in
     * which case an invalid attribute is created in the PKCS#11 style.
     * @param attr_type the new attribute type
     * @param value the new attribute memory
     */
    add_data(attr_type: number, value: Uint8Array | null): void
    /**
     * Add a new attribute to the builder for the date `value`.
     * Unconditionally adds a new attribute, even if one with the same `attr_type`
     * already exists.
     * @param attr_type the new attribute type
     * @param value the attribute value
     */
    add_date(attr_type: number, value: GLib.Date): void
    /**
     * Add a new attribute to the builder that is empty. Unconditionally
     * adds a new attribute, even if one with the same `attr_type` already exists.
     * @param attr_type the new attribute type
     */
    add_empty(attr_type: number): void
    /**
     * Add a new attribute to the builder that is invalid in the PKCS#11 sense.
     * Unconditionally adds a new attribute, even if one with the same `attr_type`
     * already exists.
     * @param attr_type the new attribute type
     */
    add_invalid(attr_type: number): void
    /**
     * Add the attributes with the types in `only_types` from `attrs` to the
     * builder. The attributes are added uncondititionally whether or not
     * attributes with the same types already exist in the builder.
     * 
     * ```c
     * // Add the CKA_ID and CKA_CLASS attributes from attrs to builder
     * gulong only[] = { CKA_ID, CKA_CLASS };
     * gck_builder_add_onlyv (builder, attrs, only, 2);
     * ```
     * 
     * As an optimization, the attribute memory values are automatically shared
     * between the attributes and the builder.
     * @param attrs the attributes to add
     * @param only_types the types of attributes to add
     */
    add_only(attrs: Attributes, only_types: number[]): void
    /**
     * Add a new attribute to the builder for the string `value` or %NULL.
     * Unconditionally adds a new attribute, even if one with the same `attr_type`
     * already exists.
     * @param attr_type the new attribute type
     * @param value the attribute value
     */
    add_string(attr_type: number, value?: string | null): void
    /**
     * Add a new attribute to the builder for the unsigned long `value`.
     * Unconditionally adds a new attribute, even if one with the same `attr_type`
     * already exists.
     * @param attr_type the new attribute type
     * @param value the attribute value
     */
    add_ulong(attr_type: number, value: number): void
    /**
     * Clear the builder and release all allocated memory. The builder may be used
     * again to build another set of attributes after this function call.
     * 
     * If memory is shared between this builder and other attributes, then that
     * memory is only freed when both of them are cleared or unreferenced.
     */
    clear(): void
    /**
     * Make a copy of the builder and its state. The new builder is allocated
     * with [ctor`Builder`.new] and should be freed with gck_builder_unref().
     * 
     * Attribute value memory is automatically shared between the two builders,
     * and is only freed when both are gone.
     */
    copy(): Builder
    /**
     * Complete the #GckBuilder, and return the attributes contained in the builder.
     * The #GckBuilder will be cleared after this function call, and it is no
     * longer necessary to use [method`Builder`.clear] on it, although it is also
     * permitted. The builder may be used again to build another set of attributes
     * after this function call.
     * 
     * The returned set of attributes is floating, and should either be passed to
     * another gck library function which consumes this floating reference, or if
     * you wish to keep these attributes around you should ref them with
     * gck_attributes_ref_sink() and unref them later with gck_attributes_unref().
     */
    end(): Attributes
    /**
     * Find an attribute in the builder. Both valid and invalid attributes (in
     * the PKCS#11 sense) are returned. If multiple attributes exist for the given
     * attribute type, then the first one is returned.
     * 
     * The returned [struct`Attribute]` is owned by the builder and may not be
     * modified in any way. It is only valid until another attribute is added to or
     * set on the builder, or until the builder is cleared or unreferenced.
     * @param attr_type the type of attribute to find
     */
    find(attr_type: number): Attribute
    /**
     * Find a boolean attribute in the builder that has the type `attr_type,` is
     * of the correct boolean size, and is not invalid in the PKCS#11 sense.
     * If multiple attributes exist for the given attribute type, then the first\
     * one is returned.
     * @param attr_type the type of attribute to find
     */
    find_boolean(attr_type: number): [ /* returnType */ boolean, /* value */ boolean ]
    /**
     * Find a date attribute in the builder that has the type `attr_type,` is of
     * the correct date size, and is not invalid in the PKCS#11 sense.
     * If multiple attributes exist for the given attribute type, then the first
     * one is returned.
     * @param attr_type the type of attribute to find
     */
    find_date(attr_type: number): [ /* returnType */ boolean, /* value */ GLib.Date ]
    /**
     * Find a string attribute in the builder that has the type `attr_type,` has a
     * non %NULL value pointer, and is not invalid in the PKCS#11 sense.
     * If multiple attributes exist for the given attribute type, then the first
     * one is returned.
     * @param attr_type the type of attribute to find
     */
    find_string(attr_type: number): [ /* returnType */ boolean, /* value */ string ]
    /**
     * Find a unsigned long attribute in the builder that has the type `attr_type,`
     * is of the correct unsigned long size, and is not invalid in the PKCS#11 sense.
     * If multiple attributes exist for the given attribute type, then the first
     * one is returned.
     * @param attr_type the type of attribute to find
     */
    find_ulong(attr_type: number): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Initialize a stack allocated builder, with the default flags.
     * 
     * This is equivalent to initializing a builder variable with the
     * %GCK_BUILDER_INIT constant, or setting it to zeroed memory.
     * 
     * ```c
     * // Equivalent ways of initializing a GckBuilder
     * GckBuilder builder = GCK_BUILDER_INIT;
     * GckBuilder builder2;
     * GckBuilder builder3;
     * 
     * gck_builder_init (&builder2);
     * 
     * memset (&builder3, 0, sizeof (builder3));
     * ```
     */
    init(): void
    /**
     * Initialize a stack allocated builder, with the appropriate flags.
     * 
     * If the %GCK_BUILDER_SECURE_MEMORY flag is specified then non-pageable memory
     * will be used for the various values of the attributes in the builder
     * @param flags the flags for the new builder
     */
    init_full(flags: BuilderFlags): void
    /**
     * Add a reference to a builder that was created with [ctor`Builder`.new]. The
     * builder must later be unreferenced again with gck_builder_unref().
     * 
     * It is an error to use this function on builders that were allocated on the
     * stack.
     */
    ref(): Builder
    /**
     * Set all the `attrs` attributes to the builder. If any attributes with the
     * same types are already present in the builder, then those attributes are
     * changed to the new values.
     * 
     * As an optimization, the attribute memory values are automatically shared
     * between the attributes and the builder.
     * @param attrs the attributes to set
     */
    set_all(attrs: Attributes): void
    /**
     * Set an attribute on the builder for the boolean `value`.
     * If an attribute with `attr_type` already exists in the builder then it is
     * changed to the new value, otherwise an attribute is added.
     * @param attr_type the new attribute type
     * @param value the attribute value
     */
    set_boolean(attr_type: number, value: boolean): void
    /**
     * Set a new attribute to the builder with an arbitrary value. If an attribute
     * with `attr_type` already exists in the builder then it is changed to the new
     * value, otherwise an attribute is added.
     * 
     * The memory in `value` is copied by the builder.
     * 
     * %NULL may be specified for the `value` argument, in which case an empty
     * attribute is created. [const`INVALID]` may be specified for the length, in
     * which case an invalid attribute is created in the PKCS#11 style.
     * @param attr_type the attribute type
     * @param value the new attribute memory
     */
    set_data(attr_type: number, value: Uint8Array | null): void
    /**
     * Set an attribute on the builder for the date `value`.
     * If an attribute with `attr_type` already exists in the builder then it is
     * changed to the new value, otherwise an attribute is added.
     * @param attr_type the new attribute type
     * @param value the attribute value
     */
    set_date(attr_type: number, value: GLib.Date): void
    /**
     * Set an attribute on the builder that is empty. If an attribute
     * with `attr_type` already exists in the builder then it is changed to the new
     * value, otherwise an attribute is added.
     * @param attr_type the attribute type
     */
    set_empty(attr_type: number): void
    /**
     * Set an attribute on the builder that is invalid in the PKCS#11 sense.
     * If an attribute with `attr_type` already exists in the builder then it is
     * changed to the new value, otherwise an attribute is added.
     * @param attr_type the attribute type
     */
    set_invalid(attr_type: number): void
    /**
     * Set an attribute on the builder for the string `value` or %NULL.
     * If an attribute with `attr_type` already exists in the builder then it is
     * changed to the new value, otherwise an attribute is added.
     * @param attr_type the new attribute type
     * @param value the attribute value
     */
    set_string(attr_type: number, value: string): void
    /**
     * Set an attribute on the builder for the unsigned long `value`.
     * If an attribute with `attr_type` already exists in the builder then it is
     * changed to the new value, otherwise an attribute is added.
     * @param attr_type the new attribute type
     * @param value the attribute value
     */
    set_ulong(attr_type: number, value: number): void
    /**
     * Take the attributes that have been built in the #GckBuilder. The builder
     * will no longer contain any attributes after this function call.
     * 
     * The returned set of attributes is a full reference, not floating.
     */
    steal(): Attributes
    /**
     * Add a new attribute to the builder with an arbitrary value. Unconditionally
     * adds a new attribute, even if one with the same `attr_type` already exists.
     * 
     * Ownership of the `value` memory is taken by the builder, may be reallocated,
     * and is eventually freed with g_free(). The memory must have been allocated
     * using the standard GLib memory allocation routines.
     * 
     * %NULL may be specified for the `value` argument, in which case an empty
     * attribute is created. [const`INVALID]` may be specified for the length, in
     * which case an invalid attribute is created in the PKCS#11 style.
     * @param attr_type the new attribute type
     * @param value the new         attribute memory
     */
    take_data(attr_type: number, value: Uint8Array | null): void
    static name: string
    static new(flags: BuilderFlags): Builder
    constructor(flags: BuilderFlags)
    /* Static methods and pseudo-constructors */
    static new(flags: BuilderFlags): Builder
    /**
     * Unreferences a builder. If this was the last reference then the builder
     * is freed.
     * 
     * It is an error to use this function on builders that were allocated on the
     * stack.
     * @param builder the builder
     */
    static unref(builder?: object | null): void
}
abstract class EnumeratorClass {
    /* Fields of Gck-1.Gck.EnumeratorClass */
    parent: GObject.ObjectClass
    static name: string
}
class EnumeratorPrivate {
    static name: string
}
class Mechanism {
    /* Fields of Gck-1.Gck.Mechanism */
    /**
     * The mechanism type
     */
    type: number
    /**
     * Mechanism specific data.
     */
    parameter: object
    /**
     * Length of mechanism specific data.
     */
    n_parameter: number
    static name: string
}
class MechanismInfo {
    /* Fields of Gck-1.Gck.MechanismInfo */
    /**
     * The minimum key size that can be used with this mechanism.
     */
    min_key_size: number
    /**
     * The maximum key size that can be used with this mechanism.
     */
    max_key_size: number
    /**
     * Various PKCS11 flags that apply to this mechanism.
     */
    flags: number
    /* Methods of Gck-1.Gck.MechanismInfo */
    /**
     * Make a copy of the mechanism info.
     */
    copy(): MechanismInfo
    /**
     * Free the GckMechanismInfo and associated resources.
     */
    free(): void
    static name: string
}
abstract class ModuleClass {
    /* Fields of Gck-1.Gck.ModuleClass */
    parent: GObject.ObjectClass
    authenticate_slot: (self: Module, slot: Slot, label: string, password: string) => boolean
    authenticate_object: (self: Module, object: Object, label: string, password: string) => boolean
    static name: string
}
class ModuleInfo {
    /* Fields of Gck-1.Gck.ModuleInfo */
    /**
     * The major version of the module.
     */
    pkcs11_version_major: number
    /**
     * The minor version of the module.
     */
    pkcs11_version_minor: number
    /**
     * The module manufacturer.
     */
    manufacturer_id: string
    /**
     * The module PKCS&num;11 flags.
     */
    flags: number
    /**
     * The module description.
     */
    library_description: string
    /**
     * The major version of the library.
     */
    library_version_major: number
    /**
     * The minor version of the library.
     */
    library_version_minor: number
    /* Methods of Gck-1.Gck.ModuleInfo */
    /**
     * Make a copy of the module info.
     */
    copy(): ModuleInfo
    /**
     * Free a GckModuleInfo structure.
     */
    free(): void
    static name: string
}
class ModulePrivate {
    static name: string
}
abstract class ObjectCacheIface {
    /* Fields of Gck-1.Gck.ObjectCacheIface */
    /**
     * parent interface
     */
    interface: GObject.TypeInterface
    /**
     * attribute types that an
     *                   enumerator should retrieve
     */
    default_types: number[]
    /**
     * number of attribute types to be retrieved
     */
    n_default_types: number
    fill: (object: ObjectCache, attrs: Attributes) => void
    static name: string
}
abstract class ObjectClass {
    /* Fields of Gck-1.Gck.ObjectClass */
    /**
     * derived from this
     */
    parent: GObject.ObjectClass
    static name: string
}
class ObjectPrivate {
    static name: string
}
abstract class PasswordClass {
    /* Fields of Gck-1.Gck.PasswordClass */
    /**
     * parent class
     */
    parent: Gio.TlsPasswordClass
    static name: string
}
class PasswordPrivate {
    static name: string
}
abstract class SessionClass {
    /* Fields of Gck-1.Gck.SessionClass */
    parent: GObject.ObjectClass
    static name: string
}
class SessionInfo {
    /* Fields of Gck-1.Gck.SessionInfo */
    /**
     * The handle of the PKCS11 slot that this session is opened on.
     */
    slot_id: number
    /**
     * The user login state of the session.
     */
    state: number
    /**
     * Various PKCS11 flags.
     */
    flags: number
    /**
     * The last device error that occurred from an operation on this session.
     */
    device_error: number
    /* Methods of Gck-1.Gck.SessionInfo */
    /**
     * Make a new copy of a session info structure.
     */
    copy(): SessionInfo
    /**
     * Free the GckSessionInfo structure and all associated memory.
     */
    free(): void
    static name: string
}
class SessionPrivate {
    static name: string
}
abstract class SlotClass {
    /* Fields of Gck-1.Gck.SlotClass */
    parent: GObject.ObjectClass
    static name: string
}
class SlotInfo {
    /* Fields of Gck-1.Gck.SlotInfo */
    /**
     * Description of the slot.
     */
    slot_description: string
    /**
     * The manufacturer of this slot.
     */
    manufacturer_id: string
    /**
     * Various PKCS11 flags that apply to this slot.
     */
    flags: number
    /**
     * The major version of the hardware.
     */
    hardware_version_major: number
    /**
     * The minor version of the hardware.
     */
    hardware_version_minor: number
    /**
     * The major version of the firmware.
     */
    firmware_version_major: number
    /**
     * The minor version of the firmware.
     */
    firmware_version_minor: number
    /* Methods of Gck-1.Gck.SlotInfo */
    /**
     * Make a copy of the slot info.
     */
    copy(): SlotInfo
    /**
     * Free the GckSlotInfo and associated resources.
     */
    free(): void
    static name: string
}
class SlotPrivate {
    static name: string
}
class TokenInfo {
    /* Fields of Gck-1.Gck.TokenInfo */
    /**
     * The displayable token label.
     */
    label: string
    /**
     * The manufacturer of this slot.
     */
    manufacturer_id: string
    /**
     * The token model number as a string.
     */
    model: string
    /**
     * The token serial number as a string.
     */
    serial_number: string
    /**
     * Various PKCS11 flags that apply to this token.
     */
    flags: number
    /**
     * The maximum number of sessions allowed on this token.
     */
    max_session_count: number
    /**
     * The number of sessions open on this token.
     */
    session_count: number
    /**
     * The maximum number of read/write sessions allowed on this token.
     */
    max_rw_session_count: number
    /**
     * The number of sessions open on this token.
     */
    rw_session_count: number
    /**
     * The maximum length of a PIN for locking this token.
     */
    max_pin_len: number
    /**
     * The minimum length of a PIN for locking this token.
     */
    min_pin_len: number
    /**
     * The total amount of memory on this token for storing public objects.
     */
    total_public_memory: number
    /**
     * The available amount of memory on this token for storing public objects.
     */
    free_public_memory: number
    /**
     * The total amount of memory on this token for storing private objects.
     */
    total_private_memory: number
    /**
     * The available amount of memory on this token for storing private objects.
     */
    free_private_memory: number
    /**
     * The major version of the hardware.
     */
    hardware_version_major: number
    /**
     * The minor version of the hardware.
     */
    hardware_version_minor: number
    /**
     * The major version of the firmware.
     */
    firmware_version_major: number
    /**
     * The minor version of the firmware.
     */
    firmware_version_minor: number
    /**
     * If the token has a hardware clock, this is set to the number of seconds since the epoch.
     */
    utc_time: number
    /* Methods of Gck-1.Gck.TokenInfo */
    /**
     * Make a copy of the token info.
     */
    copy(): TokenInfo
    /**
     * Free the GckTokenInfo and associated resources.
     */
    free(): void
    static name: string
}
class UriData {
    /* Fields of Gck-1.Gck.UriData */
    /**
     * whether any parts of the PKCS#11 URI were unsupported or unrecognized.
     */
    any_unrecognized: boolean
    /**
     * information about the PKCS#11 modules matching the URI.
     */
    module_info: ModuleInfo
    /**
     * information about the PKCS#11 tokens matching the URI.
     */
    token_info: TokenInfo
    /**
     * information about the PKCS#11 objects matching the URI.
     */
    attributes: Attributes
    /* Methods of Gck-1.Gck.UriData */
    /**
     * Copy a #GckUriData
     */
    copy(): UriData
    /**
     * Free a #GckUriData.
     */
    free(): void
    static name: string
    static new(): UriData
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): UriData
}
}
export default Gck;