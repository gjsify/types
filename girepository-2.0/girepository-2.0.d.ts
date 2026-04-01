/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace GIRepository {
    /**
     * GIRepository-2.0
     */

    /**
     * The type of array in a {@link GIRepository.TypeInfo}.
     * @gir-type Enum
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
         * a {@link GLib.PtrArray} array
         */
        PTR_ARRAY,
        /**
         * a {@link GLib.ByteArray} array
         */
        BYTE_ARRAY,
    }

    /**
     * The direction of a {@link GIRepository.ArgInfo}.
     * @gir-type Enum
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
     * @gir-type Enum
     */
    enum InfoType {
        /**
         * invalid type
         */
        INVALID,
        /**
         * function, see {@link GIRepository.FunctionInfo}
         */
        FUNCTION,
        /**
         * callback, see {@link GIRepository.FunctionInfo}
         */
        CALLBACK,
        /**
         * struct, see {@link GIRepository.StructInfo}
         */
        STRUCT,
        /**
         * boxed, see {@link GIRepository.StructInfo} or {@link GIRepository.UnionInfo}
         */
        BOXED,
        /**
         * enum, see {@link GIRepository.EnumInfo}
         */
        ENUM,
        /**
         * flags, see {@link GIRepository.EnumInfo}
         */
        FLAGS,
        /**
         * object, see {@link GIRepository.ObjectInfo}
         */
        OBJECT,
        /**
         * interface, see {@link GIRepository.InterfaceInfo}
         */
        INTERFACE,
        /**
         * contant, see {@link GIRepository.ConstantInfo}
         */
        CONSTANT,
        /**
         * deleted, used to be GI_INFO_TYPE_ERROR_DOMAIN.
         */
        INVALID_0,
        /**
         * union, see {@link GIRepository.UnionInfo}
         */
        UNION,
        /**
         * enum value, see {@link GIRepository.ValueInfo}
         */
        VALUE,
        /**
         * signal, see {@link GIRepository.SignalInfo}
         */
        SIGNAL,
        /**
         * virtual function, see {@link GIRepository.VFuncInfo}
         */
        VFUNC,
        /**
         * GObject property, see {@link GIRepository.PropertyInfo}
         */
        PROPERTY,
        /**
         * struct or union field, see {@link GIRepository.FieldInfo}
         */
        FIELD,
        /**
         * argument of a function or callback, see {@link GIRepository.ArgInfo}
         */
        ARG,
        /**
         * type information, see {@link GIRepository.TypeInfo}
         */
        TYPE,
        /**
         * unresolved type, a type which is not present in
         *   the typelib, or any of its dependencies.
         */
        UNRESOLVED,
    }

    /**
     * An error code used with #G_IREPOSITORY_ERROR in a {@link GLib.Error} returned
     * from a {@link GIRepository.Repository} routine.
     * @gir-type Enum
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
     * Scope type of a {@link GIRepository.ArgInfo} representing callback, determines how the
     * callback is invoked and is used to decided when the invoke structs
     * can be freed.
     * @gir-type Enum
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
     * {@link GIRepository.Transfer} specifies who's responsible for freeing the resources after the
     * ownership transfer is complete. In case of a containing type such as a list,
     * an array or a hash table the container itself is specified differently from
     * the items within the container itself. Each container is freed differently,
     * check the documentation for the types themselves for information on how to
     * free them.
     * @gir-type Enum
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
     * The type tag of a {@link GIRepository.TypeInfo}.
     * @gir-type Enum
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
         * a {@link GObject.GType}
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
         * a {@link GLib.List}
         */
        GLIST,
        /**
         * a {@link GLib.SList}
         */
        GSLIST,
        /**
         * a {@link GLib.HashTable}
         */
        GHASH,
        /**
         * a {@link GLib.Error}
         */
        ERROR,
        /**
         * Unicode character
         */
        UNICHAR,
    }

    /**
     * An error occuring while invoking a function via
     * `g_function_info_invoke()`.
     * @gir-type Enum
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
     * The major version number of the girepository library.
     * @since 1.60
     */
    const MAJOR_VERSION: number;
    /**
     * The micro version number of the girepository library.
     * @since 1.60
     */
    const MICRO_VERSION: number;
    /**
     * The minor version number of the girepository library.
     * @since 1.60
     */
    const MINOR_VERSION: number;
    /**
     * TODO
     */
    const TYPE_TAG_N_TYPES: number;
    /**
     * Obtain the index of the user data argument. This is only valid
     * for arguments which are callbacks.
     * @param info a {@link GIRepository.ArgInfo}
     * @returns index of the user data argument or -1 if there is none
     */
    function arg_info_get_closure(info: ArgInfo): number;
    /**
     * Obtains the index of the {@link GLib.DestroyNotify} argument. This is only valid
     * for arguments which are callbacks.
     * @param info a {@link GIRepository.ArgInfo}
     * @returns index of the {@link GLib.DestroyNotify} argument or -1 if there is none
     */
    function arg_info_get_destroy(info: ArgInfo): number;
    /**
     * Obtain the direction of the argument. Check {@link GIRepository.Direction} for possible
     * direction values.
     * @param info a {@link GIRepository.ArgInfo}
     * @returns the direction
     */
    function arg_info_get_direction(info: ArgInfo): Direction;
    /**
     * Obtain the ownership transfer for this argument.
     * {@link GIRepository.Transfer} contains a list of possible values.
     * @param info a {@link GIRepository.ArgInfo}
     * @returns the transfer
     */
    function arg_info_get_ownership_transfer(info: ArgInfo): Transfer;
    /**
     * Obtain the scope type for this argument. The scope type explains
     * how a callback is going to be invoked, most importantly when
     * the resources required to invoke it can be freed.
     * {@link GIRepository.ScopeType} contains a list of possible values.
     * @param info a {@link GIRepository.ArgInfo}
     * @returns the scope type
     */
    function arg_info_get_scope(info: ArgInfo): ScopeType;
    /**
     * Obtain the type information for `info`.
     * @param info a {@link GIRepository.ArgInfo}
     * @returns the {@link GIRepository.TypeInfo} holding the type   information for `info`, free it with `g_base_info_unref()`   when done.
     */
    function arg_info_get_type(info: ArgInfo): TypeInfo;
    /**
     * Obtain if the argument is a pointer to a struct or object that will
     * receive an output of a function.  The default assumption for
     * {@link GIRepository.Direction.OUT} arguments which have allocation is that the
     * callee allocates; if this is `true`, then the caller must allocate.
     * @param info a {@link GIRepository.ArgInfo}
     * @returns `true` if caller is required to have allocated the argument
     */
    function arg_info_is_caller_allocates(info: ArgInfo): boolean;
    /**
     * Obtain if the argument is optional.  For 'out' arguments this means
     * that you can pass `null` in order to ignore the result.
     * @param info a {@link GIRepository.ArgInfo}
     * @returns `true` if it is an optional argument
     */
    function arg_info_is_optional(info: ArgInfo): boolean;
    /**
     * Obtain if the argument is a return value. It can either be a
     * parameter or a return value.
     * @param info a {@link GIRepository.ArgInfo}
     * @returns `true` if it is a return value
     */
    function arg_info_is_return_value(info: ArgInfo): boolean;
    /**
     * Obtain if an argument is only useful in C.
     * @param info a {@link GIRepository.ArgInfo}
     * @returns `true` if argument is only useful in C.
     * @since 1.30
     */
    function arg_info_is_skip(info: ArgInfo): boolean;
    /**
     * Obtain information about a the type of given argument `info`; this
     * function is a variant of `g_arg_info_get_type()` designed for stack
     * allocation.
     *
     * The initialized `type` must not be referenced after `info` is deallocated.
     * @param info a {@link GIRepository.ArgInfo}
     */
    function arg_info_load_type(info: ArgInfo): TypeInfo;
    /**
     * Obtain if the type of the argument includes the possibility of `null`.
     * For 'in' values this means that `null` is a valid value.  For 'out'
     * values, this means that `null` may be returned.
     *
     * See also `g_arg_info_is_optional()`.
     * @param info a {@link GIRepository.ArgInfo}
     * @returns `true` if the value may be `null`
     */
    function arg_info_may_be_null(info: ArgInfo): boolean;
    /**
     * TODO
     * @param info a {@link GIRepository.CallableInfo}
     * @returns `true` if this {@link GIRepository.CallableInfo} can throw a {@link GLib.Error}
     * @since 1.34
     */
    function callable_info_can_throw_gerror(info: CallableInfo): boolean;
    /**
     * Obtain information about a particular argument of this callable.
     * @param info a {@link GIRepository.CallableInfo}
     * @param n the argument index to fetch
     * @returns the {@link GIRepository.ArgInfo}. Free it with `g_base_info_unref()` when done.
     */
    function callable_info_get_arg(info: CallableInfo, n: number): ArgInfo;
    /**
     * See whether the caller owns the return value of this callable.
     * {@link GIRepository.Transfer} contains a list of possible transfer values.
     * @param info a {@link GIRepository.CallableInfo}
     * @returns the transfer mode for the return value of the callable
     */
    function callable_info_get_caller_owns(info: CallableInfo): Transfer;
    /**
     * Obtains the ownership transfer for the instance argument.
     * {@link GIRepository.Transfer} contains a list of possible transfer values.
     * @param info a {@link GIRepository.CallableInfo}
     * @returns the transfer mode of the instance argument
     * @since 1.42
     */
    function callable_info_get_instance_ownership_transfer(info: CallableInfo): Transfer;
    /**
     * Obtain the number of arguments (both IN and OUT) for this callable.
     * @param info a {@link GIRepository.CallableInfo}
     * @returns The number of arguments this callable expects.
     */
    function callable_info_get_n_args(info: CallableInfo): number;
    /**
     * Retrieve an arbitrary attribute associated with the return value.
     * @param info a {@link GIRepository.CallableInfo}
     * @param name a freeform string naming an attribute
     * @returns The value of the attribute, or `null` if no such attribute exists
     */
    function callable_info_get_return_attribute(info: CallableInfo, name: string): string;
    /**
     * Obtain the return type of a callable item as a {@link GIRepository.TypeInfo}.
     * @param info a {@link GIRepository.CallableInfo}
     * @returns the {@link GIRepository.TypeInfo}. Free the struct by calling `g_base_info_unref()` when done.
     */
    function callable_info_get_return_type(info: CallableInfo): TypeInfo;
    /**
     * TODO
     * @param info TODO
     * @param _function TODO
     * @param in_args TODO
     * @param out_args TODO
     * @param return_value TODO
     * @param is_method TODO
     * @param _throws TODO
     */
    function callable_info_invoke(
        info: CallableInfo,
        _function: any | null,
        in_args: Argument[],
        out_args: Argument[],
        return_value: Argument,
        is_method: boolean,
        _throws: boolean,
    ): boolean;
    /**
     * Determines if the callable info is a method. For {@link GIRepository.VFuncInfo}<!-- -->s,
     * {@link GIRepository.CallbackInfo}<!-- -->s, and {@link GIRepository.SignalInfo}<!-- -->s,
     * this is always true. Otherwise, this looks at the {@link GIRepository.FunctionInfoFlags.IS_METHOD}
     * flag on the {@link GIRepository.FunctionInfo}.
     *
     * Concretely, this function returns whether `g_callable_info_get_n_args()`
     * matches the number of arguments in the raw C method. For methods, there
     * is one more C argument than is exposed by introspection: the "self"
     * or "this" object.
     * @param info a {@link GIRepository.CallableInfo}
     * @returns `true` if `info` is a method, `false` otherwise
     * @since 1.34
     */
    function callable_info_is_method(info: CallableInfo): boolean;
    /**
     * Iterate over all attributes associated with the return value.  The
     * iterator structure is typically stack allocated, and must have its
     * first member initialized to `null`.
     *
     * Both the `name` and `value` should be treated as constants
     * and must not be freed.
     *
     * See `g_base_info_iterate_attributes()` for an example of how to use a
     * similar API.
     * @param info a {@link GIRepository.CallableInfo}
     * @param iterator a {@link GIRepository.AttributeIter} structure, must be initialized; see below
     * @returns `true` if there are more attributes
     */
    function callable_info_iterate_return_attributes(
        info: CallableInfo,
        iterator: AttributeIter,
    ): [boolean, AttributeIter, string, string];
    /**
     * Obtain information about a particular argument of this callable; this
     * function is a variant of `g_callable_info_get_arg()` designed for stack
     * allocation.
     *
     * The initialized `arg` must not be referenced after `info` is deallocated.
     * @param info a {@link GIRepository.CallableInfo}
     * @param n the argument index to fetch
     */
    function callable_info_load_arg(info: CallableInfo, n: number): ArgInfo;
    /**
     * Obtain information about a return value of callable; this
     * function is a variant of `g_callable_info_get_return_type()` designed for stack
     * allocation.
     *
     * The initialized `type` must not be referenced after `info` is deallocated.
     * @param info a {@link GIRepository.CallableInfo}
     */
    function callable_info_load_return_type(info: CallableInfo): TypeInfo;
    /**
     * See if a callable could return `null`.
     * @param info a {@link GIRepository.CallableInfo}
     * @returns `true` if callable could return `null`
     */
    function callable_info_may_return_null(info: CallableInfo): boolean;
    /**
     * See if a callable's return value is only useful in C.
     * @param info a {@link GIRepository.CallableInfo}
     * @returns `true` if return value is only useful in C.
     */
    function callable_info_skip_return(info: CallableInfo): boolean;
    /**
     * @param closure
     * @param return_gvalue
     * @param n_param_values
     * @param param_values
     * @param invocation_hint
     * @param marshal_data
     */
    function cclosure_marshal_generic(
        closure: GObject.Closure,
        return_gvalue: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    /**
     * Obtain the type of the constant as a {@link GIRepository.TypeInfo}.
     * @param info a {@link GIRepository.ConstantInfo}
     * @returns the {@link GIRepository.TypeInfo}. Free the struct by calling `g_base_info_unref()` when done.
     */
    function constant_info_get_type(info: ConstantInfo): TypeInfo;
    /**
     * Obtain the string form of the quark for the error domain associated with
     * this enum, if any.
     * @param info a {@link GIRepository.EnumInfo}
     * @returns the string form of the error domain associated with this enum, or `null`.
     * @since 1.30
     */
    function enum_info_get_error_domain(info: EnumInfo): string;
    /**
     * Obtain an enum type method at index `n`.
     * @param info a {@link GIRepository.EnumInfo}
     * @param n index of method to get
     * @returns the {@link GIRepository.FunctionInfo}. Free the struct by calling `g_base_info_unref()` when done.
     * @since 1.30
     */
    function enum_info_get_method(info: EnumInfo, n: number): FunctionInfo;
    /**
     * Obtain the number of methods that this enum type has.
     * @param info a {@link GIRepository.EnumInfo}
     * @returns number of methods
     * @since 1.30
     */
    function enum_info_get_n_methods(info: EnumInfo): number;
    /**
     * Obtain the number of values this enumeration contains.
     * @param info a {@link GIRepository.EnumInfo}
     * @returns the number of enumeration values
     */
    function enum_info_get_n_values(info: EnumInfo): number;
    /**
     * Obtain the tag of the type used for the enum in the C ABI. This will
     * will be a signed or unsigned integral type.
     *
     * Note that in the current implementation the width of the type is
     * computed correctly, but the signed or unsigned nature of the type
     * may not match the sign of the type used by the C compiler.
     * @param info a {@link GIRepository.EnumInfo}
     * @returns the storage type for the enumeration
     */
    function enum_info_get_storage_type(info: EnumInfo): TypeTag;
    /**
     * Obtain a value for this enumeration.
     * @param info a {@link GIRepository.EnumInfo}
     * @param n index of value to fetch
     * @returns the enumeration value or `null` if type tag is wrong, free the struct with `g_base_info_unref()` when done.
     */
    function enum_info_get_value(info: EnumInfo, n: number): ValueInfo;
    /**
     * Obtain the flags for this {@link GIRepository.FieldInfo}. See {@link GIRepository.FieldInfoFlags} for possible
     * flag values.
     * @param info a {@link GIRepository.FieldInfo}
     * @returns the flags
     */
    function field_info_get_flags(info: FieldInfo): FieldInfoFlags;
    /**
     * Obtain the offset in bytes of the field member, this is relative
     * to the beginning of the struct or union.
     * @param info a {@link GIRepository.FieldInfo}
     * @returns the field offset
     */
    function field_info_get_offset(info: FieldInfo): number;
    /**
     * Obtain the size in bits of the field member, this is how
     * much space you need to allocate to store the field.
     * @param info a {@link GIRepository.FieldInfo}
     * @returns the field size
     */
    function field_info_get_size(info: FieldInfo): number;
    /**
     * Obtain the type of a field as a {@link GIRepository.TypeInfo}.
     * @param info a {@link GIRepository.FieldInfo}
     * @returns the {@link GIRepository.TypeInfo}. Free the struct by calling `g_base_info_unref()` when done.
     */
    function field_info_get_type(info: FieldInfo): TypeInfo;
    /**
     * Obtain the {@link GIRepository.FunctionInfoFlags} for the `info`.
     * @param info a {@link GIRepository.FunctionInfo}
     * @returns the flags
     */
    function function_info_get_flags(info: FunctionInfo): FunctionInfoFlags;
    /**
     * Obtain the property associated with this {@link GIRepository.FunctionInfo}.
     * Only {@link GIRepository.FunctionInfo} with the flag {@link GIRepository.FunctionInfoFlags.IS_GETTER} or
     * {@link GIRepository.FunctionInfoFlags.IS_SETTER} have a property set. For other cases,
     * `null` will be returned.
     * @param info a {@link GIRepository.FunctionInfo}
     * @returns the property or `null` if not set. Free it with `g_base_info_unref()` when done.
     */
    function function_info_get_property(info: FunctionInfo): PropertyInfo;
    /**
     * Obtain the symbol of the function. The symbol is the name of the
     * exported function, suitable to be used as an argument to
     * `g_module_symbol()`.
     * @param info a {@link GIRepository.FunctionInfo}
     * @returns the symbol
     */
    function function_info_get_symbol(info: FunctionInfo): string;
    /**
     * Obtain the virtual function associated with this {@link GIRepository.FunctionInfo}.
     * Only {@link GIRepository.FunctionInfo} with the flag {@link GIRepository.FunctionInfoFlags.WRAPS_VFUNC} has
     * a virtual function set. For other cases, `null` will be returned.
     * @param info a {@link GIRepository.FunctionInfo}
     * @returns the virtual function or `null` if not set. Free it by calling `g_base_info_unref()` when done.
     */
    function function_info_get_vfunc(info: FunctionInfo): VFuncInfo;
    /**
     * Returns the major version number of the girepository library.
     * (e.g. in version 1.58.2 this is 1.)
     * @returns the major version number of the girepository library
     * @since 1.60
     */
    function get_major_version(): number;
    /**
     * Returns the micro version number of the girepository library.
     * (e.g. in version 1.58.2 this is 2.)
     * @returns the micro version number of the girepository library
     * @since 1.60
     */
    function get_micro_version(): number;
    /**
     * Returns the minor version number of the girepository library.
     * (e.g. in version 1.58.2 this is 58.)
     * @returns the minor version number of the girepository library
     * @since 1.60
     */
    function get_minor_version(): number;
    /**
     * TODO
     * @param type TODO
     * @param container TODO
     * @param typelib TODO
     * @param offset TODO
     * @returns TODO
     */
    function info_new(type: InfoType | null, container: BaseInfo, typelib: Typelib, offset: number): BaseInfo;
    /**
     * Obtain a string representation of `type`
     * @param type the info type
     * @returns the string
     */
    function info_type_to_string(type: InfoType | null): string;
    /**
     * Obtain a method of the interface type given a `name`. `null` will be
     * returned if there's no method available with that name.
     * @param info a {@link GIRepository.InterfaceInfo}
     * @param name name of method to obtain
     * @returns the {@link GIRepository.FunctionInfo} or `null` if none found. Free the struct by calling `g_base_info_unref()` when done.
     */
    function interface_info_find_method(info: InterfaceInfo, name: string): FunctionInfo;
    /**
     * TODO
     * @param info a {@link GIRepository.InterfaceInfo}
     * @param name Name of signal
     * @returns Info for the signal with name `name` in `info`, or `null` on failure.
     * @since 1.34
     */
    function interface_info_find_signal(info: InterfaceInfo, name: string): SignalInfo;
    /**
     * Locate a virtual function slot with name `name`. See the documentation
     * for `g_object_info_find_vfunc()` for more information on virtuals.
     * @param info a {@link GIRepository.InterfaceInfo}
     * @param name The name of a virtual function to find.
     * @returns the {@link GIRepository.VFuncInfo}, or `null`. Free it with `g_base_info_unref()` when done.
     */
    function interface_info_find_vfunc(info: InterfaceInfo, name: string): VFuncInfo;
    /**
     * Obtain an interface type constant at index `n`.
     * @param info a {@link GIRepository.InterfaceInfo}
     * @param n index of constant to get
     * @returns the {@link GIRepository.ConstantInfo}. Free the struct by calling `g_base_info_unref()` when done.
     */
    function interface_info_get_constant(info: InterfaceInfo, n: number): ConstantInfo;
    /**
     * Returns the layout C structure associated with this `GInterface`.
     * @param info a {@link GIRepository.InterfaceInfo}
     * @returns the {@link GIRepository.StructInfo} or `null`. Free it with `g_base_info_unref()` when done.
     */
    function interface_info_get_iface_struct(info: InterfaceInfo): StructInfo;
    /**
     * Obtain an interface type method at index `n`.
     * @param info a {@link GIRepository.InterfaceInfo}
     * @param n index of method to get
     * @returns the {@link GIRepository.FunctionInfo}. Free the struct by calling `g_base_info_unref()` when done.
     */
    function interface_info_get_method(info: InterfaceInfo, n: number): FunctionInfo;
    /**
     * Obtain the number of constants that this interface type has.
     * @param info a {@link GIRepository.InterfaceInfo}
     * @returns number of constants
     */
    function interface_info_get_n_constants(info: InterfaceInfo): number;
    /**
     * Obtain the number of methods that this interface type has.
     * @param info a {@link GIRepository.InterfaceInfo}
     * @returns number of methods
     */
    function interface_info_get_n_methods(info: InterfaceInfo): number;
    /**
     * Obtain the number of prerequisites for this interface type.
     * A prerequisites is another interface that needs to be implemented for
     * interface, similar to an base class for GObjects.
     * @param info a {@link GIRepository.InterfaceInfo}
     * @returns number of prerequisites
     */
    function interface_info_get_n_prerequisites(info: InterfaceInfo): number;
    /**
     * Obtain the number of properties that this interface type has.
     * @param info a {@link GIRepository.InterfaceInfo}
     * @returns number of properties
     */
    function interface_info_get_n_properties(info: InterfaceInfo): number;
    /**
     * Obtain the number of signals that this interface type has.
     * @param info a {@link GIRepository.InterfaceInfo}
     * @returns number of signals
     */
    function interface_info_get_n_signals(info: InterfaceInfo): number;
    /**
     * Obtain the number of virtual functions that this interface type has.
     * @param info a {@link GIRepository.InterfaceInfo}
     * @returns number of virtual functions
     */
    function interface_info_get_n_vfuncs(info: InterfaceInfo): number;
    /**
     * Obtain an interface type prerequisites index `n`.
     * @param info a {@link GIRepository.InterfaceInfo}
     * @param n index of prerequisites to get
     * @returns the prerequisites as a {@link GIRepository.BaseInfo}. Free the struct by calling `g_base_info_unref()` when done.
     */
    function interface_info_get_prerequisite(info: InterfaceInfo, n: number): BaseInfo;
    /**
     * Obtain an interface type property at index `n`.
     * @param info a {@link GIRepository.InterfaceInfo}
     * @param n index of property to get
     * @returns the {@link GIRepository.PropertyInfo}. Free the struct by calling `g_base_info_unref()` when done.
     */
    function interface_info_get_property(info: InterfaceInfo, n: number): PropertyInfo;
    /**
     * Obtain an interface type signal at index `n`.
     * @param info a {@link GIRepository.InterfaceInfo}
     * @param n index of signal to get
     * @returns the {@link GIRepository.SignalInfo}. Free the struct by calling `g_base_info_unref()` when done.
     */
    function interface_info_get_signal(info: InterfaceInfo, n: number): SignalInfo;
    /**
     * Obtain an interface type virtual function at index `n`.
     * @param info a {@link GIRepository.InterfaceInfo}
     * @param n index of virtual function to get
     * @returns the {@link GIRepository.VFuncInfo}. Free the struct by calling `g_base_info_unref()` when done.
     */
    function interface_info_get_vfunc(info: InterfaceInfo, n: number): VFuncInfo;
    /**
     * TODO
     * @returns TODO
     */
    function invoke_error_quark(): GLib.Quark;
    /**
     * Obtain a method of the object type given a `name`. `null` will be
     * returned if there's no method available with that name.
     * @param info a {@link GIRepository.ObjectInfo}
     * @param name name of method to obtain
     * @returns the {@link GIRepository.FunctionInfo}. Free the struct by calling `g_base_info_unref()` when done.
     */
    function object_info_find_method(info: ObjectInfo, name: string): FunctionInfo | null;
    /**
     * Obtain a method of the object given a `name`, searching both the
     * object `info` and any interfaces it implements.  `null` will be
     * returned if there's no method available with that name.
     *
     * Note that this function does *not* search parent classes; you will have
     * to chain up if that's desired.
     * @param info a {@link GIRepository.ObjectInfo}
     * @param name name of method to obtain
     * @returns the {@link GIRepository.FunctionInfo}. Free the struct by calling `g_base_info_unref()` when done.
     */
    function object_info_find_method_using_interfaces(
        info: ObjectInfo,
        name: string,
    ): [FunctionInfo | null, ObjectInfo];
    /**
     * TODO
     * @param info a {@link GIRepository.ObjectInfo}
     * @param name Name of signal
     * @returns Info for the signal with name `name` in `info`, or `null` on failure.
     */
    function object_info_find_signal(info: ObjectInfo, name: string): SignalInfo | null;
    /**
     * Locate a virtual function slot with name `name`. Note that the namespace
     * for virtuals is distinct from that of methods; there may or may not be
     * a concrete method associated for a virtual. If there is one, it may
     * be retrieved using `g_vfunc_info_get_invoker()`, otherwise `null` will be
     * returned.
     * See the documentation for `g_vfunc_info_get_invoker()` for more
     * information on invoking virtuals.
     * @param info a {@link GIRepository.ObjectInfo}
     * @param name The name of a virtual function to find.
     * @returns the {@link GIRepository.VFuncInfo}, or `null`. Free it with `g_base_info_unref()` when done.
     */
    function object_info_find_vfunc(info: ObjectInfo, name: string): VFuncInfo | null;
    /**
     * Locate a virtual function slot with name `name`, searching both the object
     * `info` and any interfaces it implements.  Note that the namespace for
     * virtuals is distinct from that of methods; there may or may not be a
     * concrete method associated for a virtual. If there is one, it may be
     * retrieved using `g_vfunc_info_get_invoker()`, otherwise `null` will be
     * returned.
     *
     * Note that this function does *not* search parent classes; you will have
     * to chain up if that's desired.
     * @param info a {@link GIRepository.ObjectInfo}
     * @param name name of vfunc to obtain
     * @returns the {@link GIRepository.VFuncInfo}. Free the struct by calling `g_base_info_unref()` when done.
     */
    function object_info_find_vfunc_using_interfaces(info: ObjectInfo, name: string): [VFuncInfo | null, ObjectInfo];
    /**
     * Obtain if the object type is an abstract type, eg if it cannot be
     * instantiated
     * @param info a {@link GIRepository.ObjectInfo}
     * @returns `true` if the object type is abstract
     */
    function object_info_get_abstract(info: ObjectInfo): boolean;
    /**
     * Every {@link GObject.Object} has two structures; an instance structure and a class
     * structure.  This function returns the metadata for the class structure.
     * @param info a {@link GIRepository.ObjectInfo}
     * @returns the {@link GIRepository.StructInfo} or `null`. Free with `g_base_info_unref()` when done.
     */
    function object_info_get_class_struct(info: ObjectInfo): StructInfo | null;
    /**
     * Obtain an object type constant at index `n`.
     * @param info a {@link GIRepository.ObjectInfo}
     * @param n index of constant to get
     * @returns the {@link GIRepository.ConstantInfo}. Free the struct by calling `g_base_info_unref()` when done.
     */
    function object_info_get_constant(info: ObjectInfo, n: number): ConstantInfo;
    /**
     * Obtain an object type field at index `n`.
     * @param info a {@link GIRepository.ObjectInfo}
     * @param n index of field to get
     * @returns the {@link GIRepository.FieldInfo}. Free the struct by calling `g_base_info_unref()` when done.
     */
    function object_info_get_field(info: ObjectInfo, n: number): FieldInfo;
    /**
     * Checks whether the object type is a final type, i.e. if it cannot
     * be derived
     * @param info a {@link GIRepository.ObjectInfo}
     * @returns `true` if the object type is final
     * @since 1.70
     */
    function object_info_get_final(info: ObjectInfo): boolean;
    /**
     * Obtain if the object type is of a fundamental type which is not
     * G_TYPE_OBJECT. This is mostly for supporting GstMiniObject.
     * @param info a {@link GIRepository.ObjectInfo}
     * @returns `true` if the object type is a fundamental type
     */
    function object_info_get_fundamental(info: ObjectInfo): boolean;
    /**
     * Obtain the symbol name of the function that should be called to convert
     * an object instance pointer of this object type to a GValue.
     * I's mainly used fundamental types. The type signature for the symbol
     * is %GIObjectInfoGetValueFunction, to fetch the function pointer
     * see `g_object_info_get_get_value_function()`.
     * @param info a {@link GIRepository.ObjectInfo}
     * @returns the symbol or `null`
     */
    function object_info_get_get_value_function(info: ObjectInfo): string | null;
    /**
     * Obtain an object type interface at index `n`.
     * @param info a {@link GIRepository.ObjectInfo}
     * @param n index of interface to get
     * @returns the {@link GIRepository.InterfaceInfo}. Free the struct by calling `g_base_info_unref()` when done.
     */
    function object_info_get_interface(info: ObjectInfo, n: number): InterfaceInfo;
    /**
     * Obtain an object type method at index `n`.
     * @param info a {@link GIRepository.ObjectInfo}
     * @param n index of method to get
     * @returns the {@link GIRepository.FunctionInfo}. Free the struct by calling `g_base_info_unref()` when done.
     */
    function object_info_get_method(info: ObjectInfo, n: number): FunctionInfo;
    /**
     * Obtain the number of constants that this object type has.
     * @param info a {@link GIRepository.ObjectInfo}
     * @returns number of constants
     */
    function object_info_get_n_constants(info: ObjectInfo): number;
    /**
     * Obtain the number of fields that this object type has.
     * @param info a {@link GIRepository.ObjectInfo}
     * @returns number of fields
     */
    function object_info_get_n_fields(info: ObjectInfo): number;
    /**
     * Obtain the number of interfaces that this object type has.
     * @param info a {@link GIRepository.ObjectInfo}
     * @returns number of interfaces
     */
    function object_info_get_n_interfaces(info: ObjectInfo): number;
    /**
     * Obtain the number of methods that this object type has.
     * @param info a {@link GIRepository.ObjectInfo}
     * @returns number of methods
     */
    function object_info_get_n_methods(info: ObjectInfo): number;
    /**
     * Obtain the number of properties that this object type has.
     * @param info a {@link GIRepository.ObjectInfo}
     * @returns number of properties
     */
    function object_info_get_n_properties(info: ObjectInfo): number;
    /**
     * Obtain the number of signals that this object type has.
     * @param info a {@link GIRepository.ObjectInfo}
     * @returns number of signals
     */
    function object_info_get_n_signals(info: ObjectInfo): number;
    /**
     * Obtain the number of virtual functions that this object type has.
     * @param info a {@link GIRepository.ObjectInfo}
     * @returns number of virtual functions
     */
    function object_info_get_n_vfuncs(info: ObjectInfo): number;
    /**
     * Obtain the parent of the object type.
     * @param info a {@link GIRepository.ObjectInfo}
     * @returns the {@link GIRepository.ObjectInfo}. Free the struct by calling `g_base_info_unref()` when done.
     */
    function object_info_get_parent(info: ObjectInfo): ObjectInfo | null;
    /**
     * Obtain an object type property at index `n`.
     * @param info a {@link GIRepository.ObjectInfo}
     * @param n index of property to get
     * @returns the {@link GIRepository.PropertyInfo}. Free the struct by calling `g_base_info_unref()` when done.
     */
    function object_info_get_property(info: ObjectInfo, n: number): PropertyInfo;
    /**
     * Obtain the symbol name of the function that should be called to ref this
     * object type. It's mainly used fundamental types. The type signature for
     * the symbol is %GIObjectInfoRefFunction, to fetch the function pointer
     * see `g_object_info_get_ref_function()`.
     * @param info a {@link GIRepository.ObjectInfo}
     * @returns the symbol or `null`
     */
    function object_info_get_ref_function(info: ObjectInfo): string | null;
    /**
     * Obtain the symbol name of the function that should be called to convert
     * set a GValue giving an object instance pointer of this object type.
     * I's mainly used fundamental types. The type signature for the symbol
     * is %GIObjectInfoSetValueFunction, to fetch the function pointer
     * see `g_object_info_get_set_value_function()`.
     * @param info a {@link GIRepository.ObjectInfo}
     * @returns the symbol or `null`
     */
    function object_info_get_set_value_function(info: ObjectInfo): string | null;
    /**
     * Obtain an object type signal at index `n`.
     * @param info a {@link GIRepository.ObjectInfo}
     * @param n index of signal to get
     * @returns the {@link GIRepository.SignalInfo}. Free the struct by calling `g_base_info_unref()` when done.
     */
    function object_info_get_signal(info: ObjectInfo, n: number): SignalInfo;
    /**
     * Obtain the function which when called will return the GType
     * function for which this object type is registered.
     * @param info a {@link GIRepository.ObjectInfo}
     * @returns the type init function
     */
    function object_info_get_type_init(info: ObjectInfo): string;
    /**
     * Obtain the name of the objects class/type.
     * @param info a {@link GIRepository.ObjectInfo}
     * @returns name of the objects type
     */
    function object_info_get_type_name(info: ObjectInfo): string;
    /**
     * Obtain the symbol name of the function that should be called to unref this
     * object type. It's mainly used fundamental types. The type signature for
     * the symbol is %GIObjectInfoUnrefFunction, to fetch the function pointer
     * see `g_object_info_get_unref_function()`.
     * @param info a {@link GIRepository.ObjectInfo}
     * @returns the symbol or `null`
     */
    function object_info_get_unref_function(info: ObjectInfo): string | null;
    /**
     * Obtain an object type virtual function at index `n`.
     * @param info a {@link GIRepository.ObjectInfo}
     * @param n index of virtual function to get
     * @returns the {@link GIRepository.VFuncInfo}. Free the struct by calling `g_base_info_unref()` when done.
     */
    function object_info_get_vfunc(info: ObjectInfo, n: number): VFuncInfo;
    /**
     * Obtain the flags for this property info. See {@link GObject.ParamSpecFlags} for
     * more information about possible flag values.
     * @param info a {@link GIRepository.PropertyInfo}
     * @returns the flags
     */
    function property_info_get_flags(info: PropertyInfo): GObject.ParamFlags;
    /**
     * Obtains the getter function associated with this {@link GIRepository.PropertyInfo}.
     *
     * The setter is only available for {@link GObject.ParamFlags.READABLE} properties.
     * @param info a {@link GIRepository.PropertyInfo}
     * @returns the function info or `null` if not set.   Free it with `g_base_info_unref()` when done.
     */
    function property_info_get_getter(info: PropertyInfo): FunctionInfo | null;
    /**
     * Obtain the ownership transfer for this property. See {@link GIRepository.Transfer} for more
     * information about transfer values.
     * @param info a {@link GIRepository.PropertyInfo}
     * @returns the transfer
     */
    function property_info_get_ownership_transfer(info: PropertyInfo): Transfer;
    /**
     * Obtains the setter function associated with this {@link GIRepository.PropertyInfo}.
     *
     * The setter is only available for {@link GObject.ParamFlags.WRITABLE} properties that
     * are also not {@link GObject.ParamFlags.CONSTRUCT_ONLY}.
     * @param info a {@link GIRepository.PropertyInfo}
     * @returns the function info or `null` if not set.   Free it with `g_base_info_unref()` when done.
     */
    function property_info_get_setter(info: PropertyInfo): FunctionInfo | null;
    /**
     * Obtain the type information for the property `info`.
     * @param info a {@link GIRepository.PropertyInfo}
     * @returns the {@link GIRepository.TypeInfo}, free it with `g_base_info_unref()` when done.
     */
    function property_info_get_type(info: PropertyInfo): TypeInfo;
    /**
     * Obtain the {@link GObject.GType} for this registered type or G_TYPE_NONE which a special meaning.
     * It means that either there is no type information associated with this `info` or
     * that the shared library which provides the type_init function for this
     * `info` cannot be called.
     * @param info a {@link GIRepository.RegisteredTypeInfo}
     * @returns the {@link GObject.GType}.
     */
    function registered_type_info_get_g_type(info: RegisteredTypeInfo): GObject.GType;
    /**
     * Obtain the type init function for `info`. The type init function is the
     * function which will register the GType within the GObject type system.
     * Usually this is not called by langauge bindings or applications, use
     * `g_registered_type_info_get_g_type()` directly instead.
     * @param info a {@link GIRepository.RegisteredTypeInfo}
     * @returns the symbol name of the type init function, suitable for passing into `g_module_symbol()`.
     */
    function registered_type_info_get_type_init(info: RegisteredTypeInfo): string;
    /**
     * Obtain the type name of the struct within the GObject type system.
     * This type can be passed to `g_type_name()` to get a {@link GObject.GType}.
     * @param info a {@link GIRepository.RegisteredTypeInfo}
     * @returns the type name
     */
    function registered_type_info_get_type_name(info: RegisteredTypeInfo): string;
    /**
     * Obtain the class closure for this signal if one is set. The class
     * closure is a virtual function on the type that the signal belongs to.
     * If the signal lacks a closure `null` will be returned.
     * @param info a {@link GIRepository.SignalInfo}
     * @returns the class closure or `null`
     */
    function signal_info_get_class_closure(info: SignalInfo): VFuncInfo;
    /**
     * Obtain the flags for this signal info. See {@link GObject.SignalFlags} for
     * more information about possible flag values.
     * @param info a {@link GIRepository.SignalInfo}
     * @returns the flags
     */
    function signal_info_get_flags(info: SignalInfo): GObject.SignalFlags;
    /**
     * Obtain if the returning true in the signal handler will
     * stop the emission of the signal.
     * @param info a {@link GIRepository.SignalInfo}
     * @returns `true` if returning true stops the signal emission
     */
    function signal_info_true_stops_emit(info: SignalInfo): boolean;
    /**
     * Obtain the type information for field named `name`.
     * @param info a {@link GIRepository.StructInfo}
     * @param name a field name
     * @returns the {@link GIRepository.FieldInfo} or `null` if not found, free it with `g_base_info_unref()` when done.
     * @since 1.46
     */
    function struct_info_find_field(info: StructInfo, name: string): FieldInfo;
    /**
     * Obtain the type information for method named `name`.
     * @param info a {@link GIRepository.StructInfo}
     * @param name a method name
     * @returns the {@link GIRepository.FunctionInfo}, free it with `g_base_info_unref()` when done.
     */
    function struct_info_find_method(info: StructInfo, name: string): FunctionInfo;
    /**
     * Obtain the required alignment of the structure.
     * @param info a {@link GIRepository.StructInfo}
     * @returns required alignment in bytes
     */
    function struct_info_get_alignment(info: StructInfo): number;
    /**
     * Retrieves the name of the copy function for `info`, if any is set.
     * @param info a struct information blob
     * @returns the name of the copy function
     * @since 1.76
     */
    function struct_info_get_copy_function(info: StructInfo): string | null;
    /**
     * Obtain the type information for field with specified index.
     * @param info a {@link GIRepository.StructInfo}
     * @param n a field index
     * @returns the {@link GIRepository.FieldInfo}, free it with `g_base_info_unref()` when done.
     */
    function struct_info_get_field(info: StructInfo, n: number): FieldInfo;
    /**
     * Retrieves the name of the free function for `info`, if any is set.
     * @param info a struct information blob
     * @returns the name of the free function
     * @since 1.76
     */
    function struct_info_get_free_function(info: StructInfo): string | null;
    /**
     * Obtain the type information for method with specified index.
     * @param info a {@link GIRepository.StructInfo}
     * @param n a method index
     * @returns the {@link GIRepository.FunctionInfo}, free it with `g_base_info_unref()` when done.
     */
    function struct_info_get_method(info: StructInfo, n: number): FunctionInfo;
    /**
     * Obtain the number of fields this structure has.
     * @param info a {@link GIRepository.StructInfo}
     * @returns number of fields
     */
    function struct_info_get_n_fields(info: StructInfo): number;
    /**
     * Obtain the number of methods this structure has.
     * @param info a {@link GIRepository.StructInfo}
     * @returns number of methods
     */
    function struct_info_get_n_methods(info: StructInfo): number;
    /**
     * Obtain the total size of the structure.
     * @param info a {@link GIRepository.StructInfo}
     * @returns size of the structure in bytes
     */
    function struct_info_get_size(info: StructInfo): number;
    /**
     * TODO
     * @param info TODO
     * @returns TODO
     */
    function struct_info_is_foreign(info: StructInfo): boolean;
    /**
     * Return true if this structure represents the "class structure" for some
     * {@link GObject.Object} or `GInterface`.  This function is mainly useful to hide this kind of structure
     * from generated public APIs.
     * @param info a {@link GIRepository.StructInfo}
     * @returns `true` if this is a class struct, `false` otherwise
     */
    function struct_info_is_gtype_struct(info: StructInfo): boolean;
    /**
     * GLib data structures, such as {@link GLib.List}, {@link GLib.SList}, and {@link GLib.HashTable}, all store
     * data pointers.
     * In the case where the list or hash table is storing single types rather than
     * structs, these data pointers may have values stuffed into them via macros
     * such as `GPOINTER_TO_INT`.
     *
     * Use this function to ensure that all values are correctly extracted from
     * stuffed pointers, regardless of the machine's architecture or endianness.
     *
     * This function fills in the appropriate field of `arg` with the value extracted
     * from `hash_pointer`, depending on the storage type of `info`.
     * @param info a {@link GIRepository.TypeInfo}
     * @param hash_pointer A pointer, such as a {@link GLib.HashTable} data pointer
     * @param arg A {@link GIRepository.Argument} to fill in
     * @since 1.66
     */
    function type_info_argument_from_hash_pointer(info: TypeInfo, hash_pointer: any | null, arg: Argument): void;
    /**
     * Obtain the fixed array size of the type. The type tag must be a
     * #GI_TYPE_TAG_ARRAY or -1 will be returned.
     * @param info a {@link GIRepository.TypeInfo}
     * @returns the size or -1 if it's not an array
     */
    function type_info_get_array_fixed_size(info: TypeInfo): number;
    /**
     * Obtain the position of the argument which gives the array length of the type.
     * The type tag must be a #GI_TYPE_TAG_ARRAY or -1 will be returned.
     * @param info a {@link GIRepository.TypeInfo}
     * @returns the array length, or -1 if the type is not an array
     */
    function type_info_get_array_length(info: TypeInfo): number;
    /**
     * Obtain the array type for this type. See {@link GIRepository.ArrayType} for a list of
     * possible values. If the type tag of this type is not array, -1 will be
     * returned.
     * @param info a {@link GIRepository.TypeInfo}
     * @returns the array type or -1
     */
    function type_info_get_array_type(info: TypeInfo): ArrayType;
    /**
     * For types which have #GI_TYPE_TAG_INTERFACE such as GObjects and boxed values,
     * this function returns full information about the referenced type.  You can then
     * inspect the type of the returned {@link GIRepository.BaseInfo} to further query whether it is
     * a concrete GObject, a GInterface, a structure, etc. using `g_base_info_get_type()`.
     * @param info a {@link GIRepository.TypeInfo}
     * @returns the {@link GIRepository.BaseInfo}, or `null`. Free it with `g_base_info_unref()` when done.
     */
    function type_info_get_interface(info: TypeInfo): BaseInfo;
    /**
     * Obtain the parameter type `n`.
     * @param info a {@link GIRepository.TypeInfo}
     * @param n index of the parameter
     * @returns the param type info
     */
    function type_info_get_param_type(info: TypeInfo, n: number): TypeInfo;
    /**
     * Obtain the type tag corresponding to the underlying storage type in C for
     * the type.
     * See {@link GIRepository.TypeTag} for a list of type tags.
     * @param info a {@link GIRepository.TypeInfo}
     * @returns the type tag
     * @since 1.66
     */
    function type_info_get_storage_type(info: TypeInfo): TypeTag;
    /**
     * Obtain the type tag for the type. See {@link GIRepository.TypeTag} for a list
     * of type tags.
     * @param info a {@link GIRepository.TypeInfo}
     * @returns the type tag
     */
    function type_info_get_tag(info: TypeInfo): TypeTag;
    /**
     * GLib data structures, such as {@link GLib.List}, {@link GLib.SList}, and {@link GLib.HashTable}, all store
     * data pointers.
     * In the case where the list or hash table is storing single types rather than
     * structs, these data pointers may have values stuffed into them via macros
     * such as `GPOINTER_TO_INT`.
     *
     * Use this function to ensure that all values are correctly stuffed into
     * pointers, regardless of the machine's architecture or endianness.
     *
     * This function returns a pointer stuffed with the appropriate field of `arg`,
     * depending on the storage type of `info`.
     * @param info a {@link GIRepository.TypeInfo}
     * @param arg A {@link GIRepository.Argument} with the value to stuff into a pointer
     * @returns A stuffed pointer, that can be stored in a {@link GLib.HashTable}, for example
     * @since 1.66
     */
    function type_info_hash_pointer_from_argument(info: TypeInfo, arg: Argument): any | null;
    /**
     * Obtain if the type is passed as a reference.
     *
     * Note that the types of {@link GIRepository.Direction.OUT} and {@link GIRepository.Direction.INOUT} parameters
     * will only be pointers if the underlying type being transferred is a pointer
     * (i.e. only if the type of the C function’s formal parameter is a pointer to a
     * pointer).
     * @param info a {@link GIRepository.TypeInfo}
     * @returns `true` if it is a pointer
     */
    function type_info_is_pointer(info: TypeInfo): boolean;
    /**
     * Obtain if the last element of the array is `null`. The type tag must be a
     * #GI_TYPE_TAG_ARRAY or `false` will be returned.
     * @param info a {@link GIRepository.TypeInfo}
     * @returns `true` if zero terminated
     */
    function type_info_is_zero_terminated(info: TypeInfo): boolean;
    /**
     * GLib data structures, such as {@link GLib.List}, {@link GLib.SList}, and {@link GLib.HashTable}, all store
     * data pointers.
     * In the case where the list or hash table is storing single types rather than
     * structs, these data pointers may have values stuffed into them via macros
     * such as `GPOINTER_TO_INT`.
     *
     * Use this function to ensure that all values are correctly extracted from
     * stuffed pointers, regardless of the machine's architecture or endianness.
     *
     * This function fills in the appropriate field of `arg` with the value extracted
     * from `hash_pointer`, depending on `storage_type`.
     * @param storage_type a {@link GIRepository.TypeTag} obtained from `g_type_info_get_storage_type()`
     * @param hash_pointer A pointer, such as a {@link GLib.HashTable} data pointer
     * @param arg A {@link GIRepository.Argument} to fill in
     * @since 1.72
     */
    function type_tag_argument_from_hash_pointer(
        storage_type: TypeTag | null,
        hash_pointer: any | null,
        arg: Argument,
    ): void;
    /**
     * GLib data structures, such as {@link GLib.List}, {@link GLib.SList}, and {@link GLib.HashTable}, all store
     * data pointers.
     * In the case where the list or hash table is storing single types rather than
     * structs, these data pointers may have values stuffed into them via macros
     * such as `GPOINTER_TO_INT`.
     *
     * Use this function to ensure that all values are correctly stuffed into
     * pointers, regardless of the machine's architecture or endianness.
     *
     * This function returns a pointer stuffed with the appropriate field of `arg`,
     * depending on `storage_type`.
     * @param storage_type a {@link GIRepository.TypeTag} obtained from `g_type_info_get_storage_type()`
     * @param arg A {@link GIRepository.Argument} with the value to stuff into a pointer
     * @returns A stuffed pointer, that can be stored in a {@link GLib.HashTable}, for example
     * @since 1.72
     */
    function type_tag_hash_pointer_from_argument(storage_type: TypeTag | null, arg: Argument): any | null;
    /**
     * Obtain a string representation of `type`
     * @param type the type_tag
     * @returns the string
     */
    function type_tag_to_string(type: TypeTag | null): string;
    /**
     * Obtain the type information for method named `name`.
     * @param info a {@link GIRepository.UnionInfo}
     * @param name a method name
     * @returns the {@link GIRepository.FunctionInfo}, free it with `g_base_info_unref()` when done.
     */
    function union_info_find_method(info: UnionInfo, name: string): FunctionInfo;
    /**
     * Obtain the required alignment of the union.
     * @param info a {@link GIRepository.UnionInfo}
     * @returns required alignment in bytes
     */
    function union_info_get_alignment(info: UnionInfo): number;
    /**
     * Retrieves the name of the copy function for `info`, if any is set.
     * @param info a union information blob
     * @returns the name of the copy function
     * @since 1.76
     */
    function union_info_get_copy_function(info: UnionInfo): string | null;
    /**
     * Obtain discriminator value assigned for n-th union field, i.e. n-th
     * union field is the active one if discriminator contains this
     * constant.
     * @param info a {@link GIRepository.UnionInfo}
     * @param n a union field index
     * @returns the {@link GIRepository.ConstantInfo}, free it with `g_base_info_unref()` when done.
     */
    function union_info_get_discriminator(info: UnionInfo, n: number): ConstantInfo;
    /**
     * Returns offset of the discriminator field in the structure.
     * @param info a {@link GIRepository.UnionInfo}
     * @returns offset in bytes of the discriminator
     */
    function union_info_get_discriminator_offset(info: UnionInfo): number;
    /**
     * Obtain the type information of the union discriminator.
     * @param info a {@link GIRepository.UnionInfo}
     * @returns the {@link GIRepository.TypeInfo}, free it with `g_base_info_unref()` when done.
     */
    function union_info_get_discriminator_type(info: UnionInfo): TypeInfo;
    /**
     * Obtain the type information for field with specified index.
     * @param info a {@link GIRepository.UnionInfo}
     * @param n a field index
     * @returns the {@link GIRepository.FieldInfo}, free it with `g_base_info_unref()` when done.
     */
    function union_info_get_field(info: UnionInfo, n: number): FieldInfo;
    /**
     * Retrieves the name of the free function for `info`, if any is set.
     * @param info a union information blob
     * @returns the name of the free function
     * @since 1.76
     */
    function union_info_get_free_function(info: UnionInfo): string | null;
    /**
     * Obtain the type information for method with specified index.
     * @param info a {@link GIRepository.UnionInfo}
     * @param n a method index
     * @returns the {@link GIRepository.FunctionInfo}, free it with `g_base_info_unref()` when done.
     */
    function union_info_get_method(info: UnionInfo, n: number): FunctionInfo;
    /**
     * Obtain the number of fields this union has.
     * @param info a {@link GIRepository.UnionInfo}
     * @returns number of fields
     */
    function union_info_get_n_fields(info: UnionInfo): number;
    /**
     * Obtain the number of methods this union has.
     * @param info a {@link GIRepository.UnionInfo}
     * @returns number of methods
     */
    function union_info_get_n_methods(info: UnionInfo): number;
    /**
     * Obtain the total size of the union.
     * @param info a {@link GIRepository.UnionInfo}
     * @returns size of the union in bytes
     */
    function union_info_get_size(info: UnionInfo): number;
    /**
     * Return true if this union contains discriminator field.
     * @param info a {@link GIRepository.UnionInfo}
     * @returns `true` if this is a discriminated union, `false` otherwise
     */
    function union_info_is_discriminated(info: UnionInfo): boolean;
    /**
     * Obtain the enumeration value of the {@link GIRepository.ValueInfo}.
     * @param info a {@link GIRepository.ValueInfo}
     * @returns the enumeration value. This will always be representable   as a 32-bit signed or unsigned value. The use of gint64 as the   return type is to allow both.
     */
    function value_info_get_value(info: ValueInfo): number;
    /**
     * This method will look up where inside the type struct of `implementor_gtype`
     * is the implementation for `info`.
     * @param info a {@link GIRepository.VFuncInfo}
     * @param implementor_gtype {@link GObject.GType} implementing this virtual function
     * @returns address to a function or `null` if an error happened
     */
    function vfunc_info_get_address(info: VFuncInfo, implementor_gtype: GObject.GType): any | null;
    /**
     * Obtain the flags for this virtual function info. See {@link GIRepository.VFuncInfoFlags} for
     * more information about possible flag values.
     * @param info a {@link GIRepository.VFuncInfo}
     * @returns the flags
     */
    function vfunc_info_get_flags(info: VFuncInfo): VFuncInfoFlags;
    /**
     * If this virtual function has an associated invoker method, this
     * method will return it.  An invoker method is a C entry point.
     *
     * Not all virtuals will have invokers.
     * @param info a {@link GIRepository.VFuncInfo}
     * @returns the {@link GIRepository.VFuncInfo} or `null`. Free it with `g_base_info_unref()` when done.
     */
    function vfunc_info_get_invoker(info: VFuncInfo): FunctionInfo;
    /**
     * Obtain the offset of the function pointer in the class struct. The value
     * 0xFFFF indicates that the struct offset is unknown.
     * @param info a {@link GIRepository.VFuncInfo}
     * @returns the struct offset or 0xFFFF if it's unknown
     */
    function vfunc_info_get_offset(info: VFuncInfo): number;
    /**
     * Obtain the signal for the virtual function if one is set.
     * The signal comes from the object or interface to which
     * this virtual function belongs.
     * @param info a {@link GIRepository.VFuncInfo}
     * @returns the signal or `null` if none set
     */
    function vfunc_info_get_signal(info: VFuncInfo): SignalInfo;
    /**
     * Flags for a {@link GIRepository.FieldInfo}.
     * @gir-type Flags
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
     * Flags for a {@link GIRepository.FunctionInfo} struct.
     * @gir-type Flags
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
         * is a getter of a {@link GIRepository.PropertyInfo}.
         */
        IS_GETTER,
        /**
         * is a setter of a {@link GIRepository.PropertyInfo}.
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
     * @gir-type Flags
     */
    enum RepositoryLoadFlags {
        /**
         * Lazily load the typelib.
         */
        IREPOSITORY_LOAD_FLAG_LAZY,
    }

    /**
     * Flags of a {@link GIRepository.VFuncInfo} struct.
     * @gir-type Flags
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
         * Includes a {@link GLib.Error}
         */
        THROWS,
    }

    namespace Repository {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * {@link GIRepository.Repository} is used to manage repositories of namespaces. Namespaces
     * are represented on disk by type libraries (.typelib files).
     *
     * ### Discovery of type libraries
     *
     * {@link GIRepository.Repository} will typically look for a `girepository-1.0` directory
     * under the library directory used when compiling gobject-introspection.
     *
     * It is possible to control the search paths programmatically, using
     * `g_irepository_prepend_search_path()`. It is also possible to modify
     * the search paths by using the `GI_TYPELIB_PATH` environment variable.
     * The environment variable takes precedence over the default search path
     * and the `g_irepository_prepend_search_path()` calls.
     * @gir-type Class
     */
    class Repository extends GObject.Object {
        static $gtype: GObject.GType<Repository>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Repository.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Repository.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Repository.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Repository.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Repository.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Repository.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Repository.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Repository.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param arg
         */
        static dump(arg: string): boolean;
        static error_quark(): GLib.Quark;
        /**
         * Returns the singleton process-global default {@link GIRepository.Repository}. It is
         * not currently supported to have multiple repositories in a
         * particular process, but this function is provided in the unlikely
         * eventuality that it would become possible, and as a convenience for
         * higher level language bindings to conform to the GObject method
         * call conventions.
         *
         * All methods on {@link GIRepository.Repository} also accept `null` as an instance
         * parameter to mean this default repository, which is usually more
         * convenient for C.
         */
        static get_default(): Repository;
        /**
         * Obtain the option group for girepository, it's used
         * by the dumper and for programs that wants to provide
         * introspection information
         */
        static get_option_group(): GLib.OptionGroup;
        /**
         * Returns the current search path {@link GIRepository.Repository} will use when loading
         * typelib files. The list is internal to {@link GIRepository.Repository} and should not
         * be freed, nor should its string elements.
         */
        static get_search_path(): string[];
        /**
         * @param directory
         */
        static prepend_library_path(directory: string): void;
        /**
         * Prepends `directory` to the typelib search path.
         *
         * See also: `g_irepository_get_search_path()`.
         * @param directory directory name to prepend to the typelib   search path
         */
        static prepend_search_path(directory: string): void;

        // Methods

        /**
         * Obtain an unordered list of versions (either currently loaded or
         * available) for `namespace_` in this `repository`.
         * @param namespace_ GI namespace, e.g. "Gtk"
         * @returns the array of versions.
         */
        enumerate_versions(namespace_: string): string[];
        /**
         * Searches for the enum type corresponding to the given {@link GLib.Error}
         * domain. Before calling this function for a particular namespace,
         * you must call `g_irepository_require()` once to load the namespace, or
         * otherwise ensure the namespace has already been loaded.
         * @param domain a {@link GLib.Error} domain
         * @returns {@link GIRepository.EnumInfo} representing metadata about `domain`'s enum type, or `null`
         */
        find_by_error_domain(domain: GLib.Quark): EnumInfo;
        /**
         * Searches all loaded namespaces for a particular {@link GObject.GType}.  Note that
         * in order to locate the metadata, the namespace corresponding to
         * the type must first have been loaded.  There is currently no
         * mechanism for determining the namespace which corresponds to an
         * arbitrary GType - thus, this function will operate most reliably
         * when you know the GType to originate from be from a loaded namespace.
         * @param gtype GType to search for
         * @returns {@link GIRepository.BaseInfo} representing metadata about `type`, or `null`
         */
        find_by_gtype(gtype: GObject.GType): BaseInfo;
        /**
         * Searches for a particular entry in a namespace.  Before calling
         * this function for a particular namespace, you must call
         * `g_irepository_require()` once to load the namespace, or otherwise
         * ensure the namespace has already been loaded.
         * @param namespace_ Namespace which will be searched
         * @param name Entry name to find
         * @returns {@link GIRepository.BaseInfo} representing metadata about `name`, or `null`
         */
        find_by_name(namespace_: string, name: string): BaseInfo;
        /**
         * This function returns the "C prefix", or the C level namespace
         * associated with the given introspection namespace.  Each C symbol
         * starts with this prefix, as well each {@link GObject.GType} in the library.
         *
         * Note: The namespace must have already been loaded using a function
         * such as `g_irepository_require()` before calling this function.
         * @param namespace_ Namespace to inspect
         * @returns C namespace prefix, or `null` if none associated
         */
        get_c_prefix(namespace_: string): string;
        /**
         * Retrieves all (transitive) versioned dependencies for
         * `namespace_`.
         *
         * The strings are of the form `namespace-version`.
         *
         * Note: `namespace_` must have already been loaded using a function
         * such as `g_irepository_require()` before calling this function.
         *
         * To get only the immediate dependencies for `namespace_`, use
         * `g_irepository_get_immediate_dependencies()`.
         * @param namespace_ Namespace of interest
         * @returns all versioned   dependencies
         */
        get_dependencies(namespace_: string): string[];
        /**
         * Return an array of the immediate versioned dependencies for `namespace_`.
         * Returned strings are of the form `namespace-version`.
         *
         * Note: `namespace_` must have already been loaded using a function
         * such as `g_irepository_require()` before calling this function.
         *
         * To get the transitive closure of dependencies for `namespace_`, use
         * `g_irepository_get_dependencies()`.
         * @param namespace_ Namespace of interest
         * @returns Zero-terminated string array of immediate versioned   dependencies
         */
        get_immediate_dependencies(namespace_: string): string[];
        /**
         * This function returns a particular metadata entry in the
         * given namespace `namespace_`.  The namespace must have
         * already been loaded before calling this function.
         * See `g_irepository_get_n_infos()` to find the maximum number of
         * entries.
         * @param namespace_ Namespace to inspect
         * @param index 0-based offset into namespace metadata for entry
         * @returns {@link GIRepository.BaseInfo} containing metadata
         */
        get_info(namespace_: string, index: number): BaseInfo;
        /**
         * Return the list of currently loaded namespaces.
         * @returns List of namespaces
         */
        get_loaded_namespaces(): string[];
        /**
         * This function returns the number of metadata entries in
         * given namespace `namespace_`.  The namespace must have
         * already been loaded before calling this function.
         * @param namespace_ Namespace to inspect
         * @returns number of metadata entries
         */
        get_n_infos(namespace_: string): number;
        /**
         * Look up the implemented interfaces for `gtype`.  This function
         * cannot fail per se; but for a totally "unknown" {@link GObject.GType}, it may
         * return 0 implemented interfaces.
         *
         * The semantics of this function are designed for a dynamic binding,
         * where in certain cases (such as a function which returns an
         * interface which may have "hidden" implementation classes), not all
         * data may be statically known, and will have to be determined from
         * the {@link GObject.GType} of the object.  An example is `g_file_new_for_path()`
         * returning a concrete class of `GLocalFile`, which is a {@link GObject.GType} we
         * see at runtime, but not statically.
         * @param gtype a {@link GObject.GType} whose fundamental type is G_TYPE_OBJECT
         */
        get_object_gtype_interfaces(gtype: GObject.GType): InterfaceInfo[];
        /**
         * This function returns a comma-separated list of paths to the
         * shared C libraries associated with the given namespace `namespace_`.
         * There may be no shared library path associated, in which case this
         * function will return `null`.
         *
         * Note: The namespace must have already been loaded using a function
         * such as `g_irepository_require()` before calling this function.
         * @param namespace_ Namespace to inspect
         * @returns Comma-separated list of paths to shared libraries,   or `null` if none are associated
         */
        get_shared_library(namespace_: string): string | null;
        /**
         * If namespace `namespace_` is loaded, return the full path to the
         * .typelib file it was loaded from.  If the typelib for
         * namespace `namespace_` was included in a shared library, return
         * the special string "&lt;builtin&gt;".
         * @param namespace_ GI namespace to use, e.g. "Gtk"
         * @returns Filesystem path (or $lt;builtin$gt;) if successful, `null` if namespace is not loaded
         */
        get_typelib_path(namespace_: string): string;
        /**
         * This function returns the loaded version associated with the given
         * namespace `namespace_`.
         *
         * Note: The namespace must have already been loaded using a function
         * such as `g_irepository_require()` before calling this function.
         * @param namespace_ Namespace to inspect
         * @returns Loaded version
         */
        get_version(namespace_: string): string;
        /**
         * Check whether a particular namespace (and optionally, a specific
         * version thereof) is currently loaded.  This function is likely to
         * only be useful in unusual circumstances; in order to act upon
         * metadata in the namespace, you should call `g_irepository_require()`
         * instead which will ensure the namespace is loaded, and return as
         * quickly as this function will if it has already been loaded.
         * @param namespace_ Namespace of interest
         * @param version Required version, may be `null` for latest
         * @returns `true` if namespace-version is loaded, `false` otherwise
         */
        is_registered(namespace_: string, version?: string | null): boolean;
        /**
         * TODO
         * @param typelib TODO
         * @param flags TODO
         */
        load_typelib(typelib: Typelib, flags: RepositoryLoadFlags | null): string;
        /**
         * Force the namespace `namespace_` to be loaded if it isn't already.
         * If `namespace_` is not loaded, this function will search for a
         * ".typelib" file using the repository search path.  In addition, a
         * version `version` of namespace may be specified.  If `version` is
         * not specified, the latest will be used.
         * @param namespace_ GI namespace to use, e.g. "Gtk"
         * @param version Version of namespace, may be `null` for latest
         * @param flags Set of %GIRepositoryLoadFlags, may be 0
         * @returns a pointer to the {@link GIRepository.Typelib} if successful, `null` otherwise
         */
        require(namespace_: string, version: string | null, flags: RepositoryLoadFlags | null): Typelib;
        /**
         * Force the namespace `namespace_` to be loaded if it isn't already.
         * If `namespace_` is not loaded, this function will search for a
         * ".typelib" file within the private directory only. In addition, a
         * version `version` of namespace should be specified.  If `version` is
         * not specified, the latest will be used.
         * @param typelib_dir Private directory where to find the requested typelib
         * @param namespace_ GI namespace to use, e.g. "Gtk"
         * @param version Version of namespace, may be `null` for latest
         * @param flags Set of %GIRepositoryLoadFlags, may be 0
         * @returns a pointer to the {@link GIRepository.Typelib} if successful, `null` otherwise
         */
        require_private(
            typelib_dir: string,
            namespace_: string,
            version: string | null,
            flags: RepositoryLoadFlags | null,
        ): Typelib;
    }

    /**
     * An opaque structure used to iterate over attributes
     * in a {@link GIRepository.BaseInfo} struct.
     * @gir-type Struct
     */
    class AttributeIter {
        static $gtype: GObject.GType<AttributeIter>;

        // Constructors

        constructor(properties?: Partial<{}>);
    }

    /**
     * GIBaseInfo is the common base struct of all other Info structs
     * accessible through the {@link GIRepository.Repository} API.
     *
     * All info structures can be cast to a {@link GIRepository.BaseInfo}, for instance:
     *
     *
     * ```c
     *    GIFunctionInfo *function_info = ...;
     *    GIBaseInfo *info = (GIBaseInfo *) function_info;
     * ```
     *
     *
     * Most {@link GIRepository.Repository} APIs returning a {@link GIRepository.BaseInfo} is actually
     * creating a new struct; in other words, `g_base_info_unref()` has to
     * be called when done accessing the data.
     *
     * {@link GIRepository.BaseInfo} structuress are normally accessed by calling either
     * `g_irepository_find_by_name()`, `g_irepository_find_by_gtype()` or
     * `g_irepository_get_info()`.
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
     * ```
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
     * @gir-type Struct
     */
    class BaseInfo {
        static $gtype: GObject.GType<BaseInfo>;

        // Constructors

        constructor(properties?: Partial<{}>);

        // Methods

        /**
         * Compare two {@link GIRepository.BaseInfo}.
         *
         * Using pointer comparison is not practical since many functions return
         * different instances of {@link GIRepository.BaseInfo} that refers to the same part of the
         * TypeLib; use this function instead to do {@link GIRepository.BaseInfo} comparisons.
         * @param info2 a {@link GIRepository.BaseInfo}
         * @returns `true` if and only if `info1` equals `info2`.
         */
        equal(info2: BaseInfo): boolean;
        /**
         * Retrieve an arbitrary attribute associated with this node.
         * @param name a freeform string naming an attribute
         * @returns The value of the attribute, or `null` if no such attribute exists
         */
        get_attribute(name: string): string;
        /**
         * Obtain the container of the `info`. The container is the parent
         * GIBaseInfo. For instance, the parent of a {@link GIRepository.FunctionInfo} is an
         * {@link GIRepository.ObjectInfo} or {@link GIRepository.InterfaceInfo}.
         * @returns the container
         */
        get_container(): BaseInfo;
        /**
         * Obtain the name of the `info`. What the name represents depends on
         * the {@link GIRepository.InfoType} of the `info`. For instance for {@link GIRepository.FunctionInfo} it is
         * the name of the function.
         * @returns the name of `info` or `null` if it lacks a name.
         */
        get_name(): string;
        /**
         * Obtain the namespace of `info`.
         * @returns the namespace
         */
        get_namespace(): string;
        /**
         * Obtain the info type of the GIBaseInfo.
         * @returns the info type of `info`
         */
        get_type(): InfoType;
        /**
         * Obtain the typelib this `info` belongs to
         * @returns the typelib.
         */
        get_typelib(): Typelib;
        /**
         * Obtain whether the `info` is represents a metadata which is
         * deprecated or not.
         * @returns `true` if deprecated
         */
        is_deprecated(): boolean;
        /**
         * Iterate over all attributes associated with this node.  The iterator
         * structure is typically stack allocated, and must have its first
         * member initialized to `null`.  Attributes are arbitrary namespaced key–value
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
         * @param iterator a {@link GIRepository.AttributeIter} structure, must be initialized; see below
         * @returns `true` if there are more attributes
         */
        iterate_attributes(iterator: AttributeIter): [boolean, AttributeIter, string, string];
        /**
         * Increases the reference count of `info`.
         * @returns the same `info`.
         */
        ref(): BaseInfo;
        /**
         * Decreases the reference count of `info`. When its reference count
         * drops to 0, the info is freed.
         */
        unref(): void;
    }

    /**
     * @gir-type Alias
     */
    type RepositoryClass = typeof Repository;
    /**
     * @gir-type Struct
     */
    abstract class RepositoryPrivate {
        static $gtype: GObject.GType<RepositoryPrivate>;
    }

    /**
     * TODO
     * @gir-type Struct
     */
    abstract class Typelib {
        static $gtype: GObject.GType<Typelib>;

        // Methods

        free(): void;
        get_namespace(): string;
        /**
         * @param symbol_name
         * @param symbol
         */
        symbol(symbol_name: string, symbol?: any | null): boolean;
    }

    /**
     * Represents a unresolved type in a typelib.
     * @gir-type Struct
     */
    abstract class UnresolvedInfo {
        static $gtype: GObject.GType<UnresolvedInfo>;
    }

    /**
     * Stores an argument of varying type
     * @gir-type Struct
     */
    class Argument {
        static $gtype: GObject.GType<Argument>;

        // Fields

        v_boolean: boolean;
        v_int8: number;
        v_uint8: number;
        v_int16: number;
        v_uint16: number;
        v_int32: number;
        v_uint32: number;
        v_int64: number;
        v_uint64: number;
        v_float: number;
        v_double: number;
        v_short: number;
        v_ushort: number;
        v_int: number;
        v_uint: number;
        v_long: number;
        v_ulong: number;
        v_ssize: number;
        v_size: number;
        v_string: string;
        v_pointer: any;

        // Constructors

        constructor(
            properties?: Partial<{
                v_boolean: boolean;
                v_int8: number;
                v_uint8: number;
                v_int16: number;
                v_uint16: number;
                v_int32: number;
                v_uint32: number;
                v_int64: number;
                v_uint64: number;
                v_float: number;
                v_double: number;
                v_short: number;
                v_ushort: number;
                v_int: number;
                v_uint: number;
                v_long: number;
                v_ulong: number;
                v_ssize: number;
                v_size: number;
                v_string: string;
                v_pointer: any;
            }>,
        );
    }

    /**
     * Represents an argument.
     * @gir-type Alias
     */
    type ArgInfo = BaseInfo;
    /**
     * Represents a callable, either {@link GIRepository.FunctionInfo}, {@link GIRepository.CallbackInfo} or
     * {@link GIRepository.VFuncInfo}.
     * @gir-type Alias
     */
    type CallableInfo = BaseInfo;
    /**
     * Represents a callback, eg arguments and return value.
     * @gir-type Alias
     */
    type CallbackInfo = BaseInfo;
    /**
     * Represents a constant.
     * @gir-type Alias
     */
    type ConstantInfo = BaseInfo;
    /**
     * Represents an enum or a flag.
     * @gir-type Alias
     */
    type EnumInfo = BaseInfo;
    /**
     * Represents a field of a {@link GIRepository.StructInfo} or a {@link GIRepository.UnionInfo}.
     * @gir-type Alias
     */
    type FieldInfo = BaseInfo;
    /**
     * Represents a function, eg arguments and return value.
     * @gir-type Alias
     */
    type FunctionInfo = BaseInfo;
    /**
     * Represents an interface.
     * @gir-type Alias
     */
    type InterfaceInfo = BaseInfo;
    /**
     * Represents an object.
     * @gir-type Alias
     */
    type ObjectInfo = BaseInfo;
    /**
     * Represents a property of a {@link GIRepository.ObjectInfo} or a {@link GIRepository.InterfaceInfo}.
     * @gir-type Alias
     */
    type PropertyInfo = BaseInfo;
    /**
     * Represent a registered type.
     * @gir-type Alias
     */
    type RegisteredTypeInfo = BaseInfo;
    /**
     * Represents a signal.
     * @gir-type Alias
     */
    type SignalInfo = BaseInfo;
    /**
     * Represents a struct.
     * @gir-type Alias
     */
    type StructInfo = BaseInfo;
    /**
     * Represents type information, direction, transfer etc.
     * @gir-type Alias
     */
    type TypeInfo = BaseInfo;
    /**
     * Represents a union.
     * @gir-type Alias
     */
    type UnionInfo = BaseInfo;
    /**
     * Represents a virtual function.
     * @gir-type Alias
     */
    type VFuncInfo = BaseInfo;
    /**
     * Represents a enum value of a {@link GIRepository.EnumInfo}.
     * @gir-type Alias
     */
    type ValueInfo = BaseInfo;
    /**
     * Name of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
     */
    const __name__: string;
    /**
     * Version of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
     */
    const __version__: string;
}

export default GIRepository;

// END
