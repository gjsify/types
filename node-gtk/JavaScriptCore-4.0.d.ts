// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * JavaScriptCore-4.0
 */

import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace JavaScriptCore {

/**
 * Enum values to specify a mode to check for syntax errors in jsc_context_check_syntax().
 */
enum CheckSyntaxMode {
    /**
     * mode to check syntax of a script
     */
    SCRIPT,
    /**
     * mode to check syntax of a module
     */
    MODULE,
}
/**
 * Enum values to specify the result of jsc_context_check_syntax().
 */
enum CheckSyntaxResult {
    /**
     * no errors
     */
    SUCCESS,
    /**
     * recoverable syntax error
     */
    RECOVERABLE_ERROR,
    /**
     * irrecoverable syntax error
     */
    IRRECOVERABLE_ERROR,
    /**
     * unterminated literal error
     */
    UNTERMINATED_LITERAL_ERROR,
    /**
     * out of memory error
     */
    OUT_OF_MEMORY_ERROR,
    /**
     * stack overflow error
     */
    STACK_OVERFLOW_ERROR,
}
/**
 * Enum values for options types.
 */
enum OptionType {
    /**
     * A #gboolean option type.
     */
    BOOLEAN,
    /**
     * A #gint option type.
     */
    INT,
    /**
     * A #guint option type.
     */
    UINT,
    /**
     * A #gsize options type.
     */
    SIZE,
    /**
     * A #gdouble options type.
     */
    DOUBLE,
    /**
     * A string option type.
     */
    STRING,
    /**
     * A range string option type.
     */
    RANGE_STRING,
}
/**
 * Flags used when defining properties with jsc_value_object_define_property_data() and
 * jsc_value_object_define_property_accessor().
 * @bitfield 
 */
enum ValuePropertyFlags {
    /**
     * the type of the property descriptor may be changed and the
     *  property may be deleted from the corresponding object.
     */
    CONFIGURABLE,
    /**
     * the property shows up during enumeration of the properties on
     *  the corresponding object.
     */
    ENUMERABLE,
    /**
     * the value associated with the property may be changed with an
     *  assignment operator. This doesn't have any effect when passed to jsc_value_object_define_property_accessor().
     */
    WRITABLE,
}
/**
 * Like jsc_get_major_version(), but from the headers used at
 * application compile time, rather than from the library linked
 * against at application run time.
 */
const MAJOR_VERSION: number
/**
 * Like jsc_get_micro_version(), but from the headers used at
 * application compile time, rather than from the library linked
 * against at application run time.
 */
const MICRO_VERSION: number
/**
 * Like jsc_get_minor_version(), but from the headers used at
 * application compile time, rather than from the library linked
 * against at application run time.
 */
const MINOR_VERSION: number
/**
 * Allows the DFG JIT to be used if %TRUE.
 * Option type: %JSC_OPTION_BOOLEAN
 * Default value: %TRUE.
 */
const OPTIONS_USE_DFG: string
/**
 * Allows the FTL JIT to be used if %TRUE.
 * Option type: %JSC_OPTION_BOOLEAN
 * Default value: %TRUE.
 */
const OPTIONS_USE_FTL: string
/**
 * Allows the executable pages to be allocated for JIT and thunks if %TRUE.
 * Option type: %JSC_OPTION_BOOLEAN
 * Default value: %TRUE.
 */
const OPTIONS_USE_JIT: string
/**
 * Allows the LLINT to be used if %TRUE.
 * Option type: %JSC_OPTION_BOOLEAN
 * Default value: %TRUE.
 */
const OPTIONS_USE_LLINT: string
/**
 * Returns the major version number of the JavaScriptCore library.
 * (e.g. in JavaScriptCore version 1.8.3 this is 1.)
 * 
 * This function is in the library, so it represents the JavaScriptCore library
 * your code is running against. Contrast with the #JSC_MAJOR_VERSION
 * macro, which represents the major version of the JavaScriptCore headers you
 * have included when compiling your code.
 */
function getMajorVersion(): number
/**
 * Returns the micro version number of the JavaScriptCore library.
 * (e.g. in JavaScriptCore version 1.8.3 this is 3.)
 * 
 * This function is in the library, so it represents the JavaScriptCore library
 * your code is running against. Contrast with the #JSC_MICRO_VERSION
 * macro, which represents the micro version of the JavaScriptCore headers you
 * have included when compiling your code.
 */
function getMicroVersion(): number
/**
 * Returns the minor version number of the JavaScriptCore library.
 * (e.g. in JavaScriptCore version 1.8.3 this is 8.)
 * 
 * This function is in the library, so it represents the JavaScriptCore library
 * your code is running against. Contrast with the #JSC_MINOR_VERSION
 * macro, which represents the minor version of the JavaScriptCore headers you
 * have included when compiling your code.
 */
function getMinorVersion(): number
/**
 * Iterates all available options calling `function` for each one. Iteration can
 * stop early if `function` returns %FALSE.
 * @param function_ a #JSCOptionsFunc callback
 */
function optionsForeach(function_: OptionsFunc): void
/**
 * Get `option` as a #gboolean value.
 * @param option the option identifier
 */
function optionsGetBoolean(option: string): [ /* returnType */ boolean, /* value */ boolean ]
/**
 * Get `option` as a #gdouble value.
 * @param option the option identifier
 */
function optionsGetDouble(option: string): [ /* returnType */ boolean, /* value */ number ]
/**
 * Get `option` as a #gint value.
 * @param option the option identifier
 */
function optionsGetInt(option: string): [ /* returnType */ boolean, /* value */ number ]
/**
 * Create a #GOptionGroup to handle JSCOptions as command line arguments.
 * The options will be exposed as command line arguments with the form
 * <emphasis>--jsc-&lt;option&gt;=&lt;value&gt;</emphasis>.
 * Each entry in the returned #GOptionGroup is configured to apply the
 * corresponding option during command line parsing. Applications only need to
 * pass the returned group to g_option_context_add_group(), and the rest will
 * be taken care for automatically.
 */
function optionsGetOptionGroup(): GLib.OptionGroup
/**
 * Get `option` as a range string. The string must be in the
 * format <emphasis>[!]&lt;low&gt;[:&lt;high&gt;]</emphasis> where low and high are #guint values.
 * Values between low and high (both included) will be considered in
 * the range, unless <emphasis>!</emphasis> is used to invert the range.
 * @param option the option identifier
 */
function optionsGetRangeString(option: string): [ /* returnType */ boolean, /* value */ string ]
/**
 * Get `option` as a #gsize value.
 * @param option the option identifier
 */
function optionsGetSize(option: string): [ /* returnType */ boolean, /* value */ number ]
/**
 * Get `option` as a string.
 * @param option the option identifier
 */
function optionsGetString(option: string): [ /* returnType */ boolean, /* value */ string ]
/**
 * Get `option` as a #guint value.
 * @param option the option identifier
 */
function optionsGetUint(option: string): [ /* returnType */ boolean, /* value */ number ]
/**
 * Set `option` as a #gboolean value.
 * @param option the option identifier
 * @param value the value to set
 */
function optionsSetBoolean(option: string, value: boolean): boolean
/**
 * Set `option` as a #gdouble value.
 * @param option the option identifier
 * @param value the value to set
 */
function optionsSetDouble(option: string, value: number): boolean
/**
 * Set `option` as a #gint value.
 * @param option the option identifier
 * @param value the value to set
 */
function optionsSetInt(option: string, value: number): boolean
/**
 * Set `option` as a range string. The string must be in the
 * format <emphasis>[!]&lt;low&gt;[:&lt;high&gt;]</emphasis> where low and high are #guint values.
 * Values between low and high (both included) will be considered in
 * the range, unless <emphasis>!</emphasis> is used to invert the range.
 * @param option the option identifier
 * @param value the value to set
 */
function optionsSetRangeString(option: string, value: string): boolean
/**
 * Set `option` as a #gsize value.
 * @param option the option identifier
 * @param value the value to set
 */
function optionsSetSize(option: string, value: number): boolean
/**
 * Set `option` as a string.
 * @param option the option identifier
 * @param value the value to set
 */
function optionsSetString(option: string, value: string): boolean
/**
 * Set `option` as a #guint value.
 * @param option the option identifier
 * @param value the value to set
 */
function optionsSetUint(option: string, value: number): boolean
/**
 * The type of delete_property in #JSCClassVTable. This is only required when you need to handle
 * external properties not added to the prototype.
 * @callback 
 * @param jscClass a #JSCClass
 * @param context a #JSCContext
 * @param instance the `jsc_class` instance
 * @param name the property name
 */
interface ClassDeletePropertyFunction {
    (jscClass: Class, context: Context, instance: object | null, name: string): boolean
}
/**
 * The type of enumerate_properties in #JSCClassVTable. This is only required when you need to handle
 * external properties not added to the prototype.
 * @callback 
 * @param jscClass a #JSCClass
 * @param context a #JSCContext
 * @param instance the `jsc_class` instance
 */
interface ClassEnumeratePropertiesFunction {
    (jscClass: Class, context: Context, instance: object | null): string[] | null
}
/**
 * The type of get_property in #JSCClassVTable. This is only required when you need to handle
 * external properties not added to the prototype.
 * @callback 
 * @param jscClass a #JSCClass
 * @param context a #JSCContext
 * @param instance the `jsc_class` instance
 * @param name the property name
 */
interface ClassGetPropertyFunction {
    (jscClass: Class, context: Context, instance: object | null, name: string): Value | null
}
/**
 * The type of has_property in #JSCClassVTable. This is only required when you need to handle
 * external properties not added to the prototype.
 * @callback 
 * @param jscClass a #JSCClass
 * @param context a #JSCContext
 * @param instance the `jsc_class` instance
 * @param name the property name
 */
interface ClassHasPropertyFunction {
    (jscClass: Class, context: Context, instance: object | null, name: string): boolean
}
/**
 * The type of set_property in #JSCClassVTable. This is only required when you need to handle
 * external properties not added to the prototype.
 * @callback 
 * @param jscClass a #JSCClass
 * @param context a #JSCContext
 * @param instance the `jsc_class` instance
 * @param name the property name
 * @param value the #JSCValue to set
 */
interface ClassSetPropertyFunction {
    (jscClass: Class, context: Context, instance: object | null, name: string, value: Value): boolean
}
/**
 * Function used to handle JavaScript exceptions in a #JSCContext.
 * @callback 
 * @param context a #JSCContext
 * @param exception a #JSCException
 */
interface ExceptionHandler {
    (context: Context, exception: Exception): void
}
/**
 * Function used to iterate options.
 * 
 * Not that `description` string is not localized.
 * @callback 
 * @param option the option name
 * @param type the option #JSCOptionType
 * @param description the option description, or %NULL
 */
interface OptionsFunc {
    (option: string, type: OptionType, description: string | null): boolean
}
interface Class_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of JavaScriptCore-4.0.JavaScriptCore.Class

    /**
     * The #JSCContext in which the class was registered.
     */
    context?: Context | null
    /**
     * The name of the class.
     */
    name?: string | null
    /**
     * The parent class or %NULL in case of final classes.
     */
    parent?: Class | null
}

interface Class {

    // Own properties of JavaScriptCore-4.0.JavaScriptCore.Class

    /**
     * The #JSCContext in which the class was registered.
     */
    readonly context: Context
    /**
     * The name of the class.
     */
    readonly name: string
    /**
     * The parent class or %NULL in case of final classes.
     */
    readonly parent: Class

    // Owm methods of JavaScriptCore-4.0.JavaScriptCore.Class

    /**
     * Add a constructor to `jsc_class`. If `name` is %NULL, the class name will be used. When <function>new</function>
     * is used with the constructor or jsc_value_constructor_call() is called, `callback` is invoked receiving
     * a #GPtrArray of #JSCValue<!-- -->s as arguments and `user_data` as the last parameter. When the constructor object
     * is cleared in the #JSCClass context, `destroy_notify` is called with `user_data` as parameter.
     * 
     * This function creates the constructor, which needs to be added to an object as a property to be able to use it. Use
     * jsc_context_set_value() to make the constructor available in the global object.
     * 
     * Note that the value returned by `callback` is adopted by `jsc_class,` and the #GDestroyNotify passed to
     * jsc_context_register_class() is responsible for disposing of it.
     * @param name the constructor name or %NULL
     * @param callback a #GCallback to be called to create an instance of `jsc_class`
     * @param returnType the #GType of the constructor return value
     */
    addConstructorVariadic(name: string | null, callback: GObject.Callback, returnType: GObject.GType): Value
    /**
     * Add a constructor to `jsc_class`. If `name` is %NULL, the class name will be used. When <function>new</function>
     * is used with the constructor or jsc_value_constructor_call() is called, `callback` is invoked receiving the
     * parameters and `user_data` as the last parameter. When the constructor object is cleared in the #JSCClass context,
     * `destroy_notify` is called with `user_data` as parameter.
     * 
     * This function creates the constructor, which needs to be added to an object as a property to be able to use it. Use
     * jsc_context_set_value() to make the constructor available in the global object.
     * 
     * Note that the value returned by `callback` is adopted by `jsc_class,` and the #GDestroyNotify passed to
     * jsc_context_register_class() is responsible for disposing of it.
     * @param name the constructor name or %NULL
     * @param callback a #GCallback to be called to create an instance of `jsc_class`
     * @param returnType the #GType of the constructor return value
     * @param parameterTypes a list of #GType<!-- -->s, one for each parameter, or %NULL
     */
    addConstructor(name: string | null, callback: GObject.Callback, returnType: GObject.GType, parameterTypes: GObject.GType[] | null): Value
    /**
     * Add method with `name` to `jsc_class`. When the method is called by JavaScript or jsc_value_object_invoke_method(),
     * `callback` is called receiving the class instance as first parameter, followed by a #GPtrArray of #JSCValue<!-- -->s
     * with the method arguments and then `user_data` as last parameter. When the method is cleared in the #JSCClass context,
     * `destroy_notify` is called with `user_data` as parameter.
     * 
     * Note that the value returned by `callback` must be transfer full. In case of non-refcounted boxed types, you should use
     * %G_TYPE_POINTER instead of the actual boxed #GType to ensure that the instance owned by #JSCClass is used.
     * If you really want to return a new copy of the boxed type, use #JSC_TYPE_VALUE and return a #JSCValue created
     * with jsc_value_new_object() that receives the copy as the instance parameter.
     * @param name the method name
     * @param callback a #GCallback to be called to invoke method `name` of `jsc_class`
     * @param returnType the #GType of the method return value, or %G_TYPE_NONE if the method is void.
     */
    addMethodVariadic(name: string, callback: GObject.Callback, returnType: GObject.GType): void
    /**
     * Add method with `name` to `jsc_class`. When the method is called by JavaScript or jsc_value_object_invoke_method(),
     * `callback` is called receiving the class instance as first parameter, followed by the method parameters and then
     * `user_data` as last parameter. When the method is cleared in the #JSCClass context, `destroy_notify` is called with
     * `user_data` as parameter.
     * 
     * Note that the value returned by `callback` must be transfer full. In case of non-refcounted boxed types, you should use
     * %G_TYPE_POINTER instead of the actual boxed #GType to ensure that the instance owned by #JSCClass is used.
     * If you really want to return a new copy of the boxed type, use #JSC_TYPE_VALUE and return a #JSCValue created
     * with jsc_value_new_object() that receives the copy as the instance parameter.
     * @param name the method name
     * @param callback a #GCallback to be called to invoke method `name` of `jsc_class`
     * @param returnType the #GType of the method return value, or %G_TYPE_NONE if the method is void.
     * @param parameterTypes a list of #GType<!-- -->s, one for each parameter, or %NULL
     */
    addMethod(name: string, callback: GObject.Callback, returnType: GObject.GType, parameterTypes: GObject.GType[] | null): void
    /**
     * Add a property with `name` to `jsc_class`. When the property value needs to be getted, `getter` is called
     * receiving the the class instance as first parameter and `user_data` as last parameter. When the property
     * value needs to be set, `setter` is called receiving the the class instance as first parameter, followed
     * by the value to be set and then `user_data` as the last parameter. When the property is cleared in the
     * #JSCClass context, `destroy_notify` is called with `user_data` as parameter.
     * 
     * Note that the value returned by `getter` must be transfer full. In case of non-refcounted boxed types, you should use
     * %G_TYPE_POINTER instead of the actual boxed #GType to ensure that the instance owned by #JSCClass is used.
     * If you really want to return a new copy of the boxed type, use #JSC_TYPE_VALUE and return a #JSCValue created
     * with jsc_value_new_object() that receives the copy as the instance parameter.
     * @param name the property name
     * @param propertyType the #GType of the property value
     * @param getter a #GCallback to be called to get the property value
     * @param setter a #GCallback to be called to set the property value
     */
    addProperty(name: string, propertyType: GObject.GType, getter: GObject.Callback | null, setter: GObject.Callback | null): void
    /**
     * Get the class name of `jsc_class`
     */
    getName(): string
    /**
     * Get the parent class of `jsc_class`
     */
    getParent(): Class

    // Class property signals of JavaScriptCore-4.0.JavaScriptCore.Class

    connect(sigName: "notify::context", callback: (...args: any[]) => void): number
    on(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Class extends GObject.Object {

    // Own properties of JavaScriptCore-4.0.JavaScriptCore.Class

    static name: string
    static $gtype: GObject.GType<Class>

    // Constructors of JavaScriptCore-4.0.JavaScriptCore.Class

    constructor(config?: Class_ConstructProps) 
    _init(config?: Class_ConstructProps): void
}

interface Context_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of JavaScriptCore-4.0.JavaScriptCore.Context

    /**
     * The #JSCVirtualMachine in which the context was created.
     */
    virtualMachine?: VirtualMachine | null
}

interface Context {

    // Own properties of JavaScriptCore-4.0.JavaScriptCore.Context

    /**
     * The #JSCVirtualMachine in which the context was created.
     */
    readonly virtualMachine: VirtualMachine

    // Own fields of JavaScriptCore-4.0.JavaScriptCore.Context

    parent: GObject.Object

    // Owm methods of JavaScriptCore-4.0.JavaScriptCore.Context

    /**
     * Check the given `code` in `context` for syntax errors. The `line_number` is the starting line number in `uri;`
     * the value is one-based so the first line is 1. `uri` and `line_number` are only used to fill the `exception`.
     * In case of errors `exception` will be set to a new #JSCException with the details. You can pass %NULL to
     * `exception` to ignore the error details.
     * @param code a JavaScript script to check
     * @param length length of `code,` or -1 if `code` is a nul-terminated string
     * @param mode a #JSCCheckSyntaxMode
     * @param uri the source URI
     * @param lineNumber the starting line number
     */
    checkSyntax(code: string, length: number, mode: CheckSyntaxMode, uri: string, lineNumber: number): [ /* returnType */ CheckSyntaxResult, /* exception */ Exception ]
    /**
     * Clear the uncaught exception in `context` if any.
     */
    clearException(): void
    /**
     * Evaluate `code` in `context`.
     * @param code a JavaScript script to evaluate
     * @param length length of `code,` or -1 if `code` is a nul-terminated string
     */
    evaluate(code: string, length: number): Value
    /**
     * Evaluate `code` and create an new object where symbols defined in `code` will be added as properties,
     * instead of being added to `context` global object. The new object is returned as `object` parameter.
     * Similar to how jsc_value_new_object() works, if `object_instance` is not %NULL `object_class` must be provided too.
     * The `line_number` is the starting line number in `uri;` the value is one-based so the first line is 1.
     * `uri` and `line_number` will be shown in exceptions and they don't affect the behavior of the script.
     * @param code a JavaScript script to evaluate
     * @param length length of `code,` or -1 if `code` is a nul-terminated string
     * @param objectInstance an object instance
     * @param objectClass a #JSCClass or %NULL to use the default
     * @param uri the source URI
     * @param lineNumber the starting line number
     */
    evaluateInObject(code: string, length: number, objectInstance: object | null, objectClass: Class | null, uri: string, lineNumber: number): [ /* returnType */ Value, /* object */ Value ]
    /**
     * Evaluate `code` in `context` using `uri` as the source URI. The `line_number` is the starting line number
     * in `uri;` the value is one-based so the first line is 1. `uri` and `line_number` will be shown in exceptions and
     * they don't affect the behavior of the script.
     * @param code a JavaScript script to evaluate
     * @param length length of `code,` or -1 if `code` is a nul-terminated string
     * @param uri the source URI
     * @param lineNumber the starting line number
     */
    evaluateWithSourceUri(code: string, length: number, uri: string, lineNumber: number): Value
    /**
     * Get the last unhandled exception thrown in `context` by API functions calls.
     */
    getException(): Exception | null
    /**
     * Get a #JSCValue referencing the `context` global object
     */
    getGlobalObject(): Value
    /**
     * Get a property of `context` global object with `name`.
     * @param name the value name
     */
    getValue(name: string): Value
    /**
     * Get the #JSCVirtualMachine where `context` was created.
     */
    getVirtualMachine(): VirtualMachine
    /**
     * Remove the last #JSCExceptionHandler previously pushed to `context` with
     * jsc_context_push_exception_handler().
     */
    popExceptionHandler(): void
    /**
     * Push an exception handler in `context`. Whenever a JavaScript exception happens in
     * the #JSCContext, the given `handler` will be called. The default #JSCExceptionHandler
     * simply calls jsc_context_throw_exception() to throw the exception to the #JSCContext.
     * If you don't want to catch the exception, but only get notified about it, call
     * jsc_context_throw_exception() in `handler` like the default one does.
     * The last exception handler pushed is the only one used by the #JSCContext, use
     * jsc_context_pop_exception_handler() to remove it and set the previous one. When `handler`
     * is removed from the context, `destroy_notify` i called with `user_data` as parameter.
     * @param handler a #JSCExceptionHandler
     */
    pushExceptionHandler(handler: ExceptionHandler): void
    /**
     * Register a custom class in `context` using the given `name`. If the new class inherits from
     * another #JSCClass, the parent should be passed as `parent_class,` otherwise %NULL should be
     * used. The optional `vtable` parameter allows to provide a custom implementation for handling
     * the class, for example, to handle external properties not added to the prototype.
     * When an instance of the #JSCClass is cleared in the context, `destroy_notify` is called with
     * the instance as parameter.
     * @param name the class name
     * @param parentClass a #JSCClass or %NULL
     * @param vtable an optional #JSCClassVTable or %NULL
     * @param destroyNotify a destroy notifier for class instances
     */
    registerClass(name: string, parentClass: Class | null, vtable: ClassVTable | null, destroyNotify: GLib.DestroyNotify | null): Class
    /**
     * Set a property of `context` global object with `name` and `value`.
     * @param name the value name
     * @param value a #JSCValue
     */
    setValue(name: string, value: Value): void
    /**
     * Throw an exception to `context` using the given error message. The created #JSCException
     * can be retrieved with jsc_context_get_exception().
     * @param errorMessage an error message
     */
    throw(errorMessage: string): void
    /**
     * Throw `exception` to `context`.
     * @param exception a #JSCException
     */
    throwException(exception: Exception): void
    /**
     * Throw an exception to `context` using the given error name and message. The created #JSCException
     * can be retrieved with jsc_context_get_exception().
     * @param errorName the error name
     * @param errorMessage an error message
     */
    throwWithName(errorName: string, errorMessage: string): void

    // Class property signals of JavaScriptCore-4.0.JavaScriptCore.Context

    connect(sigName: "notify::virtual-machine", callback: (...args: any[]) => void): number
    on(sigName: "notify::virtual-machine", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::virtual-machine", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::virtual-machine", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::virtual-machine", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Context extends GObject.Object {

    // Own properties of JavaScriptCore-4.0.JavaScriptCore.Context

    static name: string
    static $gtype: GObject.GType<Context>

    // Constructors of JavaScriptCore-4.0.JavaScriptCore.Context

    constructor(config?: Context_ConstructProps) 
    /**
     * Create a new #JSCContext. The context is created in a new #JSCVirtualMachine.
     * Use jsc_context_new_with_virtual_machine() to create a new #JSCContext in an
     * existing #JSCVirtualMachine.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #JSCContext. The context is created in a new #JSCVirtualMachine.
     * Use jsc_context_new_with_virtual_machine() to create a new #JSCContext in an
     * existing #JSCVirtualMachine.
     * @constructor 
     */
    static new(): Context
    /**
     * Create a new #JSCContext in `virtual_machine`.
     * @constructor 
     * @param vm a #JSCVirtualMachine
     */
    static newWithVirtualMachine(vm: VirtualMachine): Context
    _init(config?: Context_ConstructProps): void
    /**
     * Get the #JSCContext that is currently executing a function. This should only be
     * called within a function or method callback, otherwise %NULL will be returned.
     */
    static getCurrent(): Context | null
}

interface Exception_ConstructProps extends GObject.Object_ConstructProps {
}

interface Exception {

    // Own fields of JavaScriptCore-4.0.JavaScriptCore.Exception

    parent: GObject.Object

    // Owm methods of JavaScriptCore-4.0.JavaScriptCore.Exception

    /**
     * Get a string with the exception backtrace.
     */
    getBacktraceString(): string | null
    /**
     * Get the column number at which `exception` happened.
     */
    getColumnNumber(): number
    /**
     * Get the line number at which `exception` happened.
     */
    getLineNumber(): number
    /**
     * Get the error message of `exception`.
     */
    getMessage(): string
    /**
     * Get the error name of `exception`
     */
    getName(): string
    /**
     * Get the source URI of `exception`.
     */
    getSourceUri(): string | null
    /**
     * Return a report message of `exception,` containing all the possible details such us
     * source URI, line, column and backtrace, and formatted to be printed.
     */
    report(): string
    /**
     * Get the string representation of `exception` error.
     */
    toString(): string

    // Class property signals of JavaScriptCore-4.0.JavaScriptCore.Exception

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Exception extends GObject.Object {

    // Own properties of JavaScriptCore-4.0.JavaScriptCore.Exception

    static name: string
    static $gtype: GObject.GType<Exception>

    // Constructors of JavaScriptCore-4.0.JavaScriptCore.Exception

    constructor(config?: Exception_ConstructProps) 
    /**
     * Create a new #JSCException in `context` with `message`.
     * @constructor 
     * @param context a #JSCContext
     * @param message the error message
     */
    constructor(context: Context, message: string) 
    /**
     * Create a new #JSCException in `context` with `message`.
     * @constructor 
     * @param context a #JSCContext
     * @param message the error message
     */
    static new(context: Context, message: string): Exception
    /**
     * Create a new #JSCException in `context` with `name` and `message`.
     * @constructor 
     * @param context a #JSCContext
     * @param name the error name
     * @param message the error message
     */
    static newWithName(context: Context, name: string, message: string): Exception
    _init(config?: Exception_ConstructProps): void
}

interface Value_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of JavaScriptCore-4.0.JavaScriptCore.Value

    /**
     * The #JSCContext in which the value was created.
     */
    context?: Context | null
}

interface Value {

    // Own properties of JavaScriptCore-4.0.JavaScriptCore.Value

    /**
     * The #JSCContext in which the value was created.
     */
    readonly context: Context

    // Own fields of JavaScriptCore-4.0.JavaScriptCore.Value

    parent: GObject.Object

    // Owm methods of JavaScriptCore-4.0.JavaScriptCore.Value

    /**
     * Invoke <function>new</function> with constructor referenced by `value`. If `n_parameters`
     * is 0 no parameters will be passed to the constructor.
     * @param parameters the #JSCValue<!-- -->s to pass as parameters to the constructor, or %NULL
     */
    constructorCall(parameters: Value[] | null): Value
    /**
     * Call function referenced by `value,` passing the given `parameters`. If `n_parameters`
     * is 0 no parameters will be passed to the function.
     * 
     * This function always returns a #JSCValue, in case of void functions a #JSCValue referencing
     * <function>undefined</function> is returned
     * @param parameters the #JSCValue<!-- -->s to pass as parameters to the function, or %NULL
     */
    functionCall(parameters: Value[] | null): Value
    /**
     * Get the #JSCContext in which `value` was created.
     */
    getContext(): Context
    /**
     * Get whether the value referenced by `value` is an array.
     */
    isArray(): boolean
    /**
     * Get whether the value referenced by `value` is a boolean.
     */
    isBoolean(): boolean
    /**
     * Get whether the value referenced by `value` is a constructor.
     */
    isConstructor(): boolean
    /**
     * Get whether the value referenced by `value` is a function
     */
    isFunction(): boolean
    /**
     * Get whether the value referenced by `value` is <function>null</function>.
     */
    isNull(): boolean
    /**
     * Get whether the value referenced by `value` is a number.
     */
    isNumber(): boolean
    /**
     * Get whether the value referenced by `value` is an object.
     */
    isObject(): boolean
    /**
     * Get whether the value referenced by `value` is a string
     */
    isString(): boolean
    /**
     * Get whether the value referenced by `value` is <function>undefined</function>.
     */
    isUndefined(): boolean
    /**
     * Define or modify a property with `property_name` in object referenced by `value`. When the
     * property value needs to be getted or set, `getter` and `setter` callbacks will be called.
     * When the property is cleared in the #JSCClass context, `destroy_notify` is called with
     * `user_data` as parameter. This is equivalent to JavaScript <function>Object.defineProperty()</function>
     * when used with an accessor descriptor.
     * 
     * Note that the value returned by `getter` must be fully transferred. In case of boxed types, you could use
     * %G_TYPE_POINTER instead of the actual boxed #GType to ensure that the instance owned by #JSCClass is used.
     * If you really want to return a new copy of the boxed type, use #JSC_TYPE_VALUE and return a #JSCValue created
     * with jsc_value_new_object() that receives the copy as instance parameter.
     * 
     * Note that `getter` and `setter` are called as functions and not methods, so they don't receive an instance as
     * first parameter. Use jsc_class_add_property() if you want to add property accessor invoked as a method.
     * @param propertyName the name of the property to define
     * @param flags #JSCValuePropertyFlags
     * @param propertyType the #GType of the property
     * @param getter a #GCallback to be called to get the property value
     * @param setter a #GCallback to be called to set the property value
     */
    objectDefinePropertyAccessor(propertyName: string, flags: ValuePropertyFlags, propertyType: GObject.GType, getter: GObject.Callback | null, setter: GObject.Callback | null): void
    /**
     * Define or modify a property with `property_name` in object referenced by `value`. This is equivalent to
     * JavaScript <function>Object.defineProperty()</function> when used with a data descriptor.
     * @param propertyName the name of the property to define
     * @param flags #JSCValuePropertyFlags
     * @param propertyValue the default property value
     */
    objectDefinePropertyData(propertyName: string, flags: ValuePropertyFlags, propertyValue: Value | null): void
    /**
     * Try to delete property with `name` from `value`. This function will return %FALSE if
     * the property was defined without %JSC_VALUE_PROPERTY_CONFIGURABLE flag.
     * @param name the property name
     */
    objectDeleteProperty(name: string): boolean
    /**
     * Get the list of property names of `value`. Only properties defined with %JSC_VALUE_PROPERTY_ENUMERABLE
     * flag will be collected.
     */
    objectEnumerateProperties(): string[] | null
    /**
     * Get property with `name` from `value`.
     * @param name the property name
     */
    objectGetProperty(name: string): Value
    /**
     * Get property at `index` from `value`.
     * @param index the property index
     */
    objectGetPropertyAtIndex(index: number): Value
    /**
     * Get whether `value` has property with `name`.
     * @param name the property name
     */
    objectHasProperty(name: string): boolean
    /**
     * Invoke method with `name` on object referenced by `value,` passing the given `parameters`. If
     * `n_parameters` is 0 no parameters will be passed to the method.
     * The object instance will be handled automatically even when the method is a custom one
     * registered with jsc_class_add_method(), so it should never be passed explicitly as parameter
     * of this function.
     * 
     * This function always returns a #JSCValue, in case of void methods a #JSCValue referencing
     * <function>undefined</function> is returned.
     * @param name the method name
     * @param parameters the #JSCValue<!-- -->s to pass as parameters to the method, or %NULL
     */
    objectInvokeMethod(name: string, parameters: Value[] | null): Value
    /**
     * Get whether the value referenced by `value` is an instance of class `name`.
     * @param name a class name
     */
    objectIsInstanceOf(name: string): boolean
    /**
     * Set `property` with `name` on `value`.
     * @param name the property name
     * @param property the #JSCValue to set
     */
    objectSetProperty(name: string, property: Value): void
    /**
     * Set `property` at `index` on `value`.
     * @param index the property index
     * @param property the #JSCValue to set
     */
    objectSetPropertyAtIndex(index: number, property: Value): void
    /**
     * Convert `value` to a boolean.
     */
    toBoolean(): boolean
    /**
     * Convert `value` to a double.
     */
    toDouble(): number
    /**
     * Convert `value` to a #gint32.
     */
    toInt32(): number
    /**
     * Create a JSON string of `value` serialization. If `indent` is 0, the resulting JSON will
     * not contain newlines. The size of the indent is clamped to 10 spaces.
     * @param indent The number of spaces to indent when nesting.
     */
    toJson(indent: number): string
    /**
     * Convert `value` to a string. Use jsc_value_to_string_as_bytes() instead, if you need to
     * handle strings containing null characters.
     */
    toString(): string
    /**
     * Convert `value` to a string and return the results as #GBytes. This is needed
     * to handle strings with null characters.
     */
    toStringAsBytes(): any

    // Class property signals of JavaScriptCore-4.0.JavaScriptCore.Value

    connect(sigName: "notify::context", callback: (...args: any[]) => void): number
    on(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Value extends GObject.Object {

    // Own properties of JavaScriptCore-4.0.JavaScriptCore.Value

    static name: string
    static $gtype: GObject.GType<Value>

    // Constructors of JavaScriptCore-4.0.JavaScriptCore.Value

    constructor(config?: Value_ConstructProps) 
    /**
     * Create a new #JSCValue referencing an array with the items from `array`. If `array`
     * is %NULL or empty a new empty array will be created. Elements of `array` should be
     * pointers to a #JSCValue.
     * @constructor 
     * @param context a #JSCContext
     * @param array a #GPtrArray
     */
    static newArrayFromGarray(context: Context, array: Value[] | null): Value
    /**
     * Create a new #JSCValue referencing an array of strings with the items from `strv`. If `array`
     * is %NULL or empty a new empty array will be created.
     * @constructor 
     * @param context a #JSCContext
     * @param strv a %NULL-terminated array of strings
     */
    static newArrayFromStrv(context: Context, strv: string[]): Value
    /**
     * Create a new #JSCValue from `value`
     * @constructor 
     * @param context a #JSCContext
     * @param value a #gboolean
     */
    static newBoolean(context: Context, value: boolean): Value
    /**
     * Create a new #JSCValue referencing a new value created by parsing `json`.
     * @constructor 
     * @param context a #JSCContext
     * @param json the JSON string to be parsed
     */
    static newFromJson(context: Context, json: string): Value
    /**
     * Create a function in `context`. If `name` is %NULL an anonymous function will be created.
     * When the function is called by JavaScript or jsc_value_function_call(), `callback` is called
     * receiving an #GPtrArray of #JSCValue<!-- -->s with the arguments and then `user_data` as last parameter.
     * When the function is cleared in `context,` `destroy_notify` is called with `user_data` as parameter.
     * 
     * Note that the value returned by `callback` must be fully transferred. In case of boxed types, you could use
     * %G_TYPE_POINTER instead of the actual boxed #GType to ensure that the instance owned by #JSCClass is used.
     * If you really want to return a new copy of the boxed type, use #JSC_TYPE_VALUE and return a #JSCValue created
     * with jsc_value_new_object() that receives the copy as instance parameter.
     * @constructor 
     * @param context a #JSCContext
     * @param name the function name or %NULL
     * @param callback a #GCallback.
     * @param returnType the #GType of the function return value, or %G_TYPE_NONE if the function is void.
     */
    static newFunctionVariadic(context: Context, name: string | null, callback: GObject.Callback, returnType: GObject.GType): Value
    /**
     * Create a function in `context`. If `name` is %NULL an anonymous function will be created.
     * When the function is called by JavaScript or jsc_value_function_call(), `callback` is called
     * receiving the function parameters and then `user_data` as last parameter. When the function is
     * cleared in `context,` `destroy_notify` is called with `user_data` as parameter.
     * 
     * Note that the value returned by `callback` must be fully transferred. In case of boxed types, you could use
     * %G_TYPE_POINTER instead of the actual boxed #GType to ensure that the instance owned by #JSCClass is used.
     * If you really want to return a new copy of the boxed type, use #JSC_TYPE_VALUE and return a #JSCValue created
     * with jsc_value_new_object() that receives the copy as instance parameter.
     * @constructor 
     * @param context a #JSCContext
     * @param name the function name or %NULL
     * @param callback a #GCallback.
     * @param returnType the #GType of the function return value, or %G_TYPE_NONE if the function is void.
     * @param parameterTypes a list of #GType<!-- -->s, one for each parameter, or %NULL
     */
    static newFunction(context: Context, name: string | null, callback: GObject.Callback, returnType: GObject.GType, parameterTypes: GObject.GType[] | null): Value
    /**
     * Create a new #JSCValue referencing <function>null</function> in `context`.
     * @constructor 
     * @param context a #JSCContext
     */
    static newNull(context: Context): Value
    /**
     * Create a new #JSCValue from `number`.
     * @constructor 
     * @param context a #JSCContext
     * @param number a number
     */
    static newNumber(context: Context, number: number): Value
    /**
     * Create a new #JSCValue from `instance`. If `instance` is %NULL a new empty object is created.
     * When `instance` is provided, `jsc_class` must be provided too. `jsc_class` takes ownership of
     * `instance` that will be freed by the #GDestroyNotify passed to jsc_context_register_class().
     * @constructor 
     * @param context a #JSCContext
     * @param instance an object instance or %NULL
     * @param jscClass the #JSCClass of `instance`
     */
    static newObject(context: Context, instance: object | null, jscClass: Class | null): Value
    /**
     * Create a new #JSCValue from `string`. If you need to create a #JSCValue from a
     * string containing null characters, use jsc_value_new_string_from_bytes() instead.
     * @constructor 
     * @param context a #JSCContext
     * @param string a null-terminated string
     */
    static newString(context: Context, string: string | null): Value
    /**
     * Create a new #JSCValue from `bytes`.
     * @constructor 
     * @param context a #JSCContext
     * @param bytes a #GBytes
     */
    static newStringFromBytes(context: Context, bytes: any | null): Value
    /**
     * Create a new #JSCValue referencing <function>undefined</function> in `context`.
     * @constructor 
     * @param context a #JSCContext
     */
    static newUndefined(context: Context): Value
    _init(config?: Value_ConstructProps): void
}

interface VirtualMachine_ConstructProps extends GObject.Object_ConstructProps {
}

interface VirtualMachine {

    // Own fields of JavaScriptCore-4.0.JavaScriptCore.VirtualMachine

    parent: GObject.Object

    // Class property signals of JavaScriptCore-4.0.JavaScriptCore.VirtualMachine

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class VirtualMachine extends GObject.Object {

    // Own properties of JavaScriptCore-4.0.JavaScriptCore.VirtualMachine

    static name: string
    static $gtype: GObject.GType<VirtualMachine>

    // Constructors of JavaScriptCore-4.0.JavaScriptCore.VirtualMachine

    constructor(config?: VirtualMachine_ConstructProps) 
    /**
     * Create a new #JSCVirtualMachine.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #JSCVirtualMachine.
     * @constructor 
     */
    static new(): VirtualMachine
    _init(config?: VirtualMachine_ConstructProps): void
}

interface WeakValue_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of JavaScriptCore-4.0.JavaScriptCore.WeakValue

    /**
     * The #JSCValue referencing the JavaScript value.
     */
    value?: Value | null
}

/**
 * Signal callback interface for `cleared`
 */
interface WeakValue_ClearedSignalCallback {
    (): void
}

interface WeakValue {

    // Own properties of JavaScriptCore-4.0.JavaScriptCore.WeakValue

    /**
     * The #JSCValue referencing the JavaScript value.
     */
    readonly value: Value

    // Own fields of JavaScriptCore-4.0.JavaScriptCore.WeakValue

    parent: GObject.Object

    // Owm methods of JavaScriptCore-4.0.JavaScriptCore.WeakValue

    /**
     * Get a #JSCValue referencing the JavaScript value of `weak_value`.
     */
    getValue(): Value

    // Own signals of JavaScriptCore-4.0.JavaScriptCore.WeakValue

    connect(sigName: "cleared", callback: WeakValue_ClearedSignalCallback): number
    on(sigName: "cleared", callback: WeakValue_ClearedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cleared", callback: WeakValue_ClearedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cleared", callback: WeakValue_ClearedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "cleared", ...args: any[]): void

    // Class property signals of JavaScriptCore-4.0.JavaScriptCore.WeakValue

    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class WeakValue extends GObject.Object {

    // Own properties of JavaScriptCore-4.0.JavaScriptCore.WeakValue

    static name: string
    static $gtype: GObject.GType<WeakValue>

    // Constructors of JavaScriptCore-4.0.JavaScriptCore.WeakValue

    constructor(config?: WeakValue_ConstructProps) 
    /**
     * Create a new #JSCWeakValue for the JavaScript value referenced by `value`.
     * @constructor 
     * @param value a #JSCValue
     */
    constructor(value: Value) 
    /**
     * Create a new #JSCWeakValue for the JavaScript value referenced by `value`.
     * @constructor 
     * @param value a #JSCValue
     */
    static new(value: Value): WeakValue
    _init(config?: WeakValue_ConstructProps): void
}

interface ClassClass {
}

abstract class ClassClass {

    // Own properties of JavaScriptCore-4.0.JavaScriptCore.ClassClass

    static name: string
}

interface ClassVTable {

    // Own fields of JavaScriptCore-4.0.JavaScriptCore.ClassVTable

    /**
     * a #JSCClassGetPropertyFunction for getting a property.
     * @field 
     */
    getProperty: ClassGetPropertyFunction
    /**
     * a #JSCClassSetPropertyFunction for setting a property.
     * @field 
     */
    setProperty: ClassSetPropertyFunction
    /**
     * a #JSCClassHasPropertyFunction for querying a property.
     * @field 
     */
    hasProperty: ClassHasPropertyFunction
    /**
     * a #JSCClassDeletePropertyFunction for deleting a property.
     * @field 
     */
    deleteProperty: ClassDeletePropertyFunction
    /**
     * a #JSCClassEnumeratePropertiesFunction for enumerating properties.
     * @field 
     */
    enumerateProperties: ClassEnumeratePropertiesFunction
}

/**
 * Virtual table for a JSCClass. This can be optionally used when registering a #JSCClass in a #JSCContext
 * to provide a custom implementation for the class. All virtual functions are optional and can be set to
 * %NULL to fallback to the default implementation.
 * @record 
 */
class ClassVTable {

    // Own properties of JavaScriptCore-4.0.JavaScriptCore.ClassVTable

    static name: string
}

interface ContextClass {

    // Own fields of JavaScriptCore-4.0.JavaScriptCore.ContextClass

    parentClass: GObject.ObjectClass
}

abstract class ContextClass {

    // Own properties of JavaScriptCore-4.0.JavaScriptCore.ContextClass

    static name: string
}

interface ContextPrivate {
}

class ContextPrivate {

    // Own properties of JavaScriptCore-4.0.JavaScriptCore.ContextPrivate

    static name: string
}

interface ExceptionClass {

    // Own fields of JavaScriptCore-4.0.JavaScriptCore.ExceptionClass

    parentClass: GObject.ObjectClass
}

abstract class ExceptionClass {

    // Own properties of JavaScriptCore-4.0.JavaScriptCore.ExceptionClass

    static name: string
}

interface ExceptionPrivate {
}

class ExceptionPrivate {

    // Own properties of JavaScriptCore-4.0.JavaScriptCore.ExceptionPrivate

    static name: string
}

interface ValueClass {

    // Own fields of JavaScriptCore-4.0.JavaScriptCore.ValueClass

    parentClass: GObject.ObjectClass
}

abstract class ValueClass {

    // Own properties of JavaScriptCore-4.0.JavaScriptCore.ValueClass

    static name: string
}

interface ValuePrivate {
}

class ValuePrivate {

    // Own properties of JavaScriptCore-4.0.JavaScriptCore.ValuePrivate

    static name: string
}

interface VirtualMachineClass {

    // Own fields of JavaScriptCore-4.0.JavaScriptCore.VirtualMachineClass

    parentClass: GObject.ObjectClass
}

abstract class VirtualMachineClass {

    // Own properties of JavaScriptCore-4.0.JavaScriptCore.VirtualMachineClass

    static name: string
}

interface VirtualMachinePrivate {
}

class VirtualMachinePrivate {

    // Own properties of JavaScriptCore-4.0.JavaScriptCore.VirtualMachinePrivate

    static name: string
}

interface WeakValueClass {

    // Own fields of JavaScriptCore-4.0.JavaScriptCore.WeakValueClass

    parentClass: GObject.ObjectClass
}

abstract class WeakValueClass {

    // Own properties of JavaScriptCore-4.0.JavaScriptCore.WeakValueClass

    static name: string
}

interface WeakValuePrivate {
}

class WeakValuePrivate {

    // Own properties of JavaScriptCore-4.0.JavaScriptCore.WeakValuePrivate

    static name: string
}

}
export default JavaScriptCore;