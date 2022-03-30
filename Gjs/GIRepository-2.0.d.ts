/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GIRepository-2.0
 */

import type * as Gjs from './Gjs';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GIRepository {

/**
 * The type of array in a #GITypeInfo.
 */
enum ArrayType {
    /**
     * a C array, char[] for instance
     */
    C,
    /**
     * a `GArray` array
     */
    ARRAY,
    /**
     * a #GPtrArray array
     */
    PTR_ARRAY,
    /**
     * a #GByteArray array
     */
    BYTE_ARRAY,
}
/**
 * The direction of a #GIArgInfo.
 */
enum Direction {
    /**
     * in argument.
     */
    IN,
    /**
     * out argument.
     */
    OUT,
    /**
     * in and out argument.
     */
    INOUT,
}
/**
 * The type of a GIBaseInfo struct.
 */
enum InfoType {
    /**
     * invalid type
     */
    INVALID,
    /**
     * function, see #GIFunctionInfo
     */
    FUNCTION,
    /**
     * callback, see #GIFunctionInfo
     */
    CALLBACK,
    /**
     * struct, see #GIStructInfo
     */
    STRUCT,
    /**
     * boxed, see #GIStructInfo or #GIUnionInfo
     */
    BOXED,
    /**
     * enum, see #GIEnumInfo
     */
    ENUM,
    /**
     * flags, see #GIEnumInfo
     */
    FLAGS,
    /**
     * object, see #GIObjectInfo
     */
    OBJECT,
    /**
     * interface, see #GIInterfaceInfo
     */
    INTERFACE,
    /**
     * contant, see #GIConstantInfo
     */
    CONSTANT,
    /**
     * deleted, used to be GI_INFO_TYPE_ERROR_DOMAIN.
     */
    INVALID_0,
    /**
     * union, see #GIUnionInfo
     */
    UNION,
    /**
     * enum value, see #GIValueInfo
     */
    VALUE,
    /**
     * signal, see #GISignalInfo
     */
    SIGNAL,
    /**
     * virtual function, see #GIVFuncInfo
     */
    VFUNC,
    /**
     * GObject property, see #GIPropertyInfo
     */
    PROPERTY,
    /**
     * struct or union field, see #GIFieldInfo
     */
    FIELD,
    /**
     * argument of a function or callback, see #GIArgInfo
     */
    ARG,
    /**
     * type information, see #GITypeInfo
     */
    TYPE,
    /**
     * unresolved type, a type which is not present in
     *   the typelib, or any of its dependencies.
     */
    UNRESOLVED,
}
/**
 * An error code used with #G_IREPOSITORY_ERROR in a #GError returned
 * from a #GIRepository routine.
 */
enum RepositoryError {
    /**
     * the typelib could not be found.
     */
    TYPELIB_NOT_FOUND,
    /**
     * the namespace does not match the
     *   requested namespace.
     */
    NAMESPACE_MISMATCH,
    /**
     * the version of the
     *   typelib does not match the requested version.
     */
    NAMESPACE_VERSION_CONFLICT,
    /**
     * the library used by the typelib
     *   could not be found.
     */
    LIBRARY_NOT_FOUND,
}
/**
 * Scope type of a #GIArgInfo representing callback, determines how the
 * callback is invoked and is used to decided when the invoke structs
 * can be freed.
 */
enum ScopeType {
    /**
     * The argument is not of callback type.
     */
    INVALID,
    /**
     * The callback and associated user_data is only
     *   used during the call to this function.
     */
    CALL,
    /**
     * The callback and associated user_data is
     *   only used until the callback is invoked, and the callback.
     *   is invoked always exactly once.
     */
    ASYNC,
    /**
     * The callback and associated
     *   user_data is used until the caller is notfied via the destroy_notify.
     */
    NOTIFIED,
    /**
     * The callback and associated user_data is
     *   used until the process terminates
     */
    FOREVER,
}
/**
 * The transfer is the exchange of data between two parts, from the callee to
 * the caller. The callee is either a function/method/signal or an
 * object/interface where a property is defined. The caller is the side
 * accessing a property or calling a function.
 * #GITransfer specifies who's responsible for freeing the resources after the
 * ownership transfer is complete. In case of a containing type such as a list,
 * an array or a hash table the container itself is specified differently from
 * the items within the container itself. Each container is freed differently,
 * check the documentation for the types themselves for information on how to
 * free them.
 */
enum Transfer {
    /**
     * transfer nothing from the callee (function or the type
     * instance the property belongs to) to the caller. The callee retains the
     * ownership of the transfer and the caller doesn't need to do anything to free
     * up the resources of this transfer.
     */
    NOTHING,
    /**
     * transfer the container (list, array, hash table) from
     * the callee to the caller. The callee retains the ownership of the individual
     * items in the container and the caller has to free up the container resources
     * (g_list_free()/g_hash_table_destroy() etc) of this transfer.
     */
    CONTAINER,
    /**
     * transfer everything, eg the container and its
     * contents from the callee to the caller. This is the case when the callee
     * creates a copy of all the data it returns. The caller is responsible for
     * cleaning up the container and item resources of this transfer.
     */
    EVERYTHING,
}
/**
 * The type tag of a #GITypeInfo.
 */
enum TypeTag {
    /**
     * void
     */
    VOID,
    /**
     * boolean
     */
    BOOLEAN,
    /**
     * 8-bit signed integer
     */
    INT8,
    /**
     * 8-bit unsigned integer
     */
    UINT8,
    /**
     * 16-bit signed integer
     */
    INT16,
    /**
     * 16-bit unsigned integer
     */
    UINT16,
    /**
     * 32-bit signed integer
     */
    INT32,
    /**
     * 32-bit unsigned integer
     */
    UINT32,
    /**
     * 64-bit signed integer
     */
    INT64,
    /**
     * 64-bit unsigned integer
     */
    UINT64,
    /**
     * float
     */
    FLOAT,
    /**
     * double floating point
     */
    DOUBLE,
    /**
     * a #GType
     */
    GTYPE,
    /**
     * a UTF-8 encoded string
     */
    UTF8,
    /**
     * a filename, encoded in the same encoding
     *   as the native filesystem is using.
     */
    FILENAME,
    /**
     * an array
     */
    ARRAY,
    /**
     * an extended interface object
     */
    INTERFACE,
    /**
     * a #GList
     */
    GLIST,
    /**
     * a #GSList
     */
    GSLIST,
    /**
     * a #GHashTable
     */
    GHASH,
    /**
     * a #GError
     */
    ERROR,
    /**
     * Unicode character
     */
    UNICHAR,
}
/**
 * An error occuring while invoking a function via
 * g_function_info_invoke().
 */
enum nvokeError {
    /**
     * invokation failed, unknown error.
     */
    FAILED,
    /**
     * symbol couldn't be found in any of the
     * libraries associated with the typelib of the function.
     */
    SYMBOL_NOT_FOUND,
    /**
     * the arguments provided didn't match
     * the expected arguments for the functions type signature.
     */
    ARGUMENT_MISMATCH,
}
/**
 * Flags for a #GIFieldInfo.
 */
enum FieldInfoFlags {
    /**
     * field is readable.
     */
    READABLE,
    /**
     * field is writable.
     */
    WRITABLE,
}
/**
 * Flags for a #GIFunctionInfo struct.
 */
enum FunctionInfoFlags {
    /**
     * is a method.
     */
    IS_METHOD,
    /**
     * is a constructor.
     */
    IS_CONSTRUCTOR,
    /**
     * is a getter of a #GIPropertyInfo.
     */
    IS_GETTER,
    /**
     * is a setter of a #GIPropertyInfo.
     */
    IS_SETTER,
    /**
     * represents a virtual function.
     */
    WRAPS_VFUNC,
    /**
     * the function may throw an error.
     */
    THROWS,
}
/**
 * Flags that control how a typelib is loaded.
 */
enum RepositoryLoadFlags {
    /**
     * Lazily load the typelib.
     */
    IREPOSITORY_LOAD_FLAG_LAZY,
}
/**
 * Flags of a #GIVFuncInfo struct.
 */
enum VFuncInfoFlags {
    /**
     * chains up to the parent type
     */
    MUST_CHAIN_UP,
    /**
     * overrides
     */
    MUST_OVERRIDE,
    /**
     * does not override
     */
    MUST_NOT_OVERRIDE,
    /**
     * Includes a #GError
     */
    THROWS,
}
/**
 * The major version number of the girepository library.
 */
const MAJOR_VERSION: number
/**
 * The micro version number of the girepository library.
 */
const MICRO_VERSION: number
/**
 * The minor version number of the girepository library.
 */
const MINOR_VERSION: number
/**
 * TODO
 */
const TYPE_TAG_N_TYPES: number
function arg_info_get_closure(info: ArgInfo): number
function arg_info_get_destroy(info: ArgInfo): number
function arg_info_get_direction(info: ArgInfo): Direction
function arg_info_get_ownership_transfer(info: ArgInfo): Transfer
function arg_info_get_scope(info: ArgInfo): ScopeType
function arg_info_get_type(info: ArgInfo): TypeInfo
function arg_info_is_caller_allocates(info: ArgInfo): boolean
function arg_info_is_optional(info: ArgInfo): boolean
function arg_info_is_return_value(info: ArgInfo): boolean
function arg_info_is_skip(info: ArgInfo): boolean
function arg_info_load_type(info: ArgInfo): /* type */ TypeInfo
function arg_info_may_be_null(info: ArgInfo): boolean
function callable_info_can_throw_gerror(info: CallableInfo): boolean
function callable_info_get_arg(info: CallableInfo, n: number): ArgInfo
function callable_info_get_caller_owns(info: CallableInfo): Transfer
function callable_info_get_instance_ownership_transfer(info: CallableInfo): Transfer
function callable_info_get_n_args(info: CallableInfo): number
function callable_info_get_return_attribute(info: CallableInfo, name: string): string
function callable_info_get_return_type(info: CallableInfo): TypeInfo
function callable_info_invoke(info: CallableInfo, function_: object | null, in_args: Argument[], out_args: Argument[], return_value: Argument, is_method: boolean, throws: boolean): boolean
function callable_info_is_method(info: CallableInfo): boolean
function callable_info_iterate_return_attributes(info: CallableInfo, iterator: AttributeIter): [ /* returnType */ boolean, /* iterator */ AttributeIter, /* name */ string, /* value */ string ]
function callable_info_load_arg(info: CallableInfo, n: number): /* arg */ ArgInfo
function callable_info_load_return_type(info: CallableInfo): /* type */ TypeInfo
function callable_info_may_return_null(info: CallableInfo): boolean
function callable_info_skip_return(info: CallableInfo): boolean
function cclosure_marshal_generic(closure: Function, return_gvalue: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function constant_info_get_type(info: ConstantInfo): TypeInfo
function enum_info_get_error_domain(info: EnumInfo): string
function enum_info_get_method(info: EnumInfo, n: number): FunctionInfo
function enum_info_get_n_methods(info: EnumInfo): number
function enum_info_get_n_values(info: EnumInfo): number
function enum_info_get_storage_type(info: EnumInfo): TypeTag
function enum_info_get_value(info: EnumInfo, n: number): ValueInfo
function field_info_get_flags(info: FieldInfo): FieldInfoFlags
function field_info_get_offset(info: FieldInfo): number
function field_info_get_size(info: FieldInfo): number
function field_info_get_type(info: FieldInfo): TypeInfo
function function_info_get_flags(info: FunctionInfo): FunctionInfoFlags
function function_info_get_property(info: FunctionInfo): PropertyInfo
function function_info_get_symbol(info: FunctionInfo): string
function function_info_get_vfunc(info: FunctionInfo): VFuncInfo
function get_major_version(): number
function get_micro_version(): number
function get_minor_version(): number
function info_new(type: InfoType, container: BaseInfo, typelib: Typelib, offset: number): BaseInfo
function info_type_to_string(type: InfoType): string
function interface_info_find_method(info: InterfaceInfo, name: string): FunctionInfo
function interface_info_find_signal(info: InterfaceInfo, name: string): SignalInfo
function interface_info_find_vfunc(info: InterfaceInfo, name: string): VFuncInfo
function interface_info_get_constant(info: InterfaceInfo, n: number): ConstantInfo
function interface_info_get_iface_struct(info: InterfaceInfo): StructInfo
function interface_info_get_method(info: InterfaceInfo, n: number): FunctionInfo
function interface_info_get_n_constants(info: InterfaceInfo): number
function interface_info_get_n_methods(info: InterfaceInfo): number
function interface_info_get_n_prerequisites(info: InterfaceInfo): number
function interface_info_get_n_properties(info: InterfaceInfo): number
function interface_info_get_n_signals(info: InterfaceInfo): number
function interface_info_get_n_vfuncs(info: InterfaceInfo): number
function interface_info_get_prerequisite(info: InterfaceInfo, n: number): BaseInfo
function interface_info_get_property(info: InterfaceInfo, n: number): PropertyInfo
function interface_info_get_signal(info: InterfaceInfo, n: number): SignalInfo
function interface_info_get_vfunc(info: InterfaceInfo, n: number): VFuncInfo
function invoke_error_quark(): GLib.Quark
function object_info_find_method(info: ObjectInfo, name: string): FunctionInfo | null
function object_info_find_method_using_interfaces(info: ObjectInfo, name: string): [ /* returnType */ FunctionInfo | null, /* implementor */ ObjectInfo ]
function object_info_find_signal(info: ObjectInfo, name: string): SignalInfo | null
function object_info_find_vfunc(info: ObjectInfo, name: string): VFuncInfo | null
function object_info_find_vfunc_using_interfaces(info: ObjectInfo, name: string): [ /* returnType */ VFuncInfo | null, /* implementor */ ObjectInfo ]
function object_info_get_abstract(info: ObjectInfo): boolean
function object_info_get_class_struct(info: ObjectInfo): StructInfo | null
function object_info_get_constant(info: ObjectInfo, n: number): ConstantInfo
function object_info_get_field(info: ObjectInfo, n: number): FieldInfo
function object_info_get_final(info: ObjectInfo): boolean
function object_info_get_fundamental(info: ObjectInfo): boolean
function object_info_get_get_value_function(info: ObjectInfo): string | null
function object_info_get_interface(info: ObjectInfo, n: number): InterfaceInfo
function object_info_get_method(info: ObjectInfo, n: number): FunctionInfo
function object_info_get_n_constants(info: ObjectInfo): number
function object_info_get_n_fields(info: ObjectInfo): number
function object_info_get_n_interfaces(info: ObjectInfo): number
function object_info_get_n_methods(info: ObjectInfo): number
function object_info_get_n_properties(info: ObjectInfo): number
function object_info_get_n_signals(info: ObjectInfo): number
function object_info_get_n_vfuncs(info: ObjectInfo): number
function object_info_get_parent(info: ObjectInfo): ObjectInfo | null
function object_info_get_property(info: ObjectInfo, n: number): PropertyInfo
function object_info_get_ref_function(info: ObjectInfo): string | null
function object_info_get_set_value_function(info: ObjectInfo): string | null
function object_info_get_signal(info: ObjectInfo, n: number): SignalInfo
function object_info_get_type_init(info: ObjectInfo): string
function object_info_get_type_name(info: ObjectInfo): string
function object_info_get_unref_function(info: ObjectInfo): string | null
function object_info_get_vfunc(info: ObjectInfo, n: number): VFuncInfo
function property_info_get_flags(info: PropertyInfo): GObject.ParamFlags
function property_info_get_getter(info: PropertyInfo): FunctionInfo | null
function property_info_get_ownership_transfer(info: PropertyInfo): Transfer
function property_info_get_setter(info: PropertyInfo): FunctionInfo | null
function property_info_get_type(info: PropertyInfo): TypeInfo
function registered_type_info_get_g_type(info: RegisteredTypeInfo): GObject.Type
function registered_type_info_get_type_init(info: RegisteredTypeInfo): string
function registered_type_info_get_type_name(info: RegisteredTypeInfo): string
function signal_info_get_class_closure(info: SignalInfo): VFuncInfo
function signal_info_get_flags(info: SignalInfo): GObject.SignalFlags
function signal_info_true_stops_emit(info: SignalInfo): boolean
function struct_info_find_field(info: StructInfo, name: string): FieldInfo
function struct_info_find_method(info: StructInfo, name: string): FunctionInfo
function struct_info_get_alignment(info: StructInfo): number
function struct_info_get_field(info: StructInfo, n: number): FieldInfo
function struct_info_get_method(info: StructInfo, n: number): FunctionInfo
function struct_info_get_n_fields(info: StructInfo): number
function struct_info_get_n_methods(info: StructInfo): number
function struct_info_get_size(info: StructInfo): number
function struct_info_is_foreign(info: StructInfo): boolean
function struct_info_is_gtype_struct(info: StructInfo): boolean
function type_info_argument_from_hash_pointer(info: TypeInfo, hash_pointer: object | null, arg: Argument): void
function type_info_get_array_fixed_size(info: TypeInfo): number
function type_info_get_array_length(info: TypeInfo): number
function type_info_get_array_type(info: TypeInfo): ArrayType
function type_info_get_interface(info: TypeInfo): BaseInfo
function type_info_get_param_type(info: TypeInfo, n: number): TypeInfo
function type_info_get_storage_type(info: TypeInfo): TypeTag
function type_info_get_tag(info: TypeInfo): TypeTag
function type_info_hash_pointer_from_argument(info: TypeInfo, arg: Argument): object | null
function type_info_is_pointer(info: TypeInfo): boolean
function type_info_is_zero_terminated(info: TypeInfo): boolean
function type_tag_argument_from_hash_pointer(storage_type: TypeTag, hash_pointer: object | null, arg: Argument): void
function type_tag_hash_pointer_from_argument(storage_type: TypeTag, arg: Argument): object | null
function type_tag_to_string(type: TypeTag): string
function union_info_find_method(info: UnionInfo, name: string): FunctionInfo
function union_info_get_alignment(info: UnionInfo): number
function union_info_get_discriminator(info: UnionInfo, n: number): ConstantInfo
function union_info_get_discriminator_offset(info: UnionInfo): number
function union_info_get_discriminator_type(info: UnionInfo): TypeInfo
function union_info_get_field(info: UnionInfo, n: number): FieldInfo
function union_info_get_method(info: UnionInfo, n: number): FunctionInfo
function union_info_get_n_fields(info: UnionInfo): number
function union_info_get_n_methods(info: UnionInfo): number
function union_info_get_size(info: UnionInfo): number
function union_info_is_discriminated(info: UnionInfo): boolean
function value_info_get_value(info: ValueInfo): number
function vfunc_info_get_address(info: VFuncInfo, implementor_gtype: GObject.Type): object | null
function vfunc_info_get_flags(info: VFuncInfo): VFuncInfoFlags
function vfunc_info_get_invoker(info: VFuncInfo): FunctionInfo
function vfunc_info_get_offset(info: VFuncInfo): number
function vfunc_info_get_signal(info: VFuncInfo): SignalInfo
interface Repository_ConstructProps extends GObject.Object_ConstructProps {
}
class Repository {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GIRepository-2.0.GIRepository.Repository */
    /**
     * Obtain an unordered list of versions (either currently loaded or
     * available) for `namespace_` in this `repository`.
     * @param namespace_ GI namespace, e.g. "Gtk"
     */
    enumerate_versions(namespace_: string): string[]
    /**
     * Searches for the enum type corresponding to the given #GError
     * domain. Before calling this function for a particular namespace,
     * you must call g_irepository_require() once to load the namespace, or
     * otherwise ensure the namespace has already been loaded.
     * @param domain a #GError domain
     */
    find_by_error_domain(domain: GLib.Quark): EnumInfo
    /**
     * Searches all loaded namespaces for a particular #GType.  Note that
     * in order to locate the metadata, the namespace corresponding to
     * the type must first have been loaded.  There is currently no
     * mechanism for determining the namespace which corresponds to an
     * arbitrary GType - thus, this function will operate most reliably
     * when you know the GType to originate from be from a loaded namespace.
     * @param gtype GType to search for
     */
    find_by_gtype(gtype: GObject.Type): BaseInfo
    /**
     * Searches for a particular entry in a namespace.  Before calling
     * this function for a particular namespace, you must call
     * g_irepository_require() once to load the namespace, or otherwise
     * ensure the namespace has already been loaded.
     * @param namespace_ Namespace which will be searched
     * @param name Entry name to find
     */
    find_by_name(namespace_: string, name: string): BaseInfo
    /**
     * This function returns the "C prefix", or the C level namespace
     * associated with the given introspection namespace.  Each C symbol
     * starts with this prefix, as well each #GType in the library.
     * 
     * Note: The namespace must have already been loaded using a function
     * such as g_irepository_require() before calling this function.
     * @param namespace_ Namespace to inspect
     */
    get_c_prefix(namespace_: string): string
    /**
     * Retrieves all (transitive) versioned dependencies for
     * `namespace_`.
     * 
     * The strings are of the form `namespace-version`.
     * 
     * Note: `namespace_` must have already been loaded using a function
     * such as g_irepository_require() before calling this function.
     * 
     * To get only the immediate dependencies for `namespace_,` use
     * g_irepository_get_immediate_dependencies().
     * @param namespace_ Namespace of interest
     */
    get_dependencies(namespace_: string): string[]
    /**
     * Return an array of the immediate versioned dependencies for `namespace_`.
     * Returned strings are of the form `namespace-version`.
     * 
     * Note: `namespace_` must have already been loaded using a function
     * such as g_irepository_require() before calling this function.
     * 
     * To get the transitive closure of dependencies for `namespace_,` use
     * g_irepository_get_dependencies().
     * @param namespace_ Namespace of interest
     */
    get_immediate_dependencies(namespace_: string): string[]
    /**
     * This function returns a particular metadata entry in the
     * given namespace `namespace_`.  The namespace must have
     * already been loaded before calling this function.
     * See g_irepository_get_n_infos() to find the maximum number of
     * entries.
     * @param namespace_ Namespace to inspect
     * @param index 0-based offset into namespace metadata for entry
     */
    get_info(namespace_: string, index: number): BaseInfo
    /**
     * Return the list of currently loaded namespaces.
     */
    get_loaded_namespaces(): string[]
    /**
     * This function returns the number of metadata entries in
     * given namespace `namespace_`.  The namespace must have
     * already been loaded before calling this function.
     * @param namespace_ Namespace to inspect
     */
    get_n_infos(namespace_: string): number
    /**
     * Look up the implemented interfaces for `gtype`.  This function
     * cannot fail per se; but for a totally "unknown" #GType, it may
     * return 0 implemented interfaces.
     * 
     * The semantics of this function are designed for a dynamic binding,
     * where in certain cases (such as a function which returns an
     * interface which may have "hidden" implementation classes), not all
     * data may be statically known, and will have to be determined from
     * the #GType of the object.  An example is g_file_new_for_path()
     * returning a concrete class of #GLocalFile, which is a #GType we
     * see at runtime, but not statically.
     * @param gtype a #GType whose fundamental type is G_TYPE_OBJECT
     */
    get_object_gtype_interfaces(gtype: GObject.Type): /* interfaces_out */ InterfaceInfo[]
    /**
     * This function returns a comma-separated list of paths to the
     * shared C libraries associated with the given namespace `namespace_`.
     * There may be no shared library path associated, in which case this
     * function will return %NULL.
     * 
     * Note: The namespace must have already been loaded using a function
     * such as g_irepository_require() before calling this function.
     * @param namespace_ Namespace to inspect
     */
    get_shared_library(namespace_: string): string | null
    /**
     * If namespace `namespace_` is loaded, return the full path to the
     * .typelib file it was loaded from.  If the typelib for
     * namespace `namespace_` was included in a shared library, return
     * the special string "&lt;builtin&gt;".
     * @param namespace_ GI namespace to use, e.g. "Gtk"
     */
    get_typelib_path(namespace_: string): string
    /**
     * This function returns the loaded version associated with the given
     * namespace `namespace_`.
     * 
     * Note: The namespace must have already been loaded using a function
     * such as g_irepository_require() before calling this function.
     * @param namespace_ Namespace to inspect
     */
    get_version(namespace_: string): string
    /**
     * Check whether a particular namespace (and optionally, a specific
     * version thereof) is currently loaded.  This function is likely to
     * only be useful in unusual circumstances; in order to act upon
     * metadata in the namespace, you should call g_irepository_require()
     * instead which will ensure the namespace is loaded, and return as
     * quickly as this function will if it has already been loaded.
     * @param namespace_ Namespace of interest
     * @param version Required version, may be %NULL for latest
     */
    is_registered(namespace_: string, version?: string | null): boolean
    /**
     * TODO
     * @param typelib TODO
     * @param flags TODO
     */
    load_typelib(typelib: Typelib, flags: RepositoryLoadFlags): string
    /**
     * Force the namespace `namespace_` to be loaded if it isn't already.
     * If `namespace_` is not loaded, this function will search for a
     * ".typelib" file using the repository search path.  In addition, a
     * version `version` of namespace may be specified.  If `version` is
     * not specified, the latest will be used.
     * @param namespace_ GI namespace to use, e.g. "Gtk"
     * @param version Version of namespace, may be %NULL for latest
     * @param flags Set of %GIRepositoryLoadFlags, may be 0
     */
    require(namespace_: string, version: string | null, flags: RepositoryLoadFlags): Typelib
    /**
     * Force the namespace `namespace_` to be loaded if it isn't already.
     * If `namespace_` is not loaded, this function will search for a
     * ".typelib" file within the private directory only. In addition, a
     * version `version` of namespace should be specified.  If `version` is
     * not specified, the latest will be used.
     * @param typelib_dir Private directory where to find the requested typelib
     * @param namespace_ GI namespace to use, e.g. "Gtk"
     * @param version Version of namespace, may be %NULL for latest
     * @param flags Set of %GIRepositoryLoadFlags, may be 0
     */
    require_private(typelib_dir: string, namespace_: string, version: string | null, flags: RepositoryLoadFlags): Typelib
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
    connect(sigName: "notify", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Repository_ConstructProps)
    _init (config?: Repository_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static dump(arg: string): boolean
    static error_quark(): GLib.Quark
    /**
     * Returns the singleton process-global default #GIRepository. It is
     * not currently supported to have multiple repositories in a
     * particular process, but this function is provided in the unlikely
     * eventuality that it would become possible, and as a convenience for
     * higher level language bindings to conform to the GObject method
     * call conventions.
     * 
     * All methods on #GIRepository also accept %NULL as an instance
     * parameter to mean this default repository, which is usually more
     * convenient for C.
     */
    static get_default(): Repository
    /**
     * Obtain the option group for girepository, it's used
     * by the dumper and for programs that wants to provide
     * introspection information
     */
    static get_option_group(): GLib.OptionGroup
    /**
     * Returns the current search path #GIRepository will use when loading
     * typelib files. The list is internal to #GIRepository and should not
     * be freed, nor should its string elements.
     */
    static get_search_path(): string[]
    static prepend_library_path(directory: string): void
    /**
     * Prepends `directory` to the typelib search path.
     * 
     * See also: g_irepository_get_search_path().
     * @param directory directory name to prepend to the typelib   search path
     */
    static prepend_search_path(directory: string): void
    static $gtype: GObject.Type
}
class AttributeIter {
    static name: string
}
class BaseInfo {
    /* Methods of GIRepository-2.0.GIRepository.BaseInfo */
    /**
     * Compare two #GIBaseInfo.
     * 
     * Using pointer comparison is not practical since many functions return
     * different instances of #GIBaseInfo that refers to the same part of the
     * TypeLib; use this function instead to do #GIBaseInfo comparisons.
     * @param info2 a #GIBaseInfo
     */
    equal(info2: BaseInfo): boolean
    /**
     * Retrieve an arbitrary attribute associated with this node.
     * @param name a freeform string naming an attribute
     */
    get_attribute(name: string): string
    /**
     * Obtain the container of the `info`. The container is the parent
     * GIBaseInfo. For instance, the parent of a #GIFunctionInfo is an
     * #GIObjectInfo or #GIInterfaceInfo.
     */
    get_container(): BaseInfo
    /**
     * Obtain the name of the `info`. What the name represents depends on
     * the #GIInfoType of the `info`. For instance for #GIFunctionInfo it is
     * the name of the function.
     */
    get_name(): string
    /**
     * Obtain the namespace of `info`.
     */
    get_namespace(): string
    /**
     * Obtain the info type of the GIBaseInfo.
     */
    get_type(): InfoType
    /**
     * Obtain the typelib this `info` belongs to
     */
    get_typelib(): Typelib
    /**
     * Obtain whether the `info` is represents a metadata which is
     * deprecated or not.
     */
    is_deprecated(): boolean
    /**
     * Iterate over all attributes associated with this node.  The iterator
     * structure is typically stack allocated, and must have its first
     * member initialized to %NULL.  Attributes are arbitrary namespaced key–value
     * pairs which can be attached to almost any item.  They are intended for use
     * by software higher in the toolchain than bindings, and are distinct from
     * normal GIR annotations.
     * 
     * Both the `name` and `value` should be treated as constants
     * and must not be freed.
     * 
     * 
     * ```c
     * void
     * print_attributes (GIBaseInfo *info)
     * {
     *   GIAttributeIter iter = { 0, };
     *   char *name;
     *   char *value;
     *   while (g_base_info_iterate_attributes (info, &iter, &name, &value))
     *     {
     *       g_print ("attribute name: %s value: %s", name, value);
     *     }
     * }
     * ```
     * 
     * @param iterator a #GIAttributeIter structure, must be initialized; see below
     */
    iterate_attributes(iterator: AttributeIter): [ /* returnType */ boolean, /* iterator */ AttributeIter, /* name */ string, /* value */ string ]
    static name: string
}
abstract class RepositoryClass {
    static name: string
}
class RepositoryPrivate {
    static name: string
}
class Typelib {
    /* Methods of GIRepository-2.0.GIRepository.Typelib */
    free(): void
    get_namespace(): string
    symbol(symbol_name: string, symbol?: object | null): boolean
    static name: string
}
class UnresolvedInfo {
    static name: string
}
class Argument {
    static name: string
}
    type ArgInfo = BaseInfo
    type CallableInfo = BaseInfo
    type CallbackInfo = BaseInfo
    type ConstantInfo = BaseInfo
    type EnumInfo = BaseInfo
    type FieldInfo = BaseInfo
    type FunctionInfo = BaseInfo
    type InterfaceInfo = BaseInfo
    type ObjectInfo = BaseInfo
    type PropertyInfo = BaseInfo
    type RegisteredTypeInfo = BaseInfo
    type SignalInfo = BaseInfo
    type StructInfo = BaseInfo
    type TypeInfo = BaseInfo
    type UnionInfo = BaseInfo
    type VFuncInfo = BaseInfo
    type ValueInfo = BaseInfo
}
export default GIRepository;