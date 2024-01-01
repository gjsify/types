
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-girepository-2.0-import.d.ts';
    
/**
 * GIRepository-2.0
 */

import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

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
 * @bitfield 
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
 * @bitfield 
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
 * @bitfield 
 */
enum RepositoryLoadFlags {
    /**
     * Lazily load the typelib.
     */
    IREPOSITORY_LOAD_FLAG_LAZY,
}
/**
 * Flags of a #GIVFuncInfo struct.
 * @bitfield 
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
/**
 * Obtain the index of the user data argument. This is only valid
 * for arguments which are callbacks.
 * @param info a #GIArgInfo
 * @returns index of the user data argument or -1 if there is none
 */
function argInfoGetClosure(info: ArgInfo): number
/**
 * Obtains the index of the #GDestroyNotify argument. This is only valid
 * for arguments which are callbacks.
 * @param info a #GIArgInfo
 * @returns index of the #GDestroyNotify argument or -1 if there is none
 */
function argInfoGetDestroy(info: ArgInfo): number
/**
 * Obtain the direction of the argument. Check #GIDirection for possible
 * direction values.
 * @param info a #GIArgInfo
 * @returns the direction
 */
function argInfoGetDirection(info: ArgInfo): Direction
/**
 * Obtain the ownership transfer for this argument.
 * #GITransfer contains a list of possible values.
 * @param info a #GIArgInfo
 * @returns the transfer
 */
function argInfoGetOwnershipTransfer(info: ArgInfo): Transfer
/**
 * Obtain the scope type for this argument. The scope type explains
 * how a callback is going to be invoked, most importantly when
 * the resources required to invoke it can be freed.
 * #GIScopeType contains a list of possible values.
 * @param info a #GIArgInfo
 * @returns the scope type
 */
function argInfoGetScope(info: ArgInfo): ScopeType
/**
 * Obtain the type information for `info`.
 * @param info a #GIArgInfo
 * @returns the #GITypeInfo holding the type   information for @info, free it with g_base_info_unref()   when done.
 */
function argInfoGetType(info: ArgInfo): TypeInfo
/**
 * Obtain if the argument is a pointer to a struct or object that will
 * receive an output of a function.  The default assumption for
 * %GI_DIRECTION_OUT arguments which have allocation is that the
 * callee allocates; if this is %TRUE, then the caller must allocate.
 * @param info a #GIArgInfo
 * @returns %TRUE if caller is required to have allocated the argument
 */
function argInfoIsCallerAllocates(info: ArgInfo): boolean
/**
 * Obtain if the argument is optional.  For 'out' arguments this means
 * that you can pass %NULL in order to ignore the result.
 * @param info a #GIArgInfo
 * @returns %TRUE if it is an optional argument
 */
function argInfoIsOptional(info: ArgInfo): boolean
/**
 * Obtain if the argument is a return value. It can either be a
 * parameter or a return value.
 * @param info a #GIArgInfo
 * @returns %TRUE if it is a return value
 */
function argInfoIsReturnValue(info: ArgInfo): boolean
/**
 * Obtain if an argument is only useful in C.
 * @param info a #GIArgInfo
 * @returns %TRUE if argument is only useful in C.
 */
function argInfoIsSkip(info: ArgInfo): boolean
/**
 * Obtain information about a the type of given argument `info;` this
 * function is a variant of g_arg_info_get_type() designed for stack
 * allocation.
 * 
 * The initialized `type` must not be referenced after `info` is deallocated.
 * @param info a #GIArgInfo
 */
function argInfoLoadType(info: ArgInfo): /* type */ TypeInfo
/**
 * Obtain if the type of the argument includes the possibility of %NULL.
 * For 'in' values this means that %NULL is a valid value.  For 'out'
 * values, this means that %NULL may be returned.
 * 
 * See also g_arg_info_is_optional().
 * @param info a #GIArgInfo
 * @returns %TRUE if the value may be %NULL
 */
function argInfoMayBeNull(info: ArgInfo): boolean
/**
 * TODO
 * @param info a #GICallableInfo
 * @returns %TRUE if this #GICallableInfo can throw a #GError
 */
function callableInfoCanThrowGerror(info: CallableInfo): boolean
/**
 * Obtain information about a particular argument of this callable.
 * @param info a #GICallableInfo
 * @param n the argument index to fetch
 * @returns the #GIArgInfo. Free it with g_base_info_unref() when done.
 */
function callableInfoGetArg(info: CallableInfo, n: number): ArgInfo
/**
 * See whether the caller owns the return value of this callable.
 * #GITransfer contains a list of possible transfer values.
 * @param info a #GICallableInfo
 * @returns the transfer mode for the return value of the callable
 */
function callableInfoGetCallerOwns(info: CallableInfo): Transfer
/**
 * Obtains the ownership transfer for the instance argument.
 * #GITransfer contains a list of possible transfer values.
 * @param info a #GICallableInfo
 * @returns the transfer mode of the instance argument
 */
function callableInfoGetInstanceOwnershipTransfer(info: CallableInfo): Transfer
/**
 * Obtain the number of arguments (both IN and OUT) for this callable.
 * @param info a #GICallableInfo
 * @returns The number of arguments this callable expects.
 */
function callableInfoGetNArgs(info: CallableInfo): number
/**
 * Retrieve an arbitrary attribute associated with the return value.
 * @param info a #GICallableInfo
 * @param name a freeform string naming an attribute
 * @returns The value of the attribute, or %NULL if no such attribute exists
 */
function callableInfoGetReturnAttribute(info: CallableInfo, name: string): string
/**
 * Obtain the return type of a callable item as a #GITypeInfo.
 * @param info a #GICallableInfo
 * @returns the #GITypeInfo. Free the struct by calling g_base_info_unref() when done.
 */
function callableInfoGetReturnType(info: CallableInfo): TypeInfo
/**
 * TODO
 * @param info TODO
 * @param function_ TODO
 * @param inArgs TODO
 * @param outArgs TODO
 * @param returnValue TODO
 * @param isMethod TODO
 * @param throws TODO
 */
function callableInfoInvoke(info: CallableInfo, function_: any | null, inArgs: Argument[], outArgs: Argument[], returnValue: Argument, isMethod: boolean, throws: boolean): boolean
/**
 * Determines if the callable info is a method. For #GIVFuncInfo<!-- -->s,
 * #GICallbackInfo<!-- -->s, and #GISignalInfo<!-- -->s,
 * this is always true. Otherwise, this looks at the %GI_FUNCTION_IS_METHOD
 * flag on the #GIFunctionInfo.
 * 
 * Concretely, this function returns whether g_callable_info_get_n_args()
 * matches the number of arguments in the raw C method. For methods, there
 * is one more C argument than is exposed by introspection: the "self"
 * or "this" object.
 * @param info a #GICallableInfo
 * @returns %TRUE if @info is a method, %FALSE otherwise
 */
function callableInfoIsMethod(info: CallableInfo): boolean
/**
 * Iterate over all attributes associated with the return value.  The
 * iterator structure is typically stack allocated, and must have its
 * first member initialized to %NULL.
 * 
 * Both the `name` and `value` should be treated as constants
 * and must not be freed.
 * 
 * See g_base_info_iterate_attributes() for an example of how to use a
 * similar API.
 * @param info a #GICallableInfo
 * @param iterator a #GIAttributeIter structure, must be initialized; see below
 * @returns %TRUE if there are more attributes
 */
function callableInfoIterateReturnAttributes(info: CallableInfo, iterator: AttributeIter): [ /* returnType */ boolean, /* iterator */ AttributeIter, /* name */ string | null, /* value */ string | null ]
/**
 * Obtain information about a particular argument of this callable; this
 * function is a variant of g_callable_info_get_arg() designed for stack
 * allocation.
 * 
 * The initialized `arg` must not be referenced after `info` is deallocated.
 * @param info a #GICallableInfo
 * @param n the argument index to fetch
 */
function callableInfoLoadArg(info: CallableInfo, n: number): /* arg */ ArgInfo
/**
 * Obtain information about a return value of callable; this
 * function is a variant of g_callable_info_get_return_type() designed for stack
 * allocation.
 * 
 * The initialized `type` must not be referenced after `info` is deallocated.
 * @param info a #GICallableInfo
 */
function callableInfoLoadReturnType(info: CallableInfo): /* type */ TypeInfo
/**
 * See if a callable could return %NULL.
 * @param info a #GICallableInfo
 * @returns %TRUE if callable could return %NULL
 */
function callableInfoMayReturnNull(info: CallableInfo): boolean
/**
 * See if a callable's return value is only useful in C.
 * @param info a #GICallableInfo
 * @returns %TRUE if return value is only useful in C.
 */
function callableInfoSkipReturn(info: CallableInfo): boolean
function cclosureMarshalGeneric(closure: GObject.TClosure, returnGvalue: any, nParamValues: number, paramValues: any, invocationHint: any | null, marshalData: any | null): void
/**
 * Obtain the type of the constant as a #GITypeInfo.
 * @param info a #GIConstantInfo
 * @returns the #GITypeInfo. Free the struct by calling g_base_info_unref() when done.
 */
function constantInfoGetType(info: ConstantInfo): TypeInfo
/**
 * Obtain the string form of the quark for the error domain associated with
 * this enum, if any.
 * @param info a #GIEnumInfo
 * @returns the string form of the error domain associated with this enum, or %NULL.
 */
function enumInfoGetErrorDomain(info: EnumInfo): string
/**
 * Obtain an enum type method at index `n`.
 * @param info a #GIEnumInfo
 * @param n index of method to get
 * @returns the #GIFunctionInfo. Free the struct by calling g_base_info_unref() when done.
 */
function enumInfoGetMethod(info: EnumInfo, n: number): FunctionInfo
/**
 * Obtain the number of methods that this enum type has.
 * @param info a #GIEnumInfo
 * @returns number of methods
 */
function enumInfoGetNMethods(info: EnumInfo): number
/**
 * Obtain the number of values this enumeration contains.
 * @param info a #GIEnumInfo
 * @returns the number of enumeration values
 */
function enumInfoGetNValues(info: EnumInfo): number
/**
 * Obtain the tag of the type used for the enum in the C ABI. This will
 * will be a signed or unsigned integral type.
 * 
 * Note that in the current implementation the width of the type is
 * computed correctly, but the signed or unsigned nature of the type
 * may not match the sign of the type used by the C compiler.
 * @param info a #GIEnumInfo
 * @returns the storage type for the enumeration
 */
function enumInfoGetStorageType(info: EnumInfo): TypeTag
/**
 * Obtain a value for this enumeration.
 * @param info a #GIEnumInfo
 * @param n index of value to fetch
 * @returns the enumeration value or %NULL if type tag is wrong, free the struct with g_base_info_unref() when done.
 */
function enumInfoGetValue(info: EnumInfo, n: number): ValueInfo
/**
 * Obtain the flags for this #GIFieldInfo. See #GIFieldInfoFlags for possible
 * flag values.
 * @param info a #GIFieldInfo
 * @returns the flags
 */
function fieldInfoGetFlags(info: FieldInfo): FieldInfoFlags
/**
 * Obtain the offset in bytes of the field member, this is relative
 * to the beginning of the struct or union.
 * @param info a #GIFieldInfo
 * @returns the field offset
 */
function fieldInfoGetOffset(info: FieldInfo): number
/**
 * Obtain the size in bits of the field member, this is how
 * much space you need to allocate to store the field.
 * @param info a #GIFieldInfo
 * @returns the field size
 */
function fieldInfoGetSize(info: FieldInfo): number
/**
 * Obtain the type of a field as a #GITypeInfo.
 * @param info a #GIFieldInfo
 * @returns the #GITypeInfo. Free the struct by calling g_base_info_unref() when done.
 */
function fieldInfoGetType(info: FieldInfo): TypeInfo
/**
 * Obtain the #GIFunctionInfoFlags for the `info`.
 * @param info a #GIFunctionInfo
 * @returns the flags
 */
function functionInfoGetFlags(info: FunctionInfo): FunctionInfoFlags
/**
 * Obtain the property associated with this #GIFunctionInfo.
 * Only #GIFunctionInfo with the flag %GI_FUNCTION_IS_GETTER or
 * %GI_FUNCTION_IS_SETTER have a property set. For other cases,
 * %NULL will be returned.
 * @param info a #GIFunctionInfo
 * @returns the property or %NULL if not set. Free it with g_base_info_unref() when done.
 */
function functionInfoGetProperty(info: FunctionInfo): PropertyInfo
/**
 * Obtain the symbol of the function. The symbol is the name of the
 * exported function, suitable to be used as an argument to
 * g_module_symbol().
 * @param info a #GIFunctionInfo
 * @returns the symbol
 */
function functionInfoGetSymbol(info: FunctionInfo): string
/**
 * Obtain the virtual function associated with this #GIFunctionInfo.
 * Only #GIFunctionInfo with the flag %GI_FUNCTION_WRAPS_VFUNC has
 * a virtual function set. For other cases, %NULL will be returned.
 * @param info a #GIFunctionInfo
 * @returns the virtual function or %NULL if not set. Free it by calling g_base_info_unref() when done.
 */
function functionInfoGetVfunc(info: FunctionInfo): VFuncInfo
/**
 * Returns the major version number of the girepository library.
 * (e.g. in version 1.58.2 this is 1.)
 * @returns the major version number of the girepository library
 */
function getMajorVersion(): number
/**
 * Returns the micro version number of the girepository library.
 * (e.g. in version 1.58.2 this is 2.)
 * @returns the micro version number of the girepository library
 */
function getMicroVersion(): number
/**
 * Returns the minor version number of the girepository library.
 * (e.g. in version 1.58.2 this is 58.)
 * @returns the minor version number of the girepository library
 */
function getMinorVersion(): number
/**
 * TODO
 * @param type TODO
 * @param container TODO
 * @param typelib TODO
 * @param offset TODO
 * @returns TODO
 */
function infoNew(type: InfoType, container: BaseInfo, typelib: Typelib, offset: number): BaseInfo
/**
 * Obtain a string representation of `type`
 * @param type the info type
 * @returns the string
 */
function infoTypeToString(type: InfoType): string
/**
 * Obtain a method of the interface type given a `name`. %NULL will be
 * returned if there's no method available with that name.
 * @param info a #GIInterfaceInfo
 * @param name name of method to obtain
 * @returns the #GIFunctionInfo or %NULL if none found. Free the struct by calling g_base_info_unref() when done.
 */
function interfaceInfoFindMethod(info: InterfaceInfo, name: string): FunctionInfo
/**
 * TODO
 * @param info a #GIInterfaceInfo
 * @param name Name of signal
 * @returns Info for the signal with name @name in @info, or %NULL on failure.
 */
function interfaceInfoFindSignal(info: InterfaceInfo, name: string): SignalInfo
/**
 * Locate a virtual function slot with name `name`. See the documentation
 * for g_object_info_find_vfunc() for more information on virtuals.
 * @param info a #GIInterfaceInfo
 * @param name The name of a virtual function to find.
 * @returns the #GIVFuncInfo, or %NULL. Free it with g_base_info_unref() when done.
 */
function interfaceInfoFindVfunc(info: InterfaceInfo, name: string): VFuncInfo
/**
 * Obtain an interface type constant at index `n`.
 * @param info a #GIInterfaceInfo
 * @param n index of constant to get
 * @returns the #GIConstantInfo. Free the struct by calling g_base_info_unref() when done.
 */
function interfaceInfoGetConstant(info: InterfaceInfo, n: number): ConstantInfo
/**
 * Returns the layout C structure associated with this #GInterface.
 * @param info a #GIInterfaceInfo
 * @returns the #GIStructInfo or %NULL. Free it with g_base_info_unref() when done.
 */
function interfaceInfoGetIfaceStruct(info: InterfaceInfo): StructInfo
/**
 * Obtain an interface type method at index `n`.
 * @param info a #GIInterfaceInfo
 * @param n index of method to get
 * @returns the #GIFunctionInfo. Free the struct by calling g_base_info_unref() when done.
 */
function interfaceInfoGetMethod(info: InterfaceInfo, n: number): FunctionInfo
/**
 * Obtain the number of constants that this interface type has.
 * @param info a #GIInterfaceInfo
 * @returns number of constants
 */
function interfaceInfoGetNConstants(info: InterfaceInfo): number
/**
 * Obtain the number of methods that this interface type has.
 * @param info a #GIInterfaceInfo
 * @returns number of methods
 */
function interfaceInfoGetNMethods(info: InterfaceInfo): number
/**
 * Obtain the number of prerequisites for this interface type.
 * A prerequisites is another interface that needs to be implemented for
 * interface, similar to an base class for GObjects.
 * @param info a #GIInterfaceInfo
 * @returns number of prerequisites
 */
function interfaceInfoGetNPrerequisites(info: InterfaceInfo): number
/**
 * Obtain the number of properties that this interface type has.
 * @param info a #GIInterfaceInfo
 * @returns number of properties
 */
function interfaceInfoGetNProperties(info: InterfaceInfo): number
/**
 * Obtain the number of signals that this interface type has.
 * @param info a #GIInterfaceInfo
 * @returns number of signals
 */
function interfaceInfoGetNSignals(info: InterfaceInfo): number
/**
 * Obtain the number of virtual functions that this interface type has.
 * @param info a #GIInterfaceInfo
 * @returns number of virtual functions
 */
function interfaceInfoGetNVfuncs(info: InterfaceInfo): number
/**
 * Obtain an interface type prerequisites index `n`.
 * @param info a #GIInterfaceInfo
 * @param n index of prerequisites to get
 * @returns the prerequisites as a #GIBaseInfo. Free the struct by calling g_base_info_unref() when done.
 */
function interfaceInfoGetPrerequisite(info: InterfaceInfo, n: number): BaseInfo
/**
 * Obtain an interface type property at index `n`.
 * @param info a #GIInterfaceInfo
 * @param n index of property to get
 * @returns the #GIPropertyInfo. Free the struct by calling g_base_info_unref() when done.
 */
function interfaceInfoGetProperty(info: InterfaceInfo, n: number): PropertyInfo
/**
 * Obtain an interface type signal at index `n`.
 * @param info a #GIInterfaceInfo
 * @param n index of signal to get
 * @returns the #GISignalInfo. Free the struct by calling g_base_info_unref() when done.
 */
function interfaceInfoGetSignal(info: InterfaceInfo, n: number): SignalInfo
/**
 * Obtain an interface type virtual function at index `n`.
 * @param info a #GIInterfaceInfo
 * @param n index of virtual function to get
 * @returns the #GIVFuncInfo. Free the struct by calling g_base_info_unref() when done.
 */
function interfaceInfoGetVfunc(info: InterfaceInfo, n: number): VFuncInfo
/**
 * TODO
 * @returns TODO
 */
function invokeErrorQuark(): GLib.Quark
/**
 * Obtain a method of the object type given a `name`. %NULL will be
 * returned if there's no method available with that name.
 * @param info a #GIObjectInfo
 * @param name name of method to obtain
 * @returns the #GIFunctionInfo. Free the struct by calling g_base_info_unref() when done.
 */
function objectInfoFindMethod(info: ObjectInfo, name: string): FunctionInfo | null
/**
 * Obtain a method of the object given a `name,` searching both the
 * object `info` and any interfaces it implements.  %NULL will be
 * returned if there's no method available with that name.
 * 
 * Note that this function does *not* search parent classes; you will have
 * to chain up if that's desired.
 * @param info a #GIObjectInfo
 * @param name name of method to obtain
 * @returns the #GIFunctionInfo. Free the struct by calling g_base_info_unref() when done.
 */
function objectInfoFindMethodUsingInterfaces(info: ObjectInfo, name: string): [ /* returnType */ FunctionInfo | null, /* implementor */ ObjectInfo ]
/**
 * TODO
 * @param info a #GIObjectInfo
 * @param name Name of signal
 * @returns Info for the signal with name @name in @info, or %NULL on failure.
 */
function objectInfoFindSignal(info: ObjectInfo, name: string): SignalInfo | null
/**
 * Locate a virtual function slot with name `name`. Note that the namespace
 * for virtuals is distinct from that of methods; there may or may not be
 * a concrete method associated for a virtual. If there is one, it may
 * be retrieved using g_vfunc_info_get_invoker(), otherwise %NULL will be
 * returned.
 * See the documentation for g_vfunc_info_get_invoker() for more
 * information on invoking virtuals.
 * @param info a #GIObjectInfo
 * @param name The name of a virtual function to find.
 * @returns the #GIVFuncInfo, or %NULL. Free it with g_base_info_unref() when done.
 */
function objectInfoFindVfunc(info: ObjectInfo, name: string): VFuncInfo | null
/**
 * Locate a virtual function slot with name `name,` searching both the object
 * `info` and any interfaces it implements.  Note that the namespace for
 * virtuals is distinct from that of methods; there may or may not be a
 * concrete method associated for a virtual. If there is one, it may be
 * retrieved using g_vfunc_info_get_invoker(), otherwise %NULL will be
 * returned.
 * 
 * Note that this function does *not* search parent classes; you will have
 * to chain up if that's desired.
 * @param info a #GIObjectInfo
 * @param name name of vfunc to obtain
 * @returns the #GIVFuncInfo. Free the struct by calling g_base_info_unref() when done.
 */
function objectInfoFindVfuncUsingInterfaces(info: ObjectInfo, name: string): [ /* returnType */ VFuncInfo | null, /* implementor */ ObjectInfo ]
/**
 * Obtain if the object type is an abstract type, eg if it cannot be
 * instantiated
 * @param info a #GIObjectInfo
 * @returns %TRUE if the object type is abstract
 */
function objectInfoGetAbstract(info: ObjectInfo): boolean
/**
 * Every #GObject has two structures; an instance structure and a class
 * structure.  This function returns the metadata for the class structure.
 * @param info a #GIObjectInfo
 * @returns the #GIStructInfo or %NULL. Free with g_base_info_unref() when done.
 */
function objectInfoGetClassStruct(info: ObjectInfo): StructInfo | null
/**
 * Obtain an object type constant at index `n`.
 * @param info a #GIObjectInfo
 * @param n index of constant to get
 * @returns the #GIConstantInfo. Free the struct by calling g_base_info_unref() when done.
 */
function objectInfoGetConstant(info: ObjectInfo, n: number): ConstantInfo
/**
 * Obtain an object type field at index `n`.
 * @param info a #GIObjectInfo
 * @param n index of field to get
 * @returns the #GIFieldInfo. Free the struct by calling g_base_info_unref() when done.
 */
function objectInfoGetField(info: ObjectInfo, n: number): FieldInfo
/**
 * Checks whether the object type is a final type, i.e. if it cannot
 * be derived
 * @param info a #GIObjectInfo
 * @returns %TRUE if the object type is final
 */
function objectInfoGetFinal(info: ObjectInfo): boolean
/**
 * Obtain if the object type is of a fundamental type which is not
 * G_TYPE_OBJECT. This is mostly for supporting GstMiniObject.
 * @param info a #GIObjectInfo
 * @returns %TRUE if the object type is a fundamental type
 */
function objectInfoGetFundamental(info: ObjectInfo): boolean
/**
 * Obtain the symbol name of the function that should be called to convert
 * an object instance pointer of this object type to a GValue.
 * I's mainly used fundamental types. The type signature for the symbol
 * is %GIObjectInfoGetValueFunction, to fetch the function pointer
 * see g_object_info_get_get_value_function().
 * @param info a #GIObjectInfo
 * @returns the symbol or %NULL
 */
function objectInfoGetGetValueFunction(info: ObjectInfo): string | null
/**
 * Obtain an object type interface at index `n`.
 * @param info a #GIObjectInfo
 * @param n index of interface to get
 * @returns the #GIInterfaceInfo. Free the struct by calling g_base_info_unref() when done.
 */
function objectInfoGetInterface(info: ObjectInfo, n: number): InterfaceInfo
/**
 * Obtain an object type method at index `n`.
 * @param info a #GIObjectInfo
 * @param n index of method to get
 * @returns the #GIFunctionInfo. Free the struct by calling g_base_info_unref() when done.
 */
function objectInfoGetMethod(info: ObjectInfo, n: number): FunctionInfo
/**
 * Obtain the number of constants that this object type has.
 * @param info a #GIObjectInfo
 * @returns number of constants
 */
function objectInfoGetNConstants(info: ObjectInfo): number
/**
 * Obtain the number of fields that this object type has.
 * @param info a #GIObjectInfo
 * @returns number of fields
 */
function objectInfoGetNFields(info: ObjectInfo): number
/**
 * Obtain the number of interfaces that this object type has.
 * @param info a #GIObjectInfo
 * @returns number of interfaces
 */
function objectInfoGetNInterfaces(info: ObjectInfo): number
/**
 * Obtain the number of methods that this object type has.
 * @param info a #GIObjectInfo
 * @returns number of methods
 */
function objectInfoGetNMethods(info: ObjectInfo): number
/**
 * Obtain the number of properties that this object type has.
 * @param info a #GIObjectInfo
 * @returns number of properties
 */
function objectInfoGetNProperties(info: ObjectInfo): number
/**
 * Obtain the number of signals that this object type has.
 * @param info a #GIObjectInfo
 * @returns number of signals
 */
function objectInfoGetNSignals(info: ObjectInfo): number
/**
 * Obtain the number of virtual functions that this object type has.
 * @param info a #GIObjectInfo
 * @returns number of virtual functions
 */
function objectInfoGetNVfuncs(info: ObjectInfo): number
/**
 * Obtain the parent of the object type.
 * @param info a #GIObjectInfo
 * @returns the #GIObjectInfo. Free the struct by calling g_base_info_unref() when done.
 */
function objectInfoGetParent(info: ObjectInfo): ObjectInfo | null
/**
 * Obtain an object type property at index `n`.
 * @param info a #GIObjectInfo
 * @param n index of property to get
 * @returns the #GIPropertyInfo. Free the struct by calling g_base_info_unref() when done.
 */
function objectInfoGetProperty(info: ObjectInfo, n: number): PropertyInfo
/**
 * Obtain the symbol name of the function that should be called to ref this
 * object type. It's mainly used fundamental types. The type signature for
 * the symbol is %GIObjectInfoRefFunction, to fetch the function pointer
 * see g_object_info_get_ref_function().
 * @param info a #GIObjectInfo
 * @returns the symbol or %NULL
 */
function objectInfoGetRefFunction(info: ObjectInfo): string | null
/**
 * Obtain the symbol name of the function that should be called to convert
 * set a GValue giving an object instance pointer of this object type.
 * I's mainly used fundamental types. The type signature for the symbol
 * is %GIObjectInfoSetValueFunction, to fetch the function pointer
 * see g_object_info_get_set_value_function().
 * @param info a #GIObjectInfo
 * @returns the symbol or %NULL
 */
function objectInfoGetSetValueFunction(info: ObjectInfo): string | null
/**
 * Obtain an object type signal at index `n`.
 * @param info a #GIObjectInfo
 * @param n index of signal to get
 * @returns the #GISignalInfo. Free the struct by calling g_base_info_unref() when done.
 */
function objectInfoGetSignal(info: ObjectInfo, n: number): SignalInfo
/**
 * Obtain the function which when called will return the GType
 * function for which this object type is registered.
 * @param info a #GIObjectInfo
 * @returns the type init function
 */
function objectInfoGetTypeInit(info: ObjectInfo): string
/**
 * Obtain the name of the objects class/type.
 * @param info a #GIObjectInfo
 * @returns name of the objects type
 */
function objectInfoGetTypeName(info: ObjectInfo): string
/**
 * Obtain the symbol name of the function that should be called to unref this
 * object type. It's mainly used fundamental types. The type signature for
 * the symbol is %GIObjectInfoUnrefFunction, to fetch the function pointer
 * see g_object_info_get_unref_function().
 * @param info a #GIObjectInfo
 * @returns the symbol or %NULL
 */
function objectInfoGetUnrefFunction(info: ObjectInfo): string | null
/**
 * Obtain an object type virtual function at index `n`.
 * @param info a #GIObjectInfo
 * @param n index of virtual function to get
 * @returns the #GIVFuncInfo. Free the struct by calling g_base_info_unref() when done.
 */
function objectInfoGetVfunc(info: ObjectInfo, n: number): VFuncInfo
/**
 * Obtain the flags for this property info. See #GParamFlags for
 * more information about possible flag values.
 * @param info a #GIPropertyInfo
 * @returns the flags
 */
function propertyInfoGetFlags(info: PropertyInfo): GObject.ParamFlags
/**
 * Obtains the getter function associated with this #GIPropertyInfo.
 * 
 * The setter is only available for %G_PARAM_READABLE properties.
 * @param info a #GIPropertyInfo
 * @returns the function info or %NULL if not set.   Free it with g_base_info_unref() when done.
 */
function propertyInfoGetGetter(info: PropertyInfo): FunctionInfo | null
/**
 * Obtain the ownership transfer for this property. See #GITransfer for more
 * information about transfer values.
 * @param info a #GIPropertyInfo
 * @returns the transfer
 */
function propertyInfoGetOwnershipTransfer(info: PropertyInfo): Transfer
/**
 * Obtains the setter function associated with this #GIPropertyInfo.
 * 
 * The setter is only available for %G_PARAM_WRITABLE properties that
 * are also not %G_PARAM_CONSTRUCT_ONLY.
 * @param info a #GIPropertyInfo
 * @returns the function info or %NULL if not set.   Free it with g_base_info_unref() when done.
 */
function propertyInfoGetSetter(info: PropertyInfo): FunctionInfo | null
/**
 * Obtain the type information for the property `info`.
 * @param info a #GIPropertyInfo
 * @returns the #GITypeInfo, free it with g_base_info_unref() when done.
 */
function propertyInfoGetType(info: PropertyInfo): TypeInfo
/**
 * Obtain the #GType for this registered type or G_TYPE_NONE which a special meaning.
 * It means that either there is no type information associated with this `info` or
 * that the shared library which provides the type_init function for this
 * `info` cannot be called.
 * @param info a #GIRegisteredTypeInfo
 * @returns the #GType.
 */
function registeredTypeInfoGetGType(info: RegisteredTypeInfo): GObject.GType
/**
 * Obtain the type init function for `info`. The type init function is the
 * function which will register the GType within the GObject type system.
 * Usually this is not called by langauge bindings or applications, use
 * g_registered_type_info_get_g_type() directly instead.
 * @param info a #GIRegisteredTypeInfo
 * @returns the symbol name of the type init function, suitable for passing into g_module_symbol().
 */
function registeredTypeInfoGetTypeInit(info: RegisteredTypeInfo): string
/**
 * Obtain the type name of the struct within the GObject type system.
 * This type can be passed to g_type_name() to get a #GType.
 * @param info a #GIRegisteredTypeInfo
 * @returns the type name
 */
function registeredTypeInfoGetTypeName(info: RegisteredTypeInfo): string
/**
 * Obtain the class closure for this signal if one is set. The class
 * closure is a virtual function on the type that the signal belongs to.
 * If the signal lacks a closure %NULL will be returned.
 * @param info a #GISignalInfo
 * @returns the class closure or %NULL
 */
function signalInfoGetClassClosure(info: SignalInfo): VFuncInfo
/**
 * Obtain the flags for this signal info. See #GSignalFlags for
 * more information about possible flag values.
 * @param info a #GISignalInfo
 * @returns the flags
 */
function signalInfoGetFlags(info: SignalInfo): GObject.SignalFlags
/**
 * Obtain if the returning true in the signal handler will
 * stop the emission of the signal.
 * @param info a #GISignalInfo
 * @returns %TRUE if returning true stops the signal emission
 */
function signalInfoTrueStopsEmit(info: SignalInfo): boolean
/**
 * Obtain the type information for field named `name`.
 * @param info a #GIStructInfo
 * @param name a field name
 * @returns the #GIFieldInfo or %NULL if not found, free it with g_base_info_unref() when done.
 */
function structInfoFindField(info: StructInfo, name: string): FieldInfo
/**
 * Obtain the type information for method named `name`.
 * @param info a #GIStructInfo
 * @param name a method name
 * @returns the #GIFunctionInfo, free it with g_base_info_unref() when done.
 */
function structInfoFindMethod(info: StructInfo, name: string): FunctionInfo
/**
 * Obtain the required alignment of the structure.
 * @param info a #GIStructInfo
 * @returns required alignment in bytes
 */
function structInfoGetAlignment(info: StructInfo): number
/**
 * Retrieves the name of the copy function for `info,` if any is set.
 * @param info a struct information blob
 * @returns the name of the copy function
 */
function structInfoGetCopyFunction(info: StructInfo): string | null
/**
 * Obtain the type information for field with specified index.
 * @param info a #GIStructInfo
 * @param n a field index
 * @returns the #GIFieldInfo, free it with g_base_info_unref() when done.
 */
function structInfoGetField(info: StructInfo, n: number): FieldInfo
/**
 * Retrieves the name of the free function for `info,` if any is set.
 * @param info a struct information blob
 * @returns the name of the free function
 */
function structInfoGetFreeFunction(info: StructInfo): string | null
/**
 * Obtain the type information for method with specified index.
 * @param info a #GIStructInfo
 * @param n a method index
 * @returns the #GIFunctionInfo, free it with g_base_info_unref() when done.
 */
function structInfoGetMethod(info: StructInfo, n: number): FunctionInfo
/**
 * Obtain the number of fields this structure has.
 * @param info a #GIStructInfo
 * @returns number of fields
 */
function structInfoGetNFields(info: StructInfo): number
/**
 * Obtain the number of methods this structure has.
 * @param info a #GIStructInfo
 * @returns number of methods
 */
function structInfoGetNMethods(info: StructInfo): number
/**
 * Obtain the total size of the structure.
 * @param info a #GIStructInfo
 * @returns size of the structure in bytes
 */
function structInfoGetSize(info: StructInfo): number
/**
 * TODO
 * @param info TODO
 * @returns TODO
 */
function structInfoIsForeign(info: StructInfo): boolean
/**
 * Return true if this structure represents the "class structure" for some
 * #GObject or #GInterface.  This function is mainly useful to hide this kind of structure
 * from generated public APIs.
 * @param info a #GIStructInfo
 * @returns %TRUE if this is a class struct, %FALSE otherwise
 */
function structInfoIsGtypeStruct(info: StructInfo): boolean
/**
 * GLib data structures, such as #GList, #GSList, and #GHashTable, all store
 * data pointers.
 * In the case where the list or hash table is storing single types rather than
 * structs, these data pointers may have values stuffed into them via macros
 * such as %GPOINTER_TO_INT.
 * 
 * Use this function to ensure that all values are correctly extracted from
 * stuffed pointers, regardless of the machine's architecture or endianness.
 * 
 * This function fills in the appropriate field of `arg` with the value extracted
 * from `hash_pointer,` depending on the storage type of `info`.
 * @param info a #GITypeInfo
 * @param hashPointer A pointer, such as a #GHashTable data pointer
 * @param arg A #GIArgument to fill in
 */
function typeInfoArgumentFromHashPointer(info: TypeInfo, hashPointer: any | null, arg: Argument): void
/**
 * Obtain the fixed array size of the type. The type tag must be a
 * #GI_TYPE_TAG_ARRAY or -1 will be returned.
 * @param info a #GITypeInfo
 * @returns the size or -1 if it's not an array
 */
function typeInfoGetArrayFixedSize(info: TypeInfo): number
/**
 * Obtain the position of the argument which gives the array length of the type.
 * The type tag must be a #GI_TYPE_TAG_ARRAY or -1 will be returned.
 * @param info a #GITypeInfo
 * @returns the array length, or -1 if the type is not an array
 */
function typeInfoGetArrayLength(info: TypeInfo): number
/**
 * Obtain the array type for this type. See #GIArrayType for a list of
 * possible values. If the type tag of this type is not array, -1 will be
 * returned.
 * @param info a #GITypeInfo
 * @returns the array type or -1
 */
function typeInfoGetArrayType(info: TypeInfo): ArrayType
/**
 * For types which have #GI_TYPE_TAG_INTERFACE such as GObjects and boxed values,
 * this function returns full information about the referenced type.  You can then
 * inspect the type of the returned #GIBaseInfo to further query whether it is
 * a concrete GObject, a GInterface, a structure, etc. using g_base_info_get_type().
 * @param info a #GITypeInfo
 * @returns the #GIBaseInfo, or %NULL. Free it with g_base_info_unref() when done.
 */
function typeInfoGetInterface(info: TypeInfo): BaseInfo
/**
 * Obtain the parameter type `n`.
 * @param info a #GITypeInfo
 * @param n index of the parameter
 * @returns the param type info
 */
function typeInfoGetParamType(info: TypeInfo, n: number): TypeInfo
/**
 * Obtain the type tag corresponding to the underlying storage type in C for
 * the type.
 * See #GITypeTag for a list of type tags.
 * @param info a #GITypeInfo
 * @returns the type tag
 */
function typeInfoGetStorageType(info: TypeInfo): TypeTag
/**
 * Obtain the type tag for the type. See #GITypeTag for a list
 * of type tags.
 * @param info a #GITypeInfo
 * @returns the type tag
 */
function typeInfoGetTag(info: TypeInfo): TypeTag
/**
 * GLib data structures, such as #GList, #GSList, and #GHashTable, all store
 * data pointers.
 * In the case where the list or hash table is storing single types rather than
 * structs, these data pointers may have values stuffed into them via macros
 * such as %GPOINTER_TO_INT.
 * 
 * Use this function to ensure that all values are correctly stuffed into
 * pointers, regardless of the machine's architecture or endianness.
 * 
 * This function returns a pointer stuffed with the appropriate field of `arg,`
 * depending on the storage type of `info`.
 * @param info a #GITypeInfo
 * @param arg A #GIArgument with the value to stuff into a pointer
 * @returns A stuffed pointer, that can be stored in a #GHashTable, for example
 */
function typeInfoHashPointerFromArgument(info: TypeInfo, arg: Argument): any | null
/**
 * Obtain if the type is passed as a reference.
 * 
 * Note that the types of %GI_DIRECTION_OUT and %GI_DIRECTION_INOUT parameters
 * will only be pointers if the underlying type being transferred is a pointer
 * (i.e. only if the type of the C function’s formal parameter is a pointer to a
 * pointer).
 * @param info a #GITypeInfo
 * @returns %TRUE if it is a pointer
 */
function typeInfoIsPointer(info: TypeInfo): boolean
/**
 * Obtain if the last element of the array is %NULL. The type tag must be a
 * #GI_TYPE_TAG_ARRAY or %FALSE will be returned.
 * @param info a #GITypeInfo
 * @returns %TRUE if zero terminated
 */
function typeInfoIsZeroTerminated(info: TypeInfo): boolean
/**
 * GLib data structures, such as #GList, #GSList, and #GHashTable, all store
 * data pointers.
 * In the case where the list or hash table is storing single types rather than
 * structs, these data pointers may have values stuffed into them via macros
 * such as %GPOINTER_TO_INT.
 * 
 * Use this function to ensure that all values are correctly extracted from
 * stuffed pointers, regardless of the machine's architecture or endianness.
 * 
 * This function fills in the appropriate field of `arg` with the value extracted
 * from `hash_pointer,` depending on `storage_type`.
 * @param storageType a #GITypeTag obtained from g_type_info_get_storage_type()
 * @param hashPointer A pointer, such as a #GHashTable data pointer
 * @param arg A #GIArgument to fill in
 */
function typeTagArgumentFromHashPointer(storageType: TypeTag, hashPointer: any | null, arg: Argument): void
/**
 * GLib data structures, such as #GList, #GSList, and #GHashTable, all store
 * data pointers.
 * In the case where the list or hash table is storing single types rather than
 * structs, these data pointers may have values stuffed into them via macros
 * such as %GPOINTER_TO_INT.
 * 
 * Use this function to ensure that all values are correctly stuffed into
 * pointers, regardless of the machine's architecture or endianness.
 * 
 * This function returns a pointer stuffed with the appropriate field of `arg,`
 * depending on `storage_type`.
 * @param storageType a #GITypeTag obtained from g_type_info_get_storage_type()
 * @param arg A #GIArgument with the value to stuff into a pointer
 * @returns A stuffed pointer, that can be stored in a #GHashTable, for example
 */
function typeTagHashPointerFromArgument(storageType: TypeTag, arg: Argument): any | null
/**
 * Obtain a string representation of `type`
 * @param type the type_tag
 * @returns the string
 */
function typeTagToString(type: TypeTag): string
/**
 * Obtain the type information for method named `name`.
 * @param info a #GIUnionInfo
 * @param name a method name
 * @returns the #GIFunctionInfo, free it with g_base_info_unref() when done.
 */
function unionInfoFindMethod(info: UnionInfo, name: string): FunctionInfo
/**
 * Obtain the required alignment of the union.
 * @param info a #GIUnionInfo
 * @returns required alignment in bytes
 */
function unionInfoGetAlignment(info: UnionInfo): number
/**
 * Retrieves the name of the copy function for `info,` if any is set.
 * @param info a union information blob
 * @returns the name of the copy function
 */
function unionInfoGetCopyFunction(info: UnionInfo): string | null
/**
 * Obtain discriminator value assigned for n-th union field, i.e. n-th
 * union field is the active one if discriminator contains this
 * constant.
 * @param info a #GIUnionInfo
 * @param n a union field index
 * @returns the #GIConstantInfo, free it with g_base_info_unref() when done.
 */
function unionInfoGetDiscriminator(info: UnionInfo, n: number): ConstantInfo
/**
 * Returns offset of the discriminator field in the structure.
 * @param info a #GIUnionInfo
 * @returns offset in bytes of the discriminator
 */
function unionInfoGetDiscriminatorOffset(info: UnionInfo): number
/**
 * Obtain the type information of the union discriminator.
 * @param info a #GIUnionInfo
 * @returns the #GITypeInfo, free it with g_base_info_unref() when done.
 */
function unionInfoGetDiscriminatorType(info: UnionInfo): TypeInfo
/**
 * Obtain the type information for field with specified index.
 * @param info a #GIUnionInfo
 * @param n a field index
 * @returns the #GIFieldInfo, free it with g_base_info_unref() when done.
 */
function unionInfoGetField(info: UnionInfo, n: number): FieldInfo
/**
 * Retrieves the name of the free function for `info,` if any is set.
 * @param info a union information blob
 * @returns the name of the free function
 */
function unionInfoGetFreeFunction(info: UnionInfo): string | null
/**
 * Obtain the type information for method with specified index.
 * @param info a #GIUnionInfo
 * @param n a method index
 * @returns the #GIFunctionInfo, free it with g_base_info_unref() when done.
 */
function unionInfoGetMethod(info: UnionInfo, n: number): FunctionInfo
/**
 * Obtain the number of fields this union has.
 * @param info a #GIUnionInfo
 * @returns number of fields
 */
function unionInfoGetNFields(info: UnionInfo): number
/**
 * Obtain the number of methods this union has.
 * @param info a #GIUnionInfo
 * @returns number of methods
 */
function unionInfoGetNMethods(info: UnionInfo): number
/**
 * Obtain the total size of the union.
 * @param info a #GIUnionInfo
 * @returns size of the union in bytes
 */
function unionInfoGetSize(info: UnionInfo): number
/**
 * Return true if this union contains discriminator field.
 * @param info a #GIUnionInfo
 * @returns %TRUE if this is a discriminated union, %FALSE otherwise
 */
function unionInfoIsDiscriminated(info: UnionInfo): boolean
/**
 * Obtain the enumeration value of the #GIValueInfo.
 * @param info a #GIValueInfo
 * @returns the enumeration value. This will always be representable   as a 32-bit signed or unsigned value. The use of gint64 as the   return type is to allow both.
 */
function valueInfoGetValue(info: ValueInfo): number
/**
 * This method will look up where inside the type struct of `implementor_gtype`
 * is the implementation for `info`.
 * @param info a #GIVFuncInfo
 * @param implementorGtype #GType implementing this virtual function
 * @returns address to a function or %NULL if an error happened
 */
function vfuncInfoGetAddress(info: VFuncInfo, implementorGtype: GObject.GType): any | null
/**
 * Obtain the flags for this virtual function info. See #GIVFuncInfoFlags for
 * more information about possible flag values.
 * @param info a #GIVFuncInfo
 * @returns the flags
 */
function vfuncInfoGetFlags(info: VFuncInfo): VFuncInfoFlags
/**
 * If this virtual function has an associated invoker method, this
 * method will return it.  An invoker method is a C entry point.
 * 
 * Not all virtuals will have invokers.
 * @param info a #GIVFuncInfo
 * @returns the #GIVFuncInfo or %NULL. Free it with g_base_info_unref() when done.
 */
function vfuncInfoGetInvoker(info: VFuncInfo): FunctionInfo
/**
 * Obtain the offset of the function pointer in the class struct. The value
 * 0xFFFF indicates that the struct offset is unknown.
 * @param info a #GIVFuncInfo
 * @returns the struct offset or 0xFFFF if it's unknown
 */
function vfuncInfoGetOffset(info: VFuncInfo): number
/**
 * Obtain the signal for the virtual function if one is set.
 * The signal comes from the object or interface to which
 * this virtual function belongs.
 * @param info a #GIVFuncInfo
 * @returns the signal or %NULL if none set
 */
function vfuncInfoGetSignal(info: VFuncInfo): SignalInfo
module Repository {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Repository {

    // Own properties of GIRepository-2.0.GIRepository.Repository

    __gtype__: number

    // Owm methods of GIRepository-2.0.GIRepository.Repository

    /**
     * Obtain an unordered list of versions (either currently loaded or
     * available) for `namespace_` in this `repository`.
     * @param namespace GI namespace, e.g. "Gtk"
     * @returns the array of versions.
     */
    enumerateVersions(namespace: string): string[]
    /**
     * Searches for the enum type corresponding to the given #GError
     * domain. Before calling this function for a particular namespace,
     * you must call g_irepository_require() once to load the namespace, or
     * otherwise ensure the namespace has already been loaded.
     * @param domain a #GError domain
     * @returns #GIEnumInfo representing metadata about @domain's enum type, or %NULL
     */
    findByErrorDomain(domain: GLib.Quark): EnumInfo
    /**
     * Searches all loaded namespaces for a particular #GType.  Note that
     * in order to locate the metadata, the namespace corresponding to
     * the type must first have been loaded.  There is currently no
     * mechanism for determining the namespace which corresponds to an
     * arbitrary GType - thus, this function will operate most reliably
     * when you know the GType to originate from be from a loaded namespace.
     * @param gtype GType to search for
     * @returns #GIBaseInfo representing metadata about @type, or %NULL
     */
    findByGtype(gtype: GObject.GType): BaseInfo
    /**
     * Searches for a particular entry in a namespace.  Before calling
     * this function for a particular namespace, you must call
     * g_irepository_require() once to load the namespace, or otherwise
     * ensure the namespace has already been loaded.
     * @param namespace Namespace which will be searched
     * @param name Entry name to find
     * @returns #GIBaseInfo representing metadata about @name, or %NULL
     */
    findByName(namespace: string, name: string): BaseInfo
    /**
     * This function returns the "C prefix", or the C level namespace
     * associated with the given introspection namespace.  Each C symbol
     * starts with this prefix, as well each #GType in the library.
     * 
     * Note: The namespace must have already been loaded using a function
     * such as g_irepository_require() before calling this function.
     * @param namespace Namespace to inspect
     * @returns C namespace prefix, or %NULL if none associated
     */
    getCPrefix(namespace: string): string
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
     * @param namespace Namespace of interest
     * @returns all versioned   dependencies
     */
    getDependencies(namespace: string): string[]
    /**
     * Return an array of the immediate versioned dependencies for `namespace_`.
     * Returned strings are of the form `namespace-version`.
     * 
     * Note: `namespace_` must have already been loaded using a function
     * such as g_irepository_require() before calling this function.
     * 
     * To get the transitive closure of dependencies for `namespace_,` use
     * g_irepository_get_dependencies().
     * @param namespace Namespace of interest
     * @returns Zero-terminated string array of immediate versioned   dependencies
     */
    getImmediateDependencies(namespace: string): string[]
    /**
     * This function returns a particular metadata entry in the
     * given namespace `namespace_`.  The namespace must have
     * already been loaded before calling this function.
     * See g_irepository_get_n_infos() to find the maximum number of
     * entries.
     * @param namespace Namespace to inspect
     * @param index 0-based offset into namespace metadata for entry
     * @returns #GIBaseInfo containing metadata
     */
    getInfo(namespace: string, index: number): BaseInfo
    /**
     * Return the list of currently loaded namespaces.
     * @returns List of namespaces
     */
    getLoadedNamespaces(): string[]
    /**
     * This function returns the number of metadata entries in
     * given namespace `namespace_`.  The namespace must have
     * already been loaded before calling this function.
     * @param namespace Namespace to inspect
     * @returns number of metadata entries
     */
    getNInfos(namespace: string): number
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
    getObjectGtypeInterfaces(gtype: GObject.GType): /* interfacesOut */ InterfaceInfo[]
    /**
     * This function returns a comma-separated list of paths to the
     * shared C libraries associated with the given namespace `namespace_`.
     * There may be no shared library path associated, in which case this
     * function will return %NULL.
     * 
     * Note: The namespace must have already been loaded using a function
     * such as g_irepository_require() before calling this function.
     * @param namespace Namespace to inspect
     * @returns Comma-separated list of paths to shared libraries,   or %NULL if none are associated
     */
    getSharedLibrary(namespace: string): string | null
    /**
     * If namespace `namespace_` is loaded, return the full path to the
     * .typelib file it was loaded from.  If the typelib for
     * namespace `namespace_` was included in a shared library, return
     * the special string "&lt;builtin&gt;".
     * @param namespace GI namespace to use, e.g. "Gtk"
     * @returns Filesystem path (or $lt;builtin$gt;) if successful, %NULL if namespace is not loaded
     */
    getTypelibPath(namespace: string): string
    /**
     * This function returns the loaded version associated with the given
     * namespace `namespace_`.
     * 
     * Note: The namespace must have already been loaded using a function
     * such as g_irepository_require() before calling this function.
     * @param namespace Namespace to inspect
     * @returns Loaded version
     */
    getVersion(namespace: string): string
    /**
     * Check whether a particular namespace (and optionally, a specific
     * version thereof) is currently loaded.  This function is likely to
     * only be useful in unusual circumstances; in order to act upon
     * metadata in the namespace, you should call g_irepository_require()
     * instead which will ensure the namespace is loaded, and return as
     * quickly as this function will if it has already been loaded.
     * @param namespace Namespace of interest
     * @param version Required version, may be %NULL for latest
     * @returns %TRUE if namespace-version is loaded, %FALSE otherwise
     */
    isRegistered(namespace: string, version: string | null): boolean
    /**
     * TODO
     * @param typelib TODO
     * @param flags TODO
     */
    loadTypelib(typelib: Typelib, flags: RepositoryLoadFlags): string
    /**
     * Force the namespace `namespace_` to be loaded if it isn't already.
     * If `namespace_` is not loaded, this function will search for a
     * ".typelib" file using the repository search path.  In addition, a
     * version `version` of namespace may be specified.  If `version` is
     * not specified, the latest will be used.
     * @param namespace GI namespace to use, e.g. "Gtk"
     * @param version Version of namespace, may be %NULL for latest
     * @param flags Set of %GIRepositoryLoadFlags, may be 0
     * @returns a pointer to the #GITypelib if successful, %NULL otherwise
     */
    require(namespace: string, version: string | null, flags: RepositoryLoadFlags): Typelib
    /**
     * Force the namespace `namespace_` to be loaded if it isn't already.
     * If `namespace_` is not loaded, this function will search for a
     * ".typelib" file within the private directory only. In addition, a
     * version `version` of namespace should be specified.  If `version` is
     * not specified, the latest will be used.
     * @param typelibDir Private directory where to find the requested typelib
     * @param namespace GI namespace to use, e.g. "Gtk"
     * @param version Version of namespace, may be %NULL for latest
     * @param flags Set of %GIRepositoryLoadFlags, may be 0
     * @returns a pointer to the #GITypelib if successful, %NULL otherwise
     */
    requirePrivate(typelibDir: string, namespace: string, version: string | null, flags: RepositoryLoadFlags): Typelib

    // Class property signals of GIRepository-2.0.GIRepository.Repository

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GIRepository is used to manage repositories of namespaces. Namespaces
 * are represented on disk by type libraries (.typelib files).
 * 
 * ### Discovery of type libraries
 * 
 * #GIRepository will typically look for a `girepository-1.0` directory
 * under the library directory used when compiling gobject-introspection.
 * 
 * It is possible to control the search paths programmatically, using
 * g_irepository_prepend_search_path(). It is also possible to modify
 * the search paths by using the `GI_TYPELIB_PATH` environment variable.
 * The environment variable takes precedence over the default search path
 * and the g_irepository_prepend_search_path() calls.
 * @class 
 */
class Repository extends GObject.Object {

    // Own properties of GIRepository-2.0.GIRepository.Repository

    static name: string

    // Constructors of GIRepository-2.0.GIRepository.Repository

    constructor(config?: Repository.ConstructorProperties) 
    _init(config?: Repository.ConstructorProperties): void
    static dump(arg: string): boolean
    static errorQuark(): GLib.Quark
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
     * @returns The global singleton #GIRepository
     */
    static getDefault(): Repository
    /**
     * Obtain the option group for girepository, it's used
     * by the dumper and for programs that wants to provide
     * introspection information
     * @returns the option group
     */
    static getOptionGroup(): GLib.OptionGroup
    /**
     * Returns the current search path #GIRepository will use when loading
     * typelib files. The list is internal to #GIRepository and should not
     * be freed, nor should its string elements.
     * @returns #GSList of strings
     */
    static getSearchPath(): string[]
    static prependLibraryPath(directory: string): void
    /**
     * Prepends `directory` to the typelib search path.
     * 
     * See also: g_irepository_get_search_path().
     * @param directory directory name to prepend to the typelib   search path
     */
    static prependSearchPath(directory: string): void
}

interface AttributeIter {
}

/**
 * An opaque structure used to iterate over attributes
 * in a #GIBaseInfo struct.
 * @record 
 */
class AttributeIter {

    // Own properties of GIRepository-2.0.GIRepository.AttributeIter

    static name: string
}

interface BaseInfo {

    // Owm methods of GIRepository-2.0.GIRepository.BaseInfo

    /**
     * Compare two #GIBaseInfo.
     * 
     * Using pointer comparison is not practical since many functions return
     * different instances of #GIBaseInfo that refers to the same part of the
     * TypeLib; use this function instead to do #GIBaseInfo comparisons.
     * @param info2 a #GIBaseInfo
     * @returns %TRUE if and only if @info1 equals @info2.
     */
    equal(info2: BaseInfo): boolean
    /**
     * Retrieve an arbitrary attribute associated with this node.
     * @param name a freeform string naming an attribute
     * @returns The value of the attribute, or %NULL if no such attribute exists
     */
    getAttribute(name: string): string
    /**
     * Obtain the container of the `info`. The container is the parent
     * GIBaseInfo. For instance, the parent of a #GIFunctionInfo is an
     * #GIObjectInfo or #GIInterfaceInfo.
     * @returns the container
     */
    getContainer(): BaseInfo
    /**
     * Obtain the name of the `info`. What the name represents depends on
     * the #GIInfoType of the `info`. For instance for #GIFunctionInfo it is
     * the name of the function.
     * @returns the name of @info or %NULL if it lacks a name.
     */
    getName(): string
    /**
     * Obtain the namespace of `info`.
     * @returns the namespace
     */
    getNamespace(): string
    /**
     * Obtain the info type of the GIBaseInfo.
     * @returns the info type of @info
     */
    getType(): InfoType
    /**
     * Obtain the typelib this `info` belongs to
     * @returns the typelib.
     */
    getTypelib(): Typelib
    /**
     * Obtain whether the `info` is represents a metadata which is
     * deprecated or not.
     * @returns %TRUE if deprecated
     */
    isDeprecated(): boolean
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
     * @returns %TRUE if there are more attributes
     */
    iterateAttributes(iterator: AttributeIter): [ /* returnType */ boolean, /* iterator */ AttributeIter, /* name */ string | null, /* value */ string | null ]
}

/**
 * GIBaseInfo is the common base struct of all other Info structs
 * accessible through the #GIRepository API.
 * 
 * All info structures can be cast to a #GIBaseInfo, for instance:
 * 
 * 
 * ```c
 *    GIFunctionInfo *function_info = ...;
 *    GIBaseInfo *info = (GIBaseInfo *) function_info;
 * ```
 * 
 * 
 * Most #GIRepository APIs returning a #GIBaseInfo is actually
 * creating a new struct; in other words, g_base_info_unref() has to
 * be called when done accessing the data.
 * 
 * #GIBaseInfo structuress are normally accessed by calling either
 * g_irepository_find_by_name(), g_irepository_find_by_gtype() or
 * g_irepository_get_info().
 * 
 * 
 * ```c
 * GIBaseInfo *button_info =
 *   g_irepository_find_by_name (NULL, "Gtk", "Button");
 * 
 * // ... use button_info ...
 * 
 * g_base_info_unref (button_info);
 * ```
 * 
 * 
 * ## Hierarchy
 * 
 * 
 * ```<!-- language="plain" -->
 *   GIBaseInfo
 *    +---- GIArgInfo
 *    +---- GICallableInfo
 *    +---- GIConstantInfo
 *    +---- GIFieldInfo
 *    +---- GIPropertyInfo
 *    +---- GIRegisteredTypeInfo
 *    +---- GITypeInfo
 * ```
 * 
 * @record 
 */
class BaseInfo {

    // Own properties of GIRepository-2.0.GIRepository.BaseInfo

    static name: string
}

interface RepositoryClass {
}

abstract class RepositoryClass {

    // Own properties of GIRepository-2.0.GIRepository.RepositoryClass

    static name: string
}

interface RepositoryPrivate {
}

class RepositoryPrivate {

    // Own properties of GIRepository-2.0.GIRepository.RepositoryPrivate

    static name: string
}

interface Typelib {

    // Owm methods of GIRepository-2.0.GIRepository.Typelib

    free(): void
    getNamespace(): string
    symbol(symbolName: string, symbol: any | null): boolean
}

/**
 * TODO
 * @record 
 */
class Typelib {

    // Own properties of GIRepository-2.0.GIRepository.Typelib

    static name: string
}

interface UnresolvedInfo {
}

/**
 * Represents a unresolved type in a typelib.
 * @record 
 */
class UnresolvedInfo {

    // Own properties of GIRepository-2.0.GIRepository.UnresolvedInfo

    static name: string
}

interface Argument {

    // Own fields of GIRepository-2.0.GIRepository.Argument

    /**
     * TODO
     * @field 
     */
    vBoolean: boolean
    /**
     * TODO
     * @field 
     */
    vInt8: number
    /**
     * TODO
     * @field 
     */
    vUint8: number
    /**
     * TODO
     * @field 
     */
    vInt16: number
    /**
     * TODO
     * @field 
     */
    vUint16: number
    /**
     * TODO
     * @field 
     */
    vInt32: number
    /**
     * TODO
     * @field 
     */
    vUint32: number
    /**
     * TODO
     * @field 
     */
    vInt64: number
    /**
     * TODO
     * @field 
     */
    vUint64: number
    /**
     * TODO
     * @field 
     */
    vFloat: number
    /**
     * TODO
     * @field 
     */
    vDouble: number
    /**
     * TODO
     * @field 
     */
    vShort: number
    /**
     * TODO
     * @field 
     */
    vUshort: number
    /**
     * TODO
     * @field 
     */
    vInt: number
    /**
     * TODO
     * @field 
     */
    vUint: number
    /**
     * TODO
     * @field 
     */
    vLong: number
    /**
     * TODO
     * @field 
     */
    vUlong: number
    /**
     * TODO
     * @field 
     */
    vSsize: number
    /**
     * TODO
     * @field 
     */
    vSize: number
    /**
     * TODO
     * @field 
     */
    vString: string | null
    /**
     * TODO
     * @field 
     */
    vPointer: any
}

/**
 * Stores an argument of varying type
 * @union 
 */
class Argument {

    // Own properties of GIRepository-2.0.GIRepository.Argument

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
// END