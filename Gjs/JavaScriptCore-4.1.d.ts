// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * JavaScriptCore-4.1
 */

import type * as Gjs from './Gjs';
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
function get_major_version(): number
/**
 * Returns the micro version number of the JavaScriptCore library.
 * (e.g. in JavaScriptCore version 1.8.3 this is 3.)
 * 
 * This function is in the library, so it represents the JavaScriptCore library
 * your code is running against. Contrast with the #JSC_MICRO_VERSION
 * macro, which represents the micro version of the JavaScriptCore headers you
 * have included when compiling your code.
 */
function get_micro_version(): number
/**
 * Returns the minor version number of the JavaScriptCore library.
 * (e.g. in JavaScriptCore version 1.8.3 this is 8.)
 * 
 * This function is in the library, so it represents the JavaScriptCore library
 * your code is running against. Contrast with the #JSC_MINOR_VERSION
 * macro, which represents the minor version of the JavaScriptCore headers you
 * have included when compiling your code.
 */
function get_minor_version(): number
/**
 * Iterates all available options calling `function` for each one. Iteration can
 * stop early if `function` returns %FALSE.
 * @param function_ a #JSCOptionsFunc callback
 */
function options_foreach(function_: OptionsFunc): void
/**
 * Get `option` as a #gboolean value.
 * @param option the option identifier
 */
function options_get_boolean(option: string): [ /* returnType */ boolean, /* value */ boolean ]
/**
 * Get `option` as a #gdouble value.
 * @param option the option identifier
 */
function options_get_double(option: string): [ /* returnType */ boolean, /* value */ number ]
/**
 * Get `option` as a #gint value.
 * @param option the option identifier
 */
function options_get_int(option: string): [ /* returnType */ boolean, /* value */ number ]
/**
 * Create a #GOptionGroup to handle JSCOptions as command line arguments.
 * The options will be exposed as command line arguments with the form
 * <emphasis>--jsc-&lt;option&gt;=&lt;value&gt;</emphasis>.
 * Each entry in the returned #GOptionGroup is configured to apply the
 * corresponding option during command line parsing. Applications only need to
 * pass the returned group to g_option_context_add_group(), and the rest will
 * be taken care for automatically.
 */
function options_get_option_group(): GLib.OptionGroup
/**
 * Get `option` as a range string. The string must be in the
 * format <emphasis>[!]&lt;low&gt;[:&lt;high&gt;]</emphasis> where low and high are #guint values.
 * Values between low and high (both included) will be considered in
 * the range, unless <emphasis>!</emphasis> is used to invert the range.
 * @param option the option identifier
 */
function options_get_range_string(option: string): [ /* returnType */ boolean, /* value */ string ]
/**
 * Get `option` as a #gsize value.
 * @param option the option identifier
 */
function options_get_size(option: string): [ /* returnType */ boolean, /* value */ number ]
/**
 * Get `option` as a string.
 * @param option the option identifier
 */
function options_get_string(option: string): [ /* returnType */ boolean, /* value */ string ]
/**
 * Get `option` as a #guint value.
 * @param option the option identifier
 */
function options_get_uint(option: string): [ /* returnType */ boolean, /* value */ number ]
/**
 * Set `option` as a #gboolean value.
 * @param option the option identifier
 * @param value the value to set
 */
function options_set_boolean(option: string, value: boolean): boolean
/**
 * Set `option` as a #gdouble value.
 * @param option the option identifier
 * @param value the value to set
 */
function options_set_double(option: string, value: number): boolean
/**
 * Set `option` as a #gint value.
 * @param option the option identifier
 * @param value the value to set
 */
function options_set_int(option: string, value: number): boolean
/**
 * Set `option` as a range string. The string must be in the
 * format <emphasis>[!]&lt;low&gt;[:&lt;high&gt;]</emphasis> where low and high are #guint values.
 * Values between low and high (both included) will be considered in
 * the range, unless <emphasis>!</emphasis> is used to invert the range.
 * @param option the option identifier
 * @param value the value to set
 */
function options_set_range_string(option: string, value: string): boolean
/**
 * Set `option` as a #gsize value.
 * @param option the option identifier
 * @param value the value to set
 */
function options_set_size(option: string, value: number): boolean
/**
 * Set `option` as a string.
 * @param option the option identifier
 * @param value the value to set
 */
function options_set_string(option: string, value: string): boolean
/**
 * Set `option` as a #guint value.
 * @param option the option identifier
 * @param value the value to set
 */
function options_set_uint(option: string, value: number): boolean
/**
 * The type of delete_property in #JSCClassVTable. This is only required when you need to handle
 * external properties not added to the prototype.
 * @callback 
 * @param jsc_class a #JSCClass
 * @param context a #JSCContext
 * @param instance the `jsc_class` instance
 * @param name the property name
 */
interface ClassDeletePropertyFunction {
    (jsc_class: Class, context: Context, instance: object | null, name: string): boolean
}
/**
 * The type of enumerate_properties in #JSCClassVTable. This is only required when you need to handle
 * external properties not added to the prototype.
 * @callback 
 * @param jsc_class a #JSCClass
 * @param context a #JSCContext
 * @param instance the `jsc_class` instance
 */
interface ClassEnumeratePropertiesFunction {
    (jsc_class: Class, context: Context, instance: object | null): string[] | null
}
/**
 * The type of get_property in #JSCClassVTable. This is only required when you need to handle
 * external properties not added to the prototype.
 * @callback 
 * @param jsc_class a #JSCClass
 * @param context a #JSCContext
 * @param instance the `jsc_class` instance
 * @param name the property name
 */
interface ClassGetPropertyFunction {
    (jsc_class: Class, context: Context, instance: object | null, name: string): Value | null
}
/**
 * The type of has_property in #JSCClassVTable. This is only required when you need to handle
 * external properties not added to the prototype.
 * @callback 
 * @param jsc_class a #JSCClass
 * @param context a #JSCContext
 * @param instance the `jsc_class` instance
 * @param name the property name
 */
interface ClassHasPropertyFunction {
    (jsc_class: Class, context: Context, instance: object | null, name: string): boolean
}
/**
 * The type of set_property in #JSCClassVTable. This is only required when you need to handle
 * external properties not added to the prototype.
 * @callback 
 * @param jsc_class a #JSCClass
 * @param context a #JSCContext
 * @param instance the `jsc_class` instance
 * @param name the property name
 * @param value the #JSCValue to set
 */
interface ClassSetPropertyFunction {
    (jsc_class: Class, context: Context, instance: object | null, name: string, value: Value): boolean
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

    // Own constructor properties of JavaScriptCore-4.1.JavaScriptCore.Class

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

    // Own properties of JavaScriptCore-4.1.JavaScriptCore.Class

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

    // Owm methods of JavaScriptCore-4.1.JavaScriptCore.Class

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
     * @param return_type the #GType of the constructor return value
     */
    add_constructor_variadic(name: string | null, callback: GObject.Callback, return_type: GObject.GType): Value
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
     * @param return_type the #GType of the constructor return value
     * @param parameter_types a list of #GType<!-- -->s, one for each parameter, or %NULL
     */
    add_constructor(name: string | null, callback: GObject.Callback, return_type: GObject.GType, parameter_types: GObject.GType[] | null): Value
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
     * @param return_type the #GType of the method return value, or %G_TYPE_NONE if the method is void.
     */
    add_method_variadic(name: string, callback: GObject.Callback, return_type: GObject.GType): void
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
     * @param return_type the #GType of the method return value, or %G_TYPE_NONE if the method is void.
     * @param parameter_types a list of #GType<!-- -->s, one for each parameter, or %NULL
     */
    add_method(name: string, callback: GObject.Callback, return_type: GObject.GType, parameter_types: GObject.GType[] | null): void
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
     * @param property_type the #GType of the property value
     * @param getter a #GCallback to be called to get the property value
     * @param setter a #GCallback to be called to set the property value
     */
    add_property(name: string, property_type: GObject.GType, getter: GObject.Callback | null, setter: GObject.Callback | null): void
    /**
     * Get the class name of `jsc_class`
     */
    get_name(): string
    /**
     * Get the parent class of `jsc_class`
     */
    get_parent(): Class

    // Class property signals of JavaScriptCore-4.1.JavaScriptCore.Class

    connect(sigName: "notify::context", callback: (($obj: Class, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: (($obj: Class, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Class, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Class, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Class, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Class, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Class extends GObject.Object {

    // Own properties of JavaScriptCore-4.1.JavaScriptCore.Class

    static name: string
    static $gtype: GObject.GType<Class>

    // Constructors of JavaScriptCore-4.1.JavaScriptCore.Class

    constructor(config?: Class_ConstructProps) 
    _init(config?: Class_ConstructProps): void
}

interface Context_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of JavaScriptCore-4.1.JavaScriptCore.Context

    /**
     * The #JSCVirtualMachine in which the context was created.
     */
    virtual_machine?: VirtualMachine | null
}

interface Context {

    // Own properties of JavaScriptCore-4.1.JavaScriptCore.Context

    /**
     * The #JSCVirtualMachine in which the context was created.
     */
    readonly virtual_machine: VirtualMachine

    // Own fields of JavaScriptCore-4.1.JavaScriptCore.Context

    parent: GObject.Object

    // Owm methods of JavaScriptCore-4.1.JavaScriptCore.Context

    /**
     * Check the given `code` in `context` for syntax errors. The `line_number` is the starting line number in `uri;`
     * the value is one-based so the first line is 1. `uri` and `line_number` are only used to fill the `exception`.
     * In case of errors `exception` will be set to a new #JSCException with the details. You can pass %NULL to
     * `exception` to ignore the error details.
     * @param code a JavaScript script to check
     * @param length length of `code,` or -1 if `code` is a nul-terminated string
     * @param mode a #JSCCheckSyntaxMode
     * @param uri the source URI
     * @param line_number the starting line number
     */
    check_syntax(code: string, length: number, mode: CheckSyntaxMode, uri: string, line_number: number): [ /* returnType */ CheckSyntaxResult, /* exception */ Exception ]
    /**
     * Clear the uncaught exception in `context` if any.
     */
    clear_exception(): void
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
     * @param object_instance an object instance
     * @param object_class a #JSCClass or %NULL to use the default
     * @param uri the source URI
     * @param line_number the starting line number
     */
    evaluate_in_object(code: string, length: number, object_instance: object | null, object_class: Class | null, uri: string, line_number: number): [ /* returnType */ Value, /* object */ Value ]
    /**
     * Evaluate `code` in `context` using `uri` as the source URI. The `line_number` is the starting line number
     * in `uri;` the value is one-based so the first line is 1. `uri` and `line_number` will be shown in exceptions and
     * they don't affect the behavior of the script.
     * @param code a JavaScript script to evaluate
     * @param length length of `code,` or -1 if `code` is a nul-terminated string
     * @param uri the source URI
     * @param line_number the starting line number
     */
    evaluate_with_source_uri(code: string, length: number, uri: string, line_number: number): Value
    /**
     * Get the last unhandled exception thrown in `context` by API functions calls.
     */
    get_exception(): Exception | null
    /**
     * Get a #JSCValue referencing the `context` global object
     */
    get_global_object(): Value
    /**
     * Get a property of `context` global object with `name`.
     * @param name the value name
     */
    get_value(name: string): Value
    /**
     * Get the #JSCVirtualMachine where `context` was created.
     */
    get_virtual_machine(): VirtualMachine
    /**
     * Remove the last #JSCExceptionHandler previously pushed to `context` with
     * jsc_context_push_exception_handler().
     */
    pop_exception_handler(): void
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
    push_exception_handler(handler: ExceptionHandler): void
    /**
     * Register a custom class in `context` using the given `name`. If the new class inherits from
     * another #JSCClass, the parent should be passed as `parent_class,` otherwise %NULL should be
     * used. The optional `vtable` parameter allows to provide a custom implementation for handling
     * the class, for example, to handle external properties not added to the prototype.
     * When an instance of the #JSCClass is cleared in the context, `destroy_notify` is called with
     * the instance as parameter.
     * @param name the class name
     * @param parent_class a #JSCClass or %NULL
     * @param vtable an optional #JSCClassVTable or %NULL
     * @param destroy_notify a destroy notifier for class instances
     */
    register_class(name: string, parent_class: Class | null, vtable: ClassVTable | null, destroy_notify: GLib.DestroyNotify | null): Class
    /**
     * Set a property of `context` global object with `name` and `value`.
     * @param name the value name
     * @param value a #JSCValue
     */
    set_value(name: string, value: Value): void
    /**
     * Throw an exception to `context` using the given error message. The created #JSCException
     * can be retrieved with jsc_context_get_exception().
     * @param error_message an error message
     */
    throw(error_message: string): void
    /**
     * Throw `exception` to `context`.
     * @param exception a #JSCException
     */
    throw_exception(exception: Exception): void
    /**
     * Throw an exception to `context` using the given error name and message. The created #JSCException
     * can be retrieved with jsc_context_get_exception().
     * @param error_name the error name
     * @param error_message an error message
     */
    throw_with_name(error_name: string, error_message: string): void

    // Class property signals of JavaScriptCore-4.1.JavaScriptCore.Context

    connect(sigName: "notify::virtual-machine", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::virtual-machine", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::virtual-machine", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Context extends GObject.Object {

    // Own properties of JavaScriptCore-4.1.JavaScriptCore.Context

    static name: string
    static $gtype: GObject.GType<Context>

    // Constructors of JavaScriptCore-4.1.JavaScriptCore.Context

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
    static new_with_virtual_machine(vm: VirtualMachine): Context
    _init(config?: Context_ConstructProps): void
    /**
     * Get the #JSCContext that is currently executing a function. This should only be
     * called within a function or method callback, otherwise %NULL will be returned.
     */
    static get_current(): Context | null
}

interface Exception_ConstructProps extends GObject.Object_ConstructProps {
}

interface Exception {

    // Own fields of JavaScriptCore-4.1.JavaScriptCore.Exception

    parent: GObject.Object

    // Owm methods of JavaScriptCore-4.1.JavaScriptCore.Exception

    /**
     * Get a string with the exception backtrace.
     */
    get_backtrace_string(): string | null
    /**
     * Get the column number at which `exception` happened.
     */
    get_column_number(): number
    /**
     * Get the line number at which `exception` happened.
     */
    get_line_number(): number
    /**
     * Get the error message of `exception`.
     */
    get_message(): string
    /**
     * Get the error name of `exception`
     */
    get_name(): string
    /**
     * Get the source URI of `exception`.
     */
    get_source_uri(): string | null
    /**
     * Return a report message of `exception,` containing all the possible details such us
     * source URI, line, column and backtrace, and formatted to be printed.
     */
    report(): string
    /**
     * Get the string representation of `exception` error.
     */
    to_string(): string

    // Class property signals of JavaScriptCore-4.1.JavaScriptCore.Exception

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Exception extends GObject.Object {

    // Own properties of JavaScriptCore-4.1.JavaScriptCore.Exception

    static name: string
    static $gtype: GObject.GType<Exception>

    // Constructors of JavaScriptCore-4.1.JavaScriptCore.Exception

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
    static new_with_name(context: Context, name: string, message: string): Exception
    _init(config?: Exception_ConstructProps): void
}

interface Value_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of JavaScriptCore-4.1.JavaScriptCore.Value

    /**
     * The #JSCContext in which the value was created.
     */
    context?: Context | null
}

interface Value {

    // Own properties of JavaScriptCore-4.1.JavaScriptCore.Value

    /**
     * The #JSCContext in which the value was created.
     */
    readonly context: Context

    // Own fields of JavaScriptCore-4.1.JavaScriptCore.Value

    parent: GObject.Object

    // Owm methods of JavaScriptCore-4.1.JavaScriptCore.Value

    /**
     * Invoke <function>new</function> with constructor referenced by `value`. If `n_parameters`
     * is 0 no parameters will be passed to the constructor.
     * @param parameters the #JSCValue<!-- -->s to pass as parameters to the constructor, or %NULL
     */
    constructor_call(parameters: Value[] | null): Value
    /**
     * Call function referenced by `value,` passing the given `parameters`. If `n_parameters`
     * is 0 no parameters will be passed to the function.
     * 
     * This function always returns a #JSCValue, in case of void functions a #JSCValue referencing
     * <function>undefined</function> is returned
     * @param parameters the #JSCValue<!-- -->s to pass as parameters to the function, or %NULL
     */
    function_call(parameters: Value[] | null): Value
    /**
     * Get the #JSCContext in which `value` was created.
     */
    get_context(): Context
    /**
     * Get whether the value referenced by `value` is an array.
     */
    is_array(): boolean
    /**
     * Get whether the value referenced by `value` is a boolean.
     */
    is_boolean(): boolean
    /**
     * Get whether the value referenced by `value` is a constructor.
     */
    is_constructor(): boolean
    /**
     * Get whether the value referenced by `value` is a function
     */
    is_function(): boolean
    /**
     * Get whether the value referenced by `value` is <function>null</function>.
     */
    is_null(): boolean
    /**
     * Get whether the value referenced by `value` is a number.
     */
    is_number(): boolean
    /**
     * Get whether the value referenced by `value` is an object.
     */
    is_object(): boolean
    /**
     * Get whether the value referenced by `value` is a string
     */
    is_string(): boolean
    /**
     * Get whether the value referenced by `value` is <function>undefined</function>.
     */
    is_undefined(): boolean
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
     * @param property_name the name of the property to define
     * @param flags #JSCValuePropertyFlags
     * @param property_type the #GType of the property
     * @param getter a #GCallback to be called to get the property value
     * @param setter a #GCallback to be called to set the property value
     */
    object_define_property_accessor(property_name: string, flags: ValuePropertyFlags, property_type: GObject.GType, getter: GObject.Callback | null, setter: GObject.Callback | null): void
    /**
     * Define or modify a property with `property_name` in object referenced by `value`. This is equivalent to
     * JavaScript <function>Object.defineProperty()</function> when used with a data descriptor.
     * @param property_name the name of the property to define
     * @param flags #JSCValuePropertyFlags
     * @param property_value the default property value
     */
    object_define_property_data(property_name: string, flags: ValuePropertyFlags, property_value: Value | null): void
    /**
     * Try to delete property with `name` from `value`. This function will return %FALSE if
     * the property was defined without %JSC_VALUE_PROPERTY_CONFIGURABLE flag.
     * @param name the property name
     */
    object_delete_property(name: string): boolean
    /**
     * Get the list of property names of `value`. Only properties defined with %JSC_VALUE_PROPERTY_ENUMERABLE
     * flag will be collected.
     */
    object_enumerate_properties(): string[] | null
    /**
     * Get property with `name` from `value`.
     * @param name the property name
     */
    object_get_property(name: string): Value
    /**
     * Get property at `index` from `value`.
     * @param index the property index
     */
    object_get_property_at_index(index: number): Value
    /**
     * Get whether `value` has property with `name`.
     * @param name the property name
     */
    object_has_property(name: string): boolean
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
    object_invoke_method(name: string, parameters: Value[] | null): Value
    /**
     * Get whether the value referenced by `value` is an instance of class `name`.
     * @param name a class name
     */
    object_is_instance_of(name: string): boolean
    /**
     * Set `property` with `name` on `value`.
     * @param name the property name
     * @param property the #JSCValue to set
     */
    object_set_property(name: string, property: Value): void
    /**
     * Set `property` at `index` on `value`.
     * @param index the property index
     * @param property the #JSCValue to set
     */
    object_set_property_at_index(index: number, property: Value): void
    /**
     * Convert `value` to a boolean.
     */
    to_boolean(): boolean
    /**
     * Convert `value` to a double.
     */
    to_double(): number
    /**
     * Convert `value` to a #gint32.
     */
    to_int32(): number
    /**
     * Create a JSON string of `value` serialization. If `indent` is 0, the resulting JSON will
     * not contain newlines. The size of the indent is clamped to 10 spaces.
     * @param indent The number of spaces to indent when nesting.
     */
    to_json(indent: number): string
    /**
     * Convert `value` to a string. Use jsc_value_to_string_as_bytes() instead, if you need to
     * handle strings containing null characters.
     */
    to_string(): string
    /**
     * Convert `value` to a string and return the results as #GBytes. This is needed
     * to handle strings with null characters.
     */
    to_string_as_bytes(): GLib.Bytes

    // Class property signals of JavaScriptCore-4.1.JavaScriptCore.Value

    connect(sigName: "notify::context", callback: (($obj: Value, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: (($obj: Value, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Value extends GObject.Object {

    // Own properties of JavaScriptCore-4.1.JavaScriptCore.Value

    static name: string
    static $gtype: GObject.GType<Value>

    // Constructors of JavaScriptCore-4.1.JavaScriptCore.Value

    constructor(config?: Value_ConstructProps) 
    /**
     * Create a new #JSCValue referencing an array with the items from `array`. If `array`
     * is %NULL or empty a new empty array will be created. Elements of `array` should be
     * pointers to a #JSCValue.
     * @constructor 
     * @param context a #JSCContext
     * @param array a #GPtrArray
     */
    static new_array_from_garray(context: Context, array: Value[] | null): Value
    /**
     * Create a new #JSCValue referencing an array of strings with the items from `strv`. If `array`
     * is %NULL or empty a new empty array will be created.
     * @constructor 
     * @param context a #JSCContext
     * @param strv a %NULL-terminated array of strings
     */
    static new_array_from_strv(context: Context, strv: string[]): Value
    /**
     * Create a new #JSCValue from `value`
     * @constructor 
     * @param context a #JSCContext
     * @param value a #gboolean
     */
    static new_boolean(context: Context, value: boolean): Value
    /**
     * Create a new #JSCValue referencing a new value created by parsing `json`.
     * @constructor 
     * @param context a #JSCContext
     * @param json the JSON string to be parsed
     */
    static new_from_json(context: Context, json: string): Value
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
     * @param return_type the #GType of the function return value, or %G_TYPE_NONE if the function is void.
     */
    static new_function_variadic(context: Context, name: string | null, callback: GObject.Callback, return_type: GObject.GType): Value
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
     * @param return_type the #GType of the function return value, or %G_TYPE_NONE if the function is void.
     * @param parameter_types a list of #GType<!-- -->s, one for each parameter, or %NULL
     */
    static new_function(context: Context, name: string | null, callback: GObject.Callback, return_type: GObject.GType, parameter_types: GObject.GType[] | null): Value
    /**
     * Create a new #JSCValue referencing <function>null</function> in `context`.
     * @constructor 
     * @param context a #JSCContext
     */
    static new_null(context: Context): Value
    /**
     * Create a new #JSCValue from `number`.
     * @constructor 
     * @param context a #JSCContext
     * @param number a number
     */
    static new_number(context: Context, number: number): Value
    /**
     * Create a new #JSCValue from `instance`. If `instance` is %NULL a new empty object is created.
     * When `instance` is provided, `jsc_class` must be provided too. `jsc_class` takes ownership of
     * `instance` that will be freed by the #GDestroyNotify passed to jsc_context_register_class().
     * @constructor 
     * @param context a #JSCContext
     * @param instance an object instance or %NULL
     * @param jsc_class the #JSCClass of `instance`
     */
    static new_object(context: Context, instance: object | null, jsc_class: Class | null): Value
    /**
     * Create a new #JSCValue from `string`. If you need to create a #JSCValue from a
     * string containing null characters, use jsc_value_new_string_from_bytes() instead.
     * @constructor 
     * @param context a #JSCContext
     * @param string a null-terminated string
     */
    static new_string(context: Context, string: string | null): Value
    /**
     * Create a new #JSCValue from `bytes`.
     * @constructor 
     * @param context a #JSCContext
     * @param bytes a #GBytes
     */
    static new_string_from_bytes(context: Context, bytes: GLib.Bytes | null): Value
    /**
     * Create a new #JSCValue referencing <function>undefined</function> in `context`.
     * @constructor 
     * @param context a #JSCContext
     */
    static new_undefined(context: Context): Value
    _init(config?: Value_ConstructProps): void
}

interface VirtualMachine_ConstructProps extends GObject.Object_ConstructProps {
}

interface VirtualMachine {

    // Own fields of JavaScriptCore-4.1.JavaScriptCore.VirtualMachine

    parent: GObject.Object

    // Class property signals of JavaScriptCore-4.1.JavaScriptCore.VirtualMachine

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class VirtualMachine extends GObject.Object {

    // Own properties of JavaScriptCore-4.1.JavaScriptCore.VirtualMachine

    static name: string
    static $gtype: GObject.GType<VirtualMachine>

    // Constructors of JavaScriptCore-4.1.JavaScriptCore.VirtualMachine

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

    // Own constructor properties of JavaScriptCore-4.1.JavaScriptCore.WeakValue

    /**
     * The #JSCValue referencing the JavaScript value.
     */
    value?: Value | null
}

/**
 * Signal callback interface for `cleared`
 */
interface WeakValue_ClearedSignalCallback {
    ($obj: WeakValue): void
}

interface WeakValue {

    // Own properties of JavaScriptCore-4.1.JavaScriptCore.WeakValue

    /**
     * The #JSCValue referencing the JavaScript value.
     */
    readonly value: Value

    // Own fields of JavaScriptCore-4.1.JavaScriptCore.WeakValue

    parent: GObject.Object

    // Owm methods of JavaScriptCore-4.1.JavaScriptCore.WeakValue

    /**
     * Get a #JSCValue referencing the JavaScript value of `weak_value`.
     */
    get_value(): Value

    // Own signals of JavaScriptCore-4.1.JavaScriptCore.WeakValue

    connect(sigName: "cleared", callback: WeakValue_ClearedSignalCallback): number
    connect_after(sigName: "cleared", callback: WeakValue_ClearedSignalCallback): number
    emit(sigName: "cleared", ...args: any[]): void

    // Class property signals of JavaScriptCore-4.1.JavaScriptCore.WeakValue

    connect(sigName: "notify::value", callback: (($obj: WeakValue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: WeakValue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WeakValue extends GObject.Object {

    // Own properties of JavaScriptCore-4.1.JavaScriptCore.WeakValue

    static name: string
    static $gtype: GObject.GType<WeakValue>

    // Constructors of JavaScriptCore-4.1.JavaScriptCore.WeakValue

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

    // Own properties of JavaScriptCore-4.1.JavaScriptCore.ClassClass

    static name: string
}

interface ClassVTable {

    // Own fields of JavaScriptCore-4.1.JavaScriptCore.ClassVTable

    /**
     * a #JSCClassGetPropertyFunction for getting a property.
     * @field 
     */
    get_property: ClassGetPropertyFunction
    /**
     * a #JSCClassSetPropertyFunction for setting a property.
     * @field 
     */
    set_property: ClassSetPropertyFunction
    /**
     * a #JSCClassHasPropertyFunction for querying a property.
     * @field 
     */
    has_property: ClassHasPropertyFunction
    /**
     * a #JSCClassDeletePropertyFunction for deleting a property.
     * @field 
     */
    delete_property: ClassDeletePropertyFunction
    /**
     * a #JSCClassEnumeratePropertiesFunction for enumerating properties.
     * @field 
     */
    enumerate_properties: ClassEnumeratePropertiesFunction
}

/**
 * Virtual table for a JSCClass. This can be optionally used when registering a #JSCClass in a #JSCContext
 * to provide a custom implementation for the class. All virtual functions are optional and can be set to
 * %NULL to fallback to the default implementation.
 * @record 
 */
class ClassVTable {

    // Own properties of JavaScriptCore-4.1.JavaScriptCore.ClassVTable

    static name: string
}

interface ContextClass {

    // Own fields of JavaScriptCore-4.1.JavaScriptCore.ContextClass

    parent_class: GObject.ObjectClass
}

abstract class ContextClass {

    // Own properties of JavaScriptCore-4.1.JavaScriptCore.ContextClass

    static name: string
}

interface ContextPrivate {
}

class ContextPrivate {

    // Own properties of JavaScriptCore-4.1.JavaScriptCore.ContextPrivate

    static name: string
}

interface ExceptionClass {

    // Own fields of JavaScriptCore-4.1.JavaScriptCore.ExceptionClass

    parent_class: GObject.ObjectClass
}

abstract class ExceptionClass {

    // Own properties of JavaScriptCore-4.1.JavaScriptCore.ExceptionClass

    static name: string
}

interface ExceptionPrivate {
}

class ExceptionPrivate {

    // Own properties of JavaScriptCore-4.1.JavaScriptCore.ExceptionPrivate

    static name: string
}

interface ValueClass {

    // Own fields of JavaScriptCore-4.1.JavaScriptCore.ValueClass

    parent_class: GObject.ObjectClass
}

abstract class ValueClass {

    // Own properties of JavaScriptCore-4.1.JavaScriptCore.ValueClass

    static name: string
}

interface ValuePrivate {
}

class ValuePrivate {

    // Own properties of JavaScriptCore-4.1.JavaScriptCore.ValuePrivate

    static name: string
}

interface VirtualMachineClass {

    // Own fields of JavaScriptCore-4.1.JavaScriptCore.VirtualMachineClass

    parent_class: GObject.ObjectClass
}

abstract class VirtualMachineClass {

    // Own properties of JavaScriptCore-4.1.JavaScriptCore.VirtualMachineClass

    static name: string
}

interface VirtualMachinePrivate {
}

class VirtualMachinePrivate {

    // Own properties of JavaScriptCore-4.1.JavaScriptCore.VirtualMachinePrivate

    static name: string
}

interface WeakValueClass {

    // Own fields of JavaScriptCore-4.1.JavaScriptCore.WeakValueClass

    parent_class: GObject.ObjectClass
}

abstract class WeakValueClass {

    // Own properties of JavaScriptCore-4.1.JavaScriptCore.WeakValueClass

    static name: string
}

interface WeakValuePrivate {
}

class WeakValuePrivate {

    // Own properties of JavaScriptCore-4.1.JavaScriptCore.WeakValuePrivate

    static name: string
}

}
export default JavaScriptCore;