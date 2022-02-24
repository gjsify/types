/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GObject-2.0
 */

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
function boxedCopy(boxedType: Type, srcBoxed: object): object
function boxedFree(boxedType: Type, boxed: object): void
function cclosureMarshalBOOLEANBOXEDBOXED(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalBOOLEANFLAGS(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalSTRINGOBJECTPOINTER(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalVOIDBOOLEAN(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalVOIDBOXED(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalVOIDCHAR(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalVOIDDOUBLE(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalVOIDENUM(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalVOIDFLAGS(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalVOIDFLOAT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalVOIDINT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalVOIDLONG(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalVOIDOBJECT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalVOIDPARAM(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalVOIDPOINTER(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalVOIDSTRING(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalVOIDUCHAR(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalVOIDUINT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalVOIDUINTPOINTER(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalVOIDULONG(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalVOIDVARIANT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalVOIDVOID(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalGeneric(closure: Function, returnGvalue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function clearSignalHandler(handlerIdPtr: number, instance: Object): void
function enumCompleteTypeInfo(gEnumType: Type, constValues: EnumValue): /* info */ TypeInfo
function enumGetValue(enumClass: EnumClass, value: number): EnumValue | null
function enumGetValueByName(enumClass: EnumClass, name: string): EnumValue | null
function enumGetValueByNick(enumClass: EnumClass, nick: string): EnumValue | null
function enumRegisterStatic(name: string, constStaticValues: EnumValue): Type
function enumToString(gEnumType: Type, value: number): string
function flagsCompleteTypeInfo(gFlagsType: Type, constValues: FlagsValue): /* info */ TypeInfo
function flagsGetFirstValue(flagsClass: FlagsClass, value: number): FlagsValue | null
function flagsGetValueByName(flagsClass: FlagsClass, name: string): FlagsValue | null
function flagsGetValueByNick(flagsClass: FlagsClass, nick: string): FlagsValue | null
function flagsRegisterStatic(name: string, constStaticValues: FlagsValue): Type
function flagsToString(flagsType: Type, value: number): string
function gtypeGetType(): Type
function paramSpecBoolean(name: string, nick: string, blurb: string, defaultValue: boolean, flags: ParamFlags): ParamSpec
function paramSpecBoxed(name: string, nick: string, blurb: string, boxedType: Type, flags: ParamFlags): ParamSpec
function paramSpecChar(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec
function paramSpecDouble(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec
function paramSpecEnum(name: string, nick: string, blurb: string, enumType: Type, defaultValue: number, flags: ParamFlags): ParamSpec
function paramSpecFlags(name: string, nick: string, blurb: string, flagsType: Type, defaultValue: number, flags: ParamFlags): ParamSpec
function paramSpecFloat(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec
function paramSpecGtype(name: string, nick: string, blurb: string, isAType: Type, flags: ParamFlags): ParamSpec
function paramSpecInt(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec
function paramSpecInt64(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec
function paramSpecLong(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec
function paramSpecObject(name: string, nick: string, blurb: string, objectType: Type, flags: ParamFlags): ParamSpec
function paramSpecParam(name: string, nick: string, blurb: string, paramType: Type, flags: ParamFlags): ParamSpec
function paramSpecPointer(name: string, nick: string, blurb: string, flags: ParamFlags): ParamSpec
function paramSpecString(name: string, nick: string, blurb: string, defaultValue: string | null, flags: ParamFlags): ParamSpec
function paramSpecUchar(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec
function paramSpecUint(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec
function paramSpecUint64(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec
function paramSpecUlong(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec
function paramSpecUnichar(name: string, nick: string, blurb: string, defaultValue: number, flags: ParamFlags): ParamSpec
function paramSpecVariant(name: string, nick: string, blurb: string, type: GLib.VariantType, defaultValue: GLib.Variant | null, flags: ParamFlags): ParamSpec
function paramTypeRegisterStatic(name: string, pspecInfo: ParamSpecTypeInfo): Type
function paramValueConvert(pspec: ParamSpec, srcValue: any, destValue: any, strictValidation: boolean): boolean
function paramValueDefaults(pspec: ParamSpec, value: any): boolean
function paramValueSetDefault(pspec: ParamSpec, value: any): void
function paramValueValidate(pspec: ParamSpec, value: any): boolean
function paramValuesCmp(pspec: ParamSpec, value1: any, value2: any): number
function pointerTypeRegisterStatic(name: string): Type
function signalAccumulatorFirstWins(ihint: SignalInvocationHint, returnAccu: any, handlerReturn: any, dummy?: object | null): boolean
function signalAccumulatorTrueHandled(ihint: SignalInvocationHint, returnAccu: any, handlerReturn: any, dummy?: object | null): boolean
function signalAddEmissionHook(signalId: number, detail: GLib.Quark): number
function signalChainFromOverridden(instanceAndParams: any[], returnValue: any): void
function signalConnectClosure(instance: Object, detailedSignal: string, closure: Function, after: boolean): number
function signalConnectClosureById(instance: Object, signalId: number, detail: GLib.Quark, closure: Function, after: boolean): number
function signalEmitv(instanceAndParams: any[], signalId: number, detail: GLib.Quark, returnValue?: any | null): /* returnValue */ any | null
function signalGetInvocationHint(instance: Object): SignalInvocationHint | null
function signalHandlerBlock(instance: Object, handlerId: number): void
function signalHandlerDisconnect(instance: Object, handlerId: number): void
function signalHandlerFind(instance: Object, mask: SignalMatchType, signalId: number, detail: GLib.Quark, func?: object | null, data?: object | null): number
function signalHandlerIsConnected(instance: Object, handlerId: number): boolean
function signalHandlerUnblock(instance: Object, handlerId: number): void
function signalHandlersBlockMatched(instance: Object, mask: SignalMatchType, signalId: number, detail: GLib.Quark, func?: object | null, data?: object | null): number
function signalHandlersDestroy(instance: Object): void
function signalHandlersDisconnectMatched(instance: Object, mask: SignalMatchType, signalId: number, detail: GLib.Quark, func?: object | null, data?: object | null): number
function signalHandlersUnblockMatched(instance: Object, mask: SignalMatchType, signalId: number, detail: GLib.Quark, func?: object | null, data?: object | null): number
function signalHasHandlerPending(instance: Object, signalId: number, detail: GLib.Quark, mayBeBlocked: boolean): boolean
function signalIsValidName(name: string): boolean
function signalListIds(itype: Type): number[]
function signalLookup(name: string, itype: Type): number
function signalName(signalId: number): string | null
function signalOverrideClassClosure(signalId: number, instanceType: Type, classClosure: Function): void
function signalParseName(detailedSignal: string, itype: Type, forceDetailQuark: boolean): [ /* returnType */ boolean, /* signalIdP */ number, /* detailP */ GLib.Quark ]
function signalQuery(signalId: number): /* query */ SignalQuery
function signalRemoveEmissionHook(signalId: number, hookId: number): void
function signalSetVaMarshaller(signalId: number, instanceType: Type, vaMarshaller: SignalCVaMarshaller): void
function signalStopEmission(instance: Object, signalId: number, detail: GLib.Quark): void
function signalStopEmissionByName(instance: Object, detailedSignal: string): void
function signalTypeCclosureNew(itype: Type, structOffset: number): Function
function sourceSetClosure(source: GLib.Source, closure: Function): void
function sourceSetDummyCallback(source: GLib.Source): void
function strdupValueContents(value: any): string
function typeAddClassPrivate(classType: Type, privateSize: number): void
function typeAddInstancePrivate(classType: Type, privateSize: number): number
function typeAddInterfaceDynamic(instanceType: Type, interfaceType: Type, plugin: TypePlugin): void
function typeAddInterfaceStatic(instanceType: Type, interfaceType: Type, info: InterfaceInfo): void
function typeCheckClassIsA(gClass: TypeClass, isAType: Type): boolean
function typeCheckInstance(instance: TypeInstance): boolean
function typeCheckInstanceIsA(instance: TypeInstance, ifaceType: Type): boolean
function typeCheckInstanceIsFundamentallyA(instance: TypeInstance, fundamentalType: Type): boolean
function typeCheckIsValueType(type: Type): boolean
function typeCheckValue(value: any): boolean
function typeCheckValueHolds(value: any, type: Type): boolean
function typeChildren(type: Type): Type[]
function typeClassAdjustPrivateOffset(gClass: object | null, privateSizeOrOffset: number): void
function typeClassPeek(type: Type): TypeClass
function typeClassPeekStatic(type: Type): TypeClass
function typeClassRef(type: Type): TypeClass
function typeDefaultInterfacePeek(gType: Type): TypeInterface
function typeDefaultInterfaceRef(gType: Type): TypeInterface
function typeDefaultInterfaceUnref(gIface: TypeInterface): void
function typeDepth(type: Type): number
function typeEnsure(type: Type): void
function typeFreeInstance(instance: TypeInstance): void
function typeFromName(name: string): Type
function typeFundamental(typeId: Type): Type
function typeFundamentalNext(): Type
function typeGetInstanceCount(type: Type): number
function typeGetPlugin(type: Type): TypePlugin
function typeGetQdata(type: Type, quark: GLib.Quark): object | null
function typeGetTypeRegistrationSerial(): number
function typeInit(): void
function typeInitWithDebugFlags(debugFlags: TypeDebugFlags): void
function typeInterfaceAddPrerequisite(interfaceType: Type, prerequisiteType: Type): void
function typeInterfaceGetPlugin(instanceType: Type, interfaceType: Type): TypePlugin
function typeInterfaceInstantiatablePrerequisite(interfaceType: Type): Type
function typeInterfacePeek(instanceClass: TypeClass, ifaceType: Type): TypeInterface
function typeInterfacePrerequisites(interfaceType: Type): Type[]
function typeInterfaces(type: Type): Type[]
function typeIsA(type: Type, isAType: Type): boolean
function typeName(type: Type): string
function typeNameFromClass(gClass: TypeClass): string
function typeNameFromInstance(instance: TypeInstance): string
function typeNextBase(leafType: Type, rootType: Type): Type
function typeParent(type: Type): Type
function typeQname(type: Type): GLib.Quark
function typeQuery(type: Type): /* query */ TypeQuery
function typeRegisterDynamic(parentType: Type, typeName: string, plugin: TypePlugin, flags: TypeFlags): Type
function typeRegisterFundamental(typeId: Type, typeName: string, info: TypeInfo, finfo: TypeFundamentalInfo, flags: TypeFlags): Type
function typeRegisterStatic(parentType: Type, typeName: string, info: TypeInfo, flags: TypeFlags): Type
function typeSetQdata(type: Type, quark: GLib.Quark, data?: object | null): void
function typeTestFlags(type: Type, flags: number): boolean
function valueTypeCompatible(srcType: Type, destType: Type): boolean
function valueTypeTransformable(srcType: Type, destType: Type): boolean
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
    (gClass: TypeClass): void
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
    (gClass: TypeClass): void
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
    (binding: Binding, fromValue: any, toValue: any): boolean
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
    (gClass: TypeClass, classData?: object | null): void
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
    (gClass: TypeClass, classData?: object | null): void
}
/**
 * The type used for marshaller functions.
 */
interface ClosureMarshal {
    (closure: Function, returnValue: any | null, paramValues: any[], invocationHint?: object | null, marshalData?: object | null): void
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
    (instance: TypeInstance, gClass: TypeClass): void
}
/**
 * A callback function used by the type system to finalize an interface.
 * 
 * This function should destroy any internal data and release any resources
 * allocated by the corresponding GInterfaceInitFunc() function.
 */
interface InterfaceFinalizeFunc {
    (gIface: TypeInterface, ifaceData?: object | null): void
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
    (gIface: TypeInterface, ifaceData?: object | null): void
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
    (object: Object, propertyId: number, value: any, pspec: ParamSpec): void
}
/**
 * The type of the `set_property` function of #GObjectClass.
 */
interface ObjectSetPropertyFunc {
    (object: Object, propertyId: number, value: any, pspec: ParamSpec): void
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
    (ihint: SignalInvocationHint, returnAccu: any, handlerReturn: any, data?: object | null): boolean
}
/**
 * A simple function pointer to get invoked when the signal is emitted.
 * 
 * Emission hooks allow you to tie a hook to the signal type, so that it will
 * trap all emissions of that signal, from any object.
 * 
 * You may not attach these to signals created with the #G_SIGNAL_NO_HOOKS flag.
 */
interface SignalEmissionHook {
    (ihint: SignalInvocationHint, paramValues: any[], data?: object | null): boolean
}
/**
 * A callback function used for notification when the state
 * of a toggle reference changes.
 * 
 * See also: g_object_add_toggle_ref()
 */
interface ToggleNotify {
    (data: object | null, object: Object, isLastRef: boolean): void
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
    (cacheData: object | null, gClass: TypeClass): boolean
}
/**
 * A callback called after an interface vtable is initialized.
 * 
 * See g_type_add_interface_check().
 */
interface TypeInterfaceCheckFunc {
    (checkData: object | null, gIface: TypeInterface): void
}
/**
 * The type of the `complete_interface_info` function of #GTypePluginClass.
 */
interface TypePluginCompleteInterfaceInfo {
    (plugin: TypePlugin, instanceType: Type, interfaceType: Type, info: InterfaceInfo): void
}
/**
 * The type of the `complete_type_info` function of #GTypePluginClass.
 */
interface TypePluginCompleteTypeInfo {
    (plugin: TypePlugin, gType: Type, info: TypeInfo, valueTable: TypeValueTable): void
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
    (srcValue: any, destValue: any): void
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
    (data: object | null, whereTheObjectWas: Object): void
}
class TypePlugin {
    /* Methods of GObject-2.0.GObject.TypePlugin */
    /**
     * Calls the `complete_interface_info` function from the
     * #GTypePluginClass of `plugin`. There should be no need to use this
     * function outside of the GObject type system itself.
     */
    completeInterfaceInfo(instanceType: Type, interfaceType: Type, info: InterfaceInfo): void
    /**
     * Calls the `complete_type_info` function from the #GTypePluginClass of `plugin`.
     * There should be no need to use this function outside of the GObject
     * type system itself.
     */
    completeTypeInfo(gType: Type, info: TypeInfo, valueTable: TypeValueTable): void
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
    sourceProperty?: string
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
    targetProperty?: string
}
class Binding {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: TypeInstance
    /* Methods of GObject-2.0.GObject.Binding */
    /**
     * Retrieves the #GObject instance used as the source of the binding.
     * 
     * A #GBinding can outlive the source #GObject as the binding does not hold a
     * strong reference to the source. If the source is destroyed before the
     * binding then this function will return %NULL.
     */
    dupSource(): Object | null
    /**
     * Retrieves the #GObject instance used as the target of the binding.
     * 
     * A #GBinding can outlive the target #GObject as the binding does not hold a
     * strong reference to the target. If the target is destroyed before the
     * binding then this function will return %NULL.
     */
    dupTarget(): Object | null
    /**
     * Retrieves the flags passed when constructing the #GBinding.
     */
    getFlags(): BindingFlags
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
    getSource(): Object | null
    /**
     * Retrieves the name of the property of #GBinding:source used as the source
     * of the binding.
     */
    getSourceProperty(): string
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
    getTarget(): Object | null
    /**
     * Retrieves the name of the property of #GBinding:target used as the target
     * of the binding.
     */
    getTargetProperty(): string
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
     */
    bindProperty(sourceProperty: string, target: Object, targetProperty: string, flags: BindingFlags): Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: Object, targetProperty: string, flags: BindingFlags, transformTo: Function, transformFrom: Function): Binding
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
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
     */
    notifyByPspec(pspec: ParamSpec): void
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
    refSink(): Object
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
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
     */
    connect(sigName: "notify", callback: ((pspec: ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    readonly gTypeInstance: TypeInstance
    /* Methods of GObject-2.0.GObject.BindingGroup */
    /**
     * Creates a binding between `source_property` on the source object
     * and `target_property` on `target`. Whenever the `source_property`
     * is changed the `target_property` is updated using the same value.
     * The binding flag %G_BINDING_SYNC_CREATE is automatically specified.
     * 
     * See g_object_bind_property() for more information.
     */
    bind(sourceProperty: string, target: Object, targetProperty: string, flags: BindingFlags): void
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
     */
    bindFull(sourceProperty: string, target: Object, targetProperty: string, flags: BindingFlags, transformTo?: Function | null, transformFrom?: Function | null): void
    /**
     * Gets the source object used for binding properties.
     */
    dupSource(): Object | null
    /**
     * Sets `source` as the source object used for creating property
     * bindings. If there is already a source object all bindings from it
     * will be removed.
     * 
     * Note that all properties that have been bound must exist on `source`.
     */
    setSource(source?: Object | null): void
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
    bindProperty(sourceProperty: string, target: Object, targetProperty: string, flags: BindingFlags): Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: Object, targetProperty: string, flags: BindingFlags, transformTo: Function, transformFrom: Function): Binding
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
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
     */
    notifyByPspec(pspec: ParamSpec): void
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
    refSink(): Object
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
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
     */
    connect(sigName: "notify", callback: ((pspec: ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: ParamSpec): void
    connect(sigName: "notify::source", callback: ((pspec: ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: ((pspec: ParamSpec) => void)): number
    on(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    readonly gTypeInstance: TypeInstance
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
    bindProperty(sourceProperty: string, target: Object, targetProperty: string, flags: BindingFlags): Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: Object, targetProperty: string, flags: BindingFlags, transformTo: Function, transformFrom: Function): Binding
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
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
     */
    notifyByPspec(pspec: ParamSpec): void
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
    refSink(): Object
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
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
     */
    connect(sigName: "notify", callback: ((pspec: ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
     */
    bindProperty(sourceProperty: string, target: Object, targetProperty: string, flags: BindingFlags): Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: Object, targetProperty: string, flags: BindingFlags, transformTo: Function, transformFrom: Function): Binding
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
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
     */
    notifyByPspec(pspec: ParamSpec): void
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
    refSink(): Object
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
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
     */
    connect(sigName: "notify", callback: ((pspec: ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(objectType: Type, parameters: Parameter[]): Object
    static compatControl(what: number, data?: object | null): number
    /**
     * Find the #GParamSpec with the given name for an
     * interface. Generally, the interface vtable passed in as `g_iface`
     * will be the default vtable from g_type_default_interface_ref(), or,
     * if you know the interface has already been loaded,
     * g_type_default_interface_peek().
     */
    static interfaceFindProperty(gIface: TypeInterface, propertyName: string): ParamSpec
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
     */
    static interfaceInstallProperty(gIface: TypeInterface, pspec: ParamSpec): void
    /**
     * Lists the properties of an interface.Generally, the interface
     * vtable passed in as `g_iface` will be the default vtable from
     * g_type_default_interface_ref(), or, if you know the interface has
     * already been loaded, g_type_default_interface_peek().
     */
    static interfaceListProperties(gIface: TypeInterface): ParamSpec[]
    static $gtype: Type
}
class ParamSpec {
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    getBlurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    getDefaultValue(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    getName(): string
    /**
     * Gets the GQuark for the name.
     */
    getNameQuark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    getNick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    getRedirectTarget(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     */
    setQdata(quark: GLib.Quark, data?: object | null): void
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
     */
    stealQdata(quark: GLib.Quark): object | null
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Validate a property name for a #GParamSpec. This can be useful for
     * dynamically-generated properties which need to be validated at run-time
     * before actually trying to create them.
     * 
     * See [canonical parameter names][canonical-parameter-names] for details of
     * the rules for valid names.
     */
    static isValidName(name: string): boolean
}
class ParamSpecBoolean {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    readonly gTypeInstance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    readonly name: string
    /**
     * #GParamFlags flags for this parameter
     */
    readonly flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    readonly valueType: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    getBlurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    getDefaultValue(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    getName(): string
    /**
     * Gets the GQuark for the name.
     */
    getNameQuark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    getNick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    getRedirectTarget(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     */
    setQdata(quark: GLib.Quark, data?: object | null): void
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
     */
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecBoxed {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    readonly gTypeInstance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    readonly name: string
    /**
     * #GParamFlags flags for this parameter
     */
    readonly flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    readonly valueType: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    getBlurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    getDefaultValue(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    getName(): string
    /**
     * Gets the GQuark for the name.
     */
    getNameQuark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    getNick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    getRedirectTarget(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     */
    setQdata(quark: GLib.Quark, data?: object | null): void
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
     */
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecChar {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    readonly gTypeInstance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    readonly name: string
    /**
     * #GParamFlags flags for this parameter
     */
    readonly flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    readonly valueType: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    getBlurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    getDefaultValue(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    getName(): string
    /**
     * Gets the GQuark for the name.
     */
    getNameQuark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    getNick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    getRedirectTarget(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     */
    setQdata(quark: GLib.Quark, data?: object | null): void
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
     */
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecDouble {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    readonly gTypeInstance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    readonly name: string
    /**
     * #GParamFlags flags for this parameter
     */
    readonly flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    readonly valueType: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    getBlurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    getDefaultValue(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    getName(): string
    /**
     * Gets the GQuark for the name.
     */
    getNameQuark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    getNick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    getRedirectTarget(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     */
    setQdata(quark: GLib.Quark, data?: object | null): void
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
     */
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecEnum {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    readonly gTypeInstance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    readonly name: string
    /**
     * #GParamFlags flags for this parameter
     */
    readonly flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    readonly valueType: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    getBlurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    getDefaultValue(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    getName(): string
    /**
     * Gets the GQuark for the name.
     */
    getNameQuark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    getNick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    getRedirectTarget(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     */
    setQdata(quark: GLib.Quark, data?: object | null): void
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
     */
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecFlags {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    readonly gTypeInstance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    readonly name: string
    /**
     * #GParamFlags flags for this parameter
     */
    readonly flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    readonly valueType: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    getBlurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    getDefaultValue(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    getName(): string
    /**
     * Gets the GQuark for the name.
     */
    getNameQuark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    getNick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    getRedirectTarget(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     */
    setQdata(quark: GLib.Quark, data?: object | null): void
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
     */
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecFloat {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    readonly gTypeInstance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    readonly name: string
    /**
     * #GParamFlags flags for this parameter
     */
    readonly flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    readonly valueType: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    getBlurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    getDefaultValue(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    getName(): string
    /**
     * Gets the GQuark for the name.
     */
    getNameQuark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    getNick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    getRedirectTarget(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     */
    setQdata(quark: GLib.Quark, data?: object | null): void
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
     */
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecGType {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    readonly gTypeInstance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    readonly name: string
    /**
     * #GParamFlags flags for this parameter
     */
    readonly flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    readonly valueType: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    getBlurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    getDefaultValue(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    getName(): string
    /**
     * Gets the GQuark for the name.
     */
    getNameQuark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    getNick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    getRedirectTarget(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     */
    setQdata(quark: GLib.Quark, data?: object | null): void
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
     */
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecInt {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    readonly gTypeInstance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    readonly name: string
    /**
     * #GParamFlags flags for this parameter
     */
    readonly flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    readonly valueType: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    getBlurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    getDefaultValue(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    getName(): string
    /**
     * Gets the GQuark for the name.
     */
    getNameQuark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    getNick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    getRedirectTarget(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     */
    setQdata(quark: GLib.Quark, data?: object | null): void
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
     */
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecInt64 {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    readonly gTypeInstance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    readonly name: string
    /**
     * #GParamFlags flags for this parameter
     */
    readonly flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    readonly valueType: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    getBlurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    getDefaultValue(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    getName(): string
    /**
     * Gets the GQuark for the name.
     */
    getNameQuark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    getNick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    getRedirectTarget(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     */
    setQdata(quark: GLib.Quark, data?: object | null): void
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
     */
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecLong {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    readonly gTypeInstance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    readonly name: string
    /**
     * #GParamFlags flags for this parameter
     */
    readonly flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    readonly valueType: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    getBlurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    getDefaultValue(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    getName(): string
    /**
     * Gets the GQuark for the name.
     */
    getNameQuark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    getNick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    getRedirectTarget(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     */
    setQdata(quark: GLib.Quark, data?: object | null): void
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
     */
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecObject {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    readonly gTypeInstance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    readonly name: string
    /**
     * #GParamFlags flags for this parameter
     */
    readonly flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    readonly valueType: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    getBlurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    getDefaultValue(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    getName(): string
    /**
     * Gets the GQuark for the name.
     */
    getNameQuark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    getNick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    getRedirectTarget(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     */
    setQdata(quark: GLib.Quark, data?: object | null): void
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
     */
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecOverride {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    readonly gTypeInstance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    readonly name: string
    /**
     * #GParamFlags flags for this parameter
     */
    readonly flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    readonly valueType: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    getBlurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    getDefaultValue(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    getName(): string
    /**
     * Gets the GQuark for the name.
     */
    getNameQuark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    getNick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    getRedirectTarget(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     */
    setQdata(quark: GLib.Quark, data?: object | null): void
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
     */
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecParam {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    readonly gTypeInstance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    readonly name: string
    /**
     * #GParamFlags flags for this parameter
     */
    readonly flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    readonly valueType: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    getBlurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    getDefaultValue(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    getName(): string
    /**
     * Gets the GQuark for the name.
     */
    getNameQuark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    getNick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    getRedirectTarget(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     */
    setQdata(quark: GLib.Quark, data?: object | null): void
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
     */
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecPointer {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    readonly gTypeInstance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    readonly name: string
    /**
     * #GParamFlags flags for this parameter
     */
    readonly flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    readonly valueType: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    getBlurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    getDefaultValue(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    getName(): string
    /**
     * Gets the GQuark for the name.
     */
    getNameQuark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    getNick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    getRedirectTarget(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     */
    setQdata(quark: GLib.Quark, data?: object | null): void
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
     */
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecString {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    readonly gTypeInstance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    readonly name: string
    /**
     * #GParamFlags flags for this parameter
     */
    readonly flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    readonly valueType: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    getBlurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    getDefaultValue(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    getName(): string
    /**
     * Gets the GQuark for the name.
     */
    getNameQuark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    getNick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    getRedirectTarget(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     */
    setQdata(quark: GLib.Quark, data?: object | null): void
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
     */
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecUChar {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    readonly gTypeInstance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    readonly name: string
    /**
     * #GParamFlags flags for this parameter
     */
    readonly flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    readonly valueType: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    getBlurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    getDefaultValue(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    getName(): string
    /**
     * Gets the GQuark for the name.
     */
    getNameQuark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    getNick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    getRedirectTarget(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     */
    setQdata(quark: GLib.Quark, data?: object | null): void
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
     */
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecUInt {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    readonly gTypeInstance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    readonly name: string
    /**
     * #GParamFlags flags for this parameter
     */
    readonly flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    readonly valueType: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    getBlurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    getDefaultValue(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    getName(): string
    /**
     * Gets the GQuark for the name.
     */
    getNameQuark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    getNick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    getRedirectTarget(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     */
    setQdata(quark: GLib.Quark, data?: object | null): void
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
     */
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecUInt64 {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    readonly gTypeInstance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    readonly name: string
    /**
     * #GParamFlags flags for this parameter
     */
    readonly flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    readonly valueType: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    getBlurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    getDefaultValue(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    getName(): string
    /**
     * Gets the GQuark for the name.
     */
    getNameQuark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    getNick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    getRedirectTarget(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     */
    setQdata(quark: GLib.Quark, data?: object | null): void
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
     */
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecULong {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    readonly gTypeInstance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    readonly name: string
    /**
     * #GParamFlags flags for this parameter
     */
    readonly flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    readonly valueType: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    getBlurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    getDefaultValue(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    getName(): string
    /**
     * Gets the GQuark for the name.
     */
    getNameQuark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    getNick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    getRedirectTarget(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     */
    setQdata(quark: GLib.Quark, data?: object | null): void
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
     */
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecUnichar {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    readonly gTypeInstance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    readonly name: string
    /**
     * #GParamFlags flags for this parameter
     */
    readonly flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    readonly valueType: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    getBlurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    getDefaultValue(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    getName(): string
    /**
     * Gets the GQuark for the name.
     */
    getNameQuark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    getNick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    getRedirectTarget(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     */
    setQdata(quark: GLib.Quark, data?: object | null): void
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
     */
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecValueArray {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    readonly gTypeInstance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    readonly name: string
    /**
     * #GParamFlags flags for this parameter
     */
    readonly flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    readonly valueType: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    getBlurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    getDefaultValue(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    getName(): string
    /**
     * Gets the GQuark for the name.
     */
    getNameQuark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    getNick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    getRedirectTarget(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     */
    setQdata(quark: GLib.Quark, data?: object | null): void
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
     */
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecVariant {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    /**
     * private #GTypeInstance portion
     */
    readonly gTypeInstance: TypeInstance
    /**
     * name of this parameter: always an interned string
     */
    readonly name: string
    /**
     * #GParamFlags flags for this parameter
     */
    readonly flags: ParamFlags
    /**
     * the #GValue type for this parameter
     */
    readonly valueType: Type
    /**
     * #GType type that uses (introduces) this parameter
     */
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    /**
     * Get the short description of a #GParamSpec.
     */
    getBlurb(): string | null
    /**
     * Gets the default value of `pspec` as a pointer to a #GValue.
     * 
     * The #GValue will remain valid for the life of `pspec`.
     */
    getDefaultValue(): any
    /**
     * Get the name of a #GParamSpec.
     * 
     * The name is always an "interned" string (as per g_intern_string()).
     * This allows for pointer-value comparisons.
     */
    getName(): string
    /**
     * Gets the GQuark for the name.
     */
    getNameQuark(): GLib.Quark
    /**
     * Get the nickname of a #GParamSpec.
     */
    getNick(): string
    /**
     * Gets back user data pointers stored via g_param_spec_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * If the paramspec redirects operations to another paramspec,
     * returns that paramspec. Redirect is used typically for
     * providing a new implementation of a property in a derived
     * type while preserving all the properties from the parent
     * type. Redirection is established by creating a property
     * of type #GParamSpecOverride. See g_object_class_override_property()
     * for an example of the use of this capability.
     */
    getRedirectTarget(): ParamSpec | null
    /**
     * Sets an opaque, named pointer on a #GParamSpec. The name is
     * specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer can be gotten back
     * from the `pspec` with g_param_spec_get_qdata().  Setting a
     * previously set user data pointer, overrides (frees) the old pointer
     * set, using %NULL as pointer essentially removes the data stored.
     */
    setQdata(quark: GLib.Quark, data?: object | null): void
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    targetType?: Type
}
class SignalGroup {
    /* Properties of GObject-2.0.GObject.SignalGroup */
    /**
     * The target instance used when connecting signals.
     */
    target: Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: TypeInstance
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
     */
    connectData(detailedSignal: string, cHandler: Callback, flags: ConnectFlags): void
    /**
     * Connects `c_handler` to the signal `detailed_signal`
     * on the target instance of `self`.
     * 
     * The instance on which the signal is emitted and `data`
     * will be swapped when calling `c_handler`.
     * 
     * You cannot connect a signal handler after #GSignalGroup:target has been set.
     */
    connectSwapped(detailedSignal: string, cHandler: Callback): void
    /**
     * Gets the target instance used when connecting signals.
     */
    dupTarget(): Object | null
    /**
     * Sets the target instance used when connecting signals. Any signal
     * that has been registered with g_signal_group_connect_object() or
     * similar functions will be connected to this object.
     * 
     * If the target instance was previously set, signals will be
     * disconnected from that object prior to connecting to `target`.
     */
    setTarget(target?: Object | null): void
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
     */
    bindProperty(sourceProperty: string, target: Object, targetProperty: string, flags: BindingFlags): Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: Object, targetProperty: string, flags: BindingFlags, transformTo: Function, transformFrom: Function): Binding
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
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
     */
    notifyByPspec(pspec: ParamSpec): void
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
    refSink(): Object
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
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
     */
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.SignalGroup */
    /**
     * This signal is emitted when #GSignalGroup:target is set to a new value
     * other than %NULL. It is similar to #GObject::notify on `target` except it
     * will not emit when #GSignalGroup:target is %NULL and also allows for
     * receiving the #GObject without a data-race.
     */
    connect(sigName: "bind", callback: ((instance: Object) => void)): number
    on(sigName: "bind", callback: (instance: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "bind", callback: (instance: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "bind", callback: (instance: Object) => void): NodeJS.EventEmitter
    emit(sigName: "bind", instance: Object): void
    /**
     * This signal is emitted when the target instance of `self` is set to a
     * new #GObject.
     * 
     * This signal will only be emitted if the previous target of `self` is
     * non-%NULL.
     */
    connect(sigName: "unbind", callback: (() => void)): number
    on(sigName: "unbind", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unbind", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unbind", callback: () => void): NodeJS.EventEmitter
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
     */
    connect(sigName: "notify", callback: ((pspec: ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: ParamSpec): void
    connect(sigName: "notify::target", callback: ((pspec: ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: ((pspec: ParamSpec) => void)): number
    on(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SignalGroup_ConstructProps)
    _init (config?: SignalGroup_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(targetType: Type): SignalGroup
    static $gtype: Type
}
interface TypeModule_ConstructProps extends Object_ConstructProps {
}
class TypeModule {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: TypeInstance
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
     */
    addInterface(instanceType: Type, interfaceType: Type, interfaceInfo: InterfaceInfo): void
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
     */
    registerEnum(name: string, constStaticValues: EnumValue): Type
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
     */
    registerFlags(name: string, constStaticValues: FlagsValue): Type
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
     */
    registerType(parentType: Type, typeName: string, typeInfo: TypeInfo, flags: TypeFlags): Type
    /**
     * Sets the name for a #GTypeModule
     */
    setName(name: string): void
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
     */
    bindProperty(sourceProperty: string, target: Object, targetProperty: string, flags: BindingFlags): Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: Object, targetProperty: string, flags: BindingFlags, transformTo: Function, transformFrom: Function): Binding
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
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
     */
    notifyByPspec(pspec: ParamSpec): void
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
    refSink(): Object
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
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
     */
    connect(sigName: "notify", callback: ((pspec: ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    readonly closure: Function
    /**
     * the callback function
     */
    readonly callback: object
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * A #GClosureMarshal function for use with signals with handlers that
     * take two boxed pointers as arguments and return a boolean.  If you
     * have such a signal, you will probably also need to use an
     * accumulator, such as g_signal_accumulator_true_handled().
     */
    static marshalBOOLEANBOXEDBOXED(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `gboolean (*callback) (gpointer instance, gint arg1, gpointer user_data)` where the #gint parameter
     * denotes a flags type.
     */
    static marshalBOOLEANFLAGS(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `gchar* (*callback) (gpointer instance, GObject *arg1, gpointer arg2, gpointer user_data)`.
     */
    static marshalSTRINGOBJECTPOINTER(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, gboolean arg1, gpointer user_data)`.
     */
    static marshalVOIDBOOLEAN(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, GBoxed *arg1, gpointer user_data)`.
     */
    static marshalVOIDBOXED(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, gchar arg1, gpointer user_data)`.
     */
    static marshalVOIDCHAR(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, gdouble arg1, gpointer user_data)`.
     */
    static marshalVOIDDOUBLE(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, gint arg1, gpointer user_data)` where the #gint parameter denotes an enumeration type..
     */
    static marshalVOIDENUM(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, gint arg1, gpointer user_data)` where the #gint parameter denotes a flags type.
     */
    static marshalVOIDFLAGS(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, gfloat arg1, gpointer user_data)`.
     */
    static marshalVOIDFLOAT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, gint arg1, gpointer user_data)`.
     */
    static marshalVOIDINT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, glong arg1, gpointer user_data)`.
     */
    static marshalVOIDLONG(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, GObject *arg1, gpointer user_data)`.
     */
    static marshalVOIDOBJECT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, GParamSpec *arg1, gpointer user_data)`.
     */
    static marshalVOIDPARAM(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, gpointer arg1, gpointer user_data)`.
     */
    static marshalVOIDPOINTER(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, const gchar *arg1, gpointer user_data)`.
     */
    static marshalVOIDSTRING(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, guchar arg1, gpointer user_data)`.
     */
    static marshalVOIDUCHAR(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, guint arg1, gpointer user_data)`.
     */
    static marshalVOIDUINT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, guint arg1, gpointer arg2, gpointer user_data)`.
     */
    static marshalVOIDUINTPOINTER(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, gulong arg1, gpointer user_data)`.
     */
    static marshalVOIDULONG(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, GVariant *arg1, gpointer user_data)`.
     */
    static marshalVOIDVARIANT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    /**
     * A marshaller for a #GCClosure with a callback of type
     * `void (*callback) (gpointer instance, gpointer user_data)`.
     */
    static marshalVOIDVOID(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    /**
     * A generic marshaller function implemented via
     * [libffi](http://sourceware.org/libffi/).
     * 
     * Normally this function is not passed explicitly to g_signal_new(),
     * but used automatically by GLib when specifying a %NULL marshaller.
     */
    static marshalGeneric(closure: Function, returnGvalue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
}
class Closure {
    /* Fields of GObject-2.0.GObject.Closure */
    /**
     * Indicates whether the closure is currently being invoked with
     *  g_closure_invoke()
     */
    readonly inMarshal: number
    /**
     * Indicates whether the closure has been invalidated by
     *  g_closure_invalidate()
     */
    readonly isInvalid: number
    readonly marshal: (closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object, marshalData: object) => void
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
     */
    invoke(paramValues: any[], invocationHint?: object | null): /* returnValue */ any | null
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
    static newObject(sizeofClosure: number, object: Object): Closure
    static newSimple(sizeofClosure: number, data?: object | null): Closure
}
class ClosureNotifyData {
    /* Fields of GObject-2.0.GObject.ClosureNotifyData */
    readonly data: object
    readonly notify: ClosureNotify
    static name: string
}
class EnumClass {
    /* Fields of GObject-2.0.GObject.EnumClass */
    /**
     * the parent class
     */
    readonly gTypeClass: TypeClass
    /**
     * the smallest possible value.
     */
    readonly minimum: number
    /**
     * the largest possible value.
     */
    readonly maximum: number
    /**
     * the number of possible values.
     */
    readonly nValues: number
    /**
     * an array of #GEnumValue structs describing the
     *  individual values.
     */
    readonly values: EnumValue
    static name: string
}
class EnumValue {
    /* Fields of GObject-2.0.GObject.EnumValue */
    /**
     * the enum value
     */
    readonly value: number
    /**
     * the name of the value
     */
    readonly valueName: string
    /**
     * the nickname of the value
     */
    readonly valueNick: string
    static name: string
}
class FlagsClass {
    /* Fields of GObject-2.0.GObject.FlagsClass */
    /**
     * the parent class
     */
    readonly gTypeClass: TypeClass
    /**
     * a mask covering all possible values.
     */
    readonly mask: number
    /**
     * the number of possible values.
     */
    readonly nValues: number
    /**
     * an array of #GFlagsValue structs describing the
     *  individual values.
     */
    readonly values: FlagsValue
    static name: string
}
class FlagsValue {
    /* Fields of GObject-2.0.GObject.FlagsValue */
    /**
     * the flags value
     */
    readonly value: number
    /**
     * the name of the value
     */
    readonly valueName: string
    /**
     * the nickname of the value
     */
    readonly valueNick: string
    static name: string
}
abstract class InitiallyUnownedClass {
    /* Fields of GObject-2.0.GObject.InitiallyUnownedClass */
    /**
     * the parent class
     */
    readonly gTypeClass: TypeClass
    readonly setProperty: (object: Object, propertyId: number, value: any, pspec: ParamSpec) => void
    readonly getProperty: (object: Object, propertyId: number, value: any, pspec: ParamSpec) => void
    readonly dispose: (object: Object) => void
    readonly finalize: (object: Object) => void
    readonly dispatchPropertiesChanged: (object: Object, nPspecs: number, pspecs: ParamSpec) => void
    readonly notify: (object: Object, pspec: ParamSpec) => void
    readonly constructed: (object: Object) => void
    static name: string
}
class InterfaceInfo {
    /* Fields of GObject-2.0.GObject.InterfaceInfo */
    /**
     * location of the interface initialization function
     */
    readonly interfaceInit: InterfaceInitFunc
    /**
     * location of the interface finalization function
     */
    readonly interfaceFinalize: InterfaceFinalizeFunc
    /**
     * user-supplied data passed to the interface init/finalize functions
     */
    readonly interfaceData: object
    static name: string
}
abstract class ObjectClass {
    /* Fields of GObject-2.0.GObject.ObjectClass */
    /**
     * the parent class
     */
    readonly gTypeClass: TypeClass
    readonly setProperty: (object: Object, propertyId: number, value: any, pspec: ParamSpec) => void
    readonly getProperty: (object: Object, propertyId: number, value: any, pspec: ParamSpec) => void
    readonly dispose: (object: Object) => void
    readonly finalize: (object: Object) => void
    readonly dispatchPropertiesChanged: (object: Object, nPspecs: number, pspecs: ParamSpec) => void
    readonly notify: (object: Object, pspec: ParamSpec) => void
    readonly constructed: (object: Object) => void
    /* Methods of GObject-2.0.GObject.ObjectClass */
    /**
     * Looks up the #GParamSpec for a property of a class.
     */
    static findProperty(oclass: Object | Function | Type, propertyName: string): ParamSpec
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
     */
    static installProperties(oclass: Object | Function | Type, pspecs: ParamSpec[]): void
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
     */
    static installProperty(oclass: Object | Function | Type, propertyId: number, pspec: ParamSpec): void
    /**
     * Get an array of #GParamSpec* for all properties of a class.
     */
    static listProperties(oclass: Object | Function | Type): ParamSpec[]
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
     */
    static overrideProperty(oclass: Object | Function | Type, propertyId: number, name: string): void
    static name: string
}
class ObjectConstructParam {
    /* Fields of GObject-2.0.GObject.ObjectConstructParam */
    /**
     * the #GParamSpec of the construct parameter
     */
    readonly pspec: ParamSpec
    /**
     * the value to set the parameter to
     */
    readonly value: any
    static name: string
}
abstract class ParamSpecClass {
    /* Fields of GObject-2.0.GObject.ParamSpecClass */
    /**
     * the parent class
     */
    readonly gTypeClass: TypeClass
    /**
     * the #GValue type for this parameter
     */
    readonly valueType: Type
    readonly finalize: (pspec: ParamSpec) => void
    readonly valueSetDefault: (pspec: ParamSpec, value: any) => void
    readonly valueValidate: (pspec: ParamSpec, value: any) => boolean
    readonly valuesCmp: (pspec: ParamSpec, value1: any, value2: any) => number
    static name: string
}
class ParamSpecPool {
    /* Methods of GObject-2.0.GObject.ParamSpecPool */
    /**
     * Inserts a #GParamSpec in the pool.
     */
    insert(pspec: ParamSpec, ownerType: Type): void
    /**
     * Gets an array of all #GParamSpecs owned by `owner_type` in
     * the pool.
     */
    list(ownerType: Type): ParamSpec[]
    /**
     * Gets an #GList of all #GParamSpecs owned by `owner_type` in
     * the pool.
     */
    listOwned(ownerType: Type): ParamSpec[]
    /**
     * Looks up a #GParamSpec in the pool.
     */
    lookup(paramName: string, ownerType: Type, walkAncestors: boolean): ParamSpec | null
    /**
     * Removes a #GParamSpec from the pool.
     */
    remove(pspec: ParamSpec): void
    static name: string
}
class ParamSpecTypeInfo {
    /* Fields of GObject-2.0.GObject.ParamSpecTypeInfo */
    /**
     * Size of the instance (object) structure.
     */
    readonly instanceSize: number
    /**
     * Prior to GLib 2.10, it specified the number of pre-allocated (cached) instances to reserve memory for (0 indicates no caching). Since GLib 2.10, it is ignored, since instances are allocated with the [slice allocator][glib-Memory-Slices] now.
     */
    readonly nPreallocs: number
    readonly instanceInit: (pspec: ParamSpec) => void
    /**
     * The #GType of values conforming to this #GParamSpec
     */
    readonly valueType: Type
    readonly finalize: (pspec: ParamSpec) => void
    readonly valueSetDefault: (pspec: ParamSpec, value: any) => void
    readonly valueValidate: (pspec: ParamSpec, value: any) => boolean
    readonly valuesCmp: (pspec: ParamSpec, value1: any, value2: any) => number
    static name: string
}
class Parameter {
    /* Fields of GObject-2.0.GObject.Parameter */
    /**
     * the parameter name
     */
    readonly name: string
    /**
     * the parameter value
     */
    readonly value: any
    static name: string
}
class SignalInvocationHint {
    /* Fields of GObject-2.0.GObject.SignalInvocationHint */
    /**
     * The signal id of the signal invoking the callback
     */
    readonly signalId: number
    /**
     * The detail passed on for this emission
     */
    readonly detail: GLib.Quark
    /**
     * The stage the signal emission is currently in, this
     *  field will contain one of %G_SIGNAL_RUN_FIRST,
     *  %G_SIGNAL_RUN_LAST or %G_SIGNAL_RUN_CLEANUP and %G_SIGNAL_ACCUMULATOR_FIRST_RUN.
     *  %G_SIGNAL_ACCUMULATOR_FIRST_RUN is only set for the first run of the accumulator
     *  function for a signal emission.
     */
    readonly runType: SignalFlags
    static name: string
}
class SignalQuery {
    /* Fields of GObject-2.0.GObject.SignalQuery */
    /**
     * The signal id of the signal being queried, or 0 if the
     *  signal to be queried was unknown.
     */
    readonly signalId: number
    /**
     * The signal name.
     */
    readonly signalName: string
    /**
     * The interface/instance type that this signal can be emitted for.
     */
    readonly itype: Type
    /**
     * The signal flags as passed in to g_signal_new().
     */
    readonly signalFlags: SignalFlags
    /**
     * The return type for user callbacks.
     */
    readonly returnType: Type
    /**
     * The number of parameters that user callbacks take.
     */
    readonly nParams: number
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
    readonly paramTypes: Type[]
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
     */
    addPrivate(privateSize: number): void
    getPrivate(privateType: Type): object | null
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
    peekParent(): TypeClass
    /**
     * Decrements the reference count of the class structure being passed in.
     * Once the last reference count of a class has been released, classes
     * may be finalized by the type system, so further dereferencing of a
     * class pointer after g_type_class_unref() are invalid.
     */
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static adjustPrivateOffset(gClass: object | null, privateSizeOrOffset: number): void
    /**
     * This function is essentially the same as g_type_class_ref(),
     * except that the classes reference count isn't incremented.
     * As a consequence, this function may return %NULL if the class
     * of the type passed in does not currently exist (hasn't been
     * referenced before).
     */
    static peek(type: Type): TypeClass
    /**
     * A more efficient version of g_type_class_peek() which works only for
     * static types.
     */
    static peekStatic(type: Type): TypeClass
    /**
     * Increments the reference count of the class structure belonging to
     * `type`. This function will demand-create the class if it doesn't
     * exist already.
     */
    static ref(type: Type): TypeClass
}
class TypeFundamentalInfo {
    /* Fields of GObject-2.0.GObject.TypeFundamentalInfo */
    /**
     * #GTypeFundamentalFlags describing the characteristics of the fundamental type
     */
    readonly typeFlags: TypeFundamentalFlags
    static name: string
}
class TypeInfo {
    /* Fields of GObject-2.0.GObject.TypeInfo */
    /**
     * Size of the class structure (required for interface, classed and instantiatable types)
     */
    readonly classSize: number
    /**
     * Location of the base initialization function (optional)
     */
    readonly baseInit: BaseInitFunc
    /**
     * Location of the base finalization function (optional)
     */
    readonly baseFinalize: BaseFinalizeFunc
    /**
     * Location of the class initialization function for
     *  classed and instantiatable types. Location of the default vtable
     *  inititalization function for interface types. (optional) This function
     *  is used both to fill in virtual functions in the class or default vtable,
     *  and to do type-specific setup such as registering signals and object
     *  properties.
     */
    readonly classInit: ClassInitFunc
    /**
     * Location of the class finalization function for
     *  classed and instantiatable types. Location of the default vtable
     *  finalization function for interface types. (optional)
     */
    readonly classFinalize: ClassFinalizeFunc
    /**
     * User-supplied data passed to the class init/finalize functions
     */
    readonly classData: object
    /**
     * Size of the instance (object) structure (required for instantiatable types only)
     */
    readonly instanceSize: number
    /**
     * Prior to GLib 2.10, it specified the number of pre-allocated (cached) instances to reserve memory for (0 indicates no caching). Since GLib 2.10, it is ignored, since instances are allocated with the [slice allocator][glib-Memory-Slices] now.
     */
    readonly nPreallocs: number
    /**
     * Location of the instance initialization function (optional, for instantiatable types only)
     */
    readonly instanceInit: InstanceInitFunc
    /**
     * A #GTypeValueTable function table for generic handling of GValues
     *  of this type (usually only useful for fundamental types)
     */
    readonly valueTable: TypeValueTable
    static name: string
}
class TypeInstance {
    /* Methods of GObject-2.0.GObject.TypeInstance */
    getPrivate(privateType: Type): object | null
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
    peekParent(): TypeInterface
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Adds `prerequisite_type` to the list of prerequisites of `interface_type`.
     * This means that any type implementing `interface_type` must also implement
     * `prerequisite_type`. Prerequisites can be thought of as an alternative to
     * interface derivation (which GType doesn't support). An interface can have
     * at most one instantiatable prerequisite type.
     */
    static addPrerequisite(interfaceType: Type, prerequisiteType: Type): void
    /**
     * Returns the #GTypePlugin structure for the dynamic interface
     * `interface_type` which has been added to `instance_type,` or %NULL
     * if `interface_type` has not been added to `instance_type` or does
     * not have a #GTypePlugin structure. See g_type_add_interface_dynamic().
     */
    static getPlugin(instanceType: Type, interfaceType: Type): TypePlugin
    /**
     * Returns the most specific instantiatable prerequisite of an
     * interface type. If the interface type has no instantiatable
     * prerequisite, %G_TYPE_INVALID is returned.
     * 
     * See g_type_interface_add_prerequisite() for more information
     * about prerequisites.
     */
    static instantiatablePrerequisite(interfaceType: Type): Type
    /**
     * Returns the #GTypeInterface structure of an interface to which the
     * passed in class conforms.
     */
    static peek(instanceClass: TypeClass, ifaceType: Type): TypeInterface
    /**
     * Returns the prerequisites of an interfaces type.
     */
    static prerequisites(interfaceType: Type): Type[]
}
abstract class TypeModuleClass {
    /* Fields of GObject-2.0.GObject.TypeModuleClass */
    /**
     * the parent class
     */
    readonly parentClass: ObjectClass
    readonly load: (module: TypeModule) => boolean
    readonly unload: (module: TypeModule) => void
    readonly reserved1: () => void
    readonly reserved2: () => void
    readonly reserved3: () => void
    readonly reserved4: () => void
    static name: string
}
class TypePluginClass {
    /* Fields of GObject-2.0.GObject.TypePluginClass */
    /**
     * Increases the use count of the plugin.
     */
    readonly usePlugin: TypePluginUse
    /**
     * Decreases the use count of the plugin.
     */
    readonly unusePlugin: TypePluginUnuse
    /**
     * Fills in the #GTypeInfo and
     *  #GTypeValueTable structs for the type. The structs are initialized
     *  with `memset(s, 0, sizeof (s))` before calling this function.
     */
    readonly completeTypeInfo: TypePluginCompleteTypeInfo
    /**
     * Fills in missing parts of the #GInterfaceInfo
     *  for the interface. The structs is initialized with
     *  `memset(s, 0, sizeof (s))` before calling this function.
     */
    readonly completeInterfaceInfo: TypePluginCompleteInterfaceInfo
    static name: string
}
class TypeQuery {
    /* Fields of GObject-2.0.GObject.TypeQuery */
    /**
     * the #GType value of the type
     */
    readonly type: Type
    /**
     * the name of the type
     */
    readonly typeName: string
    /**
     * the size of the class structure
     */
    readonly classSize: number
    /**
     * the size of the instance structure
     */
    readonly instanceSize: number
    static name: string
}
class TypeValueTable {
    /* Fields of GObject-2.0.GObject.TypeValueTable */
    readonly valueInit: (value: any) => void
    readonly valueFree: (value: any) => void
    readonly valueCopy: (srcValue: any, destValue: any) => void
    readonly valuePeekPointer: (value: any) => object
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
    readonly collectFormat: string
    readonly collectValue: (value: any, nCollectValues: number, collectValues: TypeCValue, collectFlags: number) => string
    /**
     * Format description of the arguments to collect for `lcopy_value,`
     *  analogous to `collect_format`. Usually, `lcopy_format` string consists
     *  only of 'p's to provide lcopy_value() with pointers to storage locations.
     */
    readonly lcopyFormat: string
    readonly lcopyValue: (value: any, nCollectValues: number, collectValues: TypeCValue, collectFlags: number) => string
    static name: string
}
class Value {
    /* Fields of GObject-2.0.GObject.Value */
    readonly data: _Value__data__union[]
    /* Methods of GObject-2.0.GObject.Value */
    /**
     * Copies the value of `src_value` into `dest_value`.
     */
    copy(destValue: any): void
    /**
     * Get the contents of a %G_TYPE_OBJECT derived #GValue, increasing
     * its reference count. If the contents of the #GValue are %NULL, then
     * %NULL will be returned.
     */
    dupObject(): Object
    /**
     * Get a copy the contents of a %G_TYPE_STRING #GValue.
     */
    dupString(): string
    /**
     * Get the contents of a variant #GValue, increasing its refcount. The returned
     * #GVariant is never floating.
     */
    dupVariant(): GLib.Variant | null
    /**
     * Determines if `value` will fit inside the size of a pointer value.
     * This is an internal function introduced mainly for C marshallers.
     */
    fitsPointer(): boolean
    /**
     * Get the contents of a %G_TYPE_BOOLEAN #GValue.
     */
    getBoolean(): boolean
    /**
     * Get the contents of a %G_TYPE_BOXED derived #GValue.
     */
    getBoxed(): object | null
    /**
     * Do not use this function; it is broken on platforms where the %char
     * type is unsigned, such as ARM and PowerPC.  See g_value_get_schar().
     * 
     * Get the contents of a %G_TYPE_CHAR #GValue.
     */
    getChar(): number
    /**
     * Get the contents of a %G_TYPE_DOUBLE #GValue.
     */
    getDouble(): number
    /**
     * Get the contents of a %G_TYPE_ENUM #GValue.
     */
    getEnum(): number
    /**
     * Get the contents of a %G_TYPE_FLAGS #GValue.
     */
    getFlags(): number
    /**
     * Get the contents of a %G_TYPE_FLOAT #GValue.
     */
    getFloat(): number
    /**
     * Get the contents of a %G_TYPE_GTYPE #GValue.
     */
    getGtype(): Type
    /**
     * Get the contents of a %G_TYPE_INT #GValue.
     */
    getInt(): number
    /**
     * Get the contents of a %G_TYPE_INT64 #GValue.
     */
    getInt64(): number
    /**
     * Get the contents of a %G_TYPE_LONG #GValue.
     */
    getLong(): number
    /**
     * Get the contents of a %G_TYPE_OBJECT derived #GValue.
     */
    getObject(): Object
    /**
     * Get the contents of a %G_TYPE_PARAM #GValue.
     */
    getParam(): ParamSpec
    /**
     * Get the contents of a pointer #GValue.
     */
    getPointer(): object | null
    /**
     * Get the contents of a %G_TYPE_CHAR #GValue.
     */
    getSchar(): number
    /**
     * Get the contents of a %G_TYPE_STRING #GValue.
     */
    getString(): string
    /**
     * Get the contents of a %G_TYPE_UCHAR #GValue.
     */
    getUchar(): number
    /**
     * Get the contents of a %G_TYPE_UINT #GValue.
     */
    getUint(): number
    /**
     * Get the contents of a %G_TYPE_UINT64 #GValue.
     */
    getUint64(): number
    /**
     * Get the contents of a %G_TYPE_ULONG #GValue.
     */
    getUlong(): number
    /**
     * Get the contents of a variant #GValue.
     */
    getVariant(): GLib.Variant | null
    /**
     * Initializes `value` with the default value of `type`.
     */
    init(gType: Type): any
    /**
     * Initializes and sets `value` from an instantiatable type via the
     * value_table's collect_value() function.
     * 
     * Note: The `value` will be initialised with the exact type of
     * `instance`.  If you wish to set the `value'`s type to a different GType
     * (such as a parent class GType), you need to manually call
     * g_value_init() and g_value_set_instance().
     */
    initFromInstance(instance: TypeInstance): void
    /**
     * Returns the value contents as pointer. This function asserts that
     * g_value_fits_pointer() returned %TRUE for the passed in value.
     * This is an internal function introduced mainly for C marshallers.
     */
    peekPointer(): object | null
    /**
     * Clears the current value in `value` and resets it to the default value
     * (as if the value had just been initialized).
     */
    reset(): any
    /**
     * Set the contents of a %G_TYPE_BOOLEAN #GValue to `v_boolean`.
     */
    setBoolean(vBoolean: boolean): void
    /**
     * Set the contents of a %G_TYPE_BOXED derived #GValue to `v_boxed`.
     */
    setBoxed(vBoxed?: object | null): void
    /**
     * This is an internal function introduced mainly for C marshallers.
     */
    setBoxedTakeOwnership(vBoxed?: object | null): void
    /**
     * Set the contents of a %G_TYPE_CHAR #GValue to `v_char`.
     */
    setChar(vChar: number): void
    /**
     * Set the contents of a %G_TYPE_DOUBLE #GValue to `v_double`.
     */
    setDouble(vDouble: number): void
    /**
     * Set the contents of a %G_TYPE_ENUM #GValue to `v_enum`.
     */
    setEnum(vEnum: number): void
    /**
     * Set the contents of a %G_TYPE_FLAGS #GValue to `v_flags`.
     */
    setFlags(vFlags: number): void
    /**
     * Set the contents of a %G_TYPE_FLOAT #GValue to `v_float`.
     */
    setFloat(vFloat: number): void
    /**
     * Set the contents of a %G_TYPE_GTYPE #GValue to `v_gtype`.
     */
    setGtype(vGtype: Type): void
    /**
     * Sets `value` from an instantiatable type via the
     * value_table's collect_value() function.
     */
    setInstance(instance?: object | null): void
    /**
     * Set the contents of a %G_TYPE_INT #GValue to `v_int`.
     */
    setInt(vInt: number): void
    /**
     * Set the contents of a %G_TYPE_INT64 #GValue to `v_int6`4.
     */
    setInt64(vInt64: number): void
    /**
     * Set the contents of a %G_TYPE_STRING #GValue to `v_string`.  The string is
     * assumed to be static and interned (canonical, for example from
     * g_intern_string()), and is thus not duplicated when setting the #GValue.
     */
    setInternedString(vString?: string | null): void
    /**
     * Set the contents of a %G_TYPE_LONG #GValue to `v_long`.
     */
    setLong(vLong: number): void
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
     */
    setObject(vObject?: Object | null): void
    /**
     * Set the contents of a %G_TYPE_PARAM #GValue to `param`.
     */
    setParam(param?: ParamSpec | null): void
    /**
     * Set the contents of a pointer #GValue to `v_pointer`.
     */
    setPointer(vPointer?: object | null): void
    /**
     * Set the contents of a %G_TYPE_CHAR #GValue to `v_char`.
     */
    setSchar(vChar: number): void
    /**
     * Set the contents of a %G_TYPE_BOXED derived #GValue to `v_boxed`.
     * 
     * The boxed value is assumed to be static, and is thus not duplicated
     * when setting the #GValue.
     */
    setStaticBoxed(vBoxed?: object | null): void
    /**
     * Set the contents of a %G_TYPE_STRING #GValue to `v_string`.
     * The string is assumed to be static, and is thus not duplicated
     * when setting the #GValue.
     * 
     * If the the string is a canonical string, using g_value_set_interned_string()
     * is more appropriate.
     */
    setStaticString(vString?: string | null): void
    /**
     * Set the contents of a %G_TYPE_STRING #GValue to a copy of `v_string`.
     */
    setString(vString?: string | null): void
    /**
     * This is an internal function introduced mainly for C marshallers.
     */
    setStringTakeOwnership(vString?: string | null): void
    /**
     * Set the contents of a %G_TYPE_UCHAR #GValue to `v_uchar`.
     */
    setUchar(vUchar: number): void
    /**
     * Set the contents of a %G_TYPE_UINT #GValue to `v_uint`.
     */
    setUint(vUint: number): void
    /**
     * Set the contents of a %G_TYPE_UINT64 #GValue to `v_uint6`4.
     */
    setUint64(vUint64: number): void
    /**
     * Set the contents of a %G_TYPE_ULONG #GValue to `v_ulong`.
     */
    setUlong(vUlong: number): void
    /**
     * Set the contents of a variant #GValue to `variant`.
     * If the variant is floating, it is consumed.
     */
    setVariant(variant?: GLib.Variant | null): void
    /**
     * Sets the contents of a %G_TYPE_BOXED derived #GValue to `v_boxed`
     * and takes over the ownership of the caller’s reference to `v_boxed;`
     * the caller doesn’t have to unref it any more.
     */
    takeBoxed(vBoxed?: object | null): void
    /**
     * Sets the contents of a %G_TYPE_STRING #GValue to `v_string`.
     */
    takeString(vString?: string | null): void
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
     */
    takeVariant(variant?: GLib.Variant | null): void
    /**
     * Tries to cast the contents of `src_value` into a type appropriate
     * to store in `dest_value,` e.g. to transform a %G_TYPE_INT value
     * into a %G_TYPE_FLOAT value. Performing transformations between
     * value types might incur precision lossage. Especially
     * transformations into strings might reveal seemingly arbitrary
     * results and shouldn't be relied upon for production code (such
     * as rcfile value or object property serialization).
     */
    transform(destValue: any): boolean
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
     */
    static typeCompatible(srcType: Type, destType: Type): boolean
    /**
     * Check whether g_value_transform() is able to transform values
     * of type `src_type` into values of type `dest_type`. Note that for
     * the types to be transformable, they must be compatible or a
     * transformation function must be registered.
     */
    static typeTransformable(srcType: Type, destType: Type): boolean
}
class ValueArray {
    /* Fields of GObject-2.0.GObject.ValueArray */
    /**
     * number of values contained in the array
     */
    readonly nValues: number
    /**
     * array of values
     */
    readonly values: any
    /* Methods of GObject-2.0.GObject.ValueArray */
    /**
     * Insert a copy of `value` as last element of `value_array`. If `value` is
     * %NULL, an uninitialized value is appended.
     */
    append(value?: any | null): ValueArray
    /**
     * Construct an exact copy of a #GValueArray by duplicating all its
     * contents.
     */
    copy(): ValueArray
    /**
     * Return a pointer to the value at `index_` containd in `value_array`.
     */
    getNth(index: number): any
    /**
     * Insert a copy of `value` at specified position into `value_array`. If `value`
     * is %NULL, an uninitialized value is inserted.
     */
    insert(index: number, value?: any | null): ValueArray
    /**
     * Insert a copy of `value` as first element of `value_array`. If `value` is
     * %NULL, an uninitialized value is prepended.
     */
    prepend(value?: any | null): ValueArray
    /**
     * Remove the value at position `index_` from `value_array`.
     */
    remove(index: number): ValueArray
    /**
     * Sort `value_array` using `compare_func` to compare the elements according
     * to the semantics of #GCompareDataFunc.
     * 
     * The current implementation uses the same sorting algorithm as standard
     * C qsort() function.
     */
    sort(compareFunc: GLib.CompareDataFunc): ValueArray
    static name: string
    static new(nPrealloced: number): ValueArray
    constructor(nPrealloced: number)
    /* Static methods and pseudo-constructors */
    static new(nPrealloced: number): ValueArray
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