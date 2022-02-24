/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Json-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Json {

/**
 * Indicates the content of a node.
 */
enum NodeType {
    /**
     * The node contains a JSON object
     */
    OBJECT,
    /**
     * The node contains a JSON array
     */
    ARRAY,
    /**
     * The node contains a fundamental type
     */
    VALUE,
    /**
     * Special type, for nodes containing null
     */
    NULL,
}
/**
 * Error codes for `JSON_PARSER_ERROR`.
 * 
 * This enumeration can be extended at later date
 */
enum ParserError {
    /**
     * parse error
     */
    PARSE,
    /**
     * unexpected trailing comma
     */
    TRAILING_COMMA,
    /**
     * expected comma
     */
    MISSING_COMMA,
    /**
     * expected colon
     */
    MISSING_COLON,
    /**
     * invalid bareword
     */
    INVALID_BAREWORD,
    /**
     * empty member name (Since: 0.16)
     */
    EMPTY_MEMBER_NAME,
    /**
     * invalid data (Since: 0.18)
     */
    INVALID_DATA,
    /**
     * unknown error
     */
    UNKNOWN,
}
/**
 * Error codes for `JSON_PATH_ERROR`.
 * 
 * This enumeration can be extended at later date
 */
enum PathError {
    /**
     * Invalid query
     */
    QUERY,
}
/**
 * Error codes for `JSON_READER_ERROR`.
 * 
 * This enumeration can be extended at later date
 */
enum ReaderError {
    /**
     * No array found at the current position
     */
    NO_ARRAY,
    /**
     * Index out of bounds
     */
    INVALID_INDEX,
    /**
     * No object found at the current position
     */
    NO_OBJECT,
    /**
     * Member not found
     */
    INVALID_MEMBER,
    /**
     * No valid node found at the current position
     */
    INVALID_NODE,
    /**
     * The node at the current position does not
     *   hold a value
     */
    NO_VALUE,
    /**
     * The node at the current position does not
     *   hold a value of the desired type
     */
    INVALID_TYPE,
}
/**
 * Json major version component (e.g. 1 if `JSON_VERSION` is "1.2.3")
 */
const MAJOR_VERSION: number
/**
 * Json micro version component (e.g. 3 if `JSON_VERSION` is "1.2.3")
 */
const MICRO_VERSION: number
/**
 * Json minor version component (e.g. 2 if `JSON_VERSION` is "1.2.3")
 */
const MINOR_VERSION: number
/**
 * The version of JSON-GLib, encoded as a string, useful for printing and
 * concatenation.
 */
const VERSION_S: string
function boxed_can_deserialize(gboxed_type: GObject.Type, node_type: NodeType): boolean
function boxed_can_serialize(gboxed_type: GObject.Type): [ /* returnType */ boolean, /* node_type */ NodeType | null ]
function boxed_deserialize(gboxed_type: GObject.Type, node: Node): object | null
function boxed_serialize(gboxed_type: GObject.Type, boxed?: object | null): Node | null
function construct_gobject(gtype: GObject.Type, data: string, length: number): GObject.Object | null
function from_string(str: string): Node | null
function gobject_deserialize(gtype: GObject.Type, node: Node): GObject.Object
function gobject_from_data(gtype: GObject.Type, data: string, length: number): GObject.Object | null
function gobject_serialize(gobject: GObject.Object): Node
function gobject_to_data(gobject: GObject.Object): [ /* returnType */ string, /* length */ number | null ]
function gvariant_deserialize(json_node: Node, signature?: string | null): GLib.Variant | null
function gvariant_deserialize_data(json: string, length: number, signature?: string | null): GLib.Variant | null
function gvariant_serialize(variant: GLib.Variant): Node
function gvariant_serialize_data(variant: GLib.Variant): [ /* returnType */ string, /* length */ number | null ]
function parser_error_quark(): GLib.Quark
function path_error_quark(): GLib.Quark
function reader_error_quark(): GLib.Quark
function serialize_gobject(gobject: GObject.Object): [ /* returnType */ string, /* length */ number | null ]
function string_compare(a: string, b: string): number
function string_equal(a: string, b: string): boolean
function string_hash(key: string): number
function to_string(node: Node, pretty: boolean): string
/**
 * The function to be passed to [method`Json`.Array.foreach_element].
 * 
 * You should not add or remove elements to and from `array` within
 * this function.
 * 
 * It is safe to change the value of `element_node`.
 */
interface ArrayForeach {
    (array: Array, index_: number, element_node: Node): void
}
/**
 * Deserializes the contents of the passed `JsonNode` into a `GBoxed`, for instance:
 * 
 * ```c
 * static gpointer
 * my_point_deserialize (JsonNode *node)
 * {
 *   double x = 0.0, y = 0.0;
 * 
 *   if (JSON_NODE_HOLDS_ARRAY (node))
 *     {
 *       JsonArray *array = json_node_get_array (node);
 * 
 *       if (json_array_get_length (array) == 2)
 *         {
 *           x = json_array_get_double_element (array, 0);
 *           y = json_array_get_double_element (array, 1);
 *         }
 *     }
 *   else if (JSON_NODE_HOLDS_OBJECT (node))
 *     {
 *       JsonObject *obj = json_node_get_object (node);
 * 
 *       x = json_object_get_double_member_with_default (obj, "x", 0.0);
 *       y = json_object_get_double_member_with_default (obj, "y", 0.0);
 *     }
 * 
 *   // my_point_new() is defined elsewhere
 *   return my_point_new (x, y);
 * }
 * ```
 */
interface BoxedDeserializeFunc {
    (node: Node): object | null
}
/**
 * Serializes the passed `GBoxed` and stores it inside a `JsonNode`, for instance:
 * 
 * ```c
 * static JsonNode *
 * my_point_serialize (gconstpointer boxed)
 * {
 *   const MyPoint *point = boxed;
 * 
 *   g_autoptr(JsonBuilder) builder = json_builder_new ();
 * 
 *   json_builder_begin_object (builder);
 *   json_builder_set_member_name (builder, "x");
 *   json_builder_add_double_value (builder, point->x);
 *   json_builder_set_member_name (builder, "y");
 *   json_builder_add_double_value (builder, point->y);
 *   json_builder_end_object (builder);
 * 
 *   return json_builder_get_root (builder);
 * }
 * ```
 */
interface BoxedSerializeFunc {
    (boxed?: object | null): Node
}
/**
 * The function to be passed to [method`Json`.Object.foreach_member].
 * 
 * You should not add or remove members to and from `object` within
 * this function.
 * 
 * It is safe to change the value of `member_node`.
 */
interface ObjectForeach {
    (object: Object, member_name: string, member_node: Node): void
}
class Serializable {
    /* Methods of Json-1.0.Json.Serializable */
    /**
     * Calls the default implementation of the [vfunc`Json`.Serializable.deserialize_property]
     * virtual function.
     * 
     * This function can be used inside a custom implementation of the
     * `deserialize_property()` virtual function in lieu of calling the
     * default implementation through `g_type_default_interface_peek()`:
     * 
     * ```c
     * JsonSerializable *iface;
     * gboolean res;
     * 
     * iface = g_type_default_interface_peek (JSON_TYPE_SERIALIZABLE);
     * res = iface->deserialize_property (serializable, property_name,
     *                                    value,
     *                                    pspec,
     *                                    property_node);
     * ```
     */
    default_deserialize_property(property_name: string, value: any, pspec: GObject.ParamSpec, property_node: Node): boolean
    /**
     * Calls the default implementation of the [vfunc`Json`.Serializable.serialize_property]
     * virtual function.
     * 
     * This function can be used inside a custom implementation of the
     * `serialize_property()` virtual function in lieu of calling the
     * default implementation through `g_type_default_interface_peek()`:
     * 
     * ```c
     * JsonSerializable *iface;
     * JsonNode *node;
     * 
     * iface = g_type_default_interface_peek (JSON_TYPE_SERIALIZABLE);
     * node = iface->serialize_property (serializable, property_name,
     *                                   value,
     *                                   pspec);
     * ```
     * 
     * This function will return `NULL` if the property could not be
     * serialized.
     */
    default_serialize_property(property_name: string, value: any, pspec: GObject.ParamSpec): Node | null
    /**
     * Asks a `JsonSerializable` implementation to deserialize the
     * property contained inside `property_node` and place its value
     * into `value`.
     * 
     * The `value` can be:
     * 
     * - an empty `GValue` initialized by `G_VALUE_INIT`, which will be automatically
     *   initialized with the expected type of the property by using the given
     *   property description (since JSON-GLib 1.6)
     * - a `GValue` initialized with the expected type of the property
     */
    deserialize_property(property_name: string, pspec: GObject.ParamSpec, property_node: Node): [ /* returnType */ boolean, /* value */ any ]
    /**
     * Calls the [vfunc`Json`.Serializable.find_property] implementation on
     * the `JsonSerializable` instance, which will return the property
     * description for the given name.
     */
    find_property(name: string): GObject.ParamSpec | null
    /**
     * Calls the [vfunc`Json`.Serializable.get_property] implementation
     * on the `JsonSerializable` instance, which will get the value of
     * the given property.
     */
    get_property(pspec: GObject.ParamSpec): /* value */ any
    /**
     * Calls the [vfunc`Json`.Serializable.list_properties] implementation on
     * the `JsonSerializable` instance, which will return the list of serializable
     * properties.
     */
    list_properties(): GObject.ParamSpec[]
    /**
     * Asks a `JsonSerializable` implementation to serialize an object
     * property into a JSON node.
     */
    serialize_property(property_name: string, value: any, pspec: GObject.ParamSpec): Node
    /**
     * Calls the [vfunc`Json`.Serializable.set_property] implementation
     * on the `JsonSerializable` instance, which will set the property
     * with the given value.
     */
    set_property(pspec: GObject.ParamSpec, value: any): void
    /* Virtual methods of Json-1.0.Json.Serializable */
    /**
     * Asks a `JsonSerializable` implementation to deserialize the
     * property contained inside `property_node` and place its value
     * into `value`.
     * 
     * The `value` can be:
     * 
     * - an empty `GValue` initialized by `G_VALUE_INIT`, which will be automatically
     *   initialized with the expected type of the property by using the given
     *   property description (since JSON-GLib 1.6)
     * - a `GValue` initialized with the expected type of the property
     */
    vfunc_deserialize_property(property_name: string, pspec: GObject.ParamSpec, property_node: Node): [ /* returnType */ boolean, /* value */ any ]
    /**
     * Calls the [vfunc`Json`.Serializable.find_property] implementation on
     * the `JsonSerializable` instance, which will return the property
     * description for the given name.
     */
    vfunc_find_property(name: string): GObject.ParamSpec | null
    /**
     * Calls the [vfunc`Json`.Serializable.get_property] implementation
     * on the `JsonSerializable` instance, which will get the value of
     * the given property.
     */
    vfunc_get_property(pspec: GObject.ParamSpec): /* value */ any
    /* Function overloads */
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Asks a `JsonSerializable` implementation to serialize an object
     * property into a JSON node.
     */
    vfunc_serialize_property(property_name: string, value: any, pspec: GObject.ParamSpec): Node
    /**
     * Calls the [vfunc`Json`.Serializable.set_property] implementation
     * on the `JsonSerializable` instance, which will set the property
     * with the given value.
     */
    vfunc_set_property(pspec: GObject.ParamSpec, value: any): void
    /* Function overloads */
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    static name: string
}
interface Builder_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Json-1.0.Json.Builder */
    /**
     * Whether the tree should be immutable when created.
     * 
     * Making the output immutable on creation avoids the expense
     * of traversing it to make it immutable later.
     */
    immutable?: boolean
}
class Builder {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Json-1.0.Json.Builder */
    /**
     * Adds a boolean value to the currently open object member or array.
     * 
     * If called after [method`Json`.Builder.set_member_name], sets the given value
     * as the value of the current member in the open object; otherwise, the value
     * is appended to the elements of the open array.
     * 
     * See also: [method`Json`.Builder.add_value]
     */
    add_boolean_value(value: boolean): Builder | null
    /**
     * Adds a floating point value to the currently open object member or array.
     * 
     * If called after [method`Json`.Builder.set_member_name], sets the given value
     * as the value of the current member in the open object; otherwise, the value
     * is appended to the elements of the open array.
     * 
     * See also: [method`Json`.Builder.add_value]
     */
    add_double_value(value: number): Builder | null
    /**
     * Adds an integer value to the currently open object member or array.
     * 
     * If called after [method`Json`.Builder.set_member_name], sets the given value
     * as the value of the current member in the open object; otherwise, the value
     * is appended to the elements of the open array.
     * 
     * See also: [method`Json`.Builder.add_value]
     */
    add_int_value(value: number): Builder | null
    /**
     * Adds a null value to the currently open object member or array.
     * 
     * If called after [method`Json`.Builder.set_member_name], sets the given value
     * as the value of the current member in the open object; otherwise, the value
     * is appended to the elements of the open array.
     * 
     * See also: [method`Json`.Builder.add_value]
     */
    add_null_value(): Builder | null
    /**
     * Adds a boolean value to the currently open object member or array.
     * 
     * If called after [method`Json`.Builder.set_member_name], sets the given value
     * as the value of the current member in the open object; otherwise, the value
     * is appended to the elements of the open array.
     * 
     * See also: [method`Json`.Builder.add_value]
     */
    add_string_value(value: string): Builder | null
    /**
     * Adds a value to the currently open object member or array.
     * 
     * If called after [method`Json`.Builder.set_member_name], sets the given node
     * as the value of the current member in the open object; otherwise, the node
     * is appended to the elements of the open array.
     * 
     * The builder will take ownership of the node.
     */
    add_value(node: Node): Builder | null
    /**
     * Opens an array inside the given builder.
     * 
     * You can add a new element to the array by using [method`Json`.Builder.add_value].
     * 
     * Once you added all elements to the array, you must call
     * [method`Json`.Builder.end_array] to close the array.
     */
    begin_array(): Builder | null
    /**
     * Opens an object inside the given builder.
     * 
     * You can add a new member to the object by using [method`Json`.Builder.set_member_name],
     * followed by [method`Json`.Builder.add_value].
     * 
     * Once you added all members to the object, you must call [method`Json`.Builder.end_object]
     * to close the object.
     * 
     * If the builder is in an inconsistent state, this function will return `NULL`.
     */
    begin_object(): Builder | null
    /**
     * Closes the array inside the given builder that was opened by the most
     * recent call to [method`Json`.Builder.begin_array].
     * 
     * This function cannot be called after [method`Json`.Builder.set_member_name].
     */
    end_array(): Builder | null
    /**
     * Closes the object inside the given builder that was opened by the most
     * recent call to [method`Json`.Builder.begin_object].
     * 
     * This function cannot be called after [method`Json`.Builder.set_member_name].
     */
    end_object(): Builder | null
    /**
     * Returns the root of the currently constructed tree.
     * 
     * if the build is incomplete (ie: if there are any opened objects, or any
     * open object members and array elements) then this function will return
     * `NULL`.
     */
    get_root(): Node | null
    /**
     * Resets the state of the builder back to its initial state.
     */
    reset(): void
    /**
     * Sets the name of the member in an object.
     * 
     * This function must be followed by of these functions:
     * 
     *  - [method`Json`.Builder.add_value], to add a scalar value to the member
     *  - [method`Json`.Builder.begin_object], to add an object to the member
     *  - [method`Json`.Builder.begin_array], to add an array to the member
     * 
     * This function can only be called within an open object.
     */
    set_member_name(member_name: string): Builder | null
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
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
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
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
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
     */
    connect(sigName: "notify", callback: (($obj: Builder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Builder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Builder_ConstructProps)
    _init (config?: Builder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Builder
    static new_immutable(): Builder
    static $gtype: GObject.Type
}
interface Generator_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Json-1.0.Json.Generator */
    /**
     * Number of spaces to be used to indent when pretty printing.
     */
    indent?: number
    /**
     * The character that should be used when indenting in pretty print.
     */
    indent_char?: number
    /**
     * Whether the output should be "pretty-printed", with indentation and
     * newlines.
     * 
     * The indentation level can be controlled by using the
     * [property`Json`.Generator:indent] property.
     */
    pretty?: boolean
    /**
     * The root node to be used when constructing a JSON data
     * stream.
     */
    root?: Node
}
class Generator {
    /* Properties of Json-1.0.Json.Generator */
    /**
     * Number of spaces to be used to indent when pretty printing.
     */
    indent: number
    /**
     * The character that should be used when indenting in pretty print.
     */
    indent_char: number
    /**
     * Whether the output should be "pretty-printed", with indentation and
     * newlines.
     * 
     * The indentation level can be controlled by using the
     * [property`Json`.Generator:indent] property.
     */
    pretty: boolean
    /**
     * The root node to be used when constructing a JSON data
     * stream.
     */
    root: Node
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Json-1.0.Json.Generator */
    /**
     * Retrieves the value set using [method`Json`.Generator.set_indent].
     */
    get_indent(): number
    /**
     * Retrieves the value set using [method`Json`.Generator.set_indent_char].
     */
    get_indent_char(): number
    /**
     * Retrieves the value set using [method`Json`.Generator.set_pretty].
     */
    get_pretty(): boolean
    /**
     * Retrieves a pointer to the root node set using
     * [method`Json`.Generator.set_root].
     */
    get_root(): Node | null
    /**
     * Sets the number of repetitions for each indentation level.
     */
    set_indent(indent_level: number): void
    /**
     * Sets the character to be used when indenting.
     */
    set_indent_char(indent_char: number): void
    /**
     * Sets whether the generated JSON should be pretty printed.
     * 
     * Pretty printing will use indentation character specified in the
     * [property`Json`.Generator:indent-char] property and the spacing
     * specified in the [property`Json`.Generator:indent] property.
     */
    set_pretty(is_pretty: boolean): void
    /**
     * Sets the root of the JSON data stream to be serialized by
     * the given generator.
     * 
     * The passed `node` is copied by the generator object, so it can be
     * safely freed after calling this function.
     */
    set_root(node: Node): void
    /**
     * Generates a JSON data stream from `generator` and returns it as a
     * buffer.
     */
    to_data(): [ /* returnType */ string, /* length */ number | null ]
    /**
     * Creates a JSON data stream and puts it inside `filename`, overwriting
     * the file's current contents.
     * 
     * This operation is atomic, in the sense that the data is written to a
     * temporary file which is then renamed to the given `filename`.
     */
    to_file(filename: string): boolean
    /**
     * Generates a JSON data stream and appends it to the string buffer.
     */
    to_gstring(string: GLib.String): GLib.String
    /**
     * Outputs JSON data and writes it (synchronously) to the given stream.
     */
    to_stream(stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): boolean
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
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
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
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
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
     */
    connect(sigName: "notify", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::indent", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::indent-char", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent-char", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pretty", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pretty", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Generator_ConstructProps)
    _init (config?: Generator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Generator
    static $gtype: GObject.Type
}
interface Parser_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Json-1.0.Json.Parser */
    /**
     * Whether the tree built by the parser should be immutable
     * when created.
     * 
     * Making the output immutable on creation avoids the expense
     * of traversing it to make it immutable later.
     */
    immutable?: boolean
}
class Parser {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Json-1.0.Json.Parser */
    /**
     * Retrieves the line currently parsed, starting from 1.
     * 
     * This function has defined behaviour only while parsing; calling this
     * function from outside the signal handlers emitted by the parser will
     * yield 0.
     */
    get_current_line(): number
    /**
     * Retrieves the current position inside the current line, starting
     * from 0.
     * 
     * This function has defined behaviour only while parsing; calling this
     * function from outside the signal handlers emitted by the parser will
     * yield 0.
     */
    get_current_pos(): number
    /**
     * Retrieves the top level node from the parsed JSON stream.
     * 
     * If the parser input was an empty string, or if parsing failed, the root
     * will be `NULL`. It will also be `NULL` if it has been stolen using
     * [method`Json`.Parser.steal_root].
     */
    get_root(): Node | null
    /**
     * A JSON data stream might sometimes contain an assignment, like:
     * 
     * ```
     * var _json_data = { "member_name" : [ ...
     * ```
     * 
     * even though it would technically constitute a violation of the RFC.
     * 
     * `JsonParser` will ignore the left hand identifier and parse the right
     * hand value of the assignment. `JsonParser` will record, though, the
     * existence of the assignment in the data stream and the variable name
     * used.
     */
    has_assignment(): [ /* returnType */ boolean, /* variable_name */ string | null ]
    /**
     * Loads a JSON stream from a buffer and parses it.
     * 
     * You can call this function multiple times with the same parser, but the
     * contents of the parser will be destroyed each time.
     */
    load_from_data(data: string, length: number): boolean
    /**
     * Loads a JSON stream from the content of `filename` and parses it.
     * 
     * If the file is large or shared between processes,
     * [method`Json`.Parser.load_from_mapped_file] may be a more efficient
     * way to load it.
     * 
     * See also: [method`Json`.Parser.load_from_data]
     */
    load_from_file(filename: string): boolean
    /**
     * Loads a JSON stream from the content of `filename` and parses it.
     * 
     * Unlike [method`Json`.Parser.load_from_file], `filename` will be memory
     * mapped as read-only and parsed. `filename` will be unmapped before this
     * function returns.
     * 
     * If mapping or reading the file fails, a `G_FILE_ERROR` will be returned.
     */
    load_from_mapped_file(filename: string): boolean
    /**
     * Loads the contents of an input stream and parses them.
     * 
     * If `cancellable` is not `NULL`, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the
     * operation was cancelled, `G_IO_ERROR_CANCELLED` will be set
     * on the given `error`.
     */
    load_from_stream(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Asynchronously reads the contents of a stream.
     * 
     * For more details, see [method`Json`.Parser.load_from_stream], which is the
     * synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called. You should
     * then call [method`Json`.Parser.load_from_stream_finish] to get the result
     * of the operation.
     */
    load_from_stream_async(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous stream loading started with
     * [method`Json`.Parser.load_from_stream_async].
     */
    load_from_stream_finish(result: Gio.AsyncResult): boolean
    /**
     * Steals the top level node from the parsed JSON stream.
     * 
     * This will be `NULL` in the same situations as [method`Json`.Parser.get_root]
     * return `NULL`.
     */
    steal_root(): Node | null
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
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
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
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
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
     */
    watch_closure(closure: Function): void
    /* Virtual methods of Json-1.0.Json.Parser */
    vfunc_array_element(array: Array, index_: number): void
    vfunc_array_end(array: Array): void
    vfunc_array_start(): void
    vfunc_error(error: GLib.Error): void
    vfunc_object_end(object: Object): void
    vfunc_object_member(object: Object, member_name: string): void
    vfunc_object_start(): void
    vfunc_parse_end(): void
    vfunc_parse_start(): void
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
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Json-1.0.Json.Parser */
    /**
     * The `::array-element` signal is emitted each time a parser
     * has successfully parsed a single element of a JSON array.
     */
    connect(sigName: "array-element", callback: (($obj: Parser, array: Array, index_: number) => void)): number
    connect_after(sigName: "array-element", callback: (($obj: Parser, array: Array, index_: number) => void)): number
    emit(sigName: "array-element", array: Array, index_: number): void
    /**
     * The `::array-end` signal is emitted each time a parser
     * has successfully parsed an entire JSON array.
     */
    connect(sigName: "array-end", callback: (($obj: Parser, array: Array) => void)): number
    connect_after(sigName: "array-end", callback: (($obj: Parser, array: Array) => void)): number
    emit(sigName: "array-end", array: Array): void
    /**
     * The `::array-start` signal is emitted each time a parser
     * starts parsing a JSON array.
     */
    connect(sigName: "array-start", callback: (($obj: Parser) => void)): number
    connect_after(sigName: "array-start", callback: (($obj: Parser) => void)): number
    emit(sigName: "array-start"): void
    /**
     * The `::error` signal is emitted each time a parser encounters
     * an error in a JSON stream.
     */
    connect(sigName: "error", callback: (($obj: Parser, error?: object | null) => void)): number
    connect_after(sigName: "error", callback: (($obj: Parser, error?: object | null) => void)): number
    emit(sigName: "error", error?: object | null): void
    /**
     * The `::object-end` signal is emitted each time a parser
     * has successfully parsed an entire JSON object.
     */
    connect(sigName: "object-end", callback: (($obj: Parser, object: Object) => void)): number
    connect_after(sigName: "object-end", callback: (($obj: Parser, object: Object) => void)): number
    emit(sigName: "object-end", object: Object): void
    /**
     * The `::object-member` signal is emitted each time a parser
     * has successfully parsed a single member of a JSON object
     */
    connect(sigName: "object-member", callback: (($obj: Parser, object: Object, member_name: string) => void)): number
    connect_after(sigName: "object-member", callback: (($obj: Parser, object: Object, member_name: string) => void)): number
    emit(sigName: "object-member", object: Object, member_name: string): void
    /**
     * This signal is emitted each time a parser starts parsing a JSON object.
     */
    connect(sigName: "object-start", callback: (($obj: Parser) => void)): number
    connect_after(sigName: "object-start", callback: (($obj: Parser) => void)): number
    emit(sigName: "object-start"): void
    /**
     * This signal is emitted when a parser successfully finished parsing a
     * JSON data stream
     */
    connect(sigName: "parse-end", callback: (($obj: Parser) => void)): number
    connect_after(sigName: "parse-end", callback: (($obj: Parser) => void)): number
    emit(sigName: "parse-end"): void
    /**
     * This signal is emitted when a parser starts parsing a JSON data stream.
     */
    connect(sigName: "parse-start", callback: (($obj: Parser) => void)): number
    connect_after(sigName: "parse-start", callback: (($obj: Parser) => void)): number
    emit(sigName: "parse-start"): void
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
     */
    connect(sigName: "notify", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Parser_ConstructProps)
    _init (config?: Parser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Parser
    static new_immutable(): Parser
    static $gtype: GObject.Type
}
interface Path_ConstructProps extends GObject.Object_ConstructProps {
}
class Path {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Json-1.0.Json.Path */
    /**
     * Validates and decomposes the given expression.
     * 
     * A JSONPath expression must be compiled before calling
     * [method`Json`.Path.match].
     */
    compile(expression: string): boolean
    /**
     * Matches the JSON tree pointed by `root` using the expression compiled
     * into the `JsonPath`.
     * 
     * The nodes matching the expression will be copied into an array.
     */
    match(root: Node): Node
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
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
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
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
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
     */
    connect(sigName: "notify", callback: (($obj: Path, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Path, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Path_ConstructProps)
    _init (config?: Path_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Path
    /**
     * Queries a JSON tree using a JSONPath expression.
     * 
     * This function is a simple wrapper around [ctor`Json`.Path.new],
     * [method`Json`.Path.compile], and [method`Json`.Path.match]. It implicitly
     * creates a `JsonPath` instance, compiles the given expression and matches
     * it against the JSON tree pointed by `root`.
     */
    static query(expression: string, root: Node): Node
    static $gtype: GObject.Type
}
interface Reader_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Json-1.0.Json.Reader */
    /**
     * The root of the JSON tree that the reader should read.
     */
    root?: Node
}
class Reader {
    /* Properties of Json-1.0.Json.Reader */
    /**
     * The root of the JSON tree that the reader should read.
     */
    root: Node
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Json-1.0.Json.Reader */
    /**
     * Counts the elements of the current position, if the reader is
     * positioned on an array.
     * 
     * In case of failure, the reader is set to an error state.
     */
    count_elements(): number
    /**
     * Counts the members of the current position, if the reader is
     * positioned on an object.
     * 
     * In case of failure, the reader is set to an error state.
     */
    count_members(): number
    /**
     * Moves the cursor back to the previous node after being positioned
     * inside an array.
     * 
     * This function resets the error state of the reader, if any was set.
     */
    end_element(): void
    /**
     * Moves the cursor back to the previous node after being positioned
     * inside an object.
     * 
     * This function resets the error state of the reader, if any was set.
     */
    end_member(): void
    /**
     * Retrieves the boolean value of the current position of the reader.
     * 
     * See also: [method`Json`.Reader.get_value]
     */
    get_boolean_value(): boolean
    /**
     * Retrieves the floating point value of the current position of the reader.
     * 
     * See also: [method`Json`.Reader.get_value]
     */
    get_double_value(): number
    /**
     * Retrieves the error currently set on the reader.
     */
    get_error(): GLib.Error | null
    /**
     * Retrieves the integer value of the current position of the reader.
     * 
     * See also: [method`Json`.Reader.get_value]
     */
    get_int_value(): number
    /**
     * Retrieves the name of the current member.
     * 
     * In case of failure, the reader is set to an error state.
     */
    get_member_name(): string | null
    /**
     * Checks whether the value of the current position of the reader is `null`.
     * 
     * See also: [method`Json`.Reader.get_value]
     */
    get_null_value(): boolean
    /**
     * Retrieves the string value of the current position of the reader.
     * 
     * See also: [method`Json`.Reader.get_value]
     */
    get_string_value(): string
    /**
     * Retrieves the value node at the current position of the reader.
     * 
     * If the current position does not contain a scalar value, the reader
     * is set to an error state.
     */
    get_value(): Node | null
    /**
     * Checks whether the reader is currently on an array.
     */
    is_array(): boolean
    /**
     * Checks whether the reader is currently on an object.
     */
    is_object(): boolean
    /**
     * Checks whether the reader is currently on a value.
     */
    is_value(): boolean
    /**
     * Retrieves a list of member names from the current position, if the reader
     * is positioned on an object.
     * 
     * In case of failure, the reader is set to an error state.
     */
    list_members(): string[]
    /**
     * Advances the cursor of the reader to the element of the array or
     * the member of the object at the given position.
     * 
     * You can use [method`Json`.Reader.get_value] and its wrapper functions to
     * retrieve the value of the element; for instance, the following code will
     * read the first element of the array at the current cursor position:
     * 
     * ```c
     * json_reader_read_element (reader, 0);
     * int_value = json_reader_get_int_value (reader);
     * ```
     * 
     * After reading the value, you should call [method`Json`.Reader.end_element]
     * to reposition the cursor inside the reader, e.g.:
     * 
     * ```c
     * const char *str_value = NULL;
     * 
     * json_reader_read_element (reader, 1);
     * str_value = json_reader_get_string_value (reader);
     * json_reader_end_element (reader);
     * 
     * json_reader_read_element (reader, 2);
     * str_value = json_reader_get_string_value (reader);
     * json_reader_end_element (reader);
     * ```
     * 
     * If the reader is not currently on an array or an object, or if the index is
     * bigger than the size of the array or the object, the reader will be
     * put in an error state until [method`Json`.Reader.end_element] is called. This
     * means that, if used conditionally, [method`Json`.Reader.end_element] must be
     * called on all branches:
     * 
     * ```c
     * if (!json_reader_read_element (reader, 1))
     *   {
     *     g_propagate_error (error, json_reader_get_error (reader));
     *     json_reader_end_element (reader);
     *     return FALSE;
     *   }
     * else
     *   {
     *     const char *str_value = json_reader_get_string_value (reader);
     *     json_reader_end_element (reader);
     * 
     *     // use str_value
     * 
     *     return TRUE;
     *   }
     * ```c
     */
    read_element(index_: number): boolean
    /**
     * Advances the cursor of the reader to the `member_name` of the object at
     * the current position.
     * 
     * You can use [method`Json`.Reader.get_value] and its wrapper functions to
     * retrieve the value of the member; for instance:
     * 
     * ```c
     * json_reader_read_member (reader, "width");
     * width = json_reader_get_int_value (reader);
     * ```
     * 
     * After reading the value, `json_reader_end_member()` should be called to
     * reposition the cursor inside the reader, e.g.:
     * 
     * ```c
     * json_reader_read_member (reader, "author");
     * author = json_reader_get_string_value (reader);
     * json_reader_end_member (reader);
     * 
     * json_reader_read_member (reader, "title");
     * title = json_reader_get_string_value (reader);
     * json_reader_end_member (reader);
     * ```
     * 
     * If the reader is not currently on an object, or if the `member_name` is not
     * defined in the object, the reader will be put in an error state until
     * [method`Json`.Reader.end_member] is called. This means that if used
     * conditionally, [method`Json`.Reader.end_member] must be called on all branches:
     * 
     * ```c
     * if (!json_reader_read_member (reader, "title"))
     *   {
     *     g_propagate_error (error, json_reader_get_error (reader));
     *     json_reader_end_member (reader);
     *     return FALSE;
     *   }
     * else
     *   {
     *     const char *str_value = json_reader_get_string_value (reader);
     *     json_reader_end_member (reader);
     * 
     *     // use str_value
     * 
     *     return TRUE;
     *   }
     * ```
     */
    read_member(member_name: string): boolean
    /**
     * Sets the root node of the JSON tree to be read by `reader`.
     * 
     * The reader will take a copy of the node.
     */
    set_root(root?: Node | null): void
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
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
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
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
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
     */
    connect(sigName: "notify", callback: (($obj: Reader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Reader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::root", callback: (($obj: Reader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Reader, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Reader_ConstructProps)
    _init (config?: Reader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(node?: Node | null): Reader
    static $gtype: GObject.Type
}
class Array {
    /* Methods of Json-1.0.Json.Array */
    /**
     * Conveniently adds an array element into an array.
     * 
     * If `value` is `NULL`, a `null` element will be added instead.
     * 
     * See also: [method`Json`.Array.add_element], [method`Json`.Node.take_array]
     */
    add_array_element(value?: Array | null): void
    /**
     * Conveniently adds the given boolean value into an array.
     * 
     * See also: [method`Json`.Array.add_element], [method`Json`.Node.set_boolean]
     */
    add_boolean_element(value: boolean): void
    /**
     * Conveniently adds the given floating point value into an array.
     * 
     * See also: [method`Json`.Array.add_element], [method`Json`.Node.set_double]
     */
    add_double_element(value: number): void
    /**
     * Appends the given `node` inside an array.
     */
    add_element(node: Node): void
    /**
     * Conveniently adds the given integer value into an array.
     * 
     * See also: [method`Json`.Array.add_element], [method`Json`.Node.set_int]
     */
    add_int_element(value: number): void
    /**
     * Conveniently adds a `null` element into an array
     * 
     * See also: [method`Json`.Array.add_element], `JSON_NODE_NULL`
     */
    add_null_element(): void
    /**
     * Conveniently adds an object into an array.
     * 
     * If `value` is `NULL`, a `null` element will be added instead.
     * 
     * See also: [method`Json`.Array.add_element], [method`Json`.Node.take_object]
     */
    add_object_element(value?: Object | null): void
    /**
     * Conveniently adds the given string value into an array.
     * 
     * See also: [method`Json`.Array.add_element], [method`Json`.Node.set_string]
     */
    add_string_element(value: string): void
    /**
     * Retrieves a copy of the element at the given position in the array.
     */
    dup_element(index_: number): Node
    /**
     * Check whether two arrays are equal.
     * 
     * Equality is defined as:
     * 
     *  - the array have the same number of elements
     *  - the values of elements in corresponding positions are equal
     */
    equal(b: Array): boolean
    /**
     * Iterates over all elements of an array, and calls a function on
     * each one of them.
     * 
     * It is safe to change the value of an element of the array while
     * iterating over it, but it is not safe to add or remove elements
     * from the array.
     */
    foreach_element(func: ArrayForeach): void
    /**
     * Conveniently retrieves the array at the given position inside an array.
     * 
     * See also: [method`Json`.Array.get_element], [method`Json`.Node.get_array]
     */
    get_array_element(index_: number): Array
    /**
     * Conveniently retrieves the boolean value of the element at the given
     * position inside an array.
     * 
     * See also: [method`Json`.Array.get_element], [method`Json`.Node.get_boolean]
     */
    get_boolean_element(index_: number): boolean
    /**
     * Conveniently retrieves the floating point value of the element at
     * the given position inside an array.
     * 
     * See also: [method`Json`.Array.get_element], [method`Json`.Node.get_double]
     */
    get_double_element(index_: number): number
    /**
     * Retrieves the element at the given position in the array.
     */
    get_element(index_: number): Node
    /**
     * Retrieves all the elements of an array as a list of nodes.
     */
    get_elements(): Node[] | null
    /**
     * Conveniently retrieves the integer value of the element at the given
     * position inside an array.
     * 
     * See also: [method`Json`.Array.get_element], [method`Json`.Node.get_int]
     */
    get_int_element(index_: number): number
    /**
     * Retrieves the length of the given array
     */
    get_length(): number
    /**
     * Conveniently checks whether the element at the given position inside the
     * array contains a `null` value.
     * 
     * See also: [method`Json`.Array.get_element], [method`Json`.Node.is_null]
     */
    get_null_element(index_: number): boolean
    /**
     * Conveniently retrieves the object at the given position inside an array.
     * 
     * See also: [method`Json`.Array.get_element], [method`Json`.Node.get_object]
     */
    get_object_element(index_: number): Object
    /**
     * Conveniently retrieves the string value of the element at the given
     * position inside an array.
     * 
     * See also: [method`Json`.Array.get_element], [method`Json`.Node.get_string]
     */
    get_string_element(index_: number): string
    /**
     * Calculates a hash value for the given `key`.
     * 
     * The hash is calculated over the array and all its elements, recursively.
     * 
     * If the array is immutable, this is a fast operation; otherwise, it scales
     * proportionally with the length of the array.
     */
    hash(): number
    /**
     * Check whether the given `array` has been marked as immutable by calling
     * [method`Json`.Array.seal] on it.
     */
    is_immutable(): boolean
    /**
     * Acquires a reference on the given array.
     */
    ref(): Array
    /**
     * Removes the element at the given position inside an array.
     * 
     * This function will release the reference held on the element.
     */
    remove_element(index_: number): void
    /**
     * Seals the given array, making it immutable to further changes.
     * 
     * This function will recursively seal all elements in the array too.
     * 
     * If the `array` is already immutable, this is a no-op.
     */
    seal(): void
    /**
     * Releases a reference on the given array.
     * 
     * If the reference count reaches zero, the array is destroyed and all
     * its allocated resources are freed.
     */
    unref(): void
    static name: string
    static new(): Array
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Array
    static sized_new(n_elements: number): Array
}
abstract class BuilderClass {
    static name: string
}
class BuilderPrivate {
    static name: string
}
abstract class GeneratorClass {
    static name: string
}
class GeneratorPrivate {
    static name: string
}
class Node {
    /* Methods of Json-1.0.Json.Node */
    /**
     * Copies `node`.
     * 
     * If the node contains complex data types, their reference
     * counts are increased, regardless of whether the node is mutable or
     * immutable.
     * 
     * The copy will be immutable if, and only if, `node` is immutable. However,
     * there should be no need to copy an immutable node.
     */
    copy(): Node
    /**
     * Retrieves the JSON array inside `node`.
     * 
     * The reference count of the returned array is increased.
     * 
     * It is a programmer error to call this on a node which doesn’t hold an
     * array value. Use `JSON_NODE_HOLDS_ARRAY` first.
     */
    dup_array(): Array | null
    /**
     * Retrieves the object inside `node`.
     * 
     * The reference count of the returned object is increased.
     * 
     * It is a programmer error to call this on a node which doesn’t hold an
     * object value. Use `JSON_NODE_HOLDS_OBJECT` first.
     */
    dup_object(): Object | null
    /**
     * Gets a copy of the string value stored inside a node.
     * 
     * If the node does not hold a string value, `NULL` is returned.
     */
    dup_string(): string | null
    /**
     * Check whether `a` and `b` are equal node, meaning they have the same
     * type and same values (checked recursively).
     * 
     * Note that integer values are compared numerically, ignoring type, so a
     * double value 4.0 is equal to the integer value 4.
     */
    equal(b: Node): boolean
    /**
     * Frees the resources allocated by the node.
     */
    free(): void
    /**
     * Retrieves the JSON array stored inside a node.
     * 
     * It is a programmer error to call this on a node which doesn’t hold an
     * array value. Use `JSON_NODE_HOLDS_ARRAY` first.
     */
    get_array(): Array | null
    /**
     * Gets the boolean value stored inside a node.
     * 
     * If the node holds an integer or double value which is zero, `FALSE` is
     * returned; otherwise `TRUE` is returned.
     * 
     * If the node holds a `JSON_NODE_NULL` value or a value of another
     * non-boolean type, `FALSE` is returned.
     */
    get_boolean(): boolean
    /**
     * Gets the double value stored inside a node.
     * 
     * If the node holds an integer value, it is returned as a double.
     * 
     * If the node holds a `FALSE` boolean value, `0.0` is returned; otherwise
     * a non-zero double is returned.
     * 
     * If the node holds a `JSON_NODE_NULL` value or a value of another
     * non-double type, `0.0` is returned.
     */
    get_double(): number
    /**
     * Gets the integer value stored inside a node.
     * 
     * If the node holds a double value, its integer component is returned.
     * 
     * If the node holds a `FALSE` boolean value, `0` is returned; otherwise,
     * a non-zero integer is returned.
     * 
     * If the node holds a `JSON_NODE_NULL` value or a value of another
     * non-integer type, `0` is returned.
     */
    get_int(): number
    /**
     * Retrieves the type of a `node`.
     */
    get_node_type(): NodeType
    /**
     * Retrieves the object stored inside a node.
     * 
     * It is a programmer error to call this on a node which doesn’t hold an
     * object value. Use `JSON_NODE_HOLDS_OBJECT` first.
     */
    get_object(): Object | null
    /**
     * Retrieves the parent node of the given `node`.
     */
    get_parent(): Node | null
    /**
     * Gets the string value stored inside a node.
     * 
     * If the node does not hold a string value, `NULL` is returned.
     */
    get_string(): string | null
    /**
     * Retrieves a value from a node and copies into `value`.
     * 
     * When done using it, call `g_value_unset()` on the `GValue` to free the
     * associated resources.
     * 
     * It is a programmer error to call this on a node which doesn’t hold a scalar
     * value. Use `JSON_NODE_HOLDS_VALUE` first.
     */
    get_value(): /* value */ any
    /**
     * Returns the `GType` of the payload of the node.
     * 
     * For `JSON_NODE_NULL` nodes, the returned type is `G_TYPE_INVALID`.
     */
    get_value_type(): GObject.Type
    /**
     * Calculate a hash value for the given `key`.
     * 
     * The hash is calculated over the node and its value, recursively. If the node
     * is immutable, this is a fast operation; otherwise, it scales proportionally
     * with the size of the node’s value (for example, with the number of members
     * in the JSON object if this node contains an object).
     */
    hash(): number
    /**
     * Initializes a `node` to a specific `type`.
     * 
     * If the node has already been initialized once, it will be reset to
     * the given type, and any data contained will be cleared.
     */
    init(type: NodeType): Node
    /**
     * Initializes `node` to `JSON_NODE_ARRAY` and sets `array` into it.
     * 
     * This function will take a reference on `array`.
     * 
     * If the node has already been initialized once, it will be reset to
     * the given type, and any data contained will be cleared.
     */
    init_array(array?: Array | null): Node
    /**
     * Initializes `node` to `JSON_NODE_VALUE` and sets `value` into it.
     * 
     * If the node has already been initialized once, it will be reset to
     * the given type, and any data contained will be cleared.
     */
    init_boolean(value: boolean): Node
    /**
     * Initializes `node` to `JSON_NODE_VALUE` and sets `value` into it.
     * 
     * If the node has already been initialized once, it will be reset to
     * the given type, and any data contained will be cleared.
     */
    init_double(value: number): Node
    /**
     * Initializes `node` to `JSON_NODE_VALUE` and sets `value` into it.
     * 
     * If the node has already been initialized once, it will be reset to
     * the given type, and any data contained will be cleared.
     */
    init_int(value: number): Node
    /**
     * Initializes `node` to `JSON_NODE_NULL`.
     * 
     * If the node has already been initialized once, it will be reset to
     * the given type, and any data contained will be cleared.
     */
    init_null(): Node
    /**
     * Initializes `node` to `JSON_NODE_OBJECT` and sets `object` into it.
     * 
     * This function will take a reference on `object`.
     * 
     * If the node has already been initialized once, it will be reset to
     * the given type, and any data contained will be cleared.
     */
    init_object(object?: Object | null): Node
    /**
     * Initializes `node` to `JSON_NODE_VALUE` and sets `value` into it.
     * 
     * If the node has already been initialized once, it will be reset to
     * the given type, and any data contained will be cleared.
     */
    init_string(value?: string | null): Node
    /**
     * Check whether the given `node` has been marked as immutable by calling
     * [method`Json`.Node.seal] on it.
     */
    is_immutable(): boolean
    /**
     * Checks whether `node` is a `JSON_NODE_NULL`.
     * 
     * A `JSON_NODE_NULL` node is not the same as a `NULL` node; a `JSON_NODE_NULL`
     * represents a literal `null` value in the JSON tree.
     */
    is_null(): boolean
    /**
     * Increments the reference count of `node`.
     */
    ref(): Node
    /**
     * Seals the given node, making it immutable to further changes.
     * 
     * In order to be sealed, the `node` must have a type and value set. The value
     * will be recursively sealed — if the node holds an object, that JSON object
     * will be sealed, etc.
     * 
     * If the `node` is already immutable, this is a no-op.
     */
    seal(): void
    /**
     * Sets `array` inside `node`.
     * 
     * The reference count of `array` is increased.
     * 
     * It is a programmer error to call this on a node which doesn’t hold an
     * array value. Use `JSON_NODE_HOLDS_ARRAY` first.
     */
    set_array(array: Array): void
    /**
     * Sets `value` as the boolean content of the `node,` replacing any existing
     * content.
     * 
     * It is an error to call this on an immutable node, or on a node which is not
     * a value node.
     */
    set_boolean(value: boolean): void
    /**
     * Sets `value` as the double content of the `node,` replacing any existing
     * content.
     * 
     * It is an error to call this on an immutable node, or on a node which is not
     * a value node.
     */
    set_double(value: number): void
    /**
     * Sets `value` as the integer content of the `node,` replacing any existing
     * content.
     * 
     * It is an error to call this on an immutable node, or on a node which is not
     * a value node.
     */
    set_int(value: number): void
    /**
     * Sets `objects` inside `node`.
     * 
     * The reference count of `object` is increased.
     * 
     * If `object` is `NULL`, the node’s existing object is cleared.
     * 
     * It is an error to call this on an immutable node, or on a node which is not
     * an object node.
     */
    set_object(object?: Object | null): void
    /**
     * Sets the parent node for the given `node`.
     * 
     * It is an error to call this with an immutable `parent`.
     * 
     * The `node` may be immutable.
     */
    set_parent(parent?: Node | null): void
    /**
     * Sets `value` as the string content of the `node,` replacing any existing
     * content.
     * 
     * It is an error to call this on an immutable node, or on a node which is not
     * a value node.
     */
    set_string(value: string): void
    /**
     * Sets a scalar value inside the given node.
     * 
     * The contents of the given `GValue` are copied into the `JsonNode`.
     * 
     * The following `GValue` types have a direct mapping to JSON types:
     * 
     *  - `G_TYPE_INT64`
     *  - `G_TYPE_DOUBLE`
     *  - `G_TYPE_BOOLEAN`
     *  - `G_TYPE_STRING`
     * 
     * JSON-GLib will also automatically promote the following `GValue` types:
     * 
     *  - `G_TYPE_INT` to `G_TYPE_INT64`
     *  - `G_TYPE_FLOAT` to `G_TYPE_DOUBLE`
     * 
     * It is an error to call this on an immutable node, or on a node which is not
     * a value node.
     */
    set_value(value: any): void
    /**
     * Sets `array` inside `node`.
     * 
     * The reference count of `array` is not increased.
     * 
     * It is a programmer error to call this on a node which doesn’t hold an
     * array value. Use `JSON_NODE_HOLDS_ARRAY` first.
     */
    take_array(array: Array): void
    /**
     * Sets `object` inside `node`.
     * 
     * The reference count of `object` is not increased.
     * 
     * It is an error to call this on an immutable node, or on a node which is not
     * an object node.
     */
    take_object(object: Object): void
    /**
     * Retrieves the user readable name of the data type contained by `node`.
     * 
     * **Note**: The name is only meant for debugging purposes, and there is no
     * guarantee the name will stay the same across different versions.
     */
    type_name(): string
    /**
     * Decrements the reference count of `node`.
     * 
     * If the reference count reaches zero, the node is freed.
     */
    unref(): void
    static name: string
    static new(type: NodeType): Node
    constructor(type: NodeType)
    /* Static methods and pseudo-constructors */
    static alloc(): Node
    static new(type: NodeType): Node
}
class Object {
    /* Methods of Json-1.0.Json.Object */
    /**
     * Adds a new member for the given name and value into an object.
     * 
     * This function will return if the object already contains a member
     * with the same name.
     */
    add_member(member_name: string, node: Node): void
    /**
     * Retrieves a copy of the value of the given member inside an object.
     */
    dup_member(member_name: string): Node | null
    /**
     * Check whether `a` and `b` are equal objects, meaning they have the same
     * set of members, and the values of corresponding members are equal.
     */
    equal(b: Object): boolean
    /**
     * Iterates over all members of `object` and calls `func` on
     * each one of them.
     * 
     * It is safe to change the value of a member of the oobject
     * from within the iterator function, but it is not safe to add or
     * remove members from the object.
     * 
     * The order in which the object members are iterated is the
     * insertion order.
     */
    foreach_member(func: ObjectForeach): void
    /**
     * Convenience function that retrieves the array
     * stored in `member_name` of `object`. It is an error to specify a
     * `member_name` which does not exist.
     * 
     * If `member_name` contains `null`, then this function will return `NULL`.
     * 
     * See also: [method`Json`.Object.get_member], [method`Json`.Object.has_member]
     */
    get_array_member(member_name: string): Array | null
    /**
     * Convenience function that retrieves the boolean value
     * stored in `member_name` of `object`. It is an error to specify a
     * `member_name` which does not exist.
     * 
     * See also: [method`Json`.Object.get_boolean_member_with_default],
     *   [method`Json`.Object.get_member], [method`Json`.Object.has_member]
     */
    get_boolean_member(member_name: string): boolean
    /**
     * Convenience function that retrieves the boolean value
     * stored in `member_name` of `object`.
     * 
     * If `member_name` does not exist, does not contain a scalar value,
     * or contains `null`, then `default_value` is returned instead.
     */
    get_boolean_member_with_default(member_name: string, default_value: boolean): boolean
    /**
     * Convenience function that retrieves the floating point value
     * stored in `member_name` of `object`. It is an error to specify a
     * `member_name` which does not exist.
     * 
     * See also: [method`Json`.Object.get_double_member_with_default],
     *   [method`Json`.Object.get_member], [method`Json`.Object.has_member]
     */
    get_double_member(member_name: string): number
    /**
     * Convenience function that retrieves the floating point value
     * stored in `member_name` of `object`.
     * 
     * If `member_name` does not exist, does not contain a scalar value,
     * or contains `null`, then `default_value` is returned instead.
     */
    get_double_member_with_default(member_name: string, default_value: number): number
    /**
     * Convenience function that retrieves the integer value
     * stored in `member_name` of `object`. It is an error to specify a
     * `member_name` which does not exist.
     * 
     * See also: [method`Json`.Object.get_int_member_with_default],
     *   [method`Json`.Object.get_member], [method`Json`.Object.has_member]
     */
    get_int_member(member_name: string): number
    /**
     * Convenience function that retrieves the integer value
     * stored in `member_name` of `object`.
     * 
     * If `member_name` does not exist, does not contain a scalar value,
     * or contains `null`, then `default_value` is returned instead.
     */
    get_int_member_with_default(member_name: string, default_value: number): number
    /**
     * Retrieves the value of the given member inside an object.
     */
    get_member(member_name: string): Node | null
    /**
     * Retrieves all the names of the members of an object.
     * 
     * You can obtain the value for each member by iterating the returned list
     * and calling [method`Json`.Object.get_member].
     */
    get_members(): string[] | null
    /**
     * Convenience function that checks whether the value
     * stored in `member_name` of `object` is null. It is an error to
     * specify a `member_name` which does not exist.
     * 
     * See also: [method`Json`.Object.get_member], [method`Json`.Object.has_member]
     */
    get_null_member(member_name: string): boolean
    /**
     * Convenience function that retrieves the object
     * stored in `member_name` of `object`. It is an error to specify a `member_name`
     * which does not exist.
     * 
     * If `member_name` contains `null`, then this function will return `NULL`.
     * 
     * See also: [method`Json`.Object.get_member], [method`Json`.Object.has_member]
     */
    get_object_member(member_name: string): Object | null
    /**
     * Retrieves the number of members of a JSON object.
     */
    get_size(): number
    /**
     * Convenience function that retrieves the string value
     * stored in `member_name` of `object`. It is an error to specify a
     * `member_name` that does not exist.
     * 
     * See also: [method`Json`.Object.get_string_member_with_default],
     *   [method`Json`.Object.get_member], [method`Json`.Object.has_member]
     */
    get_string_member(member_name: string): string
    /**
     * Convenience function that retrieves the string value
     * stored in `member_name` of `object`.
     * 
     * If `member_name` does not exist, does not contain a scalar value,
     * or contains `null`, then `default_value` is returned instead.
     */
    get_string_member_with_default(member_name: string, default_value: string): string
    /**
     * Retrieves all the values of the members of an object.
     */
    get_values(): Node[] | null
    /**
     * Checks whether `object` has a member named `member_name`.
     */
    has_member(member_name: string): boolean
    /**
     * Calculate a hash value for the given `key` (a JSON object).
     * 
     * The hash is calculated over the object and all its members, recursively. If
     * the object is immutable, this is a fast operation; otherwise, it scales
     * proportionally with the number of members in the object.
     */
    hash(): number
    /**
     * Checks whether the given object has been marked as immutable by calling
     * [method`Json`.Object.seal] on it.
     */
    is_immutable(): boolean
    /**
     * Acquires a reference on the given object.
     */
    ref(): Object
    /**
     * Removes `member_name` from `object,` freeing its allocated resources.
     */
    remove_member(member_name: string): void
    /**
     * Seals the object, making it immutable to further changes.
     * 
     * This function will recursively seal all members of the object too.
     * 
     * If the object is already immutable, this is a no-op.
     */
    seal(): void
    /**
     * Convenience function for setting an object member with an array value.
     * 
     * See also: [method`Json`.Object.set_member], [method`Json`.Node.take_array]
     */
    set_array_member(member_name: string, value: Array): void
    /**
     * Convenience function for setting an object member with a boolean value.
     * 
     * See also: [method`Json`.Object.set_member], [method`Json`.Node.init_boolean]
     */
    set_boolean_member(member_name: string, value: boolean): void
    /**
     * Convenience function for setting an object member with a floating point value.
     * 
     * See also: [method`Json`.Object.set_member], [method`Json`.Node.init_double]
     */
    set_double_member(member_name: string, value: number): void
    /**
     * Convenience function for setting an object member with an integer value.
     * 
     * See also: [method`Json`.Object.set_member], [method`Json`.Node.init_int]
     */
    set_int_member(member_name: string, value: number): void
    /**
     * Sets the value of a member inside an object.
     * 
     * If the object does not have a member with the given name, a new member
     * is created.
     * 
     * If the object already has a member with the given name, the current
     * value is overwritten with the new.
     */
    set_member(member_name: string, node: Node): void
    /**
     * Convenience function for setting an object member with a `null` value.
     * 
     * See also: [method`Json`.Object.set_member], [method`Json`.Node.init_null]
     */
    set_null_member(member_name: string): void
    /**
     * Convenience function for setting an object member with an object value.
     * 
     * See also: [method`Json`.Object.set_member], [method`Json`.Node.take_object]
     */
    set_object_member(member_name: string, value: Object): void
    /**
     * Convenience function for setting an object member with a string value.
     * 
     * See also: [method`Json`.Object.set_member], [method`Json`.Node.init_string]
     */
    set_string_member(member_name: string, value: string): void
    /**
     * Releases a reference on the given object.
     * 
     * If the reference count reaches zero, the object is destroyed and
     * all its resources are freed.
     */
    unref(): void
    static name: string
    static new(): Object
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Object
}
class ObjectIter {
    /* Methods of Json-1.0.Json.ObjectIter */
    /**
     * Initialises the `iter` and associate it with `object`.
     * 
     * ```c
     * JsonObjectIter iter;
     * const gchar *member_name;
     * JsonNode *member_node;
     * 
     * json_object_iter_init (&iter, some_object);
     * while (json_object_iter_next (&iter, &member_name, &member_node))
     *   {
     *     // Do something with `member_name` and `member_node`.
     *   }
     * ```
     * 
     * The iterator initialized with this function will iterate the
     * members of the object in an undefined order.
     * 
     * See also: [method`Json`.ObjectIter.init_ordered]
     */
    init(object: Object): void
    /**
     * Initialises the `iter` and associate it with `object`.
     * 
     * ```c
     * JsonObjectIter iter;
     * const gchar *member_name;
     * JsonNode *member_node;
     * 
     * json_object_iter_init_ordered (&iter, some_object);
     * while (json_object_iter_next_ordered (&iter, &member_name, &member_node))
     *   {
     *     // Do something with `member_name` and `member_node`.
     *   }
     * ```
     * 
     * See also: [method`Json`.ObjectIter.init]
     */
    init_ordered(object: Object): void
    /**
     * Advances the iterator and retrieves the next member in the object.
     * 
     * If the end of the object is reached, `FALSE` is returned and `member_name`
     * and `member_node` are set to invalid values. After that point, the `iter`
     * is invalid.
     * 
     * The order in which members are returned by the iterator is undefined. The
     * iterator is invalidated if the object is modified during iteration.
     * 
     * You must use this function with an iterator initialized with
     * [method`Json`.ObjectIter.init]; using this function with an iterator
     * initialized with [method`Json`.ObjectIter.init_ordered] yields undefined
     * behavior.
     * 
     * See also: [method`Json`.ObjectIter.next_ordered]
     */
    next(): [ /* returnType */ boolean, /* member_name */ string | null, /* member_node */ Node | null ]
    /**
     * Advances the iterator and retrieves the next member in the object.
     * 
     * If the end of the object is reached, `FALSE` is returned and `member_name` and
     * `member_node` are set to invalid values. After that point, the `iter` is invalid.
     * 
     * The order in which members are returned by the iterator is the same order in
     * which the members were added to the `JsonObject`. The iterator is invalidated
     * if its `JsonObject` is modified during iteration.
     * 
     * You must use this function with an iterator initialized with
     * [method`Json`.ObjectIter.init_ordered]; using this function with an iterator
     * initialized with [method`Json`.ObjectIter.init] yields undefined behavior.
     * 
     * See also: [method`Json`.ObjectIter.next]
     */
    next_ordered(): [ /* returnType */ boolean, /* member_name */ string | null, /* member_node */ Node | null ]
    static name: string
}
abstract class ParserClass {
    /* Fields of Json-1.0.Json.ParserClass */
    readonly parse_start: (parser: Parser) => void
    readonly object_start: (parser: Parser) => void
    readonly object_member: (parser: Parser, object: Object, member_name: string) => void
    readonly object_end: (parser: Parser, object: Object) => void
    readonly array_start: (parser: Parser) => void
    readonly array_element: (parser: Parser, array: Array, index_: number) => void
    readonly array_end: (parser: Parser, array: Array) => void
    readonly parse_end: (parser: Parser) => void
    readonly error: (parser: Parser, error: GLib.Error) => void
    static name: string
}
class ParserPrivate {
    static name: string
}
abstract class PathClass {
    static name: string
}
abstract class ReaderClass {
    static name: string
}
class ReaderPrivate {
    static name: string
}
abstract class SerializableIface {
    /* Fields of Json-1.0.Json.SerializableIface */
    readonly serialize_property: (serializable: Serializable, property_name: string, value: any, pspec: GObject.ParamSpec) => Node
    readonly deserialize_property: (serializable: Serializable, property_name: string, pspec: GObject.ParamSpec, property_node: Node) => [ /* returnType */ boolean, /* value */ any ]
    readonly find_property: (serializable: Serializable, name: string) => GObject.ParamSpec | null
    readonly set_property: (serializable: Serializable, pspec: GObject.ParamSpec, value: any) => void
    readonly get_property: (serializable: Serializable, pspec: GObject.ParamSpec) => /* value */ any
    static name: string
}
}
export default Json;