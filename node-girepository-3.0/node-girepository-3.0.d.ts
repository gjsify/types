
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-girepository-3.0-import.d.ts';
    
/**
 * GIRepository-3.0
 */

import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type GModule from '@girs/node-gmodule-2.0';

export namespace GIRepository {

/**
 * The type of array in a [class`GIRepository`.TypeInfo].
 */
enum ArrayType {
    /**
     * a C array, `char[]` for instance
     */
    C,
    /**
     * a [type`GLib`.Array] array
     */
    ARRAY,
    /**
     * a [type`GLib`.PtrArray] array
     */
    PTR_ARRAY,
    /**
     * a [type`GLib`.ByteArray] array
     */
    BYTE_ARRAY,
}
/**
 * The direction of a [class`GIRepository`.ArgInfo].
 */
enum Direction {
    /**
     * ‘in’ argument.
     */
    IN,
    /**
     * ‘out’ argument.
     */
    OUT,
    /**
     * ‘in and out’ argument.
     */
    INOUT,
}
/**
 * An error occurring while invoking a function via
 * [method`GIRepository`.FunctionInfo.invoke].
 */
enum InvokeError {
    /**
     * invocation failed, unknown error.
     */
    FAILED,
    /**
     * symbol couldn’t be found in any of the
     *   libraries associated with the typelib of the function.
     */
    SYMBOL_NOT_FOUND,
    /**
     * the arguments provided didn’t match
     *   the expected arguments for the function’s type signature.
     */
    ARGUMENT_MISMATCH,
}
/**
 * An error code used with `GI_REPOSITORY_ERROR` in a [type`GLib`.Error]
 * returned from a [class`GIRepository`.Repository] routine.
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
 * Scope type of a [class`GIRepository`.ArgInfo] representing callback,
 * determines how the callback is invoked and is used to decided when the invoke
 * structs can be freed.
 */
enum ScopeType {
    /**
     * The argument is not of callback type.
     */
    INVALID,
    /**
     * The callback and associated `user_data` is only
     *   used during the call to this function.
     */
    CALL,
    /**
     * The callback and associated `user_data` is
     *   only used until the callback is invoked, and the callback.
     *   is invoked always exactly once.
     */
    ASYNC,
    /**
     * The callback and associated
     *   `user_data` is used until the caller is notified via the
     *   [type`GLib`.DestroyNotify].
     */
    NOTIFIED,
    /**
     * The callback and associated `user_data` is
     *   used until the process terminates
     */
    FOREVER,
}
/**
 * `GITransfer` specifies who’s responsible for freeing the resources after an
 * ownership transfer is complete.
 * 
 * The transfer is the exchange of data between two parts, from the callee to
 * the caller.
 * 
 * The callee is either a function/method/signal or an object/interface where a
 * property is defined. The caller is the side accessing a property or calling a
 * function.
 * 
 * In the case of a containing type such as a list, an array or a hash table the
 * container itself is specified differently from the items within the
 * container. Each container is freed differently, check the documentation for
 * the types themselves for information on how to free them.
 */
enum Transfer {
    /**
     * Transfer nothing from the callee (function or the type
     *   instance the property belongs to) to the caller. The callee retains the
     *   ownership of the transfer and the caller doesn’t need to do anything to
     *   free up the resources of this transfer.
     */
    NOTHING,
    /**
     * Transfer the container (list, array, hash table) from
     *   the callee to the caller. The callee retains the ownership of the
     *   individual items in the container and the caller has to free up the
     *   container resources ([func`GLib`.List.free],
     *   [func`GLib`.HashTable.destroy], etc) of this transfer.
     */
    CONTAINER,
    /**
     * Transfer everything, e.g. the container and its
     *   contents from the callee to the caller. This is the case when the callee
     *   creates a copy of all the data it returns. The caller is responsible for
     *   cleaning up the container and item resources of this transfer.
     */
    EVERYTHING,
}
/**
 * The type tag of a [class`GIRepository`.TypeInfo].
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
     * a [type`GObject`.Type]
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
     * a [type`GLib`.List]
     */
    GLIST,
    /**
     * a [type`GLib`.SList]
     */
    GSLIST,
    /**
     * a [type`GLib`.HashTable]
     */
    GHASH,
    /**
     * a [type`GLib`.Error]
     */
    ERROR,
    /**
     * Unicode character
     */
    UNICHAR,
}
/**
 * Flags for a [class`GIRepository`.FieldInfo].
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
 * Flags for a [class`GIRepository`.FunctionInfo] struct.
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
     * is a getter of a [class`GIRepository`.PropertyInfo].
     */
    IS_GETTER,
    /**
     * is a setter of a [class`GIRepository`.PropertyInfo].
     */
    IS_SETTER,
    /**
     * represents a virtual function.
     */
    WRAPS_VFUNC,
}
/**
 * Flags that control how a typelib is loaded.
 * @bitfield 
 */
enum RepositoryLoadFlags {
    /**
     * No flags set.
     */
    NONE,
    /**
     * Lazily load the typelib.
     */
    LAZY,
}
/**
 * Flags of a [class`GIRepository`.VFuncInfo] struct.
 * @bitfield 
 */
enum VFuncInfoFlags {
    /**
     * chains up to the parent type
     */
    CHAIN_UP,
    /**
     * overrides
     */
    OVERRIDE,
    /**
     * does not override
     */
    NOT_OVERRIDE,
}
/**
 * Number of entries in [enum`GIRepository`.TypeTag].
 */
const TYPE_TAG_N_TYPES: number
/**
 * Get the error quark which represents [type`GIRepository`.InvokeError].
 * @returns error quark
 */
function invokeErrorQuark(): GLib.Quark
/**
 * Convert a data pointer from a GLib data structure to a
 * [type`GIRepository`.Argument].
 * 
 * GLib data structures, such as [type`GLib`.List], [type`GLib`.SList], and
 * [type`GLib`.HashTable], all store data pointers.
 * 
 * In the case where the list or hash table is storing single types rather than
 * structs, these data pointers may have values stuffed into them via macros
 * such as `GPOINTER_TO_INT`.
 * 
 * Use this function to ensure that all values are correctly extracted from
 * stuffed pointers, regardless of the machine’s architecture or endianness.
 * 
 * This function fills in the appropriate field of `arg` with the value extracted
 * from `hash_pointer,` depending on `storage_type`.
 * @param storageType a [type`GIRepository`.TypeTag] obtained from   [method`GIRepository`.TypeInfo.get_storage_type]
 * @param hashPointer a pointer, such as a [struct`GLib`.HashTable] data pointer
 */
function typeTagArgumentFromHashPointer(storageType: TypeTag, hashPointer: any | null): /* arg */ Argument
/**
 * Convert a [type`GIRepository`.Argument] to data pointer for use in a GLib
 * data structure.
 * 
 * GLib data structures, such as [type`GLib`.List], [type`GLib`.SList], and
 * [type`GLib`.HashTable], all store data pointers.
 * 
 * In the case where the list or hash table is storing single types rather than
 * structs, these data pointers may have values stuffed into them via macros
 * such as `GPOINTER_TO_INT`.
 * 
 * Use this function to ensure that all values are correctly stuffed into
 * pointers, regardless of the machine’s architecture or endianness.
 * 
 * This function returns a pointer stuffed with the appropriate field of `arg,`
 * depending on `storage_type`.
 * @param storageType a [type`GIRepository`.TypeTag] obtained from   [method`GIRepository`.TypeInfo.get_storage_type]
 * @param arg a [type`GIRepository`.Argument] with the value to stuff into a pointer
 * @returns A stuffed pointer, that can be stored in a [struct@GLib.HashTable],   for example
 */
function typeTagHashPointerFromArgument(storageType: TypeTag, arg: Argument): any | null
/**
 * Obtain a string representation of `type`
 * @param type the type_tag
 * @returns the string
 */
function typeTagToString(type: TypeTag): string
interface ArgInfo {

    // Owm methods of GIRepository-3.0.GIRepository.ArgInfo

    /**
     * Obtain the index of the user data argument. This is only valid
     * for arguments which are callbacks.
     * @returns `TRUE` if the argument has a user data argument
     */
    getClosureIndex(): [ /* returnType */ boolean, /* outClosureIndex */ number ]
    /**
     * Obtains the index of the [type`GLib`.DestroyNotify] argument. This is only
     * valid for arguments which are callbacks.
     * @returns `TRUE` if the argument has a [type@GLib.DestroyNotify] argument
     */
    getDestroyIndex(): [ /* returnType */ boolean, /* outDestroyIndex */ number ]
    /**
     * Obtain the direction of the argument. Check [type`GIRepository`.Direction]
     * for possible direction values.
     * @returns The direction
     */
    getDirection(): Direction
    /**
     * Obtain the ownership transfer for this argument.
     * [type`GIRepository`.Transfer] contains a list of possible values.
     * @returns The transfer
     */
    getOwnershipTransfer(): Transfer
    /**
     * Obtain the scope type for this argument.
     * 
     * The scope type explains how a callback is going to be invoked, most
     * importantly when the resources required to invoke it can be freed.
     * 
     * [type`GIRepository`.ScopeType] contains a list of possible values.
     * @returns The scope type
     */
    getScope(): ScopeType
    /**
     * Obtain the type information for `info`.
     * @returns The [class@GIRepository.TypeInfo] holding the type   information for @info, free it with [method@GIRepository.BaseInfo.unref]   when done
     */
    getTypeInfo(): TypeInfo
    /**
     * Obtain if the argument is a pointer to a struct or object that will
     * receive an output of a function.
     * 
     * The default assumption for `GI_DIRECTION_OUT` arguments which have allocation
     * is that the callee allocates; if this is `TRUE`, then the caller must
     * allocate.
     * @returns `TRUE` if caller is required to have allocated the argument
     */
    isCallerAllocates(): boolean
    /**
     * Obtain if the argument is optional.
     * 
     * For ‘out’ arguments this means that you can pass `NULL` in order to ignore
     * the result.
     * @returns `TRUE` if it is an optional argument
     */
    isOptional(): boolean
    /**
     * Obtain if the argument is a return value. It can either be a
     * parameter or a return value.
     * @returns `TRUE` if it is a return value
     */
    isReturnValue(): boolean
    /**
     * Obtain if an argument is only useful in C.
     * @returns `TRUE` if argument is only useful in C.
     */
    isSkip(): boolean
    /**
     * Obtain information about a the type of given argument `info;` this
     * function is a variant of [method`GIRepository`.ArgInfo.get_type_info] designed
     * for stack allocation.
     * 
     * The initialized `type` must not be referenced after `info` is deallocated.
     * 
     * Once you are done with `type,` it must be cleared using
     * [method`GIRepository`.BaseInfo.clear].
     */
    loadTypeInfo(): /* type */ TypeInfo
    /**
     * Obtain if the type of the argument includes the possibility of `NULL`.
     * 
     * For ‘in’ values this means that `NULL` is a valid value.  For ‘out’
     * values, this means that `NULL` may be returned.
     * 
     * See also [method`GIRepository`.ArgInfo.is_optional].
     * @returns `TRUE` if the value may be `NULL`
     */
    mayBeNull(): boolean
}

/**
 * `GIArgInfo` represents an argument of a callable.
 * 
 * An argument is always part of a [class`GIRepository`.CallableInfo].
 * @class 
 */
class ArgInfo extends BaseInfo {

    // Own properties of GIRepository-3.0.GIRepository.ArgInfo

    static name: string
}

interface BaseInfo {

    // Owm methods of GIRepository-3.0.GIRepository.BaseInfo

    /**
     * Clears memory allocated internally by a stack-allocated
     * [type`GIRepository`.BaseInfo].
     * 
     * This does not deallocate the [type`GIRepository`.BaseInfo] struct itself. It
     * does clear the struct to zero so that calling this function subsequent times
     * on the same struct is a no-op.
     * 
     * This must only be called on stack-allocated [type`GIRepository`.BaseInfo]s.
     * Use [method`GIRepository`.BaseInfo.unref] for heap-allocated ones.
     */
    clear(): void
    /**
     * Compare two `GIBaseInfo`s.
     * 
     * Using pointer comparison is not practical since many functions return
     * different instances of `GIBaseInfo` that refers to the same part of the
     * TypeLib; use this function instead to do `GIBaseInfo` comparisons.
     * @param info2 a #GIBaseInfo
     * @returns `TRUE` if and only if @info1 equals @info2.
     */
    equal(info2: BaseInfo): boolean
    /**
     * Retrieve an arbitrary attribute associated with this node.
     * @param name a freeform string naming an attribute
     * @returns The value of the attribute, or `NULL` if no such   attribute exists
     */
    getAttribute(name: string): string | null
    /**
     * Obtain the container of the `info`.
     * 
     * The container is the parent `GIBaseInfo`. For instance, the parent of a
     * [class`GIRepository`.FunctionInfo] is an [class`GIRepository`.ObjectInfo] or
     * [class`GIRepository`.InterfaceInfo].
     * @returns the container
     */
    getContainer(): BaseInfo
    /**
     * Obtain the name of the `info`.
     * 
     * What the name represents depends on the type of the
     * `info`. For instance for [class`GIRepository`.FunctionInfo] it is the name of
     * the function.
     * @returns the name of @info or `NULL` if it lacks a name.
     */
    getName(): string | null
    /**
     * Obtain the namespace of `info`.
     * @returns the namespace
     */
    getNamespace(): string
    /**
     * Obtain the typelib this `info` belongs to
     * @returns the typelib
     */
    getTypelib(): Typelib
    /**
     * Obtain whether the `info` is represents a metadata which is
     * deprecated.
     * @returns `TRUE` if deprecated
     */
    isDeprecated(): boolean
    /**
     * Iterate over all attributes associated with this node.
     * 
     * The iterator structure is typically stack allocated, and must have its first
     * member initialized to `NULL`.  Attributes are arbitrary namespaced key–value
     * pairs which can be attached to almost any item.  They are intended for use
     * by software higher in the toolchain than bindings, and are distinct from
     * normal GIR annotations.
     * 
     * Both the `name` and `value` should be treated as constants
     * and must not be freed.
     * 
     * ```c
     * void
     * print_attributes (GIBaseInfo *info)
     * {
     *   GIAttributeIter iter = GI_ATTRIBUTE_ITER_INIT;
     *   const char *name;
     *   const char *value;
     *   while (gi_base_info_iterate_attributes (info, &iter, &name, &value))
     *     {
     *       g_print ("attribute name: %s value: %s", name, value);
     *     }
     * }
     * ```
     * @param iterator a [type`GIRepository`.AttributeIter] structure, must be   initialized; see below
     * @returns `TRUE` if there are more attributes
     */
    iterateAttributes(iterator: AttributeIter): [ /* returnType */ boolean, /* iterator */ AttributeIter, /* name */ string, /* value */ string ]
    /**
     * Increases the reference count of `info`.
     * @returns the same @info.
     */
    ref(): BaseInfo
    /**
     * Decreases the reference count of `info`. When its reference count
     * drops to 0, the info is freed.
     * 
     * This must not be called on stack-allocated [type`GIRepository`.BaseInfo]s —
     * use [method`GIRepository`.BaseInfo.clear] for that.
     */
    unref(): void
}

/**
 * `GIBaseInfo` is the common base struct of all other Info structs
 * accessible through the [class`GIRepository`.Repository] API.
 * 
 * All info structures can be cast to a `GIBaseInfo`, for instance:
 * 
 * ```c
 *    GIFunctionInfo *function_info = …;
 *    GIBaseInfo *info = (GIBaseInfo *) function_info;
 * ```
 * 
 * Most [class`GIRepository`.Repository] APIs returning a `GIBaseInfo` are
 * actually creating a new struct; in other words,
 * [method`GIRepository`.BaseInfo.unref] has to be called when done accessing the
 * data.
 * 
 * `GIBaseInfo` structuress are normally accessed by calling either
 * [method`GIRepository`.Repository.find_by_name],
 * [method`GIRepository`.Repository.find_by_gtype] or
 * [method`GIRepository`.get_info].
 * 
 * ```c
 * GIBaseInfo *button_info =
 *   gi_repository_find_by_name (NULL, "Gtk", "Button");
 * 
 * // use button_info…
 * 
 * gi_base_info_unref (button_info);
 * ```
 * @class 
 */
class BaseInfo {

    // Own properties of GIRepository-3.0.GIRepository.BaseInfo

    static name: string
}

interface CallableInfo {

    // Owm methods of GIRepository-3.0.GIRepository.CallableInfo

    /**
     * Whether the callable can throw a [type`GLib`.Error]
     * @returns `TRUE` if this `GICallableInfo` can throw a [type@GLib.Error]
     */
    canThrowGerror(): boolean
    /**
     * Obtain information about a particular argument of this callable.
     * @param n the argument index to fetch
     * @returns the [class@GIRepository.ArgInfo]. Free it with   [method@GIRepository.BaseInfo.unref] when done.
     */
    getArg(n: number): ArgInfo
    /**
     * See whether the caller owns the return value of this callable.
     * 
     * [type`GIRepository`.Transfer] contains a list of possible transfer values.
     * @returns the transfer mode for the return value of the callable
     */
    getCallerOwns(): Transfer
    /**
     * Obtains the ownership transfer for the instance argument.
     * 
     * [type`GIRepository`.Transfer] contains a list of possible transfer values.
     * @returns the transfer mode of the instance argument
     */
    getInstanceOwnershipTransfer(): Transfer
    /**
     * Obtain the number of arguments (both ‘in’ and ‘out’) for this callable.
     * @returns The number of arguments this callable expects.
     */
    getNArgs(): number
    /**
     * Retrieve an arbitrary attribute associated with the return value.
     * @param name a freeform string naming an attribute
     * @returns The value of the attribute, or `NULL` if no such   attribute exists
     */
    getReturnAttribute(name: string): string | null
    /**
     * Obtain the return type of a callable item as a [class`GIRepository`.TypeInfo].
     * 
     * If the callable doesn’t return anything, a [class`GIRepository`.TypeInfo] of
     * type [enum`GIRepository`.TypeTag.VOID] will be returned.
     * @returns the [class@GIRepository.TypeInfo]. Free the struct   by calling [method@GIRepository.BaseInfo.unref] when done.
     */
    getReturnType(): TypeInfo
    /**
     * Invoke the given `GICallableInfo` by calling the given `function` pointer.
     * 
     * The set of arguments passed to `function` will be constructed according to the
     * introspected type of the `GICallableInfo`, using `in_args,` `out_args`
     * and `error`.
     * @param function_ function pointer to call
     * @param inArgs array of ‘in’ arguments
     * @param outArgs array of ‘out’ arguments allocated by   the caller, to be populated with outputted values
     * @returns `TRUE` if the callable was executed successfully and didn’t throw   a [type@GLib.Error]; `FALSE` if @error is set
     */
    invoke(function_: any | null, inArgs: Argument[], outArgs: Argument[]): [ /* returnType */ boolean, /* returnValue */ Argument ]
    /**
     * Determines if the callable info is a method.
     * 
     * For [class`GIRepository`.VFuncInfo]s, [class`GIRepository`.CallbackInfo]s, and
     * [class`GIRepository`.SignalInfo]s, this is always true. Otherwise, this looks
     * at the `GI_FUNCTION_IS_METHOD` flag on the [class`GIRepository`.FunctionInfo].
     * 
     * Concretely, this function returns whether
     * [method`GIRepository`.CallableInfo.get_n_args] matches the number of arguments
     * in the raw C method. For methods, there is one more C argument than is
     * exposed by introspection: the `self` or `this` object.
     * @returns `TRUE` if @info is a method, `FALSE` otherwise
     */
    isMethod(): boolean
    /**
     * Iterate over all attributes associated with the return value.
     * 
     * The iterator structure is typically stack allocated, and must have its
     * first member initialized to `NULL`.
     * 
     * Both the `name` and `value` should be treated as constants
     * and must not be freed.
     * 
     * See [method`GIRepository`.BaseInfo.iterate_attributes] for an example of how
     * to use a similar API.
     * @param iterator a [type`GIRepository`.AttributeIter] structure, must be   initialized; see below
     * @returns `TRUE` if there are more attributes
     */
    iterateReturnAttributes(iterator: AttributeIter): [ /* returnType */ boolean, /* iterator */ AttributeIter, /* name */ string, /* value */ string ]
    /**
     * Obtain information about a particular argument of this callable; this
     * function is a variant of [method`GIRepository`.CallableInfo.get_arg] designed
     * for stack allocation.
     * 
     * The initialized `arg` must not be referenced after `info` is deallocated.
     * 
     * Once you are done with `arg,` it must be cleared using
     * [method`GIRepository`.BaseInfo.clear].
     * @param n the argument index to fetch
     */
    loadArg(n: number): /* arg */ ArgInfo
    /**
     * Obtain information about a return value of callable; this
     * function is a variant of [method`GIRepository`.CallableInfo.get_return_type]
     * designed for stack allocation.
     * 
     * The initialized `type` must not be referenced after `info` is deallocated.
     * 
     * Once you are done with `type,` it must be cleared using
     * [method`GIRepository`.BaseInfo.clear].
     */
    loadReturnType(): /* type */ TypeInfo
    /**
     * See if a callable could return `NULL`.
     * @returns `TRUE` if callable could return `NULL`
     */
    mayReturnNull(): boolean
    /**
     * See if a callable’s return value is only useful in C.
     * @returns `TRUE` if return value is only useful in C.
     */
    skipReturn(): boolean
}

/**
 * `GICallableInfo` represents an entity which is callable.
 * 
 * Examples of callable are:
 * 
 *  - functions ([class`GIRepository`.FunctionInfo])
 *  - virtual functions ([class`GIRepository`.VFuncInfo])
 *  - callbacks ([class`GIRepository`.CallbackInfo]).
 * 
 * A callable has a list of arguments ([class`GIRepository`.ArgInfo]), a return
 * type, direction and a flag which decides if it returns `NULL`.
 * @class 
 */
class CallableInfo extends BaseInfo {

    // Own properties of GIRepository-3.0.GIRepository.CallableInfo

    static name: string
}

interface CallbackInfo {
}

/**
 * `GICallbackInfo` represents a callback.
 * @class 
 */
class CallbackInfo extends CallableInfo {

    // Own properties of GIRepository-3.0.GIRepository.CallbackInfo

    static name: string
}

interface ConstantInfo {

    // Owm methods of GIRepository-3.0.GIRepository.ConstantInfo

    /**
     * Obtain the type of the constant as a [class`GIRepository`.TypeInfo].
     * @returns The [class@GIRepository.TypeInfo]. Free the struct   by calling [method@GIRepository.BaseInfo.unref] when done.
     */
    getTypeInfo(): TypeInfo
}

/**
 * `GIConstantInfo` represents a constant.
 * 
 * A constant has a type associated – which can be obtained by calling
 * [method`GIRepository`.ConstantInfo.get_type_info] – and a value – which can be
 * obtained by calling [method`GIRepository`.ConstantInfo.get_value].
 * @class 
 */
class ConstantInfo extends BaseInfo {

    // Own properties of GIRepository-3.0.GIRepository.ConstantInfo

    static name: string
}

interface EnumInfo {

    // Owm methods of GIRepository-3.0.GIRepository.EnumInfo

    /**
     * Obtain the string form of the quark for the error domain associated with
     * this enum, if any.
     * @returns the string form of the error domain   associated with this enum, or `NULL`.
     */
    getErrorDomain(): string | null
    /**
     * Obtain an enum type method at index `n`.
     * @param n index of method to get
     * @returns the [class@GIRepository.FunctionInfo]. Free the   struct by calling [method@GIRepository.BaseInfo.unref] when done.
     */
    getMethod(n: number): FunctionInfo
    /**
     * Obtain the number of methods that this enum type has.
     * @returns number of methods
     */
    getNMethods(): number
    /**
     * Obtain the number of values this enumeration contains.
     * @returns the number of enumeration values
     */
    getNValues(): number
    /**
     * Obtain the tag of the type used for the enum in the C ABI. This will
     * will be a signed or unsigned integral type.
     * 
     * Note that in the current implementation the width of the type is
     * computed correctly, but the signed or unsigned nature of the type
     * may not match the sign of the type used by the C compiler.
     * @returns the storage type for the enumeration
     */
    getStorageType(): TypeTag
    /**
     * Obtain a value for this enumeration.
     * @param n index of value to fetch
     * @returns the enumeration value, free the struct with   [method@GIRepository.BaseInfo.unref] when done.
     */
    getValue(n: number): ValueInfo
}

/**
 * A `GIEnumInfo` represents an enumeration.
 * 
 * The `GIEnumInfo` contains a set of values (each a
 * [class`GIRepository`.ValueInfo]) and a type.
 * 
 * The [class`GIRepository`.ValueInfo] for a value is fetched by calling
 * [method`GIRepository`.EnumInfo.get_value] on a `GIEnumInfo`.
 * @class 
 */
class EnumInfo extends RegisteredTypeInfo {

    // Own properties of GIRepository-3.0.GIRepository.EnumInfo

    static name: string
}

interface FieldInfo {

    // Owm methods of GIRepository-3.0.GIRepository.FieldInfo

    /**
     * Obtain the flags for this `GIFieldInfo`. See
     * [flags`GIRepository`.FieldInfoFlags] for possible flag values.
     * @returns the flags
     */
    getFlags(): FieldInfoFlags
    /**
     * Obtain the offset of the field member, in bytes. This is relative
     * to the beginning of the struct or union.
     * @returns the field offset, in bytes
     */
    getOffset(): number
    /**
     * Obtain the size of the field member, in bits. This is how
     * much space you need to allocate to store the field.
     * @returns the field size, in bits
     */
    getSize(): number
    /**
     * Obtain the type of a field as a [type`GIRepository`.TypeInfo].
     * @returns the [type@GIRepository.TypeInfo]. Free the struct   by calling [method@GIRepository.BaseInfo.unref] when done.
     */
    getTypeInfo(): TypeInfo
}

/**
 * A `GIFieldInfo` struct represents a field of a struct, union, or object.
 * 
 * The `GIFieldInfo` is fetched by calling
 * [method`GIRepository`.StructInfo.get_field],
 * [method`GIRepository`.UnionInfo.get_field] or
 * [method`GIRepository`.ObjectInfo.get_field].
 * 
 * A field has a size, type and a struct offset associated and a set of flags,
 * which are currently `GI_FIELD_IS_READABLE` or `GI_FIELD_IS_WRITABLE`.
 * 
 * See also: [type`GIRepository`.StructInfo], [type`GIRepository`.UnionInfo],
 * [type`GIRepository`.ObjectInfo]
 * @class 
 */
class FieldInfo extends BaseInfo {

    // Own properties of GIRepository-3.0.GIRepository.FieldInfo

    static name: string
}

interface FlagsInfo {
}

/**
 * A `GIFlagsInfo` represents an enumeration which defines flag values
 * (independently set bits).
 * 
 * The `GIFlagsInfo` contains a set of values (each a
 * [class`GIRepository`.ValueInfo]) and a type.
 * 
 * The [class`GIRepository`.ValueInfo] for a value is fetched by calling
 * [method`GIRepository`.EnumInfo.get_value] on a `GIFlagsInfo`.
 * @class 
 */
class FlagsInfo extends EnumInfo {

    // Own properties of GIRepository-3.0.GIRepository.FlagsInfo

    static name: string
}

interface FunctionInfo {

    // Owm methods of GIRepository-3.0.GIRepository.FunctionInfo

    /**
     * Obtain the [type`GIRepository`.FunctionInfoFlags] for the `info`.
     * @returns the flags
     */
    getFlags(): FunctionInfoFlags
    /**
     * Obtain the property associated with this `GIFunctionInfo`.
     * 
     * Only `GIFunctionInfo`s with the flag `GI_FUNCTION_IS_GETTER` or
     * `GI_FUNCTION_IS_SETTER` have a property set. For other cases,
     * `NULL` will be returned.
     * @returns The property or `NULL` if not set. Free   it with [method@GIRepository.BaseInfo.unref] when done.
     */
    getProperty(): PropertyInfo | null
    /**
     * Obtain the symbol of the function.
     * 
     * The symbol is the name of the exported function, suitable to be used as an
     * argument to [method`GModule`.Module.symbol].
     * @returns the symbol
     */
    getSymbol(): string
    /**
     * Obtain the virtual function associated with this `GIFunctionInfo`.
     * 
     * Only `GIFunctionInfo`s with the flag `GI_FUNCTION_WRAPS_VFUNC` have
     * a virtual function set. For other cases, `NULL` will be returned.
     * @returns The virtual function or `NULL` if not   set. Free it by calling [method@GIRepository.BaseInfo.unref] when done.
     */
    getVfunc(): VFuncInfo | null
}

/**
 * `GIFunctionInfo` represents a function, method or constructor.
 * 
 * To find out what kind of entity a `GIFunctionInfo` represents, call
 * [method`GIRepository`.FunctionInfo.get_flags].
 * 
 * See also [class`GIRepository`.CallableInfo] for information on how to retrieve
 * arguments and other metadata.
 * @class 
 */
class FunctionInfo extends CallableInfo {

    // Own properties of GIRepository-3.0.GIRepository.FunctionInfo

    static name: string
}

interface InterfaceInfo {

    // Owm methods of GIRepository-3.0.GIRepository.InterfaceInfo

    /**
     * Obtain a method of the interface type given a `name`.
     * 
     * `NULL` will be returned if there’s no method available with that name.
     * @param name name of method to obtain
     * @returns The [class@GIRepository.FunctionInfo] or   `NULL` if none found. Free the struct by calling   [method@GIRepository.BaseInfo.unref] when done.
     */
    findMethod(name: string): FunctionInfo | null
    /**
     * Obtain a signal of the interface type given a `name`.
     * 
     * `NULL` will be returned if there’s no signal available with that name.
     * @param name name of signal to find
     * @returns The [class@GIRepository.SignalInfo] or   `NULL` if none found. Free the struct by calling   [method@GIRepository.BaseInfo.unref] when done.
     */
    findSignal(name: string): SignalInfo | null
    /**
     * Locate a virtual function slot with name `name`.
     * 
     * See the documentation for [method`GIRepository`.ObjectInfo.find_vfunc] for
     * more information on virtuals.
     * @param name The name of a virtual function to find.
     * @returns The [class@GIRepository.VFuncInfo], or   `NULL` if none found. Free it with [method@GIRepository.BaseInfo.unref]   when done.
     */
    findVfunc(name: string): VFuncInfo | null
    /**
     * Obtain an interface type constant at index `n`.
     * @param n index of constant to get
     * @returns The [class@GIRepository.ConstantInfo]. Free the   struct by calling [method@GIRepository.BaseInfo.unref] when done.
     */
    getConstant(n: number): ConstantInfo
    /**
     * Returns the layout C structure associated with this `GInterface`.
     * @returns The [class@GIRepository.StructInfo] or   `NULL` if unknown. Free it with [method@GIRepository.BaseInfo.unref] when   done.
     */
    getIfaceStruct(): StructInfo | null
    /**
     * Obtain an interface type method at index `n`.
     * @param n index of method to get
     * @returns The [class@GIRepository.FunctionInfo]. Free the   struct by calling [method@GIRepository.BaseInfo.unref] when done.
     */
    getMethod(n: number): FunctionInfo
    /**
     * Obtain the number of constants that this interface type has.
     * @returns number of constants
     */
    getNConstants(): number
    /**
     * Obtain the number of methods that this interface type has.
     * @returns number of methods
     */
    getNMethods(): number
    /**
     * Obtain the number of prerequisites for this interface type.
     * 
     * A prerequisite is another interface that needs to be implemented for
     * interface, similar to a base class for [class`GObject`.Object]s.
     * @returns number of prerequisites
     */
    getNPrerequisites(): number
    /**
     * Obtain the number of properties that this interface type has.
     * @returns number of properties
     */
    getNProperties(): number
    /**
     * Obtain the number of signals that this interface type has.
     * @returns number of signals
     */
    getNSignals(): number
    /**
     * Obtain the number of virtual functions that this interface type has.
     * @returns number of virtual functions
     */
    getNVfuncs(): number
    /**
     * Obtain an interface type’s prerequisite at index `n`.
     * @param n index of prerequisite to get
     * @returns The prerequisite as a [class@GIRepository.BaseInfo].   Free the struct by calling [method@GIRepository.BaseInfo.unref] when done.
     */
    getPrerequisite(n: number): BaseInfo
    /**
     * Obtain an interface type property at index `n`.
     * @param n index of property to get
     * @returns The [class@GIRepository.PropertyInfo]. Free the   struct by calling [method@GIRepository.BaseInfo.unref] when done.
     */
    getProperty(n: number): PropertyInfo
    /**
     * Obtain an interface type signal at index `n`.
     * @param n index of signal to get
     * @returns The [class@GIRepository.SignalInfo]. Free the   struct by calling [method@GIRepository.BaseInfo.unref] when done.
     */
    getSignal(n: number): SignalInfo
    /**
     * Obtain an interface type virtual function at index `n`.
     * @param n index of virtual function to get
     * @returns the [class@GIRepository.VFuncInfo]. Free the struct   by calling [method@GIRepository.BaseInfo.unref] when done.
     */
    getVfunc(n: number): VFuncInfo
}

/**
 * `GIInterfaceInfo` represents a `GInterface` type.
 * 
 * A `GInterface` has methods, fields, properties, signals,
 * interfaces, constants, virtual functions and prerequisites.
 * @class 
 */
class InterfaceInfo extends RegisteredTypeInfo {

    // Own properties of GIRepository-3.0.GIRepository.InterfaceInfo

    static name: string
}

interface ObjectInfo {

    // Owm methods of GIRepository-3.0.GIRepository.ObjectInfo

    /**
     * Obtain a method of the object type given a `name`.
     * 
     * `NULL` will be returned if there’s no method available with that name.
     * @param name name of method to obtain
     * @returns The [class@GIRepository.FunctionInfo],   or `NULL` if no method could be found. Free the struct by calling   [method@GIRepository.BaseInfo.unref] when done.
     */
    findMethod(name: string): FunctionInfo | null
    /**
     * Obtain a method of the object given a `name,` searching both the
     * object `info` and any interfaces it implements.
     * 
     * `NULL` will be returned if there’s no method available with that name.
     * 
     * Note that this function does *not* search parent classes; you will have
     * to chain up if that’s desired.
     * @param name name of method to obtain
     * @returns The [class@GIRepository.FunctionInfo],   or `NULL` if none was found. Free the struct by calling   [method@GIRepository.BaseInfo.unref] when done.
     */
    findMethodUsingInterfaces(name: string): [ /* returnType */ FunctionInfo | null, /* declarer */ BaseInfo | null ]
    /**
     * Obtain a signal of the object type given a `name`.
     * 
     * `NULL` will be returned if there’s no signal available with that name.
     * @param name name of signal
     * @returns The [class@GIRepository.SignalInfo],   or `NULL` if no signal could be found. Free the struct by calling   [method@GIRepository.BaseInfo.unref] when done.
     */
    findSignal(name: string): SignalInfo | null
    /**
     * Locate a virtual function slot with name `name`.
     * 
     * Note that the namespace for virtuals is distinct from that of methods; there
     * may or may not be a concrete method associated for a virtual. If there is
     * one, it may be retrieved using [method`GIRepository`.VFuncInfo.get_invoker],
     * otherwise that method will return `NULL`.
     * 
     * See the documentation for [method`GIRepository`.VFuncInfo.get_invoker] for
     * more information on invoking virtuals.
     * @param name the name of a virtual function to find.
     * @returns The [class@GIRepository.VFuncInfo], or   `NULL` if none is found. Free it with [method@GIRepository.BaseInfo.unref]   when done.
     */
    findVfunc(name: string): VFuncInfo | null
    /**
     * Locate a virtual function slot with name `name,` searching both the object
     * `info` and any interfaces it implements.
     * 
     * `NULL` will be returned if there’s no vfunc available with that name.
     * 
     * Note that the namespace for virtuals is distinct from that of methods; there
     * may or may not be a concrete method associated for a virtual. If there is
     * one, it may be retrieved using [method`GIRepository`.VFuncInfo.get_invoker],
     * otherwise that method will return `NULL`.
     * 
     * Note that this function does *not* search parent classes; you will have
     * to chain up if that’s desired.
     * @param name name of vfunc to obtain
     * @returns The [class@GIRepository.VFuncInfo],   or `NULL` if none was found. Free the struct by calling   [method@GIRepository.BaseInfo.unref] when done.
     */
    findVfuncUsingInterfaces(name: string): [ /* returnType */ VFuncInfo | null, /* declarer */ BaseInfo | null ]
    /**
     * Obtain if the object type is an abstract type, i.e. if it cannot be
     * instantiated.
     * @returns `TRUE` if the object type is abstract
     */
    getAbstract(): boolean
    /**
     * Every [class`GObject`.Object] has two structures; an instance structure and a
     * class structure.  This function returns the metadata for the class structure.
     * @returns The [class@GIRepository.StructInfo] or   `NULL` if it’s unknown. Free with [method@GIRepository.BaseInfo.unref] when   done.
     */
    getClassStruct(): StructInfo | null
    /**
     * Obtain an object type constant at index `n`.
     * @param n index of constant to get
     * @returns The [class@GIRepository.ConstantInfo]. Free the   struct by calling [method@GIRepository.BaseInfo.unref] when done.
     */
    getConstant(n: number): ConstantInfo
    /**
     * Obtain an object type field at index `n`.
     * @param n index of field to get
     * @returns The [class@GIRepository.FieldInfo]. Free the struct   by calling [method@GIRepository.BaseInfo.unref] when done.
     */
    getField(n: number): FieldInfo
    /**
     * Checks whether the object type is a final type, i.e. if it cannot
     * be derived.
     * @returns `TRUE` if the object type is final
     */
    getFinal(): boolean
    /**
     * Obtain if the object type is of a fundamental type which is not
     * `G_TYPE_OBJECT`.
     * 
     * This is mostly for supporting `GstMiniObject`.
     * @returns `TRUE` if the object type is a fundamental type
     */
    getFundamental(): boolean
    /**
     * Obtain the symbol name of the function that should be called to convert
     * an object instance pointer of this object type to a [type`GObject`.Value].
     * 
     * It’s mainly used for fundamental types. The type signature for the symbol
     * is [type`GIRepository`.ObjectInfoGetValueFunction]. To fetch the function
     * pointer see [method`GIRepository`.ObjectInfo.get_get_value_function_pointer].
     * @returns the symbol, or `NULL` if the object type has no   get-value function
     */
    getGetValueFunctionName(): string | null
    /**
     * Obtain an object type interface at index `n`.
     * @param n index of interface to get
     * @returns The [class@GIRepository.InterfaceInfo]. Free the   struct by calling [method@GIRepository.BaseInfo.unref] when done.
     */
    getInterface(n: number): InterfaceInfo
    /**
     * Obtain an object type method at index `n`.
     * @param n index of method to get
     * @returns The [class@GIRepository.FunctionInfo]. Free the   struct by calling [method@GIRepository.BaseInfo.unref] when done.
     */
    getMethod(n: number): FunctionInfo
    /**
     * Obtain the number of constants that this object type has.
     * @returns number of constants
     */
    getNConstants(): number
    /**
     * Obtain the number of fields that this object type has.
     * @returns number of fields
     */
    getNFields(): number
    /**
     * Obtain the number of interfaces that this object type has.
     * @returns number of interfaces
     */
    getNInterfaces(): number
    /**
     * Obtain the number of methods that this object type has.
     * @returns number of methods
     */
    getNMethods(): number
    /**
     * Obtain the number of properties that this object type has.
     * @returns number of properties
     */
    getNProperties(): number
    /**
     * Obtain the number of signals that this object type has.
     * @returns number of signals
     */
    getNSignals(): number
    /**
     * Obtain the number of virtual functions that this object type has.
     * @returns number of virtual functions
     */
    getNVfuncs(): number
    /**
     * Obtain the parent of the object type.
     * @returns The `GIObjectInfo`. Free the struct by   calling [method@GIRepository.BaseInfo.unref] when done.
     */
    getParent(): ObjectInfo | null
    /**
     * Obtain an object type property at index `n`.
     * @param n index of property to get
     * @returns The [class@GIRepository.PropertyInfo]. Free the   struct by calling [method@GIRepository.BaseInfo.unref] when done.
     */
    getProperty(n: number): PropertyInfo
    /**
     * Obtain the symbol name of the function that should be called to ref this
     * object type.
     * 
     * It’s mainly used for fundamental types. The type signature for
     * the symbol is [type`GIRepository`.ObjectInfoRefFunction]. To fetch the
     * function pointer see
     * [method`GIRepository`.ObjectInfo.get_ref_function_pointer].
     * @returns the symbol, or `NULL` if the object type has no ref   function
     */
    getRefFunctionName(): string | null
    /**
     * Obtain the symbol name of the function that should be called to set a
     * [type`GObject`.Value], given an object instance pointer of this object type.
     * 
     * It’s mainly used for fundamental types. The type signature for the symbol
     * is [type`GIRepository`.ObjectInfoSetValueFunction]. To fetch the function
     * pointer see [method`GIRepository`.ObjectInfo.get_set_value_function_pointer].
     * @returns the symbol, or `NULL` if the object type has no   set-value function
     */
    getSetValueFunctionName(): string | null
    /**
     * Obtain an object type signal at index `n`.
     * @param n index of signal to get
     * @returns The [class@GIRepository.SignalInfo]. Free the   struct by calling [method@GIRepository.BaseInfo.unref] when done.
     */
    getSignal(n: number): SignalInfo
    /**
     * Obtain the name of the function which, when called, will return the
     * [type`GObject`.Type] for this object type.
     * @returns the type init function name
     */
    getTypeInitFunctionName(): string

    // Overloads of getTypeInitFunctionName

    /**
     * Obtain the type init function for `info`.
     * 
     * The type init function is the function which will register the
     * [type`GObject`.Type] within the GObject type system. Usually this is not
     * called by language bindings or applications — use
     * [method`GIRepository`.RegisteredTypeInfo.get_g_type] directly instead.
     * @returns the symbol name of the type init function, suitable for   passing into [method@GModule.Module.symbol], or `NULL` if unknown
     */
    getTypeInitFunctionName(): string | null
    /**
     * Obtain the name of the object’s class/type.
     * @returns name of the object’s type
     */
    getTypeName(): string

    // Overloads of getTypeName

    /**
     * Obtain the type name of the struct within the GObject type system.
     * 
     * This type can be passed to [func`GObject`.type_name] to get a
     * [type`GObject`.Type].
     * @returns the type name, or `NULL` if unknown
     */
    getTypeName(): string | null
    /**
     * Obtain the symbol name of the function that should be called to unref this
     * object type.
     * 
     * It’s mainly used for fundamental types. The type signature for the symbol is
     * [type`GIRepository`.ObjectInfoUnrefFunction]. To fetch the function pointer
     * see [method`GIRepository`.ObjectInfo.get_unref_function_pointer].
     * @returns the symbol, or `NULL` if the object type has no unref   function
     */
    getUnrefFunctionName(): string | null
    /**
     * Obtain an object type virtual function at index `n`.
     * @param n index of virtual function to get
     * @returns The [class@GIRepository.VFuncInfo]. Free the struct   by calling [method@GIRepository.BaseInfo.unref] when done.
     */
    getVfunc(n: number): VFuncInfo
}

/**
 * `GIObjectInfo` represents a classed type.
 * 
 * Classed types in [type`GObject`.Type] inherit from
 * [type`GObject`.TypeInstance]; the most common type is [class`GObject`.Object].
 * 
 * A `GIObjectInfo` doesn’t represent a specific instance of a classed type,
 * instead this represent the object type (i.e. the class).
 * 
 * A `GIObjectInfo` has methods, fields, properties, signals, interfaces,
 * constants and virtual functions.
 * @class 
 */
class ObjectInfo extends RegisteredTypeInfo {

    // Own properties of GIRepository-3.0.GIRepository.ObjectInfo

    static name: string
}

interface PropertyInfo {

    // Owm methods of GIRepository-3.0.GIRepository.PropertyInfo

    /**
     * Obtain the flags for this property info.
     * 
     * See [type`GObject`.ParamFlags] for more information about possible flag
     * values.
     * @returns the flags
     */
    getFlags(): GObject.ParamFlags
    /**
     * Obtains the getter function associated with this `GIPropertyInfo`.
     * 
     * The setter is only available for `G_PARAM_READABLE` properties.
     * @returns The function info, or `NULL` if not set.   Free it with [method@GIRepository.BaseInfo.unref] when done.
     */
    getGetter(): FunctionInfo | null
    /**
     * Obtain the ownership transfer for this property.
     * 
     * See [type`GIRepository`.Transfer] for more information about transfer values.
     * @returns the transfer
     */
    getOwnershipTransfer(): Transfer
    /**
     * Obtains the setter function associated with this `GIPropertyInfo`.
     * 
     * The setter is only available for `G_PARAM_WRITABLE` properties that
     * are also not `G_PARAM_CONSTRUCT_ONLY`.
     * @returns The function info, or `NULL` if not set.   Free it with [method@GIRepository.BaseInfo.unref] when done.
     */
    getSetter(): FunctionInfo | null
    /**
     * Obtain the type information for the property `info`.
     * @returns The [class@GIRepository.TypeInfo]. Free it with   [method@GIRepository.BaseInfo.unref] when done.
     */
    getTypeInfo(): TypeInfo
}

/**
 * `GIPropertyInfo` represents a property in a [class`GObject`.Object].
 * 
 * A property belongs to either a [class`GIRepository`.ObjectInfo] or a
 * [class`GIRepository`.InterfaceInfo].
 * @class 
 */
class PropertyInfo extends BaseInfo {

    // Own properties of GIRepository-3.0.GIRepository.PropertyInfo

    static name: string
}

interface RegisteredTypeInfo {

    // Owm methods of GIRepository-3.0.GIRepository.RegisteredTypeInfo

    /**
     * Obtain the [type`GObject`.Type] for this registered type.
     * 
     * If there is no type information associated with `info,` or the shared library
     * which provides the `type_init` function for `info` cannot be called, then
     * `G_TYPE_NONE` is returned.
     * @returns the [type@GObject.Type], or `G_TYPE_NONE` if unknown
     */
    getGType(): GObject.GType
    /**
     * Obtain the type init function for `info`.
     * 
     * The type init function is the function which will register the
     * [type`GObject`.Type] within the GObject type system. Usually this is not
     * called by language bindings or applications — use
     * [method`GIRepository`.RegisteredTypeInfo.get_g_type] directly instead.
     * @returns the symbol name of the type init function, suitable for   passing into [method@GModule.Module.symbol], or `NULL` if unknown
     */
    getTypeInitFunctionName(): string | null
    /**
     * Obtain the type name of the struct within the GObject type system.
     * 
     * This type can be passed to [func`GObject`.type_name] to get a
     * [type`GObject`.Type].
     * @returns the type name, or `NULL` if unknown
     */
    getTypeName(): string | null
    /**
     * Get whether the registered type is a boxed type.
     * 
     * A boxed type is a subtype of the fundamental `G_TYPE_BOXED` type.
     * It’s a type which has registered a [type`GObject`.Type], and which has
     * associated copy and free functions.
     * 
     * Most boxed types are `struct`s; some are `union`s; and it’s possible for a
     * boxed type to be neither, but that is currently unsupported by
     * libgirepository. It’s also possible for a `struct` or `union` to have
     * associated copy and/or free functions *without* being a boxed type, by virtue
     * of not having registered a [type`GObject`.Type].
     * 
     * This function will return false for [type`GObject`.Type]s which are not boxed,
     * such as classes or interfaces. It will also return false for the `struct`s
     * associated with a class or interface, which return true from
     * [method`GIRepository`.StructInfo.is_gtype_struct].
     * @returns true if @info is a boxed type
     */
    isBoxed(): boolean
}

/**
 * `GIRegisteredTypeInfo` represents an entity with a [type`GObject`.Type]
 * associated.
 * 
 * Could be either a [class`GIRepository`.EnumInfo],
 * [class`GIRepository`.InterfaceInfo], [class`GIRepository`.ObjectInfo],
 * [class`GIRepository`.StructInfo] or a [class`GIRepository`.UnionInfo].
 * 
 * A registered type info struct has a name and a type function.
 * 
 * To get the name call [method`GIRepository`.RegisteredTypeInfo.get_type_name].
 * Most users want to call [method`GIRepository`.RegisteredTypeInfo.get_g_type]
 * and don’t worry about the rest of the details.
 * 
 * If the registered type is a subtype of `G_TYPE_BOXED`,
 * [method`GIRepository`.RegisteredTypeInfo.is_boxed] will return true, and
 * [method`GIRepository`.RegisteredTypeInfo.get_type_name] is guaranteed to
 * return a non-`NULL` value. This is relevant for the
 * [class`GIRepository`.StructInfo] and [class`GIRepository`.UnionInfo]
 * subclasses.
 * @class 
 */
class RegisteredTypeInfo extends BaseInfo {

    // Own properties of GIRepository-3.0.GIRepository.RegisteredTypeInfo

    static name: string
}

module Repository {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Repository {

    // Own properties of GIRepository-3.0.GIRepository.Repository

    __gtype__: number

    // Owm methods of GIRepository-3.0.GIRepository.Repository

    /**
     * Obtain an unordered list of versions (either currently loaded or
     * available) for `namespace_` in this `repository`.
     * 
     * The list is guaranteed to be `NULL` terminated. The `NULL` terminator is not
     * counted in `n_versions_out`.
     * @param namespace GI namespace, e.g. `Gtk`
     * @returns the array of versions.
     */
    enumerateVersions(namespace: string): string[]
    /**
     * Searches for the enum type corresponding to the given [type`GLib`.Error]
     * domain.
     * 
     * Before calling this function for a particular namespace, you must call
     * [method`GIRepository`.Repository.require] to load the namespace, or otherwise
     * ensure the namespace has already been loaded.
     * @param domain a [type`GLib`.Error] domain
     * @returns [class@GIRepository.EnumInfo]   representing metadata about @domain’s enum type, or `NULL` if none found
     */
    findByErrorDomain(domain: GLib.Quark): EnumInfo | null
    /**
     * Searches all loaded namespaces for a particular [type`GObject`.Type].
     * 
     * Note that in order to locate the metadata, the namespace corresponding to
     * the type must first have been loaded.  There is currently no
     * mechanism for determining the namespace which corresponds to an
     * arbitrary [type`GObject`.Type] — thus, this function will operate most
     * reliably when you know the [type`GObject`.Type] is from a loaded namespace.
     * @param gtype [type`GObject`.Type] to search for
     * @returns [class@GIRepository.BaseInfo]   representing metadata about @type, or `NULL` if none found
     */
    findByGtype(gtype: GObject.GType): BaseInfo | null
    /**
     * Searches for a particular entry in a namespace.
     * 
     * Before calling this function for a particular namespace, you must call
     * [method`GIRepository`.Repository.require] to load the namespace, or otherwise
     * ensure the namespace has already been loaded.
     * @param namespace Namespace which will be searched
     * @param name Entry name to find
     * @returns [class@GIRepository.BaseInfo]   representing metadata about @name, or `NULL` if none found
     */
    findByName(namespace: string, name: string): BaseInfo | null
    /**
     * This function returns the ‘C prefix’, or the C level namespace
     * associated with the given introspection namespace.
     * 
     * Each C symbol starts with this prefix, as well each [type`GObject`.Type] in
     * the library.
     * 
     * Note: The namespace must have already been loaded using a function
     * such as [method`GIRepository`.Repository.require] before calling this
     * function.
     * @param namespace Namespace to inspect
     * @returns C namespace prefix, or `NULL` if none associated
     */
    getCPrefix(namespace: string): string | null
    /**
     * Retrieves all (transitive) versioned dependencies for
     * `namespace_`.
     * 
     * The returned strings are of the form `namespace-version`.
     * 
     * Note: `namespace_` must have already been loaded using a function
     * such as [method`GIRepository`.Repository.require] before calling this
     * function.
     * 
     * To get only the immediate dependencies for `namespace_,` use
     * [method`GIRepository`.Repository.get_immediate_dependencies].
     * 
     * The list is guaranteed to be `NULL` terminated. The `NULL` terminator is not
     * counted in `n_dependencies_out`.
     * @param namespace Namespace of interest
     * @returns String array of   all versioned dependencies
     */
    getDependencies(namespace: string): string[]
    /**
     * Return an array of the immediate versioned dependencies for `namespace_`.
     * Returned strings are of the form `namespace-version`.
     * 
     * Note: `namespace_` must have already been loaded using a function
     * such as [method`GIRepository`.Repository.require] before calling this
     * function.
     * 
     * To get the transitive closure of dependencies for `namespace_,` use
     * [method`GIRepository`.Repository.get_dependencies].
     * 
     * The list is guaranteed to be `NULL` terminated. The `NULL` terminator is not
     * counted in `n_dependencies_out`.
     * @param namespace Namespace of interest
     * @returns String array of   immediate versioned dependencies
     */
    getImmediateDependencies(namespace: string): string[]
    /**
     * This function returns a particular metadata entry in the
     * given namespace `namespace_`.
     * 
     * The namespace must have already been loaded before calling this function.
     * See [method`GIRepository`.Repository.get_n_infos] to find the maximum number
     * of entries. It is an error to pass an invalid `idx` to this function.
     * @param namespace Namespace to inspect
     * @param idx 0-based offset into namespace metadata for entry
     * @returns [class@GIRepository.BaseInfo]   containing metadata
     */
    getInfo(namespace: string, idx: number): BaseInfo
    /**
     * Returns the current search path [class`GIRepository`.Repository] will use when
     * loading shared libraries referenced by imported namespaces.
     * 
     * The list is internal to [class`GIRepository`.Repository] and should not be
     * freed, nor should its string elements.
     * 
     * The list is guaranteed to be `NULL` terminated. The `NULL` terminator is not
     * counted in `n_paths_out`.
     * @returns list of search paths, most   important first
     */
    getLibraryPath(): string[]
    /**
     * Return the list of currently loaded namespaces.
     * 
     * The list is guaranteed to be `NULL` terminated. The `NULL` terminator is not
     * counted in `n_namespaces_out`.
     * @returns list of namespaces
     */
    getLoadedNamespaces(): string[]
    /**
     * This function returns the number of metadata entries in
     * given namespace `namespace_`.
     * 
     * The namespace must have already been loaded before calling this function.
     * @param namespace Namespace to inspect
     * @returns number of metadata entries
     */
    getNInfos(namespace: string): number
    /**
     * Look up the implemented interfaces for `gtype`.
     * 
     * This function cannot fail per se; but for a totally ‘unknown’
     * [type`GObject`.Type], it may return 0 implemented interfaces.
     * 
     * The semantics of this function are designed for a dynamic binding,
     * where in certain cases (such as a function which returns an
     * interface which may have ‘hidden’ implementation classes), not all
     * data may be statically known, and will have to be determined from
     * the [type`GObject`.Type] of the object.  An example is
     * [func`Gio`.File.new_for_path] returning a concrete class of
     * `GLocalFile`, which is a [type`GObject`.Type] we see at runtime, but
     * not statically.
     * @param gtype a [type`GObject`.Type] whose fundamental type is `G_TYPE_OBJECT`
     */
    getObjectGtypeInterfaces(gtype: GObject.GType): /* interfacesOut */ InterfaceInfo[]
    /**
     * Returns the current search path [class`GIRepository`.Repository] will use when
     * loading typelib files.
     * 
     * The list is internal to [class`GIRepository`.Repository] and should not be
     * freed, nor should its string elements.
     * 
     * The list is guaranteed to be `NULL` terminated. The `NULL` terminator is not
     * counted in `n_paths_out`.
     * @returns list of search paths, most   important first
     */
    getSearchPath(): string[]
    /**
     * This function returns an array of paths to the
     * shared C libraries associated with the given namespace `namespace_`.
     * 
     * There may be no shared library path associated, in which case this
     * function will return `NULL`.
     * 
     * Note: The namespace must have already been loaded using a function
     * such as [method`GIRepository`.Repository.require] before calling this
     * function.
     * 
     * The list is internal to [class`GIRepository`.Repository] and should not be
     * freed, nor should its string elements.
     * 
     * The list is guaranteed to be `NULL` terminated. The `NULL` terminator is not
     * counted in `out_n_elements`.
     * @param namespace Namespace to inspect
     * @returns Array of   paths to shared libraries, or `NULL` if none are associated
     */
    getSharedLibraries(namespace: string): string[] | null
    /**
     * If namespace `namespace_` is loaded, return the full path to the
     * .typelib file it was loaded from.
     * 
     * If the typelib for namespace `namespace_` was included in a shared library,
     * return the special string `<builtin>`.
     * @param namespace GI namespace to use, e.g. `Gtk`
     * @returns Filesystem path (or `<builtin>`) if   successful, `NULL` if namespace is not loaded
     */
    getTypelibPath(namespace: string): string | null
    /**
     * This function returns the loaded version associated with the given
     * namespace `namespace_`.
     * 
     * Note: The namespace must have already been loaded using a function
     * such as [method`GIRepository`.Repository.require] before calling this
     * function.
     * @param namespace Namespace to inspect
     * @returns Loaded version
     */
    getVersion(namespace: string): string
    /**
     * Check whether a particular namespace (and optionally, a specific
     * version thereof) is currently loaded.
     * 
     * This function is likely to only be useful in unusual circumstances; in order
     * to act upon metadata in the namespace, you should call
     * [method`GIRepository`.Repository.require] instead which will ensure the
     * namespace is loaded, and return as quickly as this function will if it has
     * already been loaded.
     * @param namespace Namespace of interest
     * @param version Required version, may be `NULL` for latest
     * @returns `TRUE` if namespace-version is loaded, `FALSE` otherwise
     */
    isRegistered(namespace: string, version: string | null): boolean
    /**
     * Load the given `typelib` into the repository.
     * @param typelib the typelib to load
     * @param flags flags affecting the loading operation
     * @returns namespace of the loaded typelib
     */
    loadTypelib(typelib: Typelib, flags: RepositoryLoadFlags): string
    /**
     * Prepends `directory` to the search path that is used to
     * search shared libraries referenced by imported namespaces.
     * 
     * Multiple calls to this function all contribute to the final
     * list of paths.
     * 
     * The list of paths is unique to `repository`. When a typelib is loaded by the
     * repository, the list of paths from the `repository` at that instant is used
     * by the typelib for loading its modules.
     * 
     * If the library is not found in the directories configured
     * in this way, loading will fall back to the system library
     * path (i.e. `LD_LIBRARY_PATH` and `DT_RPATH` in ELF systems).
     * See the documentation of your dynamic linker for full details.
     * @param directory a single directory to scan for shared libraries
     */
    prependLibraryPath(directory: string): void
    /**
     * Prepends `directory` to the typelib search path.
     * 
     * See also: gi_repository_get_search_path().
     * @param directory directory name to prepend to the typelib   search path
     */
    prependSearchPath(directory: string): void
    /**
     * Force the namespace `namespace_` to be loaded if it isn’t already.
     * 
     * If `namespace_` is not loaded, this function will search for a
     * `.typelib` file using the repository search path.  In addition, a
     * version `version` of namespace may be specified.  If `version` is
     * not specified, the latest will be used.
     * @param namespace GI namespace to use, e.g. `Gtk`
     * @param version Version of namespace, may be `NULL` for latest
     * @param flags Set of [flags`GIRepository`.RepositoryLoadFlags], may be 0
     * @returns a pointer to the [type@GIRepository.Typelib] if   successful, `NULL` otherwise
     */
    require(namespace: string, version: string | null, flags: RepositoryLoadFlags): Typelib
    /**
     * Force the namespace `namespace_` to be loaded if it isn’t already.
     * 
     * If `namespace_` is not loaded, this function will search for a
     * `.typelib` file within the private directory only. In addition, a
     * version `version` of namespace should be specified.  If `version` is
     * not specified, the latest will be used.
     * @param typelibDir Private directory where to find the requested   typelib
     * @param namespace GI namespace to use, e.g. `Gtk`
     * @param version Version of namespace, may be `NULL` for latest
     * @param flags Set of [flags`GIRepository`.RepositoryLoadFlags], may be 0
     * @returns a pointer to the [type@GIRepository.Typelib] if   successful, `NULL` otherwise
     */
    requirePrivate(typelibDir: string, namespace: string, version: string | null, flags: RepositoryLoadFlags): Typelib

    // Class property signals of GIRepository-3.0.GIRepository.Repository

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
 * `GIRepository` is used to manage repositories of namespaces. Namespaces
 * are represented on disk by type libraries (`.typelib` files).
 * 
 * The individual pieces of API within a type library are represented by
 * subclasses of [class`GIRepository`.BaseInfo]. These can be found using
 * methods like [method`GIRepository`.Repository.find_by_name] or
 * [method`GIRepository`.Repository.get_info].
 * 
 * You are responsible for ensuring that the lifetime of the
 * [class`GIRepository`.Repository] exceeds that of the lifetime of any of its
 * [class`GIRepository`.BaseInfo]s. This cannot be guaranteed by using internal
 * references within libgirepository as that would affect performance.
 * 
 * ### Discovery of type libraries
 * 
 * `GIRepository` will typically look for a `girepository-1.0` directory
 * under the library directory used when compiling gobject-introspection. On a
 * standard Linux system this will end up being `/usr/lib/girepository-1.0`.
 * 
 * It is possible to control the search paths programmatically, using
 * [method`GIRepository`.Repository.prepend_search_path]. It is also possible to
 * modify the search paths by using the `GI_TYPELIB_PATH` environment variable.
 * The environment variable takes precedence over the default search path
 * and the [method`GIRepository`.Repository.prepend_search_path] calls.
 * @class 
 */
class Repository extends GObject.Object {

    // Own properties of GIRepository-3.0.GIRepository.Repository

    static name: string

    // Constructors of GIRepository-3.0.GIRepository.Repository

    constructor(config?: Repository.ConstructorProperties) 
    /**
     * Create a new [class`GIRepository`.Repository].
     * @constructor 
     * @returns a new [class@GIRepository.Repository]
     */
    constructor() 
    /**
     * Create a new [class`GIRepository`.Repository].
     * @constructor 
     * @returns a new [class@GIRepository.Repository]
     */
    static new(): Repository
    _init(config?: Repository.ConstructorProperties): void
    /**
     * Dump the introspection data from the types specified in `input_filename` to
     * `output_filename`.
     * 
     * The input file should be a
     * UTF-8 Unix-line-ending text file, with each line containing either
     * `get-type:` followed by the name of a [type`GObject`.Type] `_get_type`
     * function, or `error-quark:` followed by the name of an error quark function.
     * No extra whitespace is allowed.
     * 
     * This function will overwrite the contents of the output file.
     * @param inputFilename Input filename (for example `input.txt`)
     * @param outputFilename Output filename (for example `output.xml`)
     * @returns true on success, false on error
     */
    static dump(inputFilename: string, outputFilename: string): boolean
    static errorQuark(): GLib.Quark
    /**
     * Obtain the option group for girepository.
     * 
     * It’s used by the dumper and for programs that want to provide introspection
     * information
     * @returns the option group
     */
    static getOptionGroup(): GLib.OptionGroup
}

interface SignalInfo {

    // Owm methods of GIRepository-3.0.GIRepository.SignalInfo

    /**
     * Obtain the class closure for this signal if one is set.
     * 
     * The class closure is a virtual function on the type that the signal belongs
     * to. If the signal lacks a closure, `NULL` will be returned.
     * @returns the class closure, or `NULL` if none is   set
     */
    getClassClosure(): VFuncInfo | null
    /**
     * Obtain the flags for this signal info.
     * 
     * See [flags`GObject`.SignalFlags] for more information about possible flag
     * values.
     * @returns the flags
     */
    getFlags(): GObject.SignalFlags
    /**
     * Obtain if the returning `TRUE` in the signal handler will stop the emission
     * of the signal.
     * @returns `TRUE` if returning `TRUE` stops the signal emission
     */
    trueStopsEmit(): boolean
}

/**
 * `GISignalInfo` represents a signal.
 * 
 * It’s a sub-struct of [class`GIRepository`.CallableInfo] and contains a set of
 * flags and a class closure.
 * 
 * See [class`GIRepository`.CallableInfo] for information on how to retrieve
 * arguments and other metadata from the signal.
 * @class 
 */
class SignalInfo extends CallableInfo {

    // Own properties of GIRepository-3.0.GIRepository.SignalInfo

    static name: string
}

interface StructInfo {

    // Owm methods of GIRepository-3.0.GIRepository.StructInfo

    /**
     * Obtain the type information for field named `name`.
     * @param name a field name
     * @returns The [class@GIRepository.FieldInfo], or   `NULL` if not found. Free it with [method@GIRepository.BaseInfo.unref] when   done.
     */
    findField(name: string): FieldInfo | null
    /**
     * Obtain the type information for method named `name`.
     * @param name a method name
     * @returns The [class@GIRepository.FunctionInfo],   or `NULL` if none was found. Free it with   [method@GIRepository.BaseInfo.unref] when done.
     */
    findMethod(name: string): FunctionInfo | null
    /**
     * Obtain the required alignment of the structure.
     * @returns required alignment, in bytes
     */
    getAlignment(): number
    /**
     * Retrieves the name of the copy function for `info,` if any is set.
     * @returns the name of the copy function, or `NULL`   if the structure has no copy function
     */
    getCopyFunctionName(): string | null
    /**
     * Obtain the type information for field with specified index.
     * @param n a field index
     * @returns The [class@GIRepository.FieldInfo]. Free it with   [method@GIRepository.BaseInfo.unref] when done.
     */
    getField(n: number): FieldInfo
    /**
     * Retrieves the name of the free function for `info,` if any is set.
     * @returns the name of the free function, or `NULL`   if the structure has no free function
     */
    getFreeFunctionName(): string | null
    /**
     * Obtain the type information for method with specified index.
     * @param n a method index
     * @returns The [class@GIRepository.FunctionInfo]. Free it with   [method@GIRepository.BaseInfo.unref] when done.
     */
    getMethod(n: number): FunctionInfo
    /**
     * Obtain the number of fields this structure has.
     * @returns number of fields
     */
    getNFields(): number
    /**
     * Obtain the number of methods this structure has.
     * @returns number of methods
     */
    getNMethods(): number
    /**
     * Obtain the total size of the structure.
     * @returns size of the structure, in bytes
     */
    getSize(): number
    /**
     * Gets whether the structure is foreign, i.e. if it’s expected to be overridden
     * by a native language binding instead of relying of introspected bindings.
     * @returns `TRUE` if the structure is foreign
     */
    isForeign(): boolean
    /**
     * Return true if this structure represents the ‘class structure’ for some
     * [class`GObject`.Object] or `GInterface`.
     * 
     * This function is mainly useful to hide this kind of structure from generated
     * public APIs.
     * @returns `TRUE` if this is a class struct, `FALSE` otherwise
     */
    isGtypeStruct(): boolean
}

/**
 * `GIStructInfo` represents a generic C structure type.
 * 
 * A structure has methods and fields.
 * @class 
 */
class StructInfo extends RegisteredTypeInfo {

    // Own properties of GIRepository-3.0.GIRepository.StructInfo

    static name: string
}

interface TypeInfo {

    // Owm methods of GIRepository-3.0.GIRepository.TypeInfo

    /**
     * Convert a data pointer from a GLib data structure to a
     * [type`GIRepository`.Argument].
     * 
     * GLib data structures, such as [type`GLib`.List], [type`GLib`.SList], and
     * [type`GLib`.HashTable], all store data pointers.
     * 
     * In the case where the list or hash table is storing single types rather than
     * structs, these data pointers may have values stuffed into them via macros
     * such as `GPOINTER_TO_INT`.
     * 
     * Use this function to ensure that all values are correctly extracted from
     * stuffed pointers, regardless of the machine’s architecture or endianness.
     * 
     * This function fills in the appropriate field of `arg` with the value extracted
     * from `hash_pointer,` depending on the storage type of `info`.
     * @param hashPointer a pointer, such as a [struct`GLib`.HashTable] data pointer
     */
    argumentFromHashPointer(hashPointer: any | null): /* arg */ Argument
    /**
     * Obtain the fixed array size of the type, in number of elements (not bytes).
     * 
     * The type tag must be a `GI_TYPE_TAG_ARRAY` with a fixed size, or `FALSE` will
     * be returned.
     * @returns `TRUE` if the type is an array and has a fixed size
     */
    getArrayFixedSize(): [ /* returnType */ boolean, /* outSize */ number ]
    /**
     * Obtain the position of the argument which gives the array length of the type.
     * 
     * The type tag must be a `GI_TYPE_TAG_ARRAY` with a length argument, or `FALSE`
     * will be returned.
     * @returns `TRUE` if the type is an array and has a length argument
     */
    getArrayLengthIndex(): [ /* returnType */ boolean, /* outLengthIndex */ number ]
    /**
     * Obtain the array type for this type.
     * 
     * See [enum`GIRepository`.ArrayType] for a list of possible values.
     * 
     * It is an error to call this on an `info` which is not an array type. Use
     * [method`GIRepository`.TypeInfo.get_tag] to check.
     * @returns the array type
     */
    getArrayType(): ArrayType
    /**
     * For types which have `GI_TYPE_TAG_INTERFACE` such as [class`GObject`.Object]s
     * and boxed values, this function returns full information about the referenced
     * type.
     * 
     * You can then inspect the type of the returned [class`GIRepository`.BaseInfo]
     * to further query whether it is a concrete [class`GObject`.Object], an
     * interface, a structure, etc., using the type checking macros like
     * [func`GIRepository`.IS_OBJECT_INFO], or raw [type`GObject`.Type]s with
     * [func`GObject`.TYPE_FROM_INSTANCE].
     * @returns The [class@GIRepository.BaseInfo], or   `NULL`. Free it with gi_base_info_unref() when done.
     */
    getInterface(): BaseInfo | null
    /**
     * Obtain the parameter type `n,` or `NULL` if the type is not an array.
     * @param n index of the parameter
     * @returns the param type info, or `NULL` if the   type is not an array
     */
    getParamType(n: number): TypeInfo | null
    /**
     * Obtain the type tag corresponding to the underlying storage type in C for
     * the type.
     * 
     * See [type`GIRepository`.TypeTag] for a list of type tags.
     * @returns the type tag
     */
    getStorageType(): TypeTag
    /**
     * Obtain the type tag for the type.
     * 
     * See [type`GIRepository`.TypeTag] for a list of type tags.
     * @returns the type tag
     */
    getTag(): TypeTag
    /**
     * Convert a [type`GIRepository`.Argument] to data pointer for use in a GLib
     * data structure.
     * 
     * GLib data structures, such as [type`GLib`.List], [type`GLib`.SList], and
     * [type`GLib`.HashTable], all store data pointers.
     * 
     * In the case where the list or hash table is storing single types rather than
     * structs, these data pointers may have values stuffed into them via macros
     * such as `GPOINTER_TO_INT`.
     * 
     * Use this function to ensure that all values are correctly stuffed into
     * pointers, regardless of the machine’s architecture or endianness.
     * 
     * This function returns a pointer stuffed with the appropriate field of `arg,`
     * depending on the storage type of `info`.
     * @param arg a [struct`GIRepository`.Argument] with the value to stuff into a pointer
     * @returns A stuffed pointer, that can be stored in a [struct@GLib.HashTable],   for example
     */
    hashPointerFromArgument(arg: Argument): any | null
    /**
     * Obtain if the type is passed as a reference.
     * 
     * Note that the types of `GI_DIRECTION_OUT` and `GI_DIRECTION_INOUT` parameters
     * will only be pointers if the underlying type being transferred is a pointer
     * (i.e. only if the type of the C function’s formal parameter is a pointer to a
     * pointer).
     * @returns `TRUE` if it is a pointer
     */
    isPointer(): boolean
    /**
     * Obtain if the last element of the array is `NULL`.
     * 
     * The type tag must be a `GI_TYPE_TAG_ARRAY` or `FALSE` will be returned.
     * @returns `TRUE` if zero terminated
     */
    isZeroTerminated(): boolean
}

/**
 * `GITypeInfo` represents a type, including information about direction and
 * transfer.
 * 
 * You can retrieve a type info from an argument (see
 * [class`GIRepository`.ArgInfo]), a function’s return value (see
 * [class`GIRepository`.FunctionInfo]), a field (see
 * [class`GIRepository`.FieldInfo]), a property (see
 * [class`GIRepository`.PropertyInfo]), a constant (see
 * [class`GIRepository`.ConstantInfo]) or for a union discriminator (see
 * [class`GIRepository`.UnionInfo]).
 * 
 * A type can either be a of a basic type which is a standard C primitive
 * type or an interface type. For interface types you need to call
 * [method`GIRepository`.TypeInfo.get_interface] to get a reference to the base
 * info for that interface.
 * @class 
 */
class TypeInfo extends BaseInfo {

    // Own properties of GIRepository-3.0.GIRepository.TypeInfo

    static name: string
}

interface UnionInfo {

    // Owm methods of GIRepository-3.0.GIRepository.UnionInfo

    /**
     * Obtain the type information for the method named `name`.
     * @param name a method name
     * @returns The [type@GIRepository.FunctionInfo], or   `NULL` if none was found. Free it with [method@GIRepository.BaseInfo.unref]   when done.
     */
    findMethod(name: string): FunctionInfo | null
    /**
     * Obtain the required alignment of the union.
     * @returns required alignment, in bytes
     */
    getAlignment(): number
    /**
     * Retrieves the name of the copy function for `info,` if any is set.
     * @returns the name of the copy function, or `NULL`   if none is set
     */
    getCopyFunctionName(): string | null
    /**
     * Obtain the discriminator value assigned for n-th union field, i.e. the n-th
     * union field is the active one if the discriminator contains this
     * constant.
     * 
     * If the union is not discriminated, `NULL` is returned.
     * @param n a union field index
     * @returns The [type@GIRepository.ConstantInfo], or   `NULL` if the union is not discriminated. Free it with   [method@GIRepository.BaseInfo.unref] when done.
     */
    getDiscriminator(n: number): ConstantInfo | null
    /**
     * Obtain the offset of the discriminator field within the structure.
     * 
     * The union must be discriminated, or `FALSE` will be returned.
     * @returns `TRUE` if the union is discriminated
     */
    getDiscriminatorOffset(): [ /* returnType */ boolean, /* outOffset */ number ]
    /**
     * Obtain the type information of the union discriminator.
     * @returns the [type@GIRepository.TypeInfo], or   `NULL` if the union is not discriminated. Free it with   [method@GIRepository.BaseInfo.unref] when done.
     */
    getDiscriminatorType(): TypeInfo | null
    /**
     * Obtain the type information for the field with the specified index.
     * @param n a field index
     * @returns the [type@GIRepository.FieldInfo], free it with   [method@GIRepository.BaseInfo.unref] when done.
     */
    getField(n: number): FieldInfo
    /**
     * Retrieves the name of the free function for `info,` if any is set.
     * @returns the name of the free function, or `NULL`   if none is set
     */
    getFreeFunctionName(): string | null
    /**
     * Obtain the type information for the method with the specified index.
     * @param n a method index
     * @returns the [type@GIRepository.FunctionInfo], free it   with [method@GIRepository.BaseInfo.unref] when done.
     */
    getMethod(n: number): FunctionInfo
    /**
     * Obtain the number of fields this union has.
     * @returns number of fields
     */
    getNFields(): number
    /**
     * Obtain the number of methods this union has.
     * @returns number of methods
     */
    getNMethods(): number
    /**
     * Obtain the total size of the union.
     * @returns size of the union, in bytes
     */
    getSize(): number
    /**
     * Return `TRUE` if this union contains a discriminator field.
     * @returns `TRUE` if this is a discriminated union, `FALSE` otherwise
     */
    isDiscriminated(): boolean
}

/**
 * `GIUnionInfo` represents a union type.
 * 
 * A union has methods and fields.  Unions can optionally have a
 * discriminator, which is a field deciding what type of real union
 * fields is valid for specified instance.
 * @class 
 */
class UnionInfo extends RegisteredTypeInfo {

    // Own properties of GIRepository-3.0.GIRepository.UnionInfo

    static name: string
}

interface UnresolvedInfo {
}

/**
 * `GIUnresolvedInfo` represents an unresolved symbol.
 * @class 
 */
class UnresolvedInfo extends BaseInfo {

    // Own properties of GIRepository-3.0.GIRepository.UnresolvedInfo

    static name: string
}

interface VFuncInfo {

    // Owm methods of GIRepository-3.0.GIRepository.VFuncInfo

    /**
     * Looks up where the implementation for `info` is inside the type struct of
     * `implementor_gtype`.
     * @param implementorGtype [type`GObject`.Type] implementing this virtual function
     * @returns address to a function
     */
    getAddress(implementorGtype: GObject.GType): any | null
    /**
     * Obtain the flags for this virtual function info.
     * 
     * See [flags`GIRepository`.VFuncInfoFlags] for more information about possible
     * flag values.
     * @returns the flags
     */
    getFlags(): VFuncInfoFlags
    /**
     * If this virtual function has an associated invoker method, this
     * method will return it.  An invoker method is a C entry point.
     * 
     * Not all virtuals will have invokers.
     * @returns The [type@GIRepository.FunctionInfo] or   `NULL` if none is set. Free it with [method@GIRepository.BaseInfo.unref]   when done.
     */
    getInvoker(): FunctionInfo | null
    /**
     * Obtain the offset of the function pointer in the class struct.
     * 
     * The value `0xFFFF` indicates that the struct offset is unknown.
     * @returns the struct offset or `0xFFFF` if it’s unknown
     */
    getOffset(): number
    /**
     * Obtain the signal for the virtual function if one is set.
     * 
     * The signal comes from the object or interface to which
     * this virtual function belongs.
     * @returns the signal, or `NULL` if none is set
     */
    getSignal(): SignalInfo | null
}

/**
 * `GIVFuncInfo` represents a virtual function.
 * 
 * A virtual function is a callable object that belongs to either a
 * [type`GIRepository`.ObjectInfo] or a [type`GIRepository`.InterfaceInfo].
 * @class 
 */
class VFuncInfo extends CallableInfo {

    // Own properties of GIRepository-3.0.GIRepository.VFuncInfo

    static name: string
}

interface ValueInfo {

    // Owm methods of GIRepository-3.0.GIRepository.ValueInfo

    /**
     * Obtain the enumeration value of the `GIValueInfo`.
     * @returns the enumeration value. This will always be representable   as a 32-bit signed or unsigned value. The use of `int64_t` as the   return type is to allow both.
     */
    getValue(): number
}

/**
 * A `GIValueInfo` represents a value in an enumeration.
 * 
 * The `GIValueInfo` is fetched by calling
 * [method`GIRepository`.EnumInfo.get_value] on a [class`GIRepository`.EnumInfo].
 * @class 
 */
class ValueInfo extends BaseInfo {

    // Own properties of GIRepository-3.0.GIRepository.ValueInfo

    static name: string
}

interface AttributeIter {
}

/**
 * An opaque structure used to iterate over attributes
 * in a [class`GIRepository`.BaseInfo] struct.
 * @record 
 */
class AttributeIter {

    // Own properties of GIRepository-3.0.GIRepository.AttributeIter

    static name: string
}

interface BaseInfoClass {
}

abstract class BaseInfoClass {

    // Own properties of GIRepository-3.0.GIRepository.BaseInfoClass

    static name: string
}

interface BaseInfoStack {
}

class BaseInfoStack {

    // Own properties of GIRepository-3.0.GIRepository.BaseInfoStack

    static name: string
}

interface RepositoryClass {

    // Own fields of GIRepository-3.0.GIRepository.RepositoryClass

    parentClass: GObject.ObjectClass
}

abstract class RepositoryClass {

    // Own properties of GIRepository-3.0.GIRepository.RepositoryClass

    static name: string
}

interface Typelib {

    // Owm methods of GIRepository-3.0.GIRepository.Typelib

    /**
     * Get the name of the namespace represented by `typelib`.
     * @returns name of the namespace represented by @typelib
     */
    getNamespace(): string
    /**
     * Increment the reference count of a [type`GIRepository`.Typelib].
     * @returns the same @typelib pointer
     */
    ref(): Typelib
    /**
     * Loads a symbol from a `GITypelib`.
     * @param symbolName name of symbol to be loaded
     * @returns `TRUE` on success
     */
    symbol(symbolName: string): [ /* returnType */ boolean, /* symbol */ any | null ]
    /**
     * Decrement the reference count of a [type`GIRepository`.Typelib].
     * 
     * Once the reference count reaches zero, the typelib is freed.
     */
    unref(): void
}

/**
 * `GITypelib` represents a loaded `.typelib` file, which contains a description
 * of a single module’s API.
 * @record 
 */
class Typelib {

    // Own properties of GIRepository-3.0.GIRepository.Typelib

    static name: string

    // Constructors of GIRepository-3.0.GIRepository.Typelib

    /**
     * Creates a new [type`GIRepository`.Typelib] from a [type`GLib`.Bytes].
     * 
     * The [type`GLib`.Bytes] can point to a memory location or a mapped file, and
     * the typelib will hold a reference to it until the repository is destroyed.
     * @constructor 
     * @param bytes memory chunk containing the typelib
     * @returns the new [type@GIRepository.Typelib]
     */
    static newFromBytes(bytes: any): Typelib
}

interface Argument {

    // Own fields of GIRepository-3.0.GIRepository.Argument

    /**
     * boolean value
     * @field 
     */
    vBoolean: boolean
    /**
     * 8-bit signed integer value
     * @field 
     */
    vInt8: number
    /**
     * 8-bit unsigned integer value
     * @field 
     */
    vUint8: number
    /**
     * 16-bit signed integer value
     * @field 
     */
    vInt16: number
    /**
     * 16-bit unsigned integer value
     * @field 
     */
    vUint16: number
    /**
     * 32-bit signed integer value
     * @field 
     */
    vInt32: number
    /**
     * 32-bit unsigned integer value
     * @field 
     */
    vUint32: number
    /**
     * 64-bit signed integer value
     * @field 
     */
    vInt64: number
    /**
     * 64-bit unsigned integer value
     * @field 
     */
    vUint64: number
    /**
     * single float value
     * @field 
     */
    vFloat: number
    /**
     * double float value
     * @field 
     */
    vDouble: number
    /**
     * signed short integer value
     * @field 
     */
    vShort: number
    /**
     * unsigned short integer value
     * @field 
     */
    vUshort: number
    /**
     * signed integer value
     * @field 
     */
    vInt: number
    /**
     * unsigned integer value
     * @field 
     */
    vUint: number
    /**
     * signed long integer value
     * @field 
     */
    vLong: number
    /**
     * unsigned long integer value
     * @field 
     */
    vUlong: number
    /**
     * sized `size_t` value
     * @field 
     */
    vSsize: number
    /**
     * unsigned `size_t` value
     * @field 
     */
    vSize: number
    /**
     * nul-terminated string value
     * @field 
     */
    vString: string | null
    /**
     * arbitrary pointer value
     * @field 
     */
    vPointer: any
}

/**
 * Stores an argument of varying type.
 * @union 
 */
class Argument {

    // Own properties of GIRepository-3.0.GIRepository.Argument

    static name: string
}

}

export default GIRepository;
// END