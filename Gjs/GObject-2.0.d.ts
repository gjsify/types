/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GObject-2.0
 */

import type * as Gjs from './Gjs';
import type GLib from './GLib-2.0';

export namespace GObject {

/**
 * Flags to be passed to g_object_bind_property() or
 * g_object_bind_property_full().
 * 
 * This enumeration can be extended at later date.
 */
enum BindingFlags {
    /**
     * The default binding; if the source property
     *   changes, the target property is updated with its value.
     */
    DEFAULT,
    /**
     * Bidirectional binding; if either the
     *   property of the source or the property of the target changes,
     *   the other is updated.
     */
    BIDIRECTIONAL,
    /**
     * Synchronize the values of the source and
     *   target properties when creating the binding; the direction of
     *   the synchronization is always from the source to the target.
     */
    SYNC_CREATE,
    /**
     * If the two properties being bound are
     *   booleans, setting one to %TRUE will result in the other being
     *   set to %FALSE and vice versa. This flag will only work for
     *   boolean properties, and cannot be used when passing custom
     *   transformation functions to g_object_bind_property_full().
     */
    INVERT_BOOLEAN,
}
/**
 * The connection flags are used to specify the behaviour of a signal's
 * connection.
 */
enum ConnectFlags {
    /**
     * whether the handler should be called before or after the
     *  default handler of the signal.
     */
    AFTER,
    /**
     * whether the instance and data should be swapped when
     *  calling the handler; see g_signal_connect_swapped() for an example.
     */
    SWAPPED,
}
/**
 * Through the #GParamFlags flag values, certain aspects of parameters
 * can be configured.
 * 
 * See also: %G_PARAM_STATIC_STRINGS
 */
enum ParamFlags {
    /**
     * the parameter is readable
     */
    READABLE,
    /**
     * the parameter is writable
     */
    WRITABLE,
    /**
     * alias for %G_PARAM_READABLE | %G_PARAM_WRITABLE
     */
    READWRITE,
    /**
     * the parameter will be set upon object construction
     */
    CONSTRUCT,
    /**
     * the parameter can only be set upon object construction
     */
    CONSTRUCT_ONLY,
    /**
     * upon parameter conversion (see g_param_value_convert())
     *  strict validation is not required
     */
    LAX_VALIDATION,
    /**
     * the string used as name when constructing the
     *  parameter is guaranteed to remain valid and
     *  unmodified for the lifetime of the parameter.
     *  Since 2.8
     */
    STATIC_NAME,
    /**
     * internal
     */
    PRIVATE,
    /**
     * the string used as nick when constructing the
     *  parameter is guaranteed to remain valid and
     *  unmmodified for the lifetime of the parameter.
     *  Since 2.8
     */
    STATIC_NICK,
    /**
     * the string used as blurb when constructing the
     *  parameter is guaranteed to remain valid and
     *  unmodified for the lifetime of the parameter.
     *  Since 2.8
     */
    STATIC_BLURB,
    /**
     * calls to g_object_set_property() for this
     *   property will not automatically result in a "notify" signal being
     *   emitted: the implementation must call g_object_notify() themselves
     *   in case the property actually changes.  Since: 2.42.
     */
    EXPLICIT_NOTIFY,
    /**
     * the parameter is deprecated and will be removed
     *  in a future version. A warning will be generated if it is used
     *  while running with G_ENABLE_DIAGNOSTIC=1.
     *  Since 2.26
     */
    DEPRECATED,
}
/**
 * The signal flags are used to specify a signal's behaviour.
 */
enum SignalFlags {
    /**
     * Invoke the object method handler in the first emission stage.
     */
    RUN_FIRST,
    /**
     * Invoke the object method handler in the third emission stage.
     */
    RUN_LAST,
    /**
     * Invoke the object method handler in the last emission stage.
     */
    RUN_CLEANUP,
    /**
     * Signals being emitted for an object while currently being in
     *  emission for this very object will not be emitted recursively,
     *  but instead cause the first emission to be restarted.
     */
    NO_RECURSE,
    /**
     * This signal supports "::detail" appendices to the signal name
     *  upon handler connections and emissions.
     */
    DETAILED,
    /**
     * Action signals are signals that may freely be emitted on alive
     *  objects from user code via g_signal_emit() and friends, without
     *  the need of being embedded into extra code that performs pre or
     *  post emission adjustments on the object. They can also be thought
     *  of as object methods which can be called generically by
     *  third-party code.
     */
    ACTION,
    /**
     * No emissions hooks are supported for this signal.
     */
    NO_HOOKS,
    /**
     * Varargs signal emission will always collect the
     *   arguments, even if there are no signal handlers connected.  Since 2.30.
     */
    MUST_COLLECT,
    /**
     * The signal is deprecated and will be removed
     *   in a future version. A warning will be generated if it is connected while
     *   running with G_ENABLE_DIAGNOSTIC=1.  Since 2.32.
     */
    DEPRECATED,
    /**
     * Only used in #GSignalAccumulator accumulator
     *   functions for the #GSignalInvocationHint::run_type field to mark the first
     *   call to the accumulator function for a signal emission.  Since 2.68.
     */
    ACCUMULATOR_FIRST_RUN,
}
/**
 * The match types specify what g_signal_handlers_block_matched(),
 * g_signal_handlers_unblock_matched() and g_signal_handlers_disconnect_matched()
 * match signals by.
 */
enum SignalMatchType {
    /**
     * The signal id must be equal.
     */
    ID,
    /**
     * The signal detail must be equal.
     */
    DETAIL,
    /**
     * The closure must be the same.
     */
    CLOSURE,
    /**
     * The C closure callback must be the same.
     */
    FUNC,
    /**
     * The closure data must be the same.
     */
    DATA,
    /**
     * Only unblocked signals may be matched.
     */
    UNBLOCKED,
}
/**
 * These flags used to be passed to g_type_init_with_debug_flags() which
 * is now deprecated.
 * 
 * If you need to enable debugging features, use the GOBJECT_DEBUG
 * environment variable.
 */
enum TypeDebugFlags {
    /**
     * Print no messages
     */
    NONE,
    /**
     * Print messages about object bookkeeping
     */
    OBJECTS,
    /**
     * Print messages about signal emissions
     */
    SIGNALS,
    /**
     * Keep a count of instances of each type
     */
    INSTANCE_COUNT,
    /**
     * Mask covering all debug flags
     */
    MASK,
}
/**
 * Bit masks used to check or determine characteristics of a type.
 */
enum TypeFlags {
    /**
     * Indicates an abstract type. No instances can be
     *  created for an abstract type
     */
    ABSTRACT,
    /**
     * Indicates an abstract value type, i.e. a type
     *  that introduces a value table, but can't be used for
     *  g_value_init()
     */
    VALUE_ABSTRACT,
    /**
     * Indicates a final type. A final type is a non-derivable
     *  leaf node in a deep derivable type hierarchy tree. Since: 2.70
     */
    FINAL,
}
/**
 * Bit masks used to check or determine specific characteristics of a
 * fundamental type.
 */
enum TypeFundamentalFlags {
    /**
     * Indicates a classed type
     */
    CLASSED,
    /**
     * Indicates an instantiatable type (implies classed)
     */
    INSTANTIATABLE,
    /**
     * Indicates a flat derivable type
     */
    DERIVABLE,
    /**
     * Indicates a deep derivable type (implies derivable)
     */
    DEEP_DERIVABLE,
}
/**
 * Mask containing the bits of #GParamSpec.flags which are reserved for GLib.
 */
const PARAM_MASK: number
/**
 * #GParamFlags value alias for %G_PARAM_STATIC_NAME | %G_PARAM_STATIC_NICK | %G_PARAM_STATIC_BLURB.
 * 
 * Since 2.13.0
 */
const PARAM_STATIC_STRINGS: number
/**
 * Minimum shift count to be used for user defined flags, to be stored in
 * #GParamSpec.flags. The maximum allowed is 10.
 */
const PARAM_USER_SHIFT: number
/**
 * A mask for all #GSignalFlags bits.
 */
const SIGNAL_FLAGS_MASK: number
/**
 * A mask for all #GSignalMatchType bits.
 */
const SIGNAL_MATCH_MASK: number
/**
 * A bit in the type number that's supposed to be left untouched.
 */
const TYPE_FLAG_RESERVED_ID_BIT: GLib.Type
/**
 * An integer constant that represents the number of identifiers reserved
 * for types that are assigned at compile-time.
 */
const TYPE_FUNDAMENTAL_MAX: number
/**
 * Shift value used in converting numbers to type IDs.
 */
const TYPE_FUNDAMENTAL_SHIFT: number
/**
 * First fundamental type number to create a new fundamental type id with
 * G_TYPE_MAKE_FUNDAMENTAL() reserved for BSE.
 */
const TYPE_RESERVED_BSE_FIRST: number
/**
 * Last fundamental type number reserved for BSE.
 */
const TYPE_RESERVED_BSE_LAST: number
/**
 * First fundamental type number to create a new fundamental type id with
 * G_TYPE_MAKE_FUNDAMENTAL() reserved for GLib.
 */
const TYPE_RESERVED_GLIB_FIRST: number
/**
 * Last fundamental type number reserved for GLib.
 */
const TYPE_RESERVED_GLIB_LAST: number
/**
 * First available fundamental type number to create new fundamental
 * type id with G_TYPE_MAKE_FUNDAMENTAL().
 */
const TYPE_RESERVED_USER_FIRST: number
/**
 * For string values, indicates that the string contained is canonical and will
 * exist for the duration of the process. See g_value_set_interned_string().
 */
const VALUE_INTERNED_STRING: number
/**
 * If passed to G_VALUE_COLLECT(), allocated data won't be copied
 * but used verbatim. This does not affect ref-counted types like
 * objects. This does not affect usage of g_value_copy(), the data will
 * be copied if it is not ref-counted.
 */
const VALUE_NOCOPY_CONTENTS: number
function boxed_copy(boxed_type: Type, src_boxed: object): object
function boxed_free(boxed_type: Type, boxed: object): void
function cclosure_marshal_BOOLEAN__BOXED_BOXED(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_BOOLEAN__FLAGS(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_STRING__OBJECT_POINTER(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_VOID__BOOLEAN(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_VOID__BOXED(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_VOID__CHAR(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_VOID__DOUBLE(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_VOID__ENUM(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_VOID__FLAGS(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_VOID__FLOAT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_VOID__INT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_VOID__LONG(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_VOID__OBJECT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_VOID__PARAM(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_VOID__POINTER(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_VOID__STRING(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_VOID__UCHAR(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_VOID__UINT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_VOID__UINT_POINTER(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_VOID__ULONG(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_VOID__VARIANT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_VOID__VOID(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_generic(closure: Function, return_gvalue: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function clear_signal_handler(handler_id_ptr: number, instance: Object): void
function enum_complete_type_info(g_enum_type: Type, const_values: EnumValue): /* info */ TypeInfo
function enum_get_value(enum_class: EnumClass, value: number): EnumValue | null
function enum_get_value_by_name(enum_class: EnumClass, name: string): EnumValue | null
function enum_get_value_by_nick(enum_class: EnumClass, nick: string): EnumValue | null
function enum_register_static(name: string, const_static_values: EnumValue): Type
function enum_to_string(g_enum_type: Type, value: number): string
function flags_complete_type_info(g_flags_type: Type, const_values: FlagsValue): /* info */ TypeInfo
function flags_get_first_value(flags_class: FlagsClass, value: number): FlagsValue | null
function flags_get_value_by_name(flags_class: FlagsClass, name: string): FlagsValue | null
function flags_get_value_by_nick(flags_class: FlagsClass, nick: string): FlagsValue | null
function flags_register_static(name: string, const_static_values: FlagsValue): Type
function flags_to_string(flags_type: Type, value: number): string
function gtype_get_type(): Type
function param_spec_boolean(name: string, nick: string, blurb: string, default_value: boolean, flags: ParamFlags): ParamSpec
function param_spec_boxed(name: string, nick: string, blurb: string, boxed_type: Type, flags: ParamFlags): ParamSpec
function param_spec_char(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
function param_spec_double(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
function param_spec_enum(name: string, nick: string, blurb: string, enum_type: Type, default_value: number, flags: ParamFlags): ParamSpec
function param_spec_flags(name: string, nick: string, blurb: string, flags_type: Type, default_value: number, flags: ParamFlags): ParamSpec
function param_spec_float(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
function param_spec_gtype(name: string, nick: string, blurb: string, is_a_type: Type, flags: ParamFlags): ParamSpec
function param_spec_int(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
function param_spec_int64(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
function param_spec_long(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
function param_spec_object(name: string, nick: string, blurb: string, object_type: Type, flags: ParamFlags): ParamSpec
function param_spec_param(name: string, nick: string, blurb: string, param_type: Type, flags: ParamFlags): ParamSpec
function param_spec_pointer(name: string, nick: string, blurb: string, flags: ParamFlags): ParamSpec
function param_spec_string(name: string, nick: string, blurb: string, default_value: string | null, flags: ParamFlags): ParamSpec
function param_spec_uchar(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
function param_spec_uint(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
function param_spec_uint64(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
function param_spec_ulong(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
function param_spec_unichar(name: string, nick: string, blurb: string, default_value: number, flags: ParamFlags): ParamSpec
function param_spec_variant(name: string, nick: string, blurb: string, type: GLib.VariantType, default_value: GLib.Variant | null, flags: ParamFlags): ParamSpec
function param_type_register_static(name: string, pspec_info: ParamSpecTypeInfo): Type
function param_value_convert(pspec: ParamSpec, src_value: any, dest_value: any, strict_validation: boolean): boolean
function param_value_defaults(pspec: ParamSpec, value: any): boolean
function param_value_set_default(pspec: ParamSpec, value: any): void
function param_value_validate(pspec: ParamSpec, value: any): boolean
function param_values_cmp(pspec: ParamSpec, value1: any, value2: any): number
function pointer_type_register_static(name: string): Type
function signal_accumulator_first_wins(ihint: SignalInvocationHint, return_accu: any, handler_return: any, dummy?: object | null): boolean
function signal_accumulator_true_handled(ihint: SignalInvocationHint, return_accu: any, handler_return: any, dummy?: object | null): boolean
function signal_add_emission_hook(signal_id: number, detail: GLib.Quark): number
function signal_chain_from_overridden(instance_and_params: any[], return_value: any): void
function signal_connect_closure(instance: Object, detailed_signal: string, closure: Function, after: boolean): number
function signal_connect_closure_by_id(instance: Object, signal_id: number, detail: GLib.Quark, closure: Function, after: boolean): number
function signal_emitv(instance_and_params: any[], signal_id: number, detail: GLib.Quark, return_value?: any | null): /* return_value */ any | null
function signal_get_invocation_hint(instance: Object): SignalInvocationHint | null
function signal_handler_block(instance: Object, handler_id: number): void
function signal_handler_disconnect(instance: Object, handler_id: number): void
function signal_handler_find(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, func?: object | null, data?: object | null): number
function signal_handler_is_connected(instance: Object, handler_id: number): boolean
function signal_handler_unblock(instance: Object, handler_id: number): void
function signal_handlers_block_matched(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, func?: object | null, data?: object | null): number
function signal_handlers_destroy(instance: Object): void
function signal_handlers_disconnect_matched(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, func?: object | null, data?: object | null): number
function signal_handlers_unblock_matched(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, func?: object | null, data?: object | null): number
function signal_has_handler_pending(instance: Object, signal_id: number, detail: GLib.Quark, may_be_blocked: boolean): boolean
function signal_is_valid_name(name: string): boolean
function signal_list_ids(itype: Type): number[]
function signal_lookup(name: string, itype: Type): number
function signal_name(signal_id: number): string | null
function signal_override_class_closure(signal_id: number, instance_type: Type, class_closure: Function): void
function signal_parse_name(detailed_signal: string, itype: Type, force_detail_quark: boolean): [ /* returnType */ boolean, /* signal_id_p */ number, /* detail_p */ GLib.Quark ]
function signal_query(signal_id: number): /* query */ SignalQuery
function signal_remove_emission_hook(signal_id: number, hook_id: number): void
function signal_set_va_marshaller(signal_id: number, instance_type: Type, va_marshaller: SignalCVaMarshaller): void
function signal_stop_emission(instance: Object, signal_id: number, detail: GLib.Quark): void
function signal_stop_emission_by_name(instance: Object, detailed_signal: string): void
function signal_type_cclosure_new(itype: Type, struct_offset: number): Function
function source_set_closure(source: GLib.Source, closure: Function): void
function source_set_dummy_callback(source: GLib.Source): void
function strdup_value_contents(value: any): string
function type_add_class_private(class_type: Type, private_size: number): void
function type_add_instance_private(class_type: Type, private_size: number): number
function type_add_interface_dynamic(instance_type: Type, interface_type: Type, plugin: TypePlugin): void
function type_add_interface_static(instance_type: Type, interface_type: Type, info: InterfaceInfo): void
function type_check_class_is_a(g_class: TypeClass, is_a_type: Type): boolean
function type_check_instance(instance: TypeInstance): boolean
function type_check_instance_is_a(instance: TypeInstance, iface_type: Type): boolean
function type_check_instance_is_fundamentally_a(instance: TypeInstance, fundamental_type: Type): boolean
function type_check_is_value_type(type: Type): boolean
function type_check_value(value: any): boolean
function type_check_value_holds(value: any, type: Type): boolean
function type_children(type: Type): Type[]
function type_class_adjust_private_offset(g_class: object | null, private_size_or_offset: number): void
function type_class_peek(type: Type): TypeClass
function type_class_peek_static(type: Type): TypeClass
function type_class_ref(type: Type): TypeClass
function type_default_interface_peek(g_type: Type): TypeInterface
function type_default_interface_ref(g_type: Type): TypeInterface
function type_default_interface_unref(g_iface: TypeInterface): void
function type_depth(type: Type): number
function type_ensure(type: Type): void
function type_free_instance(instance: TypeInstance): void
function type_from_name(name: string): Type
function type_fundamental(type_id: Type): Type
function type_fundamental_next(): Type
function type_get_instance_count(type: Type): number
function type_get_plugin(type: Type): TypePlugin
function type_get_qdata(type: Type, quark: GLib.Quark): object | null
function type_get_type_registration_serial(): number
function type_init(): void
function type_init_with_debug_flags(debug_flags: TypeDebugFlags): void
function type_interface_add_prerequisite(interface_type: Type, prerequisite_type: Type): void
function type_interface_get_plugin(instance_type: Type, interface_type: Type): TypePlugin
function type_interface_instantiatable_prerequisite(interface_type: Type): Type
function type_interface_peek(instance_class: TypeClass, iface_type: Type): TypeInterface
function type_interface_prerequisites(interface_type: Type): Type[]
function type_interfaces(type: Type): Type[]
function type_is_a(type: Type, is_a_type: Type): boolean
function type_name(type: Type): string
function type_name_from_class(g_class: TypeClass): string
function type_name_from_instance(instance: TypeInstance): string
function type_next_base(leaf_type: Type, root_type: Type): Type
function type_parent(type: Type): Type
function type_qname(type: Type): GLib.Quark
function type_query(type: Type): /* query */ TypeQuery
function type_register_dynamic(parent_type: Type, type_name: string, plugin: TypePlugin, flags: TypeFlags): Type
function type_register_fundamental(type_id: Type, type_name: string, info: TypeInfo, finfo: TypeFundamentalInfo, flags: TypeFlags): Type
function type_register_static(parent_type: Type, type_name: string, info: TypeInfo, flags: TypeFlags): Type
function type_set_qdata(type: Type, quark: GLib.Quark, data?: object | null): void
function type_test_flags(type: Type, flags: number): boolean
function value_type_compatible(src_type: Type, dest_type: Type): boolean
function value_type_transformable(src_type: Type, dest_type: Type): boolean
/**
 * A callback function used by the type system to finalize those portions
 * of a derived types class structure that were setup from the corresponding
 * GBaseInitFunc() function.
 * 
 * Class finalization basically works the inverse way in which class
 * initialization is performed.
 * 
 * See GClassInitFunc() for a discussion of the class initialization process.
 */
interface BaseFinalizeFunc {
    (g_class: TypeClass): void
}
/**
 * A callback function used by the type system to do base initialization
 * of the class structures of derived types.
 * 
 * This function is called as part of the initialization process of all derived
 * classes and should reallocate or reset all dynamic class members copied over
 * from the parent class.
 * 
 * For example, class members (such as strings) that are not sufficiently
 * handled by a plain memory copy of the parent class into the derived class
 * have to be altered. See GClassInitFunc() for a discussion of the class
 * initialization process.
 */
interface BaseInitFunc {
    (g_class: TypeClass): void
}
/**
 * A function to be called to transform `from_value` to `to_value`.
 * 
 * If this is the `transform_to` function of a binding, then `from_value`
 * is the `source_property` on the `source` object, and `to_value` is the
 * `target_property` on the `target` object. If this is the
 * `transform_from` function of a %G_BINDING_BIDIRECTIONAL binding,
 * then those roles are reversed.
 */
interface BindingTransformFunc {
    (binding: Binding, from_value: any, to_value: any): boolean
}
/**
 * This function is provided by the user and should produce a copy
 * of the passed in boxed structure.
 */
interface BoxedCopyFunc {
    (boxed: object): object
}
/**
 * This function is provided by the user and should free the boxed
 * structure passed.
 */
interface BoxedFreeFunc {
    (boxed: object): void
}
/**
 * The type used for callback functions in structure definitions and function
 * signatures.
 * 
 * This doesn't mean that all callback functions must take no  parameters and
 * return void. The required signature of a callback function is determined by
 * the context in which is used (e.g. the signal to which it is connected).
 * 
 * Use G_CALLBACK() to cast the callback function to a #GCallback.
 */
interface Callback {
    (): void
}
/**
 * A callback function used by the type system to finalize a class.
 * 
 * This function is rarely needed, as dynamically allocated class resources
 * should be handled by GBaseInitFunc() and GBaseFinalizeFunc().
 * 
 * Also, specification of a GClassFinalizeFunc() in the #GTypeInfo
 * structure of a static type is invalid, because classes of static types
 * will never be finalized (they are artificially kept alive when their
 * reference count drops to zero).
 */
interface ClassFinalizeFunc {
    (g_class: TypeClass, class_data?: object | null): void
}
/**
 * A callback function used by the type system to initialize the class
 * of a specific type.
 * 
 * This function should initialize all static class members.
 * 
 * The initialization process of a class involves:
 * 
 * - Copying common members from the parent class over to the
 *   derived class structure.
 * - Zero initialization of the remaining members not copied
 *   over from the parent class.
 * - Invocation of the GBaseInitFunc() initializers of all parent
 *   types and the class' type.
 * - Invocation of the class' GClassInitFunc() initializer.
 * 
 * Since derived classes are partially initialized through a memory copy
 * of the parent class, the general rule is that GBaseInitFunc() and
 * GBaseFinalizeFunc() should take care of necessary reinitialization
 * and release of those class members that were introduced by the type
 * that specified these GBaseInitFunc()/GBaseFinalizeFunc().
 * GClassInitFunc() should only care about initializing static
 * class members, while dynamic class members (such as allocated strings
 * or reference counted resources) are better handled by a GBaseInitFunc()
 * for this type, so proper initialization of the dynamic class members
 * is performed for class initialization of derived types as well.
 * 
 * An example may help to correspond the intend of the different class
 * initializers:
 * 
 * 
 * ```c
 * typedef struct {
 *   GObjectClass parent_class;
 *   gint         static_integer;
 *   gchar       *dynamic_string;
 * } TypeAClass;
 * static void
 * type_a_base_class_init (TypeAClass *class)
 * {
 *   class->dynamic_string = g_strdup ("some string");
 * }
 * static void
 * type_a_base_class_finalize (TypeAClass *class)
 * {
 *   g_free (class->dynamic_string);
 * }
 * static void
 * type_a_class_init (TypeAClass *class)
 * {
 *   class->static_integer = 42;
 * }
 * 
 * typedef struct {
 *   TypeAClass   parent_class;
 *   gfloat       static_float;
 *   GString     *dynamic_gstring;
 * } TypeBClass;
 * static void
 * type_b_base_class_init (TypeBClass *class)
 * {
 *   class->dynamic_gstring = g_string_new ("some other string");
 * }
 * static void
 * type_b_base_class_finalize (TypeBClass *class)
 * {
 *   g_string_free (class->dynamic_gstring);
 * }
 * static void
 * type_b_class_init (TypeBClass *class)
 * {
 *   class->static_float = 3.14159265358979323846;
 * }
 * ```
 * 
 * 
 * Initialization of TypeBClass will first cause initialization of
 * TypeAClass (derived classes reference their parent classes, see
 * g_type_class_ref() on this).
 * 
 * Initialization of TypeAClass roughly involves zero-initializing its fields,
 * then calling its GBaseInitFunc() type_a_base_class_init() to allocate
 * its dynamic members (dynamic_string), and finally calling its GClassInitFunc()
 * type_a_class_init() to initialize its static members (static_integer).
 * The first step in the initialization process of TypeBClass is then
 * a plain memory copy of the contents of TypeAClass into TypeBClass and
 * zero-initialization of the remaining fields in TypeBClass.
 * The dynamic members of TypeAClass within TypeBClass now need
 * reinitialization which is performed by calling type_a_base_class_init()
 * with an argument of TypeBClass.
 * 
 * After that, the GBaseInitFunc() of TypeBClass, type_b_base_class_init()
 * is called to allocate the dynamic members of TypeBClass (dynamic_gstring),
 * and finally the GClassInitFunc() of TypeBClass, type_b_class_init(),
 * is called to complete the initialization process with the static members
 * (static_float).
 * 
 * Corresponding finalization counter parts to the GBaseInitFunc() functions
 * have to be provided to release allocated resources at class finalization
 * time.
 */
interface ClassInitFunc {
    (g_class: TypeClass, class_data?: object | null): void
}
/**
 * The type used for marshaller functions.
 */
interface ClosureMarshal {
    (closure: Function, return_value: any | null, param_values: any[], invocation_hint?: object | null, marshal_data?: object | null): void
}
/**
 * The type used for the various notification callbacks which can be registered
 * on closures.
 */
interface ClosureNotify {
    (data: object | null, closure: Function): void
}
/**
 * A callback function used by the type system to initialize a new
 * instance of a type.
 * 
 * This function initializes all instance members and allocates any resources
 * required by it.
 * 
 * Initialization of a derived instance involves calling all its parent
 * types instance initializers, so the class member of the instance
 * is altered during its initialization to always point to the class that
 * belongs to the type the current initializer was introduced for.
 * 
 * The extended members of `instance` are guaranteed to have been filled with
 * zeros before this function is called.
 */
interface InstanceInitFunc {
    (instance: TypeInstance, g_class: TypeClass): void
}
/**
 * A callback function used by the type system to finalize an interface.
 * 
 * This function should destroy any internal data and release any resources
 * allocated by the corresponding GInterfaceInitFunc() function.
 */
interface InterfaceFinalizeFunc {
    (g_iface: TypeInterface, iface_data?: object | null): void
}
/**
 * A callback function used by the type system to initialize a new
 * interface.
 * 
 * This function should initialize all internal data and* allocate any
 * resources required by the interface.
 * 
 * The members of `iface_data` are guaranteed to have been filled with
 * zeros before this function is called.
 */
interface InterfaceInitFunc {
    (g_iface: TypeInterface, iface_data?: object | null): void
}
/**
 * The type of the `finalize` function of #GObjectClass.
 */
interface ObjectFinalizeFunc {
    (object: Object): void
}
/**
 * The type of the `get_property` function of #GObjectClass.
 */
interface ObjectGetPropertyFunc {
    (object: Object, property_id: number, value: any, pspec: ParamSpec): void
}
/**
 * The type of the `set_property` function of #GObjectClass.
 */
interface ObjectSetPropertyFunc {
    (object: Object, property_id: number, value: any, pspec: ParamSpec): void
}
/**
 * The signal accumulator is a special callback function that can be used
 * to collect return values of the various callbacks that are called
 * during a signal emission.
 * 
 * The signal accumulator is specified at signal creation time, if it is
 * left %NULL, no accumulation of callback return values is performed.
 * The return value of signal emissions is then the value returned by the
 * last callback.
 */
interface SignalAccumulator {
    (ihint: SignalInvocationHint, return_accu: any, handler_return: any, data?: object | null): boolean
}
/**
 * A simple function pointer to get invoked when the signal is emitted.
 * 
 * Emission hooks allow you to tie a hook to the signal type, so that it will
 * trap all emissions of that signal, from any object.
 * 
 * You may not attach these to signals created with the %G_SIGNAL_NO_HOOKS flag.
 */
interface SignalEmissionHook {
    (ihint: SignalInvocationHint, param_values: any[], data?: object | null): boolean
}
/**
 * A callback function used for notification when the state
 * of a toggle reference changes.
 * 
 * See also: g_object_add_toggle_ref()
 */
interface ToggleNotify {
    (data: object | null, object: Object, is_last_ref: boolean): void
}
/**
 * A callback function which is called when the reference count of a class
 * drops to zero.
 * 
 * It may use g_type_class_ref() to prevent the class from being freed. You
 * should not call g_type_class_unref() from a #GTypeClassCacheFunc function
 * to prevent infinite recursion, use g_type_class_unref_uncached() instead.
 * 
 * The functions have to check the class id passed in to figure
 * whether they actually want to cache the class of this type, since all
 * classes are routed through the same #GTypeClassCacheFunc chain.
 */
interface TypeClassCacheFunc {
    (cache_data: object | null, g_class: TypeClass): boolean
}
/**
 * A callback called after an interface vtable is initialized.
 * 
 * See g_type_add_interface_check().
 */
interface TypeInterfaceCheckFunc {
    (check_data: object | null, g_iface: TypeInterface): void
}
/**
 * The type of the `complete_interface_info` function of #GTypePluginClass.
 */
interface TypePluginCompleteInterfaceInfo {
    (plugin: TypePlugin, instance_type: Type, interface_type: Type, info: InterfaceInfo): void
}
/**
 * The type of the `complete_type_info` function of #GTypePluginClass.
 */
interface TypePluginCompleteTypeInfo {
    (plugin: TypePlugin, g_type: Type, info: TypeInfo, value_table: TypeValueTable): void
}
/**
 * The type of the `unuse_plugin` function of #GTypePluginClass.
 */
interface TypePluginUnuse {
    (plugin: TypePlugin): void
}
/**
 * The type of the `use_plugin` function of #GTypePluginClass, which gets called
 * to increase the use count of `plugin`.
 */
interface TypePluginUse {
    (plugin: TypePlugin): void
}
/**
 * The type of value transformation functions which can be registered with
 * g_value_register_transform_func().
 * 
 * `dest_value` will be initialized to the correct destination type.
 */
interface ValueTransform {
    (src_value: any, dest_value: any): void
}
/**
 * A #GWeakNotify function can be added to an object as a callback that gets
 * triggered when the object is finalized.
 * 
 * Since the object is already being disposed when the #GWeakNotify is called,
 * there's not much you could do with the object, apart from e.g. using its
 * address as hash-index or the like.
 * 
 * In particular, this means it’s invalid to call g_object_ref(),
 * g_weak_ref_init(), g_weak_ref_set(), g_object_add_toggle_ref(),
 * g_object_weak_ref(), g_object_add_weak_pointer() or any function which calls
 * them on the object from this callback.
 */
interface WeakNotify {
    (data: object | null, where_the_object_was: Object): void
}
class TypePlugin {
    /* Methods of GObject-2.0.GObject.TypePlugin */
    /**
     * Calls the `complete_interface_info` function from the
     * #GTypePluginClass of `plugin`. There should be no need to use this
     * function outside of the GObject type system itself.
     * @param instance_type the #GType of an instantiatable type to which the interface  is added
     * @param interface_type the #GType of the interface whose info is completed
     * @param info the #GInterfaceInfo to fill in
     */
    complete_interface_info(instance_type: Type, interface_type: Type, info: InterfaceInfo): void
    /**
     * Calls the `complete_type_info` function from the #GTypePluginClass of `plugin`.
     * There should be no need to use this function outside of the GObject
     * type system itself.
     * @param g_type the #GType whose info is completed
     * @param info the #GTypeInfo struct to fill in
     * @param value_table the #GTypeValueTable to fill in
     */
    complete_type_info(g_type: Type, info: TypeInfo, value_table: TypeValueTable): void
    /**
     * Calls the `unuse_plugin` function from the #GTypePluginClass of
     * `plugin`.  There should be no need to use this function outside of
     * the GObject type system itself.
     */
    unuse(): void
    /**
     * Calls the `use_plugin` function from the #GTypePluginClass of
     * `plugin`.  There should be no need to use this function outside of
     * the GObject type system itself.
     */
    use(): void
    static name: string
}
// Extra interfaces used to help define GObject classes in js; these
// aren't part of gi.
export interface SignalDefinition {
    flags?: SignalFlags
    accumulator: number
    return_type?: Type
    param_types?: Type[]
}

export interface MetaInfo {
    GTypeName: string
    GTypeFlags?: TypeFlags
    Implements?: Function[]
    Properties?: { [K: string]: ParamSpec }
    Signals?: { [K: string]: SignalDefinition }
    Requires?: Function[]
    CssName?: string
    Template?: string
    Children?: string[]
    InternalChildren?: string[]
}

export const GTypeName: symbol
export const requires: symbol
export const interfaces: symbol
export const properties: symbol
export const signals: symbol
export function registerClass(metaInfo: MetaInfo, cls: Function): Function
export function registerClass(cls: Function): Function
export function registerClass<T extends MetaInfo | Function>(a: T, b?: Function): Function

interface Binding_ConstructProps extends Object_ConstructProps {
    /* Constructor properties of GObject-2.0.GObject.Binding */
    /**
     * Flags to be used to control the #GBinding
     */
    flags?: BindingFlags
    /**
     * The #GObject that should be used as the source of the binding
     */
    source?: Object
    /**
     * The name of the property of #GBinding:source that should be used
     * as the source of the binding.
     * 
     * This should be in [canonical form][canonical-parameter-names] to get the
     * best performance.
     */
    source_property?: string
    /**
     * The #GObject that should be used as the target of the binding
     */
    target?: Object
    /**
     * The name of the property of #GBinding:target that should be used
     * as the target of the binding.
     * 
     * This should be in [canonical form][canonical-parameter-names] to get the
     * best performance.
     */
    target_property?: string
}
class Binding {
    /* Properties of GObject-2.0.GObject.Binding */
    /**
     * Flags to be used to control the #GBinding
     */
    readonly flags: BindingFlags
    /**
     * The #GObject that should be used as the source of the binding
     */
    readonly source: Object
    /**
     * The name of the property of #GBinding:source that should be used
     * as the source of the binding.
     * 
     * This should be in [canonical form][canonical-parameter-names] to get the
     * best performance.
     */
    readonly source_property: string
    /**
     * The #GObject that should be used as the target of the binding
     */
    readonly target: Object
    /**
     * The name of the property of #GBinding:target that should be used
     * as the target of the binding.
     * 
     * This should be in [canonical form][canonical-parameter-names] to get the
     * best performance.
     */
    readonly target_property: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: TypeInstance
    /* Methods of GObject-2.0.GObject.Binding */
    /**
     * Retrieves the #GObject instance used as the source of the binding.
     * 
     * A #GBinding can outlive the source #GObject as the binding does not hold a
     * strong reference to the source. If the source is destroyed before the
     * binding then this function will return %NULL.
     */
    dup_source(): Object | null
    /**
     * Retrieves the #GObject instance used as the target of the binding.
     * 
     * A #GBinding can outlive the target #GObject as the binding does not hold a
     * strong reference to the target. If the target is destroyed before the
     * binding then this function will return %NULL.
     */
    dup_target(): Object | null
    /**
     * Retrieves the flags passed when constructing the #GBinding.
     */
    get_flags(): BindingFlags
    /**
     * Retrieves the #GObject instance used as the source of the binding.
     * 
     * A #GBinding can outlive the source #GObject as the binding does not hold a
     * strong reference to the source. If the source is destroyed before the
     * binding then this function will return %NULL.
     * 
     * Use g_binding_dup_source() if the source or binding are used from different
     * threads as otherwise the pointer returned from this function might become
     * invalid if the source is finalized from another thread in the meantime.
     */
    get_source(): Object | null
    /**
     * Retrieves the name of the property of #GBinding:source used as the source
     * of the binding.
     */
    get_source_property(): string
    /**
     * Retrieves the #GObject instance used as the target of the binding.
     * 
     * A #GBinding can outlive the target #GObject as the binding does not hold a
     * strong reference to the target. If the target is destroyed before the
     * binding then this function will return %NULL.
     * 
     * Use g_binding_dup_target() if the target or binding are used from different
     * threads as otherwise the pointer returned from this function might become
     * invalid if the target is finalized from another thread in the meantime.
     */
    get_target(): Object | null
    /**
     * Retrieves the name of the property of #GBinding:target used as the target
     * of the binding.
     */
    get_target_property(): string
    /**
     * Explicitly releases the binding between the source and the target
     * property expressed by `binding`.
     * 
     * This function will release the reference that is being held on
     * the `binding` instance if the binding is still bound; if you want to hold on
     * to the #GBinding instance after calling g_binding_unbind(), you will need
     * to hold a reference to it.
     * 
     * Note however that this function does not take ownership of `binding,` it
     * only unrefs the reference that was initially created by
     * g_object_bind_property() and is owned by the binding.
     */
    unbind(): void
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
    bind_property(source_property: string, target: Object, target_property: string, flags: BindingFlags): Binding
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
    bind_property_full(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: Function, transform_from: Function): Binding
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
    notify_by_pspec(pspec: ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): Object
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
    ref_sink(): Object
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
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: ParamSpec): void
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
    vfunc_notify(pspec: ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: ParamSpec): void
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
    connect(sigName: "notify", callback: (($obj: Binding, pspec: ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Binding, pspec: ParamSpec) => void)): number
    emit(sigName: "notify", pspec: ParamSpec): void
    connect(sigName: "notify::flags", callback: (($obj: Binding, pspec: ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Binding, pspec: ParamSpec) => void)): number
    connect(sigName: "notify::source", callback: (($obj: Binding, pspec: ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: Binding, pspec: ParamSpec) => void)): number
    connect(sigName: "notify::source-property", callback: (($obj: Binding, pspec: ParamSpec) => void)): number
    connect_after(sigName: "notify::source-property", callback: (($obj: Binding, pspec: ParamSpec) => void)): number
    connect(sigName: "notify::target", callback: (($obj: Binding, pspec: ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: (($obj: Binding, pspec: ParamSpec) => void)): number
    connect(sigName: "notify::target-property", callback: (($obj: Binding, pspec: ParamSpec) => void)): number
    connect_after(sigName: "notify::target-property", callback: (($obj: Binding, pspec: ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Binding_ConstructProps)
    _init (config?: Binding_ConstructProps): void
    static $gtype: Type
}
interface BindingGroup_ConstructProps extends Object_ConstructProps {
    /* Constructor properties of GObject-2.0.GObject.BindingGroup */
    /**
     * The source object used for binding properties.
     */
    source?: Object
}
class BindingGroup {
    /* Properties of GObject-2.0.GObject.BindingGroup */
    /**
     * The source object used for binding properties.
     */
    source: Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: TypeInstance
    /* Methods of GObject-2.0.GObject.BindingGroup */
    /**
     * Creates a binding between `source_property` on the source object
     * and `target_property` on `target`. Whenever the `source_property`
     * is changed the `target_property` is updated using the same value.
     * The binding flag %G_BINDING_SYNC_CREATE is automatically specified.
     * 
     * See g_object_bind_property() for more information.
     * @param source_property the property on the source to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags the flags used to create the #GBinding
     */
    bind(source_property: string, target: Object, target_property: string, flags: BindingFlags): void
    /**
     * Creates a binding between `source_property` on the source object and
     * `target_property` on `target,` allowing you to set the transformation
     * functions to be used by the binding. The binding flag
     * %G_BINDING_SYNC_CREATE is automatically specified.
     * 
     * This function is the language bindings friendly version of
     * g_binding_group_bind_property_full(), using #GClosures
     * instead of function pointers.
     * 
     * See g_object_bind_property_with_closures() for more information.
     * @param source_property the property on the source to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags the flags used to create the #GBinding
     * @param transform_to a #GClosure wrapping the     transformation function from the source object to the `target,`     or %NULL to use the default
     * @param transform_from a #GClosure wrapping the     transformation function from the `target` to the source object,     or %NULL to use the default
     */
    bind_full(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to?: Function | null, transform_from?: Function | null): void
    /**
     * Gets the source object used for binding properties.
     */
    dup_source(): Object | null
    /**
     * Sets `source` as the source object used for creating property
     * bindings. If there is already a source object all bindings from it
     * will be removed.
     * 
     * Note that all properties that have been bound must exist on `source`.
     * @param source the source #GObject,   or %NULL to clear it
     */
    set_source(source?: Object | null): void
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
    bind_property(source_property: string, target: Object, target_property: string, flags: BindingFlags): Binding
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
    bind_property_full(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: Function, transform_from: Function): Binding
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
    notify_by_pspec(pspec: ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): Object
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
    ref_sink(): Object
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
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: ParamSpec): void
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
    vfunc_notify(pspec: ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: ParamSpec): void
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
    connect(sigName: "notify", callback: (($obj: BindingGroup, pspec: ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BindingGroup, pspec: ParamSpec) => void)): number
    emit(sigName: "notify", pspec: ParamSpec): void
    connect(sigName: "notify::source", callback: (($obj: BindingGroup, pspec: ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: BindingGroup, pspec: ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BindingGroup_ConstructProps)
    _init (config?: BindingGroup_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BindingGroup
    static $gtype: Type
}
interface InitiallyUnowned_ConstructProps extends Object_ConstructProps {
}
class InitiallyUnowned {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: TypeInstance
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
    bind_property(source_property: string, target: Object, target_property: string, flags: BindingFlags): Binding
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
    bind_property_full(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: Function, transform_from: Function): Binding
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
    notify_by_pspec(pspec: ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): Object
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
    ref_sink(): Object
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
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: ParamSpec): void
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
    vfunc_notify(pspec: ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: ParamSpec): void
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
    connect(sigName: "notify", callback: (($obj: InitiallyUnowned, pspec: ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InitiallyUnowned, pspec: ParamSpec) => void)): number
    emit(sigName: "notify", pspec: ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InitiallyUnowned_ConstructProps)
    _init (config?: InitiallyUnowned_ConstructProps): void
    static $gtype: Type
}
interface Object_ConstructProps  {
}
class Object {
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
    bind_property(source_property: string, target: Object, target_property: string, flags: BindingFlags): Binding
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
    bind_property_full(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: Function, transform_from: Function): Binding
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
    notify_by_pspec(pspec: ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): Object
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
    ref_sink(): Object
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
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: ParamSpec): void
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
    vfunc_notify(pspec: ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: ParamSpec): void
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
    connect(sigName: "notify", callback: (($obj: Object, pspec: ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Object, pspec: ParamSpec) => void)): number
    emit(sigName: "notify", pspec: ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(object_type: Type, parameters: Parameter[]): Object
    static compat_control(what: number, data?: object | null): number
    /**
     * Find the #GParamSpec with the given name for an
     * interface. Generally, the interface vtable passed in as `g_iface`
     * will be the default vtable from g_type_default_interface_ref(), or,
     * if you know the interface has already been loaded,
     * g_type_default_interface_peek().
     * @param g_iface any interface vtable for the  interface, or the default vtable for the interface
     * @param property_name name of a property to look up.
     */
    static interface_find_property(g_iface: TypeInterface, property_name: string): ParamSpec
    /**
     * Add a property to an interface; this is only useful for interfaces
     * that are added to GObject-derived types. Adding a property to an
     * interface forces all objects classes with that interface to have a
     * compatible property. The compatible property could be a newly
     * created #GParamSpec, but normally
     * g_object_class_override_property() will be used so that the object
     * class only needs to provide an implementation and inherits the
     * property description, default value, bounds, and so forth from the
     * interface property.
     * 
     * This function is meant to be called from the interface's default
     * vtable initialization function (the `class_init` member of
     * #GTypeInfo.) It must not be called after after `class_init` has
     * been called for any object types implementing this interface.
     * 
     * If `pspec` is a floating reference, it will be consumed.
     * @param g_iface any interface vtable for the    interface, or the default  vtable for the interface.
     * @param pspec the #GParamSpec for the new property
     */
    static interface_install_property(g_iface: TypeInterface, pspec: ParamSpec): void
    /**
     * Lists the properties of an interface.Generally, the interface
     * vtable passed in as `g_iface` will be the default vtable from
     * g_type_default_interface_ref(), or, if you know the interface has
     * already been loaded, g_type_default_interface_peek().
     * @param g_iface any interface vtable for the  interface, or the default vtable for the interface
     */
    static interface_list_properties(g_iface: TypeInterface): ParamSpec[]
    static $gtype: Type
}
class ParamSpec {
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    get_blurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    get_default_value(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    get_name(): string
    /**
     * Gets the GQuark for the name.
     */
    get_name_quark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    get_nick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     * @param quark a #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    get_redirect_target(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     * @param quark a #GQuark, naming the user data pointer
     * @param data an opaque user data pointer
     */
    set_qdata(quark: GLib.Quark, data?: object | null): void
    /**
     * The initial reference count of a newly created #GParamSpec is 1,
     * even though no one has explicitly called g_param_spec_ref() on it
     * yet. So the initial reference count is flagged as "floating", until
     * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
     * (pspec);` in sequence on it, taking over the initial
     * reference count (thus ending up with a `pspec` that has a reference
     * count of 1 still, but is not flagged "floating" anymore).
     */
    sink(): void
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata()
     * and removes the `data` from `pspec` without invoking its destroy()
     * function (if any was set).  Usually, calling this function is only
     * required to update user data pointers with a destroy notifier.
     * @param quark a #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Validate a property name for a #GParamSpec. This can be useful for
     * dynamically-generated properties which need to be validated at run-time
     * before actually trying to create them.
     * 
     * See [canonical parameter names][canonical-parameter-names] for details of
     * the rules for valid names.
     * @param name the canonical name of the property
     */
    static is_valid_name(name: string): boolean
}
class ParamSpecBoolean {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    g_type_instance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    name: string
    /**
     * #GParamFlags flags for this parameter
     */
    flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    value_type: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    get_blurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    get_default_value(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    get_name(): string
    /**
     * Gets the GQuark for the name.
     */
    get_name_quark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    get_nick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     * @param quark a #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    get_redirect_target(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     * @param quark a #GQuark, naming the user data pointer
     * @param data an opaque user data pointer
     */
    set_qdata(quark: GLib.Quark, data?: object | null): void
    /**
     * The initial reference count of a newly created #GParamSpec is 1,
     * even though no one has explicitly called g_param_spec_ref() on it
     * yet. So the initial reference count is flagged as "floating", until
     * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
     * (pspec);` in sequence on it, taking over the initial
     * reference count (thus ending up with a `pspec` that has a reference
     * count of 1 still, but is not flagged "floating" anymore).
     */
    sink(): void
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata()
     * and removes the `data` from `pspec` without invoking its destroy()
     * function (if any was set).  Usually, calling this function is only
     * required to update user data pointers with a destroy notifier.
     * @param quark a #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecBoxed {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    g_type_instance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    name: string
    /**
     * #GParamFlags flags for this parameter
     */
    flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    value_type: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    get_blurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    get_default_value(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    get_name(): string
    /**
     * Gets the GQuark for the name.
     */
    get_name_quark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    get_nick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     * @param quark a #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    get_redirect_target(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     * @param quark a #GQuark, naming the user data pointer
     * @param data an opaque user data pointer
     */
    set_qdata(quark: GLib.Quark, data?: object | null): void
    /**
     * The initial reference count of a newly created #GParamSpec is 1,
     * even though no one has explicitly called g_param_spec_ref() on it
     * yet. So the initial reference count is flagged as "floating", until
     * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
     * (pspec);` in sequence on it, taking over the initial
     * reference count (thus ending up with a `pspec` that has a reference
     * count of 1 still, but is not flagged "floating" anymore).
     */
    sink(): void
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata()
     * and removes the `data` from `pspec` without invoking its destroy()
     * function (if any was set).  Usually, calling this function is only
     * required to update user data pointers with a destroy notifier.
     * @param quark a #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecChar {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    g_type_instance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    name: string
    /**
     * #GParamFlags flags for this parameter
     */
    flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    value_type: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    get_blurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    get_default_value(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    get_name(): string
    /**
     * Gets the GQuark for the name.
     */
    get_name_quark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    get_nick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     * @param quark a #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    get_redirect_target(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     * @param quark a #GQuark, naming the user data pointer
     * @param data an opaque user data pointer
     */
    set_qdata(quark: GLib.Quark, data?: object | null): void
    /**
     * The initial reference count of a newly created #GParamSpec is 1,
     * even though no one has explicitly called g_param_spec_ref() on it
     * yet. So the initial reference count is flagged as "floating", until
     * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
     * (pspec);` in sequence on it, taking over the initial
     * reference count (thus ending up with a `pspec` that has a reference
     * count of 1 still, but is not flagged "floating" anymore).
     */
    sink(): void
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata()
     * and removes the `data` from `pspec` without invoking its destroy()
     * function (if any was set).  Usually, calling this function is only
     * required to update user data pointers with a destroy notifier.
     * @param quark a #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecDouble {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    g_type_instance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    name: string
    /**
     * #GParamFlags flags for this parameter
     */
    flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    value_type: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    get_blurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    get_default_value(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    get_name(): string
    /**
     * Gets the GQuark for the name.
     */
    get_name_quark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    get_nick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     * @param quark a #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    get_redirect_target(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     * @param quark a #GQuark, naming the user data pointer
     * @param data an opaque user data pointer
     */
    set_qdata(quark: GLib.Quark, data?: object | null): void
    /**
     * The initial reference count of a newly created #GParamSpec is 1,
     * even though no one has explicitly called g_param_spec_ref() on it
     * yet. So the initial reference count is flagged as "floating", until
     * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
     * (pspec);` in sequence on it, taking over the initial
     * reference count (thus ending up with a `pspec` that has a reference
     * count of 1 still, but is not flagged "floating" anymore).
     */
    sink(): void
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata()
     * and removes the `data` from `pspec` without invoking its destroy()
     * function (if any was set).  Usually, calling this function is only
     * required to update user data pointers with a destroy notifier.
     * @param quark a #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecEnum {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    g_type_instance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    name: string
    /**
     * #GParamFlags flags for this parameter
     */
    flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    value_type: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    get_blurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    get_default_value(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    get_name(): string
    /**
     * Gets the GQuark for the name.
     */
    get_name_quark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    get_nick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     * @param quark a #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    get_redirect_target(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     * @param quark a #GQuark, naming the user data pointer
     * @param data an opaque user data pointer
     */
    set_qdata(quark: GLib.Quark, data?: object | null): void
    /**
     * The initial reference count of a newly created #GParamSpec is 1,
     * even though no one has explicitly called g_param_spec_ref() on it
     * yet. So the initial reference count is flagged as "floating", until
     * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
     * (pspec);` in sequence on it, taking over the initial
     * reference count (thus ending up with a `pspec` that has a reference
     * count of 1 still, but is not flagged "floating" anymore).
     */
    sink(): void
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata()
     * and removes the `data` from `pspec` without invoking its destroy()
     * function (if any was set).  Usually, calling this function is only
     * required to update user data pointers with a destroy notifier.
     * @param quark a #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecFlags {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    g_type_instance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    name: string
    /**
     * #GParamFlags flags for this parameter
     */
    flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    value_type: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    get_blurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    get_default_value(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    get_name(): string
    /**
     * Gets the GQuark for the name.
     */
    get_name_quark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    get_nick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     * @param quark a #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    get_redirect_target(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     * @param quark a #GQuark, naming the user data pointer
     * @param data an opaque user data pointer
     */
    set_qdata(quark: GLib.Quark, data?: object | null): void
    /**
     * The initial reference count of a newly created #GParamSpec is 1,
     * even though no one has explicitly called g_param_spec_ref() on it
     * yet. So the initial reference count is flagged as "floating", until
     * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
     * (pspec);` in sequence on it, taking over the initial
     * reference count (thus ending up with a `pspec` that has a reference
     * count of 1 still, but is not flagged "floating" anymore).
     */
    sink(): void
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata()
     * and removes the `data` from `pspec` without invoking its destroy()
     * function (if any was set).  Usually, calling this function is only
     * required to update user data pointers with a destroy notifier.
     * @param quark a #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecFloat {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    g_type_instance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    name: string
    /**
     * #GParamFlags flags for this parameter
     */
    flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    value_type: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    get_blurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    get_default_value(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    get_name(): string
    /**
     * Gets the GQuark for the name.
     */
    get_name_quark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    get_nick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     * @param quark a #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    get_redirect_target(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     * @param quark a #GQuark, naming the user data pointer
     * @param data an opaque user data pointer
     */
    set_qdata(quark: GLib.Quark, data?: object | null): void
    /**
     * The initial reference count of a newly created #GParamSpec is 1,
     * even though no one has explicitly called g_param_spec_ref() on it
     * yet. So the initial reference count is flagged as "floating", until
     * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
     * (pspec);` in sequence on it, taking over the initial
     * reference count (thus ending up with a `pspec` that has a reference
     * count of 1 still, but is not flagged "floating" anymore).
     */
    sink(): void
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata()
     * and removes the `data` from `pspec` without invoking its destroy()
     * function (if any was set).  Usually, calling this function is only
     * required to update user data pointers with a destroy notifier.
     * @param quark a #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecGType {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    g_type_instance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    name: string
    /**
     * #GParamFlags flags for this parameter
     */
    flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    value_type: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    get_blurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    get_default_value(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    get_name(): string
    /**
     * Gets the GQuark for the name.
     */
    get_name_quark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    get_nick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     * @param quark a #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    get_redirect_target(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     * @param quark a #GQuark, naming the user data pointer
     * @param data an opaque user data pointer
     */
    set_qdata(quark: GLib.Quark, data?: object | null): void
    /**
     * The initial reference count of a newly created #GParamSpec is 1,
     * even though no one has explicitly called g_param_spec_ref() on it
     * yet. So the initial reference count is flagged as "floating", until
     * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
     * (pspec);` in sequence on it, taking over the initial
     * reference count (thus ending up with a `pspec` that has a reference
     * count of 1 still, but is not flagged "floating" anymore).
     */
    sink(): void
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata()
     * and removes the `data` from `pspec` without invoking its destroy()
     * function (if any was set).  Usually, calling this function is only
     * required to update user data pointers with a destroy notifier.
     * @param quark a #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecInt {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    g_type_instance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    name: string
    /**
     * #GParamFlags flags for this parameter
     */
    flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    value_type: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    get_blurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    get_default_value(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    get_name(): string
    /**
     * Gets the GQuark for the name.
     */
    get_name_quark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    get_nick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     * @param quark a #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    get_redirect_target(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     * @param quark a #GQuark, naming the user data pointer
     * @param data an opaque user data pointer
     */
    set_qdata(quark: GLib.Quark, data?: object | null): void
    /**
     * The initial reference count of a newly created #GParamSpec is 1,
     * even though no one has explicitly called g_param_spec_ref() on it
     * yet. So the initial reference count is flagged as "floating", until
     * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
     * (pspec);` in sequence on it, taking over the initial
     * reference count (thus ending up with a `pspec` that has a reference
     * count of 1 still, but is not flagged "floating" anymore).
     */
    sink(): void
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata()
     * and removes the `data` from `pspec` without invoking its destroy()
     * function (if any was set).  Usually, calling this function is only
     * required to update user data pointers with a destroy notifier.
     * @param quark a #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecInt64 {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    g_type_instance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    name: string
    /**
     * #GParamFlags flags for this parameter
     */
    flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    value_type: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    get_blurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    get_default_value(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    get_name(): string
    /**
     * Gets the GQuark for the name.
     */
    get_name_quark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    get_nick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     * @param quark a #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    get_redirect_target(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     * @param quark a #GQuark, naming the user data pointer
     * @param data an opaque user data pointer
     */
    set_qdata(quark: GLib.Quark, data?: object | null): void
    /**
     * The initial reference count of a newly created #GParamSpec is 1,
     * even though no one has explicitly called g_param_spec_ref() on it
     * yet. So the initial reference count is flagged as "floating", until
     * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
     * (pspec);` in sequence on it, taking over the initial
     * reference count (thus ending up with a `pspec` that has a reference
     * count of 1 still, but is not flagged "floating" anymore).
     */
    sink(): void
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata()
     * and removes the `data` from `pspec` without invoking its destroy()
     * function (if any was set).  Usually, calling this function is only
     * required to update user data pointers with a destroy notifier.
     * @param quark a #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecLong {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    g_type_instance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    name: string
    /**
     * #GParamFlags flags for this parameter
     */
    flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    value_type: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    get_blurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    get_default_value(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    get_name(): string
    /**
     * Gets the GQuark for the name.
     */
    get_name_quark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    get_nick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     * @param quark a #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    get_redirect_target(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     * @param quark a #GQuark, naming the user data pointer
     * @param data an opaque user data pointer
     */
    set_qdata(quark: GLib.Quark, data?: object | null): void
    /**
     * The initial reference count of a newly created #GParamSpec is 1,
     * even though no one has explicitly called g_param_spec_ref() on it
     * yet. So the initial reference count is flagged as "floating", until
     * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
     * (pspec);` in sequence on it, taking over the initial
     * reference count (thus ending up with a `pspec` that has a reference
     * count of 1 still, but is not flagged "floating" anymore).
     */
    sink(): void
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata()
     * and removes the `data` from `pspec` without invoking its destroy()
     * function (if any was set).  Usually, calling this function is only
     * required to update user data pointers with a destroy notifier.
     * @param quark a #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecObject {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    g_type_instance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    name: string
    /**
     * #GParamFlags flags for this parameter
     */
    flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    value_type: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    get_blurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    get_default_value(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    get_name(): string
    /**
     * Gets the GQuark for the name.
     */
    get_name_quark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    get_nick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     * @param quark a #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    get_redirect_target(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     * @param quark a #GQuark, naming the user data pointer
     * @param data an opaque user data pointer
     */
    set_qdata(quark: GLib.Quark, data?: object | null): void
    /**
     * The initial reference count of a newly created #GParamSpec is 1,
     * even though no one has explicitly called g_param_spec_ref() on it
     * yet. So the initial reference count is flagged as "floating", until
     * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
     * (pspec);` in sequence on it, taking over the initial
     * reference count (thus ending up with a `pspec` that has a reference
     * count of 1 still, but is not flagged "floating" anymore).
     */
    sink(): void
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata()
     * and removes the `data` from `pspec` without invoking its destroy()
     * function (if any was set).  Usually, calling this function is only
     * required to update user data pointers with a destroy notifier.
     * @param quark a #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecOverride {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    g_type_instance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    name: string
    /**
     * #GParamFlags flags for this parameter
     */
    flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    value_type: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    get_blurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    get_default_value(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    get_name(): string
    /**
     * Gets the GQuark for the name.
     */
    get_name_quark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    get_nick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     * @param quark a #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    get_redirect_target(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     * @param quark a #GQuark, naming the user data pointer
     * @param data an opaque user data pointer
     */
    set_qdata(quark: GLib.Quark, data?: object | null): void
    /**
     * The initial reference count of a newly created #GParamSpec is 1,
     * even though no one has explicitly called g_param_spec_ref() on it
     * yet. So the initial reference count is flagged as "floating", until
     * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
     * (pspec);` in sequence on it, taking over the initial
     * reference count (thus ending up with a `pspec` that has a reference
     * count of 1 still, but is not flagged "floating" anymore).
     */
    sink(): void
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata()
     * and removes the `data` from `pspec` without invoking its destroy()
     * function (if any was set).  Usually, calling this function is only
     * required to update user data pointers with a destroy notifier.
     * @param quark a #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecParam {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    g_type_instance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    name: string
    /**
     * #GParamFlags flags for this parameter
     */
    flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    value_type: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    get_blurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    get_default_value(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    get_name(): string
    /**
     * Gets the GQuark for the name.
     */
    get_name_quark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    get_nick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     * @param quark a #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    get_redirect_target(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     * @param quark a #GQuark, naming the user data pointer
     * @param data an opaque user data pointer
     */
    set_qdata(quark: GLib.Quark, data?: object | null): void
    /**
     * The initial reference count of a newly created #GParamSpec is 1,
     * even though no one has explicitly called g_param_spec_ref() on it
     * yet. So the initial reference count is flagged as "floating", until
     * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
     * (pspec);` in sequence on it, taking over the initial
     * reference count (thus ending up with a `pspec` that has a reference
     * count of 1 still, but is not flagged "floating" anymore).
     */
    sink(): void
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata()
     * and removes the `data` from `pspec` without invoking its destroy()
     * function (if any was set).  Usually, calling this function is only
     * required to update user data pointers with a destroy notifier.
     * @param quark a #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecPointer {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    g_type_instance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    name: string
    /**
     * #GParamFlags flags for this parameter
     */
    flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    value_type: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    get_blurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    get_default_value(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    get_name(): string
    /**
     * Gets the GQuark for the name.
     */
    get_name_quark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    get_nick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     * @param quark a #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    get_redirect_target(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     * @param quark a #GQuark, naming the user data pointer
     * @param data an opaque user data pointer
     */
    set_qdata(quark: GLib.Quark, data?: object | null): void
    /**
     * The initial reference count of a newly created #GParamSpec is 1,
     * even though no one has explicitly called g_param_spec_ref() on it
     * yet. So the initial reference count is flagged as "floating", until
     * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
     * (pspec);` in sequence on it, taking over the initial
     * reference count (thus ending up with a `pspec` that has a reference
     * count of 1 still, but is not flagged "floating" anymore).
     */
    sink(): void
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata()
     * and removes the `data` from `pspec` without invoking its destroy()
     * function (if any was set).  Usually, calling this function is only
     * required to update user data pointers with a destroy notifier.
     * @param quark a #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecString {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    g_type_instance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    name: string
    /**
     * #GParamFlags flags for this parameter
     */
    flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    value_type: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    get_blurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    get_default_value(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    get_name(): string
    /**
     * Gets the GQuark for the name.
     */
    get_name_quark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    get_nick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     * @param quark a #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    get_redirect_target(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     * @param quark a #GQuark, naming the user data pointer
     * @param data an opaque user data pointer
     */
    set_qdata(quark: GLib.Quark, data?: object | null): void
    /**
     * The initial reference count of a newly created #GParamSpec is 1,
     * even though no one has explicitly called g_param_spec_ref() on it
     * yet. So the initial reference count is flagged as "floating", until
     * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
     * (pspec);` in sequence on it, taking over the initial
     * reference count (thus ending up with a `pspec` that has a reference
     * count of 1 still, but is not flagged "floating" anymore).
     */
    sink(): void
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata()
     * and removes the `data` from `pspec` without invoking its destroy()
     * function (if any was set).  Usually, calling this function is only
     * required to update user data pointers with a destroy notifier.
     * @param quark a #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecUChar {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    g_type_instance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    name: string
    /**
     * #GParamFlags flags for this parameter
     */
    flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    value_type: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    get_blurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    get_default_value(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    get_name(): string
    /**
     * Gets the GQuark for the name.
     */
    get_name_quark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    get_nick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     * @param quark a #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    get_redirect_target(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     * @param quark a #GQuark, naming the user data pointer
     * @param data an opaque user data pointer
     */
    set_qdata(quark: GLib.Quark, data?: object | null): void
    /**
     * The initial reference count of a newly created #GParamSpec is 1,
     * even though no one has explicitly called g_param_spec_ref() on it
     * yet. So the initial reference count is flagged as "floating", until
     * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
     * (pspec);` in sequence on it, taking over the initial
     * reference count (thus ending up with a `pspec` that has a reference
     * count of 1 still, but is not flagged "floating" anymore).
     */
    sink(): void
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata()
     * and removes the `data` from `pspec` without invoking its destroy()
     * function (if any was set).  Usually, calling this function is only
     * required to update user data pointers with a destroy notifier.
     * @param quark a #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecUInt {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    g_type_instance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    name: string
    /**
     * #GParamFlags flags for this parameter
     */
    flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    value_type: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    get_blurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    get_default_value(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    get_name(): string
    /**
     * Gets the GQuark for the name.
     */
    get_name_quark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    get_nick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     * @param quark a #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    get_redirect_target(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     * @param quark a #GQuark, naming the user data pointer
     * @param data an opaque user data pointer
     */
    set_qdata(quark: GLib.Quark, data?: object | null): void
    /**
     * The initial reference count of a newly created #GParamSpec is 1,
     * even though no one has explicitly called g_param_spec_ref() on it
     * yet. So the initial reference count is flagged as "floating", until
     * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
     * (pspec);` in sequence on it, taking over the initial
     * reference count (thus ending up with a `pspec` that has a reference
     * count of 1 still, but is not flagged "floating" anymore).
     */
    sink(): void
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata()
     * and removes the `data` from `pspec` without invoking its destroy()
     * function (if any was set).  Usually, calling this function is only
     * required to update user data pointers with a destroy notifier.
     * @param quark a #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecUInt64 {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    g_type_instance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    name: string
    /**
     * #GParamFlags flags for this parameter
     */
    flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    value_type: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    get_blurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    get_default_value(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    get_name(): string
    /**
     * Gets the GQuark for the name.
     */
    get_name_quark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    get_nick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     * @param quark a #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    get_redirect_target(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     * @param quark a #GQuark, naming the user data pointer
     * @param data an opaque user data pointer
     */
    set_qdata(quark: GLib.Quark, data?: object | null): void
    /**
     * The initial reference count of a newly created #GParamSpec is 1,
     * even though no one has explicitly called g_param_spec_ref() on it
     * yet. So the initial reference count is flagged as "floating", until
     * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
     * (pspec);` in sequence on it, taking over the initial
     * reference count (thus ending up with a `pspec` that has a reference
     * count of 1 still, but is not flagged "floating" anymore).
     */
    sink(): void
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata()
     * and removes the `data` from `pspec` without invoking its destroy()
     * function (if any was set).  Usually, calling this function is only
     * required to update user data pointers with a destroy notifier.
     * @param quark a #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecULong {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    g_type_instance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    name: string
    /**
     * #GParamFlags flags for this parameter
     */
    flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    value_type: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    get_blurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    get_default_value(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    get_name(): string
    /**
     * Gets the GQuark for the name.
     */
    get_name_quark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    get_nick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     * @param quark a #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    get_redirect_target(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     * @param quark a #GQuark, naming the user data pointer
     * @param data an opaque user data pointer
     */
    set_qdata(quark: GLib.Quark, data?: object | null): void
    /**
     * The initial reference count of a newly created #GParamSpec is 1,
     * even though no one has explicitly called g_param_spec_ref() on it
     * yet. So the initial reference count is flagged as "floating", until
     * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
     * (pspec);` in sequence on it, taking over the initial
     * reference count (thus ending up with a `pspec` that has a reference
     * count of 1 still, but is not flagged "floating" anymore).
     */
    sink(): void
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata()
     * and removes the `data` from `pspec` without invoking its destroy()
     * function (if any was set).  Usually, calling this function is only
     * required to update user data pointers with a destroy notifier.
     * @param quark a #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecUnichar {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    g_type_instance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    name: string
    /**
     * #GParamFlags flags for this parameter
     */
    flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    value_type: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    get_blurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    get_default_value(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    get_name(): string
    /**
     * Gets the GQuark for the name.
     */
    get_name_quark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    get_nick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     * @param quark a #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    get_redirect_target(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     * @param quark a #GQuark, naming the user data pointer
     * @param data an opaque user data pointer
     */
    set_qdata(quark: GLib.Quark, data?: object | null): void
    /**
     * The initial reference count of a newly created #GParamSpec is 1,
     * even though no one has explicitly called g_param_spec_ref() on it
     * yet. So the initial reference count is flagged as "floating", until
     * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
     * (pspec);` in sequence on it, taking over the initial
     * reference count (thus ending up with a `pspec` that has a reference
     * count of 1 still, but is not flagged "floating" anymore).
     */
    sink(): void
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata()
     * and removes the `data` from `pspec` without invoking its destroy()
     * function (if any was set).  Usually, calling this function is only
     * required to update user data pointers with a destroy notifier.
     * @param quark a #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecValueArray {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    g_type_instance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    name: string
    /**
     * #GParamFlags flags for this parameter
     */
    flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    value_type: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    get_blurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    get_default_value(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    get_name(): string
    /**
     * Gets the GQuark for the name.
     */
    get_name_quark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    get_nick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     * @param quark a #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    get_redirect_target(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     * @param quark a #GQuark, naming the user data pointer
     * @param data an opaque user data pointer
     */
    set_qdata(quark: GLib.Quark, data?: object | null): void
    /**
     * The initial reference count of a newly created #GParamSpec is 1,
     * even though no one has explicitly called g_param_spec_ref() on it
     * yet. So the initial reference count is flagged as "floating", until
     * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
     * (pspec);` in sequence on it, taking over the initial
     * reference count (thus ending up with a `pspec` that has a reference
     * count of 1 still, but is not flagged "floating" anymore).
     */
    sink(): void
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata()
     * and removes the `data` from `pspec` without invoking its destroy()
     * function (if any was set).  Usually, calling this function is only
     * required to update user data pointers with a destroy notifier.
     * @param quark a #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecVariant {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    g_type_instance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    name: string
    /**
     * #GParamFlags flags for this parameter
     */
    flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    value_type: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    get_blurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    get_default_value(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    get_name(): string
    /**
     * Gets the GQuark for the name.
     */
    get_name_quark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    get_nick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     * @param quark a #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    get_redirect_target(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     * @param quark a #GQuark, naming the user data pointer
     * @param data an opaque user data pointer
     */
    set_qdata(quark: GLib.Quark, data?: object | null): void
    /**
     * The initial reference count of a newly created #GParamSpec is 1,
     * even though no one has explicitly called g_param_spec_ref() on it
     * yet. So the initial reference count is flagged as "floating", until
     * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
     * (pspec);` in sequence on it, taking over the initial
     * reference count (thus ending up with a `pspec` that has a reference
     * count of 1 still, but is not flagged "floating" anymore).
     */
    sink(): void
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata()
     * and removes the `data` from `pspec` without invoking its destroy()
     * function (if any was set).  Usually, calling this function is only
     * required to update user data pointers with a destroy notifier.
     * @param quark a #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
interface SignalGroup_ConstructProps extends Object_ConstructProps {
    /* Constructor properties of GObject-2.0.GObject.SignalGroup */
    /**
     * The target instance used when connecting signals.
     */
    target?: Object
    /**
     * The #GType of the target property.
     */
    target_type?: Type
}
class SignalGroup {
    /* Properties of GObject-2.0.GObject.SignalGroup */
    /**
     * The target instance used when connecting signals.
     */
    target: Object
    /**
     * The #GType of the target property.
     */
    readonly target_type: Type
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: TypeInstance
    /* Methods of GObject-2.0.GObject.SignalGroup */
    /**
     * Blocks all signal handlers managed by `self` so they will not
     * be called during any signal emissions. Must be unblocked exactly
     * the same number of times it has been blocked to become active again.
     * 
     * This blocked state will be kept across changes of the target instance.
     */
    block(): void
    /**
     * Connects `c_handler` to the signal `detailed_signal`
     * on the target instance of `self`.
     * 
     * You cannot connect a signal handler after #GSignalGroup:target has been set.
     * @param detailed_signal a string of the form "signal-name::detail"
     * @param c_handler the #GCallback to connect
     * @param flags the flags used to create the signal connection
     */
    connect_data(detailed_signal: string, c_handler: Callback, flags: ConnectFlags): void
    /**
     * Connects `c_handler` to the signal `detailed_signal`
     * on the target instance of `self`.
     * 
     * The instance on which the signal is emitted and `data`
     * will be swapped when calling `c_handler`.
     * 
     * You cannot connect a signal handler after #GSignalGroup:target has been set.
     * @param detailed_signal a string of the form "signal-name::detail"
     * @param c_handler the #GCallback to connect
     */
    connect_swapped(detailed_signal: string, c_handler: Callback): void
    /**
     * Gets the target instance used when connecting signals.
     */
    dup_target(): Object | null
    /**
     * Sets the target instance used when connecting signals. Any signal
     * that has been registered with g_signal_group_connect_object() or
     * similar functions will be connected to this object.
     * 
     * If the target instance was previously set, signals will be
     * disconnected from that object prior to connecting to `target`.
     * @param target The target instance used     when connecting signals.
     */
    set_target(target?: Object | null): void
    /**
     * Unblocks all signal handlers managed by `self` so they will be
     * called again during any signal emissions unless it is blocked
     * again. Must be unblocked exactly the same number of times it
     * has been blocked to become active again.
     */
    unblock(): void
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
    bind_property(source_property: string, target: Object, target_property: string, flags: BindingFlags): Binding
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
    bind_property_full(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: Function, transform_from: Function): Binding
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
    notify_by_pspec(pspec: ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): Object
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
    ref_sink(): Object
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
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: ParamSpec): void
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
    vfunc_notify(pspec: ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: ParamSpec): void
    /* Signals of GObject-2.0.GObject.SignalGroup */
    /**
     * This signal is emitted when #GSignalGroup:target is set to a new value
     * other than %NULL. It is similar to #GObject::notify on `target` except it
     * will not emit when #GSignalGroup:target is %NULL and also allows for
     * receiving the #GObject without a data-race.
     * @param instance a #GObject containing the new value for #GSignalGroup:target
     */
    connect(sigName: "bind", callback: (($obj: SignalGroup, instance: Object) => void)): number
    connect_after(sigName: "bind", callback: (($obj: SignalGroup, instance: Object) => void)): number
    emit(sigName: "bind", instance: Object): void
    /**
     * This signal is emitted when the target instance of `self` is set to a
     * new #GObject.
     * 
     * This signal will only be emitted if the previous target of `self` is
     * non-%NULL.
     */
    connect(sigName: "unbind", callback: (($obj: SignalGroup) => void)): number
    connect_after(sigName: "unbind", callback: (($obj: SignalGroup) => void)): number
    emit(sigName: "unbind"): void
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
    connect(sigName: "notify", callback: (($obj: SignalGroup, pspec: ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SignalGroup, pspec: ParamSpec) => void)): number
    emit(sigName: "notify", pspec: ParamSpec): void
    connect(sigName: "notify::target", callback: (($obj: SignalGroup, pspec: ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: (($obj: SignalGroup, pspec: ParamSpec) => void)): number
    connect(sigName: "notify::target-type", callback: (($obj: SignalGroup, pspec: ParamSpec) => void)): number
    connect_after(sigName: "notify::target-type", callback: (($obj: SignalGroup, pspec: ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SignalGroup_ConstructProps)
    _init (config?: SignalGroup_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(target_type: Type): SignalGroup
    static $gtype: Type
}
interface TypeModule_ConstructProps extends Object_ConstructProps {
}
class TypeModule {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: TypeInstance
    /* Methods of GObject-2.0.GObject.TypeModule */
    /**
     * Registers an additional interface for a type, whose interface lives
     * in the given type plugin. If the interface was already registered
     * for the type in this plugin, nothing will be done.
     * 
     * As long as any instances of the type exist, the type plugin will
     * not be unloaded.
     * 
     * Since 2.56 if `module` is %NULL this will call g_type_add_interface_static()
     * instead. This can be used when making a static build of the module.
     * @param instance_type type to which to add the interface.
     * @param interface_type interface type to add
     * @param interface_info type information structure
     */
    add_interface(instance_type: Type, interface_type: Type, interface_info: InterfaceInfo): void
    /**
     * Looks up or registers an enumeration that is implemented with a particular
     * type plugin. If a type with name `type_name` was previously registered,
     * the #GType identifier for the type is returned, otherwise the type
     * is newly registered, and the resulting #GType identifier returned.
     * 
     * As long as any instances of the type exist, the type plugin will
     * not be unloaded.
     * 
     * Since 2.56 if `module` is %NULL this will call g_type_register_static()
     * instead. This can be used when making a static build of the module.
     * @param name name for the type
     * @param const_static_values an array of #GEnumValue structs for the                       possible enumeration values. The array is                       terminated by a struct with all members being                       0.
     */
    register_enum(name: string, const_static_values: EnumValue): Type
    /**
     * Looks up or registers a flags type that is implemented with a particular
     * type plugin. If a type with name `type_name` was previously registered,
     * the #GType identifier for the type is returned, otherwise the type
     * is newly registered, and the resulting #GType identifier returned.
     * 
     * As long as any instances of the type exist, the type plugin will
     * not be unloaded.
     * 
     * Since 2.56 if `module` is %NULL this will call g_type_register_static()
     * instead. This can be used when making a static build of the module.
     * @param name name for the type
     * @param const_static_values an array of #GFlagsValue structs for the                       possible flags values. The array is                       terminated by a struct with all members being                       0.
     */
    register_flags(name: string, const_static_values: FlagsValue): Type
    /**
     * Looks up or registers a type that is implemented with a particular
     * type plugin. If a type with name `type_name` was previously registered,
     * the #GType identifier for the type is returned, otherwise the type
     * is newly registered, and the resulting #GType identifier returned.
     * 
     * When reregistering a type (typically because a module is unloaded
     * then reloaded, and reinitialized), `module` and `parent_type` must
     * be the same as they were previously.
     * 
     * As long as any instances of the type exist, the type plugin will
     * not be unloaded.
     * 
     * Since 2.56 if `module` is %NULL this will call g_type_register_static()
     * instead. This can be used when making a static build of the module.
     * @param parent_type the type for the parent class
     * @param type_name name for the type
     * @param type_info type information structure
     * @param flags flags field providing details about the type
     */
    register_type(parent_type: Type, type_name: string, type_info: TypeInfo, flags: TypeFlags): Type
    /**
     * Sets the name for a #GTypeModule
     * @param name a human-readable name to use in error messages.
     */
    set_name(name: string): void
    /**
     * Decreases the use count of a #GTypeModule by one. If the
     * result is zero, the module will be unloaded. (However, the
     * #GTypeModule will not be freed, and types associated with the
     * #GTypeModule are not unregistered. Once a #GTypeModule is
     * initialized, it must exist forever.)
     */
    unuse(): void
    /**
     * Increases the use count of a #GTypeModule by one. If the
     * use count was zero before, the plugin will be loaded.
     * If loading the plugin fails, the use count is reset to
     * its prior value.
     */
    use(): boolean
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
    bind_property(source_property: string, target: Object, target_property: string, flags: BindingFlags): Binding
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
    bind_property_full(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: Function, transform_from: Function): Binding
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
    notify_by_pspec(pspec: ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): Object
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
    ref_sink(): Object
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
    /* Virtual methods of GObject-2.0.GObject.TypeModule */
    vfunc_load(): boolean
    vfunc_unload(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: ParamSpec): void
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
    vfunc_notify(pspec: ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: ParamSpec): void
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
    connect(sigName: "notify", callback: (($obj: TypeModule, pspec: ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TypeModule, pspec: ParamSpec) => void)): number
    emit(sigName: "notify", pspec: ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TypeModule_ConstructProps)
    _init (config?: TypeModule_ConstructProps): void
    static $gtype: Type
}
class CClosure {
    /* Fields of GObject-2.0.GObject.CClosure */
    /**
     * the #GClosure
     */
    closure: Function
    /**
     * the callback function
     */
    callback: object
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * A #GClosureMarshal function for use with signals with handlers that
     * take two boxed pointers as arguments and return a boolean.  If you
     * have such a signal, you will probably also need to use an
     * accumulator, such as g_signal_accumulator_true_handled().
     * @param closure A #GClosure.
     * @param return_value A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
     * @param n_param_values The length of the `param_values` array.
     * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
     * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
     * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
     */
    static marshal_BOOLEAN__BOXED_BOXED(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `gboolean (*callback) (gpointer instance, gint arg1, gpointer user_data)` where the #gint parameter
     * denotes a flags type.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value a #GValue which can store the returned #gboolean
     * @param n_param_values 2
     * @param param_values a #GValue array holding instance and arg1
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    static marshal_BOOLEAN__FLAGS(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `gchar* (*callback) (gpointer instance, GObject *arg1, gpointer arg2, gpointer user_data)`.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value a #GValue, which can store the returned string
     * @param n_param_values 3
     * @param param_values a #GValue array holding instance, arg1 and arg2
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    static marshal_STRING__OBJECT_POINTER(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, gboolean arg1, gpointer user_data)`.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value ignored
     * @param n_param_values 2
     * @param param_values a #GValue array holding the instance and the #gboolean parameter
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    static marshal_VOID__BOOLEAN(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, GBoxed *arg1, gpointer user_data)`.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value ignored
     * @param n_param_values 2
     * @param param_values a #GValue array holding the instance and the #GBoxed* parameter
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    static marshal_VOID__BOXED(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, gchar arg1, gpointer user_data)`.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value ignored
     * @param n_param_values 2
     * @param param_values a #GValue array holding the instance and the #gchar parameter
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    static marshal_VOID__CHAR(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, gdouble arg1, gpointer user_data)`.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value ignored
     * @param n_param_values 2
     * @param param_values a #GValue array holding the instance and the #gdouble parameter
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    static marshal_VOID__DOUBLE(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, gint arg1, gpointer user_data)` where the #gint parameter denotes an enumeration type..
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value ignored
     * @param n_param_values 2
     * @param param_values a #GValue array holding the instance and the enumeration parameter
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    static marshal_VOID__ENUM(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, gint arg1, gpointer user_data)` where the #gint parameter denotes a flags type.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value ignored
     * @param n_param_values 2
     * @param param_values a #GValue array holding the instance and the flags parameter
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    static marshal_VOID__FLAGS(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, gfloat arg1, gpointer user_data)`.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value ignored
     * @param n_param_values 2
     * @param param_values a #GValue array holding the instance and the #gfloat parameter
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    static marshal_VOID__FLOAT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, gint arg1, gpointer user_data)`.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value ignored
     * @param n_param_values 2
     * @param param_values a #GValue array holding the instance and the #gint parameter
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    static marshal_VOID__INT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, glong arg1, gpointer user_data)`.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value ignored
     * @param n_param_values 2
     * @param param_values a #GValue array holding the instance and the #glong parameter
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    static marshal_VOID__LONG(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, GObject *arg1, gpointer user_data)`.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value ignored
     * @param n_param_values 2
     * @param param_values a #GValue array holding the instance and the #GObject* parameter
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    static marshal_VOID__OBJECT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, GParamSpec *arg1, gpointer user_data)`.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value ignored
     * @param n_param_values 2
     * @param param_values a #GValue array holding the instance and the #GParamSpec* parameter
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    static marshal_VOID__PARAM(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, gpointer arg1, gpointer user_data)`.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value ignored
     * @param n_param_values 2
     * @param param_values a #GValue array holding the instance and the #gpointer parameter
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    static marshal_VOID__POINTER(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, const gchar *arg1, gpointer user_data)`.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value ignored
     * @param n_param_values 2
     * @param param_values a #GValue array holding the instance and the #gchar* parameter
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    static marshal_VOID__STRING(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, guchar arg1, gpointer user_data)`.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value ignored
     * @param n_param_values 2
     * @param param_values a #GValue array holding the instance and the #guchar parameter
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    static marshal_VOID__UCHAR(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, guint arg1, gpointer user_data)`.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value ignored
     * @param n_param_values 2
     * @param param_values a #GValue array holding the instance and the #guint parameter
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    static marshal_VOID__UINT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, guint arg1, gpointer arg2, gpointer user_data)`.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value ignored
     * @param n_param_values 3
     * @param param_values a #GValue array holding instance, arg1 and arg2
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    static marshal_VOID__UINT_POINTER(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, gulong arg1, gpointer user_data)`.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value ignored
     * @param n_param_values 2
     * @param param_values a #GValue array holding the instance and the #gulong parameter
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    static marshal_VOID__ULONG(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, GVariant *arg1, gpointer user_data)`.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value ignored
     * @param n_param_values 2
     * @param param_values a #GValue array holding the instance and the #GVariant* parameter
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    static marshal_VOID__VARIANT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, gpointer user_data)`.
     * @param closure the #GClosure to which the marshaller belongs
     * @param return_value ignored
     * @param n_param_values 1
     * @param param_values a #GValue array holding only the instance
     * @param invocation_hint the invocation hint given as the last argument  to g_closure_invoke()
     * @param marshal_data additional data specified when registering the marshaller
     */
    static marshal_VOID__VOID(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    /**
     * A generic marshaller function implemented via
     * [libffi](http://sourceware.org/libffi/).
     * 
     * Normally this function is not passed explicitly to g_signal_new(),
     * but used automatically by GLib when specifying a %NULL marshaller.
     * @param closure A #GClosure.
     * @param return_gvalue A #GValue to store the return value. May be %NULL   if the callback of closure doesn't return a value.
     * @param n_param_values The length of the `param_values` array.
     * @param param_values An array of #GValues holding the arguments   on which to invoke the callback of closure.
     * @param invocation_hint The invocation hint given as the last argument to   g_closure_invoke().
     * @param marshal_data Additional data specified when registering the   marshaller, see g_closure_set_marshal() and   g_closure_set_meta_marshal()
     */
    static marshal_generic(closure: Function, return_gvalue: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
}
class Closure {
    /* Fields of GObject-2.0.GObject.Closure */
    /**
     * Indicates whether the closure is currently being invoked with
     *  g_closure_invoke()
     */
    in_marshal: number
    /**
     * Indicates whether the closure has been invalidated by
     *  g_closure_invalidate()
     */
    is_invalid: number
    marshal: (closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint: object, marshal_data: object) => void
    /* Methods of GObject-2.0.GObject.Closure */
    /**
     * Sets a flag on the closure to indicate that its calling
     * environment has become invalid, and thus causes any future
     * invocations of g_closure_invoke() on this `closure` to be
     * ignored.
     * 
     * Also, invalidation notifiers installed on the closure will
     * be called at this point. Note that unless you are holding a
     * reference to the closure yourself, the invalidation notifiers may
     * unref the closure and cause it to be destroyed, so if you need to
     * access the closure after calling g_closure_invalidate(), make sure
     * that you've previously called g_closure_ref().
     * 
     * Note that g_closure_invalidate() will also be called when the
     * reference count of a closure drops to zero (unless it has already
     * been invalidated before).
     */
    invalidate(): void
    /**
     * Invokes the closure, i.e. executes the callback represented by the `closure`.
     * @param param_values an array of                #GValues holding the arguments on which to                invoke the callback of `closure`
     * @param invocation_hint a context-dependent invocation hint
     */
    invoke(param_values: any[], invocation_hint?: object | null): /* return_value */ any | null
    /**
     * Increments the reference count on a closure to force it staying
     * alive while the caller holds a pointer to it.
     */
    ref(): Function
    /**
     * Takes over the initial ownership of a closure.
     * 
     * Each closure is initially created in a "floating" state, which means
     * that the initial reference count is not owned by any caller.
     * 
     * This function checks to see if the object is still floating, and if so,
     * unsets the floating state and decreases the reference count. If the
     * closure is not floating, g_closure_sink() does nothing.
     * 
     * The reason for the existence of the floating state is to prevent
     * cumbersome code sequences like:
     * 
     * 
     * ```c
     * closure = g_cclosure_new (cb_func, cb_data);
     * g_source_set_closure (source, closure);
     * g_closure_unref (closure); // GObject doesn't really need this
     * ```
     * 
     * 
     * Because g_source_set_closure() (and similar functions) take ownership of the
     * initial reference count, if it is unowned, we instead can write:
     * 
     * 
     * ```c
     * g_source_set_closure (source, g_cclosure_new (cb_func, cb_data));
     * ```
     * 
     * 
     * Generally, this function is used together with g_closure_ref(). An example
     * of storing a closure for later notification looks like:
     * 
     * 
     * ```c
     * static GClosure *notify_closure = NULL;
     * void
     * foo_notify_set_closure (GClosure *closure)
     * {
     *   if (notify_closure)
     *     g_closure_unref (notify_closure);
     *   notify_closure = closure;
     *   if (notify_closure)
     *     {
     *       g_closure_ref (notify_closure);
     *       g_closure_sink (notify_closure);
     *     }
     * }
     * ```
     * 
     * 
     * Because g_closure_sink() may decrement the reference count of a closure
     * (if it hasn't been called on `closure` yet) just like g_closure_unref(),
     * g_closure_ref() should be called prior to this function.
     */
    sink(): void
    /**
     * Decrements the reference count of a closure after it was previously
     * incremented by the same caller.
     * 
     * If no other callers are using the closure, then the closure will be
     * destroyed and freed.
     */
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static new_object(sizeof_closure: number, object: Object): Closure
    static new_simple(sizeof_closure: number, data?: object | null): Closure
}
class ClosureNotifyData {
    /* Fields of GObject-2.0.GObject.ClosureNotifyData */
    data: object
    notify: ClosureNotify
    static name: string
}
class EnumClass {
    /* Fields of GObject-2.0.GObject.EnumClass */
    /**
     * the parent class
     */
    g_type_class: TypeClass
    /**
     * the smallest possible value.
     */
    minimum: number
    /**
     * the largest possible value.
     */
    maximum: number
    /**
     * the number of possible values.
     */
    n_values: number
    /**
     * an array of #GEnumValue structs describing the
     *  individual values.
     */
    values: EnumValue
    static name: string
}
class EnumValue {
    /* Fields of GObject-2.0.GObject.EnumValue */
    /**
     * the enum value
     */
    value: number
    /**
     * the name of the value
     */
    value_name: string
    /**
     * the nickname of the value
     */
    value_nick: string
    static name: string
}
class FlagsClass {
    /* Fields of GObject-2.0.GObject.FlagsClass */
    /**
     * the parent class
     */
    g_type_class: TypeClass
    /**
     * a mask covering all possible values.
     */
    mask: number
    /**
     * the number of possible values.
     */
    n_values: number
    /**
     * an array of #GFlagsValue structs describing the
     *  individual values.
     */
    values: FlagsValue
    static name: string
}
class FlagsValue {
    /* Fields of GObject-2.0.GObject.FlagsValue */
    /**
     * the flags value
     */
    value: number
    /**
     * the name of the value
     */
    value_name: string
    /**
     * the nickname of the value
     */
    value_nick: string
    static name: string
}
abstract class InitiallyUnownedClass {
    /* Fields of GObject-2.0.GObject.InitiallyUnownedClass */
    /**
     * the parent class
     */
    g_type_class: TypeClass
    set_property: (object: Object, property_id: number, value: any, pspec: ParamSpec) => void
    get_property: (object: Object, property_id: number, value: any, pspec: ParamSpec) => void
    dispose: (object: Object) => void
    finalize: (object: Object) => void
    dispatch_properties_changed: (object: Object, n_pspecs: number, pspecs: ParamSpec) => void
    notify: (object: Object, pspec: ParamSpec) => void
    constructed: (object: Object) => void
    static name: string
}
class InterfaceInfo {
    /* Fields of GObject-2.0.GObject.InterfaceInfo */
    /**
     * location of the interface initialization function
     */
    interface_init: InterfaceInitFunc
    /**
     * location of the interface finalization function
     */
    interface_finalize: InterfaceFinalizeFunc
    /**
     * user-supplied data passed to the interface init/finalize functions
     */
    interface_data: object
    static name: string
}
abstract class ObjectClass {
    /* Fields of GObject-2.0.GObject.ObjectClass */
    /**
     * the parent class
     */
    g_type_class: TypeClass
    set_property: (object: Object, property_id: number, value: any, pspec: ParamSpec) => void
    get_property: (object: Object, property_id: number, value: any, pspec: ParamSpec) => void
    dispose: (object: Object) => void
    finalize: (object: Object) => void
    dispatch_properties_changed: (object: Object, n_pspecs: number, pspecs: ParamSpec) => void
    notify: (object: Object, pspec: ParamSpec) => void
    constructed: (object: Object) => void
    /* Methods of GObject-2.0.GObject.ObjectClass */
    /**
     * Looks up the #GParamSpec for a property of a class.
     * @param property_name the name of the property to look up
     */
    static find_property(oclass: Object | Function | Type, property_name: string): ParamSpec
    /**
     * Installs new properties from an array of #GParamSpecs.
     * 
     * All properties should be installed during the class initializer.  It
     * is possible to install properties after that, but doing so is not
     * recommend, and specifically, is not guaranteed to be thread-safe vs.
     * use of properties on the same type on other threads.
     * 
     * The property id of each property is the index of each #GParamSpec in
     * the `pspecs` array.
     * 
     * The property id of 0 is treated specially by #GObject and it should not
     * be used to store a #GParamSpec.
     * 
     * This function should be used if you plan to use a static array of
     * #GParamSpecs and g_object_notify_by_pspec(). For instance, this
     * class initialization:
     * 
     * 
     * ```c
     * enum {
     *   PROP_0, PROP_FOO, PROP_BAR, N_PROPERTIES
     * };
     * 
     * static GParamSpec *obj_properties[N_PROPERTIES] = { NULL, };
     * 
     * static void
     * my_object_class_init (MyObjectClass *klass)
     * {
     *   GObjectClass *gobject_class = G_OBJECT_CLASS (klass);
     * 
     *   obj_properties[PROP_FOO] =
     *     g_param_spec_int ("foo", "Foo", "Foo",
     *                       -1, G_MAXINT,
     *                       0,
     *                       G_PARAM_READWRITE);
     * 
     *   obj_properties[PROP_BAR] =
     *     g_param_spec_string ("bar", "Bar", "Bar",
     *                          NULL,
     *                          G_PARAM_READWRITE);
     * 
     *   gobject_class->set_property = my_object_set_property;
     *   gobject_class->get_property = my_object_get_property;
     *   g_object_class_install_properties (gobject_class,
     *                                      N_PROPERTIES,
     *                                      obj_properties);
     * }
     * ```
     * 
     * 
     * allows calling g_object_notify_by_pspec() to notify of property changes:
     * 
     * 
     * ```c
     * void
     * my_object_set_foo (MyObject *self, gint foo)
     * {
     *   if (self->foo != foo)
     *     {
     *       self->foo = foo;
     *       g_object_notify_by_pspec (G_OBJECT (self), obj_properties[PROP_FOO]);
     *     }
     *  }
     * ```
     * 
     * @param pspecs the #GParamSpecs array   defining the new properties
     */
    static install_properties(oclass: Object | Function | Type, pspecs: ParamSpec[]): void
    /**
     * Installs a new property.
     * 
     * All properties should be installed during the class initializer.  It
     * is possible to install properties after that, but doing so is not
     * recommend, and specifically, is not guaranteed to be thread-safe vs.
     * use of properties on the same type on other threads.
     * 
     * Note that it is possible to redefine a property in a derived class,
     * by installing a property with the same name. This can be useful at times,
     * e.g. to change the range of allowed values or the default value.
     * @param property_id the id for the new property
     * @param pspec the #GParamSpec for the new property
     */
    static install_property(oclass: Object | Function | Type, property_id: number, pspec: ParamSpec): void
    /**
     * Get an array of #GParamSpec* for all properties of a class.
     */
    static list_properties(oclass: Object | Function | Type): ParamSpec[]
    /**
     * Registers `property_id` as referring to a property with the name
     * `name` in a parent class or in an interface implemented by `oclass`.
     * This allows this class to "override" a property implementation in
     * a parent class or to provide the implementation of a property from
     * an interface.
     * 
     * Internally, overriding is implemented by creating a property of type
     * #GParamSpecOverride; generally operations that query the properties of
     * the object class, such as g_object_class_find_property() or
     * g_object_class_list_properties() will return the overridden
     * property. However, in one case, the `construct_properties` argument of
     * the `constructor` virtual function, the #GParamSpecOverride is passed
     * instead, so that the `param_id` field of the #GParamSpec will be
     * correct.  For virtually all uses, this makes no difference. If you
     * need to get the overridden property, you can call
     * g_param_spec_get_redirect_target().
     * @param property_id the new property ID
     * @param name the name of a property registered in a parent class or  in an interface of this class.
     */
    static override_property(oclass: Object | Function | Type, property_id: number, name: string): void
    static name: string
}
class ObjectConstructParam {
    /* Fields of GObject-2.0.GObject.ObjectConstructParam */
    /**
     * the #GParamSpec of the construct parameter
     */
    pspec: ParamSpec
    /**
     * the value to set the parameter to
     */
    value: any
    static name: string
}
abstract class ParamSpecClass {
    /* Fields of GObject-2.0.GObject.ParamSpecClass */
    /**
     * the parent class
     */
    g_type_class: TypeClass
    /**
     * the #GValue type for this parameter
     */
    value_type: Type
    finalize: (pspec: ParamSpec) => void
    value_set_default: (pspec: ParamSpec, value: any) => void
    value_validate: (pspec: ParamSpec, value: any) => boolean
    values_cmp: (pspec: ParamSpec, value1: any, value2: any) => number
    static name: string
}
class ParamSpecPool {
    /* Methods of GObject-2.0.GObject.ParamSpecPool */
    /**
     * Inserts a #GParamSpec in the pool.
     * @param pspec the #GParamSpec to insert
     * @param owner_type a #GType identifying the owner of `pspec`
     */
    insert(pspec: ParamSpec, owner_type: Type): void
    /**
     * Gets an array of all #GParamSpecs owned by `owner_type` in
     * the pool.
     * @param owner_type the owner to look for
     */
    list(owner_type: Type): ParamSpec[]
    /**
     * Gets an #GList of all #GParamSpecs owned by `owner_type` in
     * the pool.
     * @param owner_type the owner to look for
     */
    list_owned(owner_type: Type): ParamSpec[]
    /**
     * Looks up a #GParamSpec in the pool.
     * @param param_name the name to look for
     * @param owner_type the owner to look for
     * @param walk_ancestors If %TRUE, also try to find a #GParamSpec with `param_name`  owned by an ancestor of `owner_type`.
     */
    lookup(param_name: string, owner_type: Type, walk_ancestors: boolean): ParamSpec | null
    /**
     * Removes a #GParamSpec from the pool.
     * @param pspec the #GParamSpec to remove
     */
    remove(pspec: ParamSpec): void
    static name: string
}
class ParamSpecTypeInfo {
    /* Fields of GObject-2.0.GObject.ParamSpecTypeInfo */
    /**
     * Size of the instance (object) structure.
     */
    instance_size: number
    /**
     * Prior to GLib 2.10, it specified the number of pre-allocated (cached) instances to reserve memory for (0 indicates no caching). Since GLib 2.10, it is ignored, since instances are allocated with the [slice allocator][glib-Memory-Slices] now.
     */
    n_preallocs: number
    instance_init: (pspec: ParamSpec) => void
    /**
     * The #GType of values conforming to this #GParamSpec
     */
    value_type: Type
    finalize: (pspec: ParamSpec) => void
    value_set_default: (pspec: ParamSpec, value: any) => void
    value_validate: (pspec: ParamSpec, value: any) => boolean
    values_cmp: (pspec: ParamSpec, value1: any, value2: any) => number
    static name: string
}
class Parameter {
    /* Fields of GObject-2.0.GObject.Parameter */
    /**
     * the parameter name
     */
    name: string
    /**
     * the parameter value
     */
    value: any
    static name: string
}
class SignalInvocationHint {
    /* Fields of GObject-2.0.GObject.SignalInvocationHint */
    /**
     * The signal id of the signal invoking the callback
     */
    signal_id: number
    /**
     * The detail passed on for this emission
     */
    detail: GLib.Quark
    /**
     * The stage the signal emission is currently in, this
     *  field will contain one of %G_SIGNAL_RUN_FIRST,
     *  %G_SIGNAL_RUN_LAST or %G_SIGNAL_RUN_CLEANUP and %G_SIGNAL_ACCUMULATOR_FIRST_RUN.
     *  %G_SIGNAL_ACCUMULATOR_FIRST_RUN is only set for the first run of the accumulator
     *  function for a signal emission.
     */
    run_type: SignalFlags
    static name: string
}
class SignalQuery {
    /* Fields of GObject-2.0.GObject.SignalQuery */
    /**
     * The signal id of the signal being queried, or 0 if the
     *  signal to be queried was unknown.
     */
    signal_id: number
    /**
     * The signal name.
     */
    signal_name: string
    /**
     * The interface/instance type that this signal can be emitted for.
     */
    itype: Type
    /**
     * The signal flags as passed in to g_signal_new().
     */
    signal_flags: SignalFlags
    /**
     * The return type for user callbacks.
     */
    return_type: Type
    /**
     * The number of parameters that user callbacks take.
     */
    n_params: number
    /**
     * The individual parameter types for
     *  user callbacks, note that the effective callback signature is:
     *  
     * ```c
     *  `return_type` callback (#gpointer     data1,
     *  [param_types param_names,]
     *  gpointer     data2);
     *  ```
     * 
     */
    param_types: Type[]
    static name: string
}
class TypeClass {
    /* Methods of GObject-2.0.GObject.TypeClass */
    /**
     * Registers a private structure for an instantiatable type.
     * 
     * When an object is allocated, the private structures for
     * the type and all of its parent types are allocated
     * sequentially in the same memory block as the public
     * structures, and are zero-filled.
     * 
     * Note that the accumulated size of the private structures of
     * a type and all its parent types cannot exceed 64 KiB.
     * 
     * This function should be called in the type's class_init() function.
     * The private structure can be retrieved using the
     * G_TYPE_INSTANCE_GET_PRIVATE() macro.
     * 
     * The following example shows attaching a private structure
     * MyObjectPrivate to an object MyObject defined in the standard
     * GObject fashion in the type's class_init() function.
     * 
     * Note the use of a structure member "priv" to avoid the overhead
     * of repeatedly calling MY_OBJECT_GET_PRIVATE().
     * 
     * 
     * ```c
     * typedef struct _MyObject        MyObject;
     * typedef struct _MyObjectPrivate MyObjectPrivate;
     * 
     * struct _MyObject {
     *  GObject parent;
     * 
     *  MyObjectPrivate *priv;
     * };
     * 
     * struct _MyObjectPrivate {
     *   int some_field;
     * };
     * 
     * static void
     * my_object_class_init (MyObjectClass *klass)
     * {
     *   g_type_class_add_private (klass, sizeof (MyObjectPrivate));
     * }
     * 
     * static void
     * my_object_init (MyObject *my_object)
     * {
     *   my_object->priv = G_TYPE_INSTANCE_GET_PRIVATE (my_object,
     *                                                  MY_TYPE_OBJECT,
     *                                                  MyObjectPrivate);
     *   // my_object->priv->some_field will be automatically initialised to 0
     * }
     * 
     * static int
     * my_object_get_some_field (MyObject *my_object)
     * {
     *   MyObjectPrivate *priv;
     * 
     *   g_return_val_if_fail (MY_IS_OBJECT (my_object), 0);
     * 
     *   priv = my_object->priv;
     * 
     *   return priv->some_field;
     * }
     * ```
     * 
     * @param private_size size of private structure
     */
    add_private(private_size: number): void
    get_private(private_type: Type): object | null
    /**
     * This is a convenience function often needed in class initializers.
     * It returns the class structure of the immediate parent type of the
     * class passed in.  Since derived classes hold a reference count on
     * their parent classes as long as they are instantiated, the returned
     * class will always exist.
     * 
     * This function is essentially equivalent to:
     * g_type_class_peek (g_type_parent (G_TYPE_FROM_CLASS (g_class)))
     */
    peek_parent(): TypeClass
    /**
     * Decrements the reference count of the class structure being passed in.
     * Once the last reference count of a class has been released, classes
     * may be finalized by the type system, so further dereferencing of a
     * class pointer after g_type_class_unref() are invalid.
     */
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static adjust_private_offset(g_class: object | null, private_size_or_offset: number): void
    /**
     * This function is essentially the same as g_type_class_ref(),
     * except that the classes reference count isn't incremented.
     * As a consequence, this function may return %NULL if the class
     * of the type passed in does not currently exist (hasn't been
     * referenced before).
     * @param type type ID of a classed type
     */
    static peek(type: Type): TypeClass
    /**
     * A more efficient version of g_type_class_peek() which works only for
     * static types.
     * @param type type ID of a classed type
     */
    static peek_static(type: Type): TypeClass
    /**
     * Increments the reference count of the class structure belonging to
     * `type`. This function will demand-create the class if it doesn't
     * exist already.
     * @param type type ID of a classed type
     */
    static ref(type: Type): TypeClass
}
class TypeFundamentalInfo {
    /* Fields of GObject-2.0.GObject.TypeFundamentalInfo */
    /**
     * #GTypeFundamentalFlags describing the characteristics of the fundamental type
     */
    type_flags: TypeFundamentalFlags
    static name: string
}
class TypeInfo {
    /* Fields of GObject-2.0.GObject.TypeInfo */
    /**
     * Size of the class structure (required for interface, classed and instantiatable types)
     */
    class_size: number
    /**
     * Location of the base initialization function (optional)
     */
    base_init: BaseInitFunc
    /**
     * Location of the base finalization function (optional)
     */
    base_finalize: BaseFinalizeFunc
    /**
     * Location of the class initialization function for
     *  classed and instantiatable types. Location of the default vtable
     *  inititalization function for interface types. (optional) This function
     *  is used both to fill in virtual functions in the class or default vtable,
     *  and to do type-specific setup such as registering signals and object
     *  properties.
     */
    class_init: ClassInitFunc
    /**
     * Location of the class finalization function for
     *  classed and instantiatable types. Location of the default vtable
     *  finalization function for interface types. (optional)
     */
    class_finalize: ClassFinalizeFunc
    /**
     * User-supplied data passed to the class init/finalize functions
     */
    class_data: object
    /**
     * Size of the instance (object) structure (required for instantiatable types only)
     */
    instance_size: number
    /**
     * Prior to GLib 2.10, it specified the number of pre-allocated (cached) instances to reserve memory for (0 indicates no caching). Since GLib 2.10, it is ignored, since instances are allocated with the [slice allocator][glib-Memory-Slices] now.
     */
    n_preallocs: number
    /**
     * Location of the instance initialization function (optional, for instantiatable types only)
     */
    instance_init: InstanceInitFunc
    /**
     * A #GTypeValueTable function table for generic handling of GValues
     *  of this type (usually only useful for fundamental types)
     */
    value_table: TypeValueTable
    static name: string
}
class TypeInstance {
    /* Methods of GObject-2.0.GObject.TypeInstance */
    get_private(private_type: Type): object | null
    static name: string
}
class TypeInterface {
    /* Methods of GObject-2.0.GObject.TypeInterface */
    /**
     * Returns the corresponding #GTypeInterface structure of the parent type
     * of the instance type to which `g_iface` belongs. This is useful when
     * deriving the implementation of an interface from the parent type and
     * then possibly overriding some methods.
     */
    peek_parent(): TypeInterface
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Adds `prerequisite_type` to the list of prerequisites of `interface_type`.
     * This means that any type implementing `interface_type` must also implement
     * `prerequisite_type`. Prerequisites can be thought of as an alternative to
     * interface derivation (which GType doesn't support). An interface can have
     * at most one instantiatable prerequisite type.
     * @param interface_type #GType value of an interface type
     * @param prerequisite_type #GType value of an interface or instantiatable type
     */
    static add_prerequisite(interface_type: Type, prerequisite_type: Type): void
    /**
     * Returns the #GTypePlugin structure for the dynamic interface
     * `interface_type` which has been added to `instance_type,` or %NULL
     * if `interface_type` has not been added to `instance_type` or does
     * not have a #GTypePlugin structure. See g_type_add_interface_dynamic().
     * @param instance_type #GType of an instantiatable type
     * @param interface_type #GType of an interface type
     */
    static get_plugin(instance_type: Type, interface_type: Type): TypePlugin
    /**
     * Returns the most specific instantiatable prerequisite of an
     * interface type. If the interface type has no instantiatable
     * prerequisite, %G_TYPE_INVALID is returned.
     * 
     * See g_type_interface_add_prerequisite() for more information
     * about prerequisites.
     * @param interface_type an interface type
     */
    static instantiatable_prerequisite(interface_type: Type): Type
    /**
     * Returns the #GTypeInterface structure of an interface to which the
     * passed in class conforms.
     * @param instance_class a #GTypeClass structure
     * @param iface_type an interface ID which this class conforms to
     */
    static peek(instance_class: TypeClass, iface_type: Type): TypeInterface
    /**
     * Returns the prerequisites of an interfaces type.
     * @param interface_type an interface type
     */
    static prerequisites(interface_type: Type): Type[]
}
abstract class TypeModuleClass {
    /* Fields of GObject-2.0.GObject.TypeModuleClass */
    /**
     * the parent class
     */
    parent_class: ObjectClass
    load: (module: TypeModule) => boolean
    unload: (module: TypeModule) => void
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    static name: string
}
class TypePluginClass {
    /* Fields of GObject-2.0.GObject.TypePluginClass */
    /**
     * Increases the use count of the plugin.
     */
    use_plugin: TypePluginUse
    /**
     * Decreases the use count of the plugin.
     */
    unuse_plugin: TypePluginUnuse
    /**
     * Fills in the #GTypeInfo and
     *  #GTypeValueTable structs for the type. The structs are initialized
     *  with `memset(s, 0, sizeof (s))` before calling this function.
     */
    complete_type_info: TypePluginCompleteTypeInfo
    /**
     * Fills in missing parts of the #GInterfaceInfo
     *  for the interface. The structs is initialized with
     *  `memset(s, 0, sizeof (s))` before calling this function.
     */
    complete_interface_info: TypePluginCompleteInterfaceInfo
    static name: string
}
class TypeQuery {
    /* Fields of GObject-2.0.GObject.TypeQuery */
    /**
     * the #GType value of the type
     */
    type: Type
    /**
     * the name of the type
     */
    type_name: string
    /**
     * the size of the class structure
     */
    class_size: number
    /**
     * the size of the instance structure
     */
    instance_size: number
    static name: string
}
class TypeValueTable {
    /* Fields of GObject-2.0.GObject.TypeValueTable */
    value_init: (value: any) => void
    value_free: (value: any) => void
    value_copy: (src_value: any, dest_value: any) => void
    value_peek_pointer: (value: any) => object
    /**
     * A string format describing how to collect the contents of
     *  this value bit-by-bit. Each character in the format represents
     *  an argument to be collected, and the characters themselves indicate
     *  the type of the argument. Currently supported arguments are:
     *  - 'i' - Integers. passed as collect_values[].v_int.
     *  - 'l' - Longs. passed as collect_values[].v_long.
     *  - 'd' - Doubles. passed as collect_values[].v_double.
     *  - 'p' - Pointers. passed as collect_values[].v_pointer.
     *  It should be noted that for variable argument list construction,
     *  ANSI C promotes every type smaller than an integer to an int, and
     *  floats to doubles. So for collection of short int or char, 'i'
     *  needs to be used, and for collection of floats 'd'.
     */
    collect_format: string
    collect_value: (value: any, n_collect_values: number, collect_values: TypeCValue, collect_flags: number) => string
    /**
     * Format description of the arguments to collect for `lcopy_value,`
     *  analogous to `collect_format`. Usually, `lcopy_format` string consists
     *  only of 'p's to provide lcopy_value() with pointers to storage locations.
     */
    lcopy_format: string
    lcopy_value: (value: any, n_collect_values: number, collect_values: TypeCValue, collect_flags: number) => string
    static name: string
}
class Value {
    /* Fields of GObject-2.0.GObject.Value */
    data: _Value__data__union[]
    /* Methods of GObject-2.0.GObject.Value */
    /**
     * Copies the value of `src_value` into `dest_value`.
     * @param dest_value An initialized #GValue structure of the same type as `src_value`.
     */
    copy(dest_value: any): void
    /**
     * Get the contents of a %G_TYPE_OBJECT derived #GValue, increasing
     * its reference count. If the contents of the #GValue are %NULL, then
     * %NULL will be returned.
     */
    dup_object(): Object
    /**
     * Get a copy the contents of a %G_TYPE_STRING #GValue.
     */
    dup_string(): string
    /**
     * Get the contents of a variant #GValue, increasing its refcount. The returned
     * #GVariant is never floating.
     */
    dup_variant(): GLib.Variant | null
    /**
     * Determines if `value` will fit inside the size of a pointer value.
     * This is an internal function introduced mainly for C marshallers.
     */
    fits_pointer(): boolean
    /**
     * Get the contents of a %G_TYPE_BOOLEAN #GValue.
     */
    get_boolean(): boolean
    /**
     * Get the contents of a %G_TYPE_BOXED derived #GValue.
     */
    get_boxed(): object | null
    /**
     * Do not use this function; it is broken on platforms where the %char
     * type is unsigned, such as ARM and PowerPC.  See g_value_get_schar().
     * 
     * Get the contents of a %G_TYPE_CHAR #GValue.
     */
    get_char(): number
    /**
     * Get the contents of a %G_TYPE_DOUBLE #GValue.
     */
    get_double(): number
    /**
     * Get the contents of a %G_TYPE_ENUM #GValue.
     */
    get_enum(): number
    /**
     * Get the contents of a %G_TYPE_FLAGS #GValue.
     */
    get_flags(): number
    /**
     * Get the contents of a %G_TYPE_FLOAT #GValue.
     */
    get_float(): number
    /**
     * Get the contents of a %G_TYPE_GTYPE #GValue.
     */
    get_gtype(): Type
    /**
     * Get the contents of a %G_TYPE_INT #GValue.
     */
    get_int(): number
    /**
     * Get the contents of a %G_TYPE_INT64 #GValue.
     */
    get_int64(): number
    /**
     * Get the contents of a %G_TYPE_LONG #GValue.
     */
    get_long(): number
    /**
     * Get the contents of a %G_TYPE_OBJECT derived #GValue.
     */
    get_object(): Object
    /**
     * Get the contents of a %G_TYPE_PARAM #GValue.
     */
    get_param(): ParamSpec
    /**
     * Get the contents of a pointer #GValue.
     */
    get_pointer(): object | null
    /**
     * Get the contents of a %G_TYPE_CHAR #GValue.
     */
    get_schar(): number
    /**
     * Get the contents of a %G_TYPE_STRING #GValue.
     */
    get_string(): string
    /**
     * Get the contents of a %G_TYPE_UCHAR #GValue.
     */
    get_uchar(): number
    /**
     * Get the contents of a %G_TYPE_UINT #GValue.
     */
    get_uint(): number
    /**
     * Get the contents of a %G_TYPE_UINT64 #GValue.
     */
    get_uint64(): number
    /**
     * Get the contents of a %G_TYPE_ULONG #GValue.
     */
    get_ulong(): number
    /**
     * Get the contents of a variant #GValue.
     */
    get_variant(): GLib.Variant | null
    /**
     * Initializes `value` with the default value of `type`.
     * @param g_type Type the #GValue should hold values of.
     */
    init(g_type: Type): any
    /**
     * Initializes and sets `value` from an instantiatable type via the
     * value_table's collect_value() function.
     * 
     * Note: The `value` will be initialised with the exact type of
     * `instance`.  If you wish to set the `value'`s type to a different GType
     * (such as a parent class GType), you need to manually call
     * g_value_init() and g_value_set_instance().
     * @param instance the instance
     */
    init_from_instance(instance: TypeInstance): void
    /**
     * Returns the value contents as pointer. This function asserts that
     * g_value_fits_pointer() returned %TRUE for the passed in value.
     * This is an internal function introduced mainly for C marshallers.
     */
    peek_pointer(): object | null
    /**
     * Clears the current value in `value` and resets it to the default value
     * (as if the value had just been initialized).
     */
    reset(): any
    /**
     * Set the contents of a %G_TYPE_BOOLEAN #GValue to `v_boolean`.
     * @param v_boolean boolean value to be set
     */
    set_boolean(v_boolean: boolean): void
    /**
     * Set the contents of a %G_TYPE_BOXED derived #GValue to `v_boxed`.
     * @param v_boxed boxed value to be set
     */
    set_boxed(v_boxed?: object | null): void
    /**
     * This is an internal function introduced mainly for C marshallers.
     * @param v_boxed duplicated unowned boxed value to be set
     */
    set_boxed_take_ownership(v_boxed?: object | null): void
    /**
     * Set the contents of a %G_TYPE_CHAR #GValue to `v_char`.
     * @param v_char character value to be set
     */
    set_char(v_char: number): void
    /**
     * Set the contents of a %G_TYPE_DOUBLE #GValue to `v_double`.
     * @param v_double double value to be set
     */
    set_double(v_double: number): void
    /**
     * Set the contents of a %G_TYPE_ENUM #GValue to `v_enum`.
     * @param v_enum enum value to be set
     */
    set_enum(v_enum: number): void
    /**
     * Set the contents of a %G_TYPE_FLAGS #GValue to `v_flags`.
     * @param v_flags flags value to be set
     */
    set_flags(v_flags: number): void
    /**
     * Set the contents of a %G_TYPE_FLOAT #GValue to `v_float`.
     * @param v_float float value to be set
     */
    set_float(v_float: number): void
    /**
     * Set the contents of a %G_TYPE_GTYPE #GValue to `v_gtype`.
     * @param v_gtype #GType to be set
     */
    set_gtype(v_gtype: Type): void
    /**
     * Sets `value` from an instantiatable type via the
     * value_table's collect_value() function.
     * @param instance the instance
     */
    set_instance(instance?: object | null): void
    /**
     * Set the contents of a %G_TYPE_INT #GValue to `v_int`.
     * @param v_int integer value to be set
     */
    set_int(v_int: number): void
    /**
     * Set the contents of a %G_TYPE_INT64 #GValue to `v_int6`4.
     * @param v_int64 64bit integer value to be set
     */
    set_int64(v_int64: number): void
    /**
     * Set the contents of a %G_TYPE_STRING #GValue to `v_string`.  The string is
     * assumed to be static and interned (canonical, for example from
     * g_intern_string()), and is thus not duplicated when setting the #GValue.
     * @param v_string static string to be set
     */
    set_interned_string(v_string?: string | null): void
    /**
     * Set the contents of a %G_TYPE_LONG #GValue to `v_long`.
     * @param v_long long integer value to be set
     */
    set_long(v_long: number): void
    /**
     * Set the contents of a %G_TYPE_OBJECT derived #GValue to `v_object`.
     * 
     * g_value_set_object() increases the reference count of `v_object`
     * (the #GValue holds a reference to `v_object)`.  If you do not wish
     * to increase the reference count of the object (i.e. you wish to
     * pass your current reference to the #GValue because you no longer
     * need it), use g_value_take_object() instead.
     * 
     * It is important that your #GValue holds a reference to `v_object` (either its
     * own, or one it has taken) to ensure that the object won't be destroyed while
     * the #GValue still exists).
     * @param v_object object value to be set
     */
    set_object(v_object?: Object | null): void
    /**
     * Set the contents of a %G_TYPE_PARAM #GValue to `param`.
     * @param param the #GParamSpec to be set
     */
    set_param(param?: ParamSpec | null): void
    /**
     * Set the contents of a pointer #GValue to `v_pointer`.
     * @param v_pointer pointer value to be set
     */
    set_pointer(v_pointer?: object | null): void
    /**
     * Set the contents of a %G_TYPE_CHAR #GValue to `v_char`.
     * @param v_char signed 8 bit integer to be set
     */
    set_schar(v_char: number): void
    /**
     * Set the contents of a %G_TYPE_BOXED derived #GValue to `v_boxed`.
     * 
     * The boxed value is assumed to be static, and is thus not duplicated
     * when setting the #GValue.
     * @param v_boxed static boxed value to be set
     */
    set_static_boxed(v_boxed?: object | null): void
    /**
     * Set the contents of a %G_TYPE_STRING #GValue to `v_string`.
     * The string is assumed to be static, and is thus not duplicated
     * when setting the #GValue.
     * 
     * If the the string is a canonical string, using g_value_set_interned_string()
     * is more appropriate.
     * @param v_string static string to be set
     */
    set_static_string(v_string?: string | null): void
    /**
     * Set the contents of a %G_TYPE_STRING #GValue to a copy of `v_string`.
     * @param v_string caller-owned string to be duplicated for the #GValue
     */
    set_string(v_string?: string | null): void
    /**
     * This is an internal function introduced mainly for C marshallers.
     * @param v_string duplicated unowned string to be set
     */
    set_string_take_ownership(v_string?: string | null): void
    /**
     * Set the contents of a %G_TYPE_UCHAR #GValue to `v_uchar`.
     * @param v_uchar unsigned character value to be set
     */
    set_uchar(v_uchar: number): void
    /**
     * Set the contents of a %G_TYPE_UINT #GValue to `v_uint`.
     * @param v_uint unsigned integer value to be set
     */
    set_uint(v_uint: number): void
    /**
     * Set the contents of a %G_TYPE_UINT64 #GValue to `v_uint6`4.
     * @param v_uint64 unsigned 64bit integer value to be set
     */
    set_uint64(v_uint64: number): void
    /**
     * Set the contents of a %G_TYPE_ULONG #GValue to `v_ulong`.
     * @param v_ulong unsigned long integer value to be set
     */
    set_ulong(v_ulong: number): void
    /**
     * Set the contents of a variant #GValue to `variant`.
     * If the variant is floating, it is consumed.
     * @param variant a #GVariant, or %NULL
     */
    set_variant(variant?: GLib.Variant | null): void
    /**
     * Sets the contents of a %G_TYPE_BOXED derived #GValue to `v_boxed`
     * and takes over the ownership of the caller’s reference to `v_boxed;`
     * the caller doesn’t have to unref it any more.
     * @param v_boxed duplicated unowned boxed value to be set
     */
    take_boxed(v_boxed?: object | null): void
    /**
     * Sets the contents of a %G_TYPE_STRING #GValue to `v_string`.
     * @param v_string string to take ownership of
     */
    take_string(v_string?: string | null): void
    /**
     * Set the contents of a variant #GValue to `variant,` and takes over
     * the ownership of the caller's reference to `variant;`
     * the caller doesn't have to unref it any more (i.e. the reference
     * count of the variant is not increased).
     * 
     * If `variant` was floating then its floating reference is converted to
     * a hard reference.
     * 
     * If you want the #GValue to hold its own reference to `variant,` use
     * g_value_set_variant() instead.
     * 
     * This is an internal function introduced mainly for C marshallers.
     * @param variant a #GVariant, or %NULL
     */
    take_variant(variant?: GLib.Variant | null): void
    /**
     * Tries to cast the contents of `src_value` into a type appropriate
     * to store in `dest_value,` e.g. to transform a %G_TYPE_INT value
     * into a %G_TYPE_FLOAT value. Performing transformations between
     * value types might incur precision lossage. Especially
     * transformations into strings might reveal seemingly arbitrary
     * results and shouldn't be relied upon for production code (such
     * as rcfile value or object property serialization).
     * @param dest_value Target value.
     */
    transform(dest_value: any): boolean
    /**
     * Clears the current value in `value` (if any) and "unsets" the type,
     * this releases all resources associated with this GValue. An unset
     * value is the same as an uninitialized (zero-filled) #GValue
     * structure.
     */
    unset(): void
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Returns whether a #GValue of type `src_type` can be copied into
     * a #GValue of type `dest_type`.
     * @param src_type source type to be copied.
     * @param dest_type destination type for copying.
     */
    static type_compatible(src_type: Type, dest_type: Type): boolean
    /**
     * Check whether g_value_transform() is able to transform values
     * of type `src_type` into values of type `dest_type`. Note that for
     * the types to be transformable, they must be compatible or a
     * transformation function must be registered.
     * @param src_type Source type.
     * @param dest_type Target type.
     */
    static type_transformable(src_type: Type, dest_type: Type): boolean
}
class ValueArray {
    /* Fields of GObject-2.0.GObject.ValueArray */
    /**
     * number of values contained in the array
     */
    n_values: number
    /**
     * array of values
     */
    values: any
    /* Methods of GObject-2.0.GObject.ValueArray */
    /**
     * Insert a copy of `value` as last element of `value_array`. If `value` is
     * %NULL, an uninitialized value is appended.
     * @param value #GValue to copy into #GValueArray, or %NULL
     */
    append(value?: any | null): ValueArray
    /**
     * Construct an exact copy of a #GValueArray by duplicating all its
     * contents.
     */
    copy(): ValueArray
    /**
     * Return a pointer to the value at `index_` containd in `value_array`.
     * @param index_ index of the value of interest
     */
    get_nth(index_: number): any
    /**
     * Insert a copy of `value` at specified position into `value_array`. If `value`
     * is %NULL, an uninitialized value is inserted.
     * @param index_ insertion position, must be <= value_array->;n_values
     * @param value #GValue to copy into #GValueArray, or %NULL
     */
    insert(index_: number, value?: any | null): ValueArray
    /**
     * Insert a copy of `value` as first element of `value_array`. If `value` is
     * %NULL, an uninitialized value is prepended.
     * @param value #GValue to copy into #GValueArray, or %NULL
     */
    prepend(value?: any | null): ValueArray
    /**
     * Remove the value at position `index_` from `value_array`.
     * @param index_ position of value to remove, which must be less than     `value_array->`n_values
     */
    remove(index_: number): ValueArray
    /**
     * Sort `value_array` using `compare_func` to compare the elements according
     * to the semantics of #GCompareDataFunc.
     * 
     * The current implementation uses the same sorting algorithm as standard
     * C qsort() function.
     * @param compare_func function to compare elements
     */
    sort(compare_func: GLib.CompareDataFunc): ValueArray
    static name: string
    static new(n_prealloced: number): ValueArray
    constructor(n_prealloced: number)
    /* Static methods and pseudo-constructors */
    static new(n_prealloced: number): ValueArray
}
class WeakRef {
    static name: string
}
class TypeCValue {
    static name: string
}
class _Value__data__union {
    static name: string
}
    type SignalCMarshaller = ClosureMarshal
    type SignalCVaMarshaller = any
export interface Type {
    name: string
}
}
export default GObject;